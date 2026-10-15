import type { MetadataRoute } from "next";
import { languages } from "@/lib/site-data";
import { getResearchArticles } from "@/lib/articles";

const origin = "https://lovegobuys.org";
function alternates(path: string) {
  return { languages: Object.fromEntries([...languages.map(lang => [lang, `${origin}/${lang}${path}`]), ["x-default", `${origin}/en${path}`]]) };
}
export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/finds", "/categories", "/guide", "/qc", "/shipping", "/faq", "/articles"];
  const localized = languages.flatMap(lang => baseRoutes.map(route => ({
    url: `${origin}/${lang}${route}`, lastModified: new Date("2026-10-15"),
    alternates: alternates(route), changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  })));
  const articles = languages.flatMap(lang => getResearchArticles(lang).map(article => ({
    url: `${origin}/${lang}/articles/${article.slug}`, lastModified: new Date(article.modified),
    alternates: alternates(`/articles/${article.slug}`), changeFrequency: "monthly" as const, priority: 0.8,
  })));
  return [...localized, ...articles];
}
