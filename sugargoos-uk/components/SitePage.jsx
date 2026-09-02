import ProductExplorer from "./ProductExplorer";
import WeightCalculator from "./WeightCalculator";
import { articleBody, pageCopy, pageFacts } from "../data/pages";
import { categoryGuides } from "../data/category-guides";
import { archivedProducts, articles, categories, featuredProducts, languageNames, languages, products, routeFor, translations } from "../data/site";

const siteUrl = "https://sugargoos.uk";
const editorialLabels = {
  en: { research: "RESEARCH SNAPSHOT / 02.09.2026", onPage: "ON THIS PAGE", official: "Official workflow research", checked: "Checked 02.09.2026", interpretation: "Independent UK interpretation", independent: "Independent guide", updated: "Updated 2 Sep 2026", decision: "DECISION CHECK", numbers: "TRY THE NUMBERS", index: "INDEX", status: "STATUS", preview: "Published guide: indexable / live domain", sources: "OFFICIAL FACT SOURCES", latest: "LATEST 12 EDITOR PICKS", archive: "CHECKED ROUTE ARCHIVE", archiveText: "The remaining 12 checked routes stay available here as a compact archive, so no product route has been removed while this page keeps a distinct editorial intent.", categoryCheck: "CATEGORY EVIDENCE CHECK" },
  de: { research: "RECHERCHESTAND / 02.09.2026", onPage: "AUF DIESER SEITE", official: "Offizielle Ablaufrecherche", checked: "Geprüft am 02.09.2026", interpretation: "Unabhängige UK-Einordnung", independent: "Unabhängiger Leitfaden", updated: "Aktualisiert am 2. Sep. 2026", decision: "ENTSCHEIDUNGSPRÜFUNG", numbers: "ZAHLEN TESTEN", index: "ÜBERSICHT", status: "STATUS", preview: "Veröffentlichter Leitfaden / Live-Domain", sources: "OFFIZIELLE FAKTENQUELLEN", latest: "12 AKTUELLE REDAKTIONSTIPPS", archive: "GEPRÜFTES ROUTENARCHIV", archiveText: "Die übrigen 12 geprüften Routen bleiben als kompaktes Archiv verfügbar. Keine Produktroute wurde entfernt, während die Seite einen eigenen redaktionellen Suchzweck erhält.", categoryCheck: "KATEGORIE-BELEGPRÜFUNG" },
  es: { research: "RESUMEN DE INVESTIGACIÓN / 02.09.2026", onPage: "EN ESTA PÁGINA", official: "Investigación del proceso oficial", checked: "Revisado el 02.09.2026", interpretation: "Interpretación UK independiente", independent: "Guía independiente", updated: "Actualizado el 2 sep. 2026", decision: "CONTROL DE DECISIÓN", numbers: "PRUEBA LOS NÚMEROS", index: "ÍNDICE", status: "ESTADO", preview: "Guía publicada / dominio activo", sources: "FUENTES OFICIALES", latest: "12 SELECCIONES ACTUALES", archive: "ARCHIVO DE RUTAS REVISADAS", archiveText: "Las otras 12 rutas siguen disponibles en este archivo compacto. No se elimina ningún producto y la página conserva una intención editorial distinta.", categoryCheck: "CONTROL DE PRUEBAS POR CATEGORÍA" },
  fr: { research: "ÉTAT DE LA RECHERCHE / 02.09.2026", onPage: "SUR CETTE PAGE", official: "Recherche sur le parcours officiel", checked: "Vérifié le 02.09.2026", interpretation: "Interprétation UK indépendante", independent: "Guide indépendant", updated: "Mis à jour le 2 sept. 2026", decision: "CONTRÔLE DE DÉCISION", numbers: "TESTER LES CHIFFRES", index: "INDEX", status: "STATUT", preview: "Guide publié / domaine actif", sources: "SOURCES OFFICIELLES", latest: "12 CHOIX ACTUELS", archive: "ARCHIVE DES ROUTES VÉRIFIÉES", archiveText: "Les 12 autres routes restent accessibles dans cette archive compacte. Aucun produit n’est supprimé et la page garde une intention éditoriale distincte.", categoryCheck: "CONTRÔLE DES PREUVES PAR CATÉGORIE" },
  it: { research: "STATO DELLA RICERCA / 02.09.2026", onPage: "IN QUESTA PAGINA", official: "Ricerca sul flusso ufficiale", checked: "Verificato il 02.09.2026", interpretation: "Interpretazione UK indipendente", independent: "Guida indipendente", updated: "Aggiornato il 2 set. 2026", decision: "CONTROLLO DECISIONALE", numbers: "PROVA I NUMERI", index: "INDICE", status: "STATO", preview: "Guida pubblicata / dominio attivo", sources: "FONTI UFFICIALI", latest: "12 SCELTE ATTUALI", archive: "ARCHIVIO ROTTE CONTROLLATE", archiveText: "Le altre 12 rotte restano disponibili in questo archivio compatto. Nessun prodotto viene rimosso e la pagina mantiene un intento editoriale distinto.", categoryCheck: "CONTROLLO PROVE PER CATEGORIA" }
};

const officialSources = {
  guide: [
    ["Sugargoo warehouse storage periods", "https://blog.sugargoo.com/how-long-does-sugargoo-keep-items-in-the-warehouse/"],
    ["Sugargoo QC service guide", "https://blog.sugargoo.com/sugargoo-quality-check-service-the-ultimate-qc-guide-for-overseas-buyers/"]
  ],
  qc: [["Sugargoo QC service guide", "https://blog.sugargoo.com/sugargoo-quality-check-service-the-ultimate-qc-guide-for-overseas-buyers/"]]
};

function Header({ lang, slug, t }) {
  const path = slug.length ? slug : [];
  const nav = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
  return (
    <>
      <div className="preview-bar">{t.preview}</div>
      <header className="site-header">
        <a href={routeFor(lang)} className="brand" aria-label="Sugargoo UK Finds home">
          <span className="brand-logo-shell">
            <img src="/sugargoo-logo.png" alt="Sugargoo" width="480" height="148" />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <a key={item} className={slug[0] === item ? "active" : ""} href={routeFor(lang, [item])}>{t.nav[item]}</a>)}
        </nav>
        <div className="header-actions">
          <details className="language-picker">
            <summary>{lang.toUpperCase()} <span>⌄</span></summary>
            <div>{languages.map((code) => <a key={code} lang={code} href={routeFor(code, path)}>{languageNames[code]}</a>)}</div>
          </details>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">☰</summary>
            <nav>{nav.map((item) => <a key={item} href={routeFor(lang, [item])}>{t.nav[item]}</a>)}</nav>
          </details>
        </div>
      </header>
    </>
  );
}

function SectionHeading({ kicker, title, text, split = false }) {
  return (
    <div className={`section-heading ${split ? "split" : ""}`}>
      <div><p className="eyebrow">{kicker}</p><h2>{title}</h2></div>
      {text && <p>{text}</p>}
    </div>
  );
}

function EvidencePanel({ facts, note, lang = "en" }) {
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <aside className="evidence-panel" aria-label="Research facts">
      <p className="eyebrow">{labels.research}</p>
      {note && <p className="evidence-note">{note}</p>}
      <ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
    </aside>
  );
}

function ResearchSources({ type, lang }) {
  const sources = officialSources[type];
  if (!sources) return null;
  const labels = editorialLabels[lang] || editorialLabels.en;
  return <div className="research-sources"><p className="eyebrow">{labels.sources}</p>{sources.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>;
}

function RouteArchive({ lang, t }) {
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <section className="route-archive" aria-labelledby="route-archive-title">
      <SectionHeading kicker={labels.archive} title={labels.archive} text={labels.archiveText} split />
      <div className="route-archive-grid">
        {archivedProducts.map((product) => {
          const category = categories.find((item) => item.slug === product.category);
          return <article key={product.id}><div><span>{category?.label || product.category}</span><strong>{product.title}</strong></div><p>${product.usd.toFixed(2)} <small>{t.approx}</small></p><a href={product.source} target="_blank" rel="nofollow sponsored noopener" aria-label={`${t.openListing}: ${product.title}`}>↗</a></article>;
        })}
      </div>
    </section>
  );
}

function CategoryEvidence({ lang, category }) {
  const labels = editorialLabels[lang] || editorialLabels.en;
  const guide = categoryGuides[lang]?.[category.slug] || categoryGuides.en[category.slug];
  return (
    <section className="category-evidence shell" aria-labelledby="category-evidence-title">
      <div className="category-evidence-copy"><p className="eyebrow">{guide.kicker}</p><h2 id="category-evidence-title">{guide.title}</h2>{guide.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <aside><p className="eyebrow">{labels.categoryCheck}</p><ol>{guide.checklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></aside>
    </section>
  );
}

function CategoryGrid({ lang, t }) {
  const coverByCategory = Object.fromEntries(categories.map((category) => [category.slug, products.find((p) => p.category === category.slug)?.image]));
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <article className="category-card" key={category.slug}>
          <img src={coverByCategory[category.slug]} alt="" width="560" height="420" loading="lazy" />
          <div className="category-overlay"><span>{category.icon}</span><h3>{category.label}</h3><p>{category.note}</p></div>
          <div className="category-actions">
            <a href={routeFor(lang, ["category", category.slug])}>{t.viewLane}</a>
            <a href={category.source} target="_blank" rel="nofollow sponsored noopener">{t.openCategory} ↗</a>
          </div>
        </article>
      ))}
    </div>
  );
}

function ArticlesGrid({ lang, t }) {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <article className="article-card" key={article.slug}>
          <div className="article-index">0{index + 1}</div>
          <p className="eyebrow">{article.label} / {article.read}</p>
          <h3>{article.title[lang]}</h3>
          <p>{article.summary[lang]}</p>
          <a href={routeFor(lang, ["articles", article.slug])}>{t.readArticle} <span>↗</span></a>
        </article>
      ))}
    </div>
  );
}

function FaqList({ t, firstOpen = true }) {
  return (
    <div className="faq-list">
      {t.faq.map(([question, answer], index) => (
        <details key={question} open={firstOpen && index === 0}>
          <summary><span>0{index + 1}</span>{question}<b>+</b></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function SearchPanel({ t }) {
  return (
    <form className="catalogue-search" action="https://cnfansge.com/search.html" method="get" target="_blank">
      <input type="hidden" name="channelid" value="2" />
      <label><span className="sr-only">{t.searchPlaceholder}</span><input name="keywords" required placeholder={t.searchPlaceholder} /></label>
      <button type="submit">{t.searchButton} ↗</button>
    </form>
  );
}

function HomePage({ lang, t }) {
  return (
    <main className="home-page">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-intro">{t.heroText}</p>
          <div className="hero-buttons">
            <a className="button primary" href={routeFor(lang, ["spreadsheet"])}>{t.browse}</a>
            <a className="button secondary" href={routeFor(lang, ["guide"])}>{t.readGuide} ↗</a>
          </div>
          <SearchPanel t={t} />
        </div>
        <div className="hero-collage" aria-label="Featured product preview">
          <div className="collage-label"><span>CURATED</span><strong>UK / 26</strong></div>
          <figure className="hero-image main"><img src={products[0].image} alt={products[0].title} width="700" height="850" /></figure>
          <figure className="hero-image second"><img src={products[4].image} alt={products[4].title} width="450" height="520" /></figure>
          <figure className="hero-image third"><img src={products[12].image} alt={products[12].title} width="400" height="400" /></figure>
        </div>
      </section>

      <div className="metric-strip">{t.metrics.map((metric, index) => <div key={metric}><span>0{index + 1}</span><strong>{metric}</strong></div>)}</div>

      <section className="section shell" id="categories">
        <SectionHeading kicker={t.categoryKicker} title={t.categoryTitle} text={t.categoryText} split />
        <CategoryGrid lang={lang} t={t} />
      </section>

      <section className="section section-ink">
        <div className="shell">
          <SectionHeading kicker={t.findsKicker} title={t.findsTitle} text={t.findsText} split />
          <ProductExplorer items={products} categories={categories} copy={{ ...t, searchPlaceholder: t.searchPlaceholder }} compact />
          <div className="center-action"><a className="button light" href={routeFor(lang, ["spreadsheet"])}>{t.browse} ↗</a></div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading kicker={t.flowKicker} title={t.flowTitle} />
        <div className="workflow-grid">{t.flow.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section shipping-lab">
        <div className="shell lab-grid">
          <div><p className="eyebrow">{t.toolKicker}</p><h2>{t.toolTitle}</h2><p>{t.toolText}</p><a href={routeFor(lang, ["shipping"])}>{t.nav.shipping} guide ↗</a></div>
          <WeightCalculator lang={lang} />
        </div>
      </section>

      <section className="section shell">
        <SectionHeading kicker={t.articlesKicker} title={t.articlesTitle} />
        <ArticlesGrid lang={lang} t={t} />
      </section>

      <section className="section shell faq-section">
        <SectionHeading kicker={t.faqKicker} title={t.faqTitle} />
        <FaqList t={t} firstOpen={false} />
      </section>
    </main>
  );
}

function ProductPage({ lang, t, category }) {
  const filtered = category ? products.filter((product) => product.category === category.slug) : featuredProducts;
  const title = category ? `Sugargoo ${category.label} / UK lane` : t.findsTitle;
  const kicker = category ? `CATEGORY ${category.icon}` : t.findsKicker;
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <main>
      <section className="page-hero shell">
        <p className="eyebrow">{category ? kicker : labels.latest}</p><h1>{title}</h1><p>{t.findsText}</p>
        <SearchPanel t={t} />
      </section>
      <section className="section shell products-page">
        <ProductExplorer items={filtered} categories={category ? [category] : categories} copy={{ ...t, searchPlaceholder: t.searchPlaceholder }} initialCategory={category?.slug || "all"} />
        {!category && <RouteArchive lang={lang} t={t} />}
      </section>
      {category && <CategoryEvidence lang={lang} category={category} />}
      {category && <section className="source-cta shell"><div><p className="eyebrow">SOURCE CATALOGUE</p><h2>{category.label}</h2><p>{category.note}</p></div><a className="button primary" href={category.source} target="_blank" rel="nofollow sponsored noopener">{t.openCategory} ↗</a></section>}
    </main>
  );
}

function GuidePage({ lang, t, type }) {
  const copy = (pageCopy[lang] || pageCopy.en)[type];
  const facts = pageFacts[lang]?.[type] || pageFacts.en[type];
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <main>
      <section className="page-hero shell guide-hero"><p className="eyebrow">{copy.kicker}</p><h1>{copy.title}</h1><p>{copy.intro}</p><div className="fact-row"><span>{labels.official}</span><span>{labels.checked}</span><span>{labels.interpretation}</span></div></section>
      <section className="section shell guide-layout">
        <aside><div><p className="eyebrow">{labels.onPage}</p>{copy.sections.map(([title], index) => <a key={title} href={`#step-${index + 1}`}>0{index + 1} / {title}</a>)}</div></aside>
        <div className="guide-sections">
          <EvidencePanel facts={facts} lang={lang} />
          <ResearchSources type={type} lang={lang} />
          {copy.sections.map(([title, text], index) => <article id={`step-${index + 1}`} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}
          {type === "shipping" && <div className="inline-tool"><p className="eyebrow">INTERACTIVE CHECK</p><WeightCalculator lang={lang} /></div>}
        </div>
      </section>
      <section className="section section-ink"><div className="shell"><SectionHeading kicker={t.articlesKicker} title={t.articlesTitle} /><ArticlesGrid lang={lang} t={t} /></div></section>
    </main>
  );
}

function SpreadsheetPage({ lang, t }) {
  return (
    <main>
      <section className="page-hero shell spreadsheet-hero"><p className="eyebrow">LIVE PREVIEW INDEX / 24 ROUTES</p><h1>{t.heroTitle}</h1><p>{t.heroText}</p><SearchPanel t={t} /></section>
      <section className="section shell"><SectionHeading kicker={t.categoryKicker} title={t.categoryTitle} text={t.categoryText} split /><CategoryGrid lang={lang} t={t} /></section>
      <section className="section section-ink"><div className="shell"><SectionHeading kicker={t.findsKicker} title={t.findsTitle} text={t.findsText} split /><ProductExplorer items={products} categories={categories} copy={{ ...t, searchPlaceholder: t.searchPlaceholder }} /></div></section>
    </main>
  );
}

function ArticlesPage({ lang, t }) {
  return <main><section className="page-hero shell"><p className="eyebrow">{t.articlesKicker}</p><h1>{t.articlesTitle}</h1><p>{t.heroText}</p></section><section className="section shell"><ArticlesGrid lang={lang} t={t} /></section></main>;
}

function ArticlePage({ lang, t, article }) {
  const body = articleBody(lang, article.slug);
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <main>
      <article className="longform shell">
        <header><p className="eyebrow">{article.label} / {article.read}</p><h1>{article.title[lang]}</h1><p className="article-deck">{article.summary[lang]}</p><div className="article-meta"><span>{labels.independent}</span><span>{labels.updated}</span><span>{lang.toUpperCase()}</span></div></header>
        <div className="article-body">
          <p className="lead">{body.opening}</p>
          <EvidencePanel facts={body.takeaways} note={body.sourceNote} lang={lang} />
          {body.sections.map(({ title, paragraphs }, index) => <section key={title}><span className="section-number">{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2>{paragraphs.map((text) => <p key={text}>{text}</p>)}</section>)}
          {body.checklist && <aside className="article-checklist"><p className="eyebrow">{labels.decision}</p><h2>{body.checklist.title}</h2><ol>{body.checklist.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></aside>}
          {article.slug === "reduce-volumetric-weight" && <div className="inline-tool"><p className="eyebrow">{labels.numbers}</p><WeightCalculator lang={lang} /></div>}
          <p className="closing">{body.close}</p>
        </div>
      </article>
      <section className="section section-ink"><div className="shell"><SectionHeading kicker={t.findsKicker} title={t.findsTitle} /><ProductExplorer items={products.slice(0, 8)} categories={categories} copy={{ ...t, searchPlaceholder: t.searchPlaceholder }} compact /></div></section>
    </main>
  );
}

function FaqPage({ t }) {
  return <main><section className="page-hero shell"><p className="eyebrow">{t.faqKicker}</p><h1>{t.faqTitle}</h1><p>{t.heroText}</p></section><section className="section shell faq-page"><FaqList t={t} /></section></main>;
}

function Footer({ lang, t }) {
  const labels = editorialLabels[lang] || editorialLabels.en;
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><img className="footer-logo" src="/sugargoo-logo.png" alt="Sugargoo" width="480" height="148" /><p>{t.footer}</p></div>
        <div><p className="eyebrow">{labels.index}</p>{["spreadsheet", "finds", "guide", "qc", "shipping", "articles"].map((item) => <a key={item} href={routeFor(lang, [item])}>{t.nav[item]}</a>)}</div>
        <div><p className="eyebrow">{labels.status}</p><p>{t.updated}</p><p>{labels.preview}</p></div>
      </div>
    </footer>
  );
}

function StructuredData({ lang, slug, t }) {
  const path = routeFor(lang, slug);
  const article = slug[0] === "articles" ? articles.find((item) => item.slug === slug[1]) : null;
  const graph = [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Sugargoo UK Finds", inLanguage: lang, potentialAction: { "@type": "SearchAction", target: "https://cnfansge.com/search.html?keywords={search_term_string}&channelid=2", "query-input": "required name=search_term_string" } },
    { "@type": "Organization", "@id": `${siteUrl}/#publisher`, name: "Sugargoo UK Finds", url: siteUrl, description: "Independent product discovery and educational resource." },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/${lang}` }, ...slug.map((part, index) => ({ "@type": "ListItem", position: index + 2, name: part.replaceAll("-", " "), item: `${siteUrl}${routeFor(lang, slug.slice(0, index + 1))}` }))] }
  ];
  if (!slug.length || slug[0] === "faq") graph.push({ "@type": "FAQPage", mainEntity: t.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  if (slug[0] === "spreadsheet" || slug[0] === "finds") {
    const listProducts = slug[0] === "finds" ? featuredProducts : products;
    graph.push({ "@type": "ItemList", numberOfItems: listProducts.length, itemListElement: listProducts.map((p, index) => ({ "@type": "ListItem", position: index + 1, name: p.title, url: p.source })) });
  }
  if (article) graph.push({ "@type": "Article", headline: article.title[lang], description: article.summary[lang], image: `${siteUrl}${article.image}`, datePublished: article.datePublished, dateModified: article.dateModified, inLanguage: lang, mainEntityOfPage: `${siteUrl}${path}`, author: { "@id": `${siteUrl}/#publisher` }, publisher: { "@id": `${siteUrl}/#publisher` } });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}

export default function SitePage({ lang = "en", slug = [], isRoot = false }) {
  if (!languages.includes(lang)) lang = "en";
  const t = translations[lang] || translations.en;
  const first = slug[0] || "home";
  const second = slug[1];
  const category = first === "category" ? categories.find((item) => item.slug === second) : null;
  const article = first === "articles" && second ? articles.find((item) => item.slug === second) : null;
  let content;
  if (first === "home") content = <HomePage lang={lang} t={t} />;
  else if (first === "spreadsheet") content = <SpreadsheetPage lang={lang} t={t} />;
  else if (first === "finds") content = <ProductPage lang={lang} t={t} />;
  else if (category) content = <ProductPage lang={lang} t={t} category={category} />;
  else if (["guide", "qc", "shipping"].includes(first)) content = <GuidePage lang={lang} t={t} type={first} />;
  else if (first === "faq") content = <FaqPage t={t} />;
  else if (article) content = <ArticlePage lang={lang} t={t} article={article} />;
  else content = <ArticlesPage lang={lang} t={t} />;
  return (
    <>
      <StructuredData lang={lang} slug={isRoot ? [] : slug} t={t} />
      <Header lang={lang} slug={slug} t={t} />
      {content}
      <Footer lang={lang} t={t} />
    </>
  );
}
