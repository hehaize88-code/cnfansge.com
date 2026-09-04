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

const articleRoutes = [
  "/articles/how-to-use-kakobuy", "/articles/qc-photo-checklist", "/articles/actual-vs-volumetric-weight", "/articles/kakobuy-fees-explained",
  "/articles/kakobuy-warehouse-storage-guide", "/articles/kakobuy-return-exchange-guide", "/articles/kakobuy-review-2026", "/articles/kakobuy-usa-pre-order-readiness-checklist", "/articles/kakobuy-us-delivery-address-format",
];

const localizedArticleLabels: Record<Lang, [string, string, string][]> = {
  en: [
    ["BEGINNER", "How to use Kakobuy: product link to international parcel", "The complete shopping-agent workflow: ordering, warehouse QC, storage, returns, packing and shipping."],
    ["QC", "Kakobuy QC photos: a practical warehouse checklist", "A repeatable inspection order for identity, shape, measurements, construction and visible defects."],
    ["SHIPPING", "Kakobuy shipping cost: actual weight, volume and packing", "Why a light parcel can still cost more and how current route rules affect the estimate."],
    ["FEES", "Kakobuy fees explained: what the total can include", "Separate product, freight, packaging, optional services, declaration and payment-related costs."],
    ["WAREHOUSE", "Kakobuy warehouse: QC, 100-day storage and consolidation", "Use the official storage window to organize seller arrivals, after-sale decisions and parcel groups."],
    ["RETURNS", "Kakobuy return and exchange guide", "Understand the five-day guarantee, evidence, domestic freight responsibility and exchange timing."],
    ["REVIEW", "Kakobuy review 2026: official features and user reports", "A balanced review that separates official policies from Trustpilot and Reddit anecdotes."],
    ["US GUIDE", "Kakobuy USA guide 2026: pre-order readiness", "Check address, product identity, current import sources and last-mile evidence before ordering for the United States."],
    ["US ADDRESS", "Format a US delivery address for a Kakobuy parcel", "Check recipient, street, unit, city, state, ZIP Code and the final private label preview."],
  ],
  de: [
    ["EINSTIEG", "Kakobuy nutzen: vom Produktlink zum internationalen Paket", "Der vollständige Ablauf beim Einkaufsagenten: Bestellung, Lager-QC, Aufbewahrung, Rückgabe, Verpackung und Versand."],
    ["QC", "Kakobuy-QC-Fotos: praktische Checkliste fürs Lager", "Eine feste Prüfreihenfolge für Identität, Form, Maße, Verarbeitung und sichtbare Mängel."],
    ["VERSAND", "Kakobuy-Versandkosten: Gewicht, Volumen und Verpackung", "Warum ein leichtes Paket trotzdem mehr kosten kann und wie aktuelle Routenregeln die Schätzung beeinflussen."],
    ["KOSTEN", "Kakobuy-Gebühren erklärt: Was im Gesamtpreis stecken kann", "Produkt, Fracht, Verpackung, Zusatzleistungen, Deklaration und zahlungsbezogene Kosten getrennt betrachten."],
    ["LAGER", "Kakobuy-Lager: QC, 100 Tage Aufbewahrung und Bündelung", "Das offizielle Lagerfenster nutzen, um Verkäuferankünfte, Reklamationen und Paketgruppen zu organisieren."],
    ["RÜCKGABE", "Kakobuy-Ratgeber für Rückgabe und Umtausch", "Fünf-Tage-Garantie, Belege, Inlandsfracht und Umtauschdauer verstehen."],
    ["BEWERTUNG", "Kakobuy-Bewertung 2026: offizielle Funktionen und Nutzerberichte", "Eine ausgewogene Bewertung, die Richtlinien von Trustpilot- und Reddit-Erfahrungen trennt."],
    ["USA-RATGEBER", "Kakobuy USA 2026: Bereitschaft vor der Bestellung", "Adresse, Warenidentität, aktuelle Importquellen und letzte Meile vor der Bestellung prüfen."],
    ["US-ADRESSE", "US-Lieferadresse für ein Kakobuy-Paket formatieren", "Empfänger, Straße, Einheit, Stadt, Staat, ZIP und private Etikettenvorschau prüfen."],
  ],
  es: [
    ["PRINCIPIANTES", "Cómo usar Kakobuy: del enlace al paquete internacional", "El proceso completo del agente de compra: pedido, QC en almacén, almacenamiento, devoluciones, embalaje y envío."],
    ["QC", "Fotos QC de Kakobuy: lista práctica de inspección", "Un orden repetible para comprobar identidad, forma, medidas, confección y defectos visibles."],
    ["ENVÍO", "Coste de envío en Kakobuy: peso real, volumen y embalaje", "Por qué un paquete ligero puede costar más y cómo las reglas actuales afectan la estimación."],
    ["COSTES", "Costes de Kakobuy explicados: qué puede incluir el total", "Separa producto, transporte, embalaje, servicios opcionales, declaración y costes de pago."],
    ["ALMACÉN", "Almacén Kakobuy: QC, 100 días y consolidación", "Usa el plazo oficial para organizar llegadas, decisiones posventa y grupos de paquetes."],
    ["DEVOLUCIONES", "Guía de devoluciones y cambios de Kakobuy", "Entiende la garantía de cinco días, las pruebas, el transporte nacional y el plazo del cambio."],
    ["RESEÑA", "Reseña de Kakobuy 2026: funciones oficiales e informes de usuarios", "Una reseña equilibrada que separa las políticas oficiales de las experiencias en Trustpilot y Reddit."],
    ["GUÍA EE. UU.", "Guía Kakobuy USA 2026: preparación previa", "Comprueba dirección, identidad, fuentes de importación actuales y última milla antes de pedir."],
    ["DIRECCIÓN EE. UU.", "Formatear una dirección de entrega para Kakobuy", "Comprueba destinatario, calle, unidad, ciudad, estado, ZIP y la vista privada de la etiqueta."],
  ],
  fr: [
    ["DÉBUTANT", "Comment utiliser Kakobuy : du lien produit au colis international", "Le parcours complet de l’agent d’achat : commande, QC en entrepôt, stockage, retours, emballage et expédition."],
    ["QC", "Photos QC Kakobuy : liste pratique d’inspection", "Un ordre de contrôle reproductible pour l’identité, la forme, les mesures, la fabrication et les défauts visibles."],
    ["LIVRAISON", "Frais d’envoi Kakobuy : poids réel, volume et emballage", "Pourquoi un colis léger peut coûter plus cher et comment les règles actuelles influencent l’estimation."],
    ["FRAIS", "Frais Kakobuy expliqués : ce que le total peut inclure", "Distinguez produit, fret, emballage, services optionnels, déclaration et frais liés au paiement."],
    ["ENTREPÔT", "Entrepôt Kakobuy : QC, 100 jours de stockage et regroupement", "Utilisez la période officielle pour organiser les arrivées, décisions après-vente et groupes de colis."],
    ["RETOURS", "Guide Kakobuy des retours et échanges", "Comprenez la garantie de cinq jours, les preuves, le fret national et le délai d’échange."],
    ["AVIS", "Avis Kakobuy 2026 : fonctions officielles et témoignages", "Un avis équilibré qui distingue les règles officielles des expériences Trustpilot et Reddit."],
    ["GUIDE USA", "Guide Kakobuy USA 2026 : préparation avant commande", "Vérifiez adresse, identité, sources d'importation actuelles et dernier kilomètre avant l'achat."],
    ["ADRESSE USA", "Formater une adresse de livraison pour Kakobuy", "Vérifiez destinataire, rue, unité, ville, État, ZIP et l'aperçu privé de l'étiquette."],
  ],
  it: [
    ["PRINCIPIANTI", "Come usare Kakobuy: dal link al pacco internazionale", "Il percorso completo dell’agente d’acquisto: ordine, QC in magazzino, deposito, resi, imballaggio e spedizione."],
    ["QC", "Foto QC Kakobuy: lista pratica per il magazzino", "Un ordine ripetibile per verificare identità, forma, misure, costruzione e difetti visibili."],
    ["SPEDIZIONE", "Costo spedizione Kakobuy: peso reale, volume e imballaggio", "Perché un pacco leggero può costare di più e come le regole attuali incidono sulla stima."],
    ["COSTI", "Costi Kakobuy spiegati: cosa può includere il totale", "Separa prodotto, trasporto, imballaggio, servizi opzionali, dichiarazione e costi di pagamento."],
    ["MAGAZZINO", "Magazzino Kakobuy: QC, 100 giorni e consolidamento", "Usa il periodo ufficiale per organizzare arrivi, decisioni post-vendita e gruppi di pacchi."],
    ["RESI", "Guida Kakobuy a resi e cambi", "Comprendi garanzia di cinque giorni, prove, trasporto nazionale e tempi del cambio."],
    ["RECENSIONE", "Recensione Kakobuy 2026: funzioni ufficiali e segnalazioni utenti", "Una recensione equilibrata che separa le regole ufficiali dalle esperienze su Trustpilot e Reddit."],
    ["GUIDA USA", "Guida Kakobuy USA 2026: preparazione prima dell'ordine", "Controlla indirizzo, identità, fonti d'importazione correnti e ultimo miglio prima di acquistare."],
    ["INDIRIZZO USA", "Formattare un indirizzo di consegna per Kakobuy", "Controlla destinatario, via, unità, città, stato, ZIP e anteprima privata dell'etichetta."],
  ],
};

export const articlesByLang = Object.fromEntries(
  (Object.keys(localizedArticleLabels) as Lang[]).map((lang) => [lang, localizedArticleLabels[lang].map(([tag, title, description], index) => [tag, title, description, articleRoutes[index]] as ArticleCardItem)])
) as Record<Lang, ArticleCardItem[]>;

export const localizedArticleBySlug = (lang: Lang, slug: string) => articlesByLang[lang].find(([, , , href]) => href.endsWith(`/${slug}`));
