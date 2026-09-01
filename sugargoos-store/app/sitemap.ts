import type { MetadataRoute } from "next";
import { SITE_ORIGIN, languages, localizedPath, routes } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) => routes.map((path) => ({
    url: `${SITE_ORIGIN}${localizedPath(lang, path)}`,
    lastModified: new Date("2026-09-01"),
    changeFrequency: path.startsWith("articles/") ? "monthly" as const : "weekly" as const,
    priority: path === "" ? 1 : path === "spreadsheet" ? 0.95 : path.startsWith("articles/") ? 0.75 : 0.85,
    alternates: { languages: { ...Object.fromEntries(languages.map((alt) => [alt, `${SITE_ORIGIN}${localizedPath(alt, path)}`])), "x-default": `${SITE_ORIGIN}${localizedPath("en", path)}` } },
  })));
}
