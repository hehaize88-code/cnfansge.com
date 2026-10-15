import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, Database } from "lucide-react";
import { notFound } from "next/navigation";
import { articleSlugs, articles, isArticleSlug } from "@/lib/articles";
import { editorialUI } from "@/lib/editorial-ui";
import { articleSeoTitles, relatedArticleSlugs } from "@/lib/article-seo";
import { articleResearchBasis } from "@/lib/research-basis";
import { localizedArticleResearchBasis } from "@/lib/research-basis-localized";
import { isLocale, locales } from "@/lib/site-data";

export function generateStaticParams() { return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) return {};
  const article = articles[locale][slug];
  const canonical = `https://sugargoos.shop/${locale}/articles/${slug}/`;
  const languages = Object.fromEntries(locales.map((item) => [item, `https://sugargoos.shop/${item}/articles/${slug}/`]));
  const title = articleSeoTitles[locale][slug] ?? article.title;
  return { title: { absolute: title }, description: article.description, alternates: { canonical, languages: { ...languages, "x-default": `https://sugargoos.shop/en/articles/${slug}/` } }, openGraph: { type:"article", url:canonical, title, description:article.description, images:[] }, twitter:{ card:"summary", title, description:article.description, images:[] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) notFound();
  const article = articles[locale][slug];
  const research = article.research ?? (locale === "en" ? articleResearchBasis[slug] : (localizedArticleResearchBasis[locale][slug] ?? articleResearchBasis[slug]));
  if (!research) throw new Error(`Missing research basis for ${locale}/${slug}`);
  const related = [...new Set([...(relatedArticleSlugs[slug] ?? []), ...(article.related ?? [])])].filter(isArticleSlug);
  const ui = editorialUI[locale];
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
  const publishedDates: Record<string, string> = {"sugargoo-spreadsheet-guide-2026":"2026-09-01","sugargoo-qc-photo-checklist":"2026-08-29","sugargoo-shipping-weight-guide-2026":"2026-08-31","sugargoo-review-2026":"2026-09-01","sugargoo-order-status-purchased-shipped-received-stored":"2026-09-02"};
  const canonical = `https://sugargoos.shop/${locale}/articles/${slug}/`;
  const articleSchema = {"@type":"Article",headline:article.title,description:article.description,datePublished:article.publishedISO ?? publishedDates[slug],dateModified:article.modifiedISO ?? "2026-10-01",mainEntityOfPage:canonical,author:{"@type":"Organization",name:"Sugargoo Find Desk"},publisher:{"@type":"Organization",name:"Sugargoo Find Desk"},inLanguage:locale,isAccessibleForFree:true};
  const schema = {"@context":"https://schema.org","@graph":[articleSchema,{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:locale === "en" ? "Home" : {de:"Startseite",es:"Inicio",fr:"Accueil",it:"Home"}[locale],item:`https://sugargoos.shop/${locale}/`},{"@type":"ListItem",position:2,name:labels.back,item:`https://sugargoos.shop/${locale}/articles/`},{"@type":"ListItem",position:3,name:article.title,item:canonical}]}]};
  return (
    <main className="article-page page-width">
      <Link className="back-link" href={`/${locale}/articles/`}><ArrowLeft/>{labels.back}</Link>
      <header className="article-header"><p className="eyebrow"><span />{labels.independent}</p><h1>{article.title}</h1><p>{article.description}</p><div><span>{article.category}</span><span><Clock3/>{article.readTime}</span><span>{article.published}</span><span>{ui.updated}: <time dateTime={article.modifiedISO ?? "2026-10-01"}>{article.modifiedISO ?? "2026-10-01"}</time></span></div></header>
      {article.summary && <section className="article-answer"><strong>{ui.answer}</strong><p>{article.summary}</p></section>}
      {article.table && <div className="decision-table-wrap" role="region" aria-label={article.table.caption} tabIndex={0}><table className="decision-table"><caption>{article.table.caption}</caption><thead><tr>{article.table.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{article.table.rows.map((row,index) => <tr key={index}>{row.map((cell,column) => column === 0 ? <th key={column} scope="row">{cell}</th> : <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>}
      <div className="article-layout">
        <aside className="toc"><details open><summary>{labels.contents}</summary><nav>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2,"0")}</span>{section.heading}</a>)}</nav></details></aside>
        <article className="article-body">{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2,"0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article>
      </div>
      <section className="article-research source-notes" aria-label={labels.basis}>
        <div className="article-research-head"><Database aria-hidden="true"/><div><strong>{labels.basis}</strong><small>{labels.checked}: {research.checked}</small></div></div>
        <ul>{research.sources.map((source) => <li key={source}>{source}</li>)}</ul>
        {research.metrics && <div className="metric-grid">{research.metrics.map((metric,index) => <div key={metric.label}><strong>{metric.value}</strong><span>{metricLabels[index]}</span></div>)}</div>}
      </section>
      {article.sources && <section className="article-sources"><h2>{ui.sources}</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>}
      {related.length > 0 && <nav className="article-research" aria-label={{en:"Related guides",de:"Verwandte Leitfäden",es:"Guías relacionadas",fr:"Guides connexes",it:"Guide correlate"}[locale]}>
        <strong>{{en:"Related guides",de:"Verwandte Leitfäden",es:"Guías relacionadas",fr:"Guides connexes",it:"Guide correlate"}[locale]}</strong>
        <ul>{related.map((item) => <li key={item}><Link href={`/${locale}/articles/${item}/`}>{articles[locale][item].title}</Link></li>)}</ul>
      </nav>}
      <div className="article-cta"><p>{ui.external}</p><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{labels.catalog}<ArrowRight/></a></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    </main>
  );
}
