import type { Article } from "./articles-data";
import type { Language } from "./site-data";
import en from "./seo-content/en.json";
import de from "./seo-content/de.json";
import es from "./seo-content/es.json";
import fr from "./seo-content/fr.json";
import it from "./seo-content/it.json";
import revisedEn from "./seo-content/revised-en.json";
import revisedDe from "./seo-content/revised-de.json";
import revisedEs from "./seo-content/revised-es.json";
import revisedFr from "./seo-content/revised-fr.json";
import revisedIt from "./seo-content/revised-it.json";

const content = { en, de, es, fr, it };
const revisions = { en: revisedEn, de: revisedDe, es: revisedEs, fr: revisedFr, it: revisedIt };
const dateLabels = { en: "October 2, 2026", de: "2. Oktober 2026", es: "2 de octubre de 2026", fr: "2 octobre 2026", it: "2 ottobre 2026" };
const sourceLabels = {
  en: "Editorial methods informed by official Sugargoo guidance on product links, measurement photos and shipping estimates. Sources reviewed October 2, 2026. Numerical examples are hypothetical, not seller measurements or live quotes.",
  de: "Redaktionelle Methoden auf Grundlage offizieller Sugargoo-Hinweise zu Produktlinks, Messfotos und Versandkalkulation. Quellen geprüft am 2. Oktober 2026. Zahlenbeispiele sind hypothetisch, keine Verkäufermessungen oder aktuellen Angebote.",
  es: "Métodos editoriales basados en las guías oficiales de Sugargoo sobre enlaces, fotos de medidas y estimaciones de envío. Fuentes revisadas el 2 de octubre de 2026. Las cifras de ejemplo son hipotéticas, no medidas de vendedores ni cotizaciones actuales.",
  fr: "Méthodes rédactionnelles fondées sur les guides officiels Sugargoo concernant les liens, les photos de mesure et les estimations d’expédition. Sources vérifiées le 2 octobre 2026. Les exemples chiffrés sont hypothétiques, pas des mesures vendeur ni des devis actuels.",
  it: "Metodi editoriali basati sulle guide ufficiali Sugargoo relative a link, foto delle misure e preventivi di spedizione. Fonti consultate il 2 ottobre 2026. Gli esempi numerici sono ipotetici, non misure del venditore o preventivi attuali.",
};

export function additionalArticles(lang: Language): Article[] {
  return content[lang].map((article) => ({
    ...article,
    published: dateLabels[lang],
    publishedIso: "2026-10-02",
    modified: "2026-10-02",
    readTime: "10–12 min",
    sourceLine: sourceLabels[lang],
    visual: { title: article.table.title, items: article.table.rows.slice(0, 4).map((row) => ({ label: row[0], value: row[1], note: row[2] ?? "" })) },
  }));
}

export function improveArticle(lang: Language, article: Article): Article {
  const update = revisions[lang].find((item) => item.slug === article.slug);
  if (!update) return article;
  return {
    ...article,
    ...update,
    publishedIso: article.slug === "how-to-read-sugargoo-qc-photos" ? "2026-08-29" : "2026-09-01",
    readTime: "8–10 min",
    modified: "2026-10-02",
    sourceLine: sourceLabels[lang],
    sections: update.sections,
  };
}
