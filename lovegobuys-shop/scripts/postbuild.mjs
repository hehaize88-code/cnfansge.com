import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const languages = new Set(["en", "de", "es", "fr", "it"]);

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(target) : entry.name.endsWith(".html") ? [target] : [];
  }));
  return nested.flat();
}

for (const file of await htmlFiles(outputDirectory)) {
  const relative = path.relative(outputDirectory, file).split(path.sep);
  const language = relative[0].replace(/\.html$/, "");
  if (!languages.has(language)) continue;

  const source = await readFile(file, "utf8");
  const updated = source.replace(/<html lang="en"/, `<html lang="${language}"`);
  if (language !== "en" && updated === source) throw new Error(`Expected an English html tag in ${file}`);
  if (updated === source) continue;
  await writeFile(file, updated, "utf8");
}
