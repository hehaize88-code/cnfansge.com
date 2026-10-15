import type { Article, Locale } from "@/lib/site";
import en from "@/lib/content/qc-20261015.en.json";
import de from "@/lib/content/qc-20261015.de.json";
import es from "@/lib/content/qc-20261015.es.json";
import fr from "@/lib/content/qc-20261015.fr.json";
import it from "@/lib/content/qc-20261015.it.json";

const content: Record<Locale, Article[]> = { en, de, es, fr, it };
const seoTitles: Record<Locale, string[]> = {
  en: ["OOPBuy QC Photo Angles: Views to Check", "OOPBuy QC: Quantity & Included Accessories", "OOPBuy QC: Print & Embroidery Checks", "Blurry OOPBuy QC Photos: Artifact or Defect?"],
  de: ["OOPBuy QC-Fotos: Blickwinkel richtig wählen", "OOPBuy QC: Stückzahl und Zubehör prüfen", "OOPBuy QC: Aufdrucke und Stickerei prüfen", "Unscharfe OOPBuy QC-Fotos richtig lesen"],
  es: ["Fotos QC OOPBuy: qué ángulos comprobar", "QC OOPBuy: cantidad y accesorios incluidos", "QC OOPBuy: estampados y bordados", "Fotos QC OOPBuy borrosas: cómo evaluarlas"],
  fr: ["Photos QC OOPBuy : les angles à vérifier", "QC OOPBuy : quantité et accessoires inclus", "QC OOPBuy : motifs et broderies", "Photos QC OOPBuy floues : comment les lire"],
  it: ["Foto QC OOPBuy: le angolazioni da controllare", "QC OOPBuy: quantità e accessori inclusi", "QC OOPBuy: controllare stampe e ricami", "Foto QC OOPBuy sfocate: come valutarle"],
};
const notes: Record<Locale, string> = {
  en: "Independent photo-reading guide. Examples are illustrative, not customer orders.",
  de: "Unabhängiger Leitfaden zur Bildprüfung. Beispiele sind illustrativ, keine Kundenbestellungen.",
  es: "Guía independiente de lectura de fotos. Los ejemplos son ilustrativos, no pedidos reales.",
  fr: "Guide indépendant de lecture des photos. Exemples illustratifs, sans commandes clients.",
  it: "Guida indipendente alla lettura delle foto. Esempi illustrativi, non ordini reali.",
};
export function getOctoberArticles(locale: Locale): Article[] {
  return content[locale].map((article, index) => ({ ...article, seoTitle: seoTitles[locale][index], published: "2026-10-15", modified: "2026-10-15", sourceNote: notes[locale] }));
}
