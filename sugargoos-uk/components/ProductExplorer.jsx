"use client";

import { useMemo, useState } from "react";

export default function ProductExplorer({ items, categories, copy, compact = false, initialCategory = "all" }) {
  const [active, setActive] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = items.filter((item) =>
      (active === "all" || item.category === active) &&
      (!normalized || `${item.title} ${item.tags.join(" ")}`.toLowerCase().includes(normalized))
    );
    return compact ? filtered.slice(0, 8) : filtered;
  }, [active, compact, items, query]);

  return (
    <div className="explorer">
      {!compact && (
        <div className="filter-bar" aria-label="Product filters">
          <div className="filter-tabs">
            <button className={active === "all" ? "active" : ""} onClick={() => setActive("all")}>{copy.all}</button>
            {categories.map((category) => (
              <button key={category.slug} className={active === category.slug ? "active" : ""} onClick={() => setActive(category.slug)}>
                {category.label}
              </button>
            ))}
          </div>
          <label className="mini-search">
            <span className="sr-only">Filter products</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} />
          </label>
        </div>
      )}
      <div className={`product-grid ${compact ? "compact" : ""}`}>
        {visible.map((item, index) => (
          <article className="product-card" key={item.id}>
            <a href={item.source} target="_blank" rel="nofollow sponsored noopener" className="product-image-link" aria-label={`${copy.openListing}: ${item.title}`}>
              <img src={item.image} alt={item.title} width="720" height="720" loading={index < 4 ? "eager" : "lazy"} />
              <span className="route-pill">UK ROUTE / {item.id}</span>
            </a>
            <div className="product-card-body">
              <div className="product-tags">{item.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <h3>{item.title}</h3>
              <div className="product-bottom">
                <p><small>{copy.approx}</small> ${item.usd.toFixed(2)}</p>
                <a href={item.source} target="_blank" rel="nofollow sponsored noopener" aria-label={`${copy.openListing}: ${item.title}`}>↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!visible.length && <p className="empty-state">{copy.noResults}</p>}
    </div>
  );
}
