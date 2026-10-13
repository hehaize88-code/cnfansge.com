"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function trackEvent(name: string, params: Record<string, string | number | boolean>) {
  const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  analyticsWindow.dataLayer ??= [];
  const enqueue = analyticsWindow.gtag ?? ((...args: unknown[]) => analyticsWindow.dataLayer!.push(args));
  enqueue("event", name, { ...params, transport_type: "beacon" });
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  useEffect(() => {
    const language = pathname.match(/^\/(de|es|fr|it)(?:\/|$)/)?.[1] ?? "en";
    const articleSlug = pathname.match(/\/articles\/([^/]+)\/?$/)?.[1];
    if (articleSlug) trackEvent("article_view", { article_slug: articleSlug, content_language: language });
    const clicked = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link) return;
      const destination = new URL(link.href, location.href);
      if (destination.origin === location.origin) return;
      const name = link.classList.contains("product-card") ? "product_outbound" : link.classList.contains("category-card") ? "category_outbound" : "resource_outbound";
      trackEvent(name, { content_language: language, link_domain: destination.hostname, link_path: destination.pathname });
    };
    document.addEventListener("click", clicked);
    let observer: IntersectionObserver | undefined;
    const end = document.querySelector("[data-article-end]");
    if (articleSlug && end && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          trackEvent("article_end_reached", { article_slug: articleSlug, content_language: language });
          observer?.disconnect();
        }
      });
      observer.observe(end);
    }
    return () => { document.removeEventListener("click", clicked); observer?.disconnect(); };
  }, [pathname]);
  return null;
}
