import type { Article, ArticleSection } from "./articles-data";
import type { Language } from "./site-data";
import content from "./seo-content/november-refresh.json";

export const novemberSourceLabels: Record<Language, string> = {
  en: "Official guidance reviewed November 10, 2026. Worked examples are illustrative, not live rates or delivery promises. Check the terms shown for your own order and parcel.",
  de: "Offizielle Hinweise geprüft am 10. November 2026. Rechenbeispiele sind illustrativ, keine aktuellen Tarife oder Lieferzusagen. Prüfe die Bedingungen deiner Bestellung und deines Pakets.",
  es: "Guías oficiales revisadas el 10 de noviembre de 2026. Los ejemplos son ilustrativos, no tarifas actuales ni promesas de entrega. Comprueba las condiciones de tu pedido y paquete.",
  fr: "Guides officiels vérifiés le 10 novembre 2026. Les exemples sont illustratifs, sans valeur de tarif actuel ni promesse de livraison. Vérifiez les conditions de votre commande et de votre colis.",
  it: "Guide ufficiali consultate il 10 novembre 2026. Gli esempi sono illustrativi, non tariffe attuali o promesse di consegna. Controlla le condizioni del tuo ordine e del pacco.",
};
const titles: Record<Language, Record<string, [string, string]>> = {
  en: {
    fees: ["Sugargoo Fees: Product, Local Freight & Shipping Costs", "Build the full Sugargoo cost before paying: goods, domestic delivery, payment conversion, warehouse services and international shipping."],
    returns: ["Sugargoo Returns & Refunds: Stages, Costs and Deadlines", "Check return eligibility, separate storage and seller deadlines, track refund stages and reconcile freight deductions before shipping internationally."],
  },
  de: {
    fees: ["Sugargoo-Gebühren: Waren, Inlandsfracht und Versand", "Berechne die Gesamtkosten vor Zahlung: Waren, Inlandslieferung, Umrechnung, Lagerleistungen und internationaler Versand."],
    returns: ["Sugargoo-Rückgaben: Erstattungsphasen, Kosten und Fristen", "Prüfe Rückgabeberechtigung, trenne Lager- und Verkäuferfristen und verfolge Erstattung und Frachtabzüge vor internationalem Versand."],
  },
  es: {
    fees: ["Gastos Sugargoo: productos, transporte nacional y envío", "Calcula el coste completo antes de pagar: productos, entrega nacional, conversión, servicios de almacén y transporte internacional."],
    returns: ["Devoluciones Sugargoo: reembolsos, costes y plazos", "Comprueba requisitos, separa plazos del vendedor y almacén y sigue reembolsos y deducciones antes del envío internacional."],
  },
  fr: {
    fees: ["Frais Sugargoo : produits, transport intérieur et livraison", "Calculez le coût complet avant paiement : marchandises, livraison intérieure, conversion, services et transport international."],
    returns: ["Retours Sugargoo : remboursements, frais et délais", "Vérifiez les conditions, séparez stockage et délai vendeur, puis suivez le remboursement et les déductions avant l’envoi international."],
  },
  it: {
    fees: ["Costi Sugargoo: prodotti, trasporto nazionale e spedizione", "Calcola il totale prima del pagamento: merce, consegna nazionale, conversione, servizi di magazzino e trasporto internazionale."],
    returns: ["Resi Sugargoo: rimborsi, costi e scadenze", "Controlla requisiti, separa termini del venditore e deposito e segui rimborso e trattenute prima dell’invio internazionale."],
  },
};

export function refreshNovember(lang: Language, article: Article): Article {
  const topics: Record<string, "fees" | "returns" | "qc" | "shipping" | undefined> = {
    "sugargoo-fees-cost-breakdown-2026": "fees",
    "sugargoo-returns-refunds-storage-guide": "returns",
    "how-to-read-sugargoo-qc-photos": "qc",
    "sugargoo-shipping-cost-guide-2026": "shipping",
  };
  const key = topics[article.slug];
  if (!key) return article;
  const copy = content[lang];
  const section = (name: keyof typeof copy): ArticleSection => ({ heading: copy[name][0], body: copy[name].slice(1) });
  const sections = article.sections.map((s) => ({ ...s, body: [...s.body] }));
  if (key === "fees") {
    // Replace dated payment, add-on, coverage and refund figures in every locale.
    sections[4] = section("payment");
    sections[6] = section("services");
    sections[8] = section("protection");
    sections[9] = section("returns");
  }
  if (key === "returns") sections.splice(6, 1); // Superseded timing section, replaced by the stage-based lead.
  const title = titles[lang][key];
  const labels = { en: ["Payment methods", "Returns and refunds", "Tracking help"], de: ["Zahlungsmethoden", "Rückgaben und Erstattungen", "Trackinghilfe"], es: ["Métodos de pago", "Devoluciones y reembolsos", "Ayuda de seguimiento"], fr: ["Moyens de paiement", "Retours et remboursements", "Aide au suivi"], it: ["Metodi di pagamento", "Resi e rimborsi", "Aiuto per il tracking"] }[lang];
  const references = [...(article.references ?? []),
    ...(key === "fees" ? [{ label: `Sugargoo · ${labels[0]}`, url: "https://blog.sugargoo.com/sugargoo-payment-methods/" }] : []),
    ...(key === "returns" || key === "qc" || key === "fees" ? [{ label: `Sugargoo · ${labels[1]}`, url: "https://blog.sugargoo.com/sugargoo-returns-refunds-guide/" }] : []),
    ...(key === "shipping" ? [{ label: `Sugargoo · ${labels[2]}`, url: "https://blog.sugargoo.com/how-to-track-your-package-shipping-status-transit-nodes-and-delivery-time-estimates/" }] : []),
  ];
  return { ...article, ...(title ? { title: title[0], dek: title[1] } : {}), modified: "2026-11-10", sourceLine: novemberSourceLabels[lang], sections: [section(key), ...sections], references };
}
