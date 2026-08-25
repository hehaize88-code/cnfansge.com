import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://spreadsheets-hipobuy.com/sitemap.xml",
    host: "https://spreadsheets-hipobuy.com",
  };
}
