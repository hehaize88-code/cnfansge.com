import type { Metadata } from "next";
import "../../globals.css";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { alternateUrls, copy, homePath, locales, SITE_URL, type Locale } from "@/lib/site";

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) return {};
  const locale = lang as Locale;
  const t = copy[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.sectionTitles.qc, template: `%s | OOPBUY VIP` },
    description: t.heroText,
    alternates: { canonical: `${SITE_URL}${homePath(locale)}`, languages: alternateUrls("home") },
    openGraph: { type: "website", url: `${SITE_URL}${homePath(locale)}`, siteName: "OOPBUY VIP", title: t.sectionTitles.qc, description: t.heroText, locale: locale, images: [{ url: "/og.png", width: 1200, height: 630, alt: t.sectionTitles.qc }] },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocalizedLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  return <html lang={lang}><body><SiteShell locale={lang as Locale}>{children}</SiteShell></body></html>;
}
