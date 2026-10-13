import type { Lang } from "./site-data";

export type CategoryItem = [name: string, description: string, href: string];
export type ProductItem = [name: string, category: string, price: string, image: string, href: string];
export type ArticleCardItem = [tag: string, title: string, description: string, href: string];

type InterfaceText = {
  home: string;
  homeAria: string;
  primaryNavigation: string;
  selectLanguage: string;
  researchWorkflow: string;
  manifest: string;
  manifestNumber: string;
  manifestRoute: [string, string, string];
  manifestItems: string[];
  independentIndex: string;
  highlights: string;
  newRoute: string;
  allArticles: string;
  longFormGuide: string;
  updated: string;
  updatedStamp: string;
  quickCheck: string;
  beforeNextStep: string;
  catalogRoutes: string;
  productRoutes: string;
  route: string;
  articles: string;
  englishGuide: string;
  keyTakeaways: string;
  whatToRemember: string;
  sourceBoundary: string;
  footerLinks: [string, string, string, string];
  visuals: {
    workflowAria: string;
    workflow: string[];
    weightAria: string;
    actualWeight: [string, string, string];
    volumetricWeight: [string, string, string];
    qcAria: string;
    qc: string[];
    reviewAria: string;
    officialSources: [string, string];
    communityReports: [string, string];
  };
};

export const interfaceText: Record<Lang, InterfaceText> = {
  en: {
    home: "Home", homeAria: "Kakobuy home", primaryNavigation: "Primary navigation", selectLanguage: "Select language",
    researchWorkflow: "Research workflow summary", manifest: "RESEARCH MANIFEST", manifestNumber: "№ 0826",
    manifestRoute: ["DISCOVER", "QC", "ROUTE"], manifestItems: ["Fast visual scan", "Image-first checks", "Parcel context", "Clear disclosure"],
    independentIndex: "INDEPENDENT INDEX", highlights: "Site highlights", newRoute: "NEW ROUTE", allArticles: "All articles", longFormGuide: "LONG-FORM GUIDE",
    updated: "Updated", updatedStamp: "UPDATED / 2026.08", quickCheck: "QUICK CHECK", beforeNextStep: "Before the next step",
    catalogRoutes: "CATALOG ROUTES", productRoutes: "PRODUCT ROUTES", route: "ROUTE", articles: "Articles", englishGuide: "ENGLISH GUIDE",
    keyTakeaways: "KEY TAKEAWAYS", whatToRemember: "What to remember", sourceBoundary: "SOURCE BOUNDARY",
    footerLinks: ["Spreadsheet", "QC", "Shipping", "Articles"],
    visuals: {
      workflowAria: "Kakobuy shopping agent workflow", workflow: ["Product link", "China warehouse", "QC decision", "International parcel"],
      weightAria: "Actual weight and volumetric weight comparison", actualWeight: ["ACTUAL WEIGHT", "What the packed parcel weighs", "Scale measurement"], volumetricWeight: ["VOLUMETRIC WEIGHT", "How much carrier space it occupies", "Dimensional calculation"],
      qcAria: "QC inspection order", qc: ["Identity", "Shape", "Measurements", "Details", "Decision"], reviewAria: "Evidence types used in this review",
      officialSources: ["OFFICIAL SOURCES", "Features, policies and service descriptions"], communityReports: ["COMMUNITY REPORTS", "Individual experiences, not universal outcomes"],
    },
  },
  de: {
    home: "Startseite", homeAria: "Kakobuy-Startseite", primaryNavigation: "Hauptnavigation", selectLanguage: "Sprache wählen",
    researchWorkflow: "Zusammenfassung des Rechercheablaufs", manifest: "RECHERCHEPLAN", manifestNumber: "№ 0826",
    manifestRoute: ["ENTDECKEN", "QC", "ÖFFNEN"], manifestItems: ["Schnell visuell prüfen", "Bilder zuerst prüfen", "Paketkontext", "Klare Hinweise"],
    independentIndex: "UNABHÄNGIGER INDEX", highlights: "Website-Schwerpunkte", newRoute: "NEUE ROUTE", allArticles: "Alle Artikel", longFormGuide: "AUSFÜHRLICHER RATGEBER",
    updated: "Aktualisiert", updatedStamp: "AKTUALISIERT / 2026.08", quickCheck: "SCHNELLPRÜFUNG", beforeNextStep: "Vor dem nächsten Schritt",
    catalogRoutes: "KATALOGROUTEN", productRoutes: "PRODUKTROUTEN", route: "ROUTE", articles: "Artikel", englishGuide: "DEUTSCHER RATGEBER",
    keyTakeaways: "DAS WICHTIGSTE", whatToRemember: "Was Sie beachten sollten", sourceBoundary: "QUELLENGRENZE",
    footerLinks: ["Tabelle", "QC", "Versand", "Artikel"],
    visuals: {
      workflowAria: "Ablauf beim Kakobuy-Einkaufsagenten", workflow: ["Produktlink", "Lager in China", "QC-Entscheidung", "Internationales Paket"],
      weightAria: "Vergleich von Echt- und Volumengewicht", actualWeight: ["ECHTGEWICHT", "Gewicht des gepackten Pakets", "Messung auf der Waage"], volumetricWeight: ["VOLUMENGEWICHT", "Vom Paket belegter Frachtraum", "Berechnung nach Maßen"],
      qcAria: "Reihenfolge der QC-Prüfung", qc: ["Identität", "Form", "Maße", "Details", "Entscheidung"], reviewAria: "In der Bewertung verwendete Belegarten",
      officialSources: ["OFFIZIELLE QUELLEN", "Funktionen, Richtlinien und Leistungsbeschreibungen"], communityReports: ["NUTZERBERICHTE", "Einzelerfahrungen, keine allgemeingültigen Ergebnisse"],
    },
  },
  es: {
    home: "Inicio", homeAria: "Inicio de Kakobuy", primaryNavigation: "Navegación principal", selectLanguage: "Seleccionar idioma",
    researchWorkflow: "Resumen del proceso de investigación", manifest: "PLAN DE INVESTIGACIÓN", manifestNumber: "№ 0826",
    manifestRoute: ["DESCUBRIR", "QC", "ABRIR"], manifestItems: ["Revisión visual rápida", "Comprobar primero las imágenes", "Contexto del paquete", "Avisos claros"],
    independentIndex: "ÍNDICE INDEPENDIENTE", highlights: "Puntos clave del sitio", newRoute: "RUTA NUEVA", allArticles: "Todos los artículos", longFormGuide: "GUÍA DETALLADA",
    updated: "Actualizado", updatedStamp: "ACTUALIZADO / 2026.08", quickCheck: "COMPROBACIÓN RÁPIDA", beforeNextStep: "Antes del siguiente paso",
    catalogRoutes: "RUTAS DEL CATÁLOGO", productRoutes: "RUTAS DE PRODUCTOS", route: "RUTA", articles: "Artículos", englishGuide: "GUÍA EN ESPAÑOL",
    keyTakeaways: "PUNTOS CLAVE", whatToRemember: "Qué conviene recordar", sourceBoundary: "LÍMITE DE LAS FUENTES",
    footerLinks: ["Hoja", "QC", "Envío", "Artículos"],
    visuals: {
      workflowAria: "Proceso del agente de compra Kakobuy", workflow: ["Enlace del producto", "Almacén en China", "Decisión QC", "Paquete internacional"],
      weightAria: "Comparación entre peso real y volumétrico", actualWeight: ["PESO REAL", "Lo que pesa el paquete preparado", "Medición en báscula"], volumetricWeight: ["PESO VOLUMÉTRICO", "El espacio que ocupa en el transporte", "Cálculo por dimensiones"],
      qcAria: "Orden de inspección QC", qc: ["Identidad", "Forma", "Medidas", "Detalles", "Decisión"], reviewAria: "Tipos de pruebas usados en esta reseña",
      officialSources: ["FUENTES OFICIALES", "Funciones, políticas y descripciones del servicio"], communityReports: ["INFORMES DE USUARIOS", "Experiencias individuales, no resultados universales"],
    },
  },
  fr: {
    home: "Accueil", homeAria: "Accueil Kakobuy", primaryNavigation: "Navigation principale", selectLanguage: "Choisir la langue",
    researchWorkflow: "Résumé du parcours de recherche", manifest: "PLAN DE RECHERCHE", manifestNumber: "№ 0826",
    manifestRoute: ["DÉCOUVRIR", "QC", "OUVRIR"], manifestItems: ["Analyse visuelle rapide", "Vérifier d’abord les images", "Contexte du colis", "Informations claires"],
    independentIndex: "INDEX INDÉPENDANT", highlights: "Points clés du site", newRoute: "NOUVEAU LIEN", allArticles: "Tous les articles", longFormGuide: "GUIDE DÉTAILLÉ",
    updated: "Mis à jour", updatedStamp: "MIS À JOUR / 2026.08", quickCheck: "VÉRIFICATION RAPIDE", beforeNextStep: "Avant l’étape suivante",
    catalogRoutes: "LIENS DU CATALOGUE", productRoutes: "LIENS PRODUITS", route: "LIEN", articles: "Articles", englishGuide: "GUIDE EN FRANÇAIS",
    keyTakeaways: "POINTS CLÉS", whatToRemember: "À retenir", sourceBoundary: "LIMITES DES SOURCES",
    footerLinks: ["Tableur", "QC", "Livraison", "Articles"],
    visuals: {
      workflowAria: "Parcours de l’agent d’achat Kakobuy", workflow: ["Lien produit", "Entrepôt en Chine", "Décision QC", "Colis international"],
      weightAria: "Comparaison du poids réel et volumétrique", actualWeight: ["POIDS RÉEL", "Poids du colis préparé", "Mesure sur la balance"], volumetricWeight: ["POIDS VOLUMÉTRIQUE", "Espace occupé chez le transporteur", "Calcul selon les dimensions"],
      qcAria: "Ordre de contrôle QC", qc: ["Identité", "Forme", "Mesures", "Détails", "Décision"], reviewAria: "Types de preuves utilisés dans cet avis",
      officialSources: ["SOURCES OFFICIELLES", "Fonctions, règles et descriptions du service"], communityReports: ["TÉMOIGNAGES", "Expériences individuelles, pas de résultat universel"],
    },
  },
  it: {
    home: "Home", homeAria: "Home Kakobuy", primaryNavigation: "Navigazione principale", selectLanguage: "Seleziona lingua",
    researchWorkflow: "Sintesi del percorso di ricerca", manifest: "PIANO DI RICERCA", manifestNumber: "№ 0826",
    manifestRoute: ["SCOPRIRE", "QC", "APRIRE"], manifestItems: ["Controllo visivo rapido", "Prima le immagini", "Contesto del pacco", "Informazioni chiare"],
    independentIndex: "INDICE INDIPENDENTE", highlights: "Punti chiave del sito", newRoute: "NUOVO PERCORSO", allArticles: "Tutti gli articoli", longFormGuide: "GUIDA APPROFONDITA",
    updated: "Aggiornato", updatedStamp: "AGGIORNATO / 2026.08", quickCheck: "CONTROLLO RAPIDO", beforeNextStep: "Prima del prossimo passo",
    catalogRoutes: "PERCORSI CATALOGO", productRoutes: "PERCORSI PRODOTTO", route: "PERCORSO", articles: "Articoli", englishGuide: "GUIDA IN ITALIANO",
    keyTakeaways: "PUNTI CHIAVE", whatToRemember: "Cosa ricordare", sourceBoundary: "LIMITI DELLE FONTI",
    footerLinks: ["Spreadsheet", "QC", "Spedizione", "Articoli"],
    visuals: {
      workflowAria: "Percorso dell’agente d’acquisto Kakobuy", workflow: ["Link del prodotto", "Magazzino in Cina", "Decisione QC", "Pacco internazionale"],
      weightAria: "Confronto tra peso reale e volumetrico", actualWeight: ["PESO REALE", "Quanto pesa il pacco preparato", "Misurazione sulla bilancia"], volumetricWeight: ["PESO VOLUMETRICO", "Spazio occupato presso il vettore", "Calcolo dimensionale"],
      qcAria: "Ordine di controllo QC", qc: ["Identità", "Forma", "Misure", "Dettagli", "Decisione"], reviewAria: "Tipi di prove usati nella recensione",
      officialSources: ["FONTI UFFICIALI", "Funzioni, regole e descrizioni del servizio"], communityReports: ["SEGNALAZIONI UTENTI", "Esperienze individuali, non risultati universali"],
    },
  },
};

const categoryLinks = [
  "https://cnfansge.com/shoes/", "https://cnfansge.com/hoodies-sweaters/", "https://cnfansge.com/t-shirts/", "https://cnfansge.com/jackets/", "https://cnfansge.com/pants-shorts/",
  "https://cnfansge.com/headwear/", "https://cnfansge.com/accessories/", "https://cnfansge.com/Jersey/", "https://cnfansge.com/electronics/", "https://cnfansge.com/other-stuff/",
];

const localizedCategoryLabels: Record<Lang, [string, string][]> = {
  en: [["Shoes", "Footwear"], ["Hoodies", "Layers"], ["T-Shirts", "Daily wear"], ["Jackets", "Outerwear"], ["Pants", "Bottoms"], ["Headwear", "Caps & hats"], ["Accessories", "Small goods"], ["Jerseys", "Sportswear"], ["Electronics", "Tech"], ["Other", "More finds"]],
  de: [["Schuhe", "Fußbekleidung"], ["Hoodies", "Lagenlooks"], ["T-Shirts", "Alltagskleidung"], ["Jacken", "Oberbekleidung"], ["Hosen", "Unterteile"], ["Kopfbedeckungen", "Caps & Mützen"], ["Accessoires", "Kleine Artikel"], ["Trikots", "Sportbekleidung"], ["Elektronik", "Technik"], ["Sonstiges", "Weitere Funde"]],
  es: [["Calzado", "Zapatos"], ["Sudaderas", "Capas"], ["Camisetas", "Ropa diaria"], ["Chaquetas", "Abrigo"], ["Pantalones", "Partes de abajo"], ["Gorras y sombreros", "Accesorios de cabeza"], ["Accesorios", "Artículos pequeños"], ["Camisetas deportivas", "Ropa deportiva"], ["Electrónica", "Tecnología"], ["Otros", "Más hallazgos"]],
  fr: [["Chaussures", "Articles chaussants"], ["Sweats à capuche", "Superpositions"], ["T-shirts", "Tenues quotidiennes"], ["Vestes", "Vêtements d’extérieur"], ["Pantalons", "Bas"], ["Couvre-chefs", "Casquettes & bonnets"], ["Accessoires", "Petits articles"], ["Maillots", "Tenues de sport"], ["Électronique", "Technologie"], ["Autres", "Plus de sélections"]],
  it: [["Scarpe", "Calzature"], ["Felpe", "Strati"], ["T-shirt", "Abbigliamento quotidiano"], ["Giacche", "Capispalla"], ["Pantaloni", "Parte inferiore"], ["Copricapi", "Cappelli e berretti"], ["Accessori", "Piccoli articoli"], ["Maglie sportive", "Abbigliamento sportivo"], ["Elettronica", "Tecnologia"], ["Altro", "Altri prodotti"]],
};

export const categoriesByLang = Object.fromEntries(
  (Object.keys(localizedCategoryLabels) as Lang[]).map((lang) => [lang, localizedCategoryLabels[lang].map(([name, description], index) => [name, description, categoryLinks[index]] as CategoryItem)])
) as Record<Lang, CategoryItem[]>;

const productBase = [
  ["$25.14", "/products/sweatshirt.webp", "https://cnfansge.com/AllProducts/6681.html"],
  ["$28.11", "/products/pants.webp", "https://cnfansge.com/AllProducts/6680.html"],
  ["$19.48", "/products/jersey-blue.jpg", "https://cnfansge.com/AllProducts/6679.html"],
  ["$19.48", "/products/jersey-white.jpg", "https://cnfansge.com/AllProducts/6678.html"],
  ["$19.48", "/products/jersey-red.jpg", "https://cnfansge.com/AllProducts/6677.html"],
  ["$11.16", "/products/jersey-black.jpg", "https://cnfansge.com/AllProducts/6676.html"],
] as const;

const localizedProductLabels: Record<Lang, [string, string][]> = {
  en: [["Clean rib-knit crewneck", "Knitwear"], ["Utility straight-leg pants", "Pants"], ["Graphic basketball jersey", "Jersey"], ["Classic white jersey", "Jersey"], ["Red field jersey", "Jersey"], ["Black training jersey", "Jersey"]],
  de: [["Schlichter Rippstrick-Pullover", "Strickwaren"], ["Utility-Hose mit geradem Bein", "Hosen"], ["Basketballtrikot mit Grafik", "Trikot"], ["Klassisches weißes Trikot", "Trikot"], ["Rotes Feldtrikot", "Trikot"], ["Schwarzes Trainingstrikot", "Trikot"]],
  es: [["Jersey de canalé con cuello redondo", "Punto"], ["Pantalón utility de pierna recta", "Pantalones"], ["Camiseta gráfica de baloncesto", "Camiseta deportiva"], ["Camiseta deportiva blanca clásica", "Camiseta deportiva"], ["Camiseta deportiva roja", "Camiseta deportiva"], ["Camiseta negra de entrenamiento", "Camiseta deportiva"]],
  fr: [["Pull ras-du-cou en maille côtelée", "Maille"], ["Pantalon utilitaire droit", "Pantalons"], ["Maillot de basket graphique", "Maillot"], ["Maillot blanc classique", "Maillot"], ["Maillot rouge", "Maillot"], ["Maillot noir d’entraînement", "Maillot"]],
  it: [["Girocollo pulito a coste", "Maglieria"], ["Pantaloni utility dritti", "Pantaloni"], ["Maglia da basket grafica", "Maglia sportiva"], ["Maglia bianca classica", "Maglia sportiva"], ["Maglia rossa da campo", "Maglia sportiva"], ["Maglia nera da allenamento", "Maglia sportiva"]],
};

export const productsByLang = Object.fromEntries(
  (Object.keys(localizedProductLabels) as Lang[]).map((lang) => [lang, localizedProductLabels[lang].map(([name, category], index) => {
    const [price, image, href] = productBase[index];
    return [name, category, price, image, href] as ProductItem;
  })])
) as Record<Lang, ProductItem[]>;
