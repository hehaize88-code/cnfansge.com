"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { CategoryKey, Language } from "./content";
import { discoveryCopy } from "./discovery-copy";

type Row = { category: CategoryKey; code: string; price: string; weight: string; href: string; image: string };
const ui = {
  en: { search: "Filter by item ID or category", all: "All categories", item: "Item", price: "USD reference", weight: "Product weight", route: "View product", empty: "No matching products. Clear a filter or search the full catalogue.", budget: "Reference price under $20", count: "matching entries", clear: "Clear filters" },
  de: { search: "Nach Artikel-ID oder Kategorie filtern", all: "Alle Kategorien", item: "Artikel", price: "USD-Referenz", weight: "Produktgewicht", route: "Produkt ansehen", empty: "Keine Treffer. Filter zurücksetzen oder den ganzen Katalog durchsuchen.", budget: "Referenzpreis unter 20 USD", count: "passende Einträge", clear: "Filter zurücksetzen" },
  es: { search: "Filtrar por ID o categoría", all: "Todas las categorías", item: "Artículo", price: "Referencia USD", weight: "Peso del producto", route: "Ver producto", empty: "Sin coincidencias. Quita un filtro o busca en el catálogo completo.", budget: "Precio de referencia inferior a $20", count: "entradas coincidentes", clear: "Borrar filtros" },
  fr: { search: "Filtrer par identifiant ou catégorie", all: "Toutes les catégories", item: "Article", price: "Référence USD", weight: "Poids du produit", route: "Voir le produit", empty: "Aucun résultat. Retirez un filtre ou cherchez dans le catalogue complet.", budget: "Prix indicatif inférieur à 20 $", count: "entrées correspondantes", clear: "Effacer les filtres" },
  it: { search: "Filtra per ID o categoria", all: "Tutte le categorie", item: "Articolo", price: "Riferimento USD", weight: "Peso del prodotto", route: "Vedi prodotto", empty: "Nessun risultato. Rimuovi un filtro o cerca nel catalogo completo.", budget: "Prezzo indicativo sotto 20 dollari", count: "voci corrispondenti", clear: "Cancella filtri" },
};
export function ProductIndex({lang, rows, categories}: {lang: Language; rows: readonly Row[]; categories: Record<CategoryKey, string>}) {
  const labels = ui[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey | "all">("all");
  const [budget, setBudget] = useState(false);
  const available = useMemo(() => Array.from(new Set(rows.map(row => row.category))), [rows]);
  const filtered = useMemo(() => rows.filter(row => (category === "all" || row.category === category) && (!budget || Number(row.price.replace(/[^\d.]/g, "")) < 20) && `${row.code} ${categories[row.category]}`.toLocaleLowerCase(lang).includes(query.trim().toLocaleLowerCase(lang))), [rows, category, budget, query, lang, categories]);
  return <div className="spreadsheet-index">
    <div className="index-toolbar"><label><Search aria-hidden="true"/><span className="sr-only">{labels.search}</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder={labels.search}/></label><p aria-live="polite">{filtered.length} / {rows.length} · {labels.count}</p></div>
    <div className="index-filters" aria-label={labels.item}>
      <button type="button" aria-pressed={category === "all"} className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>{labels.all}</button>
      {available.map(key => <button type="button" aria-pressed={category === key} className={category === key ? "active" : ""} onClick={() => setCategory(key)} data-track="catalog_filter" data-category={key} key={key}>{categories[key]}</button>)}
    </div>
    <label className="budget-filter"><input type="checkbox" checked={budget} onChange={e => setBudget(e.target.checked)}/>{labels.budget}</label>
    <p className="index-note">{discoveryCopy[lang].priceNote}</p>
    <div className="catalog-grid">
      {filtered.map(row => <article className="catalog-row" key={row.code}>
        <a href={row.href} target="_blank" rel="noopener" data-track="outbound_product_click" data-item={row.code}><img src={row.image} alt={`${categories[row.category]} ${row.code}`} width="240" height="240" loading="lazy"/></a>
        <div><h2>{categories[row.category]} · {row.code.replace("F-", "#")}</h2><dl><div><dt>{labels.price}</dt><dd>{row.price}</dd></div><div><dt>{labels.weight}</dt><dd>{row.weight || discoveryCopy[lang].unknown}</dd></div></dl><a className="text-link" href={row.href} target="_blank" rel="noopener" data-track="outbound_product_click" data-item={row.code}>{labels.route}<ArrowUpRight aria-hidden="true"/></a></div>
      </article>)}
    </div>
    {!filtered.length && <div className="index-empty"><p>{labels.empty}</p><button type="button" onClick={() => {setQuery("");setCategory("all");setBudget(false);}}>{labels.clear}</button></div>}
  </div>;
}
