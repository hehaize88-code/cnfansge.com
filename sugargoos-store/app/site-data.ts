export const SITE_ORIGIN = "https://sugargoos.store";
export const MAIN_SITE = "https://cnfansge.com";
export const FX_RATE = 6.72;

export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Language = (typeof languages)[number];

export type Product = {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
  priceCny: number;
  priceUsd: number;
  href: string;
  note: string;
};

export const products: Product[] = [
  {
    id: "2534",
    name: "ESSENTIALS Shorts — 5 Styles",
    category: "pants",
    categoryLabel: "Pants & Shorts",
    image: "/products/essentials-shorts.webp",
    priceCny: 89,
    priceUsd: 13.24,
    href: `${MAIN_SITE}/AllProducts/2534.html`,
    note: "Multiple color references",
  },
  {
    id: "657",
    name: "Adidas Italia Tee",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/products/adidas-tee.webp",
    priceCny: 140,
    priceUsd: 20.83,
    href: `${MAIN_SITE}/AllProducts/657.html`,
    note: "Lightweight apparel",
  },
  {
    id: "392",
    name: "MLB Chunky Sneakers",
    category: "shoes",
    categoryLabel: "Shoes",
    image: "/products/mlb-chunky.webp",
    priceCny: 160,
    priceUsd: 23.81,
    href: `${MAIN_SITE}/AllProducts/392.html`,
    note: "Lifestyle silhouette",
  },
  {
    id: "5760",
    name: "Nike Air Max TN 1",
    category: "shoes",
    categoryLabel: "Shoes",
    image: "/products/nike-air-max-tn.webp",
    priceCny: 150,
    priceUsd: 22.32,
    href: `${MAIN_SITE}/AllProducts/5760.html`,
    note: "Multi-color listing",
  },
  {
    id: "2653",
    name: "Crocs-Style Slip-On Clogs",
    category: "shoes",
    categoryLabel: "Shoes",
    image: "/products/crocs-slippers.webp",
    priceCny: 70,
    priceUsd: 10.42,
    href: `${MAIN_SITE}/AllProducts/2653.html`,
    note: "Low-weight pick",
  },
  {
    id: "2450",
    name: "Spider Graphic Hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/products/spider-hoodie.webp",
    priceCny: 185,
    priceUsd: 27.53,
    href: `${MAIN_SITE}/AllProducts/2450.html`,
    note: "Multiple colors",
  },
  {
    id: "2102",
    name: "Portable Bluetooth Speaker",
    category: "electronics",
    categoryLabel: "Electronics",
    image: "/products/jbl-speaker.webp",
    priceCny: 200,
    priceUsd: 29.76,
    href: `${MAIN_SITE}/AllProducts/2102.html`,
    note: "Battery item — check route rules",
  },
  {
    id: "574",
    name: "Carhartt-Style Hoodie",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/products/carhartt-hoodie.webp",
    priceCny: 130,
    priceUsd: 19.35,
    href: `${MAIN_SITE}/AllProducts/574.html`,
    note: "Six color references",
  },
  {
    id: "2041",
    name: "Monogram Travel Bag",
    category: "accessories",
    categoryLabel: "Bags & Accessories",
    image: "/products/lv-bucket-bag.webp",
    priceCny: 258,
    priceUsd: 38.39,
    href: `${MAIN_SITE}/AllProducts/2041.html`,
    note: "Inspect hardware and alignment",
  },
  {
    id: "934",
    name: "ASICS Gel-Kayano Style Runner",
    category: "shoes",
    categoryLabel: "Shoes",
    image: "/products/asics-gel-kayano.webp",
    priceCny: 245,
    priceUsd: 36.46,
    href: `${MAIN_SITE}/AllProducts/934.html`,
    note: "On-foot photo reference",
  },
  {
    id: "3748",
    name: "Air Jordan 4 Style — 39 Colors",
    category: "shoes",
    categoryLabel: "Shoes",
    image: "/products/air-jordan-4.webp",
    priceCny: 188,
    priceUsd: 27.98,
    href: `${MAIN_SITE}/AllProducts/3748.html`,
    note: "Large variant listing",
  },
  {
    id: "708",
    name: "Wireless Earbud & Headphone Set",
    category: "electronics",
    categoryLabel: "Electronics",
    image: "/products/airpods.webp",
    priceCny: 80,
    priceUsd: 11.9,
    href: `${MAIN_SITE}/AllProducts/708.html`,
    note: "Battery item — check route rules",
  },
];

export const categories = [
  { key: "all", label: "All Finds", href: `${MAIN_SITE}/AllProducts/`, mark: "12+" },
  { key: "shoes", label: "Shoes", href: `${MAIN_SITE}/shoes/`, mark: "05" },
  { key: "hoodies", label: "Hoodies", href: `${MAIN_SITE}/hoodies-sweaters/`, mark: "02" },
  { key: "tshirts", label: "T-Shirts", href: `${MAIN_SITE}/t-shirts/`, mark: "01" },
  { key: "pants", label: "Pants & Shorts", href: `${MAIN_SITE}/pants-shorts/`, mark: "01" },
  { key: "accessories", label: "Accessories", href: `${MAIN_SITE}/accessories/`, mark: "01" },
  { key: "electronics", label: "Electronics", href: `${MAIN_SITE}/electronics/`, mark: "02" },
  { key: "jersey", label: "Jerseys", href: `${MAIN_SITE}/jersey/`, mark: "55+" },
];

export const routes = [
  "",
  "spreadsheet",
  "finds",
  "guide",
  "qc",
  "shipping",
  "faq",
  "articles",
  "articles/build-reliable-sugargoo-spreadsheet-fields-dates-evidence",
  "articles/sugargoo-spreadsheet-guide-2026",
  "articles/how-to-read-sugargoo-qc-photos",
  "articles/sugargoo-shipping-cost-guide-2026",
  "articles/sugargoo-fees-cost-breakdown-2026",
  "articles/sugargoo-review-2026",
  "articles/sugargoo-returns-refunds-storage-guide",
] as const;

type Copy = {
  locale: string;
  languageName: string;
  nav: Record<string, string>;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  searchPlaceholder: string;
  searchButton: string;
  independent: string;
  openFind: string;
  viewAll: string;
  categories: string;
  categoriesText: string;
  latest: string;
  latestText: string;
  guides: string;
  articles: string;
  readGuide: string;
  estimated: string;
  priceNote: string;
  sourceLabel: string;
  verifiedRoute: string;
  footerText: string;
  disclaimer: string;
  faqTitle: string;
  faqIntro: string;
  pageTitles: Record<string, string>;
  pageIntros: Record<string, string>;
  steps: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const copy: Record<Language, Copy> = {
  en: {
    locale: "en-US",
    languageName: "English",
    nav: { spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", faq: "FAQ", articles: "Articles" },
    heroEyebrow: "Independent buyer research · Updated September 2026",
    heroTitle: "Sugargoo Spreadsheet 2026: Find, Check and Ship Smarter",
    heroText: "A focused Sugargoo spreadsheet and buyer guide for browsing product routes, checking warehouse photos, and planning parcel weight before you pay.",
    searchPlaceholder: "Search the full product catalog…",
    searchButton: "Search products",
    independent: "Independent — not the official Sugargoo website",
    openFind: "Open product",
    viewAll: "Browse the full spreadsheet",
    categories: "Browse by category",
    categoriesText: "Start with a focused list, then verify the live product page before ordering.",
    latest: "Editor’s shortlist",
    latestText: "Real catalog images and CNY prices converted to indicative USD values.",
    guides: "Research before checkout",
    articles: "Field notes & long-form guides",
    readGuide: "Read guide",
    estimated: "Est. USD",
    priceNote: "Indicative conversion at ¥6.72 per US$1. Live checkout totals may differ.",
    sourceLabel: "Catalog route",
    verifiedRoute: "Live product route",
    footerText: "An independent product-discovery and buyer-education resource.",
    disclaimer: "We do not sell products, process payments, guarantee sellers, or verify authenticity. Product images, prices, availability, shipping eligibility, and marketplace rules can change. Always check the live listing and your own warehouse QC photos before paying international shipping.",
    faqTitle: "Questions worth answering before you order",
    faqIntro: "Clear limits, practical checks, and no invented shipping promises.",
    pageTitles: {
      spreadsheet: "Sugargoo Spreadsheet 2026: Finds, QC & Shipping",
      finds: "Sugargoo Finds — Focused Product Collections",
      guide: "How to Buy with Sugargoo — Independent Buyer Guide",
      qc: "Sugargoo QC Photos — A Practical Inspection Checklist",
      shipping: "Sugargoo Shipping Cost 2026: Weight & Parcel Planning",
      faq: "Sugargoo FAQ — Independent Answers for New Buyers",
      articles: "Sugargoo Articles — Spreadsheet, QC & Shipping Research",
    },
    pageIntros: {
      spreadsheet: "Filter a compact set of live catalog routes by category or keyword. Prices shown in USD are estimates converted from the CNY figures on the source catalog.",
      finds: "Shortlists built around an actual decision: lower parcel weight, easier QC, seasonal use, or a clearer size choice.",
      guide: "Understand the full workflow—from a marketplace link to warehouse inspection, parcel submission, and international tracking—before committing funds.",
      qc: "QC photos document what arrived at the warehouse; they do not prove authenticity or long-term durability. Use them to detect visible problems before shipment.",
      shipping: "Plan chargeable weight before checkout. The calculator compares actual and volumetric weight without pretending to quote a live carrier rate.",
      faq: "Answers based on the official workflow and clearly separated from independent product research.",
      articles: "Long-form, source-checked guides written for decisions rather than keyword count.",
    },
    steps: [
      { title: "1. Find a live route", text: "Open a catalog item and confirm that its original marketplace link, variants, and seller page still load." },
      { title: "2. Submit the link", text: "Paste the marketplace URL into your chosen agent, select the exact size or color, and compare the submitted price with the source." },
      { title: "3. Review warehouse QC", text: "Check the received item, visible defects, color, size tag, measurements, and any extra photos you requested." },
      { title: "4. Build the parcel", text: "Compare actual and volumetric weight, remove unnecessary packaging where appropriate, then choose an eligible route." },
    ],
    faq: [
      { q: "Is this the official Sugargoo website?", a: "No. This is an independent spreadsheet and educational guide. Account support, payments, refunds, warehouse work, and international shipping are handled by the platform you choose." },
      { q: "Are the USD prices final checkout prices?", a: "No. They are indicative conversions from the CNY catalog price using ¥6.72 per US$1. Exchange rates, domestic freight, service charges, optional services, and international shipping are not included." },
      { q: "Does a product card mean the item passed QC?", a: "No. A card means a catalog route was available when reviewed. Only your own warehouse photos and measurements can show what arrived for your order." },
      { q: "How many free QC photos does Sugargoo provide?", a: "Sugargoo’s official 2025–2026 help content states that five product photos are normally provided after warehouse arrival. Coverage can vary by item or service, so confirm the current rule in your account." },
      { q: "How long is warehouse storage?", a: "Sugargoo’s August 2025 guidance distinguishes 100 days for purchasing orders from 30 days for resale and forwarding orders, counted from packing-center status. Check the live countdown for your item." },
      { q: "Can this site guarantee customs clearance?", a: "No. Customs, taxes, restricted goods, route availability, and declaration requirements depend on the destination and current carrier rules." },
    ],
  },
  de: {
    locale: "de-DE",
    languageName: "Deutsch",
    nav: { spreadsheet: "Tabelle", finds: "Funde", guide: "Anleitung", qc: "QC", shipping: "Versand", faq: "FAQ", articles: "Artikel" },
    heroEyebrow: "Unabhängige Käuferrecherche · Aktualisiert September 2026",
    heroTitle: "Erst finden. Zweimal prüfen. Klüger versenden.",
    heroText: "Eine fokussierte Sugargoo-Tabelle mit Kaufratgebern, Produktwegen, QC-Prüfung und Paketplanung vor der Zahlung.",
    searchPlaceholder: "Gesamten Produktkatalog durchsuchen…",
    searchButton: "Produkte suchen",
    independent: "Unabhängig — nicht die offizielle Sugargoo-Website",
    openFind: "Produkt öffnen",
    viewAll: "Komplette Tabelle ansehen",
    categories: "Nach Kategorie stöbern",
    categoriesText: "Mit einer klaren Auswahl beginnen und die Live-Produktseite vor der Bestellung prüfen.",
    latest: "Auswahl der Redaktion",
    latestText: "Echte Katalogbilder und CNY-Preise als unverbindliche USD-Umrechnung.",
    guides: "Vor dem Bezahlen recherchieren",
    articles: "Praxisnotizen und ausführliche Ratgeber",
    readGuide: "Ratgeber lesen",
    estimated: "Ca. USD",
    priceNote: "Unverbindliche Umrechnung: ¥6,72 pro US$1. Der Endbetrag kann abweichen.",
    sourceLabel: "Katalogroute",
    verifiedRoute: "Live-Produktweg",
    footerText: "Unabhängige Produktsuche und Käuferinformation.",
    disclaimer: "Wir verkaufen keine Produkte, wickeln keine Zahlungen ab und garantieren weder Verkäufer noch Authentizität. Bilder, Preise, Verfügbarkeit und Versandregeln können sich ändern. Prüfe das Live-Angebot und deine eigenen Lagerfotos vor dem internationalen Versand.",
    faqTitle: "Fragen, die vor der Bestellung geklärt sein sollten",
    faqIntro: "Klare Grenzen, praktische Prüfungen und keine erfundenen Versandversprechen.",
    pageTitles: {
      spreadsheet: "Sugargoo Tabelle 2026 — Kuratierte Produktwege durchsuchen",
      finds: "Sugargoo Funde — Fokussierte Produktkollektionen",
      guide: "Mit Sugargoo bestellen — Unabhängige Anleitung",
      qc: "Sugargoo QC-Fotos — Praktische Prüfliste",
      shipping: "Sugargoo Versand — Gewicht, Volumen und Paketplanung",
      faq: "Sugargoo FAQ — Unabhängige Antworten",
      articles: "Sugargoo Artikel — Tabelle, QC und Versand",
    },
    pageIntros: {
      spreadsheet: "Filtere aktuelle Katalogwege nach Kategorie oder Suchwort. USD-Preise sind Schätzungen aus den CNY-Angaben des Quellkatalogs.",
      finds: "Auswahlen für echte Entscheidungen: weniger Paketgewicht, einfachere QC-Prüfung, Saison oder klarere Größenwahl.",
      guide: "Verstehe den gesamten Ablauf vom Marktplatzlink über Lagerprüfung und Paketeinreichung bis zur internationalen Sendungsverfolgung.",
      qc: "QC-Fotos zeigen, was im Lager angekommen ist; sie beweisen weder Authentizität noch Haltbarkeit. Nutze sie, um sichtbare Probleme vor dem Versand zu erkennen.",
      shipping: "Plane das abrechenbare Gewicht vor dem Kauf. Der Rechner vergleicht Ist- und Volumengewicht, ohne einen Live-Tarif vorzutäuschen.",
      faq: "Antworten auf Basis des offiziellen Ablaufs, klar getrennt von der unabhängigen Produktrecherche.",
      articles: "Ausführliche, quellengeprüfte Ratgeber für echte Entscheidungen statt bloßer Wortzahl.",
    },
    steps: [
      { title: "1. Live-Link finden", text: "Öffne den Artikel und prüfe, ob Marktplatzlink, Varianten und Verkäuferseite noch erreichbar sind." },
      { title: "2. Link einreichen", text: "Füge die URL beim Agenten ein, wähle Größe oder Farbe und vergleiche den eingereichten Preis mit der Quelle." },
      { title: "3. Lager-QC prüfen", text: "Kontrolliere Artikel, sichtbare Fehler, Farbe, Größenetikett, Maße und angeforderte Zusatzfotos." },
      { title: "4. Paket planen", text: "Vergleiche Ist- und Volumengewicht, entferne unnötige Verpackung und wähle eine zulässige Route." },
    ],
    faq: [
      { q: "Ist dies die offizielle Sugargoo-Website?", a: "Nein. Dies ist eine unabhängige Tabelle und ein Ratgeber. Konto, Zahlungen, Erstattungen, Lager und Versand werden von der gewählten Plattform bearbeitet." },
      { q: "Sind die USD-Preise Endpreise?", a: "Nein. Es sind Schätzungen aus CNY bei ¥6,72 pro US$1. Inlandsfracht, Gebühren, Zusatzleistungen und internationaler Versand sind nicht enthalten." },
      { q: "Bedeutet eine Produktkarte, dass der Artikel QC bestanden hat?", a: "Nein. Sie zeigt nur, dass der Katalogweg bei der Prüfung erreichbar war. Entscheidend sind deine eigenen Lagerfotos und Maße." },
      { q: "Wie viele kostenlose QC-Fotos gibt es?", a: "Offizielle Sugargoo-Hilfeseiten von 2025–2026 nennen normalerweise fünf Produktfotos nach Lagereingang. Prüfe die aktuelle Regel im Konto." },
      { q: "Wie lange ist die Lagerung?", a: "Sugargoos Leitfaden vom August 2025 unterscheidet 100 Tage für Einkaufsbestellungen und 30 Tage für Wiederverkaufs- oder Weiterleitungsbestellungen ab Packing-Center-Status. Maßgeblich ist der Live-Countdown." },
      { q: "Ist die Zollabfertigung garantiert?", a: "Nein. Zoll, Steuern, Einschränkungen und Routenzulassung hängen von Zielland und aktuellen Regeln ab." },
    ],
  },
  es: {
    locale: "es-ES",
    languageName: "Español",
    nav: { spreadsheet: "Spreadsheet", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envío", faq: "FAQ", articles: "Artículos" },
    heroEyebrow: "Investigación independiente · Actualizado en septiembre de 2026",
    heroTitle: "Encuentra primero. Revisa dos veces. Envía mejor.",
    heroText: "Un spreadsheet de Sugargoo centrado en rutas de producto, fotos QC y planificación del peso antes de pagar.",
    searchPlaceholder: "Buscar en todo el catálogo…",
    searchButton: "Buscar productos",
    independent: "Independiente — no es la web oficial de Sugargoo",
    openFind: "Abrir producto",
    viewAll: "Ver el spreadsheet completo",
    categories: "Explorar por categoría",
    categoriesText: "Empieza con una lista concreta y verifica la ficha activa antes de comprar.",
    latest: "Selección editorial",
    latestText: "Imágenes reales del catálogo y precios CNY convertidos a USD orientativos.",
    guides: "Investiga antes de pagar",
    articles: "Notas de campo y guías completas",
    readGuide: "Leer guía",
    estimated: "USD aprox.",
    priceNote: "Conversión orientativa a ¥6,72 por US$1. El total final puede variar.",
    sourceLabel: "Ruta del catálogo",
    verifiedRoute: "Ruta activa",
    footerText: "Recurso independiente de descubrimiento y educación para compradores.",
    disclaimer: "No vendemos productos, procesamos pagos ni garantizamos vendedores o autenticidad. Imágenes, precios, disponibilidad y reglas de envío pueden cambiar. Revisa la ficha activa y tus propias fotos QC antes del envío internacional.",
    faqTitle: "Preguntas que conviene resolver antes de comprar",
    faqIntro: "Límites claros, controles prácticos y ninguna promesa de envío inventada.",
    pageTitles: {
      spreadsheet: "Sugargoo Spreadsheet 2026 — Rutas de producto seleccionadas",
      finds: "Sugargoo Finds — Colecciones de producto enfocadas",
      guide: "Cómo comprar con Sugargoo — Guía independiente",
      qc: "Fotos QC de Sugargoo — Lista práctica de inspección",
      shipping: "Envíos Sugargoo — Peso, volumen y planificación",
      faq: "Preguntas de Sugargoo — Respuestas independientes",
      articles: "Artículos Sugargoo — Spreadsheet, QC y envío",
    },
    pageIntros: {
      spreadsheet: "Filtra rutas activas por categoría o palabra. Los precios USD son estimaciones convertidas desde el precio CNY del catálogo original.",
      finds: "Listas creadas para decisiones reales: menor peso, QC más sencillo, uso estacional o talla más clara.",
      guide: "Comprende todo el proceso, desde el enlace de mercado hasta la inspección, el paquete y el seguimiento internacional.",
      qc: "Las fotos QC muestran lo recibido en almacén; no prueban autenticidad ni durabilidad. Úsalas para detectar problemas visibles antes del envío.",
      shipping: "Calcula el peso facturable antes de comprar. La herramienta compara peso real y volumétrico sin fingir una tarifa en vivo.",
      faq: "Respuestas basadas en el proceso oficial y separadas de la investigación independiente de productos.",
      articles: "Guías extensas y contrastadas, escritas para tomar decisiones y no para alcanzar una cifra de palabras.",
    },
    steps: [
      { title: "1. Encuentra una ruta activa", text: "Abre el producto y confirma que el enlace original, las variantes y la tienda siguen disponibles." },
      { title: "2. Envía el enlace", text: "Pega la URL en el agente, selecciona talla o color y compara el precio enviado con la fuente." },
      { title: "3. Revisa el QC", text: "Comprueba artículo, defectos visibles, color, etiqueta, medidas y las fotos adicionales solicitadas." },
      { title: "4. Prepara el paquete", text: "Compara peso real y volumétrico, elimina embalaje innecesario y elige una ruta compatible." },
    ],
    faq: [
      { q: "¿Es esta la web oficial de Sugargoo?", a: "No. Es un spreadsheet y una guía independientes. La plataforma elegida gestiona cuenta, pagos, reembolsos, almacén y envío." },
      { q: "¿Los precios USD son finales?", a: "No. Son estimaciones desde CNY a ¥6,72 por US$1. No incluyen envío nacional, comisiones, extras ni envío internacional." },
      { q: "¿Una tarjeta significa que el producto superó QC?", a: "No. Solo indica que la ruta estaba disponible cuando se revisó. Tus fotos y medidas de almacén muestran qué llegó realmente." },
      { q: "¿Cuántas fotos QC gratuitas ofrece Sugargoo?", a: "El contenido oficial de ayuda 2025–2026 indica normalmente cinco fotos tras la llegada al almacén. Confirma la regla vigente en tu cuenta." },
      { q: "¿Cuánto dura el almacenamiento?", a: "La guía oficial de agosto de 2025 distingue 100 días para pedidos de compra y 30 para reventa o forwarding desde el estado packing center. Revisa la cuenta atrás activa." },
      { q: "¿Se garantiza el despacho aduanero?", a: "No. Aduanas, impuestos, mercancías restringidas y rutas dependen del país y de las reglas vigentes." },
    ],
  },
  fr: {
    locale: "fr-FR",
    languageName: "Français",
    nav: { spreadsheet: "Tableur", finds: "Sélections", guide: "Guide", qc: "QC", shipping: "Livraison", faq: "FAQ", articles: "Articles" },
    heroEyebrow: "Recherche indépendante · Mise à jour septembre 2026",
    heroTitle: "Trouver d’abord. Vérifier deux fois. Expédier mieux.",
    heroText: "Un tableur Sugargoo ciblé pour explorer les produits, lire les photos QC et planifier le poids du colis avant de payer.",
    searchPlaceholder: "Rechercher dans tout le catalogue…",
    searchButton: "Rechercher",
    independent: "Indépendant — ce n’est pas le site officiel de Sugargoo",
    openFind: "Ouvrir le produit",
    viewAll: "Voir le tableur complet",
    categories: "Explorer par catégorie",
    categoriesText: "Commencez par une sélection claire puis vérifiez la fiche active avant de commander.",
    latest: "Sélection de la rédaction",
    latestText: "Images réelles du catalogue et prix CNY convertis en USD indicatifs.",
    guides: "Rechercher avant de payer",
    articles: "Notes pratiques et guides détaillés",
    readGuide: "Lire le guide",
    estimated: "USD estimé",
    priceNote: "Conversion indicative à ¥6,72 pour US$1. Le total final peut varier.",
    sourceLabel: "Route catalogue",
    verifiedRoute: "Route produit active",
    footerText: "Ressource indépendante de découverte et d’information acheteur.",
    disclaimer: "Nous ne vendons rien, ne traitons aucun paiement et ne garantissons ni vendeur ni authenticité. Images, prix, disponibilité et règles d’expédition peuvent changer. Vérifiez la fiche active et vos propres photos QC avant l’envoi international.",
    faqTitle: "Questions à résoudre avant de commander",
    faqIntro: "Des limites claires, des contrôles pratiques et aucune promesse inventée.",
    pageTitles: {
      spreadsheet: "Tableur Sugargoo 2026 — Rechercher des routes produit",
      finds: "Sélections Sugargoo — Collections ciblées",
      guide: "Acheter avec Sugargoo — Guide indépendant",
      qc: "Photos QC Sugargoo — Liste de contrôle pratique",
      shipping: "Livraison Sugargoo — Poids, volume et préparation",
      faq: "FAQ Sugargoo — Réponses indépendantes",
      articles: "Articles Sugargoo — Tableur, QC et livraison",
    },
    pageIntros: {
      spreadsheet: "Filtrez des routes actives par catégorie ou mot-clé. Les prix USD sont des estimations converties depuis les montants CNY du catalogue source.",
      finds: "Des sélections pour une vraie décision : poids réduit, QC plus simple, saison ou choix de taille plus clair.",
      guide: "Comprenez le parcours complet, du lien marketplace à l’inspection, la soumission du colis et le suivi international.",
      qc: "Les photos QC montrent ce qui est arrivé à l’entrepôt ; elles ne prouvent ni l’authenticité ni la durabilité. Utilisez-les pour repérer les défauts visibles.",
      shipping: "Planifiez le poids facturable avant l’achat. Le calculateur compare poids réel et volumétrique sans simuler un tarif transporteur en direct.",
      faq: "Réponses fondées sur le processus officiel et clairement séparées de la recherche produit indépendante.",
      articles: "Guides longs et vérifiés, écrits pour décider plutôt que pour atteindre un nombre de mots.",
    },
    steps: [
      { title: "1. Trouver une route active", text: "Ouvrez l’article et vérifiez que le lien d’origine, les variantes et la boutique sont toujours accessibles." },
      { title: "2. Soumettre le lien", text: "Collez l’URL chez l’agent, choisissez taille ou couleur et comparez le prix soumis avec la source." },
      { title: "3. Vérifier le QC", text: "Contrôlez l’article reçu, les défauts, la couleur, l’étiquette, les mesures et les photos supplémentaires." },
      { title: "4. Préparer le colis", text: "Comparez poids réel et volumétrique, retirez l’emballage inutile et choisissez une route admissible." },
    ],
    faq: [
      { q: "Est-ce le site officiel de Sugargoo ?", a: "Non. Il s’agit d’un tableur et d’un guide indépendants. Compte, paiement, remboursement, entrepôt et livraison sont gérés par la plateforme choisie." },
      { q: "Les prix USD sont-ils définitifs ?", a: "Non. Ce sont des estimations depuis le CNY à ¥6,72 pour US$1. Transport local, frais, options et livraison internationale ne sont pas inclus." },
      { q: "Une carte produit signifie-t-elle que le QC est validé ?", a: "Non. Elle indique seulement que la route était disponible lors de la vérification. Vos propres photos et mesures montrent ce qui a été reçu." },
      { q: "Combien de photos QC gratuites ?", a: "L’aide officielle Sugargoo 2025–2026 indique normalement cinq photos après réception. Vérifiez la règle actuelle dans votre compte." },
      { q: "Quelle durée de stockage ?", a: "Le guide officiel d’août 2025 distingue 100 jours pour les achats et 30 pour la revente ou le forwarding à partir du statut packing center. Le compteur actif reste la référence." },
      { q: "Le dédouanement est-il garanti ?", a: "Non. Douane, taxes, restrictions et routes dépendent du pays et des règles du moment." },
    ],
  },
  it: {
    locale: "it-IT",
    languageName: "Italiano",
    nav: { spreadsheet: "Foglio", finds: "Selezioni", guide: "Guida", qc: "QC", shipping: "Spedizione", faq: "FAQ", articles: "Articoli" },
    heroEyebrow: "Ricerca indipendente · Aggiornata a settembre 2026",
    heroTitle: "Trova prima. Controlla due volte. Spedisci meglio.",
    heroText: "Un foglio Sugargoo mirato per esplorare prodotti, leggere foto QC e pianificare il peso prima del pagamento.",
    searchPlaceholder: "Cerca nell’intero catalogo…",
    searchButton: "Cerca prodotti",
    independent: "Indipendente — non è il sito ufficiale Sugargoo",
    openFind: "Apri prodotto",
    viewAll: "Apri il foglio completo",
    categories: "Esplora per categoria",
    categoriesText: "Parti da una selezione chiara e verifica la pagina attiva prima di ordinare.",
    latest: "Selezione editoriale",
    latestText: "Immagini reali del catalogo e prezzi CNY convertiti in USD indicativi.",
    guides: "Ricerca prima del pagamento",
    articles: "Note pratiche e guide complete",
    readGuide: "Leggi la guida",
    estimated: "USD stimati",
    priceNote: "Conversione indicativa a ¥6,72 per US$1. Il totale finale può variare.",
    sourceLabel: "Percorso catalogo",
    verifiedRoute: "Percorso prodotto attivo",
    footerText: "Risorsa indipendente per ricerca prodotti e informazione acquirenti.",
    disclaimer: "Non vendiamo prodotti, non elaboriamo pagamenti e non garantiamo venditori o autenticità. Immagini, prezzi, disponibilità e regole di spedizione possono cambiare. Controlla la pagina attiva e le tue foto QC prima della spedizione internazionale.",
    faqTitle: "Domande da chiarire prima dell’ordine",
    faqIntro: "Limiti chiari, controlli pratici e nessuna promessa inventata.",
    pageTitles: {
      spreadsheet: "Foglio Sugargoo 2026 — Cerca percorsi prodotto",
      finds: "Sugargoo Finds — Collezioni mirate",
      guide: "Comprare con Sugargoo — Guida indipendente",
      qc: "Foto QC Sugargoo — Lista di controllo pratica",
      shipping: "Spedizione Sugargoo — Peso, volume e pianificazione",
      faq: "FAQ Sugargoo — Risposte indipendenti",
      articles: "Articoli Sugargoo — Foglio, QC e spedizione",
    },
    pageIntros: {
      spreadsheet: "Filtra percorsi attivi per categoria o parola. I prezzi USD sono stime convertite dagli importi CNY del catalogo sorgente.",
      finds: "Selezioni per decisioni reali: meno peso, QC più semplice, uso stagionale o scelta taglia più chiara.",
      guide: "Comprendi l’intero flusso, dal link marketplace all’ispezione, invio del pacco e tracciamento internazionale.",
      qc: "Le foto QC mostrano ciò che è arrivato in magazzino; non provano autenticità o durata. Usale per individuare problemi visibili.",
      shipping: "Pianifica il peso fatturabile prima dell’acquisto. Il calcolatore confronta peso reale e volumetrico senza fingere una tariffa live.",
      faq: "Risposte basate sul flusso ufficiale e separate dalla ricerca indipendente dei prodotti.",
      articles: "Guide lunghe e verificate, scritte per decidere invece che per raggiungere un conteggio parole.",
    },
    steps: [
      { title: "1. Trova un percorso attivo", text: "Apri l’articolo e verifica che link originale, varianti e negozio siano ancora disponibili." },
      { title: "2. Invia il link", text: "Incolla l’URL nell’agente, scegli taglia o colore e confronta il prezzo con la fonte." },
      { title: "3. Controlla il QC", text: "Verifica articolo, difetti visibili, colore, etichetta, misure e foto extra richieste." },
      { title: "4. Prepara il pacco", text: "Confronta peso reale e volumetrico, rimuovi imballaggi inutili e scegli una rotta idonea." },
    ],
    faq: [
      { q: "È il sito ufficiale Sugargoo?", a: "No. È un foglio e una guida indipendenti. Account, pagamenti, rimborsi, magazzino e spedizione sono gestiti dalla piattaforma scelta." },
      { q: "I prezzi USD sono finali?", a: "No. Sono stime da CNY a ¥6,72 per US$1. Non includono trasporto interno, commissioni, servizi extra e spedizione internazionale." },
      { q: "Una scheda prodotto indica che il QC è superato?", a: "No. Indica solo che il percorso era disponibile al controllo. Foto e misure del tuo ordine mostrano ciò che è arrivato." },
      { q: "Quante foto QC gratuite offre Sugargoo?", a: "L’assistenza ufficiale 2025–2026 indica normalmente cinque foto dopo l’arrivo in magazzino. Verifica la regola attuale nell’account." },
      { q: "Quanto dura lo stoccaggio?", a: "La guida ufficiale di agosto 2025 distingue 100 giorni per gli acquisti e 30 per rivendita o forwarding dallo stato packing center. Fa fede il conto alla rovescia attivo." },
      { q: "Lo sdoganamento è garantito?", a: "No. Dogana, tasse, restrizioni e rotte dipendono dal paese e dalle regole attuali." },
    ],
  },
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function localizedPath(lang: Language, path = "") {
  const cleaned = path.replace(/^\/+|\/+$/g, "");
  if (lang === "en") return cleaned ? `/${cleaned}` : "/";
  return cleaned ? `/${lang}/${cleaned}` : `/${lang}`;
}
