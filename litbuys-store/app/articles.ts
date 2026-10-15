import { articleData, articleSlugs as legacySlugs, type ArticleContent } from "./article-data";
import { articleDe } from "./article-de";
import { articleEs } from "./article-es";
import { articleFr } from "./article-fr";
import { articleIt } from "./article-it";
import newArticles from "./content-oct/new-articles.json";
import discovery from "./content-oct/core-discovery.json";
import shippingReview from "./content-oct/core-shipping-review.json";
import legacyDeEs from "./content-oct/legacy-de-es.json";
import legacyFrIt from "./content-oct/legacy-fr-it.json";
import type { Lang } from "./i18n";

export const addedSlugs = ["litbuy-hoodies-spreadsheet", "litbuy-finds-under-30", "litbuy-clothing-size-guide"] as const;
export const articleSlugs = [...legacySlugs, ...addedSlugs] as const;
export type ArticleSlug = typeof articleSlugs[number];
export const featuredArticles: ArticleSlug[] = [...addedSlugs, "litbuy-spreadsheet-2026"];
export const orderedArticleSlugs = [...featuredArticles, ...articleSlugs.filter((slug) => !featuredArticles.includes(slug))];
type TranslationSet = Record<string, Partial<Record<Lang, ArticleContent>>>;
const overrides: TranslationSet = { ...discovery, ...shippingReview, ...newArticles };
const oldTranslations: Partial<Record<Lang, Record<string, ArticleContent>>> = { de: articleDe, es: articleEs, fr: articleFr, it: articleIt };
const completedTranslations: TranslationSet = Object.fromEntries(Object.keys(legacyDeEs).map((slug) => [slug, {
  ...(legacyDeEs as TranslationSet)[slug], ...(legacyFrIt as TranslationSet)[slug],
}]));

export function getArticle(slug: ArticleSlug, lang: Lang): ArticleContent {
  const legacy = articleData[slug as keyof typeof articleData];
  const article = overrides[slug]?.[lang] ?? completedTranslations[slug]?.[lang] ?? oldTranslations[lang]?.[slug] ?? legacy?.[lang];
  if (!article) throw new Error(`Missing full article translation: ${lang}/${slug}`);
  // Never silently display English under a different language's URL.
  if (lang !== "en" && article === legacy?.en) throw new Error(`English fallback forbidden: ${lang}/${slug}`);
  return article;
}

export function articleDates(slug: ArticleSlug) {
  const isAdded = (addedSlugs as readonly string[]).includes(slug);
  return {
    published: isAdded ? "2026-10-15" : legacySlugs.indexOf(slug as typeof legacySlugs[number]) < 4 ? "2026-08-29" : "2026-09-22",
    modified: "2026-10-15",
  };
}

export function relatedArticles(slug: ArticleSlug): ArticleSlug[] {
  const cluster: ArticleSlug[] = /qc/.test(slug)
    ? ["litbuy-qc-photos-guide", "litbuy-qc-photo-checklist", "litbuy-order-status-guide"]
    : /shipping|cost|warehouse|status/.test(slug)
    ? ["litbuy-shipping-guide", "litbuy-shipping-weight-guide", "litbuy-cost-workflow-checklist"]
    : ["litbuy-spreadsheet-2026", "litbuy-hoodies-spreadsheet", "litbuy-clothing-size-guide", "litbuy-finds-under-30"];
  return cluster.filter((item) => item !== slug).slice(0, 3);
}
