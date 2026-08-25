"use client";

import { useMemo, useState } from "react";

const products = [
  { name: "Sweatshirts-1", category: "Hoodies", price: "$23.47", source: "¥169", checked: "Today", image: "https://cnfansge.com/uploads/allimg/20260506/1-260506103535537.webp", url: "https://cnfansge.com/AllProducts/6681.html" },
  { name: "Pants/Shorts-1", category: "Pants", price: "$26.25", source: "¥189", checked: "Today", image: "https://cnfansge.com/uploads/allimg/20260506/1-26050610331M37.webp", url: "https://cnfansge.com/AllProducts/6680.html" },
  { name: "Jersey-55", category: "Jerseys", price: "$18.19", source: "¥131", checked: "Today", image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg", url: "https://cnfansge.com/AllProducts/6679.html" },
  { name: "Jersey-54", category: "Jerseys", price: "$18.19", source: "¥131", checked: "Today", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422225000a6.jpg", url: "https://cnfansge.com/AllProducts/6678.html" },
  { name: "Jersey-53", category: "Jerseys", price: "$18.19", source: "¥131", checked: "Today", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959349.jpg", url: "https://cnfansge.com/AllProducts/6677.html" },
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
        <div>{["All", "Hoodies", "Pants", "Jerseys"].map(x => <button className={category === x ? "active" : ""} onClick={() => setCategory(x)} key={x}>{x}</button>)}</div>
        <span className="resultCount"><b>{filtered.length}</b> <span>results</span></span>
      </div>
      <div className="productGrid">
        {filtered.map((p, i) => (
          <article className="productCard" key={p.url}>
            <a href={p.url} target="_blank" rel="noreferrer" className="productImage">
              <img src={p.image} alt={p.name} loading={i > 1 ? "lazy" : "eager"} />
              <span>LINK CHECKED</span>
            </a>
            <div className="productMeta"><span>{p.category}</span><small><span>Checked</span> <span>{p.checked}</span></small></div>
            <h3>{p.name}</h3>
            <div className="productBottom"><div><b>{p.price}</b><small>{p.source} <span>observed</span></small></div><a href={p.url} target="_blank" rel="noreferrer" aria-label={p.name}>↗</a></div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="emptyState"><b>No checked rows match yet.</b><span>Search the complete main index instead.</span><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">Open all products ↗</a></div>}
      <div className="explorerFooter"><span>Need more choices?</span><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">Browse the complete product index ↗</a></div>
    </section>
  );
}
