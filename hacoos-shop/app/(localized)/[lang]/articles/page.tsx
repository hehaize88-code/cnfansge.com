import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/page-templates";
import { alternateUrls, copy, locales, sectionPath, SITE_URL, type Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params; if (!locales.includes(lang as Locale)) return {}; const locale = lang as Locale; const t = copy[locale];
  return { title: t.sectionTitles.articles, description: t.sectionIntros.articles, alternates: { canonical: `${SITE_URL}${sectionPath(locale, "articles")}`, languages: alternateUrls("articles") } };
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; if (!locales.includes(lang as Locale)) notFound(); return <SectionPage locale={lang as Locale} section="articles" />; }
