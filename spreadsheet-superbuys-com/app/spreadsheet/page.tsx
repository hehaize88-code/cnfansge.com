import type { Metadata } from "next";
import { CategoryGrid, Footer, Header, ProductGrid, SearchBox } from "../components";
import { products } from "../site-data";

export const metadata: Metadata = {
  title: "Superbuy Spreadsheet Link Status & Product Index 2026",
  description: "Review recently checked Superbuy spreadsheet destinations, browse categories and recheck live listing, option, seller and price details.",
  alternates: { canonical: "/spreadsheet/" },
};

export default function SpreadsheetPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="index-main">
        <header className="index-hero wrap"><span className="kicker" data-i18n="indexEyebrow">LINK STATUS · LIVE PRODUCT INDEX</span><h1><span data-i18n="indexTitle">Check spreadsheet links,</span><br /><em data-i18n="indexTitleEm">then verify the listing.</em></h1><p data-i18n="indexIntro">Use the status snapshot as a starting point, then recheck the destination, selected option, seller information and price at the moment you order.</p><SearchBox /></header>
        <section className="verification-snapshot wrap" aria-labelledby="verification-snapshot-title">
          <div className="verification-summary">
            <div><span className="kicker" data-i18n="linkSnapshotEyebrow">LINK VERIFICATION SNAPSHOT</span><h2 id="verification-snapshot-title" data-i18n="linkSnapshotTitle">6 of 6 recent destinations reachable.</h2></div>
            <p data-i18n="linkSnapshotIntro">Checked 25 August 2026. A successful response confirms that the destination opens; it does not guarantee stock, current price, seller identity or variant accuracy.</p>
          </div>
          <div className="verification-grid">
            {products.map((product, index) => (
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="verification-item" key={product.id}>
                <span className="verification-dot" aria-hidden="true" />
                <span><b data-i18n={`productTitle${index + 1}`}>{product.title}</b><small><span data-i18n="destinationReachable">Destination reachable</span> · <span data-i18n="checkedDateShort">Checked 25 Aug 2026</span></small></span>
              </a>
            ))}
          </div>
        </section>
        <section className="index-block wrap"><div className="section-heading"><span className="kicker" data-i18n="indexAisles">10 CURRENT AISLES</span><h2 data-i18n="indexCategories">Browse categories.</h2></div><CategoryGrid /></section>
        <section className="finds-section"><div className="wrap"><div className="section-heading on-ink"><span className="kicker" data-i18n="indexRecent">RECENT CATALOG ENTRIES</span><h2 data-i18n="indexLatest">Latest source listings.</h2></div><ProductGrid /><p className="catalog-note" data-i18n="indexNote">“Latest” refers to the ordering visible in the linked catalog when this page was checked on 25 August 2026. It does not promise stock, price or seller availability.</p></div></section>
      </main>
      <Footer />
    </div>
  );
}
