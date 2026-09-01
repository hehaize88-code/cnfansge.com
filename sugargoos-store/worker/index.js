const SITE = "https://sugargoos.store";
const CTA = "https://cnfansge.com/";
const CATALOG = "https://cnfansge.com/AllProducts/";
const FACT_CHECKED = "2026-09-01";
const LOCALES = ["en", "de", "es", "fr", "it"];

const UI = {
  en: {
    label: "English", home: "Home", categories: "Category finds", method: "QC method", packing: "Packing", faq: "FAQ",
    kicker: "Category-first warehouse evidence", heroA: "Find less.", heroB: "Verify better.",
    intro: "An independent Sugargoo decision library organized by product category, QC evidence, measurements and warehouse inspection—not by hype or unverified price claims.",
    openCatalog: "Open live catalog", explore: "Explore the evidence guides", current: "Current decision routes", currentText: "Every route starts with the listing and ends with a documented warehouse decision.",
    workflow: "A four-gate inspection workflow", workflowText: "Use the same evidence sequence for every category so a persuasive listing cannot replace a warehouse check.",
    steps: ["Verify listing and exact variant", "Compare visible QC evidence", "Request missing measurements", "Accept, clarify, or return before packing"],
    methodology: "Evidence before opinion", methodologyText: "This library separates visible evidence from assumptions. It does not promise a lowest freight price, fixed delivery time, customs outcome, payment method or universal product eligibility. Check live account options and official rules before acting.",
    checked: "Facts checked", sources: "Official research basis", read: "Open guide", products: "QC decision cards", productsText: "Eight compact starting points for clothing, footwear, links, measurements, inspection and parcel preparation.",
    faqTitle: "Questions before you commit", ctaTitle: "Ready to compare live product routes?", ctaText: "Use the evidence checklist here, then review the current catalog. Product availability and platform status can change.",
    guide: "Inspection guide", overview: "Decision overview", checklist: "Visible evidence checklist", action: "Decision gate", limitations: "Live-data limitations", related: "Related evidence routes",
    returnHome: "Back to the evidence desk", notFound: "This evidence route does not exist.",
    footer: "Independent editorial resource. Not the official Sugargoo website. Product links and catalog CTAs lead only to cnfansge.com.",
  },
  de: {
    label: "Deutsch", home: "Start", categories: "Kategoriefunde", method: "QC-Methode", packing: "Verpackung", faq: "FAQ",
    kicker: "Kategorien und Lager-Nachweise", heroA: "Weniger suchen.", heroB: "Besser prüfen.",
    intro: "Eine unabhängige Sugargoo-Entscheidungsbibliothek nach Produktkategorie, QC-Nachweisen, Maßen und Lagerprüfung – ohne unbelegte Preisversprechen.",
    openCatalog: "Live-Katalog öffnen", explore: "Nachweis-Leitfäden ansehen", current: "Aktuelle Entscheidungswege", currentText: "Jeder Weg beginnt beim Angebot und endet mit einer dokumentierten Lagerentscheidung.",
    workflow: "Vier Prüfschritte", workflowText: "Nutze dieselbe Nachweisfolge für jede Kategorie, damit ein überzeugendes Angebot die Lagerprüfung nicht ersetzt.",
    steps: ["Angebot und Variante prüfen", "Sichtbare QC-Nachweise vergleichen", "Fehlende Maße anfordern", "Vor dem Packen annehmen, klären oder zurückgeben"],
    methodology: "Nachweis vor Meinung", methodologyText: "Diese Bibliothek trennt sichtbare Fakten von Annahmen. Sie verspricht weder niedrigste Frachtkosten noch feste Laufzeiten, Zollausgänge, Zahlungsarten oder allgemeine Produkteignung. Prüfe Live-Kontooptionen und offizielle Regeln.",
    checked: "Fakten geprüft", sources: "Offizielle Recherchebasis", read: "Leitfaden öffnen", products: "QC-Entscheidungskarten", productsText: "Kompakte Einstiege für Kleidung, Schuhe, Links, Maße, Lagerprüfung und Paketvorbereitung.",
    faqTitle: "Fragen vor der Entscheidung", ctaTitle: "Live-Produktrouten vergleichen?", ctaText: "Nutze zuerst die Nachweis-Checkliste und prüfe dann den aktuellen Katalog. Verfügbarkeit und Plattformstatus können sich ändern.",
    guide: "Prüfleitfaden", overview: "Entscheidungsübersicht", checklist: "Checkliste sichtbarer Nachweise", action: "Entscheidungspunkt", limitations: "Grenzen von Live-Daten", related: "Verwandte Nachweiswege",
    returnHome: "Zur Nachweisübersicht", notFound: "Dieser Nachweisweg existiert nicht.",
    footer: "Unabhängige redaktionelle Ressource, nicht die offizielle Sugargoo-Seite. Produkt- und Katalog-CTAs führen nur zu cnfansge.com.",
  },
  es: {
    label: "Español", home: "Inicio", categories: "Hallazgos por categoría", method: "Método QC", packing: "Embalaje", faq: "Preguntas",
    kicker: "Categorías y pruebas de almacén", heroA: "Busca menos.", heroB: "Verifica mejor.",
    intro: "Una biblioteca independiente de decisiones sobre Sugargoo organizada por categoría, pruebas QC, medidas e inspección de almacén, sin promesas de precio no verificadas.",
    openCatalog: "Abrir catálogo actual", explore: "Ver guías de pruebas", current: "Rutas de decisión", currentText: "Cada ruta empieza en el anuncio y termina con una decisión documentada en el almacén.",
    workflow: "Flujo de inspección en cuatro pasos", workflowText: "Usa la misma secuencia de pruebas para cada categoría; un anuncio atractivo no sustituye la revisión del almacén.",
    steps: ["Verificar anuncio y variante", "Comparar pruebas QC visibles", "Pedir medidas que falten", "Aceptar, aclarar o devolver antes de embalar"],
    methodology: "Pruebas antes que opiniones", methodologyText: "La biblioteca separa pruebas visibles de suposiciones. No promete el envío más barato, plazos fijos, resultados aduaneros, métodos de pago ni elegibilidad universal. Revisa tu cuenta y las reglas oficiales.",
    checked: "Datos comprobados", sources: "Base oficial de investigación", read: "Abrir guía", products: "Tarjetas de decisión QC", productsText: "Puntos de partida para ropa, calzado, enlaces, medidas, inspección y preparación del paquete.",
    faqTitle: "Preguntas antes de decidir", ctaTitle: "¿Comparar rutas de producto actuales?", ctaText: "Aplica aquí la lista de pruebas y después consulta el catálogo actual. La disponibilidad y el estado pueden cambiar.",
    guide: "Guía de inspección", overview: "Resumen de decisión", checklist: "Lista de pruebas visibles", action: "Punto de decisión", limitations: "Límites de los datos en vivo", related: "Rutas relacionadas",
    returnHome: "Volver a la mesa de pruebas", notFound: "Esta ruta de pruebas no existe.",
    footer: "Recurso editorial independiente; no es el sitio oficial de Sugargoo. Los CTA de producto y catálogo llevan solo a cnfansge.com.",
  },
  fr: {
    label: "Français", home: "Accueil", categories: "Sélections par catégorie", method: "Méthode QC", packing: "Emballage", faq: "FAQ",
    kicker: "Catégories et preuves d’entrepôt", heroA: "Cherchez moins.", heroB: "Vérifiez mieux.",
    intro: "Une bibliothèque indépendante de décision Sugargoo organisée par catégorie, preuves QC, mesures et inspection d’entrepôt, sans promesse de prix invérifiable.",
    openCatalog: "Ouvrir le catalogue actif", explore: "Voir les guides de preuve", current: "Parcours de décision", currentText: "Chaque parcours part de l’annonce et se termine par une décision d’entrepôt documentée.",
    workflow: "Inspection en quatre étapes", workflowText: "Appliquez la même suite de preuves à chaque catégorie : une annonce séduisante ne remplace pas le contrôle en entrepôt.",
    steps: ["Vérifier l’annonce et la variante", "Comparer les preuves QC visibles", "Demander les mesures manquantes", "Accepter, clarifier ou retourner avant l’emballage"],
    methodology: "La preuve avant l’avis", methodologyText: "La bibliothèque sépare les éléments visibles des hypothèses. Elle ne garantit ni tarif minimal, ni délai fixe, ni résultat douanier, ni paiement ou éligibilité universelle. Vérifiez le compte en direct et les règles officielles.",
    checked: "Faits vérifiés", sources: "Base de recherche officielle", read: "Ouvrir le guide", products: "Cartes de décision QC", productsText: "Des points de départ pour vêtements, chaussures, liens, mesures, inspection et préparation du colis.",
    faqTitle: "Questions avant de décider", ctaTitle: "Comparer les parcours produit actifs ?", ctaText: "Appliquez la liste de preuves, puis consultez le catalogue actuel. Disponibilité et statut peuvent changer.",
    guide: "Guide d’inspection", overview: "Vue de la décision", checklist: "Liste des preuves visibles", action: "Point de décision", limitations: "Limites des données en direct", related: "Parcours associés",
    returnHome: "Retour au bureau des preuves", notFound: "Ce parcours de preuve n’existe pas.",
    footer: "Ressource éditoriale indépendante, distincte du site officiel Sugargoo. Les CTA produit et catalogue mènent uniquement à cnfansge.com.",
  },
  it: {
    label: "Italiano", home: "Home", categories: "Selezioni per categoria", method: "Metodo QC", packing: "Imballaggio", faq: "FAQ",
    kicker: "Categorie e prove di magazzino", heroA: "Cerca meno.", heroB: "Verifica meglio.",
    intro: "Una libreria indipendente di decisioni Sugargoo organizzata per categoria, prove QC, misure e ispezione di magazzino, senza promesse di prezzo non verificate.",
    openCatalog: "Apri catalogo attuale", explore: "Esplora le guide", current: "Percorsi decisionali", currentText: "Ogni percorso parte dall’inserzione e termina con una decisione di magazzino documentata.",
    workflow: "Ispezione in quattro passaggi", workflowText: "Usa la stessa sequenza di prove per ogni categoria: un’inserzione convincente non sostituisce il controllo in magazzino.",
    steps: ["Verifica inserzione e variante", "Confronta le prove QC visibili", "Richiedi le misure mancanti", "Accetta, chiarisci o restituisci prima dell’imballaggio"],
    methodology: "Prove prima delle opinioni", methodologyText: "La libreria separa le prove visibili dalle ipotesi. Non promette costo minimo, tempi fissi, esiti doganali, metodi di pagamento o idoneità universale. Controlla le opzioni live e le regole ufficiali.",
    checked: "Fatti verificati", sources: "Base di ricerca ufficiale", read: "Apri guida", products: "Schede decisionali QC", productsText: "Punti di partenza per abbigliamento, scarpe, link, misure, ispezione e preparazione del pacco.",
    faqTitle: "Domande prima di decidere", ctaTitle: "Confrontare i percorsi prodotto attuali?", ctaText: "Applica la checklist e poi consulta il catalogo aggiornato. Disponibilità e stato possono cambiare.",
    guide: "Guida d’ispezione", overview: "Panoramica decisionale", checklist: "Checklist delle prove visibili", action: "Punto decisionale", limitations: "Limiti dei dati live", related: "Percorsi correlati",
    returnHome: "Torna alla scrivania delle prove", notFound: "Questo percorso di prova non esiste.",
    footer: "Risorsa editoriale indipendente, non il sito ufficiale Sugargoo. I CTA di prodotti e catalogo portano solo a cnfansge.com.",
  },
};

const TERMS = {
  listing: {en:"Listing title, seller and destination URL match",de:"Titel, Verkäufer und Ziel-URL stimmen überein",es:"Coinciden título, vendedor y URL",fr:"Titre, vendeur et URL correspondent",it:"Titolo, venditore e URL corrispondono"},
  variant: {en:"Selected color, size and quantity are visible",de:"Farbe, Größe und Menge sind sichtbar",es:"Color, talla y cantidad son visibles",fr:"Couleur, taille et quantité sont visibles",it:"Colore, taglia e quantità sono visibili"},
  measurement: {en:"A measurable reference confirms the critical dimension",de:"Eine messbare Referenz bestätigt das kritische Maß",es:"Una referencia medible confirma la dimensión",fr:"Une référence mesurable confirme la dimension",it:"Un riferimento misurabile conferma la dimensione"},
  surface: {en:"Front, back, sides and high-risk surfaces are readable",de:"Vorderseite, Rückseite, Seiten und Risikoflächen sind erkennbar",es:"Frente, reverso, lados y zonas de riesgo son legibles",fr:"Face, dos, côtés et zones à risque sont lisibles",it:"Fronte, retro, lati e zone critiche sono leggibili"},
  stitching: {en:"Seams, joins and edge finishing are shown closely",de:"Nähte, Verbindungen und Kanten sind nah sichtbar",es:"Costuras, uniones y bordes se ven de cerca",fr:"Coutures, jonctions et bords sont visibles",it:"Cuciture, giunzioni e bordi sono visibili"},
  pair: {en:"Left and right items can be compared for symmetry",de:"Linkes und rechtes Teil lassen sich vergleichen",es:"Se comparan izquierda y derecha",fr:"Les éléments gauche et droit sont comparables",it:"Gli elementi sinistro e destro sono confrontabili"},
  label: {en:"Size and care labels are legible without inference",de:"Größen- und Pflegeetiketten sind lesbar",es:"Las etiquetas de talla y cuidado son legibles",fr:"Les étiquettes de taille et d’entretien sont lisibles",it:"Le etichette di taglia e cura sono leggibili"},
  damage: {en:"Damage, stains, compression and packaging marks are separated",de:"Schäden, Flecken, Druck- und Verpackungsspuren sind getrennt",es:"Se distinguen daños, manchas, compresión y embalaje",fr:"Dommages, taches, compression et emballage sont distingués",it:"Danni, macchie, compressione e imballaggio sono distinti"},
  quantity: {en:"All pieces and included accessories are counted",de:"Alle Teile und Zubehör sind gezählt",es:"Se cuentan todas las piezas y accesorios",fr:"Toutes les pièces et accessoires sont comptés",it:"Tutti i pezzi e accessori sono conteggiati"},
  package: {en:"Packing method protects the item without hiding evidence",de:"Die Packweise schützt, ohne Nachweise zu verdecken",es:"El embalaje protege sin ocultar pruebas",fr:"L’emballage protège sans masquer les preuves",it:"L’imballaggio protegge senza nascondere le prove"},
  route: {en:"Current product restrictions and route eligibility are rechecked",de:"Aktuelle Einschränkungen und Routeneignung sind geprüft",es:"Se revisan restricciones y rutas actuales",fr:"Restrictions et admissibilité de route sont revérifiées",it:"Restrizioni e idoneità della rotta sono ricontrollate"},
  record: {en:"The final accept, clarify or return decision is recorded",de:"Annehmen, klären oder zurückgeben ist dokumentiert",es:"Se registra aceptar, aclarar o devolver",fr:"La décision accepter, clarifier ou retourner est consignée",it:"La decisione accetta, chiarisci o restituisci è registrata"},
};

const GUIDES = {
  "finds-with-qc": {
    title:{en:"Sugargoo Finds With QC Photos",de:"Sugargoo-Funde mit QC-Fotos",es:"Hallazgos Sugargoo con fotos QC",fr:"Sélections Sugargoo avec photos QC",it:"Selezioni Sugargoo con foto QC"},
    desc:{en:"A category-first method for connecting a product link to visible warehouse evidence before making a decision.",de:"Eine kategoriebasierte Methode, die Produktlinks vor der Entscheidung mit sichtbaren Lager-Nachweisen verbindet.",es:"Método por categorías para conectar un enlace con pruebas visibles del almacén antes de decidir.",fr:"Méthode par catégorie reliant un lien produit aux preuves visibles en entrepôt avant décision.",it:"Metodo per categoria che collega il link alle prove visibili in magazzino prima della decisione."},
    checks:["listing","variant","surface","measurement","damage","record"]
  },
  "clothing-qc-checklist": {
    title:{en:"Sugargoo Clothing QC Checklist",de:"Sugargoo QC-Checkliste für Kleidung",es:"Lista QC de ropa en Sugargoo",fr:"Liste QC vêtements Sugargoo",it:"Checklist QC abbigliamento Sugargoo"},
    desc:{en:"Inspect measurements, seams, print placement, labels and visible condition without treating a listing photo as proof.",de:"Maße, Nähte, Druckplatzierung, Etiketten und Zustand prüfen, ohne Angebotsfotos als Beweis zu behandeln.",es:"Revisa medidas, costuras, estampado, etiquetas y estado sin usar la foto del anuncio como prueba.",fr:"Contrôlez mesures, coutures, placement, étiquettes et état sans confondre photo d’annonce et preuve.",it:"Controlla misure, cuciture, stampa, etichette e condizioni senza usare la foto dell’inserzione come prova."},
    checks:["variant","measurement","stitching","label","surface","damage"]
  },
  "shoe-size-qc": {
    title:{en:"Shoe Size and QC Evidence Guide",de:"Schuhgröße und QC-Nachweise",es:"Guía de talla y QC de calzado",fr:"Guide pointure et preuves QC",it:"Guida taglia scarpe e prove QC"},
    desc:{en:"Use insole or outsole measurements, pair symmetry and close surface views to reduce avoidable footwear mistakes.",de:"Innensohlen- oder Außensohlenmaße, Paarsymmetrie und Nahaufnahmen reduzieren vermeidbare Fehler.",es:"Usa medidas de plantilla o suela, simetría y vistas cercanas para reducir errores.",fr:"Utilisez mesures de semelle, symétrie de paire et vues rapprochées pour limiter les erreurs.",it:"Usa misure di soletta o suola, simmetria e viste ravvicinate per ridurre gli errori."},
    checks:["variant","measurement","pair","surface","label","damage"]
  },
  "warehouse-inspection": {
    title:{en:"Warehouse Item Inspection",de:"Artikelprüfung im Lager",es:"Inspección de artículos en almacén",fr:"Inspection d’article en entrepôt",it:"Ispezione articolo in magazzino"},
    desc:{en:"A repeatable accept, clarify or return framework for the evidence available while an item is still in the warehouse.",de:"Ein wiederholbarer Rahmen für Annehmen, Klären oder Rückgabe, solange der Artikel im Lager ist.",es:"Marco repetible para aceptar, aclarar o devolver mientras el artículo sigue en el almacén.",fr:"Cadre répétable pour accepter, clarifier ou retourner tant que l’article est en entrepôt.",it:"Schema ripetibile per accettare, chiarire o restituire mentre l’articolo è ancora in magazzino."},
    checks:["listing","variant","quantity","surface","damage","record"]
  },
  "product-link-verification": {
    title:{en:"Product Link Verification",de:"Produktlink-Verifizierung",es:"Verificación del enlace de producto",fr:"Vérification du lien produit",it:"Verifica del link prodotto"},
    desc:{en:"Check destination, seller, variant, image consistency and current status before a product URL enters a spreadsheet.",de:"Ziel, Verkäufer, Variante, Bildkonsistenz und Status prüfen, bevor eine URL in die Tabelle kommt.",es:"Comprueba destino, vendedor, variante, imágenes y estado antes de añadir una URL.",fr:"Vérifiez destination, vendeur, variante, cohérence d’image et statut avant d’ajouter l’URL.",it:"Controlla destinazione, venditore, variante, immagini e stato prima di inserire l’URL."},
    checks:["listing","variant","surface","quantity","route","record"]
  },
  "parcel-packing-checklist": {
    title:{en:"Parcel Packing Checklist",de:"Paket-Packcheckliste",es:"Lista de embalaje del paquete",fr:"Liste d’emballage du colis",it:"Checklist imballaggio pacco"},
    desc:{en:"Review item selection, protection, packaging choices, weight evidence and current route constraints before submission.",de:"Auswahl, Schutz, Verpackung, Gewichts-Nachweise und aktuelle Routenregeln vor Einreichung prüfen.",es:"Revisa selección, protección, embalaje, peso y restricciones actuales antes de enviar.",fr:"Revoyez sélection, protection, emballage, poids et contraintes de route avant soumission.",it:"Rivedi selezione, protezione, imballaggio, peso e vincoli di rotta prima dell’invio."},
    checks:["quantity","damage","package","measurement","route","record"]
  },
  "spreadsheet-by-category": {
    title:{en:"Sugargoo Spreadsheet by Category",de:"Sugargoo-Tabelle nach Kategorie",es:"Hoja Sugargoo por categoría",fr:"Tableau Sugargoo par catégorie",it:"Foglio Sugargoo per categoria"},
    desc:{en:"Organize product records around category-specific evidence requirements instead of a single undifferentiated list of links.",de:"Produktdatensätze nach kategoriespezifischen Nachweisen statt einer undifferenzierten Linkliste ordnen.",es:"Organiza registros según pruebas propias de cada categoría, no como una lista indiferenciada.",fr:"Organisez les fiches selon les preuves propres à chaque catégorie plutôt qu’une liste unique.",it:"Organizza i record secondo le prove di categoria invece di un’unica lista indistinta."},
    checks:["listing","variant","measurement","surface","route","record"]
  },
};

const FAQS = {
  en:[
    ["Are QC photos proof that an item is perfect?","No. They are limited visual evidence. Check what is visible, identify what is missing, and request clarification when a decision depends on an unseen detail."],
    ["Does this site promise a shipping price or delivery time?","No. Freight, route availability, restrictions and estimates can change. Use current values shown in your account and the official platform rules."],
    ["Should every product category use the same checklist?","Use the same decision gates, but change the evidence. Clothing needs measurements and seams; footwear needs pair comparison and sizing evidence; fragile accessories need protection and quantity checks."],
    ["Is this the official Sugargoo website?","No. This is an independent editorial resource. Official facts are dated and linked to official material; catalog CTAs lead to cnfansge.com."],
  ],
  de:[
    ["Beweisen QC-Fotos, dass ein Artikel perfekt ist?","Nein. Sie sind begrenzte visuelle Nachweise. Prüfe Sichtbares, benenne Fehlendes und fordere Klärung an, wenn die Entscheidung davon abhängt."],
    ["Verspricht diese Seite Versandpreis oder Laufzeit?","Nein. Fracht, Routen, Einschränkungen und Schätzungen ändern sich. Nutze aktuelle Kontowerte und offizielle Regeln."],
    ["Braucht jede Kategorie dieselbe Checkliste?","Die Entscheidungspunkte bleiben gleich, die Nachweise ändern sich: Kleidung braucht Maße und Nähte, Schuhe Paarvergleich und Größenbelege."],
    ["Ist dies die offizielle Sugargoo-Seite?","Nein. Dies ist eine unabhängige redaktionelle Ressource. Offizielle Fakten sind datiert und verlinkt; Katalog-CTAs führen zu cnfansge.com."],
  ],
  es:[
    ["¿Las fotos QC prueban que un artículo es perfecto?","No. Son pruebas visuales limitadas. Revisa lo visible, identifica lo que falta y pide aclaración si la decisión depende de ello."],
    ["¿El sitio promete precio o plazo de envío?","No. Flete, rutas, restricciones y estimaciones cambian. Usa los valores actuales de tu cuenta y las reglas oficiales."],
    ["¿Todas las categorías usan la misma lista?","Mantén los mismos puntos de decisión, pero cambia las pruebas: ropa necesita medidas; calzado, comparación del par y talla."],
    ["¿Es el sitio oficial de Sugargoo?","No. Es un recurso editorial independiente. Los hechos oficiales están fechados y enlazados; los CTA llevan a cnfansge.com."],
  ],
  fr:[
    ["Les photos QC prouvent-elles qu’un article est parfait ?","Non. Ce sont des preuves visuelles limitées. Vérifiez le visible, repérez les manques et demandez une clarification si nécessaire."],
    ["Le site garantit-il prix ou délai d’expédition ?","Non. Fret, routes, restrictions et estimations évoluent. Utilisez les valeurs du compte et les règles officielles."],
    ["Toutes les catégories ont-elles la même liste ?","Gardez les mêmes points de décision, mais adaptez les preuves : mesures pour les vêtements, paire et pointure pour les chaussures."],
    ["Est-ce le site officiel Sugargoo ?","Non. C’est une ressource éditoriale indépendante. Les faits officiels sont datés et liés; les CTA mènent à cnfansge.com."],
  ],
  it:[
    ["Le foto QC provano che un articolo è perfetto?","No. Sono prove visive limitate. Controlla ciò che si vede, individua ciò che manca e chiedi chiarimenti se la decisione dipende da questo."],
    ["Il sito promette prezzo o tempi di spedizione?","No. Costi, rotte, restrizioni e stime cambiano. Usa i valori attuali dell’account e le regole ufficiali."],
    ["Ogni categoria usa la stessa checklist?","Mantieni gli stessi punti decisionali, ma cambia le prove: misure per l’abbigliamento, confronto e taglia per le scarpe."],
    ["È il sito ufficiale Sugargoo?","No. È una risorsa editoriale indipendente. I fatti ufficiali sono datati e collegati; i CTA portano a cnfansge.com."],
  ],
};

const OFFICIAL_SOURCES = [
  ["Sugargoo official website", "https://www.sugargoo.com/"],
  ["Official quality-check guide", "https://blog.sugargoo.com/sugargoo-quality-check-service-the-ultimate-qc-guide-for-overseas-buyers/"],
  ["Official shipping-estimate guide", "https://blog.sugargoo.com/estimate-international-shipping-costs-sugargoo/"],
  ["Official packaging and add-on services guide", "https://blog.sugargoo.com/add-on-services-for-cross-border-orders-packaging-photography-protection-options/"],
];

const esc = (value) => String(value).replace(/[&<>\"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const langPrefix = (locale) => locale === "en" ? "" : `/${locale}`;
const canonicalPath = (locale, slug = "") => `${langPrefix(locale)}${slug ? `/${slug}` : ""}/`;
const currentLocale = (pathname) => {
  const value = pathname.split("/")[1];
  return LOCALES.includes(value) && value !== "en" ? value : "en";
};
const stripLocale = (pathname) => {
  const locale = currentLocale(pathname);
  const plain = locale === "en" ? pathname : pathname.slice(locale.length + 1) || "/";
  return plain === "/" ? "" : plain.replace(/^\//, "").replace(/\/$/, "");
};

function alternateLinks(slug) {
  const items = LOCALES.map((locale) => `<link rel="alternate" hreflang="${locale}" href="${SITE}${canonicalPath(locale, slug)}">`).join("");
  return `${items}<link rel="alternate" hreflang="x-default" href="${SITE}${canonicalPath("en", slug)}">`;
}

function languageMenu(locale, slug) {
  return `<nav class="languages" aria-label="Language">${LOCALES.map((code) => `<a lang="${code}" hreflang="${code}" ${code===locale?'aria-current="page"':''} href="${canonicalPath(code, slug)}">${UI[code].label}</a>`).join("")}</nav>`;
}

function header(locale, slug) {
  const u = UI[locale];
  return `<header class="site-header"><div class="wrap header-inner"><a class="brand" href="${canonicalPath(locale)}" aria-label="Sugargoo Evidence Store home"><span>SG</span><b>Sugargoo<br>Evidence Store</b></a><nav class="main-nav"><a href="${canonicalPath(locale)}">${u.home}</a><a href="${canonicalPath(locale,"spreadsheet-by-category")}">${u.categories}</a><a href="${canonicalPath(locale,"warehouse-inspection")}">${u.method}</a><a href="${canonicalPath(locale,"parcel-packing-checklist")}">${u.packing}</a><a href="${canonicalPath(locale,"faq")}">${u.faq}</a></nav>${languageMenu(locale,slug)}</div></header>`;
}

function footer(locale) {
  const u=UI[locale];
  return `<footer class="site-footer"><div class="wrap footer-grid"><div><a class="brand inverse" href="${canonicalPath(locale)}"><span>SG</span><b>Sugargoo<br>Evidence Store</b></a><p>${esc(u.footer)}</p></div><nav>${Object.entries(GUIDES).slice(0,4).map(([slug,g])=>`<a href="${canonicalPath(locale,slug)}">${esc(g.title[locale])}</a>`).join("")}</nav><div><strong>${u.checked}: ${FACT_CHECKED}</strong><a class="button" href="${CTA}" target="_blank" rel="noopener noreferrer">${u.openCatalog}</a></div></div></footer>`;
}

function document({locale,slug,title,description,body,schema,noindex=false,status=200}) {
  const canonical = `${SITE}${canonicalPath(locale,slug)}`;
  const json = JSON.stringify(schema).replace(/</g,"\\u003c");
  return new Response(`<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Sugargoo Evidence Store</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${noindex?'noindex,follow':'index,follow,max-image-preview:large'}"><link rel="canonical" href="${canonical}">${alternateLinks(slug)}<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><style>${CSS}</style><script type="application/ld+json">${json}</script></head><body>${status===404?body:`${header(locale,slug)}${body}${footer(locale)}`}</body></html>`, {status,headers:htmlHeaders(locale)});
}

function homeSchema(locale) {
  return {"@context":"https://schema.org","@graph":[
    {"@type":"WebSite","name":"Sugargoo Evidence Store","url":`${SITE}${canonicalPath(locale)}`,"inLanguage":locale,"description":UI[locale].intro},
    {"@type":"FAQPage","mainEntity":FAQS[locale].map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}
  ]};
}

function breadcrumb(locale, slug, name) {
  return {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":UI[locale].home,"item":`${SITE}${canonicalPath(locale)}`},
    {"@type":"ListItem","position":2,"name":name,"item":`${SITE}${canonicalPath(locale,slug)}`}
  ]};
}

function homePage(locale) {
  const u=UI[locale];
  const cards=Object.entries(GUIDES);
  const body=`<main><section class="hero"><div class="wrap hero-grid"><div><p class="kicker"><span></span>${u.kicker}</p><h1>${u.heroA}<br><em>${u.heroB}</em></h1><p class="lead">${u.intro}</p><div class="actions"><a class="button" href="${CATALOG}" target="_blank" rel="noopener noreferrer">${u.openCatalog}<b>↗</b></a><a class="text-link" href="#guides">${u.explore} ↓</a></div><ul class="facts"><li>Category-specific</li><li>QC evidence</li><li>${u.checked}: ${FACT_CHECKED}</li></ul></div><aside class="hero-card"><div class="card-code">QC / 01</div><img src="/assets/item-1.svg" width="720" height="720" alt="Clothing warehouse QC evidence board"><div><small>${u.guide}</small><h2>${esc(GUIDES["clothing-qc-checklist"].title[locale])}</h2><a href="${canonicalPath(locale,"clothing-qc-checklist")}">${u.read} →</a></div></aside></div></section>
  <section id="guides" class="section wrap"><div class="section-head"><div><p class="kicker"><span></span>01 / INDEX</p><h2>${u.current}</h2></div><p>${u.currentText}</p></div><div class="category-grid">${cards.map(([slug,g],i)=>`<a class="category-card" href="${canonicalPath(locale,slug)}"><span>${String(i+1).padStart(2,"0")}</span><h3>${esc(g.title[locale])}</h3><p>${esc(g.desc[locale])}</p><b>${u.read} →</b></a>`).join("")}</div></section>
  <section class="dark-section"><div class="wrap"><div class="section-head light"><div><p class="kicker"><span></span>02 / WORKFLOW</p><h2>${u.workflow}</h2></div><p>${u.workflowText}</p></div><ol class="workflow">${u.steps.map((step,i)=>`<li><span>0${i+1}</span><strong>${esc(step)}</strong></li>`).join("")}</ol></div></section>
  <section class="section wrap"><div class="section-head"><div><p class="kicker"><span></span>03 / EVIDENCE</p><h2>${u.products}</h2></div><p>${u.productsText}</p></div><div class="product-grid">${cards.map(([slug,g],i)=>`<article class="product-card"><a href="${canonicalPath(locale,slug)}"><div class="product-image"><img src="/assets/item-${(i%8)+1}.svg" loading="lazy" decoding="async" width="640" height="640" alt="${esc(g.title[locale])} visual evidence category"><span>QC ${String(i+1).padStart(2,"0")}</span></div><h3>${esc(g.title[locale])}</h3><p>${esc(g.desc[locale])}</p></a><a class="catalog-link" href="${CTA}" target="_blank" rel="noopener noreferrer">${u.openCatalog} ↗</a></article>`).join("")}</div></section>
  <section class="orange-section"><div class="wrap method"><div><p class="kicker"><span></span>04 / METHOD</p><h2>${u.methodology}</h2></div><p>${u.methodologyText}</p><div class="fact-panel"><strong>${u.sources}</strong><small>${u.checked}: ${FACT_CHECKED}</small>${OFFICIAL_SOURCES.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(name)} ↗</a>`).join("")}</div></div></section>
  ${faqBlock(locale,true)}${ctaBlock(locale)}</main>`;
  return document({locale,slug:"",title:`${u.heroA} ${u.heroB}`,description:u.intro,body,schema:homeSchema(locale)});
}

function faqBlock(locale,home=false) {
  const u=UI[locale];
  return `<section class="section wrap"><div class="section-head"><div><p class="kicker"><span></span>${home?'05':'01'} / FAQ</p><h2>${u.faqTitle}</h2></div>${home?`<a class="text-link" href="${canonicalPath(locale,"faq")}">${u.faq} →</a>`:""}</div><div class="faq-list">${FAQS[locale].map(([q,a])=>`<details><summary>${esc(q)}<span>+</span></summary><p>${esc(a)}</p></details>`).join("")}</div></section>`;
}

function ctaBlock(locale) {
  const u=UI[locale];
  return `<section class="cta"><div class="wrap"><div><h2>${u.ctaTitle}</h2><p>${u.ctaText}</p></div><a class="button" href="${CATALOG}" target="_blank" rel="noopener noreferrer">${u.openCatalog} ↗</a></div></section>`;
}

function guidePage(locale, slug, guide) {
  const u=UI[locale];
  const title=guide.title[locale], desc=guide.desc[locale];
  const checklist=guide.checks.map(key=>TERMS[key][locale]);
  const related=Object.entries(GUIDES).filter(([key])=>key!==slug).slice(0,3);
  const body=`<main><section class="inner-hero wrap"><div><p class="kicker"><span></span>${u.guide} / ${FACT_CHECKED}</p><h1>${esc(title)}</h1><p>${esc(desc)}</p></div><aside><strong>${u.checked}</strong><b>${FACT_CHECKED}</b><span>${u.methodology}</span></aside></section>
  <section class="research wrap"><div><strong>${u.sources}</strong><small>${u.checked}: ${FACT_CHECKED}</small></div>${OFFICIAL_SOURCES.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(name)} ↗</a>`).join("")}</section>
  <section class="guide-layout wrap"><article class="prose"><section id="overview"><span>01</span><h2>${u.overview}</h2><p>${esc(desc)} ${esc(u.methodologyText)}</p><p>${locale==='en'?"Start with the exact record you intend to act on. Preserve the seller, destination URL, selected variant and the date checked. Then compare warehouse evidence against that record. A product title or promotional image describes an offer; it does not prove the received item’s dimensions, condition, quantity or route eligibility.":esc(u.workflowText)}</p></section><section id="checklist"><span>02</span><h2>${u.checklist}</h2><ul class="checklist">${checklist.map(item=>`<li><b>✓</b>${esc(item)}</li>`).join("")}</ul></section><section id="decision"><span>03</span><h2>${u.action}</h2><p>${locale==='en'?"Accept only when the visible evidence covers the category’s important failure points. Choose clarify when one missing photo or measurement could change the decision. Choose return or another available resolution when the received item visibly conflicts with the selected variant or condition you can reasonably verify. Keep the decision tied to evidence rather than a universal quality claim.":esc(u.currentText)}</p><div class="decision-grid"><div><b>A</b><strong>Accept</strong><small>${checklist[0]}</small></div><div><b>C</b><strong>Clarify</strong><small>${checklist[2]}</small></div><div><b>R</b><strong>Return</strong><small>${checklist[5]}</small></div></div></section><section id="limits"><span>04</span><h2>${u.limitations}</h2><p>${esc(u.methodologyText)}</p><p>${locale==='en'?"Platform services, storage terms, paid add-ons, payment methods, product restrictions and logistics routes may change after this fact-check date. Before submitting an order or parcel, recheck the live account interface and the latest official rule that applies to the item and destination.":esc(u.ctaText)}</p></section></article><aside class="toc"><strong>${u.guide}</strong><a href="#overview">01 ${u.overview}</a><a href="#checklist">02 ${u.checklist}</a><a href="#decision">03 ${u.action}</a><a href="#limits">04 ${u.limitations}</a></aside></section>
  <section class="related wrap"><div class="section-head"><h2>${u.related}</h2></div><div class="related-grid">${related.map(([s,g])=>`<a href="${canonicalPath(locale,s)}"><span>→</span><h3>${esc(g.title[locale])}</h3><p>${esc(g.desc[locale])}</p></a>`).join("")}</div></section>${ctaBlock(locale)}</main>`;
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"Article","headline":title,"description":desc,"datePublished":FACT_CHECKED,"dateModified":FACT_CHECKED,"inLanguage":locale,"isAccessibleForFree":true,"author":{"@type":"Organization","name":"Sugargoo Evidence Store"},"publisher":{"@type":"Organization","name":"Sugargoo Evidence Store"},"mainEntityOfPage":`${SITE}${canonicalPath(locale,slug)}`},
    breadcrumb(locale,slug,title)
  ]};
  return document({locale,slug,title,description:desc,body,schema});
}

function faqPage(locale) {
  const u=UI[locale], slug="faq";
  const body=`<main><section class="inner-hero wrap"><div><p class="kicker"><span></span>FAQ / ${FACT_CHECKED}</p><h1>${u.faqTitle}</h1><p>${u.methodologyText}</p></div><aside><strong>${u.checked}</strong><b>${FACT_CHECKED}</b><span>${u.sources}</span></aside></section>${faqBlock(locale)}${ctaBlock(locale)}</main>`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"FAQPage","mainEntity":FAQS[locale].map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))},breadcrumb(locale,slug,u.faqTitle)]};
  return document({locale,slug,title:u.faqTitle,description:u.methodologyText,body,schema});
}

function sitemap() {
  const slugs=["",...Object.keys(GUIDES),"faq"];
  const urls=LOCALES.flatMap(locale=>slugs.map(slug=>`${SITE}${canonicalPath(locale,slug)}`));
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc><lastmod>${FACT_CHECKED}</lastmod></url>`).join("")}</urlset>`;
  return new Response(xml,{headers:{"Content-Type":"application/xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}

function asset(path) {
  if(path==="favicon.svg") return new Response(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#11110f"/><path d="M14 17h36v9H23v7h22v9H23v6h27v9H14z" fill="#ff6b1a"/></svg>`,{headers:{"Content-Type":"image/svg+xml","Cache-Control":"public,max-age=31536000,immutable"}});
  const match=path.match(/^assets\/item-(\d)\.svg$/); if(!match) return null;
  const n=Number(match[1]), colors=["#ff6b1a","#efb348","#6d8f7b","#52759f","#8a6f9f","#a85536","#3f7c86","#77746d"], color=colors[(n-1)%colors.length];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="QC evidence category ${n}"><rect width="640" height="640" fill="#e9e7df"/><rect x="54" y="54" width="532" height="532" rx="38" fill="#11110f"/><path d="M120 ${160+n*8}h400v250H120z" fill="${color}"/><circle cx="190" cy="460" r="45" fill="#f7f4ea"/><path d="M270 442h250v16H270zm0 40h170v16H270z" fill="#f7f4ea"/><text x="140" y="315" font-family="Arial" font-size="86" font-weight="800" fill="#11110f">QC ${String(n).padStart(2,"0")}</text></svg>`;
  return new Response(svg,{headers:{"Content-Type":"image/svg+xml","Cache-Control":"public,max-age=31536000,immutable"}});
}

function notFound(locale) {
  const u=UI[locale];
  const body=`<main class="not-found"><span>404</span><h1>${u.notFound}</h1><p>${u.methodologyText}</p><a class="button" href="${canonicalPath(locale)}">${u.returnHome}</a></main>`;
  return document({locale,slug:"",title:"404",description:u.notFound,body,schema:{"@context":"https://schema.org","@type":"WebPage","name":"404"},noindex:true,status:404});
}

function htmlHeaders(locale) {
  return {
    "Content-Type":"text/html; charset=utf-8","Content-Language":locale,"Cache-Control":"public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    "X-Content-Type-Options":"nosniff","Referrer-Policy":"strict-origin-when-cross-origin","Permissions-Policy":"camera=(), microphone=(), geolocation=()",
    "Strict-Transport-Security":"max-age=31536000; includeSubDomains; preload","Content-Security-Policy":"default-src 'self'; img-src 'self' data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
  };
}

const CSS=`
:root{--ink:#11110f;--paper:#f4f1e8;--white:#fff;--orange:#ff6b1a;--muted:#686861;--line:#d8d4c8}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}.wrap{width:min(1180px,calc(100% - 40px));margin:auto}.site-header{position:relative;z-index:5;background:var(--ink);color:white;border-bottom:1px solid #333}.header-inner{min-height:76px;display:grid;grid-template-columns:auto 1fr auto;gap:30px;align-items:center}.brand{display:flex;align-items:center;gap:10px}.brand span{display:grid;place-items:center;width:38px;height:38px;border-radius:9px;background:var(--orange);color:var(--ink);font-weight:900}.brand b{font-size:11px;line-height:1.05;text-transform:uppercase;letter-spacing:.05em}.main-nav{display:flex;justify-content:center;gap:22px;font-size:11px;font-weight:800}.main-nav a:hover,.languages a:hover{color:var(--orange)}.languages{position:relative;display:flex;gap:5px}.languages a{display:none;padding:8px;border:1px solid #3d3d39;border-radius:7px;font-size:9px}.languages a[aria-current]{display:block}.languages:hover{position:absolute;right:20px;top:21px;display:grid;padding:6px;background:var(--ink);border:1px solid #444;border-radius:9px}.languages:hover a{display:block}.hero{background:var(--ink);color:white}.hero-grid{min-height:650px;display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:center;padding-block:74px}.kicker{display:flex;align-items:center;gap:9px;margin:0 0 19px;color:var(--orange);font-size:10px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.kicker span{width:30px;height:3px;background:var(--orange)}h1,h2,h3,p{overflow-wrap:anywhere}.hero h1{margin:0;font-size:clamp(64px,8vw,112px);line-height:.82;letter-spacing:-.075em}.hero h1 em{color:var(--orange);font-style:normal}.lead{max-width:690px;margin:28px 0;color:#c7c5bd;font-size:16px;line-height:1.72}.actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.button{display:inline-flex;align-items:center;gap:14px;padding:14px 17px;border-radius:9px;background:var(--orange);color:var(--ink);font-size:11px;font-weight:900}.text-link{color:var(--orange);font-size:11px;font-weight:900}.facts{display:flex;flex-wrap:wrap;gap:8px;margin:27px 0 0;padding:0;list-style:none}.facts li{padding:7px 9px;border:1px solid #3b3b37;border-radius:7px;color:#aeadA6;font-size:9px;text-transform:uppercase}.hero-card{overflow:hidden;border-radius:18px;background:white;color:var(--ink);box-shadow:12px 12px 0 var(--orange)}.hero-card img{display:block;width:100%;height:auto}.card-code{padding:12px 15px;background:#e9e7df;color:var(--orange);font-size:10px;font-weight:900}.hero-card>div:last-child{padding:21px}.hero-card small{color:var(--orange);font-size:9px;font-weight:900;text-transform:uppercase}.hero-card h2{margin:8px 0 17px;font-size:28px;letter-spacing:-.045em}.hero-card a{font-size:10px;font-weight:900}.section{padding-block:92px}.section-head{display:grid;grid-template-columns:1fr minmax(280px,500px);gap:45px;align-items:end;margin-bottom:36px}.section-head h2{margin:0;font-size:clamp(42px,5vw,66px);line-height:.94;letter-spacing:-.06em}.section-head>p{margin:0;color:var(--muted);font-size:13px;line-height:1.7}.category-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.category-card{min-height:270px;display:flex;flex-direction:column;padding:22px;border:1px solid var(--line);border-radius:15px;background:white;transition:.2s}.category-card:hover{transform:translateY(-4px);border-color:var(--orange)}.category-card>span{color:var(--orange);font-size:10px;font-weight:900}.category-card h3{margin:42px 0 12px;font-size:25px;line-height:1.05;letter-spacing:-.045em}.category-card p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}.category-card b{margin-top:auto;padding-top:20px;color:var(--orange);font-size:10px}.dark-section{padding-block:88px;background:var(--ink);color:white}.section-head.light>p{color:#aaa}.workflow{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0;padding:0;list-style:none}.workflow li{min-height:190px;display:flex;flex-direction:column;justify-content:space-between;padding:20px;border-radius:14px;background:#1f1f1c;border-bottom:5px solid var(--orange)}.workflow span{color:var(--orange);font-size:11px;font-weight:900}.workflow strong{font-size:17px;line-height:1.35}.product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px 12px}.product-card{display:flex;flex-direction:column;padding:8px 8px 15px;border:1px solid transparent;border-radius:16px;background:white}.product-card:hover{border-color:var(--orange)}.product-image{position:relative;overflow:hidden;border-radius:12px}.product-image img{display:block;width:100%;height:auto}.product-image span{position:absolute;left:9px;top:9px;padding:7px 8px;border-radius:6px;background:var(--ink);color:var(--orange);font-size:8px;font-weight:900}.product-card h3{margin:15px 4px 8px;font-size:17px;line-height:1.2}.product-card p{margin:0 4px;color:var(--muted);font-size:11px;line-height:1.55}.catalog-link{margin:auto 4px 0;padding-top:14px;color:var(--orange);font-size:9px;font-weight:900}.orange-section{padding-block:84px;background:var(--orange)}.method{display:grid;grid-template-columns:.7fr 1fr .85fr;gap:50px;align-items:start}.method h2{margin:0;font-size:55px;line-height:.95;letter-spacing:-.06em}.method>p{margin:36px 0 0;color:#4b240a;font-size:14px;line-height:1.75}.fact-panel{display:grid;gap:9px;padding:20px;border-radius:14px;background:var(--ink);color:white}.fact-panel strong{font-size:12px}.fact-panel small{color:#aaa;font-size:9px}.fact-panel a{padding-top:9px;border-top:1px solid #333;color:#d2d0c8;font-size:9px;line-height:1.4}.faq-list{max-width:920px;margin-left:auto;border-top:2px solid var(--ink)}details{border-bottom:1px solid var(--line)}summary{display:flex;justify-content:space-between;gap:20px;padding:20px 3px;cursor:pointer;font-size:15px;font-weight:900;list-style:none}summary span{color:var(--orange)}details p{max-width:760px;margin:0;padding:0 40px 22px 3px;color:var(--muted);font-size:13px;line-height:1.75}.cta{padding-block:40px;background:var(--ink);color:white}.cta>.wrap{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center}.cta h2{margin:0;font-size:30px;letter-spacing:-.04em}.cta p{max-width:800px;margin:9px 0 0;color:#aaa;font-size:11px;line-height:1.6}.inner-hero{display:grid;grid-template-columns:1fr 220px;gap:70px;align-items:end;padding-block:84px 60px}.inner-hero h1{max-width:1000px;margin:0;font-size:clamp(56px,7vw,92px);line-height:.9;letter-spacing:-.065em}.inner-hero>div>p:last-child{max-width:820px;margin:28px 0 0;color:var(--muted);font-size:17px;line-height:1.75}.inner-hero aside{display:grid;gap:7px;padding:19px;border-radius:13px;background:var(--ink);color:white;box-shadow:8px 8px 0 var(--orange)}.inner-hero aside strong{font-size:9px;color:var(--orange);text-transform:uppercase}.inner-hero aside b{font-size:26px}.inner-hero aside span{color:#aaa;font-size:10px}.research{display:grid;grid-template-columns:250px repeat(4,1fr);gap:8px;padding:17px;border:1px solid var(--line);border-left:6px solid var(--orange);border-radius:12px;background:white}.research>div{display:grid;gap:5px}.research strong{font-size:10px;text-transform:uppercase}.research small{color:var(--muted);font-size:9px}.research a{padding:10px;border-radius:8px;background:var(--paper);color:var(--muted);font-size:9px;line-height:1.4}.guide-layout{display:grid;grid-template-columns:minmax(0,780px) 250px;gap:95px;justify-content:center;padding-block:80px}.prose>section{padding-bottom:62px;scroll-margin-top:25px}.prose>section>span{color:var(--orange);font-size:11px;font-weight:900}.prose h2{margin:9px 0 22px;font-size:46px;line-height:1;letter-spacing:-.055em}.prose p{margin:0 0 20px;color:#3e3e39;font-family:Georgia,serif;font-size:18px;line-height:1.82}.checklist{display:grid;gap:8px;margin:0;padding:0;list-style:none}.checklist li{display:grid;grid-template-columns:26px 1fr;gap:10px;padding:15px;border:1px solid var(--line);border-radius:10px;background:white;font-size:13px;line-height:1.5}.checklist b{color:var(--orange)}.decision-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.decision-grid>div{min-height:150px;display:flex;flex-direction:column;padding:16px;border-radius:12px;background:var(--ink);color:white}.decision-grid b{color:var(--orange);font-size:25px}.decision-grid strong{margin-top:auto}.decision-grid small{margin-top:7px;color:#aaa;font-size:8px;line-height:1.4}.toc{position:sticky;top:24px;display:grid;border-top:5px solid var(--orange)}.toc strong,.toc a{padding:13px 0;border-bottom:1px solid var(--line);font-size:10px}.toc a{color:var(--muted)}.related{padding-bottom:90px}.related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.related-grid a{min-height:220px;padding:20px;border:1px solid var(--line);border-radius:14px;background:white}.related-grid span{color:var(--orange)}.related-grid h3{margin:45px 0 10px;font-size:21px}.related-grid p{margin:0;color:var(--muted);font-size:11px;line-height:1.6}.site-footer{padding-block:55px;background:var(--ink);color:white;border-bottom:7px solid var(--orange)}.footer-grid{display:grid;grid-template-columns:1.1fr 1fr .8fr;gap:55px}.footer-grid p{max-width:430px;color:#aaa;font-size:9px;line-height:1.7}.footer-grid nav{display:grid;gap:9px;color:#bbb;font-size:10px}.footer-grid>div:last-child{display:grid;justify-items:start;gap:15px}.footer-grid strong{font-size:10px}.not-found{min-height:100vh;display:grid;place-content:center;justify-items:center;padding:30px;background:var(--ink);color:white;text-align:center}.not-found>span{color:var(--orange);font-size:120px;font-weight:900}.not-found h1{max-width:800px;margin:0;font-size:48px}.not-found p{max-width:700px;color:#aaa;line-height:1.7}
@media(max-width:900px){.wrap{width:min(100% - 28px,760px)}.header-inner{grid-template-columns:1fr auto;gap:10px;padding-block:12px}.main-nav{grid-column:1/-1;grid-row:2;display:grid;grid-template-columns:repeat(5,1fr);gap:4px}.main-nav a{padding:7px 4px;background:#1f1f1c;text-align:center;font-size:8px}.languages{display:flex;flex-wrap:wrap;justify-content:flex-end}.languages a{display:block;padding:6px;font-size:8px}.languages:hover{position:relative;right:auto;top:auto;display:flex;padding:0;background:transparent;border:0}.hero-grid{min-height:auto;grid-template-columns:1fr;gap:40px;padding-block:54px}.hero h1{font-size:clamp(60px,16vw,92px)}.hero-card{max-width:600px}.category-grid{grid-template-columns:repeat(2,1fr)}.product-grid{grid-template-columns:repeat(2,1fr)}.workflow{grid-template-columns:repeat(2,1fr)}.method{grid-template-columns:1fr;gap:20px}.method>p{margin-top:0}.fact-panel{margin-top:15px}.inner-hero{grid-template-columns:1fr;gap:25px}.inner-hero aside{width:min(100%,280px)}.research{grid-template-columns:1fr 1fr}.research>div{grid-column:1/-1}.guide-layout{grid-template-columns:1fr;gap:30px}.toc{position:static;grid-row:1}.related-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.footer-grid>div:last-child{grid-column:1/-1}}
@media(max-width:560px){.brand b{display:none}.main-nav{overflow:auto;grid-template-columns:repeat(5,minmax(88px,1fr))}.hero-grid{padding-block:42px}.hero h1{font-size:16vw}.lead{font-size:14px}.section{padding-block:62px}.section-head{grid-template-columns:1fr;gap:18px}.section-head h2{font-size:43px}.category-grid{grid-template-columns:1fr}.category-card{min-height:220px}.workflow li{min-height:140px}.product-grid{gap:8px}.product-card{padding:5px 5px 11px}.product-card h3{font-size:14px}.product-card p{font-size:9px}.method h2{font-size:46px}.cta>.wrap{grid-template-columns:1fr}.inner-hero{padding-block:58px 40px}.inner-hero h1{font-size:14vw}.research{grid-template-columns:1fr}.prose h2{font-size:38px}.prose p{font-size:17px}.decision-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr}.footer-grid>div:last-child{grid-column:auto}}
`;

const worker={
  async fetch(request){
    const url=new URL(request.url);
    if(url.hostname==="www.sugargoos.store" || url.protocol!=="https:"){
      url.protocol="https:";url.hostname="sugargoos.store";url.port="";
      return Response.redirect(url.toString(),308);
    }
    if(!["GET","HEAD"].includes(request.method)) return new Response("Method Not Allowed",{status:405,headers:{Allow:"GET, HEAD"}});
    const path=url.pathname.replace(/^\//,"");
    if(path==="robots.txt") return new Response(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public,max-age=3600"}});
    if(path==="sitemap.xml") return sitemap();
    const image=asset(path); if(image) return image;
    if(url.search) return Response.redirect(`${SITE}${url.pathname}`,308);
    if(url.pathname!=="/" && !url.pathname.endsWith("/")) return Response.redirect(`${SITE}${url.pathname}/`,308);
    const locale=currentLocale(url.pathname), slug=stripLocale(url.pathname);
    let response;
    if(slug==="") response=homePage(locale);
    else if(slug==="faq") response=faqPage(locale);
    else if(GUIDES[slug]) response=guidePage(locale,slug,GUIDES[slug]);
    else response=notFound(locale);
    if(request.method==="HEAD") return new Response(null,{status:response.status,headers:response.headers});
    return response;
  }
};

export default worker;
