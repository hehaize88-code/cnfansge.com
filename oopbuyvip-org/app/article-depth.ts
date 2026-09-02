import type { Article, ArticleSlug } from "./seo-articles";

export type ArticleDepth = Partial<Record<ArticleSlug, string[][]>>;

export function applyArticleDepth(article: Omit<Article, "sources">, depth?: string[][]): Omit<Article, "sources"> {
  return {
    ...article,
    sections: article.sections.map((section, sectionIndex) => ({
      ...section,
      paragraphs: section.paragraphs.map((paragraph, paragraphIndex) => {
        const addition = depth?.[sectionIndex]?.[paragraphIndex];
        return addition ? `${paragraph} ${addition}` : paragraph;
      }),
    })),
  };
}
