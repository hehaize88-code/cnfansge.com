import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spreadsheet-superbuys.com";
  const paths = [
    "", "/spreadsheet/", "/articles/", "/how-to-use/", "/qc-photos/", "/shipping-cost/", "/warehouse-storage/", "/faq/",
    "/articles/superbuy-fees-explained/",
    "/articles/superbuy-spreadsheet-vs-reddit-google-sheets/",
    "/articles/superbuy-image-search-item-number/",
    "/articles/superbuy-clothing-spreadsheet/",
    "/articles/superbuy-shopping-agent-vs-forwarding/",
    "/articles/superbuy-returns-before-shipping/",
    "/articles/superbuy-restricted-items-shipping-routes/",
  ];
  return paths.map((path, index) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date("2026-09-14"),
    changeFrequency: index < 2 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index === 1 ? .9 : index === 2 ? .85 : .8,
  }));
}
