"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

/** Aggregate navigation events only; never send searches, order IDs or addresses. */
export function InteractionTracking() {
  useEffect(() => {
    const track = (name: string, values: Record<string, string>) => {
      const analytics = window as AnalyticsWindow;
      const args = ["event", name, {
        page_language: location.pathname.split("/")[1] || "en",
        source_path: location.pathname,
        transport_type: "beacon",
        ...values,
      }];
      if (analytics.gtag) analytics.gtag(...args);
      else {
        analytics.dataLayer ??= [];
        // gtag's queue uses Arguments objects, not arrays.
        (function (..._args: unknown[]) { analytics.dataLayer!.push(arguments); })(...args);
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const destination = new URL(link.href, location.href);
      if (destination.hostname === "cnfansge.com") {
        track("product_index_click", { destination_path: destination.pathname,
          link_placement: link.closest(".product-grid") ? "product_grid" : link.closest(".category-grid") ? "category_grid" : "content" });
      } else if (destination.origin === location.origin && /\/articles\/[^/]+$/.test(destination.pathname)) {
        track("article_open", { article_path: destination.pathname });
      }
    };
    const onSubmit = (event: SubmitEvent) => {
      if (event.target instanceof HTMLFormElement && event.target.matches(".search-box")) {
        track("product_search_submit", { link_placement: event.target.closest("aside") ? "article_sidebar" : "page" });
      }
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
