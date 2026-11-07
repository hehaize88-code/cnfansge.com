"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { copy, type Lang } from "./site-data";
import { productsByLang } from "./localized-data";
import { trackEvent } from "./AnalyticsEvents";

const labels: Record<Lang, {all: string; filter: string; count: string; price: string; full: string}> = {
 en: {all: "All items", filter: "Filter this selection", count: "items", price: "USD references checked 7 November 2026. Confirm current options and prices on the item page.", full: "Browse the full catalog"},
 de: {all: "Alle Artikel", filter: "Auswahl filtern", count: "Artikel", price: "USD-Referenzen am 7. November 2026 geprüft. Optionen und Preise im aktuellen Angebot bestätigen.", full: "Gesamten Katalog öffnen"},
 es: {all: "Todos", filter: "Filtrar esta selección", count: "artículos", price: "Referencias USD revisadas el 7 de noviembre de 2026. Confirma opciones y precios actuales en la ficha.", full: "Explorar el catálogo completo"},
 fr: {all: "Tous", filter: "Filtrer cette sélection", count: "articles", price: "Prix indicatifs USD vérifiés le 7 novembre 2026. Confirmez options et prix actuels dans la fiche.", full: "Voir le catalogue complet"},
 it: {all: "Tutti", filter: "Filtra la selezione", count: "articoli", price: "Riferimenti USD verificati il 7 novembre 2026. Conferma opzioni e prezzi attuali nella scheda.", full: "Apri il catalogo completo"},
};

export function CatalogProducts({lang, compact = false}: {lang: Lang; compact?: boolean}) {
  const [category, setCategory] = useState("");
  const items = compact ? productsByLang[lang].slice(0,6) : productsByLang[lang];
  const categories = [...new Set(items.map(item => item[1]))];
  const visible = items.filter(item => !category || item[1] === category);
  const t = labels[lang];
  return <section className="content-section product-section" id="product-selection">
    <div className="section-heading"><div><p>{copy[lang].products[0]}</p><h2>{copy[lang].products[1]}</h2></div><p>{t.price}</p></div>
    {!compact && <div className="catalog-controls"><label>{t.filter}<select value={category} onChange={event => { setCategory(event.target.value); trackEvent("catalog_filter", {content_language: lang, category: event.target.value || "all"}); }}><option value="">{t.all}</option>{categories.map(item => <option key={item} value={item}>{item}</option>)}</select></label><span aria-live="polite">{visible.length} {t.count}</span></div>}
    <div className="product-grid">{visible.map(([name, category, price, image, href], index) => <a key={href} href={href} className="product-card"><div className="product-image"><img src={image} alt={name} width="750" height="750" loading={index < 2 ? "eager" : "lazy"}/></div><div className="product-meta"><small>{category}</small><h3>{name}</h3><div><b>{price}</b><span>{copy[lang].open}<ArrowUpRight size={16}/></span></div></div></a>)}</div>
    <a className="catalog-more" href="https://www.cnfansge.com/AllProducts/">{t.full} <ArrowUpRight size={17}/></a>
  </section>;
}
