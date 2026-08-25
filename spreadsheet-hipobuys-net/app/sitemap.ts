import type { MetadataRoute } from "next";
import { articles } from "./article-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spreadsheet-hipobuys.net";
  const staticPages = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/spreadsheet/", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/qc/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/shipping/", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/guides/", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/articles/", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/faq/", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return [
    ...staticPages.map(({ path, ...entry }) => ({ url: `${base}${path}`, ...entry })),
    ...articles.map((article) => ({
      url: `${base}/articles/${article.slug}/`,
      lastModified: new Date(article.updated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
