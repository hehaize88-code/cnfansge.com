import { articleSlugs } from "./article-data";
import { getLocalizedArticle } from "./localized-article-data";
import { shippingSlugs } from "./shipping-articles";
import type { Lang } from "./site-data";
import type { ArticleCardItem } from "./localized-data";

export function articleCards(lang: Lang): ArticleCardItem[] {
  return [...shippingSlugs, ...articleSlugs.filter(slug => !(shippingSlugs as readonly string[]).includes(slug))].map(slug => {
    const article = getLocalizedArticle(lang, slug);
    return [article.tag, article.title, article.description, `/articles/${slug}`];
  });
}
