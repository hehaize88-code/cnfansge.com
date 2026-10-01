import type { MetadataRoute } from "next";
import { articleSlugs, articles } from "@/lib/articles";
import { pageSlugs } from "@/lib/page-content";
import { locales } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sugargoos.shop";
  const now = new Date("2026-10-01T08:00:00Z");
  return locales.flatMap((locale) => [
    { url:`${base}/${locale}/`, lastModified:now, changeFrequency:"weekly" as const, priority:locale === "en" ? 1 : .8 },
    ...pageSlugs.map((slug) => ({url:`${base}/${locale}/${slug}/`,lastModified:now,changeFrequency:"weekly" as const,priority:.75})),
    ...articleSlugs.map((slug) => ({url:`${base}/${locale}/articles/${slug}/`,lastModified:new Date(articles[locale][slug].modifiedISO ?? "2026-10-01"),changeFrequency:"monthly" as const,priority:.7})),
  ]);
}
