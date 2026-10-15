import type { Metadata } from "next";
import { SeoArticlePage } from "../../seo-article-page";
import { newArticles } from "../../new-article-data";
const article = newArticles[3];
export const metadata: Metadata = {title: article.title, description: article.description, alternates: {canonical: "/articles/superbuy-hoodie-jacket-measurements/"}};
export default function Page() {return <SeoArticlePage article={article} />;}
