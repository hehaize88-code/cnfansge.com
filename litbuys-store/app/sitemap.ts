import type { MetadataRoute } from "next";
import { articleSlugs } from "./article-data";
import { products } from "./catalog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://litbuys.store";
  const staticRoutes = ["", "/spreadsheet", "/finds", "/guides", "/qc", "/shipping", "/faq", "/articles"];
  return [
    ...staticRoutes.map((route, index) => ({ url: `${base}${route}`, lastModified: new Date("2026-08-29"), changeFrequency: index === 0 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : .8 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date("2026-08-29"), changeFrequency: "weekly" as const, priority: .7 })),
    ...articleSlugs.map((slug) => ({ url: `${base}/articles/${slug}`, lastModified: new Date("2026-08-29"), changeFrequency: "monthly" as const, priority: .75 })),
  ];
}
