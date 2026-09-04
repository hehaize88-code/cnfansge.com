/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Box, Check, ExternalLink, Search, ShieldCheck, Sparkles, Weight } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import { categories, copy, localPath, products, type Locale, type PageKey } from "./site-data";
import { articleData } from "./article-data";
import { officialFaqs, seoPageIntro } from "./research-copy";
import { decisionKeys, decisions, proHome, proNav, type DecisionKey } from "./pro-data";
import { orderIdentifiersArticleData } from "./order-identifiers-article";
import { orderTimelineArticleData } from "./order-timeline-article";
import { sellerHandoffArticleData } from "./seller-handoff-article";
import { corePageCopy, type CorePageKey } from "./core-page-copy";

const navKeys: PageKey[] = ["spreadsheet","finds","guide","qc","shipping","faq","articles"];

function Header({ locale, page }: { locale:Locale; page:PageKey }) {
  const c = copy[locale];
  const paths = Object.fromEntries(["en","de","es","fr","it"].map((lang) => [lang, localPath(lang as Locale, page)]));
  return <header className="topbar">
    <Link href={localPath(locale,"home")} className="brand" aria-label="Kakobuy VIP home"><img src="/kakobuy.png" alt="Kakobuy" width="613" height="160"/><span>VIP GUIDE</span></Link>
    <nav aria-label="Primary navigation">{navKeys.map((key,index)=><Link key={key} href={localPath(locale,key)} className={page===key?"active":""}>{c.nav[index]}</Link>)}</nav>
    <LocaleSwitcher value={locale} label={c.language} paths={paths}/>
  </header>;
}

function Footer({ locale }: { locale:Locale }) {
  const c=copy[locale];
  return <footer><div className="foot-brand"><img src="/kakobuy.png" alt="Kakobuy" width="613" height="160"/><span>VIP / INDEPENDENT GUIDE</span></div><p>{c.disclaimer}</p><small>{c.footer}</small></footer>;
}

function SearchBox({ locale }: {locale:Locale}) {
  const c=copy[locale];
  return <form className="searchbox" action="https://cnfansge.com/search.html" method="get">
    <Search size={19}/><input type="hidden" name="channelid" value="2"/><input name="keywords" placeholder={c.placeholder} aria-label={c.search}/><button type="submit">{c.search}<ArrowRight size={18}/></button>
  </form>;
}

function ProductGrid({ locale, all=false }: {locale:Locale; all?:boolean}) {
  const c=copy[locale];
  const shown=all?products:products.slice(0,4);
  return <div className={`product-grid ${all?"wide":""}`}>{shown.map((product,index)=><a className="product-card" href={product.href} key={product.href} target="_blank" rel="noreferrer">
    <div className="product-image"><img src={product.image} alt={product.name} width="600" height="600" loading={index===0?"eager":"lazy"}/><span>{String(index+1).padStart(2,"0")}</span></div>
    <div className="product-copy"><small>{product.category} · {product.cny}</small><h3>{product.name}</h3><div><strong>{product.price}</strong><span>{c.open}<ExternalLink size={13}/></span></div></div>
  </a>)}</div>;
}

function Categories({ locale }: {locale:Locale}) {
  const c=copy[locale];
  return <section className="section split-title"><div><p className="eyebrow">CATALOG / 11</p><h2>{c.categories}</h2></div><div><p>{c.categoriesBody}</p><div className="category-grid">{categories.map(([name,href],i)=><a href={href} key={href} target="_blank" rel="noreferrer"><span>{String(i+1).padStart(2,"0")}</span>{name}<ArrowRight size={16}/></a>)}</div></div></section>;
}

function Home({ locale }: {locale:Locale}) {
  const c=copy[locale];
  const p=proHome[locale];
  const schema={"@context":"https://schema.org","@type":"WebSite",name:"Kakobuy VIP Pro",url:"https://kakobuyvip.pro",potentialAction:{"@type":"SearchAction",target:"https://cnfansge.com/search.html?channelid=2&keywords={search_term_string}","query-input":"required name=search_term_string"}};
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:officialFaqs[locale].map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <main>
      <section className="hero">
        <div className="hero-copy"><p className="status"><span/> {p.badge}</p><h1>{p.title}</h1><p className="lede">{p.body}</p><div className="hero-actions"><Link className="primary-action" href={localPath(locale,"calculator")}>{p.primary}<ArrowRight size={18}/></Link><a className="secondary-action" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">{p.secondary}<ExternalLink size={16}/></a></div><SearchBox locale={locale}/><div className="hero-meta"><span><ShieldCheck size={16}/>{c.verified}</span><span>{c.updated}</span></div></div>
        <div className="hero-board"><div className="board-orbit orbit-one">QC</div><div className="board-orbit orbit-two">LIVE</div><a href={products[0].href} target="_blank" rel="noreferrer"><div className="board-head"><span>FEATURED FIND</span><strong>01 / 04</strong></div><img src={products[0].image} alt="Featured shoes" width="720" height="720"/><div className="board-caption"><small>LINK &amp; IMAGE CHECKED</small><b>{products[0].name}</b><span>{products[0].price}</span></div></a><div className="board-note"><ShieldCheck size={18}/><span>{c.verified}</span></div></div>
      </section>
      <DecisionGrid locale={locale}/>
      <section className="section"><div className="section-head"><div><p className="eyebrow">LIVE SAMPLE / 04</p><h2>{c.featured}</h2></div><p>{c.featuredBody}</p></div><ProductGrid locale={locale}/><p className="price-note">{c.priceNote}</p></section>
      <Categories locale={locale}/>
      <section className="section qc-strip"><div><p className="eyebrow">INSPECTION / 60 SEC</p><h2>{c.qcSignals}</h2><Link className="text-link" href={localPath(locale,"qc")}>{c.learn}<ArrowRight size={16}/></Link></div><ol>{c.qcItems.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</li>)}</ol></section>
      <section className="section resource-section"><div className="section-head"><div><p className="eyebrow">WORKFLOW / 04</p><h2>{c.resourceTitle}</h2></div><p>{c.resourceBody}</p></div><div className="resource-grid">{c.resourceCards.map(([key,title,body],i)=><Link href={localPath(locale,key)} key={key}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p><ArrowRight size={19}/></Link>)}</div></section>
      <ArticleHighlights locale={locale}/>
      <Faq locale={locale} compact/>
    </main>
  </>;
}

function DecisionGrid({locale}:{locale:Locale}) {
  const p=proHome[locale];
  return <section className="section decision-section"><div className="section-head"><div><p className="eyebrow">PARCEL DESK / 06</p><h2>{p.section}</h2></div><p>{p.sectionBody}</p></div><div className="decision-grid">{decisionKeys.map((key,index)=>{const item=decisions[locale][key];return <Link href={localPath(locale,key)} key={key}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.description}</p><b>{proNav[locale][index]}<ArrowRight size={16}/></b></Link>})}</div></section>;
}

const processText: Record<Locale,string[][]> = {
  en:[["Find the exact source listing","Kakobuy's public beginner flow starts with a product link from a Chinese marketplace. Save the live URL, option images, seller price and any size chart before ordering."],["Paste the link into Kakobuy","Open the matching record and confirm title, options and current CNY price. A screenshot or spreadsheet card is not the live offer."],["Select and pay for the item","Choose the exact color, size and quantity. Product payment happens before international parcel payment; domestic delivery or payment-channel charges may also appear."],["Wait for warehouse arrival and QC","Kakobuy says its warehouse quality check covers visible issues including defects, size and color. Compare the photos with the order record, not with memory."],["Accept, request evidence or open after-sales","Act while the order remains eligible. The advertised 100-day storage window is not the same as a seller return period."],["Submit the international parcel","Compare current routes using packed weight, dimensions, item restrictions, packaging choices and destination. Treat delivery windows as estimates, not guarantees."]],
  de:[["Bedarf genau festlegen","Kategorie, Material, Farbe, Größe und Preisgrenze vor der Suche notieren."],["Passenden Eintrag öffnen","Titel, Optionen und aktuellen CNY-Preis auf der Quellseite bestätigen."],["Verkäuferbedingungen prüfen","Größentabelle, Inlandslieferung und Rückgabebeschränkungen lesen."],["Präzise bestellen","Exakte Variante wählen und nur bei echter Mehrdeutigkeit eine Notiz ergänzen."],["Lagerfotos prüfen","Option, Etiketten, Maße, Verarbeitung und Schäden mit dem Angebot vergleichen."],["Paket planen","Ist- und Volumengewicht schätzen, Linien vergleichen und bewusst konsolidieren."]],
  es:[["Define la necesidad","Anota categoría, material, color, talla y precio máximo antes de buscar."],["Abre la ficha exacta","Confirma título, opciones y precio CNY vigente en la fuente."],["Revisa condiciones","Comprueba talla, envío nacional y restricciones de devolución."],["Pide con precisión","Elige la variante exacta y añade notas solo cuando exista ambigüedad."],["Inspecciona las fotos","Compara opción, etiquetas, medidas, construcción y daños."],["Planifica el paquete","Estima peso real y volumétrico, compara líneas y consolida con intención."]],
  fr:[["Définir le besoin","Notez catégorie, matière, couleur, taille et budget avant la recherche."],["Ouvrir la fiche exacte","Confirmez titre, options et prix CNY actuel sur la source."],["Vérifier les conditions","Lisez le guide des tailles, le transport local et les restrictions de retour."],["Commander précisément","Choisissez la variante exacte et n’ajoutez une note que si nécessaire."],["Inspecter les photos","Comparez option, étiquettes, mesures, finition et dommages visibles."],["Planifier le colis","Estimez poids réel et volumétrique, comparez les lignes et regroupez avec soin."]],
  it:[["Definisci il bisogno","Annota categoria, materiale, colore, taglia e budget prima della ricerca."],["Apri la scheda esatta","Conferma titolo, opzioni e prezzo CNY attuale sulla fonte."],["Controlla le condizioni","Leggi taglie, consegna interna e limitazioni di reso."],["Ordina con precisione","Scegli la variante esatta e aggiungi note solo se necessarie."],["Ispeziona le foto","Confronta opzione, etichette, misure, finiture e danni."],["Pianifica il pacco","Stima peso reale e volumetrico, confronta le linee e consolida con cura."]]
};

const qcGroups: Record<Locale,Array<[string,string[]]>>={
  en:[["Shoes",["Compare toe shape, heel height and left/right symmetry.","Zoom into glue lines, stitching rhythm and sole alignment.","Confirm size tag, colorway and accessories match the order."]],["Apparel",["Check front, back and detail shots for stains or holes.","Compare chest and length measurements with tolerance in mind.","Inspect prints, embroidery, zippers, labels and seam alignment."]],["Accessories",["Confirm dimensions, hardware color and ordered material.","Inspect edge paint, closures, corners and surface scratches.","Request a targeted photo when a critical angle is missing."]]],
  de:[["Schuhe",["Form, Absatzhöhe und Symmetrie vergleichen.","Kleber, Nähte und Sohlenausrichtung vergrößern.","Größe, Farbe und Zubehör bestätigen."]],["Bekleidung",["Vorder- und Rückseite auf Flecken oder Löcher prüfen.","Brust- und Längenmaß mit Toleranz vergleichen.","Druck, Stickerei, Reißverschluss und Nähte prüfen."]],["Accessoires",["Maße, Metallfarbe und Material bestätigen.","Kanten, Verschlüsse, Ecken und Kratzer prüfen.","Bei fehlendem Winkel gezielt ein Foto anfordern."]]],
  es:[["Calzado",["Compara forma, altura y simetría.","Amplía pegamento, costuras y alineación de suela.","Confirma talla, color y accesorios."]],["Ropa",["Busca manchas o agujeros delante y detrás.","Compara pecho y largo con tolerancia.","Revisa estampado, bordado, cremallera y costuras."]],["Accesorios",["Confirma medidas, herrajes y material.","Revisa bordes, cierres, esquinas y arañazos.","Pide una foto concreta si falta un ángulo crítico."]]],
  fr:[["Chaussures",["Comparez forme, hauteur et symétrie.","Zoomez sur colle, coutures et alignement de semelle.","Confirmez taille, couleur et accessoires."]],["Vêtements",["Cherchez taches ou trous devant et derrière.","Comparez poitrine et longueur avec tolérance.","Inspectez impression, broderie, zip et coutures."]],["Accessoires",["Confirmez dimensions, métal et matière.","Inspectez bords, fermetures, coins et rayures.","Demandez une photo ciblée si un angle manque."]]],
  it:[["Scarpe",["Confronta forma, altezza e simmetria.","Ingrandisci colla, cuciture e allineamento suola.","Conferma taglia, colore e accessori."]],["Abbigliamento",["Cerca macchie o fori davanti e dietro.","Confronta torace e lunghezza con tolleranza.","Controlla stampa, ricamo, zip e cuciture."]],["Accessori",["Conferma misure, metallo e materiale.","Controlla bordi, chiusure, angoli e graffi.","Chiedi una foto mirata se manca un angolo."]]]
};

const shippingCopy:Record<Locale,{formula:string;cards:Array<[string,string]>}>={
  en:{formula:"Planning rule: use the packed weight and any dimension rule shown for the selected live line",cards:[["Actual weight","The scale weight of the packed parcel. Kakobuy’s estimate still needs a destination and selected shipping method."],["Dimension-based billing","Some routes can price the space a carton occupies. Use only the divisor and rounding rule displayed for the current line."],["Consolidation","Kakobuy encourages shipping multiple items together, but one oversized box can remove the expected saving."],["Live availability","Route supply and prices can change with third-party logistics providers and market conditions. Recheck before payment."]]},
  de:{formula:"Planungsregel: Packgewicht und die Maßregel der aktuell gewählten Linie verwenden",cards:[["Istgewicht","Das Waagengewicht des verpackten Pakets; Ziel und Versandmethode bleiben erforderlich."],["Maßbasierte Abrechnung","Nur Divisor und Rundung der aktuell angezeigten Linie verwenden."],["Konsolidierung","Gemeinsamer Versand kann helfen, ein übergroßer Karton kann den Vorteil aber aufheben."],["Live-Verfügbarkeit","Linien und Preise können sich mit Logistikpartnern und Marktbedingungen ändern."]]},
  es:{formula:"Regla de planificación: usa el peso embalado y la regla dimensional de la línea vigente",cards:[["Peso real","Peso en báscula del paquete; también hacen falta destino y método elegido."],["Cobro por dimensiones","Usa solo el divisor y redondeo que muestre la línea actual."],["Consolidación","Enviar juntos puede ayudar, pero una caja sobredimensionada puede anular el ahorro."],["Disponibilidad en vivo","Rutas y precios cambian con proveedores logísticos y mercado."]]},
  fr:{formula:"Règle de planification : poids emballé et règle dimensionnelle de la ligne active",cards:[["Poids réel","Poids du colis sur la balance ; destination et méthode choisie restent nécessaires."],["Facturation dimensionnelle","Utilisez seulement le diviseur et l'arrondi affichés pour la ligne actuelle."],["Regroupement","Expédier ensemble peut aider, mais un carton surdimensionné peut annuler le gain."],["Disponibilité en direct","Lignes et prix changent avec les prestataires et le marché."]]},
  it:{formula:"Regola di pianificazione: peso imballato e regola dimensionale della linea attiva",cards:[["Peso reale","Peso del pacco sulla bilancia; servono anche destinazione e metodo scelto."],["Calcolo dimensionale","Usa solo divisore e arrotondamento mostrati dalla linea attuale."],["Consolidamento","Spedire insieme può aiutare, ma una scatola sovradimensionata può annullare il risparmio."],["Disponibilità live","Rotte e prezzi cambiano con fornitori logistici e condizioni di mercato."]]}
};

function PageHero({locale,page}:{locale:Locale;page:Exclude<PageKey,"home"|"qcArticle"|"shippingArticle"|"storageArticle"|"orderIdentifiersArticle"|"orderTimelineArticle">}) { const [title,body]=seoPageIntro[locale][page]; return <section className="page-hero"><p className="eyebrow">KAKOBUY VIP / {page.toUpperCase()}</p><h1>{title}</h1><p>{body}</p></section>; }

const coreResearchUi:Record<Locale,{eyebrow:string;title:string;intro:string;open:string;qc:string;faq:string;scope:string}>={
  en:{eyebrow:"PRACTICAL METHOD / 04",title:"Use this page as a working record",intro:"Expanded guidance keeps the page useful without repeating the site's long-form articles. Open each section for the full method.",open:"Open section",qc:"Use the checklist to record only visible evidence. Keep seller eligibility, warehouse timing and international parcel claims as separate decisions.",faq:"These answers define the site's evidence limits. Recheck the current order, seller and route details before acting on a variable rule.",scope:"Platform fact or workflow context used by this article"},
  de:{eyebrow:"PRAXISMETHODE / 04",title:"Diese Seite als Arbeitsprotokoll nutzen",intro:"Die erweiterten Hinweise machen die Seite nützlich, ohne die langen Artikel zu wiederholen. Öffnen Sie jeden Abschnitt für die vollständige Methode.",open:"Abschnitt öffnen",qc:"Notieren Sie nur sichtbare Belege. Verkäuferberechtigung, Lagerzeit und internationale Paketansprüche bleiben getrennte Entscheidungen.",faq:"Diese Antworten erklären die Beleggrenzen der Seite. Prüfen Sie Bestellung, Verkäufer und Linie erneut, bevor Sie nach einer variablen Regel handeln.",scope:"Plattformfakt oder Ablaufkontext dieses Artikels"},
  es:{eyebrow:"MÉTODO PRÁCTICO / 04",title:"Usa esta página como registro de trabajo",intro:"La guía ampliada mantiene la utilidad sin repetir los artículos largos. Abre cada sección para consultar el método completo.",open:"Abrir sección",qc:"Registra solo evidencia visible. Elegibilidad del vendedor, plazos de almacén y reclamaciones internacionales son decisiones separadas.",faq:"Estas respuestas explican los límites de la evidencia. Revisa pedido, vendedor y ruta actuales antes de aplicar una regla variable.",scope:"Hecho de plataforma o contexto de proceso usado en este artículo"},
  fr:{eyebrow:"MÉTHODE PRATIQUE / 04",title:"Utiliser cette page comme dossier de travail",intro:"Le guide développé reste utile sans répéter les articles longs. Ouvrez chaque partie pour consulter la méthode complète.",open:"Ouvrir la partie",qc:"Consignez seulement les preuves visibles. Éligibilité vendeur, délai d'entrepôt et réclamation internationale restent des décisions séparées.",faq:"Ces réponses définissent les limites des preuves. Revérifiez commande, vendeur et ligne avant d'appliquer une règle variable.",scope:"Fait de plateforme ou contexte opérationnel utilisé dans cet article"},
  it:{eyebrow:"METODO PRATICO / 04",title:"Usa questa pagina come registro di lavoro",intro:"La guida ampliata resta utile senza ripetere gli articoli lunghi. Apri ogni sezione per il metodo completo.",open:"Apri sezione",qc:"Registra soltanto prove visibili. Idoneità del venditore, tempi di magazzino e reclami internazionali restano decisioni separate.",faq:"Queste risposte definiscono i limiti delle prove. Ricontrolla ordine, venditore e linea prima di applicare una regola variabile.",scope:"Fatto di piattaforma o contesto operativo usato nell'articolo"}
};

function CorePageResearch({locale,page}:{locale:Locale;page:CorePageKey}) {
  const ui=coreResearchUi[locale];
  return <section className="section core-research"><div className="section-head"><div><p className="eyebrow">{ui.eyebrow}</p><h2>{ui.title}</h2></div><p>{ui.intro}</p></div><div className="core-research-grid">{corePageCopy[locale][page].map(([title,body],index)=><details key={title}><summary><span>{String(index+1).padStart(2,"0")}</span><strong>{title}</strong><small>{ui.open}</small></summary><p>{body}</p></details>)}</div></section>;
}

function SpreadsheetPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="spreadsheet"/><section className="section"><div className="method-grid"><div><span>01</span><h3>{c.verified}</h3><p>{c.categoriesBody}</p></div><div><span>02</span><h3>{c.updated}</h3><p>{c.priceNote}</p></div><div><span>03</span><h3>Exact destinations</h3><p>No copied carts, alternate agents or hidden redirect chains.</p></div></div><ProductGrid locale={locale} all/><Categories locale={locale}/></section><CorePageResearch locale={locale} page="spreadsheet"/></main>; }
function FindsPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="finds"/><section className="section"><SearchBox locale={locale}/><div className="spacer"/><ProductGrid locale={locale} all/><p className="price-note">{c.priceNote}</p></section><CorePageResearch locale={locale} page="finds"/></main>; }
function GuidePage({locale}:{locale:Locale}) { return <main><PageHero locale={locale} page="guide"/><section className="section process">{processText[locale].map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section><CorePageResearch locale={locale} page="guide"/></main>; }
function QCPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="qc"/><section className="section qc-groups">{qcGroups[locale].map(([title,items],i)=><article key={title}><div className="iconbox">{i===0?<Sparkles/>:i===1?<ShieldCheck/>:<Check/>}</div><h2>{title}</h2><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</section><section className="section callout"><strong>{c.qcSignals}</strong><p>{coreResearchUi[locale].qc}</p></section><CorePageResearch locale={locale} page="qc"/></main>; }
function ShippingPage({locale}:{locale:Locale}) { const s=shippingCopy[locale]; return <main><PageHero locale={locale} page="shipping"/><section className="section"><div className="formula"><Weight/><span>{s.formula}</span></div><div className="method-grid shipping-grid">{s.cards.map(([a,b],i)=><div key={a}><span>0{i+1}</span><h2>{a}</h2><p>{b}</p></div>)}</div></section><CorePageResearch locale={locale} page="shipping"/></main>; }

function DecisionPage({locale,page}:{locale:Locale;page:DecisionKey}) {
  const item=decisions[locale][page];
  const isCalculator=page==="calculator";
  return <main><section className="page-hero pro-page-hero"><p className="eyebrow">KAKOBUY VIP PRO / {page.toUpperCase()}</p><h1>{item.title}</h1><p>{item.description}</p>{isCalculator&&<a className="primary-action" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noreferrer">{proHome[locale].secondary}<ExternalLink size={16}/></a>}</section><section className="section process pro-process">{item.steps.map(([title,body],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section><section className="section evidence-card"><ShieldCheck/><div><strong>{item.caution}</strong><p>{item.source}. {proHome[locale].liveNote}</p></div></section><DecisionGrid locale={locale}/></main>;
}

function Faq({locale,compact=false}:{locale:Locale;compact?:boolean}) { const c=copy[locale]; const list=compact?officialFaqs[locale].slice(0,3):officialFaqs[locale]; return <section className={`section faq-section ${compact?"compact":""}`}><div><p className="eyebrow">FAQ / {String(list.length).padStart(2,"0")}</p><h2>{c.faqTitle}</h2></div><div>{list.map(([q,a],i)=><details key={q} open={!compact&&i===0}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}</summary><p>{a}</p></details>)}</div></section>; }
function FAQPage({locale}:{locale:Locale}) { const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:officialFaqs[locale].map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}; return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><PageHero locale={locale} page="faq"/><Faq locale={locale}/><section className="section callout"><strong>Independent by design</strong><p>{coreResearchUi[locale].faq}</p></section></main>; }

type ArticlePageKey=Extract<PageKey,"qcArticle"|"shippingArticle"|"storageArticle"|"orderIdentifiersArticle"|"orderTimelineArticle"|"sellerHandoffArticle">;
const articleKeys:ArticlePageKey[]=["shippingArticle","storageArticle","qcArticle","orderIdentifiersArticle","orderTimelineArticle","sellerHandoffArticle"];
function getArticle(locale:Locale,page:ArticlePageKey){return page==="orderIdentifiersArticle"?orderIdentifiersArticleData[locale]:page==="orderTimelineArticle"?orderTimelineArticleData[locale]:page==="sellerHandoffArticle"?sellerHandoffArticleData[locale]:articleData[locale][page];}
const articleUi:Record<Locale,{latest:string;standard:string;basis:string;sources:string;sourceNote:string;visual:string}>={
  en:{latest:"Latest Kakobuy research",standard:"Research standard",basis:"Research basis",sources:"Official Kakobuy pages checked",sourceNote:"Platform terms, fees, routes and notices can change. We reviewed these source pages on the date shown above and describe variable figures as snapshots, not guarantees.",visual:"A listing image is a reference point, not warehouse QC evidence. Confirm the ordered variant against the live order record and warehouse views."},
  de:{latest:"Aktuelle Kakobuy-Recherche",standard:"Recherche-Standard",basis:"Recherchegrundlage",sources:"Geprüfte offizielle Kakobuy-Seiten",sourceNote:"Bedingungen, Gebühren, Linien und Hinweise können sich ändern. Variable Werte sind datierte Momentaufnahmen, keine Garantien.",visual:"Ein Angebotsbild ist eine Referenz, kein QC-Beweis. Bestellte Variante mit Bestelldaten und Lagerfotos vergleichen."},
  es:{latest:"Investigación Kakobuy reciente",standard:"Estándar de investigación",basis:"Base de investigación",sources:"Páginas oficiales de Kakobuy revisadas",sourceNote:"Condiciones, comisiones, rutas y avisos pueden cambiar. Las cifras variables son capturas fechadas, no garantías.",visual:"Una imagen del anuncio es una referencia, no evidencia QC. Confirma la variante con el pedido y las fotos de almacén."},
  fr:{latest:"Recherches Kakobuy récentes",standard:"Méthode de recherche",basis:"Base de recherche",sources:"Pages officielles Kakobuy vérifiées",sourceNote:"Les conditions, frais, lignes et avis peuvent changer. Les chiffres variables sont des instantanés datés, non des garanties.",visual:"Une image d'annonce est une référence, pas une preuve QC. Comparez la variante commandée au dossier et aux vues d'entrepôt."},
  it:{latest:"Ricerche Kakobuy recenti",standard:"Standard di ricerca",basis:"Base della ricerca",sources:"Pagine ufficiali Kakobuy verificate",sourceNote:"Termini, costi, linee e avvisi possono cambiare. I valori variabili sono istantanee datate, non garanzie.",visual:"L'immagine dell'inserzione è un riferimento, non una prova QC. Confronta variante ordinata, dati e foto di magazzino."}
};
function ArticleHighlights({locale}:{locale:Locale}) {
  return <section className="section article-highlights"><div className="section-head"><div><p className="eyebrow">RESEARCH / 05</p><h2>{articleUi[locale].latest}</h2></div><p>{seoPageIntro[locale].articles[1]}</p></div><div className="article-grid">{articleKeys.map((key,i)=>{const a=getArticle(locale,key);return <Link href={localPath(locale,key)} key={key}><span>{a.tag} / 0{i+1}</span><h2>{a.title}</h2><p>{a.lede}</p><b>{a.read}<ArrowRight size={16}/></b></Link>})}</div></section>;
}
function ArticlesPage({locale}:{locale:Locale}) { return <main><PageHero locale={locale} page="articles"/><section className="section article-grid">{articleKeys.map((key,i)=>{const a=getArticle(locale,key);return <Link href={localPath(locale,key)} key={key}><span>{a.tag} / 0{i+1}</span><h2>{a.title}</h2><p>{a.lede}</p><b>{a.read}<ArrowRight size={16}/></b></Link>})}</section></main>; }

function ArticlePage({locale,page}:{locale:Locale;page:ArticlePageKey}) {
  const a=getArticle(locale,page); const canonical=`https://kakobuyvip.pro${localPath(locale,page)==="/"?"":localPath(locale,page)}`;
  const wordCount=a.sections.flatMap(([,paras])=>paras).join(" ").trim().split(/\s+/).length;
  const articleDate=page==="sellerHandoffArticle"?"2026-09-04":page==="orderTimelineArticle"?"2026-09-02":"2026-08-31";
  const articleSchema={"@type":"Article",headline:a.title,description:a.lede,datePublished:articleDate,dateModified:articleDate,mainEntityOfPage:canonical,wordCount,author:{"@type":"Organization",name:"Kakobuy VIP Editorial Desk"},publisher:{"@type":"Organization",name:"Kakobuy VIP"}};
  const breadcrumbSchema={"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`https://kakobuyvip.pro${localPath(locale,"home")}`},{"@type":"ListItem",position:2,name:copy[locale].pageIntro.articles[0],item:`https://kakobuyvip.pro${localPath(locale,"articles")}`},{"@type":"ListItem",position:3,name:a.title,item:canonical}]};
  const faqs=page==="orderIdentifiersArticle"?orderIdentifiersArticleData[locale].faqs:page==="orderTimelineArticle"?orderTimelineArticleData[locale].faqs:page==="sellerHandoffArticle"?sellerHandoffArticleData[locale].faqs:null;
  const schema={"@context":"https://schema.org","@graph":[articleSchema,breadcrumbSchema,...(faqs?[{"@type":"FAQPage",mainEntity:faqs.map(([q,answer])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:answer}}))}]:[])]};
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><article className="field-article"><header><p className="eyebrow">{a.tag} / FIELD NOTE</p><h1>{a.title}</h1><p>{a.lede}</p><span>{a.read} · {a.reviewed}</span></header>{page==="qcArticle"&&<figure className="article-visual"><img src={products[0].image} alt={products[0].name} width="1200" height="780"/><figcaption>{articleUi[locale].visual}</figcaption></figure>}<div className="article-body"><aside><Box/><strong>{articleUi[locale].standard}</strong><p>{copy[locale].disclaimer}</p><small>{a.reviewed}</small></aside><div>{a.sections.map(([title,paras],i)=><section key={title}><span>0{i+1}</span><h2>{title}</h2>{paras.map(p=><p key={p}>{p}</p>)}</section>)}{faqs&&<section className="source-notes"><span>FAQ / 04</span><h2>FAQ</h2>{faqs.map(([q,answer])=><div key={q}><h3>{q}</h3><p>{answer}</p></div>)}</section>}<section className="source-notes"><span>{articleUi[locale].basis}</span><h2>{articleUi[locale].sources}</h2><p>{articleUi[locale].sourceNote}</p><ul>{a.sources.map(source=>{const url=new URL(source.url);return <li key={source.url}><a href={source.url} target="_blank" rel="nofollow noopener">{source.label}</a><small>{url.pathname}{url.search} · {a.reviewed} · {coreResearchUi[locale].scope}</small></li>})}</ul></section></div></div><div className="article-next"><p>{copy[locale].resourceBody}</p><Link href={localPath(locale,"articles")}>{copy[locale].pageIntro.articles[0]}<ArrowRight size={17}/></Link></div></article></main>;
}

export function SiteView({locale,page}:{locale:Locale;page:PageKey}) {
  const decision=decisionKeys.includes(page as DecisionKey);
  return <><Header locale={locale} page={page}/>{page==="home"?<Home locale={locale}/>:page==="spreadsheet"?<SpreadsheetPage locale={locale}/>:page==="finds"?<FindsPage locale={locale}/>:page==="guide"?<GuidePage locale={locale}/>:page==="qc"?<QCPage locale={locale}/>:page==="shipping"?<ShippingPage locale={locale}/>:page==="faq"?<FAQPage locale={locale}/>:page==="articles"?<ArticlesPage locale={locale}/>:decision?<DecisionPage locale={locale} page={page as DecisionKey}/>:<ArticlePage locale={locale} page={page as ArticlePageKey}/>}<Footer locale={locale}/></>;
}
