import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LangSync } from "@/components/LangSync";
import { isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <div className="site-shell"><LangSync locale={locale}/><SiteHeader locale={locale} />{children}<SiteFooter locale={locale} /></div>;
}
