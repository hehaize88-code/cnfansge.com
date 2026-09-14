import JsonLd from "../components/JsonLd";
import { absoluteUrl, SITE_URL } from "../seo";
import type { ArticleRecord } from "./articleData";

export default function BuyerArticle({ article }: { article: ArticleRecord }) {
  const path = `/articles/${article.slug}/`;
  const nextIsExternal = article.nextHref.startsWith("https://");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Articles", item: absoluteUrl("/articles/") },
        { "@type": "ListItem", position: 3, name: article.title, item: absoluteUrl(path) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: "2026-09-14",
      dateModified: "2026-09-14",
      inLanguage: "en",
      mainEntityOfPage: absoluteUrl(path),
      author: { "@type": "Organization", name: "HipoBuy Spreadsheet", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "HipoBuy Spreadsheet",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: absoluteUrl("/hipobuy-logo.png") },
      },
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <article className="articleBody wrap">
        <header>
          <span className="kicker">{article.kicker} · {article.readTime} MIN READ</span>
          <h1>{article.title}</h1>
          <p className="standfirst">{article.lead}</p>
          <div className="byline"><span>Editorial desk</span><span>Updated 14 September 2026</span><span>Independent guide</span></div>
        </header>
        <div className="articleLayout">
          <aside>
            <b>IN THIS GUIDE</b>
            {article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.short}</a>)}
            <a href="#decision-sheet">Decision sheet</a>
          </aside>
          <div className="prose">
            {article.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 id={`section-${index + 1}`}>{section.heading}</h2>
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.checklist && <div className="callout"><b>CHECKPOINT</b><span>{section.checklist.map(item => <span key={item} className="calloutLine">• {item}</span>)}</span></div>}
              </section>
            ))}
            <section className="sourceBox" id="decision-sheet">
              <h2>{article.decisionTitle}</h2>
              {article.decision.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              <div className="sourceLinks">
                <a href="/spreadsheet/">Search spreadsheet</a>
                <a href="/qc/">Use QC checklist</a>
                <a href="/shipping/">Plan shipping</a>
                <a href="https://play.google.com/store/apps/details?id=com.hipobuy.shop.google" target="_blank" rel="noreferrer">Official app information ↗</a>
              </div>
              <small>This independent editorial guide does not sell products, process orders, guarantee sellers or determine authenticity. Confirm the live listing and current platform terms before acting.</small>
            </section>
            <div className="articleEnd">
              <div><b>{article.nextTitle}</b><span>{article.nextCopy}</span></div>
              <a href={article.nextHref} target={nextIsExternal ? "_blank" : undefined} rel={nextIsExternal ? "noreferrer" : undefined}>{article.nextLabel} →</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
