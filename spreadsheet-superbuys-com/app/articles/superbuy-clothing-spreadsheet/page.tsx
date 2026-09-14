import type { Metadata } from "next";
import { clothingArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Clothing Spreadsheet: Size & QC Guide",
  description: clothingArticle.description,
  keywords: ["superbuy clothing spreadsheet", "superbuy t shirt spreadsheet", "superbuy hoodie spreadsheet", "superbuy gymwear spreadsheet"],
  alternates: { canonical: `/articles/${clothingArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={clothingArticle} />; }
