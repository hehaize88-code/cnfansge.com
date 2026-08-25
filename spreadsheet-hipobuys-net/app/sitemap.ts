import type { MetadataRoute } from "next";
import { articles } from "./article-data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://spreadsheet-hipobuys.net";
  const staticPages=["/","/spreadsheet/","/qc/","/shipping/","/guides/","/articles/","/faq/"];
  return [
    ...staticPages.map((path,index)=>({url:`${base}${path}`,lastModified:new Date("2026-08-25"),changeFrequency:(index===0?"daily":"weekly") as "daily"|"weekly",priority:index===0?1:.8})),
    ...articles.map((article)=>({url:`${base}/articles/${article.slug}/`,lastModified:new Date(article.updated),changeFrequency:"monthly" as const,priority:.75}))
  ];
}
