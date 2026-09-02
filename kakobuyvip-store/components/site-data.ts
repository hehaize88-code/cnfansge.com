export type Lang = "en" | "de" | "es" | "fr" | "it";

type Copy = {
  note: string;
  nav: string[];
  eyebrow: string;
  title: string[];
  intro: string;
  search: string;
  searchButton: string;
  browse: string;
  guide: string;
  stats: string[];
  category: string[];
  products: string[];
  open: string;
  process: string[];
  steps: string[][];
  articles: string[];
  read: string;
  faqTitle: string[];
  faq: string[][];
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    note: "Independent product research hub · Updated August 2026",
    nav: ["Spreadsheet", "Finds", "QC guide", "Shipping", "Articles", "FAQ"],
    eyebrow: "Latest Kakobuy finds and category updates",
    title: ["Kakobuy finds.", "Checked routes.", "Current categories."],
    intro: "A focused Kakobuy product-route directory for recently added finds, category updates, matching images and practical checks before you open the current destination.",
    search: "Search a product, category or style",
    searchButton: "Search the full catalog",
    browse: "Browse spreadsheet",
    guide: "Read the buying guide",
    stats: ["10 focused categories", "QC-first research", "Direct item routes"],
    category: ["01 / Browse by intent", "Start with a category, not 15,000 rows.", "Every route opens a focused catalog view, so you can compare the right type of item before checking details."],
    products: ["02 / Fresh routes", "Recently added finds", "Reference prices shown in USD. Availability and final pricing may change on the destination page."],
    open: "Open item",
    process: ["03 / A smarter sequence", "Research before you commit"],
    steps: [["Discover", "Use categories or a short keyword to build a small shortlist."], ["Inspect", "Check measurements, fabric, color and visible defects—not just the listing image."], ["Compare", "Review two similar routes when size, batch or material is unclear."], ["Proceed", "Open the destination and verify current options before the next step."]],
    articles: ["04 / Field notes", "Guides that answer the awkward questions"],
    read: "Read guide",
    faqTitle: ["05 / Clear answers", "Before you browse"],
    faq: [["Is this the official Kakobuy website?", "No. This is an independent research directory. Kakobuy’s live account and policy pages remain the final reference for orders and services."], ["How long does Kakobuy advertise free storage?", "Kakobuy’s official service page states 100 days of free warehouse storage. Plan consolidation before the oldest item approaches that limit."], ["What can Kakobuy’s total cost include?", "Official help material lists product cost, international freight, packaging and optional value-added services. Live payment and route details can add context."], ["Does every item have a five-day return?", "Kakobuy publishes a 5-Day Return/Exchange Guarantee, but eligibility, evidence, seller terms and return-freight responsibility still matter."], ["What do warehouse QC photos prove?", "They support visible checks such as identity, condition, shape and measurements. They do not prove every material, functional or authenticity claim."], ["Is a shipping estimate guaranteed?", "No. Current destination, packed weight, dimensions, line rules, customs and carrier events can change the final cost or time."]],
    footer: "Independent research directory. Product availability, pricing and third-party content can change. Verify details before proceeding.",
  },
  de: {
    note: "Unabhängiger Produkt-Research-Hub · Aktualisiert August 2026",
    nav: ["Tabelle", "Funde", "QC-Ratgeber", "Versand", "Artikel", "FAQ"],
    eyebrow: "Aktuelle Kakobuy-Funde und Kategorie-Updates",
    title: ["Kakobuy-Funde.", "Geprüfte Routen.", "Aktuelle Kategorien."],
    intro: "Ein fokussiertes Kakobuy-Verzeichnis für neue Funde, Kategorie-Updates, passende Bilder und praktische Prüfungen vor dem Öffnen des aktuellen Ziels.",
    search: "Produkt, Kategorie oder Stil suchen",
    searchButton: "Gesamten Katalog suchen",
    browse: "Spreadsheet öffnen",
    guide: "Kaufratgeber lesen",
    stats: ["10 klare Kategorien", "QC zuerst", "Direkte Produktrouten"],
    category: ["01 / Nach Absicht stöbern", "Mit einer Kategorie starten, nicht mit 15.000 Zeilen.", "Jede Route öffnet eine fokussierte Ansicht, damit passende Produkte vor den Details verglichen werden können."],
    products: ["02 / Neue Routen", "Kürzlich ergänzte Funde", "Referenzpreise in USD. Verfügbarkeit und Endpreis können sich auf der Zielseite ändern."],
    open: "Artikel öffnen",
    process: ["03 / Bessere Reihenfolge", "Erst recherchieren, dann entscheiden"],
    steps: [["Entdecken", "Kategorien oder kurze Suchbegriffe für eine kleine Auswahl nutzen."], ["Prüfen", "Maße, Stoff, Farbe und sichtbare Mängel prüfen – nicht nur das Listingbild."], ["Vergleichen", "Bei unklarer Größe, Charge oder Material zwei ähnliche Routen vergleichen."], ["Weiter", "Zielseite öffnen und aktuelle Optionen vor dem nächsten Schritt prüfen."]],
    articles: ["04 / Praxisnotizen", "Ratgeber für die schwierigen Fragen"],
    read: "Ratgeber lesen",
    faqTitle: ["05 / Klare Antworten", "Vor dem Stöbern"],
    faq: [["Ist dies die offizielle Kakobuy-Website?", "Nein. Dies ist ein unabhängiges Rechercheverzeichnis; aktuelle Konto- und Richtlinienseiten bleiben maßgeblich."], ["Wie lange wird kostenlose Lagerung angeboten?", "Die offizielle Serviceseite nennt 100 Tage kostenlose Lagerung. Die Konsolidierung sollte deutlich vorher geplant werden."], ["Welche Kosten können entstehen?", "Die offizielle Hilfe nennt Produkt, internationalen Versand, Verpackung und optionale Zusatzleistungen."], ["Kann jeder Artikel fünf Tage lang zurückgegeben werden?", "Die 5-Tage-Garantie hängt von Berechtigung, Nachweis, Verkäuferbedingungen und Rückversand ab."], ["Was belegen QC-Fotos?", "Sie helfen bei sichtbarem Zustand, Form und Maßen, beweisen aber nicht jede Material- oder Funktionsaussage."], ["Ist eine Versandschätzung garantiert?", "Nein. Ziel, Gewicht, Maße, Linie, Zoll und Carrier-Ereignisse können Kosten und Zeit ändern."]],
    footer: "Unabhängiges Rechercheverzeichnis. Verfügbarkeit, Preise und Drittinhalte können sich ändern. Details vorab prüfen.",
  },
  es: {
    note: "Centro independiente de investigación · Actualizado en agosto de 2026",
    nav: ["Hoja", "Hallazgos", "Guía QC", "Envío", "Artículos", "FAQ"],
    eyebrow: "Últimos hallazgos Kakobuy y categorías actualizadas",
    title: ["Hallazgos Kakobuy.", "Rutas revisadas.", "Categorías actuales."],
    intro: "Un directorio Kakobuy centrado en hallazgos recientes, actualizaciones de categorías, imágenes correspondientes y controles prácticos antes de abrir el destino actual.",
    search: "Busca un producto, categoría o estilo",
    searchButton: "Buscar en todo el catálogo",
    browse: "Ver spreadsheet",
    guide: "Leer la guía de compra",
    stats: ["10 categorías claras", "Investigación QC", "Rutas directas"],
    category: ["01 / Explora por intención", "Empieza por una categoría, no por 15.000 filas.", "Cada ruta abre una vista específica para comparar el tipo correcto de artículo antes de revisar los detalles."],
    products: ["02 / Rutas nuevas", "Hallazgos añadidos recientemente", "Precios de referencia en USD. La disponibilidad y el precio final pueden cambiar en la página de destino."],
    open: "Abrir artículo",
    process: ["03 / Una secuencia mejor", "Investiga antes de decidir"],
    steps: [["Descubre", "Usa categorías o una palabra corta para crear una selección pequeña."], ["Inspecciona", "Revisa medidas, tejido, color y defectos visibles, no solo la foto del anuncio."], ["Compara", "Compara dos rutas similares si la talla, el lote o el material no están claros."], ["Continúa", "Abre la página de destino y verifica las opciones actuales antes de seguir."]],
    articles: ["04 / Notas prácticas", "Guías para las preguntas incómodas"],
    read: "Leer guía",
    faqTitle: ["05 / Respuestas claras", "Antes de explorar"],
    faq: [["¿Es la web oficial de Kakobuy?", "No. Es un directorio independiente; las condiciones actuales de la cuenta son la referencia final."], ["¿Cuánto almacenamiento gratuito se anuncia?", "La página oficial indica 100 días de almacenamiento gratuito. Conviene consolidar mucho antes del límite."], ["¿Qué puede incluir el coste total?", "La ayuda oficial menciona producto, envío internacional, embalaje y servicios opcionales."], ["¿Todo producto tiene devolución de cinco días?", "La garantía depende de elegibilidad, pruebas, vendedor y responsabilidad del transporte de devolución."], ["¿Qué demuestran las fotos QC?", "Ayudan con estado visible, forma y medidas; no prueban todo material o funcionamiento."], ["¿Está garantizada la estimación de envío?", "No. Destino, peso, dimensiones, línea, aduanas y transportista pueden cambiar coste y plazo."]],
    footer: "Directorio independiente. La disponibilidad, precios y contenido externo pueden cambiar. Verifica los detalles.",
  },
  fr: {
    note: "Centre de recherche indépendant · Mis à jour en août 2026",
    nav: ["Tableur", "Sélections", "Guide QC", "Livraison", "Articles", "FAQ"],
    eyebrow: "Dernières sélections Kakobuy et catégories actualisées",
    title: ["Sélections Kakobuy.", "Liens vérifiés.", "Catégories actuelles."],
    intro: "Un répertoire Kakobuy centré sur les sélections récentes, les mises à jour de catégories, les images correspondantes et les contrôles utiles avant d’ouvrir la destination actuelle.",
    search: "Rechercher un produit, une catégorie ou un style",
    searchButton: "Rechercher dans le catalogue",
    browse: "Voir le spreadsheet",
    guide: "Lire le guide d'achat",
    stats: ["10 catégories ciblées", "Recherche QC", "Liens directs"],
    category: ["01 / Explorer par intention", "Commencez par une catégorie, pas par 15 000 lignes.", "Chaque lien ouvre une vue ciblée afin de comparer le bon type d'article avant les détails."],
    products: ["02 / Nouveaux liens", "Sélections récemment ajoutées", "Prix indicatifs en USD. Disponibilité et prix final peuvent changer sur la page de destination."],
    open: "Ouvrir l'article",
    process: ["03 / Une meilleure séquence", "Cherchez avant de décider"],
    steps: [["Découvrir", "Utilisez les catégories ou un mot-clé court pour créer une petite sélection."], ["Inspecter", "Vérifiez mesures, matière, couleur et défauts visibles, pas seulement l'image d'annonce."], ["Comparer", "Comparez deux options si la taille, le lot ou la matière restent incertains."], ["Continuer", "Ouvrez la destination et vérifiez les options actuelles avant l'étape suivante."]],
    articles: ["04 / Notes pratiques", "Des guides pour les questions difficiles"],
    read: "Lire le guide",
    faqTitle: ["05 / Réponses claires", "Avant d'explorer"],
    faq: [["Est-ce le site officiel Kakobuy ?", "Non. C’est un répertoire indépendant; les conditions actuelles du compte restent la référence finale."], ["Combien de stockage gratuit est annoncé ?", "La page officielle indique 100 jours de stockage gratuit. Il faut consolider bien avant la limite."], ["Que peut inclure le coût total ?", "L’aide officielle mentionne produit, fret international, emballage et services optionnels."], ["Tout article bénéficie-t-il de cinq jours de retour ?", "La garantie dépend de l’éligibilité, des preuves, du vendeur et du fret retour."], ["Que prouvent les photos QC ?", "Elles aident pour l’état visible, la forme et les mesures, sans prouver toute matière ou fonction."], ["L’estimation d’expédition est-elle garantie ?", "Non. Destination, poids, dimensions, ligne, douane et transporteur peuvent changer coût et délai."]],
    footer: "Répertoire de recherche indépendant. Disponibilité, prix et contenus tiers peuvent changer. Vérifiez les détails.",
  },
  it: {
    note: "Hub di ricerca indipendente · Aggiornato ad agosto 2026",
    nav: ["Spreadsheet", "Prodotti", "Guida QC", "Spedizione", "Articoli", "FAQ"],
    eyebrow: "Ultimi prodotti Kakobuy e categorie aggiornate",
    title: ["Prodotti Kakobuy.", "Percorsi controllati.", "Categorie attuali."],
    intro: "Una directory Kakobuy per prodotti aggiunti di recente, aggiornamenti di categoria, immagini corrispondenti e controlli pratici prima di aprire la destinazione attuale.",
    search: "Cerca un prodotto, categoria o stile",
    searchButton: "Cerca nel catalogo",
    browse: "Apri lo spreadsheet",
    guide: "Leggi la guida",
    stats: ["10 categorie mirate", "Ricerca QC", "Percorsi diretti"],
    category: ["01 / Esplora per intento", "Inizia da una categoria, non da 15.000 righe.", "Ogni percorso apre una vista mirata per confrontare il tipo giusto di articolo prima dei dettagli."],
    products: ["02 / Nuovi percorsi", "Prodotti aggiunti di recente", "Prezzi indicativi in USD. Disponibilità e prezzo finale possono cambiare sulla pagina di destinazione."],
    open: "Apri articolo",
    process: ["03 / Una sequenza migliore", "Fai ricerca prima di decidere"],
    steps: [["Scopri", "Usa categorie o una parola breve per creare una selezione ridotta."], ["Controlla", "Verifica misure, tessuto, colore e difetti visibili, non solo la foto dell'annuncio."], ["Confronta", "Confronta due percorsi simili se taglia, lotto o materiale non sono chiari."], ["Procedi", "Apri la destinazione e verifica le opzioni correnti prima del passo successivo."]],
    articles: ["04 / Note pratiche", "Guide per le domande difficili"],
    read: "Leggi guida",
    faqTitle: ["05 / Risposte chiare", "Prima di esplorare"],
    faq: [["È il sito ufficiale Kakobuy?", "No. È una directory indipendente; le condizioni attuali dell’account restano il riferimento finale."], ["Quanto deposito gratuito è pubblicizzato?", "La pagina ufficiale indica 100 giorni di deposito gratuito. Conviene consolidare prima del limite."], ["Cosa può includere il costo totale?", "L’aiuto ufficiale cita prodotto, trasporto internazionale, imballaggio e servizi opzionali."], ["Ogni articolo ha cinque giorni di reso?", "La garanzia dipende da idoneità, prove, venditore e responsabilità del trasporto di reso."], ["Cosa provano le foto QC?", "Aiutano su stato visibile, forma e misure, ma non provano ogni materiale o funzione."], ["La stima di spedizione è garantita?", "No. Destinazione, peso, dimensioni, linea, dogana e vettore possono cambiare costo e tempi."]],
    footer: "Directory di ricerca indipendente. Disponibilità, prezzi e contenuti esterni possono cambiare. Verifica i dettagli.",
  },
};

export const navHref = ["/spreadsheet", "/finds", "/qc", "/shipping", "/articles", "/faq"];

export const languages: Lang[] = ["en", "de", "es", "fr", "it"];

export function stripLanguagePrefix(pathname: string) {
  const match = pathname.match(/^\/(de|es|fr|it)(?=\/|$)/);
  if (!match) return pathname || "/";
  return pathname.slice(match[0].length) || "/";
}

export function localizedPath(pathname: string, lang: Lang) {
  const cleanPath = stripLanguagePrefix(pathname).replace(/\/$/, "") || "/";
  if (lang === "en") return cleanPath;
  return cleanPath === "/" ? `/${lang}` : `/${lang}${cleanPath}`;
}

export const categories = [
  ["Shoes", "Footwear", "https://cnfansge.com/shoes/"],
  ["Hoodies", "Layers", "https://cnfansge.com/hoodies-sweaters/"],
  ["T-Shirts", "Daily wear", "https://cnfansge.com/t-shirts/"],
  ["Jackets", "Outerwear", "https://cnfansge.com/jackets/"],
  ["Pants", "Bottoms", "https://cnfansge.com/pants-shorts/"],
  ["Headwear", "Caps & hats", "https://cnfansge.com/headwear/"],
  ["Accessories", "Small goods", "https://cnfansge.com/accessories/"],
  ["Jerseys", "Sportswear", "https://cnfansge.com/Jersey/"],
  ["Electronics", "Tech", "https://cnfansge.com/electronics/"],
  ["Other", "More finds", "https://cnfansge.com/other-stuff/"],
];

export const products = [
  ["Clean rib-knit crewneck", "Knitwear", "$25.14", "/products/sweatshirt.webp", "https://cnfansge.com/AllProducts/6681.html"],
  ["Utility straight-leg pants", "Pants", "$28.11", "/products/pants.webp", "https://cnfansge.com/AllProducts/6680.html"],
  ["Graphic basketball jersey", "Jersey", "$19.48", "/products/jersey-blue.jpg", "https://cnfansge.com/AllProducts/6679.html"],
  ["Classic white jersey", "Jersey", "$19.48", "/products/jersey-white.jpg", "https://cnfansge.com/AllProducts/6678.html"],
  ["Red field jersey", "Jersey", "$19.48", "/products/jersey-red.jpg", "https://cnfansge.com/AllProducts/6677.html"],
  ["Black training jersey", "Jersey", "$11.16", "/products/jersey-black.jpg", "https://cnfansge.com/AllProducts/6676.html"],
];

export const articles = [
  ["BEGINNER", "How to use Kakobuy: product link to international parcel", "The complete shopping-agent workflow: ordering, warehouse QC, storage, returns, packing and shipping.", "/articles/how-to-use-kakobuy"],
  ["QC", "Kakobuy QC photos: a practical warehouse checklist", "A repeatable inspection order for identity, shape, measurements, construction and visible defects.", "/articles/qc-photo-checklist"],
  ["SHIPPING", "Kakobuy shipping cost: actual weight, volume and packing", "Why a light parcel can still cost more and how current route rules affect the estimate.", "/articles/actual-vs-volumetric-weight"],
  ["FEES", "Kakobuy fees explained: what the total can include", "Separate product, freight, packaging, optional services, declaration and payment-related costs.", "/articles/kakobuy-fees-explained"],
  ["WAREHOUSE", "Kakobuy warehouse: QC, 100-day storage and consolidation", "Use the official storage window to organize seller arrivals, after-sale decisions and parcel groups.", "/articles/kakobuy-warehouse-storage-guide"],
  ["RETURNS", "Kakobuy return and exchange guide", "Understand the five-day guarantee, evidence, domestic freight responsibility and exchange timing.", "/articles/kakobuy-return-exchange-guide"],
  ["REVIEW", "Kakobuy review 2026: official features and user reports", "A balanced review that separates official policies from Trustpilot and Reddit anecdotes.", "/articles/kakobuy-review-2026"],
  ["US GUIDE", "Kakobuy USA guide 2026: pre-order readiness", "Check address, product identity, current import sources and last-mile evidence before ordering for the United States.", "/articles/kakobuy-usa-pre-order-readiness-checklist"],
];
