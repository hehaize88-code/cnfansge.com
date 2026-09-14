import type { Metadata } from "next";
import { searchArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Image Search, Product Links & Item Numbers",
  description: searchArticle.description,
  keywords: ["superbuy image search", "superbuy item number search", "superbuy product search", "search superbuy by link"],
  alternates: { canonical: `/articles/${searchArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={searchArticle} />; }
