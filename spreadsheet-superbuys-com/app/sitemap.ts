import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spreadsheet-superbuys.com";
  return ["", "/spreadsheet/", "/articles/", "/how-to-use/", "/qc-photos/", "/shipping-cost/", "/warehouse-storage/", "/faq/"].map((path, index) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date("2026-08-25"),
    changeFrequency: index < 2 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index === 1 ? .9 : .8,
  }));
}
