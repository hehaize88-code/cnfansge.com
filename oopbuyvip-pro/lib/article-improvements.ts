import type { Article, Locale } from "@/lib/site";

export const articleUi: Record<Locale, { quick: string; related: string; updated: string; table: string }> = {
  en: { quick: "Quick checks", related: "Continue your QC check", updated: "Updated", table: "Inspection checklist" },
  de: { quick: "Schnellprüfung", related: "QC-Prüfung fortsetzen", updated: "Aktualisiert", table: "Prüfcheckliste" },
  es: { quick: "Comprobaciones rápidas", related: "Continúa la revisión QC", updated: "Actualizado", table: "Lista de comprobación" },
  fr: { quick: "Vérifications rapides", related: "Poursuivre le contrôle QC", updated: "Mis à jour", table: "Liste de contrôle" },
  it: { quick: "Controlli rapidi", related: "Continua il controllo QC", updated: "Aggiornato", table: "Lista di controllo" },
};

const oldSlugs = ["oopbuy-shoe-qc-symmetry", "oopbuy-hoodie-qc-measurements", "oopbuy-jersey-qc-names-numbers", "oopbuy-qc-size-labels", "oopbuy-qc-measurement-photos", "oopbuy-qc-color-differences", "oopbuy-qc-stitching-seams", "oopbuy-bag-qc-hardware", "oopbuy-qc-photos-visual-evidence-guide", "oopbuy-beginner-guide-2026", "oopbuy-spreadsheet-workflow", "oopbuy-qc-photo-checklist", "oopbuy-fees-returns-policy", "oopbuy-shipping-cost-planner"];
const checks: Record<Locale, string[][]> = {
  en: [
    ["Compare outer side with outer side, then both heels in a level rear view.", "A rotated shoe can look wider; record unmatched angles before judging symmetry."],
    ["Match the ruler endpoints and units to the selected size chart before comparing dimensions.", "Check the front print and pocket separately from sleeve, hem and seam details."],
    ["Read the selected name and number character by character, including spaces and repeated letters.", "Compare badge placement against garment seams; leave folded or blurred text unresolved."],
    ["Match the readable tag to the selected option and identify its sizing system.", "Keep label accuracy separate from measured dimensions and real-world fit."],
    ["Locate the ruler zero, both endpoints and the unit before recording a measurement.", "Compare the same measurement method; a flat width is not automatically a circumference."],
    ["Compare the same surface in more than one view before calling the color wrong.", "Check shadows, reflections and white balance; a screen cannot establish an exact color match."],
    ["Locate the seam in an overview, then inspect the same location in a clear detail.", "Describe visible separation or thread ends without claiming strength or future durability."],
    ["Check the bag body, strap ends and visible closures as separate components.", "A still photo can show a fitting, but cannot prove smooth operation or load capacity."],
    ["Write the visible observation and the unresolved property as separate statements.", "Use the photo for appearance and the selected listing for the reference; neither proves fit or durability."],
    ["Keep the selected option, listing reference and matching warehouse overview together.", "Check identity before condition so a clear photo of the wrong variant does not pass the review."],
    ["Save the exact listing and selected option; a spreadsheet row alone does not identify every variant.", "Compare the warehouse image with that saved reference, not a later changed thumbnail."],
    ["Start with identity and quantity, then choose the relevant category checklist.", "Mark each important feature as visible, inconsistent or unresolved instead of issuing one blanket verdict."],
    ["Record the deadline actually shown for your order and the date you checked it.", "The older policy figures below are historical references; confirm current terms before relying on them."],
    ["Identify visible exposed corners, projecting parts and surfaces that need protection.", "An item photo cannot establish final parcel dimensions, packed weight or shipping cost."],
  ],
  de: [
    ["Vergleiche Außenseite mit Außenseite und danach beide Fersen in einer geraden Rückansicht.", "Ein gedrehter Schuh kann breiter wirken; notiere unterschiedliche Winkel vor dem Symmetrieurteil."],
    ["Ordne Maßanfang, Endpunkte und Einheit der gewählten Größentabelle zu.", "Prüfe Frontdruck und Tasche getrennt von Ärmeln, Saum und Nähten."],
    ["Lies Namen und Nummer Zeichen für Zeichen, einschließlich Abständen und Wiederholungen.", "Vergleiche Abzeichen mit Kleidungsnähten; gefaltete oder unscharfe Schrift bleibt ungeklärt."],
    ["Vergleiche das lesbare Etikett mit der gewählten Option und bestimme das Größensystem.", "Trenne korrekte Beschriftung von gemessenen Maßen und tatsächlicher Passform."],
    ["Bestimme Nullpunkt, beide Endpunkte und Einheit vor dem Ablesen.", "Vergleiche dieselbe Messmethode; flache Breite ist nicht automatisch Umfang."],
    ["Vergleiche dieselbe Fläche in mehreren Ansichten, bevor du die Farbe als falsch bewertest.", "Prüfe Schatten, Spiegelung und Weißabgleich; ein Bildschirm belegt keine exakte Farbgleichheit."],
    ["Finde die Naht in der Übersicht und prüfe denselben Ort im klaren Detail.", "Beschreibe sichtbare Trennung oder Fadenenden ohne Aussagen über Festigkeit oder Haltbarkeit."],
    ["Prüfe Taschenkörper, Gurtenden und sichtbare Verschlüsse als getrennte Komponenten.", "Ein Standbild zeigt Beschläge, beweist aber weder Leichtgängigkeit noch Tragkraft."],
    ["Formuliere sichtbare Beobachtung und ungeklärte Eigenschaft getrennt.", "Das Foto zeigt das Aussehen, die gewählte Anzeige die Referenz; beides beweist weder Passform noch Haltbarkeit."],
    ["Bewahre gewählte Option, Angebotsreferenz und zugehörige Lagerübersicht zusammen auf.", "Prüfe Identität vor Zustand, damit ein klares Foto der falschen Variante nicht als passend gilt."],
    ["Sichere das genaue Angebot und die Auswahl; eine Tabellenzeile identifiziert nicht jede Variante.", "Vergleiche das Lagerbild mit dieser Referenz, nicht mit einem später geänderten Vorschaubild."],
    ["Beginne mit Identität und Menge, danach folgt die passende Kategorieprüfung.", "Markiere wichtige Merkmale als sichtbar, abweichend oder ungeklärt statt eines pauschalen Urteils."],
    ["Notiere die tatsächlich angezeigte Bestellfrist und das Prüfdatum.", "Die älteren Richtlinienzahlen unten sind historische Referenzen; prüfe vor Nutzung die aktuellen Bedingungen."],
    ["Erkenne sichtbare offene Ecken, hervorstehende Teile und schutzbedürftige Flächen.", "Ein Artikelfoto belegt keine fertigen Paketmaße, kein Packgewicht und keine Versandkosten."],
  ],
  es: [
    ["Compara lado exterior con exterior y después ambos talones en una vista posterior nivelada.", "Un zapato girado puede parecer más ancho; registra ángulos distintos antes de juzgar la simetría."],
    ["Relaciona extremos y unidades de la regla con la tabla de talla seleccionada.", "Revisa estampado frontal y bolsillo por separado de mangas, bajo y costuras."],
    ["Lee nombre y número carácter a carácter, incluidos espacios y letras repetidas.", "Compara los escudos con las costuras; deja sin resolver el texto doblado o borroso."],
    ["Relaciona la etiqueta legible con la opción elegida e identifica el sistema de tallas.", "Separa la etiqueta correcta de las medidas reales y del ajuste al cuerpo."],
    ["Localiza cero, ambos extremos y unidad antes de anotar la medida.", "Compara el mismo método; una anchura en plano no es automáticamente una circunferencia."],
    ["Compara la misma superficie en varias vistas antes de declarar incorrecto el color.", "Revisa sombras, reflejos y balance de blancos; la pantalla no demuestra coincidencia exacta."],
    ["Localiza la costura en la vista general y examina ese punto en un detalle claro.", "Describe separaciones o cabos visibles sin afirmar resistencia ni durabilidad futura."],
    ["Revisa cuerpo del bolso, extremos de correa y cierres visibles por separado.", "Una foto muestra un herraje, pero no prueba funcionamiento suave ni capacidad de carga."],
    ["Escribe por separado la observación visible y la propiedad pendiente.", "La foto muestra apariencia y el anuncio elegido sirve de referencia; ninguno prueba ajuste ni duración."],
    ["Guarda juntos opción elegida, referencia del anuncio y vista general correspondiente.", "Comprueba identidad antes que estado para no aprobar una foto clara de la variante equivocada."],
    ["Guarda anuncio exacto y opción; una fila de hoja de cálculo no identifica todas las variantes.", "Compara el QC con esa referencia guardada, no con una miniatura modificada después."],
    ["Empieza por identidad y cantidad, después usa la lista de la categoría pertinente.", "Marca cada rasgo importante como visible, diferente o sin resolver en lugar de dar un veredicto global."],
    ["Anota el plazo que muestra tu pedido y la fecha de comprobación.", "Las cifras antiguas de políticas son referencias históricas; confirma las condiciones actuales antes de usarlas."],
    ["Identifica esquinas expuestas, salientes y superficies visibles que necesitan protección.", "Una foto del artículo no establece dimensiones finales del paquete, peso embalado ni coste de envío."],
  ],
  fr: [
    ["Comparez extérieur avec extérieur, puis les deux talons dans une vue arrière à niveau.", "Une chaussure tournée peut paraître plus large ; notez les angles différents avant de juger la symétrie."],
    ["Reliez extrémités et unité de la règle au tableau de taille sélectionné.", "Vérifiez motif frontal et poche séparément des manches, de l'ourlet et des coutures."],
    ["Lisez nom et numéro caractère par caractère, espaces et lettres répétées compris.", "Comparez les écussons aux coutures ; laissez non résolu le texte plié ou flou."],
    ["Reliez l'étiquette lisible à l'option choisie et identifiez le système de tailles.", "Séparez exactitude de l'étiquette, dimensions mesurées et ajustement réel."],
    ["Repérez zéro, deux extrémités et unité avant de noter une mesure.", "Comparez la même méthode ; une largeur à plat n'est pas automatiquement une circonférence."],
    ["Comparez la même surface dans plusieurs vues avant de déclarer la couleur incorrecte.", "Vérifiez ombres, reflets et balance des blancs ; l'écran ne prouve pas une correspondance exacte."],
    ["Repérez la couture dans la vue générale puis examinez ce point dans un détail net.", "Décrivez séparation ou fils visibles sans affirmer solidité ou durabilité future."],
    ["Vérifiez corps du sac, extrémités de sangle et fermetures visibles séparément.", "Une image fixe montre une fixation, mais ne prouve ni fonctionnement fluide ni capacité de charge."],
    ["Rédigez séparément observation visible et propriété non résolue.", "La photo montre l'apparence et l'annonce choisie sert de référence ; aucune ne prouve ajustement ou durabilité."],
    ["Conservez ensemble option choisie, référence de l'annonce et vue générale correspondante.", "Vérifiez l'identité avant l'état pour ne pas valider une photo nette de la mauvaise variante."],
    ["Sauvegardez annonce exacte et option ; une ligne de tableau n'identifie pas toutes les variantes.", "Comparez le QC à cette référence, pas à une miniature modifiée ultérieurement."],
    ["Commencez par identité et quantité, puis choisissez la liste de contrôle adaptée.", "Notez chaque détail important comme visible, différent ou non résolu plutôt qu'un verdict global."],
    ["Notez le délai réellement affiché dans votre commande et la date de vérification.", "Les anciens chiffres de politique ci-dessous sont historiques ; confirmez les conditions actuelles avant usage."],
    ["Repérez coins exposés, pièces saillantes et surfaces visibles à protéger.", "Une photo d'article n'établit ni dimensions finales du colis, ni poids emballé, ni coût d'expédition."],
  ],
  it: [
    ["Confronta lato esterno con esterno, poi entrambi i talloni in una vista posteriore in piano.", "Una scarpa ruotata può sembrare più larga; annota angoli diversi prima di giudicare la simmetria."],
    ["Collega estremi e unità del righello alla tabella della taglia scelta.", "Controlla stampa frontale e tasca separatamente da maniche, orlo e cuciture."],
    ["Leggi nome e numero carattere per carattere, inclusi spazi e lettere ripetute.", "Confronta gli stemmi con le cuciture; lascia irrisolte scritte piegate o sfocate."],
    ["Collega l'etichetta leggibile all'opzione scelta e identifica il sistema di taglie.", "Separa correttezza dell'etichetta, dimensioni misurate e vestibilità reale."],
    ["Individua zero, entrambi gli estremi e unità prima di annotare la misura.", "Confronta lo stesso metodo; una larghezza in piano non è automaticamente una circonferenza."],
    ["Confronta la stessa superficie in più viste prima di dichiarare sbagliato il colore.", "Controlla ombre, riflessi e bilanciamento del bianco; lo schermo non prova una corrispondenza esatta."],
    ["Localizza la cucitura nella panoramica e controlla lo stesso punto in un dettaglio chiaro.", "Descrivi separazioni o fili visibili senza affermare resistenza o durata futura."],
    ["Controlla corpo della borsa, estremi delle cinghie e chiusure visibili separatamente.", "Una foto mostra un attacco, ma non prova funzionamento scorrevole o capacità di carico."],
    ["Scrivi separatamente osservazione visibile e proprietà irrisolta.", "La foto mostra l'aspetto e l'inserzione scelta è il riferimento; nessuna prova vestibilità o durata."],
    ["Conserva insieme opzione scelta, riferimento dell'inserzione e panoramica corrispondente.", "Verifica l'identità prima dello stato per non approvare una foto chiara della variante errata."],
    ["Salva inserzione esatta e opzione; una riga del foglio non identifica tutte le varianti.", "Confronta il QC con quel riferimento salvato, non con un'anteprima cambiata in seguito."],
    ["Parti da identità e quantità, poi scegli la lista della categoria pertinente.", "Segna ogni elemento importante come visibile, diverso o irrisolto anziché dare un verdetto generale."],
    ["Annota la scadenza effettivamente mostrata nell'ordine e la data del controllo.", "Le vecchie cifre di policy qui sotto sono riferimenti storici; verifica le condizioni attuali prima di usarle."],
    ["Identifica angoli esposti, sporgenze e superfici visibili da proteggere.", "Una foto dell'articolo non stabilisce dimensioni finali del pacco, peso imballato o costo di spedizione."],
  ],
};

const feeDeck: Record<Locale, string> = {
  en: "Keep a dated QC record and check the deadline shown for your order. Read older fee, return and storage examples as background, not current terms.",
  de: "Führe datierte QC-Notizen und prüfe die Frist deiner Bestellung. Ältere Gebühren-, Rückgabe- und Lagerbeispiele sind Hintergrund, keine aktuellen Bedingungen.",
  es: "Guarda un registro QC fechado y comprueba el plazo de tu pedido. Los ejemplos antiguos de tarifas, devoluciones y almacenamiento son contexto histórico.",
  fr: "Gardez une trace QC datée et vérifiez le délai de votre commande. Les anciens exemples de frais, retours et stockage sont un contexte historique.",
  it: "Conserva note QC datate e verifica la scadenza dell'ordine. I vecchi esempi di costi, resi e deposito sono contesto storico, non condizioni attuali.",
};
const notice: Record<Locale, string> = {
  en: "Policy context: the figures and policy quotations in this older article have not been reverified for 15 October 2026. Confirm the current terms and deadlines for your actual order before relying on any figure below. The recordkeeping method remains useful; the historical figures are not a current policy confirmation.",
  de: "Richtlinienkontext: Die Zahlen und Richtlinienangaben dieses älteren Artikels wurden zum 15. Oktober 2026 nicht erneut verifiziert. Prüfe die aktuellen Bedingungen und Fristen deiner konkreten Bestellung, bevor du Zahlen unten verwendest. Die Dokumentationsmethode bleibt nützlich; historische Zahlen bestätigen keine aktuelle Richtlinie.",
  es: "Contexto de políticas: las cifras y citas de este artículo anterior no se han vuelto a verificar a 15 de octubre de 2026. Confirma condiciones y plazos actuales de tu pedido antes de usar las cifras siguientes. El método de registro sigue siendo útil; las cifras históricas no confirman políticas actuales.",
  fr: "Contexte des politiques : les chiffres et citations de cet ancien article n'ont pas été revérifiés au 15 octobre 2026. Confirmez les conditions et délais actuels de votre commande avant d'utiliser les chiffres ci-dessous. La méthode de suivi reste utile ; les chiffres historiques ne confirment pas une politique actuelle.",
  it: "Contesto delle policy: cifre e citazioni di questo articolo precedente non sono state riverificate al 15 ottobre 2026. Conferma condizioni e scadenze attuali del tuo ordine prima di usare le cifre seguenti. Il metodo di registrazione resta utile; i numeri storici non confermano le policy attuali.",
};

// A deliberate link map keeps recommendations relevant to the question on each page.
const links: Record<string, string[]> = {
  "oopbuy-shoe-qc-symmetry": ["oopbuy-qc-photo-angles", "oopbuy-qc-quantity-accessories"],
  "oopbuy-hoodie-qc-measurements": ["oopbuy-qc-prints-embroidery", "oopbuy-qc-measurement-photos"],
  "oopbuy-jersey-qc-names-numbers": ["oopbuy-qc-prints-embroidery", "oopbuy-qc-blur-compression"],
  "oopbuy-qc-size-labels": ["oopbuy-qc-quantity-accessories", "oopbuy-qc-measurement-photos"],
  "oopbuy-qc-measurement-photos": ["oopbuy-qc-photo-angles", "oopbuy-qc-blur-compression"],
  "oopbuy-qc-color-differences": ["oopbuy-qc-blur-compression", "oopbuy-qc-photo-angles"],
  "oopbuy-qc-stitching-seams": ["oopbuy-qc-blur-compression", "oopbuy-qc-prints-embroidery"],
  "oopbuy-bag-qc-hardware": ["oopbuy-qc-quantity-accessories", "oopbuy-qc-photo-angles"],
  "oopbuy-qc-photos-visual-evidence-guide": ["oopbuy-qc-photo-angles", "oopbuy-qc-blur-compression"],
  "oopbuy-beginner-guide-2026": ["oopbuy-qc-quantity-accessories", "oopbuy-qc-photo-checklist"],
  "oopbuy-spreadsheet-workflow": ["oopbuy-qc-quantity-accessories", "oopbuy-qc-prints-embroidery"],
  "oopbuy-qc-photo-checklist": ["oopbuy-qc-photo-angles", "oopbuy-qc-quantity-accessories", "oopbuy-qc-prints-embroidery", "oopbuy-qc-blur-compression"],
  "oopbuy-fees-returns-policy": ["oopbuy-qc-photo-checklist", "oopbuy-qc-photos-visual-evidence-guide"],
  "oopbuy-shipping-cost-planner": ["oopbuy-qc-quantity-accessories", "oopbuy-bag-qc-hardware"],
  "oopbuy-qc-photo-angles": ["oopbuy-qc-measurement-photos", "oopbuy-qc-prints-embroidery", "oopbuy-qc-blur-compression"],
  "oopbuy-qc-quantity-accessories": ["oopbuy-qc-size-labels", "oopbuy-qc-photo-angles", "oopbuy-qc-blur-compression"],
  "oopbuy-qc-prints-embroidery": ["oopbuy-qc-photo-angles", "oopbuy-qc-blur-compression", "oopbuy-jersey-qc-names-numbers", "oopbuy-qc-color-differences"],
  "oopbuy-qc-blur-compression": ["oopbuy-qc-photo-angles", "oopbuy-qc-prints-embroidery", "oopbuy-qc-measurement-photos", "oopbuy-qc-color-differences"],
};

export function improveArticles(locale: Locale, articles: Article[]): Article[] {
  return articles.map(article => {
    const index = oldSlugs.indexOf(article.slug);
    const additions = (links[article.slug] || []).flatMap(slug => {
      const target = articles.find(item => item.slug === slug);
      return target ? [{ kind: "article" as const, slug, label: target.title }] : [];
    });
    const related = [...additions, ...(article.related || [])].filter((item, i, all) => all.findIndex(other => other.kind === item.kind && other.slug === item.slug) === i);
    return { ...article, modified: "2026-10-15", takeaways: index < 0 ? article.takeaways : checks[locale][index], related,
      ...(article.slug === "oopbuy-fees-returns-policy" ? { deck: feeDeck[locale], reviewNotice: notice[locale] } : {}),
    };
  });
}
