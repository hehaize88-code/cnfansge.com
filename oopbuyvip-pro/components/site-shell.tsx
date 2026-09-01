/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy, homePath, localeNames, locales, sectionPath, sections, type Locale } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = copy[locale];
  return (
    <>
      <SiteHeader locale={locale} />
      {children}
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Link href={homePath(locale)} className="brand footer-brand"><img className="brand-logo" src="/oopbuy-logo.png" alt="Oopbuy" width="134" height="48" /></Link><p>{t.footer}</p></div>
          <nav aria-label="Footer navigation">{sections.map((section) => <Link key={section} href={sectionPath(locale, section)}>{t.nav[section]}</Link>)}</nav>
          <div className="footer-language">{locales.map((item) => <Link className={locale === item ? "active" : ""} key={item} href={item === "en" ? "/" : `/${item}`}>{localeNames[item]}{item === locale && <ArrowUpRight size={13} />}</Link>)}</div>
        </div>
        <div className="shell footer-bottom"><p>{t.disclosure}</p><p>© 2026 OOPBUY VIP</p></div>
      </footer>
    </>
  );
}
