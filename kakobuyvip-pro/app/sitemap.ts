import type { MetadataRoute } from "next";
import { localeCodes, localPath, pagePaths, type PageKey } from "./site-data";
import { decisionKeys, type DecisionKey } from "./pro-data";
import { isArticle, articleDates, updatedDate } from "./article-registry";
export default function sitemap():MetadataRoute.Sitemap {
  return localeCodes.flatMap(locale=>(Object.keys(pagePaths) as PageKey[]).map(page=>({
    url:`https://kakobuyvip.pro${localPath(locale,page)}`,
    lastModified:isArticle(page)?articleDates(page).modified:updatedDate,
    alternates:{languages:Object.fromEntries([...localeCodes.map(lang=>[lang,`https://kakobuyvip.pro${localPath(lang,page)}`]),["x-default",`https://kakobuyvip.pro${localPath("en",page)}`]])},
    changeFrequency:page==="home"||page==="articles"?"weekly" as const:"monthly" as const,
    priority:page==="home"?1:decisionKeys.includes(page as DecisionKey)?0.9:0.8,
  })));
}
