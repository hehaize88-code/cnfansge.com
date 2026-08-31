import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Search, ShieldCheck, Weight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocumentLanguage } from "@/components/document-language";
import { categories, copy, guideCards, isLang, languages, products, sectionSlugs, type Lang } from "@/lib/site-data";
import { topics, type Topic } from "@/lib/topics";
import { articleSlugs, getArticle, getResearchArticles } from "@/lib/articles";
import { researchFacts, type PageKind } from "@/lib/research-facts";

type PageProps = { params: Promise<{ lang: string; slug?: string[] }> };

const routePaths = [[], ["finds"], ["categories"], ["guide"], ["qc"], ["shipping"], ["faq"], ["articles"]];

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
  const c = copy[lang];
  const key = slug[0] ?? "home";
  const article = slug[0] === "articles" && slug[1] && slug.length === 2 ? getArticle(slug[1], lang) : null;
  const title = article?.title ?? (key === "home" ? "LoveGoBuy Spreadsheet 2026 — Finds, QC & Shipping" : c.nav[sectionSlugs.indexOf(key)] || "LoveGoBuy Guide");
  const description = article?.intro ?? (key === "home" ? c.heroText : topics[key as keyof typeof topics]?.[lang]?.intro ?? c.guidesText);
  const canonical = absolutePath(lang, slug);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(languages.map((item) => [item, absolutePath(item, slug)]).concat([["x-default", absolutePath("en", slug)]])),
    },
    robots: { index: true, follow: true },
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

function ArticleEvidence() {
  return (
    <div className="article-evidence" aria-label="Live product route examples">
      <div><b>Live route examples</b><span>Three exact image-to-destination checks from the product index.</span></div>
      <div>
        {products.slice(0, 3).map((product) => (
          <a href={product.href} target="_blank" rel="noopener noreferrer" key={product.href}>
            <img src={product.image} alt={`${product.category} route evidence`} width="320" height="320" loading="lazy" />
            <span>{product.category} · {product.price}</span>
          </a>
        ))}
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
            <img src={product.image} alt={`${product.category} product route ${index + 1}`} width="640" height="640" loading={index < 4 ? "eager" : "lazy"} />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="product-copy">
            <small>{product.category} · {product.weight}</small>
            <h3>{product.name}</h3>
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "LoveGoBuy Field Guide", url: "https://lovegobuys.org/", inLanguage: languages },
      { "@type": "Organization", name: "LoveGoBuy Field Guide", url: "https://lovegobuys.org/", description: c.independent },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <span className="eyebrow">{c.eyebrow}</span>
            <h1>{c.heroTitle}</h1>
            <p>{c.heroText}</p>
            <SearchBox lang={lang} />
            <small className="search-note">{c.searchNote}</small>
          </div>
          <div className="hero-board" aria-label="Product research checklist">
            <div className="board-top"><span>RESEARCH CARD / 01</span><ShieldCheck size={20} /></div>
            <div className="board-product">
              <img src={products[0].image} alt="Current shoe route preview" width="640" height="640" />
              <div><small>LIVE ROUTE</small><b>Match first</b><span>title · option · image</span></div>
            </div>
            <div className="board-checks">
              <span><Check size={15} /> Source match</span><span><Check size={15} /> Useful QC</span><span><Weight size={15} /> Packed weight</span>
            </div>
            <div className="board-note">Keep a row only when you can explain why it survives the checks.</div>
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
          <SectionHead kicker="01 / FINDS" title={c.latest} text={c.latestText} />
          <ProductGrid lang={lang} />
          <div className="section-cta"><Link href={`/${lang}/finds`}>{c.nav[0]} <ArrowRight size={16} /></Link></div>
        </section>

        <section className="page-section category-section">
          <div className="page-shell">
            <SectionHead kicker="02 / CATEGORIES" title={c.categories} text={c.categoriesText} />
            <CategoryGrid lang={lang} />
          </div>
        </section>

        <section className="page-section page-shell workflow-section">
          <SectionHead kicker="03 / METHOD" title={c.workflow} text={c.workflowText} />
          <div className="workflow-grid">
            {c.steps.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section className="page-section guide-section">
          <div className="page-shell">
            <SectionHead kicker="04 / GUIDES" title={c.guides} text={c.guidesText} />
            <GuideGrid lang={lang} />
          </div>
        </section>

        <section className="page-section page-shell home-articles">
          <SectionHead kicker="05 / RESEARCH" title={c.nav[5]} text={researchFacts[lang].articles.note} />
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
  return <div className="breadcrumb"><Link href={`/${lang}`}>Home</Link><span>/</span><b>{label}</b></div>;
}

function TopicPage({ lang, topic, kind, sourceBasis, contentLang }: { lang: Lang; topic: Topic; kind: string; sourceBasis?: string; contentLang?: string }) {
  const c = copy[lang];
  return (
    <main className="interior page-shell">
      <Breadcrumb lang={lang} label={topic.title} />
      <header className="interior-hero"><span>{kind.toUpperCase()} / FIELD NOTE</span><h1>{topic.title}</h1><p>{topic.intro}</p></header>
      {kind !== "article" && <ResearchStrip lang={lang} kind={kind as PageKind} />}
      {kind === "finds" && <ProductGrid lang={lang} />}
      <div className="article-layout">
        <aside><b>CHECKING RULE</b><p>Record what was checked, when it was checked and what remains unknown.</p><SearchBox lang={lang} /></aside>
        <article className="prose" lang={contentLang}>
          {sourceBasis && <><p className="source-basis">{sourceBasis}</p><ArticleEvidence /></>}
          {topic.sections.map((section, index) => (
            <section key={section.h}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.h}</h2>{section.p.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>}</section>
          ))}
          <div className="article-next"><b>{c.guides}</b><GuideGrid lang={lang} /></div>
        </article>
      </div>
    </main>
  );
}

function CategoriesPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <main className="interior page-shell">
      <Breadcrumb lang={lang} label={c.categories} />
      <header className="interior-hero"><span>CATEGORY DESK / 08 LANES</span><h1>{c.categories}</h1><p>{c.categoriesText}</p></header>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Breadcrumb lang={lang} label={c.faq} />
      <header className="interior-hero"><span>DIRECT ANSWERS / UPDATED 2026</span><h1>{c.faq}</h1><p>{c.independent}</p></header>
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
      <Breadcrumb lang={lang} label={c.nav[5]} />
      <header className="interior-hero"><span>LONG-FORM / SOURCE-AWARE</span><h1>{c.guides}</h1><p>{c.guidesText}</p></header>
      <ResearchStrip lang={lang} kind="articles" />
      <ArticleCards lang={lang} />
    </main>
  );
}

function ArticlePage({ article, lang }: { article: NonNullable<ReturnType<typeof getArticle>>; lang: Lang }) {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.intro, datePublished: article.published, dateModified: article.modified, inLanguage: lang, mainEntityOfPage: absolutePath(lang, ["articles", article.slug]), author: { "@type": "Organization", name: "LoveGoBuy Field Guide" } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <TopicPage lang={lang} topic={article} kind="article" sourceBasis={article.sourceBasis} contentLang={lang} />
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
