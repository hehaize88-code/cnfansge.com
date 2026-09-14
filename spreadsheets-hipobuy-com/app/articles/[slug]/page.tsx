import { notFound } from "next/navigation";
import BuyerArticle from "../BuyerArticle";
import { articleBySlug, articles } from "../articleData";
import { pageMetadata } from "../../seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle,
    description: article.description,
    path: `/articles/${article.slug}/`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();
  return <BuyerArticle article={article} />;
}
