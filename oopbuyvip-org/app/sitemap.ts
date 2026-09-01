import type { MetadataRoute } from "next";
import { articleSlugs, languages, navKeys } from "./content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://oopbuyvip.org";
  const sections = navKeys.filter((key) => key !== "home");
  const paths = ["", ...sections, ...articleSlugs.map((slug) => `articles/${slug}`)];
  return languages.flatMap((lang) => paths.map((path) => ({
    url: `${base}/${lang}${path ? `/${path}` : ""}`,
    lastModified: new Date("2026-09-01"),
    changeFrequency: path.startsWith("articles/") ? "monthly" as const : "weekly" as const,
    priority: path === "" ? 1 : path === "spreadsheet" || path === "finds" ? 0.9 : 0.75,
    alternates: { languages: { ...Object.fromEntries(languages.map((code) => [code, `${base}/${code}${path ? `/${path}` : ""}`])), "x-default": `${base}/en${path ? `/${path}` : ""}` } },
  })));
}
