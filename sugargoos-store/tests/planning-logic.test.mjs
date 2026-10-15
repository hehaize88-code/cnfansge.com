import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";

const loader = await createServer({ configFile: false, server: { middlewareMode: true }, appType: "custom" });
let planWeight, filterProducts, products, getArticles;
try {
  ({ planWeight, filterProducts } = await loader.ssrLoadModule("/app/planning-logic.ts"));
  ({ products } = await loader.ssrLoadModule("/app/site-data.ts"));
  ({ getArticles } = await loader.ssrLoadModule("/app/articles-data.ts"));
} finally {
  await loader.close();
}

test("weight assumptions handle volume, actual-only, decimals and invalid input", () => {
  assert.deepEqual(planWeight(["2.4", "40", "30", "18"], "5000"), { volumetric: 4.32, chargeable: 4.32 });
  assert.deepEqual(planWeight(["2.4", "40", "30", "18"], "6000"), { volumetric: 3.6, chargeable: 3.6 });
  assert.deepEqual(planWeight(["2.4", "40", "30", "18"], "actual"), { volumetric: null, chargeable: 2.4 });
  assert.equal(planWeight(["7.25", "10.5", "10", "10"], "5000").chargeable, 7.25);
  for (const invalid of ["", " ", "-1", "NaN", "Infinity"]) assert.equal(planWeight([invalid, "40", "30", "18"], "5000"), null);
  assert.equal(planWeight(["2.4", "1e308", "1e308", "1e308"], "5000"), null);
});

test("budget filtering composes with localized search, category and immutable sorting", () => {
  const original = products.map((product) => product.id);
  const labels = { shoes: "Schuhe" };
  const filtered = filterProducts(products, "Schuhe", "shoes", true, "low", labels);
  assert.ok(filtered.length > 0);
  assert.ok(filtered.every((product) => product.category === "shoes" && product.priceUsd < 20));
  const sorted = filterProducts(products, "", "all", true, "high", labels);
  assert.ok(sorted.every((product, i) => i === 0 || sorted[i - 1].priceUsd >= product.priceUsd));
  assert.deepEqual(products.map((product) => product.id), original);
  assert.equal(filterProducts([{ ...products[0], priceUsd: 20 }], "", "all", true, "featured", labels).length, 0);
});

test("new and refreshed sections are complete in all languages with accurate update dates", () => {
  const english = getArticles("en");
  for (const lang of ["en", "de", "es", "fr", "it"]) {
    const localized = getArticles(lang);
    assert.equal(localized.length, 14);
    assert.deepEqual(localized.map((a) => a.slug), english.map((a) => a.slug));
    for (const original of english.filter((a) => a.modified === "2026-10-15")) {
      const translated = localized.find((a) => a.slug === original.slug);
      assert.equal(translated.modified, original.modified);
      assert.equal(translated.sections.length, original.sections.length);
      assert.ok(translated.sections.every((s) => s.body.length === 2));
      if (original.publishedIso === "2026-10-15") {
        const sourceLength = original.sections.flatMap((s) => s.body).join(" ").length;
        const targetLength = translated.sections.flatMap((s) => s.body).join(" ").length;
        assert.ok(targetLength >= sourceLength * .75, `${lang}/${original.slug} translation must not be abridged`);
      }
    }
  }
});
