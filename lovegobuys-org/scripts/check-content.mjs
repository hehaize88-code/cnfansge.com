import assert from "node:assert/strict";
import { build } from "esbuild";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
const temp = await mkdtemp(join(tmpdir(), "lovegobuy-check-"));
try {
  await build({ entryPoints: ["lib/articles.ts", "lib/article-navigation.ts"], bundle: true, platform: "node", format: "esm", outdir: temp });
  const { getResearchArticles, getArticle, articleSlugs } = await import(pathToFileURL(join(temp, "articles.js")));
  const { relatedSlugs } = await import(pathToFileURL(join(temp, "article-navigation.js")));
  const slugs = new Set(articleSlugs);
  assert.equal(slugs.size, 13);
  const english = getResearchArticles("en");
  for (const lang of ["en", "de", "es", "fr", "it"]) {
    const articles = getResearchArticles(lang);
    assert.equal(articles.length, 13, `${lang}: missing article`);
    assert.deepEqual(new Set(articles.map(a => a.slug)), slugs);
    for (const article of articles) {
      assert.ok(article.deck.length >= 70 && article.deck.length <= 180, `${lang}: bad description ${article.slug}`);
      assert.ok(article.sections.length >= 4);
      assert.ok(article.sections.every(s => s.h && s.p.length && s.p.every(p => p.length > 60)));
      assert.ok(!/\b578\b|4\.4 overall|80% five-star/.test(JSON.stringify(article)), "stale review score");
      assert.ok(!/FAQ|Frequently asked/i.test(article.sections.map(s => s.h).join(" ")));
      assert.ok(article.modified >= article.published);
      const original = english.find(a => a.slug === article.slug);
      assert.equal(article.sections.length, original.sections.length, `${lang}: incomplete sections`);
      if (lang !== "en") {
        assert.notEqual(article.title, original.title);
        assert.notEqual(article.intro, original.intro);
        article.sections.forEach((s,i) => assert.notEqual(s.p[0], original.sections[i].p[0], `${lang}: English body fallback`));
      }
      for (const related of relatedSlugs(article.slug)) assert.ok(getArticle(related, lang));
    }
    const words = articles.slice(0,2).map(a => [a.title,a.intro,...a.sections.flatMap(s => [s.h,...s.p,...(s.bullets ?? [])])].join(" ").split(/\s+/).length);
    if (lang === "en") assert.ok(words.every(n => n >= 1200), "New English articles should be complete long-form guides");
    console.log(`${lang}: 13 complete articles, 2 new guides (${words.join(" / ")} words), localized sections and links OK`);
  }
  console.log("65 article editions; 105 total localized routes expected.");
} finally { await rm(temp, { recursive: true, force: true }); }
