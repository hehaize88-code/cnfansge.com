import type { Metadata } from "next";
import type { ArticleSlug } from "./article-data";
import { getLocalizedArticle } from "./localized-article-data";
import { Lang, languages, localizedPath } from "./site-data";
import type { SectionKey } from "./ResearchPage";

export const baseUrl = "https://kakobuyvip.store";

type SeoEntry = { title: string; description: string; keywords: string[] };

const sectionSeo: Record<Lang, Record<SectionKey, SeoEntry>> = {
  en: {
    spreadsheet: { title: "Kakobuy Spreadsheet: Category & Route Index", description: "Use the Kakobuy spreadsheet index to compare focused categories, matching images, USD references and current product destinations.", keywords: ["Kakobuy spreadsheet", "Kakobuy category links", "Kakobuy product routes"] },
    finds: { title: "Kakobuy Finds 2026: Latest Product Routes", description: "Explore recently added Kakobuy finds with matching product images, category labels, USD references and current detail routes.", keywords: ["Kakobuy finds", "Kakobuy product links", "latest Kakobuy finds"] },
    guide: { title: "Kakobuy Guide: Product Link to Warehouse", description: "Follow the Kakobuy shopping-agent flow from a product link to warehouse QC, storage, returns, packing and international shipping.", keywords: ["how to use Kakobuy", "Kakobuy guide", "Kakobuy warehouse"] },
    qc: { title: "Kakobuy QC Guide: Check Warehouse Photos", description: "Use a practical Kakobuy QC checklist for item identity, shape, measurements, stitching, prints and visible defects.", keywords: ["Kakobuy QC", "Kakobuy QC photos", "Kakobuy quality check"] },
    shipping: { title: "Kakobuy Shipping Guide: Weight and Packing", description: "Plan Kakobuy shipping using actual weight, parcel dimensions, packaging, current line rules and live estimates.", keywords: ["Kakobuy shipping", "Kakobuy shipping cost", "Kakobuy shipping weight"] },
    faq: { title: "Kakobuy FAQ: Storage, Returns, Fees and QC", description: "Read fact-checked answers about Kakobuy storage, costs, warehouse photos, returns, exchanges and shipping estimates.", keywords: ["Kakobuy FAQ", "Kakobuy fees", "Kakobuy return policy"] },
    articles: { title: "Kakobuy Guides, QC and Shipping Articles", description: "Read practical Kakobuy guides about ordering, QC photos, shipping, fees, warehouse storage, returns and user reports.", keywords: ["Kakobuy guide", "Kakobuy review", "Kakobuy articles"] },
  },
  de: {
    spreadsheet: { title: "Kakobuy Spreadsheet: Kategorien und Routen", description: "Kakobuy-Kategorien, passende Bilder, USD-Referenzen und aktuelle Produktrouten strukturiert vergleichen.", keywords: ["Kakobuy Spreadsheet", "Kakobuy Kategorien", "Kakobuy Produktrouten"] },
    finds: { title: "Kakobuy Funde 2026: Aktuelle Produktrouten", description: "Neue Kakobuy-Funde mit passenden Produktbildern, Kategorien, USD-Referenzen und aktuellen Detailrouten ansehen.", keywords: ["Kakobuy Funde", "Kakobuy Produktlinks", "neue Kakobuy Produkte"] },
    guide: { title: "Kakobuy Ratgeber: Produktlink bis Lager", description: "Den Kakobuy-Ablauf von Produktlink und Bestellung über Lager-QC, Rückgabe und Verpackung bis zum Versand verstehen.", keywords: ["Kakobuy Ratgeber", "Kakobuy nutzen", "Kakobuy Lager"] },
    qc: { title: "Kakobuy QC: Lagerfotos richtig prüfen", description: "Kakobuy-QC-Fotos auf Identität, Form, Maße, Nähte, Drucke und sichtbare Mängel prüfen.", keywords: ["Kakobuy QC", "Kakobuy QC Fotos", "Kakobuy Qualitätsprüfung"] },
    shipping: { title: "Kakobuy Versand: Gewicht und Verpackung", description: "Kakobuy-Versand mit Echtgewicht, Paketmaßen, Verpackung, aktuellen Linienregeln und Live-Schätzungen planen.", keywords: ["Kakobuy Versand", "Kakobuy Versandkosten", "Kakobuy Paketgewicht"] },
    faq: { title: "Kakobuy FAQ: Lagerung, Rückgabe und Kosten", description: "Geprüfte Antworten zu Kakobuy-Lagerung, Kosten, QC-Fotos, Rückgabe, Umtausch und Versandschätzungen.", keywords: ["Kakobuy FAQ", "Kakobuy Kosten", "Kakobuy Rückgabe"] },
    articles: { title: "Kakobuy Ratgeber, QC- und Versandartikel", description: "Praxisnahe Kakobuy-Ratgeber zu Bestellung, QC-Fotos, Versand, Kosten, Lagerung, Rückgabe und Nutzerberichten.", keywords: ["Kakobuy Ratgeber", "Kakobuy Bewertung", "Kakobuy Artikel"] },
  },
  es: {
    spreadsheet: { title: "Spreadsheet Kakobuy: categorías y rutas", description: "Compara categorías Kakobuy, imágenes correspondientes, referencias USD y rutas actuales de productos.", keywords: ["spreadsheet Kakobuy", "categorías Kakobuy", "rutas Kakobuy"] },
    finds: { title: "Hallazgos Kakobuy 2026: rutas actuales", description: "Explora hallazgos Kakobuy recientes con imágenes correspondientes, categorías, referencias USD y rutas actuales.", keywords: ["hallazgos Kakobuy", "enlaces Kakobuy", "productos Kakobuy"] },
    guide: { title: "Guía Kakobuy: del enlace al almacén", description: "Sigue el proceso Kakobuy desde el enlace y el pedido hasta QC, almacenamiento, devoluciones, embalaje y envío.", keywords: ["guía Kakobuy", "cómo usar Kakobuy", "almacén Kakobuy"] },
    qc: { title: "QC Kakobuy: cómo revisar fotos de almacén", description: "Revisa fotos QC Kakobuy para comprobar identidad, forma, medidas, costuras, estampados y defectos visibles.", keywords: ["QC Kakobuy", "fotos QC Kakobuy", "control Kakobuy"] },
    shipping: { title: "Envío Kakobuy: peso y embalaje", description: "Planifica el envío Kakobuy con peso real, dimensiones, embalaje, reglas actuales y estimaciones en vivo.", keywords: ["envío Kakobuy", "coste envío Kakobuy", "peso Kakobuy"] },
    faq: { title: "FAQ Kakobuy: almacén, devoluciones y costes", description: "Respuestas contrastadas sobre almacenamiento Kakobuy, costes, QC, devoluciones, cambios y estimaciones.", keywords: ["FAQ Kakobuy", "costes Kakobuy", "devolución Kakobuy"] },
    articles: { title: "Guías Kakobuy sobre QC, envío y almacén", description: "Guías prácticas Kakobuy sobre pedidos, fotos QC, envío, costes, almacén, devoluciones e informes de usuarios.", keywords: ["guía Kakobuy", "reseña Kakobuy", "artículos Kakobuy"] },
  },
  fr: {
    spreadsheet: { title: "Spreadsheet Kakobuy : catégories et liens", description: "Comparez catégories Kakobuy, images correspondantes, références USD et destinations produit actuelles.", keywords: ["spreadsheet Kakobuy", "catégories Kakobuy", "liens Kakobuy"] },
    finds: { title: "Sélections Kakobuy 2026 : liens actuels", description: "Découvrez les sélections Kakobuy récentes avec images, catégories, références USD et destinations actuelles.", keywords: ["sélections Kakobuy", "liens Kakobuy", "produits Kakobuy"] },
    guide: { title: "Guide Kakobuy : du lien à l’entrepôt", description: "Suivez le parcours Kakobuy du lien et de la commande au QC, au stockage, au retour, à l’emballage et à l’envoi.", keywords: ["guide Kakobuy", "utiliser Kakobuy", "entrepôt Kakobuy"] },
    qc: { title: "QC Kakobuy : vérifier les photos d’entrepôt", description: "Contrôlez les photos QC Kakobuy pour l’identité, la forme, les mesures, les coutures, les motifs et les défauts.", keywords: ["QC Kakobuy", "photos QC Kakobuy", "contrôle Kakobuy"] },
    shipping: { title: "Livraison Kakobuy : poids et emballage", description: "Planifiez l’envoi Kakobuy avec poids réel, dimensions, emballage, règles actuelles et estimations en direct.", keywords: ["livraison Kakobuy", "frais Kakobuy", "poids colis Kakobuy"] },
    faq: { title: "FAQ Kakobuy : stockage, retours et frais", description: "Réponses vérifiées sur le stockage Kakobuy, les frais, le QC, les retours, les échanges et les estimations.", keywords: ["FAQ Kakobuy", "frais Kakobuy", "retour Kakobuy"] },
    articles: { title: "Guides Kakobuy : QC, livraison et entrepôt", description: "Guides pratiques Kakobuy sur les commandes, photos QC, livraison, frais, stockage, retours et témoignages.", keywords: ["guide Kakobuy", "avis Kakobuy", "articles Kakobuy"] },
  },
  it: {
    spreadsheet: { title: "Spreadsheet Kakobuy: categorie e percorsi", description: "Confronta categorie Kakobuy, immagini corrispondenti, riferimenti USD e destinazioni prodotto attuali.", keywords: ["spreadsheet Kakobuy", "categorie Kakobuy", "percorsi Kakobuy"] },
    finds: { title: "Prodotti Kakobuy 2026: percorsi attuali", description: "Esplora prodotti Kakobuy recenti con immagini corrispondenti, categorie, riferimenti USD e percorsi attuali.", keywords: ["prodotti Kakobuy", "link Kakobuy", "novità Kakobuy"] },
    guide: { title: "Guida Kakobuy: dal link al magazzino", description: "Segui il processo Kakobuy dal link e dall’ordine fino a QC, deposito, resi, imballaggio e spedizione.", keywords: ["guida Kakobuy", "come usare Kakobuy", "magazzino Kakobuy"] },
    qc: { title: "QC Kakobuy: controllare le foto di magazzino", description: "Controlla le foto QC Kakobuy per identità, forma, misure, cuciture, stampe e difetti visibili.", keywords: ["QC Kakobuy", "foto QC Kakobuy", "controllo Kakobuy"] },
    shipping: { title: "Spedizione Kakobuy: peso e imballaggio", description: "Pianifica la spedizione Kakobuy con peso reale, dimensioni, imballaggio, regole attuali e stime live.", keywords: ["spedizione Kakobuy", "costo Kakobuy", "peso pacco Kakobuy"] },
    faq: { title: "FAQ Kakobuy: deposito, resi e costi", description: "Risposte verificate su deposito Kakobuy, costi, QC, resi, cambi e stime di spedizione.", keywords: ["FAQ Kakobuy", "costi Kakobuy", "resi Kakobuy"] },
    articles: { title: "Guide Kakobuy su QC, spedizione e magazzino", description: "Guide pratiche Kakobuy su ordini, foto QC, spedizione, costi, deposito, resi e segnalazioni utenti.", keywords: ["guida Kakobuy", "recensione Kakobuy", "articoli Kakobuy"] },
  },
};

export function languageAlternates(pathname: string) {
  return Object.fromEntries([
    ...languages.map((lang) => [lang, localizedPath(pathname, lang)]),
    ["x-default", localizedPath(pathname, "en")],
  ]);
}

export function sectionMetadata(section: SectionKey, lang: Lang): Metadata {
  const entry = sectionSeo[lang][section];
  const pathname = `/${section}`;
  return {
    ...entry,
    other: { "content-language": lang },
    alternates: { canonical: localizedPath(pathname, lang), languages: languageAlternates(pathname) },
  };
}

export function homeMetadata(lang: Lang): Metadata {
  const titles: Record<Lang, string> = {
    en: "Latest Kakobuy Finds & Product Routes 2026",
    de: "Aktuelle Kakobuy-Funde und Produktrouten 2026",
    es: "Últimos hallazgos y rutas Kakobuy 2026",
    fr: "Dernières sélections et liens Kakobuy 2026",
    it: "Ultimi prodotti e percorsi Kakobuy 2026",
  };
  const descriptions: Record<Lang, string> = {
    en: "Browse recently added Kakobuy finds, focused categories, matching product images, current routes and practical QC checks.",
    de: "Neue Kakobuy-Funde, klare Kategorien, passende Produktbilder, aktuelle Routen und praktische QC-Prüfungen.",
    es: "Consulta hallazgos Kakobuy recientes, categorías claras, imágenes correspondientes, rutas actuales y controles QC.",
    fr: "Découvrez les sélections Kakobuy récentes, catégories ciblées, images correspondantes, liens actuels et contrôles QC.",
    it: "Esplora prodotti Kakobuy recenti, categorie mirate, immagini corrispondenti, percorsi attuali e controlli QC.",
  };
  return {
    title: titles[lang],
    description: descriptions[lang],
    other: { "content-language": lang },
    alternates: { canonical: localizedPath("/", lang), languages: languageAlternates("/") },
  };
}

export function articleMetadata(slug: ArticleSlug, lang: Lang): Metadata {
  const article = getLocalizedArticle(lang, slug);
  const pathname = `/articles/${slug}`;
  const canonical = localizedPath(pathname, lang);
  const metadata: Metadata = {
    title: `${article.title} | KakobuyVIP`,
    description: article.description,
    keywords: [articleByIntent[slug], "Kakobuy guide", "Kakobuy finds"],
    other: { "content-language": lang },
    alternates: { canonical, languages: languageAlternates(pathname) },
  };

  if (slug === "kakobuy-usa-pre-order-readiness-checklist" || slug === "kakobuy-us-delivery-address-format") {
    const publishedTime = slug === "kakobuy-us-delivery-address-format" ? "2026-09-04T00:00:00+08:00" : "2026-09-02T00:00:00+08:00";
    metadata.openGraph = {
      type: "article",
      url: canonical,
      title: article.title,
      description: article.description,
      siteName: "KakobuyVIP",
      locale: { en: "en_US", de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT" }[lang],
      alternateLocale: languages.filter((language) => language !== lang).map((language) => ({ en: "en_US", de: "de_DE", es: "es_ES", fr: "fr_FR", it: "it_IT" })[language]),
      publishedTime,
      modifiedTime: publishedTime,
    };
  }

  return metadata;
}

const articleByIntent: Record<ArticleSlug, string> = {
  "how-to-use-kakobuy": "how to use Kakobuy",
  "qc-photo-checklist": "Kakobuy QC photos",
  "actual-vs-volumetric-weight": "Kakobuy shipping cost",
  "kakobuy-fees-explained": "Kakobuy fees",
  "kakobuy-warehouse-storage-guide": "Kakobuy warehouse",
  "kakobuy-return-exchange-guide": "Kakobuy return policy",
  "kakobuy-review-2026": "Kakobuy review 2026",
  "kakobuy-usa-pre-order-readiness-checklist": "Kakobuy USA guide 2026",
  "kakobuy-us-delivery-address-format": "Kakobuy US delivery address",
};
