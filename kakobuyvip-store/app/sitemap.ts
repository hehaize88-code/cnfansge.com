import type { MetadataRoute } from "next";
import { articleSlugs } from "@/components/article-data";

export const dynamic = "force-static";

const baseUrl = "https://kakobuyvip.store";
const sections = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-31T00:00:00.000Z");

  return [
    { url: baseUrl, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    ...sections.map((section) => ({
      url: `${baseUrl}/${section}`,
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority: section === "spreadsheet" || section === "finds" ? 0.9 : 0.8,
    })),
    ...articleSlugs.map((slug) => ({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
