import type { Locale } from "@/lib/site-data";
import type { PageSlug } from "@/lib/page-content";

export const pageSectionExpansions: Record<Exclude<Locale, "en">, Partial<Record<PageSlug, string[]>>> = {
  de: {
    spreadsheet: [
      " Kontrolliere zusätzlich Titel, Varianten, Verkäufer und Datum. Ein erreichbarer Link kann später umgeleitet werden oder eine andere Option zeigen; beim erneuten Öffnen beginnt die Zielprüfung deshalb neu.",
      " Der hervorgehobene Startpreis kann zur günstigsten Variante gehören. Notiere deshalb den Preis erst nach Auswahl der gewünschten Größe, Farbe oder Version und trenne ihn von Versand- und Servicekosten.",
      " Halte Angebotsbild, genaue Bestelloption und spätere Lagerfotos in getrennten Datensätzen. So bleibt nachvollziehbar, welche Quelle welche Aussage tatsächlich stützt."
    ],
    finds: [
      " Schreibe vor dem Vergleich zwei oder drei sichtbare Pflichtmerkmale auf. Dadurch wird die Auswahl reproduzierbar und ein populäres Bild ersetzt weder den Einsatzzweck noch das Budget.",
      " Verkäuferbilder können bearbeitet sein; Lagerlicht und Kamerawinkel können ebenfalls abweichen. Vergleiche mehrere Ansichten und fordere nur dann ein Zusatzbild an, wenn es eine konkrete Entscheidung ermöglicht.",
      " Prüfe auch Inlandsversand und Optionsstruktur. Entferne gespeicherte Wege, wenn Titel, Verkäufer, Hauptbilder oder Varianten nicht mehr zu deinen Notizen passen."
    ],
    guide: [
      " Prüfe auch Preisspanne, Inlandsversand und ob der automatische Parser die Optionsstruktur korrekt übernommen hat. Bei Fehlern kann eine präzise DIY-Bestellung mit Quellinformationen erforderlich sein.",
      " Gute Hinweise beschreiben beobachtbare Bedingungen und keine subjektiven Versprechen. Speichere die gewählte Variante, damit Bestelldatensatz und spätere QC-Prüfung dieselbe Referenz verwenden.",
      " Gehe alle Ansichten in fester Reihenfolge durch und trenne Variantenfehler von sichtbarer Verarbeitung. Fordere ein Maß oder Detailbild nur für eine offene, beantwortbare Frage an.",
      " Filtere zuerst Linien, die Ziel und Inhalt akzeptieren. Vergleiche danach tatsächliches und Volumengewicht, Tracking, angezeigten Zeitraum, Versicherung und aktuelle Hinweise."
    ],
    qc: [
      " Ein sauberes Gesamtbild kann eine falsche Größe oder ein fehlendes Zubehörteil verdecken. Identität und Vollständigkeit werden deshalb vor kosmetischen Details geprüft.",
      " Perspektive kann den näheren Schuh größer wirken lassen, während Lagerlicht Farben verändert. Bestätige einen Verdacht mit Vorder-, Rück- und Seitenansicht statt mit einem einzelnen Zoom.",
      " Lege Start- und Endpunkt der Messung fest und vergleiche mit einem eigenen passenden Artikel. Eine Größenbezeichnung allein belegt weder Kleidungs- noch Einlegesohlenlänge.",
      " Bewahre Bestelloption, relevantes Angebotsbild und QC-Beleg gemeinsam auf. Eine klare Beschreibung mit Foto lässt sich innerhalb der Frist besser bearbeiten als eine pauschale Qualitätsbehauptung."
    ],
    shipping: [
      " Divisor, Rundung und Mindestschritt gehören zur konkreten Linie. Ein Beispiel aus einer anderen Route darf deshalb nicht als aktuelles Angebot übernommen werden.",
      " Behalte Schutz, wenn er für Zerbrechlichkeit oder Form nötig ist. Nutze eine Probeverpackung oder Vorversandmessung, wenn genaue Maße die Linienwahl verändern könnten.",
      " Vergleiche ein Gesamtpaket mit zwei logischen Gruppen, besonders bei sperrigen oder eingeschränkten Artikeln. Wiederholte Grundgebühren können den Vorteil kleinerer Maße wieder aufheben.",
      " Prüfe außerdem Tracking, maximale Maße, Wertgrenzen, Versicherung, Steuerhinweise und temporäre Meldungen. Der angezeigte Lieferbereich bleibt eine Schätzung und kein garantierter Termin."
    ]
  },
  es: {
    spreadsheet: [
      " Revisa también título, variantes, vendedor y fecha. Un enlace activo puede redirigir o cambiar de opción, por lo que la comprobación debe repetirse cada vez que vuelvas.",
      " El precio inicial puede pertenecer a la variante más barata. Registra el importe después de elegir talla, color o versión y sepáralo de transporte nacional y servicios.",
      " Conserva por separado imagen del anuncio, opción exacta y fotos posteriores. Así cada afirmación se apoya en la fuente que realmente puede demostrarla."
    ],
    finds: [
      " Anota dos o tres requisitos visibles antes de comparar. Esto hace reproducible la selección e impide que popularidad o estética sustituyan uso, talla o presupuesto.",
      " Las imágenes del vendedor pueden estar editadas y las del almacén dependen de luz y ángulo. Compara varias vistas y pide solo una evidencia que cambie la decisión.",
      " Revisa también envío nacional y opciones. Elimina una ruta si título, vendedor, imágenes o variantes ya no coinciden con las notas guardadas."
    ],
    guide: [
      " Comprueba intervalo de precios, envío nacional y que el analizador haya capturado las opciones. Si falla, un pedido DIY preciso debe conservar la información de origen.",
      " Las instrucciones útiles describen condiciones observables. Guarda la variante elegida para que pedido y QC posterior utilicen la misma referencia.",
      " Recorre las vistas en un orden fijo y separa errores de variante de fabricación visible. Pide una medida o detalle solo para una pregunta concreta.",
      " Filtra primero las líneas compatibles con destino y contenido. Después compara peso real y volumétrico, seguimiento, rango, seguro y avisos actuales."
    ],
    qc: [
      " Una vista general limpia puede ocultar una talla equivocada o un componente ausente. Confirma identidad y contenido antes de detalles cosméticos.",
      " La perspectiva agranda el objeto cercano y la luz altera color. Confirma sospechas con vistas frontal, trasera y lateral, no con un solo zoom.",
      " Define inicio y final de la medida y compara con una prenda propia. La etiqueta no demuestra largo real de prenda o plantilla.",
      " Guarda opción, captura relevante y prueba QC. Una descripción factual con foto se resuelve mejor dentro del plazo que una afirmación general."
    ],
    shipping: [
      " Divisor, redondeo e incremento mínimo pertenecen a la línea concreta. Un ejemplo de otra ruta no debe convertirse en presupuesto actual.",
      " Conserva protección si es necesaria por fragilidad o forma. Usa ensayo o medición previa cuando las dimensiones puedan cambiar la elección.",
      " Compara un paquete único con dos grupos lógicos, sobre todo con artículos voluminosos o restringidos. Los cargos base repetidos pueden anular el beneficio.",
      " Revisa seguimiento, dimensiones máximas, valor, seguro, impuestos y avisos temporales. El rango de entrega es una estimación, no una promesa."
    ]
  },
  fr: {
    spreadsheet: [
      " Contrôlez aussi titre, variantes, vendeur et date. Un lien actif peut rediriger ou changer d’option ; la vérification recommence donc à chaque retour.",
      " Le prix d’appel peut viser la variante la moins chère. Notez le montant après la taille, la couleur ou la version et séparez livraison intérieure et services.",
      " Gardez séparément image de l’annonce, option exacte et photos ultérieures. Chaque conclusion reste ainsi liée à la preuve capable de la soutenir."
    ],
    finds: [
      " Écrivez deux ou trois critères visibles avant la comparaison. La sélection devient reproductible et la popularité ne remplace ni usage, taille ou budget.",
      " Les images vendeur peuvent être retouchées et celles de l’entrepôt dépendent de la lumière et de l’angle. Comparez plusieurs vues et demandez une preuve décisive.",
      " Vérifiez aussi livraison intérieure et options. Retirez une route si titre, vendeur, images ou variantes ne correspondent plus à vos notes."
    ],
    guide: [
      " Contrôlez plage de prix, livraison intérieure et reprise correcte des options. Si l’analyse automatique échoue, une commande DIY précise doit préserver la source.",
      " Une instruction utile décrit une condition observable. Enregistrez la variante afin que commande et QC utilisent ensuite la même référence.",
      " Parcourez les vues dans un ordre fixe et séparez erreur de variante et fabrication visible. Demandez une mesure ou un détail pour une question définie.",
      " Filtrez d’abord les lignes acceptant destination et contenu. Comparez ensuite poids réel et volumétrique, suivi, délai, assurance et avis actuels."
    ],
    qc: [
      " Une vue générale propre peut cacher une mauvaise taille ou un élément absent. Confirmez identité et contenu avant les détails esthétiques.",
      " La perspective grossit l’objet proche et l’éclairage modifie la couleur. Confirmez avec vues avant, arrière et latérale plutôt qu’un seul zoom.",
      " Définissez le début et la fin de la mesure et comparez avec un vêtement qui vous va. L’étiquette ne prouve pas la longueur réelle.",
      " Gardez option, capture utile et preuve QC. Une description factuelle avec photo est plus facile à traiter dans le délai qu’un jugement général."
    ],
    shipping: [
      " Diviseur, arrondi et palier appartiennent à la ligne. Un exemple d’une autre route ne doit jamais devenir un devis actuel.",
      " Conservez la protection requise par la fragilité ou la forme. Utilisez simulation ou mesure préalable si les dimensions peuvent changer la sélection.",
      " Comparez un colis unique à deux groupes logiques, surtout avec des articles volumineux ou restreints. Les bases répétées peuvent annuler l’avantage.",
      " Vérifiez suivi, dimensions, valeur, assurance, fiscalité et avis temporaires. La plage de livraison reste une estimation et non une promesse."
    ]
  },
  it: {
    spreadsheet: [
      " Controlla anche titolo, varianti, venditore e data. Un link attivo può reindirizzare o cambiare opzione, quindi la verifica ricomincia a ogni ritorno.",
      " Il prezzo iniziale può riguardare la variante più economica. Registra l’importo dopo taglia, colore o versione e separa consegna interna e servizi.",
      " Conserva separatamente immagine dell’inserzione, opzione esatta e foto successive. Ogni conclusione resta legata alla prova che può davvero sostenerla."
    ],
    finds: [
      " Scrivi due o tre requisiti visibili prima del confronto. La selezione diventa ripetibile e la popolarità non sostituisce uso, taglia o budget.",
      " Le immagini del venditore possono essere modificate e quelle del magazzino dipendono da luce e angolo. Confronta più viste e chiedi prove decisive.",
      " Controlla consegna interna e struttura delle opzioni. Rimuovi un percorso se titolo, venditore, immagini o varianti non corrispondono alle note."
    ],
    guide: [
      " Controlla intervallo di prezzo, consegna interna e corretto rilevamento delle opzioni. Se il parser fallisce, un ordine DIY preciso deve conservare la fonte.",
      " Un’istruzione utile descrive una condizione osservabile. Salva la variante affinché ordine e QC successivo usino la stessa referenza.",
      " Scorri le viste in un ordine fisso e separa errore di variante da costruzione visibile. Chiedi misura o dettaglio per una domanda definita.",
      " Filtra prima le linee che accettano destinazione e contenuto. Poi confronta peso reale e volumetrico, tracking, tempi, assicurazione e avvisi."
    ],
    qc: [
      " Una vista generale pulita può nascondere taglia errata o componente mancante. Conferma identità e contenuto prima dei dettagli estetici.",
      " La prospettiva ingrandisce l’oggetto vicino e la luce altera il colore. Conferma con viste anteriore, posteriore e laterale, non un solo zoom.",
      " Definisci inizio e fine della misura e confronta con un capo adatto. L’etichetta non prova la lunghezza reale del vestito o della soletta.",
      " Conserva opzione, screenshot rilevante e prova QC. Una descrizione fattuale con foto viene gestita meglio di un giudizio generale."
    ],
    shipping: [
      " Divisore, arrotondamento e incremento appartengono alla linea. Un esempio di un altro percorso non deve diventare un preventivo corrente.",
      " Mantieni la protezione richiesta da fragilità o forma. Usa prova o misura pre-spedizione se le dimensioni possono cambiare la scelta.",
      " Confronta un pacco unico con due gruppi logici, soprattutto per articoli voluminosi o limitati. I costi base ripetuti possono annullare il vantaggio.",
      " Controlla tracking, dimensioni massime, valore, assicurazione, tasse e avvisi temporanei. L’intervallo di consegna resta una stima."
    ]
  }
};

export const faqAnswerExpansions: Record<Exclude<Locale, "en">, string[]> = {
  de: [
    " Nutze für Transaktionen ausschließlich die aktuelle offizielle Oberfläche.",
    " Ein geprüftes Ziel kann später trotzdem geändert oder umgeleitet werden.",
    " Bestätige die konkrete Variante und alle Zusatzkosten auf der Zielseite.",
    " Verkäuferbild, Bestelloption und Lagerfoto sind drei getrennte Belege.",
    " Zusatzbilder sollten immer eine genau bezeichnete offene Frage beantworten.",
    " Verfolge Ankunfts- und Ablaufdaten jedes Auftrags separat.",
    " Prüfe Frist, Verkäuferzustimmung und mögliche Rücksendekosten im Auftrag.",
    " Maßgeblich sind die im aktuellen Land und Checkout sichtbaren Methoden.",
    " Filtere zuerst Eignung; erst danach sind Preise sinnvoll vergleichbar.",
    " Die externe Zielseite verarbeitet den eigentlichen Kauf und Checkout."
  ],
  es: [
    " Utiliza siempre la interfaz oficial activa para cualquier operación.",
    " Una ruta comprobada puede cambiar o redirigir más adelante.",
    " Confirma variante y costes adicionales en la página de destino.",
    " Imagen, opción del pedido y foto de almacén son pruebas distintas.",
    " Cualquier imagen adicional debe responder una pregunta concreta.",
    " Registra por separado llegada y caducidad de cada pedido.",
    " Revisa plazo, aceptación del vendedor y posibles costes de devolución.",
    " Usa los métodos visibles para tu país y checkout actual.",
    " Filtra elegibilidad antes de comparar cualquier precio.",
    " La página externa correspondiente gestiona la compra y el pago."
  ],
  fr: [
    " Utilisez toujours l’interface officielle active pour toute transaction.",
    " Une route contrôlée peut changer ou rediriger ultérieurement.",
    " Confirmez variante et frais supplémentaires sur la destination.",
    " Image vendeur, option commandée et photo d’entrepôt sont distinctes.",
    " Toute image supplémentaire doit répondre à une question précise.",
    " Suivez séparément arrivée et expiration de chaque commande.",
    " Vérifiez délai, accord vendeur et frais possibles dans la commande.",
    " Utilisez les moyens visibles pour votre pays et paiement actuel.",
    " Filtrez d’abord l’admissibilité avant de comparer le prix.",
    " La page externe correspondante traite l’achat et le paiement."
  ],
  it: [
    " Usa sempre l’interfaccia ufficiale attiva per ogni transazione.",
    " Un percorso controllato può cambiare o reindirizzare in seguito.",
    " Conferma variante e costi aggiuntivi sulla destinazione.",
    " Immagine venditore, opzione e foto di magazzino sono prove diverse.",
    " Ogni immagine aggiuntiva deve rispondere a una domanda precisa.",
    " Tieni separati arrivo e scadenza di ogni ordine.",
    " Verifica finestra, consenso venditore e possibili costi nel record.",
    " Usa i metodi visibili per paese e checkout correnti.",
    " Filtra prima l’idoneità e solo dopo confronta il prezzo.",
    " La pagina esterna corrispondente gestisce acquisto e pagamento."
  ]
};

export const pageIntroExpansions: Record<Exclude<Locale, "en">, Record<"faq" | "articles", string>> = {
  de: {
    faq: " Prüfe veränderliche Werte und Fristen immer im aktiven Konto; hier werden belegte Prozessangaben bewusst von Preis-, Produkt- oder Liefergarantien getrennt.",
    articles: " Jede Sprachfassung enthält dieselben Entscheidungen, Fakten, Einschränkungen und Prüfschritte wie der englische Ausgangstext und ist nicht als gekürzte Zusammenfassung angelegt."
  },
  es: {
    faq: " Confirma siempre valores y plazos variables en la cuenta activa; aquí se separan deliberadamente los procesos documentados de cualquier garantía de precio, producto o entrega.",
    articles: " Cada idioma conserva las mismas decisiones, hechos, límites y comprobaciones del texto inglés de origen y no funciona como un resumen reducido."
  },
  fr: {
    faq: " Confirmez toujours valeurs et délais variables dans le compte actif ; ces réponses séparent volontairement le processus documenté de toute garantie de prix, produit ou livraison.",
    articles: " Chaque langue conserve les mêmes décisions, faits, limites et vérifications que le texte anglais d’origine et ne constitue pas un résumé raccourci."
  },
  it: {
    faq: " Conferma sempre valori e finestre variabili nel conto attivo; le risposte separano deliberatamente i processi documentati da qualunque garanzia di prezzo, prodotto o consegna.",
    articles: " Ogni lingua conserva le stesse decisioni, fatti, limiti e controlli del testo inglese originale e non costituisce un riassunto ridotto."
  }
};
