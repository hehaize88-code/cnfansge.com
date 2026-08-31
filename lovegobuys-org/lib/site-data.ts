export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Lang = (typeof languages)[number];

export const languageNames: Record<Lang, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export const sectionSlugs = ["finds", "categories", "guide", "qc", "shipping", "articles", "faq"];

type Copy = {
  nav: string[];
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  searchPlaceholder: string;
  searchButton: string;
  searchNote: string;
  browse: string;
  browseText: string;
  latest: string;
  latestText: string;
  viewItem: string;
  sourcePrice: string;
  categories: string;
  categoriesText: string;
  openCategory: string;
  workflow: string;
  workflowText: string;
  steps: { n: string; title: string; text: string }[];
  guides: string;
  guidesText: string;
  readGuide: string;
  faq: string;
  faqItems: { q: string; a: string }[];
  independent: string;
  updated: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    nav: ["Finds", "Categories", "Guide", "QC", "Shipping", "Articles", "FAQ"],
    eyebrow: "Independent product research desk · 2026",
    heroTitle: "A LoveGoBuy spreadsheet should help you decide—not just scroll.",
    heroText: "Start with a real product route, compare the correct option and images, check warehouse evidence, then include packed weight before you decide what belongs in your shortlist.",
    searchPlaceholder: "Search shoes, hoodie, jersey…",
    searchButton: "Search the product index",
    searchNote: "Search opens the product index in a new tab. Confirm the live listing before ordering.",
    browse: "Quick lanes",
    browseText: "Choose one product type first. Each route opens the matching category in the product index.",
    latest: "Current routes worth checking",
    latestText: "These cards use the same first image and detail destination as the product index. Prices are approximate USD conversions checked on 31 August 2026; the live page is the source of record.",
    viewItem: "Check product route",
    sourcePrice: "Approx. listing price",
    categories: "Browse by evidence, not hype",
    categoriesText: "Different products need different photos, measurements and shipping questions. Begin with the category and use the checklist that fits it.",
    openCategory: "Open category",
    workflow: "A smaller, stronger shortlist",
    workflowText: "The workflow follows the questions buyers actually need to answer between discovery and parcel submission.",
    steps: [
      { n: "01", title: "Match the destination", text: "Confirm title, selected option and first image before comparing anything else." },
      { n: "02", title: "Read the QC evidence", text: "Use useful angles, close-ups and measurements; do not treat photo count as proof." },
      { n: "03", title: "Add packed weight", text: "Consider packaging, dimensions, route and destination before calling a find good value." },
    ],
    guides: "Field guides",
    guidesText: "Focused pages answer one intent at a time, with no invented delivery promises, coupon claims or fixed fees.",
    readGuide: "Read the guide",
    faq: "Questions before you open a buy link",
    faqItems: [
      { q: "Is this the official LoveGoBuy website?", a: "No. This is an independent research and discovery guide. It does not manage accounts, payments, orders, refunds, tracking or warehouse records." },
      { q: "Are the product cards verified purchases?", a: "They are checked routes into the product index, not purchase guarantees. Confirm the current title, option, images, source page, price and availability each time." },
      { q: "What should I check in QC photos?", a: "First confirm the item and option. Then inspect category-specific construction, useful close-ups, visible measurements, scale and any missing angles. Photos cannot prove comfort, durability or material composition." },
      { q: "How should I estimate shipping?", a: "Use expected packed weight and dimensions, destination and an available route in the current official estimator. Rates and route rules can change, so do not rely on a static number." },
      { q: "Which marketplaces does LoveGoBuy currently mention?", a: "Its public homepage currently positions the service around Taobao, 1688 and Weidian and offers search by product name, source link or photo. Marketplace details and availability still need to be checked on the live listing." },
      { q: "How many QC photos does LoveGoBuy provide?", a: "Current LoveGoBuy product-page wording describes 3–8 high-definition inspection photos. Treat that as a dated platform description, then judge whether the actual images for your item answer the necessary questions." },
      { q: "Is item weight the same as international shipping weight?", a: "Not necessarily. Final parcel calculation can include packaging, consolidation and dimensions. The official estimator asks for length, width and height as well as weight." },
      { q: "Do public reviews prove that my order will go well?", a: "No. Reviews are individual reports from different products, dates, routes and destinations. Use recurring themes to build checks, then judge the current transaction from its own records." },
    ],
    independent: "Independent guide · No checkout · No account access · No platform affiliation",
    updated: "Research checked 31 August 2026",
  },
  de: {
    nav: ["Funde", "Kategorien", "Anleitung", "QC", "Versand", "Artikel", "FAQ"],
    eyebrow: "Unabhängige Produktrecherche · 2026",
    heroTitle: "Eine LoveGoBuy-Tabelle sollte beim Entscheiden helfen – nicht nur beim Scrollen.",
    heroText: "Beginne mit einer echten Produktroute, vergleiche die richtige Variante und die Bilder, prüfe Lagerfotos und berücksichtige das verpackte Gewicht, bevor ein Fund auf deine Auswahlliste kommt.",
    searchPlaceholder: "Schuhe, Hoodie, Trikot suchen …",
    searchButton: "Produktindex durchsuchen",
    searchNote: "Die Suche öffnet den Produktindex in einem neuen Tab. Prüfe vor der Bestellung immer die aktuelle Listung.",
    browse: "Schnelle Kategorien",
    browseText: "Wähle zuerst einen Produkttyp. Jede Route öffnet die passende Kategorie im Produktindex.",
    latest: "Aktuelle Routen zum Prüfen",
    latestText: "Diese Karten verwenden dasselbe erste Bild und dasselbe Detailziel wie der Produktindex. USD-Preise sind ungefähre Umrechnungen vom 31. August 2026; maßgeblich ist die Live-Seite.",
    viewItem: "Produktroute prüfen",
    sourcePrice: "Ungefährer Listenpreis",
    categories: "Nach Belegen suchen, nicht nach Hype",
    categoriesText: "Verschiedene Produkte benötigen andere Fotos, Maße und Versandfragen. Beginne mit der Kategorie und nutze die passende Prüfliste.",
    openCategory: "Kategorie öffnen",
    workflow: "Eine kleinere, bessere Auswahlliste",
    workflowText: "Der Ablauf folgt den Fragen, die zwischen Produktsuche und Paketeinreichung wirklich beantwortet werden müssen.",
    steps: [
      { n: "01", title: "Zielseite abgleichen", text: "Titel, gewählte Variante und erstes Bild müssen übereinstimmen, bevor du vergleichst." },
      { n: "02", title: "QC-Belege lesen", text: "Nutze sinnvolle Ansichten, Nahaufnahmen und Maße; die Anzahl der Fotos ist kein Qualitätsbeweis." },
      { n: "03", title: "Verpacktes Gewicht ergänzen", text: "Verpackung, Maße, Route und Zielort gehören in jede Wertbetrachtung." },
    ],
    guides: "Praxisleitfäden",
    guidesText: "Jede Seite beantwortet eine klare Frage – ohne erfundene Liefergarantien, Rabattversprechen oder feste Gebühren.",
    readGuide: "Leitfaden lesen",
    faq: "Fragen vor dem Öffnen eines Kauflinks",
    faqItems: [
      { q: "Ist dies die offizielle LoveGoBuy-Website?", a: "Nein. Dies ist ein unabhängiger Recherche- und Entdeckungsleitfaden ohne Zugriff auf Konten, Zahlungen, Bestellungen, Erstattungen, Tracking oder Lagerdaten." },
      { q: "Sind die Produktkarten verifizierte Käufe?", a: "Nein. Es sind geprüfte Wege in den Produktindex, keine Kaufgarantien. Kontrolliere bei jedem Besuch Titel, Variante, Bilder, Quelle, Preis und Verfügbarkeit." },
      { q: "Was ist auf QC-Fotos zu prüfen?", a: "Zuerst Artikel und Variante bestätigen. Danach produktspezifische Verarbeitung, Nahaufnahmen, Maße, Größenbezug und fehlende Ansichten prüfen. Fotos beweisen weder Komfort noch Haltbarkeit oder Material." },
      { q: "Wie schätze ich den Versand?", a: "Nutze erwartetes Packgewicht und Maße, Zielland und eine aktuell verfügbare Route im offiziellen Rechner. Preise und Regeln können sich ändern." },
      { q: "Welche Marktplätze nennt LoveGoBuy derzeit?", a: "Die öffentliche Startseite nennt aktuell Taobao, 1688 und Weidian und bietet die Suche per Produktname, Quelllink oder Foto. Details und Verfügbarkeit müssen auf der Live-Listung geprüft werden." },
      { q: "Wie viele QC-Fotos stellt LoveGoBuy bereit?", a: "Die aktuelle Formulierung auf LoveGoBuy-Produktseiten beschreibt 3–8 hochauflösende Prüffotos. Das ist eine datierte Plattformangabe; entscheidend ist, ob die Bilder deines Artikels die nötigen Fragen beantworten." },
      { q: "Ist das Artikelgewicht das internationale Versandgewicht?", a: "Nicht unbedingt. Verpackung, Konsolidierung und Maße können die Paketberechnung verändern. Der offizielle Rechner fragt neben dem Gewicht auch Länge, Breite und Höhe ab." },
      { q: "Beweisen öffentliche Bewertungen, dass meine Bestellung gut läuft?", a: "Nein. Bewertungen betreffen unterschiedliche Produkte, Daten, Routen und Ziele. Nutze wiederkehrende Themen für deine Prüfliste und bewerte die konkrete Transaktion anhand ihrer eigenen Belege." },
    ],
    independent: "Unabhängiger Leitfaden · Kein Checkout · Kein Kontozugriff · Keine Plattformzugehörigkeit",
    updated: "Recherche geprüft am 31. August 2026",
  },
  es: {
    nav: ["Hallazgos", "Categorías", "Guía", "QC", "Envío", "Artículos", "FAQ"],
    eyebrow: "Mesa independiente de investigación · 2026",
    heroTitle: "Una hoja de LoveGoBuy debe ayudarte a decidir, no solo a desplazarte.",
    heroText: "Empieza por una ruta real, compara la opción y las imágenes correctas, revisa las pruebas del almacén y añade el peso embalado antes de guardar un producto.",
    searchPlaceholder: "Buscar zapatillas, sudadera, camiseta…",
    searchButton: "Buscar en el índice",
    searchNote: "La búsqueda abre el índice en una pestaña nueva. Confirma el anuncio en vivo antes de pedir.",
    browse: "Rutas rápidas",
    browseText: "Elige primero un tipo de producto. Cada ruta abre la categoría correspondiente en el índice.",
    latest: "Rutas actuales para revisar",
    latestText: "Las tarjetas usan la misma primera imagen y el mismo destino que el índice. Los precios en USD son conversiones aproximadas comprobadas el 31 de agosto de 2026; manda la página en vivo.",
    viewItem: "Revisar ruta",
    sourcePrice: "Precio aproximado",
    categories: "Busca pruebas, no publicidad",
    categoriesText: "Cada tipo de producto necesita fotos, medidas y preguntas de envío diferentes. Empieza por la categoría y aplica su lista de control.",
    openCategory: "Abrir categoría",
    workflow: "Una lista más corta y mejor",
    workflowText: "El proceso sigue las preguntas reales entre el descubrimiento y la preparación del paquete.",
    steps: [
      { n: "01", title: "Comprueba el destino", text: "Confirma título, opción seleccionada y primera imagen antes de comparar." },
      { n: "02", title: "Lee las pruebas QC", text: "Busca ángulos útiles, primeros planos y medidas; la cantidad de fotos no demuestra calidad." },
      { n: "03", title: "Añade el peso embalado", text: "Incluye embalaje, dimensiones, ruta y destino antes de valorar el precio." },
    ],
    guides: "Guías prácticas",
    guidesText: "Cada página responde a una intención concreta, sin promesas inventadas de entrega, cupones o tarifas fijas.",
    readGuide: "Leer la guía",
    faq: "Preguntas antes de abrir un enlace",
    faqItems: [
      { q: "¿Es la web oficial de LoveGoBuy?", a: "No. Es una guía independiente de búsqueda e investigación. No accede a cuentas, pagos, pedidos, reembolsos, seguimiento ni datos del almacén." },
      { q: "¿Las tarjetas son compras verificadas?", a: "Son rutas revisadas hacia el índice, no garantías. Confirma siempre título, variante, imágenes, fuente, precio y disponibilidad actuales." },
      { q: "¿Qué debo mirar en las fotos QC?", a: "Primero confirma artículo y variante. Después revisa construcción, detalles, medidas, escala y ángulos ausentes. Las fotos no prueban comodidad, duración ni composición." },
      { q: "¿Cómo calculo el envío?", a: "Usa el peso y dimensiones del paquete, destino y una ruta disponible en el estimador oficial. Las tarifas y reglas cambian." },
      { q: "¿Qué mercados menciona LoveGoBuy actualmente?", a: "Su página pública menciona actualmente Taobao, 1688 y Weidian y permite buscar por nombre, enlace de origen o foto. Los detalles y la disponibilidad deben verificarse en la ficha en vivo." },
      { q: "¿Cuántas fotos QC proporciona LoveGoBuy?", a: "El texto actual de las páginas de producto describe entre 3 y 8 fotos de inspección en alta definición. Es una descripción fechada; revisa si las imágenes de tu artículo responden a las preguntas necesarias." },
      { q: "¿El peso del artículo es el peso del envío internacional?", a: "No necesariamente. Embalaje, consolidación y dimensiones pueden cambiar el cálculo. El estimador oficial solicita largo, ancho y alto, además del peso." },
      { q: "¿Las reseñas públicas garantizan que mi pedido irá bien?", a: "No. Son experiencias con productos, fechas, rutas y destinos distintos. Convierte los temas repetidos en controles y evalúa la transacción actual con sus propios registros." },
    ],
    independent: "Guía independiente · Sin pago · Sin acceso a cuentas · Sin afiliación",
    updated: "Investigación revisada el 31 de agosto de 2026",
  },
  fr: {
    nav: ["Trouvailles", "Catégories", "Guide", "QC", "Livraison", "Articles", "FAQ"],
    eyebrow: "Bureau de recherche indépendant · 2026",
    heroTitle: "Un tableau LoveGoBuy doit aider à décider, pas seulement à défiler.",
    heroText: "Commencez par une vraie route produit, comparez la bonne option et les bonnes images, examinez les preuves de l'entrepôt puis ajoutez le poids emballé avant de retenir un article.",
    searchPlaceholder: "Rechercher chaussures, hoodie, maillot…",
    searchButton: "Rechercher dans l'index",
    searchNote: "La recherche ouvre l'index dans un nouvel onglet. Vérifiez la fiche en direct avant toute commande.",
    browse: "Accès rapides",
    browseText: "Choisissez d'abord un type de produit. Chaque route ouvre la catégorie correspondante dans l'index.",
    latest: "Routes actuelles à vérifier",
    latestText: "Ces cartes utilisent la même première image et la même page de détail que l'index. Les prix USD sont des conversions approximatives vérifiées le 31 août 2026 ; la page en direct fait foi.",
    viewItem: "Vérifier la route",
    sourcePrice: "Prix indicatif",
    categories: "Chercher des preuves, pas du battage",
    categoriesText: "Chaque catégorie exige des photos, mesures et questions de livraison différentes. Commencez par le type d'objet et sa liste de contrôle.",
    openCategory: "Ouvrir la catégorie",
    workflow: "Une sélection plus courte et plus solide",
    workflowText: "Le parcours suit les vraies questions entre la découverte d'un produit et la soumission du colis.",
    steps: [
      { n: "01", title: "Vérifier la destination", text: "Confirmez le titre, l'option choisie et la première image avant toute comparaison." },
      { n: "02", title: "Lire les preuves QC", text: "Cherchez angles utiles, gros plans et mesures ; le nombre de photos ne prouve rien à lui seul." },
      { n: "03", title: "Ajouter le poids emballé", text: "Tenez compte de l'emballage, des dimensions, de la route et de la destination." },
    ],
    guides: "Guides de terrain",
    guidesText: "Chaque page répond à une intention précise, sans délai garanti, coupon inventé ni frais fixes non vérifiés.",
    readGuide: "Lire le guide",
    faq: "Questions avant d'ouvrir un lien d'achat",
    faqItems: [
      { q: "Est-ce le site officiel LoveGoBuy ?", a: "Non. C'est un guide indépendant de recherche et de découverte, sans accès aux comptes, paiements, commandes, remboursements, suivis ou données d'entrepôt." },
      { q: "Les cartes sont-elles des achats vérifiés ?", a: "Ce sont des routes vérifiées vers l'index, pas des garanties d'achat. Contrôlez à chaque visite le titre, l'option, les images, la source, le prix et la disponibilité." },
      { q: "Que vérifier sur les photos QC ?", a: "Confirmez d'abord l'article et l'option, puis la construction, les gros plans, les mesures, l'échelle et les angles manquants. Une photo ne prouve ni confort, ni durabilité, ni composition." },
      { q: "Comment estimer la livraison ?", a: "Utilisez le poids et les dimensions emballés, la destination et une route disponible dans l'estimateur officiel. Les tarifs et règles peuvent changer." },
      { q: "Quelles places de marché LoveGoBuy mentionne-t-il actuellement ?", a: "La page publique mentionne actuellement Taobao, 1688 et Weidian et propose une recherche par nom, lien source ou photo. Les détails et la disponibilité doivent être vérifiés sur la fiche en direct." },
      { q: "Combien de photos QC LoveGoBuy fournit-il ?", a: "Le texte actuel des pages produit décrit 3 à 8 photos d'inspection en haute définition. C'est une indication datée ; vérifiez surtout si les images de votre article répondent aux questions nécessaires." },
      { q: "Le poids de l'article est-il le poids d'expédition international ?", a: "Pas nécessairement. Emballage, regroupement et dimensions peuvent modifier le calcul. L'estimateur officiel demande longueur, largeur et hauteur en plus du poids." },
      { q: "Les avis publics garantissent-ils le succès de ma commande ?", a: "Non. Ils concernent des produits, dates, routes et destinations différents. Transformez les thèmes récurrents en contrôles et jugez la transaction avec ses propres preuves." },
    ],
    independent: "Guide indépendant · Aucun paiement · Aucun accès aux comptes · Aucune affiliation",
    updated: "Recherche vérifiée le 31 août 2026",
  },
  it: {
    nav: ["Prodotti", "Categorie", "Guida", "QC", "Spedizione", "Articoli", "FAQ"],
    eyebrow: "Desk indipendente di ricerca · 2026",
    heroTitle: "Un foglio LoveGoBuy deve aiutarti a decidere, non solo a scorrere.",
    heroText: "Parti da un percorso prodotto reale, confronta opzione e immagini corrette, esamina le prove del magazzino e considera il peso imballato prima di salvare un articolo.",
    searchPlaceholder: "Cerca scarpe, felpa, maglia…",
    searchButton: "Cerca nell'indice prodotti",
    searchNote: "La ricerca apre l'indice in una nuova scheda. Verifica sempre la pagina aggiornata prima dell'ordine.",
    browse: "Percorsi rapidi",
    browseText: "Scegli prima un tipo di prodotto. Ogni percorso apre la categoria corrispondente nell'indice.",
    latest: "Percorsi attuali da controllare",
    latestText: "Le schede usano la stessa prima immagine e la stessa pagina dell'indice. I prezzi USD sono conversioni indicative verificate il 31 agosto 2026; fa fede la pagina live.",
    viewItem: "Controlla percorso",
    sourcePrice: "Prezzo indicativo",
    categories: "Cerca prove, non pubblicità",
    categoriesText: "Prodotti diversi richiedono foto, misure e domande di spedizione diverse. Inizia dalla categoria e usa la checklist corretta.",
    openCategory: "Apri categoria",
    workflow: "Una selezione più corta e migliore",
    workflowText: "Il percorso segue le domande reali tra scoperta del prodotto e invio del pacco.",
    steps: [
      { n: "01", title: "Controlla la destinazione", text: "Conferma titolo, opzione selezionata e prima immagine prima di confrontare." },
      { n: "02", title: "Leggi le prove QC", text: "Cerca angoli utili, dettagli e misure; il numero di foto non prova la qualità." },
      { n: "03", title: "Aggiungi il peso imballato", text: "Considera imballaggio, dimensioni, rotta e destinazione prima di giudicare il valore." },
    ],
    guides: "Guide pratiche",
    guidesText: "Ogni pagina risponde a un intento preciso, senza inventare tempi, coupon o commissioni fisse.",
    readGuide: "Leggi la guida",
    faq: "Domande prima di aprire un link",
    faqItems: [
      { q: "È il sito ufficiale LoveGoBuy?", a: "No. È una guida indipendente di ricerca e scoperta, senza accesso ad account, pagamenti, ordini, rimborsi, tracking o dati del magazzino." },
      { q: "Le schede sono acquisti verificati?", a: "Sono percorsi controllati verso l'indice, non garanzie. Verifica ogni volta titolo, variante, immagini, fonte, prezzo e disponibilità attuali." },
      { q: "Cosa controllo nelle foto QC?", a: "Prima conferma articolo e variante. Poi esamina costruzione, dettagli, misure, scala e viste mancanti. Le foto non provano comfort, durata o composizione." },
      { q: "Come stimo la spedizione?", a: "Usa peso e dimensioni imballati, destinazione e una rotta disponibile nello stimatore ufficiale. Tariffe e regole possono cambiare." },
      { q: "Quali marketplace cita attualmente LoveGoBuy?", a: "La pagina pubblica cita attualmente Taobao, 1688 e Weidian e permette la ricerca per nome, link di origine o foto. Dettagli e disponibilità vanno verificati sulla pagina live." },
      { q: "Quante foto QC fornisce LoveGoBuy?", a: "Il testo attuale delle pagine prodotto descrive da 3 a 8 foto di ispezione ad alta definizione. È una descrizione datata; conta soprattutto se le immagini del tuo articolo rispondono alle domande necessarie." },
      { q: "Il peso dell'articolo è il peso di spedizione internazionale?", a: "Non necessariamente. Imballaggio, consolidamento e dimensioni possono cambiare il calcolo. Lo stimatore ufficiale richiede lunghezza, larghezza e altezza oltre al peso." },
      { q: "Le recensioni pubbliche garantiscono che il mio ordine andrà bene?", a: "No. Riguardano prodotti, date, rotte e destinazioni diverse. Trasforma i temi ricorrenti in controlli e valuta la transazione corrente con le sue prove." },
    ],
    independent: "Guida indipendente · Nessun checkout · Nessun accesso account · Nessuna affiliazione",
    updated: "Ricerca verificata il 31 agosto 2026",
  },
};

export const products = [
  { name: "Shoe route 7729748283", category: "Shoes", price: "$14.70", weight: "673 g", image: "https://cnfansge.com/uploads/allimg/20260415/1-260415150J2P3.jpg", href: "https://cnfansge.com/AllProducts/6127.html" },
  { name: "Hoodie route 7668645904", category: "Hoodies", price: "$14.60", weight: "949 g", image: "https://cnfansge.com/uploads/allimg/20260421/1-260421155341E1.jpg", href: "https://cnfansge.com/AllProducts/6182.html" },
  { name: "T-shirt route 7669150943", category: "T-shirts", price: "$13.20", weight: "602 g", image: "https://cnfansge.com/uploads/allimg/20260421/1-2604211G02MO.jpg", href: "https://cnfansge.com/AllProducts/6237.html" },
  { name: "Jacket route 7675240560", category: "Jackets", price: "$23.80", weight: "580 g", image: "https://cnfansge.com/uploads/allimg/20260421/1-260421213Tb41.jpg", href: "https://cnfansge.com/AllProducts/6292.html" },
  { name: "Sweatshirt route 7755101935", category: "Sweatshirts", price: "$25.10", weight: "800 g", image: "https://cnfansge.com/uploads/allimg/20260506/1-260506103535537.webp", href: "https://cnfansge.com/AllProducts/6681.html" },
  { name: "Bottoms route 7755051257", category: "Pants / shorts", price: "$28.10", weight: "862 g", image: "https://cnfansge.com/uploads/allimg/20260506/1-26050610331M37.webp", href: "https://cnfansge.com/AllProducts/6680.html" },
  { name: "Jersey route 7641464690-A", category: "Jerseys", price: "$19.50", weight: "670 g", image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg", href: "https://cnfansge.com/AllProducts/6679.html" },
  { name: "Jersey route 7641464690-B", category: "Jerseys", price: "$19.50", weight: "847 g", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959349.jpg", href: "https://cnfansge.com/AllProducts/6677.html" },
];

export const categories = [
  { icon: "01", href: "https://cnfansge.com/shoes/", name: { en: "Shoes", de: "Schuhe", es: "Zapatillas", fr: "Chaussures", it: "Scarpe" }, check: { en: "profile · sole · size", de: "Profil · Sohle · Größe", es: "perfil · suela · talla", fr: "profil · semelle · pointure", it: "profilo · suola · taglia" } },
  { icon: "02", href: "https://cnfansge.com/hoodies-sweaters/", name: { en: "Hoodies", de: "Hoodies", es: "Sudaderas", fr: "Hoodies", it: "Felpe" }, check: { en: "fabric · chest · length", de: "Stoff · Brust · Länge", es: "tejido · pecho · largo", fr: "tissu · poitrine · longueur", it: "tessuto · torace · lunghezza" } },
  { icon: "03", href: "https://cnfansge.com/t-shirts/", name: { en: "T-shirts", de: "T-Shirts", es: "Camisetas", fr: "T-shirts", it: "T-shirt" }, check: { en: "print · collar · width", de: "Druck · Kragen · Breite", es: "estampado · cuello · ancho", fr: "impression · col · largeur", it: "stampa · collo · larghezza" } },
  { icon: "04", href: "https://cnfansge.com/jackets/", name: { en: "Jackets", de: "Jacken", es: "Chaquetas", fr: "Vestes", it: "Giacche" }, check: { en: "lining · hardware · weight", de: "Futter · Beschläge · Gewicht", es: "forro · herrajes · peso", fr: "doublure · pièces · poids", it: "fodera · dettagli · peso" } },
  { icon: "05", href: "https://cnfansge.com/pants-shorts/", name: { en: "Pants / shorts", de: "Hosen / Shorts", es: "Pantalones / shorts", fr: "Pantalons / shorts", it: "Pantaloni / shorts" }, check: { en: "waist · rise · inseam", de: "Bund · Leibhöhe · Innenbein", es: "cintura · tiro · entrepierna", fr: "taille · fourche · entrejambe", it: "vita · cavallo · interno gamba" } },
  { icon: "06", href: "https://cnfansge.com/accessories/", name: { en: "Accessories", de: "Accessoires", es: "Accesorios", fr: "Accessoires", it: "Accessori" }, check: { en: "scale · finish · closure", de: "Maßstab · Finish · Verschluss", es: "escala · acabado · cierre", fr: "échelle · finition · fermeture", it: "scala · finitura · chiusura" } },
  { icon: "07", href: "https://cnfansge.com/headwear/", name: { en: "Headwear", de: "Kopfbedeckung", es: "Gorras", fr: "Couvre-chefs", it: "Copricapi" }, check: { en: "shape · circumference · stitch", de: "Form · Umfang · Naht", es: "forma · contorno · costura", fr: "forme · tour · couture", it: "forma · circonferenza · cucitura" } },
  { icon: "08", href: "https://cnfansge.com/electronics/", name: { en: "Electronics", de: "Elektronik", es: "Electrónica", fr: "Électronique", it: "Elettronica" }, check: { en: "spec · plug · restrictions", de: "Daten · Stecker · Regeln", es: "datos · enchufe · límites", fr: "fiche · prise · limites", it: "specifiche · spina · limiti" } },
];

export const guideCards = [
  { slug: "guide", label: { en: "01 / START", de: "01 / START", es: "01 / INICIO", fr: "01 / DÉPART", it: "01 / INIZIO" }, title: { en: "Spreadsheet research workflow", de: "Rechercheablauf für Tabellen", es: "Proceso de investigación", fr: "Méthode de recherche", it: "Processo di ricerca" }, text: { en: "Turn a broad list into three comparable candidates with a reason for each decision.", de: "Aus einer langen Liste werden drei vergleichbare Kandidaten mit begründeten Entscheidungen.", es: "Convierte una lista amplia en tres candidatos comparables con razones claras.", fr: "Transformez une longue liste en trois candidats comparables et motivés.", it: "Riduci una lista ampia a tre candidati confrontabili con motivazioni chiare." } },
  { slug: "qc", label: { en: "02 / CHECK", de: "02 / PRÜFEN", es: "02 / CONTROL", fr: "02 / CONTRÔLE", it: "02 / CONTROLLO" }, title: { en: "QC photos without guesswork", de: "QC-Fotos ohne Raten", es: "Fotos QC sin suposiciones", fr: "Photos QC sans deviner", it: "Foto QC senza supposizioni" }, text: { en: "Check identity, construction and measurement coverage before approving a parcel.", de: "Prüfe Identität, Verarbeitung und Maße vor der Paketfreigabe.", es: "Revisa identidad, construcción y medidas antes de aprobar el paquete.", fr: "Contrôlez identité, construction et mesures avant le colis.", it: "Controlla identità, costruzione e misure prima del pacco." } },
  { slug: "shipping", label: { en: "03 / PLAN", de: "03 / PLAN", es: "03 / PLAN", fr: "03 / PLAN", it: "03 / PIANO" }, title: { en: "Packed weight and real cost", de: "Packgewicht und reale Kosten", es: "Peso embalado y coste real", fr: "Poids emballé et coût réel", it: "Peso imballato e costo reale" }, text: { en: "Separate item weight from chargeable parcel weight, dimensions, route and destination.", de: "Trenne Artikelgewicht von Paketgewicht, Maßen, Route und Ziel.", es: "Separa peso del artículo, peso facturable, medidas, ruta y destino.", fr: "Séparez poids article, poids facturé, dimensions, route et destination.", it: "Separa peso articolo, peso addebitabile, misure, rotta e destinazione." } },
  { slug: "articles", label: { en: "04 / READ", de: "04 / LESEN", es: "04 / LEER", fr: "04 / LIRE", it: "04 / LEGGI" }, title: { en: "Long-form field notes", de: "Ausführliche Feldnotizen", es: "Notas de campo extensas", fr: "Notes de terrain détaillées", it: "Note pratiche estese" }, text: { en: "Use source-aware articles for sizing, link matching, warehouse checks and parcel planning.", de: "Quellenbewusste Artikel zu Größen, Links, Lagerprüfung und Paketplanung.", es: "Artículos sobre talla, enlaces, control de almacén y planificación.", fr: "Articles sur tailles, liens, contrôle entrepôt et colis.", it: "Articoli su taglie, link, controlli di magazzino e pacchi." } },
];
