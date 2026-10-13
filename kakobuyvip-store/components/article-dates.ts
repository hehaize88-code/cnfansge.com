import { articleBySlug, type ArticleSlug } from "./article-data";
import { improvedSlugs } from "./article-improvements";

export function articleDates(slug: ArticleSlug) {
  const published = new Date(`${articleBySlug[slug].updated} 00:00:00 UTC`).toISOString().slice(0, 10);
  const modified = (improvedSlugs as readonly string[]).includes(slug) ? "2026-10-13" : published;
  return { published, modified };
}
