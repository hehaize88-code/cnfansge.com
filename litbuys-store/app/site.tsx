import type { ReactNode } from "react";
import Link from "next/link";
import { copies, innerCopies, type Copy } from "./copy-data";
import { localPath, SITE_ORIGIN, type Lang, type PageKey } from "./i18n";
import { LanguageSwitcher } from "./language-switcher";
import { CatalogSearchForm } from "./analytics";
import { products } from "./catalog-data";
import { articleSlugs, featuredArticles, orderedArticleSlugs, getArticle, relatedArticles, articleDates, type ArticleSlug } from "./articles";
import { ui, categoryLabels, productLabel, articleImage, articleProductIds, topicArticles, formatDate } from "./ui-copy";
import { localizedResearch } from "./research";
import evidenceTables from "./content-oct/evidence.json";

export type { Lang, PageKey } from "./i18n";

function ArticleCards({ lang, slugs }: { lang: Lang; slugs: readonly ArticleSlug[] }) {
  return <div className="article-grid">{slugs.map((slug) => { const article = getArticle(slug,lang); return <article key={slug}>
    <a className="article-image" href={localPath(lang,`/articles/${slug}`)} tabIndex={-1} aria-hidden="true"><img src={articleImage(slug)} alt="" width="320" height="320" loading="lazy" /></a>
    <h3><Link href={localPath(lang,`/articles/${slug}`)}>{article.title}</Link></h3><p>{article.deck}</p><Link className="article-read" href={localPath(lang,`/articles/${slug}`)}>{innerCopies[lang].detail} ↗</Link>
  </article>; })}</div>;
}

function CoreLinks({ lang }: { lang: Lang }) {
  return <nav className="core-links" aria-label={ui[lang].start}><strong>{ui[lang].start}</strong>{["spreadsheet","qc","shipping"].map((page,index) => <Link key={page} href={localPath(lang,`/${page}`)}>{[copies[lang].nav[0],copies[lang].nav[3],copies[lang].nav[4]][index]} ↗</Link>)}</nav>;
}

const categories = [
  ["Shoes", "https://cnfansge.com/shoes/", "01"], ["Hoodies", "https://cnfansge.com/hoodies-sweaters/", "02"],
  ["T-Shirts", "https://cnfansge.com/t-shirts/", "03"], ["Jackets", "https://cnfansge.com/jackets/", "04"],
  ["Pants", "https://cnfansge.com/pants-shorts/", "05"], ["Accessories", "https://cnfansge.com/accessories/", "06"],
  ["Jersey", "https://cnfansge.com/Jersey/", "07"], ["All products", "https://cnfansge.com/AllProducts/", "08"],
];

const navHrefs = ["/spreadsheet", "/finds", "/guides", "/qc", "/shipping", "/faq", "/articles"];

function pageCopy(lang: Lang = "en") { return { lang, copy: copies[lang] }; }

const heroLabels: Record<Lang, { search: string; placeholder: string; featured: string; product: string; detail: string }> = {
  en: { search: "Search", placeholder: "Search shoes, hoodies, bags…", featured: "Featured find", product: "Sweatshirt record", detail: "View product" },
  de: { search: "Suchen", placeholder: "Schuhe, Hoodies, Taschen suchen…", featured: "Ausgewählter Fund", product: "Sweatshirt-Auswahl", detail: "Produkt ansehen" },
  es: { search: "Buscar", placeholder: "Buscar zapatos, sudaderas, bolsos…", featured: "Producto destacado", product: "Sudadera seleccionada", detail: "Ver producto" },
  fr: { search: "Rechercher", placeholder: "Chaussures, sweats, sacs…", featured: "À découvrir", product: "Sweat-shirt sélectionné", detail: "Voir le produit" },
  it: { search: "Cerca", placeholder: "Cerca scarpe, felpe, borse…", featured: "Prodotto in evidenza", product: "Felpa selezionata", detail: "Vedi prodotto" },
};

function CatalogSearch({ lang, copy, hero = false }: { lang: Lang; copy: Copy; hero?: boolean }) {
  return <CatalogSearchForm lang={lang} label={copy.search} placeholder={hero ? heroLabels[lang].placeholder : copy.search} button={heroLabels[lang].search} hero={hero} />;
}

export function SiteHeader({ lang, copy }: { lang: Lang; copy: Copy }) {
  return <header className="site-header">
    <Link className="logo" href={localPath(lang)} aria-label="LitBuys Store"><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></Link>
    <CatalogSearch lang={lang} copy={copy} />
    <LanguageSwitcher lang={lang} />
  </header>;
}

export function TopicNav({ copy, lang }: { copy: Copy; lang: Lang }) {
  return <nav className="topic-nav" aria-label={ui[lang].navigation}>{copy.nav.map((item, index) => <a key={item} href={localPath(lang, navHrefs[index])}>{item}<sup>{String(index + 1).padStart(2, "0")}</sup></a>)}</nav>;
}

export function ProductGrid({ copy, lang, limit, items = products, entryPoint = "product_grid" }: { copy: Copy; lang: Lang; limit?: number; items?: readonly (typeof products[number])[]; entryPoint?: string }) {
  return <div className="product-grid">{items.slice(0, limit).map((product, index) => <article className="product-card" key={product.id}>
    <a className="product-image" href={product.target} data-entry-point={entryPoint}><img src={product.image} alt={productLabel(product, lang).name} width="640" height="640" loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></a>
    <div className="product-body"><p>{productLabel(product, lang).category} · ID {product.id}</p><h3>{productLabel(product, lang).name}</h3><div className="price-row"><strong>{product.price}</strong><small>{copy.source} {product.cny}</small></div><a href={product.target} data-entry-point={entryPoint} target="_blank" rel="noopener noreferrer">{copy.open} ↗</a></div>
  </article>)}</div>;
}

export function HomePage({ language = "en" }: { language?: Lang } = {}) {
  const { lang, copy } = pageCopy(language);
  const featured = products[0];
  const labels = heroLabels[lang];
  return <main className="home-page"><SiteHeader lang={lang} copy={copy} />
    <TopicNav lang={lang} copy={copy} />
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.hero}</h1><p className="hero-intro">{copy.intro}</p><CatalogSearch lang={lang} copy={copy} hero /></div>
      <a className="hero-product" href={featured.target} data-entry-point="homepage_featured" aria-label={`${labels.detail}: ${labels.product}`}>
        <div className="hero-product-image"><img src={featured.image} alt={labels.product} width="640" height="640" fetchPriority="high" /></div>
        <div className="hero-product-info"><p className="hero-product-label">{labels.featured} · ID {featured.id}</p><h2>{labels.product}</h2><div className="hero-product-price"><strong>{featured.price}</strong><span>{copy.usd}</span></div><span className="hero-product-link">{labels.detail} <span aria-hidden="true">↗</span></span></div>
      </a></section>
    <CoreLinks lang={lang} />
    <div className="proof-strip"><span>● {copy.verified}</span><span>● {copy.usd}</span><span>● {copy.checked}</span></div>
    <section className="section compact-section"><div className="section-heading"><div><p className="kicker">{copy.categories} / 01</p><h2>{copy.categories}</h2></div><p>{copy.categoryIntro}</p></div><div className="category-grid">{categories.map(([label, url, number]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer"><span>{number}</span><b>{categoryLabels[lang][Number(number)-1]}</b><i>↗</i></a>)}</div></section>
    <section className="section" id="finds"><div className="section-heading"><div><p className="kicker">{copy.nav[1]} / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><ProductGrid lang={lang} copy={copy} /></section>
    <section className="section guide-section" id="guides"><div className="section-heading"><div><p className="kicker">{copy.nav[2]} / 03</p><h2>{copy.guideTitle}</h2></div><p>{copy.guideIntro}</p></div><div className="guide-grid">{copy.guides.map((guide) => <article key={guide.tag}><p>{guide.tag}</p><h3>{guide.title}</h3><span>{guide.text}</span><b>↘</b></article>)}</div></section>
    <section className="section" id="articles"><div className="section-heading"><div><p className="kicker">{copy.nav[6]} / 04</p><h2>{copy.articles}</h2></div><p>{copy.articleIntro}</p></div><ArticleCards lang={lang} slugs={featuredArticles} /></section>
    <section className="section faq-section" id="faq"><div><p className="kicker">{copy.nav[5]} / 05</p><h2>{copy.faq}</h2></div><div className="faq-list">{copy.faqs.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div></section>
    <footer><Link className="logo footer-logo" href={localPath(lang)}><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></Link><p>{copy.disclaimer}</p><span>© 2026 litbuys.store</span></footer>
  </main>;
}

function PageIntro({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <section className="inner-hero"><p className="kicker">{label}</p><h1>{title}</h1><p>{intro}</p></section>;
}

function StandardShell({ children, lang, copy }: { children: ReactNode; lang: Lang; copy: Copy }) {
  return <main><SiteHeader lang={lang} copy={copy} /><TopicNav lang={lang} copy={copy} />{children}<footer><Link className="logo footer-logo" href={localPath(lang)}><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></Link><p>{copy.disclaimer}</p><span>© 2026 litbuys.store</span></footer></main>;
}

function ResearchSection({ page, lang }: { page: PageKey; lang: Lang }) {
  const research = localizedResearch[lang][page];
  return <section className="section research-section">
    <div className="research-head"><p className="kicker">{ui[lang].research}</p><h2>{research.title}</h2><p>{research.intro}</p></div>
    <div className="research-grid">{research.blocks.map((block) => <article key={block.title}><p className="kicker">{block.eyebrow}</p><h3>{block.title}</h3>{block.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>)}</div>
    <p className="source-note">{ui[lang].researchNote}</p>
  </section>;
}

export function SubPage({ page, language = "en" }: { page: PageKey; language?: Lang }) {
  const { lang, copy } = pageCopy(language);
  const inner = innerCopies[lang];
  const meta = inner.pages[page];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [...copy.faqs,...inner.extraFaq].map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return <StandardShell lang={lang} copy={copy}>
    {page === "faq" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <PageIntro label={`${copy.nav[navHrefs.indexOf(`/${page}`)]} / LITBUYS`} title={meta.title} intro={meta.intro} />
    {page === "spreadsheet" && <><div className="data-strip"><span>08<br/><b>{ui[lang].records}</b></span><span>08<br/><b>{ui[lang].matched}</b></span><span>05<br/><b>{ui[lang].languages}</b></span><span>USD<br/><b>{ui[lang].reference}</b></span></div><section className="section"><div className="section-heading"><div><p className="kicker">{copy.nav[0]} / 01</p><h2>{inner.directory}</h2></div><p>{inner.priceNote}</p></div><ProductGrid lang={lang} copy={copy} /></section></>}
    {page === "finds" && <><section className="section compact-section"><div className="section-heading"><div><p className="kicker">{copy.categories} / 01</p><h2>{copy.categories}</h2></div><p>{copy.categoryIntro}</p></div><div className="category-grid">{categories.map(([label,url,number]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer"><span>{number}</span><b>{categoryLabels[lang][Number(number)-1]}</b><i>↗</i></a>)}</div></section><section className="section"><div className="section-heading"><div><p className="kicker">{copy.nav[1]} / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><ProductGrid lang={lang} copy={copy} /></section></>}
    {page === "guides" && <section className="section"><div className="guide-directory">{copy.guides.map((guide,index) => <a href={localPath(lang, ["/qc","/articles/litbuy-clothing-size-guide","/shipping"][index])} key={guide.tag}><span>{guide.tag}</span><h2>{guide.title}</h2><p>{guide.text}</p><b>↗</b></a>)}</div></section>}
    {page === "qc" && <section className="section"><div className="checklist-grid">{inner.qcChecks.map((item,index) => <article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></section>}
    {page === "shipping" && <><section className="formula-section"><p>{ui[lang].volumetric}</p><div><b>L × W × H</b><span>÷ {ui[lang].divisor}</span></div><small>{inner.priceNote}</small></section><section className="section"><div className="shipping-grid">{inner.shipping.map((item,index) => <article key={item.title}><span>0{index+1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section></>}
    {page === "faq" && <section className="section faq-section"><div><p className="kicker">{copy.nav[5]}</p><h2>{copy.faq}</h2></div><div className="faq-list">{[...copy.faqs,...inner.extraFaq].map((item,index) => <details key={item.q} open={index===0}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div></section>}
    {page === "articles" && <section className="section"><p className="article-count">{articleSlugs.length} {copy.nav[6]}</p><ArticleCards lang={lang} slugs={orderedArticleSlugs} /></section>}
    {page !== "articles" && <section className="section topic-reading"><h2>{ui[lang].related}</h2><ArticleCards lang={lang} slugs={topicArticles[page]} /></section>}
    <ResearchSection page={page} lang={lang} />
  </StandardShell>;
}

export function ArticlePage({ slug, language = "en" }: { slug: ArticleSlug; language?: Lang }) {
  const { lang, copy } = pageCopy(language);
  const article = getArticle(slug, lang);
  const dates = articleDates(slug);
  const evidence = (evidenceTables as Record<string, Record<string, { title: string; columns: string[]; rows: string[][] }>>)[lang][slug];
  const url = SITE_ORIGIN + localPath(lang, `/articles/${slug}`);
  const schema = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "Article", headline: article.title, description: article.deck, inLanguage: lang, datePublished: dates.published, dateModified: dates.modified,
        author: { "@type": "Organization", name: "LitBuys Store" }, publisher: { "@type": "Organization", name: "LitBuys Store" }, mainEntityOfPage: url,
        image: SITE_ORIGIN + articleImage(slug) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "LitBuys Store", item: SITE_ORIGIN + localPath(lang) },
        { "@type": "ListItem", position: 2, name: copy.nav[6], item: SITE_ORIGIN + localPath(lang, "/articles") },
        { "@type": "ListItem", position: 3, name: article.title, item: url } ] }
    ]
  };
  return <StandardShell lang={lang} copy={copy}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article className="article-page">
      <nav className="breadcrumbs" aria-label={ui[lang].breadcrumbs}><Link href={localPath(lang)}>LitBuys Store</Link><span> / </span><Link href={localPath(lang, "/articles")}>{copy.nav[6]}</Link></nav>
      <header className="article-head"><p className="kicker">{ui[lang].independent}</p><h1>{article.title}</h1><p>{article.deck}</p><div className="article-meta"><span>{article.readTime}</span><span>{ui[lang].updated} <time dateTime={dates.modified}>{formatDate(dates.modified, lang)}</time></span></div></header>
      <details className="toc-disclosure"><summary>{ui[lang].contents}</summary><nav aria-label={ui[lang].contents}>{article.sections.map((section,index) => <a href={`#section-${index+1}`} key={section.heading}>{index+1}. {section.heading}</a>)}</nav></details>
      {evidence && <figure className="evidence-table"><figcaption>{evidence.title}</figcaption><div><table><thead><tr>{evidence.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{evidence.rows.map((row) => <tr key={row[0]}>{row.map((cell,index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div></figure>}
      <div className="article-content">{article.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,pIndex) => <p key={pIndex}>{paragraph}</p>)}</section>)}</div>
      <div className="article-note"><strong>{ui[lang].sourceBasis}</strong> {ui[lang].articleSourceNote}</div>
      {articleProductIds[slug] && <section className="article-products" data-entry-point="article_products"><h2>{ui[lang].productExamples}</h2><p>{ui[lang].referenceNote}</p><ProductGrid lang={lang} copy={copy} entryPoint="article_products" items={products.filter((product) => articleProductIds[slug]!.includes(product.id))} /></section>}
      <section className="article-next"><h2>{ui[lang].related}</h2><ArticleCards lang={lang} slugs={relatedArticles(slug)} /></section>
      <nav className="article-related" aria-label={ui[lang].related}><Link href={localPath(lang,"/spreadsheet")}>{copy.nav[0]}</Link><Link href={localPath(lang,"/qc")}>{copy.nav[3]}</Link><Link href={localPath(lang,"/shipping")}>{copy.nav[4]}</Link><Link href={localPath(lang,"/articles")}>{ui[lang].allArticles}</Link></nav>
    </article>
  </StandardShell>;
}

export function ProductDetailPage({ slug, language = "en" }: { slug: string; language?: Lang }) {
  const { lang, copy } = pageCopy(language);
  const inner = innerCopies[lang];
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const related = products.filter((item) => item.slug !== product.slug).slice(0,4);
  return <StandardShell lang={lang} copy={copy}>
    <section className="product-detail-page"><div className="detail-image"><img src={product.image} alt={productLabel(product, lang).name} width="1000" height="1000" /></div><div className="detail-copy"><p className="kicker">{productLabel(product, lang).category} / {inner.productId} {product.id}</p><h1>{productLabel(product, lang).name}</h1><div className="detail-price"><strong>{product.price}</strong><span>{copy.source} {product.cny}</span></div><p>{inner.priceNote}</p><dl><div><dt>{inner.checkedLabel}</dt><dd>{formatDate("2026-08-29", lang)}</dd></div><div><dt>{ui[lang].image}</dt><dd>{ui[lang].matched}</dd></div><div><dt>{ui[lang].destination}</dt><dd>{inner.catalog}</dd></div></dl><a className="button button-primary" href={product.target} data-entry-point="product_cta" target="_blank" rel="noopener noreferrer">{copy.open} ↗</a></div></section>
    <section className="section"><div className="section-heading"><div><p className="kicker">RELATED / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><div className="product-grid">{related.map((item,index) => <article className="product-card" key={item.id}><a className="product-image" href={item.target} data-entry-point="related_products"><img src={item.image} alt={productLabel(item, lang).name} width="640" height="640" loading="lazy"/><span>0{index+1}</span></a><div className="product-body"><p>{productLabel(item, lang).category} · ID {item.id}</p><h3>{productLabel(item, lang).name}</h3><div className="price-row"><strong>{item.price}</strong><small>{item.cny}</small></div><a href={item.target} data-entry-point="related_products">{inner.detail} ↗</a></div></article>)}</div></section>
  </StandardShell>;
}
