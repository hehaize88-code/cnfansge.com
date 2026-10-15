import { pageResearch } from "./page-research-data";
import deEs from "./content-oct/research-de-es.json";
import frIt from "./content-oct/research-fr-it.json";
import type { Lang } from "./i18n";

export const localizedResearch: Record<Lang, typeof pageResearch> = {
  en: pageResearch,
  ...deEs,
  ...frIt,
};
