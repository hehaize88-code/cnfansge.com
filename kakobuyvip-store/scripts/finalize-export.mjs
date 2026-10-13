import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

// Next's shared static root layout cannot infer the locale from a nested route.
// Set the correct language in exported HTML before Cloudflare publishes it.
let count = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith(".html")) {
      const route = relative("out", path).split(sep).join("/");
      const lang = route.match(/^(de|es|fr|it)(?:\/|\.html$)/)?.[1] ?? "en";
      const html = await readFile(path, "utf8");
      if (!/<html\b[^>]*\blang="[^"]*"/.test(html)) throw new Error(`Missing HTML language: ${route}`);
      await writeFile(path, html.replace(/(<html\b[^>]*\blang=")[^"]*(")/, `$1${lang}$2`));
      count++;
    }
  }
}
await walk("out");
console.log(`Finalized language attributes for ${count} HTML pages.`);
