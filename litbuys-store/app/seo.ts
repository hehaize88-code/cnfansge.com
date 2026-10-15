import type { Metadata } from "next";
import { articleDates, articleSlugs, getArticle, type ArticleSlug } from "./articles";
import { copies, innerCopies } from "./copy-data";
import { products } from "./catalog-data";
import { languageAlternates, localPath, pageKeys, SITE_ORIGIN, type Lang, type PageKey } from "./i18n";
import { articleImage, productLabel, ui } from "./ui-copy";

export function sitePaths(): string[][] {
  return [[], ...pageKeys.map((page) => [page]), ...articleSlugs.map((slug) => ["articles", slug]), ...products.map((product) => ["products", product.slug])];
}

const locale = { en: "en_US", de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT" };

export function pageMetadata(lang: Lang, segments: string[] = []): Metadata {
  const path = `/${segments.join("/")}`;
  let title = copies[lang].hero;
  let description = copies[lang].intro;
  let image = "/products/sweatshirt.webp";
  const articleSlug = segments[0] === "articles" && segments.length === 2 ? segments[1] as ArticleSlug : undefined;
  if (articleSlug && articleSlugs.includes(articleSlug)) {
    const article = getArticle(articleSlug, lang);
    title = article.title; description = article.deck; image = articleImage(articleSlug);
  } else if (segments[0] === "products") {
    const product = products.find((item) => item.slug === segments[1]);
    if (product) { title = `${productLabel(product, lang).name} — ${product.price}`; description = ui[lang].referenceNote; image = product.image; }
  } else if (segments.length === 1 && pageKeys.includes(segments[0] as PageKey)) {
    const copy = innerCopies[lang].pages[segments[0] as PageKey];
    title = /litbuy/i.test(copy.title) ? copy.title : `LitBuy · ${copy.title}`;
    description = copy.intro;
  }
  const url = SITE_ORIGIN + localPath(lang, path);
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: `${title} | LitBuys Store`, description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: articleSlug ? "article" : "website", title, description, url,
      siteName: "LitBuys Store", locale: locale[lang], alternateLocale: Object.values(locale).filter((value) => value !== locale[lang]),
      images: [{ url: SITE_ORIGIN + image }],
      ...(articleSlug ? { publishedTime: articleDates(articleSlug).published, modifiedTime: articleDates(articleSlug).modified } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [SITE_ORIGIN + image] },
    robots: { index: true, follow: true },
  };
}
