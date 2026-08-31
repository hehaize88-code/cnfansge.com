import type { MetadataRoute } from "next";
import { languages } from "@/lib/site-data";
import { articleSlugs } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/finds", "/categories", "/guide", "/qc", "/shipping", "/faq", "/articles"];
  const localized = languages.flatMap((lang) => baseRoutes.map((route) => ({
    url: `https://lovegobuys.org/${lang}${route}`,
    lastModified: new Date("2026-08-31"),
    changeFrequency: route === "/articles" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/finds" || route === "/categories" ? 0.9 : 0.75,
  })));
  const articles = articleSlugs.map((slug) => ({
    url: `https://lovegobuys.org/en/articles/${slug}`,
    lastModified: new Date("2026-08-31"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [...localized, ...articles];
}
