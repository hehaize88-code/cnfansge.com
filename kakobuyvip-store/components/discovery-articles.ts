import type { Lang } from "./site-data";
import type { LocalizedArticle } from "./localized-article-data";
import en from "./discovery-en.json";
import de from "./discovery-de.json";
import es from "./discovery-es.json";
import fr from "./discovery-fr.json";
import it from "./discovery-it.json";

export const discoverySlugs = ["choose-kakobuy-spreadsheet", "kakobuy-qc-finder", "kakobuy-coupons"] as const;
export type DiscoverySlug = (typeof discoverySlugs)[number];
export const discoveryArticles: Record<Lang, Record<DiscoverySlug, LocalizedArticle>> = { en, de, es, fr, it };
export const discoveryKeywords: Record<DiscoverySlug, string> = {
  "choose-kakobuy-spreadsheet": "best Kakobuy spreadsheet",
  "kakobuy-qc-finder": "QC finder Kakobuy",
  "kakobuy-coupons": "Kakobuy coupons",
};
