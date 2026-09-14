import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const slugs = [
  "superbuy-fees-explained",
  "superbuy-spreadsheet-vs-reddit-google-sheets",
  "superbuy-image-search-item-number",
  "superbuy-clothing-spreadsheet",
  "superbuy-shopping-agent-vs-forwarding",
  "superbuy-returns-before-shipping",
  "superbuy-restricted-items-shipping-routes",
];

test("exports the SEO homepage with the current title and analytics", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Superbuy Spreadsheet 2026: Live Links, Finds &amp; QC Guide<\/title>/);
  assert.match(html, /G-NJEYHQ693H/);
  assert.match(html, /Superbuy Spreadsheet 2026: check live links before ordering/);
});

test("exports seven substantial new articles with canonical and Article schema", async () => {
  for (const slug of slugs) {
    const html = await readFile(new URL(`../out/articles/${slug}/index.html`, import.meta.url), "utf8");
    const visible = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ");
    const wordCount = visible.match(/[A-Za-z0-9’'-]+/g)?.length ?? 0;
    assert.ok(wordCount >= 1200, `${slug} has only ${wordCount} visible words`);
    assert.match(html, new RegExp(`rel="canonical" href="https://spreadsheet-superbuys\\.com/articles/${slug}/"`));
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
  }
});

test("sitemap contains all fifteen canonical URLs", async () => {
  const xml = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  assert.equal(xml.match(/<url>/g)?.length, 15);
  for (const slug of slugs) assert.match(xml, new RegExp(`/articles/${slug}/`));
});

test("clickable external destinations stay on the approved catalog", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const externalHosts = [...html.matchAll(/<a[^>]+href="https?:\/\/([^/\"]+)/g)].map((match) => match[1]);
  assert.deepEqual([...new Set(externalHosts)].sort(), ["cnfansge.com"]);
});
