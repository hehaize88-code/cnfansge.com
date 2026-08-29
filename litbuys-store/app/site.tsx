"use client";

import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { articleData, articleSlugs, ArticleSlug } from "./article-data";
import { articleDe } from "./article-de";
import { articleEs } from "./article-es";
import { articleFr } from "./article-fr";
import { articleIt } from "./article-it";
import { products } from "./catalog-data";
import { pageResearch } from "./page-research-data";

export type Lang = "en" | "de" | "es" | "fr" | "it";

type Copy = {
  nav: string[]; search: string; eyebrow: string; hero: string; intro: string; primary: string; secondary: string;
  verified: string; usd: string; checked: string; categories: string; categoryIntro: string; picks: string; picksIntro: string;
  open: string; source: string; guideTitle: string; guideIntro: string; guides: { tag: string; title: string; text: string }[];
  articles: string; articleIntro: string; articleCards: { title: string; text: string }[]; faq: string;
  faqs: { q: string; a: string }[]; disclaimer: string;
};

const copies: Record<Lang, Copy> = {
  en: {
    nav: ["Spreadsheet", "Finds", "Guides", "QC", "Shipping", "FAQ", "Articles"], search: "Search products on the main catalog",
    eyebrow: "A clearer route into LitBuy product discovery", hero: "Find it. Check it. Route it.",
    intro: "A compact LitBuy finds desk with matched product images, USD reference prices, QC reading help and direct routes to the source catalog. No empty grids and no mystery redirects.",
    primary: "Browse checked finds", secondary: "Open full spreadsheet", verified: "8 matched routes", usd: "USD reference prices", checked: "Checked 29 Aug 2026",
    categories: "Start with a category", categoryIntro: "Every category opens the corresponding collection on the main catalog.",
    picks: "Freshly checked picks", picksIntro: "Image, item and destination were matched against the same source page.", open: "Open match", source: "Source price",
    guideTitle: "Use the listing before you use the cart", guideIntro: "Three quick checks solve most expensive mistakes before an order starts.",
    guides: [
      { tag: "01 / QC", title: "Read the photo, not the promise", text: "Check shape, stitching, labels, color and packaging across more than one angle." },
      { tag: "02 / SIZE", title: "Measurements beat letter sizes", text: "Compare garment measurements with something you already own; do not rely on S–XL alone." },
      { tag: "03 / SHIP", title: "Plan chargeable weight early", text: "Bulky packaging can make volumetric weight larger than the item’s scale weight." },
    ],
    articles: "Field notes, not filler", articleIntro: "Independent guides built around questions that appear before checkout.",
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
    eyebrow: "Ein klarerer Weg zu LitBuy-Produktfunden", hero: "Finden. Prüfen. Weiterleiten.",
    intro: "Eine kompakte LitBuy-Fundstelle mit zugeordneten Produktbildern, USD-Richtpreisen, QC-Hilfe und direkten Wegen zum Quellkatalog. Keine leeren Raster und keine unklaren Weiterleitungen.",
    primary: "Geprüfte Funde ansehen", secondary: "Vollständige Tabelle öffnen", verified: "8 geprüfte Ziele", usd: "Richtpreise in USD", checked: "Geprüft am 29. Aug. 2026",
    categories: "Mit einer Kategorie starten", categoryIntro: "Jede Kategorie öffnet die passende Sammlung im Hauptkatalog.",
    picks: "Aktuell geprüfte Auswahl", picksIntro: "Bild, Artikel und Ziel wurden mit derselben Quellseite abgeglichen.", open: "Treffer öffnen", source: "Quellpreis",
    guideTitle: "Prüfe das Listing vor dem Warenkorb", guideIntro: "Drei kurze Prüfungen verhindern die meisten teuren Fehler vor der Bestellung.",
    guides: [
      { tag: "01 / QC", title: "Lies das Foto, nicht das Versprechen", text: "Prüfe Form, Nähte, Etiketten, Farbe und Verpackung aus mehreren Winkeln." },
      { tag: "02 / GRÖSSE", title: "Maße sind besser als Buchstaben", text: "Vergleiche Produktmaße mit eigener Kleidung und verlasse dich nicht nur auf S–XL." },
      { tag: "03 / VERSAND", title: "Früh mit Abrechnungsgewicht planen", text: "Sperrige Verpackung kann das Volumengewicht über das tatsächliche Gewicht heben." },
    ],
    articles: "Praxisnotizen statt Fülltext", articleIntro: "Unabhängige Ratgeber zu Fragen, die vor dem Bezahlen entstehen.",
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
    eyebrow: "Una ruta más clara para descubrir productos LitBuy", hero: "Encuentra. Revisa. Continúa.",
    intro: "Un centro compacto de hallazgos LitBuy con imágenes emparejadas, precios orientativos en USD, ayuda para leer QC y rutas directas al catálogo fuente. Sin cuadrículas vacías ni redirecciones dudosas.",
    primary: "Ver hallazgos revisados", secondary: "Abrir hoja completa", verified: "8 rutas verificadas", usd: "Precios orientativos USD", checked: "Revisado 29 ago 2026",
    categories: "Empieza por una categoría", categoryIntro: "Cada categoría abre la colección correspondiente del catálogo principal.",
    picks: "Selección recién revisada", picksIntro: "Imagen, artículo y destino se compararon con la misma página fuente.", open: "Abrir coincidencia", source: "Precio fuente",
    guideTitle: "Usa el anuncio antes que el carrito", guideIntro: "Tres comprobaciones rápidas evitan la mayoría de errores caros antes de pedir.",
    guides: [
      { tag: "01 / QC", title: "Lee la foto, no la promesa", text: "Comprueba forma, costuras, etiquetas, color y embalaje desde varios ángulos." },
      { tag: "02 / TALLA", title: "Las medidas ganan a las letras", text: "Compara las medidas con una prenda tuya; no dependas solo de S–XL." },
      { tag: "03 / ENVÍO", title: "Planifica pronto el peso facturable", text: "Un embalaje voluminoso puede elevar el peso volumétrico sobre el real." },
    ],
    articles: "Notas útiles, no relleno", articleIntro: "Guías independientes basadas en preguntas anteriores al pago.",
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
    eyebrow: "Un chemin plus clair vers les trouvailles LitBuy", hero: "Trouver. Vérifier. Continuer.",
    intro: "Un bureau compact de trouvailles LitBuy avec images associées, prix indicatifs en USD, aide QC et accès direct au catalogue source. Aucun catalogue vide ni redirection obscure.",
    primary: "Voir les trouvailles vérifiées", secondary: "Ouvrir le tableur complet", verified: "8 routes vérifiées", usd: "Prix indicatifs USD", checked: "Vérifié le 29 août 2026",
    categories: "Commencer par une catégorie", categoryIntro: "Chaque catégorie ouvre la collection correspondante du catalogue principal.",
    picks: "Sélection récemment vérifiée", picksIntro: "Image, article et destination ont été comparés à la même page source.", open: "Ouvrir la fiche", source: "Prix source",
    guideTitle: "Lisez la fiche avant le panier", guideIntro: "Trois contrôles rapides évitent la plupart des erreurs coûteuses avant commande.",
    guides: [
      { tag: "01 / QC", title: "Lisez la photo, pas la promesse", text: "Contrôlez forme, coutures, étiquettes, couleur et emballage sous plusieurs angles." },
      { tag: "02 / TAILLE", title: "Les mesures valent mieux que les lettres", text: "Comparez avec un vêtement que vous possédez; ne comptez pas uniquement sur S–XL." },
      { tag: "03 / LIVRAISON", title: "Anticipez le poids facturable", text: "Un emballage volumineux peut rendre le poids volumétrique supérieur au poids réel." },
    ],
    articles: "Des notes utiles, pas du remplissage", articleIntro: "Des guides indépendants autour des questions posées avant paiement.",
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
    eyebrow: "Un percorso più chiaro per scoprire prodotti LitBuy", hero: "Trova. Controlla. Continua.",
    intro: "Una raccolta compatta di prodotti LitBuy con immagini abbinate, prezzi indicativi in USD, aiuto QC e percorsi diretti al catalogo sorgente. Niente griglie vuote o reindirizzamenti incerti.",
    primary: "Sfoglia prodotti controllati", secondary: "Apri il foglio completo", verified: "8 percorsi verificati", usd: "Prezzi indicativi USD", checked: "Controllato 29 ago 2026",
    categories: "Inizia da una categoria", categoryIntro: "Ogni categoria apre la collezione corrispondente nel catalogo principale.",
    picks: "Selezione appena controllata", picksIntro: "Immagine, articolo e destinazione sono stati verificati sulla stessa pagina sorgente.", open: "Apri corrispondenza", source: "Prezzo sorgente",
    guideTitle: "Usa la scheda prima del carrello", guideIntro: "Tre controlli rapidi evitano la maggior parte degli errori costosi prima dell’ordine.",
    guides: [
      { tag: "01 / QC", title: "Leggi la foto, non la promessa", text: "Controlla forma, cuciture, etichette, colore e confezione da più angolazioni." },
      { tag: "02 / TAGLIA", title: "Le misure battono le lettere", text: "Confronta le misure con un capo che possiedi; non affidarti solo a S–XL." },
      { tag: "03 / SPEDIZIONE", title: "Pianifica presto il peso fatturabile", text: "Un imballaggio voluminoso può rendere il peso volumetrico maggiore di quello reale." },
    ],
    articles: "Note pratiche, non riempitivi", articleIntro: "Guide indipendenti costruite sulle domande che nascono prima del pagamento.",
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

const categories = [
  ["Shoes", "https://cnfansge.com/shoes/", "01"], ["Hoodies", "https://cnfansge.com/hoodies-sweaters/", "02"],
  ["T-Shirts", "https://cnfansge.com/t-shirts/", "03"], ["Jackets", "https://cnfansge.com/jackets/", "04"],
  ["Pants", "https://cnfansge.com/pants-shorts/", "05"], ["Accessories", "https://cnfansge.com/accessories/", "06"],
  ["Jersey", "https://cnfansge.com/Jersey/", "07"], ["All products", "https://cnfansge.com/AllProducts/", "08"],
];

const navHrefs = ["/spreadsheet", "/finds", "/guides", "/qc", "/shipping", "/faq", "/articles"];

export function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => { const saved = window.localStorage.getItem("litbuys-lang") as Lang | null; if (saved && copies[saved]) { setLang(saved); document.documentElement.lang = saved; } }, []);
  function update(value: Lang) { setLang(value); window.localStorage.setItem("litbuys-lang", value); document.documentElement.lang = value; }
  return { lang, update, copy: copies[lang] };
}

export function SiteHeader({ lang, update, copy }: { lang: Lang; update: (l: Lang) => void; copy: Copy }) {
  function search(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const term = String(data.get("keywords") ?? "").trim(); if (term) window.location.href = `https://cnfansge.com/search.html?keywords=${encodeURIComponent(term)}`; }
  return <header className="site-header">
    <a className="logo" href="/" aria-label="LitBuys Store home"><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></a>
    <form className="site-search" onSubmit={search}><label className="sr-only" htmlFor="site-search">{copy.search}</label><input id="site-search" name="keywords" placeholder={copy.search} /><button type="submit" aria-label="Search">↗</button></form>
    <Select value={lang} onValueChange={(value) => update(value as Lang)}><SelectTrigger className="language-trigger" aria-label="Language"><SelectValue /></SelectTrigger><SelectContent className="language-menu" position="popper" align="end"><SelectItem className="language-option" value="en">EN</SelectItem><SelectItem className="language-option" value="de">DE</SelectItem><SelectItem className="language-option" value="es">ES</SelectItem><SelectItem className="language-option" value="fr">FR</SelectItem><SelectItem className="language-option" value="it">IT</SelectItem></SelectContent></Select>
  </header>;
}

export function TopicNav({ copy }: { copy: Copy }) {
  return <nav className="topic-nav" aria-label="Primary">{copy.nav.map((item, index) => <a key={item} href={navHrefs[index]}>{item}<sup>{String(index + 1).padStart(2, "0")}</sup></a>)}</nav>;
}

export function ProductGrid({ copy, limit }: { copy: Copy; limit?: number }) {
  return <div className="product-grid">{products.slice(0, limit).map((product, index) => <article className="product-card" key={product.id}>
    <a className="product-image" href={`/products/${product.slug}`}><img src={product.image} alt={product.name} width="640" height="640" loading="lazy" /><span>{String(index + 1).padStart(2, "0")}</span></a>
    <div className="product-body"><p>{product.category} · ID {product.id}</p><h3>{product.name}</h3><div className="price-row"><strong>{product.price}</strong><small>{copy.source} {product.cny}</small></div><a href={product.target} target="_blank" rel="noopener noreferrer">{copy.open} ↗</a></div>
  </article>)}</div>;
}

export function HomePage() {
  const { lang, update, copy } = useLanguage();
  return <main className="home-page"><SiteHeader lang={lang} update={update} copy={copy} />
    <TopicNav copy={copy} />
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.hero}</h1><p className="hero-intro">{copy.intro}</p><div className="hero-actions"><a className="button button-primary" href="#finds">{copy.primary} ↓</a><a className="button button-ghost" href="/spreadsheet">{copy.secondary} ↗</a></div></div>
      <div className="hero-board" aria-hidden="true"><span className="board-label">LITBUY / INDEX</span><div className="board-word">LOOK<br/>TWICE</div><div className="board-stamp">QC<br/>READY</div><div className="board-line">PRODUCT ROUTES / USD / GUIDES / 2026</div></div></section>
    <div className="proof-strip"><span>● {copy.verified}</span><span>● {copy.usd}</span><span>● {copy.checked}</span></div>
    <section className="section compact-section"><div className="section-heading"><div><p className="kicker">CATALOG / 01</p><h2>{copy.categories}</h2></div><p>{copy.categoryIntro}</p></div><div className="category-grid">{categories.map(([label, url, number]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer"><span>{number}</span><b>{label}</b><i>↗</i></a>)}</div></section>
    <section className="section" id="finds"><div className="section-heading"><div><p className="kicker">FINDS / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><ProductGrid copy={copy} /></section>
    <section className="section guide-section" id="guides"><div className="section-heading"><div><p className="kicker">CHECK / 03</p><h2>{copy.guideTitle}</h2></div><p>{copy.guideIntro}</p></div><div className="guide-grid">{copy.guides.map((guide) => <article key={guide.tag}><p>{guide.tag}</p><h3>{guide.title}</h3><span>{guide.text}</span><b>↘</b></article>)}</div></section>
    <section className="section" id="articles"><div className="section-heading"><div><p className="kicker">READ / 04</p><h2>{copy.articles}</h2></div><p>{copy.articleIntro}</p></div><div className="article-grid">{copy.articleCards.map((article, index) => <article key={article.title}><span>0{index + 1}</span><h3>{article.title}</h3><p>{article.text}</p><a href={`/articles/${articleSlugs[index]}`}>{copy.nav[6]} ↗</a></article>)}</div></section>
    <section className="section faq-section" id="faq"><div><p className="kicker">FAQ / 05</p><h2>{copy.faq}</h2></div><div className="faq-list">{copy.faqs.map((item, index) => <details key={item.q} open={index === 0}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div></section>
    <footer><a className="logo footer-logo" href="/"><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></a><p>{copy.disclaimer}</p><span>© 2026 litbuys.store</span></footer>
  </main>;
}

export type PageKey = "spreadsheet" | "finds" | "guides" | "qc" | "shipping" | "faq" | "articles";

type InnerCopy = {
  pages: Record<PageKey, { title: string; intro: string }>;
  directory: string; catalog: string; detail: string; priceNote: string; checkedLabel: string; productId: string;
  qcChecks: { title: string; text: string }[];
  shipping: { title: string; text: string }[];
  extraFaq: { q: string; a: string }[];
};

const innerCopies: Record<Lang, InnerCopy> = {
  en: {
    pages: {
      spreadsheet: { title: "A spreadsheet that stays readable", intro: "Eight source-matched records with stable product routes, clear images and USD reference values. Use the filters as a starting point, then verify the live source page before ordering." },
      finds: { title: "Finds grouped around real browsing", intro: "Start with a category or open an item. Every external route stays inside the main catalog and every featured image belongs to the destination shown." },
      guides: { title: "Buy with a checklist, not a guess", intro: "Short, practical guides for reading product pages, comparing measurements, reviewing QC images and planning parcel weight." },
      qc: { title: "QC photos are evidence, not a guarantee", intro: "A warehouse photo can reveal visible details and obvious damage. It cannot prove long-term durability, exact materials or how an item feels in use." },
      shipping: { title: "Know the weight that gets charged", intro: "Shipping quotes can depend on actual weight, volumetric weight, route rules and optional services. Separate those pieces before comparing a parcel estimate." },
      faq: { title: "Questions worth answering before checkout", intro: "Clear boundaries, route checks and price notes for using litbuys.store as an independent discovery layer." },
      articles: { title: "Research notes for the next step", intro: "Long-form explanations that connect a product find to listing checks, QC decisions and shipping planning." },
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
      { q: "How long does LitBuy store an item?", a: "LitBuy currently advertises up to 120 days, with the first 90 days free. Check the exact warehouse deadline and overdue status in your account because policy wording can change." },
      { q: "Why is international shipping paid after the product order?", a: "LitBuy uses a shopping-agent workflow: the product purchase happens first, then items reach the warehouse and international parcel freight is calculated separately." },
      { q: "What does LitBuy basic QC cover?", a: "LitBuy's refund terms describe basic QC as a check of quantity, visible appearance and obvious external defects. Photos do not certify authenticity, material or future durability." },
    ],
  },
  de: {
    pages: {
      spreadsheet: { title: "Eine Tabelle, die lesbar bleibt", intro: "Acht abgeglichene Datensätze mit stabilen Produktzielen, klaren Bildern und USD-Richtwerten. Prüfe vor der Bestellung immer die aktuelle Quellseite." },
      finds: { title: "Funde nach echtem Suchverhalten", intro: "Beginne mit einer Kategorie oder öffne einen Artikel. Alle externen Wege bleiben im Hauptkatalog und jedes Bild gehört zum gezeigten Ziel." },
      guides: { title: "Mit Checkliste kaufen, nicht raten", intro: "Praktische Ratgeber für Produktseiten, Maße, QC-Bilder und die Planung des Paketgewichts." },
      qc: { title: "QC-Fotos sind Belege, keine Garantie", intro: "Lagerfotos zeigen sichtbare Details und Schäden. Sie beweisen keine Haltbarkeit, exakten Materialien oder das Tragegefühl." },
      shipping: { title: "Kenne das berechnete Gewicht", intro: "Versandangebote hängen von tatsächlichem Gewicht, Volumengewicht, Routenregeln und Zusatzleistungen ab." },
      faq: { title: "Fragen vor dem Bezahlen", intro: "Klare Grenzen, Zielprüfungen und Preishinweise für die Nutzung als unabhängige Fundstelle." },
      articles: { title: "Recherche für den nächsten Schritt", intro: "Ausführliche Erklärungen von Produktfund über QC-Entscheidung bis Versandplanung." },
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
      { q: "Wie lange lagert LitBuy einen Artikel?", a: "LitBuy nennt derzeit bis zu 120 Tage, davon die ersten 90 Tage kostenlos. Prüfe das genaue Datum und mögliche Gebühren im Konto." },
      { q: "Warum wird internationaler Versand später bezahlt?", a: "Beim Agentenmodell wird zuerst der Artikel gekauft. Nach Ankunft im Lager wird der internationale Paketversand separat berechnet." },
      { q: "Was umfasst die grundlegende QC?", a: "Laut Erstattungsbedingungen werden Menge, sichtbares Erscheinungsbild und offensichtliche äußere Mängel geprüft; Fotos bestätigen weder Echtheit noch Haltbarkeit." },
    ],
  },
  es: {
    pages: {
      spreadsheet: { title: "Una hoja que sigue siendo legible", intro: "Ocho registros emparejados con rutas estables, imágenes claras y referencias USD. Verifica la página fuente en vivo antes de pedir." },
      finds: { title: "Hallazgos organizados para navegar", intro: "Empieza por una categoría o abre un artículo. Todas las rutas externas permanecen en el catálogo principal." },
      guides: { title: "Compra con lista, no con suposiciones", intro: "Guías prácticas para anuncios, medidas, imágenes QC y planificación del peso." },
      qc: { title: "Las fotos QC son evidencia, no garantía", intro: "Pueden mostrar detalles visibles y daños, pero no prueban durabilidad, materiales exactos ni sensación de uso." },
      shipping: { title: "Conoce el peso que se factura", intro: "Las cotizaciones pueden depender del peso real, volumétrico, reglas de ruta y servicios opcionales." },
      faq: { title: "Preguntas antes de pagar", intro: "Límites claros, rutas comprobadas y notas de precio para usar el sitio de forma independiente." },
      articles: { title: "Notas para el siguiente paso", intro: "Explicaciones que conectan el hallazgo con la revisión, QC y planificación del envío." },
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
      { q: "¿Cuánto tiempo almacena LitBuy un artículo?", a: "LitBuy anuncia hasta 120 días, con los primeros 90 gratuitos. Comprueba la fecha y los cargos en tu cuenta." },
      { q: "¿Por qué se paga después el envío internacional?", a: "Primero se compra el producto; cuando llega al almacén se calcula por separado el envío internacional del paquete." },
      { q: "¿Qué incluye el QC básico?", a: "Las condiciones de reembolso mencionan cantidad, aspecto visible y defectos externos evidentes; las fotos no certifican autenticidad ni durabilidad." },
    ],
  },
  fr: {
    pages: {
      spreadsheet: { title: "Un tableur qui reste lisible", intro: "Huit fiches associées à des routes stables, images claires et références USD. Vérifiez toujours la page source avant commande." },
      finds: { title: "Des trouvailles faites pour naviguer", intro: "Commencez par une catégorie ou un article. Toutes les routes externes restent dans le catalogue principal." },
      guides: { title: "Acheter avec une checklist", intro: "Des guides pratiques pour les fiches, mesures, images QC et le poids du colis." },
      qc: { title: "Les photos QC sont des indices, pas une garantie", intro: "Elles montrent les détails visibles et dégâts, pas la durabilité, la matière exacte ou le ressenti." },
      shipping: { title: "Connaître le poids facturé", intro: "Les devis dépendent du poids réel, volumétrique, des règles de route et des services optionnels." },
      faq: { title: "Les questions avant paiement", intro: "Des limites claires, routes vérifiées et notes de prix pour utiliser le site en toute indépendance." },
      articles: { title: "Des notes pour l’étape suivante", intro: "Des explications reliant la trouvaille, le contrôle QC et la préparation de l’envoi." },
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
      { q: "Combien de temps LitBuy stocke-t-il un article ?", a: "LitBuy annonce jusqu’à 120 jours, dont les 90 premiers gratuits. Vérifiez la date et les frais dans votre compte." },
      { q: "Pourquoi la livraison internationale est-elle payée plus tard ?", a: "Le produit est acheté d’abord; après son arrivée à l’entrepôt, le transport international du colis est calculé séparément." },
      { q: "Que couvre le QC de base ?", a: "Les conditions de remboursement citent quantité, apparence visible et défauts extérieurs évidents; les photos ne certifient ni authenticité ni durabilité." },
    ],
  },
  it: {
    pages: {
      spreadsheet: { title: "Un foglio che resta leggibile", intro: "Otto schede abbinate con percorsi stabili, immagini chiare e riferimenti USD. Verifica sempre la pagina sorgente prima dell’ordine." },
      finds: { title: "Prodotti organizzati per la ricerca", intro: "Inizia da una categoria o apri un articolo. Tutti i percorsi esterni restano nel catalogo principale." },
      guides: { title: "Compra con una checklist", intro: "Guide pratiche per schede, misure, immagini QC e pianificazione del peso." },
      qc: { title: "Le foto QC sono prove visive, non garanzie", intro: "Mostrano dettagli e danni visibili, non durata, materiali esatti o sensazione d’uso." },
      shipping: { title: "Conosci il peso fatturato", intro: "I preventivi dipendono da peso reale, volumetrico, regole della linea e servizi opzionali." },
      faq: { title: "Domande prima del pagamento", intro: "Confini chiari, percorsi verificati e note prezzo per usare il sito in modo indipendente." },
      articles: { title: "Note per il passo successivo", intro: "Spiegazioni che collegano prodotto, controllo QC e pianificazione della spedizione." },
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
      { q: "Per quanto tempo LitBuy conserva un articolo?", a: "LitBuy indica fino a 120 giorni, con i primi 90 gratuiti. Controlla la scadenza e gli addebiti nel tuo account." },
      { q: "Perché la spedizione internazionale si paga dopo?", a: "Prima viene acquistato il prodotto; dopo l'arrivo in magazzino il trasporto internazionale viene calcolato separatamente." },
      { q: "Cosa copre il QC di base?", a: "I termini di rimborso citano quantità, aspetto visibile e difetti esterni evidenti; le foto non certificano autenticità o durata." },
    ],
  },
};

function PageIntro({ label, title, intro }: { label: string; title: string; intro: string }) {
  return <section className="inner-hero"><p className="kicker">{label}</p><h1>{title}</h1><p>{intro}</p></section>;
}

function StandardShell({ children, lang, update, copy }: { children: ReactNode; lang: Lang; update: (l: Lang) => void; copy: Copy }) {
  return <main><SiteHeader lang={lang} update={update} copy={copy} /><TopicNav copy={copy} />{children}<footer><a className="logo footer-logo" href="/"><img src="/litbuy.png" alt="LitBuy" width="1368" height="356" /></a><p>{copy.disclaimer}</p><span>© 2026 litbuys.store</span></footer></main>;
}

function ResearchSection({ page }: { page: PageKey }) {
  const research = pageResearch[page];
  return <section className="section research-section">
    <div className="research-head"><p className="kicker">OFFICIAL-SOURCE RESEARCH / 29 AUG 2026</p><h2>{research.title}</h2><p>{research.intro}</p></div>
    <div className="research-grid">{research.blocks.map((block) => <article key={block.title}><p className="kicker">{block.eyebrow}</p><h3>{block.title}</h3>{block.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>)}</div>
    <p className="source-note"><strong>Research basis:</strong> LitBuy homepage, Help Center, Shipping Estimation, Shipping Policy, Refund Terms, warehouse storage notice, service description and product disclaimer, checked 29 August 2026. Policies and route prices can change; the live account remains authoritative.</p>
  </section>;
}

export function SubPage({ page }: { page: PageKey }) {
  const { lang, update, copy } = useLanguage();
  const inner = innerCopies[lang];
  const meta = inner.pages[page];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [...copy.faqs,...inner.extraFaq].map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  return <StandardShell lang={lang} update={update} copy={copy}>
    {page === "faq" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <PageIntro label={`${page.toUpperCase()} / LITBUYS`} title={meta.title} intro={meta.intro} />
    {page === "spreadsheet" && <><div className="data-strip"><span>08<br/><b>records</b></span><span>08<br/><b>matched routes</b></span><span>05<br/><b>languages</b></span><span>USD<br/><b>reference</b></span></div><section className="section"><div className="section-heading"><div><p className="kicker">DIRECTORY / 01</p><h2>{inner.directory}</h2></div><p>{inner.priceNote}</p></div><ProductGrid copy={copy} /></section></>}
    {page === "finds" && <><section className="section compact-section"><div className="section-heading"><div><p className="kicker">CATEGORIES / 01</p><h2>{copy.categories}</h2></div><p>{copy.categoryIntro}</p></div><div className="category-grid">{categories.map(([label,url,number]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer"><span>{number}</span><b>{label}</b><i>↗</i></a>)}</div></section><section className="section"><div className="section-heading"><div><p className="kicker">PICKS / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><ProductGrid copy={copy} /></section></>}
    {page === "guides" && <section className="section"><div className="guide-directory">{copy.guides.map((guide,index) => <a href={["/qc","/articles/litbuy-spreadsheet-guide","/shipping"][index]} key={guide.tag}><span>{guide.tag}</span><h2>{guide.title}</h2><p>{guide.text}</p><b>↗</b></a>)}</div></section>}
    {page === "qc" && <section className="section"><div className="checklist-grid">{inner.qcChecks.map((item,index) => <article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></section>}
    {page === "shipping" && <><section className="formula-section"><p>VOLUMETRIC WEIGHT</p><div><b>L × W × H</b><span>÷ ROUTE DIVISOR</span></div><small>{inner.priceNote}</small></section><section className="section"><div className="shipping-grid">{inner.shipping.map((item,index) => <article key={item.title}><span>0{index+1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section></>}
    {page === "faq" && <section className="section faq-section"><div><p className="kicker">FAQ / COMPLETE</p><h2>{copy.faq}</h2></div><div className="faq-list">{[...copy.faqs,...inner.extraFaq].map((item,index) => <details key={item.q} open={index===0}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div></section>}
    {page === "articles" && <section className="section"><div className="article-grid">{copy.articleCards.map((article,index) => <article key={article.title}><span>0{index+1}</span><h3>{article.title}</h3><p>{article.text}</p><a href={`/articles/${articleSlugs[index]}`}>{inner.detail} ↗</a></article>)}</div></section>}
    <ResearchSection page={page} />
  </StandardShell>;
}

const articleEvidence: Record<ArticleSlug, { title: string; columns: string[]; rows: string[][] }> = {
  "litbuy-spreadsheet-guide": {
    title: "A row is only as strong as its evidence chain",
    columns: ["Field", "What it proves", "What to recheck"],
    rows: [["Product ID", "Which source record was captured", "The live record still resolves"], ["Matched image", "Which visible item the row describes", "Option and color still correspond"], ["CNY + USD", "Source value and browsing reference", "Live option price and exchange rate"], ["Checked date", "When the route was reviewed", "Inventory and seller changes"]],
  },
  "litbuy-qc-photo-checklist": {
    title: "Visible evidence has a boundary",
    columns: ["QC can help check", "QC cannot certify", "Best next action"],
    rows: [["Quantity and visible option", "Authenticity", "Match order ID and labels"], ["Shape and obvious damage", "Hidden construction", "Request a precise angle"], ["Displayed measurements", "Comfort or future fit", "Compare with an owned item"], ["Packaging condition", "Long-term durability", "Resolve before parcel submission"]],
  },
  "litbuy-shipping-weight-guide": {
    title: "Three numbers that should not be confused",
    columns: ["Number", "Meaning", "Main uncertainty"],
    rows: [["Actual weight", "Packed parcel on a scale", "Packing not yet final"], ["Volumetric weight", "Space converted by route formula", "Dimensions and divisor"], ["Chargeable weight", "Weight used for the route invoice", "Rounding and billing increments"], ["Route quote", "Price under current route rules", "Surcharges and destination costs"]],
  },
  "litbuy-review-2026": {
    title: "Review signals answer different questions",
    columns: ["Evidence source", "Useful for", "Important limit"],
    rows: [["LitBuy policy pages", "Published process and rules", "Policies can change"], ["Trustpilot reviews", "Recurring customer themes", "Rating unavailable after guideline breach"], ["App Store reviews", "App and workflow experiences", "Aggregate mixes different problems"], ["Your live quote", "Current route and parcel decision", "Only applies to your inputs"]],
  },
};

export function ArticlePage({ slug }: { slug: ArticleSlug }) {
  const { lang, update, copy } = useLanguage();
  const fullTranslations = { de: articleDe, es: articleEs, fr: articleFr, it: articleIt };
  const article = lang === "en" || slug === "litbuy-review-2026" ? articleData[slug][lang] : fullTranslations[lang][slug] ?? articleData[slug][lang];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.deck,
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    author: { "@type": "Organization", name: "LitBuys Store" },
    publisher: { "@type": "Organization", name: "LitBuys Store" },
    mainEntityOfPage: `https://litbuys.store/articles/${slug}`,
  };
  return <StandardShell lang={lang} update={update} copy={copy}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article className="article-page">
      <header className="article-head"><p className="kicker">FIELD NOTE / LITBUYS</p><h1>{article.title}</h1><p>{article.deck}</p><div className="article-meta"><span>{article.readTime}</span><span>Updated 29 Aug 2026</span><span>Independent guide</span></div></header>
      <figure className="evidence-table"><figcaption>{articleEvidence[slug].title}</figcaption><div><table><thead><tr>{articleEvidence[slug].columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{articleEvidence[slug].rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></figure>
      <div className="article-body">
        <nav className="article-toc" aria-label="Article sections">{article.sections.map((section,index) => <a href={`#section-${index+1}`} key={section.heading}><span>0{index+1}</span> {section.heading}</a>)}</nav>
        <div className="article-content">{article.sections.map((section,index) => <section id={`section-${index+1}`} key={section.heading}><p className="kicker">SECTION / 0{index+1}</p><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,pIndex) => <p key={pIndex}>{paragraph}</p>)}</section>)}</div>
      </div>
    </article>
  </StandardShell>;
}

export function ProductDetailPage({ slug }: { slug: string }) {
  const { lang, update, copy } = useLanguage();
  const inner = innerCopies[lang];
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const related = products.filter((item) => item.slug !== product.slug).slice(0,4);
  return <StandardShell lang={lang} update={update} copy={copy}>
    <section className="product-detail-page"><div className="detail-image"><img src={product.image} alt={product.name} width="1000" height="1000" /></div><div className="detail-copy"><p className="kicker">{product.category} / {inner.productId} {product.id}</p><h1>{product.name}</h1><div className="detail-price"><strong>{product.price}</strong><span>{copy.source} {product.cny}</span></div><p>{inner.priceNote}</p><dl><div><dt>{inner.checkedLabel}</dt><dd>29 Aug 2026</dd></div><div><dt>IMAGE ROUTE</dt><dd>MATCHED</dd></div><div><dt>DESTINATION</dt><dd>MAIN CATALOG</dd></div></dl><a className="button button-primary" href={product.target} target="_blank" rel="noopener noreferrer">{copy.open} ↗</a></div></section>
    <section className="section"><div className="section-heading"><div><p className="kicker">RELATED / 02</p><h2>{copy.picks}</h2></div><p>{copy.picksIntro}</p></div><div className="product-grid">{related.map((item,index) => <article className="product-card" key={item.id}><a className="product-image" href={`/products/${item.slug}`}><img src={item.image} alt={item.name} width="640" height="640" loading="lazy"/><span>0{index+1}</span></a><div className="product-body"><p>{item.category} · ID {item.id}</p><h3>{item.name}</h3><div className="price-row"><strong>{item.price}</strong><small>{item.cny}</small></div><a href={`/products/${item.slug}`}>{inner.detail} ↗</a></div></article>)}</div></section>
  </StandardShell>;
}
