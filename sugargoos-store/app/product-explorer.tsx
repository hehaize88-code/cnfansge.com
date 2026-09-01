"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Search, SlidersHorizontal } from "lucide-react";
import type { Product } from "./site-data";

type Props = {
  products: Product[];
  openLabel: string;
  estimatedLabel: string;
  priceNote: string;
  allLabel?: string;
  compact?: boolean;
};

export function ProductExplorer({
  products,
  openLabel,
  estimatedLabel,
  priceNote,
  allLabel = "All",
  compact = false,
}: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(products.map((product) => product.category)))],
    [products],
  );
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === "all" || product.category === category;
      const queryMatch = !needle || `${product.name} ${product.categoryLabel} ${product.note}`.toLowerCase().includes(needle);
      return categoryMatch && queryMatch;
    });
  }, [category, products, query]);

  return (
    <div className="explorer-shell">
      {!compact && (
        <div className="explorer-controls">
          <label className="filter-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search product routes</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search names, categories or notes…"
            />
          </label>
          <div className="filter-row" aria-label="Product categories">
            <span className="filter-icon"><SlidersHorizontal size={16} aria-hidden="true" /></span>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "filter-pill active" : "filter-pill"}
                onClick={() => setCategory(item)}
              >
                {item === "all" ? allLabel : products.find((product) => product.category === item)?.categoryLabel}
              </button>
            ))}
          </div>
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
              <span className="route-status"><CheckCircle2 size={13} aria-hidden="true" /> Live route</span>
            </a>
            <div className="product-card-body">
              <p className="product-category">{product.categoryLabel}</p>
              <h3><a href={product.href} target="_blank" rel="noopener noreferrer">{product.name}</a></h3>
              <p className="product-note">{product.note}</p>
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
          <p>No matching route in this shortlist. Try the full catalog search.</p>
        </div>
      )}
      {!compact && <p className="price-disclosure">{priceNote}</p>}
    </div>
  );
}
