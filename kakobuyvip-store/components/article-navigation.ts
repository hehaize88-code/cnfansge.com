import type { ArticleSlug } from "./article-data";
import type { Lang } from "./site-data";

export const articleNavigationText: Record<Lang, { contents: string; related: string; continue: string; language: string; start: string; actions: string[]; official: string }> = {
  en: { contents: "In this guide", related: "Continue your research", continue: "Next useful guide", language: "Read this page in", start: "What do you need to check?", actions: ["Place a first order", "Estimate shipping cost", "Understand tracking", "Check warehouse photos"], official: "Open the official shipping calculator" },
  de: { contents: "In diesem Ratgeber", related: "Passende Ratgeber", continue: "Als Nächstes lesen", language: "Diese Seite lesen auf", start: "Was möchten Sie prüfen?", actions: ["Die erste Bestellung", "Versandkosten schätzen", "Tracking verstehen", "Lagerfotos prüfen"], official: "Offiziellen Versandkostenrechner öffnen" },
  es: { contents: "En esta guía", related: "Continúa tu investigación", continue: "Siguiente guía útil", language: "Lee esta página en", start: "¿Qué necesitas comprobar?", actions: ["Hacer el primer pedido", "Estimar el envío", "Entender el seguimiento", "Revisar fotos del almacén"], official: "Abrir el calculador oficial de envío" },
  fr: { contents: "Dans ce guide", related: "Poursuivre votre recherche", continue: "Guide à lire ensuite", language: "Lire cette page en", start: "Que souhaitez-vous vérifier ?", actions: ["Passer une première commande", "Estimer les frais", "Comprendre le suivi", "Vérifier les photos QC"], official: "Ouvrir le calculateur officiel" },
  it: { contents: "In questa guida", related: "Continua la ricerca", continue: "La prossima guida utile", language: "Leggi questa pagina in", start: "Che cosa vuoi verificare?", actions: ["Fare il primo ordine", "Stimare la spedizione", "Capire il tracking", "Controllare le foto QC"], official: "Aprire il calcolatore ufficiale" },
};

export const relatedArticleSlugs: Record<ArticleSlug, ArticleSlug[]> = {
  "how-to-use-kakobuy": ["qc-photo-checklist", "kakobuy-shipping-calculator", "kakobuy-shipping-time-tracking"],
  "qc-photo-checklist": ["kakobuy-shoes-spreadsheet-checks", "kakobuy-hoodie-size-qc-guide", "kakobuy-return-exchange-guide"],
  "actual-vs-volumetric-weight": ["kakobuy-shipping-calculator", "kakobuy-parcel-consolidation-packing", "kakobuy-shipping-time-tracking"],
  "kakobuy-fees-explained": ["kakobuy-shipping-calculator", "actual-vs-volumetric-weight", "kakobuy-return-exchange-guide"],
  "kakobuy-warehouse-storage-guide": ["kakobuy-parcel-consolidation-packing", "kakobuy-shipping-time-tracking", "kakobuy-return-exchange-guide"],
  "kakobuy-return-exchange-guide": ["qc-photo-checklist", "kakobuy-warehouse-storage-guide", "how-to-use-kakobuy"],
  "kakobuy-review-2026": ["how-to-use-kakobuy", "kakobuy-shipping-calculator", "kakobuy-shipping-time-tracking"],
  "kakobuy-usa-pre-order-readiness-checklist": ["kakobuy-us-delivery-address-format", "kakobuy-shipping-calculator", "kakobuy-shipping-time-tracking"],
  "kakobuy-us-delivery-address-format": ["kakobuy-apartment-suite-unit-zip4-checks", "kakobuy-billing-address-vs-delivery-address", "kakobuy-usa-pre-order-readiness-checklist"],
  "kakobuy-apartment-suite-unit-zip4-checks": ["kakobuy-us-delivery-address-format", "kakobuy-billing-address-vs-delivery-address", "kakobuy-shipping-time-tracking"],
  "kakobuy-billing-address-vs-delivery-address": ["kakobuy-us-delivery-address-format", "kakobuy-usa-pre-order-readiness-checklist", "how-to-use-kakobuy"],
  "check-kakobuy-product-links": ["kakobuy-weidian-taobao-links", "how-to-use-kakobuy", "qc-photo-checklist"],
  "kakobuy-shoes-spreadsheet-checks": ["qc-photo-checklist", "kakobuy-parcel-consolidation-packing", "actual-vs-volumetric-weight"],
  "kakobuy-hoodie-size-qc-guide": ["qc-photo-checklist", "kakobuy-parcel-consolidation-packing", "kakobuy-shipping-calculator"],
  "kakobuy-jersey-listing-measurements": ["qc-photo-checklist", "kakobuy-hoodie-size-qc-guide", "kakobuy-shipping-calculator"],
  "kakobuy-weidian-taobao-links": ["check-kakobuy-product-links", "kakobuy-product-link-not-working", "how-to-use-kakobuy"],
  "kakobuy-product-link-not-working": ["kakobuy-weidian-taobao-links", "check-kakobuy-product-links", "how-to-use-kakobuy"],
  "kakobuy-shipping-calculator": ["actual-vs-volumetric-weight", "kakobuy-fees-explained", "kakobuy-parcel-consolidation-packing"],
  "kakobuy-shipping-time-tracking": ["how-to-use-kakobuy", "kakobuy-warehouse-storage-guide", "kakobuy-parcel-consolidation-packing"],
  "kakobuy-parcel-consolidation-packing": ["kakobuy-shipping-calculator", "actual-vs-volumetric-weight", "qc-photo-checklist"],
};
