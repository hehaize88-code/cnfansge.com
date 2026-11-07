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

// Build the sitemap from exported canonical pages so new locale articles cannot be omitted.
// Existing lastmod values remain stable unless page content was actually edited.
const oldXml = await readFile(join(outputRoot, 'sitemap.xml'), 'utf8');
const previousDates = new Map([...oldXml.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)].map(match => [match[1], match[2]]));
const origin = 'https://oopbuyvip.pro';
const changedSections = new Set(['', 'en', 'de', 'es', 'fr', 'it']);
for (const locale of locales) for (const section of ['qc', 'guide', 'articles', 'spreadsheet']) changedSections.add(`${locale}/${section}`);
const pages = new Map();
for (const file of await htmlFiles(outputRoot)) {
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  if (!canonical || !canonical[1].startsWith(origin) || /name="robots" content="[^"]*noindex/.test(html)) continue;
  const url = canonical[1];
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const articleDate = html.match(/"dateModified":"(\d{4}-\d{2}-\d{2})"/)?.[1];
  const date = articleDate || (changedSections.has(path) ? '2026-11-07' : previousDates.get(url));
  pages.set(url, date);
}
const escapeXml = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + [...pages].sort(([a], [b]) => a.localeCompare(b)).map(([url, date]) => `  <url><loc>${escapeXml(url)}</loc>${date ? `<lastmod>${date}</lastmod>` : ''}</url>`).join('\n') + '\n</urlset>\n';
await writeFile(join(outputRoot, 'sitemap.xml'), sitemap);
console.log(`Sitemap: ${pages.size} canonical URLs.`);
