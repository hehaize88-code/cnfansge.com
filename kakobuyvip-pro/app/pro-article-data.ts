import type { Locale, PageKey } from "./site-data";
import { decisions, proHome, type DecisionKey } from "./pro-data";

export type ProArticleKey = Extract<PageKey, "qcArticle" | "shippingArticle" | "storageArticle">;
export type ProArticle = {
  title: string;
  tag: string;
  lede: string;
  read: string;
  reviewed: string;
  sections: Array<[string, string[]]>;
  sources: Array<{label:string;url:string}>;
};

const pairs: Record<ProArticleKey, [DecisionKey, DecisionKey]> = {
  shippingArticle: ["calculator", "shippingLines"],
  storageArticle: ["packing", "warehouse"],
  qcArticle: ["returns", "qcTroubleshooting"],
};

const meta: Record<Locale, Record<ProArticleKey, Pick<ProArticle,"title"|"tag"|"lede"|"read"|"reviewed">>> = {
  en: {
    shippingArticle:{title:"Kakobuy Shipping Calculator Guide 2026: Weight, Fees and Final Parcel Cost",tag:"Shipping Calculator",lede:"A fact-checked method for using Kakobuy’s official estimator, separating estimated inputs from final parcel measurements and comparing live routes before payment.",read:"15 min guide",reviewed:"Official sources reviewed 31 Aug 2026"},
    storageArticle:{title:"Kakobuy Warehouse Status & 100-Day Storage Guide 2026",tag:"Warehouse & Storage",lede:"How to read seller-to-warehouse stages, inspect visible intake evidence, consolidate compatible items and use the advertised 100-day storage window without confusing it with seller after-sales time.",read:"14 min guide",reviewed:"Official sources reviewed 31 Aug 2026"},
    qcArticle:{title:"Kakobuy Returns, 5-Day Exchange & QC Photo Guide 2026",tag:"Returns & QC Photos",lede:"A practical evidence workflow for separating a visible product mismatch from a missing angle, display problem, seller-backed return or post-delivery parcel claim.",read:"14 min guide",reviewed:"Official sources reviewed 31 Aug 2026"},
  },
  de: {
    shippingArticle:{title:"Kakobuy Versandkalkulator 2026: Methode für reale Kostenplanung",tag:"Kalkulator-Methode",lede:"So nutzen Sie den offiziellen Rechner, trennen Ist- und Volumengewicht, vergleichen geeignete Linien und sichern den Live-Regelstand vor der Paketzahlung.",read:"15-Minuten-Leitfaden",reviewed:"Offizielle Quellen geprüft am 31. Aug. 2026"},
    storageArticle:{title:"Kakobuy Paketverpackung & Lagerstatus 2026",tag:"Verpackung & Lager",lede:"Kompatible Artikel konsolidieren, Packmaße modellieren, Lagerstufen lesen und die beworbene Lagerzeit nicht mit After-Sales verwechseln.",read:"14-Minuten-Leitfaden",reviewed:"Offizielle Quellen geprüft am 31. Aug. 2026"},
    qcArticle:{title:"Kakobuy Rückgaben und QC-Foto-Fehlerbehebung 2026",tag:"Rückgabe & QC",lede:"Ein Belegablauf, der sichtbare Abweichung, fehlenden Winkel, Anzeigeproblem und Verkäufer-After-Sales sauber trennt.",read:"14-Minuten-Leitfaden",reviewed:"Offizielle Quellen geprüft am 31. Aug. 2026"},
  },
  es: {
    shippingArticle:{title:"Calculadora de envío Kakobuy 2026: método de coste real",tag:"Método de cálculo",lede:"Cómo usar el estimador oficial, separar peso real y volumétrico, comparar líneas elegibles y guardar las reglas vigentes antes del pago.",read:"Guía de 15 minutos",reviewed:"Fuentes oficiales revisadas el 31 ago 2026"},
    storageArticle:{title:"Embalaje y estado de almacén Kakobuy 2026",tag:"Embalaje y almacén",lede:"Cómo consolidar artículos compatibles, modelar dimensiones, leer estados y no confundir almacenamiento con el plazo posventa del vendedor.",read:"Guía de 14 minutos",reviewed:"Fuentes oficiales revisadas el 31 ago 2026"},
    qcArticle:{title:"Devoluciones y problemas con fotos QC Kakobuy 2026",tag:"Devoluciones y QC",lede:"Flujo de pruebas para separar una diferencia visible, un ángulo ausente, un fallo de pantalla o una solicitud posventa.",read:"Guía de 14 minutos",reviewed:"Fuentes oficiales revisadas el 31 ago 2026"},
  },
  fr: {
    shippingArticle:{title:"Calculateur d’expédition Kakobuy 2026 : méthode de coût réel",tag:"Méthode de calcul",lede:"Utiliser l’estimateur officiel, séparer poids réel et volumétrique, comparer les lignes éligibles et conserver les règles en vigueur avant paiement.",read:"Guide de 15 minutes",reviewed:"Sources officielles vérifiées le 31 août 2026"},
    storageArticle:{title:"Emballage et statut d’entrepôt Kakobuy 2026",tag:"Emballage & entrepôt",lede:"Regrouper les articles compatibles, modéliser les dimensions, lire les statuts et distinguer stockage et délai après-vente vendeur.",read:"Guide de 14 minutes",reviewed:"Sources officielles vérifiées le 31 août 2026"},
    qcArticle:{title:"Retours et dépannage des photos QC Kakobuy 2026",tag:"Retours & QC",lede:"Une méthode de preuve pour distinguer écart visible, angle manquant, problème d’affichage et demande après-vente.",read:"Guide de 14 minutes",reviewed:"Sources officielles vérifiées le 31 août 2026"},
  },
  it: {
    shippingArticle:{title:"Calcolatore spedizione Kakobuy 2026: metodo di costo reale",tag:"Metodo di calcolo",lede:"Usare lo stimatore ufficiale, separare peso reale e volumetrico, confrontare linee idonee e salvare le regole live prima del pagamento.",read:"Guida di 15 minuti",reviewed:"Fonti ufficiali verificate il 31 ago 2026"},
    storageArticle:{title:"Imballaggio e stato magazzino Kakobuy 2026",tag:"Imballaggio & magazzino",lede:"Consolidare articoli compatibili, simulare dimensioni, leggere gli stati e distinguere deposito e termini post-vendita.",read:"Guida di 14 minuti",reviewed:"Fonti ufficiali verificate il 31 ago 2026"},
    qcArticle:{title:"Resi e risoluzione problemi foto QC Kakobuy 2026",tag:"Resi & QC",lede:"Un metodo basato su prove per separare difetto visibile, angolo mancante, problema di visualizzazione e richiesta post-vendita.",read:"Guida di 14 minuti",reviewed:"Fonti ufficiali verificate il 31 ago 2026"},
  },
};

const notes: Record<Locale, Array<[string,string,string]>> = {
  en: [
    ["Start from the current official interface, not an old screenshot or a social-media total. Record destination, item class and date so the number has usable context.","Build a low, expected and high scenario. The expected case should use realistic packed inputs; the high case protects the budget from rounding, packaging and route changes.","Keep the evidence with the parcel record. A dated screenshot is useful for comparison, but the live checkout remains authoritative when payment is made."],
    ["Define each variable before comparing outcomes. Weight without dimensions is incomplete when a route can charge for occupied space, and dimensions without packaging assumptions are equally weak.","Test one variable at a time so the reason for a change remains visible. If route, carton size and product mix all change together, the cheapest result teaches very little.","Reject false precision. A planning range communicates uncertainty honestly and is more useful than repeating a single amount that may disappear at the next refresh."],
    ["Read eligibility before price. A cheap route that cannot carry the item, value or destination is not an option and should not anchor the comparison.","Check billing units, rounding, tracking and compensation alongside the headline estimate. Small rule differences can matter more than a minor initial price gap.","Write down the selected line name exactly. Marketing labels and operational routes can change, so a dated record prevents later confusion."],
    ["Treat packaging as part of the shipping input. Retail boxes, supports, reinforcement and empty space can change dimensions even when the products stay the same.","Balance protection against volume item by item. Removing every box is not a method; it is an assumption that may create damage or remove useful identifiers.","Confirm warehouse measurements after packing. Early product weights help planning, but the completed parcel is the decision object the carrier will bill."],
    ["Separate the four clocks: seller dispatch, warehouse intake, seller after-sales and storage. They start at different moments and should never be merged into one countdown.","Act quickly on decision-critical QC evidence even when the advertised storage window is long. Waiting to consolidate does not extend a seller’s return eligibility.","Use a personal deadline before the published storage limit. It creates room for repacking, support and a final route comparison without rewriting the official rule."],
    ["Describe the observable problem, its location and the ordered option. Evidence-based language gives support a specific question instead of a vague quality complaint.","A missing image is not approval and is not automatically a product defect. Request the exact angle or measurement that could change the accept-or-return decision.","Do not submit an international parcel while a relevant warehouse after-sales request remains open. Dispatch can change what remedies are practical or available."],
    ["Calculate the remedy, not only the refund. Domestic return transport, replacement shipping, service costs and waiting time may all affect the sensible option.","Check whether the seller and item support the advertised service before ordering. A platform label should not be turned into a universal free-return promise.","Preserve order options, QC images, messages and dates. The resulting evidence trail is more reliable than memory and easier to explain if the status changes."],
    ["Finish with a release checklist covering identity, address, contents, packaging, measurements, line, declaration and open after-sales cases.","Pause when a missing fact could materially change cost or eligibility. Continue when the remaining uncertainty is known, documented and acceptable for the order.","Recheck the official source on the payment date. A good guide explains the method; it does not freeze a variable platform rule into a permanent claim."],
  ],
  de: [
    ["Beginnen Sie in der aktuellen offiziellen Oberfläche und notieren Sie Ziel, Artikelklasse und Datum.","Erstellen Sie ein niedriges, erwartetes und hohes Szenario; das hohe schützt vor Rundung, Verpackung und Linienänderungen.","Bewahren Sie den datierten Nachweis beim Paketdatensatz auf; bei Zahlung bleibt die Live-Anzeige maßgeblich."],
    ["Definieren Sie jede Variable. Gewicht ohne Maße und Maße ohne Verpackungsannahme sind unvollständig.","Ändern Sie jeweils nur eine Variable, damit die Ursache eines Preisunterschieds sichtbar bleibt.","Vermeiden Sie Scheingenauigkeit: Ein Planungsbereich ist ehrlicher als eine einzelne, veränderliche Zahl."],
    ["Eignung kommt vor Preis. Eine nicht zulässige Linie ist keine echte Vergleichsoption.","Prüfen Sie Rundung, Tracking und Entschädigung zusammen mit dem Schätzwert.","Speichern Sie den exakten Liniennamen und das Datum, weil operative Bezeichnungen wechseln können."],
    ["Verpackung gehört zur Versandberechnung. Kartons, Stützen und Leerraum verändern die Maße.","Schutz und Volumen artikelweise abwägen; pauschales Entfernen aller Kartons ist keine Methode.","Nach dem Packen die Lagermaße bestätigen, denn das fertige Paket wird abgerechnet."],
    ["Trennen Sie Verkäufertransport, Lagereingang, After-Sales und Lagerzeit als vier Uhren.","Entscheidende QC-Belege sofort prüfen; Lagerzeit verlängert keine Verkäuferfrist.","Setzen Sie eine persönliche Frist vor dem offiziellen Limit für Support, Umpacken und Linienvergleich."],
    ["Beschreiben Sie Problem, Ort und bestellte Option konkret.","Ein fehlendes Bild ist weder Zustimmung noch automatisch ein Produktfehler; fordern Sie den entscheidenden Winkel an.","Kein internationales Paket einreichen, solange ein relevanter After-Sales-Fall offen ist."],
    ["Berechnen Sie die Lösung inklusive Rücktransport, Ersatzversand, Servicekosten und Wartezeit.","Verkäufer- und Artikeleignung vor der Bestellung prüfen; das Serviceetikett ist keine universelle Gratis-Rückgabe.","Optionen, QC-Bilder, Nachrichten und Daten als Nachweiskette sichern."],
    ["Mit einer Freigabe-Checkliste zu Identität, Adresse, Inhalt, Verpackung, Maßen, Linie und offenen Fällen abschließen.","Pausieren, wenn ein fehlender Fakt Kosten oder Eignung wesentlich ändern kann.","Offizielle Quelle am Zahlungstag erneut prüfen; ein Leitfaden erklärt die Methode statt Regeln einzufrieren."],
  ],
  es: [
    ["Empieza en la interfaz oficial actual y registra destino, categoría y fecha.","Crea escenarios bajo, esperado y alto; el alto protege frente a redondeo, embalaje y cambios de ruta.","Guarda la prueba fechada con el paquete; al pagar manda la pantalla en vivo."],
    ["Define cada variable. Peso sin medidas y medidas sin hipótesis de embalaje son datos incompletos.","Cambia una variable cada vez para identificar el motivo de la diferencia.","Evita la falsa precisión: un rango es más honesto que una cifra cambiante."],
    ["La elegibilidad va antes que el precio. Una ruta que no admite el artículo no es una opción real.","Revisa redondeo, seguimiento y compensación junto con la estimación.","Guarda el nombre exacto de la línea y la fecha porque la operación puede cambiar."],
    ["El embalaje forma parte del cálculo. Cajas, soportes y espacio vacío cambian las dimensiones.","Equilibra protección y volumen por artículo; quitar todas las cajas no es un método universal.","Confirma las medidas del almacén después de embalar, pues se factura el paquete final."],
    ["Separa envío del vendedor, entrada, posventa y almacenamiento como cuatro relojes.","Revisa pronto la evidencia QC; un plazo largo de almacén no amplía la devolución del vendedor.","Fija una fecha personal anterior al límite para soporte, reembalaje y comparación final."],
    ["Describe problema, lugar y opción pedida con precisión.","Una foto ausente no es aprobación ni defecto automático; solicita el ángulo que cambia la decisión.","No envíes internacionalmente mientras exista una posventa relevante abierta."],
    ["Calcula la solución completa: devolución nacional, reenvío, servicios y espera.","Comprueba vendedor y artículo antes de pedir; la etiqueta del servicio no promete devolución gratuita universal.","Conserva opciones, fotos, mensajes y fechas como cadena de evidencia."],
    ["Termina con una lista de identidad, dirección, contenido, embalaje, medidas, línea y casos abiertos.","Pausa si falta un dato que puede cambiar coste o elegibilidad.","Revisa la fuente oficial el día del pago; una buena guía explica el método, no congela reglas variables."],
  ],
  fr: [
    ["Commencez dans l’interface officielle actuelle et notez destination, catégorie et date.","Créez des scénarios bas, attendu et haut ; le haut couvre arrondis, emballage et changements de ligne.","Gardez la preuve datée avec le colis ; au paiement, l’écran en direct fait foi."],
    ["Définissez chaque variable. Poids sans dimensions et dimensions sans hypothèse d’emballage restent incomplets.","Ne changez qu’une variable à la fois afin d’identifier la cause d’un écart.","Évitez la fausse précision : une fourchette est plus honnête qu’un montant variable unique."],
    ["L’éligibilité précède le prix. Une ligne incompatible n’est pas une option réelle.","Vérifiez arrondis, suivi et indemnisation avec l’estimation.","Conservez le nom exact de la ligne et la date car l’exploitation peut changer."],
    ["L’emballage fait partie du calcul. Boîtes, supports et vide modifient les dimensions.","Équilibrez protection et volume article par article ; tout retirer n’est pas une méthode universelle.","Confirmez les mesures d’entrepôt après emballage, car le colis final est facturé."],
    ["Séparez transport vendeur, réception, après-vente et stockage comme quatre horloges.","Contrôlez vite la preuve QC ; un stockage long ne prolonge pas le retour vendeur.","Fixez une échéance personnelle avant la limite pour support, réemballage et comparaison finale."],
    ["Décrivez précisément problème, emplacement et option commandée.","Une image absente n’est ni validation ni défaut automatique ; demandez l’angle décisif.","N’expédiez pas à l’international tant qu’un dossier après-vente pertinent reste ouvert."],
    ["Calculez la solution complète : retour local, réexpédition, services et attente.","Vérifiez vendeur et article avant achat ; le label de service ne promet pas un retour gratuit universel.","Conservez options, photos, messages et dates comme chaîne de preuves."],
    ["Terminez par identité, adresse, contenu, emballage, mesures, ligne et dossiers ouverts.","Mettez en pause si une information peut changer coût ou éligibilité.","Revérifiez la source officielle le jour du paiement ; un bon guide explique la méthode sans figer les règles."],
  ],
  it: [
    ["Parti dall’interfaccia ufficiale attuale e registra destinazione, categoria e data.","Crea scenari basso, atteso e alto; quello alto copre arrotondamenti, imballaggio e cambi di linea.","Conserva la prova datata con il pacco; al pagamento fa fede la schermata live."],
    ["Definisci ogni variabile. Peso senza misure e misure senza ipotesi di confezione sono incompleti.","Cambia una variabile per volta per capire la causa della differenza.","Evita falsa precisione: un intervallo è più onesto di una singola cifra variabile."],
    ["L’idoneità viene prima del prezzo. Una linea incompatibile non è un’opzione reale.","Controlla arrotondamento, tracking e compensazione insieme alla stima.","Salva nome esatto della linea e data perché l’operatività può cambiare."],
    ["L’imballaggio fa parte del calcolo. Scatole, supporti e vuoti cambiano le dimensioni.","Bilancia protezione e volume articolo per articolo; rimuovere tutto non è un metodo universale.","Conferma le misure di magazzino dopo il confezionamento, perché conta il pacco finale."],
    ["Separa spedizione venditore, ricezione, post-vendita e deposito come quattro orologi.","Controlla presto le prove QC; un deposito lungo non estende il reso del venditore.","Fissa una scadenza personale prima del limite per supporto, riconfezionamento e confronto finale."],
    ["Descrivi problema, posizione e opzione ordinata con precisione.","Un’immagine mancante non è approvazione né difetto automatico; chiedi l’angolo decisivo.","Non spedire all’estero finché resta aperto un caso post-vendita rilevante."],
    ["Calcola la soluzione completa: reso interno, nuova spedizione, servizi e attesa.","Controlla venditore e articolo prima dell’acquisto; il servizio non promette reso gratuito universale.","Conserva opzioni, foto, messaggi e date come catena di prove."],
    ["Chiudi con identità, indirizzo, contenuto, imballaggio, misure, linea e casi aperti.","Fermati se manca un dato che può cambiare costo o idoneità.","Ricontrolla la fonte ufficiale il giorno del pagamento; una buona guida spiega il metodo senza congelare le regole."],
  ],
};

const sourceMap: Record<ProArticleKey, ProArticle["sources"]> = {
  shippingArticle:[
    {label:"Kakobuy Shipping Fee Estimation",url:"https://www.kakobuy.com/tools/estimate"},
    {label:"Kakobuy Services & Fees",url:"https://www.kakobuy.com/service/help/question?id=63"},
    {label:"Kakobuy total-cost help",url:"https://www.kakobuy.com/service/help/question?cid=35&id=74"},
  ],
  storageArticle:[
    {label:"Kakobuy service introduction — 100-day storage",url:"https://www.kakobuy.com/index/information?information_id=3"},
    {label:"Kakobuy Beginner’s Guide",url:"https://www.kakobuy.com/index/information?information_id=12"},
    {label:"Kakobuy Package Photograph help",url:"https://www.kakobuy.com/service/help/question?cid=75&id=118"},
  ],
  qcArticle:[
    {label:"Kakobuy 5-Day Return/Exchange Guarantee",url:"https://www.kakobuy.com/service/help/question?id=51"},
    {label:"Kakobuy QC Image Notice, 10 May 2026",url:"https://www.kakobuy.com/tipdetail?id=49"},
    {label:"Kakobuy warehouse inspection limits",url:"https://www.kakobuy.com/service/help/question?cid=35&id=48"},
    {label:"Kakobuy abnormal-parcel receipt help",url:"https://www.kakobuy.com/service/help/question?id=54"},
  ],
};

const verification: Record<Locale,string> = {
  en:"Before moving on, record the input, the observed result, the check date and the decision it supports. This small audit note prevents a temporary platform value from being repeated later without destination, parcel or order context.",
  de:"Vor dem nächsten Schritt Eingabe, beobachtetes Ergebnis, Prüfdatum und unterstützte Entscheidung notieren. Dieser kurze Prüfvermerk verhindert, dass ein vorübergehender Plattformwert später ohne Ziel-, Paket- oder Bestellkontext wiederholt wird.",
  es:"Antes de continuar, registra la entrada, el resultado observado, la fecha y la decisión que respalda. Esta breve nota evita que un valor temporal se repita después sin contexto de destino, paquete o pedido.",
  fr:"Avant de continuer, notez l’entrée, le résultat observé, la date et la décision soutenue. Cette courte trace évite qu’une valeur temporaire soit ensuite répétée sans contexte de destination, colis ou commande.",
  it:"Prima di continuare, registra input, risultato osservato, data e decisione supportata. Questa breve nota impedisce che un valore temporaneo venga ripetuto in seguito senza contesto di destinazione, pacco o ordine.",
};

function build(locale: Locale, key: ProArticleKey): ProArticle {
  const m=meta[locale][key];
  const [a,b]=pairs[key];
  const steps=[...decisions[locale][a].steps,...decisions[locale][b].steps];
  const sections=steps.map(([title,body],index):[string,string[]]=>{
    const [n1,n2,n3]=notes[locale][index];
    const decision=index<4?decisions[locale][a]:decisions[locale][b];
    return [title,[`${body} ${n1}`,`${decision.description} ${n2} ${decision.caution}`,`${n3} ${decision.source}. ${proHome[locale].liveNote}`,`${verification[locale]} ${title}.`]];
  });
  return {...m,sections,sources:sourceMap[key]};
}

export const proArticleData = Object.fromEntries(
  (["en","de","es","fr","it"] as Locale[]).map(locale=>[
    locale,
    Object.fromEntries((Object.keys(pairs) as ProArticleKey[]).map(key=>[key,build(locale,key)])),
  ]),
) as Record<Locale,Record<ProArticleKey,ProArticle>>;
