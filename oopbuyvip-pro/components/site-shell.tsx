import { ReadingMetrics } from "@/components/reading-metrics";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { copy, homePath, sectionPath, sections, type Locale } from "@/lib/site";
import { SiteHeader, FooterLanguages } from "@/components/site-header";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = copy[locale];
  return (
    <>
      <SiteHeader locale={locale} />
      <ReadingMetrics locale={locale} />
      {children}
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Link href={homePath(locale)} className="brand footer-brand"><img className="brand-logo" src="/oopbuy-logo.png" alt="Oopbuy" width="134" height="48" /></Link><p>{t.footer}</p></div>
          <nav aria-label="Footer navigation">{sections.map((section) => <Link key={section} href={sectionPath(locale, section)}>{t.nav[section]}</Link>)}</nav>
          <FooterLanguages locale={locale} />
        </div>
        <div className="shell footer-bottom"><p>{t.disclosure}</p><p>© 2026 OOPBUY VIP</p></div>
      </footer>
    </>
  );
}
