"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { copy, interfaceCopy, languageNames, languages, sectionSlugs, type Lang } from "@/lib/site-data";

export function SiteHeader({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const c = copy[lang];
  const ui = interfaceCopy[lang];
  const localeHref = (next: Lang) => pathname.replace(/^\/(en|de|es|fr|it)(?=\/|$)/, `/${next}`);

  const nav = sectionSlugs.map((slug, index) => ({ slug, label: c.nav[index] }));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={`/${lang}`} className="brand" aria-label={`LoveGoBuy Field Guide · ${ui.home}`}>
          <img src="/lovegobuy-logo.png" alt="LoveGoBuy" width="200" height="37" />
        </Link>

        <nav className="desktop-nav" aria-label={ui.primaryNavigation}>
          {nav.map((item) => <Link key={item.slug} href={`/${lang}/${item.slug}`}>{item.label}</Link>)}
        </nav>

        <div className="header-actions">
          <div className="lang-row desktop-langs" aria-label="Language selection">
            {languages.map((item) => (
              <Link key={item} href={localeHref(item)} className={item === lang ? "active" : ""} hrefLang={item}>{item.toUpperCase()}</Link>
            ))}
          </div>
          <a className="index-link" href="https://cnfansge.com/" target="_blank" rel="noopener noreferrer">
            {c.searchButton} <ArrowUpRight size={15} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="menu-button" size="icon" variant="outline" aria-label={ui.primaryNavigation}><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="mobile-panel">
              <SheetTitle className="mobile-title"><img src="/lovegobuy-logo.png" alt="LoveGoBuy" width="200" height="37" /></SheetTitle>
              <nav className="mobile-nav" aria-label={ui.primaryNavigation}>
                <Link href={`/${lang}`}>{ui.home}</Link>
                {nav.map((item) => <Link key={item.slug} href={`/${lang}/${item.slug}`}>{item.label}</Link>)}
              </nav>
              <div className="mobile-language-list">
                {languages.map((item) => (
                  <Link key={item} href={localeHref(item)} className={item === lang ? "active" : ""} hrefLang={item}>
                    {languageNames[item]}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
