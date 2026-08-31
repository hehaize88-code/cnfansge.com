import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug, articleSlugs, ArticleSlug } from "@/components/article-data";
import { articleMetadata } from "@/components/seo-data";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const article = articleBySlug[slug as ArticleSlug];
  if (!article) return {};
  return articleMetadata(slug as ArticleSlug, "en");
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(!articleSlugs.includes(slug as ArticleSlug))notFound();
  return <ArticlePage slug={slug as ArticleSlug} initialLang="en"/>;
}
