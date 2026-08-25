"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { extraTranslations } from "../extra-translations";

type Lang = "en" | "de" | "es" | "fr" | "it";
type Dictionary = Record<string, string>;

const de: Dictionary = {
  "Spreadsheet":"Tabelle","QC":"Qualitätsprüfung","Shipping":"Versand","Guides":"Ratgeber","Articles":"Artikel","Browse products":"Produkte ansehen","Home":"Startseite",
  "Updated August 2026":"Aktualisiert im August 2026","Hipobuy finds,":"Hipobuy-Fundstücke,","made easier.":"einfacher gefunden.",
  "Search a clean product index, open the exact source page, and use practical QC and shipping checks before you decide.":"Durchsuche einen übersichtlichen Produktindex, öffne die genaue Quellseite und nutze praktische Qualitäts- und Versandprüfungen, bevor du dich entscheidest.",
  "Search the spreadsheet":"Tabelle durchsuchen","Try shoes, hoodies or jerseys":"Zum Beispiel Schuhe, Hoodies oder Trikots","categories":"Kategorien","preview rows":"Vorschauzeilen","storage stated by app":"laut App Lagerung",
  "Product index":"Produktindex","Browse current finds":"Aktuelle Fundstücke ansehen","These cards are source-page snapshots. Confirm the live listing, price and available options before ordering.":"Diese Karten sind Momentaufnahmen der Quellseiten. Prüfe vor der Bestellung das aktuelle Angebot, den Preis und die verfügbaren Optionen.",
  "All":"Alle","Shoes":"Schuhe","Hoodies":"Hoodies","T-Shirts":"T-Shirts","Jackets":"Jacken","Pants":"Hosen","Headwear":"Kopfbedeckungen","Accessories":"Accessoires","Jerseys":"Trikots","Electronics":"Elektronik",
  "Checked 25 Aug":"Geprüft am 25. Aug.","Open listing":"Angebot öffnen","curated preview rows":"ausgewählte Vorschauzeilen","View complete catalog":"Gesamten Katalog ansehen",
  "Useful next steps":"Sinnvolle nächste Schritte","Find it. Check it. Ship it.":"Finden. Prüfen. Versenden.","The product link is only the beginning. Use the short guides below to make the important decisions in order.":"Der Produktlink ist nur der Anfang. Nutze die kurzen Ratgeber, um die wichtigen Entscheidungen in der richtigen Reihenfolge zu treffen.",
  "Product discovery":"Produktsuche","Verify the source listing":"Quellangebot prüfen","Check variants, seller photos, current terms and domestic delivery.":"Varianten, Verkäuferfotos, aktuelle Bedingungen und Inlandsversand prüfen.",
  "Warehouse review":"Lagerprüfung","Read the QC photo set":"QC-Fotos prüfen","Compare the order, shape, stitching, labels and measurements.":"Bestellung, Form, Nähte, Etiketten und Maße vergleichen.",
  "Parcel planning":"Paketplanung","Estimate landed cost":"Gesamtkosten schätzen","Review chargeable weight, line rules, insurance, tax and customs.":"Abrechnungsgewicht, Versandregeln, Versicherung, Steuern und Zoll prüfen.",
  "Independent by design":"Bewusst unabhängig","No invented promises.":"Keine erfundenen Versprechen.","Hipo Index does not sell products, process orders or claim that every seller has been tested. Official platform features are identified as such; product availability and shipping estimates must be checked again before payment.":"Hipo Index verkauft keine Produkte, bearbeitet keine Bestellungen und behauptet nicht, jeden Verkäufer getestet zu haben. Offizielle Plattformfunktionen werden gekennzeichnet; Verfügbarkeit und Versandkosten müssen vor der Zahlung erneut geprüft werden.",
  "How we fact-check →":"So prüfen wir Fakten →","Read the FAQ →":"FAQ lesen →","Quick answers":"Kurze Antworten","Before you browse":"Vor dem Stöbern","View all questions →":"Alle Fragen ansehen →",
  "Is this the official Hipobuy website?":"Ist dies die offizielle Hipobuy-Website?","No. This is an independent product-discovery and education site. Hipobuy’s official domain is hipobuy.com.":"Nein. Dies ist eine unabhängige Website zur Produktsuche und Information. Die offizielle Hipobuy-Domain ist hipobuy.com.",
  "Are prices and availability guaranteed?":"Sind Preise und Verfügbarkeit garantiert?","No. Every card is a snapshot. Open the exact listing and confirm current price, variants and availability before paying.":"Nein. Jede Karte ist eine Momentaufnahme. Öffne das genaue Angebot und prüfe vor der Zahlung Preis, Varianten und Verfügbarkeit.",
  "Can QC photos guarantee quality?":"Garantieren QC-Fotos die Qualität?","No. They can show visible condition and measurements, but cannot prove comfort, material composition or long-term durability.":"Nein. Sie zeigen sichtbaren Zustand und Maße, belegen aber weder Komfort noch Materialzusammensetzung oder Haltbarkeit.",
  "Independent Hipobuy spreadsheet guide.":"Unabhängiger Hipobuy-Tabellenführer.","Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Purchases are completed on third-party platforms. © 2026 Hipo Index.":"Nicht mit Hipobuy, Taobao, 1688 oder einer Produktmarke verbunden. Käufe erfolgen auf Drittplattformen. © 2026 Hipo Index.",
  "How to use a Hipobuy spreadsheet without buying blind.":"Eine Hipobuy-Tabelle nutzen, ohne blind zu kaufen.","Start with the source":"Mit der Quelle beginnen","Move from find to QC":"Vom Fundstück zur Qualitätsprüfung",
  "QC photos are evidence—not a quality guarantee.":"QC-Fotos sind Belege – keine Qualitätsgarantie.","Read the photo set in order":"Die Fotos der Reihe nach prüfen","What photos cannot tell you":"Was Fotos nicht zeigen können",
  "Estimate landed cost—not just the headline shipping quote.":"Gesamtkosten schätzen – nicht nur den ersten Versandpreis.","Understand chargeable weight":"Abrechnungsgewicht verstehen","Plan for tax and customs":"Steuern und Zoll einplanen",
  "Guides organized around real decisions.":"Ratgeber für echte Entscheidungen.","What “fact checked” means here":"Was „faktengeprüft“ hier bedeutet","Clear answers, with the uncertainty left visible.":"Klare Antworten, ohne Unsicherheit zu verstecken."
};

const es: Dictionary = {
  "Spreadsheet":"Hoja de cálculo","QC":"Control de calidad","Shipping":"Envío","Guides":"Guías","Articles":"Artículos","Browse products":"Ver productos","Home":"Inicio",
  "Updated August 2026":"Actualizado en agosto de 2026","Hipobuy finds,":"Productos de Hipobuy,","made easier.":"más fáciles de encontrar.",
  "Search a clean product index, open the exact source page, and use practical QC and shipping checks before you decide.":"Busca en un índice de productos claro, abre la página de origen exacta y utiliza controles prácticos de calidad y envío antes de decidir.",
  "Search the spreadsheet":"Buscar en la hoja","Try shoes, hoodies or jerseys":"Prueba con zapatos, sudaderas o camisetas","categories":"categorías","preview rows":"filas de muestra","storage stated by app":"almacenamiento indicado por la app",
  "Product index":"Índice de productos","Browse current finds":"Explorar productos actuales","These cards are source-page snapshots. Confirm the live listing, price and available options before ordering.":"Estas tarjetas son capturas de las páginas de origen. Confirma el anuncio actual, el precio y las opciones antes de comprar.",
  "All":"Todo","Shoes":"Zapatos","Hoodies":"Sudaderas","T-Shirts":"Camisetas","Jackets":"Chaquetas","Pants":"Pantalones","Headwear":"Gorras","Accessories":"Accesorios","Jerseys":"Camisetas deportivas","Electronics":"Electrónica",
  "Checked 25 Aug":"Revisado el 25 ago.","Open listing":"Abrir anuncio","curated preview rows":"filas seleccionadas","View complete catalog":"Ver catálogo completo",
  "Useful next steps":"Siguientes pasos útiles","Find it. Check it. Ship it.":"Encuéntralo. Revísalo. Envíalo.","The product link is only the beginning. Use the short guides below to make the important decisions in order.":"El enlace del producto es solo el principio. Usa estas guías breves para tomar las decisiones importantes en orden.",
  "Product discovery":"Búsqueda de productos","Verify the source listing":"Verifica el anuncio de origen","Check variants, seller photos, current terms and domestic delivery.":"Comprueba variantes, fotos del vendedor, condiciones y envío nacional.",
  "Warehouse review":"Revisión en almacén","Read the QC photo set":"Revisa las fotos de control","Compare the order, shape, stitching, labels and measurements.":"Compara el pedido, la forma, las costuras, las etiquetas y las medidas.",
  "Parcel planning":"Planificación del paquete","Estimate landed cost":"Calcula el coste final","Review chargeable weight, line rules, insurance, tax and customs.":"Revisa el peso facturable, las reglas de la línea, el seguro, los impuestos y la aduana.",
  "Independent by design":"Independiente por diseño","No invented promises.":"Sin promesas inventadas.","Hipo Index does not sell products, process orders or claim that every seller has been tested. Official platform features are identified as such; product availability and shipping estimates must be checked again before payment.":"Hipo Index no vende productos, procesa pedidos ni afirma haber probado a todos los vendedores. Las funciones oficiales se identifican claramente; la disponibilidad y los gastos de envío deben comprobarse antes del pago.",
  "How we fact-check →":"Cómo verificamos los datos →","Read the FAQ →":"Leer las preguntas frecuentes →","Quick answers":"Respuestas rápidas","Before you browse":"Antes de explorar","View all questions →":"Ver todas las preguntas →",
  "Is this the official Hipobuy website?":"¿Es esta la web oficial de Hipobuy?","No. This is an independent product-discovery and education site. Hipobuy’s official domain is hipobuy.com.":"No. Es una web independiente de búsqueda de productos e información. El dominio oficial de Hipobuy es hipobuy.com.",
  "Are prices and availability guaranteed?":"¿Están garantizados los precios y la disponibilidad?","No. Every card is a snapshot. Open the exact listing and confirm current price, variants and availability before paying.":"No. Cada tarjeta es una captura. Abre el anuncio exacto y confirma el precio, las variantes y la disponibilidad antes de pagar.",
  "Can QC photos guarantee quality?":"¿Las fotos de control garantizan la calidad?","No. They can show visible condition and measurements, but cannot prove comfort, material composition or long-term durability.":"No. Pueden mostrar el estado visible y las medidas, pero no demuestran la comodidad, la composición o la durabilidad.",
  "Independent Hipobuy spreadsheet guide.":"Guía independiente de hojas de Hipobuy.","Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Purchases are completed on third-party platforms. © 2026 Hipo Index.":"Sin afiliación con Hipobuy, Taobao, 1688 ni ninguna marca. Las compras se realizan en plataformas de terceros. © 2026 Hipo Index.",
  "How to use a Hipobuy spreadsheet without buying blind.":"Cómo usar una hoja de Hipobuy sin comprar a ciegas.","Start with the source":"Empieza por la fuente","Move from find to QC":"Del producto al control de calidad",
  "QC photos are evidence—not a quality guarantee.":"Las fotos de control son pruebas, no una garantía de calidad.","Read the photo set in order":"Revisa las fotos en orden","What photos cannot tell you":"Lo que las fotos no pueden demostrar",
  "Estimate landed cost—not just the headline shipping quote.":"Calcula el coste final, no solo el precio inicial del envío.","Understand chargeable weight":"Entiende el peso facturable","Plan for tax and customs":"Planifica impuestos y aduanas",
  "Guides organized around real decisions.":"Guías organizadas según decisiones reales.","What “fact checked” means here":"Qué significa aquí “verificado”","Clear answers, with the uncertainty left visible.":"Respuestas claras sin ocultar la incertidumbre."
};

const fr: Dictionary = {
  "Spreadsheet":"Tableur","QC":"Contrôle qualité","Shipping":"Livraison","Guides":"Guides","Articles":"Articles","Browse products":"Voir les produits","Home":"Accueil",
  "Updated August 2026":"Mis à jour en août 2026","Hipobuy finds,":"Les trouvailles Hipobuy,","made easier.":"plus faciles à trouver.",
  "Search a clean product index, open the exact source page, and use practical QC and shipping checks before you decide.":"Parcourez un index clair, ouvrez la page source exacte et utilisez des contrôles pratiques de qualité et de livraison avant de décider.",
  "Search the spreadsheet":"Rechercher dans le tableur","Try shoes, hoodies or jerseys":"Essayez chaussures, sweats ou maillots","categories":"catégories","preview rows":"lignes d’aperçu","storage stated by app":"stockage indiqué par l’app",
  "Product index":"Index des produits","Browse current finds":"Voir les trouvailles actuelles","These cards are source-page snapshots. Confirm the live listing, price and available options before ordering.":"Ces cartes sont des instantanés des pages sources. Vérifiez l’annonce actuelle, le prix et les options avant de commander.",
  "All":"Tout","Shoes":"Chaussures","Hoodies":"Sweats","T-Shirts":"T-shirts","Jackets":"Vestes","Pants":"Pantalons","Headwear":"Couvre-chefs","Accessories":"Accessoires","Jerseys":"Maillots","Electronics":"Électronique",
  "Checked 25 Aug":"Vérifié le 25 août","Open listing":"Ouvrir l’annonce","curated preview rows":"lignes sélectionnées","View complete catalog":"Voir le catalogue complet",
  "Useful next steps":"Étapes utiles","Find it. Check it. Ship it.":"Trouvez. Vérifiez. Expédiez.","The product link is only the beginning. Use the short guides below to make the important decisions in order.":"Le lien produit n’est que le début. Utilisez ces guides courts pour prendre les décisions importantes dans le bon ordre.",
  "Product discovery":"Recherche de produits","Verify the source listing":"Vérifier l’annonce source","Check variants, seller photos, current terms and domestic delivery.":"Vérifiez les variantes, les photos du vendeur, les conditions et la livraison nationale.",
  "Warehouse review":"Contrôle en entrepôt","Read the QC photo set":"Lire les photos de contrôle","Compare the order, shape, stitching, labels and measurements.":"Comparez la commande, la forme, les coutures, les étiquettes et les mesures.",
  "Parcel planning":"Préparation du colis","Estimate landed cost":"Estimer le coût final","Review chargeable weight, line rules, insurance, tax and customs.":"Vérifiez le poids facturable, les règles de la ligne, l’assurance, les taxes et la douane.",
  "Independent by design":"Indépendant par choix","No invented promises.":"Aucune promesse inventée.","Hipo Index does not sell products, process orders or claim that every seller has been tested. Official platform features are identified as such; product availability and shipping estimates must be checked again before payment.":"Hipo Index ne vend pas de produits, ne traite pas les commandes et ne prétend pas avoir testé chaque vendeur. Les fonctions officielles sont identifiées ; disponibilité et frais d’expédition doivent être revérifiés avant paiement.",
  "How we fact-check →":"Comment nous vérifions →","Read the FAQ →":"Lire la FAQ →","Quick answers":"Réponses rapides","Before you browse":"Avant de parcourir","View all questions →":"Voir toutes les questions →",
  "Is this the official Hipobuy website?":"Est-ce le site officiel Hipobuy ?","No. This is an independent product-discovery and education site. Hipobuy’s official domain is hipobuy.com.":"Non. C’est un site indépendant de découverte et d’information. Le domaine officiel de Hipobuy est hipobuy.com.",
  "Are prices and availability guaranteed?":"Les prix et la disponibilité sont-ils garantis ?","No. Every card is a snapshot. Open the exact listing and confirm current price, variants and availability before paying.":"Non. Chaque carte est un instantané. Ouvrez l’annonce exacte et confirmez le prix, les variantes et la disponibilité avant de payer.",
  "Can QC photos guarantee quality?":"Les photos de contrôle garantissent-elles la qualité ?","No. They can show visible condition and measurements, but cannot prove comfort, material composition or long-term durability.":"Non. Elles montrent l’état visible et les mesures, mais ne prouvent ni le confort, ni la composition, ni la durabilité.",
  "Independent Hipobuy spreadsheet guide.":"Guide indépendant du tableur Hipobuy.","Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Purchases are completed on third-party platforms. © 2026 Hipo Index.":"Sans affiliation avec Hipobuy, Taobao, 1688 ou une marque. Les achats se font sur des plateformes tierces. © 2026 Hipo Index.",
  "How to use a Hipobuy spreadsheet without buying blind.":"Utiliser un tableur Hipobuy sans acheter à l’aveugle.","Start with the source":"Commencer par la source","Move from find to QC":"De la trouvaille au contrôle",
  "QC photos are evidence—not a quality guarantee.":"Les photos de contrôle sont des preuves, pas une garantie.","Read the photo set in order":"Lire les photos dans l’ordre","What photos cannot tell you":"Ce que les photos ne peuvent pas prouver",
  "Estimate landed cost—not just the headline shipping quote.":"Estimer le coût final, pas seulement le tarif d’expédition affiché.","Understand chargeable weight":"Comprendre le poids facturable","Plan for tax and customs":"Prévoir taxes et douane",
  "Guides organized around real decisions.":"Des guides basés sur de vraies décisions.","What “fact checked” means here":"Ce que signifie « vérifié » ici","Clear answers, with the uncertainty left visible.":"Des réponses claires sans masquer l’incertitude."
};

const it: Dictionary = {
  "Spreadsheet":"Foglio di calcolo","QC":"Controllo qualità","Shipping":"Spedizione","Guides":"Guide","Articles":"Articoli","Browse products":"Sfoglia prodotti","Home":"Home",
  "Updated August 2026":"Aggiornato ad agosto 2026","Hipobuy finds,":"Prodotti Hipobuy,","made easier.":"più facili da trovare.",
  "Search a clean product index, open the exact source page, and use practical QC and shipping checks before you decide.":"Cerca in un indice ordinato, apri la pagina fonte esatta e usa controlli pratici di qualità e spedizione prima di decidere.",
  "Search the spreadsheet":"Cerca nel foglio","Try shoes, hoodies or jerseys":"Prova scarpe, felpe o maglie","categories":"categorie","preview rows":"righe di anteprima","storage stated by app":"deposito indicato dall’app",
  "Product index":"Indice prodotti","Browse current finds":"Sfoglia i prodotti attuali","These cards are source-page snapshots. Confirm the live listing, price and available options before ordering.":"Queste schede sono istantanee delle pagine fonte. Verifica inserzione, prezzo e opzioni attuali prima di ordinare.",
  "All":"Tutto","Shoes":"Scarpe","Hoodies":"Felpe","T-Shirts":"T-shirt","Jackets":"Giacche","Pants":"Pantaloni","Headwear":"Copricapi","Accessories":"Accessori","Jerseys":"Maglie","Electronics":"Elettronica",
  "Checked 25 Aug":"Verificato il 25 ago","Open listing":"Apri inserzione","curated preview rows":"righe selezionate","View complete catalog":"Vedi catalogo completo",
  "Useful next steps":"Prossimi passi utili","Find it. Check it. Ship it.":"Trova. Controlla. Spedisci.","The product link is only the beginning. Use the short guides below to make the important decisions in order.":"Il link del prodotto è solo l’inizio. Usa le brevi guide per prendere le decisioni importanti nell’ordine giusto.",
  "Product discovery":"Ricerca prodotti","Verify the source listing":"Verifica la pagina fonte","Check variants, seller photos, current terms and domestic delivery.":"Controlla varianti, foto del venditore, condizioni e consegna nazionale.",
  "Warehouse review":"Controllo magazzino","Read the QC photo set":"Controlla le foto QC","Compare the order, shape, stitching, labels and measurements.":"Confronta ordine, forma, cuciture, etichette e misure.",
  "Parcel planning":"Pianificazione pacco","Estimate landed cost":"Stima il costo finale","Review chargeable weight, line rules, insurance, tax and customs.":"Controlla peso fatturabile, regole della linea, assicurazione, tasse e dogana.",
  "Independent by design":"Indipendente per scelta","No invented promises.":"Nessuna promessa inventata.","Hipo Index does not sell products, process orders or claim that every seller has been tested. Official platform features are identified as such; product availability and shipping estimates must be checked again before payment.":"Hipo Index non vende prodotti, non gestisce ordini e non afferma di aver testato ogni venditore. Le funzioni ufficiali sono indicate; disponibilità e costi di spedizione vanno ricontrollati prima del pagamento.",
  "How we fact-check →":"Come verifichiamo →","Read the FAQ →":"Leggi le FAQ →","Quick answers":"Risposte rapide","Before you browse":"Prima di sfogliare","View all questions →":"Vedi tutte le domande →",
  "Is this the official Hipobuy website?":"È il sito ufficiale di Hipobuy?","No. This is an independent product-discovery and education site. Hipobuy’s official domain is hipobuy.com.":"No. È un sito indipendente di ricerca prodotti e informazione. Il dominio ufficiale di Hipobuy è hipobuy.com.",
  "Are prices and availability guaranteed?":"Prezzi e disponibilità sono garantiti?","No. Every card is a snapshot. Open the exact listing and confirm current price, variants and availability before paying.":"No. Ogni scheda è un’istantanea. Apri l’inserzione esatta e conferma prezzo, varianti e disponibilità prima di pagare.",
  "Can QC photos guarantee quality?":"Le foto QC garantiscono la qualità?","No. They can show visible condition and measurements, but cannot prove comfort, material composition or long-term durability.":"No. Possono mostrare condizioni e misure visibili, ma non provano comfort, composizione o durata.",
  "Independent Hipobuy spreadsheet guide.":"Guida indipendente al foglio Hipobuy.","Not affiliated with Hipobuy, Taobao, 1688 or any product brand. Purchases are completed on third-party platforms. © 2026 Hipo Index.":"Non affiliato a Hipobuy, Taobao, 1688 o marchi di prodotto. Gli acquisti avvengono su piattaforme terze. © 2026 Hipo Index.",
  "How to use a Hipobuy spreadsheet without buying blind.":"Usare un foglio Hipobuy senza acquistare alla cieca.","Start with the source":"Inizia dalla fonte","Move from find to QC":"Dal prodotto al controllo qualità",
  "QC photos are evidence—not a quality guarantee.":"Le foto QC sono prove, non una garanzia di qualità.","Read the photo set in order":"Controlla le foto in ordine","What photos cannot tell you":"Cosa le foto non possono dimostrare",
  "Estimate landed cost—not just the headline shipping quote.":"Stima il costo finale, non solo il primo prezzo di spedizione.","Understand chargeable weight":"Capire il peso fatturabile","Plan for tax and customs":"Pianifica tasse e dogana",
  "Guides organized around real decisions.":"Guide organizzate per decisioni reali.","What “fact checked” means here":"Cosa significa “verificato” qui","Clear answers, with the uncertainty left visible.":"Risposte chiare senza nascondere l’incertezza."
};

const dictionaries: Record<Lang, Dictionary> = {
  en:{},
  de:{...de,...extraTranslations.de},
  es:{...es,...extraTranslations.es},
  fr:{...fr,...extraTranslations.fr},
  it:{...it,...extraTranslations.it}
};
const LanguageContext = createContext<{ lang:Lang; setLang:(lang:Lang)=>void }>({ lang:"en", setLang:()=>{} });
const originalText = new WeakMap<Node,string>();
let translating=false;

function translatedText(source:string,lang:Lang) {
  if(lang==="en") return source;
  const direct=dictionaries[lang][source];
  if(direct) return direct;
  return source;
}

function translatePage(lang: Lang) {
  if(translating) return;
  translating=true;
  const dict=dictionaries[lang];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node:Node|null;
  while((node=walker.nextNode())) {
    const parent=node.parentElement;
    if(!parent || parent.closest("script,style,.notranslate")) continue;
    if(!originalText.has(node)) originalText.set(node,node.textContent||"");
    const source=originalText.get(node)||"";
    const trimmed=source.trim();
    const translated=translatedText(trimmed,lang);
    const next=trimmed?source.replace(trimmed,translated):source;
    if(node.textContent!==next) node.textContent=next;
  }
  document.querySelectorAll<HTMLElement>("[placeholder],[aria-label]").forEach((el)=>{
    ["placeholder","aria-label"].forEach((attr)=>{
      const key=`original${attr.replace("-","")}`;
      const current=el.getAttribute(attr);
      if(!current) return;
      if(!el.dataset[key]) el.dataset[key]=current;
      const source=el.dataset[key]||current;
      const next=lang==="en"?source:(dict[source]||source);
      if(el.getAttribute(attr)!==next) el.setAttribute(attr,next);
    });
  });
  document.documentElement.lang=lang;
  document.body.dataset.language=lang;
  translating=false;
}

function hideGoogleTranslateChrome() {
  const selectors=[
    ".goog-te-banner-frame",
    ".goog-te-balloon-frame",
    ".VIpgJd-ZVi9od-ORHb-OEVmcd",
    ".VIpgJd-ZVi9od-aZ2wEe-wOHMyf",
    "body > .skiptranslate",
    "iframe.skiptranslate",
    "iframe[src*='translate.google']"
  ];
  document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((element)=>{
    element.style.setProperty("display","none","important");
    element.style.setProperty("visibility","hidden","important");
    element.style.setProperty("height","0","important");
  });
  document.documentElement.style.setProperty("top","0","important");
  document.body.style.setProperty("top","0","important");
}

function googleCookieDomains() {
  const host=window.location.hostname;
  const labels=host.split(".");
  const domains=["",host,`.${host}`];
  // Google Translate may create the cookie on the preview site's parent domain.
  // Delete every domain variant the current host is allowed to touch so an old
  // Spanish cookie cannot override a newly selected language.
  for(let index=1;index<labels.length-1;index+=1) {
    const parent=labels.slice(index).join(".");
    domains.push(parent,`.${parent}`);
  }
  return [...new Set(domains)];
}

function clearGoogleLanguageCookies() {
  const paths=["/",window.location.pathname||"/"];
  googleCookieDomains().forEach((domain)=>{
    paths.forEach((path)=>{
      const domainAttribute=domain?`;domain=${domain}`:"";
      document.cookie=`googtrans=;path=${path}${domainAttribute};expires=Thu, 01 Jan 1970 00:00:00 GMT;max-age=0;SameSite=Lax`;
    });
  });
}

function setGoogleLanguageCookie(lang:Lang) {
  clearGoogleLanguageCookies();
  if(lang!=="en") document.cookie=`googtrans=/en/${lang};path=/;max-age=31536000;SameSite=Lax`;
}

function applyGoogleLanguage(lang:Exclude<Lang,"en">) {
  const combo=document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if(!combo) return false;
  if(combo.value!==lang) {
    combo.value=lang;
    combo.dispatchEvent(new Event("change",{bubbles:true}));
  }
  hideGoogleTranslateChrome();
  return true;
}

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang,setLangState]=useState<Lang>("en");
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    const saved=localStorage.getItem("hipo-language") as Lang|null;
    const browserLanguage=navigator.language.split("-")[0] as Lang;
    if(saved&&dictionaries[saved]) setLangState(saved);
    else if(dictionaries[browserLanguage]) setLangState(browserLanguage);
    setReady(true);
  },[]);
  useEffect(()=>{
    if(!ready) return;
    localStorage.setItem("hipo-language",lang);
    if(lang==="en") {
      clearGoogleLanguageCookies();
      translatePage("en");
      return;
    }

    setGoogleLanguageCookie(lang);
    // The local dictionary gives immediate, dependable navigation and heading
    // translation while Google fills in long-form article copy.
    translatePage(lang);
    const chromeObserver=new MutationObserver(hideGoogleTranslateChrome);
    chromeObserver.observe(document.documentElement,{childList:true,subtree:true});
    hideGoogleTranslateChrome();
    const chromeGuard=window.setInterval(hideGoogleTranslateChrome,250);
    const stopChromeGuard=window.setTimeout(()=>window.clearInterval(chromeGuard),5000);
    const win=window as typeof window & { googleTranslateElementInit?:()=>void; google?:{translate?:{TranslateElement:new (options:Record<string,unknown>,elementId:string)=>unknown}} };
    win.googleTranslateElementInit=()=>{
      if(win.google?.translate?.TranslateElement) new win.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"de,es,fr,it",autoDisplay:false},"google_translate_element");
      let attempts=0;
      const applyTimer=window.setInterval(()=>{
        attempts+=1;
        if(applyGoogleLanguage(lang)||attempts>=40) window.clearInterval(applyTimer);
      },100);
      hideGoogleTranslateChrome();
    };
    if(!document.querySelector("script[data-hipo-translate]")) {
      const script=document.createElement("script");
      script.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async=true;
      script.dataset.hipoTranslate="true";
      document.head.appendChild(script);
    } else win.googleTranslateElementInit();

    return()=>{
      chromeObserver.disconnect();
      window.clearInterval(chromeGuard);
      window.clearTimeout(stopChromeGuard);
    };
  },[lang,ready]);
  const setLang=(next:Lang)=>{
    if(next===lang) return;
    localStorage.setItem("hipo-language",next);
    setGoogleLanguageCookie(next);
    setLangState(next);
    translatePage(next);
    if(next==="en" || !applyGoogleLanguage(next)) window.location.reload();
  };
  return <LanguageContext.Provider value={{lang,setLang}}>{children}<div id="google_translate_element" className="notranslate" aria-hidden="true" /></LanguageContext.Provider>;
}

export function LanguageSwitcher() {
  const {lang,setLang}=useContext(LanguageContext);
  return <label className="language-switcher notranslate"><span className="sr-only">Language</span><select value={lang} onChange={(event)=>setLang(event.target.value as Lang)} aria-label="Language"><option value="en">EN · English</option><option value="de">DE · Deutsch</option><option value="es">ES · Español</option><option value="fr">FR · Français</option><option value="it">IT · Italiano</option></select></label>;
}
