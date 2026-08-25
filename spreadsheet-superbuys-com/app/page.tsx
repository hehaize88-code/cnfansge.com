import Link from "next/link";
import { ArrowIcon, CategoryGrid, Footer, Header, ProductGrid, SearchBox } from "./components";

const guideCards = [
  { title: "How to use the spreadsheet", copy: "From product discovery to a checked order link.", href: "/how-to-use/", label: "Getting started" },
  { title: "How to read QC photos", copy: "What warehouse images show—and what they cannot prove.", href: "/qc-photos/", label: "Quality control" },
  { title: "How shipping costs work", copy: "Estimate items, packing, deposits and final freight separately.", href: "/shipping-cost/", label: "Parcel planning" },
  { title: "Use warehouse storage well", copy: "Plan QC, after-sales and consolidation during the storage window.", href: "/warehouse-storage/", label: "Warehouse" },
];

const articleCards = [
  { title: "How to Use a Superbuy Spreadsheet Without Skipping the Checks", copy: "A step-by-step workflow from product discovery to warehouse review and parcel submission.", href: "/how-to-use/", topic: "Beginner guide", time: "8 min read" },
  { title: "Superbuy QC Photos: A Practical Inspection Checklist", copy: "Visible details to examine, questions to ask and the limits of warehouse photography.", href: "/qc-photos/", topic: "Quality control", time: "7 min read" },
  { title: "Superbuy Shipping Cost: Estimate vs. Final Freight", copy: "Why item price, local delivery, packaging and international freight must be budgeted separately.", href: "/shipping-cost/", topic: "Shipping", time: "8 min read" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero wrap">
          <span className="hero-label" data-i18n="updated">Independent product index · Updated 25 August 2026</span>
          <h1 data-i18n="title">Superbuy spreadsheet. Simple to browse.</h1>
          <p className="hero-lede" data-i18n="intro">Find products by category, open the current listing and check practical buyer notes before placing an order.</p>
          <SearchBox />
          <div className="hero-links">
            <a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><span data-i18n="all">View all products</span> <ArrowIcon /></a>
            <Link href="/how-to-use/" data-i18n="how">How it works</Link>
          </div>
          <div className="status-row" aria-label="Index overview">
            <div><b>10</b><span data-i18n="categories">Product categories</span></div>
            <div><b>6</b><span data-i18n="recent">Recent listings</span></div>
            <div><b data-i18n="storageDays">90 days</b><span data-i18n="storage">Free storage stated by Superbuy</span></div>
          </div>
        </section>

        <section className="category-section wrap">
          <div className="section-heading simple-heading">
            <div><span className="kicker" data-i18n="browse">Browse</span><h2 data-i18n="choose">Choose a category</h2></div>
            <p data-i18n="destination">Each link opens the matching category in the live catalog.</p>
          </div>
          <CategoryGrid />
        </section>

        <section className="finds-section" id="finds">
          <div className="wrap">
            <div className="section-heading simple-heading">
              <div><span className="kicker" data-i18n="newIndex">New in the index</span><h2 data-i18n="recentFinds">Recently listed finds</h2></div>
              <a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer" className="line-link"><span data-i18n="everything">See everything</span> <ArrowIcon /></a>
            </div>
            <ProductGrid />
            <p className="quiet-note" data-i18n="quietNote">Listings can change. Check the destination page, available options and current seller information before ordering.</p>
          </div>
        </section>

        <section className="guides-section wrap">
          <div className="section-heading simple-heading">
            <div><span className="kicker" data-i18n="buyerGuides">Buyer guides</span><h2 data-i18n="checkShip">Check before you ship</h2></div>
            <p data-i18n="guidesIntro">Short entry points to the detailed independent guides.</p>
          </div>
          <div className="guide-grid">
            {guideCards.map((guide, index) => (
              <Link href={guide.href} className="guide-card" key={guide.href}>
                <span data-i18n={`guideLabel${index + 1}`}>{guide.label}</span>
                <h3 data-i18n={`guideTitle${index + 1}`}>{guide.title}</h3>
                <p data-i18n={`guideCopy${index + 1}`}>{guide.copy}</p>
                <b><span data-i18n="readGuide">Read guide</span> <ArrowIcon /></b>
              </Link>
            ))}
          </div>
          <div className="fact-strip">
            <div><span data-i18n="factSource">Superbuy public guidance</span><b data-i18n="factSummary">QC photos · 90-day storage · parcel consolidation · final carrier settlement</b></div>
            <Link href="/articles/"><span data-i18n="articles">SEO Articles</span> <ArrowIcon /></Link>
          </div>
        </section>

        <section className="articles-section">
          <div className="wrap">
            <div className="section-heading simple-heading">
              <div><span className="kicker" data-i18n="seoLabel">SEO Articles</span><h2 data-i18n="seoTitle">In-depth buying guides</h2></div>
              <p data-i18n="seoIntro">Independent articles about discovery, quality control, warehouse storage and shipping.</p>
            </div>
            <div className="article-card-grid">
              {articleCards.map((article, index) => <Link className="article-card" href={article.href} key={article.href}>
                <div><span data-i18n={`homeArticleTopic${index + 1}`}>{article.topic}</span><em data-i18n={`homeArticleTime${index + 1}`}>{article.time}</em></div>
                <h3 data-i18n={`articleTitle${index + 1}`}>{article.title}</h3>
                <p data-i18n={`articleCopy${index + 1}`}>{article.copy}</p>
                <b><span data-i18n="read">Read article</span> <ArrowIcon /></b>
              </Link>)}
            </div>
            <div className="articles-link"><Link href="/articles/"><span data-i18n="browseArticles">Browse the complete SEO article center</span> <ArrowIcon /></Link></div>
          </div>
        </section>

        <section className="faq-section wrap">
          <div className="section-heading simple-heading">
            <div><span className="kicker" data-i18n="quick">Quick answers</span><h2 data-i18n="limits">Know the limits</h2></div>
            <Link className="line-link" href="/faq/"><span data-i18n="allFaq">All FAQs</span> <ArrowIcon /></Link>
          </div>
          <div className="faq-list">
            <details open><summary><span data-i18n="faqQ1">Is this the official Superbuy website?</span><b>+</b></summary><p data-i18n="faqA1">No. This is an independent product-discovery and buyer-education site. It is not endorsed by Superbuy.</p></details>
            <details><summary><span data-i18n="faqQ2">Are product availability and prices guaranteed?</span><b>+</b></summary><p data-i18n="faqA2">No. Always open the destination page and verify the current listing, seller information, options and price.</p></details>
            <details><summary><span data-i18n="faqQ3">Does the listing price include international shipping?</span><b>+</b></summary><p data-i18n="faqA3">Usually not. Product cost, Chinese delivery, optional services and international parcel freight should be planned separately.</p></details>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
