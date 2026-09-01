import Link from "next/link";
import { notFound } from "next/navigation";
import Catalog from "../../../components/Catalog";
import SearchBox from "../../../components/SearchBox";
import ShippingCalculator from "../../../components/ShippingCalculator";
import SiteChrome from "../../../components/SiteChrome";
import { articleBlueprints, getArticle, getContent, languages, products } from "../../../lib/content";
import { getResearch } from "../../../lib/research";

const base = "https://usfanss.org";

export const dynamic = "force-static";
export const dynamicParams = false;

function pathKey(slug) {
  return slug?.join("/") || "home";
}

function routeTitle(content, slug, language) {
  if (!slug?.length) return content.homeTitle;
  if (slug[0] === "articles" && slug[1]) return getArticle(slug[1], language)?.title;
  return content.pageTitles[slug[0]];
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  if (!languages.includes(lang)) return {};
  const content = getContent(lang);
  const path = slug?.length ? `/${slug.join("/")}` : "";
  const title = routeTitle(content, slug, lang);
  const description = slug?.[0] === "articles" && slug?.[1]
    ? getArticle(slug[1], lang)?.dek
    : slug?.length ? content.pageIntros[slug[0]] : content.heroText;
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}${path}`,
      languages: Object.fromEntries([
        ...languages.map((code) => [code, `${base}/${code}${path}`]),
        ["x-default", `${base}/en${path}`],
      ]),
    },
    openGraph: {
      title,
      description,
      type: slug?.[1] ? "article" : "website",
      url: `${base}/${lang}${path}`,
      siteName: "USFans Buyer Research",
      locale: lang,
      images: [{ url: `${base}/usfans.png`, width: 375, height: 123, alt: "USFans" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${base}/usfans.png`],
    },
  };
}

export function generateStaticParams() {
  const paths = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
  return languages.flatMap((lang) => [
    ...paths.map((value) => ({ lang, slug: [value] })),
    ...articleBlueprints.map((article) => ({ lang, slug: ["articles", article.slug] })),
  ]);
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function productItemList(name) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: product.href,
    })),
  };
}

function breadcrumbSchema(language, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${base}/${language}${path}`,
    })),
  };
}

function SectionHead({ eyebrow, title, text, link, linkText }) {
  return (
    <div className="section-head">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
      {link && <Link className="text-link" href={link}>{linkText} <span>↗</span></Link>}
    </div>
  );
}

function ArticleCards({ language, content }) {
  return (
    <div className="article-grid">
      {articleBlueprints.map((article, index) => (
        <Link href={`/${language}/articles/${article.slug}`} className="article-card" key={article.slug}>
          <span>0{index + 1} · {index % 2 ? content.articleKinds[1] : content.articleKinds[0]}</span>
          <h3>{article.title[language]}</h3>
          <p>{article.dek[language]}</p>
          <b>{content.articleCta}</b>
        </Link>
      ))}
    </div>
  );
}

function Home({ language, content }) {
  const faqSchema = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: content.faqItems.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}})) };
  const itemSchema = productItemList("USFans buyer research preview");
  return (
    <>
      <JsonLd data={[faqSchema, itemSchema, {"@context":"https://schema.org","@type":"WebSite",name:"USFans Buyer Research",url:`${base}/${language}`,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://cnfansge.com/search.html?keywords={search_term_string}&channelid=2"},"query-input":"required name=search_term_string"}}]} />
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">{content.label}</span>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroText}</p>
          <SearchBox placeholder={content.searchPlaceholder} button={content.searchButton} />
          <div className="hero-notes">{content.heroStats.map((stat)=><span key={stat}>{stat}</span>)}</div>
        </div>
        <div className="hero-visual">
          <div className="showcase-head">
            <span>{content.browse}</span>
            <b>LIVE · {products.length}</b>
          </div>
          <div className="showcase-products">
            {products.slice(0,4).map((product)=><a href={product.href} className="showcase-product" key={product.href} aria-label={`${content.catalog.open}: ${product.name}`}>
              <img src={product.image} alt={`${product.name} — ${content.catalog.imageAlt}`} width="420" height="420" />
              <span>{content.catalog.categoryMap[product.category] || product.category}</span>
              <strong>{product.name}</strong>
              <b>${product.usd}</b>
            </a>)}
          </div>
          <div className="showcase-audit">
            {content.scanCards.map(([label,text,badge])=><div className="scan-card" key={label}><span>{label}</span><strong>{text}</strong><b>{badge}</b></div>)}
          </div>
        </div>
      </section>

      <section className="content-section products-section">
        <SectionHead eyebrow={`01 / ${content.sectionCodes[0]}`} title={content.browse} text={content.browseText} link={`/${language}/spreadsheet`} linkText={content.viewAll} />
        <Catalog labels={content.catalog} limit={8} />
      </section>

      <section className="content-section process-section">
        <SectionHead eyebrow={`02 / ${content.sectionCodes[1]}`} title={content.stepsTitle} />
        <div className="steps-grid">{content.steps.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-section qc-strip">
        <div><span className="eyebrow">03 / {content.sectionCodes[2]}</span><h2>{content.qcTitle}</h2><p>{content.qcText}</p><Link className="button-link" href={`/${language}/qc`}>{content.qcCta} ↗</Link></div>
        <ol>{content.qcItems.map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span>{item}</li>)}</ol>
      </section>

      <section className="content-section articles-section">
        <SectionHead eyebrow={`04 / ${content.sectionCodes[3]}`} title={content.articlesTitle} text={content.articlesText} link={`/${language}/articles`} linkText={content.nav.articles} />
        <ArticleCards language={language} content={content} />
      </section>

      <section className="content-section faq-section">
        <SectionHead eyebrow={`05 / ${content.sectionCodes[4]}`} title={content.faqTitle} />
        <div className="faq-list">{content.faqItems.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </>
  );
}

function PageHero({ title, text, code }) {
  return <section className="inner-hero"><span className="eyebrow">{code}</span><h1>{title}</h1><p>{text}</p></section>;
}

function FactGrid({ research }) {
  return <section className="content-section fact-panel"><SectionHead eyebrow="FACT CHECK / 2026" title={research.factsTitle} text={research.factsIntro}/><div className="fact-grid">{research.facts.map(([label,value,text])=><article className="fact-card" key={label}><span>{label}</span><strong>{value}</strong><p>{text}</p></article>)}</div><p className="source-note">{research.sourceNote}</p></section>;
}

function ResearchBlocks({ items }) {
  return <section className="content-section research-panel"><div className="research-grid">{items.map(([title,text],index)=><article className="research-card" key={title}><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>;
}

function SpreadsheetPage({ content, research }) {
  return <><JsonLd data={productItemList(content.pageTitles.spreadsheet)}/><PageHero code={content.pageCodes.spreadsheet} title={content.pageTitles.spreadsheet} text={content.pageIntros.spreadsheet}/><FactGrid research={research}/><ResearchBlocks items={research.spreadsheet}/><section className="content-section catalog-page"><Catalog labels={content.catalog}/></section></>;
}

function FindsPage({ content, research }) {
  return <><PageHero code={content.pageCodes.finds} title={content.pageTitles.finds} text={content.pageIntros.finds}/><ResearchBlocks items={research.finds}/><section className="content-section catalog-page"><Catalog labels={content.catalog} limit={12}/></section></>;
}

function GuidePage({ content, research }) {
  return <><PageHero code={content.pageCodes.guide} title={content.pageTitles.guide} text={content.pageIntros.guide}/><FactGrid research={research}/><section className="content-section"><div className="guide-rail">{content.steps.map(([n,t,x], index)=><article key={n}><span>{n}</span><div><h2>{t}</h2><p>{x}</p><p>{content.guideDetails[index]}</p></div></article>)}</div></section><ResearchBlocks items={research.guide}/></>;
}

function QCPage({ content, research }) {
  return <><PageHero code={content.pageCodes.qc} title={content.pageTitles.qc} text={content.pageIntros.qc}/><section className="content-section"><div className="qc-board">{content.qcItems.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><h2>{item}</h2><p>{content.qcDetails[index]}</p></article>)}</div></section><ResearchBlocks items={research.qc}/></>;
}

function ShippingPage({ content, research }) {
  return <><PageHero code={content.pageCodes.shipping} title={content.pageTitles.shipping} text={content.pageIntros.shipping}/><section className="content-section shipping-layout"><div><h2>{content.shippingFormula}</h2><p>{content.faqItems[3][1]}</p><p>{content.steps[3][2]}</p></div><ShippingCalculator labels={content.calculator}/></section><ResearchBlocks items={research.shipping}/><FactGrid research={research}/></>;
}

function FAQPage({ content, research }) {
  const questions = [...content.faqItems, ...research.faqExtra];
  return <><JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}}/><PageHero code={content.pageCodes.faq} title={content.pageTitles.faq} text={content.pageIntros.faq}/><section className="content-section"><div className="faq-list large">{questions.map(([q,a])=><details open key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><p className="source-note">{research.sourceNote}</p></section></>;
}

function ArticlesPage({ language, content }) {
  return <><PageHero code={content.pageCodes.articles} title={content.pageTitles.articles} text={content.pageIntros.articles}/><section className="content-section"><ArticleCards language={language} content={content}/></section></>;
}

function ArticleVisual({ visual }) {
  if (!visual) return null;
  const [title, rows] = visual;
  return <figure className="article-visual"><figcaption>{title}</figcaption><div>{rows.map(([label,value])=><div className="visual-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></figure>;
}

function ArticlePage({ language, article, content }) {
  const url = `${base}/${language}/articles/${article.slug}`;
  const articleSchema = {"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.dek,datePublished:"2026-09-01",dateModified:"2026-09-01",inLanguage:language,image:`${base}/usfans.png`,wordCount:article.sections.map(([,body])=>body.split(/\s+/).length).reduce((a,b)=>a+b,0),mainEntityOfPage:url,author:{"@type":"Organization",name:"USFans Field Research Desk"},publisher:{"@type":"Organization",name:"USFans Buyer Research",logo:{"@type":"ImageObject",url:`${base}/usfans.png`}}};
  const breadcrumbs = breadcrumbSchema(language, [[content.homeLabel,""],[content.pageTitles.articles,"/articles"],[article.title,`/articles/${article.slug}`]]);
  return <><JsonLd data={[articleSchema,breadcrumbs]}/><article className="long-article"><header><span className="eyebrow">{content.articleEyebrow}</span><h1>{article.title}</h1><p>{article.dek}</p><div>{content.articleMeta.map((item)=><span key={item}>{item}</span>)}</div></header><ArticleVisual visual={article.visual}/><p className="source-note article-source">{article.sourceNote}</p><div className="article-body"><aside><strong>{content.articleToc}</strong>{article.sections.map(([heading],index)=><a href={`#section-${index+1}`} key={heading}>{heading}</a>)}</aside><div>{article.sections.map(([heading,body],index)=><section id={`section-${index+1}`} key={heading}><span>{String(index+1).padStart(2,"0")}</span><h2>{heading}</h2><p>{body}</p></section>)}</div></div></article></>;
}

export default async function DynamicPage({ params }) {
  const { lang, slug } = await params;
  if (!languages.includes(lang)) notFound();
  const content = getContent(lang);
  const research = getResearch(lang);
  const key = pathKey(slug);
  let page;
  if (key === "home") page = <Home language={lang} content={content}/>;
  else if (key === "spreadsheet") page = <SpreadsheetPage content={content} research={research}/>;
  else if (key === "finds") page = <FindsPage content={content} research={research}/>;
  else if (key === "guide") page = <GuidePage content={content} research={research}/>;
  else if (key === "qc") page = <QCPage content={content} research={research}/>;
  else if (key === "shipping") page = <ShippingPage content={content} research={research}/>;
  else if (key === "faq") page = <FAQPage content={content} research={research}/>;
  else if (key === "articles") page = <ArticlesPage language={lang} content={content}/>;
  else if (slug?.[0] === "articles" && slug?.length === 2) {
    const article = getArticle(slug[1], lang);
    if (!article) notFound();
    page = <ArticlePage language={lang} article={article} content={content}/>;
  } else notFound();
  return <SiteChrome language={lang} content={content}>{page}</SiteChrome>;
}
