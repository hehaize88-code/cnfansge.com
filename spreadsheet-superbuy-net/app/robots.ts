import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://spreadsheet-superbuy.net/sitemap.xml",
    host: "https://spreadsheet-superbuy.net",
  };
}
