import type { MetadataRoute } from "next";
import { languages, languageAlternates, localPath, SITE_ORIGIN } from "./i18n";
import { sitePaths } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths().flatMap((segments) => {
    const path = `/${segments.join("/")}`;
    return languages.map((lang) => ({
      url: SITE_ORIGIN + localPath(lang, path),
      lastModified: new Date("2026-10-15T00:00:00Z"),
      alternates: { languages: languageAlternates(path) },
    }));
  });
}
