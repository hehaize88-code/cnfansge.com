import Link from "next/link";
import { ArrowIcon, Footer, Header } from "./components";

export type SeoArticleSection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type SeoArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  readMinutes: number;
  takeaways: string[];
  sections: SeoArticleSection[];
  sources: string[];
  related: { title: string; href: string }[];
};

export function SeoArticlePage({ article }: { article: SeoArticle }) {
  const pageUrl = `https://spreadsheet-superbuys.com/articles/${article.slug}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    author: { "@type": "Organization", name: "Superbuy Spreadsheet Editorial" },
    publisher: {
      "@type": "Organization",
      name: "Spreadsheet Superbuys Editorial",
      url: "https://spreadsheet-superbuys.com/",
      logo: { "@type": "ImageObject", url: "https://spreadsheet-superbuys.com/superbuy-logo.png" },
    },
    image: ["https://spreadsheet-superbuys.com/og.png"],
    mainEntityOfPage: pageUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://spreadsheet-superbuys.com/" },
      { "@type": "ListItem", position: 2, name: "Superbuy guides", item: "https://spreadsheet-superbuys.com/articles/" },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="article-main">
        <header className="article-hero wrap">
          <span className="kicker">{article.eyebrow}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="article-meta"><span>Independent buyer guide</span><span>Checked 14 September 2026</span><span>{article.readMinutes} min read</span></div>
        </header>
        <div className="article-layout wrap">
          <aside className="article-aside">
            <b>IN THIS GUIDE</b>
            {article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><span>{section.heading}</span></a>)}
            <a className="aside-cta" data-track="article_catalog_click" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">Open product index <ArrowIcon /></a>
          </aside>
          <article className="article-body">
            <div className="truth-note"><b>Editorial verification</b><p>This guide uses Superbuy’s public English guidance for service facts. Fees, route eligibility, stock and platform terms can change, so confirm the current account or parcel screen before paying.</p></div>
            <section className="article-takeaways" aria-labelledby="key-takeaways">
              <span className="section-no">QUICK ANSWER</span>
              <h2 id="key-takeaways">Key takeaways</h2>
              <ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span className="section-no">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            <section className="article-sources" aria-labelledby="sources-checked">
              <span className="section-no">PRIMARY SOURCES</span>
              <h2 id="sources-checked">Sources checked for this guide</h2>
              <p>Official English-language Superbuy materials checked on 14 September 2026. Source names are listed for verification; service details can change after publication.</p>
              <ul>{article.sources.map((source) => <li key={source}><span className="source-citation"><span>{source}</span><b aria-hidden="true">✓</b></span></li>)}</ul>
            </section>
            <section className="related-guides" aria-labelledby="related-guides">
              <span className="section-no">KEEP READING</span>
              <h2 id="related-guides">Related Superbuy guides</h2>
              <div>{article.related.map((item) => <Link href={item.href} key={item.href}><b>{item.title}</b><ArrowIcon /></Link>)}</div>
            </section>
            <div className="article-next"><span>CHECK A CURRENT DESTINATION</span><a data-track="article_bottom_catalog_click" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer"><b>Browse the current product index before ordering</b><ArrowIcon /></a></div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
