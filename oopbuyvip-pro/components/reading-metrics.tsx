"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

// Reuse the existing GA tag and consent settings; never initialize a second tracker.
export function ReadingMetrics({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  useEffect(() => {
    const articleSlug = pathname.match(/\/articles\/([^/]+)\/?$/)?.[1];
    const send = (event: string, details: Record<string, string> = {}) => {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", event, { page_language: locale, ...(articleSlug ? { article_slug: articleSlug } : {}), ...details });
    };
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      if (link.dataset.languageLink) send("language_switch", { target_language: link.dataset.languageLink });
      else if (url.origin === window.location.origin && url.hash && link.closest(".mobile-toc, .article-layout aside")) send("article_toc_click", { section_id: url.hash.slice(1) });
      else if (link.hasAttribute("data-related-article")) send("article_related_click", { destination_path: url.pathname });
      else if (url.hostname === "cnfansge.com") send("catalog_click", { destination_path: url.pathname });
    };
    const submit = (event: Event) => {
      if (event.target instanceof HTMLFormElement && new URL(event.target.action).hostname === "cnfansge.com") send("catalog_search"); // No query text.
    };
    document.addEventListener("click", click);
    document.addEventListener("submit", submit);
    const end = document.querySelector("[data-article-end]");
    let observer: IntersectionObserver | undefined;
    if (end && articleSlug) {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { send("article_end_reached"); observer?.disconnect(); }
      }, { threshold: 0.5 });
      observer.observe(end);
    }
    return () => {
      document.removeEventListener("click", click);
      document.removeEventListener("submit", submit);
      observer?.disconnect();
    };
  }, [locale, pathname]);
  return null;
}
