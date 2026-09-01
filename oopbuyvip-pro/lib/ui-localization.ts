import type { Locale, Product } from "@/lib/site";

type ProductTranslation = Pick<Product, "name" | "category" | "note">;

export const homeUi: Record<Locale, {
  proof: [string, string, string];
  collageAlt: [string, string, string];
  collageNote: string;
  stamp: [string, string, string];
  routes: string;
  toc: string;
  articleLabels: Record<string, string>;
}> = {
  en: { proof: ["curated routes", "languages", "clear workflow"], collageAlt: ["Curated air-cushion runner", "Curated web motif hoodie", "Curated mini bag"], collageNote: "Look closer before shipping.", stamp: ["ROUTES", "CHECKED", "SEP 2026"], routes: "10 ROUTES", toc: "IN THIS GUIDE", articleLabels: { beginner: "EVIDENCE GUIDE", spreadsheet: "QC TRAIL", qc: "QC PHOTOS", fees: "DECISION WINDOW", shipping: "PACKING EVIDENCE" } },
  de: { proof: ["geprüfte Routen", "Sprachen", "klarer Ablauf"], collageAlt: ["Ausgewählter Laufschuh mit Luftpolster", "Ausgewählter Hoodie mit Webmotiv", "Ausgewählte Minitasche"], collageNote: "Vor dem Versand genauer hinsehen.", stamp: ["ROUTEN", "GEPRÜFT", "SEP 2026"], routes: "10 ROUTEN", toc: "IN DIESEM GUIDE", articleLabels: { beginner: "BELEGGUIDE", spreadsheet: "QC-SPUR", qc: "QC-FOTOS", fees: "ENTSCHEIDUNGSFRIST", shipping: "VERPACKUNGSBELEG" } },
  es: { proof: ["rutas revisadas", "idiomas", "flujo claro"], collageAlt: ["Zapatilla seleccionada con cámara de aire", "Sudadera seleccionada con motivo web", "Minibolso seleccionado"], collageNote: "Mira mejor antes de enviar.", stamp: ["RUTAS", "REVISADAS", "SEP 2026"], routes: "10 RUTAS", toc: "EN ESTA GUÍA", articleLabels: { beginner: "GUÍA DE EVIDENCIA", spreadsheet: "RASTRO QC", qc: "FOTOS QC", fees: "PLAZO DE DECISIÓN", shipping: "EVIDENCIA DE EMBALAJE" } },
  fr: { proof: ["routes contrôlées", "langues", "parcours clair"], collageAlt: ["Chaussure à coussin d’air sélectionnée", "Hoodie à motif web sélectionné", "Mini-sac sélectionné"], collageNote: "Regardez mieux avant l’envoi.", stamp: ["ROUTES", "VÉRIFIÉES", "SEP 2026"], routes: "10 ROUTES", toc: "DANS CE GUIDE", articleLabels: { beginner: "GUIDE DE PREUVE", spreadsheet: "TRACE QC", qc: "PHOTOS QC", fees: "DÉLAI DE DÉCISION", shipping: "PREUVE D’EMBALLAGE" } },
  it: { proof: ["percorsi verificati", "lingue", "flusso chiaro"], collageAlt: ["Scarpa con cuscino d’aria selezionata", "Felpa con motivo web selezionata", "Mini borsa selezionata"], collageNote: "Osserva meglio prima di spedire.", stamp: ["PERCORSI", "VERIFICATI", "SET 2026"], routes: "10 PERCORSI", toc: "IN QUESTA GUIDA", articleLabels: { beginner: "GUIDA ALLE PROVE", spreadsheet: "TRACCIA QC", qc: "FOTO QC", fees: "FINESTRA DECISIONALE", shipping: "PROVA D’IMBALLAGGIO" } },
};

const productTranslations: Record<Exclude<Locale, "en">, Record<string, ProductTranslation>> = {
  de: {
    "6681": { name: "Schweres Sweatshirt mit Grafik", category: "Hoodies", note: "Produkt-ID 7755101935" },
    "6680": { name: "Lockere Hose / Shorts", category: "Hosen", note: "Produkt-ID 7755051257" },
    "6679": { name: "Auswahl an Fußballtrikots", category: "Trikots", note: "Produkt-ID 7641464690" },
    "5760": { name: "Laufschuh mit Luftpolster", category: "Schuhe", note: "Produkt-ID 7675283980" },
    "2450": { name: "Hoodie mit Webmotiv", category: "Hoodies", note: "Produkt-ID 7611589527" },
    "934": { name: "Trainer mit Gel-Dämpfung", category: "Schuhe", note: "Produkt-ID 7586091890" },
    "5895": { name: "Grafik-T-Shirt-Kollektion", category: "T-Shirts", note: "40 Varianten · ID 7672917747" },
    "5841": { name: "Minitasche aus beschichtetem Canvas", category: "Accessoires", note: "Produkt-ID 7675824966" },
  },
  es: {
    "6681": { name: "Sudadera gruesa con gráfico", category: "Sudaderas", note: "ID de producto 7755101935" },
    "6680": { name: "Pantalón relajado / corto", category: "Pantalones", note: "ID de producto 7755051257" },
    "6679": { name: "Selección de camisetas de fútbol", category: "Camisetas", note: "ID de producto 7641464690" },
    "5760": { name: "Zapatilla con cámara de aire", category: "Calzado", note: "ID de producto 7675283980" },
    "2450": { name: "Sudadera con motivo web", category: "Sudaderas", note: "ID de producto 7611589527" },
    "934": { name: "Zapatilla con amortiguación de gel", category: "Calzado", note: "ID de producto 7586091890" },
    "5895": { name: "Colección de camisetas gráficas", category: "Camisetas", note: "40 estilos · ID 7672917747" },
    "5841": { name: "Minibolso de lona revestida", category: "Accesorios", note: "ID de producto 7675824966" },
  },
  fr: {
    "6681": { name: "Sweat épais à motif graphique", category: "Hoodies", note: "ID produit 7755101935" },
    "6680": { name: "Pantalon ample / short", category: "Pantalons", note: "ID produit 7755051257" },
    "6679": { name: "Sélection de maillots de football", category: "Maillots", note: "ID produit 7641464690" },
    "5760": { name: "Chaussure à coussin d’air", category: "Chaussures", note: "ID produit 7675283980" },
    "2450": { name: "Hoodie à motif web", category: "Hoodies", note: "ID produit 7611589527" },
    "934": { name: "Chaussure à amorti gel", category: "Chaussures", note: "ID produit 7586091890" },
    "5895": { name: "Collection de T-shirts graphiques", category: "T-shirts", note: "40 modèles · ID 7672917747" },
    "5841": { name: "Mini-sac en toile enduite", category: "Accessoires", note: "ID produit 7675824966" },
  },
  it: {
    "6681": { name: "Felpa pesante con grafica", category: "Felpe", note: "ID prodotto 7755101935" },
    "6680": { name: "Pantaloni comodi / corti", category: "Pantaloni", note: "ID prodotto 7755051257" },
    "6679": { name: "Selezione di maglie da calcio", category: "Maglie", note: "ID prodotto 7641464690" },
    "5760": { name: "Scarpa con cuscino d’aria", category: "Scarpe", note: "ID prodotto 7675283980" },
    "2450": { name: "Felpa con motivo web", category: "Felpe", note: "ID prodotto 7611589527" },
    "934": { name: "Scarpa con ammortizzazione in gel", category: "Scarpe", note: "ID prodotto 7586091890" },
    "5895": { name: "Collezione di T-shirt grafiche", category: "T-shirt", note: "40 modelli · ID 7672917747" },
    "5841": { name: "Mini borsa in tela rivestita", category: "Accessori", note: "ID prodotto 7675824966" },
  },
};

export const categoryLabels: Record<Locale, Record<string, string>> = {
  en: { Shoes: "Shoes", Hoodies: "Hoodies", "T-Shirts": "T-Shirts", Jackets: "Jackets", Pants: "Pants", Headwear: "Headwear", Accessories: "Accessories", Jerseys: "Jerseys", Electronics: "Electronics", Other: "Other" },
  de: { Shoes: "Schuhe", Hoodies: "Hoodies", "T-Shirts": "T-Shirts", Jackets: "Jacken", Pants: "Hosen", Headwear: "Kopfbedeckung", Accessories: "Accessoires", Jerseys: "Trikots", Electronics: "Elektronik", Other: "Sonstiges" },
  es: { Shoes: "Calzado", Hoodies: "Sudaderas", "T-Shirts": "Camisetas", Jackets: "Chaquetas", Pants: "Pantalones", Headwear: "Gorras", Accessories: "Accesorios", Jerseys: "Camisetas deportivas", Electronics: "Electrónica", Other: "Otros" },
  fr: { Shoes: "Chaussures", Hoodies: "Hoodies", "T-Shirts": "T-shirts", Jackets: "Vestes", Pants: "Pantalons", Headwear: "Couvre-chefs", Accessories: "Accessoires", Jerseys: "Maillots", Electronics: "Électronique", Other: "Autres" },
  it: { Shoes: "Scarpe", Hoodies: "Felpe", "T-Shirts": "T-shirt", Jackets: "Giacche", Pants: "Pantaloni", Headwear: "Copricapi", Accessories: "Accessori", Jerseys: "Maglie", Electronics: "Elettronica", Other: "Altro" },
};

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "en") return product;
  return { ...product, ...productTranslations[locale][product.id] };
}
