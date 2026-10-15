import { notFound } from "next/navigation";
import { RoutePage } from "../../../route-page";
import { isLanguage, languages } from "../../../i18n";
import { pageMetadata, sitePaths } from "../../../seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return languages.filter((lang) => lang !== "en").flatMap((lang) => sitePaths().map((path) => ({ lang, path })));
}
type Props = { params: Promise<{ lang: string; path?: string[] }> };
export async function generateMetadata({ params }: Props) {
  const { lang, path = [] } = await params;
  if (!isLanguage(lang) || lang === "en") notFound();
  return pageMetadata(lang, path);
}
export default async function Page({ params }: Props) {
  const { lang, path = [] } = await params;
  if (!isLanguage(lang) || lang === "en") notFound();
  return <RoutePage lang={lang} path={path} />;
}
