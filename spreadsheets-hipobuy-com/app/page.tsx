import ProductExplorer from "./components/ProductExplorer";
import JsonLd from "./components/JsonLd";
import { pageMetadata, SITE_URL } from "./seo";

export const metadata = pageMetadata({
  title: "Hipobuy Spreadsheet Search 2026 | Checked Finds & Guides",
  description: "Search checked Hipobuy spreadsheet rows, open exact product pages and use practical query, QC and parcel-planning guides.",
  path: "/",
});

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hipobuy Spreadsheet",
    url: SITE_URL,
    description: "Independent Hipobuy spreadsheet search and buyer-education resource.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hipobuy Spreadsheet",
    url: SITE_URL,
    logo: `${SITE_URL}/hipobuy-logo.png`,
  },
];

const categories = [
  ["Shoes", "58+", "https://cnfansge.com/shoes/"],
  ["Hoodies", "55+", "https://cnfansge.com/hoodies-sweaters/"],
  ["T-Shirts", "60+", "https://cnfansge.com/t-shirts/"],
  ["Jerseys", "55+", "https://cnfansge.com/jersey/"],
  ["Jackets", "50+", "https://cnfansge.com/jackets/"],
  ["Accessories", "50+", "https://cnfansge.com/accessories/"],
  ["Headwear", "50+", "https://cnfansge.com/headwear/"],
  ["Electronics", "40+", "https://cnfansge.com/electronics/"],
];

const checks = [
  ["01", "Open the exact listing", "Confirm the product page still loads and the seller has not replaced the item."],
  ["02", "Read the option labels", "Translate colour, size and batch choices before submitting the order."],
  ["03", "Inspect warehouse photos", "Check shape, measurements, stitching and visible defects before approval."],
  ["04", "Plan the parcel", "Compare actual and volumetric weight before choosing packaging and a route."],
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <section className="hero wrap">
        <div className="heroCopy">
          <div className="eyebrow"><span /> Independent Hipobuy product research</div>
          <h1>Find the listing.<br /><em>Check it properly.</em></h1>
          <p className="heroText">
            A cleaner Hipobuy spreadsheet experience built around searchable rows,
            exact product pages and practical QC notes—not a wall of copied links.
          </p>
          <form className="searchBox" action="https://cnfansge.com/search.html" method="get" target="_blank">
            <label htmlFor="hero-search" className="srOnly">Search product finds</label>
            <span aria-hidden="true">⌕</span>
            <input type="hidden" name="channelid" value="2" />
            <input id="hero-search" name="keywords" placeholder="Search shoes, hoodies, jerseys…" />
            <button type="submit">Search main index ↗</button>
          </form>
          <div className="trustLine">
            <span><b>5</b> listings checked today</span>
            <span><b>8</b> focused categories</span>
            <span><b>0</b> competitor links</span>
          </div>
        </div>
        <aside className="routeCard" aria-label="Quick buying route">
          <div className="routeTop"><span>BUYER ROUTE / 01</span><span className="liveDot">LIVE</span></div>
          <p className="routeKicker">Before you order</p>
          <h2>Use the sheet as a shortlist—not as proof.</h2>
          <ol>
            <li><span>1</span><div><b>Discover</b><small>Search and filter the product index.</small></div></li>
            <li><span>2</span><div><b>Verify</b><small>Open the exact listing and read options.</small></div></li>
            <li><span>3</span><div><b>Inspect</b><small>Use warehouse photos before approval.</small></div></li>
          </ol>
          <a className="routeButton" href="/guide/">Open the full buyer guide →</a>
        </aside>
      </section>

      <section className="categoryBand">
        <div className="wrap categoryGrid">
          {categories.map(([name, count, href], i) => (
            <a href={href} target="_blank" rel="noreferrer" key={name}>
              <span className="categoryIcon" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <b>{name}</b><small>{count} rows</small><i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <ProductExplorer />

      <section className="method wrap">
        <div className="sectionHead">
          <div><span className="kicker">THE CHECK METHOD</span><h2>Four checks before checkout</h2></div>
          <p>Product links change. Prices move. Seller photos are not QC photos. This workflow keeps each decision separate.</p>
        </div>
        <div className="checkGrid">
          {checks.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="factsPanel">
        <div className="wrap factsInner">
          <div>
            <span className="kicker">PLATFORM FACTS, NOT PROMISES</span>
            <h2>Know what Hipobuy states—and what you still need to check.</h2>
          </div>
          <div className="factGrid">
            <article><b>90 <span>days</span></b><span>Free storage stated in the official app listing</span></article>
            <article><b>200+</b><span>Countries and regions stated as supported</span></article>
            <article><b>5 <span>days</span></b><span>Fastest advertised delivery, route dependent</span></article>
            <article><b>24/7</b><span>Purchasing assistance stated by the platform</span></article>
          </div>
          <p className="factNote">Checked 25 August 2026. Shipping availability, speed and cost vary by destination, item type and parcel dimensions.</p>
        </div>
      </section>

      <section className="contentSplit wrap">
        <div className="editorialCard">
          <span className="kicker">EDITORIAL / 01</span>
          <h2>How to use a Hipobuy spreadsheet without buying blind</h2>
          <p>A practical walkthrough for reading product rows, checking listing options, reviewing QC photos and preparing a parcel decision.</p>
          <a href="/articles/use-hipobuy-spreadsheet/">Read the complete guide →</a>
        </div>
        <div className="faqPreview">
          <span className="kicker">QUICK ANSWERS</span>
          <details open><summary>Is this the official Hipobuy website?</summary><p>No. It is an independent product-discovery and buyer-education resource.</p></details>
          <details><summary>Are product prices guaranteed?</summary><p>No. USD values are references converted from the last observed source price. Confirm the live listing before payment.</p></details>
          <details><summary>Does a listing mean the item passed QC?</summary><p>No. A listing only helps discovery. Your own warehouse photos and measurements are the approval evidence.</p></details>
          <a href="/faq/">View all questions →</a>
        </div>
      </section>
    </>
  );
}
