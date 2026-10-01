import type { ArticleSlug } from "@/lib/articles";
import type { Locale } from "@/lib/site-data";

export const articleSeoTitles: Record<Locale, Partial<Record<ArticleSlug, string>>> = {
  en: {
    "sugargoo-spreadsheet-guide-2026": "Sugargoo Spreadsheet Guide: Finds, Prices and QC",
    "sugargoo-qc-photo-checklist": "Sugargoo QC Photos: Warehouse Inspection Checklist",
    "sugargoo-shipping-weight-guide-2026": "Sugargoo Shipping Weight: Actual vs Volumetric",
    "sugargoo-review-2026": "Sugargoo Review 2026: Services and Evidence Limits",
    "sugargoo-order-status-purchased-shipped-received-stored": "Sugargoo Order Status: Purchased to Warehouse Storage",
  },
  de: {
    "sugargoo-spreadsheet-guide-2026": "Sugargoo Spreadsheet: Funde, Preise und QC",
    "sugargoo-qc-photo-checklist": "Sugargoo QC-Fotos: Checkliste für die Lagerprüfung",
    "sugargoo-shipping-weight-guide-2026": "Sugargoo Versandgewicht: Real- und Volumengewicht",
    "sugargoo-review-2026": "Sugargoo Bewertung 2026: Dienste und Beweisgrenzen",
    "sugargoo-order-status-purchased-shipped-received-stored": "Sugargoo Bestellstatus: Vom Kauf bis zur Lagerung",
  },
  es: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo: productos, precios y QC",
    "sugargoo-qc-photo-checklist": "Fotos QC Sugargoo: lista de inspección en almacén",
    "sugargoo-shipping-weight-guide-2026": "Peso de envío Sugargoo: real frente a volumétrico",
    "sugargoo-review-2026": "Reseña Sugargoo 2026: servicios y límites de evidencia",
    "sugargoo-order-status-purchased-shipped-received-stored": "Estado de pedido Sugargoo: compra y almacén",
  },
  fr: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo : sélections, prix et QC",
    "sugargoo-qc-photo-checklist": "Photos QC Sugargoo : liste d’inspection en entrepôt",
    "sugargoo-shipping-weight-guide-2026": "Poids Sugargoo : réel et volumétrique",
    "sugargoo-review-2026": "Avis Sugargoo 2026 : services et limites des preuves",
    "sugargoo-order-status-purchased-shipped-received-stored": "Statut Sugargoo : de l’achat au stockage",
  },
  it: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo: prodotti, prezzi e QC",
    "sugargoo-qc-photo-checklist": "Foto QC Sugargoo: checklist di ispezione in magazzino",
    "sugargoo-shipping-weight-guide-2026": "Peso Sugargoo: reale e volumetrico",
    "sugargoo-review-2026": "Recensione Sugargoo 2026: servizi e limiti delle prove",
    "sugargoo-order-status-purchased-shipped-received-stored": "Stato ordine Sugargoo: acquisto e magazzino",
  },
};

export const relatedArticleSlugs: Partial<Record<ArticleSlug, ArticleSlug[]>> = {
  "sugargoo-spreadsheet-guide-2026": ["sugargoo-first-order-checkpoints", "sugargoo-shipping-calculator-estimate-check"],
  "sugargoo-qc-photo-checklist": ["sugargoo-extra-qc-photo-request-brief", "sugargoo-wrong-size-color-quantity-warehouse"],
  "sugargoo-shipping-weight-guide-2026": ["sugargoo-shipping-calculator-estimate-check", "sugargoo-rehearsal-shipping-results-check"],
  "sugargoo-review-2026": ["sugargoo-first-order-checkpoints", "sugargoo-support-request-evidence-checklist"],
  "sugargoo-order-status-purchased-shipped-received-stored": ["sugargoo-combine-orders-item-control", "sugargoo-tracking-not-updating-diagnostics"],
};
