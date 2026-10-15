import type { Lang, PageKey } from "./i18n";
import type { ArticleSlug } from "./articles";
import type { products } from "./catalog-data";

export const ui = {
  en: { start: "Start here", navigation: "Main navigation", related: "Read next", allArticles: "All articles", independent: "Independent LitBuy guide", updated: "Updated", contents: "On this page", breadcrumbs: "Breadcrumbs", productExamples: "Compare the product records", referenceNote: "Recorded USD reference prices, checked 29 August 2026. Shipping and other charges are excluded; confirm the selected option and current price on the linked catalog.", sourceBasis: "Editorial basis:", articleSourceNote: "LitBuy’s public service, help and estimation pages inform the workflow. Examples explain how to compare evidence; they are not personal purchase tests, live quotes or guarantees. Current account terms and item-specific deadlines govern the next step. Product actions open the linked main catalog.", research: "Buying research", researchNote: "Basis: LitBuy’s public homepage, help, estimation and policy materials. Historical policy wording is identified as such; check current account terms, parcel quotes and item deadlines before acting.", records: "records", matched: "matched routes", languages: "languages", reference: "reference", volumetric: "Volumetric weight", divisor: "route divisor", image: "Image route", destination: "Destination" },
  de: { start: "Hier beginnen", navigation: "Hauptnavigation", related: "Weiterlesen", allArticles: "Alle Artikel", independent: "Unabhängiger LitBuy-Ratgeber", updated: "Aktualisiert", contents: "Auf dieser Seite", breadcrumbs: "Seitenpfad", productExamples: "Produktdatensätze vergleichen", referenceNote: "Erfasste USD-Richtpreise, geprüft am 29. August 2026. Versand und weitere Gebühren sind nicht enthalten; gewählte Variante und aktuellen Preis im verlinkten Katalog bestätigen.", sourceBasis: "Redaktionelle Grundlage:", articleSourceNote: "Öffentliche Service-, Hilfe- und Schätzseiten von LitBuy bilden die Grundlage des Ablaufs. Beispiele zeigen den Vergleich von Belegen; sie sind keine eigenen Kauftests, aktuellen Angebote oder Garantien. Maßgeblich sind aktuelle Kontobedingungen und artikelspezifische Fristen. Produktaktionen öffnen den verlinkten Hauptkatalog.", research: "Recherche zum Einkauf", researchNote: "Grundlage: öffentliche Startseite, Hilfe, Kostenschätzung und Richtlinien von LitBuy. Historische Regelungen sind entsprechend gekennzeichnet; aktuelle Kontobedingungen, Paketangebote und Artikelfristen vor jeder Entscheidung prüfen.", records: "Datensätze", matched: "zugeordnete Ziele", languages: "Sprachen", reference: "Richtwert", volumetric: "Volumengewicht", divisor: "Routendivisor", image: "Bildzuordnung", destination: "Ziel" },
  es: { start: "Empieza aquí", navigation: "Navegación principal", related: "Sigue leyendo", allArticles: "Todos los artículos", independent: "Guía independiente de LitBuy", updated: "Actualizado", contents: "En esta página", breadcrumbs: "Ruta de navegación", productExamples: "Compara las fichas de producto", referenceNote: "Precios orientativos en USD registrados y revisados el 29 de agosto de 2026. No incluyen envío ni otros cargos; confirma la variante y el precio actual en el catálogo enlazado.", sourceBasis: "Base editorial:", articleSourceNote: "Las páginas públicas de servicios, ayuda y estimación de LitBuy sirven de base para el proceso. Los ejemplos explican cómo comparar pruebas; no son pruebas personales de compra, presupuestos actuales ni garantías. Rigen las condiciones vigentes de la cuenta y los plazos de cada artículo. Las acciones de producto abren el catálogo principal enlazado.", research: "Investigación de compra", researchNote: "Base: portada, ayuda, estimación y políticas públicas de LitBuy. Las condiciones históricas se indican como tales; comprueba las condiciones vigentes de tu cuenta, el presupuesto y los plazos de cada artículo antes de actuar.", records: "fichas", matched: "rutas coincidentes", languages: "idiomas", reference: "referencia", volumetric: "Peso volumétrico", divisor: "divisor de la ruta", image: "Imagen asociada", destination: "Destino" },
  fr: { start: "Commencer ici", navigation: "Navigation principale", related: "À lire ensuite", allArticles: "Tous les articles", independent: "Guide LitBuy indépendant", updated: "Mis à jour", contents: "Sur cette page", breadcrumbs: "Fil d’Ariane", productExamples: "Comparer les fiches produit", referenceNote: "Prix indicatifs en USD enregistrés et vérifiés le 29 août 2026. Livraison et autres frais exclus ; confirmer la variante et le prix actuel dans le catalogue lié.", sourceBasis: "Base éditoriale :", articleSourceNote: "Les pages publiques de services, d’aide et d’estimation de LitBuy servent de base au parcours. Les exemples expliquent comment comparer les éléments disponibles ; ils ne constituent ni essais d’achat personnels, ni devis actuels, ni garanties. Les conditions du compte et les délais propres à chaque article font foi. Les actions produit ouvrent le catalogue principal lié.", research: "Recherche avant achat", researchNote: "Base : accueil, aide, estimation et politiques publiques de LitBuy. Les anciennes formulations sont signalées ; consulter les conditions actuelles du compte, les devis et les délais propres aux articles avant toute décision.", records: "fiches", matched: "destinations associées", languages: "langues", reference: "indicatif", volumetric: "Poids volumétrique", divisor: "diviseur de la ligne", image: "Image associée", destination: "Destination" },
  it: { start: "Inizia qui", navigation: "Navigazione principale", related: "Continua a leggere", allArticles: "Tutti gli articoli", independent: "Guida LitBuy indipendente", updated: "Aggiornato", contents: "In questa pagina", breadcrumbs: "Percorso di navigazione", productExamples: "Confronta le schede prodotto", referenceNote: "Prezzi indicativi in USD registrati e verificati il 29 agosto 2026. Spedizione e altri costi esclusi; conferma variante e prezzo attuale nel catalogo collegato.", sourceBasis: "Base editoriale:", articleSourceNote: "Le pagine pubbliche di servizi, assistenza e stima di LitBuy sono la base del percorso. Gli esempi spiegano come confrontare le prove; non sono test d’acquisto personali, preventivi attuali o garanzie. Valgono le condizioni correnti dell’account e le scadenze di ciascun articolo. Le azioni prodotto aprono il catalogo principale collegato.", research: "Ricerca prima dell’acquisto", researchNote: "Base: homepage, assistenza, stime e politiche pubbliche di LitBuy. Le formulazioni storiche sono indicate come tali; controlla condizioni attuali dell’account, preventivi e scadenze degli articoli prima di procedere.", records: "schede", matched: "destinazioni abbinate", languages: "lingue", reference: "indicativo", volumetric: "Peso volumetrico", divisor: "divisore della linea", image: "Immagine abbinata", destination: "Destinazione" },
} satisfies Record<Lang, Record<string, string>>;

export const categoryLabels: Record<Lang, string[]> = {
  en: ["Shoes", "Hoodies", "T-shirts", "Jackets", "Pants", "Accessories", "Jerseys", "All products"],
  de: ["Schuhe", "Hoodies", "T-Shirts", "Jacken", "Hosen", "Accessoires", "Trikots", "Alle Produkte"],
  es: ["Calzado", "Sudaderas", "Camisetas", "Chaquetas", "Pantalones", "Accesorios", "Camisetas deportivas", "Todos los productos"],
  fr: ["Chaussures", "Sweats", "T-shirts", "Vestes", "Pantalons", "Accessoires", "Maillots", "Tous les produits"],
  it: ["Scarpe", "Felpe", "T-shirt", "Giacche", "Pantaloni", "Accessori", "Maglie sportive", "Tutti i prodotti"],
};

const productNames: Record<Lang, string[]> = {
  en: ["Sweatshirt · record 6681", "Pants / shorts · record 6680", "Jersey · record 6679", "Jersey · record 6678", "Shoes · record 6059", "Hoodie · record 6172", "Utility bag · record 5050", "Jersey · record 6626"],
  de: ["Sweatshirt · Artikel 6681", "Hose / Shorts · Artikel 6680", "Trikot · Artikel 6679", "Trikot · Artikel 6678", "Schuhe · Artikel 6059", "Hoodie · Artikel 6172", "Tasche · Artikel 5050", "Trikot · Artikel 6626"],
  es: ["Sudadera · ficha 6681", "Pantalón / pantalón corto · ficha 6680", "Camiseta deportiva · ficha 6679", "Camiseta deportiva · ficha 6678", "Calzado · ficha 6059", "Sudadera con capucha · ficha 6172", "Bolso · ficha 5050", "Camiseta deportiva · ficha 6626"],
  fr: ["Sweat-shirt · fiche 6681", "Pantalon / short · fiche 6680", "Maillot · fiche 6679", "Maillot · fiche 6678", "Chaussures · fiche 6059", "Sweat à capuche · fiche 6172", "Sac · fiche 5050", "Maillot · fiche 6626"],
  it: ["Felpa · scheda 6681", "Pantalone / pantaloncini · scheda 6680", "Maglia sportiva · scheda 6679", "Maglia sportiva · scheda 6678", "Scarpe · scheda 6059", "Felpa con cappuccio · scheda 6172", "Borsa · scheda 5050", "Maglia sportiva · scheda 6626"],
};
const ids = ["6681", "6680", "6679", "6678", "6059", "6172", "5050", "6626"];
const categoryIndices = [1, 4, 6, 6, 0, 1, 5, 6];
export function productLabel(product: typeof products[number], lang: Lang) {
  const index = ids.indexOf(product.id);
  return { name: productNames[lang][index], category: categoryLabels[lang][categoryIndices[index]] };
}

export const topicArticles: Record<PageKey, ArticleSlug[]> = {
  spreadsheet: ["litbuy-spreadsheet-2026", "litbuy-spreadsheet-guide", "litbuy-finds-under-30"],
  finds: ["litbuy-hoodies-spreadsheet", "litbuy-finds-under-30", "litbuy-spreadsheet-shoes"],
  guides: ["litbuy-clothing-size-guide", "litbuy-order-status-guide", "litbuy-review-2026"],
  qc: ["litbuy-qc-photos-guide", "litbuy-qc-photo-checklist", "litbuy-clothing-size-guide"],
  shipping: ["litbuy-shipping-guide", "litbuy-shipping-weight-guide", "litbuy-shipping-usa"],
  faq: ["litbuy-cost-workflow-checklist", "litbuy-warehouse-city-guide", "litbuy-review-2026"],
  articles: [],
};

export const articleProductIds: Partial<Record<ArticleSlug, string[]>> = {
  "litbuy-hoodies-spreadsheet": ["6172", "6681"],
  "litbuy-finds-under-30": ["6681", "6680", "6679", "6678", "5050", "6626"],
  "litbuy-clothing-size-guide": ["6681", "6680"],
  "litbuy-spreadsheet-shoes": ["6059"],
};

export function articleImage(slug: ArticleSlug) {
  return /shoes/.test(slug) ? "/products/shoes.jpg" : /hoodies|clothing/.test(slug) ? "/products/hoodie.jpg" : /shipping|cost|warehouse|status/.test(slug) ? "/products/bag.webp" : "/products/sweatshirt.webp";
}

export function formatDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
