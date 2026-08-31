"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleGauge,
  Images,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { copy, Lang, navHref } from "./site-data";
import { articlesByLang, categoriesByLang, interfaceText, productsByLang } from "./localized-data";

export function Mark() {
  return <img className="brand-logo" src="/kakobuy-logo.png" alt="Kakobuy" width="642" height="162" />;
}

export function KakobuyHome() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => copy[lang], [lang]);
  const ui = interfaceText[lang];
  const categories = categoriesByLang[lang];
  const products = productsByLang[lang];
  const articles = articlesByLang[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("kv-language") as Lang | null;
    if (saved && copy[saved]) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const changeLanguage = (value: Lang) => {
    setLang(value);
    window.localStorage.setItem("kv-language", value);
    document.documentElement.lang = value;
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const keyword = String(form.get("keywords") || "").trim();
    window.location.href = keyword
      ? `https://cnfansge.com/search.html?keywords=${encodeURIComponent(keyword)}`
      : "https://cnfansge.com/AllProducts";
  };

  return (
    <main className="site-shell">
      <div className="top-note"><span>{t.note}</span><span>EN · DE · ES · FR · IT</span></div>
      <header className="site-header">
        <Link href="/" className="brand" aria-label={ui.homeAria}><Mark /></Link>
        <nav aria-label={ui.primaryNavigation}>
          {t.nav.map((item, index) => <Link key={item} href={navHref[index]}>{item}</Link>)}
        </nav>
        <Select value={lang} onValueChange={(value) => changeLanguage(value as Lang)}>
          <SelectTrigger className="language-select" aria-label={ui.selectLanguage}><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem><SelectItem value="de">DE</SelectItem><SelectItem value="es">ES</SelectItem><SelectItem value="fr">FR</SelectItem><SelectItem value="it">IT</SelectItem>
          </SelectContent>
        </Select>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> {t.eyebrow}</p>
          <h1><span>{t.title[0]}</span><span>{t.title[1]}</span><span className="slash-word">{t.title[2]}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <form className="search-panel" onSubmit={submitSearch}>
            <Search aria-hidden="true" />
            <input name="keywords" aria-label={t.search} placeholder={t.search} />
            <button type="submit">{t.searchButton}<ArrowUpRight size={18} /></button>
          </form>
          <div className="hero-actions">
            <Link href="/spreadsheet" className="primary-link">{t.browse}<ChevronRight size={18} /></Link>
            <Link href="/guide" className="text-link">{t.guide}<ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-manifest" aria-label={ui.researchWorkflow}>
          <div className="manifest-head"><span>{ui.manifest}</span><span>{ui.manifestNumber}</span></div>
          <div className="manifest-route"><span>{ui.manifestRoute[0]}</span><b>→</b><span>{ui.manifestRoute[1]}</span><b>→</b><span>{ui.manifestRoute[2]}</span></div>
          <div className="manifest-grid">
            <div><CircleGauge /><span>{ui.manifestItems[0]}</span><b>01</b></div>
            <div><Images /><span>{ui.manifestItems[1]}</span><b>02</b></div>
            <div><PackageCheck /><span>{ui.manifestItems[2]}</span><b>03</b></div>
            <div><ShieldCheck /><span>{ui.manifestItems[3]}</span><b>04</b></div>
          </div>
          <div className="verified-stamp"><Check /> {ui.independentIndex}</div>
        </div>
      </section>

      <section className="stat-rail" aria-label={ui.highlights}>
        <span><b>10</b>{t.stats[0]}</span><span><b>QC</b>{t.stats[1]}</span><span><b>↗</b>{t.stats[2]}</span>
      </section>

      <section className="content-section categories-section">
        <div className="section-heading"><div><p>{t.category[0]}</p><h2>{t.category[1]}</h2></div><p>{t.category[2]}</p></div>
        <div className="category-grid">
          {categories.map(([name, desc, href], index) => (
            <a key={name} href={href} className="category-card">
              <span>{String(index + 1).padStart(2, "0")}</span><div><b>{name}</b><small>{desc}</small></div><ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="content-section product-section">
        <div className="section-heading"><div><p>{t.products[0]}</p><h2>{t.products[1]}</h2></div><p>{t.products[2]}</p></div>
        <div className="product-grid">
          {products.map(([name, category, price, image, href], index) => (
            <a key={name} href={href} className="product-card">
              <div className="product-image"><img src={image} alt={name} width="750" height="750" loading={index < 2 ? "eager" : "lazy"} /><span>{ui.newRoute}</span></div>
              <div className="product-meta"><small>{category}</small><h3>{name}</h3><div><b>{price}</b><span>{t.open}<ArrowUpRight size={16} /></span></div></div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section process-section">
        <div className="section-heading"><div><p>{t.process[0]}</p><h2>{t.process[1]}</h2></div></div>
        <div className="process-grid">
          {t.steps.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="content-section article-section">
        <div className="section-heading"><div><p>{t.articles[0]}</p><h2>{t.articles[1]}</h2></div><Link href="/articles" className="text-link">{ui.allArticles} <ArrowUpRight size={17} /></Link></div>
        <div className="article-grid">
          {articles.map(([tag, title, text, href], index) => <Link href={href} className={`article-card article-${index + 1}`} key={title}><small>{tag} / {ui.longFormGuide}</small><h3>{title}</h3><p>{text}</p><span>{t.read}<ArrowUpRight size={17} /></span></Link>)}
        </div>
      </section>

      <section className="content-section faq-section">
        <div className="section-heading"><div><p>{t.faqTitle[0]}</p><h2>{t.faqTitle[1]}</h2></div></div>
        <div className="faq-grid">{t.faq.map(([question, answer], index) => <article key={question}><span>0{index + 1}</span><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <footer><div className="brand"><Mark /></div><p>{t.footer}</p><div><Link href="/spreadsheet">{ui.footerLinks[0]}</Link><Link href="/qc">{ui.footerLinks[1]}</Link><Link href="/shipping">{ui.footerLinks[2]}</Link><Link href="/articles">{ui.footerLinks[3]}</Link></div></footer>
    </main>
  );
}
