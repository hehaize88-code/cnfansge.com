import en from "./en.json";
import de from "./de.json";
import es from "./es.json";
import fr from "./fr.json";
import it from "./it.json";

export const releaseCopy = { en, de, es, fr, it };
export const releaseDate = "2026-10-15";
const metadata = {
  "usfans-link-not-working": { imageIndex: 0, related: ["use-usfans-spreadsheet", "taobao-weidian-1688", "usfans-payment-methods"] },
  "usfans-payment-methods": { imageIndex: 4, related: ["beginner-ordering-guide", "usfans-haul-budget", "international-shipping-cost"] },
  "usfans-jackets-spreadsheet": { imageIndex: 6, category: "jackets", related: ["usfans-hoodies-spreadsheet", "qc-photo-checklist", "usfans-volumetric-weight"] }
};

export function applyContentRelease(articles, language) {
  const copy = releaseCopy[language];
  for (const [slug, article] of Object.entries(copy.articles)) {
    articles[slug] = { ...metadata[slug], ...article, datePublished: releaseDate, dateModified: releaseDate, sourceLabel: copy.review };
  }
  for (const [slug, improvement] of Object.entries(copy.improvements)) {
    const article = articles[slug];
    articles[slug] = { ...article, summary: improvement.summary, sections: [improvement.section, ...article.sections], dateModified: releaseDate, sourceLabel: copy.review };
  }
  return articles;
}

export function articleWordCount(article) {
  const content = [article.summary || "", ...article.sections.flatMap(section => [section.heading, ...section.paragraphs, ...(section.checklist || []), ...(section.table ? [section.table.headers.join(" "), ...section.table.rows.map(row => row.join(" "))] : [])])].join(" ");
  return content.trim().split(/\s+/u).length;
}
