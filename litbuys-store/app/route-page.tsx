import { notFound } from "next/navigation";
import { HomePage, SubPage, ArticlePage, ProductDetailPage } from "./site";
import { articleSlugs, type ArticleSlug } from "./articles";
import { products } from "./catalog-data";
import { pageKeys, type PageKey, type Lang } from "./i18n";

export function RoutePage({ lang, path = [] }: { lang: Lang; path?: string[] }) {
  if (path.length === 0) return <HomePage language={lang} />;
  if (path.length === 1 && pageKeys.includes(path[0] as PageKey)) return <SubPage language={lang} page={path[0] as PageKey} />;
  if (path.length === 2 && path[0] === "articles" && articleSlugs.includes(path[1] as ArticleSlug)) return <ArticlePage language={lang} slug={path[1] as ArticleSlug} />;
  if (path.length === 2 && path[0] === "products" && products.some((product) => product.slug === path[1])) return <ProductDetailPage language={lang} slug={path[1]} />;
  notFound();
}
