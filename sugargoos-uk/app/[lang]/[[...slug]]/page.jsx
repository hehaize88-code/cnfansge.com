import SitePage from "../../../components/SitePage";
import { languages, localPaths, pageMeta } from "../../../data/site";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    localPaths.map((slug) => ({ lang, slug: slug.length ? slug : undefined }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug = [] } = await params;
  const cleanSlug = Array.isArray(slug) ? slug : [];
  const knownPath = localPaths.some((parts) => parts.join("/") === cleanSlug.join("/"));
  if (!languages.includes(lang) || !knownPath) notFound();
  const key = cleanSlug.join("/") || "home";
  const meta = pageMeta(lang, key);
  const path = cleanSlug.length ? `/${lang}/${cleanSlug.join("/")}` : `/${lang}`;
  const alternates = Object.fromEntries(
    languages.map((locale) => [locale, `https://sugargoos.uk/${locale}${cleanSlug.length ? `/${cleanSlug.join("/")}` : ""}`])
  );
  alternates["x-default"] = `https://sugargoos.uk/en${cleanSlug.length ? `/${cleanSlug.join("/")}` : ""}`;
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://sugargoos.uk${path}`, languages: alternates },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: key.startsWith("articles/") ? "article" : "website",
      url: `https://sugargoos.uk${path}`,
      siteName: "Sugargoo UK Finds",
      locale: lang
    }
  };
}

export default async function LocalisedPage({ params }) {
  const { lang, slug = [] } = await params;
  const cleanSlug = Array.isArray(slug) ? slug : [];
  const knownPath = localPaths.some((parts) => parts.join("/") === cleanSlug.join("/"));
  if (!languages.includes(lang) || !knownPath) notFound();
  return <SitePage lang={lang} slug={cleanSlug} />;
}
