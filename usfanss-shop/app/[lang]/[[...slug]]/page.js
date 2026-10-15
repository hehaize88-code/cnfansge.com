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
import { localizedArticles } from "../../../lib/article-translations";

import { articleWordCount } from "../../../lib/seo-release";
import ProductCatalogue from "../../../components/ProductCatalogue";
import WeightCalculator from "../../../components/WeightCalculator";

const destinationSearch = "https://cnfansge.com/search.html";
const finalBase = "https://usfanss.shop";
const officialSources = [
  { key: "help", href: "https://www.usfans.com/help" },
  { key: "beginner", href: "https://www.usfans.com/beginner-guide" },
  { key: "payment", href: "https://www.usfans.com/help/HCON_STATIC_038" },
  { key: "estimator", href: "https://usfans.com/estimation" }
];

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
    home: t.seoTitles.home,
    spreadsheet: t.seoTitles.spreadsheet,
    finds: t.seoTitles.finds,
    guide: t.seoTitles.guide,
    qc: t.seoTitles.qc,
    shipping: t.seoTitles.shipping,
    faq: t.seoTitles.faq,
    articles: t.seoTitles.articles,
    article: article?.[0]
  };
  const description = article?.[1] || intro?.[2] || t.hero.body;
  const canonicalPath = internalPath(lang, route);
  const languageAlternates = Object.fromEntries(
    languages.map((code) => [code, `${finalBase}${internalPath(code, route)}`])
  );
  languageAlternates["x-default"] = `${finalBase}${internalPath("en", route)}`;
  return {
    title: { absolute: titleMap[pageKey] },
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
      locale: t.locale,
      siteName: "USFans Index",
      type: articleSlug ? "article" : "website",
      ...(articleSlug && researchedArticles[articleSlug] ? {
        publishedTime: researchedArticles[articleSlug].datePublished,
        modifiedTime: researchedArticles[articleSlug].dateModified
      } : {}),
      images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: t.seoTitles.home }]
    },
    twitter: {
      card: "summary_large_image",
      title: titleMap[pageKey],
      description,
      images: ["/og-cover.png"]
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
    <Link href={internalPath(lang)} className="logo" aria-label={`USFans Index · ${languageNames[lang]}`}>
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
        <nav className="desktop-nav" aria-label={t.ui.navigation}>
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
            <summary aria-label={t.ui.menu}><span></span><span></span></summary>
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
  const featured = products[0];
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
      <aside className="hero-product" data-placement="homepage-feature" data-category="shoes" aria-labelledby="hero-product-title">
        <a className="hero-product-image" href={featured.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.hero.productDetails}: ${featured.title}`}>
          <img src={featured.image} alt={featured.title} width="750" height="750" fetchPriority="high" />
        </a>
        <div className="hero-product-info">
          <p className="hero-product-label">{t.hero.featuredProduct} · {t.categoryNames.shoes}</p>
          <h2 id="hero-product-title"><a href={featured.href} target="_blank" rel="noopener noreferrer">{featured.title}</a></h2>
          <div className="hero-product-price"><strong>{featured.price}</strong><span>{t.common.currentPrice}</span></div>
          <p className="hero-product-note">{t.hero.productNote}</p>
          <a className="hero-product-link" href={featured.href} target="_blank" rel="noopener noreferrer">{t.hero.productDetails}<Arrow diagonal /></a>
        </div>
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
          <img src={category.image} alt={t.categoryNames[category.key]} width="560" height="420" loading="lazy" />
          <span className="category-number">0{index + 1}</span>
          <div><h3>{t.categoryNames[category.key]}</h3><span><Arrow diagonal /></span></div>
        </a>
      ))}
    </div>
  );
}

function ProductCard({ product, t }) {
  return (
    <article className="product-card" data-category={product.categoryKey}>
      <a href={product.href} target="_blank" rel="noreferrer" className="product-image">
        <img src={product.image} alt={product.title} width="640" height="640" loading="lazy" />
        <span>{t.common.verified}</span>
      </a>
      <div className="product-info">
        <p>{t.categoryNames[product.categoryKey]} · ID {product.id}</p>
        <h3><a href={product.href} target="_blank" rel="noopener noreferrer">{product.title}</a></h3>
        <div className="product-bottom">
          <div><small>{t.common.currentPrice}</small><strong>{product.price}</strong></div>
          <a href={product.href} target="_blank" rel="noreferrer" aria-label={`${t.common.open}: ${product.title}`}><Arrow diagonal /></a>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ t, limit, category }) {
  const selected = category ? products.filter(product => product.categoryKey === category) : products;
  const visible = limit ? selected.slice(0, limit) : selected;
  return <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} t={t} />)}</div>;
}

function MethodGrid({ t }) {
  return <div className="method-grid">{t.method.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function ArticleGrid({ lang, t, featured = false }) {
  return (
    <div className="article-grid">
      {(featured ? articleCards.slice(-6) : articleCards).map((article) => {
        const [title, description] = t.articleTitles[article.contentKey];
        return (
          <Link key={article.slug} href={internalPath(lang, `articles/${article.slug}`)} className="article-card">
            <div className="article-meta"><span>{article.number}</span><small>{Math.ceil(articleWordCount(localizedArticles[lang]?.[article.slug] || researchedArticles[article.slug]) / 180)} min</small></div>
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

function CorePageNote({ note }) {
  if (!note) return null;
  return <div className="core-page-note"><p className="eyebrow"><span></span>{note[0]}</p><h2>{note[1]}</h2><p>{note[2]}</p><p>{note[3]}</p></div>;
}

function OfficialSources({ t }) {
  return (
    <aside className="source-card official-sources">
      <strong>{t.common.sourcesChecked}</strong>
      <p>{t.common.checkedOn}</p>
      <ul>
        {officialSources.map((source) => (
          <li key={source.key}><a href={source.href} target="_blank" rel="noopener noreferrer">{t.ui[source.key]} ↗</a></li>
        ))}
      </ul>
    </aside>
  );
}

function ArticleEvidenceVisual({ visual }) {
  if (!visual) return null;
  return (
    <figure className="article-evidence-visual">
      <div className="evidence-visual-heading"><span>{visual[0]}</span><strong>01—04</strong></div>
      <div className="evidence-visual-grid">{visual[2].map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}</div>
      <figcaption>{visual[1]}</figcaption>
    </figure>
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
          <ArticleGrid lang={lang} t={t} featured />
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
      <section className="section-shell core-note-shell"><CorePageNote note={t.corePageNotes.spreadsheet} /></section>
      <section className="section-shell"><CategoryGrid t={t} /></section>
      <section className="section-shell"><MethodGrid t={t} /></section>
      <section className="section-shell products-section"><SectionHeading eyebrow={t.home.productsEyebrow} title={t.home.productsTitle} /><ProductCatalogue products={products} labels={t.categoryNames} ui={t.ui} currentPrice={t.common.currentPrice} lang={lang} /><Link className="button primary centered" href={internalPath(lang, "finds")}>{t.common.viewAll}<Arrow /></Link></section>
    </>
  );
}

function FindsPage({ lang, t }) {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: product.href })) }} />
      <PageHero intro={t.pageIntro.finds} number="02" />
      <section className="section-shell finds-toolbar"><SearchForm t={t} compact /><p>{t.common.cnyNote}</p></section>
      <section className="section-shell core-note-shell"><CorePageNote note={t.corePageNotes.finds} /></section>
      <section className="section-shell products-section"><ProductCatalogue products={products} labels={t.categoryNames} ui={t.ui} currentPrice={t.common.currentPrice} lang={lang} /></section>
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
  return <><PageHero intro={t.pageIntro.guide} number="03" /><FactStrip items={t.coreFacts.guide} /><section className="section-shell core-note-shell"><CorePageNote note={t.corePageNotes.guide} /></section><section className="section-shell prose-shell"><NumberedContent items={t.guideSteps} /><OfficialSources t={t} /></section><section className="section-shell marketplace-section"><SectionHeading eyebrow="TAOBAO · WEIDIAN · 1688" title={t.articleTitles["taobao-weidian-1688"][0]} /><div className="marketplace-grid">{t.marketplaces.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section></>;
}

function QcPage({ t }) {
  return <><PageHero intro={t.pageIntro.qc} number="04" /><FactStrip items={t.coreFacts.qc} /><section className="section-shell core-note-shell"><CorePageNote note={t.corePageNotes.qc} /></section><section className="section-shell prose-shell"><NumberedContent items={t.qcPoints} /><div className="prose-asides"><aside className="callout"><span>{t.nav.qc}</span><p>{t.qcPoints[7][1]}</p></aside><OfficialSources t={t} /></div></section></>;
}

function ShippingPage({ lang, t }) {
  return <><PageHero intro={t.pageIntro.shipping} number="05" /><FactStrip items={t.coreFacts.shipping} /><div className="section-shell"><WeightCalculator copy={t.ui.calculator} lang={lang} /></div><section className="section-shell core-note-shell"><CorePageNote note={t.corePageNotes.shipping} /></section><section className="section-shell prose-shell"><NumberedContent items={t.shippingPoints} /><OfficialSources t={t} /></section></>;
}

function FaqPage({ t }) {
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} /><PageHero intro={t.pageIntro.faq} number="06" /><FactStrip items={t.coreFacts.qc} /><section className="section-shell faq-page"><FaqList t={t} /></section></>;
}

function ArticlesPage({ lang, t }) {
  return <><PageHero intro={t.pageIntro.articles} number="07" /><section className="section-shell articles-page"><CorePageNote note={t.corePageNotes.articles} /><ArticleGrid lang={lang} t={t} /></section></>;
}

function RelatedGuides({ lang, t, slugs }) {
  return <section className="related-guides"><h2>{t.common.related}</h2><ul>{slugs.map((slug) => {
    const card = articleCards.find((item) => item.slug === slug);
    if (!card) return null;
    return <li key={slug}><Link href={internalPath(lang, `articles/${slug}`)}>{t.articleTitles[card.contentKey][0]}<Arrow /></Link></li>;
  })}</ul></section>;
}

function ArticlePage({ lang, slug, t }) {
  const article = articleCards.find((item) => item.slug === slug);
  if (!article) notFound();
  const contentKey = article.contentKey;
  const [title, description] = t.articleTitles[contentKey];
  const baseArticle = researchedArticles[slug];
  const localizedArticle = localizedArticles[lang]?.[slug];
  const researched = baseArticle ? {
    ...baseArticle,
    ...localizedArticle,
    sections: localizedArticle ? localizedArticle.sections : baseArticle.sections
  } : null;
  const researchedWordCount = researched
    ? articleWordCount(researched)
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
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: title, description, datePublished: baseArticle.datePublished, dateModified: baseArticle.dateModified, inLanguage: lang, wordCount: researchedWordCount, image: `${finalBase}/og-cover.png`, author: { "@type": "Organization", name: "USFans Index", url: `${finalBase}/${lang}` }, mainEntityOfPage: `${finalBase}${internalPath(lang, `articles/${slug}`)}`, publisher: { "@type": "Organization", name: "USFans Index" } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: t.common.home, item: `${finalBase}/${lang}` },
        { "@type": "ListItem", position: 2, name: t.nav.articles, item: `${finalBase}/${lang}/articles` },
        { "@type": "ListItem", position: 3, name: title, item: `${finalBase}/${lang}/articles/${slug}` }
      ] }} />
      <article className="long-article">
        <nav className="article-breadcrumbs" aria-label={t.common.breadcrumbs}><Link href={internalPath(lang, "")}>{t.common.home}</Link><span>/</span><Link href={internalPath(lang, "articles")}>{t.nav.articles}</Link></nav>
        <header><p className="eyebrow"><span></span>{article.number} · {Math.ceil(researchedWordCount / 180)} min</p><h1>{title}</h1><p>{description}</p></header>
        <div className="article-body">
          {researched ? <>
            <aside className="research-note"><span>{t.common.updated}</span><p>{researched.sourceLabel}</p></aside>
            {researched.summary && <aside className="article-answer"><strong>{t.ui.answer}</strong><p>{researched.summary}</p></aside>}
            <nav className="article-toc" aria-label={t.ui.toc}><h2>{t.ui.toc}</h2><ol>{researched.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></nav>
            <OfficialSources t={t} />
            {t.articleVisuals[slug] ? <ArticleEvidenceVisual visual={t.articleVisuals[slug]} /> : null}
            {researched.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`} className="researched-section"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.table && <div className="article-table-scroll" tabIndex={0} role="region" aria-label={section.heading}><table><thead><tr>{section.table.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}{section.checklist && <ul className="article-checklist">{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}</div></section>)}
            {["international-shipping-cost", "usfans-volumetric-weight", "usfans-jackets-spreadsheet"].includes(slug) && <WeightCalculator copy={t.ui.calculator} lang={lang} />}
            {baseArticle.category && <section data-placement="article-products"><h2>{t.ui.relatedProducts}</h2><ProductGrid t={t} category={baseArticle.category} limit={3} /><p>{t.common.cnyNote}</p></section>}
            <section><h2>{t.articleLabels.limitations}</h2><p>{t.common.cnyNote}</p><p>{t.common.disclaimer}</p></section>
          </> : <>
            <section><h2>{t.articleLabels.introduction}</h2><p>{t.pageIntro.guide[2]} {t.hero.briefBody}</p><p>{t.common.sourceNote}</p></section>
            <section><h2>{t.articleLabels.workflow}</h2><NumberedContent items={primary} /></section>
            <section><h2>{t.articleLabels.checklist}</h2><NumberedContent items={secondary} /></section>
            <section><h2>{t.articleLabels.limitations}</h2><p>{t.common.cnyNote}</p><p>{t.common.disclaimer}</p></section>
          </>}
          <RelatedGuides lang={lang} t={t} slugs={baseArticle.related} />
          <section className="article-next"><h2>{t.articleLabels.next}</h2><SearchForm t={t} compact />{baseArticle.category ? <a href={categories.find((category) => category.key === baseArticle.category).href} className="button primary" target="_blank" rel="noreferrer">{t.common.browseCategory}<Arrow /></a> : <Link href={internalPath(lang, "finds")} className="button primary">{t.common.viewAll}<Arrow /></Link>}</section>
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
  else if (route === "finds") content = <FindsPage lang={lang} t={t} />;
  else if (route === "guide") content = <GuidePage t={t} />;
  else if (route === "qc") content = <QcPage t={t} />;
  else if (route === "shipping") content = <ShippingPage lang={lang} t={t} />;
  else if (route === "faq") content = <FaqPage t={t} />;
  else if (route === "articles") content = <ArticlesPage lang={lang} t={t} />;
  else if (articleRoutes.includes(route)) content = <ArticlePage lang={lang} slug={route.split("/")[1]} t={t} />;
  else notFound();
  const coreRelated = {
    spreadsheet: ["use-usfans-spreadsheet", "usfans-shoes-spreadsheet", "usfans-hoodies-spreadsheet", "usfans-jackets-spreadsheet", "usfans-link-not-working"],
    finds: ["usfans-shoes-spreadsheet", "usfans-hoodies-spreadsheet", "usfans-jackets-spreadsheet"],
    guide: ["beginner-ordering-guide", "usfans-payment-methods", "usfans-link-not-working"],
    qc: ["qc-photo-checklist", "warehouse-returns-guide", "usfans-jackets-spreadsheet"],
    shipping: ["international-shipping-cost", "usfans-shipping-time", "usfans-volumetric-weight", "usfans-parcel-packing", "usfans-haul-budget"],
    faq: ["usfans-link-not-working", "usfans-payment-methods", "usfans-shipping-time"]
  };
  return <><Header lang={lang} route={route} t={t} /><main>{content}{coreRelated[route] && <div className="section-shell core-related"><RelatedGuides lang={lang} t={t} slugs={coreRelated[route]} /></div>}</main><Footer lang={lang} t={t} /></>;
}
