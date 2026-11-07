import { discoverySlugs } from "./discovery-articles";
import { articleSlugs } from "./article-data";
import { getLocalizedArticle } from "./localized-article-data";
import { shippingSlugs } from "./shipping-articles";
import type { Lang } from "./site-data";
import type { ArticleCardItem } from "./localized-data";

export function articleCards(lang: Lang): ArticleCardItem[] {
  return [...discoverySlugs, ...shippingSlugs, ...articleSlugs.filter(slug => ![...shippingSlugs, ...discoverySlugs].includes(slug as never))].map(slug => {
    const article = getLocalizedArticle(lang, slug);
    return [article.tag, article.title, article.description, `/articles/${slug}`];
  });
}
