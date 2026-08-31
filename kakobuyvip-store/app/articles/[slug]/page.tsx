import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug, articleSlugs, ArticleSlug } from "@/components/article-data";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const article = articleBySlug[slug as ArticleSlug];
  if (!article) return {};
  return {
    title: `${article.title} | KakobuyVIP`,
    description: article.description,
    keywords: [article.primaryKeyword, "Kakobuy guide", "Kakobuy warehouse", "Kakobuy shipping"],
    alternates: { canonical: `/articles/${slug}` },
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(!articleSlugs.includes(slug as ArticleSlug))notFound();
  return <ArticlePage slug={slug as ArticleSlug}/>;
}
