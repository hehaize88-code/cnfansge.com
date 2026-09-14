import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routeFiles = {
  "/": "../out/index.html",
  "/spreadsheet/": "../out/spreadsheet/index.html",
  "/finds/": "../out/finds/index.html",
  "/articles/": "../out/articles/index.html",
  "/articles/use-hipobuy-spreadsheet/": "../out/articles/use-hipobuy-spreadsheet/index.html",
  "/articles/hipobuy-spreadsheet-search-query/": "../out/articles/hipobuy-spreadsheet-search-query/index.html",
  "/articles/hipobuy-spreadsheet-shoes/": "../out/articles/hipobuy-spreadsheet-shoes/index.html",
  "/articles/hipobuy-links-not-working/": "../out/articles/hipobuy-links-not-working/index.html",
  "/articles/hipobuy-qc-photos-product-id-color-size/": "../out/articles/hipobuy-qc-photos-product-id-color-size/index.html",
  "/articles/hipobuy-spreadsheet-hoodies/": "../out/articles/hipobuy-spreadsheet-hoodies/index.html",
  "/articles/hipobuy-spreadsheet-jerseys/": "../out/articles/hipobuy-spreadsheet-jerseys/index.html",
  "/articles/hipobuy-spreadsheet-price-delivered-cost/": "../out/articles/hipobuy-spreadsheet-price-delivered-cost/index.html",
  "/articles/hipobuy-spreadsheet-jackets/": "../out/articles/hipobuy-spreadsheet-jackets/index.html",
  "/guide/": "../out/guide/index.html",
  "/qc/": "../out/qc/index.html",
  "/shipping/": "../out/shipping/index.html",
  "/faq/": "../out/faq/index.html",
};

test("every indexable route has index/follow and a self-referencing canonical", async () => {
  for (const [route, file] of Object.entries(routeFiles)) {
    const html = await readFile(new URL(file, import.meta.url), "utf8");
    const canonical = `https://spreadsheets-hipobuy.com${route}`;

    assert.match(html, /<meta[^>]+name="robots"[^>]+content="index, follow"/i, route);
    assert.doesNotMatch(html, /noindex|nofollow/i, route);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), route);
  }
});

test("route titles are unique", async () => {
  const titles = [];
  for (const file of Object.values(routeFiles)) {
    const html = await readFile(new URL(file, import.meta.url), "utf8");
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    assert.ok(title);
    titles.push(title);
  }
  assert.equal(new Set(titles).size, titles.length);
});

test("exports crawl-control files and structured data", async () => {
  const [robots, sitemap, faq, article] = await Promise.all([
    readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../out/faq/index.html", import.meta.url), "utf8"),
    readFile(new URL("../out/articles/use-hipobuy-spreadsheet/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/spreadsheets-hipobuy\.com\/sitemap\.xml/i);
  assert.match(sitemap, /https:\/\/spreadsheets-hipobuy\.com\/articles\/use-hipobuy-spreadsheet\//i);
  assert.match(faq, /"@type":"FAQPage"/);
  assert.match(article, /"@type":"Article"/);
  assert.match(sitemap, /https:\/\/spreadsheets-hipobuy\.com\/articles\/hipobuy-spreadsheet-search-query\//i);
  assert.match(sitemap, /https:\/\/spreadsheets-hipobuy\.com\/articles\/hipobuy-spreadsheet-shoes\//i);
  assert.match(sitemap, /https:\/\/spreadsheets-hipobuy\.com\/articles\/hipobuy-spreadsheet-jackets\//i);
});

test("new editorial routes contain article schema and substantial original copy", async () => {
  const newRoutes = Object.entries(routeFiles).filter(([route]) =>
    ["shoes", "links-not-working", "qc-photos", "hoodies", "jerseys", "price-delivered-cost", "jackets"].some(part => route.includes(part))
  );
  assert.equal(newRoutes.length, 7);
  for (const [route, file] of newRoutes) {
    const html = await readFile(new URL(file, import.meta.url), "utf8");
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
    const words = text.trim().split(/\s+/).length;
    assert.match(html, /"@type":"Article"/, route);
    assert.ok(words >= 1200, `${route} has only ${words} rendered words`);
  }
});
