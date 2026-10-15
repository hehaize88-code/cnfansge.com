import type { MetadataRoute } from "next";
import { articleSlugs, languages } from "./site-content";
import { editorialDate } from "./editorial-config";
const base="https://lovegobuys.shop";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths=["","spreadsheet","finds","guide","qc","shipping","faq","articles",...articleSlugs.map(slug=>`articles/${slug}`)];
  return languages.flatMap(lang=>paths.map(path=>({url:`${base}/${lang}${path?`/${path}`:""}`,lastModified:new Date(editorialDate),alternates:{languages:Object.fromEntries([...languages.map(code=>[code,`${base}/${code}${path?`/${path}`:""}`]),["x-default",`${base}/en${path?`/${path}`:""}`]])}})));
}
