import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders production SEO metadata and structured data", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hipobuy Order Reconciliation Guide/i);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.net\/?"/i);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.match(html, /"@type":"WebSite"/i);
  assert.doesNotMatch(html, /SearchAction/i);
  assert.doesNotMatch(html, /codex-preview|noindex|nofollow/i);

  const spreadsheet = await readFile(new URL("../out/spreadsheet/index.html", import.meta.url), "utf8");
  assert.match(spreadsheet, /"@type":"BreadcrumbList"/i);
  assert.match(spreadsheet, /"@type":"ItemList"/i);
  assert.match(spreadsheet, /"numberOfItems":12/i);
});

test("keeps static sitemap dates truthful", async () => {
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  const lastmodCount = (sitemap.match(/<lastmod>/g) || []).length;
  assert.equal(lastmodCount, 3);
});
