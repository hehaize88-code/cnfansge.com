import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Superbuy Guides 2026: Spreadsheet, Fees, QC & Shipping",
  description: "Read 11 independent Superbuy guides covering spreadsheets, fees, product search, QC photos, warehouse storage, returns and international shipping.",
  alternates: { canonical: "/articles/" },
};

const articles = [
  { tag: "START HERE", title: "How to Use a Superbuy Spreadsheet Without Skipping the Checks", copy: "Use product indexes as discovery tools, preserve the source link, verify the live listing and treat warehouse arrival as a new decision point.", href: "/how-to-use/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "FEES", title: "Superbuy Fees Explained: Service Fees, Optional Services and Shipping Charges", copy: "Separate ordinary agent service, seller costs, optional warehouse work and carrier-confirmed international freight.", href: "/articles/superbuy-fees-explained/", time: "13 min read", updated: "14 Sep 2026" },
  { tag: "LINK TRUST", title: "Superbuy Spreadsheet vs Reddit and Google Sheets: Which Links Can You Trust?", copy: "Judge discovery sources by the current destination, selected variant, transparent verification method and saved order evidence.", href: "/articles/superbuy-spreadsheet-vs-reddit-google-sheets/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "PRODUCT SEARCH", title: "Superbuy Product Search: Photo Clues, Links and Item Numbers", copy: "Turn a screenshot or identifier into a verified source listing and preserve the details needed for warehouse comparison.", href: "/articles/superbuy-image-search-item-number/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "CLOTHING", title: "Superbuy Clothing Spreadsheet: T-Shirts, Hoodies, Gymwear and Boardshorts", copy: "Compare current listings, size charts, warehouse measurements, visible construction and parcel volume.", href: "/articles/superbuy-clothing-spreadsheet/", time: "13 min read", updated: "14 Sep 2026" },
  { tag: "SERVICE TYPES", title: "Superbuy Shopping Agent vs Parcel Forwarding", copy: "Compare who buys, inspection limits, fees, seller after-sales responsibility and evidence requirements.", href: "/articles/superbuy-shopping-agent-vs-forwarding/", time: "13 min read", updated: "14 Sep 2026" },
  { tag: "RETURNS", title: "Superbuy Returns and Exchanges Before International Shipping", copy: "Use warehouse evidence, seller terms and separate deadlines to resolve a mismatch before parcel submission.", href: "/articles/superbuy-returns-before-shipping/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "RESTRICTIONS", title: "Superbuy Restricted Items and Shipping Route Eligibility", copy: "Check product characteristics, carrier limits, parcel grouping and destination rules at three decision points.", href: "/articles/superbuy-restricted-items-shipping-routes/", time: "13 min read", updated: "14 Sep 2026" },
  { tag: "QUALITY CONTROL", title: "Superbuy QC Photos: A Practical Inspection Checklist", copy: "Review variants, visible defects, symmetry, print placement and accessories—while understanding what a photograph cannot establish.", href: "/qc-photos/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "SHIPPING", title: "Superbuy Shipping Calculator: Estimate, Deposit and Final Freight", copy: "Separate item cost, domestic delivery, optional services and international shipping before you decide whether a find fits the budget.", href: "/shipping-cost/", time: "12 min read", updated: "14 Sep 2026" },
  { tag: "WAREHOUSE", title: "Superbuy Warehouse Storage Time and Parcel Consolidation", copy: "Use the published 90-day storage window to inspect arrivals, resolve issues and compare complete-parcel route options.", href: "/warehouse-storage/", time: "12 min read", updated: "14 Sep 2026" },
];

export default function ArticlesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Superbuy buyer guides",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `https://spreadsheet-superbuys.com${article.href}`,
    })),
  };
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Header />
      <main className="articles-page">
        <header className="article-hero wrap">
          <span className="kicker" data-i18n="articlesEyebrow">SEO ARTICLES · BUYER EDUCATION</span>
          <h1 data-i18n="articlesTitle">Superbuy guides built around real decisions</h1>
          <p data-i18n="articlesIntro">Independent, English-language articles based on Superbuy’s current public guidance and live product destinations. No invented fees, delivery promises or unverifiable ratings.</p>
          <div className="article-meta"><span>11 complete guides</span><span>Checked 14 September 2026</span><span data-i18n="independentSite">Independent site</span></div>
        </header>
        <section className="article-library wrap">
          {articles.map((article, index) => <Link href={article.href} className="library-card" key={article.href}>
            <span className="library-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="library-copy"><span data-i18n={`libraryTag${index + 1}`}>{article.tag}</span><h2 data-i18n={`libraryTitle${index + 1}`}>{article.title}</h2><p data-i18n={`libraryCopy${index + 1}`}>{article.copy}</p><div><em>{article.updated}</em><em>{article.time}</em></div></div>
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
