import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { articleSlugs, ArticleSlug } from "@/components/article-data";
import { KakobuyHome } from "@/components/KakobuyHome";
import { ResearchPage, SectionKey } from "@/components/ResearchPage";
import { articleMetadata, homeMetadata, sectionMetadata } from "@/components/seo-data";
import type { Lang } from "@/components/site-data";

const sections: SectionKey[] = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];

export function localizedStaticParams() {
  return [
    { segments: [] as string[] },
    ...sections.map((section) => ({ segments: [section] })),
    ...articleSlugs.map((slug) => ({ segments: ["articles", slug] })),
  ];
}

export async function localizedMetadata(lang: Lang, params: Promise<{ segments?: string[] }>): Promise<Metadata> {
  const { segments = [] } = await params;
  if (segments.length === 0) return homeMetadata(lang);
  if (segments.length === 1 && sections.includes(segments[0] as SectionKey)) {
    return sectionMetadata(segments[0] as SectionKey, lang);
  }
  if (segments.length === 2 && segments[0] === "articles" && articleSlugs.includes(segments[1] as ArticleSlug)) {
    return articleMetadata(segments[1] as ArticleSlug, lang);
  }
  return {};
}

export async function LocalizedRoute({ lang, params }: { lang: Lang; params: Promise<{ segments?: string[] }> }) {
  const { segments = [] } = await params;
  if (segments.length === 0) return <KakobuyHome initialLang={lang} />;
  if (segments.length === 1 && sections.includes(segments[0] as SectionKey)) {
    return <ResearchPage section={segments[0] as SectionKey} initialLang={lang} />;
  }
  if (segments.length === 2 && segments[0] === "articles" && articleSlugs.includes(segments[1] as ArticleSlug)) {
    return <ArticlePage slug={segments[1] as ArticleSlug} initialLang={lang} />;
  }
  notFound();
}

