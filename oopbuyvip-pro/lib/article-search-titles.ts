import type { Article, Locale } from "@/lib/site";

const titles: Record<Locale, string[]> = {
  en: ["OOPBuy Shoe QC: Shape & Symmetry", "OOPBuy Hoodie QC: Measurements & Prints", "OOPBuy Jersey QC: Names, Numbers & Badges", "OOPBuy QC Size Labels: Verify the Tag", "OOPBuy QC Measurements: Read Ruler Photos", "OOPBuy QC Colors: Lighting or Wrong Variant?", "OOPBuy Clothing QC: Seams & Stitching", "OOPBuy Bag QC: Straps, Zippers & Hardware"],
  de: ["OOPBuy Schuh-QC: Form und Symmetrie", "OOPBuy Hoodie-QC: Maße und Aufdrucke", "OOPBuy Trikot-QC: Namen, Nummern und Logos", "OOPBuy QC: Größenetiketten prüfen", "OOPBuy QC: Maßfotos richtig lesen", "OOPBuy QC: Licht oder falsche Farbe?", "OOPBuy Kleidungs-QC: Nähte prüfen", "OOPBuy Taschen-QC: Gurte und Beschläge"],
  es: ["QC de zapatos OOPBuy: forma y simetría", "QC de sudaderas OOPBuy: medidas y estampados", "QC de camisetas OOPBuy: nombres y números", "QC OOPBuy: comprobar etiquetas de talla", "QC OOPBuy: interpretar fotos de medidas", "QC OOPBuy: luz o color equivocado", "QC de ropa OOPBuy: revisar costuras", "QC de bolsos OOPBuy: correas y herrajes"],
  fr: ["QC chaussures OOPBuy : forme et symétrie", "QC sweats OOPBuy : mesures et motifs", "QC maillots OOPBuy : noms et numéros", "QC OOPBuy : vérifier les étiquettes de taille", "QC OOPBuy : lire les photos de mesures", "QC OOPBuy : éclairage ou mauvaise couleur", "QC vêtements OOPBuy : vérifier les coutures", "QC sacs OOPBuy : sangles et fermetures"],
  it: ["QC scarpe OOPBuy: forma e simmetria", "QC felpe OOPBuy: misure e stampe", "QC maglie OOPBuy: nomi, numeri e stemmi", "QC OOPBuy: verificare le etichette taglia", "QC OOPBuy: leggere le foto delle misure", "QC OOPBuy: luce o colore sbagliato", "QC abiti OOPBuy: controllare le cuciture", "QC borse OOPBuy: cinghie e accessori"],
};

const slugs = ["oopbuy-shoe-qc-symmetry", "oopbuy-hoodie-qc-measurements", "oopbuy-jersey-qc-names-numbers", "oopbuy-qc-size-labels", "oopbuy-qc-measurement-photos", "oopbuy-qc-color-differences", "oopbuy-qc-stitching-seams", "oopbuy-bag-qc-hardware"];

export function articleSearchTitle(locale: Locale, article: Article) {
  const index = slugs.indexOf(article.slug);
  return index < 0 ? article.title : titles[locale][index];
}
