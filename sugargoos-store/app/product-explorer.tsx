"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import type { Language, Product } from "./site-data";
import { categoryNames, localizedProductNote, utilityCopy } from "./site-utility-copy";
import { filterProducts } from "./planning-logic";

type Props = {
  lang: Language;
  products: Product[];
  openLabel: string;
  estimatedLabel: string;
  priceNote: string;
  allLabel?: string;
  compact?: boolean;
};

export function ProductExplorer({
  lang,
  products,
  openLabel,
  estimatedLabel,
  priceNote,
  allLabel = "All",
  compact = false,
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [under20, setUnder20] = useState(false);
  const [sort, setSort] = useState("featured");
  const t = utilityCopy[lang];
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(products.map((product) => product.category)))],
    [products],
  );
  const filtered = useMemo(() => filterProducts(products, query, category, under20, sort, categoryNames[lang]), [category, products, query, under20, sort, lang]);

  return (
    <div className="explorer-shell">
      {!compact && (
        <div className="explorer-controls" id="product-filters">
          <label className="filter-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">{t.search}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.placeholder}
            />
          </label>
          <div className="filter-row" aria-label={t.category}>
            <span className="filter-icon"><SlidersHorizontal size={16} aria-hidden="true" /></span>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "filter-pill active" : "filter-pill"}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item === "all" ? allLabel : categoryNames[lang][item]}
              </button>
            ))}
          </div>
          <div className="budget-controls">
            <button type="button" className={under20 ? "filter-pill active" : "filter-pill"} aria-pressed={under20} onClick={() => setUnder20(!under20)}>{t.budget}</button>
            <label><span className="sr-only">{t.sort}</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">{t.featured}</option><option value="low">{t.low}</option><option value="high">{t.high}</option></select></label>
            <span role="status" aria-live="polite">{filtered.length} {t.results}</span>
          </div>
          <p className="catalog-evidence-note">{t.snapshot}</p>
        </div>
      )}

      <div className={compact ? "product-grid compact" : "product-grid"}>
        {filtered.map((product) => (
          <article className="product-card" key={product.id}>
            <a href={product.href} target="_blank" rel="noopener noreferrer" className="product-image-wrap" aria-label={`${openLabel}: ${product.name}`}>
              <img
                src={product.image}
                alt={product.name}
                width="750"
                height="750"
                loading="lazy"
                decoding="async"
                className="product-image"
              />
              <span className="route-status">{t.listing}</span>
            </a>
            <div className="product-card-body">
              <p className="product-category">{categoryNames[lang][product.category]}</p>
              <h3><a href={product.href} target="_blank" rel="noopener noreferrer">{product.name}</a></h3>
              <p className="product-note">{localizedProductNote(lang, product)}</p>
              <div className="product-card-footer">
                <div>
                  <span className="price-label">{estimatedLabel}</span>
                  <strong>${product.priceUsd.toFixed(2)}</strong>
                  <small>¥{product.priceCny}</small>
                </div>
                <a className="round-link" href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`${openLabel}: ${product.name}`}>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!filtered.length && (
        <div className="empty-state">
          <Search size={24} aria-hidden="true" />
          <p>{t.empty}</p>
        </div>
      )}
      {!compact && <p className="price-disclosure">{priceNote}</p>}
    </div>
  );
}
