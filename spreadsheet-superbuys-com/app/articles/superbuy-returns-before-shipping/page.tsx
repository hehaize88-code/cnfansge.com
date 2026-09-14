import type { Metadata } from "next";
import { returnsArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Returns & Exchanges Before Shipping",
  description: returnsArticle.description,
  keywords: ["superbuy return", "superbuy exchange", "superbuy warehouse return", "superbuy after sales"],
  alternates: { canonical: `/articles/${returnsArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={returnsArticle} />; }
