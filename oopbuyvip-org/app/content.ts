import { englishArticles } from "./seo-articles";
import { germanArticles } from "./articles-de";
import { spanishArticles } from "./articles-es";
import { frenchArticles } from "./articles-fr";
import { italianArticles } from "./articles-it";
import { addParitySections } from "./article-parity";

export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = {
  en: "EN",
  de: "DE",
  es: "ES",
  fr: "FR",
  it: "IT",
};

export const categoryRoutes = [
  { key: "shoes", icon: "01", href: "https://cnfansge.com/shoes/" },
  { key: "hoodies", icon: "02", href: "https://cnfansge.com/hoodies-sweaters/" },
  { key: "tshirts", icon: "03", href: "https://cnfansge.com/t-shirts/" },
  { key: "jackets", icon: "04", href: "https://cnfansge.com/jackets/" },
  { key: "pants", icon: "05", href: "https://cnfansge.com/pants-shorts/" },
  { key: "headwear", icon: "06", href: "https://cnfansge.com/headwear/" },
  { key: "accessories", icon: "07", href: "https://cnfansge.com/accessories/" },
  { key: "jerseys", icon: "08", href: "https://cnfansge.com/Jersey/" },
  { key: "electronics", icon: "09", href: "https://cnfansge.com/electronics/" },
  { key: "more", icon: "10", href: "https://cnfansge.com/other-stuff/" },
] as const;

export type CategoryKey = (typeof categoryRoutes)[number]["key"];

export const products = [
  {
    category: "shoes" as CategoryKey,
    code: "F-6127",
    price: "$13.75",
    weight: "673 g",
    image: "https://cnfansge.com/uploads/allimg/20260415/1-260415150J2P3.jpg",
    href: "https://cnfansge.com/AllProducts/6127.html",
  },
  {
    category: "hoodies" as CategoryKey,
    code: "F-6182",
    price: "$13.61",
    weight: "949 g",
    image: "https://cnfansge.com/uploads/allimg/20260421/1-260421155341E1.jpg",
    href: "https://cnfansge.com/AllProducts/6182.html",
  },
  {
    category: "tshirts" as CategoryKey,
    code: "F-6237",
    price: "$12.36",
    weight: "602 g",
    image: "https://cnfansge.com/uploads/allimg/20260421/1-2604211G02MO.jpg",
    href: "https://cnfansge.com/AllProducts/6237.html",
  },
  {
    category: "jackets" as CategoryKey,
    code: "F-6292",
    price: "$22.22",
    weight: "580 g",
    image: "https://cnfansge.com/uploads/allimg/20260421/1-260421213Tb41.jpg",
    href: "https://cnfansge.com/AllProducts/6292.html",
  },
  {
    category: "pants" as CategoryKey,
    code: "F-6347",
    price: "$16.33",
    weight: "958 g",
    image: "https://cnfansge.com/uploads/allimg/20260421/1-260421224253553.jpg",
    href: "https://cnfansge.com/AllProducts/6347.html",
  },
  {
    category: "headwear" as CategoryKey,
    code: "F-6403",
    price: "$25.00",
    weight: "931 g",
    image: "https://cnfansge.com/uploads/allimg/20260422/1-260422145A2C4.jpg",
    href: "https://cnfansge.com/AllProducts/6403.html",
  },
  {
    category: "accessories" as CategoryKey,
    code: "F-6457",
    price: "$33.33",
    weight: "585 g",
    image: "https://cnfansge.com/uploads/allimg/20260422/1-260422155514607.jpg",
    href: "https://cnfansge.com/AllProducts/6457.html",
  },
  {
    category: "jerseys" as CategoryKey,
    code: "F-6679",
    price: "$18.19",
    weight: "670 g",
    image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg",
    href: "https://cnfansge.com/AllProducts/6679.html",
  },
] as const;

export const articleSlugs = [
  "oopbuy-spreadsheet-guide",
  "oopbuy-qc-checklist",
  "oopbuy-shipping-planning",
  "oopbuy-fees-total-cost",
  "is-oopbuy-legit-review",
  "oopbuy-order-status-interface-guide",
] as const;
export type ArticleSlug = (typeof articleSlugs)[number];

type Article = {
  title: string;
  eyebrow: string;
  description: string;
  read: string;
  updated?: string;
  published?: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources?: { label: string; note: string; kind?: "official" | "customer"; checked?: string; reference?: string }[];
};

type Copy = {
  nav: Record<string, string>;
  categories: Record<CategoryKey, string>;
  hero: { kicker: string; title: string; tagline: string; body: string; proof: string; search: string; searchButton: string; browse: string };
  labels: Record<string, string>;
  process: { title: string; body: string; steps: { title: string; body: string }[] };
  facts: { title: string; body: string; items: { value: string; label: string; note: string }[] };
  faq: { q: string; a: string }[];
  page: Record<string, { kicker: string; title: string; body: string; points: { title: string; body: string }[] }>;
  articles: Record<ArticleSlug, Article>;
  footer: string;
};

const sharedArticles: Record<Language, Partial<Record<ArticleSlug, Article>>> = {
  en: {
    "oopbuy-spreadsheet-guide": {
      eyebrow: "Spreadsheet guide",
      title: "How to Use an OOPBuy Spreadsheet Without Treating Every Row as Proof",
      description: "A practical route from product discovery to seller checks, warehouse inspection and a final shipping decision.",
      read: "8 min read",
      sections: [
        { heading: "Start with the job the spreadsheet should do", paragraphs: ["An OOPBuy spreadsheet is best used as a discovery and sorting layer. It can group source listings by product type, show a reference price and preserve a route back to a live item page. It cannot guarantee that a seller still has stock, that every option matches the thumbnail or that the parcel will be inexpensive to ship. Treat a row as a lead to investigate, not a final buying recommendation.", "Begin with a category rather than a vague brand search. Footwear, hoodies, electronics and accessories need different checks. A category-first pass makes it easier to compare similar products, notice unusual prices and keep the number of open tabs under control."] },
        { heading: "Open the live source before deciding", paragraphs: ["Prices, variants and seller descriptions can change after a list is published. Open the current product route, compare the visible option with the spreadsheet card and confirm the size, color, material or model you actually intend to order. If the live page no longer resembles the saved row, pause instead of assuming the old description is still correct.", "Keep the source item ID and the date you checked it. Those two small details make later support questions easier and help you recognize when several cards point to the same underlying listing."] },
        { heading: "Separate product price from landed cost", paragraphs: ["The displayed source price is only the first part of the total. Domestic delivery to the warehouse, optional services, international freight and possible destination charges can change the final cost. OOPBuy provides a shipping estimator, but any estimate depends on destination, weight, dimensions and the available route. Heavy or bulky products can reverse what looked like a bargain.", "Use the listed weight as a planning clue, not a promise. Packaging and measured dimensions may affect the chargeable weight. Compare products with similar construction, then estimate the parcel before you commit to a large haul."] },
        { heading: "Use warehouse QC as a decision point", paragraphs: ["OOPBuy describes a workflow in which purchased items reach its warehouse and quality-control photos become available before international shipment. At that stage, compare the received color, visible shape, size tag, major stitching lines and obvious defects with the live order. Stock photography cannot replace warehouse evidence.", "If a detail matters but is not visible, request the appropriate additional view through the current platform options. Do not approve the parcel merely because the overall silhouette looks familiar."] },
        { heading: "A clean shortlist beats a huge list", paragraphs: ["A spreadsheet with thousands of rows is not automatically more useful than a smaller set of maintained routes. Prioritize live links, clear categories, readable photos and notes that explain what still needs verification. Remove duplicates and expired entries from your shortlist.", "The final decision should combine the live seller page, current platform information, warehouse photos and an updated shipping estimate. That workflow takes a little longer than clicking the first card, but it is much more useful than relying on an unverified claim that every product in a directory is approved."] },
      ],
    },
    "oopbuy-qc-checklist": {
      eyebrow: "QC field guide",
      title: "OOPBuy QC Photos: A Calm, Repeatable Inspection Checklist",
      description: "What warehouse photos can show, what they cannot prove and the order in which to review them.",
      read: "7 min read",
      sections: [
        { heading: "Confirm identity first", paragraphs: ["Before judging quality, confirm that the photographed item belongs to the order you placed. Compare the color, selected option, visible size label and major design features with the current source page. A well-made item is still the wrong item if the variant does not match your order.", "Keep the order page and QC gallery open side by side. This reduces errors caused by memory and makes it easier to distinguish a lighting difference from a genuinely different color."] },
        { heading: "Review from large shapes to small details", paragraphs: ["Start with the overall silhouette and symmetry. Then inspect seams, edges, closures, printed areas and labels that are visible. For shoes, compare toe shape, heel alignment, sole edges and the pair as a set. For clothing, check proportions, sleeve length, hems and obvious twisting before zooming into stitching.", "Warehouse lighting and camera angle can alter color and apparent proportions. Use several views together rather than treating one frame as definitive."] },
        { heading: "Measure the details that affect fit", paragraphs: ["A tag is not the same as a measurement. When fit matters, compare any available ruler photo with a garment you already own. For electronics and accessories, confirm dimensions, connector type and model compatibility. If the required evidence is missing, use the platform's current additional-photo options before shipping.", "Write down the expected measurement before opening the photo. This keeps the check objective and prevents you from adjusting expectations simply because the item has already arrived at the warehouse."] },
        { heading: "Know the limits of QC", paragraphs: ["Photos can reveal visible defects, option mismatches and some construction problems. They cannot reliably prove long-term durability, material composition, internal electronics performance or authenticity. Keep claims proportional to the evidence you can actually see.", "If the item is time-sensitive or difficult to return, review the current platform rules before approving shipment. Policies and charges can change, so the live OOPBuy account and help pages should remain the final source."] },
      ],
    },
    "oopbuy-shipping-planning": {
      eyebrow: "Shipping planner",
      title: "Plan OOPBuy Shipping Before a Cheap Find Becomes an Expensive Parcel",
      description: "A practical model for weight, dimensions, consolidation and route comparison.",
      read: "7 min read",
      sections: [
        { heading: "Estimate before ordering", paragraphs: ["OOPBuy's official estimator asks for a destination and shipment details because international freight is route-specific. Use it before placing a large order, especially for shoes, jackets and products with rigid packaging. The source price alone says very little about the final parcel cost.", "Create a rough parcel list with item price, stated weight and a note about likely packaging. This reveals which product is driving the budget and helps you decide whether removing optional packaging is worth considering later."] },
        { heading: "Understand chargeable weight", paragraphs: ["Some routes compare actual weight with a volume-based calculation. A light but large parcel can therefore cost more than expected. Final measurements occur after warehouse handling and packing, so a pre-order estimate should be treated as a range rather than a guaranteed quote.", "When comparing two similar products, look beyond the cheaper item price. A heavier construction or bulky box may erase the difference once international shipping is added."] },
        { heading: "Consolidate with a reason", paragraphs: ["Combining items can reduce repeated base charges, but a larger parcel is not always automatically better. Route limits, dimensions, product restrictions and destination rules can change which services are available. Build a coherent parcel rather than accumulating unrelated items until a coupon expires.", "After items arrive, review QC first. There is no benefit in paying to ship a product you would have returned after a careful photo check."] },
        { heading: "Use the live quote as the final source", paragraphs: ["Platform promotions, route availability and exchange rates can change. Recalculate after the warehouse records the package, compare the current service descriptions and keep a reasonable buffer for possible destination charges. Avoid publishing or relying on a universal delivery promise.", "A useful spreadsheet supports this decision by preserving item weights, categories and direct routes. It should never replace the current shipping quote shown by the platform."] },
      ],
    },
  },
  de: {},
  es: {},
  fr: {},
  it: {},
};

function translatedArticles(lang: Exclude<Language, "en">): Record<ArticleSlug, Article> {
  const t = {
    de: {
      read: "7 Min. Lesezeit",
      titles: ["OOPBuy-Spreadsheet richtig verwenden", "OOPBuy-QC-Fotos systematisch prüfen", "OOPBuy-Versand vor dem Kauf planen", "OOPBuy-Gebühren und Gesamtkosten verstehen", "Ist OOPBuy seriös? Faktenbasierte Bewertung 2026"],
      desc: ["Vom Produktfund über die Live-Prüfung bis zur Versandentscheidung.", "Ein ruhiger, wiederholbarer Ablauf für Lagerfotos.", "Gewicht, Maße, Konsolidierung und aktuelle Versandangebote verstehen.", "Kaufpreis, veröffentlichte Servicegebühr, Rückgabe und Versand getrennt kalkulieren.", "Offizielle Abläufe, aktuelle Bewertungswarnungen und Nutzerberichte sauber trennen."],
      heads: ["Mit einer klaren Aufgabe beginnen", "Die aktuelle Quelle öffnen", "Preis und Gesamtkosten trennen", "QC als Entscheidungspunkt nutzen"],
      paras: ["Eine OOPBuy-Spreadsheet ist in erster Linie eine Such- und Sortierhilfe. Sie kann Angebote nach Kategorien ordnen, Preise als Referenz zeigen und den Weg zur aktuellen Produktseite erhalten. Sie garantiert weder Bestand noch Varianten, Material oder günstigen Versand. Jede Zeile ist daher ein Ausgangspunkt für eine Prüfung und keine endgültige Kaufempfehlung.", "Öffne vor jeder Entscheidung die aktuelle Produktseite. Vergleiche Option, Farbe, Größe, Materialhinweise und Artikel-ID mit dem Eintrag. Preise und Verkäufertexte können sich ändern. Wenn die Live-Seite nicht mehr zum gespeicherten Eintrag passt, sollte die alte Beschreibung nicht weiterverwendet werden.", "Der Artikelpreis ist nur ein Teil der Gesamtkosten. Inlandsversand zum Lager, Zusatzleistungen, internationales Porto und mögliche Abgaben am Zielort können das Ergebnis verändern. Der OOPBuy-Versandrechner liefert eine Planungshilfe, aber das aktuelle Angebot im Konto bleibt maßgeblich.", "Nach dem Lagereingang helfen QC-Fotos dabei, Variante, Form, sichtbare Maße, Nähte und offensichtliche Mängel zu prüfen. Fotos beweisen jedoch weder Haltbarkeit noch Materialzusammensetzung oder Authentizität. Fehlende entscheidende Ansichten sollten vor dem Versand angefordert werden.", "Eine kleinere Liste mit aktiven Links, klaren Kategorien und nachvollziehbaren Prüfdaten ist wertvoller als eine riesige Liste ohne Wartung. Dokumentiere Artikel-ID und Prüfdatum und entferne Dubletten oder abgelaufene Routen.", "Nutze für die endgültige Entscheidung immer die Live-Produktseite, die aktuellen Lagerbilder und das neue Versandangebot. Plattformregeln, Routen und Gebühren können sich ändern."],
    },
    es: {
      read: "7 min de lectura",
      titles: ["Cómo usar una hoja de OOPBuy con criterio", "Cómo revisar fotos QC de OOPBuy", "Cómo planificar el envío de OOPBuy", "Comisiones y coste total de OOPBuy", "¿Es fiable OOPBuy? Análisis basado en pruebas de 2026"],
      desc: ["Del descubrimiento a la comprobación del vendedor y la decisión de envío.", "Un método tranquilo y repetible para revisar fotos de almacén.", "Peso, dimensiones, consolidación y tarifas actuales.", "Separa precio, comisión publicada, devoluciones, pago y transporte.", "Distingue el flujo oficial de las advertencias y experiencias de usuarios."],
      heads: ["Empieza con una función clara", "Abre siempre la fuente activa", "Separa precio y coste final", "Usa el QC como punto de decisión"],
      paras: ["Una hoja de OOPBuy funciona mejor como capa de descubrimiento y clasificación. Puede agrupar rutas por categoría, mostrar un precio de referencia y conservar el enlace al producto activo. No garantiza existencias, variantes, materiales ni un envío barato. Considera cada fila como una pista que debes comprobar, no como una recomendación definitiva.", "Antes de decidir, abre la página actual del producto. Compara opción, color, talla, material e ID con la ficha guardada. Los precios y las descripciones cambian. Si la página activa ya no coincide, no supongas que la información antigua sigue siendo válida.", "El precio del artículo es solo una parte del coste. El transporte nacional al almacén, servicios opcionales, flete internacional y posibles cargos en destino pueden cambiar el total. El estimador oficial ayuda a planificar, pero la cotización actual de la cuenta es la referencia final.", "Cuando el artículo llega al almacén, las fotos QC permiten revisar variante, forma, medidas visibles, costuras y defectos evidentes. No pueden demostrar durabilidad, composición interna o autenticidad. Solicita la vista necesaria si falta una prueba importante.", "Una lista pequeña con enlaces activos, categorías claras y fechas de revisión es más útil que miles de filas sin mantenimiento. Guarda el ID y la fecha, y elimina duplicados o enlaces vencidos.", "Para decidir, combina la página activa, las fotos actuales del almacén y una nueva estimación de envío. Las rutas, promociones y reglas pueden cambiar."],
    },
    fr: {
      read: "7 min de lecture",
      titles: ["Utiliser une feuille OOPBuy avec méthode", "Contrôler les photos QC OOPBuy", "Préparer l'expédition OOPBuy", "Comprendre les frais et le coût total OOPBuy", "OOPBuy est-il fiable ? Analyse factuelle 2026"],
      desc: ["De la découverte au contrôle du vendeur et au choix d'expédition.", "Une méthode calme et répétable pour les photos d'entrepôt.", "Poids, dimensions, regroupement et devis actuels.", "Séparez prix, frais publiés, retours, paiement et transport.", "Distinguez le parcours officiel des alertes et témoignages clients."],
      heads: ["Définir le rôle de la feuille", "Ouvrir la source active", "Séparer prix et coût total", "Faire du QC une décision"],
      paras: ["Une feuille OOPBuy sert surtout à découvrir et classer des produits. Elle peut regrouper les routes par catégorie, afficher un prix indicatif et conserver l'accès à la page active. Elle ne garantit ni le stock, ni les variantes, ni la matière, ni un transport bon marché. Chaque ligne doit être vérifiée avant achat.", "Ouvrez la page actuelle du produit avant de décider. Comparez l'option, la couleur, la taille, les informations matière et l'identifiant avec la fiche enregistrée. Les prix et descriptions évoluent. Si la page active ne correspond plus, ne réutilisez pas l'ancienne information.", "Le prix de l'article ne représente qu'une partie du coût. Livraison locale vers l'entrepôt, services optionnels, fret international et frais éventuels à destination peuvent modifier le total. L'estimateur officiel aide à planifier, mais le devis affiché dans le compte reste la référence finale.", "Après l'arrivée à l'entrepôt, les photos QC permettent de contrôler variante, forme, mesures visibles, coutures et défauts évidents. Elles ne prouvent pas la durabilité, la composition interne ou l'authenticité. Demandez une vue supplémentaire lorsqu'un élément décisif manque.", "Une liste plus courte avec des liens actifs, des catégories claires et des dates de contrôle vaut mieux que des milliers de lignes non entretenues. Conservez l'identifiant et la date de vérification, puis supprimez doublons et liens expirés.", "Pour la décision finale, combinez la page active, les photos récentes de l'entrepôt et une nouvelle estimation. Routes, promotions et règles peuvent changer."],
    },
    it: {
      read: "7 min di lettura",
      titles: ["Usare un foglio OOPBuy con metodo", "Controllare le foto QC di OOPBuy", "Pianificare la spedizione OOPBuy", "Capire commissioni e costo totale OOPBuy", "OOPBuy è affidabile? Analisi basata sui fatti 2026"],
      desc: ["Dalla scoperta alla verifica del venditore e alla scelta di spedizione.", "Un metodo calmo e ripetibile per le foto di magazzino.", "Peso, dimensioni, consolidamento e preventivi attuali.", "Separa prezzo, commissione pubblicata, resi, pagamento e trasporto.", "Distingui il flusso ufficiale dagli avvisi e dalle esperienze degli utenti."],
      heads: ["Parti da uno scopo chiaro", "Apri la fonte attiva", "Separa prezzo e costo finale", "Usa il QC per decidere"],
      paras: ["Un foglio OOPBuy è soprattutto uno strumento di scoperta e ordinamento. Può raggruppare i percorsi per categoria, mostrare un prezzo indicativo e conservare il collegamento alla pagina attiva. Non garantisce disponibilità, varianti, materiali o una spedizione economica. Ogni riga è un punto di partenza da verificare.", "Prima di decidere, apri la pagina corrente del prodotto. Confronta opzione, colore, taglia, materiale e ID con la scheda salvata. Prezzi e descrizioni possono cambiare. Se la pagina attiva non corrisponde più, non considerare valide le vecchie informazioni.", "Il prezzo dell'articolo è solo una parte del costo. Trasporto nazionale al magazzino, servizi opzionali, spedizione internazionale e possibili oneri a destinazione possono modificare il totale. Lo stimatore ufficiale aiuta a pianificare, ma il preventivo attuale nell'account è la fonte finale.", "Dopo l'arrivo in magazzino, le foto QC aiutano a controllare variante, forma, misure visibili, cuciture e difetti evidenti. Non dimostrano durata, composizione interna o autenticità. Se manca una prova importante, richiedi la vista appropriata prima della spedizione.", "Un elenco più piccolo con link attivi, categorie chiare e date di controllo è più utile di migliaia di righe non mantenute. Salva ID e data, eliminando duplicati e percorsi scaduti.", "Per la decisione finale combina pagina attiva, foto recenti del magazzino e una nuova stima di spedizione. Rotte, promozioni e regole possono cambiare."],
    },
  }[lang];

  const slugs = articleSlugs;
  return Object.fromEntries(slugs.map((slug, index) => [slug, {
    eyebrow: ["Spreadsheet", "QC", "Shipping", "Fees", "Review"][index],
    title: t.titles[index], description: t.desc[index], read: t.read, updated: "1 September 2026", sources: [],
    sections: [
      { heading: t.heads[0], paragraphs: [t.paras[0], t.paras[4]] },
      { heading: t.heads[1], paragraphs: [t.paras[1]] },
      { heading: t.heads[2], paragraphs: [t.paras[2]] },
      { heading: t.heads[3], paragraphs: [t.paras[3], t.paras[5]] },
    ],
  }])) as unknown as Record<ArticleSlug, Article>;
}

sharedArticles.en = addParitySections("en", englishArticles);
sharedArticles.de = addParitySections("de", germanArticles);
sharedArticles.es = addParitySections("es", spanishArticles);
sharedArticles.fr = addParitySections("fr", frenchArticles);
sharedArticles.it = addParitySections("it", italianArticles);

const makeCopy = (lang: Language, data: Omit<Copy, "articles">): Copy => ({ ...data, articles: sharedArticles[lang] as Record<ArticleSlug, Article> });

export const copy: Record<Language, Copy> = {
  en: makeCopy("en", {
    nav: { home: "Home", spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", faq: "FAQ", articles: "Articles" },
    categories: { shoes: "Shoes", hoodies: "Hoodies", tshirts: "T-Shirts", jackets: "Jackets", pants: "Pants & Shorts", headwear: "Headwear", accessories: "Accessories", jerseys: "Jerseys", electronics: "Electronics", more: "More Finds" },
    hero: { kicker: "Independent OOPBuy research index", title: "OOPBuy Spreadsheet 2026: Find, Check and Plan Your Haul", tagline: "Find first. Check twice. Ship with context.", body: "A category-first OOPBuy spreadsheet guide with live product routes, visible source weights and practical checks before you order.", proof: "Official policies and product routes reviewed · 1 Sep 2026", search: "Search products, categories or styles", searchButton: "Search live index", browse: "Browse the complete index" },
    labels: { sourcePrice: "Approx. source price", listedWeight: "Listed weight", open: "Check live route", viewAll: "View all finds", latest: "Current sample finds", latestBody: "Eight routes across distinct categories. Verify the live option and current price before ordering.", learn: "Read the field guide", independently: "Independent guide — not OOPBuy", updated: "Evidence-led, not volume-led", disclaimer: "Prices are USD estimates converted from the source listing. Product options, prices, availability and weights can change." },
    process: { title: "A spreadsheet is the start of the check", body: "Use one repeatable flow instead of treating a large product count as proof.", steps: [{ title: "Choose a category", body: "Compare similar products and keep the shortlist focused." }, { title: "Open the live route", body: "Confirm item ID, option, source price and visible details." }, { title: "Review warehouse QC", body: "Check the received variant and request missing evidence when needed." }, { title: "Recalculate shipping", body: "Use the current destination, weight, dimensions and available route." }] },
    facts: { title: "What the official workflow supports", body: "These facts are based on current OOPBuy help and product pages; the live platform remains the final source.", items: [{ value: "90 days", label: "Free storage", note: "Official beginner guidance describes 90 days of free warehouse storage." }, { value: "2 payments", label: "Product, then freight", note: "The platform flow separates the product purchase from international shipping." }, { value: "QC photos", label: "Warehouse checkpoint", note: "Official product pages describe photos after the item is stocked." }] },
    faq: [{ q: "Is this the official OOPBuy website?", a: "No. This is an independent product-discovery and research guide. It does not process orders, payments or shipping." }, { q: "Are all listed products verified?", a: "No directory can prove every future variant or seller update. The routes are organized for discovery; open the live source, review the current option and inspect warehouse QC before shipping." }, { q: "Why are prices marked approximate?", a: "The source index lists prices in CNY. USD values here are planning estimates and may change with options, exchange rates or seller updates." }, { q: "Does the listed weight equal shipping weight?", a: "Not necessarily. It is a source reference. Final chargeable weight can depend on warehouse measurement, packaging, dimensions and route rules." }, { q: "How long does OOPBuy store items?", a: "Current official beginner and platform-protection material describes 90 days of free warehouse storage. Confirm the live account rule and any extended-storage conditions before relying on it." }, { q: "What fee information does OOPBuy currently publish?", a: "The public materials checked on 1 September 2026 conflict. The User Registration Agreement describes an 8% platform service fee tied to shipping cost; Service & Fees says there are no other fees beyond the listed cost categories; and the current Google Play description says there is no service fee. Do not apply one percentage as a universal rule. Confirm the current agreement, live checkout and written support response before paying." }, { q: "How quickly must I review warehouse QC?", a: "OOPBuy's published returns guidance says standard return or exchange requests should be submitted within five days after warehouse stock-in. Seller policy, responsibility, freight and service charges can still affect the outcome." }, { q: "Does OOPBuy QC prove authenticity or durability?", a: "No. Photos can help identify the received option and visible defects, but they cannot reliably prove authenticity, exact material composition, internal electronics performance or long-term durability." }, { q: "Can an OOPBuy shipping estimate change?", a: "Yes. A pre-order estimate uses provisional weight and dimensions. Final packaging, warehouse measurement, route availability, chargeable-volume rules and destination can change the live quote." }, { q: "Is OOPBuy highly rated on Trustpilot?", a: "As checked on 1 September 2026, Trustpilot displayed 906 reviews but marked OOPBuy's rating unavailable because of a guideline breach and said it had removed fake reviews. Do not rely on an older star score without checking the current page." }],
    page: {
      spreadsheet: { kicker: "Organized discovery", title: "OOPBuy Spreadsheet 2026: Products, Prices and Checkpoints", body: "Compare dated product routes, price and weight clues, then verify the seller option, warehouse QC and live parcel quote.", points: [{ title: "Category-first research", body: "Ten focused entry points reduce mixed comparisons and make shoes, clothing, accessories and electronics easier to evaluate on their own terms." }, { title: "Dated reference data", body: "Source route, item ID, approximate USD price, listed weight and last-check date are planning evidence—not permanent seller promises." }, { title: "Total-cost context", body: "Domestic freight, payment handling, warehouse options, international shipping and OOPBuy's conflicting public fee statements should all be checked before calling an item cheap." }, { title: "QC decision status", body: "After stock-in, replace assumptions with visible warehouse evidence and record return, hold or approved-for-parcel status." }, { title: "Five-day review clock", body: "Published return guidance makes prompt QC important; seller acceptance and costs still depend on the current case." }, { title: "Maintenance over volume", body: "A smaller index with live routes and clear limits is more useful than thousands of expired or unexplained rows." }] },
      finds: { kicker: "Curated routes", title: "OOPBuy Finds 2026 with Price, Weight and Risk Context", body: "Browse representative shoes, hoodies, T-shirts, jackets, accessories and more, then open the matching live route to verify the exact option before ordering.", points: [{ title: "Matching destination", body: "Every card routes to the corresponding product page rather than a generic registration screen." }, { title: "Comparable metadata", body: "Approximate price and listed weight help screen similar products while remaining clearly labelled as provisional." }, { title: "Option check", body: "The cheapest displayed option may not be the photographed product; confirm size, color, version and seller text." }, { title: "Packaging clue", body: "Rigid boxes, bulky jackets and fragile products deserve a parcel-impact note before they enter a shortlist." }, { title: "Warehouse evidence", body: "A find remains provisional until the received variant and visible condition are reviewed through QC." }, { title: "No authenticity promise", body: "A directory can organize routes and observations, but images and listing text cannot prove authenticity." }] },
      guide: { kicker: "Buying workflow", title: "How to Use OOPBuy: Order, Warehouse, QC and Parcel Guide", body: "A step-by-step OOPBuy buying guide based on the current official workflow, including conflicting fee disclosures, warehouse stock-in, the five-day return window and parcel submission.", points: [{ title: "1. Verify the source", body: "Open the current listing, match item ID and exact option, and keep the original CNY price visible." }, { title: "2. Confirm checkout layers", body: "Separate seller price, domestic delivery, payment handling and every fee shown in the live checkout; do not assume one published percentage applies universally." }, { title: "3. Watch warehouse intake", body: "The official workflow records received goods and makes QC evidence available after stock-in." }, { title: "4. Review within five days", body: "Published return guidance makes prompt identity, condition and measurement checks important." }, { title: "5. Build the parcel", body: "Use the advertised free-storage period to consolidate deliberately, not to postpone inspection." }, { title: "6. Select a live route", body: "Recalculate with measured weight, dimensions, destination, restrictions and current line terms." }] },
      qc: { kicker: "Warehouse evidence", title: "OOPBuy QC Photos: Inspection Checklist Before Shipping", body: "Use OOPBuy QC photos to confirm identity, visible condition and measurements while respecting what warehouse images cannot prove.", points: [{ title: "Confirm identity", body: "Match color, option, quantity, size label and defining features before discussing quality." }, { title: "Inspect large shapes", body: "Review pair symmetry, overall proportions, panel alignment and obvious deformation before zooming in." }, { title: "Check construction", body: "Look for visible seams, edges, closures, prints, stains, scratches and missing pieces." }, { title: "Measure fit", body: "A tag is not a measurement; compare ruler views with a similar item you already own." }, { title: "Know photo limits", body: "QC cannot reliably prove authenticity, durability, fiber content or internal electronic performance." }, { title: "Document the outcome", body: "Mark return, hold for evidence or approved for parcel planning before consolidation." }] },
      shipping: { kicker: "Cost planning", title: "OOPBuy Shipping Cost Guide: Estimate Weight, Volume and Routes", body: "Estimate OOPBuy shipping with destination, measured weight, dimensions, packaging and product restrictions instead of relying on one universal price-per-kilogram claim.", points: [{ title: "Use a cost range", body: "Model both seller-stated and heavier packed outcomes before ordering." }, { title: "Measure volume", body: "A light but bulky parcel may face route-specific dimensional or chargeable-weight rules." }, { title: "Choose packaging by risk", body: "Vacuum packing can reduce soft-goods volume, while fragile items may need added protection." }, { title: "Compare parcel plans", body: "Test consolidation against a split shipment when one item is bulky or restricted." }, { title: "Review route exclusions", body: "Prohibited goods, destination rules and compensation terms differ from simple freight pricing." }, { title: "Live quote wins", body: "Final warehouse measurements and current route availability replace all pre-order estimates." }] },
      faq: { kicker: "Straight answers", title: "OOPBuy FAQ: Fees, Returns, Storage, QC and Shipping", body: "Fact-checked answers based on OOPBuy's current official guides and policies, with a clear distinction between published platform terms and independent customer reports.", points: [] },
      articles: { kicker: "Independent research", title: "OOPBuy Guides and Reviews: Research Library", body: "Long-form, source-linked guides covering OOPBuy spreadsheets, QC photos, shipping cost, fees and the evidence behind current customer-review claims.", points: [] },
    },
    footer: "Independent OOPBuy research and product-discovery guide. No orders or payments are processed here.",
  }),
  de: null as unknown as Copy,
  es: null as unknown as Copy,
  fr: null as unknown as Copy,
  it: null as unknown as Copy,
};

const localizedBase: Record<Exclude<Language, "en">, {
  nav: string[]; cats: string[]; hero: string[]; labels: string[]; process: string[]; faq: { q: string; a: string }[]; pages: Record<string, string[]>; footer: string;
}> = {
  de: {
    nav: ["Start", "Spreadsheet", "Funde", "Anleitung", "QC", "Versand", "FAQ", "Artikel"], cats: ["Schuhe", "Hoodies", "T-Shirts", "Jacken", "Hosen & Shorts", "Kopfbedeckung", "Accessoires", "Trikots", "Elektronik", "Weitere Funde"],
    hero: ["Unabhängiger OOPBuy-Rechercheindex", "Erst finden. Zweimal prüfen. Mit Kontext versenden.", "Ein kategoriebasierter OOPBuy-Spreadsheet-Guide mit aktuellen Produktrouten, sichtbaren Gewichten und praktischen Prüfungen vor der Bestellung.", "Offizielle Richtlinien und Produktrouten geprüft · 1. Sept. 2026", "Produkte, Kategorien oder Stile suchen", "Live-Index durchsuchen", "Kompletten Index öffnen"],
    labels: ["Ungefährer Quellpreis", "Gelistetes Gewicht", "Live-Route prüfen", "Alle Funde ansehen", "Aktuelle Beispiel-Funde", "Acht Routen aus verschiedenen Kategorien. Option und Preis vor der Bestellung live prüfen.", "Praxisguide lesen", "Unabhängiger Guide — nicht OOPBuy", "Belege statt Mengenversprechen", "USD-Preise sind Schätzwerte aus dem Quellpreis. Optionen, Verfügbarkeit und Gewichte können sich ändern."],
    process: ["Eine Spreadsheet ist der Beginn der Prüfung", "Nutze einen wiederholbaren Ablauf statt eine große Produktzahl als Beweis zu behandeln.", "Kategorie wählen", "Ähnliche Produkte vergleichen und die Auswahl fokussieren.", "Live-Route öffnen", "ID, Option, Quellpreis und Details bestätigen.", "Lager-QC prüfen", "Variante prüfen und fehlende Ansichten anfordern.", "Versand neu berechnen", "Ziel, Gewicht, Maße und verfügbare Route verwenden."],
    faq: [{ q: "Ist dies die offizielle OOPBuy-Website?", a: "Nein. Dies ist ein unabhängiger Recherche- und Produktguide. Bestellungen, Zahlungen und Versand werden hier nicht verarbeitet." }, { q: "Sind alle Produkte verifiziert?", a: "Eine Liste kann künftige Varianten oder Verkäuferänderungen nicht garantieren. Öffne die Live-Quelle und prüfe später die Lagerfotos." }, { q: "Warum sind Preise ungefähr?", a: "Die Quelle listet CNY. USD-Werte dienen nur der Planung und können sich durch Optionen oder Wechselkurse ändern." }, { q: "Ist das gelistete Gewicht das Versandgewicht?", a: "Nicht zwingend. Lagermaße, Verpackung, Volumen und Routenregeln können das abrechenbare Gewicht verändern." }, { q: "Wie lange lagert OOPBuy Artikel kostenlos?", a: "Aktuelle offizielle Einsteigerinformationen nennen 90 Tage. Prüfe die aktuelle Regel im Live-Konto." }],
    pages: { spreadsheet: ["Organisierte Suche", "OOPBuy Spreadsheet als Entscheidungshilfe", "Kategorien und sichtbare Referenzdaten helfen beim Erstellen einer sauberen Auswahlliste."], finds: ["Kuratierte Routen", "OOPBuy-Funde mit Vergleichskontext", "Öffne repräsentative Produkte und prüfe danach die aktive Quelle."], guide: ["Kaufablauf", "Vom Quelllink zum empfangenen Paket", "Eine praktische Reihenfolge auf Basis des aktuellen OOPBuy-Ablaufs."], qc: ["Lagerbelege", "OOPBuy-QC-Fotos in fester Reihenfolge lesen", "Zuerst den Artikel bestätigen, dann Form, Maße und Details prüfen."], shipping: ["Kostenplanung", "OOPBuy-Versand vor dem Haul schätzen", "Gewicht, Maße und Verpackung können einen günstigen Fund teuer machen."], faq: ["Klare Antworten", "OOPBuy-Fragen ohne übertriebene Versprechen", "Klare Grenzen zwischen Produktsuche und Plattformservice."], articles: ["Unabhängige Recherche", "OOPBuy-Praxisguides", "Praktische Inhalte zu Spreadsheet, QC und Versand."] }, footer: "Unabhängiger OOPBuy-Recherche- und Produktguide. Keine Bestellungen oder Zahlungen auf dieser Seite.",
  },
  es: {
    nav: ["Inicio", "Hoja", "Hallazgos", "Guía", "QC", "Envío", "FAQ", "Artículos"], cats: ["Calzado", "Sudaderas", "Camisetas", "Chaquetas", "Pantalones", "Gorras", "Accesorios", "Camisetas deportivas", "Electrónica", "Más hallazgos"],
    hero: ["Índice independiente de OOPBuy", "Encuentra primero. Comprueba dos veces. Envía con contexto.", "Guía de hoja OOPBuy por categorías, con rutas activas, pesos visibles y comprobaciones prácticas antes de comprar.", "Políticas oficiales y rutas revisadas · 1 sep 2026", "Buscar productos, categorías o estilos", "Buscar en el índice", "Abrir índice completo"],
    labels: ["Precio fuente aprox.", "Peso listado", "Comprobar ruta", "Ver todos", "Hallazgos actuales", "Ocho rutas de categorías distintas. Comprueba opción y precio antes de comprar.", "Leer guía", "Guía independiente — no es OOPBuy", "Evidencia, no cifras infladas", "Los precios USD son estimaciones. Opciones, disponibilidad y pesos pueden cambiar."],
    process: ["La hoja inicia la comprobación", "Usa un proceso repetible en vez de tratar una cifra grande como prueba.", "Elige categoría", "Compara productos parecidos y limita la lista.", "Abre la ruta activa", "Confirma ID, opción, precio y detalles.", "Revisa el QC", "Comprueba la variante y pide pruebas que falten.", "Recalcula el envío", "Usa destino, peso, medidas y ruta actuales."],
    faq: [{ q: "¿Es la web oficial de OOPBuy?", a: "No. Es una guía independiente de investigación y descubrimiento. No procesa pedidos, pagos ni envíos." }, { q: "¿Todos los productos están verificados?", a: "Ningún directorio puede garantizar futuras variantes. Abre la fuente activa y revisa las fotos QC del almacén." }, { q: "¿Por qué los precios son aproximados?", a: "La fuente utiliza CNY. Los valores USD sirven para planificar y pueden cambiar." }, { q: "¿El peso listado es el peso de envío?", a: "No siempre. Medición, embalaje, volumen y ruta pueden cambiar el peso facturable." }, { q: "¿Cuánto tiempo almacena OOPBuy gratis?", a: "La guía oficial actual indica 90 días. Confirma siempre la regla vigente en tu cuenta." }],
    pages: { spreadsheet: ["Descubrimiento organizado", "Hoja OOPBuy como herramienta de decisión", "Las categorías y datos visibles ayudan a crear una lista limpia."], finds: ["Rutas seleccionadas", "Hallazgos OOPBuy con contexto", "Explora productos representativos y continúa a la fuente activa."], guide: ["Proceso de compra", "Del enlace fuente al paquete", "Secuencia práctica basada en el flujo actual de OOPBuy."], qc: ["Evidencia de almacén", "Cómo leer fotos QC de OOPBuy", "Confirma el artículo y después revisa forma, medidas y detalles."], shipping: ["Planificación", "Estima el envío OOPBuy antes del haul", "Peso, medidas y embalaje pueden cambiar el coste."], faq: ["Respuestas claras", "Preguntas OOPBuy sin promesas infladas", "Límites claros entre descubrimiento y servicio."], articles: ["Investigación independiente", "Guías prácticas OOPBuy", "Lecturas sobre hojas, QC y envío."] }, footer: "Guía independiente de investigación y productos OOPBuy. No procesa pedidos ni pagos.",
  },
  fr: {
    nav: ["Accueil", "Tableur", "Trouvailles", "Guide", "QC", "Livraison", "FAQ", "Articles"], cats: ["Chaussures", "Sweats", "T-Shirts", "Vestes", "Pantalons", "Couvre-chefs", "Accessoires", "Maillots", "Électronique", "Autres trouvailles"],
    hero: ["Index de recherche OOPBuy indépendant", "Trouver. Vérifier deux fois. Expédier avec méthode.", "Un guide OOPBuy par catégories avec routes actives, poids visibles et contrôles pratiques avant commande.", "Règles officielles et routes vérifiées · 1 sept. 2026", "Rechercher produits, catégories ou styles", "Chercher dans l'index", "Ouvrir l'index complet"],
    labels: ["Prix source estimé", "Poids indiqué", "Vérifier la route", "Voir toutes les trouvailles", "Sélection actuelle", "Huit routes de catégories différentes. Vérifiez option et prix avant commande.", "Lire le guide", "Guide indépendant — pas OOPBuy", "Des preuves, pas des volumes", "Les prix USD sont estimatifs. Options, disponibilité et poids peuvent changer."],
    process: ["Le tableur commence le contrôle", "Suivez une méthode répétable au lieu de prendre un grand chiffre pour une preuve.", "Choisir une catégorie", "Comparer des articles similaires.", "Ouvrir la route active", "Confirmer ID, option, prix et détails.", "Contrôler le QC", "Vérifier la variante et demander les vues manquantes.", "Recalculer l'envoi", "Utiliser destination, poids, dimensions et route actuels."],
    faq: [{ q: "Est-ce le site officiel OOPBuy ?", a: "Non. C'est un guide indépendant de recherche et de découverte. Il ne traite ni commande, ni paiement, ni livraison." }, { q: "Tous les produits sont-ils vérifiés ?", a: "Aucun répertoire ne peut garantir les variantes futures. Ouvrez la source active et contrôlez les photos QC." }, { q: "Pourquoi les prix sont-ils estimatifs ?", a: "La source utilise le CNY. Les valeurs USD servent à planifier et peuvent évoluer." }, { q: "Le poids indiqué est-il le poids facturé ?", a: "Pas forcément. Mesure, emballage, volume et route peuvent modifier le poids facturable." }, { q: "Combien de temps OOPBuy stocke-t-il gratuitement ?", a: "Le guide officiel actuel mentionne 90 jours. Vérifiez la règle dans votre compte." }],
    pages: { spreadsheet: ["Découverte organisée", "Le tableur OOPBuy comme outil de décision", "Catégories et données visibles facilitent une sélection propre."], finds: ["Routes sélectionnées", "Trouvailles OOPBuy avec contexte", "Explorez des produits puis ouvrez la source active."], guide: ["Parcours d'achat", "Du lien source au colis reçu", "Une séquence pratique fondée sur le parcours OOPBuy actuel."], qc: ["Preuves d'entrepôt", "Lire les photos QC OOPBuy", "Confirmez l'article puis contrôlez forme, mesures et détails."], shipping: ["Planification des coûts", "Estimer l'envoi OOPBuy avant le haul", "Poids, dimensions et emballage peuvent changer le coût."], faq: ["Réponses directes", "Questions OOPBuy sans promesses exagérées", "Une séparation claire entre découverte et service."], articles: ["Recherche indépendante", "Guides pratiques OOPBuy", "Contenus sur tableur, QC et expédition."] }, footer: "Guide indépendant de recherche et de produits OOPBuy. Aucune commande ou paiement n'est traité ici.",
  },
  it: {
    nav: ["Home", "Foglio", "Trova", "Guida", "QC", "Spedizione", "FAQ", "Articoli"], cats: ["Scarpe", "Felpe", "T-Shirt", "Giacche", "Pantaloni", "Cappelli", "Accessori", "Maglie", "Elettronica", "Altri prodotti"],
    hero: ["Indice indipendente OOPBuy", "Trova prima. Controlla due volte. Spedisci con criterio.", "Una guida OOPBuy per categorie con percorsi attivi, pesi visibili e controlli pratici prima dell'ordine.", "Regole ufficiali e percorsi verificati · 1 set 2026", "Cerca prodotti, categorie o stili", "Cerca nell'indice", "Apri indice completo"],
    labels: ["Prezzo fonte stimato", "Peso indicato", "Controlla percorso", "Vedi tutti", "Prodotti attuali", "Otto percorsi di categorie diverse. Controlla opzione e prezzo prima di ordinare.", "Leggi la guida", "Guida indipendente — non OOPBuy", "Prove, non numeri gonfiati", "I prezzi USD sono stime. Opzioni, disponibilità e pesi possono cambiare."],
    process: ["Il foglio avvia il controllo", "Usa un processo ripetibile invece di considerare un grande numero come prova.", "Scegli categoria", "Confronta prodotti simili.", "Apri il percorso attivo", "Conferma ID, opzione, prezzo e dettagli.", "Controlla il QC", "Verifica la variante e chiedi le viste mancanti.", "Ricalcola la spedizione", "Usa destinazione, peso, misure e rotta attuali."],
    faq: [{ q: "È il sito ufficiale OOPBuy?", a: "No. È una guida indipendente di ricerca e scoperta. Non gestisce ordini, pagamenti o spedizioni." }, { q: "Tutti i prodotti sono verificati?", a: "Nessun catalogo può garantire varianti future. Apri la fonte attiva e controlla le foto QC." }, { q: "Perché i prezzi sono approssimativi?", a: "La fonte usa CNY. I valori USD servono per pianificare e possono cambiare." }, { q: "Il peso indicato è quello di spedizione?", a: "Non sempre. Misurazione, imballaggio, volume e rotta possono cambiare il peso fatturabile." }, { q: "Quanto conserva gratis OOPBuy?", a: "La guida ufficiale attuale indica 90 giorni. Verifica la regola nel tuo account." }],
    pages: { spreadsheet: ["Scoperta organizzata", "Foglio OOPBuy come strumento decisionale", "Categorie e dati visibili aiutano a creare una selezione pulita."], finds: ["Percorsi selezionati", "Trova OOPBuy con contesto", "Esplora prodotti e continua verso la fonte attiva."], guide: ["Flusso d'acquisto", "Dal link al pacco ricevuto", "Una sequenza pratica basata sul flusso OOPBuy attuale."], qc: ["Prove di magazzino", "Leggere le foto QC OOPBuy", "Conferma l'articolo e controlla forma, misure e dettagli."], shipping: ["Pianificazione costi", "Stima la spedizione OOPBuy prima del haul", "Peso, dimensioni e imballaggio possono cambiare il costo."], faq: ["Risposte chiare", "Domande OOPBuy senza promesse gonfiate", "Confini chiari tra scoperta e servizio."], articles: ["Ricerca indipendente", "Guide pratiche OOPBuy", "Letture su fogli, QC e spedizione."] }, footer: "Guida indipendente di ricerca e prodotti OOPBuy. Nessun ordine o pagamento viene gestito qui.",
  },
};

const localizedExtras: Record<Exclude<Language, "en">, {
  facts: Copy["facts"];
  points: Record<string, { title: string; body: string }[]>;
}> = {
  de: {
    facts: { title: "Was der offizielle Ablauf unterstützt", body: "Diese Angaben beruhen auf aktuellen OOPBuy-Hilfe- und Produktseiten; die Live-Plattform bleibt die letzte Quelle.", items: [{ value: "90 Tage", label: "Kostenlose Lagerung", note: "Der offizielle Einsteiger-Guide beschreibt 90 Tage kostenlose Lagerung." }, { value: "2 Zahlungen", label: "Ware, dann Fracht", note: "Der Ablauf trennt den Produktkauf von der internationalen Versandzahlung." }, { value: "QC-Fotos", label: "Kontrolle im Lager", note: "Offizielle Produktseiten beschreiben Fotos nach der Einlagerung." }] },
    points: {
      spreadsheet: [{ title: "Nach Kategorien", body: "Zehn klare Einstiege vermeiden gemischte Vergleiche." }, { title: "Sichtbare Referenzen", body: "Route, Gewicht und geschätzter USD-Preis bleiben direkt erkennbar." }, { title: "Keine Pauschalgarantie", body: "Jede Live-Option benötigt eine aktuelle Quellen- und QC-Prüfung." }],
      finds: [{ title: "Passendes Ziel", body: "Karten führen zur zugehörigen Produktseite statt zu einer allgemeinen Anmeldung." }, { title: "Nützliche Daten", body: "Preis und Gewicht sind Planungshinweise, keine Garantien." }, { title: "Saubere Auswahl", body: "Vergleiche drei ähnliche Produkte vor der engeren Prüfung." }],
      guide: [{ title: "1. Quelle", body: "Aktuelles Angebot öffnen und die genaue Option bestätigen." }, { title: "2. Lager", body: "Einlagerung abwarten und verfügbare QC-Belege prüfen." }, { title: "3. Paket", body: "Mit gemessenem Gewicht, Maßen und Ziel neu kalkulieren." }],
      qc: [{ title: "Identität", body: "Farbe, Option, Größenetikett und Hauptmerkmale abgleichen." }, { title: "Verarbeitung", body: "Symmetrie, Nähte, Kanten, Verschlüsse und sichtbare Mängel prüfen." }, { title: "Grenzen", body: "Fotos beweisen keine Haltbarkeit, interne Funktion oder Authentizität." }],
      shipping: [{ title: "Gewicht und Volumen", body: "Einige Routen berechnen große Pakete nach Volumengewicht." }, { title: "Gezielt bündeln", body: "Erst nach QC zusammenstellen und Routenlimits beachten." }, { title: "Live-Angebot zählt", body: "Aktuelle Verfügbarkeit und endgültige Lagermaße haben Vorrang." }],
    },
  },
  es: {
    facts: { title: "Lo que admite el flujo oficial", body: "Datos basados en páginas actuales de ayuda y producto; la plataforma activa es la fuente final.", items: [{ value: "90 días", label: "Almacenamiento gratis", note: "La guía oficial para principiantes describe 90 días gratuitos." }, { value: "2 pagos", label: "Producto y después flete", note: "El proceso separa la compra del pago del envío internacional." }, { value: "Fotos QC", label: "Control de almacén", note: "Las páginas oficiales describen fotos después de almacenar el artículo." }] },
    points: {
      spreadsheet: [{ title: "Primero la categoría", body: "Diez entradas claras reducen comparaciones mezcladas." }, { title: "Datos visibles", body: "Ruta, peso y precio USD estimado están a la vista." }, { title: "Sin garantía global", body: "Cada opción necesita una comprobación actual de fuente y QC." }],
      finds: [{ title: "Destino directo", body: "Las fichas abren el producto correspondiente, no un registro genérico." }, { title: "Datos útiles", body: "Precio y peso son referencias de planificación." }, { title: "Lista disciplinada", body: "Compara tres artículos similares antes de elegir." }],
      guide: [{ title: "1. Fuente", body: "Abre la oferta actual y confirma la opción exacta." }, { title: "2. Almacén", body: "Espera la entrada y revisa la evidencia QC disponible." }, { title: "3. Paquete", body: "Recalcula con peso, medidas y destino reales." }],
      qc: [{ title: "Identidad", body: "Compara color, opción, talla y rasgos principales." }, { title: "Construcción", body: "Revisa simetría, costuras, bordes, cierres y defectos visibles." }, { title: "Límites", body: "Las fotos no prueban durabilidad, funcionamiento interno o autenticidad." }],
      shipping: [{ title: "Peso y volumen", body: "Algunas rutas calculan los paquetes grandes por volumen." }, { title: "Consolida con criterio", body: "Agrupa después del QC y respeta límites de ruta." }, { title: "Manda la tarifa activa", body: "La disponibilidad y medidas finales tienen prioridad." }],
    },
  },
  fr: {
    facts: { title: "Ce que permet le parcours officiel", body: "Informations fondées sur les pages d'aide et de produit actuelles; la plateforme active reste la source finale.", items: [{ value: "90 jours", label: "Stockage gratuit", note: "Le guide officiel débutant décrit 90 jours de stockage gratuit." }, { value: "2 paiements", label: "Produit puis fret", note: "Le parcours sépare l'achat du produit du paiement du transport international." }, { value: "Photos QC", label: "Contrôle d'entrepôt", note: "Les pages produit officielles décrivent les photos après stockage." }] },
    points: {
      spreadsheet: [{ title: "Catégorie d'abord", body: "Dix entrées claires réduisent les comparaisons mélangées." }, { title: "Données visibles", body: "Route, poids et prix USD estimé restent lisibles." }, { title: "Pas de garantie globale", body: "Chaque option nécessite un contrôle actuel de la source et du QC." }],
      finds: [{ title: "Destination directe", body: "Les fiches ouvrent le produit correspondant, pas une inscription générale." }, { title: "Données utiles", body: "Prix et poids sont des références de planification." }, { title: "Sélection disciplinée", body: "Comparez trois produits proches avant de choisir." }],
      guide: [{ title: "1. Source", body: "Ouvrir l'offre actuelle et confirmer l'option exacte." }, { title: "2. Entrepôt", body: "Attendre le stockage et contrôler les preuves QC." }, { title: "3. Colis", body: "Recalculer avec poids, mesures et destination réels." }],
      qc: [{ title: "Identité", body: "Comparer couleur, option, taille et principaux éléments." }, { title: "Construction", body: "Contrôler symétrie, coutures, bords, fermetures et défauts visibles." }, { title: "Limites", body: "Les photos ne prouvent ni durabilité, ni fonctionnement interne, ni authenticité." }],
      shipping: [{ title: "Poids et volume", body: "Certaines routes facturent les grands colis selon le volume." }, { title: "Regrouper avec méthode", body: "Assembler après le QC en respectant les limites." }, { title: "Le devis actif prime", body: "Disponibilité et mesures finales restent prioritaires." }],
    },
  },
  it: {
    facts: { title: "Cosa supporta il flusso ufficiale", body: "Informazioni basate sulle pagine attuali di aiuto e prodotto; la piattaforma live resta la fonte finale.", items: [{ value: "90 giorni", label: "Deposito gratuito", note: "La guida ufficiale per principianti descrive 90 giorni gratuiti." }, { value: "2 pagamenti", label: "Prodotto, poi trasporto", note: "Il flusso separa l'acquisto dal pagamento della spedizione internazionale." }, { value: "Foto QC", label: "Controllo magazzino", note: "Le pagine ufficiali descrivono le foto dopo lo stoccaggio." }] },
    points: {
      spreadsheet: [{ title: "Prima la categoria", body: "Dieci ingressi chiari riducono confronti mescolati." }, { title: "Dati visibili", body: "Percorso, peso e prezzo USD stimato restano leggibili." }, { title: "Nessuna garanzia globale", body: "Ogni opzione richiede un controllo attuale di fonte e QC." }],
      finds: [{ title: "Destinazione diretta", body: "Le schede aprono il prodotto corrispondente, non una registrazione generica." }, { title: "Dati utili", body: "Prezzo e peso sono riferimenti di pianificazione." }, { title: "Selezione disciplinata", body: "Confronta tre articoli simili prima di scegliere." }],
      guide: [{ title: "1. Fonte", body: "Apri l'offerta attuale e conferma l'opzione esatta." }, { title: "2. Magazzino", body: "Attendi lo stoccaggio e controlla le prove QC." }, { title: "3. Pacco", body: "Ricalcola con peso, misure e destinazione reali." }],
      qc: [{ title: "Identità", body: "Confronta colore, opzione, taglia ed elementi principali." }, { title: "Costruzione", body: "Controlla simmetria, cuciture, bordi, chiusure e difetti visibili." }, { title: "Limiti", body: "Le foto non provano durata, funzione interna o autenticità." }],
      shipping: [{ title: "Peso e volume", body: "Alcune rotte calcolano i pacchi grandi in base al volume." }, { title: "Consolida con criterio", body: "Raggruppa dopo il QC rispettando i limiti." }, { title: "Conta il preventivo live", body: "Disponibilità e misure finali hanno la priorità." }],
    },
  },
};

const localizedFaqExtras: Record<Exclude<Language, "en">, Copy["faq"]> = {
  de: [
    { q: "Welche Gebühreninformationen veröffentlicht OOPBuy derzeit?", a: "Die am 1. September 2026 geprüften öffentlichen Angaben widersprechen sich: Die Nutzungsvereinbarung beschreibt 8 % bezogen auf die Versandkosten, Service & Fees nennt außer den aufgeführten Kostenarten keine weiteren Gebühren und der aktuelle Google-Play-Text wirbt mit keiner Servicegebühr. Nutze keinen einzelnen Prozentsatz als allgemeine Regel und bestätige Vereinbarung, Live-Checkout und eine schriftliche Supportauskunft vor der Zahlung." },
    { q: "Wie schnell muss ich Lager-QC prüfen?", a: "OOPBuys veröffentlichte Rückgabeinformationen nennen fünf Tage nach der Einlagerung für Standardanträge. Verkäuferregeln, Verantwortlichkeit, Fracht und Servicekosten können das Ergebnis trotzdem beeinflussen." },
    { q: "Beweist OOPBuy-QC Echtheit oder Haltbarkeit?", a: "Nein. Fotos können die sichtbare Variante und erkennbare Mängel prüfen, aber nicht zuverlässig Echtheit, genaue Materialzusammensetzung, interne Elektronikfunktion oder langfristige Haltbarkeit belegen." },
    { q: "Kann sich eine OOPBuy-Versandschätzung ändern?", a: "Ja. Eine Vorschätzung nutzt vorläufige Gewichte und Maße. Endverpackung, Lagermessung, verfügbare Linien, Volumenregeln und Ziel können das Live-Angebot verändern." },
    { q: "Ist OOPBuy auf Trustpilot hoch bewertet?", a: "Am 1. September 2026 zeigte Trustpilot 906 Bewertungen, aber wegen eines Richtlinienverstoßes keine verfügbare Gesamtnote und meldete entfernte Fake-Bewertungen. Prüfe die aktuelle Seite statt alter Sterneangaben." },
  ],
  es: [
    { q: "¿Qué información sobre comisiones publica actualmente OOPBuy?", a: "Los materiales públicos revisados el 1 de septiembre de 2026 se contradicen: el acuerdo vincula un 8 % al coste de envío, Service & Fees dice que no hay otros cargos fuera de las categorías indicadas y la descripción actual de Google Play afirma que no hay comisión de servicio. No uses un porcentaje como regla universal; confirma el acuerdo, el checkout activo y una respuesta escrita de soporte antes de pagar." },
    { q: "¿Cuándo debo revisar el QC de almacén?", a: "La información de devoluciones publicada por OOPBuy indica cinco días desde la entrada para solicitudes ordinarias. Política del vendedor, responsabilidad, transporte y servicio todavía pueden afectar el resultado." },
    { q: "¿El QC de OOPBuy demuestra autenticidad o durabilidad?", a: "No. Las fotos ayudan a confirmar la variante visible y defectos exteriores, pero no prueban autenticidad, composición exacta, funcionamiento interno ni durabilidad a largo plazo." },
    { q: "¿Puede cambiar una estimación de envío OOPBuy?", a: "Sí. La estimación previa usa pesos y medidas provisionales. Embalaje final, medición del almacén, rutas disponibles, reglas de volumen y destino pueden cambiar la cotización." },
    { q: "¿Tiene OOPBuy una valoración alta en Trustpilot?", a: "El 1 de septiembre de 2026 Trustpilot mostraba 906 reseñas, pero la nota no estaba disponible por incumplimiento de directrices y decía haber retirado reseñas falsas. Consulta la página actual, no una nota antigua." },
  ],
  fr: [
    { q: "Quelles informations sur les frais OOPBuy publie-t-il actuellement ?", a: "Les documents publics vérifiés le 1er septembre 2026 se contredisent : l'accord décrit 8 % liés au coût d'expédition, Service & Fees n'annonce pas d'autres frais hors des catégories indiquées et la description Google Play actuelle affirme qu'il n'y a pas de frais de service. N'appliquez pas un pourcentage comme règle universelle ; confirmez l'accord, le checkout actif et une réponse écrite du support avant paiement." },
    { q: "Quand faut-il examiner le QC d'entrepôt ?", a: "Les informations de retour publiées par OOPBuy indiquent cinq jours après l'entrée pour une demande ordinaire. Politique vendeur, responsabilité, transport et frais de service peuvent encore modifier l'issue." },
    { q: "Le QC OOPBuy prouve-t-il l'authenticité ou la durabilité ?", a: "Non. Les photos aident à confirmer la variante visible et certains défauts, mais ne prouvent ni authenticité, ni composition exacte, ni fonctionnement interne, ni durabilité." },
    { q: "Une estimation d'expédition OOPBuy peut-elle changer ?", a: "Oui. L'estimation préalable repose sur des poids et dimensions provisoires. Emballage final, mesures, disponibilité des lignes, règles volumétriques et destination peuvent changer le devis." },
    { q: "OOPBuy est-il bien noté sur Trustpilot ?", a: "Le 1er septembre 2026, Trustpilot affichait 906 avis mais aucune note disponible à cause d'une violation des règles et indiquait avoir retiré de faux avis. Vérifiez la page actuelle plutôt qu'une ancienne note." },
  ],
  it: [
    { q: "Quali informazioni sulle commissioni pubblica oggi OOPBuy?", a: "I materiali pubblici verificati il 1 settembre 2026 sono in conflitto: l'accordo descrive l'8% collegato al costo di spedizione, Service & Fees afferma che non esistono altri addebiti oltre alle categorie indicate e la descrizione attuale su Google Play dichiara nessuna commissione di servizio. Non usare una percentuale come regola universale; conferma accordo, checkout live e una risposta scritta del supporto prima di pagare." },
    { q: "Quando devo controllare il QC di magazzino?", a: "Le informazioni sui resi pubblicate da OOPBuy indicano cinque giorni dall'ingresso per richieste ordinarie. Regole venditore, responsabilità, trasporto e servizio possono comunque cambiare l'esito." },
    { q: "Il QC OOPBuy prova autenticità o durata?", a: "No. Le foto aiutano a confermare la variante visibile e difetti esterni, ma non provano autenticità, composizione esatta, funzionamento interno o durata a lungo termine." },
    { q: "Una stima di spedizione OOPBuy può cambiare?", a: "Sì. La stima preliminare usa peso e misure provvisori. Imballaggio finale, misurazione, rotte disponibili, regole volumetriche e destinazione possono cambiare il preventivo." },
    { q: "OOPBuy ha un punteggio alto su Trustpilot?", a: "Il 1 settembre 2026 Trustpilot mostrava 906 recensioni, ma nessun punteggio disponibile per violazione delle linee guida e dichiarava di aver rimosso recensioni false. Controlla la pagina attuale, non un vecchio voto." },
  ],
};

const localizedPointExtras: Record<Exclude<Language, "en">, Record<string, { title: string; body: string }[]>> = {
  de: {
    spreadsheet: [{ title: "Gesamtkosten statt Kartenpreis", body: "Inlandsfracht, Zahlung, Lageroptionen, internationale Fracht und widersprüchliche veröffentlichte Gebührenangaben getrennt prüfen." }, { title: "QC-Status dokumentieren", body: "Rückgabe, Beleg fehlt oder Paketfreigabe verhindert ungeprüfte Konsolidierung." }, { title: "Wartung vor Volumen", body: "Prüfdaten, aktive Links und entfernte Dubletten sind wertvoller als ungepflegte Zeilenzahlen." }],
    finds: [{ title: "Option live bestätigen", body: "Farbe, Größe, Variante und aktuelle Beschreibung müssen zur gespeicherten Karte passen." }, { title: "Verpackungshinweis", body: "Starre Boxen und voluminöse Waren früh markieren, weil sie Versandkosten beeinflussen." }, { title: "Keine Echtheitszusage", body: "Eine Produktroute oder ein Foto beweist weder Herkunft noch künftige Verkäuferqualität." }],
    guide: [{ title: "Kostenebenen trennen", body: "Produkt, Inlandsfracht, Agent, Zahlung, Lager und internationale Fracht einzeln erfassen." }, { title: "Fünf-Tage-Fenster", body: "QC unmittelbar nach Einlagerung prüfen, solange Standardanträge laut Richtlinie möglich sind." }, { title: "Live-Route wählen", body: "Erst mit finalen Paketmaßen aktuelle Linien, Einschränkungen und Deckung vergleichen." }],
    qc: [{ title: "Gesamtform", body: "Bei Paaren Symmetrie und bei Kleidung Proportionen vor kleinen Details ansehen." }, { title: "Maße und Kompatibilität", body: "Etiketten durch relevante Ruler-Fotos, Modellnummern und Anschlüsse ergänzen." }, { title: "Entscheidungsstatus", body: "Jede Prüfung endet mit Rückgabe, Warten auf Beleg oder Versandfreigabe." }],
    shipping: [{ title: "Kostenbandbreite", body: "Niedrige und hohe Schätzung statt einer scheinbar exakten Zahl bilden." }, { title: "Verpackungswahl", body: "Vakuum, Boxentfernung oder Verstärkung nur für ein konkretes Produkt- und Schadensrisiko wählen." }, { title: "Einschränkungen und Deckung", body: "Produktregeln, Zollverantwortung, Versicherung und Ausschlüsse separat prüfen." }],
  },
  es: {
    spreadsheet: [{ title: "Coste total, no solo la ficha", body: "Separa transporte nacional, pago, almacén, flete internacional y las declaraciones públicas contradictorias sobre comisiones." }, { title: "Estado de QC", body: "Devolver, falta prueba o aprobado para paquete evita consolidar artículos sin revisar." }, { title: "Mantenimiento antes que volumen", body: "Fechas, enlaces activos y duplicados retirados valen más que miles de filas abandonadas." }],
    finds: [{ title: "Confirmar la opción activa", body: "Color, talla, variante y descripción actual deben coincidir con la tarjeta guardada." }, { title: "Pista de embalaje", body: "Marca cajas rígidas y artículos voluminosos porque pueden cambiar el transporte." }, { title: "Sin promesa de autenticidad", body: "Una ruta o una foto no demuestra origen ni calidad futura del vendedor." }],
    guide: [{ title: "Separar capas de coste", body: "Registra producto, entrega nacional, agente, pago, almacén y transporte internacional por separado." }, { title: "Ventana de cinco días", body: "Revisa el QC al entrar, mientras la política publicada contempla solicitudes ordinarias." }, { title: "Elegir ruta activa", body: "Con las medidas finales compara líneas, restricciones y cobertura vigentes." }],
    qc: [{ title: "Forma general", body: "Revisa simetría del par y proporciones de la prenda antes del detalle." }, { title: "Medidas y compatibilidad", body: "Complementa etiquetas con fotos de regla, modelo, enchufe y conectores relevantes." }, { title: "Estado de decisión", body: "Cada revisión termina en devolución, espera de prueba o aprobación de envío." }],
    shipping: [{ title: "Rango de coste", body: "Calcula un escenario bajo y otro alto en lugar de una cifra falsamente precisa." }, { title: "Elección de embalaje", body: "Vacío, retirada de caja o refuerzo deben responder a un riesgo concreto." }, { title: "Restricciones y cobertura", body: "Comprueba por separado producto, aduana, seguro y exclusiones de la línea." }],
  },
  fr: {
    spreadsheet: [{ title: "Coût total, pas seulement la fiche", body: "Séparez livraison locale, paiement, entrepôt, fret international et les déclarations publiques contradictoires sur les frais." }, { title: "Statut QC documenté", body: "Retour, preuve absente ou prêt pour le colis évite un regroupement non contrôlé." }, { title: "Entretien avant volume", body: "Dates, liens actifs et doublons retirés valent mieux que des milliers de lignes abandonnées." }],
    finds: [{ title: "Confirmer l'option active", body: "Couleur, taille, variante et description actuelle doivent correspondre à la fiche." }, { title: "Indice d'emballage", body: "Signalez boîtes rigides et articles volumineux car ils peuvent modifier le fret." }, { title: "Aucune promesse d'authenticité", body: "Une route ou une photo ne prouve ni l'origine ni la qualité future du vendeur." }],
    guide: [{ title: "Séparer les couches de coût", body: "Enregistrez produit, livraison locale, agent, paiement, entrepôt et fret séparément." }, { title: "Fenêtre de cinq jours", body: "Contrôlez le QC dès l'entrée tant que la politique prévoit les demandes ordinaires." }, { title: "Choisir la route active", body: "Avec les mesures finales, comparez lignes, restrictions et couverture en vigueur." }],
    qc: [{ title: "Forme générale", body: "Examinez la symétrie d'une paire et les proportions d'un vêtement avant les détails." }, { title: "Mesures et compatibilité", body: "Complétez les étiquettes par photos avec règle, modèle, prise et connecteurs utiles." }, { title: "Statut de décision", body: "Chaque contrôle se termine par retour, attente de preuve ou accord d'expédition." }],
    shipping: [{ title: "Fourchette de coût", body: "Calculez un scénario bas et haut plutôt qu'un chiffre faussement précis." }, { title: "Choix de l'emballage", body: "Vide, retrait de boîte ou renfort doivent répondre à un risque concret." }, { title: "Restrictions et couverture", body: "Contrôlez séparément produit, douane, assurance et exclusions de ligne." }],
  },
  it: {
    spreadsheet: [{ title: "Costo totale, non solo scheda", body: "Separa consegna locale, pagamento, magazzino, trasporto internazionale e le dichiarazioni pubbliche contrastanti sulle commissioni." }, { title: "Stato QC documentato", body: "Reso, prova mancante o pronto per il pacco evita consolidamenti non controllati." }, { title: "Manutenzione prima del volume", body: "Date, link attivi e duplicati rimossi valgono più di migliaia di righe abbandonate." }],
    finds: [{ title: "Confermare l'opzione attiva", body: "Colore, taglia, variante e descrizione corrente devono coincidere con la scheda." }, { title: "Indizio di imballaggio", body: "Segna scatole rigide e articoli voluminosi perché possono cambiare il trasporto." }, { title: "Nessuna promessa di autenticità", body: "Un percorso o una foto non prova origine o qualità futura del venditore." }],
    guide: [{ title: "Separare i livelli di costo", body: "Registra prodotto, consegna locale, agente, pagamento, magazzino e trasporto separatamente." }, { title: "Finestra di cinque giorni", body: "Controlla il QC all'ingresso finché la politica prevede richieste ordinarie." }, { title: "Scegliere la rotta attiva", body: "Con le misure finali confronta linee, restrizioni e copertura correnti." }],
    qc: [{ title: "Forma generale", body: "Guarda simmetria della coppia e proporzioni del capo prima dei piccoli dettagli." }, { title: "Misure e compatibilità", body: "Completa le etichette con foto del righello, modello, spina e connettori utili." }, { title: "Stato decisionale", body: "Ogni controllo termina con reso, attesa di prova o approvazione spedizione." }],
    shipping: [{ title: "Fascia di costo", body: "Calcola uno scenario basso e uno alto invece di un numero falsamente preciso." }, { title: "Scelta dell'imballaggio", body: "Vuoto, rimozione scatola o rinforzo devono rispondere a un rischio concreto." }, { title: "Restrizioni e copertura", body: "Controlla separatamente prodotto, dogana, assicurazione ed esclusioni della linea." }],
  },
};

const localizedHomeTitles: Record<Exclude<Language, "en">, string> = {
  de: "OOPBuy Spreadsheet 2026: Produkte finden, prüfen und den Haul planen",
  es: "OOPBuy Spreadsheet 2026: encuentra, comprueba y planifica tu haul",
  fr: "OOPBuy Spreadsheet 2026 : trouver, vérifier et planifier votre haul",
  it: "OOPBuy Spreadsheet 2026: trova, controlla e pianifica il tuo haul",
};

for (const lang of ["de", "es", "fr", "it"] as const) {
  const x = localizedBase[lang];
  const navKeys = ["home", "spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
  const catKeys: CategoryKey[] = ["shoes", "hoodies", "tshirts", "jackets", "pants", "headwear", "accessories", "jerseys", "electronics", "more"];
  const pageKeys = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
  copy[lang] = makeCopy(lang, {
    nav: Object.fromEntries(navKeys.map((k, i) => [k, x.nav[i]])),
    categories: Object.fromEntries(catKeys.map((k, i) => [k, x.cats[i]])) as Record<CategoryKey, string>,
    hero: { kicker: x.hero[0], title: localizedHomeTitles[lang], tagline: x.hero[1], body: x.hero[2], proof: x.hero[3], search: x.hero[4], searchButton: x.hero[5], browse: x.hero[6] },
    labels: { sourcePrice: x.labels[0], listedWeight: x.labels[1], open: x.labels[2], viewAll: x.labels[3], latest: x.labels[4], latestBody: x.labels[5], learn: x.labels[6], independently: x.labels[7], updated: x.labels[8], disclaimer: x.labels[9] },
    process: { title: x.process[0], body: x.process[1], steps: [0, 1, 2, 3].map(i => ({ title: x.process[2 + i * 2], body: x.process[3 + i * 2] })) },
    facts: localizedExtras[lang].facts,
    faq: [...x.faq, ...localizedFaqExtras[lang]],
    page: Object.fromEntries(pageKeys.map(k => [k, { kicker: x.pages[k][0], title: x.pages[k][1], body: x.pages[k][2], points: [...(localizedExtras[lang].points[k] ?? []), ...(localizedPointExtras[lang][k] ?? [])] }])) as Copy["page"],
    footer: x.footer,
  });
}

export const navKeys = ["home", "spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"] as const;
