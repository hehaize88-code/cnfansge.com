import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Superbuy Guides & SEO Articles",
  description: "Read independent Superbuy spreadsheet, QC photo, shipping cost and warehouse storage guides based on current public information.",
  alternates: { canonical: "/articles/" },
};

const articles = [
  { tag: "START HERE", title: "How to Use a Superbuy Spreadsheet Without Skipping the Checks", copy: "Use product indexes as discovery tools, preserve the source link, verify the live listing and treat warehouse arrival as a new decision point.", href: "/how-to-use/", time: "12 min read", updated: "25 Aug 2026" },
  { tag: "QUALITY CONTROL", title: "Superbuy QC Photos: A Practical Inspection Checklist", copy: "Review variants, visible defects, symmetry, print placement and accessories—while understanding what a photograph cannot establish.", href: "/qc-photos/", time: "12 min read", updated: "25 Aug 2026" },
  { tag: "SHIPPING", title: "Superbuy Shipping Cost: Estimate, Deposit and Final Freight", copy: "Separate item cost, domestic delivery, optional services and international shipping before you decide whether a find fits the budget.", href: "/shipping-cost/", time: "12 min read", updated: "25 Aug 2026" },
  { tag: "WAREHOUSE", title: "Superbuy Warehouse Storage and Parcel Consolidation", copy: "Use the published 90-day storage window to inspect arrivals, resolve issues and compare complete-parcel route options.", href: "/warehouse-storage/", time: "12 min read", updated: "25 Aug 2026" },
];

export default function ArticlesPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="articles-page">
        <header className="article-hero wrap">
          <span className="kicker" data-i18n="articlesEyebrow">SEO ARTICLES · BUYER EDUCATION</span>
          <h1 data-i18n="articlesTitle">Superbuy guides built around real decisions</h1>
          <p data-i18n="articlesIntro">Independent, English-language articles based on Superbuy’s current public guidance and live product destinations. No invented fees, delivery promises or unverifiable ratings.</p>
          <div className="article-meta"><span data-i18n="articlesCount">4 complete guides</span><span data-i18n="articlesChecked">Checked 25 August 2026</span><span data-i18n="independentSite">Independent site</span></div>
        </header>
        <section className="article-library wrap">
          {articles.map((article, index) => <Link href={article.href} className="library-card" key={article.href}>
            <span className="library-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="library-copy"><span data-i18n={`libraryTag${index + 1}`}>{article.tag}</span><h2 data-i18n={`libraryTitle${index + 1}`}>{article.title}</h2><p data-i18n={`libraryCopy${index + 1}`}>{article.copy}</p><div><em data-i18n="shortDate">{article.updated}</em><em data-i18n="twelveMin">12 min read</em></div></div>
            <span className="library-arrow"><ArrowIcon /></span>
          </Link>)}
        </section>
        <section className="editorial-policy wrap">
          <div><span className="kicker" data-i18n="editorialLabel">EDITORIAL POLICY</span><h2 data-i18n="editorialTitle">Facts first. Assumptions labeled.</h2></div>
          <p data-i18n="editorialCopy">Service statements are checked against Superbuy’s public English guidance. Catalog examples open the current product destination. Prices, routes, stock and platform terms can change, so each guide explains what must be rechecked at the time of purchase.</p>
          <Link href="/how-to-use/"><span data-i18n="how">How it works</span> <ArrowIcon /></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
