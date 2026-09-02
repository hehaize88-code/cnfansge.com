import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articleCards,
  articleRoutes,
  categories,
  coreRoutes,
  languageNames,
  languages,
  products,
  routes
} from "../../../lib/data";
import { translations } from "../../../lib/i18n";
import { researchedArticles } from "../../../lib/articles";
import { localizedArticles, localizedSupplements, localizedClosingNotes } from "../../../lib/article-translations";

const destinationSearch = "https://cnfansge.com/search.html";
const finalBase = "https://usfanss.shop";

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    routes.map((route) => ({ lang, slug: route ? route.split("/") : [] }))
  );
}

function currentRoute(slug = []) {
  return slug.join("/");
}

function internalPath(lang, route = "") {
  return `/${lang}${route ? `/${route}` : ""}`;
}

export async function generateMetadata({ params }) {
  const { lang, slug = [] } = await params;
  if (!languages.includes(lang)) return {};
  const t = translations[lang];
  const route = currentRoute(slug);
  const articleSlug = route.startsWith("articles/") ? route.split("/")[1] : null;
  const pageKey = coreRoutes.includes(route) ? route || "home" : articleSlug ? "article" : "home";
  const intro = route === "" ? ["", "", t.hero.body] : t.pageIntro[route] || t.pageIntro.articles;
  const articleCard = articleSlug ? articleCards.find((item) => item.slug === articleSlug) : null;
  const article = articleCard ? t.articleTitles[articleCard.contentKey] : null;
  const titleMap = {
    home: "USFans Spreadsheet 2026 — Finds, QC & Shipping",
    spreadsheet: intro?.[0],
    finds: intro?.[0],
    guide: intro?.[0],
    qc: intro?.[0],
    shipping: intro?.[0],
    faq: intro?.[0],
    articles: intro?.[0],
    article: article?.[0]
  };
  const description = article?.[1] || intro?.[2] || t.hero.body;
  const canonicalPath = internalPath(lang, route);
  const languageAlternates = Object.fromEntries(
    languages.map((code) => [code, `${finalBase}${internalPath(code, route)}`])
  );
  languageAlternates["x-default"] = `${finalBase}${internalPath("en", route)}`;
  return {
    title: titleMap[pageKey],
    description,
    alternates: {
      canonical: `${finalBase}${canonicalPath}`,
      languages: languageAlternates
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: titleMap[pageKey],
      description,
      url: `${finalBase}${canonicalPath}`,
      locale: t.locale
    }
  };
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Logo({ lang }) {
  return (
    <Link href={internalPath(lang)} className="logo" aria-label="USFans Index home">
      <img src="/usfans-logo.png" alt="USFans" width="375" height="123" />
    </Link>
  );
}

function Header({ lang, route, t }) {
  const navItems = ["spreadsheet", "finds", "guide", "qc", "shipping", "articles", "faq"];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo lang={lang} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item} href={internalPath(lang, item)} className={route === item ? "active" : ""}>
              {t.nav[item]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <details className="language-menu">
            <summary>{lang.toUpperCase()} <span>⌄</span></summary>
            <div className="language-panel">
              {languages.map((code) => (
                <Link key={code} href={internalPath(code, route)} lang={code} className={code === lang ? "selected" : ""}>
                  {languageNames[code]}
                </Link>
              ))}
            </div>
          </details>
          <Link className="header-cta" href={internalPath(lang, "finds")}>{t.common.browse} <Arrow /></Link>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><span></span><span></span></summary>
            <div className="mobile-panel">
              {navItems.map((item) => <Link key={item} href={internalPath(lang, item)}>{t.nav[item]}</Link>)}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function SearchForm({ t, compact = false }) {
  return (
    <form className={`search-form ${compact ? "compact" : ""}`} method="get" action={destinationSearch} target="_blank">
      <label className="sr-only" htmlFor={compact ? "compact-search" : "hero-search"}>{t.common.searchPlaceholder}</label>
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input id={compact ? "compact-search" : "hero-search"} name="keywords" placeholder={t.common.searchPlaceholder} required />
      <input type="hidden" name="channelid" value="2" />
      <button type="submit">{t.common.searchButton}<Arrow /></button>
    </form>
  );
}

function HomeHero({ lang, t }) {
  return (
    <section className="home-hero">
      <div className="hero-main">
        <p className="eyebrow"><span></span>{t.hero.kicker}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-copy">{t.hero.body}</p>
        <SearchForm t={t} />
        <div className="hero-buttons">
          <Link className="button primary" href={internalPath(lang, "spreadsheet")}>{t.nav.spreadsheet}<Arrow /></Link>
          <Link className="button ghost" href={internalPath(lang, "guide")}>{t.common.readGuide}<Arrow /></Link>
        </div>
        <div className="hero-stats">
          {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((stat, index) => <div key={stat}><strong>0{index + 1}</strong><span>{stat}</span></div>)}
        </div>
      </div>
      <aside className="route-brief">
        <div className="brief-top"><span>{t.hero.brief}</span><i>↗</i></div>
        <div className="brief-orbit"><div className="orbit-dot"></div><strong>QC</strong><span>LIST</span></div>
        <h2>{t.hero.briefTitle}</h2>
        <p>{t.hero.briefBody}</p>
        <div className="brief-tags"><span>{t.hero.tag1}</span><span>{t.hero.tag2}</span><span>{t.hero.tag3}</span></div>
      </aside>
    </section>
  );
}

function SectionHeading({ eyebrow, title, body, action }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span></span>{eyebrow}</p><h2>{title}</h2>{body && <p>{body}</p>}</div>
      {action}
    </div>
  );
}

function CategoryGrid({ t }) {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <a key={category.key} href={category.href} target="_blank" rel="noreferrer" className="category-card">
          <img src={category.image} alt={`${t.categoryNames[category.key]} product category`} width="560" height="420" loading="lazy" />
          <span className="category-number">0{index + 1}</span>
          <div><h3>{t.categoryNames[category.key]}</h3><span><Arrow diagonal /></span></div>
        </a>
      ))}
    </div>
  );
}

function ProductCard({ product, t }) {
  return (
    <article className="product-card">
      <a href={product.href} target="_blank" rel="noreferrer" className="product-image">
        <img src={product.image} alt={`${product.title} product reference`} width="640" height="640" loading="lazy" />
        <span>{t.common.verified}</span>
      </a>
      <div className="product-info">
        <p>{product.category} · ID {product.id}</p>
        <h3>{product.title}</h3>
        <div className="product-bottom">
          <div><small>{t.common.currentPrice}</small><strong>{product.price}</strong></div>
          <a href={product.href} target="_blank" rel="noreferrer" aria-label={`${t.common.open}: ${product.title}`}><Arrow diagonal /></a>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ t, limit }) {
  const visible = limit ? products.slice(0, limit) : products;
  return <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} t={t} />)}</div>;
}

function MethodGrid({ t }) {
  return <div className="method-grid">{t.method.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function ArticleGrid({ lang, t }) {
  return (
    <div className="article-grid">
      {articleCards.map((article) => {
        const [title, description] = t.articleTitles[article.contentKey];
        return (
          <Link key={article.slug} href={internalPath(lang, `articles/${article.slug}`)} className="article-card">
            <div className="article-meta"><span>{article.number}</span><small>{article.read}</small></div>
            <h3>{title}</h3><p>{description}</p><div className="article-link">{t.common.readGuide}<Arrow /></div>
          </Link>
        );
      })}
    </div>
  );
}

function FaqList({ t, limit, compact = false }) {
  const items = limit ? t.faq.slice(0, limit) : t.faq;
  return <div className="faq-list">{items.map(([question, answer], index) => <details key={question} open={!compact && index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>;
}

function PageHero({ intro, number }) {
  return (
    <section className="page-hero">
      <div><p className="eyebrow"><span></span>{intro[0]}</p><h1>{intro[1]}</h1><p>{intro[2]}</p></div>
      <strong>{number}</strong>
    </section>
  );
}

function HomePage({ lang, t }) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "USFans Index", url: `${finalBase}/${lang}`, description: t.hero.body, potentialAction: { "@type": "SearchAction", target: `${destinationSearch}?keywords={search_term_string}&channelid=2`, "query-input": "required name=search_term_string" } }} />
      <div className="home-page">
        <HomeHero lang={lang} t={t} />
        <section className="section-shell categories-section">
          <SectionHeading eyebrow={t.home.categoriesEyebrow} title={t.home.categoriesTitle} body={t.home.categoriesBody} />
          <CategoryGrid t={t} />
        </section>
        <section className="section-shell products-section">
          <SectionHeading eyebrow={t.home.productsEyebrow} title={t.home.productsTitle} body={t.home.productsBody} action={<Link href={internalPath(lang, "finds")} className="text-link">{t.common.viewAll}<Arrow /></Link>} />
          <ProductGrid t={t} limit={8} />
          <p className="price-note">{t.common.cnyNote}</p>
        </section>
        <section className="method-section section-shell">
          <SectionHeading eyebrow={t.home.methodEyebrow} title={t.home.methodTitle} />
          <MethodGrid t={t} />
        </section>
        <section className="section-shell articles-section">
          <SectionHeading eyebrow={t.home.articlesEyebrow} title={t.home.articlesTitle} action={<Link href={internalPath(lang, "articles")} className="text-link">{t.nav.articles}<Arrow /></Link>} />
          <ArticleGrid lang={lang} t={t} />
        </section>
        <section className="section-shell faq-section">
          <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} />
          <FaqList t={t} limit={4} compact />
        </section>
      </div>
    </>
  );
}

function SpreadsheetPage({ lang, t }) {
  return (
    <>
      <PageHero intro={t.pageIntro.spreadsheet} number="01" />
      <FactStrip items={t.coreFacts.guide} />
      <section className="section-shell split-intro"><div><h2>{t.hero.briefTitle}</h2><p>{t.hero.briefBody}</p></div><SearchForm t={t} compact /></section>
      <section className="section-shell"><CategoryGrid t={t} /></section>
      <section className="section-shell"><MethodGrid t={t} /></section>
      <section className="section-shell products-section"><SectionHeading eyebrow={t.home.productsEyebrow} title={t.home.productsTitle} /><ProductGrid t={t} limit={8} /><Link className="button primary centered" href={internalPath(lang, "finds")}>{t.common.viewAll}<Arrow /></Link></section>
    </>
  );
}

function FindsPage({ t }) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: product.href })) }} />
      <PageHero intro={t.pageIntro.finds} number="02" />
      <section className="section-shell finds-toolbar"><SearchForm t={t} compact /><p>{t.common.cnyNote}</p></section>
      <section className="section-shell products-section"><ProductGrid t={t} /></section>
    </>
  );
}

function NumberedContent({ items }) {
  return <div className="numbered-content">{items.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>;
}

function FactStrip({ items }) {
  return <section className="fact-strip section-shell">{items.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</section>;
}

function GuidePage({ t }) {
  return <><PageHero intro={t.pageIntro.guide} number="03" /><FactStrip items={t.coreFacts.guide} /><section className="section-shell prose-shell"><NumberedContent items={t.guideSteps} /><aside className="source-card"><strong>{t.common.updated}</strong><p>{t.common.sourceNote}</p></aside></section><section className="section-shell marketplace-section"><SectionHeading eyebrow="TAOBAO · WEIDIAN · 1688" title={t.articleTitles["taobao-weidian-1688"][0]} /><div className="marketplace-grid">{t.marketplaces.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section></>;
}

function QcPage({ t }) {
  return <><PageHero intro={t.pageIntro.qc} number="04" /><FactStrip items={t.coreFacts.qc} /><section className="section-shell prose-shell"><NumberedContent items={t.qcPoints} /><aside className="callout"><span>QC ≠ CERTIFICATE</span><p>{t.qcPoints[7][1]}</p></aside></section></>;
}

function ShippingPage({ t }) {
  return <><PageHero intro={t.pageIntro.shipping} number="05" /><FactStrip items={t.coreFacts.shipping} /><section className="section-shell shipping-formula"><div><small>CHARGEABLE WEIGHT</small><strong>max(actual, volumetric)</strong></div><p>{t.shippingPoints[1][1]}</p></section><section className="section-shell prose-shell"><NumberedContent items={t.shippingPoints} /><aside className="source-card"><strong>{t.common.updated}</strong><p>{t.common.sourceNote}</p></aside></section></>;
}

function FaqPage({ t }) {
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} /><PageHero intro={t.pageIntro.faq} number="06" /><FactStrip items={t.coreFacts.qc} /><section className="section-shell faq-page"><FaqList t={t} /></section></>;
}

function ArticlesPage({ lang, t }) {
  return <><PageHero intro={t.pageIntro.articles} number="07" /><section className="section-shell articles-page"><ArticleGrid lang={lang} t={t} /></section></>;
}

function ArticlePage({ lang, slug, t }) {
  const article = articleCards.find((item) => item.slug === slug);
  if (!article) notFound();
  const contentKey = article.contentKey;
  const [title, description] = t.articleTitles[contentKey];
  const baseArticle = researchedArticles[slug];
  const localizedArticle = localizedArticles[lang]?.[slug];
  const localizedSupplement = localizedSupplements[lang]?.[slug];
  const localizedClosingNote = localizedClosingNotes[lang];
  const researched = baseArticle ? {
    ...baseArticle,
    ...localizedArticle,
    sections: localizedArticle
      ? [
          ...localizedArticle.sections.map(([heading, paragraph]) => ({ heading, paragraphs: [paragraph] })),
          ...(localizedSupplement ? [{ heading: localizedSupplement[0], paragraphs: [localizedSupplement[1], localizedClosingNote].filter(Boolean) }] : [])
        ]
      : baseArticle.sections
  } : null;
  const researchedWordCount = researched
    ? researched.sections.reduce((total, section) => total + section.heading.split(/\s+/).length + section.paragraphs.join(" ").split(/\s+/).length, 0)
    : undefined;
  const articleImage = researched ? products[researched.imageIndex] : null;
  let primary = t.guideSteps;
  let secondary = t.method.map(([, heading, body]) => [heading, body]);
  if (contentKey === "qc-photo-checklist") { primary = t.qcPoints; secondary = t.guideSteps.slice(3); }
  if (contentKey === "uk-shipping-cost") { primary = t.shippingPoints; secondary = t.method.map(([, heading, body]) => [heading, body]); }
  if (contentKey === "beginner-ordering-guide") { primary = t.guideSteps; secondary = t.shippingPoints; }
  if (contentKey === "warehouse-returns-guide") { primary = t.qcPoints; secondary = t.guideSteps.slice(3); }
  if (contentKey === "taobao-weidian-1688") { primary = t.marketplaces; secondary = t.guideSteps.slice(0, 3); }
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: "2026-09-02", dateModified: "2026-09-02", inLanguage: lang, wordCount: researchedWordCount, citation: researched ? researched.sourceLabel : t.common.sourceNote, mainEntityOfPage: `${finalBase}${internalPath(lang, `articles/${slug}`)}`, publisher: { "@type": "Organization", name: "USFans Index" } }} />
      <article className="long-article">
        <header><p className="eyebrow"><span></span>{article.number} · {article.read}</p><h1>{title}</h1><p>{description}</p></header>
        <div className="article-body">
          {researched ? <>
            <aside className="research-note"><span>{t.common.updated}</span><p>{researched.sourceLabel}</p></aside>
            <figure className="article-figure"><a href={articleImage.href} target="_blank" rel="noreferrer"><img src={articleImage.image} alt={`${title} — ${articleImage.title}`} width="900" height="900" loading="eager" /></a><figcaption>{t.common.articleImageCaption}</figcaption></figure>
            {researched.sections.map((section, index) => <section key={section.heading} className="researched-section"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
            <section><h2>{t.articleLabels.limitations}</h2><p>{t.common.cnyNote}</p><p>{t.common.disclaimer}</p></section>
          </> : <>
            <section><h2>{t.articleLabels.introduction}</h2><p>{t.pageIntro.guide[2]} {t.hero.briefBody}</p><p>{t.common.sourceNote}</p></section>
            <section><h2>{t.articleLabels.workflow}</h2><NumberedContent items={primary} /></section>
            <section><h2>{t.articleLabels.checklist}</h2><NumberedContent items={secondary} /></section>
            <section><h2>{t.articleLabels.limitations}</h2><p>{t.common.cnyNote}</p><p>{t.common.disclaimer}</p></section>
          </>}
          <section className="article-next"><h2>{t.articleLabels.next}</h2><SearchForm t={t} compact /><Link href={internalPath(lang, "finds")} className="button primary">{t.common.viewAll}<Arrow /></Link></section>
        </div>
      </article>
    </>
  );
}

function Footer({ lang, t }) {
  return (
    <footer className="site-footer">
      <div className="footer-top"><div><Logo lang={lang} /><p>{t.common.destination}</p></div><div className="footer-links">{["spreadsheet", "finds", "guide", "qc", "shipping", "articles", "faq"].map((item) => <Link key={item} href={internalPath(lang, item)}>{t.nav[item]}</Link>)}</div></div>
      <div className="footer-bottom"><p>{t.common.disclaimer}</p><span>© 2026 USFANS INDEX</span></div>
    </footer>
  );
}

export default async function Page({ params }) {
  const { lang, slug = [] } = await params;
  if (!languages.includes(lang)) notFound();
  const route = currentRoute(slug);
  if (!routes.includes(route)) notFound();
  const t = translations[lang];
  let content;
  if (route === "") content = <HomePage lang={lang} t={t} />;
  else if (route === "spreadsheet") content = <SpreadsheetPage lang={lang} t={t} />;
  else if (route === "finds") content = <FindsPage t={t} />;
  else if (route === "guide") content = <GuidePage t={t} />;
  else if (route === "qc") content = <QcPage t={t} />;
  else if (route === "shipping") content = <ShippingPage t={t} />;
  else if (route === "faq") content = <FaqPage t={t} />;
  else if (route === "articles") content = <ArticlesPage lang={lang} t={t} />;
  else if (articleRoutes.includes(route)) content = <ArticlePage lang={lang} slug={route.split("/")[1]} t={t} />;
  else notFound();
  return <><Header lang={lang} route={route} t={t} /><main>{content}</main><Footer lang={lang} t={t} /></>;
}
