import Link from "next/link";
import { Locale, navLabels } from "@/lib/site-data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = {
    en:{sub:"Independent discovery and educational resource.",disclaimer:"Not affiliated with or endorsed by Sugargoo. Product images, listings, prices and availability can change. Always confirm the live listing, warehouse QC and shipping estimate before payment."},
    de:{sub:"Unabhängige Produktsuche und Lernressource.",disclaimer:"Nicht mit Sugargoo verbunden oder von Sugargoo unterstützt. Produktbilder, Angebote, Preise und Verfügbarkeit können sich ändern. Prüfe vor der Zahlung immer das aktuelle Angebot, die Lager-QC und die Versandschätzung."},
    es:{sub:"Recurso independiente de búsqueda y aprendizaje.",disclaimer:"No está afiliado ni respaldado por Sugargoo. Las imágenes, anuncios, precios y disponibilidad pueden cambiar. Confirma siempre el anuncio activo, el QC del almacén y la estimación de envío antes de pagar."},
    fr:{sub:"Ressource indépendante de recherche et d’information.",disclaimer:"Site indépendant, non affilié à Sugargoo et sans approbation de sa part. Images, annonces, prix et disponibilité peuvent changer. Vérifiez toujours l’annonce active, le QC d’entrepôt et l’estimation d’expédition avant paiement."},
    it:{sub:"Risorsa indipendente per la ricerca e l’apprendimento.",disclaimer:"Non affiliato né approvato da Sugargoo. Immagini, inserzioni, prezzi e disponibilità possono cambiare. Prima del pagamento verifica sempre l’inserzione attiva, il QC in magazzino e la stima di spedizione."},
  }[locale];
  return (
    <footer className="site-footer">
      <div className="site-footer-inner page-width">
        <div className="footer-brand"><img src="/sugargoo-logo.png" alt="Sugargoo" width="240" height="74"/><small>{copy.sub}</small></div>
        <nav>{Object.entries(navLabels[locale]).map(([slug, label]) => <Link href={`/${locale}/${slug}/`} key={slug}>{label}</Link>)}</nav>
        <p className="disclaimer">{copy.disclaimer}</p>
      </div>
    </footer>
  );
}
