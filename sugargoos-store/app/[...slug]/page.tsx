import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "../articles-data";
import { SitePage } from "../site-page";
import { SITE_ORIGIN, copy, isLanguage, languages, localizedPath, routes, type Language } from "../site-data";

type Props = { params: Promise<{ slug: string[] }> };

function resolve(slug: string[]) {
  const first = slug[0];
  const lang: Language = isLanguage(first) && first !== "en" ? first : "en";
  const path = lang === "en" ? slug.join("/") : slug.slice(1).join("/");
  return { lang, path };
}

function isValidPath(path: string) {
  return (routes as readonly string[]).includes(path);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { lang, path } = resolve(slug);
  if (!isValidPath(path) || !path) return {};
  const t = copy[lang];
  const articleSlug = path.startsWith("articles/") ? path.split("/")[1] : null;
  const article = articleSlug ? getArticle(lang, articleSlug) : null;
  const title = article?.title ?? t.pageTitles[path];
  const description = article?.dek ?? t.pageIntros[path];
  const canonical = `${SITE_ORIGIN}${localizedPath(lang, path)}`;
  const alternateLanguages = Object.fromEntries(languages.map((item) => [item, `${SITE_ORIGIN}${localizedPath(item, path)}`]));
  return {
    title,
    description,
    keywords: article ? [article.primaryKeyword, "Sugargoo guide", "Sugargoo 2026"] : undefined,
    other: { "content-language": lang },
    alternates: { canonical, languages: { ...alternateLanguages, "x-default": `${SITE_ORIGIN}${localizedPath("en", path)}` } },
    openGraph: { title, description, url: canonical, type: article ? "article" : "website", images: [{ url: `${SITE_ORIGIN}/og.png`, width: 1200, height: 630, alt: "Sugar Scout product research desk" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_ORIGIN}/og.png`] },
  };
}

export default async function RoutedPage({ params }: Props) {
  const { slug } = await params;
  const { lang, path } = resolve(slug);
  if (!path || !isValidPath(path)) notFound();
  const articleSlug = path.startsWith("articles/") ? path.split("/")[1] : null;
  const article = articleSlug ? getArticle(lang, articleSlug) : null;
  if (articleSlug && !article) notFound();
  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.dek,
        datePublished: "2026-09-01",
        dateModified: "2026-09-01",
        wordCount: article.sections.flatMap((section) => section.body).join(" ").trim().split(/\s+/).length,
        inLanguage: lang,
        mainEntityOfPage: `${SITE_ORIGIN}${localizedPath(lang, path)}`,
        author: { "@type": "Organization", name: "Sugar Scout" },
        publisher: { "@type": "Organization", name: "Sugar Scout" },
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}${localizedPath(lang)}` },
          { "@type": "ListItem", position: 2, name: copy[lang].pageTitles[path] ?? path, item: `${SITE_ORIGIN}${localizedPath(lang, path)}` },
        ],
      };
  return <><script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SitePage lang={lang} path={path} /></>;
}
