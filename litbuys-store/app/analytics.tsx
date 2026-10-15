"use client";

import { useEffect } from "react";
import type { FormEvent } from "react";
import { CATALOG_ORIGIN, type Lang } from "./i18n";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function recordCatalogEvent(event: string, values: Record<string, string | number>) {
  window.gtag?.("event", event, {
    ...values,
    page_path: window.location.pathname,
    language: document.documentElement.lang,
    transport_type: "beacon",
  });
}

export function OutboundAnalytics() {
  useEffect(() => {
    function record(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target) return;
      const url = new URL(target.href, window.location.href);
      if (url.origin !== CATALOG_ORIGIN) return;
      const id = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/)?.[1];
      recordCatalogEvent(id ? "catalog_product_click" : "catalog_category_click", {
        ...(id ? { product_id: id } : {}),
        link_url: url.origin + url.pathname,
        entry_point: target.dataset.entryPoint ?? target.closest<HTMLElement>("[data-entry-point]")?.dataset.entryPoint ?? "content",
      });
    }
    document.addEventListener("click", record, true);
    return () => document.removeEventListener("click", record, true);
  }, []);
  return null;
}

export function CatalogSearchForm({ lang, label, placeholder, button, hero = false }: {
  lang: Lang; label: string; placeholder: string; button: string; hero?: boolean;
}) {
  const id = hero ? "hero-search" : "site-search";
  function search(event: FormEvent<HTMLFormElement>) {
    const input = event.currentTarget.elements.namedItem("keywords") as HTMLInputElement;
    input.value = input.value.trim();
    if (!input.value) { event.preventDefault(); input.focus(); return; }
    // Keep native GET navigation working even when analytics is unavailable.
    // Do not send raw visitor-entered text or URL query parameters to Analytics.
    recordCatalogEvent("catalog_search", {
      entry_point: hero ? "homepage_search" : "header_search",
      query_length: input.value.length,
      destination_domain: new URL(CATALOG_ORIGIN).hostname,
      language: lang,
    });
  }
  return <form className={hero ? "hero-search" : "site-search"} action={`${CATALOG_ORIGIN}/search.html`} method="get" role="search" onSubmit={search}>
    <label className="sr-only" htmlFor={id}>{label}</label>
    <input id={id} type="search" name="keywords" placeholder={placeholder} required maxLength={200} />
    <input type="hidden" name="channelid" value="2" />
    <button type="submit" aria-label={button}>{hero ? button : "↗"}</button>
  </form>;
}
