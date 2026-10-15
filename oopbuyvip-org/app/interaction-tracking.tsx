"use client";
import { useEffect } from "react";

type TrackedWindow = Window & { gtag?: (...args: unknown[]) => void };
export function InteractionTracking() {
  useEffect(() => {
    const track = (event: string, element: HTMLElement) => {
      const lang = document.documentElement.lang;
      const href = element instanceof HTMLAnchorElement ? element.href : undefined;
      // Use the existing GA4 tag. No second tag, page view, or conversion is created.
      (window as TrackedWindow).gtag?.("event", event, { page_language: lang, item_id: element.dataset.item, category: element.dataset.category, link_url: href });
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("a[data-track],button[data-track]") : null;
      if (target?.dataset.track) track(target.dataset.track, target);
    };
    const onSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (form instanceof HTMLFormElement && form.dataset.track === "search_submit") {
        (window as TrackedWindow).gtag?.("event", "search_submit", { page_language: document.documentElement.lang, search_destination: new URL(form.action).hostname });
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    return () => { document.removeEventListener("click", onClick); document.removeEventListener("submit", onSubmit); };
  }, []);
  return null;
}
