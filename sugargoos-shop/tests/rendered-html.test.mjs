import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import test, { after } from "node:test";
import { Miniflare } from "miniflare";

const files = ["index.js", ...readdirSync("dist/server", { recursive: true }).filter((file) => file.endsWith(".js") && file !== "index.js")];
const runtime = new Miniflare({
  modules: files.map((file) => ({ type: "ESModule", path: `dist/server/${file}` })),
  // The installed local workerd supports this date; production retains its configured date.
  compatibilityDate: "2026-05-22",
  compatibilityFlags: ["nodejs_compat"],
  assets: { directory: "dist/client", binding: "ASSETS", routerConfig: { has_user_worker: true } },
});
after(() => runtime.dispose());
const request = (path) => runtime.dispatchFetch(`https://sugargoos.shop${path}`, { headers: { accept: "text/html" } });

test("normalizes HTTP, www and locale paths without losing query strings", async () => {
  for (const [source, target] of [
    ["http://sugargoos.shop/", "https://sugargoos.shop/en/"],
    ["https://sugargoos.shop/", "https://sugargoos.shop/en/"],
    ["https://www.sugargoos.shop/de/articles/?source=test", "https://sugargoos.shop/de/articles/?source=test"],
    ["https://sugargoos.shop/en", "https://sugargoos.shop/en/"],
  ]) {
    const response = await runtime.dispatchFetch(source, { redirect: "manual" });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), target);
    assert.equal((await runtime.dispatchFetch(target)).status, 200);
  }
});

test("keeps production HTML indexable and serves its stylesheet", async () => {
  const response = await request("/en/");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /<meta[^>]+name=["']robots["'][^>]+content=["']index, follow["']/i);
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
  assert.doesNotMatch(html, /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i);
  const stylesheet = html.match(/<link[^>]*href="([^"]+\.css)"[^>]*>/)?.[1];
  assert.ok(stylesheet);
  const asset = await request(stylesheet);
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get("content-type"), /text\/css/);
  assert.ok((await asset.text()).length > 1000);
});

test("sitemap exposes all 65 localized articles and each page has matching canonical metadata", async () => {
  const robots = await request("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/sugargoos.shop\/sitemap.xml/);
  const response = await request("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(urls.length, 105);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(urls.every((url) => url.startsWith("https://sugargoos.shop/") && url.endsWith("/")));
  const articleUrls = urls.filter((url) => /\/articles\/[^/]+\/$/.test(url));
  assert.equal(articleUrls.length, 65);
  for (const url of articleUrls) {
    const result = await runtime.dispatchFetch(url);
    assert.equal(result.status, 200, url);
    const html = await result.text();
    const locale = new URL(url).pathname.split("/")[1];
    assert.match(html, new RegExp(`<html lang="${locale}"`), url);
    assert.ok(html.includes(`rel="canonical" href="${url}"`), url);
    assert.match(html, /"@type":"Article"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /hrefLang="x-default"/);
    assert.match(html, /dateModified/);
    assert.equal(result.headers.get("content-language"), locale);
  }
});

test("article hubs and homepage link to all thirteen guides", async () => {
  for (const locale of ["en", "de", "es", "fr", "it"]) {
    for (const suffix of ["/", "/articles/"]) {
      const response = await request(`/${locale}${suffix}`);
      assert.equal(response.status, 200);
      const html = await response.text();
      const paths = new Set([...html.matchAll(new RegExp(`href="(/${locale}/articles/[^/]+/)"`, "g"))].map((match) => match[1]));
      assert.equal(paths.size, 13, `${locale}${suffix}`);
    }
  }
});

test("unknown articles remain a real 404", async () => {
  const response = await request("/en/articles/does-not-exist/");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /noindex/);
});
