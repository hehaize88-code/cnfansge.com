import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleData, articleSlugs, ArticleSlug } from "../../article-data";
import { ArticlePage } from "../../site";

export function generateStaticParams() { return articleSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!articleSlugs.includes(slug as ArticleSlug)) return {};
  const article = articleData[slug as ArticleSlug].en;
  return {
    title: `${article.title} | LitBuys Store`,
    description: article.deck,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: { type: "article", title: article.title, description: article.deck, url: `https://litbuys.store/articles/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!articleSlugs.includes(slug as ArticleSlug)) notFound();
  return <ArticlePage slug={slug as ArticleSlug} />;
}
