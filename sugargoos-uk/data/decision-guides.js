import en from "./decision-guides-en.js";
import de from "./decision-guides-de.js";
import es from "./decision-guides-es.js";
import fr from "./decision-guides-fr.js";
import it from "./decision-guides-it.js";

export const decisionGuides = { en, de, es, fr, it };
export const updateLabels = { en: "Updated 15 Oct 2026", de: "Aktualisiert am 15. Okt. 2026", es: "Actualizado el 15 oct. 2026", fr: "Mis à jour le 15 oct. 2026", it: "Aggiornato il 15 ott. 2026" };
export const researchLabels = { en: "SOURCE REVIEW / 15.10.2026", de: "QUELLENPRÜFUNG / 15.10.2026", es: "REVISIÓN DE FUENTES / 15.10.2026", fr: "REVUE DES SOURCES / 15.10.2026", it: "VERIFICA DELLE FONTI / 15.10.2026" };
const localized = (slug, field) => Object.fromEntries(Object.entries(decisionGuides).map(([lang, data]) => [lang, data[slug][field]]));
export const decisionArticleMeta = Object.keys(en).map((slug) => ({
  slug, label: en[slug].label, labels: localized(slug, "label"), read: "7 min",
  image: slug.includes("rehearsal") ? "/og/parcel-weight-lab.png" : "/og/buying-workflow.png",
  datePublished: "2026-10-15", dateModified: "2026-10-15",
  updatedLabel: updateLabels, researchLabel: researchLabels,
  title: localized(slug, "title"), summary: localized(slug, "summary")
}));

export const topics = {
  purchase: ["sugargoo-payment-methods-fees-exchange-rate", "sugargoo-vs-superbuy-uk", "sugargoo-uk-buying-guide-2026", "sugargoo-spreadsheet-links-not-working", "sugargoo-hoodies-uk-sizing-finds"],
  shipping: ["sugargoo-rehearsal-shipping-guide", "sugargoo-shipping-cost-uk", "reduce-volumetric-weight", "sugargoo-warehouse-storage-consolidation-uk"],
  qc: ["how-to-read-qc-photos", "sugargoo-shoe-qc-box-laces-accessory-completeness", "sugargoo-leather-qc-lighting-visible-defects", "sugargoo-sneaker-qc-labels-insole-outsole-measurements", "sugargoo-shoes-qc-shape-stitching-soles-size"],
  support: ["sugargoo-shipping-insurance-claims", "sugargoo-uk-delivery-time-tracking", "sugargoo-returns-refunds-before-shipping"]
};

export const decisionUi = {
  en: { start: "CHOOSE YOUR NEXT STEP", startTitle: "Find a product. Plan the full cost.", links: ["Browse the spreadsheet", "Estimate UK shipping", "Check QC photos", "Understand payment fees"], latest: "Four new practical guides", all: "Browse all 17 guides", topic: "BROWSE BY TASK", purchase: "Buying and payment", shipping: "Packing and UK shipping", qc: "QC and measurements", support: "Tracking, returns and protection", homeTitle: "Sugargoo UK Spreadsheet, Finds & Shipping Guides", homeDescription: "Browse Sugargoo finds, check QC photos and plan UK shipping costs. Independent guides to payments, rehearsal shipping, tracking and returns.", more: "Continue your research", hub: "All guides", sources: "Source notes", back: "Back to all guides", searchPrivacy: "Search opens the external catalogue.", nav: "Primary navigation", skip: "Skip to content", sheet: "Sugargoo Spreadsheet UK: Finds, Categories & QC Guides" },
  de: { start: "DEN NÄCHSTEN SCHRITT WÄHLEN", startTitle: "Produkte finden. Gesamtkosten planen.", links: ["Produkttabelle öffnen", "UK-Versand kalkulieren", "QC-Fotos prüfen", "Zahlungsgebühren verstehen"], latest: "Vier neue Praxisleitfäden", all: "Alle 17 Leitfäden ansehen", topic: "NACH AUFGABE SUCHEN", purchase: "Kauf und Zahlung", shipping: "Verpackung und UK-Versand", qc: "QC und Maße", support: "Tracking, Rückgaben und Schutz", homeTitle: "Sugargoo UK: Spreadsheet, Funde und Versandratgeber", homeDescription: "Sugargoo-Funde entdecken, QC-Fotos prüfen und UK-Versandkosten planen. Unabhängige Ratgeber zu Zahlung, Probepacken, Tracking und Rückgaben.", more: "Passende nächste Schritte", hub: "Alle Leitfäden", sources: "Quellenhinweise", back: "Zurück zu allen Leitfäden", searchPrivacy: "Die Suche öffnet den externen Katalog.", nav: "Hauptnavigation", skip: "Zum Inhalt springen", sheet: "Sugargoo Spreadsheet UK: Produkte, Kategorien und QC" },
  es: { start: "ELIGE TU SIGUIENTE PASO", startTitle: "Encuentra productos. Calcula el coste total.", links: ["Ver el spreadsheet", "Estimar el envío a UK", "Revisar las fotos QC", "Entender los gastos de pago"], latest: "Cuatro nuevas guías prácticas", all: "Ver las 17 guías", topic: "EXPLORAR POR TAREA", purchase: "Compra y pago", shipping: "Embalaje y envío a UK", qc: "QC y medidas", support: "Seguimiento, devoluciones y protección", homeTitle: "Sugargoo UK: Spreadsheet, productos y guías de envío", homeDescription: "Descubre productos Sugargoo, revisa fotos QC y calcula el envío a UK. Guías independientes de pagos, preembalaje, seguimiento y devoluciones.", more: "Continúa tu investigación", hub: "Todas las guías", sources: "Notas de fuentes", back: "Volver a todas las guías", searchPrivacy: "La búsqueda abre el catálogo externo.", nav: "Navegación principal", skip: "Saltar al contenido", sheet: "Sugargoo Spreadsheet UK: productos, categorías y QC" },
  fr: { start: "CHOISIR LA PROCHAINE ÉTAPE", startTitle: "Trouver un produit. Prévoir le coût total.", links: ["Parcourir le tableur", "Estimer le transport UK", "Examiner les photos QC", "Comprendre les frais de paiement"], latest: "Quatre nouveaux guides pratiques", all: "Voir les 17 guides", topic: "EXPLORER PAR BESOIN", purchase: "Achat et paiement", shipping: "Emballage et livraison UK", qc: "QC et mesures", support: "Suivi, retours et protection", homeTitle: "Sugargoo UK : tableur, produits et guides de livraison", homeDescription: "Découvrez des produits Sugargoo, examinez les photos QC et estimez le transport UK. Guides sur le paiement, le préemballage, le suivi et les retours.", more: "Poursuivre votre recherche", hub: "Tous les guides", sources: "Notes sur les sources", back: "Retour à tous les guides", searchPrivacy: "La recherche ouvre le catalogue externe.", nav: "Navigation principale", skip: "Aller au contenu", sheet: "Sugargoo Spreadsheet UK : produits, catégories et QC" },
  it: { start: "SCEGLI IL PROSSIMO PASSO", startTitle: "Trova prodotti. Pianifica il costo totale.", links: ["Esplora lo spreadsheet", "Stima la spedizione UK", "Controlla le foto QC", "Comprendi le commissioni"], latest: "Quattro nuove guide pratiche", all: "Sfoglia tutte le 17 guide", topic: "ESPLORA PER ATTIVITÀ", purchase: "Acquisto e pagamento", shipping: "Imballaggio e spedizione UK", qc: "QC e misure", support: "Tracking, resi e protezione", homeTitle: "Sugargoo UK: spreadsheet, prodotti e guide alla spedizione", homeDescription: "Scopri prodotti Sugargoo, verifica le foto QC e stima la spedizione UK. Guide a pagamenti, preimballaggio, tracking e resi.", more: "Continua la ricerca", hub: "Tutte le guide", sources: "Note sulle fonti", back: "Torna a tutte le guide", searchPrivacy: "La ricerca apre il catalogo esterno.", nav: "Navigazione principale", skip: "Vai al contenuto", sheet: "Sugargoo Spreadsheet UK: prodotti, categorie e QC" }
};

const payment = "sugargoo-payment-methods-fees-exchange-rate";
const rehearsal = "sugargoo-rehearsal-shipping-guide";
const protection = "sugargoo-shipping-insurance-claims";
const comparison = "sugargoo-vs-superbuy-uk";
export const decisionRelated = {
  [payment]: ["sugargoo-shipping-cost-uk", "sugargoo-returns-refunds-before-shipping", comparison],
  [rehearsal]: ["sugargoo-shipping-cost-uk", "reduce-volumetric-weight", protection],
  [protection]: ["sugargoo-uk-delivery-time-tracking", rehearsal, "sugargoo-returns-refunds-before-shipping"],
  [comparison]: [payment, rehearsal, "how-to-read-qc-photos"],
  "sugargoo-shipping-cost-uk": [rehearsal, payment, "reduce-volumetric-weight"],
  "sugargoo-uk-delivery-time-tracking": [protection, "sugargoo-shipping-cost-uk", "sugargoo-warehouse-storage-consolidation-uk"],
  "sugargoo-warehouse-storage-consolidation-uk": [rehearsal, "sugargoo-returns-refunds-before-shipping", "sugargoo-shipping-cost-uk"],
  "reduce-volumetric-weight": [rehearsal, "sugargoo-shipping-cost-uk", protection],
  "sugargoo-uk-buying-guide-2026": [payment, comparison, "how-to-read-qc-photos"],
  "sugargoo-returns-refunds-before-shipping": [payment, "how-to-read-qc-photos", protection],
  spreadsheet: ["sugargoo-spreadsheet-links-not-working", "sugargoo-hoodies-uk-sizing-finds", payment],
  guide: [payment, comparison, "sugargoo-uk-buying-guide-2026"],
  shipping: ["sugargoo-shipping-cost-uk", rehearsal, "reduce-volumetric-weight", protection],
  qc: ["how-to-read-qc-photos", "sugargoo-returns-refunds-before-shipping", "sugargoo-shoes-qc-shape-stitching-soles-size"]
};
