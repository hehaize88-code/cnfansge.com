import type { Lang } from "./site-data";
import type { LocalizedArticle } from "./localized-article-data";
import en from "./shipping-en.json";
import de from "./shipping-de.json";
import es from "./shipping-es.json";
import fr from "./shipping-fr.json";
import it from "./shipping-it.json";

export const shippingSlugs = ["kakobuy-shipping-calculator", "kakobuy-shipping-time-tracking", "kakobuy-parcel-consolidation-packing"] as const;
export type ShippingSlug = (typeof shippingSlugs)[number];
export const shippingArticles: Record<Lang, Record<ShippingSlug, LocalizedArticle>> = { en, de, es, fr, it };
export const shippingKeywords: Record<ShippingSlug, string> = {
  "kakobuy-shipping-calculator": "Kakobuy shipping calculator",
  "kakobuy-shipping-time-tracking": "Kakobuy shipping time",
  "kakobuy-parcel-consolidation-packing": "Kakobuy parcel consolidation",
};
