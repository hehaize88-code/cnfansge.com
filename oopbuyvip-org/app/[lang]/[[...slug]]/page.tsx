import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleSlugs, copy, discoveryCopy, languages, navKeys, type ArticleSlug, type Language } from "../../content";
import { SitePage } from "../../site-page";

const SITE = "https://oopbuyvip.org";
const validSections = navKeys.filter((key) => key !== "home");
type Params = Promise<{ lang: string; slug?: string[] }>;

function compact(value: string, limit: number) {
  if (value.length <= limit) return value;
  const slice = value.slice(0, limit - 1);
  const boundary = slice.lastIndexOf(" ");
  return `${slice.slice(0, boundary > limit * 0.7 ? boundary : undefined).replace(/[,:;\s]+$/, "")}…`;
}

export const dynamicParams = false;

export function generateStaticParams(): { lang: string; slug?: string[] }[] {
  return languages.flatMap((lang) => [
    { lang, slug: [] },
    ...validSections.map((section) => ({ lang, slug: [section] })),
    ...articleSlugs.map((slug) => ({ lang, slug: ["articles", slug] })),
  ]);
}

function isValid(lang: string, slug: string[]) {
  if (!languages.includes(lang as Language)) return false;
  if (slug.length === 0) return true;
  if (slug.length === 1) return validSections.includes(slug[0] as (typeof validSections)[number]);
  return slug.length === 2 && slug[0] === "articles" && articleSlugs.includes(slug[1] as ArticleSlug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang, slug = [] } = await params;
  if (!isValid(rawLang, slug)) return {};
  const lang = rawLang as Language;
  const t = copy[lang];
  const path = slug.join("/");
  const article = slug[0] === "articles" && slug[1] ? t.articles[slug[1] as ArticleSlug] : null;
  const page = slug[0] ? t.page[slug[0]] : null;
  const rawTitle = article?.title ?? page?.title ?? `${discoveryCopy[lang].title} | OOPBUY VIP`;
  const title = compact(rawTitle, 59);
  const rawDescription = article?.description ?? page?.body ?? t.hero.body;
  const description = compact(rawDescription, 158);
  const canonical = `${SITE}/${lang}${path ? `/${path}` : ""}`;
  const languagesMap = Object.fromEntries(languages.map((code) => [code, `${SITE}/${code}${path ? `/${path}` : ""}`]));
  const socialImages = article ? [] : [{ url: "/og.png", width: 1729, height: 910, alt: "OOPBUY VIP" }];
  return {
    title,
    description,
    alternates: { canonical, languages: { ...languagesMap, "x-default": `${SITE}/en${path ? `/${path}` : ""}` } },
    openGraph: { title, description, type: article ? "article" : "website", url: canonical, siteName: "OOPBUY VIP", locale: lang, images: socialImages },
    twitter: { card: article ? "summary" : "summary_large_image", title, description, images: article ? [] : ["/og.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function LocalizedPage({ params }: { params: Params }) {
  const { lang: rawLang, slug = [] } = await params;
  if (!isValid(rawLang, slug)) notFound();
  return <SitePage lang={rawLang as Language} segments={slug} />;
}
