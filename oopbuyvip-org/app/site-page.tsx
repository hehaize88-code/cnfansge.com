import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDollarSign,
  ExternalLink,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  articleSlugs,
  categoryRoutes,
  copy,
  languageNames,
  languages,
  navKeys,
  products,
  type ArticleSlug,
  type Language,
} from "./content";
import { ProductIndex } from "./product-index";

const SITE = "https://oopbuyvip.org";
const sourceBoundary = {
  en: ["Source boundary", "Official OOPBuy account pages and current checkout information remain the final source for platform services."],
  de: ["Quellenhinweis", "Offizielle OOPBuy-Kontoseiten und aktuelle Checkout-Informationen bleiben die letzte Quelle für Plattformdienste."],
  es: ["Límite de la fuente", "Las páginas oficiales de la cuenta OOPBuy y la información actual del checkout siguen siendo la fuente final para los servicios."],
  fr: ["Limite des sources", "Les pages officielles du compte OOPBuy et les informations actuelles de paiement restent la source finale pour les services."],
  it: ["Limite delle fonti", "Le pagine ufficiali dell'account OOPBuy e le informazioni attuali del checkout restano la fonte finale per i servizi."],
} as const;

const sourceHeadings = {
  en: ["Sources reviewed", "Official material checked on 1 September 2026. Live account terms and checkout values can change."],
  de: ["Geprüfte Quellen", "Offizielle Unterlagen geprüft am 1. September 2026. Live-Bedingungen und Checkout-Werte können sich ändern."],
  es: ["Fuentes revisadas", "Material oficial revisado el 1 de septiembre de 2026. Las condiciones y cifras activas pueden cambiar."],
  fr: ["Sources consultées", "Documents officiels vérifiés le 1er septembre 2026. Les conditions et montants actifs peuvent évoluer."],
  it: ["Fonti consultate", "Materiale ufficiale verificato il 1 settembre 2026. Condizioni e importi live possono cambiare."],
} as const;

const sourceKinds = {
  en: { official: "Official source", customer: "Customer-report source", checked: "Checked" },
  de: { official: "Offizielle Quelle", customer: "Kundenbericht", checked: "Geprüft" },
  es: { official: "Fuente oficial", customer: "Informe de cliente", checked: "Revisado" },
  fr: { official: "Source officielle", customer: "Témoignage client", checked: "Vérifié" },
  it: { official: "Fonte ufficiale", customer: "Report cliente", checked: "Verificato" },
} as const;

const officialSources = {
  guide: { label: "OOPBuy Beginner's Guide", kind: "official", reference: "m.oopbuy.com/pages/article-details/index?id=1739829963819945985" },
  guarantee: { label: "OOPBuy Platform Guarantee", kind: "official", reference: "oopbuy.com · platform guarantee" },
  returns: { label: "OOPBuy Returns and Refunds", kind: "official", reference: "m.oopbuy.com/notice/1740656181012172801" },
  agreement: { label: "OOPBuy User Registration Agreement", kind: "official", reference: "m.oopbuy.com/notice/1772892211576897537" },
  serviceFees: { label: "OOPBuy Service & Fees", kind: "official", reference: "m.oopbuy.com/notice/1740653781924810754" },
  googlePlay: { label: "OOPBuy Google Play listing", kind: "official", reference: "play.google.com · com.oopbuy.oopbuy" },
  estimator: { label: "OOPBuy Shipping Estimation", kind: "official", reference: "oopbuy.com · live shipping estimator" },
  restrictions: { label: "OOPBuy Prohibited and Restricted Items", kind: "official", reference: "oopbuy.com · current restrictions" },
} as const;

const sectionSourceKeys: Record<string, (keyof typeof officialSources)[]> = {
  spreadsheet: ["guide", "agreement", "serviceFees", "googlePlay", "estimator"],
  finds: ["guide", "guarantee", "estimator"],
  guide: ["guide", "agreement", "returns"],
  qc: ["guarantee", "returns", "guide"],
  shipping: ["estimator", "restrictions", "agreement"],
  faq: ["guide", "returns", "agreement", "serviceFees", "googlePlay", "estimator"],
};

const findsNotes = {
  en: { why: "Why included", whyBody: "A dated category route for comparison, not a product endorsement.", qc: "QC focus", qcBody: "Confirm the active option, size or model and visible condition after stock-in.", packing: "Packing note", packingBody: "Recheck dimensions and protective packaging after warehouse measurement." },
  de: { why: "Warum aufgenommen", whyBody: "Eine datierte Kategorienroute zum Vergleich, keine Produktempfehlung.", qc: "QC-Fokus", qcBody: "Aktive Option, Größe oder Modell und sichtbaren Zustand nach Einlagerung prüfen.", packing: "Verpackung", packingBody: "Maße und Schutzverpackung nach Lagermessung erneut prüfen." },
  es: { why: "Por qué se incluye", whyBody: "Una ruta de categoría fechada para comparar, no una recomendación.", qc: "Foco de QC", qcBody: "Confirma opción activa, talla o modelo y estado visible tras la entrada.", packing: "Embalaje", packingBody: "Revisa dimensiones y protección después de la medición del almacén." },
  fr: { why: "Pourquoi ici", whyBody: "Une route de catégorie datée pour comparer, pas une recommandation.", qc: "Point QC", qcBody: "Confirmez option active, taille ou modèle et état visible après l'entrée.", packing: "Emballage", packingBody: "Revérifiez dimensions et protection après la mesure d'entrepôt." },
  it: { why: "Perché incluso", whyBody: "Un percorso di categoria datato per il confronto, non una raccomandazione.", qc: "Focus QC", qcBody: "Conferma opzione attiva, taglia o modello e stato visibile dopo l'ingresso.", packing: "Imballaggio", packingBody: "Ricontrolla dimensioni e protezione dopo la misura di magazzino." },
} as const;

const navHref = (lang: Language, key: string) => key === "home" ? `/${lang}` : `/${lang}/${key}`;

function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item.href}>{index < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}

function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `${SITE}${item.href}` })),
  };
}

function Logo({ lang }: { lang: Language }) {
  return (
    <a className="brand" href={`/${lang}`} aria-label="OOPBUY VIP home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/oopbuy.png" alt="Oopbuy" width="134" height="48" />
      <span className="brand-note">Finds · QC · Shipping</span>
    </a>
  );
}

function Header({ lang, path }: { lang: Language; path: string }) {
  const t = copy[lang];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo lang={lang} />
        <nav className="primary-nav" aria-label="Primary navigation">
          {navKeys.map((key) => (
            <a key={key} href={navHref(lang, key)} className={path === key || (!path && key === "home") ? "active" : ""}>
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="language-nav" aria-label="Language selector">
          {languages.map((code) => (
            <a key={code} className={code === lang ? "active" : ""} href={`/${code}${path ? `/${path}` : ""}`} hrefLang={code}>
              {languageNames[code]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function SearchBar({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <form className="search-bar" action="https://cnfansge.com/search.html" method="get" target="_blank">
      <Search aria-hidden="true" />
      <input name="keywords" placeholder={t.hero.search} aria-label={t.hero.search} required />
      <input type="hidden" name="channelid" value="2" />
      <input type="hidden" name="method" value="1" />
      <button type="submit">{t.hero.searchButton}<ArrowUpRight aria-hidden="true" /></button>
    </form>
  );
}

function Categories({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <div className="category-grid">
      {categoryRoutes.map((category) => (
        <a key={category.key} href={category.href} target="_blank" rel="noopener" className="category-tile">
          <span>{category.icon}</span>
          <strong>{t.categories[category.key]}</strong>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function Products({ lang, compact = false, mode = "default" }: { lang: Language; compact?: boolean; mode?: "default" | "finds" }) {
  const t = copy[lang];
  const notes = findsNotes[lang];
  const list = compact ? products.slice(0, 4) : products;
  return (
    <div className="product-grid">
      {list.map((product) => (
        <article className="product-card" key={product.code}>
          <a className="product-image" href={product.href} target="_blank" rel="noopener" aria-label={`${t.categories[product.category]} ${product.code}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={`${t.categories[product.category]} product route ${product.code}`} loading="lazy" width="600" height="600" />
            <span>{product.code}</span>
          </a>
          <div className="product-info">
            <p>{t.categories[product.category]}</p>
            <h3>{t.categories[product.category]} · {product.code.replace("F-", "#")}</h3>
            <dl>
              <div><dt>{t.labels.sourcePrice}</dt><dd>{product.price}</dd></div>
              <div><dt>{t.labels.listedWeight}</dt><dd>{product.weight}</dd></div>
            </dl>
            {mode === "finds" && <div className="finds-context">
              <p><strong>{notes.why}</strong>{notes.whyBody}</p>
              <p><strong>{notes.qc}</strong>{notes.qcBody}</p>
              <p><strong>{notes.packing}</strong>{notes.packingBody}</p>
            </div>}
            <a className="text-link" href={product.href} target="_blank" rel="noopener">{t.labels.open}<ArrowUpRight aria-hidden="true" /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Process({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <section className="section process-section">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">04 / WORKFLOW</p><h2>{t.process.title}</h2></div>
        <p>{t.process.body}</p>
      </div>
      <div className="process-grid">
        {t.process.steps.map((step, index) => (
          <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>
        ))}
      </div>
    </section>
  );
}

function Facts({ lang }: { lang: Language }) {
  const t = copy[lang];
  const icons = [PackageCheck, CircleDollarSign, ShieldCheck];
  return (
    <section className="section facts-section">
      <div className="section-heading"><p className="eyebrow">05 / OFFICIAL WORKFLOW</p><h2>{t.facts.title}</h2><p>{t.facts.body}</p></div>
      <div className="facts-grid">
        {t.facts.items.map((item, index) => {
          const Icon = icons[index];
          return <article key={item.label}><Icon aria-hidden="true" /><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></article>;
        })}
      </div>
    </section>
  );
}

function ArticleCards({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <div className="article-grid">
      {articleSlugs.map((slug, index) => {
        const article = t.articles[slug];
        return (
          <article key={slug} className={`article-card tone-${index + 1}`}>
            <div className="article-index">0{index + 1}</div>
            <p className="eyebrow">{article.eyebrow}</p>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={`/${lang}/articles/${slug}`}>{t.labels.learn}<ArrowRight aria-hidden="true" /></a>
          </article>
        );
      })}
    </div>
  );
}

function FAQ({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <div className="faq-list">
      {t.faq.map((item, index) => (
        <details key={item.q} open={index === 0}>
          <summary><span>0{index + 1}</span>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

function SourcesPanel({ lang, section }: { lang: Language; section: string }) {
  const keys = sectionSourceKeys[section] ?? [];
  if (!keys.length) return null;
  return (
    <section className="section source-panel" aria-label={sourceHeadings[lang][0]}>
      <div>
        <p className="eyebrow">RESEARCH / 2026</p>
        <h2>{sourceHeadings[lang][0]}</h2>
        <p>{sourceHeadings[lang][1]}</p>
      </div>
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <span className="source-name">{officialSources[key].label}</span>
            <span className="source-meta">{sourceKinds[lang].official} · {sourceKinds[lang].checked} 1 Sep 2026</span>
            <code>{officialSources[key].reference}</code>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Home({ lang }: { lang: Language }) {
  const t = copy[lang];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const siteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "OOPBUY VIP", url: `${SITE}/${lang}` };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([siteSchema, faqSchema]) }} />
      <main className="home-page">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" />{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-tagline">{t.hero.tagline}</p>
            <p className="hero-body">{t.hero.body}</p>
            <SearchBar lang={lang} />
            <div className="proof-line"><CheckCircle2 aria-hidden="true" />{t.hero.proof}</div>
          </div>
          <aside className="hero-showcase" aria-label={t.labels.latest}>
            <div className="showcase-backdrop" />
            <a className="hero-shot hero-shot-main" href={products[0].href} target="_blank" rel="noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={products[0].image} alt={`${t.categories[products[0].category]} ${products[0].code}`} width="600" height="600" />
              <span><small>{t.categories[products[0].category]}</small><b>{products[0].price}</b></span>
            </a>
            <a className="hero-shot hero-shot-small" href={products[1].href} target="_blank" rel="noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={products[1].image} alt={`${t.categories[products[1].category]} ${products[1].code}`} width="600" height="600" />
            </a>
            <div className="showcase-note">
              <span>10</span>
              <div><small>{t.labels.updated}</small><strong>{t.hero.browse}</strong></div>
            </div>
          </aside>
        </section>

        <section className="section category-section">
          <div className="section-heading compact-heading"><p className="eyebrow">01 / CATEGORIES</p><h2>{t.hero.browse}</h2></div>
          <Categories lang={lang} />
        </section>

        <section className="section products-section">
          <div className="section-heading split-heading"><div><p className="eyebrow">02 / LIVE ROUTES</p><h2>{t.labels.latest}</h2></div><p>{t.labels.latestBody}</p></div>
          <Products lang={lang} />
          <div className="section-actions"><a className="button-link" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener">{t.labels.viewAll}<ExternalLink aria-hidden="true" /></a><p>{t.labels.disclaimer}</p></div>
        </section>

        <Process lang={lang} />
        <Facts lang={lang} />

        <section className="section articles-section">
          <div className="section-heading"><p className="eyebrow">06 / FIELD NOTES</p><h2>{t.page.articles.title}</h2><p>{t.page.articles.body}</p></div>
          <ArticleCards lang={lang} />
        </section>

        <section className="section faq-section">
          <div className="section-heading"><p className="eyebrow">07 / FAQ</p><h2>{t.page.faq.title}</h2><p>{t.page.faq.body}</p></div>
          <FAQ lang={lang} />
        </section>
      </main>
    </>
  );
}

function SectionPage({ lang, section }: { lang: Language; section: string }) {
  const t = copy[lang];
  const page = t.page[section];
  if (!page) return null;
  const isProducts = section === "spreadsheet" || section === "finds";
  const isFaq = section === "faq";
  const isArticles = section === "articles";
  const iconMap = [ShieldCheck, PackageCheck, Truck];
  const crumbs = [{ label: t.nav.home, href: `/${lang}` }, { label: page.title, href: `/${lang}/${section}` }];
  const itemListSchema = isProducts ? { "@context": "https://schema.org", "@type": "ItemList", name: page.title, numberOfItems: products.length, itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: `${t.categories[product.category]} ${product.code}`, url: product.href })) } : null;
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema ? [breadcrumbSchema(crumbs), itemListSchema] : breadcrumbSchema(crumbs)) }} />
    <main>
      <div className="section breadcrumb-section"><Breadcrumbs items={crumbs} /></div>
      <section className="page-hero section">
        <p className="eyebrow">OOPBUY VIP / {page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.body}</p>
        {(isProducts || section === "guide") && <SearchBar lang={lang} />}
      </section>
      {isProducts && <>
        <section className="section category-section"><Categories lang={lang} /></section>
        <section className="section products-section">{section === "spreadsheet" ? <ProductIndex lang={lang} rows={products} categories={t.categories} /> : <Products lang={lang} mode="finds" />}<div className="section-actions"><a className="button-link" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener">{t.labels.viewAll}<ExternalLink aria-hidden="true" /></a><p>{t.labels.disclaimer}</p></div></section>
      </>}
      {!isFaq && !isArticles && <section className="section feature-section"><div className="feature-grid">{page.points.map((point, index) => { const Icon = iconMap[index] ?? ShieldCheck; return <article key={point.title}><Icon aria-hidden="true"/><span>0{index + 1}</span><h2>{point.title}</h2><p>{point.body}</p></article>; })}</div></section>}
      {section === "guide" && <Process lang={lang} />}
      {section === "shipping" && <Facts lang={lang} />}
      {isFaq && <section className="section faq-section"><FAQ lang={lang} /></section>}
      {isArticles && <section className="section articles-section"><ArticleCards lang={lang} /></section>}
      {!isArticles && <SourcesPanel lang={lang} section={section} />}
      {!isArticles && <section className="section related-section"><div className="section-heading"><p className="eyebrow">RELATED / FIELD NOTES</p><h2>{t.page.articles.title}</h2></div><ArticleCards lang={lang} /></section>}
    </main>
    </>
  );
}

function ArticlePage({ lang, slug }: { lang: Language; slug: ArticleSlug }) {
  const t = copy[lang];
  const article = t.articles[slug];
  const crumbs = [{ label: t.nav.home, href: `/${lang}` }, { label: t.nav.articles, href: `/${lang}/articles` }, { label: article.title, href: `/${lang}/articles/${slug}` }];
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: "2026-09-01", dateModified: "2026-09-01", author: { "@type": "Organization", name: "OOPBUY VIP Research Desk" }, mainEntityOfPage: `${SITE}/${lang}/articles/${slug}`, citation: article.sources?.map(source => source.reference ? `${source.label} — ${source.reference}` : source.label) ?? [] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema(crumbs)]) }} />
      <main className="article-page">
        <div className="section breadcrumb-section"><Breadcrumbs items={crumbs} /></div>
        <header className="article-hero section">
          <div><p className="eyebrow">{article.eyebrow} / {article.read}</p><h1>{article.title}</h1><p>{article.description}</p>{article.updated && <small className="article-updated">Updated {article.updated}</small>}</div>
          <aside><ShieldCheck aria-hidden="true"/><strong>{t.labels.independently}</strong><p>{t.hero.proof}</p></aside>
        </header>
        <article className="article-body section">
          {article.sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, p) => <p key={p}>{paragraph}</p>)}</div></section>)}
          {!!article.sources?.length && <section className="article-sources"><span>↗</span><div><h2>{sourceHeadings[lang][0]}</h2><p className="source-intro">{sourceHeadings[lang][1]}</p><ul>{article.sources.map((source) => { const kind = source.kind ?? (/Trustpilot|Reddit|customer/i.test(source.label) ? "customer" : "official"); return <li key={source.label}><strong className="source-name">{source.label}</strong><span className="source-meta">{sourceKinds[lang][kind]} · {sourceKinds[lang].checked} {source.checked ?? "1 Sep 2026"}</span><p>{source.note}</p>{source.reference && <code>{source.reference}</code>}</li>; })}</ul></div></section>}
          <div className="source-note"><strong>{sourceBoundary[lang][0]}</strong><p>{t.labels.disclaimer} {sourceBoundary[lang][1]}</p></div>
        </article>
        <section className="section related-section"><div className="section-heading"><p className="eyebrow">NEXT / FIELD NOTES</p><h2>{t.page.articles.title}</h2></div><ArticleCards lang={lang} /></section>
      </main>
    </>
  );
}

function Footer({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <footer className="footer"><div><Logo lang={lang}/><p>{t.footer}</p></div><div><a href={`/${lang}/faq`}>{t.nav.faq}</a><a href={`/${lang}/articles`}>{t.nav.articles}</a><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener">{t.labels.viewAll}<ArrowUpRight aria-hidden="true"/></a></div><small>© 2026 OOPBUY VIP · Independent educational directory</small></footer>
  );
}

export function SitePage({ lang, segments = [] }: { lang: Language; segments?: string[] }) {
  const path = segments.join("/");
  const section = segments[0] ?? "";
  const articleSlug = segments[0] === "articles" && articleSlugs.includes(segments[1] as ArticleSlug) ? segments[1] as ArticleSlug : null;
  return (
    <div className="site-shell">
      <Header lang={lang} path={path} />
      {!section ? <Home lang={lang} /> : articleSlug ? <ArticlePage lang={lang} slug={articleSlug} /> : <SectionPage lang={lang} section={section} />}
      <Footer lang={lang} />
    </div>
  );
}
