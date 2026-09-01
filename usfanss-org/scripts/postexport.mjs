import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputRoot = join(process.cwd(), "out");
const languages = new Set(["en", "de", "es", "fr", "it"]);

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

for (const file of await htmlFiles(outputRoot)) {
  const relative = file.slice(outputRoot.length + 1).replaceAll("\\", "/");
  const firstSegment = relative.split("/")[0];
  const language = firstSegment.endsWith(".html")
    ? firstSegment.slice(0, -".html".length)
    : firstSegment;
  if (!languages.has(language)) continue;
  const html = await readFile(file, "utf8");
  const normalized = html
    .replace('<html lang="en">', `<html lang="${language}">`)
    .replaceAll('hrefLang=', 'hreflang=');
  await writeFile(file, normalized);
}
