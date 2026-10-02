import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
import worker from "../dist/server/index.js";

const languages = ["en", "de", "es", "fr", "it"];
const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
const articles = Object.fromEntries(await Promise.all(languages.map(async (lang) => [lang, [...await readJson(`../app/seo-content/${lang}.json`), ...await readJson(`../app/seo-content/revised-${lang}.json`)]])));
const xml = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const sitemapUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };
const render = async (path, headers = {}) => {
  const response = await worker.fetch(new Request(`https://sugargoos.store${path}`, { headers: { accept: "text/html", ...headers } }), env, context);
  return { status: response.status, html: await response.text() };
};

test("six substantive English articles and complete matching translations", async () => {
  for (const lang of languages) {
    assert.equal(articles[lang].length, 6);
    for (const [index, article] of articles[lang].entries()) {
      const original = articles.en[index];
      assert.equal(article.slug, original.slug);
      assert.equal(article.sections.length, original.sections.length);
      assert.ok(article.references.length >= 2);
      assert.equal(article.table.headers.length, 3);
      if (article.image) await access(new URL(`../public${article.image}`, import.meta.url));
      for (const [sectionIndex, section] of article.sections.entries()) {
        assert.equal(section.body.length, original.sections[sectionIndex].body.length);
        assert.ok(section.body.every((text) => text.length > 100));
        assert.doesNotMatch(section.heading, /FAQ|frequently asked/i);
        if (lang !== "en") assert.notEqual(section.body[0], original.sections[sectionIndex].body[0]);
        for (const paragraph of section.body) {
          for (const match of paragraph.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)) {
            assert.ok(sitemapUrls.includes(`https://sugargoos.store${lang === "en" ? "" : `/${lang}`}${match[1]}`), `Missing translated internal destination: ${match[1]}`);
          }
        }
      }
      if (lang === "en") {
        const words = article.sections.flatMap((section) => section.body).join(" ").split(/\s+/).length;
        assert.ok(words >= 1200 && words <= 1800, `${article.slug}: ${words} words`);
      }
    }
  }
});

test("all 30 updated article pages render localized SEO and links", async () => {
  for (const lang of languages) {
    for (const article of articles[lang]) {
      const path = `${lang === "en" ? "" : `/${lang}`}/articles/${article.slug}`;
      const { status, html } = await render(path, { "x-site-language": "invalid" });
      assert.equal(status, 200, path);
      assert.ok(html.includes(`<html lang="${lang}">`), path);
      assert.ok(html.includes(`<link rel="canonical" href="https://sugargoos.store${path}"`), path);
      assert.match(html, /<meta name="robots" content="index, follow"/);
      const ld = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      const schema = ld["@graph"].find((item) => item["@type"] === "Article");
      assert.equal(schema.inLanguage, lang);
      assert.equal(schema.dateModified, "2026-10-02");
      assert.equal(schema.datePublished, article.slug === "how-to-read-sugargoo-qc-photos" ? "2026-08-29" : article.slug === "sugargoo-spreadsheet-guide-2026" ? "2026-09-01" : "2026-10-02");
      assert.ok(schema.image.startsWith("https://sugargoos.store/"));
      assert.ok(schema.publisher.logo.url);
      assert.ok(schema.author.logo.url);
      const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
      assert.equal((visible.match(/<h1\b/g) ?? []).length, 1);
      assert.doesNotMatch(visible, /\[[^\]]+\]\(\/articles\//);
      assert.match(visible, /<table>/);
      for (const alternate of [...languages, "x-default"]) assert.ok(html.toLowerCase().includes(`hreflang="${alternate}"`), path);
      const firstLink = article.sections.flatMap((section) => section.body).join(" ").match(/\[[^\]]+\]\((\/[^)]+)\)/)[1];
      assert.ok(visible.includes(`href="${lang === "en" ? "" : `/${lang}`}${firstLink}"`));
    }
  }
});

test("sitemap covers every existing and new route in all five languages", async () => {
  assert.equal(sitemapUrls.length, 95);
  assert.equal(await readFile(new URL("../public/sitemap-content.xml", import.meta.url), "utf8"), xml);
  assert.equal(new Set(sitemapUrls).size, 95);
  assert.equal((xml.match(/hreflang="x-default"/g) ?? []).length, 95);
  for (const url of sitemapUrls) {
    const { status, html } = await render(new URL(url).pathname);
    assert.equal(status, 200, url);
    assert.ok(html.includes(`<link rel="canonical" href="${url}"`), url);
  }
  for (const lang of languages) {
    const { html } = await render(`${lang === "en" ? "" : `/${lang}`}/articles`);
    assert.equal((html.match(/class="article-card"/g) ?? []).length, 11);
  }
  assert.equal((await render("/articles/missing-article")).status, 404);
  const redirect = await worker.fetch(new Request("https://www.sugargoos.store/de/qc?x=1"), env, context);
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get("location"), "https://sugargoos.store/de/qc?x=1");
});
