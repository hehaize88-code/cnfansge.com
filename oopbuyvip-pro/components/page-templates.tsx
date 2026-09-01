import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpenCheck, Boxes, Camera, CircleDollarSign, Clock3, PackageCheck, RotateCcw, Ruler, Search, ShieldCheck } from "lucide-react";
import { CatalogSearch } from "@/components/site-header";
import { ProductExplorer } from "@/components/product-explorer";
import { FaqList } from "@/components/faq-list";
import { articlePath, categories, copy, DESTINATION, faqByLocale, getArticles, homePath, products, sectionPath, SITE_URL, type Article, type Locale, type Section } from "@/lib/site";
import { sectionDepth, type DepthSection } from "@/lib/section-depth";
import { categoryLabels, homeUi, localizeProduct } from "@/lib/ui-localization";

const icons = [Search, Camera, PackageCheck];

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const articles = getArticles(locale);
  const ui = homeUi[locale];
  const websiteLd = { "@context": "https://schema.org", "@type": "WebSite", name: "OOPBUY VIP", url: SITE_URL, inLanguage: locale, description: t.heroText, potentialAction: { "@type": "SearchAction", target: `${DESTINATION}/search.html?channelid=2&keywords={search_term_string}`, "query-input": "required name=search_term_string" } };
  return (
    <main className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-lede">{t.heroText}</p>
            <CatalogSearch locale={locale} />
            <div className="hero-proof"><span><b>08</b> {ui.proof[0]}</span><span><b>05</b> {ui.proof[1]}</span><span><b>01</b> {ui.proof[2]}</span></div>
          </div>
          <aside className="hero-collage" aria-label="Current curated products">
            <figure className="collage-main"><Image src="/products/5760.webp" alt={ui.collageAlt[0]} fill priority sizes="(max-width: 720px) 60vw, 32vw" /></figure>
            <figure className="collage-top"><Image src="/products/2450.webp" alt={ui.collageAlt[1]} fill priority sizes="(max-width: 720px) 34vw, 16vw" /></figure>
            <figure className="collage-bottom"><Image src="/products/5841.webp" alt={ui.collageAlt[2]} fill sizes="(max-width: 720px) 32vw, 15vw" /></figure>
            <div className="collage-note"><span>QC</span><b>{ui.collageNote}</b></div>
            <div className="collage-stamp">{ui.stamp[0]}<br />{ui.stamp[1]}<br />{ui.stamp[2]}</div>
          </aside>
        </div>
      </section>

      <section className="section shell product-section">
        <div className="section-head"><div><p className="kicker">{t.liveSheet}</p><h2>{t.products}</h2><p>{t.productIntro}</p></div><Link className="text-link" href={sectionPath(locale, "spreadsheet")}>{t.liveSheet}<ArrowRight /></Link></div>
        <ProductExplorer locale={locale} />
      </section>

      <section className="category-band">
        <div className="shell"><div className="section-head light"><div><p className="kicker">{ui.routes}</p><h2>{t.categories}</h2><p>{t.categoryIntro}</p></div></div>
          <div className="category-grid">{categories.map(([name, path], index) => <a href={`${DESTINATION}${path}`} target="_blank" rel="nofollow sponsored noopener" key={name}><span>{String(index + 1).padStart(2, "0")}</span><b>{categoryLabels[locale][name]}</b><ArrowUpRight /></a>)}</div>
        </div>
      </section>

      <section className="section shell method-section">
        <div className="section-head"><div><p className="kicker">{t.method}</p><h2>{t.methodTitle}</h2></div></div>
        <div className="method-grid">{t.methodSteps.map((step, index) => { const Icon = icons[index]; return <article key={step}><div className="method-icon"><Icon /></div><span>0{index + 1}</span><h3>{step}</h3><p>{t.methodBodies[index]}</p></article>; })}</div>
      </section>

      <section className="section shell split-section">
        <div className="split-intro"><p className="kicker">{t.nav.faq}</p><h2>{t.faqTitle}</h2><p>{t.faqIntro}</p><Link className="text-link" href={sectionPath(locale, "faq")}>{t.nav.faq}<ArrowRight /></Link></div>
        <FaqList locale={locale} limit={4} />
      </section>

      <section className="article-band"><div className="shell"><div className="section-head"><div><p className="kicker">{t.nav.articles}</p><h2>{t.articlesTitle}</h2><p>{t.articlesIntro}</p></div><Link className="text-link" href={sectionPath(locale, "articles")}>{t.nav.articles}<ArrowRight /></Link></div><ArticleGrid locale={locale} articles={articles} /></div></section>
    </main>
  );
}

export function ArticleGrid({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const t = copy[locale];
  const labels = homeUi[locale].articleLabels;
  const visuals = {
    "oopbuy-beginner-guide-2026": { label: labels.beginner, className: "thumb-guide", Icon: BookOpenCheck },
    "oopbuy-spreadsheet-workflow": { label: labels.spreadsheet, className: "thumb-sheet", Icon: Boxes },
    "oopbuy-qc-photo-checklist": { label: labels.qc, className: "thumb-qc", Icon: Camera },
    "oopbuy-fees-returns-policy": { label: labels.fees, className: "thumb-fees", Icon: RotateCcw },
    "oopbuy-shipping-cost-planner": { label: labels.shipping, className: "thumb-shipping", Icon: Ruler },
  } as const;
  return <div className="article-grid">{articles.map((article) => { const visual = visuals[article.slug as keyof typeof visuals] || visuals["oopbuy-beginner-guide-2026"]; const Icon = visual.Icon; return <Link href={articlePath(locale, article.slug)} className="article-card" key={article.slug}><div className={`article-thumb ${visual.className}`}><span>{visual.label}</span><Icon /></div><div className="article-copy"><span>{article.readTime} · {t.updated}</span><h3>{article.title}</h3><p>{article.deck}</p><b>{t.read}<ArrowRight /></b></div></Link>; })}</div>;
}

export function SectionPage({ locale, section }: { locale: Locale; section: Section }) {
  const t = copy[locale];
  const articles = getArticles(locale);
  const isProduct = section === "spreadsheet" || section === "finds";
  const isFaq = section === "faq";
  const isArticles = section === "articles";
  const faqLd = isFaq ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqByLocale[locale].map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) } : null;
  const canonical = `${SITE_URL}${sectionPath(locale, section)}`;
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "OOPBUY VIP", item: `${SITE_URL}${homePath(locale)}` },
    { "@type": "ListItem", position: 2, name: t.sectionTitles[section], item: canonical },
  ] };
  const itemListLd = isProduct ? { "@context": "https://schema.org", "@type": "ItemList", name: t.sectionTitles[section], numberOfItems: section === "finds" ? 6 : products.length, itemListElement: products.slice(0, section === "finds" ? 6 : undefined).map((product, index) => {
    const item = localizeProduct(product, locale);
    return { "@type": "ListItem", position: index + 1, url: product.href, name: item.name, image: `${SITE_URL}${product.image}` };
  }) } : null;
  return (
    <main>
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {itemListLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />}
      <section className="page-hero"><div className="shell narrow"><p className="eyebrow">{t.sectionKickers[section]}</p><h1>{t.sectionTitles[section]}</h1><p>{t.sectionIntros[section]}</p>{isProduct && <CatalogSearch locale={locale} />}</div></section>
      {isProduct && <section className="section shell"><ProductExplorer locale={locale} limit={section === "finds" ? 6 : undefined} /></section>}
      {section === "guide" && <GuideBody locale={locale} />}
      {section === "qc" && <QcBody locale={locale} />}
      {section === "shipping" && <ShippingBody locale={locale} />}
      {isFaq && <section className="section shell narrow"><FaqList locale={locale} /><p className="source-note">{t.sourceNote}</p></section>}
      {isArticles && <section className="section shell"><ArticleGrid locale={locale} articles={articles} /></section>}
      {!isFaq && <SectionDepth locale={locale} section={section as DepthSection} />}
    </main>
  );
}

const bodyCopy: Record<Locale, { guide: { title: string; text: string }[]; qc: { title: string; text: string }[]; shipping: { title: string; text: string }[] }> = {
  en: {
    guide: [
      { title: "1. Define the purchase", text: "Write down category, intended use, selected size or option, product budget and a separate shipping allowance. A clear brief stops the spreadsheet becoming an endless browse." },
      { title: "2. Open the current route", text: "Confirm the destination page still matches the card. Save the product ID, option, date and visible price. Treat changed or missing routes as stale." },
      { title: "3. Review warehouse evidence", text: "OOPBUY says arrivals are inspected and photographed. Compare the received item with your saved reference while the official five-day / 120-hour return window may still apply." },
      { title: "4. Build the parcel", text: "Use measured information when available, account for actual and volumetric weight, check restrictions and compare routes by total service—not only the lowest headline price." },
      { title: "5. Pay the packed result", text: "OOPBUY’s tutorial distinguishes estimated shipping from the actual cost shown after packing. Recheck the item list, address, route, measurements, optional services and final amount before payment." },
      { title: "6. Track the waybill", text: "After shipment, the official tutorial directs users to the logistics track in “My Waybill”. Keep the parcel reference and compare the delivered result with the original cost and timing range." },
    ],
    qc: [
      { title: "Identity", text: "Match the selected color, size label, model, option and quantity. These are the clearest objective checks." },
      { title: "Visible condition", text: "Review surfaces, symmetry, major seams, print placement and obvious damage from equivalent angles." },
      { title: "Missing evidence", text: "Ask a targeted question only when the answer could change the keep, return or exchange decision." },
      { title: "Timing", text: "Review promptly. OOPBUY’s official help material states a five-day or 120-hour return and exchange window after warehousing." },
      { title: "Warehouse scope", text: "OOPBUY says qualifying arrivals are opened for prohibited-item inspection, weighed and stored. The beginner guide also says goods are quality-inspected and photographed; neither step guarantees authenticity or durability." },
      { title: "Aftersales evidence", text: "Use the order’s aftersales flow and describe an objective mismatch. OOPBUY requests the return or exchange from the seller, so seller approval and eligibility can affect the outcome." },
    ],
    shipping: [
      { title: "Actual weight", text: "The scale weight of the packed parcel. Add a sensible allowance before final packing is confirmed." },
      { title: "Volumetric weight", text: "A size-based billing value. Light, bulky parcels can be charged above their scale weight depending on the route." },
      { title: "Route fit", text: "Compare eligibility, limits, tracking and transit expectations alongside price. Restrictions can remove otherwise cheap choices." },
      { title: "Planning range", text: "Keep low, expected and high scenarios. Replace estimates with warehouse measurements as soon as they are available." },
      { title: "Estimate versus actual", text: "The official tutorial says an estimated shipping amount may appear before the actual cost is calculated after packing. Do not present the estimator as a final invoice." },
      { title: "Track after dispatch", text: "OOPBUY says a tracking number is provided and the shipment trail can be viewed under “My Waybill”. Carrier and customs timing remain outside a fixed guarantee." },
    ],
  },
  de: {
    guide: [{ title: "1. Kauf definieren", text: "Kategorie, Nutzung, Variante, Produktbudget und separaten Versandpuffer notieren." }, { title: "2. Route öffnen", text: "Zielseite, Produkt-ID, Variante, Datum und Preis prüfen. Fehlende oder stark veränderte Routen sind veraltet." }, { title: "3. Lagerbilder prüfen", text: "Den erhaltenen Artikel zeitnah mit der Referenz vergleichen, solange die offizielle Frist greifen kann." }, { title: "4. Paket planen", text: "Ist- und Volumengewicht, Einschränkungen und gesamten Service vergleichen – nicht nur die kleinste Zahl." }, { title: "5. Packbetrag bezahlen", text: "Das Tutorial unterscheidet Schätzung und tatsächliche Kosten nach dem Packen. Inhalt, Adresse, Route, Maße und Endbetrag erneut prüfen." }, { title: "6. Waybill verfolgen", text: "Nach Versand steht der Verlauf laut offiziellem Tutorial unter „My Waybill“ zur Verfügung." }],
    qc: [{ title: "Identität", text: "Farbe, Größenetikett, Modell, Variante und Menge abgleichen." }, { title: "Sichtbarer Zustand", text: "Oberflächen, Symmetrie, Nähte, Druckposition und Schäden prüfen." }, { title: "Fehlende Belege", text: "Nur gezielt nachfragen, wenn die Antwort die Entscheidung ändern kann." }, { title: "Zeitpunkt", text: "Offizielle Hinweise nennen fünf Tage beziehungsweise 120 Stunden nach Einlagerung." }, { title: "Lagerumfang", text: "OOPBUY nennt Verbotsprüfung, Wiegen, Einlagern, Qualitätsprüfung und Fotos. Das garantiert weder Echtheit noch Haltbarkeit." }, { title: "Aftersales-Beleg", text: "Eine objektive Abweichung im Auftrag dokumentieren; OOPBUY fragt den Verkäufer an, dessen Zustimmung relevant sein kann." }],
    shipping: [{ title: "Ist-Gewicht", text: "Gewicht des gepackten Pakets mit sinnvollem Verpackungspuffer." }, { title: "Volumengewicht", text: "Größenbasierter Abrechnungswert; leichte, große Pakete können höher berechnet werden." }, { title: "Routenpassung", text: "Zulässigkeit, Limits, Tracking und Laufzeit mit dem Preis vergleichen." }, { title: "Planungsspanne", text: "Niedriges, erwartetes und hohes Szenario mit Lagerdaten aktualisieren." }, { title: "Schätzung und Ist", text: "Das Tutorial sagt, dass der tatsächliche Betrag nach dem Packen berechnet wird. Der Rechner ist keine Endrechnung." }, { title: "Tracking", text: "Nach Versand wird eine Trackingnummer bereitgestellt; der Verlauf steht unter „My Waybill“." }],
  },
  es: {
    guide: [{ title: "1. Define la compra", text: "Anota categoría, uso, variante, presupuesto y margen de envío." }, { title: "2. Abre la ruta", text: "Comprueba destino, ID, opción, fecha y precio; una ruta muy cambiada es obsoleta." }, { title: "3. Revisa el almacén", text: "Compara pronto el artículo recibido con tu referencia mientras el plazo puede seguir vigente." }, { title: "4. Crea el paquete", text: "Compara peso real, volumen, restricciones y servicio total, no solo la cifra menor." }, { title: "5. Paga el paquete real", text: "El tutorial diferencia estimación y coste real tras embalar. Revisa contenido, dirección, ruta, medidas y total." }, { title: "6. Sigue la guía", text: "Tras el envío, el tutorial oficial muestra el seguimiento en “My Waybill”." }],
    qc: [{ title: "Identidad", text: "Comprueba color, talla, modelo, opción y cantidad." }, { title: "Estado visible", text: "Revisa superficies, simetría, costuras, impresión y daños." }, { title: "Evidencia ausente", text: "Pregunta solo si la respuesta puede cambiar la decisión." }, { title: "Plazo", text: "La ayuda oficial indica cinco días o 120 horas desde la entrada." }, { title: "Alcance del almacén", text: "OOPBUY cita inspección de prohibidos, pesaje, almacenamiento, control y fotos; no garantiza autenticidad o duración." }, { title: "Prueba posventa", text: "Documenta una diferencia objetiva; OOPBUY consulta al vendedor y su aprobación puede ser necesaria." }],
    shipping: [{ title: "Peso real", text: "Peso del paquete con margen razonable de embalaje." }, { title: "Peso volumétrico", text: "Valor basado en tamaño; los paquetes grandes y ligeros pueden pagar más." }, { title: "Ruta adecuada", text: "Compara elegibilidad, límites, seguimiento y tránsito junto al precio." }, { title: "Rango", text: "Actualiza escenarios bajo, esperado y alto con datos de almacén." }, { title: "Estimado y real", text: "El tutorial indica que el coste real se calcula tras embalar; el estimador no es una factura final." }, { title: "Seguimiento", text: "Después del envío se facilita un número y el recorrido aparece en “My Waybill”." }],
  },
  fr: {
    guide: [{ title: "1. Définir l’achat", text: "Notez catégorie, usage, option, budget produit et marge de livraison." }, { title: "2. Ouvrir la route", text: "Vérifiez destination, identifiant, option, date et prix; une route modifiée est périmée." }, { title: "3. Contrôler l’entrepôt", text: "Comparez rapidement l’article reçu à la référence pendant que le délai peut s’appliquer." }, { title: "4. Construire le colis", text: "Comparez poids réel, volume, restrictions et service complet, pas uniquement le plus petit tarif." }, { title: "5. Payer le colis réel", text: "Le tutoriel distingue estimation et coût réel après emballage. Vérifiez contenu, adresse, route, mesures et total." }, { title: "6. Suivre le bordereau", text: "Après expédition, le tutoriel officiel place le suivi dans “My Waybill”." }],
    qc: [{ title: "Identité", text: "Vérifiez couleur, taille, modèle, option et quantité." }, { title: "État visible", text: "Contrôlez surfaces, symétrie, coutures, placement et dégâts." }, { title: "Preuve manquante", text: "Posez une question ciblée si la réponse peut changer la décision." }, { title: "Délai", text: "L’aide officielle indique cinq jours ou 120 heures après stockage." }, { title: "Portée de l’entrepôt", text: "OOPBUY cite contrôle des interdits, pesée, stockage, inspection et photos, sans garantie d’authenticité ou de durée." }, { title: "Preuve après-vente", text: "Documentez un écart objectif; OOPBUY sollicite le vendeur et son accord peut compter." }],
    shipping: [{ title: "Poids réel", text: "Poids du colis avec une marge raisonnable pour l’emballage." }, { title: "Poids volumétrique", text: "Valeur liée aux dimensions; un colis léger et grand peut être facturé davantage." }, { title: "Route adaptée", text: "Comparez éligibilité, limites, suivi et délai avec le prix." }, { title: "Fourchette", text: "Actualisez les scénarios bas, attendu et haut avec les mesures d’entrepôt." }, { title: "Estimé et réel", text: "Le tutoriel indique que le coût réel est calculé après emballage; l’estimateur n’est pas une facture." }, { title: "Suivi", text: "Après expédition, un numéro est fourni et le parcours apparaît dans “My Waybill”." }],
  },
  it: {
    guide: [{ title: "1. Definisci l’acquisto", text: "Annota categoria, uso, variante, budget prodotto e margine di spedizione." }, { title: "2. Apri il percorso", text: "Controlla destinazione, ID, opzione, data e prezzo; un percorso cambiato è obsoleto." }, { title: "3. Controlla il magazzino", text: "Confronta presto l’articolo con il riferimento mentre la finestra può essere valida." }, { title: "4. Crea il pacco", text: "Confronta peso reale, volume, restrizioni e servizio completo, non solo la tariffa minore." }, { title: "5. Paga il pacco reale", text: "Il tutorial distingue stima e costo reale dopo l’imballaggio. Controlla contenuto, indirizzo, rotta, misure e totale." }, { title: "6. Segui la spedizione", text: "Dopo l’invio, il tutorial ufficiale mostra il tracking in “My Waybill”." }],
    qc: [{ title: "Identità", text: "Controlla colore, taglia, modello, opzione e quantità." }, { title: "Stato visibile", text: "Esamina superfici, simmetria, cuciture, stampe e danni." }, { title: "Evidenza mancante", text: "Fai una domanda mirata se la risposta può cambiare la decisione." }, { title: "Tempi", text: "L’assistenza ufficiale indica cinque giorni o 120 ore dall’ingresso." }, { title: "Ambito magazzino", text: "OOPBUY cita controllo dei divieti, pesatura, stoccaggio, ispezione e foto, senza garanzia di autenticità o durata." }, { title: "Prova post-vendita", text: "Documenta una differenza oggettiva; OOPBUY consulta il venditore e la sua approvazione può incidere." }],
    shipping: [{ title: "Peso reale", text: "Peso del pacco con un margine ragionevole per l’imballaggio." }, { title: "Peso volumetrico", text: "Valore basato sulle dimensioni; pacchi grandi e leggeri possono costare di più." }, { title: "Percorso adatto", text: "Confronta idoneità, limiti, tracking e tempi insieme al prezzo." }, { title: "Intervallo", text: "Aggiorna scenari basso, atteso e alto con i dati del magazzino." }, { title: "Stima e costo reale", text: "Il tutorial indica che il costo reale viene calcolato dopo l’imballaggio; lo stimatore non è una fattura." }, { title: "Tracking", text: "Dopo la spedizione viene fornito un numero e il percorso appare in “My Waybill”." }],
  },
};

function GuideBody({ locale }: { locale: Locale }) { return <BodyCards items={bodyCopy[locale].guide} icon="guide" sourceNote={copy[locale].sourceNote} />; }
function QcBody({ locale }: { locale: Locale }) { return <BodyCards items={bodyCopy[locale].qc} icon="qc" sourceNote={copy[locale].sourceNote} />; }
function ShippingBody({ locale }: { locale: Locale }) { return <BodyCards items={bodyCopy[locale].shipping} icon="shipping" sourceNote={copy[locale].sourceNote} />; }

function BodyCards({ items, icon, sourceNote }: { items: { title: string; text: string }[]; icon: string; sourceNote: string }) {
  const Icon = icon === "guide" ? ShieldCheck : icon === "qc" ? Camera : CircleDollarSign;
  return <section className="section shell narrow"><div className="body-card-grid">{items.map((item, index) => <article key={item.title}><span><Icon />0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div><p className="source-note research-note">{sourceNote}</p></section>;
}

function SectionDepth({ locale, section }: { locale: Locale; section: DepthSection }) {
  return <section className="section shell narrow section-depth" aria-label={copy[locale].sectionTitles[section]}><div className="section-depth-grid">{sectionDepth[locale][section].map((item) => <article key={item.title}><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section>;
}

export function ArticlePage({ locale, article }: { locale: Locale; article: Article }) {
  const t = copy[locale];
  const articleUrl = `${SITE_URL}${articlePath(locale, article.slug)}`;
  const articleLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.deck, inLanguage: locale, image: { "@type": "ImageObject", url: `${SITE_URL}/og.png`, width: 1200, height: 630 }, mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl }, dateModified: "2026-09-01", datePublished: "2026-09-01", author: { "@type": "Organization", name: "OOPBUY VIP Research Desk" }, publisher: { "@type": "Organization", name: "OOPBUY VIP", logo: { "@type": "ImageObject", url: `${SITE_URL}/oopbuy-logo.png` } } };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "OOPBUY VIP", item: `${SITE_URL}${homePath(locale)}` },
    { "@type": "ListItem", position: 2, name: t.nav.articles, item: `${SITE_URL}${sectionPath(locale, "articles")}` },
    { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
  ] };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} /><article className="longform"><header className="article-hero"><div className="shell article-header"><p className="eyebrow">OOPBUY VIP / {t.nav.articles}</p><h1>{article.title}</h1><p>{article.deck}</p><div><span><Clock3 />{article.readTime}</span><span>{t.updated}</span></div></div></header><div className="shell article-layout"><aside><p>{homeUi[locale].toc}</p>{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} {section.heading}</a>)}</aside><div className="article-body">{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="source-box"><PackageCheck /><div><b>{t.sourceNote}</b><p>{t.disclosure}</p>{article.sources && <div className="source-links">{article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight /></a>)}</div>}</div></div></div></div></article></main>;
}
