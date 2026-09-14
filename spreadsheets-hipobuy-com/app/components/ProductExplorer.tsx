"use client";

import { useMemo, useState } from "react";

const products = [
  { name: "Hoodie-60", category: "Hoodies", price: "¥118", source: "CNY", checked: "14 Sep", image: "https://cnfanssp.com/uploads/allimg/20260429/1-2604291534502K.jpg", url: "https://cnfanssp.com/AllProducts/6127.html" },
  { name: "Hoodie-59", category: "Hoodies", price: "¥98", source: "CNY", checked: "14 Sep", image: "https://cnfanssp.com/uploads/allimg/20260429/1-260429153450138.jpg", url: "https://cnfanssp.com/AllProducts/6126.html" },
  { name: "Jersey-60", category: "Jerseys", price: "¥99", source: "CNY", checked: "14 Sep", image: "https://cnfanssp.com/uploads/allimg/20260430/1-26043021142K50.jpg", url: "https://cnfanssp.com/AllProducts/6667.html" },
  { name: "Jersey-59", category: "Jerseys", price: "¥99", source: "CNY", checked: "14 Sep", image: "https://cnfanssp.com/uploads/allimg/20260430/1-260430211425539.jpg", url: "https://cnfanssp.com/AllProducts/6666.html" },
  { name: "Jersey-58", category: "Jerseys", price: "¥99", source: "CNY", checked: "14 Sep", image: "https://cnfanssp.com/uploads/allimg/20260430/1-260430211423422.jpg", url: "https://cnfanssp.com/AllProducts/6665.html" },
];

export default function ProductExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [query, category]);

  return (
    <section className="explorer wrap" id="finds">
      <div className="sectionHead">
        <div><span className="kicker">CHECKED PRODUCT ROWS</span><h2>Start with a live listing</h2></div>
        <p>Each card opens the matching product page on your main index. USD values are references, not guaranteed checkout prices.</p>
      </div>
      <div className="filterBar">
        <label><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Filter these checked rows" /></label>
        <div>{["All", "Hoodies", "Jerseys"].map(x => <button className={category === x ? "active" : ""} onClick={() => { setCategory(x); (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "category_filter", { category: x, page_path: window.location.pathname }); }} key={x}>{x}</button>)}</div>
        <span className="resultCount"><b>{filtered.length}</b> <span>results</span></span>
      </div>
      <div className="productGrid">
        {filtered.map(p => (
          <article className="productCard" key={p.url}>
            <a href={p.url} target="_blank" rel="noreferrer" className="productImage">
              <img src={p.image} alt={p.name} width={600} height={600} loading="lazy" decoding="async" />
              <span>LINK CHECKED</span>
            </a>
            <div className="productMeta"><span>{p.category}</span><small><span>Checked</span> <span>{p.checked}</span></small></div>
            <h3>{p.name}</h3>
            <div className="productBottom"><div><b>{p.price}</b><small>{p.source} <span>observed</span></small></div><a href={p.url} target="_blank" rel="noreferrer" aria-label={p.name}>↗</a></div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="emptyState"><b>No checked rows match yet.</b><span>Search the complete main index instead.</span><a href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">Open all products ↗</a></div>}
      <div className="explorerFooter"><span>Need more choices?</span><a href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">Browse the complete product index ↗</a></div>
    </section>
  );
}
