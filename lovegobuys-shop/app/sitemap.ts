import type { MetadataRoute } from "next";
import { articleSlugs, languages } from "./site-content";
const base="https://lovegobuys.shop";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages=["","spreadsheet","finds","guide","qc","shipping","faq","articles"];
  return languages.flatMap(lang=>[...pages.map(page=>({url:`${base}/${lang}${page?`/${page}`:""}`,lastModified:new Date("2026-09-01")})),...articleSlugs.map(slug=>({url:`${base}/${lang}/articles/${slug}`,lastModified:new Date("2026-09-01")}))]);
}
