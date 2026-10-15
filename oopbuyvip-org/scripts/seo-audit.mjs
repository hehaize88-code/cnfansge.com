import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../out/", import.meta.url);
const languages = ["en", "de", "es", "fr", "it"];
const articleSlugs = (await readdir(new URL("./en/articles/", root))).filter((file) => file.endsWith(".html")).map((file) => file.slice(0, -5));
const additions = { ...JSON.parse(await readFile(new URL("../app/new-articles-en.json", import.meta.url), "utf8")), ...JSON.parse(await readFile(new URL("../app/seo-expansion-en.json", import.meta.url), "utf8")) };
const allowedOutboundHosts = new Set(["oopbuyvip.org", "www.oopbuyvip.org", "cnfansge.com", "www.cnfansge.com"]);
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function outputPath(url) {
  const path = new URL(url).pathname.replace(/^\//, "").replace(/\/$/, "");
  return /\.[a-z0-9]+$/i.test(path) ? path : path ? `${path}.html` : "index.html";
}

function decodeHtml(value) {
  return value.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&#([0-9]+);/g, (_, number) => String.fromCodePoint(Number(number))).replace(/&amp;/g, "&").replace(/&quot;/g, '\"').replace(/&apos;/g, "'");
}

function textContent(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

const sitemap = await readFile(new URL("./sitemap.xml", root), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(urls.length === (8 + articleSlugs.length) * languages.length, `Unexpected sitemap URL count: ${urls.length}`);

for (const url of urls) {
  const path = new URL(url).pathname;
  const lang = path.split("/").filter(Boolean)[0];
  const html = await readFile(new URL(`./${outputPath(url)}`, root), "utf8");
  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const description = decodeHtml(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const hreflangs = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)"/g)].map((match) => match[1]);

  assert(languages.includes(lang), `${url}: missing supported language prefix`);
  assert(html.startsWith(`<!DOCTYPE html><html lang="${lang}"`) || html.includes(`<html lang="${lang}"`), `${url}: incorrect html lang`);
  assert(canonical === url, `${url}: canonical mismatch (${canonical ?? "missing"})`);
  assert(title.length > 0 && title.length <= 64, `${url}: title length ${title.length}`);
  assert(description.length > 0 && description.length <= 158, `${url}: description length ${description.length}`);
  assert(new Set(hreflangs).size === 6 && languages.every((code) => hreflangs.includes(code)) && hreflangs.includes("x-default"), `${url}: incomplete hreflang set`);
  assert((html.match(/<h1(?:\s|>)/g) ?? []).length === 1, `${url}: expected one H1`);
  assert(!html.includes("SearchAction") && !html.includes("potentialAction"), `${url}: retired search schema remains`);
  assert(!/8% of the (selected goods )?purchase price|8 % (du prix d'achat sélectionné|del precio de compra seleccionado|des ausgewählten Warenkaufpreises)|8% del prezzo di acquisto selezionato/i.test(textContent(html)), `${url}: obsolete goods-price fee claim remains`);

  if (path.split("/").filter(Boolean).length > 1) assert(html.includes("BreadcrumbList"), `${url}: missing BreadcrumbList`);
  if (/\/(spreadsheet|finds)$/.test(path)) assert(html.includes('"@type":"ItemList"'), `${url}: missing ItemList`);

  for (const match of html.matchAll(/href="(https?:\/\/[^"#]+)"/g)) {
    const host = new URL(match[1]).hostname.toLowerCase();
    assert(allowedOutboundHosts.has(host), `${url}: unapproved outbound link to ${host}`);
  }
}

assert(articleSlugs.length === 17, `Expected 17 article topics, got ${articleSlugs.length}`);
for (const lang of languages) {
  const listing = await readFile(new URL(`./${lang}/articles.html`, root), "utf8");
  const home = await readFile(new URL(`./${lang}.html`, root), "utf8");
  const sheet = await readFile(new URL(`./${lang}/spreadsheet.html`, root), "utf8");
  assert((home.match(/class="article-card /g) ?? []).length === 4, `${lang}: homepage must show 4 articles`);
  assert((listing.match(/class="article-card /g) ?? []).length === 17, `${lang}: directory must show all 17 articles`);
  assert(!/(673|949|602|580|958|931|585|670) g<\//.test(home + sheet), `${lang}: view counter remains as a weight`);
  const expansion = JSON.parse(await readFile(new URL(`../app/seo-expansion-${lang}.json`, import.meta.url), "utf8"));
  const englishExpansion = JSON.parse(await readFile(new URL("../app/seo-expansion-en.json", import.meta.url), "utf8"));
  assert(Object.keys(expansion).sort().join() === Object.keys(englishExpansion).sort().join(), `${lang}: new article set mismatch`);
  for (const [slug, article] of Object.entries(expansion)) {
    assert(article.sections.length === englishExpansion[slug].sections.length, `${lang}/${slug}: missing translated sections`);
    assert(article.sections.every((section, i) => section.paragraphs.length === englishExpansion[slug].sections[i].paragraphs.length), `${lang}/${slug}: missing translated paragraphs`);
    assert(article.published === "2026-10-15", `${lang}/${slug}: incorrect publication date`);
  }
}
for (const slug of articleSlugs) {
  for (const lang of languages) {
    const html = await readFile(new URL(`./${lang}/articles/${slug}.html`, root), "utf8");
    assert((html.match(/class="article-card /g) ?? []).length === 3, `/${lang}/articles/${slug}: expected 3 related cards`);
    const articleLinks = [...html.matchAll(/href="(\/[^"#?]+)"/g)].map(match => match[1]);
    for (const href of articleLinks) {
      const file = outputPath(`https://oopbuyvip.org${href}`);
      try { await readFile(new URL(`./${file}`, root)); } catch { failures.push(`${lang}/${slug}: broken internal link ${href}`); }
    }
    const body = html.match(/<article class="article-body section">([\s\S]*?)<\/article>/)?.[1] ?? "";
    const editorialBody = body.split('<section class="article-sources">')[0];
    const words = textContent(editorialBody).split(/\s+/).filter(Boolean).length;
    assert(words >= (lang === "en" || !additions[slug] ? 1200 : 900), `/${lang}/articles/${slug}: only ${words} words`);
    if (lang === "en") assert(words <= 1800, `/en/articles/${slug}: ${words} words exceeds 1800`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO audit passed: ${urls.length} URLs, 5 languages, ${articleSlugs.length * languages.length} complete article pages, approved outbound hosts only.`);

