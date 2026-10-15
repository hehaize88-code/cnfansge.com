import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { articles, languages, localPaths } from "../data/site.js";
import { decisionGuides, topics } from "../data/decision-guides.js";
import { improvedSlugs } from "../data/article-improvements.js";

const root = fileURLToPath(new URL("../dist/static/", import.meta.url));
const routes = languages.flatMap((lang) => localPaths.map((parts) => `/${lang}${parts.length ? `/${parts.join("/")}` : ""}`));
const routeSet = new Set(routes);
assert.equal(articles.length, 17);
assert.equal(routes.length, 155);
assert.deepEqual([...new Set(Object.values(topics).flat())].sort(), articles.map((a) => a.slug).sort());
const localLinks = new Set();
let checkedArticles = 0;
for (const route of routes) {
  const lang = route.split("/")[1];
  const html = await readFile(join(root, `${route.slice(1)}.html`), "utf8");
  const head = html.split("</head>")[0];
  assert(html.includes(`<html lang="${lang}"`), `${route}: wrong document language`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: H1 count`);
  assert.equal((head.match(/<title>/g) || []).length, 1, `${route}: head title`);
  assert(head.includes(`rel="canonical" href="https://sugargoos.uk${route}"`), `${route}: canonical`);
  assert(head.includes('name="description" content="'), `${route}: description`);
  assert(!head.includes('content="noindex'), `${route}: noindex`);
  for (const code of [...languages, "x-default"]) {
    const target = route.replace(/^\/(en|de|es|fr|it)/, `/${code === "x-default" ? "en" : code}`);
    const alternate = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]).find((tag) => tag.toLowerCase().includes(`hreflang="${code}"`) && tag.includes(`href="https://sugargoos.uk${target}"`));
    assert(alternate, `${route}: alternate ${code}`);
  }
  assert(html.includes('src="/analytics-events.js"'), `${route}: interaction script`);
  assert(html.includes("G-K4JW68ZWVN"), `${route}: existing GA4 tag`);
  for (const match of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) localLinks.add(match[1]);
  const slug = route.split("/")[3];
  if (route.includes("/articles/")) {
    checkedArticles++;
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const graph = blocks.flatMap((m) => JSON.parse(m[1])["@graph"] || []);
    const article = graph.find((item) => item["@type"] === "Article");
    assert(article && article.inLanguage === lang && article.mainEntityOfPage === `https://sugargoos.uk${route}`, `${route}: Article schema`);
    if (decisionGuides[lang][slug]) {
      const source = decisionGuides[lang][slug];
      assert.equal(source.sections.length, 8);
      assert(source.sections.every((s) => s.paragraphs.length === 2));
      assert.equal((html.match(/class="section-number"/g) || []).length, 8);
      assert(html.includes('class="decision-table"'), `${route}: new guide table`);
      if (lang !== "en") assert.notEqual(source.opening, decisionGuides.en[slug].opening);
      const words = [source.opening, ...source.sections.flatMap((s) => [s.title, ...s.paragraphs]), source.close, ...source.takeaways, ...source.table.rows.flat()].join(" ").split(/\s+/).length;
      assert(words >= 1200, `${route}: unexpectedly shortened content (${words})`);
    }
    if (improvedSlugs.includes(slug)) {
      assert(html.includes('class="article-answer"') && html.includes('class="decision-table"'), `${route}: missing improvements`);
    }
  } else if (route === `/${lang}`) {
    assert.equal((html.match(/class="article-card"/g) || []).length, 4, `${route}: homepage article count`);
  } else if (route === `/${lang}/articles`) {
    assert.equal((html.match(/class="article-card"/g) || []).length, 17, `${route}: hub article count`);
  }
}
for (const link of localLinks) {
  if (routeSet.has(link) || link === "/") continue;
  await access(join(root, decodeURIComponent(link.slice(1)))).catch(() => assert.fail(`Broken local link: ${link}`));
}
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert.equal(locations.length, 155);
assert.deepEqual(locations.sort(), routes.map((r) => `https://sugargoos.uk${r}`).sort());
assert.equal((sitemap.match(/hreflang=/g) || []).length, 155 * 6);
assert.equal(checkedArticles, 85);
await access(join(root, "analytics-events.js"));
await access(join(root, "404.html"));
console.log(`Verified ${routes.length} localized routes, ${checkedArticles} articles, 20 complete new translations, all local links and reciprocal metadata.`);
