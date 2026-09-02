import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/page-templates";
import { alternateUrls, articlePath, getArticles, locales, SITE_URL, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.flatMap((lang) => getArticles(lang).map((article) => ({ lang, slug: article.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> { const { lang, slug } = await params; if (!locales.includes(lang as Locale)) return {}; const locale = lang as Locale; const article = getArticles(locale).find(item => item.slug === slug); if (!article) return {}; const published = article.published || "2026-09-01"; return { title: article.title, description: article.deck, alternates: { canonical: `${SITE_URL}${articlePath(locale, slug)}`, languages: alternateUrls("article", slug) }, openGraph: { type: "article", title: article.title, description: article.deck, url: `${SITE_URL}${articlePath(locale, slug)}`, publishedTime: published, modifiedTime: published, images: ["/og.png"] } }; }
export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) { const { lang, slug } = await params; if (!locales.includes(lang as Locale)) notFound(); const locale = lang as Locale; const article = getArticles(locale).find(item => item.slug === slug); if (!article) notFound(); return <ArticlePage locale={locale} article={article} />; }
