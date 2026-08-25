import type { Metadata } from "next";
import { CategoryGrid, Footer, Header, ProductGrid, SearchBox } from "../components";

export const metadata: Metadata = {
  title: "Superbuy Spreadsheet & Product Finds",
  description: "Browse the organized 2026 Superbuy product spreadsheet by category and open current catalog listings.",
  alternates: { canonical: "/spreadsheet/" },
};

export default function SpreadsheetPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="index-main">
        <header className="index-hero wrap"><span className="kicker" data-i18n="indexEyebrow">LIVE PRODUCT INDEX</span><h1><span data-i18n="indexTitle">Superbuy spreadsheet,</span><br /><em data-i18n="indexTitleEm">organized for browsing.</em></h1><p data-i18n="indexIntro">Start with a category, search the source catalog, then verify the current listing before adding anything to an order.</p><SearchBox /></header>
        <section className="index-block wrap"><div className="section-heading"><span className="kicker" data-i18n="indexAisles">10 CURRENT AISLES</span><h2 data-i18n="indexCategories">Browse categories.</h2></div><CategoryGrid /></section>
        <section className="finds-section"><div className="wrap"><div className="section-heading on-ink"><span className="kicker" data-i18n="indexRecent">RECENT CATALOG ENTRIES</span><h2 data-i18n="indexLatest">Latest source listings.</h2></div><ProductGrid /><p className="catalog-note" data-i18n="indexNote">“Latest” refers to the ordering visible in the linked catalog when this page was checked on 25 August 2026. It does not promise stock, price or seller availability.</p></div></section>
      </main>
      <Footer />
    </div>
  );
}
