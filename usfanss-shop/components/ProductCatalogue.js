"use client";

import { useState } from "react";

export default function ProductCatalogue({ products, labels, ui, currentPrice, lang }) {
  const [category, setCategory] = useState("all");
  const keys = [...new Set(products.map(product => product.categoryKey))];
  const visible = category === "all" ? products : products.filter(product => product.categoryKey === category);
  function filter(key) {
    setCategory(key);
    if (typeof window.gtag === "function") window.gtag("event", "product_filter", { product_category: key, page_language: lang, source_path: window.location.pathname });
  }
  return <div className="product-catalogue">
    <div className="product-filters" role="group" aria-label={ui.filter}>{["all", ...keys].map(key => <button key={key} type="button" aria-pressed={category === key} onClick={() => filter(key)}>{key === "all" ? ui.all : labels[key]}</button>)}</div>
    <p className="catalogue-count" aria-live="polite">{visible.length} {ui.results}</p>
    <div className="product-grid">{visible.map(product => <article className="product-card" key={product.id}>
      <a href={product.href} className="product-image" target="_blank" rel="noopener noreferrer" data-placement="catalogue" data-category={product.categoryKey}><img src={product.image} alt={product.title} width="640" height="640" loading="lazy" /><span>{ui.reference}</span></a>
      <div className="product-info"><p>{labels[product.categoryKey]} · ID {product.id}</p><h3><a href={product.href} target="_blank" rel="noopener noreferrer" data-placement="catalogue" data-category={product.categoryKey}>{product.title}</a></h3><div className="product-bottom"><div><small>{currentPrice}</small><strong>{product.price}</strong></div><a href={product.href} target="_blank" rel="noopener noreferrer" data-placement="catalogue" data-category={product.categoryKey} aria-label={`${ui.details}: ${product.title}`}><span aria-hidden="true">↗</span></a></div><a href={product.href} className="product-detail-link" target="_blank" rel="noopener noreferrer" data-placement="catalogue" data-category={product.categoryKey}>{ui.details} ↗</a></div>
    </article>)}</div>
  </div>;
}
