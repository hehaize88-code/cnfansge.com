import { writeFile } from "node:fs/promises";
import { createServer } from "vite";

// Read the same routes and article dates used by the application. This prevents
// an article being reachable in the UI while missing from a localized sitemap.
const server = await createServer({ configFile: false, server: { middlewareMode: true }, appType: "custom" });
try {
  const { SITE_ORIGIN, routes, languages, localizedPath } = await server.ssrLoadModule("/app/site-data.ts");
  const { getArticles } = await server.ssrLoadModule("/app/articles-data.ts");
  const articles = new Map(getArticles("en").map((article) => [article.slug, article]));
  const entries = [];
  for (const lang of languages) {
    for (const route of routes) {
      const article = articles.get(route.replace(/^articles\//, ""));
      const lastmod = article?.modified ?? (route.includes("build-reliable-") ? "2026-09-02" : article || route === "finds" || route === "faq" ? "2026-09-01" : "2026-10-02");
      const links = [...languages, "x-default"].map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate}" href="${SITE_ORIGIN}${localizedPath(alternate === "x-default" ? "en" : alternate, route)}"/>`).join("");
      entries.push(`<url><loc>${SITE_ORIGIN}${localizedPath(lang, route)}</loc><lastmod>${lastmod}</lastmod>${links}</url>`);
    }
  }
  if (new Set(entries.map((entry) => entry.match(/<loc>(.*?)<\/loc>/)[1])).size !== entries.length) throw new Error("Duplicate canonical sitemap URL");
  await writeFile(new URL("../public/sitemap.xml", import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`);
  console.log(`Generated sitemap with ${entries.length} canonical URLs.`);
} finally {
  await server.close();
}
