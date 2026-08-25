import { writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("translations", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const routes = [
  "/",
  "/spreadsheet",
  "/articles",
  "/faq",
  "/how-to-use",
  "/qc-photos",
  "/shipping-cost",
  "/warehouse-storage",
];
const sourceCopy = new Map();
const decode = (value) => value
  .replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, number) => String.fromCodePoint(Number(number)))
  .replace(/\s+/g, " ")
  .trim();

function remember(key, value, route) {
  if (!key || !value) return;
  const previous = sourceCopy.get(key);
  if (previous && previous !== value) {
    throw new Error(`Translation key conflict for ${key} on ${route}: "${previous}" versus "${value}"`);
  }
  sourceCopy.set(key, value);
}

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://translation.local${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Could not render ${route}: HTTP ${response.status}`);
  const html = await response.text();
  const elementPattern = /<([a-z][\w-]*)\b([^>]*\bdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi;
  for (const match of html.matchAll(elementPattern)) {
    remember(match[3], decode(match[4]), route);
  }
  const inputPattern = /<input\b([^>]*)>/gi;
  for (const match of html.matchAll(inputPattern)) {
    const key = match[1].match(/data-i18n-placeholder="([^"]+)"/i)?.[1];
    const placeholder = match[1].match(/placeholder="([^"]*)"/i)?.[1];
    if (key && placeholder) remember(key, decode(placeholder), route);
  }
}

const entries = [...sourceCopy.entries()].sort(([a], [b]) => a.localeCompare(b));
const languages = ["de", "fr", "es", "it", "pl"];
const delimiter = "[[[SPLIT_X9Q]]]";

function makeBatches(items, maxCharacters = 4300) {
  const batches = [];
  let batch = [];
  let size = 0;
  for (const item of items) {
    const nextSize = item[1].length + delimiter.length + 2;
    if (batch.length && size + nextSize > maxCharacters) {
      batches.push(batch);
      batch = [];
      size = 0;
    }
    batch.push(item);
    size += nextSize;
  }
  if (batch.length) batches.push(batch);
  return batches;
}

async function translateBatch(batch, language, attempt = 1) {
  const query = batch.map(([, value]) => value).join(`\n${delimiter}\n`);
  try {
    const { stdout } = await execFileAsync("curl", [
      "--silent",
      "--show-error",
      "--fail",
      "--max-time", "30",
      "--get",
      "https://translate.google.com/translate_a/single",
      "--data-urlencode", "client=gtx",
      "--data-urlencode", "sl=en",
      "--data-urlencode", `tl=${language}`,
      "--data-urlencode", "dt=t",
      "--data-urlencode", `q=${query}`,
    ], { maxBuffer: 2 * 1024 * 1024 });
    const payload = JSON.parse(stdout);
    const combined = payload[0].map((part) => part[0]).join("");
    const translated = combined.split(delimiter).map((value) => value.trim());
    if (translated.length !== batch.length) {
      throw new Error(`Expected ${batch.length} segments, received ${translated.length}`);
    }
    return batch.map(([key], index) => [key, translated[index]]);
  } catch (error) {
    if (attempt >= 7) throw new Error(`Translation failed for ${language}: ${error.message}`);
    const delay = Math.min(45000, 3000 * (2 ** (attempt - 1)));
    console.warn(`Retrying ${language} batch after ${error.message} in ${delay}ms...`);
    await new Promise((resolve) => setTimeout(resolve, delay));
    return translateBatch(batch, language, attempt + 1);
  }
}

const translatedCopy = Object.fromEntries(languages.map((language) => [language, {}]));
for (const language of languages) {
  const batches = makeBatches(entries);
  for (let index = 0; index < batches.length; index += 1) {
    const results = await translateBatch(batches[index], language);
    Object.assign(translatedCopy[language], Object.fromEntries(results));
    console.log(`${language}: translated batch ${index + 1}/${batches.length}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

const output = `// Generated from rendered English copy. Regenerate after adding translatable text.\nexport const generatedCopy: Record<string, Record<string, string>> = ${JSON.stringify(translatedCopy, null, 2)};\n`;
await writeFile(path.join(root, "app/generated-translations.ts"), output, "utf8");
console.log(`Generated ${entries.length} keys across ${languages.length} languages.`);
