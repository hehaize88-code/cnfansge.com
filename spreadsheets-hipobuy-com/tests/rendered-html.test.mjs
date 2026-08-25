import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const productionRobotsMeta =
  /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["']index, follow["'])[^>]*>/i;

test("renders production indexing metadata", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
  assert.match(html, productionRobotsMeta);
  assert.doesNotMatch(html, /codex-preview/i);
});

test("exports crawl-control files", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../dist/client/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/spreadsheets-hipobuy\.com\/sitemap\.xml/i);
  assert.match(sitemap, /https:\/\/spreadsheets-hipobuy\.com\/articles\/use-hipobuy-spreadsheet\//i);
});
