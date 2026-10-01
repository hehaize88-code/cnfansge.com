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

type Locale = "en" | "de" | "es" | "fr" | "it";
type Update = {
  title: string;
  description: string;
  section: Article["sections"][number];
  related: string[];
};

export type NewArticleSlug = keyof typeof newEn;
export const newArticleSlugs = Object.keys(newEn) as NewArticleSlug[];
const additions = { en: newEn, de: newDe, es: newEs, fr: newFr, it: newIt } as Record<Locale, Record<string, Article>>;
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
  return { ...refreshed, ...additions[lang] };
}
