import type { MetadataRoute } from "next";
import { languages, languageAlternates, localPath, SITE_ORIGIN } from "./i18n";
import { sitePaths } from "./seo";
import { articleDates, type ArticleSlug } from "./articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths().flatMap((segments) => {
    const path = `/${segments.join("/")}`;
    return languages.map((lang) => ({
      url: SITE_ORIGIN + localPath(lang, path),
      lastModified: new Date(`${segments[0] === "articles" && segments[1] ? articleDates(segments[1] as ArticleSlug).modified : segments[0] === "products" ? "2026-10-15" : "2026-11-07"}T00:00:00Z`),
      alternates: { languages: languageAlternates(path) },
    }));
  });
}
