"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { CategoryKey, Language } from "./content";

type Row = {
  category: CategoryKey;
  code: string;
  price: string;
  weight: string;
  href: string;
};

const ui: Record<Language, {
  search: string; all: string; item: string; category: string; price: string; weight: string;
  checked: string; status: string; route: string; current: string; empty: string; summary: string;
}> = {
  en: { search: "Filter by item ID or category", all: "All", item: "Item", category: "Category", price: "Reference price", weight: "Listed weight", checked: "Checked", status: "Status", route: "Live route", current: "Route active", empty: "No rows match this filter.", summary: "8 dated rows · no invented product count" },
  de: { search: "Nach Artikel-ID oder Kategorie filtern", all: "Alle", item: "Artikel", category: "Kategorie", price: "Referenzpreis", weight: "Gelistetes Gewicht", checked: "Geprüft", status: "Status", route: "Live-Route", current: "Route aktiv", empty: "Keine Zeile entspricht diesem Filter.", summary: "8 datierte Zeilen · keine erfundene Produktzahl" },
  es: { search: "Filtrar por ID o categoría", all: "Todo", item: "Artículo", category: "Categoría", price: "Precio de referencia", weight: "Peso listado", checked: "Revisado", status: "Estado", route: "Ruta activa", current: "Ruta activa", empty: "Ninguna fila coincide con el filtro.", summary: "8 filas fechadas · sin inventar cantidades" },
  fr: { search: "Filtrer par ID ou catégorie", all: "Tout", item: "Article", category: "Catégorie", price: "Prix indicatif", weight: "Poids indiqué", checked: "Vérifié", status: "Statut", route: "Route active", current: "Route active", empty: "Aucune ligne ne correspond à ce filtre.", summary: "8 lignes datées · aucun volume inventé" },
  it: { search: "Filtra per ID o categoria", all: "Tutto", item: "Articolo", category: "Categoria", price: "Prezzo indicativo", weight: "Peso indicato", checked: "Verificato", status: "Stato", route: "Percorso live", current: "Percorso attivo", empty: "Nessuna riga corrisponde al filtro.", summary: "8 righe datate · nessun volume inventato" },
};

export function ProductIndex({
  lang,
  rows,
  categories,
}: {
  lang: Language;
  rows: readonly Row[];
  categories: Record<CategoryKey, string>;
}) {
  const labels = ui[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey | "all">("all");
  const availableCategories = useMemo(() => Array.from(new Set(rows.map((row) => row.category))), [rows]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(lang);
    return rows.filter((row) => {
      const matchesCategory = category === "all" || row.category === category;
      const haystack = `${row.code} ${categories[row.category]}`.toLocaleLowerCase(lang);
      return matchesCategory && (!needle || haystack.includes(needle));
    });
  }, [categories, category, lang, query, rows]);

  return (
    <div className="spreadsheet-index">
      <div className="index-toolbar">
        <label><Search aria-hidden="true" /><span className="sr-only">{labels.search}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.search} /></label>
        <p>{labels.summary}</p>
      </div>
      <div className="index-filters" aria-label={labels.category}>
        <button type="button" className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>{labels.all}</button>
        {availableCategories.map((key) => <button type="button" className={category === key ? "active" : ""} onClick={() => setCategory(key)} key={key}>{categories[key]}</button>)}
      </div>
      <div className="index-table-wrap">
        <table className="index-table">
          <thead><tr><th>{labels.item}</th><th>{labels.category}</th><th>{labels.price}</th><th>{labels.weight}</th><th>{labels.checked}</th><th>{labels.status}</th><th>{labels.route}</th></tr></thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.code}>
                <th scope="row">{row.code}</th><td>{categories[row.category]}</td><td>{row.price}</td><td>{row.weight}</td><td>1 Sep 2026</td><td><span className="route-status">{labels.current}</span></td><td><a href={row.href} target="_blank" rel="noopener">{labels.route}<ArrowUpRight aria-hidden="true" /></a></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length && <p className="index-empty">{labels.empty}</p>}
      </div>
    </div>
  );
}
