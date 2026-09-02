import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, Database } from "lucide-react";
import { notFound } from "next/navigation";
import { articleSlugs, articles, isArticleSlug } from "@/lib/articles";
import { articleResearchBasis } from "@/lib/research-basis";
import { localizedArticleResearchBasis } from "@/lib/research-basis-localized";
import { isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() { return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) return {};
  const article = articles[locale][slug];
  const isOrderStatusGuide = slug === "sugargoo-order-status-purchased-shipped-received-stored";
  const suffix = isOrderStatusGuide ? "" : "/";
  const canonical = `https://sugargoos.shop/${locale}/articles/${slug}${suffix}`;
  const languages = Object.fromEntries(locales.map((item) => [item, `https://sugargoos.shop/${item}/articles/${slug}${suffix}`]));
  return { title: article.title, description: article.description, alternates: { canonical, languages: { ...languages, "x-default": `https://sugargoos.shop/en/articles/${slug}${suffix}` } }, openGraph: { type:"article", url:canonical, title:article.title, description:article.description, images:[] }, twitter:{ card:"summary", title:article.title, description:article.description, images:[] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) notFound();
  const article = articles[locale][slug];
  const research = locale === "en" ? articleResearchBasis[slug] : (localizedArticleResearchBasis[locale][slug] ?? articleResearchBasis[slug]);
  const labels = {
    en:{back:"All articles",contents:"In this guide",catalog:"Check the live catalog",independent:"Independent editorial guide",basis:"Research basis",checked:"Fact check"},
    de:{back:"Alle Artikel",contents:"In diesem Leitfaden",catalog:"Live-Katalog prüfen",independent:"Unabhängiger redaktioneller Leitfaden",basis:"Recherchebasis",checked:"Geprüft"},
    es:{back:"Todos los artículos",contents:"En esta guía",catalog:"Consultar catálogo activo",independent:"Guía editorial independiente",basis:"Base de investigación",checked:"Comprobado"},
    fr:{back:"Tous les articles",contents:"Dans ce guide",catalog:"Consulter le catalogue",independent:"Guide éditorial indépendant",basis:"Base de recherche",checked:"Vérifié"},
    it:{back:"Tutti gli articoli",contents:"In questa guida",catalog:"Controlla il catalogo",independent:"Guida editoriale indipendente",basis:"Base di ricerca",checked:"Verificato"},
  }[locale];
  const metricLabels = {
    en:["Trustpilot score","Public reviews","Five-star share","One-star share"],
    de:["Trustpilot-Wert","Öffentliche Bewertungen","Anteil 5 Sterne","Anteil 1 Stern"],
    es:["Nota Trustpilot","Reseñas públicas","Proporción 5 estrellas","Proporción 1 estrella"],
    fr:["Note Trustpilot","Avis publics","Part 5 étoiles","Part 1 étoile"],
    it:["Punteggio Trustpilot","Recensioni pubbliche","Quota 5 stelle","Quota 1 stella"],
  }[locale];
  const publishedDates = {"sugargoo-spreadsheet-guide-2026":"2026-09-01","sugargoo-qc-photo-checklist":"2026-08-29","sugargoo-shipping-weight-guide-2026":"2026-08-31","sugargoo-review-2026":"2026-09-01","sugargoo-order-status-purchased-shipped-received-stored":"2026-09-02"};
  const articleSchema = {"@type":"Article",headline:article.title,description:article.description,datePublished:publishedDates[slug],dateModified:slug === "sugargoo-order-status-purchased-shipped-received-stored" ? "2026-09-02" : "2026-09-01",author:{"@type":"Organization",name:"Sugargoo Find Desk"},publisher:{"@type":"Organization",name:"Sugargoo Find Desk"},inLanguage:locale,isAccessibleForFree:true};
  const schema = slug === "sugargoo-order-status-purchased-shipped-received-stored"
    ? {"@context":"https://schema.org","@graph":[articleSchema,{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`https://sugargoos.shop/${locale}`},{"@type":"ListItem",position:2,name:labels.back,item:`https://sugargoos.shop/${locale}/articles`},{"@type":"ListItem",position:3,name:article.title,item:`https://sugargoos.shop/${locale}/articles/${slug}`}]}]}
    : {"@context":"https://schema.org",...articleSchema};
  return (
    <main className="article-page page-width">
      <Link className="back-link" href={`/${locale}/articles/`}><ArrowLeft/>{labels.back}</Link>
      <header className="article-header"><p className="eyebrow"><span />{labels.independent}</p><h1>{article.title}</h1><p>{article.description}</p><div><span>{article.category}</span><span><Clock3/>{article.readTime}</span><span>{article.published}</span></div></header>
      <section className="article-research" aria-label={labels.basis}>
        <div className="article-research-head"><Database aria-hidden="true"/><div><strong>{labels.basis}</strong><small>{labels.checked}: {research.checked}</small></div></div>
        <ul>{research.sources.map((source) => <li key={source}>{source}</li>)}</ul>
        {research.metrics && <div className="metric-grid">{research.metrics.map((metric,index) => <div key={metric.label}><strong>{metric.value}</strong><span>{metricLabels[index]}</span></div>)}</div>}
      </section>
      <div className="article-layout">
        <aside className="toc"><strong>{labels.contents}</strong>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>0{index + 1}</span>{section.heading}</a>)}</aside>
        <article className="article-body">{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>0{index + 1}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article>
      </div>
      <div className="article-cta"><p>{article.description}</p><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{labels.catalog}<ArrowRight/></a></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    </main>
  );
}
