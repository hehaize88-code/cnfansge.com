import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Camera, ExternalLink, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/SearchBox";
import { articleSlugs, articles } from "@/lib/articles";
import { faqCopy } from "@/lib/page-content";
import { categories, categoryLabels, homeCopy, isLocale, locales, productLabels, products } from "@/lib/site-data";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const languages = Object.fromEntries(locales.map((item) => [item, `https://sugargoos.shop/${item}/`]));
  const titles = {
    en:"Sugargoo Spreadsheet 2026 — Finds, QC & Shipping",
    de:"Sugargoo Spreadsheet 2026 – Funde, QC & Versand",
    es:"Sugargoo Spreadsheet 2026 — Hallazgos, QC y envíos",
    fr:"Sugargoo Spreadsheet 2026 — Sélections, QC et livraison",
    it:"Sugargoo Spreadsheet 2026 — Selezioni, QC e spedizione",
  } as const;
  return {
    title: titles[locale],
    description: homeCopy[locale].intro,
    alternates: { canonical: `/${locale}/`, languages: { ...languages, "x-default": "https://sugargoos.shop/en/" } },
    openGraph: { title: titles[locale], description: homeCopy[locale].intro, images:[] },
    twitter: { card:"summary", title:titles[locale], description:homeCopy[locale].intro, images:[] },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = homeCopy[locale];
  const extra = {
    en:{catalog:"Live discovery workspace",latest:"Latest catalog routes",workflow:"From link to parcel",faq:"Quick answers",faqNote:"Clear answers before you commit to a listing or shipping line.",articles:"Read before you order",articlesNote:"Practical guides built around decisions that listings cannot answer.",read:"Read guide",allFaq:"All answers",allArticles:"All articles"},
    de:{catalog:"Arbeitsfläche für aktive Funde",latest:"Neueste Katalogwege",workflow:"Vom Link zum Paket",faq:"Schnelle Antworten",faqNote:"Klare Antworten, bevor du dich für ein Angebot oder eine Versandlinie entscheidest.",articles:"Vor der Bestellung lesen",articlesNote:"Praktische Leitfäden zu Fragen, die ein Angebot allein nicht beantwortet.",read:"Leitfaden lesen",allFaq:"Alle Antworten",allArticles:"Alle Artikel"},
    es:{catalog:"Espacio de hallazgos activos",latest:"Últimas rutas del catálogo",workflow:"Del enlace al paquete",faq:"Respuestas rápidas",faqNote:"Respuestas claras antes de elegir un anuncio o una línea de envío.",articles:"Leer antes de comprar",articlesNote:"Guías prácticas para decisiones que un anuncio no puede resolver.",read:"Leer guía",allFaq:"Todas las respuestas",allArticles:"Todos los artículos"},
    fr:{catalog:"Espace de recherche active",latest:"Dernières routes du catalogue",workflow:"Du lien au colis",faq:"Réponses rapides",faqNote:"Des réponses claires avant de choisir une annonce ou une ligne d’expédition.",articles:"À lire avant de commander",articlesNote:"Des guides pratiques pour les décisions qu’une annonce ne peut résoudre.",read:"Lire le guide",allFaq:"Toutes les réponses",allArticles:"Tous les articles"},
    it:{catalog:"Spazio per le ricerche attive",latest:"Ultimi percorsi del catalogo",workflow:"Dal link al pacco",faq:"Risposte rapide",faqNote:"Risposte chiare prima di scegliere un’inserzione o una linea di spedizione.",articles:"Leggi prima di ordinare",articlesNote:"Guide pratiche per decisioni che un’inserzione da sola non può risolvere.",read:"Leggi la guida",allFaq:"Tutte le risposte",allArticles:"Tutti gli articoli"},
  }[locale];
  return (
    <main className="home-page">
      <section className="market-hero">
        <div className="hero-grid page-width">
          <div className="hero-copy">
            <p className="hero-kicker"><span>2026</span>{extra.catalog}</p>
            <h1>{copy.titleA}<br/><em>{copy.titleB}</em></h1>
            <p className="hero-intro">{copy.intro}</p>
            <SearchBox placeholder={copy.search} button={copy.searchButton} />
            <div className="trust-row">{copy.facts.map((item) => <span key={item}><ShieldCheck aria-hidden="true" />{item}</span>)}</div>
          </div>
          <aside className="hero-board" aria-label={copy.signal}>
            <div className="board-head"><span>{copy.liveBoard}</span><strong>01 / 08</strong></div>
            <div className="board-image"><img src={products[0].image} alt={productLabels[locale][products[0].id].name} width="720" height="720" /><span>{copy.routeChecked}</span></div>
            <div className="board-copy"><p>{copy.signal}</p><h2>{productLabels[locale][products[0].id].name}</h2><span>{copy.signalText}</span><a href={products[0].href} target="_blank" rel="noopener noreferrer">{copy.open}<ExternalLink aria-hidden="true" /></a></div>
          </aside>
        </div>
      </section>
      <section className="category-section page-width"><div className="section-label"><span>01</span><div><small>{copy.eyebrow}</small><h2>{copy.categories}</h2></div></div><div className="category-grid">
        {categories.map((category) => <a href={category.href} target="_blank" rel="noopener noreferrer" key={category.key}><small>{category.icon}</small><strong>{categoryLabels[locale][category.key]}</strong><ArrowRight aria-hidden="true" /></a>)}
      </div></section>
      <section className="products-section page-width">
        <div className="products-head"><div className="section-label"><span>02</span><div><small>{extra.latest}</small><h2>{copy.products}</h2></div></div><p>{copy.productsNote}</p><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{copy.viewAll}<ArrowRight aria-hidden="true" /></a></div>
        <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}</div>
      </section>
      <section className="workflow-section"><div className="page-width workflow-inner"><div><p className="hero-kicker"><span>03</span>{extra.workflow}</p><h2>{copy.workflow}</h2><p>{copy.workflowText}</p></div><ol>
        {copy.steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{index === 0 ? <PackageCheck /> : index === 1 ? <ShieldCheck /> : index === 2 ? <Camera /> : <Truck />}<strong>{step}</strong></li>)}
      </ol></div></section>
      <section className="home-knowledge page-width">
        <div className="home-faq"><div className="knowledge-head"><span>04</span><div><h2>{extra.faq}</h2><p>{extra.faqNote}</p></div><Link href={`/${locale}/faq/`}>{extra.allFaq}<ArrowRight/></Link></div><FAQList items={faqCopy[locale].slice(0,3)}/></div>
        <div className="home-articles"><div className="knowledge-head"><span>05</span><div><h2>{extra.articles}</h2><p>{extra.articlesNote}</p></div><Link href={`/${locale}/articles/`}>{extra.allArticles}<ArrowRight/></Link></div><div className="home-article-grid">{articleSlugs.map((slug) => {const article=articles[locale][slug];return <Link href={`/${locale}/articles/${slug}/`} key={slug} className="home-article-card"><div><BookOpen/><span>{article.category}</span><small>{article.readTime}</small></div><h3>{article.title}</h3><p>{article.description}</p><b>{extra.read}<ArrowRight/></b></Link>;})}</div></div>
      </section>
    </main>
  );
}
