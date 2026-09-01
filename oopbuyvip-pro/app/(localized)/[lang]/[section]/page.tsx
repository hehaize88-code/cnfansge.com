import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/page-templates";
import { alternateUrls, copy, locales, sections, sectionPath, SITE_URL, type Locale, type Section } from "@/lib/site";

export function generateStaticParams() { return locales.flatMap((lang) => sections.filter((section) => section !== "articles").map((section) => ({ lang, section }))); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string; section: string }> }): Promise<Metadata> {
  const { lang, section } = await params;
  if (!locales.includes(lang as Locale) || !sections.includes(section as Section)) return {};
  const locale = lang as Locale; const item = section as Section; const t = copy[locale];
  return { title: t.sectionTitles[item], description: t.sectionIntros[item], alternates: { canonical: `${SITE_URL}${sectionPath(locale, item)}`, languages: alternateUrls(item) }, openGraph: { title: t.sectionTitles[item], description: t.sectionIntros[item], url: `${SITE_URL}${sectionPath(locale, item)}`, images: ["/og.png"] } };
}

export default async function Page({ params }: { params: Promise<{ lang: string; section: string }> }) {
  const { lang, section } = await params;
  if (!locales.includes(lang as Locale) || !sections.includes(section as Section) || section === "articles") notFound();
  return <SectionPage locale={lang as Locale} section={section as Section} />;
}
