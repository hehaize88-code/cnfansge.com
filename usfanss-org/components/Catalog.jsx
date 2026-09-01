"use client";

import { useMemo, useState } from "react";
import { products } from "../lib/content";

export default function Catalog({ labels, limit }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const queryMatch = product.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
    return typeof limit === "number" ? result.slice(0, limit) : result;
  }, [category, query, limit]);

  return (
    <div className="catalog-shell">
      {!limit && (
        <div className="catalog-tools">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.filter}
            aria-label={labels.filter}
          />
          <div className="filter-row" aria-label={labels.categories}>
            {categories.map((item) => (
              <button
                type="button"
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
                key={item}
              >
                {item === "All" ? labels.all : (labels.categoryMap[item] || item)}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="product-grid">
        {filtered.map((product, index) => (
          <article className="product-card" key={product.href}>
            <a href={product.href} aria-label={`${labels.open}: ${product.name}`}>
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} — ${labels.imageAlt}`}
                  width="640"
                  height="640"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <span className="qc-pill">{labels.qc}</span>
              </div>
              <div className="product-copy">
                <span className="product-category">{labels.categoryMap[product.category] || product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-meta">
                  <strong>${product.usd}</strong>
                  <span>{labels.approx}</span>
                  <b aria-hidden="true">↗</b>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
      {!filtered.length && <p className="empty-state">{labels.empty}</p>}
    </div>
  );
}
