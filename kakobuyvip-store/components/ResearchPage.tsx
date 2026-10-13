import { ResearchClient } from "./ResearchClient";
import { articleCards } from "./article-cards";
import type { Lang } from "./site-data";
export type SectionKey = "spreadsheet" | "finds" | "guide" | "qc" | "shipping" | "faq" | "articles";
export function ResearchPage({ section, initialLang = "en" }: { section: SectionKey; initialLang?: Lang }) {
  return <ResearchClient section={section} initialLang={initialLang} articles={articleCards(initialLang)} />;
}
