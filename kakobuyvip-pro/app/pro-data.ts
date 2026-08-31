import type { Locale, PageKey } from "./site-data";

export type DecisionKey = Extract<
  PageKey,
  | "calculator"
  | "shippingLines"
  | "packing"
  | "warehouse"
  | "returns"
  | "qcTroubleshooting"
>;

type LocalDecision = {
  title: string;
  description: string;
  steps: Array<[string, string]>;
  caution: string;
  source: string;
};

export const decisionKeys: DecisionKey[] = [
  "calculator",
  "shippingLines",
  "packing",
  "warehouse",
  "returns",
  "qcTroubleshooting",
];

export const proNav: Record<Locale, string[]> = {
  en: ["Calculator", "Lines", "Packing", "Warehouse", "Returns", "QC Help", "Articles"],
  de: ["Rechner", "Linien", "Verpackung", "Lager", "Rückgaben", "QC-Hilfe", "Artikel"],
  es: ["Calculadora", "Líneas", "Embalaje", "Almacén", "Devoluciones", "Ayuda QC", "Artículos"],
  fr: ["Calculateur", "Lignes", "Emballage", "Entrepôt", "Retours", "Aide QC", "Articles"],
  it: ["Calcolatore", "Linee", "Imballaggio", "Magazzino", "Resi", "Aiuto QC", "Articoli"],
};

export const proHome: Record<
  Locale,
  {
    badge: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    section: string;
    sectionBody: string;
    liveNote: string;
  }
> = {
  en: {
    badge: "Independent parcel decision desk · updated 31 Aug 2026",
    title: "Price the parcel before you release it.",
    body: "A Kakobuy shipping calculator, warehouse-status and returns guide for comparing packed weight, route rules, packaging choices and after-sales options before international dispatch.",
    primary: "Open shipping calculator guide",
    secondary: "Browse the source catalog",
    section: "Six decisions before parcel payment",
    sectionBody: "Each guide isolates one decision so changing routes, dimensions and seller rules are easier to verify.",
    liveNote: "Platform rules and prices can change; verify the live page before payment.",
  },
  de: {
    badge: "Unabhängiger Paket-Entscheidungsdesk · aktualisiert 31. Aug. 2026",
    title: "Paketkosten vor der Freigabe prüfen.",
    body: "Ein Kakobuy-Leitfaden zu Versandkalkulation, Lagerstatus und Rückgaben: Packgewicht, Linienregeln, Verpackung und After-Sales vor dem internationalen Versand vergleichen.",
    primary: "Versandkalkulator öffnen",
    secondary: "Quellkatalog öffnen",
    section: "Sechs Entscheidungen vor der Paketzahlung",
    sectionBody: "Jeder Leitfaden trennt eine Entscheidung, damit Linien, Maße und Verkäuferregeln aktuell geprüft werden können.",
    liveNote: "Plattformregeln und Preise können sich ändern; prüfen Sie die Live-Seite vor der Zahlung.",
  },
  es: {
    badge: "Mesa independiente de decisiones de paquetería · 31 ago 2026",
    title: "Calcula el paquete antes de liberarlo.",
    body: "Guía de calculadora de envío, estado de almacén y devoluciones de Kakobuy para comparar peso embalado, reglas de ruta, embalaje y posventa antes del envío internacional.",
    primary: "Abrir guía de cálculo",
    secondary: "Abrir catálogo fuente",
    section: "Seis decisiones antes de pagar el paquete",
    sectionBody: "Cada guía separa una decisión para comprobar mejor rutas, medidas y reglas del vendedor.",
    liveNote: "Las reglas y los precios pueden cambiar; comprueba la página en vivo antes de pagar.",
  },
  fr: {
    badge: "Bureau indépendant de décision colis · 31 août 2026",
    title: "Chiffrez le colis avant sa validation.",
    body: "Guide Kakobuy du calcul d’expédition, du statut d’entrepôt et des retours pour comparer poids emballé, règles de ligne, emballage et après-vente avant l’envoi international.",
    primary: "Ouvrir le guide de calcul",
    secondary: "Ouvrir le catalogue source",
    section: "Six décisions avant le paiement du colis",
    sectionBody: "Chaque guide isole une décision afin de vérifier plus facilement lignes, dimensions et règles vendeur.",
    liveNote: "Les règles et prix peuvent changer ; vérifiez la page en direct avant le paiement.",
  },
  it: {
    badge: "Desk indipendente per decisioni sul pacco · 31 ago 2026",
    title: "Calcola il pacco prima di svincolarlo.",
    body: "Guida Kakobuy a calcolo spedizione, stato magazzino e resi per confrontare peso imballato, regole di linea, confezione e assistenza prima dell’invio internazionale.",
    primary: "Apri la guida al calcolo",
    secondary: "Apri il catalogo fonte",
    section: "Sei decisioni prima del pagamento del pacco",
    sectionBody: "Ogni guida separa una decisione per verificare meglio linee, misure e regole del venditore.",
    liveNote: "Regole e prezzi possono cambiare; controlla la pagina live prima del pagamento.",
  },
};

const en: Record<DecisionKey, LocalDecision> = {
  calculator: {
    title: "Kakobuy shipping calculator guide",
    description: "Turn the official estimate into a realistic planning range without treating a pre-pack quote as the final parcel charge.",
    steps: [
      ["Start with destination and category", "The estimator needs a destination and an item type because available lines and restrictions vary. Use the closest accurate category rather than the cheapest-looking option."],
      ["Separate actual and volumetric weight", "Actual weight comes from the scale. Volumetric weight represents occupied space and depends on the divisor used by the selected route."],
      ["Model packaging choices", "Shoeboxes, padded outer packaging and empty space can change dimensions. Run a second scenario before deciding what packaging to remove."],
      ["Recheck at parcel submission", "The warehouse parcel measurement and live route list are the final decision inputs. Treat the public estimator as preparation, not a guaranteed invoice."],
    ],
    caution: "Do not publish a fixed price per kilogram without a destination, route, dimensions and date.",
    source: "Official Kakobuy Shipping Fee Estimation tool",
  },
  shippingLines: {
    title: "Kakobuy shipping lines explained",
    description: "Compare routes by eligibility, billing method, tracking and destination rules instead of choosing from the headline estimate alone.",
    steps: [
      ["Filter for item eligibility", "Materials, batteries, liquids, brand restrictions and declared value can remove routes from the live list."],
      ["Read the billing basis", "Check whether a line charges actual weight, volumetric weight or the higher of the two, and identify its rounding unit."],
      ["Compare services, not promises", "Tracking coverage, insurance terms and handoff partners matter. Delivery windows remain estimates and can change after dispatch."],
      ["Save the selected rule set", "Record the line name, date, chargeable weight and important restrictions when submitting the parcel so later comparisons use the correct snapshot."],
    ],
    caution: "A line visible for one parcel may not be eligible for another parcel or destination.",
    source: "Official Kakobuy estimator and live parcel route screen",
  },
  packing: {
    title: "Parcel packing and consolidation guide",
    description: "Balance protection, dimensional weight and parcel risk before combining warehouse items.",
    steps: [
      ["Group compatible items", "Heavy hardware beside soft clothing can cause damage. Consider weight distribution and moisture protection as well as the number of boxes."],
      ["Remove packaging selectively", "Removing retail boxes can lower volume, but it may reduce protection or remove useful labels. Decide item by item."],
      ["Estimate the packed dimensions", "Consolidation saves repeated packaging only when the final carton remains compact. A larger carton can increase volumetric billing."],
      ["Keep a parcel record", "Save the requested services, warehouse measurements and photos before payment. This makes any later discrepancy easier to explain."],
    ],
    caution: "The smallest box is not automatically the safest or cheapest once damage risk and line rules are included.",
    source: "Kakobuy parcel submission workflow and current line rules",
  },
  warehouse: {
    title: "Kakobuy warehouse status guide",
    description: "Understand what to verify while an order moves from seller dispatch to storage, QC and parcel submission.",
    steps: [
      ["Track the seller-to-warehouse leg", "A seller shipment is not the same as warehouse receipt. Keep the domestic tracking record and allow time for intake."],
      ["Confirm intake details", "Check quantity, variant, visible condition and recorded weight when the order is stored."],
      ["Use the storage window deliberately", "Kakobuy’s public introduction currently states 100 days of free storage. This does not extend a seller’s return window."],
      ["Escalate status mismatches", "If tracking, intake or QC status conflicts, contact support with the order number and dated screenshots before submitting the parcel."],
    ],
    caution: "Warehouse storage time and seller after-sales eligibility are separate clocks.",
    source: "Official Kakobuy introduction and warehouse workflow",
  },
  returns: {
    title: "Kakobuy returns and exchanges",
    description: "Check seller support, timing and possible costs before treating a warehouse problem as a free return.",
    steps: [
      ["Identify the responsible stage", "Wrong seller variant, visible damage, personal preference and international transit damage follow different evidence and timing paths."],
      ["Check the seller’s eligibility", "The official 5-Day Return/Exchange service is conditional. Confirm that the item and seller support the service before ordering."],
      ["Calculate the full after-sales cost", "Possible costs can include domestic return shipping, reshipment and service charges. A return label is not automatically free."],
      ["Keep evidence before action", "Save the order option, QC photos, messages and requested remedy. Do not submit the international parcel while a warehouse after-sales case is unresolved."],
    ],
    caution: "Do not describe Kakobuy returns as universally free or unconditional.",
    source: "Official Kakobuy 5-Day Return/Exchange explanation",
  },
  qcTroubleshooting: {
    title: "Kakobuy QC photo troubleshooting",
    description: "Distinguish a visible product problem from a missing angle, display fault or incomplete order record.",
    steps: [
      ["Confirm the ordered variant", "Compare color, size, quantity and seller option with the warehouse record before judging workmanship."],
      ["Separate absence from defect", "A missing close-up does not prove a defect. Request the specific angle or measurement needed for the decision."],
      ["Check platform notices", "Kakobuy published a May 2026 notice about some QC images created or updated from 2–8 May displaying abnormally; it said storage and parcel submission were unaffected."],
      ["Escalate with a focused question", "Attach the order number, affected image and exact uncertainty. A precise request is easier to resolve than a general quality complaint."],
    ],
    caution: "QC images reduce visible uncertainty; they do not prove materials, durability or authenticity.",
    source: "Official Kakobuy QC-image notice and warehouse QC workflow",
  },
};

function translated(
  locale: Exclude<Locale, "en">,
  values: Record<DecisionKey, [string, string, string[], string]>,
): Record<DecisionKey, LocalDecision> {
  const body = (label: string, title: string, description: string, index: number) => {
    const templates = {
      de: [
        `Öffnen Sie für „${label}“ die aktuelle offizielle Seite und gleichen Sie Ziel, Artikelstatus und Datum ab. ${description}`,
        `Notieren Sie „${label}“ zusammen mit Bestell- oder Paketnummer. So bleibt klar, welche Live-Angabe für ${title} tatsächlich geprüft wurde.`,
        `Vergleichen Sie „${label}“ nicht isoliert: Maße, Gewicht, Verkäuferbedingungen und verfügbare Linien können dieselbe Entscheidung verändern.`,
        `Prüfen Sie „${label}“ unmittelbar vor Paketfreigabe erneut und speichern Sie den Stand. Variable Angaben sind eine Momentaufnahme, keine Garantie.`,
      ],
      es: [
        `Abre la página oficial vigente para «${label}» y confirma destino, estado del artículo y fecha. ${description}`,
        `Guarda «${label}» junto con el número de pedido o paquete para saber qué dato en vivo se utilizó en ${title}.`,
        `No evalúes «${label}» por separado: dimensiones, peso, condiciones del vendedor y líneas disponibles pueden cambiar la decisión.`,
        `Vuelve a comprobar «${label}» justo antes de liberar el paquete y guarda la captura. Los datos variables no son una garantía.`,
      ],
      fr: [
        `Ouvrez la page officielle actuelle pour « ${label} » et confirmez destination, statut de l’article et date. ${description}`,
        `Conservez « ${label} » avec le numéro de commande ou de colis afin d’identifier la donnée réellement utilisée pour ${title}.`,
        `N’analysez pas « ${label} » seul : dimensions, poids, conditions vendeur et lignes disponibles peuvent modifier la décision.`,
        `Revérifiez « ${label} » juste avant la validation du colis et gardez cet instantané. Une donnée variable n’est pas une garantie.`,
      ],
      it: [
        `Apri la pagina ufficiale attuale per “${label}” e conferma destinazione, stato dell’articolo e data. ${description}`,
        `Salva “${label}” insieme al numero d’ordine o pacco, così resta chiaro quale dato live è stato usato per ${title}.`,
        `Non valutare “${label}” da solo: dimensioni, peso, condizioni del venditore e linee disponibili possono cambiare la decisione.`,
        `Ricontrolla “${label}” subito prima dello svincolo e salva l’istantanea. I dati variabili non sono una garanzia.`,
      ],
    } as const;
    return templates[locale][index];
  };
  return Object.fromEntries(
    decisionKeys.map((key) => {
      const [title, description, labels, caution] = values[key];
      return [
        key,
        {
          title,
          description,
          steps: en[key].steps.map(([fallback], index) => {
            const label = labels[index] || fallback;
            return [label, body(label, title, description, index)];
          }),
          caution,
          source: en[key].source,
        },
      ];
    }),
  ) as Record<DecisionKey, LocalDecision>;
}

export const decisions: Record<Locale, Record<DecisionKey, LocalDecision>> = {
  en,
  de: translated("de", {
    calculator: ["Kakobuy-Versandkalkulator", "Schätzwerte als Planungsbereich nutzen, nicht als garantierte Endrechnung.", ["Ziel und Kategorie", "Ist- und Volumengewicht", "Verpackung modellieren", "Bei Einreichung neu prüfen"], "Keinen festen Kilopreis ohne Ziel, Linie, Maße und Datum angeben."],
    shippingLines: ["Kakobuy-Versandlinien", "Routen nach Eignung, Abrechnung, Tracking und Zielregeln vergleichen.", ["Artikeleignung filtern", "Abrechnungsbasis lesen", "Service vergleichen", "Regelstand speichern"], "Eine sichtbare Linie ist nicht für jedes Paket verfügbar."],
    packing: ["Paketverpackung und Konsolidierung", "Schutz, Volumengewicht und Risiko vor dem Zusammenlegen abwägen.", ["Kompatible Artikel gruppieren", "Verpackung gezielt entfernen", "Packmaße schätzen", "Paketdaten sichern"], "Der kleinste Karton ist nicht automatisch am sichersten oder günstigsten."],
    warehouse: ["Kakobuy-Lagerstatus", "Vom Verkäufertransport über Eingang und QC bis zur Paketfreigabe richtig prüfen.", ["Inlandstransport verfolgen", "Eingang bestätigen", "Lagerfenster bewusst nutzen", "Abweichungen eskalieren"], "Lagerzeit und Verkäufer-Rückgabefrist sind getrennte Uhren."],
    returns: ["Kakobuy-Rückgaben und Umtausch", "Verkäuferunterstützung, Frist und mögliche Kosten vor einer Rückgabe prüfen.", ["Verantwortliche Phase bestimmen", "Verkäufereignung prüfen", "Gesamtkosten berechnen", "Belege sichern"], "Rückgaben sind nicht allgemein kostenlos oder bedingungslos."],
    qcTroubleshooting: ["Fehlerbehebung bei QC-Fotos", "Produktproblem, fehlenden Winkel und Anzeigeproblem auseinanderhalten.", ["Variante bestätigen", "Fehlende Ansicht vom Defekt trennen", "Plattformhinweise prüfen", "Gezielt eskalieren"], "QC-Fotos beweisen weder Material noch Haltbarkeit oder Echtheit."],
  }),
  es: translated("es", {
    calculator: ["Guía de calculadora de envío Kakobuy", "Usa la estimación como rango de planificación, no como factura garantizada.", ["Destino y categoría", "Peso real y volumétrico", "Modelar el embalaje", "Revisar al enviar"], "No publiques un precio fijo por kilo sin destino, ruta, medidas y fecha."],
    shippingLines: ["Líneas de envío Kakobuy", "Compara elegibilidad, facturación, seguimiento y reglas de destino.", ["Filtrar elegibilidad", "Leer la base de cobro", "Comparar servicios", "Guardar las reglas"], "Una línea visible para un paquete puede no servir para otro."],
    packing: ["Embalaje y consolidación", "Equilibra protección, peso volumétrico y riesgo antes de combinar artículos.", ["Agrupar artículos compatibles", "Retirar embalaje con criterio", "Estimar dimensiones", "Guardar el registro"], "La caja más pequeña no siempre es la opción más segura o barata."],
    warehouse: ["Estado de almacén Kakobuy", "Verifica el recorrido desde el vendedor hasta entrada, QC y envío.", ["Seguir el tramo nacional", "Confirmar la entrada", "Usar el plazo de almacén", "Escalar diferencias"], "Almacenamiento y devolución del vendedor tienen plazos distintos."],
    returns: ["Devoluciones y cambios Kakobuy", "Comprueba soporte, plazo y costes antes de asumir una devolución gratuita.", ["Identificar la fase", "Comprobar elegibilidad", "Calcular el coste", "Guardar pruebas"], "No describas las devoluciones como gratuitas e incondicionales."],
    qcTroubleshooting: ["Solución de problemas de fotos QC", "Distingue defecto visible, ángulo ausente y fallo de visualización.", ["Confirmar variante", "Separar ausencia y defecto", "Revisar avisos", "Escalar con precisión"], "Las fotos QC no prueban materiales, duración o autenticidad."],
  }),
  fr: translated("fr", {
    calculator: ["Guide du calculateur Kakobuy", "Utilisez l’estimation comme fourchette, jamais comme facture garantie.", ["Destination et catégorie", "Poids réel et volumétrique", "Modéliser l’emballage", "Revérifier à l’envoi"], "Ne publiez aucun prix fixe au kilo sans destination, ligne, dimensions et date."],
    shippingLines: ["Lignes d’expédition Kakobuy", "Comparez éligibilité, facturation, suivi et règles de destination.", ["Filtrer l’éligibilité", "Lire la base de facturation", "Comparer les services", "Conserver les règles"], "Une ligne visible pour un colis peut être absente pour un autre."],
    packing: ["Emballage et regroupement", "Équilibrez protection, poids volumétrique et risque avant regroupement.", ["Grouper les articles compatibles", "Retirer l’emballage avec soin", "Estimer les dimensions", "Conserver le dossier"], "Le plus petit carton n’est pas toujours le plus sûr ni le moins cher."],
    warehouse: ["Statut d’entrepôt Kakobuy", "Vérifiez le trajet vendeur, réception, QC puis validation du colis.", ["Suivre le transport local", "Confirmer la réception", "Utiliser le délai de stockage", "Signaler les écarts"], "Stockage et retour vendeur suivent deux délais différents."],
    returns: ["Retours et échanges Kakobuy", "Vérifiez éligibilité, délai et coûts avant de supposer un retour gratuit.", ["Identifier l’étape", "Vérifier l’éligibilité", "Calculer le coût", "Conserver les preuves"], "Les retours ne sont ni universellement gratuits ni inconditionnels."],
    qcTroubleshooting: ["Dépannage des photos QC", "Distinguez défaut visible, angle manquant et anomalie d’affichage.", ["Confirmer la variante", "Séparer absence et défaut", "Lire les avis", "Signaler précisément"], "Les photos QC ne prouvent ni matière, durée ou authenticité."],
  }),
  it: translated("it", {
    calculator: ["Guida al calcolatore Kakobuy", "Usa la stima come intervallo, non come fattura garantita.", ["Destinazione e categoria", "Peso reale e volumetrico", "Simulare l’imballaggio", "Ricontrollare all’invio"], "Non pubblicare un prezzo fisso al chilo senza destinazione, linea, misure e data."],
    shippingLines: ["Linee di spedizione Kakobuy", "Confronta idoneità, fatturazione, tracciamento e regole di destinazione.", ["Filtrare l’idoneità", "Leggere la base di calcolo", "Confrontare i servizi", "Salvare le regole"], "Una linea visibile per un pacco può non esserlo per un altro."],
    packing: ["Imballaggio e consolidamento", "Bilancia protezione, peso volumetrico e rischio prima di unire gli articoli.", ["Raggruppare articoli compatibili", "Rimuovere imballaggi con criterio", "Stimare le dimensioni", "Salvare i dati"], "La scatola più piccola non è sempre la più sicura o economica."],
    warehouse: ["Stato magazzino Kakobuy", "Verifica il percorso da venditore a ricezione, QC e invio.", ["Seguire il trasporto interno", "Confermare la ricezione", "Usare il periodo di deposito", "Segnalare discrepanze"], "Deposito e reso del venditore hanno scadenze distinte."],
    returns: ["Resi e cambi Kakobuy", "Controlla idoneità, tempi e costi prima di presumere un reso gratuito.", ["Identificare la fase", "Verificare l’idoneità", "Calcolare il costo", "Conservare le prove"], "I resi non sono universalmente gratuiti o senza condizioni."],
    qcTroubleshooting: ["Risoluzione problemi foto QC", "Distingui difetto visibile, angolo mancante e problema di visualizzazione.", ["Confermare la variante", "Separare assenza e difetto", "Controllare gli avvisi", "Segnalare con precisione"], "Le foto QC non provano materiali, durata o autenticità."],
  }),
};
