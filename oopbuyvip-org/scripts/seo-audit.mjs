import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../out/", import.meta.url);
const languages = ["en", "de", "es", "fr", "it"];
const articleSlugs = ["oopbuy-spreadsheet-guide", "oopbuy-qc-checklist", "oopbuy-shipping-planning", "oopbuy-fees-total-cost", "is-oopbuy-legit-review", "oopbuy-order-status-interface-guide"];
const allowedOutboundHosts = new Set(["oopbuyvip.org", "www.oopbuyvip.org", "cnfansge.com", "www.cnfansge.com"]);
const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function outputPath(url) {
  const path = new URL(url).pathname.replace(/^\//, "").replace(/\/$/, "");
  return path ? `${path}.html` : "index.html";
}

function textContent(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
}

const sitemap = await readFile(new URL("./sitemap.xml", root), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(urls.length === 70, `Expected 70 sitemap URLs, found ${urls.length}`);

for (const url of urls) {
  const path = new URL(url).pathname;
  const lang = path.split("/").filter(Boolean)[0];
  const html = await readFile(new URL(`./${outputPath(url)}`, root), "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
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

for (const slug of articleSlugs) {
  for (const lang of languages) {
    const html = await readFile(new URL(`./${lang}/articles/${slug}.html`, root), "utf8");
    const body = html.match(/<article class="article-body section">([\s\S]*?)<\/article>/)?.[1] ?? "";
    const editorialBody = body.split('<section class="article-sources">')[0];
    const words = textContent(editorialBody).split(/\s+/).filter(Boolean).length;
    assert(words >= 1200, `/${lang}/articles/${slug}: only ${words} words`);
    if (lang === "en") assert(words <= 1800, `/en/articles/${slug}: ${words} words exceeds 1800`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`SEO audit passed: ${urls.length} URLs, 5 languages, 30 long-form articles, approved outbound hosts only.`);
