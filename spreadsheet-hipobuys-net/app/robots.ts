import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules:{userAgent:"*",allow:"/"}, sitemap:"https://spreadsheet-hipobuys.net/sitemap.xml", host:"https://spreadsheet-hipobuys.net" }; }
