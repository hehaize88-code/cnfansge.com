"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mark } from "./KakobuyHome";
import { copy, Lang, navHref } from "./site-data";
import { interfaceText } from "./localized-data";
import { getLocalizedArticle } from "./localized-article-data";
import { articleBySlug, ArticleSlug } from "./article-data";

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

export function ArticlePage({ slug }: { slug: ArticleSlug }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("kv-language") as Lang | null;
    if (saved && copy[saved]) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);
  const t = copy[lang];
  const ui = interfaceText[lang];
  const sourceArticle = articleBySlug[slug];
  const article = getLocalizedArticle(lang, slug);
  const readingMinutes = sourceArticle.readingTime.match(/\d+/)?.[0] ?? "12";
  const readingTime = {
    en: `${readingMinutes} min read`, de: `${readingMinutes} Min. Lesezeit`, es: `${readingMinutes} min de lectura`,
    fr: `${readingMinutes} min de lecture`, it: `${readingMinutes} min di lettura`,
  }[lang];
  const locale = { en: "en-US", de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT" }[lang];
  const updatedDate = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date("2026-08-31T00:00:00Z"));
  const change = (value: Lang) => {
    setLang(value);
    localStorage.setItem("kv-language", value);
    document.documentElement.lang = value;
  };

  return <main className="site-shell article-detail">
    <div className="top-note"><span>{t.note}</span><span>EN · DE · ES · FR · IT</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label={ui.homeAria}><Mark /></Link>
      <nav aria-label={ui.primaryNavigation}>{t.nav.map((item, index) => <Link key={item} href={navHref[index]}>{item}</Link>)}</nav>
      <Select value={lang} onValueChange={value => change(value as Lang)}>
        <SelectTrigger className="language-select" aria-label={ui.selectLanguage}><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="en">EN</SelectItem><SelectItem value="de">DE</SelectItem><SelectItem value="es">ES</SelectItem><SelectItem value="fr">FR</SelectItem><SelectItem value="it">IT</SelectItem></SelectContent>
      </Select>
    </header>

    <article>
      <header className="article-hero">
        <Link href="/articles" className="back-link"><ArrowLeft size={16} /> {ui.articles}</Link>
        <p className="article-kicker">{article.tag} · {ui.englishGuide}</p>
        <h1>{article.title}</h1>
        <p className="article-description">{article.description}</p>
        <div className="article-meta"><span><Clock3 size={15} />{readingTime}</span><span>{ui.updated} {updatedDate}</span></div>
      </header>

      <ArticleVisual slug={slug} lang={lang} />

      <div className="article-layout">
        <div className="article-body">
          {article.sections.map((section, index) =>
            <section key={section.heading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{section.heading}</h2><p>{section.body}</p></div>
            </section>
          )}
        </div>
        <aside className="article-takeaways">
          <small>{ui.keyTakeaways}</small>
          <h2>{ui.whatToRemember}</h2>
          {article.takeaways.map(item => <p key={item}><Check size={16} />{item}</p>)}
        </aside>
      </div>

      <aside className="article-note">
        <b>{ui.sourceBoundary}</b>
        <p>{article.sourceNote}</p>
        <a href="https://cnfansge.com/AllProducts">{t.browse} <ArrowUpRight size={17} /></a>
      </aside>
    </article>

    <footer><div className="brand"><Mark /></div><p>{t.footer}</p><div><Link href="/spreadsheet">{ui.footerLinks[0]}</Link><Link href="/qc">{ui.footerLinks[1]}</Link><Link href="/shipping">{ui.footerLinks[2]}</Link><Link href="/articles">{ui.footerLinks[3]}</Link></div></footer>
  </main>;
}
