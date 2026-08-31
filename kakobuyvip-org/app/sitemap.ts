import type { MetadataRoute } from "next";
import { localeCodes, localPath, pagePaths, type PageKey } from "./site-data";
export default function sitemap():MetadataRoute.Sitemap {
  return localeCodes.flatMap(locale=>(Object.keys(pagePaths) as PageKey[]).map(page=>({url:`https://kakobuyvip.org${localPath(locale,page)==="/"?"":localPath(locale,page)}`,lastModified:new Date(page==="officialWebsiteArticle"?"2026-08-31":"2026-08-29"),changeFrequency:page==="home"||page==="finds"?"weekly":"monthly",priority:page==="home"?1:page.endsWith("Article")?.65:.8})));
}
