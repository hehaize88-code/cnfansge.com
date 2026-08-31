import type { ArticleSlug } from "./article-data";
import type { Lang } from "./site-data";

export type SourceReference = {
  publisher: string;
  title: string;
  reference: string;
  checked: string;
  scope: Record<Lang, string>;
};

const sources = {
  service: {
    publisher: "Kakobuy",
    title: "Service introduction",
    reference: "/index/information?information_id=3 · information_id 3",
    checked: "2026-08-31",
    scope: {
      en: "Shopping-agent role, warehouse receipt, inspection photos, consolidation and advertised 100-day storage.",
      de: "Shopping-Agent, Lagereingang, Prüffotos, Bündelung und beworbene 100 Tage Lagerung.",
      es: "Agente de compra, recepción, fotos de inspección, consolidación y 100 días anunciados.",
      fr: "Agent d’achat, réception, photos d’inspection, regroupement et 100 jours annoncés.",
      it: "Agente d’acquisto, ricezione, foto di controllo, consolidamento e 100 giorni pubblicizzati.",
    },
  },
  costs: {
    publisher: "Kakobuy",
    title: "Costs and optional services help",
    reference: "/service/help/question?id=63 · help question 63",
    checked: "2026-08-31",
    scope: {
      en: "Product, freight, packaging and optional-service cost framework; live checkout remains final.",
      de: "Kostenrahmen für Produkt, Fracht, Verpackung und Zusatzleistungen; Live-Checkout bleibt maßgeblich.",
      es: "Marco de producto, transporte, embalaje y servicios opcionales; prevalece el pago actual.",
      fr: "Cadre produit, fret, emballage et services optionnels ; le paiement en direct prévaut.",
      it: "Quadro di prodotto, trasporto, imballaggio e servizi opzionali; prevale il checkout attuale.",
    },
  },
  returns: {
    publisher: "Kakobuy",
    title: "5-Day Return/Exchange Guarantee",
    reference: "/service/help/question?id=51 · help question 51",
    checked: "2026-08-31",
    scope: {
      en: "Conditional return/exchange process, evidence and domestic-freight responsibility.",
      de: "Bedingter Rückgabe-/Umtauschablauf, Belege und Verantwortung für Inlandsfracht.",
      es: "Proceso condicional de devolución/cambio, pruebas y responsabilidad del transporte nacional.",
      fr: "Processus conditionnel de retour/échange, preuves et responsabilité du fret national.",
      it: "Procedura condizionata di reso/cambio, prove e responsabilità del trasporto nazionale.",
    },
  },
  estimate: {
    publisher: "Kakobuy",
    title: "Shipping fee estimation tool",
    reference: "/tools/estimate",
    checked: "2026-08-31",
    scope: {
      en: "Live destination, weight, dimensions and line comparison; static examples are not quotes.",
      de: "Live-Vergleich nach Ziel, Gewicht, Maßen und Linie; statische Beispiele sind keine Angebote.",
      es: "Comparación por destino, peso, dimensiones y línea; los ejemplos no son presupuestos.",
      fr: "Comparaison selon destination, poids, dimensions et ligne ; les exemples ne sont pas des devis.",
      it: "Confronto per destinazione, peso, dimensioni e linea; gli esempi non sono preventivi.",
    },
  },
  trustpilot: {
    publisher: "Trustpilot",
    title: "Kakobuy customer reviews",
    reference: "/review/www.kakobuy.com",
    checked: "2026-08-31",
    scope: {
      en: "276 total reviews displayed; Trustpilot’s AI summary stated that it evaluated 211 recent reviews.",
      de: "276 Gesamtbewertungen angezeigt; die Trustpilot-KI-Zusammenfassung wertete laut Seite 211 aktuelle Bewertungen aus.",
      es: "276 reseñas totales visibles; el resumen de IA de Trustpilot indicó que evaluó 211 reseñas recientes.",
      fr: "276 avis au total affichés ; le résumé IA de Trustpilot indiquait en analyser 211 récents.",
      it: "276 recensioni totali visibili; il riepilogo IA di Trustpilot dichiarava di valutarne 211 recenti.",
    },
  },
  reddit: {
    publisher: "Reddit",
    title: "Public Kakobuy community discussions",
    reference: "/r/kakobuy/",
    checked: "2026-08-31",
    scope: {
      en: "Individual public experiences used only to identify questions and evidence gaps, not platform-wide outcomes.",
      de: "Öffentliche Einzelerfahrungen nur für Fragen und Beleglücken, nicht als allgemeines Ergebnis.",
      es: "Experiencias públicas individuales solo para detectar preguntas, no resultados generales.",
      fr: "Témoignages publics individuels utilisés pour les questions, pas comme résultat général.",
      it: "Esperienze pubbliche individuali usate per individuare domande, non risultati generali.",
    },
  },
} satisfies Record<string, SourceReference>;

const sourceKeysByArticle: Record<ArticleSlug, (keyof typeof sources)[]> = {
  "how-to-use-kakobuy": ["service", "returns", "estimate"],
  "qc-photo-checklist": ["service", "returns"],
  "actual-vs-volumetric-weight": ["estimate", "costs"],
  "kakobuy-fees-explained": ["costs", "estimate"],
  "kakobuy-warehouse-storage-guide": ["service", "returns"],
  "kakobuy-return-exchange-guide": ["returns", "service"],
  "kakobuy-review-2026": ["service", "costs", "returns", "estimate", "trustpilot", "reddit"],
};

export const sourceHeadings: Record<Lang, [string, string]> = {
  en: ["SOURCES REVIEWED", "What was checked for this article"],
  de: ["GEPRÜFTE QUELLEN", "Was für diesen Artikel geprüft wurde"],
  es: ["FUENTES REVISADAS", "Qué se comprobó para este artículo"],
  fr: ["SOURCES CONSULTÉES", "Ce qui a été vérifié pour cet article"],
  it: ["FONTI CONSULTATE", "Cosa è stato verificato per questo articolo"],
};

export function sourcesForArticle(slug: ArticleSlug) {
  return sourceKeysByArticle[slug].map((key) => sources[key]);
}

