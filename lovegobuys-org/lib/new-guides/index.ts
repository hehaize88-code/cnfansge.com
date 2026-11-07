import type { Lang } from "../site-data";
import type { ResearchArticle } from "../articles";
import { en } from "./en";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";

export const newGuideSlugs = [
  "lovegobuy-size-guide-measurements",
  "lovegobuy-budget-finds-total-cost",
  "lovegobuy-shipping-time-order-to-delivery",
] as const;

const basis: Record<Lang, string> = {
  en: "Editorial guide updated 7 November 2026. The official shopping workflow and fee guide are linked below; measurement methods and sample calculations are editorial examples. No current tariff, delivery guarantee or test purchase is claimed.",
  de: "Redaktioneller Leitfaden vom 7. November 2026. Offizieller Kaufablauf und Gebührenübersicht sind unten verlinkt; Messmethoden und Beispielrechnungen sind redaktionelle Hilfen. Keine aktuellen Tarife, Liefergarantien oder Testkäufe werden behauptet.",
  es: "Guía editorial actualizada el 7 de noviembre de 2026. Enlaces oficiales al proceso y los costes al final; métodos de medición y cálculos son ejemplos editoriales. No se afirman tarifas actuales, entregas garantizadas ni compras de prueba.",
  fr: "Guide rédactionnel actualisé le 7 novembre 2026. Parcours d’achat et frais officiels sont reliés ci-dessous ; mesures et calculs sont des exemples pédagogiques. Aucun tarif actuel, délai garanti ou achat test n’est revendiqué.",
  it: "Guida editoriale aggiornata il 7 novembre 2026. Processo e costi ufficiali sono collegati sotto; misure e calcoli sono esempi redazionali. Non si dichiarano tariffe attuali, consegne garantite o acquisti di prova.",
};
export function novemberGuides(lang: Lang): ResearchArticle[] {
  return ({ en, de, es, fr, it })[lang].map((draft, index) => ({
    ...draft, slug: newGuideSlugs[index], published: "2026-11-07", modified: "2026-11-07",
    readingTime: "7 min", sourceBasis: basis[lang],
  }));
}
