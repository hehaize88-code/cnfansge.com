"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mark } from "./KakobuyHome";
import { copy, Lang, navHref } from "./site-data";
import { articlesByLang, categoriesByLang, interfaceText, productsByLang } from "./localized-data";

export type SectionKey = "spreadsheet" | "finds" | "guide" | "qc" | "shipping" | "faq" | "articles";

type PageText = { eyebrow: string; title: string; intro: string; cards: string[][]; checklist: string[] };

const pages: Record<Lang, Record<SectionKey, PageText>> = {
  en: {
    spreadsheet: { eyebrow: "Spreadsheet / Visual index", title: "A spreadsheet built like a decision tool.", intro: "Browse focused categories, compare real product imagery and open a direct route only when the item deserves a closer look.", cards: [["Focused categories", "Ten intent-led sections replace a crowded wall of rows."], ["Visual evidence", "Product imagery stays visible while you compare routes."], ["USD references", "Reference conversions make rough comparison faster."], ["Current destinations", "Each card opens its current product or category destination."]], checklist: ["Choose one category", "Shortlist three items", "Compare images and measurements", "Verify the live destination"] },
    finds: { eyebrow: "Finds / Current routes", title: "Fresh finds with fewer blind spots.", intro: "A compact selection of recently added routes, presented for scanning rather than hype. Final availability belongs to the destination page.", cards: [["New routes", "Recently added products appear first."], ["Useful labels", "Category and reference price remain visible."], ["No fake certainty", "The site does not label an item verified without evidence."], ["Direct details", "Every product card opens the matching detail route."]], checklist: ["Scan the latest set", "Open the matching detail page", "Review size and options", "Re-check before proceeding"] },
    guide: { eyebrow: "Guide / First-order workflow", title: "A calmer way from product link to parcel.", intro: "Separate discovery, inspection and shipping research. Most preventable mistakes happen when those decisions are rushed into one click.", cards: [["1. Discover", "Use one category or a short product keyword. Avoid building a huge cart before you understand the process."], ["2. Compare", "Look at similar routes, size charts and visible materials. A listing image is not a QC photo."], ["3. Inspect", "When warehouse images are available, review every angle and request clarification when something is hidden."], ["4. Plan", "Research likely parcel weight, packaging and destination-specific options before submitting anything."]], checklist: ["Start with a small shortlist", "Save the exact product route", "Check return conditions early", "Keep screenshots of important details"] },
    qc: { eyebrow: "QC / Evidence checklist", title: "Read evidence, not marketing.", intro: "QC photos can reveal condition and dimensions, but they cannot prove every material claim or long-term quality. Use a fixed inspection order.", cards: [["Shape first", "Compare left and right sides, overall proportions and whether the item sits naturally."], ["Details second", "Zoom into seams, edges, prints, hardware and areas most likely to show defects."], ["Measure third", "Use the ruler or measurement image instead of trusting a size label alone."], ["Decide last", "Separate a harmless variation from a defect that would affect use, fit or appearance."]], checklist: ["Count all expected pieces", "Check front, back and side angles", "Compare measured dimensions", "Save evidence before deciding"] },
    shipping: { eyebrow: "Shipping / Parcel planning", title: "Weight is only half the parcel story.", intro: "International cost depends on the selected line, destination, parcel dimensions, actual weight and service rules. Treat estimates as estimates.", cards: [["Actual weight", "The scale weight of the packed parcel and its contents."], ["Volumetric weight", "A dimensional calculation that can matter when the box is large for its mass."], ["Packaging", "Boxes, protection and removed packaging can change both weight and dimensions."], ["Route conditions", "Limits, handling rules and available lines vary by destination and time."]], checklist: ["Estimate item and packaging weight", "Check dimensions, not weight alone", "Review current line restrictions", "Leave room for estimate changes"] },
    faq: { eyebrow: "FAQ / Independent answers", title: "Straight answers before the first click.", intro: "Clear boundaries make a research site more useful. This directory helps you discover and compare; it does not sell, inspect or ship products.", cards: copy.en.faq, checklist: ["Independent directory", "No order processing", "No payment collection", "Live details must be rechecked"] },
    articles: { eyebrow: "Articles / Research library", title: "Field notes for better decisions.", intro: "Practical, evidence-led guides on QC, sizing, shipping math and beginner workflows—written to solve one problem at a time.", cards: [["QC", "Photo-reading checklists and decision frameworks."], ["Shipping", "Weight, dimensions, packing and estimate context."], ["Workflow", "Shortlists, link checks and pre-order research."], ["Updates", "Platform facts are rechecked before publication."]], checklist: ["One search intent per article", "Official facts separated from estimates", "Clear next-step checklist", "No invented guarantees"] },
  },
  de: {
    spreadsheet: { eyebrow: "Spreadsheet / Visueller Index", title: "Ein Spreadsheet als Entscheidungshilfe.", intro: "Gezielte Kategorien durchsuchen, echte Produktbilder vergleichen und eine direkte Route erst öffnen, wenn der Artikel genauer geprüft werden soll.", cards: [["Klare Kategorien", "Zehn Bereiche ersetzen eine überladene Zeilenwand."], ["Visuelle Hinweise", "Produktbilder bleiben beim Vergleich sichtbar."], ["USD-Referenzen", "Ungefähre Umrechnungen erleichtern den Vergleich."], ["Aktuelle Ziele", "Jede Karte öffnet die aktuelle Produkt- oder Kategorieseite."]], checklist: ["Eine Kategorie wählen", "Drei Artikel vormerken", "Bilder und Maße vergleichen", "Live-Ziel prüfen"] },
    finds: { eyebrow: "Funde / Aktuelle Routen", title: "Neue Funde mit weniger blinden Flecken.", intro: "Eine kompakte Auswahl neuer Routen zum Prüfen statt für Hype. Die Zielseite entscheidet über die aktuelle Verfügbarkeit.", cards: [["Neue Routen", "Neue Produkte erscheinen zuerst."], ["Nützliche Angaben", "Kategorie und Referenzpreis bleiben sichtbar."], ["Keine falsche Sicherheit", "Ohne Belege wird nichts als verifiziert bezeichnet."], ["Direkte Details", "Jede Produktkarte öffnet die passende Detailroute."]], checklist: ["Neueste Auswahl prüfen", "Passende Detailseite öffnen", "Größe und Optionen prüfen", "Vorher erneut kontrollieren"] },
    guide: { eyebrow: "Ratgeber / Erster Auftrag", title: "Ruhiger vom Produktlink zum Paket.", intro: "Entdeckung, Prüfung und Versand getrennt behandeln. Viele vermeidbare Fehler entstehen, wenn alles in einen Klick gepresst wird.", cards: [["1. Entdecken", "Eine Kategorie oder einen kurzen Suchbegriff verwenden."], ["2. Vergleichen", "Ähnliche Routen, Größentabellen und Materialien vergleichen."], ["3. Prüfen", "Lagerbilder aus jedem Winkel ansehen und bei Unklarheiten nachfragen."], ["4. Planen", "Gewicht, Verpackung und Ziellandoptionen vorab recherchieren."]], checklist: ["Kleine Auswahl starten", "Exakten Link speichern", "Rückgabebedingungen früh prüfen", "Wichtige Details sichern"] },
    qc: { eyebrow: "QC / Prüfliste", title: "Belege lesen, nicht Werbung.", intro: "QC-Fotos zeigen Zustand und Maße, beweisen aber nicht jede Materialaussage oder Langzeitqualität. Immer in fester Reihenfolge prüfen.", cards: [["Erst Form", "Symmetrie, Proportionen und natürlichen Sitz vergleichen."], ["Dann Details", "Nähte, Kanten, Drucke, Hardware und mögliche Defekte vergrößern."], ["Dann Maße", "Messfoto statt Größenetikett verwenden."], ["Zuletzt entscheiden", "Normale Abweichung von relevantem Defekt trennen."]], checklist: ["Alle Teile zählen", "Vorder-, Rück- und Seitenansicht", "Maße vergleichen", "Belege speichern"] },
    shipping: { eyebrow: "Versand / Paketplanung", title: "Gewicht ist nur die halbe Paketgeschichte.", intro: "Kosten hängen von Linie, Ziel, Maßen, tatsächlichem Gewicht und Regeln ab. Eine Schätzung bleibt eine Schätzung.", cards: [["Echtgewicht", "Waagengewicht des gepackten Pakets."], ["Volumengewicht", "Maßberechnung bei großen, leichten Kartons."], ["Verpackung", "Schutz und entfernte Boxen ändern Maße und Gewicht."], ["Routenregeln", "Grenzen und verfügbare Linien variieren nach Ziel und Zeit."]], checklist: ["Artikel plus Verpackung schätzen", "Maße mitprüfen", "Aktuelle Beschränkungen lesen", "Spielraum einplanen"] },
    faq: { eyebrow: "FAQ / Unabhängige Antworten", title: "Klare Antworten vor dem ersten Klick.", intro: "Dieses Verzeichnis unterstützt Suche und Vergleich; es verkauft, prüft und versendet keine Produkte.", cards: copy.de.faq, checklist: ["Unabhängiges Verzeichnis", "Keine Bestellabwicklung", "Keine Zahlungsannahme", "Live-Daten erneut prüfen"] },
    articles: { eyebrow: "Artikel / Recherchebibliothek", title: "Praxisnotizen für bessere Entscheidungen.", intro: "Nützliche Leitfäden zu QC, Größen, Versandberechnung und Einsteigerabläufen – jeweils für ein konkretes Problem.", cards: [["QC", "Fotoprüflisten und Entscheidungshilfen."], ["Versand", "Gewicht, Maße, Verpackung und Schätzungen."], ["Ablauf", "Auswahl, Linkprüfung und Vorabrecherche."], ["Updates", "Plattformfakten werden vor Veröffentlichung geprüft."]], checklist: ["Eine Suchabsicht pro Artikel", "Fakten von Schätzungen trennen", "Klare Prüfliste", "Keine erfundenen Garantien"] },
  },
  es: {} as Record<SectionKey, PageText>, fr: {} as Record<SectionKey, PageText>, it: {} as Record<SectionKey, PageText>,
};

const localizeFromEnglish = (lang: "es" | "fr" | "it") => {
  const shared = {
    es: { p: ["Índice visual", "Hallazgos actuales", "Flujo inicial", "Lista QC", "Plan de envío", "Respuestas independientes", "Biblioteca"], t: ["Un spreadsheet diseñado para decidir mejor.", "Hallazgos nuevos con menos puntos ciegos.", "Un camino más tranquilo del enlace al paquete.", "Lee las pruebas, no el marketing.", "El peso es solo la mitad de la historia.", "Respuestas claras antes del primer clic.", "Notas prácticas para decidir mejor."], i: "La página conserva la misma información, estructura y pasos de comprobación para investigar, comparar y verificar antes de continuar.", b:["Usa categorías y palabras cortas para crear una selección pequeña y relevante.","Revisa imágenes, medidas, materiales visibles y posibles defectos antes de confiar en una ruta.","Compara opciones con los mismos criterios y separa hechos, estimaciones y afirmaciones sin prueba.","Abre el destino actual y confirma precio, variantes, disponibilidad y condiciones antes del siguiente paso."], c:["Elegir una categoría","Guardar una selección pequeña","Comparar imágenes y medidas","Confirmar el destino actual"] },
    fr: { p: ["Index visuel", "Sélections actuelles", "Premier parcours", "Liste QC", "Planification", "Réponses indépendantes", "Bibliothèque"], t: ["Un spreadsheet conçu comme outil de décision.", "Des sélections récentes avec moins d'angles morts.", "Un parcours plus calme du lien au colis.", "Lisez les preuves, pas le marketing.", "Le poids ne raconte que la moitié du colis.", "Des réponses claires avant le premier clic.", "Des notes pratiques pour mieux décider."], i: "La page conserve les mêmes informations, la même structure et les mêmes étapes pour rechercher, comparer et vérifier avant de continuer.", b:["Utilisez des catégories et des mots-clés courts pour créer une sélection petite et pertinente.","Vérifiez images, mesures, matières visibles et défauts possibles avant de faire confiance à un lien.","Comparez les options avec les mêmes critères et séparez faits, estimations et affirmations non prouvées.","Ouvrez la destination actuelle et confirmez prix, variantes, disponibilité et conditions avant l'étape suivante."], c:["Choisir une catégorie","Garder une petite sélection","Comparer images et mesures","Confirmer la destination"] },
    it: { p: ["Indice visivo", "Prodotti attuali", "Primo percorso", "Lista QC", "Piano spedizione", "Risposte indipendenti", "Biblioteca"], t: ["Uno spreadsheet costruito per decidere meglio.", "Nuovi prodotti con meno punti ciechi.", "Un percorso più calmo dal link al pacco.", "Leggi le prove, non il marketing.", "Il peso racconta solo metà del pacco.", "Risposte chiare prima del primo clic.", "Note pratiche per decisioni migliori."], i: "La pagina mantiene le stesse informazioni, la stessa struttura e gli stessi controlli per cercare, confrontare e verificare prima di procedere.", b:["Usa categorie e parole brevi per creare una selezione piccola e pertinente.","Controlla immagini, misure, materiali visibili e possibili difetti prima di fidarti di un percorso.","Confronta le opzioni con gli stessi criteri e separa fatti, stime e affermazioni non provate.","Apri la destinazione attuale e conferma prezzo, varianti, disponibilità e condizioni prima del passo successivo."], c:["Scegliere una categoria","Salvare una piccola selezione","Confrontare immagini e misure","Confermare la destinazione"] },
  }[lang];
  const keys: SectionKey[] = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
  const verbs = lang === "es" ? ["Descubrir", "Inspeccionar", "Comparar", "Verificar"] : lang === "fr" ? ["Découvrir", "Inspecter", "Comparer", "Vérifier"] : ["Scoprire", "Controllare", "Confrontare", "Verificare"];
  return Object.fromEntries(keys.map((key, index) => [key, { eyebrow: `${shared.p[index]} / KakobuyVIP`, title: shared.t[index], intro: shared.i, cards: pages.en[key].cards.map((_, cardIndex) => [verbs[cardIndex % verbs.length], shared.b[cardIndex % shared.b.length]]), checklist: shared.c }])) as Record<SectionKey, PageText>;
};
pages.es = localizeFromEnglish("es"); pages.fr = localizeFromEnglish("fr"); pages.it = localizeFromEnglish("it");

type FactGroup = "directory" | "service" | "qc" | "shipping" | "editorial";
const factGroupBySection: Record<SectionKey, FactGroup> = {
  spreadsheet: "directory", finds: "directory", guide: "service", qc: "qc",
  shipping: "shipping", faq: "service", articles: "editorial",
};
const factHeading: Record<Lang, [string, string]> = {
  en: ["FACT-CHECKED NOTES", "What the evidence supports"],
  de: ["GEPRÜFTE HINWEISE", "Was die Quellen bestätigen"],
  es: ["NOTAS VERIFICADAS", "Lo que confirman las fuentes"],
  fr: ["NOTES VÉRIFIÉES", "Ce que confirment les sources"],
  it: ["NOTE VERIFICATE", "Cosa confermano le fonti"],
};
const evidenceSource: Record<Lang, string> = {
  en: "Sources checked 31 August 2026. Live account terms remain the final reference.",
  de: "Quellen geprüft am 31. August 2026. Die aktuellen Kontobedingungen bleiben maßgeblich.",
  es: "Fuentes comprobadas el 31 de agosto de 2026. Las condiciones actuales de la cuenta son la referencia final.",
  fr: "Sources vérifiées le 31 août 2026. Les conditions actuelles du compte restent la référence finale.",
  it: "Fonti verificate il 31 agosto 2026. Le condizioni attuali dell’account restano il riferimento finale.",
};
const facts: Record<Lang, Record<FactGroup, string[][]>> = {
  en: {
    directory: [
      ["Discovery, not inventory", "This directory organizes current product and category routes. The destination page remains the source for live price, options and availability."],
      ["Images stay matched", "Product cards use the corresponding destination image rather than a generic category photo."],
      ["USD is a reference", "Displayed USD figures support quick comparison and must be rechecked at the live destination."],
      ["Independent scope", "The directory does not process orders, collect payments, inspect goods or promise seller performance."],
    ],
    service: [
      ["Shopping-agent role", "Kakobuy describes itself as a Taobao and 1688 shopping agent rather than the seller of every listed product."],
      ["Warehouse workflow", "Official service material says purchases from different sellers can enter the Kakobuy warehouse and later be shipped together."],
      ["100-day storage", "Kakobuy’s service page advertises 100 days of free warehouse storage for consolidation planning."],
      ["Conditional returns", "The official 5-Day Return/Exchange Guarantee assigns costs differently for preference returns and qualifying quality issues; seller and product conditions still matter."],
    ],
    qc: [
      ["Official inspection statement", "Kakobuy says warehouse staff follow inspection criteria when receiving goods and take item photos for users to view."],
      ["Visible evidence only", "Photos can support identity, condition, shape and measurement checks, but cannot prove every material, functional or authenticity claim."],
      ["Buyer decision", "Critical missing angles should be requested before international shipment while domestic after-sale options may still be available."],
      ["Evidence record", "Save the listing, selected variant and decisive warehouse images together when reporting a problem."],
    ],
    shipping: [
      ["Official estimator", "Kakobuy provides a shipping-fee estimator; the final parcel weight, dimensions, destination and line rules determine the useful comparison."],
      ["Published cost framework", "Official help material describes total cost as product cost, international freight, packaging and optional value-added services."],
      ["No universal route formula", "Actual and dimensional-weight treatment varies by the live shipping line, so one external divisor should not be presented as universal."],
      ["Customs uncertainty", "Customs rules, taxes and carrier events remain destination-specific and cannot be guaranteed by a static guide."],
    ],
    editorial: [
      ["Official facts first", "Platform features and policy statements are checked against Kakobuy service and help pages before publication."],
      ["Anecdotes labelled", "Trustpilot and Reddit experiences are identified as individual reports rather than platform-wide proof."],
      ["Long-form answers", "Core English guides contain 1,200–1,800 words and answer one search intent without padding."],
      ["Reader-facing content", "Articles contain practical checks, source boundaries and decisions—not internal prompts or publishing conversations."],
    ],
  },
  de: {
    directory: [["Recherche statt Bestand","Dieses Verzeichnis ordnet aktuelle Produkt- und Kategorierouten; Preis, Varianten und Verfügbarkeit werden am Ziel geprüft."],["Passende Bilder","Produktkarten verwenden das zum Ziel gehörende Bild."],["USD als Referenz","USD-Werte dienen dem Vergleich und sind nicht endgültig."],["Unabhängiger Umfang","Keine Bestell-, Zahlungs-, Prüf- oder Versandabwicklung."]],
    service: [["Shopping-Agent","Kakobuy beschreibt sich als Einkaufsagent für Taobao und 1688."],["Lagerablauf","Produkte verschiedener Verkäufer können ins Lager gelangen und zusammen versendet werden."],["100 Tage Lagerung","Die offizielle Serviceseite nennt 100 Tage kostenlose Lagerung."],["Bedingte Rückgabe","Die 5-Tage-Garantie hängt von Grund, Verkäufer, Produkt und Nachweis ab."]],
    qc: [["Offizielle Aussage","Kakobuy nennt Prüfkriterien und Fotos beim Wareneingang."],["Sichtbare Belege","Fotos zeigen sichtbaren Zustand und Maße, beweisen aber nicht jede Material- oder Funktionsaussage."],["Entscheidung des Käufers","Fehlende wichtige Winkel vor internationalem Versand anfragen."],["Belege sichern","Listing, Variante und entscheidende Lagerbilder zusammen speichern."]],
    shipping: [["Offizieller Rechner","Kakobuy bietet einen Versandkostenrechner; aktuelle Paketdaten bleiben entscheidend."],["Kostenrahmen","Genannt werden Produkt, internationaler Versand, Verpackung und optionale Services."],["Keine Universalformel","Volumengewichtsregeln unterscheiden sich je aktueller Linie."],["Zoll bleibt variabel","Steuern, Zoll und Carrier-Ereignisse hängen vom Ziel ab."]],
    editorial: [["Offizielle Fakten zuerst","Plattformangaben werden mit Kakobuy-Hilfe- und Serviceseiten geprüft."],["Erfahrungen markiert","Trustpilot- und Reddit-Berichte werden als Einzelfälle bezeichnet."],["Ausführliche Antworten","Englische Kernartikel umfassen 1.200–1.800 Wörter pro Suchintention."],["Inhalt für Leser","Keine internen Prompts oder Gespräche werden veröffentlicht."]],
  },
  es: {
    directory: [["Investigación, no inventario","El directorio organiza rutas actuales; precio, opciones y disponibilidad se comprueban en el destino."],["Imágenes correspondientes","Cada tarjeta usa la imagen vinculada al destino."],["USD orientativo","Los importes en USD ayudan a comparar, pero no son definitivos."],["Alcance independiente","No procesa pedidos, pagos, inspecciones ni envíos."]],
    service: [["Agente de compra","Kakobuy se describe como agente para Taobao y 1688."],["Flujo de almacén","Los productos de distintos vendedores pueden llegar al almacén y enviarse juntos."],["100 días","La página oficial anuncia 100 días de almacenamiento gratuito."],["Devolución condicional","La garantía de cinco días depende del motivo, vendedor, producto y pruebas."]],
    qc: [["Declaración oficial","Kakobuy indica que aplica criterios de inspección y toma fotos al recibir."],["Prueba visible","Las fotos ayudan con estado y medidas, no prueban todo material o función."],["Decisión del comprador","Pide ángulos críticos antes del envío internacional."],["Guardar pruebas","Conserva anuncio, variante y fotos decisivas."]],
    shipping: [["Estimador oficial","El estimador depende del destino, peso, dimensiones y línea actual."],["Marco de costes","La ayuda oficial menciona producto, transporte, embalaje y servicios opcionales."],["Sin fórmula universal","Las reglas de peso volumétrico cambian según la línea."],["Aduanas variables","Impuestos, aduanas y eventos del transportista dependen del destino."]],
    editorial: [["Primero fuentes oficiales","Las funciones se comprueban con páginas de Kakobuy."],["Experiencias etiquetadas","Trustpilot y Reddit se presentan como casos individuales."],["Guías extensas","Los artículos ingleses tienen 1.200–1.800 palabras por intención."],["Contenido para lectores","No se publican instrucciones internas ni conversaciones."]],
  },
  fr: {
    directory: [["Recherche, pas inventaire","Le répertoire organise des liens actuels; prix, options et disponibilité se vérifient à destination."],["Images correspondantes","Chaque carte utilise l’image liée à sa destination."],["USD indicatif","Les montants USD servent à comparer et ne sont pas définitifs."],["Périmètre indépendant","Aucune commande, paiement, inspection ou expédition n’est traité."]],
    service: [["Agent d’achat","Kakobuy se présente comme agent pour Taobao et 1688."],["Parcours entrepôt","Des achats de vendeurs différents peuvent entrer en entrepôt puis être regroupés."],["100 jours","La page officielle annonce 100 jours de stockage gratuit."],["Retour conditionnel","La garantie de cinq jours dépend du motif, du vendeur, du produit et des preuves."]],
    qc: [["Déclaration officielle","Kakobuy indique suivre des critères d’inspection et prendre des photos à réception."],["Preuve visible","Les photos aident pour l’état et les mesures, sans prouver toute matière ou fonction."],["Décision de l’acheteur","Demandez les angles importants avant l’expédition internationale."],["Conserver les preuves","Gardez annonce, variante et photos décisives."]],
    shipping: [["Estimateur officiel","L’estimation dépend de la destination, du poids, des dimensions et de la ligne."],["Cadre des coûts","L’aide mentionne produit, fret international, emballage et services optionnels."],["Pas de formule universelle","Les règles de poids volumétrique varient selon la ligne."],["Douane variable","Taxes, douane et événements transporteur dépendent de la destination."]],
    editorial: [["Sources officielles d’abord","Les fonctions sont vérifiées sur les pages Kakobuy."],["Expériences signalées","Trustpilot et Reddit sont présentés comme témoignages individuels."],["Guides approfondis","Les articles anglais comptent 1 200 à 1 800 mots par intention."],["Contenu lecteur","Aucune consigne interne ni conversation n’est publiée."]],
  },
  it: {
    directory: [["Ricerca, non inventario","La directory organizza percorsi attuali; prezzo, opzioni e disponibilità si verificano a destinazione."],["Immagini corrispondenti","Ogni scheda usa l’immagine collegata alla destinazione."],["USD indicativo","Gli importi USD aiutano il confronto ma non sono definitivi."],["Ambito indipendente","Non gestisce ordini, pagamenti, controlli o spedizioni."]],
    service: [["Agente d’acquisto","Kakobuy si descrive come agente per Taobao e 1688."],["Flusso magazzino","Prodotti di venditori diversi possono arrivare in magazzino e partire insieme."],["100 giorni","La pagina ufficiale indica 100 giorni di deposito gratuito."],["Reso condizionale","La garanzia di cinque giorni dipende da motivo, venditore, prodotto e prove."]],
    qc: [["Dichiarazione ufficiale","Kakobuy afferma di applicare criteri di ispezione e scattare foto alla ricezione."],["Prova visibile","Le foto aiutano su stato e misure, non provano ogni materiale o funzione."],["Decisione dell’acquirente","Richiedi angoli importanti prima della spedizione internazionale."],["Salvare le prove","Conserva inserzione, variante e foto decisive."]],
    shipping: [["Stimatore ufficiale","La stima dipende da destinazione, peso, dimensioni e linea attuale."],["Quadro costi","L’aiuto ufficiale cita prodotto, trasporto internazionale, imballaggio e servizi opzionali."],["Nessuna formula universale","Le regole del peso volumetrico cambiano per linea."],["Dogana variabile","Tasse, dogana ed eventi del vettore dipendono dalla destinazione."]],
    editorial: [["Prima le fonti ufficiali","Le funzioni sono verificate sulle pagine Kakobuy."],["Esperienze etichettate","Trustpilot e Reddit sono presentati come casi individuali."],["Guide approfondite","Gli articoli inglesi contano 1.200–1.800 parole per intento."],["Contenuto per lettori","Nessuna istruzione interna o conversazione viene pubblicata."]],
  },
};

export function ResearchPage({ section }: { section: SectionKey }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("kv-language") as Lang | null;
    if (saved && copy[saved]) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);
  const t = useMemo(() => copy[lang], [lang]);
  const ui = interfaceText[lang];
  const categories = categoriesByLang[lang];
  const products = productsByLang[lang];
  const articles = articlesByLang[lang];
  const page = pages[lang][section];
  const pageFacts = facts[lang][factGroupBySection[section]];
  const changeLanguage = (value: Lang) => { setLang(value); localStorage.setItem("kv-language", value); document.documentElement.lang = value; };

  const showProducts = section === "spreadsheet" || section === "finds";
  const showArticles = section === "articles";
  const showFaq = section === "faq";

  return <main className={`site-shell inner-shell inner-${section}`}>
    <div className="top-note"><span>{t.note}</span><span>EN · DE · ES · FR · IT</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label={ui.homeAria}><Mark /></Link>
      <nav aria-label={ui.primaryNavigation}>{t.nav.map((item, index) => <Link key={item} href={navHref[index]}>{item}</Link>)}</nav>
      <Select value={lang} onValueChange={(value) => changeLanguage(value as Lang)}><SelectTrigger className="language-select" aria-label={ui.selectLanguage}><SelectValue /></SelectTrigger><SelectContent><SelectItem value="en">EN</SelectItem><SelectItem value="de">DE</SelectItem><SelectItem value="es">ES</SelectItem><SelectItem value="fr">FR</SelectItem><SelectItem value="it">IT</SelectItem></SelectContent></Select>
    </header>
    <section className="inner-hero"><Link href="/" className="back-link"><ArrowLeft size={16}/> {ui.home}</Link><p>{page.eyebrow}</p><h1>{page.title}</h1><div><p>{page.intro}</p><span>{ui.updatedStamp}</span></div></section>
    <section className="inner-content">
      <div className="research-card-grid">{page.cards.map(([title, text], index) => <article key={`${title}-${index}`}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div>
      <aside className="checklist-panel"><small>{ui.quickCheck}</small><h2>{ui.beforeNextStep}</h2>{page.checklist.map(item => <p key={item}><Check size={16}/>{item}</p>)}</aside>
    </section>
    <section className="content-section evidence-section">
      <div className="section-heading"><div><p>{factHeading[lang][0]}</p><h2>{factHeading[lang][1]}</h2></div><p>{evidenceSource[lang]}</p></div>
      <div className="evidence-grid">{pageFacts.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div>
    </section>
    {section === "spreadsheet" && <section className="content-section"><div className="section-heading"><div><p>{ui.catalogRoutes}</p><h2>{t.category[1]}</h2></div></div><div className="category-grid">{categories.map(([name, desc, href], index) => <a key={name} href={href} className="category-card"><span>{String(index + 1).padStart(2,"0")}</span><div><b>{name}</b><small>{desc}</small></div><ArrowUpRight/></a>)}</div></section>}
    {showProducts && <section className="content-section product-section"><div className="section-heading"><div><p>{ui.productRoutes}</p><h2>{t.products[1]}</h2></div><p>{t.products[2]}</p></div><div className="product-grid">{products.map(([name, category, price, image, href], index) => <a key={name} href={href} className="product-card"><div className="product-image"><img src={image} alt={name} width="750" height="750" loading={index < 2 ? "eager" : "lazy"}/><span>{ui.route} {index + 1}</span></div><div className="product-meta"><small>{category}</small><h3>{name}</h3><div><b>{price}</b><span>{t.open}<ArrowUpRight size={16}/></span></div></div></a>)}</div></section>}
    {showArticles && <section className="content-section"><div className="article-grid">{articles.map(([tag,title,text,href],index)=><Link href={href} className={`article-card article-${index+1}`} key={title}><small>{tag} / {ui.longFormGuide}</small><h3>{title}</h3><p>{text}</p><span>{t.read}<ArrowUpRight size={17}/></span></Link>)}</div></section>}
    {showFaq && <section className="content-section faq-section"><div className="faq-grid">{t.faq.map(([question,answer],index)=><article key={question}><span>0{index+1}</span><h3>{question}</h3><p>{answer}</p></article>)}</div></section>}
    <footer><div className="brand"><Mark/></div><p>{t.footer}</p><div><Link href="/spreadsheet">{ui.footerLinks[0]}</Link><Link href="/qc">{ui.footerLinks[1]}</Link><Link href="/shipping">{ui.footerLinks[2]}</Link><Link href="/articles">{ui.footerLinks[3]}</Link></div></footer>
  </main>;
}
