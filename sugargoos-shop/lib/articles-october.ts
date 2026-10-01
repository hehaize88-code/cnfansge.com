import type { Article } from "@/lib/articles";
import type { Locale } from "@/lib/site-data";
import english from "@/lib/editorial-20261001/en.json";
import german from "@/lib/editorial-20261001/de.json";
import spanish from "@/lib/editorial-20261001/es.json";
import french from "@/lib/editorial-20261001/fr.json";
import italian from "@/lib/editorial-20261001/it.json";

export const octoberSlugs = [
  "sugargoo-shipping-calculator-estimate-check",
  "sugargoo-rehearsal-shipping-results-check",
  "sugargoo-combine-orders-item-control",
  "sugargoo-extra-qc-photo-request-brief",
  "sugargoo-wrong-size-color-quantity-warehouse",
  "sugargoo-tracking-not-updating-diagnostics",
  "sugargoo-support-request-evidence-checklist",
  "sugargoo-first-order-checkpoints",
] as const;

export const octoberArticles: Record<Locale, Record<(typeof octoberSlugs)[number], Article>> = {
  en: english, de: german, es: spanish, fr: french, it: italian,
};
