import type { MetadataRoute } from "next";
import { articleSlugs } from "@/components/article-data";
import { baseUrl, languageAlternates } from "@/components/seo-data";
import { languages, localizedPath } from "@/components/site-data";

export const dynamic = "force-static";

const sections = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
const updated = new Date("2026-08-31T00:00:00.000Z");

function entry(pathname: string, lang: (typeof languages)[number], priority: number, frequency: "weekly" | "monthly"): MetadataRoute.Sitemap[number] {
  const lastModified = pathname.includes("kakobuy-us-delivery-address-format") ? new Date("2026-09-04T00:00:00.000Z") : pathname.includes("kakobuy-usa-pre-order-readiness-checklist") ? new Date("2026-09-02T00:00:00.000Z") : updated;
  return {
    url: `${baseUrl}${localizedPath(pathname, lang) === "/" ? "" : localizedPath(pathname, lang)}`,
    lastModified,
    changeFrequency: frequency,
    priority,
    alternates: {
      languages: Object.fromEntries(Object.entries(languageAlternates(pathname)).map(([code, path]) => [code, `${baseUrl}${path === "/" ? "" : path}`])),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) => [
    entry("/", lang, lang === "en" ? 1 : 0.9, "weekly"),
    ...sections.map((section) => entry(`/${section}`, lang, section === "finds" ? 0.95 : section === "spreadsheet" ? 0.9 : 0.8, "weekly")),
    ...articleSlugs.map((slug) => entry(`/articles/${slug}`, lang, 0.75, "monthly")),
  ]);
}
