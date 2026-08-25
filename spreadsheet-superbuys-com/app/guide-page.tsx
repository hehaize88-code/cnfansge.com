import Link from "next/link";
import { ArrowIcon, Footer, Header } from "./components";

export type GuideSection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type GuideSource = {
  label: string;
};

const guideVisuals: Record<string, { title: string; steps: string[] }> = {
  howPage: { title: "A safer spreadsheet workflow", steps: ["Open the index", "Verify the live listing", "Save the selected option", "Compare warehouse evidence", "Submit the parcel"] },
  qcPage: { title: "Use QC photos to answer visible questions", steps: ["Saved order", "Warehouse photos", "Visible comparison", "Targeted follow-up", "Accept or resolve"] },
  shippingPage: { title: "Build the shipping estimate in layers", steps: ["Item and local delivery", "Packed weight and volume", "Route estimate", "Shipping deposit", "Carrier-confirmed total"] },
  warehousePage: { title: "Use the storage window as a decision timeline", steps: ["Item arrives", "Inspect evidence", "Resolve discrepancies", "Plan consolidation", "Submit before deadline"] },
};

export function GuidePage({
  eyebrow,
  title,
  intro,
  pagePath,
  updated = "25 August 2026",
  readMinutes = 11,
  takeaways,
  sources,
  sections,
  next,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  pagePath: string;
  updated?: string;
  readMinutes?: number;
  takeaways: string[];
  sources: GuideSource[];
  sections: GuideSection[];
  next?: { label: string; href: string };
}) {
  const pageUrl = `https://spreadsheet-superbuys.com${pagePath}`;
  const pageKey = pagePath === "/how-to-use/" ? "howPage" : pagePath === "/qc-photos/" ? "qcPage" : pagePath === "/shipping-cost/" ? "shippingPage" : "warehousePage";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    author: { "@type": "Organization", name: "Superbuy Spreadsheet Editorial" },
    image: ["https://spreadsheet-superbuys.com/og.png"],
    publisher: {
      "@type": "Organization",
      name: "Spreadsheet Superbuys Editorial",
      url: "https://spreadsheet-superbuys.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://spreadsheet-superbuys.com/superbuy-logo.png",
        width: 726,
        height: 142,
      },
    },
    mainEntityOfPage: pageUrl,
  };
  const visual = guideVisuals[pageKey];
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="article-main">
        <header className="article-hero wrap">
          <span className="kicker" data-i18n={`${pageKey}Eyebrow`}>{eyebrow}</span>
          <h1 data-i18n={`${pageKey}Title`}>{title}</h1>
          <p data-i18n={`${pageKey}Intro`}>{intro}</p>
          <div className="article-meta"><span data-i18n="independentGuide">Independent buyer guide</span><span><span data-i18n="checked">Checked</span> <span data-i18n="fullDate">{updated}</span></span><span>{readMinutes} <span data-i18n="minRead">min read</span></span></div>
        </header>
        <div className="article-layout wrap">
          <aside className="article-aside">
            <b data-i18n="inGuide">IN THIS GUIDE</b>
            {sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><span data-i18n={`${pageKey}Section${index + 1}`}>{section.heading}</span></a>)}
            <a className="aside-cta" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><span data-i18n="openProductIndex">Open product index</span> <ArrowIcon /></a>
          </aside>
          <article className="article-body">
            <div className="truth-note"><b data-i18n="verificationTitle">Verification note</b><p data-i18n="verificationCopy">Service details below are based on Superbuy’s public English guidance. Product links and availability are checked separately in the linked catalog. Neither source should be treated as a permanent price or availability guarantee.</p></div>
            <figure className="article-visual" aria-labelledby={`${pageKey}-visual-title`}>
              <figcaption id={`${pageKey}-visual-title`} data-i18n={`${pageKey}VisualTitle`}>{visual.title}</figcaption>
              <div>{visual.steps.map((step, index) => <div className="visual-step" key={step}><span>0{index + 1}</span><b data-i18n={`${pageKey}VisualStep${index + 1}`}>{step}</b></div>)}</div>
            </figure>
            <section className="article-takeaways" aria-labelledby="key-takeaways">
              <span className="section-no" data-i18n="quickAnswer">QUICK ANSWER</span>
              <h2 id="key-takeaways" data-i18n="keyTakeaways">Key takeaways</h2>
              <ul>{takeaways.map((item, index) => <li key={item} data-i18n={`${pageKey}Takeaway${index + 1}`}>{item}</li>)}</ul>
            </section>
            {sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span className="section-no">0{index + 1}</span>
                <h2 data-i18n={`${pageKey}Section${index + 1}`}>{section.heading}</h2>
                {section.body.map((paragraph, paragraphIndex) => <p key={paragraph} data-i18n={`${pageKey}Body${index + 1}_${paragraphIndex + 1}`}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point, pointIndex) => <li key={point} data-i18n={`${pageKey}Point${index + 1}_${pointIndex + 1}`}>{point}</li>)}</ul>}
              </section>
            ))}
            <section className="article-sources" aria-labelledby="sources-checked">
              <span className="section-no" data-i18n="primarySources">PRIMARY SOURCES</span>
              <h2 id="sources-checked" data-i18n="sourcesTitle">Sources checked for this guide</h2>
              <p><span data-i18n="sourcesCopy">We use Superbuy’s own English-language pages for service claims. These sources were checked on</span> {updated}; <span data-i18n="sourcesChange">policies, route availability and prices can change.</span></p>
              <ul>{sources.map((source, index) => <li key={source.label}><span className="source-citation"><span data-i18n={`${pageKey}Source${index + 1}`}>{source.label}</span><b aria-hidden="true">✓</b></span></li>)}</ul>
            </section>
            <div className="article-next">
              <span data-i18n="continuePlanning">Continue planning</span>
              {next ? <Link href={next.href}><b data-i18n={`${pageKey}Next`}>{next.label}</b><ArrowIcon /></Link> : <a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><b data-i18n="browseCurrentIndex">Browse the current index</b><ArrowIcon /></a>}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
