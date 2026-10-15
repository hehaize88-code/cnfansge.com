import type { Lang, PageKey } from "./i18n";

export type Copy = {
  nav: string[]; search: string; eyebrow: string; hero: string; intro: string; primary: string; secondary: string;
  verified: string; usd: string; checked: string; categories: string; categoryIntro: string; picks: string; picksIntro: string;
  open: string; source: string; guideTitle: string; guideIntro: string; guides: { tag: string; title: string; text: string }[];
  articles: string; articleIntro: string; articleCards: { title: string; text: string }[]; faq: string;
  faqs: { q: string; a: string }[]; disclaimer: string;
};

export const copies: Record<Lang, Copy> = {
  en: {
    nav: ["Spreadsheet", "Finds", "Guides", "QC", "Shipping", "FAQ", "Articles"], search: "Search products on the main catalog",
    eyebrow: "LitBuy product research with visible evidence", hero: "LitBuy Spreadsheet & Product Finds",
    intro: "Browse a focused LitBuy spreadsheet with matched product routes, USD reference prices, QC photo guidance, warehouse explanations and shipping checklists before opening the final listing.",
    primary: "Browse checked finds", secondary: "Open full spreadsheet", verified: "8 matched routes", usd: "USD reference prices", checked: "Checked 29 Aug 2026",
    categories: "Start with a category", categoryIntro: "Every category opens the corresponding collection on the main catalog.",
    picks: "Product records to compare", picksIntro: "Image, item and destination were matched against the same source page.", open: "Open match", source: "Source price",
    guideTitle: "Use the listing before you use the cart", guideIntro: "Three quick checks solve most expensive mistakes before an order starts.",
    guides: [
      { tag: "01 / QC", title: "Read the photo, not the promise", text: "Check shape, stitching, labels, color and packaging across more than one angle." },
      { tag: "02 / SIZE", title: "Measurements beat letter sizes", text: "Compare garment measurements with something you already own; do not rely on S–XL alone." },
      { tag: "03 / SHIP", title: "Plan chargeable weight early", text: "Bulky packaging can make volumetric weight larger than the item’s scale weight." },
    ],
    articles: "Latest LitBuy guides", articleIntro: "Independent guides built around questions that appear before checkout.",
    articleCards: [
      { title: "How to use a LitBuy spreadsheet without losing the original listing", text: "A repeatable path from category and product ID to the final source page." },
      { title: "QC photo checklist: what a warehouse image can and cannot prove", text: "A practical inspection order for shoes, apparel, bags and accessories." },
      { title: "LitBuy shipping cost: actual, volumetric and chargeable weight", text: "Understand the three numbers before estimating a parcel budget." },
      { title: "LitBuy review 2026: facts, customer themes and buyer checklist", text: "A balanced review of the agent workflow, published policies and recurring customer concerns." },
    ],
    faq: "Fast answers", faqs: [
      { q: "Does litbuys.store process orders?", a: "No. This site is an independent discovery and guide layer. Product actions continue on the linked main catalog." },
      { q: "Are the displayed prices final?", a: "No. USD values are reference conversions from the source listing and can move with exchange rates, options and seller changes." },
      { q: "What does ‘matched route’ mean?", a: "The card image, label and destination were checked against the same product page rather than linked to a generic category." },
    ],
    disclaimer: "Independent product-discovery website. We do not take payment, sell products or promise seller inventory. Final product details are controlled by the linked catalog.",
  },
  de: {
    nav: ["Tabelle", "Funde", "Ratgeber", "QC", "Versand", "FAQ", "Artikel"], search: "Produkte im Hauptkatalog suchen",
    eyebrow: "Ein klarerer Weg zu LitBuy-Produktfunden", hero: "LitBuy Spreadsheet und Produktauswahl",
    intro: "Eine kompakte LitBuy-Fundstelle mit zugeordneten Produktbildern, USD-Richtpreisen, QC-Hilfe und direkten Wegen zum Quellkatalog. Keine leeren Raster und keine unklaren Weiterleitungen.",
    primary: "Geprüfte Funde ansehen", secondary: "Vollständige Tabelle öffnen", verified: "8 geprüfte Ziele", usd: "Richtpreise in USD", checked: "Geprüft am 29. Aug. 2026",
    categories: "Mit einer Kategorie starten", categoryIntro: "Jede Kategorie öffnet die passende Sammlung im Hauptkatalog.",
    picks: "Produkte zum Vergleichen", picksIntro: "Bild, Artikel und Ziel wurden mit derselben Quellseite abgeglichen.", open: "Treffer öffnen", source: "Quellpreis",
    guideTitle: "Prüfe das Listing vor dem Warenkorb", guideIntro: "Drei kurze Prüfungen verhindern die meisten teuren Fehler vor der Bestellung.",
    guides: [
      { tag: "01 / QC", title: "Lies das Foto, nicht das Versprechen", text: "Prüfe Form, Nähte, Etiketten, Farbe und Verpackung aus mehreren Winkeln." },
      { tag: "02 / GRÖSSE", title: "Maße sind besser als Buchstaben", text: "Vergleiche Produktmaße mit eigener Kleidung und verlasse dich nicht nur auf S–XL." },
      { tag: "03 / VERSAND", title: "Früh mit Abrechnungsgewicht planen", text: "Sperrige Verpackung kann das Volumengewicht über das tatsächliche Gewicht heben." },
    ],
    articles: "Neue LitBuy-Ratgeber", articleIntro: "Unabhängige Ratgeber zu Fragen, die vor dem Bezahlen entstehen.",
    articleCards: [
      { title: "Eine LitBuy-Tabelle nutzen, ohne das Original-Listing zu verlieren", text: "Ein nachvollziehbarer Weg von Kategorie und Produkt-ID zur Quellseite." },
      { title: "QC-Fotocheckliste: Was Lagerbilder zeigen können", text: "Eine praktische Prüfreihenfolge für Schuhe, Kleidung, Taschen und Zubehör." },
      { title: "LitBuy-Versandkosten: tatsächliches, Volumen- und Abrechnungsgewicht", text: "Verstehe die drei Zahlen, bevor du dein Paketbudget schätzt." },
      { title: "LitBuy Review 2026: Fakten, Erfahrungen und Checkliste", text: "Eine ausgewogene Prüfung des Ablaufs, der Regeln und wiederkehrender Kundenfragen." },
    ],
    faq: "Kurze Antworten", faqs: [
      { q: "Verarbeitet litbuys.store Bestellungen?", a: "Nein. Die Seite dient unabhängig zur Produktsuche und Information. Produktaktionen werden im verlinkten Hauptkatalog fortgesetzt." },
      { q: "Sind die Preise endgültig?", a: "Nein. Die USD-Werte sind Richtumrechnungen. Wechselkurs, Optionen und Verkäuferänderungen können den Endpreis verändern." },
      { q: "Was bedeutet ‚geprüftes Ziel‘?", a: "Kartenbild, Bezeichnung und Ziel wurden mit derselben Produktseite abgeglichen und führen nicht nur zu einer allgemeinen Kategorie." },
    ],
    disclaimer: "Unabhängige Website zur Produktentdeckung. Wir nehmen keine Zahlungen an, verkaufen keine Waren und garantieren keinen Lagerbestand. Die endgültigen Angaben stammen vom verlinkten Katalog.",
  },
  es: {
    nav: ["Hoja", "Hallazgos", "Guías", "QC", "Envío", "FAQ", "Artículos"], search: "Buscar productos en el catálogo principal",
    eyebrow: "Una ruta más clara para descubrir productos LitBuy", hero: "LitBuy Spreadsheet y selección de productos",
    intro: "Un centro compacto de hallazgos LitBuy con imágenes emparejadas, precios orientativos en USD, ayuda para leer QC y rutas directas al catálogo fuente. Sin cuadrículas vacías ni redirecciones dudosas.",
    primary: "Ver hallazgos revisados", secondary: "Abrir hoja completa", verified: "8 rutas verificadas", usd: "Precios orientativos USD", checked: "Revisado 29 ago 2026",
    categories: "Empieza por una categoría", categoryIntro: "Cada categoría abre la colección correspondiente del catálogo principal.",
    picks: "Productos para comparar", picksIntro: "Imagen, artículo y destino se compararon con la misma página fuente.", open: "Abrir coincidencia", source: "Precio fuente",
    guideTitle: "Usa el anuncio antes que el carrito", guideIntro: "Tres comprobaciones rápidas evitan la mayoría de errores caros antes de pedir.",
    guides: [
      { tag: "01 / QC", title: "Lee la foto, no la promesa", text: "Comprueba forma, costuras, etiquetas, color y embalaje desde varios ángulos." },
      { tag: "02 / TALLA", title: "Las medidas ganan a las letras", text: "Compara las medidas con una prenda tuya; no dependas solo de S–XL." },
      { tag: "03 / ENVÍO", title: "Planifica pronto el peso facturable", text: "Un embalaje voluminoso puede elevar el peso volumétrico sobre el real." },
    ],
    articles: "Últimas guías de LitBuy", articleIntro: "Guías independientes basadas en preguntas anteriores al pago.",
    articleCards: [
      { title: "Cómo usar una hoja LitBuy sin perder el anuncio original", text: "Una ruta repetible desde categoría e ID hasta la página fuente." },
      { title: "Lista QC: lo que una foto de almacén puede demostrar", text: "Orden práctico de revisión para calzado, ropa, bolsos y accesorios." },
      { title: "Envío LitBuy: peso real, volumétrico y facturable", text: "Entiende los tres números antes de calcular el presupuesto del paquete." },
      { title: "Reseña de LitBuy 2026: datos, opiniones y checklist", text: "Un análisis equilibrado del proceso, las políticas y los temas de clientes." },
    ],
    faq: "Respuestas rápidas", faqs: [
      { q: "¿litbuys.store procesa pedidos?", a: "No. Es una capa independiente de descubrimiento y guía. Las acciones continúan en el catálogo principal enlazado." },
      { q: "¿Los precios son definitivos?", a: "No. Los valores USD son conversiones orientativas y pueden cambiar por divisa, opciones o vendedor." },
      { q: "¿Qué significa ruta verificada?", a: "Imagen, nombre y destino se compararon con la misma ficha de producto, no con una categoría genérica." },
    ],
    disclaimer: "Web independiente de descubrimiento. No cobramos, vendemos ni garantizamos inventario. Los datos finales dependen del catálogo enlazado.",
  },
  fr: {
    nav: ["Tableur", "Sélection", "Guides", "QC", "Livraison", "FAQ", "Articles"], search: "Rechercher dans le catalogue principal",
    eyebrow: "Un chemin plus clair vers les trouvailles LitBuy", hero: "LitBuy Spreadsheet et sélection de produits",
    intro: "Un bureau compact de trouvailles LitBuy avec images associées, prix indicatifs en USD, aide QC et accès direct au catalogue source. Aucun catalogue vide ni redirection obscure.",
    primary: "Voir les trouvailles vérifiées", secondary: "Ouvrir le tableur complet", verified: "8 routes vérifiées", usd: "Prix indicatifs USD", checked: "Vérifié le 29 août 2026",
    categories: "Commencer par une catégorie", categoryIntro: "Chaque catégorie ouvre la collection correspondante du catalogue principal.",
    picks: "Produits à comparer", picksIntro: "Image, article et destination ont été comparés à la même page source.", open: "Ouvrir la fiche", source: "Prix source",
    guideTitle: "Lisez la fiche avant le panier", guideIntro: "Trois contrôles rapides évitent la plupart des erreurs coûteuses avant commande.",
    guides: [
      { tag: "01 / QC", title: "Lisez la photo, pas la promesse", text: "Contrôlez forme, coutures, étiquettes, couleur et emballage sous plusieurs angles." },
      { tag: "02 / TAILLE", title: "Les mesures valent mieux que les lettres", text: "Comparez avec un vêtement que vous possédez; ne comptez pas uniquement sur S–XL." },
      { tag: "03 / LIVRAISON", title: "Anticipez le poids facturable", text: "Un emballage volumineux peut rendre le poids volumétrique supérieur au poids réel." },
    ],
    articles: "Derniers guides LitBuy", articleIntro: "Des guides indépendants autour des questions posées avant paiement.",
    articleCards: [
      { title: "Utiliser un tableur LitBuy sans perdre la fiche d’origine", text: "Un parcours reproductible de la catégorie et de l’ID vers la page source." },
      { title: "Checklist QC : ce qu’une photo d’entrepôt peut prouver", text: "Un ordre d’inspection pratique pour chaussures, vêtements, sacs et accessoires." },
      { title: "Livraison LitBuy : poids réel, volumétrique et facturable", text: "Comprenez les trois nombres avant d’estimer le budget d’un colis." },
      { title: "Avis LitBuy 2026 : faits, retours et checklist", text: "Une analyse équilibrée du fonctionnement, des règles et des retours récurrents." },
    ],
    faq: "Réponses rapides", faqs: [
      { q: "litbuys.store traite-t-il les commandes ?", a: "Non. Le site est une couche indépendante de découverte et de conseil. Les actions produit continuent sur le catalogue principal lié." },
      { q: "Les prix affichés sont-ils définitifs ?", a: "Non. Les valeurs USD sont indicatives et peuvent changer selon le taux, les options et le vendeur." },
      { q: "Que signifie route vérifiée ?", a: "L’image, le libellé et la destination ont été comparés à la même fiche, et non à une catégorie générique." },
    ],
    disclaimer: "Site indépendant de découverte de produits. Nous n’encaissons aucun paiement, ne vendons rien et ne garantissons pas le stock. Les détails finaux dépendent du catalogue lié.",
  },
  it: {
    nav: ["Foglio", "Prodotti", "Guide", "QC", "Spedizione", "FAQ", "Articoli"], search: "Cerca prodotti nel catalogo principale",
    eyebrow: "Un percorso più chiaro per scoprire prodotti LitBuy", hero: "LitBuy Spreadsheet e selezione di prodotti",
    intro: "Una raccolta compatta di prodotti LitBuy con immagini abbinate, prezzi indicativi in USD, aiuto QC e percorsi diretti al catalogo sorgente. Niente griglie vuote o reindirizzamenti incerti.",
    primary: "Sfoglia prodotti controllati", secondary: "Apri il foglio completo", verified: "8 percorsi verificati", usd: "Prezzi indicativi USD", checked: "Controllato 29 ago 2026",
    categories: "Inizia da una categoria", categoryIntro: "Ogni categoria apre la collezione corrispondente nel catalogo principale.",
    picks: "Prodotti da confrontare", picksIntro: "Immagine, articolo e destinazione sono stati verificati sulla stessa pagina sorgente.", open: "Apri corrispondenza", source: "Prezzo sorgente",
    guideTitle: "Usa la scheda prima del carrello", guideIntro: "Tre controlli rapidi evitano la maggior parte degli errori costosi prima dell’ordine.",
    guides: [
      { tag: "01 / QC", title: "Leggi la foto, non la promessa", text: "Controlla forma, cuciture, etichette, colore e confezione da più angolazioni." },
      { tag: "02 / TAGLIA", title: "Le misure battono le lettere", text: "Confronta le misure con un capo che possiedi; non affidarti solo a S–XL." },
      { tag: "03 / SPEDIZIONE", title: "Pianifica presto il peso fatturabile", text: "Un imballaggio voluminoso può rendere il peso volumetrico maggiore di quello reale." },
    ],
    articles: "Ultime guide LitBuy", articleIntro: "Guide indipendenti costruite sulle domande che nascono prima del pagamento.",
    articleCards: [
      { title: "Usare un foglio LitBuy senza perdere l’inserzione originale", text: "Un percorso ripetibile da categoria e ID alla pagina sorgente." },
      { title: "Checklist foto QC: cosa può dimostrare un’immagine di magazzino", text: "Ordine di controllo pratico per scarpe, abbigliamento, borse e accessori." },
      { title: "Spedizione LitBuy: peso reale, volumetrico e fatturabile", text: "Comprendi i tre numeri prima di stimare il budget del pacco." },
      { title: "Recensione LitBuy 2026: fatti, opinioni e checklist", text: "Un'analisi equilibrata del flusso, delle regole e dei temi ricorrenti." },
    ],
    faq: "Risposte rapide", faqs: [
      { q: "litbuys.store gestisce ordini?", a: "No. È un livello indipendente di scoperta e guida. Le azioni continuano nel catalogo principale collegato." },
      { q: "I prezzi mostrati sono finali?", a: "No. I valori USD sono conversioni indicative e possono cambiare per cambio, opzioni o venditore." },
      { q: "Cosa significa percorso verificato?", a: "Immagine, nome e destinazione sono stati confrontati con la stessa pagina prodotto, non con una categoria generica." },
    ],
    disclaimer: "Sito indipendente di scoperta prodotti. Non accettiamo pagamenti, non vendiamo e non garantiamo disponibilità. I dettagli finali dipendono dal catalogo collegato.",
  },
};

export type InnerCopy = {
  pages: Record<PageKey, { title: string; intro: string }>;
  directory: string; catalog: string; detail: string; priceNote: string; checkedLabel: string; productId: string;
  qcChecks: { title: string; text: string }[];
  shipping: { title: string; text: string }[];
  extraFaq: { q: string; a: string }[];
};

export const innerCopies: Record<Lang, InnerCopy> = {
  en: {
    pages: {
      spreadsheet: { title: "LitBuy Spreadsheet: Product Records and Prices", intro: "Eight source-matched records with stable product routes, clear images and USD reference values. Use the records as a starting point, then verify the live source page before ordering." },
      finds: { title: "LitBuy Finds: Shoes, Hoodies and Accessories", intro: "Start with a category or open an item. Every external route stays inside the main catalog and every featured image belongs to the destination shown." },
      guides: { title: "How to Use LitBuy: Buying Guides", intro: "Short, practical guides for reading product pages, comparing measurements, reviewing QC images and planning parcel weight." },
      qc: { title: "LitBuy QC Photos: Warehouse Checklist", intro: "A warehouse photo can reveal visible details and obvious damage. It cannot prove long-term durability, exact materials or how an item feels in use." },
      shipping: { title: "LitBuy Shipping: Cost and Parcel Weight", intro: "Shipping quotes can depend on actual weight, volumetric weight, route rules and optional services. Separate those pieces before comparing a parcel estimate." },
      faq: { title: "LitBuy FAQ: Prices, Storage and Product Links", intro: "Clear boundaries, route checks and price notes for using litbuys.store as an independent discovery layer." },
      articles: { title: "LitBuy Guides: Spreadsheet, QC and Shipping", intro: "Long-form explanations that connect a product find to listing checks, QC decisions and shipping planning." },
    },
    directory: "Matched directory", catalog: "Open main catalog", detail: "View details", priceNote: "Reference conversion at 1 USD ≈ 6.7268 CNY; final prices can change.", checkedLabel: "Route checked", productId: "Source record",
    qcChecks: [
      { title: "Start with the full silhouette", text: "Look at overall shape and proportions before zooming into small details. A wrong shape is easier to spot from a full front, side and rear view." },
      { title: "Compare left and right", text: "Check symmetry, panel placement, sole height, pocket position and stitching alignment across both sides." },
      { title: "Read labels carefully", text: "Confirm size, color and item identifiers. A label can verify what was photographed, but it does not authenticate a brand claim." },
      { title: "Ask for a measuring reference", text: "For apparel and bags, a tape measurement is more useful than a close-up with no scale." },
      { title: "Separate lighting from color", text: "Warehouse lighting and phone processing can shift color. Compare several angles and neutral surfaces before deciding." },
      { title: "Keep the order decision reversible", text: "If a visible issue matters, raise it before the parcel is submitted. After international shipping, options are usually narrower." },
    ],
    shipping: [
      { title: "Actual weight", text: "The scale weight of the packed parcel. Dense items usually remain close to this number." },
      { title: "Volumetric weight", text: "A space-based calculation using package length × width × height divided by the route’s divisor. The divisor is route-specific." },
      { title: "Chargeable weight", text: "Many routes charge the higher of actual and volumetric weight, then round according to the route’s billing increment." },
      { title: "Final route quote", text: "Fuel, remote-area, oversize, value-added service and campaign adjustments may sit outside a simple weight calculation. Treat calculators as estimates." },
    ],
    extraFaq: [
      { q: "Is litbuys.store the official LitBuy website?", a: "No. It is an independent product-discovery and educational website." },
      { q: "Why do product cards show two currencies?", a: "The source catalog publishes a CNY amount. We show a USD reference conversion beside it so the origin remains visible." },
      { q: "Can a product disappear after it is listed here?", a: "Yes. Seller inventory, URLs and options can change. Always open the final page before making a decision." },
      { q: "Do you link to multiple shopping platforms?", a: "No. External product, category and search actions are limited to one linked main catalog." },
      { q: "How long does LitBuy store an item?", a: "Check the storage deadline and fee status shown for each item in your current account. Free storage, overdue handling and disposal terms can change; an old marketing statement does not extend the account deadline." },
      { q: "Why is international shipping paid after the product order?", a: "LitBuy uses a shopping-agent workflow: the product purchase happens first, then items reach the warehouse and international parcel freight is calculated separately." },
      { q: "What does LitBuy basic QC cover?", a: "LitBuy's refund terms describe basic QC as a check of quantity, visible appearance and obvious external defects. Photos do not certify authenticity, material or future durability." },
    ],
  },
  de: {
    pages: {
      spreadsheet: { title: "LitBuy Spreadsheet: Produktdaten und Preise", intro: "Acht abgeglichene Datensätze mit stabilen Produktzielen, klaren Bildern und USD-Richtwerten. Prüfe vor der Bestellung immer die aktuelle Quellseite." },
      finds: { title: "LitBuy Finds: Schuhe, Hoodies und Accessoires", intro: "Beginne mit einer Kategorie oder öffne einen Artikel. Alle externen Wege bleiben im Hauptkatalog und jedes Bild gehört zum gezeigten Ziel." },
      guides: { title: "LitBuy nutzen: Ratgeber zum Einkauf", intro: "Praktische Ratgeber für Produktseiten, Maße, QC-Bilder und die Planung des Paketgewichts." },
      qc: { title: "LitBuy QC-Fotos: Checkliste für das Lager", intro: "Lagerfotos zeigen sichtbare Details und Schäden. Sie beweisen keine Haltbarkeit, exakten Materialien oder das Tragegefühl." },
      shipping: { title: "LitBuy Versand: Kosten und Paketgewicht", intro: "Versandangebote hängen von tatsächlichem Gewicht, Volumengewicht, Routenregeln und Zusatzleistungen ab." },
      faq: { title: "LitBuy FAQ: Preise, Lagerung und Produktlinks", intro: "Klare Grenzen, Zielprüfungen und Preishinweise für die Nutzung als unabhängige Fundstelle." },
      articles: { title: "LitBuy-Ratgeber: Spreadsheet, QC und Versand", intro: "Ausführliche Erklärungen von Produktfund über QC-Entscheidung bis Versandplanung." },
    },
    directory: "Geprüftes Verzeichnis", catalog: "Hauptkatalog öffnen", detail: "Details ansehen", priceNote: "Richtumrechnung 1 USD ≈ 6,7268 CNY; Endpreise können sich ändern.", checkedLabel: "Ziel geprüft", productId: "Quelldatensatz",
    qcChecks: [
      { title: "Mit der Gesamtform beginnen", text: "Prüfe Silhouette und Proportionen in Vorder-, Seiten- und Rückansicht, bevor du Details vergrößerst." },
      { title: "Links und rechts vergleichen", text: "Kontrolliere Symmetrie, Panelposition, Sohlenhöhe, Taschen und Nahtverlauf." },
      { title: "Etiketten genau lesen", text: "Bestätige Größe, Farbe und Kennungen. Ein Etikett authentifiziert keine Markenbehauptung." },
      { title: "Messreferenz verlangen", text: "Bei Kleidung und Taschen ist ein Maßband hilfreicher als ein Foto ohne Größenbezug." },
      { title: "Licht und Farbe trennen", text: "Lagerlicht kann Farben verschieben. Vergleiche mehrere Winkel und neutrale Flächen." },
      { title: "Entscheidung umkehrbar halten", text: "Melde sichtbare Probleme vor dem Versand; danach sind die Möglichkeiten meist kleiner." },
    ],
    shipping: [
      { title: "Tatsächliches Gewicht", text: "Das Waagengewicht des gepackten Pakets. Dichte Artikel bleiben oft nahe an diesem Wert." },
      { title: "Volumengewicht", text: "Länge × Breite × Höhe geteilt durch einen routenspezifischen Divisor." },
      { title: "Abrechnungsgewicht", text: "Viele Routen berechnen den höheren Wert und runden nach ihrem Abrechnungsschritt." },
      { title: "Endgültiges Angebot", text: "Treibstoff, abgelegene Gebiete, Übergröße und Zusatzdienste können außerhalb der einfachen Rechnung liegen." },
    ],
    extraFaq: [
      { q: "Ist litbuys.store die offizielle LitBuy-Seite?", a: "Nein. Es ist eine unabhängige Produktfund- und Informationsseite." },
      { q: "Warum werden zwei Währungen gezeigt?", a: "Der Quellkatalog nennt CNY; daneben steht eine USD-Richtumrechnung." },
      { q: "Kann ein Produkt später verschwinden?", a: "Ja. Bestand, URLs und Optionen können sich ändern. Öffne immer die endgültige Seite." },
      { q: "Verlinkt die Seite mehrere Plattformen?", a: "Nein. Externe Produkt-, Kategorie- und Suchaktionen sind auf einen verknüpften Hauptkatalog begrenzt." },
      { q: "Wie lange lagert LitBuy einen Artikel?", a: "Prüfe für jeden Artikel die aktuelle Lagerfrist und den Gebührenstatus im Konto. Kostenlose Lagerung, überfällige Bearbeitung und Entsorgung richten sich nach den aktuellen Bedingungen." },
      { q: "Warum wird internationaler Versand später bezahlt?", a: "Beim Agentenmodell wird zuerst der Artikel gekauft. Nach Ankunft im Lager wird der internationale Paketversand separat berechnet." },
      { q: "Was umfasst die grundlegende QC?", a: "Laut Erstattungsbedingungen werden Menge, sichtbares Erscheinungsbild und offensichtliche äußere Mängel geprüft; Fotos bestätigen weder Echtheit noch Haltbarkeit." },
    ],
  },
  es: {
    pages: {
      spreadsheet: { title: "LitBuy Spreadsheet: productos y precios", intro: "Ocho registros emparejados con rutas estables, imágenes claras y referencias USD. Verifica la página fuente en vivo antes de pedir." },
      finds: { title: "LitBuy Finds: zapatos, sudaderas y accesorios", intro: "Empieza por una categoría o abre un artículo. Todas las rutas externas permanecen en el catálogo principal." },
      guides: { title: "Cómo usar LitBuy: guías de compra", intro: "Guías prácticas para anuncios, medidas, imágenes QC y planificación del peso." },
      qc: { title: "Fotos QC de LitBuy: revisión en almacén", intro: "Pueden mostrar detalles visibles y daños, pero no prueban durabilidad, materiales exactos ni sensación de uso." },
      shipping: { title: "Envíos LitBuy: coste y peso del paquete", intro: "Las cotizaciones pueden depender del peso real, volumétrico, reglas de ruta y servicios opcionales." },
      faq: { title: "Preguntas sobre LitBuy: precios, almacén y enlaces", intro: "Límites claros, rutas comprobadas y notas de precio para usar el sitio de forma independiente." },
      articles: { title: "Guías LitBuy: spreadsheet, QC y envíos", intro: "Explicaciones que conectan el hallazgo con la revisión, QC y planificación del envío." },
    },
    directory: "Directorio verificado", catalog: "Abrir catálogo principal", detail: "Ver detalles", priceNote: "Conversión orientativa 1 USD ≈ 6,7268 CNY; el precio final puede cambiar.", checkedLabel: "Ruta revisada", productId: "Registro fuente",
    qcChecks: [
      { title: "Empieza por la silueta", text: "Mira forma y proporciones en vistas frontal, lateral y trasera antes de ampliar detalles." },
      { title: "Compara izquierda y derecha", text: "Revisa simetría, paneles, altura de suela, bolsillos y alineación de costuras." },
      { title: "Lee las etiquetas", text: "Confirma talla, color e identificadores. Una etiqueta no autentica una marca." },
      { title: "Pide una referencia de medida", text: "Para ropa y bolsos, una cinta métrica aporta más que un primer plano sin escala." },
      { title: "Separa luz y color", text: "La iluminación puede alterar el color. Compara varios ángulos y fondos neutros." },
      { title: "Mantén reversible la decisión", text: "Comunica cualquier problema visible antes del envío internacional." },
    ],
    shipping: [
      { title: "Peso real", text: "El peso en báscula del paquete. Los artículos densos suelen acercarse a esta cifra." },
      { title: "Peso volumétrico", text: "Largo × ancho × alto dividido por el divisor específico de la ruta." },
      { title: "Peso facturable", text: "Muchas rutas cobran el mayor de los dos y redondean según su incremento." },
      { title: "Cotización final", text: "Combustible, zonas remotas, sobredimensión y servicios pueden quedar fuera del cálculo simple." },
    ],
    extraFaq: [
      { q: "¿litbuys.store es la web oficial de LitBuy?", a: "No. Es una web independiente de descubrimiento y educación." },
      { q: "¿Por qué se muestran dos monedas?", a: "El catálogo fuente publica CNY y añadimos una conversión USD orientativa." },
      { q: "¿Puede desaparecer un producto?", a: "Sí. El inventario, las URL y opciones pueden cambiar. Abre siempre la página final." },
      { q: "¿Se enlazan varias plataformas?", a: "No. Las acciones externas se limitan a un único catálogo principal enlazado." },
      { q: "¿Cuánto tiempo almacena LitBuy un artículo?", a: "Comprueba el plazo de almacenamiento y el estado de cargos de cada artículo en tu cuenta. El periodo gratuito y las consecuencias del vencimiento dependen de las condiciones vigentes." },
      { q: "¿Por qué se paga después el envío internacional?", a: "Primero se compra el producto; cuando llega al almacén se calcula por separado el envío internacional del paquete." },
      { q: "¿Qué incluye el QC básico?", a: "Las condiciones de reembolso mencionan cantidad, aspecto visible y defectos externos evidentes; las fotos no certifican autenticidad ni durabilidad." },
    ],
  },
  fr: {
    pages: {
      spreadsheet: { title: "Tableur LitBuy : produits et prix", intro: "Huit fiches associées à des routes stables, images claires et références USD. Vérifiez toujours la page source avant commande." },
      finds: { title: "Trouvailles LitBuy : chaussures, sweats et accessoires", intro: "Commencez par une catégorie ou un article. Toutes les routes externes restent dans le catalogue principal." },
      guides: { title: "Comment utiliser LitBuy : guides d’achat", intro: "Des guides pratiques pour les fiches, mesures, images QC et le poids du colis." },
      qc: { title: "Photos QC LitBuy : contrôle en entrepôt", intro: "Elles montrent les détails visibles et dégâts, pas la durabilité, la matière exacte ou le ressenti." },
      shipping: { title: "Livraison LitBuy : coût et poids du colis", intro: "Les devis dépendent du poids réel, volumétrique, des règles de route et des services optionnels." },
      faq: { title: "Questions LitBuy : prix, stockage et liens produits", intro: "Des limites claires, routes vérifiées et notes de prix pour utiliser le site en toute indépendance." },
      articles: { title: "Guides LitBuy : tableur, QC et livraison", intro: "Des explications reliant la trouvaille, le contrôle QC et la préparation de l’envoi." },
    },
    directory: "Répertoire vérifié", catalog: "Ouvrir le catalogue", detail: "Voir les détails", priceNote: "Conversion indicative 1 USD ≈ 6,7268 CNY; le prix final peut changer.", checkedLabel: "Route vérifiée", productId: "Fiche source",
    qcChecks: [
      { title: "Commencer par la silhouette", text: "Observez forme et proportions de face, côté et dos avant les petits détails." },
      { title: "Comparer gauche et droite", text: "Vérifiez symétrie, panneaux, hauteur de semelle, poches et coutures." },
      { title: "Lire les étiquettes", text: "Confirmez taille, couleur et identifiants. Une étiquette n’authentifie pas une marque." },
      { title: "Demander une mesure", text: "Pour vêtements et sacs, un mètre ruban est plus utile qu’un gros plan sans échelle." },
      { title: "Séparer lumière et couleur", text: "L’éclairage peut modifier les couleurs. Comparez plusieurs angles et fonds neutres." },
      { title: "Garder la décision réversible", text: "Signalez les défauts visibles avant l’envoi international." },
    ],
    shipping: [
      { title: "Poids réel", text: "Le poids du colis sur la balance. Les objets denses restent souvent proches de cette valeur." },
      { title: "Poids volumétrique", text: "Longueur × largeur × hauteur divisées par le diviseur propre à la route." },
      { title: "Poids facturable", text: "Beaucoup de routes facturent le plus élevé puis arrondissent selon leur palier." },
      { title: "Devis final", text: "Carburant, zone éloignée, surdimensionnement et services peuvent s’ajouter au calcul simple." },
    ],
    extraFaq: [
      { q: "litbuys.store est-il le site officiel LitBuy ?", a: "Non. C’est un site indépendant de découverte et d’information." },
      { q: "Pourquoi deux devises ?", a: "Le catalogue source publie en CNY; nous ajoutons une conversion USD indicative." },
      { q: "Un produit peut-il disparaître ?", a: "Oui. Stock, URL et options changent. Ouvrez toujours la page finale." },
      { q: "Le site relie-t-il plusieurs plateformes ?", a: "Non. Les actions externes sont limitées à un seul catalogue principal lié." },
      { q: "Combien de temps LitBuy stocke-t-il un article ?", a: "Consulte le délai et les frais propres à chaque article dans ton compte. La période gratuite et les conséquences du dépassement dépendent des conditions en vigueur." },
      { q: "Pourquoi la livraison internationale est-elle payée plus tard ?", a: "Le produit est acheté d’abord; après son arrivée à l’entrepôt, le transport international du colis est calculé séparément." },
      { q: "Que couvre le QC de base ?", a: "Les conditions de remboursement citent quantité, apparence visible et défauts extérieurs évidents; les photos ne certifient ni authenticité ni durabilité." },
    ],
  },
  it: {
    pages: {
      spreadsheet: { title: "LitBuy Spreadsheet: prodotti e prezzi", intro: "Otto schede abbinate con percorsi stabili, immagini chiare e riferimenti USD. Verifica sempre la pagina sorgente prima dell’ordine." },
      finds: { title: "LitBuy Finds: scarpe, felpe e accessori", intro: "Inizia da una categoria o apri un articolo. Tutti i percorsi esterni restano nel catalogo principale." },
      guides: { title: "Come usare LitBuy: guide agli acquisti", intro: "Guide pratiche per schede, misure, immagini QC e pianificazione del peso." },
      qc: { title: "Foto QC LitBuy: controllo in magazzino", intro: "Mostrano dettagli e danni visibili, non durata, materiali esatti o sensazione d’uso." },
      shipping: { title: "Spedizioni LitBuy: costi e peso del pacco", intro: "I preventivi dipendono da peso reale, volumetrico, regole della linea e servizi opzionali." },
      faq: { title: "Domande LitBuy: prezzi, deposito e link ai prodotti", intro: "Confini chiari, percorsi verificati e note prezzo per usare il sito in modo indipendente." },
      articles: { title: "Guide LitBuy: spreadsheet, QC e spedizioni", intro: "Spiegazioni che collegano prodotto, controllo QC e pianificazione della spedizione." },
    },
    directory: "Directory verificata", catalog: "Apri catalogo principale", detail: "Vedi dettagli", priceNote: "Conversione indicativa 1 USD ≈ 6,7268 CNY; il prezzo finale può cambiare.", checkedLabel: "Percorso verificato", productId: "Scheda sorgente",
    qcChecks: [
      { title: "Inizia dalla forma", text: "Osserva silhouette e proporzioni davanti, di lato e dietro prima dei dettagli." },
      { title: "Confronta sinistra e destra", text: "Controlla simmetria, pannelli, suole, tasche e cuciture." },
      { title: "Leggi le etichette", text: "Conferma taglia, colore e codici. Un’etichetta non autentica un marchio." },
      { title: "Chiedi una misura", text: "Per abiti e borse un metro è più utile di un primo piano senza scala." },
      { title: "Separa luce e colore", text: "Le luci del magazzino possono alterare i colori. Confronta più angoli." },
      { title: "Mantieni reversibile la scelta", text: "Segnala problemi visibili prima della spedizione internazionale." },
    ],
    shipping: [
      { title: "Peso reale", text: "Il peso del pacco sulla bilancia. Gli articoli densi restano spesso vicini a questo valore." },
      { title: "Peso volumetrico", text: "Lunghezza × larghezza × altezza divise per il divisore della linea." },
      { title: "Peso fatturabile", text: "Molte linee usano il valore maggiore e arrotondano secondo il proprio incremento." },
      { title: "Preventivo finale", text: "Carburante, aree remote, fuori misura e servizi possono aggiungersi al calcolo semplice." },
    ],
    extraFaq: [
      { q: "litbuys.store è il sito ufficiale LitBuy?", a: "No. È un sito indipendente di scoperta e informazione." },
      { q: "Perché due valute?", a: "Il catalogo sorgente pubblica CNY; aggiungiamo una conversione USD indicativa." },
      { q: "Un prodotto può sparire?", a: "Sì. Stock, URL e opzioni possono cambiare. Apri sempre la pagina finale." },
      { q: "Il sito collega più piattaforme?", a: "No. Le azioni esterne sono limitate a un solo catalogo principale collegato." },
      { q: "Per quanto tempo LitBuy conserva un articolo?", a: "Controlla la scadenza di deposito e lo stato delle tariffe per ogni articolo nel tuo account. Il periodo gratuito e le conseguenze del superamento dipendono dalle condizioni attuali." },
      { q: "Perché la spedizione internazionale si paga dopo?", a: "Prima viene acquistato il prodotto; dopo l'arrivo in magazzino il trasporto internazionale viene calcolato separatamente." },
      { q: "Cosa copre il QC di base?", a: "I termini di rimborso citano quantità, aspetto visibile e difetti esterni evidenti; le foto non certificano autenticità o durata." },
    ],
  },
};

