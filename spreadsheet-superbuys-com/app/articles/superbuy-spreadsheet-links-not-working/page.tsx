import type { Metadata } from "next";
import { SeoArticlePage } from "../../seo-article-page";
import { newArticles } from "../../new-article-data";
const article = newArticles[1];
export const metadata: Metadata = {title: article.title, description: article.description, alternates: {canonical: "/articles/superbuy-spreadsheet-links-not-working/"}};
export default function Page() {return <SeoArticlePage article={article} />;}
