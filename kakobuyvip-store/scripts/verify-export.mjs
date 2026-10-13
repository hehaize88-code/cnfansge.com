import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const origin = "https://kakobuyvip.store";
const languages = ["en", "de", "es", "fr", "it"];
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1].toLowerCase(), decode(match[2])]));
const fileFor = path => path === "/" ? "out/index.html" : `out${decodeURIComponent(path).replace(/\/$/, "")}.html`;
const canonical = value => new URL(value, origin).href.replace(/\/$/, "");
const sitemap = await readFile("out/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
const en = JSON.parse(await readFile("components/shipping-en.json", "utf8"));
for (const lang of languages) {
  const translated = JSON.parse(await readFile(`components/shipping-${lang}.json`, "utf8"));
  assert.deepEqual(Object.keys(translated), Object.keys(en), `${lang}: missing article translation`);
  for (const [slug, article] of Object.entries(translated)) {
    for (const key of ["tag", "title", "description", "sourceNote"]) assert.ok(article[key]?.trim(), `${lang}/${slug}: missing ${key}`);
    assert.equal(article.sections.length, en[slug].sections.length, `${lang}/${slug}: missing sections`);
    assert.equal(article.takeaways.length, en[slug].takeaways.length, `${lang}/${slug}: missing takeaways`);
    assert.ok(article.sections.every(section => section.heading && section.body.length > 250), `${lang}/${slug}: incomplete body`);
    if (lang !== "en") assert.ok(article.sections.every((section, index) => section.body !== en[slug].sections[index].body), `${lang}/${slug}: English fallback`);
    else assert.ok(article.sections.reduce((sum, section) => sum + section.body.split(/\s+/).length, 0) >= 1200, `${slug}: incomplete long-form guide`);
  }
}
const articleCounts = Object.fromEntries(languages.map(lang => [lang, 0]));
let linksChecked = 0;
for (const url of urls) {
  assert.equal(new URL(url).origin, origin, "Wrong sitemap origin");
  const pathname = new URL(url).pathname;
  const language = pathname.match(/^\/(de|es|fr|it)(?:\/|$)/)?.[1] ?? "en";
  const html = await readFile(fileFor(pathname), "utf8");
  assert.ok(html.includes(`<html lang="${language}"`), `${pathname}: wrong raw HTML language`);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${pathname}: H1 count`);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
  const self = links.find(link => link.rel === "canonical");
  assert.equal(canonical(self?.href ?? ""), canonical(url), `${pathname}: wrong canonical`);
  assert.ok(!/<meta\b[^>]*content="[^"]*noindex/.test(html), `${pathname}: noindex`);
  assert.ok(/<title>[^<]+<\/title>/.test(html), `${pathname}: missing title`);
  assert.ok(/<meta name="description" content="[^"]+"/.test(html), `${pathname}: missing description`);
  const unprefixed = pathname.replace(/^\/(de|es|fr|it)(?=\/|$)/, "") || "/";
  for (const lang of [...languages, "x-default"]) {
    const path = lang === "en" || lang === "x-default" ? unprefixed : `/${lang}${unprefixed === "/" ? "" : unprefixed}`;
    const alternate = links.find(link => link.hreflang === lang);
    assert.equal(canonical(alternate?.href ?? ""), canonical(path), `${pathname}: incorrect hreflang ${lang}`);
    assert.ok(existsSync(fileFor(path)), `${pathname}: missing alternate file ${path}`);
  }
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1]));
  if (pathname.includes("/articles/")) {
    articleCounts[language]++;
    const schema = schemas.find(item => item["@type"] === "Article");
    assert.ok(schema, `${pathname}: missing Article schema`);
    assert.equal(schema.inLanguage, language, `${pathname}: schema language`);
    assert.equal(canonical(schema.url), canonical(url), `${pathname}: schema canonical`);
    assert.ok(schema.dateModified >= schema.datePublished, `${pathname}: invalid dates`);
    assert.ok(schemas.some(item => item["@type"] === "BreadcrumbList"), `${pathname}: missing breadcrumbs`);
    assert.ok(html.includes('class="article-contents"'), `${pathname}: missing contents`);
    assert.ok(html.includes('id="related-title"'), `${pathname}: missing related guides`);
  }
  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    const { href } = attrs(tag[0]);
    if (!href || /^(mailto:|tel:)/.test(href)) continue;
    const destination = new URL(href, url);
    if (destination.origin !== origin) continue;
    assert.ok(existsSync(fileFor(destination.pathname)), `${pathname}: broken internal link ${href}`);
    if (destination.pathname === pathname && destination.hash) assert.ok(html.includes(`id="${destination.hash.slice(1)}"`), `${pathname}: missing anchor ${href}`);
    linksChecked++;
  }
}
assert.ok(articleCounts.en >= Object.keys(en).length + 17, "Existing articles missing");
assert.ok(Object.values(articleCounts).every(count => count === articleCounts.en), "Unequal article counts across languages");
console.log(`Verified ${urls.length} indexable pages, ${linksChecked} internal links, reciprocal hreflang, canonical URLs, schemas and complete translations.`);
console.log(`Articles per language: ${JSON.stringify(articleCounts)}`);
