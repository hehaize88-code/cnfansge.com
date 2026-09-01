/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { copy, homePath, locales, localeNames, sectionPath, sections, type Locale } from "@/lib/site";

function localeRoute(pathname: string, nextLocale: Locale) {
  const pieces = pathname.split("/").filter(Boolean);
  if (pieces.length === 0) return homePath(nextLocale);
  if (locales.includes(pieces[0] as Locale)) {
    const rest = pieces.slice(1).join("/");
    return rest ? `/${nextLocale}/${rest}` : homePath(nextLocale);
  }
  return homePath(nextLocale);
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname();
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-row">
        <Link href={homePath(locale)} className="brand" aria-label="OOPBUY VIP home">
          <img className="brand-logo" src="/oopbuy-logo.png" alt="Oopbuy" width="134" height="48" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {sections.map((section) => (
            <Link key={section} href={sectionPath(locale, section)} className={pathname.includes(`/${section}`) ? "active" : ""}>
              {t.nav[section]}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-picker">
            <button className="language-button" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen}>
              {locale.toUpperCase()} <span aria-hidden>⌄</span>
            </button>
            {languageOpen && (
              <div className="language-menu">
                {locales.map((item) => <Link key={item} href={localeRoute(pathname, item)} onClick={() => setLanguageOpen(false)}>{localeNames[item]}</Link>)}
              </div>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline" size="icon" className="mobile-menu" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent side="right" className="mobile-panel">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mobile-nav-head"><span className="brand"><img className="brand-logo" src="/oopbuy-logo.png" alt="Oopbuy" width="134" height="48" /></span><SheetClose asChild><Button variant="ghost" size="icon" aria-label="Close menu"><X /></Button></SheetClose></div>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {sections.map((section) => <SheetClose key={section} asChild><Link href={sectionPath(locale, section)}>{t.nav[section]}</Link></SheetClose>)}
              </nav>
              <div className="mobile-languages">
                {locales.map((item) => <SheetClose key={item} asChild><Link className={locale === item ? "current" : ""} href={localeRoute(pathname, item)}>{localeNames[item]}</Link></SheetClose>)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function CatalogSearch({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = copy[locale];
  return (
    <form action="https://cnfansge.com/search.html" method="get" target="_blank" className={compact ? "catalog-search compact" : "catalog-search"}>
      <input type="hidden" name="channelid" value="2" />
      <div className="search-field"><Search size={18} aria-hidden /><Input name="keywords" required aria-label={t.searchPlaceholder} placeholder={t.searchPlaceholder} /></div>
      <Button type="submit">{t.searchButton}</Button>
    </form>
  );
}
