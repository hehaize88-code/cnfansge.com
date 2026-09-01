import DynamicPage, { generateMetadata as generateRouteMetadata } from "./[...slug]/page";
import { languages } from "../../lib/content";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return generateRouteMetadata({ params: Promise.resolve({ lang }) });
}

export default async function LanguageHome({ params }) {
  const { lang } = await params;
  return <DynamicPage params={Promise.resolve({ lang })} />;
}
