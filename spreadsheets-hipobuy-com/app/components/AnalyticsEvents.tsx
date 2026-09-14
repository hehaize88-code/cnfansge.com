"use client";

import { useEffect } from "react";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function send(eventName: string, params: Record<string, string | number | boolean>) {
  (window as GtagWindow).gtag?.("event", eventName, params);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      const label = anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) || "unlabelled";

      if (url.hostname === "cnfansge.com") {
        send("main_index_click", { link_url: url.href, link_text: label, page_path: window.location.pathname });
      } else if (url.origin === window.location.origin && url.pathname.startsWith("/articles/")) {
        send("article_click", { article_path: url.pathname, link_text: label, page_path: window.location.pathname });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null;
      if (!form?.matches("form.searchBox")) return;
      const query = new FormData(form).get("keywords")?.toString().trim() || "";
      send("main_index_search", { query_length: query.length, page_path: window.location.pathname });
    };

    const onLanguage = (event: Event) => {
      send("language_change", { language: String((event as CustomEvent).detail || "unknown"), page_path: window.location.pathname });
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    window.addEventListener("hipobuy-language-change", onLanguage);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      window.removeEventListener("hipobuy-language-change", onLanguage);
    };
  }, []);

  return null;
}
