import type { Article } from "./seo-articles";
import newEn from "./new-articles-en.json";
import newDe from "./new-articles-de.json";
import newEs from "./new-articles-es.json";
import newFr from "./new-articles-fr.json";
import newIt from "./new-articles-it.json";
import updatesEn from "./article-updates-en.json";
import updatesDe from "./article-updates-de.json";
import updatesEs from "./article-updates-es.json";
import updatesFr from "./article-updates-fr.json";
import updatesIt from "./article-updates-it.json";

import expansionEn from "./seo-expansion-en.json";
import expansionDe from "./seo-expansion-de.json";
import expansionEs from "./seo-expansion-es.json";
import expansionFr from "./seo-expansion-fr.json";
import expansionIt from "./seo-expansion-it.json";
import refreshData from "./seo-refresh.json";

type Locale = "en" | "de" | "es" | "fr" | "it";
type Update = {
  title: string;
  description: string;
  section: Article["sections"][number];
  related: string[];
};

export type NewArticleSlug = keyof typeof newEn | keyof typeof expansionEn;
export const newArticleSlugs = [...Object.keys(newEn), ...Object.keys(expansionEn)] as NewArticleSlug[];
const additions = { en: { ...newEn, ...expansionEn }, de: { ...newDe, ...expansionDe }, es: { ...newEs, ...expansionEs }, fr: { ...newFr, ...expansionFr }, it: { ...newIt, ...expansionIt } } as Record<Locale, Record<string, Article>>;
const updates: Record<Locale, Record<string, Update>> = { en: updatesEn, de: updatesDe, es: updatesEs, fr: updatesFr, it: updatesIt };
const updateDates = { en: "1 October 2026", de: "1. Oktober 2026", es: "1 de octubre de 2026", fr: "1 octobre 2026", it: "1 ottobre 2026" };

export function articleLibrary(lang: Locale, originals: Record<string, Article>): Record<string, Article> {
  const refreshed = Object.fromEntries(Object.entries(originals).map(([slug, article]) => {
    const update = updates[lang][slug];
    return [slug, update ? {
      ...article,
      title: update.title,
      description: update.description,
      updated: updateDates[lang],
      modified: "2026-10-01",
      related: update.related,
      sections: [...article.sections, update.section],
    } : article];
  }));
  const latest = (refreshData as Record<Locale, Record<string, Update>>)[lang];
  const dates = { en: "15 October 2026", de: "15. Oktober 2026", es: "15 de octubre de 2026", fr: "15 octobre 2026", it: "15 ottobre 2026" };
  for (const [slug, update] of Object.entries(latest)) {
    const article = refreshed[slug];
    if (!article) throw new Error(`Missing article: ${lang}/${slug}`);
    refreshed[slug] = { ...article, title: update.title, description: update.description,
      updated: dates[lang], modified: "2026-10-15", related: update.related,
      sections: [update.section, ...article.sections.slice(1)],
    };
  }
  return { ...refreshed, ...additions[lang] };
}
