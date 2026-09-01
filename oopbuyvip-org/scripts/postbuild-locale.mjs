import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = fileURLToPath(new URL("../out/", import.meta.url));
const locales = ["en", "de", "es", "fr", "it"];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return extname(entry.name) === ".html" ? [path] : [];
  }));
  return nested.flat();
}

for (const locale of locales) {
  const directory = join(outputRoot, locale);
  for (const file of await htmlFiles(directory)) {
    const html = await readFile(file, "utf8");
    const localized = html.replace(/<html lang="[^"]+"/, `<html lang="${locale}"`);
    if (localized !== html) await writeFile(file, localized);
  }

  const flatFile = join(outputRoot, `${locale}.html`);
  try {
    const html = await readFile(flatFile, "utf8");
    await writeFile(flatFile, html.replace(/<html lang="[^"]+"/, `<html lang="${locale}"`));
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}
