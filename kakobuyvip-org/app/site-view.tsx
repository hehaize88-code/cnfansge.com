/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Box, Check, ExternalLink, Search, ShieldCheck, Sparkles, Weight } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import { categories, copy, localPath, products, type Locale, type PageKey } from "./site-data";
import { articleData } from "./article-data";
import { officialFaqs, seoPageIntro } from "./research-copy";

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
    <Search size={19}/><input name="keywords" placeholder={c.placeholder} aria-label={c.search}/><button type="submit">{c.search}<ArrowRight size={18}/></button>
  </form>;
}

function ProductGrid({ locale, all=false }: {locale:Locale; all?:boolean}) {
  const c=copy[locale];
  return <div className={`product-grid ${all?"wide":""}`}>{products.map((product,index)=><a className="product-card" href={product.href} key={product.href} target="_blank" rel="noreferrer">
    <div className="product-image"><img src={product.image} alt={product.name} width="600" height="600" loading={index===0?"eager":"lazy"}/><span>{String(index+1).padStart(2,"0")}</span></div>
    <div className="product-copy"><small>{product.category} · {product.cny}</small><h3>{product.name}</h3><div><strong>{product.price}</strong><span>{c.open}<ExternalLink size={13}/></span></div></div>
  </a>)}</div>;
}

function Categories({ locale }: {locale:Locale}) {
  const c=copy[locale];
  return <section className="section split-title"><div><p className="eyebrow">CATALOG / 08</p><h2>{c.categories}</h2></div><div><p>{c.categoriesBody}</p><div className="category-grid">{categories.map(([name,href],i)=><a href={href} key={href} target="_blank" rel="noreferrer"><span>{String(i+1).padStart(2,"0")}</span>{name}<ArrowRight size={16}/></a>)}</div></div></section>;
}

function Home({ locale }: {locale:Locale}) {
  const c=copy[locale];
  const schema={"@context":"https://schema.org","@type":"WebSite",name:"Kakobuy VIP",url:"https://kakobuyvip.org",potentialAction:{"@type":"SearchAction",target:"https://cnfansge.com/search.html?keywords={search_term_string}","query-input":"required name=search_term_string"}};
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:officialFaqs[locale].map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <main>
      <section className="hero">
        <div className="hero-copy"><p className="status"><span/> {c.badge}</p><h1>{c.hero}</h1><p className="lede">{c.heroBody}</p><SearchBox locale={locale}/><div className="hero-meta"><span><ShieldCheck size={16}/>{c.verified}</span><span>{c.updated}</span></div></div>
        <div className="hero-board"><div className="board-orbit orbit-one">QC</div><div className="board-orbit orbit-two">LIVE</div><a href={products[0].href} target="_blank" rel="noreferrer"><div className="board-head"><span>FEATURED FIND</span><strong>01 / 04</strong></div><img src={products[0].image} alt="Featured shoes" width="720" height="720"/><div className="board-caption"><small>LINK &amp; IMAGE CHECKED</small><b>{products[0].name}</b><span>{products[0].price}</span></div></a><div className="board-note"><ShieldCheck size={18}/><span>{c.verified}</span></div></div>
      </section>
      <section className="section"><div className="section-head"><div><p className="eyebrow">LIVE SAMPLE / 04</p><h2>{c.featured}</h2></div><p>{c.featuredBody}</p></div><ProductGrid locale={locale}/><p className="price-note">{c.priceNote}</p></section>
      <Categories locale={locale}/>
      <section className="section qc-strip"><div><p className="eyebrow">INSPECTION / 60 SEC</p><h2>{c.qcSignals}</h2><Link className="text-link" href={localPath(locale,"qc")}>{c.learn}<ArrowRight size={16}/></Link></div><ol>{c.qcItems.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</li>)}</ol></section>
      <section className="section resource-section"><div className="section-head"><div><p className="eyebrow">WORKFLOW / 04</p><h2>{c.resourceTitle}</h2></div><p>{c.resourceBody}</p></div><div className="resource-grid">{c.resourceCards.map(([key,title,body],i)=><Link href={localPath(locale,key)} key={key}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p><ArrowRight size={19}/></Link>)}</div></section>
      <ArticleHighlights locale={locale}/>
      <Faq locale={locale} compact/>
    </main>
  </>;
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
  en:{formula:"Volumetric weight = length × width × height ÷ line divisor",cards:[["Actual weight","The scale weight of the packed parcel. Dense items usually price closer to this figure."],["Volumetric weight","A space-based figure used by some lines. Bulky shoes or padded jackets can trigger it."],["Consolidation","Combining items may reduce repeated packaging, but one large box can increase volumetric weight."],["Line eligibility","Batteries, materials, declared value and destination determine which routes appear. Recheck live options."]]},
  de:{formula:"Volumengewicht = Länge × Breite × Höhe ÷ Divisor der Linie",cards:[["Istgewicht","Das Waagengewicht des verpackten Pakets."],["Volumengewicht","Ein raumbasierter Wert; große Schuhe oder Jacken können ihn auslösen."],["Konsolidierung","Weniger Doppelverpackung, aber ein großer Karton kann das Volumen erhöhen."],["Linienwahl","Material, Wert und Ziel bestimmen die verfügbaren Routen."]]},
  es:{formula:"Peso volumétrico = largo × ancho × alto ÷ divisor de la línea",cards:[["Peso real","Peso del paquete embalado en la báscula."],["Peso volumétrico","Cálculo por espacio; calzado o chaquetas voluminosas pueden activarlo."],["Consolidación","Reduce embalajes repetidos, aunque una caja grande aumenta el volumen."],["Líneas elegibles","Material, valor y destino determinan las rutas disponibles."]]},
  fr:{formula:"Poids volumétrique = longueur × largeur × hauteur ÷ diviseur",cards:[["Poids réel","Poids du colis emballé sur la balance."],["Poids volumétrique","Calcul d’espace pouvant concerner chaussures ou vestes épaisses."],["Regroupement","Réduit les emballages répétés, mais un grand carton augmente le volume."],["Lignes éligibles","Matière, valeur et destination déterminent les routes disponibles."]]},
  it:{formula:"Peso volumetrico = lunghezza × larghezza × altezza ÷ divisore",cards:[["Peso reale","Peso sulla bilancia del pacco imballato."],["Peso volumetrico","Calcolo dello spazio che può incidere su scarpe o giacche voluminose."],["Consolidamento","Riduce imballaggi doppi, ma una scatola grande aumenta il volume."],["Linee idonee","Materiale, valore e destinazione determinano le rotte disponibili."]]}
};

function PageHero({locale,page}:{locale:Locale;page:Exclude<PageKey,"home"|"qcArticle"|"shippingArticle"|"storageArticle">}) { const [title,body]=seoPageIntro[locale][page]; return <section className="page-hero"><p className="eyebrow">KAKOBUY VIP / {page.toUpperCase()}</p><h1>{title}</h1><p>{body}</p></section>; }

function SpreadsheetPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="spreadsheet"/><section className="section"><div className="method-grid"><div><span>01</span><h3>{c.verified}</h3><p>{c.categoriesBody}</p></div><div><span>02</span><h3>{c.updated}</h3><p>{c.priceNote}</p></div><div><span>03</span><h3>Exact destinations</h3><p>No copied carts, alternate agents or hidden redirect chains.</p></div></div><ProductGrid locale={locale} all/><Categories locale={locale}/></section></main>; }
function FindsPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="finds"/><section className="section"><SearchBox locale={locale}/><div className="spacer"/><ProductGrid locale={locale} all/><p className="price-note">{c.priceNote}</p></section></main>; }
function GuidePage({locale}:{locale:Locale}) { return <main><PageHero locale={locale} page="guide"/><section className="section process">{processText[locale].map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</section></main>; }
function QCPage({locale}:{locale:Locale}) { const c=copy[locale]; return <main><PageHero locale={locale} page="qc"/><section className="section qc-groups">{qcGroups[locale].map(([title,items],i)=><article key={title}><div className="iconbox">{i===0?<Sparkles/>:i===1?<ShieldCheck/>:<Check/>}</div><h2>{title}</h2><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</section><section className="section callout"><strong>{c.qcSignals}</strong><p>{c.disclaimer}</p></section></main>; }
function ShippingPage({locale}:{locale:Locale}) { const s=shippingCopy[locale]; return <main><PageHero locale={locale} page="shipping"/><section className="section"><div className="formula"><Weight/><span>{s.formula}</span></div><div className="method-grid shipping-grid">{s.cards.map(([a,b],i)=><div key={a}><span>0{i+1}</span><h2>{a}</h2><p>{b}</p></div>)}</div></section></main>; }

function Faq({locale,compact=false}:{locale:Locale;compact?:boolean}) { const c=copy[locale]; const list=compact?officialFaqs[locale].slice(0,3):officialFaqs[locale]; return <section className={`section faq-section ${compact?"compact":""}`}><div><p className="eyebrow">FAQ / {String(list.length).padStart(2,"0")}</p><h2>{c.faqTitle}</h2></div><div>{list.map(([q,a],i)=><details key={q} open={!compact&&i===0}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}</summary><p>{a}</p></details>)}</div></section>; }
function FAQPage({locale}:{locale:Locale}) { const c=copy[locale]; const schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:officialFaqs[locale].map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}; return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><PageHero locale={locale} page="faq"/><Faq locale={locale}/><section className="section callout"><strong>Independent by design</strong><p>{c.disclaimer}</p></section></main>; }

const articleKeys:Array<Extract<PageKey,"qcArticle"|"shippingArticle"|"storageArticle">>=["qcArticle","shippingArticle","storageArticle"];
const articleUi:Record<Locale,{latest:string;standard:string;basis:string;sources:string;sourceNote:string;visual:string}>={
  en:{latest:"Latest Kakobuy research",standard:"Research standard",basis:"Research basis",sources:"Official Kakobuy pages checked",sourceNote:"Platform terms, fees, routes and notices can change. We reviewed these source pages on the date shown above and describe variable figures as snapshots, not guarantees.",visual:"A listing image is a reference point, not warehouse QC evidence. Confirm the ordered variant against the live order record and warehouse views."},
  de:{latest:"Aktuelle Kakobuy-Recherche",standard:"Recherche-Standard",basis:"Recherchegrundlage",sources:"Geprüfte offizielle Kakobuy-Seiten",sourceNote:"Bedingungen, Gebühren, Linien und Hinweise können sich ändern. Variable Werte sind datierte Momentaufnahmen, keine Garantien.",visual:"Ein Angebotsbild ist eine Referenz, kein QC-Beweis. Bestellte Variante mit Bestelldaten und Lagerfotos vergleichen."},
  es:{latest:"Investigación Kakobuy reciente",standard:"Estándar de investigación",basis:"Base de investigación",sources:"Páginas oficiales de Kakobuy revisadas",sourceNote:"Condiciones, comisiones, rutas y avisos pueden cambiar. Las cifras variables son capturas fechadas, no garantías.",visual:"Una imagen del anuncio es una referencia, no evidencia QC. Confirma la variante con el pedido y las fotos de almacén."},
  fr:{latest:"Recherches Kakobuy récentes",standard:"Méthode de recherche",basis:"Base de recherche",sources:"Pages officielles Kakobuy vérifiées",sourceNote:"Les conditions, frais, lignes et avis peuvent changer. Les chiffres variables sont des instantanés datés, non des garanties.",visual:"Une image d'annonce est une référence, pas une preuve QC. Comparez la variante commandée au dossier et aux vues d'entrepôt."},
  it:{latest:"Ricerche Kakobuy recenti",standard:"Standard di ricerca",basis:"Base della ricerca",sources:"Pagine ufficiali Kakobuy verificate",sourceNote:"Termini, costi, linee e avvisi possono cambiare. I valori variabili sono istantanee datate, non garanzie.",visual:"L'immagine dell'inserzione è un riferimento, non una prova QC. Confronta variante ordinata, dati e foto di magazzino."}
};
function ArticleHighlights({locale}:{locale:Locale}) {
  return <section className="section article-highlights"><div className="section-head"><div><p className="eyebrow">SEO GUIDES / 03</p><h2>{articleUi[locale].latest}</h2></div><p>{seoPageIntro[locale].articles[1]}</p></div><div className="article-grid">{articleKeys.map((key,i)=>{const a=articleData[locale][key];return <Link href={localPath(locale,key)} key={key}><span>{a.tag} / 0{i+1}</span><h2>{a.title}</h2><p>{a.lede}</p><b>{a.read}<ArrowRight size={16}/></b></Link>})}</div></section>;
}
function ArticlesPage({locale}:{locale:Locale}) { return <main><PageHero locale={locale} page="articles"/><section className="section article-grid">{articleKeys.map((key,i)=>{const a=articleData[locale][key];return <Link href={localPath(locale,key)} key={key}><span>{a.tag} / 0{i+1}</span><h2>{a.title}</h2><p>{a.lede}</p><b>{a.read}<ArrowRight size={16}/></b></Link>})}</section></main>; }

function ArticlePage({locale,page}:{locale:Locale;page:Extract<PageKey,"qcArticle"|"shippingArticle"|"storageArticle">}) {
  const a=articleData[locale][page]; const canonical=`https://kakobuyvip.org${localPath(locale,page)==="/"?"":localPath(locale,page)}`;
  const wordCount=a.sections.flatMap(([,paras])=>paras).join(" ").trim().split(/\s+/).length;
  const schema={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.lede,datePublished:"2026-08-29",dateModified:"2026-08-29",mainEntityOfPage:canonical,wordCount,citation:a.sources.map(source=>source.url),author:{"@type":"Organization",name:"Kakobuy VIP Editorial Desk"},publisher:{"@type":"Organization",name:"Kakobuy VIP"}};
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><article className="field-article"><header><p className="eyebrow">{a.tag} / FIELD NOTE</p><h1>{a.title}</h1><p>{a.lede}</p><span>{a.read} · {a.reviewed}</span></header>{page==="qcArticle"&&<figure className="article-visual"><img src={products[0].image} alt={products[0].name} width="1200" height="780"/><figcaption>{articleUi[locale].visual}</figcaption></figure>}<div className="article-body"><aside><Box/><strong>{articleUi[locale].standard}</strong><p>{copy[locale].disclaimer}</p><small>{a.reviewed}</small></aside><div>{a.sections.map(([title,paras],i)=><section key={title}><span>0{i+1}</span><h2>{title}</h2>{paras.map(p=><p key={p}>{p}</p>)}</section>)}<section className="source-notes"><span>{articleUi[locale].basis}</span><h2>{articleUi[locale].sources}</h2><p>{articleUi[locale].sourceNote}</p><ul>{a.sources.map(source=><li key={source.url}>{source.label}</li>)}</ul></section></div></div><div className="article-next"><p>{copy[locale].resourceBody}</p><Link href={localPath(locale,"articles")}>{copy[locale].pageIntro.articles[0]}<ArrowRight size={17}/></Link></div></article></main>;
}

export function SiteView({locale,page}:{locale:Locale;page:PageKey}) {
  return <><Header locale={locale} page={page}/>{page==="home"?<Home locale={locale}/>:page==="spreadsheet"?<SpreadsheetPage locale={locale}/>:page==="finds"?<FindsPage locale={locale}/>:page==="guide"?<GuidePage locale={locale}/>:page==="qc"?<QCPage locale={locale}/>:page==="shipping"?<ShippingPage locale={locale}/>:page==="faq"?<FAQPage locale={locale}/>:page==="articles"?<ArticlesPage locale={locale}/>:<ArticlePage locale={locale} page={page as Extract<PageKey,"qcArticle"|"shippingArticle"|"storageArticle">}/>}<Footer locale={locale}/></>;
}
