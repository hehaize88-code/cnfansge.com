import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("renders production SEO metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hipobuy Spreadsheet 2026/i);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.net\/?"/i);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.doesNotMatch(html, /codex-preview|noindex|nofollow/i);
});

test("publishes ten indexable long-form guides", async () => {
  const articleRoot = new URL("../out/articles/", import.meta.url);
  const entries = (await readdir(articleRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory());
  assert.equal(entries.length, 10);
  for (const entry of entries) {
    const html = await readFile(new URL(`${entry.name}/index.html`, articleRoot), "utf8");
    const prose = html.match(/<div class="article-prose">([\s\S]*?)<section class="article-sources">/)?.[1] || "";
    const words = prose.replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length;
    assert.ok(words >= 1200, `${entry.name} has only ${words} rendered words`);
    assert.ok(words <= 1800, `${entry.name} has ${words} rendered words`);
    assert.match(html, /BreadcrumbList/);
    assert.match(html, /Related Hipobuy guides/);
  }
});

test("keeps catalog exits on the cnfansge.com main site", async () => {
  const pages = ["index.html", "spreadsheet/index.html", "shipping/index.html", "faq/index.html"];
  for (const page of pages) {
    const html = await readFile(new URL(`../out/${page}`, import.meta.url), "utf8");
    assert.doesNotMatch(html, /href="https:\/\/www\.hipobuys\.net/i);
    assert.match(html, /href="https:\/\/cnfansge\.com/i);
  }
  const homepage = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const productSource = await readFile(new URL("../app/data.ts", import.meta.url), "utf8");
  for (const id of ["6127", "6126", "6682", "6227", "607", "6328", "6401", "6416", "6679", "6559", "6678", "6624"]) {
    assert.match(productSource, new RegExp(`url: "https://cnfansge\\.com/AllProducts/${id}\\.html"`));
  }
  assert.match(homepage, /search\.html\?channelid=2(?:&|&amp;)keywords=/);
});

test("exports the full sitemap and analytics events", async () => {
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.equal((sitemap.match(/<url>/g) || []).length, 17);
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /outbound_product_click/);
  assert.match(html, /article_click/);
  assert.match(html, /spreadsheet_search/);
});
