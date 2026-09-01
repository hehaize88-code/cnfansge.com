import { researchedArticles } from "@/lib/researched-articles";
import { localizedArticleExpansions, splitArticleExpansion } from "@/lib/localized-article-expansions";

export const SITE_URL = "https://oopbuyvip.pro";
export const DESTINATION = "https://cnfansge.com";

export const locales = ["en", "de", "es", "fr", "it"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export const sections = [
  "spreadsheet",
  "finds",
  "guide",
  "qc",
  "shipping",
  "faq",
  "articles",
] as const;
export type Section = (typeof sections)[number];

type Copy = {
  nav: Record<Section, string>;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  searchPlaceholder: string;
  searchButton: string;
  liveSheet: string;
  products: string;
  productIntro: string;
  all: string;
  route: string;
  approx: string;
  categories: string;
  categoryIntro: string;
  method: string;
  methodTitle: string;
  methodSteps: [string, string, string];
  methodBodies: [string, string, string];
  faqTitle: string;
  faqIntro: string;
  articlesTitle: string;
  articlesIntro: string;
  read: string;
  updated: string;
  disclosure: string;
  footer: string;
  sourceNote: string;
  noResults: string;
  reset: string;
  sectionKickers: Record<Section, string>;
  sectionTitles: Record<Section, string>;
  sectionIntros: Record<Section, string>;
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: { spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", faq: "FAQ", articles: "Articles" },
    eyebrow: "Independent OOPBUY research desk",
    heroTitle: "Find first. Check twice. Ship with a plan.",
    heroText: "A QC-first OOPBUY spreadsheet built for faster product research, clearer warehouse decisions and fewer shipping surprises.",
    searchPlaceholder: "Search shoes, hoodie, jersey…",
    searchButton: "Search all products",
    liveSheet: "Open the spreadsheet",
    products: "Curated finds",
    productIntro: "Eight routes checked against the destination catalog on 1 September 2026. Prices are approximate product-only conversions, before domestic or international shipping.",
    all: "All",
    route: "Open product",
    approx: "Approx. USD",
    categories: "Browse by category",
    categoryIntro: "Jump straight into the matching catalog section. Each destination opens in a new tab.",
    method: "A calmer buying workflow",
    methodTitle: "Three checkpoints before you submit a parcel",
    methodSteps: ["Shortlist", "Inspect", "Plan"],
    methodBodies: ["Compare the product image, title, price and seller route before adding anything to your cart.", "Use warehouse photos to check the exact item received. Record visible concerns while the return window is still open.", "Estimate packed weight and volume, then compare routes by total cost and restrictions—not by the headline rate alone."],
    faqTitle: "Quick answers, without the fog",
    faqIntro: "Practical notes drawn from the official help flow and separated from our independent product curation.",
    articlesTitle: "Decision guides",
    articlesIntro: "Long-form methods for reading spreadsheets, reviewing QC photos and planning shipping costs.",
    read: "Read guide",
    updated: "Reviewed 1 Sep 2026",
    disclosure: "Independent resource. Not operated by or affiliated with OOPBUY. Product availability and prices can change.",
    footer: "Built for research, not impulse clicks.",
    sourceNote: "Process facts checked against the OOPBUY Help Center on 1 September 2026.",
    noResults: "No curated match yet. Search the full catalog instead.",
    reset: "Clear filters",
    sectionKickers: { spreadsheet: "Curated product index", finds: "Small, useful shortlist", guide: "Start-to-finish workflow", qc: "Warehouse photo method", shipping: "Landed-cost thinking", faq: "Plain-language answers", articles: "Research library" },
    sectionTitles: { spreadsheet: "The OOPBUY spreadsheet, built for decisions", finds: "A shorter list of routes worth checking", guide: "How to use OOPBUY without losing the product trail", qc: "Turn QC photos into a repeatable inspection", shipping: "Plan shipping before the parcel is packed", faq: "Frequently asked questions", articles: "Independent OOPBUY guides" },
    sectionIntros: { spreadsheet: "Search, filter and open the matching destination route. Every card keeps the first catalog image and shows an approximate USD product price.", finds: "A focused selection across shoes, clothing, jerseys and accessories—useful for discovery without an endless wall of cards.", guide: "A practical sequence from product shortlist to warehouse inspection and international parcel planning.", qc: "A category-aware checklist for reading warehouse photos while the decision is still reversible.", shipping: "A simple framework for comparing actual weight, volumetric weight, restrictions and service level.", faq: "The important process questions, answered directly and with official-policy dates called out.", articles: "Detailed methods designed to stay useful beyond a single product drop or spreadsheet update." },
  },
  de: {
    nav: { spreadsheet: "Tabelle", finds: "Funde", guide: "Anleitung", qc: "QC", shipping: "Versand", faq: "FAQ", articles: "Artikel" },
    eyebrow: "Unabhängige OOPBUY-Recherche",
    heroTitle: "Erst finden. Zweimal prüfen. Geplant versenden.",
    heroText: "Eine QC-orientierte OOPBUY-Tabelle für schnellere Produktsuche, klare Lagerentscheidungen und weniger Überraschungen beim Versand.",
    searchPlaceholder: "Schuhe, Hoodie, Trikot suchen…", searchButton: "Alle Produkte durchsuchen", liveSheet: "Tabelle öffnen", products: "Ausgewählte Funde",
    productIntro: "Acht Zielseiten wurden am 1. September 2026 geprüft. Die Preise sind ungefähre Umrechnungen nur für das Produkt, ohne Inlands- oder internationalen Versand.", all: "Alle", route: "Produkt öffnen", approx: "Ca. USD",
    categories: "Nach Kategorie", categoryIntro: "Direkt zum passenden Katalogbereich. Jedes Ziel öffnet sich in einem neuen Tab.", method: "Ein ruhigerer Kaufablauf", methodTitle: "Drei Prüfungen vor dem Paketversand",
    methodSteps: ["Auswählen", "Prüfen", "Planen"], methodBodies: ["Vergleiche Produktbild, Titel, Preis und Verkäuferroute, bevor du etwas in den Warenkorb legst.", "Prüfe anhand der Lagerfotos den tatsächlich eingetroffenen Artikel und notiere sichtbare Probleme rechtzeitig.", "Schätze verpacktes Gewicht und Volumen und vergleiche Routen nach Gesamtkosten und Beschränkungen."],
    faqTitle: "Klare Kurzantworten", faqIntro: "Praktische Hinweise aus dem offiziellen Ablauf, getrennt von unserer unabhängigen Produktauswahl.", articlesTitle: "Entscheidungshilfen", articlesIntro: "Ausführliche Methoden für Tabellen, QC-Fotos und Versandkosten.", read: "Anleitung lesen", updated: "Geprüft am 1. Sep. 2026", disclosure: "Unabhängige Ressource. Nicht von OOPBUY betrieben oder mit OOPBUY verbunden. Verfügbarkeit und Preise können sich ändern.", footer: "Für Recherche gebaut, nicht für Impulskäufe.", sourceNote: "Prozessangaben am 1. September 2026 im OOPBUY Help Center geprüft.", noResults: "Noch kein passender Fund. Durchsuche stattdessen den gesamten Katalog.", reset: "Filter löschen",
    sectionKickers: { spreadsheet: "Kuratierter Produktindex", finds: "Kleine, nützliche Auswahl", guide: "Ablauf von Anfang bis Ende", qc: "Methode für Lagerfotos", shipping: "Gesamtkosten verstehen", faq: "Einfache Antworten", articles: "Recherchebibliothek" },
    sectionTitles: { spreadsheet: "Die OOPBUY-Tabelle für echte Entscheidungen", finds: "Eine kürzere Liste prüfenswerter Routen", guide: "OOPBUY nutzen, ohne die Produktspur zu verlieren", qc: "QC-Fotos systematisch prüfen", shipping: "Versand planen, bevor das Paket gepackt ist", faq: "Häufig gestellte Fragen", articles: "Unabhängige OOPBUY-Anleitungen" },
    sectionIntros: { spreadsheet: "Suchen, filtern und die passende Zielseite öffnen. Jede Karte nutzt das erste Katalogbild und zeigt einen ungefähren USD-Produktpreis.", finds: "Eine fokussierte Auswahl aus Schuhen, Kleidung, Trikots und Accessoires – nützlich für Entdeckungen ohne endlose Karten.", guide: "Eine praktische Reihenfolge von der Produktauswahl über die Lagerprüfung bis zur internationalen Paketplanung.", qc: "Eine kategoriespezifische Checkliste für Lagerfotos, solange die Entscheidung noch umkehrbar ist.", shipping: "Ein einfaches Modell zum Vergleich von Ist-Gewicht, Volumengewicht, Beschränkungen und Service.", faq: "Die wichtigsten Prozessfragen direkt beantwortet, mit Datum der offiziellen Regeln.", articles: "Detaillierte Methoden, die über einen einzelnen Drop oder ein Tabellenupdate hinaus nützlich bleiben." },
  },
  es: {
    nav: { spreadsheet: "Hoja", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envío", faq: "FAQ", articles: "Artículos" },
    eyebrow: "Mesa independiente de investigación OOPBUY", heroTitle: "Encuentra primero. Revisa dos veces. Envía con un plan.", heroText: "Una hoja OOPBUY centrada en QC para investigar más rápido, decidir mejor en almacén y evitar sorpresas de envío.",
    searchPlaceholder: "Buscar zapatillas, sudadera, camiseta…", searchButton: "Buscar todos los productos", liveSheet: "Abrir la hoja", products: "Hallazgos seleccionados", productIntro: "Ocho rutas verificadas con el catálogo de destino el 1 de septiembre de 2026. Los precios son conversiones aproximadas solo del producto, antes del envío nacional o internacional.", all: "Todo", route: "Abrir producto", approx: "USD aprox.",
    categories: "Explorar categorías", categoryIntro: "Ve directamente a la sección correcta del catálogo. Cada destino se abre en una pestaña nueva.", method: "Un proceso de compra más sereno", methodTitle: "Tres controles antes de enviar el paquete", methodSteps: ["Selecciona", "Inspecciona", "Planifica"], methodBodies: ["Compara imagen, título, precio y ruta del vendedor antes de añadir un producto.", "Usa las fotos de almacén para revisar el artículo recibido y anota cualquier problema visible a tiempo.", "Calcula peso y volumen embalados; compara rutas por coste total y restricciones, no solo por la tarifa inicial."],
    faqTitle: "Respuestas rápidas y claras", faqIntro: "Notas prácticas del proceso oficial, separadas de nuestra selección independiente.", articlesTitle: "Guías de decisión", articlesIntro: "Métodos detallados para hojas, fotos QC y costes de envío.", read: "Leer guía", updated: "Revisado el 1 sep 2026", disclosure: "Recurso independiente. No operado por OOPBUY ni afiliado a la empresa. La disponibilidad y los precios pueden cambiar.", footer: "Hecho para investigar, no para comprar por impulso.", sourceNote: "Datos del proceso verificados en el Centro de Ayuda de OOPBUY el 1 de septiembre de 2026.", noResults: "Aún no hay coincidencia seleccionada. Busca en el catálogo completo.", reset: "Borrar filtros",
    sectionKickers: { spreadsheet: "Índice seleccionado", finds: "Lista breve y útil", guide: "Proceso de principio a fin", qc: "Método para fotos de almacén", shipping: "Coste total", faq: "Respuestas directas", articles: "Biblioteca de investigación" },
    sectionTitles: { spreadsheet: "La hoja OOPBUY diseñada para decidir", finds: "Una lista corta de rutas que merece la pena revisar", guide: "Cómo usar OOPBUY sin perder el rastro del producto", qc: "Convierte las fotos QC en una inspección repetible", shipping: "Planifica el envío antes de embalar", faq: "Preguntas frecuentes", articles: "Guías OOPBUY independientes" },
    sectionIntros: { spreadsheet: "Busca, filtra y abre la ruta correcta. Cada tarjeta conserva la primera imagen del catálogo y muestra un precio aproximado en USD.", finds: "Una selección concreta de calzado, ropa, camisetas y accesorios sin una pared interminable de tarjetas.", guide: "Una secuencia práctica desde la selección hasta la inspección en almacén y el envío internacional.", qc: "Una lista por categoría para leer fotos de almacén mientras la decisión aún es reversible.", shipping: "Un marco sencillo para comparar peso real, peso volumétrico, restricciones y nivel de servicio.", faq: "Las preguntas clave del proceso, con fechas de las políticas oficiales.", articles: "Métodos detallados que siguen siendo útiles después de una actualización o lanzamiento." },
  },
  fr: {
    nav: { spreadsheet: "Tableau", finds: "Sélection", guide: "Guide", qc: "QC", shipping: "Livraison", faq: "FAQ", articles: "Articles" },
    eyebrow: "Bureau de recherche OOPBUY indépendant", heroTitle: "Trouvez. Vérifiez deux fois. Expédiez avec un plan.", heroText: "Un tableau OOPBUY axé QC pour chercher plus vite, décider clairement à l’entrepôt et limiter les surprises de livraison.",
    searchPlaceholder: "Rechercher chaussures, hoodie, maillot…", searchButton: "Rechercher tous les produits", liveSheet: "Ouvrir le tableau", products: "Sélection actuelle", productIntro: "Huit routes vérifiées dans le catalogue cible le 1er septembre 2026. Prix indicatifs du produit seul, avant livraison nationale ou internationale.", all: "Tout", route: "Ouvrir le produit", approx: "USD env.",
    categories: "Par catégorie", categoryIntro: "Accédez directement à la bonne section du catalogue. Chaque destination s’ouvre dans un nouvel onglet.", method: "Un achat plus posé", methodTitle: "Trois contrôles avant l’envoi", methodSteps: ["Sélectionner", "Inspecter", "Planifier"], methodBodies: ["Comparez l’image, le titre, le prix et la route vendeur avant l’ajout au panier.", "Utilisez les photos d’entrepôt pour contrôler l’article reçu et notez les défauts visibles à temps.", "Estimez poids et volume emballés, puis comparez coût total, restrictions et service."],
    faqTitle: "Des réponses nettes", faqIntro: "Des notes pratiques issues du parcours officiel, distinctes de notre sélection indépendante.", articlesTitle: "Guides de décision", articlesIntro: "Des méthodes détaillées pour les tableaux, les photos QC et les frais d’envoi.", read: "Lire le guide", updated: "Vérifié le 1 sept. 2026", disclosure: "Ressource indépendante, ni exploitée par OOPBUY ni affiliée à l’entreprise. Disponibilité et prix peuvent changer.", footer: "Conçu pour la recherche, pas pour les achats impulsifs.", sourceNote: "Informations de processus vérifiées dans le centre d’aide OOPBUY le 1er septembre 2026.", noResults: "Aucun résultat sélectionné. Recherchez plutôt dans le catalogue complet.", reset: "Effacer les filtres",
    sectionKickers: { spreadsheet: "Index produit sélectionné", finds: "Petite sélection utile", guide: "Parcours complet", qc: "Méthode photo d’entrepôt", shipping: "Coût rendu", faq: "Réponses simples", articles: "Bibliothèque de recherche" },
    sectionTitles: { spreadsheet: "Le tableau OOPBUY conçu pour décider", finds: "Une liste courte de routes à vérifier", guide: "Utiliser OOPBUY sans perdre la trace du produit", qc: "Transformer les photos QC en contrôle reproductible", shipping: "Planifier la livraison avant l’emballage", faq: "Questions fréquentes", articles: "Guides OOPBUY indépendants" },
    sectionIntros: { spreadsheet: "Recherchez, filtrez et ouvrez la bonne route. Chaque carte garde la première image catalogue et affiche un prix produit indicatif en USD.", finds: "Une sélection ciblée de chaussures, vêtements, maillots et accessoires, sans défilement infini.", guide: "Une séquence pratique de la sélection à l’inspection en entrepôt puis à la planification internationale.", qc: "Une liste adaptée à la catégorie pour lire les photos pendant que la décision reste réversible.", shipping: "Un cadre simple pour comparer poids réel, poids volumétrique, restrictions et service.", faq: "Les questions clés, avec la date des règles officielles.", articles: "Des méthodes détaillées utiles au-delà d’un lancement ou d’une mise à jour du tableau." },
  },
  it: {
    nav: { spreadsheet: "Foglio", finds: "Selezione", guide: "Guida", qc: "QC", shipping: "Spedizione", faq: "FAQ", articles: "Articoli" },
    eyebrow: "Ricerca OOPBUY indipendente", heroTitle: "Trova. Controlla due volte. Spedisci con un piano.", heroText: "Un foglio OOPBUY incentrato sul QC per cercare più in fretta, decidere meglio in magazzino e ridurre le sorprese di spedizione.",
    searchPlaceholder: "Cerca scarpe, felpa, maglia…", searchButton: "Cerca tutti i prodotti", liveSheet: "Apri il foglio", products: "Selezione curata", productIntro: "Otto percorsi verificati nel catalogo di destinazione il 1° settembre 2026. Prezzi indicativi del solo prodotto, prima della spedizione nazionale o internazionale.", all: "Tutti", route: "Apri prodotto", approx: "USD circa",
    categories: "Esplora per categoria", categoryIntro: "Vai direttamente alla sezione corretta del catalogo. Ogni destinazione si apre in una nuova scheda.", method: "Un acquisto più ragionato", methodTitle: "Tre controlli prima di spedire il pacco", methodSteps: ["Seleziona", "Controlla", "Pianifica"], methodBodies: ["Confronta immagine, titolo, prezzo e percorso del venditore prima di aggiungere al carrello.", "Usa le foto del magazzino per controllare l’articolo ricevuto e annota subito i problemi visibili.", "Stima peso e volume imballati, poi confronta costo totale, restrizioni e servizio."],
    faqTitle: "Risposte rapide e chiare", faqIntro: "Note pratiche basate sul flusso ufficiale, separate dalla nostra selezione indipendente.", articlesTitle: "Guide decisionali", articlesIntro: "Metodi dettagliati per fogli, foto QC e costi di spedizione.", read: "Leggi la guida", updated: "Verificato il 1 set 2026", disclosure: "Risorsa indipendente. Non gestita da OOPBUY né affiliata all’azienda. Disponibilità e prezzi possono cambiare.", footer: "Pensato per la ricerca, non per gli acquisti impulsivi.", sourceNote: "Informazioni sul processo verificate nel Centro assistenza OOPBUY il 1° settembre 2026.", noResults: "Nessun risultato selezionato. Cerca invece nell’intero catalogo.", reset: "Azzera filtri",
    sectionKickers: { spreadsheet: "Indice prodotti curato", finds: "Selezione piccola e utile", guide: "Flusso dall’inizio alla fine", qc: "Metodo foto magazzino", shipping: "Costo complessivo", faq: "Risposte semplici", articles: "Biblioteca di ricerca" },
    sectionTitles: { spreadsheet: "Il foglio OOPBUY pensato per decidere", finds: "Una lista breve di percorsi da controllare", guide: "Usare OOPBUY senza perdere il filo del prodotto", qc: "Trasforma le foto QC in un controllo ripetibile", shipping: "Pianifica la spedizione prima dell’imballaggio", faq: "Domande frequenti", articles: "Guide OOPBUY indipendenti" },
    sectionIntros: { spreadsheet: "Cerca, filtra e apri il percorso corretto. Ogni scheda mantiene la prima immagine del catalogo e mostra un prezzo indicativo in USD.", finds: "Una selezione mirata di scarpe, abbigliamento, maglie e accessori, senza una parete infinita di schede.", guide: "Una sequenza pratica dalla selezione all’ispezione in magazzino e alla pianificazione internazionale.", qc: "Una checklist per categoria per leggere le foto mentre la decisione è ancora reversibile.", shipping: "Un metodo semplice per confrontare peso reale, peso volumetrico, restrizioni e servizio.", faq: "Le domande principali con le date delle regole ufficiali.", articles: "Metodi dettagliati che restano utili oltre un singolo lancio o aggiornamento." },
  },
};

export type Product = { id: string; name: string; category: string; price: string; image: string; href: string; note: string };
export const products: Product[] = [
  { id: "6681", name: "Heavyweight graphic sweatshirt", category: "Hoodies", price: "$25.15", image: "/products/6681.jpg", href: `${DESTINATION}/AllProducts/6681.html`, note: "Product ID 7755101935" },
  { id: "6680", name: "Relaxed pants / shorts", category: "Pants", price: "$28.13", image: "/products/6680.jpg", href: `${DESTINATION}/AllProducts/6680.html`, note: "Product ID 7755051257" },
  { id: "6679", name: "Football jersey selection", category: "Jerseys", price: "$19.49", image: "/products/6679.jpg", href: `${DESTINATION}/AllProducts/6679.html`, note: "Product ID 7641464690" },
  { id: "5760", name: "Air-cushion runner", category: "Shoes", price: "$22.32", image: "/products/5760.jpg", href: `${DESTINATION}/AllProducts/5760.html`, note: "Product ID 7675283980" },
  { id: "2450", name: "Web motif hoodie", category: "Hoodies", price: "$27.53", image: "/products/2450.jpg", href: `${DESTINATION}/AllProducts/2450.html`, note: "Product ID 7611589527" },
  { id: "934", name: "Gel-cushion trainer", category: "Shoes", price: "$36.46", image: "/products/934.jpg", href: `${DESTINATION}/AllProducts/934.html`, note: "Product ID 7586091890" },
  { id: "5895", name: "Graphic T-shirt collection", category: "T-Shirts", price: "$13.24", image: "/products/5895.jpg", href: `${DESTINATION}/AllProducts/5895.html`, note: "40-style listing · ID 7672917747" },
  { id: "5841", name: "Coated canvas mini bag", category: "Accessories", price: "$14.29", image: "/products/5841.jpg", href: `${DESTINATION}/AllProducts/5841.html`, note: "Product ID 7675824966" },
];

export const categories = [
  ["Shoes", "/shoes/"], ["Hoodies", "/hoodies-sweaters/"], ["T-Shirts", "/t-shirts/"], ["Jackets", "/jackets/"], ["Pants", "/pants-shorts/"],
  ["Headwear", "/headwear/"], ["Accessories", "/accessories/"], ["Jerseys", "/Jersey/"], ["Electronics", "/electronics/"], ["Other", "/other-stuff/"],
] as const;

export const faqByLocale: Record<Locale, { q: string; a: string }[]> = {
  en: [
    { q: "What happens when an item reaches the warehouse?", a: "OOPBUY’s beginner guide says incoming goods are quality-inspected and photographed. Treat those images as evidence of the received item, not as a guarantee of material, authenticity or long-term durability." },
    { q: "How long is the warehouse return window?", a: "The official return and exchange material states five days, or 120 hours, after warehousing. Check the live order status and current help-center rule before relying on the deadline." },
    { q: "How long is free storage?", a: "The official help material states a 90-day storage period. Storage policy can change, so avoid using the full window as a default plan." },
    { q: "Are the USD prices final delivered prices?", a: "No. They are approximate product-price conversions using 1 USD ≈ 6.72 CNY on 1 September 2026. Domestic freight, services, packing and international shipping are separate." },
    { q: "Does OOPBUY charge a service fee?", a: "Two official pages need to be read together: the Service & Fees page says no other fees beyond product, international shipping and customs clearance except optional services, while the User Registration Agreement refers to an 8% platform service fee. Check the itemized live checkout for the transaction and do not rely on a blanket claim." },
    { q: "Is the shipping estimate the final cost?", a: "No. OOPBUY’s tutorial distinguishes estimated shipping from the actual cost shown after the parcel is packed. Weight, package dimensions, route rules and optional protection can change the result." },
    { q: "Which goods may be restricted?", a: "OOPBUY’s published lists include examples such as tobacco, alcohol, contraband, knives and sharp objects; the pre-shopping notice also flags food and medicine. Eligibility depends on current route and destination rules, so check before ordering and again before consolidation." },
    { q: "Where is tracking shown after shipment?", a: "OOPBUY’s official tutorial says the logistics track can be checked in “My Waybill” after the parcel ships. The delivery notice says a tracking number is provided." },
    { q: "Does this site sell or ship products?", a: "No. This is an independent research index. Product and category links open the destination catalog, where availability, options and checkout details must be confirmed." },
  ],
  de: [
    { q: "Was passiert bei Ankunft im Lager?", a: "Laut OOPBUY-Einsteigerleitfaden werden eingehende Waren geprüft und fotografiert. Die Bilder dokumentieren den erhaltenen Artikel, sind aber keine Garantie für Material, Echtheit oder Haltbarkeit." },
    { q: "Wie lang ist das Rückgabefenster?", a: "Die offiziellen Hinweise nennen fünf Tage beziehungsweise 120 Stunden nach Einlagerung. Prüfe vor einer Entscheidung immer Bestellstatus und aktuelle Hilferegeln." },
    { q: "Wie lange ist die Lagerzeit?", a: "Offizielle Hilfetexte nennen 90 Tage. Da Regeln sich ändern können, sollte das volle Zeitfenster nicht der Standardplan sein." },
    { q: "Sind die USD-Preise Endpreise?", a: "Nein. Es sind ungefähre Produktpreis-Umrechnungen mit 1 USD ≈ 6,72 CNY am 1. September 2026. Inlandsfracht, Service, Verpackung und internationaler Versand kommen hinzu." },
    { q: "Erhebt OOPBUY eine Servicegebühr?", a: "Zwei offizielle Texte stehen nebeneinander: Die Seite Service & Fees nennt keine weiteren Gebühren außer Produkt, internationalem Versand, Zoll und optionalen Diensten; die Registrierungsvereinbarung verweist auf 8 % Plattformgebühr. Entscheidend ist die aufgeschlüsselte Live-Zahlung." },
    { q: "Ist die Versandschätzung endgültig?", a: "Nein. Das Tutorial unterscheidet geschätzten Versand vom tatsächlichen Betrag nach dem Packen. Gewicht, Maße, Route und Schutz können das Ergebnis ändern." },
    { q: "Welche Waren können eingeschränkt sein?", a: "Offizielle Listen nennen unter anderem Tabak, Alkohol, Schmuggelware, Messer sowie in einem Einkaufshinweis Lebensmittel und Medizin. Prüfe aktuelle Ziel- und Routenregeln vor Bestellung und Konsolidierung." },
    { q: "Wo erscheint die Sendungsverfolgung?", a: "Laut offiziellem Tutorial steht der Verlauf nach Versand unter „My Waybill“; die Lieferhinweise sagen, dass eine Trackingnummer bereitgestellt wird." },
    { q: "Verkauft oder versendet diese Seite?", a: "Nein. Dies ist ein unabhängiger Rechercheindex. Produkt- und Kategorielinks öffnen den Zielkatalog; dort müssen Bestand, Varianten und Checkout geprüft werden." },
  ],
  es: [
    { q: "¿Qué ocurre al llegar al almacén?", a: "La guía inicial de OOPBUY indica que los artículos se inspeccionan y fotografían. Las imágenes documentan lo recibido; no garantizan material, autenticidad ni durabilidad." },
    { q: "¿Cuál es el plazo de devolución?", a: "La información oficial indica cinco días o 120 horas desde la entrada en almacén. Comprueba el estado del pedido y la norma vigente antes de depender del plazo." },
    { q: "¿Cuánto dura el almacenamiento?", a: "La ayuda oficial indica un periodo de 90 días. Las políticas pueden cambiar; no conviene utilizar todo el plazo como plan predeterminado." },
    { q: "¿Los precios USD incluyen la entrega?", a: "No. Son conversiones aproximadas con 1 USD ≈ 6,72 CNY el 1 de septiembre de 2026. Transporte nacional, servicios, embalaje y envío internacional van aparte." },
    { q: "¿OOPBUY cobra comisión de servicio?", a: "Dos textos oficiales deben leerse juntos: Service & Fees dice que no hay otros cargos fuera de producto, envío, aduana y opciones, mientras el acuerdo de registro menciona un 8 % de tarifa de plataforma. Comprueba el checkout desglosado." },
    { q: "¿La estimación de envío es definitiva?", a: "No. El tutorial diferencia el coste estimado del coste real después de embalar. Peso, dimensiones, ruta y protección pueden cambiarlo." },
    { q: "¿Qué productos pueden estar restringidos?", a: "Las listas oficiales incluyen tabaco, alcohol, contrabando, cuchillos y también alimentos y medicinas. Revisa las reglas actuales del destino y la ruta antes de pedir y consolidar." },
    { q: "¿Dónde se ve el seguimiento?", a: "El tutorial oficial indica que el seguimiento aparece en “My Waybill” después del envío y que se facilita un número de rastreo." },
    { q: "¿Este sitio vende o envía productos?", a: "No. Es un índice independiente. Los enlaces abren el catálogo de destino, donde debes confirmar disponibilidad, opciones y compra." },
  ],
  fr: [
    { q: "Que se passe-t-il à l’arrivée en entrepôt ?", a: "Le guide débutant OOPBUY indique que les articles sont contrôlés et photographiés. Ces images documentent l’article reçu sans garantir matière, authenticité ou durabilité." },
    { q: "Quel est le délai de retour ?", a: "La documentation officielle indique cinq jours, soit 120 heures, après l’entrée en stock. Vérifiez toujours le statut et la règle en vigueur." },
    { q: "Quelle est la durée de stockage ?", a: "L’aide officielle mentionne 90 jours. La règle pouvant évoluer, n’utilisez pas toute cette période comme plan par défaut." },
    { q: "Les prix USD incluent-ils la livraison ?", a: "Non. Ce sont des conversions indicatives avec 1 USD ≈ 6,72 CNY au 1er septembre 2026. Transport national, services, emballage et livraison internationale sont séparés." },
    { q: "OOPBUY facture-t-il des frais de service ?", a: "Deux textes officiels doivent être lus ensemble : Service & Fees ne cite que produit, livraison, douane et options, tandis que l’accord d’inscription mentionne 8 % de frais de plateforme. Vérifiez le paiement détaillé en direct." },
    { q: "L’estimation de livraison est-elle finale ?", a: "Non. Le tutoriel distingue estimation et coût réel après emballage. Poids, dimensions, route et protection peuvent modifier le montant." },
    { q: "Quels produits peuvent être restreints ?", a: "Les listes officielles citent notamment tabac, alcool, contrebande, couteaux, aliments et médicaments. Vérifiez les règles actuelles du pays et de la route avant achat et consolidation." },
    { q: "Où trouver le suivi ?", a: "Le tutoriel officiel indique que le suivi est disponible dans “My Waybill” après expédition et qu’un numéro est fourni." },
    { q: "Ce site vend-il ou expédie-t-il ?", a: "Non. Il s’agit d’un index indépendant. Les liens ouvrent le catalogue cible où disponibilité, options et paiement doivent être confirmés." },
  ],
  it: [
    { q: "Cosa succede all’arrivo in magazzino?", a: "La guida iniziale OOPBUY dice che gli articoli vengono controllati e fotografati. Le immagini documentano ciò che è arrivato, ma non garantiscono materiale, autenticità o durata." },
    { q: "Quanto dura la finestra di reso?", a: "Le indicazioni ufficiali riportano cinque giorni, cioè 120 ore, dall’ingresso in magazzino. Verifica sempre stato e regola corrente." },
    { q: "Quanto dura lo stoccaggio?", a: "L’assistenza ufficiale indica 90 giorni. La politica può cambiare: non usare l’intero periodo come piano predefinito." },
    { q: "I prezzi USD includono la consegna?", a: "No. Sono conversioni indicative con 1 USD ≈ 6,72 CNY al 1° settembre 2026. Trasporto nazionale, servizi, imballaggio e spedizione internazionale sono separati." },
    { q: "OOPBUY applica una commissione di servizio?", a: "Due testi ufficiali vanno letti insieme: Service & Fees cita solo prodotto, spedizione, dogana e opzioni, mentre l’accordo di registrazione menziona l’8% di costo piattaforma. Controlla il checkout dettagliato." },
    { q: "La stima di spedizione è definitiva?", a: "No. Il tutorial distingue la stima dal costo reale dopo l’imballaggio. Peso, dimensioni, rotta e protezione possono cambiare il totale." },
    { q: "Quali prodotti possono essere limitati?", a: "Le liste ufficiali citano tabacco, alcol, contrabbando, coltelli, alimenti e medicine. Verifica le regole attuali di destinazione e rotta prima dell’acquisto e del consolidamento." },
    { q: "Dove si vede il tracking?", a: "Il tutorial ufficiale indica che il tracciamento è disponibile in “My Waybill” dopo la spedizione e che viene fornito un numero." },
    { q: "Questo sito vende o spedisce prodotti?", a: "No. È un indice indipendente. I link aprono il catalogo di destinazione, dove vanno confermati disponibilità, opzioni e checkout." },
  ],
};

export type Article = { slug: string; title: string; deck: string; readTime: string; sections: { heading: string; paragraphs: string[] }[]; sources?: { label: string; href: string }[] };

const sharedArticleBodies: Record<Locale, Record<string, { headings: string[]; paragraphs: string[][] }>> = {
  en: {
    "oopbuy-spreadsheet-workflow": {
      headings: ["Start with the destination, not the thumbnail", "Keep a product trail", "Use price as a filter, not a promise", "Separate discovery from verification", "Make the warehouse decision reversible", "Build a parcel shortlist", "Recheck before payment", "The repeatable workflow"],
      paragraphs: [
        ["A useful OOPBUY spreadsheet is not a gallery. Its job is to shorten the distance between a vague idea and a product route that can still be checked. Begin with the category, intended use and acceptable total budget. Then compare the first image and listing title with the destination page. A striking thumbnail can earn attention, but it should never carry the decision by itself.", "Open the product route before adding it anywhere. Confirm that the destination still loads, the displayed options resemble the spreadsheet description and the price has not moved beyond your range. If the route has vanished or materially changed, treat the row as stale. A smaller current sheet is more useful than a giant archive with broken trails."],
        ["Record the destination URL, product ID, seller or source route, selected option, size and expected color. This small trail matters because the listing you first saw, the item you order and the item that reaches the warehouse are three separate checkpoints. Without notes, it is easy to compare a QC image against memory rather than against the actual option selected.", "Use one line per intended order, even if several variants share the same page. Add a date because price, stock and imagery can change. Screenshots can support the trail, but the URL and product ID remain easier to search. The goal is not bureaucracy; it is enough context to make a fast, defensible decision later."],
        ["The USD figures in this index are approximate conversions of the product price. They do not include domestic freight, optional services, packing or international shipment. That distinction should shape how the spreadsheet is used: product price helps screen a category, while landed cost determines whether the purchase still makes sense.", "Avoid comparing two products only by the converted number. A bulky low-price item can cost more to ship than a compact higher-price item. A seller may also charge domestic freight or use packaging that changes volume. Keep a separate shipping allowance and update it when actual warehouse measurements become available."],
        ["Discovery asks whether a route is worth opening. Verification asks whether the route, option and received item match the plan. Mixing those jobs creates false confidence. A curated card can save time, but it does not certify a seller, fabric, brand claim or future stock. The destination page and warehouse evidence still need their own review.", "Use filters to create a shortlist, then stop browsing and verify it. Compare names, option images, size information and visible seller details. If a critical attribute cannot be confirmed, note it as uncertainty rather than filling the gap with an assumption. Good research makes unknowns visible."],
        ["OOPBUY’s help flow says warehouse arrivals are quality-inspected and photographed, and its return guidance states a five-day or 120-hour window after warehousing. That makes the inspection stage time-sensitive. Review photos when they arrive, not when you are ready to submit a parcel weeks later.", "Compare the photos with the product trail. Look for the selected color, size label, quantity, obvious shape differences, surface marks and major construction issues visible from the supplied angles. If evidence is unclear, use the platform’s available service flow while the order remains actionable. A QC photo is evidence, not a blanket guarantee."],
        ["Once several items are in storage, create a parcel shortlist rather than automatically combining everything. Note obvious restrictions, fragile parts, footwear boxes and items likely to create unused volume. The cheapest product collection can become an expensive parcel if its shape is inefficient.", "Group items only when the combination helps. Estimate actual and volumetric weight, consider whether removing packaging changes protection, and keep a margin for final materials. OOPBUY provides a shipping estimator, but estimates become more useful when the inputs reflect the likely packed parcel rather than wishful item weights."],
        ["Before paying for international shipping, repeat a compact audit. Check destination address, declared item list, selected route, restrictions, insurance or service choices, and the final charge. Compare the rate against transit expectations and tracking level instead of treating the lowest number as automatically best.", "Also save the parcel reference and the exact items included. If a later question arises, you should be able to reconstruct which warehouse items were combined and what service was purchased. This closes the product trail that began with the spreadsheet row."],
        ["A dependable spreadsheet workflow is therefore simple: define the need, open the current route, record the option, verify warehouse evidence, model shipping and audit the parcel. Each step has a different purpose, and no single image or badge replaces the others.", "Use this site as the discovery layer and the destination catalog as the transaction layer. Recheck facts at every handoff. That discipline is less exciting than chasing the longest list, but it produces faster decisions, clearer records and fewer avoidable surprises."],
      ],
    },
    "oopbuy-qc-photo-checklist": {
      headings: ["What QC photos can and cannot prove", "Create a reference set", "Shoes and structured items", "Clothing, jerseys and prints", "Bags and accessories", "Ask category-specific questions", "Act inside the decision window", "A compact QC scorecard"],
      paragraphs: [
        ["Warehouse QC photos are a checkpoint between purchase and international shipment. They can show the received color, quantity, visible labels, general shape and some surface defects. They cannot reliably prove material composition, authenticity, comfort, internal construction or long-term durability. Treating that boundary seriously prevents both false reassurance and unreasonable expectations.", "The goal is not to declare an item perfect from a few images. It is to decide whether the visible evidence is consistent with the ordered option and whether any concern is large enough to pause the parcel. Your checklist should make that decision repeatable across categories."],
        ["Before photos arrive, save the destination image, selected option, size, color and any measurements that drove the purchase. Without a reference set, the QC review becomes a memory test. Product pages can change after the order, so keep a dated record of what you expected.", "Compare like with like. A studio image uses controlled light and angles; a warehouse image may use flat lighting and compression. Focus first on objective mismatches: wrong color family, wrong size label, missing quantity, different panel layout or an obviously different graphic. Minor color shifts alone need caution."],
        ["For shoes, begin with the pair as a whole. Check that left and right match in model, color and size. Compare toe shape, panel alignment, sole profile, visible glue marks and symmetry from equivalent angles. If a box matters to your shipment plan, verify its condition separately from the footwear.", "Structured items also reveal problems through silhouette. A collapsed upper may reflect packing rather than construction, while a strongly distorted sole or mismatched panel can be more consequential. Request or use additional evidence only for a specific unanswered question; more photos without a question often add noise."],
        ["For clothing, verify the size tag, color, front and back, graphic placement, obvious stains and major seam problems. If measurements are supplied, compare them with the listing method rather than assuming every seller measures from the same points. A nominal size is less informative than actual garment dimensions.", "Jerseys and printed shirts deserve close attention to names, numbers, badges and alignment. Compression can blur edges, so distinguish a photographic limitation from an obvious placement error. Fold lines are usually different from permanent print damage; inspect continuity across the fold before deciding."],
        ["For bags, check the overall shape, handles, strap count, closures, major edge finishing and visible hardware consistency. Ask whether the item appears complete for the selected option. A single front image rarely answers those questions, so use the available angles methodically.", "Small accessories need a quantity check and scale reference. Product pages may show a styled set while the selected option contains one piece. Match the option text and expected contents rather than the marketing composition of the first image."],
        ["A strong QC request names the exact uncertainty: photograph the size label, measure the insole, show the back graphic, confirm the accessory count. Vague requests such as ‘check quality’ do not define a pass condition and may not generate useful evidence.", "Prioritize questions that could change the decision. If an answer would not lead you to keep, return or exchange the item, it may not be worth delaying the order. This keeps the review focused and respects the limited information photography can provide."],
        ["Official OOPBUY guidance states a five-day or 120-hour return and exchange window after warehousing. Policies and eligibility can vary, so confirm the live order status. The operational lesson is stable: review promptly while the decision may still be reversible.", "Do not wait until parcel submission to revisit old photos. Set a simple routine: receive notification, compare the reference set, log concerns and use the platform’s current support flow when necessary. Storage time is not the same as return time."],
        ["Score each item on four questions: is it the ordered option, is the quantity correct, are visible defects acceptable, and is any critical evidence missing? Mark each yes, no or uncertain. An uncertain critical point should trigger a targeted follow-up, not an invented answer.", "The scorecard makes decisions comparable and leaves a record for parcel planning. It does not guarantee quality; it documents why the visible evidence was accepted. That is the right role for QC in an independent, evidence-first workflow."],
      ],
    },
    "oopbuy-shipping-cost-planner": {
      headings: ["Product price is not landed cost", "Actual versus volumetric weight", "Estimate before ordering", "Use warehouse data", "Compare routes as services", "Packaging trade-offs", "Keep restrictions visible", "Close the plan with a range"],
      paragraphs: [
        ["A low product price can dominate the buying decision even though international shipping later becomes the largest line item. A better plan separates product cost, domestic freight, service fees, packaging, international freight and any destination charges. Not every component is known at the start, but naming them prevents the first converted price from being mistaken for a delivered total.", "Use a range rather than a single optimistic number. The lower bound can assume compact packing and a suitable economy route; the upper bound should allow for measured volume, route limits and necessary protection. If the purchase only makes sense at the lower bound, the margin is too fragile."],
        ["Carriers may charge by actual weight or by a volumetric calculation based on parcel dimensions. The billed value is often the greater of the two under the route’s rules. This is why light but bulky items can be expensive and why package dimensions deserve the same attention as kilograms.", "Do not apply one universal divisor or formula to every line. Route definitions can differ. Use the estimator and live route details for the relevant destination, then compare them with warehouse measurements. The concept is general; the exact billing rule belongs to the chosen service."],
        ["Before ordering, estimate category weight and volume with a conservative allowance. Footwear boxes, padded coats and rigid bags are obvious volume drivers. Small apparel may compress, but protection, consolidation and final packing still add material.", "Create three scenarios: item alone, likely combined parcel and a bulky outcome. You are not trying to predict the final invoice exactly. You are testing whether reasonable outcomes fit the budget and whether a different product or packaging choice would materially change the result."],
        ["After warehousing, replace assumptions with available item weights, dimensions and photos. Check whether packaging is larger than expected and whether several items nest efficiently. This is the moment when a rough model becomes a parcel decision.", "OOPBUY offers a shipping estimator. Feed it realistic packed inputs and treat the result as a planning figure until the final parcel is confirmed. If an item is unusually shaped, leave a margin rather than forcing the model to match the number you hoped to see."],
        ["A shipping route is a bundle of price, estimated transit, tracking, eligible item types, size limits and operational risk. Compare those attributes in a small table. The cheapest headline rate may exclude the item, use a different billing rule or offer a service level that does not fit your needs.", "Match the route to the parcel and your tolerance. A time-sensitive parcel needs a different decision from a low-value, non-urgent one. Record why you chose the service so that later performance can improve the next estimate."],
        ["Removing retail boxes can reduce volume, but packaging also protects the item. The right decision depends on whether the box has value, whether the product is structurally vulnerable and how much chargeable volume the removal is likely to save.", "Avoid treating package removal as a universal trick. Ask what problem it solves and what risk it adds. Consolidation can also save space, but an overfilled parcel may require protection or exceed a route limit. Optimize the whole parcel, not one measurement."],
        ["Battery items, liquids, branded goods, magnets and other categories may face route restrictions. The relevant rule is the current rule shown for the destination and parcel contents. A spreadsheet cannot permanently certify route eligibility.", "Mark potentially restricted items at the shortlist stage. When they reach the warehouse, check the live options before combining them with unrestricted goods. One item can narrow the routes available to an entire parcel, so restriction visibility is part of cost planning."],
        ["Finish with a low, expected and high landed-cost range. Update the range after warehouse measurements and again at parcel checkout. Include a note for unknown destination charges rather than silently setting them to zero.", "The purpose of the planner is not perfect prediction. It is to expose which assumptions control the decision: weight, volume, packaging, route or restriction. When those assumptions become facts, update the model. That turns shipping from a late surprise into a managed checkpoint."],
      ],
    },
  },
  de: {}, es: {}, fr: {}, it: {},
};

const articleMeta: Record<Locale, { slug: string; title: string; deck: string; readTime: string }[]> = {
  en: [
    { slug: "oopbuy-spreadsheet-workflow", title: "How to use an OOPBUY spreadsheet without losing the product trail", deck: "A durable workflow from first click to parcel submission.", readTime: "10 min read" },
    { slug: "oopbuy-qc-photo-checklist", title: "OOPBUY QC photos: a category-by-category inspection framework", deck: "What warehouse images can prove, what they cannot, and what to check next.", readTime: "9 min read" },
    { slug: "oopbuy-shipping-cost-planner", title: "OOPBUY shipping cost planning: weight, volume and decision points", deck: "Model a realistic range before the parcel becomes expensive to change.", readTime: "9 min read" },
  ],
  de: [
    { slug: "oopbuy-spreadsheet-workflow", title: "OOPBUY-Tabellen nutzen, ohne die Produktspur zu verlieren", deck: "Ein belastbarer Ablauf vom ersten Klick bis zur Paketeinreichung.", readTime: "10 Min." },
    { slug: "oopbuy-qc-photo-checklist", title: "OOPBUY-QC-Fotos: Prüfschema nach Kategorie", deck: "Was Lagerbilder zeigen können, was nicht und was als Nächstes zählt.", readTime: "9 Min." },
    { slug: "oopbuy-shipping-cost-planner", title: "OOPBUY-Versand planen: Gewicht, Volumen und Entscheidungen", deck: "Eine realistische Spanne, bevor Änderungen am Paket teuer werden.", readTime: "9 Min." },
  ],
  es: [
    { slug: "oopbuy-spreadsheet-workflow", title: "Cómo usar una hoja OOPBUY sin perder el rastro", deck: "Un proceso sólido desde el primer clic hasta el envío del paquete.", readTime: "10 min" },
    { slug: "oopbuy-qc-photo-checklist", title: "Fotos QC de OOPBUY: inspección por categorías", deck: "Qué pueden demostrar las imágenes, qué no y qué revisar después.", readTime: "9 min" },
    { slug: "oopbuy-shipping-cost-planner", title: "Planificar el envío OOPBUY: peso, volumen y decisiones", deck: "Calcula un rango realista antes de que cambiar el paquete sea caro.", readTime: "9 min" },
  ],
  fr: [
    { slug: "oopbuy-spreadsheet-workflow", title: "Utiliser un tableau OOPBUY sans perdre la trace du produit", deck: "Un parcours solide du premier clic à la soumission du colis.", readTime: "10 min" },
    { slug: "oopbuy-qc-photo-checklist", title: "Photos QC OOPBUY : contrôle par catégorie", deck: "Ce que les images prouvent, leurs limites et la suite du contrôle.", readTime: "9 min" },
    { slug: "oopbuy-shipping-cost-planner", title: "Planifier les frais OOPBUY : poids, volume et décisions", deck: "Modélisez une fourchette avant que le colis soit coûteux à modifier.", readTime: "9 min" },
  ],
  it: [
    { slug: "oopbuy-spreadsheet-workflow", title: "Usare un foglio OOPBUY senza perdere il percorso del prodotto", deck: "Un flusso affidabile dal primo clic all’invio del pacco.", readTime: "10 min" },
    { slug: "oopbuy-qc-photo-checklist", title: "Foto QC OOPBUY: controllo per categoria", deck: "Cosa possono dimostrare le immagini, i loro limiti e il controllo successivo.", readTime: "9 min" },
    { slug: "oopbuy-shipping-cost-planner", title: "Pianificare la spedizione OOPBUY: peso, volume e decisioni", deck: "Definisci un intervallo realistico prima che modificare il pacco costi troppo.", readTime: "9 min" },
  ],
};

const translatedFramework: Record<Exclude<Locale, "en">, Record<string, { headings: string[]; paragraphs: string[][] }>> = {
  de: {
    "oopbuy-spreadsheet-workflow": { headings: ["Mit dem Ziel beginnen", "Produktspur sichern", "Preis richtig lesen", "Entdecken und Prüfen trennen", "Im Lager entscheiden", "Paket planen", "Vor Zahlung prüfen", "Der wiederholbare Ablauf"], paragraphs: [
      ["Eine gute Tabelle ist keine Bildergalerie. Sie führt von einer Idee zu einer aktuellen, prüfbaren Produktseite. Lege zuerst Kategorie, Nutzung und Gesamtbudget fest. Öffne dann die Zielseite und vergleiche Bild, Titel, Varianten und Preis. Ist die Route verschwunden oder stark verändert, gilt der Eintrag als veraltet."],
      ["Notiere URL, Produkt-ID, gewählte Variante, Größe, Farbe und Datum. Bestellung, Lagerartikel und ursprünglicher Fund sind drei getrennte Kontrollpunkte. Eine kurze Dokumentation verhindert, dass spätere QC-Fotos nur mit einer vagen Erinnerung verglichen werden."],
      ["USD-Angaben sind ungefähre Umrechnungen des Produktpreises. Inlandsfracht, Service, Verpackung und internationaler Versand fehlen. Nutze den Preis zum Filtern, aber entscheide anhand einer realistischen Gesamtkostenspanne. Leichte, sperrige Waren können teurer sein als kompaktere Produkte."],
      ["Kuration spart Suchzeit, zertifiziert aber weder Verkäufer noch Material oder Verfügbarkeit. Erstelle erst eine kleine Auswahl und prüfe danach jede Route. Unbestätigte Merkmale bleiben als Unsicherheit markiert; gute Recherche macht Lücken sichtbar, statt sie mit Annahmen zu füllen."],
      ["Laut offizieller Hilfe werden Wareneingänge geprüft und fotografiert; die Rückgabehinweise nennen fünf Tage beziehungsweise 120 Stunden nach Einlagerung. Vergleiche Bilder zeitnah mit deiner Produktspur und prüfe Farbe, Größenetikett, Menge, Form und sichtbare Schäden."],
      ["Kombiniere nicht automatisch alle Lagerartikel. Schätze Ist- und Volumengewicht, berücksichtige Kartons, Schutz und Einschränkungen. Nutze den Versandkalkulator mit realistischen Packmaßen und plane einen Puffer für endgültiges Verpackungsmaterial."],
      ["Prüfe vor internationaler Zahlung Adresse, Artikelliste, Route, Einschränkungen, Zusatzleistungen und Endbetrag. Speichere Paketreferenz und Inhalt. So bleibt nachvollziehbar, welche Lagerartikel mit welchem Service verschickt wurden."],
      ["Der Ablauf lautet: Bedarf definieren, aktuelle Route öffnen, Variante dokumentieren, Lagerbilder prüfen, Versand modellieren und Paket auditieren. Nutze diese Seite zur Entdeckung und den Zielkatalog für die Transaktion. Fakten werden an jedem Übergang erneut geprüft."],
    ]},
    "oopbuy-qc-photo-checklist": { headings: ["Möglichkeiten und Grenzen", "Referenz sichern", "Schuhe", "Bekleidung", "Taschen", "Gezielt fragen", "Frist beachten", "QC-Scorecard"], paragraphs: [
      ["QC-Fotos zeigen Farbe, Menge, sichtbare Etiketten, Grundform und einige Oberflächenfehler. Material, Echtheit, Komfort, Innenaufbau oder Haltbarkeit beweisen sie nicht. Ziel ist eine begründete Entscheidung, ob der sichtbare Artikel zur gewählten Variante passt."],
      ["Speichere vorab Zielbild, Variante, Größe, Farbe und wichtige Maße. Produktseiten können sich ändern. Vergleiche objektive Punkte und berücksichtige Unterschiede durch Licht, Winkel und Kompression."],
      ["Prüfe bei Schuhen Paarigkeit, Größe, Farbe, Zehenform, Paneele, Sohlenprofil, Symmetrie und sichtbare Klebespuren. Wenn der Karton wichtig ist, bewerte ihn getrennt. Zusätzliche Fotos sollten eine konkrete offene Frage beantworten."],
      ["Bei Kleidung zählen Größenetikett, Vorder- und Rückseite, Farbe, Druckposition, Flecken, Nähte und tatsächliche Maße. Bei Trikots Namen, Nummern und Abzeichen prüfen. Falten sind von dauerhaften Druckschäden zu unterscheiden."],
      ["Bei Taschen Gesamtform, Griffe, Gurte, Verschlüsse, Kanten und sichtbare Beschläge prüfen. Bei kleinen Accessoires Menge und Maßstab mit der gewählten Option abgleichen; Marketingbilder können ein Set zeigen, obwohl nur ein Teil gewählt wurde."],
      ["Eine gute Anfrage benennt die Unsicherheit: Größenetikett zeigen, Innensohle messen, Rückendruck fotografieren oder Teilezahl bestätigen. ‚Qualität prüfen‘ hat kein klares Bestehenskriterium und liefert oft wenig nutzbare Belege."],
      ["Offizielle Hinweise nennen fünf Tage beziehungsweise 120 Stunden nach Einlagerung. Prüfe Status und aktuelle Regel und handle früh. Lagerdauer und Rückgabefrist sind nicht dasselbe."],
      ["Bewerte vier Fragen mit Ja, Nein oder Unklar: richtige Variante, richtige Menge, akzeptable sichtbare Fehler, vollständige kritische Belege. Ein unklares kritisches Merkmal führt zu einer gezielten Nachfrage, nicht zu einer erfundenen Antwort."],
    ]},
    "oopbuy-shipping-cost-planner": { headings: ["Gesamtkosten", "Gewicht und Volumen", "Vorab schätzen", "Lagerdaten nutzen", "Routen vergleichen", "Verpackung", "Einschränkungen", "Mit einer Spanne planen"], paragraphs: [
      ["Trenne Produkt, Inlandsfracht, Services, Verpackung, internationalen Versand und mögliche Zielabgaben. Plane eine untere, erwartete und obere Gesamtkostengrenze. Funktioniert der Kauf nur im optimistischen Fall, ist die Reserve zu klein."],
      ["Je nach Route zählt Ist- oder Volumengewicht. Deshalb können leichte, große Artikel teuer werden. Nutze keine universelle Formel; die konkrete Abrechnungsregel gehört zur gewählten Route."],
      ["Schätze Gewicht und Volumen konservativ. Schuhkartons, Jacken und starre Taschen treiben Volumen. Erstelle Szenarien für Einzelartikel, Kombination und sperrige Verpackung, um die Budgettauglichkeit zu testen."],
      ["Ersetze nach Einlagerung Annahmen durch verfügbare Maße, Gewichte und Fotos. Der OOPBUY-Rechner hilft bei der Planung, bleibt aber bis zur Paketbestätigung eine Schätzung. Ungewöhnliche Formen brauchen Puffer."],
      ["Vergleiche Preis, Laufzeit, Tracking, erlaubte Waren, Größenlimits und Abrechnungsregel. Die billigste Rate kann unpassend sein. Wähle nach Paket, Dringlichkeit und Risikotoleranz und dokumentiere den Grund."],
      ["Kartons zu entfernen kann Volumen sparen, reduziert aber Schutz. Entscheide nach Produktanfälligkeit, Wert der Verpackung und wahrscheinlicher Einsparung. Optimiere das ganze Paket statt nur eine Zahl."],
      ["Akkus, Flüssigkeiten, Magnete und andere Kategorien können Routen begrenzen. Markiere potenzielle Einschränkungen früh und prüfe live, bevor du sie mit freien Waren kombinierst."],
      ["Aktualisiere die Kostenbandbreite mit Lagerdaten und am Checkout. Unbekannte Zielabgaben werden als Unsicherheit notiert, nicht als null angenommen. Der Plan soll die entscheidenden Annahmen sichtbar machen."],
    ]},
  },
  es: {
    "oopbuy-spreadsheet-workflow": { headings: ["Empieza por el destino", "Conserva el rastro", "Lee bien el precio", "Separa descubrir y verificar", "Decide en almacén", "Planifica el paquete", "Revisa antes de pagar", "Proceso repetible"], paragraphs: [
      ["Una buena hoja no es una galería: conecta una idea con una ruta actual que aún puede comprobarse. Define categoría, uso y presupuesto total; abre después el destino y compara imagen, título, variantes y precio. Una ruta desaparecida o muy distinta debe considerarse obsoleta."],
      ["Guarda URL, ID, variante, talla, color y fecha. El hallazgo inicial, el pedido y el artículo de almacén son controles distintos. Una nota breve evita comparar las fotos QC solo con la memoria."],
      ["Los USD son conversiones aproximadas del producto. No incluyen transporte nacional, servicios, embalaje ni envío internacional. Filtra por precio, pero decide con un rango de coste total; un artículo ligero y voluminoso puede salir caro."],
      ["La selección ahorra tiempo, pero no certifica vendedor, material o stock. Crea una lista pequeña y verifica cada ruta. Señala lo desconocido como incertidumbre, sin rellenarlo con suposiciones."],
      ["La ayuda oficial indica inspección y fotografías al entrar en almacén y un plazo de cinco días o 120 horas. Revisa pronto color, talla, cantidad, forma y daños visibles frente a tu registro."],
      ["No agrupes todo automáticamente. Estima peso real y volumétrico, cajas, protección y restricciones. Usa el estimador con medidas de embalaje razonables y deja margen."],
      ["Antes de pagar comprueba dirección, lista, ruta, restricciones, servicios y total. Guarda la referencia y el contenido para saber qué se envió y con qué servicio."],
      ["El flujo es: definir necesidad, abrir ruta, registrar variante, revisar evidencia, modelar envío y auditar paquete. Usa este sitio para descubrir y el catálogo de destino para realizar la operación."],
    ]},
    "oopbuy-qc-photo-checklist": { headings: ["Límites de las fotos", "Crea una referencia", "Calzado", "Ropa", "Bolsos", "Pregunta con precisión", "Actúa a tiempo", "Puntuación QC"], paragraphs: [
      ["Las fotos QC muestran color, cantidad, etiquetas visibles, forma y algunos defectos. No prueban material, autenticidad, comodidad, estructura interna o durabilidad. Sirven para decidir si la evidencia coincide con la opción pedida."],
      ["Guarda antes imagen, opción, talla, color y medidas importantes. Las páginas cambian. Compara diferencias objetivas y considera luz, ángulo y compresión."],
      ["En calzado revisa que el par coincida, talla, color, puntera, paneles, suela, simetría y pegamento visible. Evalúa la caja por separado y pide una foto adicional solo para responder una pregunta concreta."],
      ["En ropa comprueba etiqueta, anverso, reverso, color, impresión, manchas, costuras y medidas. En camisetas deportivas revisa nombres, números e insignias, distinguiendo pliegues de daños permanentes."],
      ["En bolsos revisa forma, asas, correas, cierres, bordes y herrajes visibles. En accesorios pequeños confirma cantidad y escala según la opción; la imagen promocional puede mostrar un conjunto."],
      ["Una buena solicitud dice qué falta: etiqueta, longitud de plantilla, gráfico trasero o número de piezas. ‘Revisar calidad’ no define un resultado útil."],
      ["La información oficial indica cinco días o 120 horas tras la entrada. Verifica la norma y actúa pronto; almacenamiento y devolución no son el mismo plazo."],
      ["Marca sí, no o incierto para variante, cantidad, defectos y evidencia crítica. Una incertidumbre importante requiere una consulta específica, no una respuesta inventada."],
    ]},
    "oopbuy-shipping-cost-planner": { headings: ["Coste total", "Peso y volumen", "Estima antes", "Usa datos reales", "Compara servicios", "Embalaje", "Restricciones", "Trabaja con un rango"], paragraphs: [
      ["Separa producto, transporte nacional, servicios, embalaje, envío internacional y posibles cargos de destino. Crea un escenario bajo, esperado y alto. Si solo funciona el optimista, el margen es débil."],
      ["Según la ruta puede cobrarse peso real o volumétrico. Por eso un objeto ligero y grande cuesta más. No apliques una fórmula universal: usa la regla del servicio elegido."],
      ["Calcula peso y volumen con margen. Cajas de zapatos, abrigos y bolsos rígidos ocupan espacio. Modela artículo solo, paquete combinado y resultado voluminoso."],
      ["En almacén sustituye supuestos por pesos, medidas y fotos disponibles. El estimador OOPBUY ayuda, pero sigue siendo orientativo hasta la confirmación final."],
      ["Compara precio, tránsito, seguimiento, mercancías admitidas, límites y cálculo. La tarifa menor puede no servir. Elige según paquete, urgencia y tolerancia al riesgo."],
      ["Quitar cajas puede reducir volumen y también protección. Decide según fragilidad, valor del embalaje y ahorro probable. Optimiza el paquete completo."],
      ["Baterías, líquidos, imanes y otras categorías pueden limitar rutas. Márcalas pronto y comprueba opciones vigentes antes de combinar artículos."],
      ["Actualiza el rango con datos de almacén y en checkout. Registra cargos desconocidos como incertidumbre, no como cero. El plan revela qué supuestos controlan el coste."],
    ]},
  },
  fr: {
    "oopbuy-spreadsheet-workflow": { headings: ["Commencer par la destination", "Garder la trace", "Lire le prix", "Séparer découverte et contrôle", "Décider à l’entrepôt", "Planifier le colis", "Vérifier avant paiement", "Le parcours reproductible"], paragraphs: [
      ["Un bon tableau n’est pas une galerie. Il relie une idée à une route actuelle et vérifiable. Définissez catégorie, usage et budget total, puis ouvrez la destination et comparez image, titre, options et prix. Une route absente ou très modifiée est obsolète."],
      ["Conservez URL, identifiant, option, taille, couleur et date. La découverte, la commande et l’article reçu sont trois contrôles distincts. Cette trace évite de comparer les photos QC à un simple souvenir."],
      ["Les USD sont des conversions indicatives du produit, sans transport national, service, emballage ni envoi international. Filtrez par prix, mais décidez avec une fourchette de coût rendu. Un article léger et volumineux peut être coûteux."],
      ["La sélection réduit la recherche sans certifier vendeur, matière ou stock. Faites une liste courte puis vérifiez chaque route. Une donnée inconnue reste une incertitude, pas une supposition."],
      ["L’aide officielle mentionne contrôle et photos à l’arrivée et un délai de cinq jours ou 120 heures. Comparez rapidement couleur, taille, quantité, forme et défauts à votre référence."],
      ["Ne regroupez pas tout automatiquement. Estimez poids réel et volumétrique, boîtes, protection et restrictions. Utilisez l’estimateur avec des dimensions réalistes et une marge."],
      ["Avant paiement, vérifiez adresse, contenu, route, restrictions, services et total. Gardez la référence du colis et ses articles pour reconstruire l’expédition."],
      ["Le parcours : définir le besoin, ouvrir la route, noter l’option, contrôler les images, modéliser l’envoi et auditer le colis. Ce site sert à découvrir; le catalogue cible sert à la transaction."],
    ]},
    "oopbuy-qc-photo-checklist": { headings: ["Portée et limites", "Créer une référence", "Chaussures", "Vêtements", "Sacs", "Questions précises", "Agir à temps", "Fiche QC"], paragraphs: [
      ["Les photos QC montrent couleur, quantité, étiquettes visibles, forme et certains défauts. Elles ne prouvent ni matière, authenticité, confort, structure interne ou durabilité. Elles servent à comparer l’article reçu à l’option commandée."],
      ["Gardez avant achat image, option, taille, couleur et mesures importantes. Les pages changent. Comparez les écarts objectifs en tenant compte de la lumière, de l’angle et de la compression."],
      ["Pour les chaussures, vérifiez paire, taille, couleur, forme, panneaux, semelle, symétrie et colle visible. Contrôlez la boîte séparément et demandez une vue supplémentaire pour une question précise."],
      ["Pour les vêtements, vérifiez étiquette, face, dos, couleur, placement, taches, coutures et mesures. Pour les maillots, contrôlez noms, numéros et badges, en distinguant plis et dégâts."],
      ["Pour les sacs, observez forme, poignées, sangles, fermetures, bords et pièces visibles. Pour les petits accessoires, confirmez quantité et échelle selon l’option choisie."],
      ["Une demande utile nomme le doute : étiquette, longueur intérieure, motif arrière ou nombre de pièces. ‘Contrôler la qualité’ ne définit pas un résultat exploitable."],
      ["La règle officielle mentionne cinq jours ou 120 heures après stockage. Vérifiez le statut et agissez tôt; durée de stockage et délai de retour sont différents."],
      ["Notez oui, non ou incertain pour option, quantité, défauts et preuves critiques. Une incertitude importante déclenche une question ciblée, jamais une réponse inventée."],
    ]},
    "oopbuy-shipping-cost-planner": { headings: ["Coût rendu", "Poids et volume", "Estimer en amont", "Données d’entrepôt", "Comparer les routes", "Emballage", "Restrictions", "Planifier une fourchette"], paragraphs: [
      ["Séparez produit, transport national, services, emballage, international et frais de destination. Créez des scénarios bas, attendu et haut. Si seul le bas fonctionne, la marge est fragile."],
      ["Selon la route, le poids réel ou volumétrique peut être facturé. Un objet léger mais grand devient coûteux. N’utilisez pas une formule unique; appliquez la règle du service."],
      ["Estimez avec prudence. Boîtes à chaussures, manteaux et sacs rigides augmentent le volume. Modélisez article seul, colis combiné et résultat encombrant."],
      ["Après stockage, remplacez les hypothèses par poids, dimensions et photos disponibles. L’estimateur OOPBUY aide mais reste indicatif jusqu’à confirmation du colis."],
      ["Comparez tarif, délai, suivi, marchandises admises, limites et calcul. Le tarif le plus bas peut être inadapté. Choisissez selon urgence et risque."],
      ["Retirer une boîte réduit parfois le volume mais aussi la protection. Décidez selon fragilité, valeur de l’emballage et économie probable. Optimisez le colis entier."],
      ["Batteries, liquides, aimants et autres catégories peuvent réduire les routes. Marquez-les tôt et vérifiez les options en vigueur avant consolidation."],
      ["Actualisez la fourchette avec les données d’entrepôt puis au paiement. Notez les frais inconnus comme incertitude. Le plan révèle les hypothèses qui pilotent le coût."],
    ]},
  },
  it: {
    "oopbuy-spreadsheet-workflow": { headings: ["Parti dalla destinazione", "Conserva il percorso", "Leggi il prezzo", "Separa scoperta e verifica", "Decidi in magazzino", "Pianifica il pacco", "Controlla prima di pagare", "Flusso ripetibile"], paragraphs: [
      ["Un buon foglio non è una galleria: collega un’idea a un percorso attuale e verificabile. Definisci categoria, uso e budget totale, poi apri la destinazione e confronta immagine, titolo, varianti e prezzo. Un percorso sparito o molto cambiato è obsoleto."],
      ["Salva URL, ID, variante, taglia, colore e data. Scoperta, ordine e articolo in magazzino sono tre controlli diversi. Una nota breve evita di confrontare le foto QC solo con la memoria."],
      ["I prezzi USD sono conversioni indicative del prodotto, senza trasporto nazionale, servizi, imballaggio e spedizione internazionale. Filtra per prezzo, ma decidi su un intervallo di costo complessivo."],
      ["La selezione riduce il tempo di ricerca ma non certifica venditore, materiale o disponibilità. Crea una lista corta e verifica ogni percorso. Ciò che non è confermato resta un’incertezza."],
      ["L’assistenza ufficiale indica controllo e foto all’arrivo e una finestra di cinque giorni o 120 ore. Confronta presto colore, taglia, quantità, forma e difetti visibili con il tuo riferimento."],
      ["Non unire tutto automaticamente. Stima peso reale e volumetrico, scatole, protezione e restrizioni. Usa lo strumento con misure plausibili e un margine."],
      ["Prima del pagamento verifica indirizzo, contenuto, percorso, restrizioni, servizi e totale. Conserva riferimento e articoli per ricostruire la spedizione."],
      ["Il flusso: definisci il bisogno, apri la rotta, registra la variante, controlla le immagini, modella la spedizione e verifica il pacco. Questo sito serve alla scoperta; il catalogo di destinazione alla transazione."],
    ]},
    "oopbuy-qc-photo-checklist": { headings: ["Portata e limiti", "Crea un riferimento", "Scarpe", "Abbigliamento", "Borse", "Domande precise", "Agisci in tempo", "Scheda QC"], paragraphs: [
      ["Le foto QC mostrano colore, quantità, etichette visibili, forma e alcuni difetti. Non provano materiale, autenticità, comfort, struttura interna o durata. Servono a confrontare ciò che è arrivato con l’opzione ordinata."],
      ["Salva prima immagine, opzione, taglia, colore e misure importanti. Le pagine possono cambiare. Confronta differenze oggettive considerando luce, angolo e compressione."],
      ["Per le scarpe controlla coppia, taglia, colore, punta, pannelli, suola, simmetria e colla visibile. Valuta la scatola separatamente e chiedi altre foto solo per una domanda precisa."],
      ["Per i capi verifica etichetta, fronte, retro, colore, stampa, macchie, cuciture e misure. Per le maglie controlla nomi, numeri e stemmi distinguendo pieghe e danni."],
      ["Per le borse controlla forma, manici, tracolle, chiusure, bordi e ferramenta visibile. Per piccoli accessori conferma quantità e scala in base all’opzione."],
      ["Una richiesta utile specifica il dubbio: etichetta, soletta, grafica posteriore o numero di pezzi. ‘Controlla la qualità’ non definisce un esito utilizzabile."],
      ["La regola ufficiale indica cinque giorni o 120 ore dopo l’ingresso. Verifica lo stato e agisci presto; stoccaggio e reso non hanno la stessa scadenza."],
      ["Segna sì, no o incerto per variante, quantità, difetti ed evidenza critica. Un’incertezza importante richiede una domanda mirata, non una risposta inventata."],
    ]},
    "oopbuy-shipping-cost-planner": { headings: ["Costo complessivo", "Peso e volume", "Stima prima", "Usa i dati reali", "Confronta le rotte", "Imballaggio", "Restrizioni", "Pianifica un intervallo"], paragraphs: [
      ["Separa prodotto, trasporto nazionale, servizi, imballaggio, spedizione internazionale e oneri a destinazione. Crea scenari basso, atteso e alto. Se funziona solo quello ottimistico, il margine è debole."],
      ["A seconda della rotta può contare il peso reale o volumetrico. Un oggetto leggero e grande può costare molto. Non usare una formula universale: applica la regola del servizio."],
      ["Stima con prudenza. Scatole di scarpe, cappotti e borse rigide aumentano il volume. Modella articolo singolo, pacco combinato e scenario ingombrante."],
      ["In magazzino sostituisci le ipotesi con pesi, misure e foto disponibili. Lo stimatore OOPBUY aiuta, ma resta indicativo fino alla conferma finale."],
      ["Confronta prezzo, tempi, tracking, articoli ammessi, limiti e calcolo. La tariffa più bassa può non essere adatta. Scegli in base a urgenza e rischio."],
      ["Rimuovere scatole può ridurre volume e protezione. Decidi in base a fragilità, valore dell’imballaggio e risparmio probabile. Ottimizza tutto il pacco."],
      ["Batterie, liquidi, magneti e altre categorie possono limitare le rotte. Segnalale subito e verifica le opzioni attuali prima del consolidamento."],
      ["Aggiorna l’intervallo con i dati del magazzino e al checkout. Registra gli oneri sconosciuti come incertezza. Il piano mostra quali ipotesi controllano il costo."],
    ]},
  },
};

for (const locale of ["de", "es", "fr", "it"] as const) {
  sharedArticleBodies[locale] = translatedFramework[locale];
}

const englishArticleAdditions: Record<string, string[]> = {
  "oopbuy-spreadsheet-workflow": [
    "A practical first pass uses exclusion rules. Remove routes outside the intended category, price ceiling or size requirement before comparing aesthetics. This reduces the tendency to justify a visually appealing item after it has already failed a basic constraint. The remaining rows deserve attention because they still fit the brief, not simply because they were placed near the top of a sheet.",
    "If you collaborate with someone else, keep the record readable without private shorthand. A second person should understand which option was chosen and what still needs confirmation. Clear labels also help when product names are generic or translated inconsistently. The product ID becomes the stable lookup key while descriptive notes make the row understandable at a glance.",
    "Currency conversion itself is also time-sensitive. This index uses a reference rate from the review date and rounds to cents for planning. It is not a checkout quote. Recalculate when exchange rates or platform totals matter to the decision, and leave enough headroom that a small movement does not turn a sensible order into an unaffordable parcel.",
    "Verification should be proportional to risk. A low-cost, simple accessory may need fewer checks than footwear with size uncertainty or a listing whose option images differ. Spend research time where a mismatch would be expensive, difficult to return or likely to change shipping. The spreadsheet is most efficient when it helps allocate attention, not only collect links.",
    "When reviewing a warehouse item, distinguish a confirmed mismatch from a question. Wrong quantity or a clearly wrong label can be recorded directly. A color that looks different under warehouse lighting may need comparison or clarification. This language matters because it keeps support requests precise and makes your decision log honest about the strength of the evidence.",
    "The 90-day storage period stated in official help material is a ceiling, not a recommendation to delay every parcel. Longer storage can leave earlier decisions far from their return window and makes the product trail harder to remember. Use storage strategically to consolidate compatible items, while continuing to inspect each arrival when it becomes available.",
    "At parcel checkout, compare the planned range with the actual charge. If the number changed, identify whether weight, volume, packaging, route or service produced the difference. Saving that explanation improves the next order more than recording the total alone. Over time, your estimates become category-specific and more useful than generic weight lists.",
    "Finally, schedule maintenance for the sheet itself. Reopen a sample of routes, remove dead entries, update review dates and avoid presenting an old price as current. A transparent small index earns trust through freshness. The best competitive advantage is not claiming the largest count; it is helping a visitor reach a checkable decision with less wasted motion.",
  ],
  "oopbuy-qc-photo-checklist": [
    "Photo quality also affects interpretation. Wide-angle lenses can exaggerate proportions near the edge, automatic white balance can shift color and compression can hide fine texture. When a concern appears only in one frame, compare other angles before treating it as a confirmed defect. The safest conclusions are tied to features that remain consistent across the available evidence.",
    "Organize references in the same order every time: destination view, selected option, size information and any seller measurement. This makes the warehouse comparison faster and reduces missed checks. If the option was selected from a text menu rather than an image, record the exact wording because similar color names can refer to different variants.",
    "For footwear measurements, confirm what is being measured. Insole length, outsole length and internal usable length are not interchangeable. A requested measurement only helps when it matches the sizing method used in your reference. The same principle applies to shaft height, width and heel dimensions on structured footwear.",
    "For garments, print scale can look different across sizes even when placement is centered. Compare relative alignment with seams, neckline and hem rather than relying only on an isolated studio image. For construction, prioritize open seams, missing parts and clear asymmetry over tiny thread ends that can be difficult to judge from compressed images.",
    "For metal hardware, warehouse photos may show reflections that resemble scratches. Look for the mark across multiple angles and distinguish protective film from the finished surface. If hardware color is a selected attribute, compare all visible pieces for consistency while remembering that lighting can alter warm and cool tones.",
    "Targeted requests should be brief and testable. One request can state the required view and the reason: show the rear print straight-on to confirm alignment, or place a ruler along the garment width to confirm the seller method. This structure gives the photographer a clear task and gives you a defined piece of evidence to evaluate.",
    "Return eligibility can depend on seller rules, item condition and the platform’s current process, not only elapsed time. Do not assume every concern guarantees a return. Use the official order flow, preserve the photos and describe the mismatch objectively. A factual request is easier to assess than a broad claim unsupported by the visible record.",
    "Keep the final QC record concise: accepted, follow-up requested, return attempted or excluded from the parcel. Add the date and reason. This history helps if similar products are considered later, but it should not be generalized into a permanent seller rating from one order. QC evidence is item-specific and time-specific. A useful archive keeps the original reference next to the warehouse evidence and outcome. When a later listing looks similar, compare identifiers and construction details before assuming it is the same source. Sellers, batches, options and photography can change. The earlier record can suggest which questions to ask, but the new item still deserves its own inspection. This prevents a successful past order from turning into automatic confidence and keeps the checklist focused on the evidence available now.",
  ],
  "oopbuy-shipping-cost-planner": [
    "Domestic freight should remain a separate input even when it appears small. Several seller shipments can accumulate before international packing, and some listing prices exclude that leg. Recording it separately makes comparisons fair and prevents an inexpensive product from appearing cheaper only because one component was omitted from the sheet.",
    "To think about volume, sketch the packed shape rather than adding item dimensions mechanically. Soft garments may fill gaps around a rigid box, while two rigid objects may not nest at all. The warehouse packing service determines the final arrangement, but a shape-aware estimate is more realistic than assuming that every individual volume simply disappears during consolidation.",
    "Category estimates should come from your own completed parcels when possible. Record warehouse weight, packed weight, dimensions, route and charge. After several shipments, calculate typical packing overhead for clothing, shoes or accessories. This evidence is more relevant to your choices than an anonymous universal table whose packaging assumptions are unknown.",
    "If the estimator offers several services, use the same plausible parcel inputs for each comparison. Changing both the measurements and the route at once hides why prices differ. A clean comparison holds the parcel constant, then examines billing method, included tracking, size limits and expected transit for each available line.",
    "Transit estimates are ranges, not appointments. Customs processing, handoffs, weather and peak volume can add variability. If arrival by a fixed date is essential, include schedule margin and choose a service consistent with that need. Paying for a faster headline estimate does not remove every source of delay.",
    "Protection choices should be attached to specific risks. Corner protection may matter for a structured object; moisture protection may matter for textiles; a shoe box may preserve shape but add volume. Identify the damage you are trying to prevent, then judge whether the extra weight and dimensions are justified for that item and route.",
    "Restrictions can change with destination, carrier and operational policy. Recheck them at the moment of parcel creation. If a potentially restricted item eliminates preferred services, model it as a separate parcel before paying. Sometimes splitting raises fixed costs; sometimes it preserves a better route for the unrestricted portion. Compare both totals.",
    "After delivery, close the loop with actual transit, tracking quality, condition and total paid. Compare the outcome with the expected scenario and note the largest error. This turns one shipment into evidence for the next. A planner becomes valuable through updates; a one-time estimate that is never reconciled remains only a guess. Keep currency and date beside every historic total so comparisons remain meaningful. Separate a route price change from a better packing estimate, and avoid treating one unusually fast or slow parcel as the permanent norm. With several comparable records, use a range and median rather than the single best outcome. That history creates a planning baseline while leaving room for current route rules, seasonal capacity and the different shape of the next parcel. Record whether the parcel was split, repacked or protected differently, because those choices explain why two similar product lists can produce different final measurements and charges. Context is what turns a number into reusable evidence.",
  ],
};

export function getArticles(locale: Locale): Article[] {
  const existing = articleMeta[locale].map((meta) => {
    const body = sharedArticleBodies[locale][meta.slug] || sharedArticleBodies.en[meta.slug];
    return { ...meta, sections: body.headings.map((heading, index) => ({ heading, paragraphs: locale === "en" ? [...body.paragraphs[index], englishArticleAdditions[meta.slug][index]] : [...body.paragraphs[index], ...splitArticleExpansion(localizedArticleExpansions[locale][meta.slug][index])] })) };
  });
  const [beginner, fees] = researchedArticles[locale];
  return [beginner, existing[0], existing[1], fees, existing[2]];
}

export function homePath(locale: Locale) { return locale === "en" ? "/" : `/${locale}`; }
export function sectionPath(locale: Locale, section: Section) { return `/${locale}/${section}`; }
export function articlePath(locale: Locale, slug: string) { return `/${locale}/articles/${slug}`; }

export function alternateUrls(path: "home" | Section | "article", slug?: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    const route = path === "home" ? homePath(locale) : path === "article" ? articlePath(locale, slug || "") : sectionPath(locale, path);
    languages[locale] = `${SITE_URL}${route}`;
  }
  languages["x-default"] = path === "home" ? SITE_URL : path === "article" ? `${SITE_URL}${articlePath("en", slug || "")}` : `${SITE_URL}${sectionPath("en", path)}`;
  return languages;
}
