import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Database } from "lucide-react";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { ProductCard } from "@/components/ProductCard";
import { articleSlugs, articles } from "@/lib/articles";
import { faqCopy, isPageSlug, pageContent, pageSlugs } from "@/lib/page-content";
import { pageResearchBasis } from "@/lib/research-basis";
import { localizedPageResearchBasis } from "@/lib/research-basis-localized";
import { homeCopy, isLocale, locales, products } from "@/lib/site-data";

export function generateStaticParams() { return locales.flatMap((locale) => pageSlugs.map((section) => ({ locale, section }))); }

function alternates(section: string) {
  return Object.fromEntries(locales.map((locale) => [locale, `https://sugargoos.shop/${locale}/${section}/`]));
}

const seoTitles = {
  en: { spreadsheet:"Sugargoo Spreadsheet 2026: Product Links & Finds", finds:"Sugargoo Finds 2026: Product Routes & Categories", guide:"How to Use Sugargoo: From Product Link to Parcel", qc:"Sugargoo QC Photos Guide: What to Check", shipping:"Sugargoo Shipping Calculator & Cost Guide 2026", faq:"Sugargoo FAQ: Storage, Returns, Payment & Shipping", articles:"Sugargoo Guides, Reviews & Buying Research" },
  de: { spreadsheet:"Sugargoo Spreadsheet 2026: Produktlinks & Funde", finds:"Sugargoo Finds 2026: Produktwege & Kategorien", guide:"Sugargoo verwenden: Vom Produktlink zum Paket", qc:"Sugargoo QC-Fotos: Prüfleitfaden", shipping:"Sugargoo Versandkosten & Rechner 2026", faq:"Sugargoo FAQ: Lagerung, Rückgabe & Versand", articles:"Sugargoo Leitfäden, Tests & Recherche" },
  es: { spreadsheet:"Sugargoo Spreadsheet 2026: Enlaces y hallazgos", finds:"Sugargoo Finds 2026: Rutas y categorías", guide:"Cómo usar Sugargoo: Del enlace al paquete", qc:"Fotos QC de Sugargoo: Guía de revisión", shipping:"Calculadora y costes de envío Sugargoo 2026", faq:"FAQ Sugargoo: Almacén, devoluciones y envío", articles:"Guías, opiniones e investigación Sugargoo" },
  fr: { spreadsheet:"Sugargoo Spreadsheet 2026 : liens et sélections", finds:"Sugargoo Finds 2026 : routes et catégories", guide:"Comment utiliser Sugargoo : du lien au colis", qc:"Photos QC Sugargoo : guide de contrôle", shipping:"Calculateur et coûts de livraison Sugargoo 2026", faq:"FAQ Sugargoo : stockage, retours et livraison", articles:"Guides, avis et recherches Sugargoo" },
  it: { spreadsheet:"Sugargoo Spreadsheet 2026: link e selezioni", finds:"Sugargoo Finds 2026: percorsi e categorie", guide:"Come usare Sugargoo: dal link al pacco", qc:"Foto QC Sugargoo: guida al controllo", shipping:"Calcolatore e costi spedizione Sugargoo 2026", faq:"FAQ Sugargoo: deposito, resi e spedizione", articles:"Guide, recensioni e ricerche Sugargoo" },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isPageSlug(section)) return {};
  const content = pageContent[locale][section];
  return { title: seoTitles[locale][section], description: content.intro, alternates: { canonical: `/${locale}/${section}/`, languages: { ...alternates(section), "x-default": `https://sugargoos.shop/en/${section}/` } } };
}

export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isPageSlug(section)) notFound();
  const content = pageContent[locale][section];
  const research = locale === "en" ? pageResearchBasis[section] : localizedPageResearchBasis[locale][section];
  const showProducts = section === "spreadsheet" || section === "finds";
  const openLabels = { en:"Open live catalog", de:"Live-Katalog öffnen", es:"Abrir catálogo activo", fr:"Ouvrir le catalogue", it:"Apri catalogo attivo" };
  const researchLabels = {
    en:{title:"Research basis",checked:"Fact check"}, de:{title:"Recherchebasis",checked:"Geprüft"},
    es:{title:"Base de investigación",checked:"Comprobado"}, fr:{title:"Base de recherche",checked:"Vérifié"},
    it:{title:"Base di ricerca",checked:"Verificato"},
  }[locale];
  return (
    <main className="inner-page">
      <section className="inner-hero page-width">
        <div className="page-index">{content.index}</div>
        <div><p className="eyebrow"><span />{content.kicker}</p><h1>{content.title}</h1><p>{content.intro}</p></div>
        <aside><CheckCircle2 aria-hidden="true"/><p>{content.note}</p></aside>
      </section>

      <section className="research-strip page-width" aria-label={researchLabels.title}>
        <div><Database aria-hidden="true"/><span>{researchLabels.title}</span><small>{researchLabels.checked}: {research.checked}</small></div>
        <ul>{research.sources.map((source) => <li key={source}>{source}</li>)}</ul>
      </section>

      {content.sections.length > 0 && <section className="editorial-grid page-width">{content.sections.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</section>}

      {showProducts && <section className="inner-products page-width"><div className="inner-section-head"><h2>{homeCopy[locale].products}</h2><p>{homeCopy[locale].productsNote}</p></div><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}</div></section>}

      {section === "faq" && <section className="faq-wrap page-width"><FAQList items={faqCopy[locale]} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqCopy[locale].map((item) => ({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))})}} /></section>}

      {section === "articles" && <section className="article-list page-width">{articleSlugs.map((slug, index) => { const article = articles[locale][slug]; return <Link href={`/${locale}/articles/${slug}/`} className="article-card" key={slug}><div><span>0{index + 1}</span><small>{article.category}</small></div><h2>{article.title}</h2><p>{article.description}</p><footer><span><BookOpen/> {article.readTime}</span><ArrowRight/></footer></Link>; })}</section>}

      <section className="catalog-cta"><div className="page-width"><p>{content.note}</p><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{openLabels[locale]}<ArrowRight /></a></div></section>
    </main>
  );
}
