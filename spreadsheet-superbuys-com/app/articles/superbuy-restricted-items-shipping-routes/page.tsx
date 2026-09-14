import type { Metadata } from "next";
import { restrictedItemsArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Restricted Items & Shipping Routes",
  description: restrictedItemsArticle.description,
  keywords: ["superbuy restricted items", "superbuy shipping routes", "superbuy prohibited items", "superbuy route eligibility"],
  alternates: { canonical: `/articles/${restrictedItemsArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={restrictedItemsArticle} />; }
