import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Locale, navLabels } from "@/lib/site-data";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="site-header">
      <div className="header-bar page-width">
        <Link href={`/${locale}/`} className="brand" aria-label="Sugargoo Find Desk home">
          <img src="/sugargoo-logo.png" alt="Sugargoo" width="240" height="74" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {Object.entries(navLabels[locale]).map(([slug, label]) => <Link href={`/${locale}/${slug}/`} key={slug}>{label}</Link>)}
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
