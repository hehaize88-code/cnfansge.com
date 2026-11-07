import type { Lang } from "./site-data";
import type { ArticleSlug } from "./article-data";
import type { LocalizedArticle } from "./localized-article-data";

export const searchImprovedSlugs = ["actual-vs-volumetric-weight", "qc-photo-checklist", "kakobuy-shipping-calculator", "how-to-use-kakobuy"] as const;
type SearchImprovedSlug = (typeof searchImprovedSlugs)[number];
const updates: Record<Lang, Record<SearchImprovedSlug, {title: string; description: string; answer: string}>> = {
  "en": {
    "actual-vs-volumetric-weight": {
      "title": "Kakobuy Volumetric Weight vs Actual Weight: Cost Examples",
      "description": "See how packed dimensions, route divisors and rounding affect Kakobuy chargeable weight. Compare a worked 3.2 kg parcel example before estimating shipping.",
      "answer": "For a route that bills the higher weight, compare the packed scale weight with length × width × height ÷ the route’s divisor. A 40 × 30 × 25 cm box gives 5 kg with an illustrative divisor of 6,000, so it exceeds a 3.2 kg scale weight. Confirm the actual line’s divisor, units and rounding; 6,000 is not a universal Kakobuy rule."
    },
    "qc-photo-checklist": {
      "title": "Kakobuy QC Photos: Size, Defects & Pre-Shipping Checklist",
      "description": "Review Kakobuy warehouse photos for the right variant, measurements and visible defects. Know when to request another angle before submitting your parcel.",
      "answer": "Match the item and selected option first. Then check quantity, visible condition and the measurements that decide fit. Request a specific missing angle before shipping. Historical QC helps prepare questions; only your own order photos show the unit received for you."
    },
    "kakobuy-shipping-calculator": {
      "title": "Kakobuy Shipping Calculator: Weight, Size & Total Cost",
      "description": "Use the Kakobuy shipping calculator with consistent destination, packed weight and dimensions. Compare eligible routes, extra charges and final payable totals.",
      "answer": "Enter the same destination, packed weight and dimensions for every route comparison. Read chargeable-weight rules and excluded services, then confirm the final packed quote in your account. A calculator estimate is not a guaranteed delivered total."
    },
    "how-to-use-kakobuy": {
      "title": "How to Order from Kakobuy: Links, QC and Shipping",
      "description": "Follow the Kakobuy order process from the original product link and selected variant to warehouse QC, packing and international shipping.",
      "answer": "Keep three decisions separate: verify the listing before purchase, inspect your own item after warehouse receipt, and approve the parcel only after checking the full shipping quote. Save the original link, variant and evidence at each step."
    }
  },
  "de": {
    "actual-vs-volumetric-weight": {
      "title": "Kakobuy: Volumengewicht oder Echtgewicht? Kostenbeispiele",
      "description": "Packmaße, Divisor und Rundung bestimmen das Abrechnungsgewicht. Ein 3,2-kg-Beispiel erklärt den Vergleich vor der Versandschätzung.",
      "answer": "Berechnet eine Linie den höheren Wert, vergleichen Sie das Packgewicht mit Länge × Breite × Höhe ÷ dem Divisor der Linie. Bei 40 × 30 × 25 cm und dem beispielhaften Divisor 6.000 entstehen 5 kg statt 3,2 kg Waagengewicht. Divisor, Einheiten und Rundung müssen für die gewählte Linie bestätigt werden; 6.000 gilt nicht pauschal für Kakobuy."
    },
    "qc-photo-checklist": {
      "title": "Kakobuy QC-Fotos: Maße, Mängel und Versand-Checkliste",
      "description": "Lagerfotos auf Variante, Maße und sichtbare Mängel prüfen. Erkennen, wann vor dem Versand eine zusätzliche Ansicht nötig ist.",
      "answer": "Gleichen Sie zuerst Artikel und Variante ab. Prüfen Sie dann Menge, sichtbaren Zustand und entscheidende Maße. Fordern Sie fehlende Ansichten vor dem Versand konkret an. Historische Fotos helfen bei Fragen; nur eigene Auftragsbilder zeigen das für Sie eingetroffene Exemplar."
    },
    "kakobuy-shipping-calculator": {
      "title": "Kakobuy Versandkostenrechner: Gewicht, Maße und Gesamtkosten",
      "description": "Mit gleichem Ziel, Packgewicht und Maßen rechnen. Zulässige Linien, Zusatzkosten und endgültige Zahlbeträge vergleichen.",
      "answer": "Vergleichen Sie Linien mit demselben Ziel, Packgewicht und denselben Maßen. Lesen Sie die Regeln zum Abrechnungsgewicht und ausgeschlossene Leistungen. Bestätigen Sie danach das endgültige Paketangebot im Konto. Eine Schätzung ist kein garantierter Gesamtpreis bis zur Zustellung."
    },
    "how-to-use-kakobuy": {
      "title": "Bei Kakobuy bestellen: Links, QC und Versand",
      "description": "Vom Original-Link und der gewählten Variante über Lagerfotos und Verpackung zum internationalen Paket.",
      "answer": "Trennen Sie drei Entscheidungen: Angebot vor dem Kauf prüfen, eigenes Exemplar nach Eingang kontrollieren und Paket erst nach vollständigem Versandangebot freigeben. Speichern Sie Original-Link, Variante und Nachweise für jede Phase."
    }
  },
  "es": {
    "actual-vs-volumetric-weight": {
      "title": "Kakobuy: peso volumétrico frente a real, con ejemplos",
      "description": "Comprende cómo dimensiones, divisor y redondeo cambian el peso facturable. Ejemplo de un paquete de 3,2 kg antes de estimar el envío.",
      "answer": "En una ruta que cobra el mayor peso, compara el peso embalado con largo × ancho × alto ÷ divisor de la línea. Una caja de 40 × 30 × 25 cm da 5 kg con el divisor ilustrativo 6.000, más que 3,2 kg en báscula. Confirma divisor, unidades y redondeo reales: 6.000 no es una regla universal Kakobuy."
    },
    "qc-photo-checklist": {
      "title": "Fotos QC Kakobuy: medidas, defectos y revisión antes del envío",
      "description": "Comprueba variante, medidas y defectos visibles en fotos del almacén. Aprende cuándo solicitar otro ángulo antes de enviar.",
      "answer": "Primero confirma artículo y opción. Después revisa cantidad, estado visible y medidas decisivas para el ajuste. Pide los ángulos que faltan antes del envío. El QC histórico ayuda a preparar preguntas; solo las fotos de tu pedido muestran la unidad recibida para ti."
    },
    "kakobuy-shipping-calculator": {
      "title": "Calculador Kakobuy: peso, dimensiones y coste total",
      "description": "Usa destino, peso embalado y medidas coherentes para comparar rutas elegibles, cargos adicionales y totales finales.",
      "answer": "Compara todas las rutas con el mismo destino, peso y dimensiones embaladas. Lee las reglas de peso facturable y servicios excluidos y confirma el presupuesto final del paquete en tu cuenta. La estimación no garantiza el coste total entregado."
    },
    "how-to-use-kakobuy": {
      "title": "Cómo pedir en Kakobuy: enlaces, QC y envío",
      "description": "Sigue el pedido desde el enlace original y la variante hasta las fotos QC, el embalaje y la expedición internacional.",
      "answer": "Separa tres decisiones: verificar el anuncio antes de comprar, inspeccionar tu artículo al llegar al almacén y aprobar el paquete después de revisar el presupuesto completo. Guarda enlace original, variante y pruebas en cada etapa."
    }
  },
  "fr": {
    "actual-vs-volumetric-weight": {
      "title": "Kakobuy : poids volumétrique ou réel, exemples de coût",
      "description": "Dimensions, diviseur et arrondis influencent le poids facturé. Un exemple de colis de 3,2 kg explique comment comparer les frais.",
      "answer": "Pour une ligne facturant le poids le plus élevé, comparez le poids emballé à longueur × largeur × hauteur ÷ diviseur de la ligne. Une boîte de 40 × 30 × 25 cm donne 5 kg avec le diviseur illustratif 6 000, contre 3,2 kg sur la balance. Confirmez diviseur, unités et arrondis réels : 6 000 n’est pas une règle universelle Kakobuy."
    },
    "qc-photo-checklist": {
      "title": "Photos QC Kakobuy : mesures, défauts et contrôle avant envoi",
      "description": "Vérifiez variante, mesures et défauts visibles sur les photos d’entrepôt. Déterminez quand demander une vue supplémentaire avant l’envoi.",
      "answer": "Rapprochez d’abord article et option choisie. Contrôlez ensuite quantité, état visible et mesures décisives. Demandez les vues manquantes avant l’envoi. Les anciennes photos préparent vos questions ; seules celles de votre commande montrent l’exemplaire reçu pour vous."
    },
    "kakobuy-shipping-calculator": {
      "title": "Calculateur Kakobuy : poids, dimensions et coût total",
      "description": "Comparez les lignes admissibles, frais supplémentaires et totaux avec une destination et des mesures de colis cohérentes.",
      "answer": "Utilisez la même destination, le même poids emballé et les mêmes dimensions pour comparer les lignes. Lisez les règles de poids facturable et services exclus, puis confirmez le devis final dans votre compte. L’estimation ne garantit pas le total livré."
    },
    "how-to-use-kakobuy": {
      "title": "Commander sur Kakobuy : liens, QC et livraison",
      "description": "Suivez le parcours du lien original et de la variante jusqu’aux photos d’entrepôt, à l’emballage et au colis international.",
      "answer": "Séparez trois décisions : vérifier l’annonce avant l’achat, examiner votre article à réception et approuver le colis après lecture du devis complet. Conservez lien original, variante et preuves à chaque étape."
    }
  },
  "it": {
    "actual-vs-volumetric-weight": {
      "title": "Kakobuy: peso volumetrico e reale, esempi di costo",
      "description": "Dimensioni, divisore e arrotondamenti cambiano il peso fatturabile. Un esempio da 3,2 kg aiuta a confrontare la spedizione.",
      "answer": "Per una linea che addebita il peso maggiore, confronta il peso imballato con lunghezza × larghezza × altezza ÷ divisore della linea. Una scatola di 40 × 30 × 25 cm dà 5 kg col divisore illustrativo 6.000, contro 3,2 kg reali. Conferma divisore, unità e arrotondamento effettivi: 6.000 non è una regola universale Kakobuy."
    },
    "qc-photo-checklist": {
      "title": "Foto QC Kakobuy: misure, difetti e controlli prima dell’invio",
      "description": "Controlla variante, misure e difetti visibili nelle foto di magazzino. Scopri quando richiedere un’altra inquadratura prima della spedizione.",
      "answer": "Abbina prima articolo e opzione scelta. Controlla quantità, stato visibile e misure decisive per la vestibilità. Richiedi le viste mancanti prima dell’invio. Il QC storico prepara le domande; solo le foto del tuo ordine mostrano l’unità ricevuta per te."
    },
    "kakobuy-shipping-calculator": {
      "title": "Calcolatore Kakobuy: peso, dimensioni e costo totale",
      "description": "Confronta linee ammesse, spese aggiuntive e totali usando la stessa destinazione, peso imballato e dimensioni.",
      "answer": "Confronta le linee con destinazione, peso e misure imballate identici. Leggi regole del peso fatturabile e servizi esclusi, poi conferma il preventivo finale nell’account. Una stima non garantisce il costo complessivo consegnato."
    },
    "how-to-use-kakobuy": {
      "title": "Come ordinare su Kakobuy: link, QC e spedizione",
      "description": "Segui il percorso dal link originale e dalla variante alle foto di magazzino, all’imballaggio e al pacco internazionale.",
      "answer": "Separa tre decisioni: verifica l’inserzione prima dell’acquisto, controlla il tuo articolo alla ricezione e approva il pacco dopo il preventivo completo. Conserva link originale, variante e prove per ogni fase."
    }
  }
};

export function applySearchImprovements(lang: Lang, slug: ArticleSlug, article: LocalizedArticle): LocalizedArticle {
  if (!(slug in updates[lang])) return article;
  const sections = slug === "actual-vs-volumetric-weight" ? [article.sections[article.sections.length - 1], ...article.sections.slice(0, -1)] : article.sections;
  return {...article, ...updates[lang][slug as SearchImprovedSlug], sections};
}
