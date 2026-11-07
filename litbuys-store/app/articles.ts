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
import coupons from "./content-nov/coupons.json";
import tracking from "./content-nov/tracking.json";
import returns from "./content-nov/returns.json";
import { refreshArticle, revisedSlugs } from "./editorial-refresh";

const octoberSlugs = ["litbuy-hoodies-spreadsheet", "litbuy-finds-under-30", "litbuy-clothing-size-guide"] as const;
export const novemberSlugs = ["litbuy-coupons-guide", "litbuy-tracking-not-updating", "litbuy-returns-refunds-guide"] as const;
export const addedSlugs = [...octoberSlugs, ...novemberSlugs] as const;
export const articleSlugs = [...legacySlugs, ...addedSlugs] as const;
export type ArticleSlug = typeof articleSlugs[number];
export const featuredArticles: ArticleSlug[] = [...novemberSlugs, "litbuy-spreadsheet-2026"];
export const orderedArticleSlugs = [...featuredArticles, ...articleSlugs.filter((slug) => !featuredArticles.includes(slug))];
type TranslationSet = Record<string, Partial<Record<Lang, ArticleContent>>>;
const overrides: TranslationSet = { ...discovery, ...shippingReview, ...newArticles, ...coupons, ...tracking, ...returns };
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
  return refreshArticle(slug, lang, article);
}

export function articleDates(slug: ArticleSlug) {
  const isAdded = (octoberSlugs as readonly string[]).includes(slug);
  const isNovember = (novemberSlugs as readonly string[]).includes(slug);
  return {
    published: isNovember ? "2026-11-07" : isAdded ? "2026-10-15" : legacySlugs.indexOf(slug as typeof legacySlugs[number]) < 4 ? "2026-08-29" : "2026-09-22",
    modified: isNovember || revisedSlugs.includes(slug) ? "2026-11-07" : "2026-10-15",
  };
}

export function relatedArticles(slug: ArticleSlug): ArticleSlug[] {
  const cluster: ArticleSlug[] = /returns/.test(slug)
    ? ["litbuy-qc-photo-checklist", "litbuy-order-status-guide", "litbuy-tracking-not-updating"]
    : /tracking|status/.test(slug)
    ? ["litbuy-tracking-not-updating", "litbuy-order-status-guide", "litbuy-shipping-guide", "litbuy-returns-refunds-guide"]
    : /coupons|cost/.test(slug)
    ? ["litbuy-coupons-guide", "litbuy-cost-workflow-checklist", "litbuy-shipping-weight-guide", "litbuy-finds-under-30"]
    : /qc/.test(slug)
    ? ["litbuy-qc-photos-guide", "litbuy-qc-photo-checklist", "litbuy-returns-refunds-guide", "litbuy-clothing-size-guide"]
    : /shipping|warehouse/.test(slug)
    ? ["litbuy-shipping-guide", "litbuy-tracking-not-updating", "litbuy-coupons-guide", "litbuy-shipping-weight-guide"]
    : ["litbuy-spreadsheet-2026", "litbuy-hoodies-spreadsheet", "litbuy-clothing-size-guide", "litbuy-finds-under-30"];
  return cluster.filter((item) => item !== slug).slice(0, 3);
}
