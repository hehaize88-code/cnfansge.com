import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "spreadsheet/",
  "finds/",
  "articles/",
  "guide/",
  "qc/",
  "shipping/",
  "faq/",
  "articles/spreadsheet-without-buying-blind/",
  "articles/qc-photo-checklist/",
  "articles/shipping-cost-planning/",
  "articles/superbuy-shipping-calculator/",
  "articles/superbuy-tariffs-customs-vat/",
  "articles/superbuy-expert-service/",
  "articles/superbuy-fees/",
  "articles/why-superbuy-shipping-estimate-changes/",
  "articles/superbuy-warehouse-storage/",
  "articles/superbuy-shipping-to-uk/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-14T00:00:00.000Z");
  return routes.map((route, index) => ({
    url: `https://spreadsheet-superbuy.net/${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index < 8 ? 0.8 : 0.7,
  }));
}
