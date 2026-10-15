import type { Metadata } from "next";
import { CategoryGrid, Footer, Header, ProductGrid, SearchBox } from "../components";
import { products } from "../site-data";

export const metadata: Metadata = {
  title: "Superbuy Spreadsheet: Product Categories and Listing Checks",
  description: "Explore Superbuy spreadsheet product destinations, browse categories and recheck live listing, option, seller and price details.",
  alternates: { canonical: "/spreadsheet/" },
};

export default function SpreadsheetPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="index-main">
        <header className="index-hero wrap"><span className="kicker" data-i18n="indexEyebrow">SPREADSHEET · PRODUCT DISCOVERY</span><h1><span data-i18n="indexTitle">Check spreadsheet links,</span><br /><em data-i18n="indexTitleEm">then verify the listing.</em></h1><p data-i18n="indexIntro">Use the product index as a starting point, then recheck the destination, selected option, seller information and price at the moment you order.</p><SearchBox /></header>
        <section className="verification-snapshot wrap" aria-labelledby="verification-snapshot-title">
          <div className="verification-summary">
            <div><span className="kicker" data-i18n="linkSnapshotEyebrow">PRODUCT DESTINATIONS</span><h2 id="verification-snapshot-title" data-i18n="linkSnapshotTitle">Six starting points for your product search.</h2></div>
            <p data-i18n="linkSnapshotIntro">Open the current listing to check stock, price, seller details and the exact option. These examples are discovery links, not live inventory or quality guarantees.</p>
          </div>
          <div className="verification-grid">
            {products.map((product, index) => (
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="verification-item" key={product.id}>
                <span className="verification-dot" aria-hidden="true" />
                <span><b data-i18n={`productTitle${index + 1}`}>{product.title}</b><small><span data-i18n="destinationReachable">Open listing</span></small></span>
              </a>
            ))}
          </div>
        </section>
        <section className="index-block wrap"><div className="section-heading"><span className="kicker" data-i18n="indexAisles">10 CURRENT AISLES</span><h2 data-i18n="indexCategories">Browse categories.</h2></div><CategoryGrid /></section>
        <section className="finds-section"><div className="wrap"><div className="section-heading on-ink"><span className="kicker" data-i18n="indexRecent">RECENT CATALOG ENTRIES</span><h2 data-i18n="indexLatest">Explore product listings.</h2></div><ProductGrid /><p className="catalog-note" data-i18n="indexNote">Check each destination when you are ready to order. This page does not provide live stock, price or seller availability.</p></div></section>
      </main>
      <Footer />
    </div>
  );
}
