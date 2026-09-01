import type { MetadataRoute } from "next";
import { articleSlugs, languages } from "./site-content";
const base="https://lovegobuys.shop";
export const dynamic = "force-static";
const pageLastModified:Record<string,string>={"":"2026-09-01",spreadsheet:"2026-09-01",finds:"2026-09-01",guide:"2026-09-01",qc:"2026-09-01",shipping:"2026-09-01",faq:"2026-09-01",articles:"2026-09-01"};
const articleLastModified:Record<string,string>={"lovegobuy-spreadsheet-guide":"2026-09-01","lovegobuy-qc-photo-guide":"2026-09-01","lovegobuy-shipping-weight":"2026-09-01"};
export default function sitemap(): MetadataRoute.Sitemap {
  const pages=["","spreadsheet","finds","guide","qc","shipping","faq","articles"];
  return languages.flatMap(lang=>[...pages.map(page=>({url:`${base}/${lang}${page?`/${page}`:""}`,lastModified:new Date(pageLastModified[page])})),...articleSlugs.map(slug=>({url:`${base}/${lang}/articles/${slug}`,lastModified:new Date(articleLastModified[slug])}))]);
}
