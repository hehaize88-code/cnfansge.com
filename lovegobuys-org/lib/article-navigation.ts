import type { Lang } from "./site-data";
export const articleUi: Record<Lang, { contents: string; updated: string; all: string; next: string; overview: string; guideTitle: string; guideIntro: string }> = {
  en: { contents: "On this page", updated: "Updated", all: "All LoveGoBuy guides", next: "Continue with the next step", overview: "Buying overview", guideTitle: "How to Buy with LoveGoBuy: Start Here", guideIntro: "Follow the purchase from source link to warehouse, then review QC and plan the international parcel. Open the full buying guide for the detailed checks at each stage." },
  de: { contents: "Auf dieser Seite", updated: "Aktualisiert", all: "Alle LoveGoBuy-Ratgeber", next: "Mit dem nächsten Schritt fortfahren", overview: "Kaufüberblick", guideTitle: "Mit LoveGoBuy kaufen: Der Einstieg", guideIntro: "Folge dem Kauf vom Quelllink ins Lager, prüfe anschließend QC und plane das internationale Paket. Die vollständige Anleitung erklärt die Kontrollen jeder Phase." },
  es: { contents: "En esta página", updated: "Actualizado", all: "Todas las guías LoveGoBuy", next: "Continúa con el siguiente paso", overview: "Resumen de compra", guideTitle: "Cómo comprar con LoveGoBuy: empieza aquí", guideIntro: "Sigue la compra desde el enlace hasta el almacén, revisa el QC y prepara el paquete internacional. La guía completa explica las comprobaciones de cada etapa." },
  fr: { contents: "Dans cet article", updated: "Mis à jour", all: "Tous les guides LoveGoBuy", next: "Passer à l’étape suivante", overview: "Parcours d’achat", guideTitle: "Acheter avec LoveGoBuy : commencer ici", guideIntro: "Suivez l’achat du lien à l’entrepôt, examinez le QC puis préparez le colis international. Le guide complet détaille les vérifications de chaque étape." },
  it: { contents: "In questa pagina", updated: "Aggiornato", all: "Tutte le guide LoveGoBuy", next: "Continua con il prossimo passo", overview: "Percorso di acquisto", guideTitle: "Come comprare con LoveGoBuy: inizia qui", guideIntro: "Segui l’acquisto dal link al magazzino, controlla il QC e prepara il pacco internazionale. La guida completa spiega i controlli di ogni fase." },
};

const clusters = [
  ["lovegobuy-taobao-1688-weidian-links", "how-to-buy-with-lovegobuy-2026", "lovegobuy-spreadsheet-research-workflow", "lovegobuy-order-status-warehouse-parcel"],
  ["lovegobuy-qc-finder-warehouse-photos", "lovegobuy-qc-photos-guide", "lovegobuy-warehouse-return-refund-evidence", "is-lovegobuy-legit-review-2026"],
  ["lovegobuy-shipping-cost-guide", "lovegobuy-rehearsal-shipping-packed-weight", "lovegobuy-shipping-usa-cost-weight-guide", "lovegobuy-shipping-france-weight-route-checks", "lovegobuy-parcel-tracking-status-handoff"],
];
export function relatedSlugs(slug: string) {
  return (clusters.find(group => group.includes(slug)) ?? []).filter(item => item !== slug).slice(0, 3);
}
