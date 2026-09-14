import type { Metadata } from "next";
import { trustArticle } from "../../seo-article-data";
import { SeoArticlePage } from "../../seo-article-page";

export const metadata: Metadata = {
  title: "Superbuy Spreadsheet vs Reddit & Google Sheets",
  description: trustArticle.description,
  keywords: ["superbuy spreadsheet reddit", "superbuy google sheet", "superbuy spreadsheets", "trusted superbuy spreadsheet"],
  alternates: { canonical: `/articles/${trustArticle.slug}/` },
};

export default function Page() { return <SeoArticlePage article={trustArticle} />; }
