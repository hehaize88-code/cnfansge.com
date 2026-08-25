import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideLayout from "../../components/GuideLayout";
import { articles, getArticle } from "../../article-data";

function anchor(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const path = `/articles/${article.slug}/`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: { type: "article", title: article.title, description: article.description, url: path, publishedTime: article.published, modifiedTime: article.updated, images: article.image ? [{ url: article.image, alt: article.imageAlt }] : [] },
    twitter: { card: article.image ? "summary_large_image" : "summary", title: article.title, description: article.description, images: article.image ? [article.image] : [] }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description,
    datePublished: article.published, dateModified: article.updated, author: { "@type": "Organization", name: "Hipo Index" },
    publisher: { "@type": "Organization", name: "Hipo Index" }, mainEntityOfPage: `https://spreadsheet-hipobuys.net/articles/${article.slug}/`,
    image: article.image ? [article.image] : undefined
  };

  return <GuideLayout path={`/articles/${article.slug}/`} kicker={article.kicker} title={article.title} intro={article.summary}>
    <article className="long-article">
      <div className="article-meta"><span>Published {article.published}</span><span>Updated {article.updated}</span><span>{article.readTime}</span><span>Independent guide</span></div>
      <div className="article-layout">
        <aside className="article-toc"><p>On this page</p><ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#${anchor(section.heading)}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.heading}</a></li>)}</ol></aside>
        <div className="article-prose">
          {article.image ? <figure><img src={article.image} alt={article.imageAlt || ""} width="1100" height="720" /><figcaption>{article.imageCaption}</figcaption></figure> : <div className="shipping-equation"><span>Delivered cost</span><strong>item + domestic delivery + services + international parcel + import costs</strong></div>}
          {article.sections.map((section) => <section id={anchor(section.heading)} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}
          <section className="article-sources"><p className="section-kicker">Sources checked · 25 August 2026</p><h2>Research notes</h2><p>Sources support specific platform facts or identify recurring buyer questions. Community reports are not treated as official terms or guaranteed outcomes.</p><ul>{article.sources.map((source) => <li key={source.label}><strong>{source.label}</strong><span>{source.note}</span></li>)}</ul></section>
          <div className="article-next"><div><p className="section-kicker">Continue checking</p><h2>Use the guide, then verify the live listing.</h2></div><div><Link href="/articles/">All articles</Link><a href="https://cnfansge.com/AllProducts/">Browse current catalog ↗</a></div></div>
        </div>
      </div>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </GuideLayout>;
}
