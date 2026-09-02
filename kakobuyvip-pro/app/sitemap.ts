import type { MetadataRoute } from "next";
import { localeCodes, localPath, pagePaths, type PageKey } from "./site-data";
import { decisionKeys, type DecisionKey } from "./pro-data";

export default function sitemap():MetadataRoute.Sitemap {
  return localeCodes.flatMap(locale=>(Object.keys(pagePaths) as PageKey[]).map(page=>({
    url:`https://kakobuyvip.pro${localPath(locale,page)==="/"?"":localPath(locale,page)}`,
    lastModified:new Date(page==="orderTimelineArticle"?"2026-09-02":"2026-08-31"),
    changeFrequency:page==="home"||page==="finds"?"weekly" as const:"monthly" as const,
    priority: page === "home"
      ? 1
      : decisionKeys.includes(page as DecisionKey)
        ? 0.9
        : page.endsWith("Article")
          ? 0.8
          : 0.7,
  })));
}
