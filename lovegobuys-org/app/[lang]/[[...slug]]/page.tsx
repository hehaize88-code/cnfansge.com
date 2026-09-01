import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Search, ShieldCheck, Weight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocumentLanguage } from "@/components/document-language";
import { categories, copy, guideCards, interfaceCopy, isLang, languages, productCopy, products, type Lang } from "@/lib/site-data";
import { topics, type Topic } from "@/lib/topics";
import { articleSlugs, getArticle, getResearchArticles } from "@/lib/articles";
import { researchFacts, type PageKind } from "@/lib/research-facts";

type PageProps = { params: Promise<{ lang: string; slug?: string[] }> };

const routePaths = [[], ["finds"], ["categories"], ["guide"], ["qc"], ["shipping"], ["faq"], ["articles"]];

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 3600;

type SeoPage = "home" | "finds" | "categories" | "guide" | "qc" | "shipping" | "articles" | "faq";

const seoCopy: Record<Lang, Record<SeoPage, { title: string; description: string }>> = {
  en: {
    home: { title: "LoveGoBuy Spreadsheet 2026: Finds, QC & Shipping", description: "Independent LoveGoBuy research guide for checked product routes, source matching, warehouse QC evidence and realistic packed-shipping decisions." },
    finds: { title: "LoveGoBuy Finds 2026: Checked Product Routes", description: "Review eight current LoveGoBuy product routes with matched source images, approximate prices, recorded weights and live destination links." },
    categories: { title: "LoveGoBuy Categories & Product QC Checklists", description: "Browse LoveGoBuy research by product category and use focused checks for shoes, clothing, accessories, headwear and electronics." },
    guide: { title: "How to Buy with LoveGoBuy: Step-by-Step Guide", description: "Follow the LoveGoBuy workflow from source-link matching and seller purchase through warehouse evidence, parcel planning and final checks." },
    qc: { title: "LoveGoBuy QC Photos Guide: What to Check", description: "Learn how to assess LoveGoBuy QC photos by confirming identity, options, condition, construction, measurements and missing evidence." },
    shipping: { title: "LoveGoBuy Shipping Cost: Weight & Volume Guide", description: "Estimate LoveGoBuy shipping with packed weight, dimensions, route restrictions, rehearsal inputs and destination-specific live checks." },
    articles: { title: "LoveGoBuy Guides & Reviews 2026", description: "Read fully researched LoveGoBuy guides covering buying workflow, QC photos, shipping cost, spreadsheet research and platform review evidence." },
    faq: { title: "LoveGoBuy FAQ: Orders, QC, Shipping & Reviews", description: "Clear answers about LoveGoBuy product routes, warehouse QC photos, packed shipping estimates, marketplaces and independent review evidence." },
  },
  de: {
    home: { title: "LoveGoBuy Tabelle 2026: Funde, QC & Versand", description: "Unabhängiger LoveGoBuy-Leitfaden zu geprüften Produktrouten, Quellenabgleich, QC-Belegen im Lager und realistischen Versandentscheidungen." },
    finds: { title: "LoveGoBuy Funde 2026: Geprüfte Produktrouten", description: "Acht aktuelle LoveGoBuy-Produktrouten mit passenden Quellbildern, Richtpreisen, erfassten Gewichten und direkten Zielseiten prüfen." },
    categories: { title: "LoveGoBuy Kategorien & Produkt-QC-Prüflisten", description: "LoveGoBuy-Recherche nach Produktkategorie mit passenden Prüfungen für Schuhe, Kleidung, Accessoires, Kopfbedeckung und Elektronik." },
    guide: { title: "Mit LoveGoBuy kaufen: Schritt-für-Schritt-Anleitung", description: "Der LoveGoBuy-Ablauf vom Quellenabgleich und Einkauf über Lagerbelege bis zur Paketplanung und letzten Prüfung." },
    qc: { title: "LoveGoBuy QC-Fotos: Was vor dem Paket zu prüfen ist", description: "LoveGoBuy-QC-Fotos nach Identität, Variante, Zustand, Verarbeitung, Maßen und fehlenden Belegen systematisch bewerten." },
    shipping: { title: "LoveGoBuy Versandkosten: Gewicht & Volumen", description: "LoveGoBuy-Versand mit Packgewicht, Maßen, Routenregeln, Probelauf und aktuellen Prüfungen für das Zielland schätzen." },
    articles: { title: "LoveGoBuy Leitfäden & Bewertungen 2026", description: "Vollständig recherchierte LoveGoBuy-Artikel zu Kaufablauf, QC-Fotos, Versandkosten, Tabellenrecherche und Plattformbewertung." },
    faq: { title: "LoveGoBuy FAQ: Bestellung, QC, Versand & Bewertungen", description: "Klare Antworten zu Produktrouten, Lager-QC, Packgewicht, Versandberechnung, Marktplätzen und unabhängigen LoveGoBuy-Erfahrungen." },
  },
  es: {
    home: { title: "Hoja LoveGoBuy 2026: Hallazgos, QC y Envío", description: "Guía independiente de LoveGoBuy sobre rutas comprobadas, coincidencia de fuentes, pruebas QC del almacén y decisiones de envío realistas." },
    finds: { title: "Hallazgos LoveGoBuy 2026: Rutas Comprobadas", description: "Revisa ocho rutas actuales de LoveGoBuy con imágenes de origen coincidentes, precios aproximados, pesos registrados y destinos en vivo." },
    categories: { title: "Categorías LoveGoBuy y Listas de Control QC", description: "Investiga LoveGoBuy por categoría con controles específicos para calzado, ropa, accesorios, gorras y productos electrónicos." },
    guide: { title: "Cómo Comprar con LoveGoBuy: Guía Paso a Paso", description: "Sigue LoveGoBuy desde la coincidencia del enlace y la compra hasta las pruebas de almacén, el paquete y la comprobación final." },
    qc: { title: "Guía de Fotos QC de LoveGoBuy: Qué Comprobar", description: "Evalúa fotos QC de LoveGoBuy comprobando identidad, variante, estado, construcción, medidas y pruebas que todavía faltan." },
    shipping: { title: "Envío LoveGoBuy: Guía de Peso y Volumen", description: "Calcula el envío de LoveGoBuy con peso embalado, dimensiones, restricciones, ensayo del paquete y comprobaciones por destino." },
    articles: { title: "Guías y Reseñas de LoveGoBuy 2026", description: "Artículos completos sobre compras con LoveGoBuy, fotos QC, coste de envío, investigación con hojas de cálculo y reseña de la plataforma." },
    faq: { title: "Preguntas LoveGoBuy: Pedidos, QC, Envío y Reseñas", description: "Respuestas claras sobre rutas de producto, QC de almacén, peso embalado, cálculo de envío, mercados y reseñas independientes." },
  },
  fr: {
    home: { title: "Tableau LoveGoBuy 2026 : Trouvailles, QC et Livraison", description: "Guide indépendant LoveGoBuy sur les routes vérifiées, la correspondance des sources, les preuves QC et les décisions de livraison." },
    finds: { title: "Trouvailles LoveGoBuy 2026 : Routes Vérifiées", description: "Examinez huit routes LoveGoBuy actuelles avec images source concordantes, prix indicatifs, poids enregistrés et destinations directes." },
    categories: { title: "Catégories LoveGoBuy et Listes de Contrôle QC", description: "Recherchez sur LoveGoBuy par catégorie avec des contrôles adaptés aux chaussures, vêtements, accessoires et produits électroniques." },
    guide: { title: "Acheter avec LoveGoBuy : Guide Étape par Étape", description: "Suivez le parcours LoveGoBuy, du lien source et de l’achat aux preuves d’entrepôt, au colis et à la vérification finale." },
    qc: { title: "Photos QC LoveGoBuy : Points à Vérifier", description: "Évaluez les photos QC LoveGoBuy en vérifiant identité, option, état, construction, mesures et preuves encore manquantes." },
    shipping: { title: "Livraison LoveGoBuy : Guide Poids et Volume", description: "Estimez la livraison LoveGoBuy avec poids emballé, dimensions, restrictions, répétition du colis et contrôles selon la destination." },
    articles: { title: "Guides et Avis LoveGoBuy 2026", description: "Articles complets sur l’achat LoveGoBuy, les photos QC, le coût de livraison, la recherche par tableau et l’évaluation du service." },
    faq: { title: "FAQ LoveGoBuy : Commandes, QC, Livraison et Avis", description: "Réponses claires sur les routes produit, le QC d’entrepôt, le poids emballé, la livraison, les marchés et les avis indépendants." },
  },
  it: {
    home: { title: "Foglio LoveGoBuy 2026: Prodotti, QC e Spedizione", description: "Guida indipendente LoveGoBuy su percorsi verificati, corrispondenza delle fonti, prove QC e decisioni di spedizione realistiche." },
    finds: { title: "Prodotti LoveGoBuy 2026: Percorsi Verificati", description: "Controlla otto percorsi LoveGoBuy attuali con immagini fonte corrispondenti, prezzi indicativi, pesi registrati e destinazioni live." },
    categories: { title: "Categorie LoveGoBuy e Liste di Controllo QC", description: "Ricerca LoveGoBuy per categoria con controlli dedicati a scarpe, abbigliamento, accessori, copricapi ed elettronica." },
    guide: { title: "Come Comprare con LoveGoBuy: Guida Passo Passo", description: "Segui LoveGoBuy dal controllo del link e dall’acquisto alle prove di magazzino, al pacco e alla verifica finale." },
    qc: { title: "Foto QC LoveGoBuy: Cosa Controllare", description: "Valuta le foto QC LoveGoBuy verificando identità, variante, condizioni, costruzione, misure e prove ancora mancanti." },
    shipping: { title: "Spedizione LoveGoBuy: Guida a Peso e Volume", description: "Stima la spedizione LoveGoBuy con peso imballato, dimensioni, restrizioni, prova del pacco e controlli per destinazione." },
    articles: { title: "Guide e Recensioni LoveGoBuy 2026", description: "Articoli completi su acquisti LoveGoBuy, foto QC, costi di spedizione, ricerca con fogli e valutazione della piattaforma." },
    faq: { title: "FAQ LoveGoBuy: Ordini, QC, Spedizione e Recensioni", description: "Risposte chiare su percorsi prodotto, QC di magazzino, peso imballato, spedizione, marketplace e recensioni indipendenti." },
  },
};

const openGraphLocales: Record<Lang, string> = { en: "en_US", de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT" };

export function generateStaticParams() {
  return [
    ...languages.flatMap((lang) => routePaths.map((slug) => ({ lang, slug }))),
    ...languages.flatMap((lang) => articleSlugs.map((articleSlug) => ({ lang, slug: ["articles", articleSlug] }))),
  ];
}

function absolutePath(lang: Lang, slug: string[]) {
  return `https://lovegobuys.org/${lang}${slug.length ? `/${slug.join("/")}` : ""}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, slug = [] } = await params;
  if (!isLang(rawLang)) return {};
  const lang = rawLang;
  const key = (slug[0] ?? "home") as SeoPage;
  const article = slug[0] === "articles" && slug[1] && slug.length === 2 ? getArticle(slug[1], lang) : null;
  const pageSeo = seoCopy[lang][key] ?? seoCopy[lang].home;
  const title = article?.title ?? pageSeo.title;
  const description = article?.intro ?? pageSeo.description;
  const canonical = absolutePath(lang, slug);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(languages.map((item) => [item, absolutePath(item, slug)]).concat([["x-default", absolutePath("en", slug)]])),
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: article ? "article" : "website",
      title,
      description,
      url: canonical,
      siteName: "LoveGoBuy Field Guide",
      locale: openGraphLocales[lang],
      images: [{ url: "/lovegobuy-logo.png", width: 512, height: 164, alt: "LoveGoBuy Field Guide" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/lovegobuy-logo.png"] },
  };
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function breadcrumbSchema(lang: Lang, slug: string[], label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: interfaceCopy[lang].home, item: absolutePath(lang, []) },
      { "@type": "ListItem", position: 2, name: label, item: absolutePath(lang, slug) },
    ],
  };
}

function SearchBox({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <form className="search-box" action="https://cnfansge.com/search.html" method="get" target="_blank">
      <Search aria-hidden="true" />
      <input name="keywords" type="search" placeholder={c.searchPlaceholder} aria-label={c.searchPlaceholder} required />
      <input name="channelid" type="hidden" value="" />
      <button type="submit">{c.searchButton}<ArrowUpRight size={17} /></button>
    </form>
  );
}

function SectionHead({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="section-head">
      <span>{kicker}</span>
      <div><h2>{title}</h2><p>{text}</p></div>
    </div>
  );
}

function ResearchStrip({ lang, kind }: { lang: Lang; kind: PageKind }) {
  const item = researchFacts[lang][kind];
  return (
    <aside className="research-strip" aria-label={item.label}>
      <div><span>{item.label}</span><small>{item.note}</small></div>
      <ul>{item.facts.map((fact) => <li key={fact}><Check size={15} />{fact}</li>)}</ul>
    </aside>
  );
}

function ArticleCards({ lang, limit }: { lang: Lang; limit?: number }) {
  const c = copy[lang];
  const articles = getResearchArticles(lang);
  return (
    <div className="article-card-grid">
      {articles.slice(0, limit).map((article, index) => (
        <Link key={article.slug} href={`/${lang}/articles/${article.slug}`} className={index === 0 ? "article-card featured" : "article-card"}>
          <span>{String(index + 1).padStart(2, "0")} / {article.readingTime}</span>
          <h3>{article.title}</h3>
          <p>{article.deck}</p>
          <b>{c.readGuide}<ArrowRight size={16} /></b>
        </Link>
      ))}
    </div>
  );
}

const evidenceProductIndexes: Record<string, number[]> = {
  "lovegobuy-spreadsheet-research-workflow": [0, 1, 2],
  "how-to-buy-with-lovegobuy-2026": [0, 3, 5],
  "lovegobuy-qc-photos-guide": [0, 1, 3],
  "lovegobuy-shipping-cost-guide": [1, 3, 5],
  "is-lovegobuy-legit-review-2026": [0, 4, 7],
};

function ArticleEvidence({ lang, articleSlug }: { lang: Lang; articleSlug: string }) {
  const ui = interfaceCopy[lang];
  const indexes = evidenceProductIndexes[articleSlug] ?? [0, 1, 2];
  return (
    <div className="article-evidence" aria-label={ui.routeEvidence}>
      <div><b>{ui.routeEvidence}</b><span>{ui.routeEvidenceText}</span></div>
      <div>
        {indexes.map((index) => {
          const product = products[index];
          const label = productCopy[lang][index];
          return (
          <a href={product.href} target="_blank" rel="noopener noreferrer" key={product.href}>
            <img src={product.image} alt={`${label.category} ${ui.productRoute}`} width="320" height="320" loading="lazy" />
            <span>{label.category} · {product.price}</span>
          </a>
          );
        })}
      </div>
    </div>
  );
}

function ProductGrid({ lang, limit = 8 }: { lang: Lang; limit?: number }) {
  const c = copy[lang];
  return (
    <div className="product-grid">
      {products.slice(0, limit).map((product, index) => (
        <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer" key={product.href}>
          <div className="image-wrap">
            <img src={product.image} alt={`${productCopy[lang][index].category} ${c.viewItem} ${index + 1}`} width="640" height="640" loading={index < 4 ? "eager" : "lazy"} />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="product-copy">
            <small>{productCopy[lang][index].category} · {product.weight}</small>
            <h3>{productCopy[lang][index].name}</h3>
            <div><b>{product.price}</b><span>{c.viewItem}<ArrowUpRight size={14} /></span></div>
          </div>
        </a>
      ))}
    </div>
  );
}

function CategoryGrid({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <a href={category.href} target="_blank" rel="noopener noreferrer" key={category.href} className="category-card">
          <span className="category-number">{category.icon}</span>
          <div><h3>{category.name[lang]}</h3><p>{category.check[lang]}</p></div>
          <span className="category-action">{c.openCategory}<ArrowUpRight size={15} /></span>
        </a>
      ))}
    </div>
  );
}

function GuideGrid({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <div className="guide-grid">
      {guideCards.map((guide, index) => (
        <Link key={guide.slug} href={`/${lang}/${guide.slug}`} className={`guide-card guide-${index + 1}`}>
          <span>{guide.label[lang]}</span><h3>{guide.title[lang]}</h3><p>{guide.text[lang]}</p><b>{c.readGuide}<ArrowRight size={16} /></b>
        </Link>
      ))}
    </div>
  );
}

function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const ui = interfaceCopy[lang];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "LoveGoBuy Field Guide", url: "https://lovegobuys.org/", inLanguage: languages },
      { "@type": "Organization", name: "LoveGoBuy Field Guide", url: "https://lovegobuys.org/", description: c.independent },
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <span className="eyebrow">{c.eyebrow}</span>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroText}</p>
            <SearchBox lang={lang} />
            <small className="search-note">{c.searchNote}</small>
          </div>
          <div className="hero-board" aria-label={ui.productChecklist}>
            <div className="board-top"><span>{ui.researchCard}</span><ShieldCheck size={20} /></div>
            <div className="board-product">
              <img src={products[0].image} alt={ui.currentShoePreview} width="640" height="640" />
              <div><small>{ui.liveRoute}</small><b>{ui.matchFirst}</b><span>{ui.titleOptionImage}</span></div>
            </div>
            <div className="board-checks">
              <span><Check size={15} /> {ui.sourceMatch}</span><span><Check size={15} /> {ui.usefulQc}</span><span><Weight size={15} /> {ui.packedWeight}</span>
            </div>
            <div className="board-note">{ui.boardNote}</div>
          </div>
        </section>

        <section className="quick-strip">
          <div className="page-shell strip-inner">
            <div><b>{c.browse}</b><span>{c.browseText}</span></div>
            <div className="quick-links">
              {categories.slice(0, 6).map((category) => <a key={category.href} href={category.href} target="_blank" rel="noopener noreferrer">{category.name[lang]}<ArrowUpRight size={13} /></a>)}
            </div>
          </div>
        </section>

        <section className="page-section page-shell">
          <SectionHead kicker={ui.sectionFinds} title={c.latest} text={c.latestText} />
          <ProductGrid lang={lang} />
          <div className="section-cta"><Link href={`/${lang}/finds`}>{c.nav[0]} <ArrowRight size={16} /></Link></div>
        </section>

        <section className="page-section category-section">
          <div className="page-shell">
            <SectionHead kicker={ui.sectionCategories} title={c.categories} text={c.categoriesText} />
            <CategoryGrid lang={lang} />
          </div>
        </section>

        <section className="page-section page-shell workflow-section">
          <SectionHead kicker={ui.sectionMethod} title={c.workflow} text={c.workflowText} />
          <div className="workflow-grid">
            {c.steps.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section className="page-section guide-section">
          <div className="page-shell">
            <SectionHead kicker={ui.sectionGuides} title={c.guides} text={c.guidesText} />
            <GuideGrid lang={lang} />
          </div>
        </section>

        <section className="page-section page-shell home-articles">
          <SectionHead kicker={ui.sectionResearch} title={c.nav[5]} text={researchFacts[lang].articles.note} />
          <ArticleCards lang={lang} limit={3} />
          <div className="section-cta"><Link href={`/${lang}/articles`}>{c.nav[5]} <ArrowRight size={16} /></Link></div>
        </section>

        <section className="page-section page-shell compact-faq">
          <SectionHead kicker="06 / FAQ" title={c.faq} text={c.independent} />
          <div className="faq-grid">
            {c.faqItems.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}
          </div>
          <div className="section-cta"><Link href={`/${lang}/faq`}>{c.nav[6]} <ArrowRight size={16} /></Link></div>
        </section>
      </main>
    </>
  );
}

function Breadcrumb({ lang, label }: { lang: Lang; label: string }) {
  return <div className="breadcrumb"><Link href={`/${lang}`}>{interfaceCopy[lang].home}</Link><span>/</span><b>{label}</b></div>;
}

function RelatedArticles({ lang, articleSlug }: { lang: Lang; articleSlug: string }) {
  const articles = getResearchArticles(lang);
  const currentIndex = Math.max(0, articles.findIndex((item) => item.slug === articleSlug));
  const related = [articles[(currentIndex + 1) % articles.length], articles[(currentIndex + 2) % articles.length]];
  return (
    <nav className="related-articles" aria-label={interfaceCopy[lang].relatedArticles}>
      <b>{interfaceCopy[lang].relatedArticles}</b>
      <div>{related.map((article) => <Link key={article.slug} href={`/${lang}/articles/${article.slug}`}>{article.title}<ArrowRight size={15} /></Link>)}</div>
    </nav>
  );
}

function TopicPage({ lang, topic, kind, sourceBasis, contentLang, articleSlug }: { lang: Lang; topic: Topic; kind: string; sourceBasis?: string; contentLang?: string; articleSlug?: string }) {
  const c = copy[lang];
  const ui = interfaceCopy[lang];
  const pageSlug = kind === "article" && articleSlug ? ["articles", articleSlug] : [kind];
  const itemList = kind === "finds" ? {
    "@context": "https://schema.org", "@type": "ItemList", name: topic.title,
    itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: productCopy[lang][index].name, url: product.href })),
  } : null;
  return (
    <main className="interior page-shell">
      <JsonLd data={breadcrumbSchema(lang, pageSlug, topic.title)} />
      {itemList && <JsonLd data={itemList} />}
      <Breadcrumb lang={lang} label={topic.title} />
      <header className="interior-hero"><span>{kind.toUpperCase()} / {ui.fieldNote}</span><h1>{topic.title}</h1><p>{topic.intro}</p></header>
      {kind !== "article" && <ResearchStrip lang={lang} kind={kind as PageKind} />}
      {kind === "finds" && <ProductGrid lang={lang} />}
      <div className="article-layout">
        <aside><b>{ui.checkingRule}</b><p>{ui.checkingRuleText}</p><SearchBox lang={lang} /></aside>
        <article className="prose" lang={contentLang}>
          {sourceBasis && articleSlug && <><p className="source-basis">{sourceBasis}</p><ArticleEvidence lang={lang} articleSlug={articleSlug} /></>}
          {topic.sections.map((section, index) => (
            <section key={section.h}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.h}</h2>{section.p.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>}</section>
          ))}
          {articleSlug && <RelatedArticles lang={lang} articleSlug={articleSlug} />}
          <div className="article-next"><b>{c.guides}</b><GuideGrid lang={lang} /></div>
        </article>
      </div>
    </main>
  );
}

function CategoriesPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList", name: c.categories,
    itemListElement: categories.map((category, index) => ({ "@type": "ListItem", position: index + 1, name: category.name[lang], url: category.href })),
  };
  return (
    <main className="interior page-shell">
      <JsonLd data={breadcrumbSchema(lang, ["categories"], c.categories)} />
      <JsonLd data={itemList} />
      <Breadcrumb lang={lang} label={c.categories} />
      <header className="interior-hero"><span>{interfaceCopy[lang].categoryDesk}</span><h1>{c.categories}</h1><p>{c.categoriesText}</p></header>
      <ResearchStrip lang={lang} kind="categories" />
      <CategoryGrid lang={lang} />
      <section className="category-explainer"><h2>{c.workflow}</h2><div className="workflow-grid">{c.steps.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    </main>
  );
}

function FaqPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return (
    <main className="interior page-shell">
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema(lang, ["faq"], c.faq)} />
      <Breadcrumb lang={lang} label={c.faq} />
      <header className="interior-hero"><span>{interfaceCopy[lang].directAnswers}</span><h1>{c.faq}</h1><p>{c.independent}</p></header>
      <ResearchStrip lang={lang} kind="faq" />
      <div className="faq-page-grid">{c.faqItems.map((item, index) => <article key={item.q}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.q}</h2><p>{item.a}</p></article>)}</div>
      <section className="faq-route"><h2>{c.searchButton}</h2><SearchBox lang={lang} /></section>
    </main>
  );
}

function ArticlesPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <main className="interior page-shell">
      <JsonLd data={breadcrumbSchema(lang, ["articles"], c.nav[5])} />
      <Breadcrumb lang={lang} label={c.nav[5]} />
      <header className="interior-hero"><span>{interfaceCopy[lang].longForm} / {interfaceCopy[lang].sourceAware}</span><h1>{c.guides}</h1><p>{c.guidesText}</p></header>
      <ResearchStrip lang={lang} kind="articles" />
      <ArticleCards lang={lang} />
    </main>
  );
}

function ArticlePage({ article, lang }: { article: NonNullable<ReturnType<typeof getArticle>>; lang: Lang }) {
  const imageIndex = (evidenceProductIndexes[article.slug] ?? [0])[0];
  const publisher = { "@type": "Organization", name: "LoveGoBuy Field Guide", url: "https://lovegobuys.org/", logo: { "@type": "ImageObject", url: "https://lovegobuys.org/lovegobuy-logo.png" } };
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.intro, image: [products[imageIndex].image], datePublished: article.published, dateModified: article.modified, inLanguage: lang, mainEntityOfPage: absolutePath(lang, ["articles", article.slug]), author: publisher, publisher };
  return (
    <>
      <JsonLd data={schema} />
      <TopicPage lang={lang} topic={article} kind="article" sourceBasis={article.sourceBasis} contentLang={lang} articleSlug={article.slug} />
    </>
  );
}

export default async function LocalizedPage({ params }: PageProps) {
  const { lang: rawLang, slug = [] } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const key = slug[0];
  let content: React.ReactNode;

  if (!key) content = <HomePage lang={lang} />;
  else if (key === "categories" && slug.length === 1) content = <CategoriesPage lang={lang} />;
  else if (key === "faq" && slug.length === 1) content = <FaqPage lang={lang} />;
  else if (key === "articles" && slug.length === 1) content = <ArticlesPage lang={lang} />;
  else if (key === "articles" && slug[1] && slug.length === 2) {
    const article = getArticle(slug[1], lang);
    if (!article) notFound();
    content = <ArticlePage article={article} lang={lang} />;
  }
  else if ((["finds", "guide", "qc", "shipping"] as const).includes(key as "finds" | "guide" | "qc" | "shipping") && slug.length === 1) content = <TopicPage lang={lang} topic={topics[key as keyof typeof topics][lang]} kind={key} />;
  else notFound();

  return <><DocumentLanguage lang={lang} /><SiteHeader lang={lang} />{content}<SiteFooter lang={lang} /></>;
}
