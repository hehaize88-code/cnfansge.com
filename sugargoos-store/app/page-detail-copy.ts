import type { Language } from "./site-data";

type DetailCopy = {
  labels: Record<string, string>;
  metrics: [string, string, string];
  finds: { title: string; text: string }[];
  guideTitle: string;
  guideFacts: { title: string; text: string }[];
  sourceNote: string;
  qcTitle: string;
  qcItems: string[];
  qcCaption: string;
  shippingTitle: string;
  shippingFacts: { title: string; text: string }[];
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  shippingNote: string;
  editorialTitle: string;
  editorialItems: { title: string; text: string }[];
  articleSourcePrefix: string;
  articleSnapshot: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLink: string;
  footer: [string, string, string, string];
};

export const detailCopy: Record<Language, DetailCopy> = {
  en: {
    labels: { productMap: "Product map", workflow: "Buyer workflow", library: "Decision library", research: "Long-form research", shortlist: "Live shortlist", routes: "Searchable product routes", collections: "Curated decision sets", guide: "Start-to-ship workflow", qc: "Warehouse inspection", shipping: "Parcel planning", faq: "Clear limits", articles: "Evidence-backed reading", official: "Official workflow facts", beforeParcel: "Before parcel submission", planningTable: "Planning table", editorial: "Editorial standard", liveRoute: "Live route", all: "All", collection: "Collection", current: "Current" },
    metrics: ["curated routes", "languages", "clear pricing"],
    finds: [
      { title: "Low-weight starters", text: "Tees, shorts and slip-ons that are easier to inspect and less likely to dominate a first parcel." },
      { title: "QC-first footwear", text: "Pairs where symmetry, size, sole alignment and box decisions should be reviewed before shipping." },
      { title: "Route-check required", text: "Electronics and battery products that need current destination eligibility verified before purchase." },
    ],
    guideTitle: "What the platform handles — and what an independent guide cannot",
    guideFacts: [
      { title: "Marketplace purchasing", text: "The published workflow supports links from major Chinese marketplaces, while manual or unusual orders can follow different rules." },
      { title: "Five standard QC photos", text: "Official 2025–2026 guidance says five product photos are normally provided after warehouse sign-in; extra evidence should be requested precisely." },
      { title: "Storage depends on order type", text: "Official guidance states 100 days for purchasing orders and 30 days for resale or forwarding orders from packing-center status." },
      { title: "Parcel payment is separate", text: "Product purchase, domestic freight and international parcel shipping are different stages with different costs and decisions." },
    ],
    sourceNote: "Research checked against Sugargoo’s official workflow, QC, shipping, payment, return and storage guidance available on September 1, 2026. Published prices and rules can change; the live account is the operational source for an order.",
    qcTitle: "Review in the same order every time",
    qcItems: ["Correct item, color, size and quantity", "Front and back shape", "Left-right symmetry", "Stitching and edge finish", "Prints, embroidery and labels", "Measured dimensions", "Accessories and packaging", "Targeted extra photos"],
    qcCaption: "Comparison reference — not a QC approval",
    shippingTitle: "Four variables shape the final route",
    shippingFacts: [
      { title: "Actual weight", text: "Products plus final carton and protection." },
      { title: "Volumetric weight", text: "A route-specific size calculation that can control bulky parcels." },
      { title: "Route eligibility", text: "Destination, item type, batteries, liquids and current carrier rules." },
      { title: "Protection choices", text: "Packaging removal, reinforcement, simulation and insurance." },
    ],
    tableTitle: "Actual vs volumetric weight",
    tableHeaders: ["Parcel example", "Actual", "Dimensions", "Volume ÷ 5000", "Planning weight"],
    tableRows: [["Folded apparel", "2.8 kg", "38 × 28 × 18 cm", "3.83 kg", "3.83 kg"], ["Shoes with boxes", "4.6 kg", "48 × 38 × 34 cm", "12.40 kg", "12.40 kg"], ["Dense accessories", "5.2 kg", "32 × 24 × 18 cm", "2.76 kg", "5.20 kg"]],
    shippingNote: "Educational examples only. The current route divisor, billing increment, restrictions and measured packed dimensions control the real charge.",
    editorialTitle: "What every guide must separate",
    editorialItems: [
      { title: "Source fact", text: "A dated statement from current first-party material." },
      { title: "Observed route", text: "A product or page that was live when reviewed." },
      { title: "Practical inference", text: "An independent decision method clearly labeled as such." },
      { title: "Unknown", text: "No invented fee, delivery time, QC result or customs guarantee." },
    ],
    articleSourcePrefix: "Research basis",
    articleSnapshot: "Decision snapshot",
    relatedTitle: "Continue the research in this order",
    ctaTitle: "Use the checklist on a live product route",
    ctaText: "Open the searchable shortlist, compare the current catalog page, then return to the guide before approving warehouse shipment.",
    ctaLink: "Open spreadsheet",
    footer: ["Research", "Planning", "Reading", "Independent Sugargoo research"],
  },
  de: {
    labels: { productMap: "Produktübersicht", workflow: "Kaufablauf", library: "Entscheidungsbibliothek", research: "Ausführliche Recherche", shortlist: "Aktuelle Auswahl", routes: "Durchsuchbare Produktwege", collections: "Kuratierte Entscheidungen", guide: "Vom Link bis zum Versand", qc: "Lagerprüfung", shipping: "Paketplanung", faq: "Klare Grenzen", articles: "Quellengeprüfte Artikel", official: "Offizielle Ablauffakten", beforeParcel: "Vor der Paketeinreichung", planningTable: "Planungstabelle", editorial: "Redaktionsstandard", liveRoute: "Aktiver Weg", all: "Alle", collection: "Kollektion", current: "Aktuell" },
    metrics: ["kuratierte Wege", "Sprachen", "klare Preise"],
    finds: [
      { title: "Leichte Einstiegsartikel", text: "T-Shirts, Shorts und Slip-ons, die sich leichter prüfen lassen und ein erstes Paket weniger belasten." },
      { title: "Schuhe mit QC-Fokus", text: "Modelle, bei denen Symmetrie, Größe, Sohle und Schuhkarton vor dem Versand geprüft werden sollten." },
      { title: "Route vorher prüfen", text: "Elektronik und Batteriewaren, deren aktuelle Zulässigkeit für das Zielland vor dem Kauf geklärt werden muss." },
    ],
    guideTitle: "Was die Plattform übernimmt — und was ein unabhängiger Ratgeber nicht kann",
    guideFacts: [
      { title: "Marktplatzeinkauf", text: "Der veröffentlichte Ablauf unterstützt große chinesische Marktplätze; manuelle oder ungewöhnliche Aufträge können andere Regeln haben." },
      { title: "Fünf Standard-QC-Fotos", text: "Offizielle Hinweise 2025–2026 nennen normalerweise fünf Bilder nach Lagereingang; Zusatznachweise sollten konkret bestellt werden." },
      { title: "Lagerung nach Auftragstyp", text: "Offizielle Angaben nennen 100 Tage für Einkaufsaufträge und 30 Tage für Wiederverkauf oder Weiterleitung ab Packing-Center-Status." },
      { title: "Paket separat bezahlen", text: "Produkteinkauf, chinesische Fracht und internationaler Versand sind getrennte Stufen mit eigenen Kosten." },
    ],
    sourceNote: "Geprüft anhand offizieller Sugargoo-Inhalte zu Ablauf, QC, Versand, Zahlung, Rückgabe und Lagerung mit Stand 1. September 2026. Preise und Regeln können sich ändern; für einen Auftrag zählt die aktuelle Kontoanzeige.",
    qcTitle: "Immer in derselben Reihenfolge prüfen",
    qcItems: ["Artikel, Farbe, Größe und Menge", "Form von vorn und hinten", "Links-rechts-Symmetrie", "Nähte und Kanten", "Drucke, Stickerei und Etiketten", "Gemessene Abmessungen", "Zubehör und Verpackung", "Gezielte Zusatzfotos"],
    qcCaption: "Vergleichsreferenz — keine QC-Freigabe",
    shippingTitle: "Vier Variablen bestimmen die Route",
    shippingFacts: [{ title: "Istgewicht", text: "Produkte, Karton und Schutzmaterial." }, { title: "Volumengewicht", text: "Routenspezifische Größenrechnung für sperrige Pakete." }, { title: "Routenzulassung", text: "Ziel, Warenart, Batterie, Flüssigkeit und aktuelle Carrierregeln." }, { title: "Schutzwahl", text: "Verpackung, Verstärkung, Simulation und Versicherung." }],
    tableTitle: "Istgewicht und Volumengewicht",
    tableHeaders: ["Paketbeispiel", "Ist", "Maße", "Volumen ÷ 5000", "Planungsgewicht"],
    tableRows: [["Gefaltete Kleidung", "2,8 kg", "38 × 28 × 18 cm", "3,83 kg", "3,83 kg"], ["Schuhe mit Kartons", "4,6 kg", "48 × 38 × 34 cm", "12,40 kg", "12,40 kg"], ["Dichtes Zubehör", "5,2 kg", "32 × 24 × 18 cm", "2,76 kg", "5,20 kg"]],
    shippingNote: "Nur Lernbeispiele. Aktueller Divisor, Abrechnungsstufe, Beschränkungen und gemessene Packmaße bestimmen die echte Gebühr.",
    editorialTitle: "Was jeder Ratgeber trennen muss",
    editorialItems: [{ title: "Quellenfakt", text: "Datierte Aussage aus aktueller Primärquelle." }, { title: "Beobachteter Weg", text: "Produkt oder Seite, die bei Prüfung aktiv war." }, { title: "Praktische Ableitung", text: "Klar gekennzeichnete unabhängige Entscheidungsmethode." }, { title: "Unbekannt", text: "Keine erfundene Gebühr, Laufzeit, QC- oder Zollgarantie." }],
    articleSourcePrefix: "Recherchegrundlage", articleSnapshot: "Entscheidungssnapshot", relatedTitle: "Recherche in dieser Reihenfolge fortsetzen", ctaTitle: "Checkliste auf einen aktiven Produktweg anwenden", ctaText: "Öffne die Auswahl, prüfe die aktuelle Katalogseite und kehre vor der Versandfreigabe zum Ratgeber zurück.", ctaLink: "Tabelle öffnen", footer: ["Recherche", "Planung", "Lesen", "Unabhängige Sugargoo-Recherche"],
  },
  es: {
    labels: { productMap: "Mapa de productos", workflow: "Proceso de compra", library: "Biblioteca de decisiones", research: "Investigación extensa", shortlist: "Selección activa", routes: "Rutas de producto buscables", collections: "Decisiones seleccionadas", guide: "Del enlace al envío", qc: "Inspección de almacén", shipping: "Planificación del paquete", faq: "Límites claros", articles: "Lectura con fuentes", official: "Datos oficiales del proceso", beforeParcel: "Antes de presentar el paquete", planningTable: "Tabla de planificación", editorial: "Estándar editorial", liveRoute: "Ruta activa", all: "Todo", collection: "Colección", current: "Actual" },
    metrics: ["rutas seleccionadas", "idiomas", "precios claros"],
    finds: [{ title: "Primeros artículos ligeros", text: "Camisetas, shorts y slip-ons fáciles de revisar y con menor impacto probable en el primer paquete." }, { title: "Calzado con QC primero", text: "Pares que exigen revisar simetría, talla, suela y decisión sobre la caja antes del envío." }, { title: "Requiere revisar ruta", text: "Electrónica y baterías cuya compatibilidad actual con el destino debe confirmarse antes de comprar." }],
    guideTitle: "Qué gestiona la plataforma — y qué no puede hacer una guía independiente",
    guideFacts: [{ title: "Compra en marketplaces", text: "El flujo publicado admite grandes mercados chinos; pedidos manuales o especiales pueden seguir reglas distintas." }, { title: "Cinco fotos QC estándar", text: "La guía oficial 2025–2026 indica normalmente cinco fotos tras la entrada; las pruebas extra deben pedirse con precisión." }, { title: "Almacén según pedido", text: "La información oficial distingue 100 días para compras y 30 para reventa o forwarding desde packing center." }, { title: "El paquete se paga aparte", text: "Producto, transporte nacional y envío internacional son fases diferentes con costes y decisiones propios." }],
    sourceNote: "Investigación contrastada con guías oficiales de Sugargoo sobre proceso, QC, envío, pago, devoluciones y almacén al 1 de septiembre de 2026. Las reglas cambian; la cuenta activa manda.",
    qcTitle: "Revisa siempre en el mismo orden", qcItems: ["Artículo, color, talla y cantidad", "Forma frontal y trasera", "Simetría izquierda-derecha", "Costuras y bordes", "Gráficos, bordados y etiquetas", "Medidas", "Accesorios y embalaje", "Fotos adicionales concretas"], qcCaption: "Referencia comparativa — no aprobación QC",
    shippingTitle: "Cuatro variables definen la ruta", shippingFacts: [{ title: "Peso real", text: "Productos, caja final y protección." }, { title: "Peso volumétrico", text: "Cálculo de tamaño específico de cada línea." }, { title: "Elegibilidad", text: "Destino, artículo, baterías, líquidos y reglas actuales." }, { title: "Protección", text: "Retirar cajas, refuerzo, simulación y seguro." }],
    tableTitle: "Peso real frente a volumétrico", tableHeaders: ["Ejemplo", "Real", "Dimensiones", "Volumen ÷ 5000", "Peso de planificación"], tableRows: [["Ropa doblada", "2,8 kg", "38 × 28 × 18 cm", "3,83 kg", "3,83 kg"], ["Zapatos con caja", "4,6 kg", "48 × 38 × 34 cm", "12,40 kg", "12,40 kg"], ["Accesorios densos", "5,2 kg", "32 × 24 × 18 cm", "2,76 kg", "5,20 kg"]], shippingNote: "Ejemplos educativos. El divisor, escalón, restricciones y dimensiones actuales controlan el cargo real.",
    editorialTitle: "Qué debe separar cada guía", editorialItems: [{ title: "Hecho de fuente", text: "Declaración fechada de material oficial vigente." }, { title: "Ruta observada", text: "Producto o página activa durante la revisión." }, { title: "Inferencia práctica", text: "Método independiente claramente etiquetado." }, { title: "Desconocido", text: "Sin inventar tarifa, plazo, QC o garantía aduanera." }],
    articleSourcePrefix: "Base de investigación", articleSnapshot: "Resumen de decisión", relatedTitle: "Continúa la investigación en este orden", ctaTitle: "Aplica la lista a una ruta activa", ctaText: "Abre la selección, compara la página actual y vuelve a la guía antes de aprobar el envío.", ctaLink: "Abrir spreadsheet", footer: ["Investigación", "Planificación", "Lectura", "Investigación independiente de Sugargoo"],
  },
  fr: {
    labels: { productMap: "Carte produits", workflow: "Parcours acheteur", library: "Bibliothèque de décision", research: "Recherche détaillée", shortlist: "Sélection active", routes: "Routes produit recherchables", collections: "Décisions ciblées", guide: "Du lien au colis", qc: "Inspection d’entrepôt", shipping: "Préparation du colis", faq: "Limites claires", articles: "Articles sourcés", official: "Faits officiels du parcours", beforeParcel: "Avant la soumission", planningTable: "Tableau de préparation", editorial: "Norme éditoriale", liveRoute: "Route active", all: "Tout", collection: "Collection", current: "Actuel" },
    metrics: ["routes sélectionnées", "langues", "prix lisibles"],
    finds: [{ title: "Premiers articles légers", text: "T-shirts, shorts et chaussures faciles à vérifier et moins susceptibles de dominer un premier colis." }, { title: "Chaussures : QC d’abord", text: "Paires où symétrie, taille, semelle et conservation de la boîte doivent être contrôlées." }, { title: "Route à vérifier", text: "Électronique et batteries dont l’admissibilité actuelle doit être confirmée avant achat." }],
    guideTitle: "Ce que gère la plateforme — et les limites d’un guide indépendant",
    guideFacts: [{ title: "Achat marketplace", text: "Le flux publié prend en charge de grandes marketplaces; le manuel et l’inhabituel peuvent suivre d’autres règles." }, { title: "Cinq photos QC standard", text: "Les guides 2025–2026 annoncent normalement cinq photos après entrée; une preuve supplémentaire doit être demandée précisément." }, { title: "Stockage selon commande", text: "La source officielle distingue 100 jours pour achats et 30 pour revente ou forwarding depuis packing center." }, { title: "Colis payé séparément", text: "Produit, transport chinois et livraison internationale sont des étapes différentes." }],
    sourceNote: "Vérifié avec les guides officiels Sugargoo sur parcours, QC, expédition, paiement, retour et stockage au 1er septembre 2026. Les règles changent; le compte actif prévaut.",
    qcTitle: "Toujours examiner dans le même ordre", qcItems: ["Article, couleur, taille et quantité", "Forme avant et arrière", "Symétrie gauche-droite", "Coutures et bords", "Graphiques, broderies et étiquettes", "Mesures", "Accessoires et emballage", "Photos supplémentaires ciblées"], qcCaption: "Référence de comparaison — pas une validation QC",
    shippingTitle: "Quatre variables définissent la route", shippingFacts: [{ title: "Poids réel", text: "Produits, carton final et protection." }, { title: "Poids volumétrique", text: "Calcul de taille propre à la ligne." }, { title: "Admissibilité", text: "Destination, produit, batteries, liquides et règles actuelles." }, { title: "Protection", text: "Retrait, renforcement, simulation et assurance." }],
    tableTitle: "Poids réel et volumétrique", tableHeaders: ["Exemple", "Réel", "Dimensions", "Volume ÷ 5000", "Poids prévu"], tableRows: [["Vêtements pliés", "2,8 kg", "38 × 28 × 18 cm", "3,83 kg", "3,83 kg"], ["Chaussures avec boîtes", "4,6 kg", "48 × 38 × 34 cm", "12,40 kg", "12,40 kg"], ["Accessoires denses", "5,2 kg", "32 × 24 × 18 cm", "2,76 kg", "5,20 kg"]], shippingNote: "Exemples pédagogiques. Diviseur, palier, restrictions et dimensions actuelles fixent le vrai coût.",
    editorialTitle: "Ce que chaque guide doit séparer", editorialItems: [{ title: "Fait sourcé", text: "Déclaration datée d’une source officielle actuelle." }, { title: "Route observée", text: "Produit ou page active lors du contrôle." }, { title: "Déduction pratique", text: "Méthode indépendante clairement signalée." }, { title: "Inconnu", text: "Aucun frais, délai, QC ou dédouanement inventé." }],
    articleSourcePrefix: "Base de recherche", articleSnapshot: "Aperçu décisionnel", relatedTitle: "Poursuivre la recherche dans cet ordre", ctaTitle: "Appliquer la checklist à une route active", ctaText: "Ouvrez la sélection, comparez la page actuelle et revenez au guide avant l’expédition.", ctaLink: "Ouvrir le tableur", footer: ["Recherche", "Préparation", "Lecture", "Recherche Sugargoo indépendante"],
  },
  it: {
    labels: { productMap: "Mappa prodotti", workflow: "Flusso acquisto", library: "Libreria decisionale", research: "Ricerca approfondita", shortlist: "Selezione attiva", routes: "Percorsi prodotto ricercabili", collections: "Decisioni selezionate", guide: "Dal link alla spedizione", qc: "Ispezione magazzino", shipping: "Pianificazione pacco", faq: "Limiti chiari", articles: "Articoli con fonti", official: "Fatti ufficiali del flusso", beforeParcel: "Prima della presentazione", planningTable: "Tabella di pianificazione", editorial: "Standard editoriale", liveRoute: "Percorso attivo", all: "Tutto", collection: "Collezione", current: "Attuale" },
    metrics: ["percorsi selezionati", "lingue", "prezzi chiari"],
    finds: [{ title: "Primi articoli leggeri", text: "T-shirt, shorts e slip-on più facili da controllare e meno pesanti sul primo pacco." }, { title: "Calzature: QC prima", text: "Paia per cui simmetria, misura, suola e scatola vanno valutate prima della spedizione." }, { title: "Rotta da controllare", text: "Elettronica e batterie la cui idoneità attuale va verificata prima dell’acquisto." }],
    guideTitle: "Cosa gestisce la piattaforma — e cosa non può fare una guida indipendente",
    guideFacts: [{ title: "Acquisto marketplace", text: "Il flusso pubblicato supporta i principali marketplace; ordini manuali o insoliti possono avere regole diverse." }, { title: "Cinque foto QC standard", text: "Le guide 2025–2026 indicano normalmente cinque foto dopo l’ingresso; le prove extra vanno richieste con precisione." }, { title: "Deposito per tipo d’ordine", text: "La fonte ufficiale distingue 100 giorni per acquisti e 30 per rivendita o forwarding da packing center." }, { title: "Il pacco si paga a parte", text: "Prodotto, trasporto cinese e spedizione internazionale sono fasi diverse." }],
    sourceNote: "Ricerca verificata con le guide ufficiali Sugargoo su flusso, QC, spedizione, pagamento, resi e deposito al 1 settembre 2026. Le regole cambiano; vale l’account attivo.",
    qcTitle: "Controlla sempre nello stesso ordine", qcItems: ["Articolo, colore, taglia e quantità", "Forma davanti e dietro", "Simmetria sinistra-destra", "Cuciture e bordi", "Grafiche, ricami ed etichette", "Misure", "Accessori e imballaggio", "Foto extra mirate"], qcCaption: "Riferimento di confronto — non approvazione QC",
    shippingTitle: "Quattro variabili definiscono la rotta", shippingFacts: [{ title: "Peso reale", text: "Prodotti, cartone finale e protezione." }, { title: "Peso volumetrico", text: "Calcolo dimensionale specifico della linea." }, { title: "Idoneità", text: "Destinazione, articolo, batterie, liquidi e regole correnti." }, { title: "Protezione", text: "Rimozione, rinforzo, simulazione e assicurazione." }],
    tableTitle: "Peso reale e volumetrico", tableHeaders: ["Esempio", "Reale", "Dimensioni", "Volume ÷ 5000", "Peso previsto"], tableRows: [["Vestiti piegati", "2,8 kg", "38 × 28 × 18 cm", "3,83 kg", "3,83 kg"], ["Scarpe con scatole", "4,6 kg", "48 × 38 × 34 cm", "12,40 kg", "12,40 kg"], ["Accessori densi", "5,2 kg", "32 × 24 × 18 cm", "2,76 kg", "5,20 kg"]], shippingNote: "Esempi educativi. Divisore, scaglione, restrizioni e dimensioni correnti controllano il costo reale.",
    editorialTitle: "Cosa deve separare ogni guida", editorialItems: [{ title: "Fatto da fonte", text: "Dichiarazione datata da materiale ufficiale corrente." }, { title: "Percorso osservato", text: "Prodotto o pagina attiva al controllo." }, { title: "Inferenza pratica", text: "Metodo indipendente dichiarato chiaramente." }, { title: "Ignoto", text: "Nessuna tariffa, tempo, QC o dogana inventata." }],
    articleSourcePrefix: "Base di ricerca", articleSnapshot: "Sintesi decisionale", relatedTitle: "Continua la ricerca in questo ordine", ctaTitle: "Usa la checklist su un percorso attivo", ctaText: "Apri la selezione, confronta la pagina attuale e torna alla guida prima della spedizione.", ctaLink: "Apri foglio", footer: ["Ricerca", "Pianificazione", "Lettura", "Ricerca Sugargoo indipendente"],
  },
};
