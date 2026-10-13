"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mark } from "./Mark";
import { JsonLd } from "./JsonLd";
import { baseUrl } from "./site-config";
import type { SourceReference } from "./source-data";
import { copy, Lang, localizedPath, navHref } from "./site-data";
import { interfaceText } from "./localized-data";
import type { LocalizedArticle } from "./localized-article-data";
import { ArticleSlug } from "./article-data";

import { articleNavigationText } from "./article-navigation";
import { LanguageLinks } from "./LanguageLinks";

function ArticleVisual({ slug, lang }: { slug: ArticleSlug; lang: Lang }) {
  const visual = interfaceText[lang].visuals;
  if (slug === "how-to-use-kakobuy") {
    return <figure className="article-visual process-visual" aria-label={visual.workflowAria}>
      {visual.workflow.map((step, index) =>
        <div key={step}><span>0{index + 1}</span><b>{step}</b>{index < 3 && <i>→</i>}</div>
      )}
    </figure>;
  }
  if (slug === "actual-vs-volumetric-weight") {
    return <figure className="article-visual weight-visual" aria-label={visual.weightAria}>
      <div><small>{visual.actualWeight[0]}</small><b>{visual.actualWeight[1]}</b><span>{visual.actualWeight[2]}</span></div>
      <div><small>{visual.volumetricWeight[0]}</small><b>{visual.volumetricWeight[1]}</b><span>{visual.volumetricWeight[2]}</span></div>
    </figure>;
  }
  if (slug === "qc-photo-checklist") {
    return <figure className="article-visual qc-visual" aria-label={visual.qcAria}>
      {visual.qc.map((item, index) =>
        <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></div>
      )}
    </figure>;
  }
  if (slug === "kakobuy-review-2026") {
    return <figure className="article-visual review-visual" aria-label={visual.reviewAria}>
      <div><small>{visual.officialSources[0]}</small><b>{visual.officialSources[1]}</b></div>
      <div><small>{visual.communityReports[0]}</small><b>{visual.communityReports[1]}</b></div>
    </figure>;
  }
  return null;
}

type ArticleReaderProps = { slug: ArticleSlug; initialLang: Lang; article: LocalizedArticle; sources: SourceReference[]; dates: { published: string; modified: string }; related: (LocalizedArticle & { slug: ArticleSlug })[]; sourceHeading: [string, string] };
export function ArticleReader({ slug, initialLang, article, sources, dates, related, sourceHeading }: ArticleReaderProps) {
  const lang = initialLang;
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("kv-language", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = copy[lang];
  const ui = interfaceText[lang];
  const readingMinutes = Math.max(1, Math.ceil(article.sections.reduce((total, section) => total + section.body.split(/\s+/).length, 0) / 200));
  const readingTime = {
    en: `${readingMinutes} min read`, de: `${readingMinutes} Min. Lesezeit`, es: `${readingMinutes} min de lectura`,
    fr: `${readingMinutes} min de lecture`, it: `${readingMinutes} min di lettura`,
  }[lang];
  const locale = { en: "en-US", de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT" }[lang];
  const articleDate = dates.modified;
  const navigation = articleNavigationText[lang];
  const updatedDate = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${articleDate}T00:00:00Z`));
  const change = (value: Lang) => {
    localStorage.setItem("kv-language", value);
    router.push(localizedPath(pathname, value));
  };
  const canonicalPath = localizedPath(`/articles/${slug}`, lang);
  const articleUrl = `${baseUrl}${canonicalPath}`;
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: dates.published,
      dateModified: dates.modified,
      inLanguage: lang,
      mainEntityOfPage: articleUrl,
      url: articleUrl,
      isAccessibleForFree: true,
      author: { "@type": "Organization", name: "KakobuyVIP Store" },
      publisher: { "@type": "Organization", name: "KakobuyVIP Store", url: `${baseUrl}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: `${baseUrl}${localizedPath("/", lang) === "/" ? "" : localizedPath("/", lang)}` },
        { "@type": "ListItem", position: 2, name: ui.articles, item: `${baseUrl}${localizedPath("/articles", lang)}` },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
      ],
    },
  ];

  return <main className="site-shell article-detail">
    <JsonLd data={schemas} />
    <div className="top-note"><span>{t.note}</span><span>EN · DE · ES · FR · IT</span></div>
    <header className="site-header">
      <Link href={localizedPath("/", lang)} className="brand" aria-label={ui.homeAria}><Mark /></Link>
      <nav aria-label={ui.primaryNavigation}>{t.nav.map((item, index) => <Link key={item} href={localizedPath(navHref[index], lang)}>{item}</Link>)}</nav>
      <Select value={lang} onValueChange={value => change(value as Lang)}>
        <SelectTrigger className="language-select" aria-label={ui.selectLanguage}><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="en">EN</SelectItem><SelectItem value="de">DE</SelectItem><SelectItem value="es">ES</SelectItem><SelectItem value="fr">FR</SelectItem><SelectItem value="it">IT</SelectItem></SelectContent>
      </Select>
    </header>

    <article>
      <header className="article-hero">
        <Link href={localizedPath("/articles", lang)} className="back-link"><ArrowLeft size={16} /> {ui.articles}</Link>
        <p className="article-kicker">{article.tag} · {ui.englishGuide}</p>
        <h1>{article.title}</h1>
        <p className="article-description">{article.description}</p>
        <div className="article-meta"><span><Clock3 size={15} />{readingTime}</span><span>{ui.updated} {updatedDate}</span></div>
      </header>

      <nav className="article-contents" aria-label={navigation.contents}>
        <h2>{navigation.contents}</h2>
        <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol>
      </nav>
      {slug === "kakobuy-shipping-calculator" && <div className="official-tool"><a href="https://kakobuy.com/tools/estimate" target="_blank" rel="noopener noreferrer">{navigation.official} ↗</a></div>}
      <ArticleVisual slug={slug} lang={lang} />

      <div className="article-layout">
        <div className="article-body">
          {article.sections.map((section, index) =>
            <section key={section.heading} id={`section-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{section.heading}</h2>{section.body.split("\n\n").map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                {(index === 2 || index === article.sections.length - 1) && <div className="article-context-link"><span>{navigation.continue}</span><Link href={localizedPath(`/articles/${related[index === 2 ? 0 : 1].slug}`, lang)}>{related[index === 2 ? 0 : 1].title} →</Link></div>}
              </div>
            </section>
          )}
        </div>
        <aside className="article-takeaways">
          <small>{ui.keyTakeaways}</small>
          <h2>{ui.whatToRemember}</h2>
          {article.takeaways.map(item => <p key={item}><Check size={16} />{item}</p>)}
        </aside>
      </div>

      <div data-article-end aria-hidden="true" />
      <aside className="article-note">
        <b>{ui.sourceBoundary}</b>
        <p>{article.sourceNote}</p>
        <Link href={localizedPath("/spreadsheet", lang)}>{t.browse} <ArrowUpRight size={17} /></Link>
      </aside>

      <section className="content-section related-articles" aria-labelledby="related-title">
        <div className="section-heading"><h2 id="related-title">{navigation.related}</h2></div>
        <div className="article-grid">{related.map(item => <Link className="article-card" href={localizedPath(`/articles/${item.slug}`, lang)} key={item.slug}><small>{item.tag}</small><h3>{item.title}</h3><p>{item.description}</p><span>{t.read} <ArrowUpRight size={17} /></span></Link>)}</div>
      </section>
      <section className="article-sources" aria-labelledby="source-list-title">
        <div className="section-heading"><div><p>{sourceHeading[0]}</p><h2 id="source-list-title">{sourceHeading[1]}</h2></div></div>
        <div className="source-grid">
          {sources.map((source) => <article key={`${source.publisher}-${source.reference}`}>
            <small>{source.publisher} · {source.checked}</small>
            <h3>{source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a> : source.title}</h3>
            <code>{source.reference}</code>
            <p>{source.scope[lang]}</p>
          </article>)}
        </div>
      </section>
    </article>

    <LanguageLinks pathname={canonicalPath} lang={lang} />
    <footer><div className="brand"><Mark /></div><p>{t.footer}</p><div><Link href={localizedPath("/spreadsheet", lang)}>{ui.footerLinks[0]}</Link><Link href={localizedPath("/qc", lang)}>{ui.footerLinks[1]}</Link><Link href={localizedPath("/shipping", lang)}>{ui.footerLinks[2]}</Link><Link href={localizedPath("/articles", lang)}>{ui.footerLinks[3]}</Link></div></footer>
  </main>;
}
