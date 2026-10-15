"use client";

import { useState } from "react";

export default function SearchBox({ placeholder, button, compact = false }) {
  const [query, setQuery] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!query.trim()) return;
    if (typeof window.gtag === 'function') window.gtag('event', 'product_search', {
      query_length: query.trim().length, page_path: window.location.pathname,
      language: document.documentElement.lang, transport_type: 'beacon'
    });
    const keywords = encodeURIComponent(query.trim());
    window.location.href = `https://cnfansge.com/search.html?keywords=${keywords}&channelid=2`;
  }

  return (
    <form className={`search-box ${compact ? "compact" : ""}`} action="https://cnfansge.com/search.html" method="get" onSubmit={submit}>
      <input type="hidden" name="channelid" value="2" />
      <input
        name="keywords"
        type="search"
        required
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="submit">{button}</button>
    </form>
  );
}
