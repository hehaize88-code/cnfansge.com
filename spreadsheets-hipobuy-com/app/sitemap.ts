import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/spreadsheet/",
  "/finds/",
  "/articles/",
  "/articles/use-hipobuy-spreadsheet/",
  "/guide/",
  "/qc/",
  "/shipping/",
  "/faq/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-25T00:00:00.000Z");

  return routes.map((route, index) => ({
    url: `https://spreadsheets-hipobuy.com${route || "/"}`,
    lastModified,
    changeFrequency: index === 0 ? "daily" : "weekly",
    priority: index === 0 ? 1 : route.startsWith("/articles/") ? 0.8 : 0.7,
  }));
}
