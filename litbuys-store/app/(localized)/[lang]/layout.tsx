import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteDocument, siteIcons } from "../../document";
import { isLanguage } from "../../i18n";

export const metadata = { icons: siteIcons };
export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang) || lang === "en") notFound();
  return <SiteDocument lang={lang}>{children}</SiteDocument>;
}
