import {
  ArrowRight,
  BookOpen,
  Box,
  Camera,
  Check,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  FileSearch,
  Info,
  PackageCheck,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Weight,
} from "lucide-react";
import { getArticle, getArticles } from "./articles-data";
import { LanguageNav } from "./language-nav";
import { detailCopy } from "./page-detail-copy";
import { ProductExplorer } from "./product-explorer";
import { ShippingCalculator } from "./shipping-calculator";
import {
  MAIN_SITE,
  categories,
  copy,
  localizedPath,
  products,
  type Language,
} from "./site-data";

const navRoutes = ["spreadsheet", "finds", "guide", "qc", "shipping", "articles"] as const;

function Brand() {
  return (
    <span className="brand-logo-shell">
      <img className="brand-logo" src="/sugargoo-logo.png" width="480" height="148" alt="Sugargoo" />
    </span>
  );
}

function Header({ lang, path }: { lang: Language; path: string }) {
  const t = copy[lang];
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href={localizedPath(lang)} className="brand-link" aria-label="Sugar Scout home"><Brand /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navRoutes.map((route) => (
            <a key={route} href={localizedPath(lang, route)} className={path === route ? "active" : ""}>{t.nav[route]}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageNav current={lang} />
          <a className="catalog-button" href={`${MAIN_SITE}/AllProducts/`} target="_blank" rel="noopener noreferrer">
            <span>{t.nav.spreadsheet}</span><ExternalLink size={15} aria-hidden="true" />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open menu">Menu</summary>
            <nav>
              {navRoutes.map((route) => <a key={route} href={localizedPath(lang, route)}>{t.nav[route]}</a>)}
              <a href={localizedPath(lang, "faq")}>{t.nav.faq}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand"><Brand /><p>{t.footerText}</p><span>{t.independent}</span></div>
        <div><h3>{d.footer[0]}</h3><a href={localizedPath(lang, "spreadsheet")}>{t.nav.spreadsheet}</a><a href={localizedPath(lang, "finds")}>{t.nav.finds}</a><a href={localizedPath(lang, "qc")}>{t.nav.qc}</a></div>
        <div><h3>{d.footer[1]}</h3><a href={localizedPath(lang, "guide")}>{t.nav.guide}</a><a href={localizedPath(lang, "shipping")}>{t.nav.shipping}</a><a href={localizedPath(lang, "faq")}>{t.nav.faq}</a></div>
        <div><h3>{d.footer[2]}</h3><a href={localizedPath(lang, "articles")}>{t.nav.articles}</a><a href={localizedPath(lang, "articles/sugargoo-spreadsheet-guide-2026")}>Spreadsheet 2026</a><a href={localizedPath(lang, "articles/how-to-read-sugargoo-qc-photos")}>QC photos</a></div>
      </div>
      <div className="footer-disclaimer"><Info size={17} aria-hidden="true" /><p>{t.disclaimer}</p></div>
      <div className="footer-bottom"><span>© 2026 Sugar Scout</span><span>{d.footer[3]}</span></div>
    </footer>
  );
}

function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>
      {action}
    </div>
  );
}

function Hero({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const heroProducts = [products[3], products[5], products[9], products[8]];
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <div className="independent-badge"><ShieldCheck size={16} aria-hidden="true" />{t.independent}</div>
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-text">{t.heroText}</p>
        <form className="hero-search" action={`${MAIN_SITE}/search.html`} method="get" target="_blank">
          <Search size={20} aria-hidden="true" />
          <label className="sr-only" htmlFor="catalog-search">{t.searchPlaceholder}</label>
          <input id="catalog-search" name="keywords" placeholder={t.searchPlaceholder} required />
          <input type="hidden" name="channelid" value="2" />
          <button type="submit">{t.searchButton}<ArrowRight size={17} aria-hidden="true" /></button>
        </form>
        <div className="hero-metrics">
          <span><strong>12</strong> {d.metrics[0]}</span>
          <span><strong>5</strong> {d.metrics[1]}</span>
          <span><strong>¥ → $</strong> {d.metrics[2]}</span>
        </div>
      </div>
      <div className="hero-gallery" aria-label="Featured product catalog images">
        {heroProducts.map((product, index) => (
          <a key={product.id} href={product.href} target="_blank" rel="noopener noreferrer" className={`hero-product hero-product-${index + 1}`}>
            <img src={product.image} alt={product.name} width="750" height="750" loading={index < 2 ? "eager" : "lazy"} decoding="async" fetchPriority={index < 2 ? "high" : "auto"} className="hero-product-image" />
            <span><small>{product.categoryLabel}</small><strong>${product.priceUsd.toFixed(2)}</strong></span>
          </a>
        ))}
        <div className="gallery-note"><Sparkles size={18} aria-hidden="true" /><span>Real catalog images<br /><strong>No generic stock art</strong></span></div>
      </div>
    </section>
  );
}

function CategoryGrid({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const icons = [FileSearch, Sparkles, Box, BookOpen, Ruler, ShieldCheck, Weight, PackageCheck];
  return (
    <section className="content-section">
      <SectionHeading eyebrow={d.labels.productMap} title={t.categories} text={t.categoriesText} />
      <div className="category-grid">
        {categories.map((category, index) => {
          const Icon = icons[index];
          return <a key={category.key} href={category.href} target="_blank" rel="noopener noreferrer" className="category-card"><span className="category-icon"><Icon size={20} aria-hidden="true" /></span><span><strong>{category.label}</strong><small>{category.mark} {d.metrics[0]}</small></span><ChevronRight size={17} aria-hidden="true" /></a>;
        })}
      </div>
    </section>
  );
}

function ProcessSection({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const icons = [Search, CircleDollarSign, Camera, Truck];
  return (
    <section className="content-section process-section">
      <SectionHeading eyebrow={d.labels.workflow} title={t.guides} text={t.pageIntros.guide} />
      <div className="process-grid">
        {t.steps.map((step, index) => {
          const Icon = icons[index];
          return <article key={step.title}><span className="step-number">0{index + 1}</span><Icon size={24} aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p></article>;
        })}
      </div>
    </section>
  );
}

function GuideCards({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const cards = [
    { route: "qc", icon: Camera, kicker: "QC / 05", title: t.pageTitles.qc, text: t.pageIntros.qc, tone: "blue" },
    { route: "shipping", icon: Weight, kicker: "SHIP / 08", title: t.pageTitles.shipping, text: t.pageIntros.shipping, tone: "yellow" },
    { route: "guide", icon: BookOpen, kicker: "START / 01", title: t.pageTitles.guide, text: t.pageIntros.guide, tone: "cream" },
  ];
  return (
    <section className="content-section">
      <SectionHeading eyebrow={d.labels.library} title={({ en: "QC, shipping and buying guides", de: "QC-, Versand- und Kaufratgeber", es: "Guías de QC, envío y compra", fr: "Guides QC, livraison et achat", it: "Guide QC, spedizione e acquisto" } as const)[lang]} />
      <div className="guide-card-grid">
        {cards.map(({ route, icon: Icon, kicker, title, text, tone }) => (
          <a className={`guide-card ${tone}`} href={localizedPath(lang, route)} key={route}><span className="guide-icon"><Icon size={25} aria-hidden="true" /></span><p>{kicker}</p><h3>{title}</h3><span>{text}</span><strong>{t.readGuide}<ArrowRight size={17} aria-hidden="true" /></strong></a>
        ))}
      </div>
    </section>
  );
}

function ArticleCards({ lang, limit }: { lang: Language; limit?: number }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const articles = limit ? getArticles(lang).slice(0, limit) : getArticles(lang);
  return (
    <section className="content-section">
      <SectionHeading eyebrow={d.labels.research} title={t.articles} action={<a className="text-link" href={localizedPath(lang, "articles")}>{({ en: "Browse all articles", de: "Alle Artikel", es: "Ver todos los artículos", fr: "Voir tous les articles", it: "Vedi tutti gli articoli" } as const)[lang]}<ArrowRight size={16} /></a>} />
      <div className="article-card-grid">
        {articles.map((article, index) => (
          <a href={localizedPath(lang, `articles/${article.slug}`)} className="article-card" key={article.slug}>
            <span className={`article-number n${index + 1}`}>0{index + 1}</span>
            <div><p>{article.label} · {article.readTime}</p><h3>{article.title}</h3><span>{article.dek}</span><strong>{t.readGuide}<ArrowRight size={16} /></strong></div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FAQBlock({ lang, limit }: { lang: Language; limit?: number }) {
  const t = copy[lang];
  const items = limit ? t.faq.slice(0, limit) : t.faq;
  return (
    <section className="content-section faq-section">
      <SectionHeading eyebrow="FAQ" title={t.faqTitle} text={t.faqIntro} />
      <div className="faq-list">
        {items.map((item, index) => <details key={item.q} open={index === 0}><summary><span>0{index + 1}</span>{item.q}<i>+</i></summary><p>{item.a}</p></details>)}
      </div>
    </section>
  );
}

function HomePage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  return (
    <>
      <Hero lang={lang} />
      <CategoryGrid lang={lang} />
      <section className="content-section shortlist-section">
        <SectionHeading eyebrow={d.labels.shortlist} title={t.latest} text={t.latestText} action={<a className="text-link" href={localizedPath(lang, "spreadsheet")}>{t.viewAll}<ArrowRight size={16} /></a>} />
        <ProductExplorer products={products.slice(0, 8)} openLabel={t.openFind} estimatedLabel={t.estimated} priceNote={t.priceNote} compact />
        <p className="price-disclosure">{t.priceNote}</p>
      </section>
      <ProcessSection lang={lang} />
      <GuideCards lang={lang} />
      <ArticleCards lang={lang} limit={3} />
      <FAQBlock lang={lang} limit={4} />
    </>
  );
}

function SpreadsheetPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  return <><PageHeader eyebrow={d.labels.routes} title={t.pageTitles.spreadsheet} intro={t.pageIntros.spreadsheet} /><section className="content-section no-top"><ProductExplorer products={products} openLabel={t.openFind} estimatedLabel={t.estimated} priceNote={t.priceNote} allLabel={d.labels.all} /></section><FAQBlock lang={lang} limit={3} /></>;
}

function FindsPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const collections = [
    { ...d.finds[0], items: products.filter((p) => ["2534", "657", "2653"].includes(p.id)) },
    { ...d.finds[1], items: products.filter((p) => ["392", "5760", "934", "3748"].includes(p.id)) },
    { ...d.finds[2], items: products.filter((p) => p.category === "electronics") },
  ];
  return <><PageHeader eyebrow={d.labels.collections} title={t.pageTitles.finds} intro={t.pageIntros.finds} /><div className="collections-list">{collections.map((collection, index) => <section className="collection-block" key={collection.title}><div className="collection-copy"><span>{d.labels.collection} 0{index + 1}</span><h2>{collection.title}</h2><p>{collection.text}</p></div><ProductExplorer products={collection.items} openLabel={t.openFind} estimatedLabel={t.estimated} priceNote={t.priceNote} compact /></section>)}</div></>;
}

function GuidePage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const factIcons = [FileSearch, Camera, Box, Truck];
  return <><PageHeader eyebrow={d.labels.guide} title={t.pageTitles.guide} intro={t.pageIntros.guide} /><ProcessSection lang={lang} /><section className="content-section source-facts"><SectionHeading eyebrow={d.labels.official} title={d.guideTitle} /><div className="fact-grid">{d.guideFacts.map(({ title, text }, index) => { const Icon = factIcons[index]; return <article key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>; })}</div><div className="source-note"><Info size={18} /><p>{d.sourceNote}</p></div></section><ArticleCards lang={lang} limit={3} /></>;
}

function QCPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const article = getArticle(lang, "how-to-read-sugargoo-qc-photos")!;
  return <><PageHeader eyebrow={d.labels.qc} title={t.pageTitles.qc} intro={t.pageIntros.qc} /><section className="content-section qc-checklist"><div className="qc-board"><div className="qc-board-title"><span><Camera size={23} /></span><div><p className="eyebrow">8-point check</p><h2>{d.qcTitle}</h2></div></div><ol>{d.qcItems.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ol></div><div className="qc-photo"><img src="/products/air-jordan-4.webp" alt={d.qcCaption} width="750" height="750" loading="lazy" decoding="async" /><span>{d.qcCaption}</span></div></section><section className="content-section prose-preview"><SectionHeading eyebrow={article.label} title={article.title} text={article.dek} />{article.sections.slice(0, 4).map((section) => <article key={section.heading}><h2>{section.heading}</h2>{section.body.map((body) => <p key={body}>{body}</p>)}</article>)}<a className="primary-link" href={localizedPath(lang, `articles/${article.slug}`)}>{t.readGuide}<ArrowRight size={17} /></a></section></>;
}

function ShippingPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  const icons = [Weight, Box, Truck, ShieldCheck];
  return <><PageHeader eyebrow={d.labels.shipping} title={t.pageTitles.shipping} intro={t.pageIntros.shipping} /><section className="content-section shipping-layout"><ShippingCalculator lang={lang} /><div className="shipping-principles"><p className="eyebrow">{d.labels.beforeParcel}</p><h2>{d.shippingTitle}</h2>{d.shippingFacts.map(({ title, text }, index) => { const Icon = icons[index]; return <div key={title}><Icon size={20} /><span><strong>{title}</strong><small>{text}</small></span></div>; })}</div></section><section className="content-section comparison-table"><SectionHeading eyebrow={d.labels.planningTable} title={d.tableTitle} /><div className="table-wrap"><table><thead><tr>{d.tableHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{d.tableRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div><p className="price-disclosure">{d.shippingNote}</p></section></>;
}

function FAQPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  return <><PageHeader eyebrow={detailCopy[lang].labels.faq} title={t.pageTitles.faq} intro={t.pageIntros.faq} /><FAQBlock lang={lang} /></>;
}

function ArticlesPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  const d = detailCopy[lang];
  return <><PageHeader eyebrow={d.labels.articles} title={t.pageTitles.articles} intro={t.pageIntros.articles} /><ArticleCards lang={lang} /><section className="content-section editorial-standard"><SectionHeading eyebrow={d.labels.editorial} title={d.editorialTitle} /><div>{d.editorialItems.map((item) => <span key={item.title}><strong>{item.title}</strong><small>{item.text}</small></span>)}</div></section></>;
}

const articleSources: Record<string, { label: string; href: string }[]> = {
  "sugargoo-spreadsheet-guide-2026": [{ label: "Official buying workflow", href: "https://blog.sugargoo.com/understanding-how-to-buy-from-taobao-using-a-sugargoo-agent/" }, { label: "Official QC guide", href: "https://blog.sugargoo.com/sugargoo-quality-check-service-the-ultimate-qc-guide-for-overse-buyers/" }],
  "how-to-read-sugargoo-qc-photos": [{ label: "Official QC guide", href: "https://blog.sugargoo.com/sugargoo-quality-check-service-the-ultimate-qc-guide-for-overse-buyers/" }, { label: "Official returns guide", href: "https://blog.sugargoo.com/taobao-1688-returns-guide/" }],
  "sugargoo-shipping-cost-guide-2026": [{ label: "Official shipping-cost guidance", href: "https://blog.sugargoo.com/estimate-international-shipping-costs-sugargoo/" }],
  "sugargoo-fees-cost-breakdown-2026": [{ label: "Sugargoo official guides", href: "https://blog.sugargoo.com/" }],
  "sugargoo-review-2026": [{ label: "Sugargoo official guides", href: "https://blog.sugargoo.com/" }, { label: "Trustpilot public review profile", href: "https://www.trustpilot.com/review/sugargoo.com" }],
  "sugargoo-returns-refunds-storage-guide": [{ label: "Official storage guide", href: "https://blog.sugargoo.com/how-long-does-sugargoo-keep-items-in-the-warehouse/" }, { label: "Official returns guide", href: "https://blog.sugargoo.com/taobao-1688-returns-guide/" }],
};

function ArticlePage({ lang, slug }: { lang: Language; slug: string }) {
  const article = getArticle(lang, slug);
  if (!article) return null;
  const d = detailCopy[lang];
  const related = getArticles(lang).filter((item) => item.slug !== slug).slice(0, 3);
  const visualItems = lang === "en" ? article.visual.items : d.editorialItems.map((item) => ({ label: item.title, value: item.text, note: "" }));
  const dateLabel = new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date("2026-09-01T00:00:00Z"));
  return <article className="long-article">
    <header><p className="eyebrow">{article.label}</p><h1>{article.title}</h1><p>{article.dek}</p><div><span>{dateLabel}</span><span>{article.readTime}</span><span>{copy[lang].independent}</span></div></header>
    <aside><Info size={18} /><div><p><strong>{d.articleSourcePrefix}:</strong> {lang === "en" ? article.sourceLine : d.sourceNote}</p><nav aria-label="Sources checked">{(articleSources[slug] ?? []).map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<ArrowRight size={14} /></a>)}</nav></div></aside>
    <section className="article-visual"><p className="eyebrow">{d.articleSnapshot}</p><h2>{lang === "en" ? article.visual.title : d.editorialTitle}</h2><div className="article-visual-grid">{visualItems.map((item) => <span className="article-visual-item" key={item.label}><small>{item.label}</small><strong>{item.value}</strong>{item.note && <em>{item.note}</em>}</span>)}</div></section>
    <div className="article-body">{article.sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2>{section.body.map((body) => <p key={body}>{body}</p>)}</div></section>)}</div>
    <section className="related-articles"><p className="eyebrow">{d.relatedTitle}</p>{related.map((item, index) => <a key={item.slug} href={localizedPath(lang, `articles/${item.slug}`)}><span>0{index + 1}</span><strong>{item.title}</strong><ArrowRight size={17} /></a>)}</section>
    <div className="article-cta"><h2>{d.ctaTitle}</h2><p>{d.ctaText}</p><a href={localizedPath(lang, "spreadsheet")}>{d.ctaLink}<ArrowRight size={18} /></a></div>
  </article>;
}

export function SitePage({ lang, path = "" }: { lang: Language; path?: string }) {
  let content: React.ReactNode;
  if (!path) content = <HomePage lang={lang} />;
  else if (path === "spreadsheet") content = <SpreadsheetPage lang={lang} />;
  else if (path === "finds") content = <FindsPage lang={lang} />;
  else if (path === "guide") content = <GuidePage lang={lang} />;
  else if (path === "qc") content = <QCPage lang={lang} />;
  else if (path === "shipping") content = <ShippingPage lang={lang} />;
  else if (path === "faq") content = <FAQPage lang={lang} />;
  else if (path === "articles") content = <ArticlesPage lang={lang} />;
  else if (path.startsWith("articles/")) content = <ArticlePage lang={lang} slug={path.split("/")[1]} />;
  else content = null;
  return <><Header lang={lang} path={path} /><main lang={lang}>{content}</main><Footer lang={lang} /></>;
}
