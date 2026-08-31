import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { copy, sectionSlugs, type Lang } from "@/lib/site-data";

export function SiteFooter({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <footer className="site-footer">
      <div className="footer-grid page-shell">
        <div className="footer-brand">
          <img src="/lovegobuy-logo.png" alt="LoveGoBuy" width="200" height="37" />
          <p>{c.independent}</p>
        </div>
        <nav aria-label="Footer navigation">
          <b>{c.guides}</b>
          {sectionSlugs.map((slug, index) => <Link key={slug} href={`/${lang}/${slug}`}>{c.nav[index]}</Link>)}
        </nav>
        <nav aria-label="Product source">
          <b>{c.updated}</b>
          <a className="footer-source" href="https://cnfansge.com/" target="_blank" rel="noopener noreferrer">{c.searchButton} <ArrowUpRight size={14} /></a>
        </nav>
      </div>
      <div className="legal-line page-shell"><span>© 2026 lovegobuys.org</span><span>{c.independent}</span></div>
    </footer>
  );
}
