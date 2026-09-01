"use client";

import Image from "next/image";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { copy, products, type Locale } from "@/lib/site";

export function ProductExplorer({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = copy[locale];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const productCategories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];
  const filtered = useMemo(() => products.filter((item) =>
    (category === "All" || item.category === category) && `${item.name} ${item.category} ${item.note}`.toLowerCase().includes(query.toLowerCase())
  ).slice(0, limit), [category, query, limit]);

  return (
    <div className="product-explorer">
      <div className="filter-bar">
        <div className="local-search"><Search size={17} aria-hidden /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} /></div>
        <div className="filter-scroll" aria-label="Product filters"><SlidersHorizontal size={17} aria-hidden />{productCategories.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>{item === "All" ? t.all : item}</button>)}</div>
      </div>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((item) => (
            <a className="product-card" href={item.href} target="_blank" rel="nofollow sponsored noopener" key={item.id}>
              <div className="product-image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div>
              <div className="product-copy">
                <span className="product-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p className="product-note">{item.note}</p>
                <div className="product-meta"><span><small>{t.approx}</small>{item.price}</span><span className="route-label">{t.route}<ArrowUpRight size={15} /></span></div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="no-results"><p>{t.noResults}</p><Button variant="outline" onClick={() => { setQuery(""); setCategory("All"); }}>{t.reset}</Button></div>
      )}
    </div>
  );
}
