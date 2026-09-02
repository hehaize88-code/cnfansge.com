export const languages = ["en", "de", "es", "fr", "it"];

export const languageNames = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano"
};

export const categories = [
  { slug: "shoes", label: "Shoes", icon: "01", source: "https://cnfansge.com/shoes/", note: "Runners, low-tops and everyday pairs" },
  { slug: "hoodies", label: "Hoodies", icon: "02", source: "https://cnfansge.com/hoodies-sweaters/", note: "Layers, zip-ups and heavyweight knits" },
  { slug: "t-shirts", label: "T-Shirts", icon: "03", source: "https://cnfansge.com/t-shirts/", note: "Graphic, minimal and multi-colour tees" },
  { slug: "jackets", label: "Jackets", icon: "04", source: "https://cnfansge.com/jackets/", note: "Shells, denim and winter-ready layers" },
  { slug: "pants", label: "Pants & Shorts", icon: "05", source: "https://cnfansge.com/pants-shorts/", note: "Denim, cargos and warm-weather shorts" },
  { slug: "accessories", label: "Accessories", icon: "06", source: "https://cnfansge.com/accessories/", note: "Belts, watches, jewellery and finishing pieces" }
];

const asset = (id, ext = "webp") => `/products/${id}.${ext}`;
const source = (id) => `https://cnfansge.com/AllProducts/${id}.html`;

export const products = [
  { id: "2586", title: "Nike Legacy 312 Low", category: "shoes", cny: 220, image: asset("2586"), source: source("2586"), tags: ["Low-top", "Everyday"] },
  { id: "1180", title: "MLB Chunk Premium Runner", category: "shoes", cny: 249.6, image: asset("1180"), source: source("1180"), tags: ["Chunky", "Runner"] },
  { id: "891", title: "Nike Air Cushion Runner", category: "shoes", cny: 210, image: asset("891"), source: source("891"), tags: ["Air cushion", "Sport"] },
  { id: "2502", title: "Balenciaga Track Style", category: "shoes", cny: 580, image: asset("2502"), source: source("2502"), tags: ["Layered", "Premium"] },

  { id: "5869", title: "Adidas × Dragon Ball Graphic Hoodie", category: "hoodies", cny: 180, image: asset("5869", "jpg"), source: source("5869"), tags: ["Graphic", "Pullover"] },
  { id: "4322", title: "Dior Minimal Hoodie", category: "hoodies", cny: 111, image: asset("4322"), source: source("4322"), tags: ["Minimal", "Budget"] },
  { id: "3149", title: "Moncler Windbreaker", category: "hoodies", cny: 290, image: asset("3149"), source: source("3149"), tags: ["Windbreaker", "Layer"] },
  { id: "4869", title: "Supreme Classic Hoodie", category: "hoodies", cny: 230, image: asset("4869"), source: source("4869"), tags: ["Streetwear", "Pullover"] },

  { id: "4129", title: "Burberry Cotton Tee", category: "t-shirts", cny: 150, image: asset("4129"), source: source("4129"), tags: ["Cotton", "Regular fit"] },
  { id: "2812", title: "Amiri Shirt — 26 Styles", category: "t-shirts", cny: 99, image: asset("2812"), source: source("2812"), tags: ["Multi-style", "Budget"] },
  { id: "5567", title: "AMI Signature Shirt", category: "t-shirts", cny: 180, image: asset("5567"), source: source("5567"), tags: ["Signature", "Daily"] },
  { id: "155", title: "Chrome Hearts Tee — 40 Colours", category: "t-shirts", cny: 69, image: asset("155"), source: source("155"), tags: ["Colour range", "Budget"] },

  { id: "5084", title: "Prada Technical Jacket", category: "jackets", cny: 230, image: asset("5084"), source: source("5084"), tags: ["Technical", "Midweight"] },
  { id: "4655", title: "Balenciaga Denim Coat", category: "jackets", cny: 210, image: asset("4655"), source: source("4655"), tags: ["Denim", "Oversized"] },
  { id: "593", title: "The North Face Jacket", category: "jackets", cny: 289, image: asset("593"), source: source("593"), tags: ["Outdoor", "Shell"] },
  { id: "295", title: "Under Armour Training Jacket", category: "jackets", cny: 169, image: asset("295"), source: source("295"), tags: ["Training", "Lightweight"] },

  { id: "4802", title: "Corteiz Everyday Shorts", category: "pants", cny: 49, image: asset("4802"), source: source("4802"), tags: ["Shorts", "Budget"] },
  { id: "3418", title: "Purple Brand Jeans", category: "pants", cny: 196.35, image: asset("3418"), source: source("3418"), tags: ["Denim", "Straight leg"] },
  { id: "2002", title: "Miami Shorts — 40 Colours", category: "pants", cny: 117.6, image: asset("2002"), source: source("2002"), tags: ["Colour range", "Summer"] },
  { id: "167", title: "Stone Island Utility Pants", category: "pants", cny: 115, image: asset("167"), source: source("167"), tags: ["Utility", "Everyday"] },

  { id: "3300", title: "Fendi FF Canvas Belt — 40 Styles", category: "accessories", cny: 73, image: asset("3300"), source: source("3300"), tags: ["Canvas", "Multi-style"] },
  { id: "6033", title: "Minimal Steel Bracelet", category: "accessories", cny: 108, image: asset("6033", "jpg"), source: source("6033"), tags: ["Jewellery", "Minimal"] },
  { id: "2189", title: "Omega × Swatch Moonwatch Style", category: "accessories", cny: 175, image: asset("2189"), source: source("2189"), tags: ["Watch", "Colour range"] },
  { id: "2660", title: "Monogram Chain Bracelet", category: "accessories", cny: 144, image: asset("2660"), source: source("2660"), tags: ["Jewellery", "Statement"] }
].map((product) => ({ ...product, usd: Number((product.cny * 0.1488).toFixed(2)) }));

export const featuredProductIds = ["2586", "5869", "5084", "3418", "3300", "1180", "4129", "593", "4802", "6033", "891", "155"];
export const featuredProducts = featuredProductIds.map((id) => products.find((product) => product.id === id)).filter(Boolean);
export const archivedProducts = products.filter((product) => !featuredProductIds.includes(product.id));

export const articles = [
  {
    slug: "sugargoo-uk-buying-guide-2026",
    label: "UK STARTER GUIDE",
    read: "12 min",
    image: "/og/buying-workflow.png",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    title: {
      en: "Sugargoo UK Buying Guide 2026: From Product Link to Delivery",
      de: "Sugargoo UK Einkaufsleitfaden 2026: Vom Produktlink bis zur Zustellung",
      es: "Guía de compra Sugargoo UK 2026: del enlace a la entrega",
      fr: "Guide d’achat Sugargoo UK 2026 : du lien à la livraison",
      it: "Guida acquisti Sugargoo UK 2026: dal link alla consegna"
    },
    summary: {
      en: "A practical route through link checks, warehouse arrival, QC, parcel planning and UK delivery decisions.",
      de: "Ein praktischer Ablauf von der Linkprüfung über Lager und QC bis zur Paketplanung und UK-Zustellung.",
      es: "Un recorrido práctico por la verificación del enlace, almacén, QC, planificación y entrega en Reino Unido.",
      fr: "Un parcours pratique : vérification du lien, entrepôt, QC, préparation du colis et livraison au Royaume-Uni.",
      it: "Un percorso pratico tra verifica del link, magazzino, QC, pianificazione del pacco e consegna nel Regno Unito."
    }
  },
  {
    slug: "how-to-read-qc-photos",
    label: "QC FIELD NOTE",
    read: "9 min",
    image: "/og/qc-photo-checklist.png",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    title: {
      en: "How to Read Sugargoo QC Photos Before You Ship",
      de: "Sugargoo-QC-Fotos vor dem Versand richtig lesen",
      es: "Cómo revisar las fotos QC de Sugargoo antes del envío",
      fr: "Comment lire les photos QC Sugargoo avant l’envoi",
      it: "Come leggere le foto QC Sugargoo prima della spedizione"
    },
    summary: {
      en: "A repeatable visual checklist for shape, colour, stitching, measurements, labels and packaging.",
      de: "Eine wiederholbare Sichtprüfung für Form, Farbe, Nähte, Maße, Etiketten und Verpackung.",
      es: "Una lista visual repetible para forma, color, costuras, medidas, etiquetas y embalaje.",
      fr: "Une liste visuelle pour la forme, la couleur, les coutures, les mesures, les étiquettes et l’emballage.",
      it: "Una checklist visiva per forma, colore, cuciture, misure, etichette e confezione."
    }
  },
  {
    slug: "reduce-volumetric-weight",
    label: "SHIPPING LAB",
    read: "8 min",
    image: "/og/parcel-weight-lab.png",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    title: {
      en: "Actual vs Volumetric Weight: A UK Parcel Planning Guide",
      de: "Tatsächliches vs. Volumengewicht: UK-Paketplanung",
      es: "Peso real frente a volumétrico: planificación de paquetes UK",
      fr: "Poids réel ou volumétrique : planifier un colis UK",
      it: "Peso reale o volumetrico: pianificare un pacco UK"
    },
    summary: {
      en: "Understand the number that may drive your quote and test packaging changes before parcel submission.",
      de: "Verstehen Sie die preisbestimmende Zahl und testen Sie Verpackungsänderungen vor der Paketeinreichung.",
      es: "Entiende qué cifra puede determinar la tarifa y prueba cambios de embalaje antes de enviar el paquete.",
      fr: "Comprenez le chiffre qui peut fixer le tarif et testez l’emballage avant la soumission du colis.",
      it: "Capisci quale valore può determinare la tariffa e prova modifiche all’imballaggio prima dell’invio."
    }
  }
];

export const translations = {
  en: {
    locale: "UK edition",
    preview: "INDEPENDENT UK RESEARCH EDITION — LIVE ROUTES, QC AND SHIPPING NOTES",
    nav: { spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", faq: "FAQ", articles: "Articles" },
    heroKicker: "A BETTER ROUTE FROM FIND TO FRONT DOOR",
    heroTitle: "The Sugargoo UK spreadsheet, rebuilt for decisions.",
    heroText: "Browse a compact, image-first catalogue, open the exact source listing, check warehouse photos and plan a UK parcel without guessing your way through a giant sheet.",
    browse: "Browse verified finds", readGuide: "Read the UK guide", searchPlaceholder: "Search shoes, hoodies, jerseys…", searchButton: "Search full catalogue",
    metrics: ["24 checked product routes", "6 clear categories", "5 complete languages", "UK-first shipping notes"],
    categoryKicker: "SHOP THE MAP", categoryTitle: "Six lanes. No endless spreadsheet scroll.", categoryText: "Each route has a visible category, current source page and a direct hand-off to the full catalogue.", openCategory: "Open full category", viewLane: "View UK lane",
    findsKicker: "EDITOR’S GRID", findsTitle: "Popular finds with the useful details up front.", findsText: "Prices are approximate USD conversions checked on 1 September 2026. Confirm the live source price, options and availability before ordering.", all: "All", openListing: "Open exact listing", approx: "approx.", noResults: "No finds match this filter.",
    flowKicker: "THE FOUR-CHECK LOOP", flowTitle: "A calmer way to build a UK parcel.",
    flow: [
      ["01", "Shortlist", "Compare the item image, options and source listing before committing."],
      ["02", "Warehouse", "Wait for the item to be received and logged before parcel planning."],
      ["03", "QC decision", "Check the received item itself—not only the seller’s listing images."],
      ["04", "Pack for UK", "Compare route limits, chargeable weight and service notes at submission."]
    ],
    toolKicker: "SHIPPING LAB", toolTitle: "Test volumetric weight before you submit.", toolText: "Enter packed dimensions, choose the divisor shown by the route and compare the result with actual weight. The carrier’s route rules remain the source of truth.",
    articlesKicker: "FIELD NOTES", articlesTitle: "Useful reading, written around the decisions buyers actually make.", readArticle: "Read field note",
    faqKicker: "STRAIGHT ANSWERS", faqTitle: "What this UK spreadsheet does—and does not do.",
    faq: [
      ["Is this the official Sugargoo website?", "No. This is an independent catalogue and educational guide. It does not hold funds, process orders or provide platform support."],
      ["Are the USD prices final?", "No. They are rounded reference conversions from source prices. Options, domestic delivery, service charges and international shipping are separate."],
      ["Does a product card guarantee quality?", "No. A card is a discovery route. Check current listing details, warehouse photos, measurements and return eligibility for your own order."],
      ["Why is the site UK-focused?", "UK buyers need a clear path from product discovery to parcel size, route restrictions and final delivery decisions. The content is organised around that journey."],
      ["Where do product buttons go?", "Every product button opens the matching source listing in the main catalogue. The site does not route products to unrelated agent platforms."],
      ["How many Sugargoo QC photos are included?", "Sugargoo’s published QC guidance says five basic photos are normally provided after warehouse arrival. Request a targeted extra photo or measurement when the standard views cannot answer a specific question."],
      ["How long is free warehouse storage?", "Sugargoo’s published storage guide distinguishes order types: 100 days for purchasing orders and 30 days for resell orders. Check the live order record for its own storage clock, extension terms and any later policy update."],
      ["Is volumetric weight always used?", "No. The route determines how actual weight, volume, divisors and billing increments are applied. Enter finished packed dimensions and use the live route result."],
      ["Can every warehouse item be returned?", "No. Eligibility depends on the order stage, seller conditions, product type and applicable return window. Return freight or other deductions may apply."]
    ],
    footer: "Independent product-discovery and educational resource. Not affiliated with Sugargoo or the brands shown. Product availability and route rules can change.",
    updated: "Research and route check: 2 September 2026"
  },
  de: {
    locale: "UK-Ausgabe", preview: "UNABHÄNGIGE UK-RECHERCHE — LIVE-ROUTEN, QC- UND VERSANDHINWEISE",
    nav: { spreadsheet: "Tabelle", finds: "Funde", guide: "Leitfaden", qc: "QC", shipping: "Versand", faq: "FAQ", articles: "Artikel" },
    heroKicker: "DER BESSERE WEG VOM FUND BIS ZUR HAUSTÜR", heroTitle: "Die Sugargoo UK-Tabelle, neu gebaut für klare Entscheidungen.", heroText: "Ein kompakter, bildorientierter Katalog mit exakten Quellseiten, Lagerfoto-Prüfung und UK-Paketplanung — ohne endloses Tabellen-Scrollen.",
    browse: "Geprüfte Funde ansehen", readGuide: "UK-Leitfaden lesen", searchPlaceholder: "Schuhe, Hoodies, Trikots suchen…", searchButton: "Gesamtkatalog durchsuchen",
    metrics: ["24 geprüfte Produktrouten", "6 klare Kategorien", "5 vollständige Sprachen", "UK-Versandhinweise"],
    categoryKicker: "DIE KARTE", categoryTitle: "Sechs Bereiche. Kein endloses Scrollen.", categoryText: "Jede Route zeigt Kategorie, aktuelle Quellseite und direkten Übergang zum Gesamtkatalog.", openCategory: "Gesamte Kategorie öffnen", viewLane: "UK-Bereich ansehen",
    findsKicker: "REDAKTIONSRASTER", findsTitle: "Beliebte Funde mit den wichtigen Angaben zuerst.", findsText: "Preise sind ungefähre USD-Umrechnungen vom 1. September 2026. Live-Preis, Optionen und Bestand vor der Bestellung prüfen.", all: "Alle", openListing: "Exaktes Angebot öffnen", approx: "ca.", noResults: "Keine Funde für diesen Filter.",
    flowKicker: "VIER PRÜFUNGEN", flowTitle: "Ruhiger ein UK-Paket zusammenstellen.", flow: [["01","Auswählen","Bild, Varianten und Quellangebot vor dem Kauf vergleichen."],["02","Lager","Auf Eingang und Erfassung warten, bevor das Paket geplant wird."],["03","QC-Entscheidung","Den erhaltenen Artikel prüfen, nicht nur Verkäuferbilder."],["04","Für UK packen","Routenlimits, Abrechnungsgewicht und Hinweise vergleichen."]],
    toolKicker: "VERSANDLABOR", toolTitle: "Volumengewicht vor der Einreichung testen.", toolText: "Verpackte Maße eingeben, den Routendivisor wählen und mit dem Ist-Gewicht vergleichen. Entscheidend bleiben die Regeln der gewählten Route.",
    articlesKicker: "PRAXISNOTIZEN", articlesTitle: "Lesestoff zu den Entscheidungen, die Käufer wirklich treffen.", readArticle: "Praxisnotiz lesen",
    faqKicker: "KLARE ANTWORTEN", faqTitle: "Was diese UK-Tabelle leistet — und was nicht.", faq: [["Ist dies die offizielle Sugargoo-Website?","Nein. Dies ist ein unabhängiger Katalog und Leitfaden. Er verwaltet kein Guthaben, keine Bestellungen und keinen Plattform-Support."],["Sind die USD-Preise endgültig?","Nein. Es sind gerundete Referenzwerte. Optionen, Inlandslieferung, Gebühren und internationaler Versand kommen getrennt hinzu."],["Garantiert eine Produktkarte Qualität?","Nein. Sie dient der Entdeckung. Prüfen Sie Live-Angebot, Lagerfotos, Maße und Rückgabemöglichkeit."],["Warum UK-Fokus?","UK-Käufer brauchen einen klaren Weg von der Produktsuche bis zu Paketgröße, Routenregeln und Zustellung."],["Wohin führen Produktbuttons?","Jeder Button öffnet das passende Angebot im Hauptkatalog, niemals eine zufällige Agentenplattform."],["Wie viele Sugargoo-QC-Fotos sind enthalten?","Laut veröffentlichter QC-Anleitung werden nach Lagereingang normalerweise fünf Basisfotos bereitgestellt. Bei einer konkreten Frage ein gezieltes Zusatzfoto oder Maß anfordern."],["Wie lange ist die Lagerung kostenlos?","Der veröffentlichte Lagerleitfaden unterscheidet Bestellarten: 100 Tage für Einkaufsbestellungen und 30 Tage für Resell-Bestellungen. Maßgeblich bleiben Bestelluhr und aktuelle Verlängerungsbedingungen."],["Wird immer Volumengewicht berechnet?","Nein. Die Route bestimmt Ist-Gewicht, Volumen, Divisor und Abrechnungsschritte. Fertige Packmaße eingeben und das Live-Ergebnis nutzen."],["Kann jeder Lagerartikel zurückgegeben werden?","Nein. Bestellphase, Verkäuferbedingungen, Produktart und Rückgabefrist entscheiden. Rückversand oder Abzüge können anfallen."]],
    footer: "Unabhängige Produktentdeckung und Information. Keine Verbindung zu Sugargoo oder den gezeigten Marken. Bestand und Routenregeln können sich ändern.", updated: "Recherche und Routenprüfung: 2. September 2026"
  },
  es: {
    locale: "Edición UK", preview: "EDICIÓN UK INDEPENDIENTE — RUTAS, QC Y NOTAS DE ENVÍO ACTUALES",
    nav: { spreadsheet: "Spreadsheet", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envío", faq: "FAQ", articles: "Artículos" },
    heroKicker: "UNA RUTA MEJOR DEL HALLAZGO A TU PUERTA", heroTitle: "La hoja Sugargoo UK, reconstruida para decidir mejor.", heroText: "Explora un catálogo compacto y visual, abre el anuncio exacto, revisa las fotos de almacén y planifica un paquete UK sin perderte en una hoja enorme.",
    browse: "Ver hallazgos revisados", readGuide: "Leer la guía UK", searchPlaceholder: "Buscar zapatillas, sudaderas…", searchButton: "Buscar en el catálogo completo",
    metrics: ["24 rutas revisadas", "6 categorías claras", "5 idiomas completos", "Notas de envío UK"],
    categoryKicker: "MAPA DE COMPRA", categoryTitle: "Seis rutas. Sin desplazamiento interminable.", categoryText: "Cada ruta muestra categoría, página de origen y acceso directo al catálogo completo.", openCategory: "Abrir categoría completa", viewLane: "Ver ruta UK",
    findsKicker: "SELECCIÓN EDITORIAL", findsTitle: "Hallazgos populares con los datos útiles primero.", findsText: "Precios aproximados en USD, convertidos el 1 de septiembre de 2026. Confirma precio, opciones y disponibilidad antes de pedir.", all: "Todo", openListing: "Abrir anuncio exacto", approx: "aprox.", noResults: "No hay hallazgos para este filtro.",
    flowKicker: "CICLO DE CUATRO CONTROLES", flowTitle: "Una forma más tranquila de preparar un paquete UK.", flow: [["01","Selecciona","Compara imagen, opciones y anuncio de origen antes de comprar."],["02","Almacén","Espera a que el artículo sea recibido y registrado."],["03","Decisión QC","Revisa el artículo recibido, no solo las fotos del vendedor."],["04","Prepara para UK","Compara límites, peso facturable y notas de ruta."]],
    toolKicker: "LABORATORIO DE ENVÍO", toolTitle: "Prueba el peso volumétrico antes de enviar.", toolText: "Introduce las medidas embaladas, elige el divisor de la ruta y compara con el peso real. Las reglas del transportista mandan.",
    articlesKicker: "NOTAS DE CAMPO", articlesTitle: "Lecturas útiles centradas en decisiones reales.", readArticle: "Leer nota",
    faqKicker: "RESPUESTAS CLARAS", faqTitle: "Qué hace esta hoja UK y qué no hace.", faq: [["¿Es la web oficial de Sugargoo?","No. Es un catálogo y guía independiente. No procesa pedidos, saldo ni soporte de plataforma."],["¿Los precios USD son finales?","No. Son referencias redondeadas. Opciones, envío nacional, servicios y envío internacional se calculan aparte."],["¿Una tarjeta garantiza calidad?","No. Es una ruta de descubrimiento. Revisa anuncio actual, fotos de almacén, medidas y devolución."],["¿Por qué enfoque UK?","Los compradores UK necesitan una ruta clara entre descubrimiento, tamaño del paquete, restricciones y entrega."],["¿Dónde llevan los botones?","Cada botón abre el anuncio correspondiente en el catálogo principal; nunca una plataforma no relacionada."],["¿Cuántas fotos QC incluye Sugargoo?","La guía QC publicada indica normalmente cinco fotos básicas tras la llegada al almacén. Pide una foto o medida específica si falta una prueba concreta."],["¿Cuánto dura el almacenaje gratuito?","La guía de almacenaje distingue tipos: 100 días para pedidos de compra y 30 días para pedidos de reventa. Comprueba el contador del pedido y las condiciones vigentes de ampliación."],["¿Siempre se usa el peso volumétrico?","No. Cada ruta define peso real, volumen, divisor y escalones. Introduce las medidas embaladas y usa el resultado actual."],["¿Se puede devolver cualquier artículo del almacén?","No. Depende de la fase, condiciones del vendedor, tipo de producto y plazo aplicable. Puede haber portes o deducciones."]],
    footer: "Recurso independiente de descubrimiento y educación. Sin afiliación con Sugargoo ni las marcas mostradas. El stock y las reglas pueden cambiar.", updated: "Investigación y rutas revisadas: 2 de septiembre de 2026"
  },
  fr: {
    locale: "Édition UK", preview: "ÉDITION UK INDÉPENDANTE — ROUTES, QC ET NOTES D’EXPÉDITION ACTUELLES",
    nav: { spreadsheet: "Tableur", finds: "Trouvailles", guide: "Guide", qc: "QC", shipping: "Livraison", faq: "FAQ", articles: "Articles" },
    heroKicker: "UN MEILLEUR PARCOURS JUSQU’À VOTRE PORTE", heroTitle: "Le tableur Sugargoo UK, reconstruit pour mieux décider.", heroText: "Parcourez un catalogue compact et visuel, ouvrez la fiche exacte, contrôlez les photos d’entrepôt et préparez un colis UK sans feuille interminable.",
    browse: "Voir les trouvailles vérifiées", readGuide: "Lire le guide UK", searchPlaceholder: "Rechercher chaussures, sweats…", searchButton: "Rechercher dans le catalogue",
    metrics: ["24 routes vérifiées", "6 catégories claires", "5 langues complètes", "Notes d’expédition UK"],
    categoryKicker: "LA CARTE D’ACHAT", categoryTitle: "Six chemins. Aucun défilement sans fin.", categoryText: "Chaque chemin affiche la catégorie, la page source actuelle et l’accès direct au catalogue complet.", openCategory: "Ouvrir la catégorie complète", viewLane: "Voir le chemin UK",
    findsKicker: "GRILLE ÉDITORIALE", findsTitle: "Les informations utiles avant le bruit.", findsText: "Prix USD indicatifs convertis le 1er septembre 2026. Vérifiez le prix, les options et la disponibilité avant commande.", all: "Tous", openListing: "Ouvrir la fiche exacte", approx: "env.", noResults: "Aucune trouvaille pour ce filtre.",
    flowKicker: "BOUCLE EN QUATRE CONTRÔLES", flowTitle: "Préparer un colis UK plus sereinement.", flow: [["01","Sélectionner","Comparer image, options et fiche source avant achat."],["02","Entrepôt","Attendre la réception et l’enregistrement avant de planifier."],["03","Décision QC","Contrôler l’article reçu, pas seulement les photos vendeur."],["04","Emballer pour UK","Comparer limites, poids facturable et notes de route."]],
    toolKicker: "LABO D’EXPÉDITION", toolTitle: "Testez le poids volumétrique avant soumission.", toolText: "Saisissez les dimensions emballées, choisissez le diviseur de la route et comparez avec le poids réel. Les règles du transporteur restent prioritaires.",
    articlesKicker: "NOTES DE TERRAIN", articlesTitle: "Des lectures basées sur les vraies décisions d’achat.", readArticle: "Lire la note",
    faqKicker: "RÉPONSES DIRECTES", faqTitle: "Ce que fait ce tableur UK — et ses limites.", faq: [["Est-ce le site officiel Sugargoo ?","Non. C’est un catalogue et guide indépendant. Il ne gère ni solde, ni commande, ni support plateforme."],["Les prix USD sont-ils définitifs ?","Non. Ce sont des conversions indicatives. Options, livraison locale, services et expédition internationale sont séparés."],["Une carte garantit-elle la qualité ?","Non. Elle aide à découvrir. Contrôlez fiche actuelle, photos d’entrepôt, mesures et retour."],["Pourquoi un angle UK ?","Les acheteurs UK ont besoin d’un parcours clair entre produit, taille du colis, restrictions et livraison."],["Où vont les boutons produit ?","Chaque bouton ouvre la fiche correspondante du catalogue principal, jamais une plateforme sans rapport."],["Combien de photos QC Sugargoo sont incluses ?","Le guide QC publié indique normalement cinq photos de base après l’arrivée. Demandez une photo ou mesure ciblée pour une question précise."],["Combien de temps le stockage est-il gratuit ?","Le guide de stockage distingue les commandes : 100 jours pour les achats et 30 jours pour la revente. Vérifiez l’horloge active et les conditions d’extension."],["Le poids volumétrique est-il toujours utilisé ?","Non. Chaque route fixe poids réel, volume, diviseur et paliers. Saisissez les dimensions emballées et utilisez le résultat actif."],["Tout article en entrepôt peut-il être retourné ?","Non. L’étape, les conditions vendeur, le type de produit et le délai applicable comptent. Des frais peuvent être déduits."]],
    footer: "Ressource indépendante de découverte et d’information. Sans affiliation avec Sugargoo ni les marques montrées. Stock et règles peuvent changer.", updated: "Recherche et vérification des routes : 2 septembre 2026"
  },
  it: {
    locale: "Edizione UK", preview: "EDIZIONE UK INDIPENDENTE — PERCORSI, QC E NOTE DI SPEDIZIONE ATTUALI",
    nav: { spreadsheet: "Foglio", finds: "Scoperte", guide: "Guida", qc: "QC", shipping: "Spedizione", faq: "FAQ", articles: "Articoli" },
    heroKicker: "UN PERCORSO MIGLIORE FINO ALLA PORTA", heroTitle: "Il foglio Sugargoo UK, ricostruito per decidere meglio.", heroText: "Sfoglia un catalogo compatto e visivo, apri la scheda esatta, controlla le foto di magazzino e pianifica un pacco UK senza perderti in un foglio enorme.",
    browse: "Vedi prodotti controllati", readGuide: "Leggi la guida UK", searchPlaceholder: "Cerca scarpe, felpe, maglie…", searchButton: "Cerca nel catalogo completo",
    metrics: ["24 percorsi controllati", "6 categorie chiare", "5 lingue complete", "Note di spedizione UK"],
    categoryKicker: "MAPPA ACQUISTI", categoryTitle: "Sei percorsi. Nessuno scorrimento infinito.", categoryText: "Ogni percorso mostra categoria, pagina sorgente aggiornata e accesso diretto al catalogo completo.", openCategory: "Apri categoria completa", viewLane: "Vedi percorso UK",
    findsKicker: "GRIGLIA EDITORIALE", findsTitle: "Le informazioni utili vengono prima.", findsText: "Prezzi USD indicativi convertiti il 1 settembre 2026. Conferma prezzo, opzioni e disponibilità prima dell’ordine.", all: "Tutti", openListing: "Apri scheda esatta", approx: "circa", noResults: "Nessun prodotto per questo filtro.",
    flowKicker: "CICLO DI QUATTRO CONTROLLI", flowTitle: "Preparare un pacco UK con più calma.", flow: [["01","Seleziona","Confronta immagine, opzioni e scheda sorgente prima di acquistare."],["02","Magazzino","Attendi ricezione e registrazione prima di pianificare il pacco."],["03","Decisione QC","Controlla l’articolo ricevuto, non solo le foto del venditore."],["04","Imballa per UK","Confronta limiti, peso fatturabile e note della rotta."]],
    toolKicker: "LABORATORIO SPEDIZIONI", toolTitle: "Prova il peso volumetrico prima dell’invio.", toolText: "Inserisci le misure imballate, scegli il divisore della rotta e confronta con il peso reale. Le regole del vettore restano decisive.",
    articlesKicker: "NOTE SUL CAMPO", articlesTitle: "Letture utili basate sulle decisioni reali.", readArticle: "Leggi la nota",
    faqKicker: "RISPOSTE DIRETTE", faqTitle: "Cosa fa questo foglio UK — e cosa non fa.", faq: [["È il sito ufficiale Sugargoo?","No. È un catalogo e una guida indipendente. Non gestisce fondi, ordini o assistenza della piattaforma."],["I prezzi USD sono finali?","No. Sono conversioni indicative. Opzioni, consegna interna, servizi e spedizione internazionale sono separati."],["Una scheda garantisce la qualità?","No. È un percorso di scoperta. Controlla scheda attuale, foto di magazzino, misure e reso."],["Perché il focus UK?","Gli acquirenti UK hanno bisogno di un percorso chiaro tra prodotto, dimensioni del pacco, restrizioni e consegna."],["Dove portano i pulsanti?","Ogni pulsante apre la scheda corrispondente nel catalogo principale, mai piattaforme non correlate."],["Quante foto QC include Sugargoo?","La guida QC pubblicata indica normalmente cinque foto di base dopo l’arrivo. Chiedi una foto o misura mirata per una domanda specifica."],["Per quanto tempo il deposito è gratuito?","La guida di deposito distingue i tipi di ordine: 100 giorni per acquisti e 30 giorni per ordini di rivendita. Controlla il timer attivo e le condizioni di proroga."],["Si usa sempre il peso volumetrico?","No. Ogni rotta definisce peso reale, volume, divisore e scaglioni. Inserisci le misure imballate e usa il risultato attuale."],["Ogni articolo in magazzino può essere restituito?","No. Dipende da fase, condizioni del venditore, tipo di prodotto e finestra applicabile. Possono esserci costi o detrazioni."]],
    footer: "Risorsa indipendente per scoperta e informazione. Nessuna affiliazione con Sugargoo o i marchi mostrati. Disponibilità e regole possono cambiare.", updated: "Ricerca e percorsi controllati: 2 settembre 2026"
  }
};

const basePaths = [[], ["spreadsheet"], ["finds"], ["guide"], ["qc"], ["shipping"], ["faq"], ["articles"]];
export const localPaths = [
  ...basePaths,
  ...categories.map((category) => ["category", category.slug]),
  ...articles.map((article) => ["articles", article.slug])
];

const metaTitles = {
  en: { home: "Sugargoo UK 2026 — Checked Routes, QC Evidence & Parcel Tools", spreadsheet: "Sugargoo UK Product Route Directory — 24 Checked Listings", finds: "Latest Sugargoo UK Finds — 12 Editor Picks & Route Archive", guide: "Sugargoo UK Workflow Map — Six Buying Checkpoints", qc: "Sugargoo QC Evidence Checklist — Photos & Measurements", shipping: "Sugargoo Chargeable Weight Calculator — UK Route Checks", faq: "Sugargoo UK FAQ — Verified Workflow and QC Answers", articles: "Sugargoo UK Evidence Guides and Field Notes" },
  de: { home: "Sugargoo UK 2026 — Geprüfte Routen, QC-Belege und Pakettools", spreadsheet: "Sugargoo UK Routenverzeichnis — 24 geprüfte Angebote", finds: "Neue Sugargoo UK-Funde — 12 Tipps und Routenarchiv", guide: "Sugargoo UK Ablaufkarte — Sechs Kaufprüfungen", qc: "Sugargoo QC-Belegcheck — Fotos und Maße", shipping: "Sugargoo Abrechnungsgewicht — UK-Routenprüfung", faq: "Sugargoo UK FAQ — Geprüfte Ablauf- und QC-Antworten", articles: "Sugargoo UK Belegleitfäden und Praxisnotizen" },
  es: { home: "Sugargoo UK 2026 — Rutas revisadas, pruebas QC y herramientas", spreadsheet: "Directorio Sugargoo UK — 24 anuncios revisados", finds: "Nuevos hallazgos Sugargoo UK — 12 favoritos y archivo", guide: "Mapa del proceso Sugargoo UK — Seis controles", qc: "Checklist de pruebas QC Sugargoo — Fotos y medidas", shipping: "Peso facturable Sugargoo — Controles de ruta UK", faq: "FAQ Sugargoo UK — Respuestas verificadas de proceso y QC", articles: "Guías de pruebas y notas Sugargoo UK" },
  fr: { home: "Sugargoo UK 2026 — Routes vérifiées, preuves QC et outils colis", spreadsheet: "Répertoire Sugargoo UK — 24 fiches vérifiées", finds: "Nouvelles trouvailles Sugargoo UK — 12 choix et archives", guide: "Carte du parcours Sugargoo UK — Six contrôles", qc: "Checklist des preuves QC Sugargoo — Photos et mesures", shipping: "Poids facturable Sugargoo — Contrôles de route UK", faq: "FAQ Sugargoo UK — Réponses vérifiées sur parcours et QC", articles: "Guides de preuves et notes Sugargoo UK" },
  it: { home: "Sugargoo UK 2026 — Rotte verificate, prove QC e strumenti pacco", spreadsheet: "Elenco rotte Sugargoo UK — 24 schede controllate", finds: "Nuovi prodotti Sugargoo UK — 12 scelte e archivio", guide: "Mappa del flusso Sugargoo UK — Sei controlli", qc: "Checklist prove QC Sugargoo — Foto e misure", shipping: "Peso fatturabile Sugargoo — Controlli rotta UK", faq: "FAQ Sugargoo UK — Risposte verificate su flusso e QC", articles: "Guide di prova e note Sugargoo UK" }
};

const metaDescriptions = {
  en: {
    home: "Independent UK research with 24 checked catalogue routes, category-level QC evidence, five-photo guidance and a chargeable-weight planning tool.",
    spreadsheet: "Browse all 24 checked UK catalogue routes by six categories, with exact source links, reference prices and a clear hand-off to the live listing.",
    finds: "See 12 current editor picks first, then use the separate route archive for the remaining checked items without duplicating the full directory view.",
    guide: "Follow six buying checkpoints from source verification to warehouse evidence and parcel submission, with official storage and QC facts clearly sourced.",
    qc: "Use a fixed warehouse-photo review order for identity, shape, construction, measurements and packaging before choosing keep, exchange or return.",
    shipping: "Compare actual and volumetric weight, test the route divisor and review packing, restrictions and current UK parcel terms before submission.",
    faq: "Find evidence-based answers on five basic QC photos, 100- or 30-day storage by order type, returns, pricing and chargeable weight.",
    articles: "Read long-form field notes on the buying workflow, warehouse-photo decisions and actual versus volumetric weight for UK parcel planning."
  },
  de: {
    home: "Unabhängige UK-Recherche mit 24 geprüften Routen, kategoriespezifischen QC-Belegen, Fünf-Foto-Hinweisen und Paketgewicht-Tool.",
    spreadsheet: "Alle 24 geprüften UK-Katalogrouten in sechs Kategorien mit exakten Quelllinks, Richtpreisen und direktem Übergang zum Live-Angebot.",
    finds: "Zuerst 12 aktuelle Redaktionstipps, danach ein getrenntes Archiv der übrigen geprüften Routen ohne Kopie der vollständigen Verzeichnisansicht.",
    guide: "Sechs Kaufprüfungen von der Quelle bis zur Paketeinreichung, mit klar belegten offiziellen Angaben zu Lagerdauer und QC-Fotos.",
    qc: "Lagerfotos fest nach Identität, Form, Verarbeitung, Maßen und Verpackung prüfen, bevor Behalten, Tausch oder Rückgabe entschieden wird.",
    shipping: "Ist- und Volumengewicht vergleichen, Routendivisor testen und Packen, Grenzen sowie aktuelle UK-Bedingungen vor Einreichung prüfen.",
    faq: "Belegte Antworten zu fünf QC-Basisfotos, 100 oder 30 Lagertagen je Bestellart, Rückgabe, Preisen und Abrechnungsgewicht.",
    articles: "Ausführliche Praxisnotizen zu Kaufablauf, Lagerfoto-Entscheidungen und Ist- gegenüber Volumengewicht für UK-Pakete."
  },
  es: {
    home: "Investigación UK independiente con 24 rutas revisadas, pruebas QC por categoría, guía de cinco fotos y herramienta de peso facturable.",
    spreadsheet: "Consulta las 24 rutas UK en seis categorías con enlaces exactos, precios orientativos y acceso directo al anuncio activo.",
    finds: "Mira primero 12 selecciones actuales y usa después el archivo separado para los demás artículos sin duplicar el directorio completo.",
    guide: "Sigue seis controles desde la fuente hasta el paquete, con datos oficiales claramente citados sobre almacenaje y fotos QC.",
    qc: "Revisa identidad, forma, construcción, medidas y embalaje en un orden fijo antes de conservar, cambiar o devolver.",
    shipping: "Compara peso real y volumétrico, prueba el divisor y revisa embalaje, límites y condiciones UK activas antes de enviar.",
    faq: "Respuestas basadas en pruebas sobre cinco fotos QC, 100 o 30 días según pedido, devoluciones, precios y peso facturable.",
    articles: "Notas extensas sobre flujo de compra, decisiones con fotos de almacén y peso real frente a volumétrico para paquetes UK."
  },
  fr: {
    home: "Recherche UK indépendante avec 24 routes vérifiées, preuves QC par catégorie, guide des cinq photos et outil de poids facturable.",
    spreadsheet: "Parcourez 24 routes UK en six catégories avec liens exacts, prix indicatifs et passage direct à la fiche active.",
    finds: "Consultez d’abord 12 choix actuels, puis l’archive séparée des autres routes sans recopier le répertoire complet.",
    guide: "Suivez six contrôles de la source au colis, avec faits officiels clairement cités sur stockage et photos QC.",
    qc: "Contrôlez identité, forme, construction, mesures et emballage dans un ordre fixe avant de garder, échanger ou retourner.",
    shipping: "Comparez poids réel et volumétrique, testez le diviseur et vérifiez emballage, limites et conditions UK actives.",
    faq: "Réponses fondées sur cinq photos QC, stockage de 100 ou 30 jours selon la commande, retours, prix et poids facturable.",
    articles: "Notes longues sur le parcours d’achat, les décisions par photos d’entrepôt et le poids réel ou volumétrique des colis UK."
  },
  it: {
    home: "Ricerca UK indipendente con 24 rotte controllate, prove QC per categoria, guida alle cinque foto e strumento di peso fatturabile.",
    spreadsheet: "Consulta 24 rotte UK in sei categorie con link esatti, prezzi indicativi e passaggio diretto alla scheda attiva.",
    finds: "Guarda prima 12 scelte attuali, poi usa l’archivio separato per gli altri articoli senza duplicare l’elenco completo.",
    guide: "Segui sei controlli dalla fonte al pacco, con dati ufficiali chiaramente citati su deposito e foto QC.",
    qc: "Controlla identità, forma, costruzione, misure e imballo in ordine fisso prima di tenere, cambiare o rendere.",
    shipping: "Confronta peso reale e volumetrico, prova il divisore e verifica imballo, limiti e condizioni UK attive.",
    faq: "Risposte basate su cinque foto QC, 100 o 30 giorni secondo l’ordine, resi, prezzi e peso fatturabile.",
    articles: "Note estese su flusso d’acquisto, decisioni con foto di magazzino e peso reale o volumetrico per pacchi UK."
  }
};

const categoryMeta = {
  en: (label) => `Sugargoo ${label} QC Evidence — 4 Checked UK Routes`,
  de: (label) => `Sugargoo ${label} QC-Belege — 4 geprüfte UK-Routen`,
  es: (label) => `Pruebas QC Sugargoo ${label} — 4 rutas UK`,
  fr: (label) => `Preuves QC Sugargoo ${label} — 4 routes UK`,
  it: (label) => `Prove QC Sugargoo ${label} — 4 rotte UK`
};

const categoryDescriptions = {
  en: (label) => `Review four checked Sugargoo ${label} routes with category-specific evidence for identity, measurements, construction and packing.`,
  de: (label) => `Vier geprüfte Sugargoo-${label}-Routen mit kategoriespezifischen Belegen zu Identität, Maßen, Verarbeitung und Verpackung.`,
  es: (label) => `Revisa cuatro rutas Sugargoo ${label} con pruebas específicas de identidad, medidas, construcción y embalaje.`,
  fr: (label) => `Contrôlez quatre routes Sugargoo ${label} avec preuves propres à l’identité, aux mesures, à la construction et à l’emballage.`,
  it: (label) => `Controlla quattro rotte Sugargoo ${label} con prove specifiche su identità, misure, costruzione e imballo.`
};

const articleDescriptionSuffix = {
  en: " Includes a practical evidence checklist for UK buyers.",
  de: " Mit praktischer Beleg-Checkliste für UK-Käufer.",
  es: " Incluye una checklist práctica para compradores UK.",
  fr: " Avec une checklist pratique pour les acheteurs UK.",
  it: " Con una checklist pratica per gli acquirenti UK."
};

const descriptionTails = {
  en: [" Updated 2 Sep 2026.", " Checked 2 September 2026.", " Facts and route links were checked on 2 September 2026."],
  de: [" Stand: 2. Sep. 2026.", " Geprüft am 2. September 2026.", " Fakten und Routenlinks wurden am 2. September 2026 geprüft."],
  es: [" Revisado 02.09.2026.", " Actualizado: 2 sep. 2026.", " Revisado el 2 de septiembre de 2026.", " Datos y rutas verificados el 2 de septiembre de 2026."],
  fr: [" Mis à jour : 2 sept. 2026.", " Vérifié le 2 septembre 2026.", " Faits et routes vérifiés le 2 septembre 2026."],
  it: [" Aggiornato: 2 set. 2026.", " Verificato il 2 settembre 2026.", " Dati e rotte verificati il 2 settembre 2026."]
};

function boundedDescription(text, lang) {
  let description = text.trim();
  const length = (value) => [...value].length;
  if (length(description) < 140) {
    const tails = descriptionTails[lang] || descriptionTails.en;
    const fitting = tails.find((tail) => length(description + tail) >= 140 && length(description + tail) <= 160);
    description += fitting || tails[tails.length - 1];
  }
  if (length(description) <= 160) return description;
  const clipped = [...description].slice(0, 159).join("");
  const boundary = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, boundary >= 140 ? boundary : 159).replace(/[,:;–—-]+$/u, "")}.`;
}

export function pageMeta(lang, key) {
  const article = key.startsWith("articles/") ? articles.find((item) => `articles/${item.slug}` === key) : null;
  const category = key.startsWith("category/") ? categories.find((item) => `category/${item.slug}` === key) : null;
  const titles = metaTitles[lang] || metaTitles.en;
  const title = article?.title?.[lang] || (category ? (categoryMeta[lang] || categoryMeta.en)(category.label) : titles[key] || titles.home);
  const descriptions = metaDescriptions[lang] || metaDescriptions.en;
  const description = article
    ? `${article.summary?.[lang] || article.summary.en}${articleDescriptionSuffix[lang] || articleDescriptionSuffix.en}`
    : category
      ? (categoryDescriptions[lang] || categoryDescriptions.en)(category.label)
      : descriptions[key] || descriptions.home;
  return {
    title,
    description: boundedDescription(description, lang)
  };
}

export const pageLastModified = {
  home: "2026-09-02T06:00:00Z",
  spreadsheet: "2026-09-01T00:00:00Z",
  finds: "2026-09-02T06:00:00Z",
  guide: "2026-09-02T06:00:00Z",
  qc: "2026-09-02T06:00:00Z",
  shipping: "2026-09-02T06:00:00Z",
  faq: "2026-09-02T06:00:00Z",
  articles: "2026-09-02T06:00:00Z"
};

export function lastModifiedForPath(parts = []) {
  const key = parts.join("/") || "home";
  if (key.startsWith("articles/")) {
    const article = articles.find((item) => `articles/${item.slug}` === key);
    return `${article?.dateModified || "2026-09-02"}T00:00:00Z`;
  }
  if (key.startsWith("category/")) return "2026-09-02T06:00:00Z";
  return pageLastModified[key] || pageLastModified.home;
}

export function routeFor(lang, parts = []) {
  return `/${lang}${parts.length ? `/${parts.join("/")}` : ""}`;
}
