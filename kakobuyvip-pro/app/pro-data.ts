import decisionCopy from "./content/decisions.json";
import type { Locale, PageKey } from "./site-data";

export type DecisionKey = Extract<
  PageKey,
  | "calculator"
  | "shippingLines"
  | "packing"
  | "warehouse"
  | "returns"
  | "qcTroubleshooting"
>;

type LocalDecision = {
  title: string;
  description: string;
  steps: Array<[string, string]>;
  caution: string;
  source: string;
};

export const decisionKeys: DecisionKey[] = [
  "calculator",
  "shippingLines",
  "packing",
  "warehouse",
  "returns",
  "qcTroubleshooting",
];

export const proNav: Record<Locale, string[]> = {
  en: ["Calculator", "Lines", "Packing", "Warehouse", "Returns", "QC Help", "Articles"],
  de: ["Rechner", "Linien", "Verpackung", "Lager", "Rückgaben", "QC-Hilfe", "Artikel"],
  es: ["Calculadora", "Líneas", "Embalaje", "Almacén", "Devoluciones", "Ayuda QC", "Artículos"],
  fr: ["Calculateur", "Lignes", "Emballage", "Entrepôt", "Retours", "Aide QC", "Articles"],
  it: ["Calcolatore", "Linee", "Imballaggio", "Magazzino", "Resi", "Aiuto QC", "Articoli"],
};

export const proHome: Record<
  Locale,
  {
    badge: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    section: string;
    sectionBody: string;
    liveNote: string;
  }
> = {
  en: {
    badge: "Independent Kakobuy guide · updated 15 Oct 2026",
    title: "Kakobuy shipping, storage and QC guides.",
    body: "A Kakobuy shipping calculator, warehouse-status and returns guide for comparing packed weight, route rules, packaging choices and after-sales options before international dispatch.",
    primary: "Calculate parcel weight",
    secondary: "Browse the source catalog",
    section: "Six decisions before parcel payment",
    sectionBody: "Each guide isolates one decision so changing routes, dimensions and seller rules are easier to verify.",
    liveNote: "Platform rules and prices can change; verify the live page before payment.",
  },
  de: {
    badge: "Unabhängiger Kakobuy-Leitfaden · 15. Okt. 2026",
    title: "Kakobuy: Versand, Lagerung und QC.",
    body: "Ein Kakobuy-Leitfaden zu Versandkalkulation, Lagerstatus und Rückgaben: Packgewicht, Linienregeln, Verpackung und After-Sales vor dem internationalen Versand vergleichen.",
    primary: "Versandkalkulator öffnen",
    secondary: "Quellkatalog öffnen",
    section: "Sechs Entscheidungen vor der Paketzahlung",
    sectionBody: "Jeder Leitfaden trennt eine Entscheidung, damit Linien, Maße und Verkäuferregeln aktuell geprüft werden können.",
    liveNote: "Plattformregeln und Preise können sich ändern; prüfen Sie die Live-Seite vor der Zahlung.",
  },
  es: {
    badge: "Guía independiente Kakobuy · 15 oct 2026",
    title: "Kakobuy: envío, almacén y control QC.",
    body: "Guía de calculadora de envío, estado de almacén y devoluciones de Kakobuy para comparar peso embalado, reglas de ruta, embalaje y posventa antes del envío internacional.",
    primary: "Calcular peso del paquete",
    secondary: "Abrir catálogo fuente",
    section: "Seis decisiones antes de pagar el paquete",
    sectionBody: "Cada guía separa una decisión para comprobar mejor rutas, medidas y reglas del vendedor.",
    liveNote: "Las reglas y los precios pueden cambiar; comprueba la página en vivo antes de pagar.",
  },
  fr: {
    badge: "Guide indépendant Kakobuy · 15 oct. 2026",
    title: "Kakobuy : livraison, stockage et QC.",
    body: "Guide Kakobuy du calcul d’expédition, du statut d’entrepôt et des retours pour comparer poids emballé, règles de ligne, emballage et après-vente avant l’envoi international.",
    primary: "Calculer le poids du colis",
    secondary: "Ouvrir le catalogue source",
    section: "Six décisions avant le paiement du colis",
    sectionBody: "Chaque guide isole une décision afin de vérifier plus facilement lignes, dimensions et règles vendeur.",
    liveNote: "Les règles et prix peuvent changer ; vérifiez la page en direct avant le paiement.",
  },
  it: {
    badge: "Guida indipendente Kakobuy · 15 ott 2026",
    title: "Kakobuy: spedizione, deposito e QC.",
    body: "Guida Kakobuy a calcolo spedizione, stato magazzino e resi per confrontare peso imballato, regole di linea, confezione e assistenza prima dell’invio internazionale.",
    primary: "Calcola il peso del pacco",
    secondary: "Apri il catalogo fonte",
    section: "Sei decisioni prima del pagamento del pacco",
    sectionBody: "Ogni guida separa una decisione per verificare meglio linee, misure e regole del venditore.",
    liveNote: "Regole e prezzi possono cambiare; controlla la pagina live prima del pagamento.",
  },
};

export const decisions = decisionCopy as Record<Locale, Record<DecisionKey, LocalDecision>>;
