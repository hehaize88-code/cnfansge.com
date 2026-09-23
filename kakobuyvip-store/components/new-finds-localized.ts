import type { Lang } from "./site-data";
import type { LocalizedArticle } from "./localized-article-data";
import { newFindsArticles, newFindsSlugs, type NewFindsSlug } from "./new-finds-articles";
import { newFindsAddenda } from "./new-finds-addenda";
import { newFindsFinalNotes } from "./new-finds-final-notes";
import de from "./new-finds-de.json";
import es from "./new-finds-es.json";
import fr from "./new-finds-fr.json";
import it from "./new-finds-it.json";

type TranslatedFields = Record<string, string>;
const translated: Record<Exclude<Lang, "en">, Record<NewFindsSlug, TranslatedFields>> = { de, es, fr, it };

export function newFindsArticle(lang: Lang, slug: NewFindsSlug): LocalizedArticle {
  const original = newFindsArticles[slug];
  const sections = [
    ...original.sections,
    ...newFindsAddenda[slug],
    ...(newFindsFinalNotes[slug] ? [newFindsFinalNotes[slug]] : []),
  ];
  if (lang === "en") return { ...original, sections };
  const fields = translated[lang][slug];
  return {
    tag: fields.tag,
    title: fields.title,
    description: fields.description,
    sourceNote: fields.sourceNote,
    sections: sections.map((_, index) => ({
      heading: fields[`heading${index}`],
      body: fields[`body${index}`],
    })),
    takeaways: original.takeaways.map((_, index) => fields[`takeaway${index}`]),
  };
}

export const newFindsCards = (lang: Lang) => newFindsSlugs.map((slug) => {
  const article = newFindsArticle(lang, slug);
  return [article.tag, article.title, article.description, `/articles/${slug}`] as const;
});
