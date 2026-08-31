import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lovegobuys.org/sitemap.xml",
    host: "https://lovegobuys.org",
  };
}
