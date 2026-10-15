import type { ArticleSlug } from "@/lib/articles";
import type { Locale } from "@/lib/site-data";

export const articleSeoTitles: Record<Locale, Partial<Record<ArticleSlug, string>>> = {
  en: {
    "sugargoo-spreadsheet-guide-2026": "Sugargoo Spreadsheet Guide: Finds, Prices and QC",
    "sugargoo-qc-photo-checklist": "Sugargoo QC Photos: Warehouse Inspection Checklist",
    "sugargoo-shipping-weight-guide-2026": "Sugargoo Shipping Weight: Actual vs Volumetric",
    "sugargoo-review-2026": "Sugargoo Review 2026: Fees, QC and Shipping Checks",
    "sugargoo-order-status-purchased-shipped-received-stored": "Sugargoo Order Status: Purchased to Warehouse Storage",
  },
  de: {
    "sugargoo-spreadsheet-guide-2026": "Sugargoo Spreadsheet: Funde, Preise und QC",
    "sugargoo-qc-photo-checklist": "Sugargoo QC-Fotos: Checkliste für die Lagerprüfung",
    "sugargoo-shipping-weight-guide-2026": "Sugargoo Versandgewicht: Real- und Volumengewicht",
    "sugargoo-review-2026": "Sugargoo Bewertung 2026: Kosten, QC und Versand",
    "sugargoo-order-status-purchased-shipped-received-stored": "Sugargoo Bestellstatus: Vom Kauf bis zur Lagerung",
  },
  es: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo: productos, precios y QC",
    "sugargoo-qc-photo-checklist": "Fotos QC Sugargoo: lista de inspección en almacén",
    "sugargoo-shipping-weight-guide-2026": "Peso de envío Sugargoo: real frente a volumétrico",
    "sugargoo-review-2026": "Opiniones Sugargoo 2026: costes, QC y envíos",
    "sugargoo-order-status-purchased-shipped-received-stored": "Estado de pedido Sugargoo: compra y almacén",
  },
  fr: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo : sélections, prix et QC",
    "sugargoo-qc-photo-checklist": "Photos QC Sugargoo : liste d’inspection en entrepôt",
    "sugargoo-shipping-weight-guide-2026": "Poids Sugargoo : réel et volumétrique",
    "sugargoo-review-2026": "Avis Sugargoo 2026 : frais, QC et livraison",
    "sugargoo-order-status-purchased-shipped-received-stored": "Statut Sugargoo : de l’achat au stockage",
  },
  it: {
    "sugargoo-spreadsheet-guide-2026": "Spreadsheet Sugargoo: prodotti, prezzi e QC",
    "sugargoo-qc-photo-checklist": "Foto QC Sugargoo: checklist di ispezione in magazzino",
    "sugargoo-shipping-weight-guide-2026": "Peso Sugargoo: reale e volumetrico",
    "sugargoo-review-2026": "Recensione Sugargoo 2026: costi, QC e spedizione",
    "sugargoo-order-status-purchased-shipped-received-stored": "Stato ordine Sugargoo: acquisto e magazzino",
  },
};

export const relatedArticleSlugs: Partial<Record<ArticleSlug, ArticleSlug[]>> = {
  "sugargoo-spreadsheet-guide-2026": ["sugargoo-link-not-working-weidian-taobao", "sugargoo-fees-total-cost-guide", "sugargoo-first-order-checkpoints"],
  "sugargoo-qc-photo-checklist": ["sugargoo-extra-qc-photo-request-brief", "sugargoo-wrong-size-color-quantity-warehouse", "sugargoo-warehouse-storage-returns"],
  "sugargoo-shipping-weight-guide-2026": ["sugargoo-shipping-calculator-estimate-check", "sugargoo-fees-total-cost-guide", "sugargoo-rehearsal-shipping-results-check"],
  "sugargoo-review-2026": ["sugargoo-first-order-checkpoints", "sugargoo-fees-total-cost-guide", "sugargoo-support-request-evidence-checklist"],
  "sugargoo-order-status-purchased-shipped-received-stored": ["sugargoo-warehouse-storage-returns", "sugargoo-combine-orders-item-control", "sugargoo-tracking-not-updating-diagnostics"],
};
