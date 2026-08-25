import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders production SEO metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Hipobuy Spreadsheet 2026/i);
  assert.match(html, /rel="canonical" href="https:\/\/spreadsheet-hipobuys\.net\/?"/i);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.doesNotMatch(html, /codex-preview|noindex|nofollow/i);
});
