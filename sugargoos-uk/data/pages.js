import { researchedArticles } from "./articles";
import { deArticles } from "./articles-de";
import { esArticles } from "./articles-es";
import { frArticles } from "./articles-fr";
import { itArticles } from "./articles-it";
import { articleChecklists } from "./article-checklists";

const localizedArticles = { en: researchedArticles, de: deArticles, es: esArticles, fr: frArticles, it: itArticles };

export const pageCopy = {
  en: {
    guide: {
      kicker: "START WITH THE WORKFLOW",
      title: "How the Sugargoo route works for a UK buyer.",
      intro: "The spreadsheet helps you discover a source listing. The purchasing, warehouse and parcel stages happen separately, so a good decision at one stage does not remove the checks needed at the next.",
      sections: [
        ["1. Verify the source before paying", "Open the exact listing and confirm the live price, selected colour, size, seller notes and domestic delivery. A catalogue image is a discovery aid, not proof that every option is still available."],
        ["2. Treat warehouse arrival as a new checkpoint", "After the seller dispatches, wait for the item to be received and logged. Sugargoo’s published guidance describes warehouse quality-control photos after arrival. Use those photos to assess the item that was actually sent."],
        ["3. Make the keep, exchange or return decision early", "Look for obvious differences, damage, wrong size labels or missing parts while the order is still inside the applicable return window. Marketplace and seller conditions can limit returns, so check the current order record rather than assuming."],
        ["4. Build the parcel only after the item list is stable", "Consolidation combines several warehouse orders into one international parcel. Grouping can reduce duplicated packaging, but the best parcel size depends on route limits, item type and chargeable weight."],
        ["5. Recheck the UK route at submission", "Use the current shipping estimator with destination, packed weight and dimensions. Prices, restrictions, compensation rules and delivery estimates can change; the live route result is more reliable than an old screenshot or community quote."],
        ["6. Keep evidence until delivery", "Save the order page, warehouse photos, parcel details and tracking number. If a question arises, a clean record of each stage is more useful than a product card saved weeks earlier."]
      ]
    },
    qc: {
      kicker: "QC IS A DECISION, NOT A BADGE",
      title: "Read warehouse photos in a fixed order.",
      intro: "Sugargoo’s published QC guidance says five basic photos are normally provided after an item reaches the warehouse. More photos do not automatically mean a better decision; a repeatable inspection order does.",
      sections: [
        ["Start with identity", "Confirm colour, model, quantity and the option shown on the order. A perfectly photographed wrong variant is still the wrong item."],
        ["Check overall shape", "Compare proportions, symmetry and panel alignment. For clothing, look at how the item lies flat; for shoes, compare the left and right pair."],
        ["Move to construction", "Zoom into seams, edge finishing, hardware, print alignment and visible glue. Separate a cosmetic issue from a structural problem that may affect wear."],
        ["Use measurements when fit matters", "A size label is not a measurement. If the listing chart is unclear or fit is critical, request the specific length, width or insole measurement you need."],
        ["Inspect packaging last", "Boxes and branded packaging can add bulk. Decide whether the protection is useful enough to justify the extra parcel volume, while following the available packing options."],
        ["Record the decision", "Keep screenshots of the photos and the action taken. QC reduces uncertainty before export; it cannot guarantee durability, authenticity or final carrier handling."]
      ]
    },
    shipping: {
      kicker: "PLAN WITH PACKED DATA",
      title: "UK shipping decisions start with chargeable weight.",
      intro: "Actual weight alone may not determine the quote. Some routes compare it with volumetric weight, while route eligibility also depends on item type, dimensions and destination rules.",
      sections: [
        ["Estimate before ordering", "Use a rough product weight to compare likely outcomes, but keep a buffer for packaging. An early estimate is for budget control, not a guaranteed invoice."],
        ["Calculate volumetric weight", "A common formula is length × width × height divided by the route divisor. The divisor is route-specific, so use the value shown for the route rather than assuming one universal number."],
        ["Reduce avoidable volume", "Removing unnecessary outer boxes, folding soft items and choosing suitable protective packing may reduce dimensions. Do not remove protection that the item genuinely needs."],
        ["Compare complete route terms", "Look beyond the headline price: weight limits, restricted-item rules, tracking, compensation, billing increments and estimated transit time all matter."],
        ["Check UK import requirements", "The buyer remains responsible for current UK import rules and truthful declaration information. Use current government and route guidance when the parcel is submitted."],
        ["Expect estimates to move", "Warehouse measurement, repacking and carrier updates can change the final charge. Treat older community prices as context only and confirm the live estimator result."]
      ]
    }
  },
  de: {
    guide: { kicker: "MIT DEM ABLAUF BEGINNEN", title: "So funktioniert der Sugargoo-Weg für UK-Käufer.", intro: "Die Tabelle hilft beim Finden einer Quellseite. Einkauf, Lager und Paket sind getrennte Phasen; jede Phase braucht ihre eigene Prüfung.", sections: [["1. Quelle vor Zahlung prüfen","Live-Preis, Farbe, Größe, Verkäuferhinweise und Inlandslieferung auf der exakten Seite prüfen. Ein Katalogbild beweist keine aktuelle Verfügbarkeit."],["2. Lagereingang als neuen Prüfpunkt sehen","Nach Versand auf Eingang und Erfassung warten. Die veröffentlichten Sugargoo-Hinweise beschreiben QC-Fotos nach der Ankunft; beurteilen Sie damit den tatsächlich gesendeten Artikel."],["3. Behalten, tauschen oder zurückgeben","Offensichtliche Abweichungen, Schäden, falsche Größenetiketten oder fehlende Teile früh prüfen. Rückgaberegeln hängen vom Verkäufer und Marktplatz ab."],["4. Paket erst bei stabiler Artikelliste bauen","Konsolidierung verbindet mehrere Lagerbestellungen. Weniger Doppelverpackung kann helfen, doch die passende Größe hängt von Route, Ware und Abrechnungsgewicht ab."],["5. UK-Route bei Einreichung neu prüfen","Den aktuellen Rechner mit Ziel, Packgewicht und Maßen verwenden. Preis, Grenzen und Laufzeit können sich ändern."],["6. Nachweise bis zur Zustellung behalten","Bestellseite, Lagerfotos, Paketdaten und Tracking sichern. Eine saubere Dokumentation hilft mehr als eine alte Produktkarte."]] },
    qc: { kicker: "QC IST EINE ENTSCHEIDUNG", title: "Lagerfotos immer in derselben Reihenfolge lesen.", intro: "Sugargoos veröffentlichte QC-Hinweise nennen normalerweise fünf Basisfotos nach Lagereingang. Entscheidend ist eine feste Prüfreihenfolge.", sections: [["Mit der Identität beginnen","Farbe, Modell, Menge und bestellte Option prüfen."],["Gesamtform prüfen","Proportionen, Symmetrie und Ausrichtung vergleichen; bei Schuhen beide Seiten nebeneinander."],["Konstruktion ansehen","Nähte, Kanten, Hardware, Druckausrichtung und sichtbaren Kleber vergrößern."],["Maße bei Passform nutzen","Ein Größenetikett ist kein Maß. Bei unklarer Tabelle gezielte Länge oder Breite anfordern."],["Verpackung zuletzt bewerten","Kartons können Volumen erhöhen. Schutzbedarf gegen zusätzliches Packmaß abwägen."],["Entscheidung dokumentieren","Fotos und Aktion sichern. QC reduziert Unsicherheit, garantiert aber weder Haltbarkeit noch Echtheit."]] },
    shipping: { kicker: "MIT PACKDATEN PLANEN", title: "UK-Versand beginnt mit dem Abrechnungsgewicht.", intro: "Nicht immer bestimmt nur das Ist-Gewicht den Preis. Manche Routen vergleichen es mit dem Volumengewicht und haben zusätzliche Waren- und Maßgrenzen.", sections: [["Vor Bestellung schätzen","Grobe Produktgewichte mit Verpackungspuffer zur Budgetplanung nutzen."],["Volumengewicht rechnen","Länge × Breite × Höhe durch den Routendivisor; der Divisor ist nicht universell."],["Vermeidbares Volumen reduzieren","Unnötige Außenkartons entfernen, weiche Ware falten und passenden Schutz wählen."],["Vollständige Bedingungen vergleichen","Grenzen, Sperrgutregeln, Tracking, Entschädigung und Abrechnungsschritte beachten."],["UK-Importpflichten prüfen","Aktuelle Regeln und wahrheitsgemäße Angaben liegen in der Verantwortung des Käufers."],["Bewegliche Schätzungen erwarten","Lagermessung, Umpacken und Carrier-Updates können die Endsumme ändern."]] }
  },
  es: {
    guide: { kicker: "EMPIEZA POR EL PROCESO", title: "Cómo funciona la ruta Sugargoo para un comprador UK.", intro: "La hoja ayuda a descubrir el anuncio. Compra, almacén y paquete son fases distintas y cada una requiere su propia comprobación.", sections: [["1. Verifica la fuente antes de pagar","Confirma precio, color, talla, notas y envío nacional en el anuncio exacto."],["2. Usa la llegada al almacén como nuevo control","Espera a recepción y registro. La guía publicada de Sugargoo describe fotos QC tras la llegada; revisa el artículo realmente enviado."],["3. Decide conservar, cambiar o devolver","Busca diferencias, daños, talla incorrecta o piezas ausentes dentro del plazo aplicable."],["4. Forma el paquete cuando la lista esté estable","La consolidación une pedidos del almacén. Puede reducir embalaje duplicado, pero depende de ruta, artículo y peso facturable."],["5. Revisa la ruta UK al enviar","Usa el estimador actual con destino, peso y medidas. Precio, límites y plazos pueden cambiar."],["6. Conserva las pruebas","Guarda pedido, fotos, datos del paquete y seguimiento hasta la entrega."]] },
    qc: { kicker: "QC ES UNA DECISIÓN", title: "Lee las fotos de almacén en un orden fijo.", intro: "La guía QC publicada por Sugargoo indica normalmente cinco fotos básicas tras la llegada. Un orden repetible mejora la decisión.", sections: [["Empieza por la identidad","Confirma color, modelo, cantidad y opción pedida."],["Revisa la forma general","Compara proporciones, simetría y alineación; en zapatos, izquierdo y derecho."],["Pasa a la construcción","Amplía costuras, bordes, herrajes, impresión y pegamento visible."],["Usa medidas cuando importe el ajuste","Una etiqueta no es una medida; pide longitud o ancho concreto si hace falta."],["Revisa el embalaje al final","Las cajas añaden volumen. Equilibra protección y tamaño."],["Registra la decisión","Guarda capturas y acción. QC reduce incertidumbre, no garantiza durabilidad ni autenticidad."]] },
    shipping: { kicker: "PLANIFICA CON DATOS EMBALADOS", title: "El envío UK comienza con el peso facturable.", intro: "El peso real puede no fijar la tarifa. Algunas rutas lo comparan con el volumétrico y aplican límites de artículo y tamaño.", sections: [["Estima antes de comprar","Usa pesos aproximados y margen de embalaje para controlar presupuesto."],["Calcula el peso volumétrico","Largo × ancho × alto dividido por el divisor de la ruta; no existe un divisor universal."],["Reduce volumen evitable","Retira cajas innecesarias, dobla prendas y conserva la protección útil."],["Compara las condiciones completas","Límites, restricciones, seguimiento, compensación, escalones y tiempo importan."],["Comprueba requisitos UK","El comprador responde de las normas vigentes y una declaración veraz."],["Acepta cambios en la estimación","Medición, reembalaje y actualizaciones del transportista pueden cambiar la cifra final."]] }
  },
  fr: {
    guide: { kicker: "COMMENCER PAR LE PARCOURS", title: "Le parcours Sugargoo pour un acheteur UK.", intro: "Le tableur aide à trouver une fiche source. Achat, entrepôt et colis sont des étapes distinctes qui demandent chacune un contrôle.", sections: [["1. Vérifier la source avant paiement","Confirmer prix, couleur, taille, notes vendeur et livraison locale sur la fiche exacte."],["2. Faire de l’arrivée entrepôt un nouveau contrôle","Attendre réception et enregistrement. Les conseils publiés par Sugargoo décrivent des photos QC après arrivée : jugez l’article réellement envoyé."],["3. Décider garder, échanger ou retourner","Chercher différences, dégâts, mauvaise taille ou pièces manquantes pendant la fenêtre applicable."],["4. Former le colis quand la liste est stable","La consolidation réunit plusieurs commandes. Elle peut réduire l’emballage doublé, mais dépend de la route, du produit et du poids facturable."],["5. Revérifier la route UK à la soumission","Utiliser l’estimateur actuel avec destination, poids et dimensions. Prix et limites peuvent changer."],["6. Garder les preuves","Conserver commande, photos, données colis et suivi jusqu’à livraison."]] },
    qc: { kicker: "LE QC EST UNE DÉCISION", title: "Lire les photos d’entrepôt dans un ordre fixe.", intro: "Le guide QC publié par Sugargoo indique normalement cinq photos de base après l’arrivée. Une méthode répétable est plus utile qu’un grand nombre d’images.", sections: [["Commencer par l’identité","Confirmer couleur, modèle, quantité et option commandée."],["Contrôler la forme générale","Comparer proportions, symétrie et alignement; pour les chaussures, gauche et droite."],["Observer la construction","Zoomer sur coutures, bords, quincaillerie, imprimé et colle visible."],["Mesurer si la coupe compte","Une étiquette n’est pas une mesure; demander longueur ou largeur précise si nécessaire."],["Finir par l’emballage","Les boîtes ajoutent du volume. Équilibrer protection et dimensions."],["Documenter la décision","Garder photos et action. Le QC réduit l’incertitude sans garantir durabilité ou authenticité."]] },
    shipping: { kicker: "PLANIFIER AVEC LES DONNÉES EMBALLÉES", title: "L’expédition UK commence par le poids facturable.", intro: "Le poids réel ne fixe pas toujours le prix. Certaines routes le comparent au poids volumétrique et appliquent des limites supplémentaires.", sections: [["Estimer avant achat","Utiliser un poids approximatif avec marge d’emballage pour le budget."],["Calculer le poids volumétrique","Longueur × largeur × hauteur divisé par le diviseur de la route; il n’est pas universel."],["Réduire le volume évitable","Retirer les boîtes inutiles, plier le textile et garder la protection nécessaire."],["Comparer toutes les conditions","Limites, restrictions, suivi, compensation, paliers et délai comptent."],["Vérifier les obligations UK","L’acheteur reste responsable des règles actuelles et d’une déclaration exacte."],["Prévoir des changements","Mesure entrepôt, reconditionnement et mises à jour transporteur peuvent modifier le total."]] }
  },
  it: {
    guide: { kicker: "PARTI DAL FLUSSO", title: "Come funziona il percorso Sugargoo per un acquirente UK.", intro: "Il foglio aiuta a trovare la scheda sorgente. Acquisto, magazzino e pacco sono fasi separate e ognuna richiede un controllo.", sections: [["1. Verifica la fonte prima di pagare","Conferma prezzo, colore, taglia, note e consegna interna sulla scheda esatta."],["2. Usa l’arrivo in magazzino come nuovo controllo","Attendi ricezione e registrazione. Le indicazioni pubblicate da Sugargoo descrivono foto QC dopo l’arrivo: valuta l’articolo davvero inviato."],["3. Decidi se tenere, cambiare o restituire","Cerca differenze, danni, taglia errata o parti mancanti entro la finestra applicabile."],["4. Crea il pacco quando la lista è stabile","Il consolidamento unisce più ordini. Può ridurre imballaggi doppi, ma dipende da rotta, articolo e peso fatturabile."],["5. Ricontrolla la rotta UK all’invio","Usa lo stimatore attuale con destinazione, peso e misure. Prezzo e limiti possono cambiare."],["6. Conserva le prove","Salva ordine, foto, dati pacco e tracking fino alla consegna."]] },
    qc: { kicker: "IL QC È UNA DECISIONE", title: "Leggi le foto di magazzino in un ordine fisso.", intro: "La guida QC pubblicata da Sugargoo indica normalmente cinque foto di base dopo l’arrivo. Un metodo ripetibile migliora la decisione.", sections: [["Inizia dall’identità","Conferma colore, modello, quantità e opzione ordinata."],["Controlla la forma generale","Confronta proporzioni, simmetria e allineamento; per le scarpe, sinistra e destra."],["Passa alla costruzione","Ingrandisci cuciture, bordi, hardware, stampa e colla visibile."],["Usa le misure per la vestibilità","Un’etichetta non è una misura; chiedi lunghezza o larghezza specifica."],["Controlla l’imballaggio alla fine","Le scatole aumentano il volume. Bilancia protezione e dimensioni."],["Registra la decisione","Salva foto e azione. Il QC riduce l’incertezza, non garantisce durata o autenticità."]] },
    shipping: { kicker: "PIANIFICA CON DATI IMBALLATI", title: "La spedizione UK parte dal peso fatturabile.", intro: "Il peso reale potrebbe non fissare il prezzo. Alcune rotte lo confrontano con il peso volumetrico e applicano limiti di merce e dimensioni.", sections: [["Stima prima di acquistare","Usa pesi indicativi e margine d’imballaggio per controllare il budget."],["Calcola il peso volumetrico","Lunghezza × larghezza × altezza diviso per il divisore della rotta; non è universale."],["Riduci il volume evitabile","Rimuovi scatole inutili, piega i capi e conserva la protezione necessaria."],["Confronta le condizioni complete","Limiti, restrizioni, tracking, compensazione, scaglioni e tempi contano."],["Controlla gli obblighi UK","L’acquirente resta responsabile delle regole attuali e di una dichiarazione veritiera."],["Prevedi variazioni","Misurazione, reimballaggio e aggiornamenti del vettore possono cambiare il totale."]] }
  }
};

export const pageFacts = {
  en: {
    guide: ["5 basic QC photos normally provided", "100 days for purchasing orders; 30 days for resell orders", "Consolidation combines warehouse orders", "Live order and route terms take priority"],
    qc: ["Five basic photos normally provided", "Measurements may need a targeted request", "QC covers visible evidence only", "Returns depend on order stage and seller terms"],
    shipping: ["Packed dimensions affect route estimates", "No universal volumetric divisor", "Consolidation is optional, not automatically cheaper", "Prices and delivery estimates can change"]
  },
  de: {
    guide: ["Normalerweise 5 QC-Basisfotos", "100 Tage für Einkaufs-, 30 Tage für Resell-Bestellungen", "Konsolidierung verbindet Lagerbestellungen", "Live-Bestell- und Routenbedingungen sind maßgeblich"],
    qc: ["Normalerweise fünf Basisfotos", "Maße können ein gezieltes Foto erfordern", "QC bewertet nur sichtbare Belege", "Rückgabe hängt von Phase und Verkäufer ab"],
    shipping: ["Packmaße beeinflussen die Schätzung", "Kein universeller Volumendivisor", "Konsolidierung ist nicht automatisch günstiger", "Preise und Laufzeiten können sich ändern"]
  },
  es: {
    guide: ["Normalmente 5 fotos QC básicas", "100 días para compras; 30 días para pedidos de reventa", "La consolidación une pedidos de almacén", "Mandan las condiciones actuales del pedido y la ruta"],
    qc: ["Normalmente cinco fotos básicas", "Las medidas pueden requerir una foto específica", "QC solo cubre pruebas visibles", "La devolución depende de la fase y del vendedor"],
    shipping: ["Las medidas embaladas afectan a la estimación", "No existe un divisor volumétrico universal", "Consolidar no siempre sale más barato", "Precios y plazos pueden cambiar"]
  },
  fr: {
    guide: ["Normalement 5 photos QC de base", "100 jours pour les achats; 30 jours pour la revente", "La consolidation réunit les commandes en entrepôt", "Les conditions actives de commande et de route priment"],
    qc: ["Normalement cinq photos de base", "Une mesure peut exiger une photo ciblée", "Le QC couvre uniquement les preuves visibles", "Le retour dépend de l’étape et du vendeur"],
    shipping: ["Les dimensions emballées influencent l’estimation", "Aucun diviseur volumétrique universel", "Consolider n’est pas toujours moins cher", "Prix et délais peuvent changer"]
  },
  it: {
    guide: ["Normalmente 5 foto QC di base", "100 giorni per acquisti; 30 giorni per ordini di rivendita", "Il consolidamento unisce gli ordini in magazzino", "Prevalgono i termini attuali di ordine e rotta"],
    qc: ["Normalmente cinque foto di base", "Le misure possono richiedere una foto mirata", "Il QC copre solo prove visibili", "Il reso dipende dalla fase e dal venditore"],
    shipping: ["Le misure imballate influenzano la stima", "Nessun divisore volumetrico universale", "Consolidare non è sempre più economico", "Prezzi e tempi possono cambiare"]
  }
};

const shared = {
  en: {
    opening: "A useful spreadsheet should shorten the research loop without pretending to replace it. The pages below are organised around the evidence available at each stage: the live product listing before purchase, warehouse photos after receipt and packed parcel data before international submission.",
    close: "The practical rule is simple: use the newest evidence. A live listing outranks an old card, warehouse photos outrank seller marketing images and the current route calculator outranks a remembered shipping quote. That hierarchy keeps the guide useful even when products and logistics change."
  },
  de: {
    opening: "Eine nützliche Tabelle verkürzt die Recherche, ersetzt sie aber nicht. Entscheidend sind die jeweils neuesten Belege: Live-Angebot vor dem Kauf, Lagerfotos nach Eingang und Packdaten vor dem internationalen Versand.",
    close: "Die Regel ist einfach: immer die neuesten Belege nutzen. Live-Angebot vor alter Karte, Lagerfoto vor Verkäuferwerbung und aktueller Routenrechner vor einer gemerkten Versandzahl."
  },
  es: {
    opening: "Una hoja útil acorta la investigación sin sustituirla. Las pruebas cambian por fase: anuncio actual antes de comprar, fotos de almacén tras la recepción y datos embalados antes del envío internacional.",
    close: "La regla práctica es usar la prueba más reciente: anuncio vivo antes que tarjeta antigua, fotos de almacén antes que marketing y calculadora actual antes que una tarifa recordada."
  },
  fr: {
    opening: "Un bon tableur raccourcit la recherche sans la remplacer. Les preuves utiles changent selon l’étape : fiche actuelle avant achat, photos d’entrepôt après réception et données emballées avant l’envoi international.",
    close: "La règle est simple : utiliser la preuve la plus récente. Fiche active avant ancienne carte, photos d’entrepôt avant marketing vendeur et calculateur actuel avant ancien tarif."
  },
  it: {
    opening: "Un buon foglio abbrevia la ricerca senza sostituirla. Le prove cambiano per fase: scheda aggiornata prima dell’acquisto, foto di magazzino dopo la ricezione e dati imballati prima della spedizione internazionale.",
    close: "La regola è usare la prova più recente: scheda attiva prima di una vecchia card, foto di magazzino prima del marketing e calcolatore attuale prima di una tariffa ricordata."
  }
};

export function articleBody(lang, slug) {
  const key = slug === "how-to-read-qc-photos" ? "qc" : slug === "reduce-volumetric-weight" ? "shipping" : "guide";
  if (localizedArticles[lang]?.[slug]) {
    return { ...localizedArticles[lang][slug], checklist: articleChecklists[lang]?.[slug] };
  }
  const copy = pageCopy[lang] || pageCopy.en;
  return {
    opening: shared[lang]?.opening || shared.en.opening,
    sourceNote: `${copy[key].intro} · Research checked 2 September 2026.`,
    takeaways: pageFacts[lang]?.[key] || pageFacts.en[key],
    sections: copy[key].sections.map(([title, text]) => ({ title, paragraphs: [text] })),
    close: shared[lang]?.close || shared.en.close
  };
}
