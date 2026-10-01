import type { MetadataRoute } from "next";
import { articleSlugs, copy, languages, navKeys, type ArticleSlug } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://oopbuyvip.org";
  const sections = navKeys.filter((key) => key !== "home");
  const paths = ["", ...sections, ...articleSlugs.map((slug) => `articles/${slug}`)];
  return languages.flatMap((lang) => paths.map((path) => ({
    url: `${base}/${lang}${path ? `/${path}` : ""}`,
    lastModified: new Date(path.startsWith("articles/")
      ? copy.en.articles[path.slice("articles/".length) as ArticleSlug].modified ?? "2026-09-01"
      : path === "" || path === "articles" ? "2026-10-01" : "2026-09-01"),
    changeFrequency: path.startsWith("articles/") ? "monthly" as const : "weekly" as const,
    priority: path === "" ? 1 : path === "spreadsheet" || path === "finds" ? 0.9 : 0.75,
    alternates: { languages: { ...Object.fromEntries(languages.map((code) => [code, `${base}/${code}${path ? `/${path}` : ""}`])), "x-default": `${base}/en${path ? `/${path}` : ""}` } },
  })));
}
