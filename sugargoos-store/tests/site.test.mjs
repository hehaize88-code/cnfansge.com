import test from "node:test";
import assert from "node:assert/strict";
import worker from "../worker/index.js";

const get = (url, method="GET") => worker.fetch(new Request(url,{method}));

test("apex homepage is a complete indexable 200", async () => {
  const response=await get("https://sugargoos.store/");
  const html=await response.text();
  assert.equal(response.status,200);
  assert.match(html,/<html lang="en">/);
  assert.match(html,/rel="canonical" href="https:\/\/sugargoos\.store\/"/);
  assert.match(html,/FAQPage/);
  assert.match(html,/Product Link Verification/);
});

test("www and http preserve path in one canonical redirect", async () => {
  const www=await get("https://www.sugargoos.store/de/warehouse-inspection/");
  assert.equal(www.status,308);
  assert.equal(www.headers.get("location"),"https://sugargoos.store/de/warehouse-inspection/");
  const http=await get("http://sugargoos.store/faq/");
  assert.equal(http.status,308);
  assert.equal(http.headers.get("location"),"https://sugargoos.store/faq/");
});

test("localized equivalent keeps language, canonical and hreflang", async () => {
  const response=await get("https://sugargoos.store/fr/shoe-size-qc/");
  const html=await response.text();
  assert.equal(response.status,200);
  assert.equal(response.headers.get("content-language"),"fr");
  assert.match(html,/<html lang="fr">/);
  assert.match(html,/href="https:\/\/sugargoos\.store\/fr\/shoe-size-qc\/"/);
  assert.match(html,/hreflang="x-default" href="https:\/\/sugargoos\.store\/shoe-size-qc\/"/);
  assert.match(html,/"@type":"Article"/);
});

test("robots and sitemap expose only canonical 200 routes", async () => {
  const robots=await get("https://sugargoos.store/robots.txt");
  assert.equal(robots.status,200);
  assert.match(await robots.text(),/Sitemap: https:\/\/sugargoos\.store\/sitemap\.xml/);
  const sitemap=await get("https://sugargoos.store/sitemap.xml");
  const xml=await sitemap.text();
  assert.equal(sitemap.status,200);
  assert.match(xml,/<loc>https:\/\/sugargoos\.store\/warehouse-inspection\/<\/loc>/);
  assert.doesNotMatch(xml,/<loc>https:\/\/www\./);
  assert.doesNotMatch(xml,/\/en\//);
});

test("unknown routes return a genuine noindex 404", async () => {
  const response=await get("https://sugargoos.store/not-a-real-route/");
  const html=await response.text();
  assert.equal(response.status,404);
  assert.match(html,/name="robots" content="noindex,follow"/);
});
