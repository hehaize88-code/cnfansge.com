import en from "./uk-guides-en.js";
import de from "./uk-guides-de.js";
import es from "./uk-guides-es.js";
import fr from "./uk-guides-fr.js";
import it from "./uk-guides-it.js";

export const ukGuides = { en, de, es, fr, it };
export const guideUi = Object.fromEntries(Object.entries(ukGuides).map(([lang, data]) => [lang, data.ui]));
const localized = (slug, field) => Object.fromEntries(Object.entries(ukGuides).map(([lang, data]) => [lang, data.articles[slug][field]]));
export const newArticles = Object.keys(en.articles).map((slug) => ({
  slug,
  label: en.articles[slug].label,
  labels: localized(slug, "label"),
  read: "7 min",
  image: slug.includes("hoodies") || slug.includes("links") ? "/og/buying-workflow.png" : "/og/parcel-weight-lab.png",
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  updatedLabel: Object.fromEntries(Object.entries(guideUi).map(([lang, ui]) => [lang, ui.updated])),
  researchLabel: Object.fromEntries(Object.entries(guideUi).map(([lang, ui]) => [lang, ui.checked])),
  title: localized(slug, "title"),
  summary: localized(slug, "summary")
}));

const cost = "sugargoo-shipping-cost-uk";
const tracking = "sugargoo-uk-delivery-time-tracking";
const hoodies = "sugargoo-hoodies-uk-sizing-finds";
const returns = "sugargoo-returns-refunds-before-shipping";
const storage = "sugargoo-warehouse-storage-consolidation-uk";
const links = "sugargoo-spreadsheet-links-not-working";
export const relatedGuides = {
  [cost]: ["reduce-volumetric-weight", storage, tracking],
  [tracking]: [cost, storage, "sugargoo-uk-buying-guide-2026"],
  [hoodies]: ["how-to-read-qc-photos", returns, cost],
  [returns]: ["how-to-read-qc-photos", storage, links],
  [storage]: [returns, "reduce-volumetric-weight", cost],
  [links]: [hoodies, "sugargoo-uk-buying-guide-2026", returns],
  "sugargoo-uk-buying-guide-2026": [links, cost, tracking],
  "how-to-read-qc-photos": [hoodies, returns, "sugargoo-shoes-qc-shape-stitching-soles-size"],
  "reduce-volumetric-weight": [cost, storage, tracking],
  "sugargoo-shoes-qc-shape-stitching-soles-size": ["sugargoo-sneaker-qc-labels-insole-outsole-measurements", returns, cost],
  "sugargoo-sneaker-qc-labels-insole-outsole-measurements": ["sugargoo-shoe-qc-box-laces-accessory-completeness", "how-to-read-qc-photos", returns],
  "sugargoo-leather-qc-lighting-visible-defects": ["how-to-read-qc-photos", returns, "sugargoo-shoes-qc-shape-stitching-soles-size"],
  "sugargoo-shoe-qc-box-laces-accessory-completeness": ["sugargoo-shoes-qc-shape-stitching-soles-size", "reduce-volumetric-weight", returns],
  spreadsheet: [hoodies, cost, links]
};
