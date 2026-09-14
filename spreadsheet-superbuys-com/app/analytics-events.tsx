"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const track = (name: string, parameters: Record<string, string>) => {
      window.gtag?.("event", name, parameters);
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (link.dataset.track) {
        track(link.dataset.track, { link_url: url.href, link_text: link.textContent?.trim().slice(0, 100) || "" });
      } else if (url.hostname === "cnfansge.com") {
        track("catalog_outbound_click", { link_url: url.href, link_text: link.textContent?.trim().slice(0, 100) || "" });
      } else if (url.hostname === window.location.hostname && url.pathname.startsWith("/articles/")) {
        track("article_click", { link_url: url.href, link_text: link.textContent?.trim().slice(0, 100) || "" });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (!form.matches(".search-box")) return;
      const query = new FormData(form).get("keywords")?.toString().trim() || "";
      track("product_index_search", { search_term: query });
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
