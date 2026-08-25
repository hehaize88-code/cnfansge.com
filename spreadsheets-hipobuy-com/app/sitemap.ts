import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  { path: "/", lastModified: "2026-08-25", priority: 1, changeFrequency: "daily" },
  { path: "/spreadsheet/", lastModified: "2026-08-25", priority: 0.8, changeFrequency: "weekly" },
  { path: "/finds/", lastModified: "2026-08-25", priority: 0.7, changeFrequency: "weekly" },
  { path: "/articles/", lastModified: "2026-08-25", priority: 0.8, changeFrequency: "weekly" },
  { path: "/articles/use-hipobuy-spreadsheet/", lastModified: "2026-08-25", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guide/", lastModified: "2026-08-25", priority: 0.7, changeFrequency: "monthly" },
  { path: "/qc/", lastModified: "2026-08-25", priority: 0.7, changeFrequency: "monthly" },
  { path: "/shipping/", lastModified: "2026-08-25", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq/", lastModified: "2026-08-25", priority: 0.7, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://spreadsheets-hipobuy.com${route.path}`,
    lastModified: new Date(`${route.lastModified}T00:00:00.000Z`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
