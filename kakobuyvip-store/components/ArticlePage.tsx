import { ArticleReader } from "./ArticleReader";
import { getLocalizedArticle } from "./localized-article-data";
import { sourceHeadings, sourcesForArticle } from "./source-data";
import { articleDates } from "./article-dates";
import { relatedArticleSlugs } from "./article-navigation";
import type { ArticleSlug } from "./article-data";
import type { Lang } from "./site-data";

export function ArticlePage({ slug, initialLang = "en" }: { slug: ArticleSlug; initialLang?: Lang }) {
  const related = relatedArticleSlugs[slug].map(relatedSlug => ({ slug: relatedSlug, ...getLocalizedArticle(initialLang, relatedSlug), sections: [], takeaways: [], sourceNote: "" }));
  return <ArticleReader slug={slug} initialLang={initialLang} article={getLocalizedArticle(initialLang, slug)} sources={sourcesForArticle(slug)} dates={articleDates(slug)} related={related} sourceHeading={sourceHeadings[initialLang]} />;
}
