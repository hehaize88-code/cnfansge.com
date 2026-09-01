export const locales = ["en", "de", "es", "fr", "it"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = { en: "English", de: "Deutsch", es: "Español", fr: "Français", it: "Italiano" };
export function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }

export const navLabels: Record<Locale, Record<string, string>> = {
  en: { spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", faq: "FAQ", articles: "Articles" },
  de: { spreadsheet: "Tabelle", finds: "Fundstücke", guide: "Anleitung", qc: "QC", shipping: "Versand", faq: "FAQ", articles: "Artikel" },
  es: { spreadsheet: "Hoja", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envíos", faq: "FAQ", articles: "Artículos" },
  fr: { spreadsheet: "Tableau", finds: "Sélections", guide: "Guide", qc: "QC", shipping: "Livraison", faq: "FAQ", articles: "Articles" },
  it: { spreadsheet: "Foglio", finds: "Selezioni", guide: "Guida", qc: "QC", shipping: "Spedizione", faq: "FAQ", articles: "Articoli" },
};

export const categories = [
  { key: "shoes", href: "https://cnfansge.com/shoes/", icon: "01" },
  { key: "hoodies", href: "https://cnfansge.com/hoodies-sweaters/", icon: "02" },
  { key: "tshirts", href: "https://cnfansge.com/t-shirts/", icon: "03" },
  { key: "jackets", href: "https://cnfansge.com/jackets/", icon: "04" },
  { key: "pants", href: "https://cnfansge.com/pants-shorts/", icon: "05" },
  { key: "jerseys", href: "https://cnfansge.com/Jersey/", icon: "06" },
  { key: "accessories", href: "https://cnfansge.com/accessories/", icon: "07" },
  { key: "more", href: "https://cnfansge.com/AllProducts/", icon: "08" },
] as const;

export const categoryLabels: Record<Locale, Record<string, string>> = {
  en: { shoes: "Shoes", hoodies: "Hoodies", tshirts: "T-Shirts", jackets: "Jackets", pants: "Pants", jerseys: "Jerseys", accessories: "Accessories", more: "All products" },
  de: { shoes: "Schuhe", hoodies: "Hoodies", tshirts: "T-Shirts", jackets: "Jacken", pants: "Hosen", jerseys: "Trikots", accessories: "Accessoires", more: "Alle Produkte" },
  es: { shoes: "Zapatillas", hoodies: "Sudaderas", tshirts: "Camisetas", jackets: "Chaquetas", pants: "Pantalones", jerseys: "Camisetas deportivas", accessories: "Accesorios", more: "Todos los productos" },
  fr: { shoes: "Chaussures", hoodies: "Sweats", tshirts: "T-shirts", jackets: "Vestes", pants: "Pantalons", jerseys: "Maillots", accessories: "Accessoires", more: "Tous les produits" },
  it: { shoes: "Scarpe", hoodies: "Felpe", tshirts: "T-shirt", jackets: "Giacche", pants: "Pantaloni", jerseys: "Maglie", accessories: "Accessori", more: "Tutti i prodotti" },
};

export type Product = { id: number; name: string; category: string; usd: string; image: string; href: string; status: "route-checked" | "reference" };
export const products: Product[] = [
  { id: 6681, name: "Washed crewneck sweatshirt", category: "Sweatshirts", usd: "$23.47", image: "https://cnfansge.com/uploads/allimg/20260506/1-260506103535537.webp", href: "https://cnfansge.com/AllProducts/6681.html", status: "route-checked" },
  { id: 6680, name: "Relaxed everyday pants", category: "Pants / Shorts", usd: "$26.25", image: "https://cnfansge.com/uploads/allimg/20260506/1-26050610331M37.webp", href: "https://cnfansge.com/AllProducts/6680.html", status: "route-checked" },
  { id: 6679, name: "Match jersey No. 55", category: "Jerseys", usd: "$18.19", image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg", href: "https://cnfansge.com/AllProducts/6679.html", status: "reference" },
  { id: 6678, name: "Match jersey No. 54", category: "Jerseys", usd: "$18.19", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422225000a6.jpg", href: "https://cnfansge.com/AllProducts/6678.html", status: "reference" },
  { id: 6677, name: "Match jersey No. 53", category: "Jerseys", usd: "$18.19", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959349.jpg", href: "https://cnfansge.com/AllProducts/6677.html", status: "reference" },
  { id: 6676, name: "Match jersey No. 52", category: "Jerseys", usd: "$10.42", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959462.jpg", href: "https://cnfansge.com/AllProducts/6676.html", status: "reference" },
  { id: 6675, name: "Match jersey No. 51", category: "Jerseys", usd: "$10.42", image: "https://cnfansge.com/uploads/allimg/20260422/1-26042222495S64.jpg", href: "https://cnfansge.com/AllProducts/6675.html", status: "reference" },
  { id: 6674, name: "Match jersey No. 50", category: "Jerseys", usd: "$10.42", image: "https://cnfansge.com/uploads/allimg/20260422/1-26042222495IA.jpg", href: "https://cnfansge.com/AllProducts/6674.html", status: "reference" },
];

export const productLabels: Record<Locale, Record<number, { name: string; category: string }>> = {
  en: {
    6681:{name:"Washed crewneck sweatshirt",category:"Sweatshirts"}, 6680:{name:"Relaxed everyday pants",category:"Pants / Shorts"},
    6679:{name:"Match jersey No. 55",category:"Jerseys"}, 6678:{name:"Match jersey No. 54",category:"Jerseys"},
    6677:{name:"Match jersey No. 53",category:"Jerseys"}, 6676:{name:"Match jersey No. 52",category:"Jerseys"},
    6675:{name:"Match jersey No. 51",category:"Jerseys"}, 6674:{name:"Match jersey No. 50",category:"Jerseys"},
  },
  de: {
    6681:{name:"Gewaschenes Rundhals-Sweatshirt",category:"Sweatshirts"}, 6680:{name:"Locker geschnittene Alltagshose",category:"Hosen / Shorts"},
    6679:{name:"Spieltrikot Nr. 55",category:"Trikots"}, 6678:{name:"Spieltrikot Nr. 54",category:"Trikots"},
    6677:{name:"Spieltrikot Nr. 53",category:"Trikots"}, 6676:{name:"Spieltrikot Nr. 52",category:"Trikots"},
    6675:{name:"Spieltrikot Nr. 51",category:"Trikots"}, 6674:{name:"Spieltrikot Nr. 50",category:"Trikots"},
  },
  es: {
    6681:{name:"Sudadera lavada de cuello redondo",category:"Sudaderas"}, 6680:{name:"Pantalón informal de corte relajado",category:"Pantalones / Shorts"},
    6679:{name:"Camiseta de partido n.º 55",category:"Camisetas deportivas"}, 6678:{name:"Camiseta de partido n.º 54",category:"Camisetas deportivas"},
    6677:{name:"Camiseta de partido n.º 53",category:"Camisetas deportivas"}, 6676:{name:"Camiseta de partido n.º 52",category:"Camisetas deportivas"},
    6675:{name:"Camiseta de partido n.º 51",category:"Camisetas deportivas"}, 6674:{name:"Camiseta de partido n.º 50",category:"Camisetas deportivas"},
  },
  fr: {
    6681:{name:"Sweat lavé à col rond",category:"Sweats"}, 6680:{name:"Pantalon décontracté coupe ample",category:"Pantalons / Shorts"},
    6679:{name:"Maillot de match n° 55",category:"Maillots"}, 6678:{name:"Maillot de match n° 54",category:"Maillots"},
    6677:{name:"Maillot de match n° 53",category:"Maillots"}, 6676:{name:"Maillot de match n° 52",category:"Maillots"},
    6675:{name:"Maillot de match n° 51",category:"Maillots"}, 6674:{name:"Maillot de match n° 50",category:"Maillots"},
  },
  it: {
    6681:{name:"Felpa lavata a girocollo",category:"Felpe"}, 6680:{name:"Pantaloni casual dalla vestibilità ampia",category:"Pantaloni / Shorts"},
    6679:{name:"Maglia da gara n. 55",category:"Maglie"}, 6678:{name:"Maglia da gara n. 54",category:"Maglie"},
    6677:{name:"Maglia da gara n. 53",category:"Maglie"}, 6676:{name:"Maglia da gara n. 52",category:"Maglie"},
    6675:{name:"Maglia da gara n. 51",category:"Maglie"}, 6674:{name:"Maglia da gara n. 50",category:"Maglie"},
  },
};

type HomeCopy = { eyebrow: string; titleA: string; titleB: string; intro: string; search: string; searchButton: string; liveBoard: string; signal: string; signalText: string; categories: string; products: string; productsNote: string; viewAll: string; routeChecked: string; reference: string; open: string; decisionWorkflow: string; workflow: string; workflowText: string; steps: [string,string,string,string]; facts: [string,string,string] };
export const homeCopy: Record<Locale, HomeCopy> = {
  en: { eyebrow: "Independent product discovery desk · 2026", titleA: "Find first.", titleB: "Decide with evidence.", intro: "A faster Sugargoo spreadsheet experience built around live product routes, honest reference prices, QC decisions and shipping questions—not vague ‘verified’ badges.", search: "Search shoes, hoodies, jerseys…", searchButton: "Search live catalog", liveBoard:"Live route board", signal: "Today’s check", signalText: "Product routes open on the live catalog. Price is labeled as a reference until you confirm the current listing.", categories: "Browse the board", products: "Fresh routes", productsNote: "Images and destination pages match the live catalog. USD values are reference conversions, not checkout quotes.", viewAll: "View all products", routeChecked: "Route checked", reference: "Reference price", open: "Open listing", decisionWorkflow:"Decision workflow", workflow: "Use the spreadsheet like a decision tool", workflowText: "The useful work happens between finding an item and submitting a parcel.", steps: ["Find a live route", "Check options & seller notes", "Review warehouse QC", "Compare parcel lines"], facts: ["No fake ratings", "No invented delivery promises", "No hidden platform switching"] },
  de: { eyebrow: "Unabhängige Produktsuche · 2026", titleA: "Erst finden.", titleB: "Mit Belegen entscheiden.", intro: "Eine schnellere Sugargoo-Tabelle mit erreichbaren Produktwegen, klar gekennzeichneten Richtpreisen, QC-Entscheidungen und Versandfragen – ohne leere „verifiziert“-Siegel.", search: "Schuhe, Hoodies, Trikots suchen…", searchButton: "Live-Katalog suchen", liveBoard:"Aktive Produktwege", signal: "Heutiger Check", signalText: "Die Produktwege öffnen den Live-Katalog. Preise bleiben Richtwerte, bis du das aktuelle Angebot bestätigst.", categories: "Kategorien durchsuchen", products: "Neue Produktwege", productsNote: "Bilder und Zielseiten entsprechen dem Live-Katalog. USD-Werte sind Umrechnungsrichtwerte, keine Checkout-Angebote.", viewAll: "Alle Produkte ansehen", routeChecked: "Weg geprüft", reference: "Richtpreis", open: "Angebot öffnen", decisionWorkflow:"Entscheidungsablauf", workflow: "Die Tabelle als Entscheidungshilfe nutzen", workflowText: "Die entscheidende Prüfung liegt zwischen Produktsuche und Paketabgabe.", steps: ["Aktiven Weg finden", "Optionen und Hinweise prüfen", "Lager-QC bewerten", "Paketlinien vergleichen"], facts: ["Keine erfundenen Bewertungen", "Keine falschen Lieferzusagen", "Kein versteckter Plattformwechsel"] },
  es: { eyebrow: "Mesa independiente de productos · 2026", titleA: "Encuentra primero.", titleB: "Decide con pruebas.", intro: "Una experiencia de hoja Sugargoo más rápida, centrada en rutas activas, precios de referencia claros, decisiones de QC y dudas de envío; sin etiquetas vacías de “verificado”.", search: "Buscar zapatillas, sudaderas, camisetas…", searchButton: "Buscar en catálogo", liveBoard:"Panel de rutas activas", signal: "Comprobación de hoy", signalText: "Las rutas abren el catálogo en vivo. El precio se marca como referencia hasta confirmar el anuncio actual.", categories: "Explorar categorías", products: "Rutas recientes", productsNote: "Las imágenes y destinos coinciden con el catálogo activo. Los valores USD son conversiones de referencia, no presupuestos de pago.", viewAll: "Ver todos los productos", routeChecked: "Ruta comprobada", reference: "Precio orientativo", open: "Abrir anuncio", decisionWorkflow:"Proceso de decisión", workflow: "Usa la hoja para decidir", workflowText: "El trabajo útil ocurre entre encontrar un artículo y enviar el paquete.", steps: ["Encontrar una ruta activa", "Revisar opciones y notas", "Evaluar el QC del almacén", "Comparar líneas de envío"], facts: ["Sin valoraciones inventadas", "Sin promesas falsas de entrega", "Sin cambios ocultos de plataforma"] },
  fr: { eyebrow: "Bureau indépendant de sélection · 2026", titleA: "Trouver d’abord.", titleB: "Décider avec des preuves.", intro: "Une feuille Sugargoo plus rapide, fondée sur des routes actives, des prix indicatifs clairement signalés, le contrôle QC et les questions d’expédition — sans faux badges « vérifié ».", search: "Rechercher chaussures, sweats, maillots…", searchButton: "Chercher le catalogue", liveBoard:"Tableau des routes actives", signal: "Contrôle du jour", signalText: "Les routes produits ouvrent le catalogue actif. Le prix reste indicatif jusqu’à confirmation de l’annonce actuelle.", categories: "Explorer les catégories", products: "Routes récentes", productsNote: "Les images et pages de destination correspondent au catalogue actif. Les prix USD sont indicatifs, pas des devis de paiement.", viewAll: "Voir tous les produits", routeChecked: "Route contrôlée", reference: "Prix indicatif", open: "Ouvrir l’annonce", decisionWorkflow:"Parcours de décision", workflow: "Utiliser la feuille pour décider", workflowText: "L’essentiel se joue entre la découverte du produit et la soumission du colis.", steps: ["Trouver une route active", "Vérifier options et notes", "Examiner le QC d’entrepôt", "Comparer les lignes colis"], facts: ["Aucune note inventée", "Aucune promesse de délai", "Aucun changement de plateforme caché"] },
  it: { eyebrow: "Scrivania indipendente di ricerca · 2026", titleA: "Prima trova.", titleB: "Poi decidi con prove.", intro: "Un foglio Sugargoo più rapido, costruito su percorsi attivi, prezzi indicativi dichiarati, decisioni QC e domande di spedizione, senza etichette “verificato” prive di prove.", search: "Cerca scarpe, felpe, maglie…", searchButton: "Cerca nel catalogo", liveBoard:"Bacheca dei percorsi attivi", signal: "Controllo di oggi", signalText: "I percorsi aprono il catalogo attivo. Il prezzo resta indicativo finché non confermi l’inserzione corrente.", categories: "Esplora le categorie", products: "Percorsi recenti", productsNote: "Immagini e destinazioni corrispondono al catalogo attivo. I valori USD sono conversioni indicative, non preventivi di checkout.", viewAll: "Vedi tutti i prodotti", routeChecked: "Percorso controllato", reference: "Prezzo indicativo", open: "Apri inserzione", decisionWorkflow:"Percorso decisionale", workflow: "Usa il foglio per decidere", workflowText: "Il lavoro utile avviene tra la scoperta dell’articolo e l’invio del pacco.", steps: ["Trova un percorso attivo", "Controlla opzioni e note", "Valuta il QC in magazzino", "Confronta le linee pacco"], facts: ["Nessuna valutazione inventata", "Nessuna promessa di consegna", "Nessun cambio piattaforma nascosto"] },
};
