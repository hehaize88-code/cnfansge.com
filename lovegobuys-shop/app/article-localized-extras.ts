import type { Language } from "./site-content";

export const localizedArticleExtras: Record<Exclude<Language,"en">,Record<string,string[]>> = {
  de: {
    "lovegobuy-spreadsheet-guide":[
      "Die indexierte LoveGoBuy-Startseite bietet Suche per Produktname, Link oder Foto und führt Guide und Estimation getrennt. Das zeigt die Grenze eines Spreadsheets: Es liefert einen reproduzierbaren Suchhinweis, während Live-Produktseite, Lagerbelege und aktueller Versandrechner eigene Prüfschritte bleiben.",
      "Erstelle vor der Suche ein Kategorieprofil mit gewünschtem Zweck, zwingenden Maßen, Preisrahmen, Ausschlussmerkmalen und Versandempfindlichkeit. Bei Trikots zählen etwa Brustmaß, Druck und Version; bei Schuhen Innensohlenlänge, Paarsymmetrie und der Nutzen des Kartons.",
      "Speichere Ziel-URL, Quellplattform, genaue Variante, angezeigten Preis und Datum. Wenn ein Link weiterleitet, ein anderes Bild zeigt oder die Variante nicht zugeordnet werden kann, markiere ihn als ungeklärt statt die Beziehung zu erraten.",
      "Nutze den Punktestand als Diagnose. Fünf Punkte mit nur fehlendem Packgewicht sind etwas anderes als fünf Punkte mit falscher Route und ohne Maße. Notiere deshalb neben jeder Zahl, welcher Nachweis fehlt und welche nächste Prüfung sinnvoll ist.",
      "Offizielle LoveGoBuy-Produktseiten werben mit drei bis acht kostenlosen hochauflösenden QC-Fotos. Entscheidend ist nicht die Anzahl, sondern ob die Ansichten Variante, Verarbeitung und Messung beantworten. Schreibe daher nicht ‘gute QC’, sondern benenne den tatsächlich belegten Punkt.",
      "Der öffentliche Rechner warnt, dass Paketgröße ebenso wichtig ist wie Waagengewicht, und zeigt L × B × H in cm ÷ 6000 als Beispiel. Gib Boxen, dicken Jacken, strukturierten Taschen oder eingeschränkten Artikeln ein Versandrisiko, aber nutze für Zahlen immer den Live-Rechner.",
      "Formuliere Notizen neutral: ‘Druck in den verfügbaren Ansichten gleichmäßig’ ist ein sichtbarer Befund; ‘Premiumqualität’ ist ein unbelegtes Urteil. Trenne auch Link- oder Empfehlungsfunktion von der eigentlichen Produktevidenz.",
      "Die indexierte Bestellansicht trennt pending, paid, purchasing, shipped, completed, cancelled und in warehouse. Deshalb endet das Spreadsheet bei der Recherche. Kontostatus, Fristen, Rückgabe und Paketaktion müssen im offiziellen Live-Konto geprüft werden."
    ],
    "lovegobuy-qc-photo-guide":[
      "LoveGoBuy-Produktseiten kündigen drei bis acht kostenlose HD-Prüffotos an. Das ist eine belastbare Erwartung an ein Bildset, aber keine Aussage, dass automatisch jeder mögliche Fehler oder jedes Maß gezeigt wird. Benenne eine fehlende Ansicht konkret.",
      "Schreibe vor dem Öffnen der Galerie Produktart, Farbe, Größe oder Option und zwei Erkennungsmerkmale auf. Dann prüfst du jedes Bild gegen eine vorher definierte Identität und passt die Kriterien nicht nachträglich an ein attraktives Foto an.",
      "Trenne sichtbare Abweichung und vermutete Ursache. ‘Linke Ferse wirkt in der geraden Rückansicht höher’ ist präziser als die Behauptung eines Produktionsfehlers. Wenn Winkel widersprechen, nutze die geradeste scharfe Ansicht und verlange nur einen kontrollierten Vergleich.",
      "Ein Lineal ist nur hilfreich, wenn Endpunkte und Messweg sichtbar sind. Prüfe bei Brustweite eine flache Lage, bei Innensohlen beide Enden und bei Taschen den Unterschied zwischen Außenmaß und nutzbarem Innenraum. Speichere Methode und Zahl zusammen.",
      "Lagerlicht, Weißabgleich und Kameranähe verändern Farbe und Proportion. Vergleiche mehrere gerade Ansichten und neutrale Referenzen. Wenn Farbe entscheidend ist, beschreibe Unsicherheit offen statt einen exakten Farbton zu behaupten.",
      "Beschränke die Checkliste auf fünf produktrelevante Fragen. Ein Trikot braucht Version, Brustmaß, Druck, Rückseite und Abzeichen; eine Tasche Maße, Bodenform, Verschluss, Hardware und Innenraum. Die Liste muss sich mit dem Produkt ändern.",
      "Die Lageransicht enthält Bereiche wie QC updated, QC updating, refund und expiring soon. Das zeigt, dass Zeitpunkt und zulässige Aktion in das Live-Konto gehören. Prüfe Bilder rechtzeitig und frage bei Fristen oder Gebühren den offiziellen Support.",
      "Speichere Route, Variante, geprüfte Ansichten, Messmethode, offene Frage und Datum. Begrenze das Ergebnis auf dieses Bildset und diese Option. Eine Galerie verifiziert weder einen ganzen Verkäufer noch eine Produktlinie."
    ],
    "lovegobuy-shipping-weight":[
      "Plane mit drei getrennten Zahlen: Quellpreis, Lagerartikelgewicht und geschätzte Paketgebühr. Jede Zahl beantwortet eine andere Frage. Ein unabhängiger Ratgeber kann ihren Zusammenhang erklären, aber keinen dauerhaften Kilopreis für jedes Land und jede Linie veröffentlichen.",
      "Notiere, ob ein Gewicht nur das Produkt, die Verkäuferverpackung oder den Lagerartikel beschreibt. Ergänze Karton, Schutz und Konsolidierung ausdrücklich und ersetze die Schätzung nach Rehearsal oder Endverpackung durch die gemessenen Paketdaten.",
      "Ein Paket von 40 × 30 × 20 cm hat 24.000 cm³; geteilt durch 6000 ergibt das 4 Volumenkilogramm. Das erklärt die Formel, ist aber kein Angebot. Miss die längsten äußeren Punkte einschließlich Schutzmaterial.",
      "Boxen zu entfernen ist nicht automatisch besser. Prüfe Volumengewinn, Schutzbedarf und persönlichen Wert der Verpackung. Weiche Waren können anders behandelt werden als starre Gegenstände; überprüfe nach jeder Anfrage das Ergebnis.",
      "Die indexierte Rechnerhilfe sagt, dass übergewichtige oder übergroße Pakete keine Linie zeigen können, und nennt Aufteilung oder Rehearsal-Paket. Kläre zuerst, ob Gewicht, Maße, Produkteigenschaft oder Ziel die Ursache ist.",
      "Vergleiche nur zulässige Linien mit identischen Paketdaten. Speichere aktuellen Liniennamen, Gewicht, Maße, Volumenwert, Schätzung, Einschränkungen, Schutz und Zeitpunkt. Ein anderes Eingabepaket ist kein fairer Preisvergleich.",
      "Am 1. September 2026 zeigte Trustpilot etwa 4,4 Punkte und rund 576 Bewertungen. Reddit enthält positive Berichte ebenso wie Beschwerden zu QC, Erstattung, Support oder Versand. Diese Signale liefern Prüffragen, aber keinen Preis oder Ausgang für dein Paket.",
      "Vor Zahlung dokumentiere Ziel, Paketanzahl, tatsächliches Gewicht, Maße, Volumenberechnung, gewählte Linie, angezeigten Betrag und Zeit. Wenn sich der Wert ändert, vergleiche zuerst Eingaben und Klassifizierung und wende dich mit genauen Daten an den offiziellen Support."
    ]
  },
  es: {
    "lovegobuy-spreadsheet-guide":[
      "La portada indexada de LoveGoBuy permite buscar por nombre, enlace o foto y separa Guía y Estimación. Una hoja proporciona una entrada reproducible; la ficha viva, las pruebas de almacén y el estimador actual siguen siendo controles separados.",
      "Antes de buscar, crea un perfil de categoría con uso, medidas obligatorias, rango de precio, motivos de descarte y sensibilidad al envío. Para camisetas deportivas importan pecho, impresión y versión; para calzado, longitud interior, simetría y utilidad de la caja.",
      "Guarda URL, mercado de origen, variante exacta, precio mostrado y fecha. Si el enlace redirige, muestra otra imagen o no permite relacionar la opción, márcalo como no resuelto en lugar de adivinar.",
      "Usa la puntuación como diagnóstico. Cinco puntos con solo el peso pendiente no equivalen a cinco con ruta incorrecta y sin medidas. Escribe qué prueba falta y cuál es la siguiente acción.",
      "Las páginas oficiales anuncian de tres a ocho fotos QC gratuitas en alta definición. Importa la cobertura: variante, construcción y medición. En la hoja, indica la pregunta respondida en vez de escribir simplemente ‘buen QC’.",
      "El estimador advierte que el tamaño importa tanto como el peso y muestra largo × ancho × alto ÷ 6000. Añade riesgo de envío a cajas, prendas voluminosas, bolsos rígidos o artículos restringidos, pero utiliza la herramienta viva para cifras.",
      "Redacta notas neutrales. ‘La impresión parece uniforme en las vistas disponibles’ es una observación; ‘calidad premium’ es una conclusión sin prueba. Separa cualquier función de enlace o referencia de la evidencia del producto.",
      "La interfaz de pedidos distingue pendiente, pagado, comprando, enviado, completado, cancelado y en almacén. La hoja termina en la investigación; estado, plazos, devolución y paquete pertenecen a la cuenta oficial."
    ],
    "lovegobuy-qc-photo-guide":[
      "Las fichas LoveGoBuy anuncian de tres a ocho fotos HD gratuitas. Es una expectativa verificable, pero no significa que todos los defectos o medidas aparezcan automáticamente. Pide una vista concreta solo si puede cambiar la decisión.",
      "Antes de abrir la galería, escribe tipo, color, talla u opción y dos rasgos distintivos. Así comparas cada imagen con una identidad definida y evitas adaptar los criterios a la foto más atractiva.",
      "Separa desviación visible y causa supuesta. ‘El talón izquierdo parece más alto en la vista trasera recta’ es más preciso que declarar un defecto de fabricación. Si los ángulos contradicen, busca una comparación controlada.",
      "Una regla sirve cuando se ven extremos y recorrido. Comprueba prenda plana para pecho, ambos extremos para plantilla y diferencia entre medida exterior y espacio interior en bolsos. Guarda método y cifra juntos.",
      "La luz, el balance de blancos y la distancia cambian color y proporción. Compara varias vistas rectas y referencias neutrales. Si el color es esencial, expresa la incertidumbre en lugar de afirmar un tono exacto.",
      "Limita la lista a cinco preguntas específicas. Una camiseta necesita versión, pecho, impresión, espalda y parches; un bolso, medidas, base, cierre, herrajes e interior. La lista debe cambiar con el producto.",
      "La interfaz de almacén muestra QC actualizado, QC actualizando, reembolso y próximo a vencer. El momento y la acción permitida pertenecen a la cuenta viva; usa soporte oficial para plazos y tasas.",
      "Guarda ruta, variante, vistas, método de medida, pregunta abierta y fecha. Limita la conclusión a ese conjunto y esa opción. Una galería no verifica vendedor ni línea de productos."
    ],
    "lovegobuy-shipping-weight":[
      "Planifica con tres números separados: precio de origen, peso del artículo en almacén y estimación del paquete. Una guía explica la relación, pero no puede publicar una tarifa permanente por kilogramo para todos los países y líneas.",
      "Indica si el peso corresponde al producto, embalaje del vendedor o artículo en almacén. Añade caja, protección y consolidación explícitamente y sustituye la estimación por datos finales tras ensayo o embalaje.",
      "Un paquete de 40 × 30 × 20 cm ocupa 24.000 cm³; dividido entre 6000 da 4 kg volumétricos. Es un ejemplo matemático, no una cotización. Mide los puntos exteriores más largos.",
      "Quitar cajas no siempre es mejor. Compara ahorro de volumen, necesidad de protección y valor del embalaje. Artículos blandos y rígidos requieren decisiones diferentes; revisa el resultado final.",
      "La guía indexada del estimador dice que paquetes con exceso de peso o tamaño pueden no mostrar rutas y menciona división o rehearsal. Averigua primero si bloquean peso, dimensiones, propiedad o destino.",
      "Compara solo líneas elegibles con datos iguales. Guarda nombre actual, peso, dimensiones, resultado volumétrico, estimación, restricciones, protección y hora. Otro paquete no es una comparación justa.",
      "El 1 de septiembre de 2026, Trustpilot mostraba alrededor de 4,4 y unas 576 reseñas. Reddit mezcla experiencias positivas y quejas sobre QC, reembolso, soporte o envío. Sirven para preguntas, no para predecir tu paquete.",
      "Antes de pagar registra destino, número de paquetes, peso real, dimensiones, cálculo volumétrico, línea, importe y hora. Si cambia, compara entradas y clasificación y consulta al soporte con datos exactos."
    ]
  },
  fr: {
    "lovegobuy-spreadsheet-guide":[
      "La page indexée LoveGoBuy permet la recherche par nom, lien ou photo et sépare Guide et Estimation. Une feuille donne une entrée reproductible ; la fiche en direct, les preuves d’entrepôt et l’estimateur restent des contrôles distincts.",
      "Avant de chercher, rédigez un profil de catégorie : usage, mesures obligatoires, prix, motifs de rejet et sensibilité livraison. Pour un maillot : poitrine, impression, version ; pour des chaussures : longueur intérieure, symétrie et intérêt de la boîte.",
      "Conservez URL, marché source, variante exacte, prix affiché et date. Si le lien redirige, montre une autre image ou ne permet pas d’identifier l’option, marquez-le non résolu au lieu de deviner.",
      "Utilisez la note comme diagnostic. Cinq points avec seulement le poids manquant diffèrent de cinq avec mauvais lien et aucune mesure. Écrivez la preuve absente et la prochaine action.",
      "Les pages officielles annoncent trois à huit photos QC HD gratuites. La couverture compte : variante, fabrication et mesure. Dans la feuille, nommez la question résolue plutôt que d’écrire seulement ‘bon QC’.",
      "L’estimateur rappelle que la taille compte autant que le poids et montre L × l × H ÷ 6000. Ajoutez un risque aux boîtes, vêtements volumineux, sacs rigides ou articles restreints, puis utilisez l’outil en direct.",
      "Rédigez des notes neutres. ‘Impression régulière dans les vues disponibles’ est un constat ; ‘qualité premium’ est une affirmation non prouvée. Séparez la fonction du lien de la preuve produit.",
      "L’interface commande distingue pending, paid, purchasing, shipped, completed, cancelled et in warehouse. La feuille s’arrête à la recherche ; statut, délais, retour et colis appartiennent au compte officiel."
    ],
    "lovegobuy-qc-photo-guide":[
      "Les fiches LoveGoBuy annoncent trois à huit photos HD gratuites. C’est une attente vérifiable, pas la promesse que chaque défaut ou mesure sera automatiquement montré. Demandez une vue précise si elle change la décision.",
      "Avant la galerie, écrivez type, couleur, taille ou option et deux signes distinctifs. Chaque image est ainsi comparée à une identité définie avant de voir la photo la plus flatteuse.",
      "Séparez écart visible et cause supposée. ‘Le talon gauche paraît plus haut sur la vue arrière droite’ est plus précis que déclarer un défaut de fabrication. En cas de contradiction, demandez une comparaison contrôlée.",
      "Une règle aide si les extrémités et le trajet sont visibles. Vérifiez vêtement à plat, deux bouts de semelle et différence entre dimension extérieure et espace intérieur. Gardez méthode et chiffre ensemble.",
      "Éclairage, balance des blancs et distance modifient couleur et proportion. Comparez plusieurs vues droites et repères neutres. Si la couleur est essentielle, exprimez l’incertitude.",
      "Limitez la liste à cinq questions. Un maillot : version, poitrine, impression, dos et écussons ; un sac : dimensions, base, fermeture, quincaillerie et intérieur. La liste change avec le produit.",
      "L’entrepôt affiche QC updated, QC updating, refund et expiring soon. Le moment et l’action autorisée relèvent du compte en direct ; utilisez le support officiel pour délais et frais.",
      "Conservez lien, variante, vues, méthode de mesure, question ouverte et date. Limitez la conclusion à cet ensemble et cette option. Une galerie ne vérifie pas un vendeur entier."
    ],
    "lovegobuy-shipping-weight":[
      "Planifiez avec trois chiffres séparés : prix source, poids entrepôt et estimation colis. Un guide explique leur relation mais ne peut publier un tarif permanent au kilogramme pour tous les pays et lignes.",
      "Indiquez si le poids décrit produit, emballage vendeur ou article entrepôt. Ajoutez carton, protection et consolidation, puis remplacez l’estimation après rehearsal ou emballage final.",
      "Un colis de 40 × 30 × 20 cm représente 24 000 cm³ ; divisé par 6000, cela donne 4 kg volumétriques. C’est un exemple, pas un devis. Mesurez les points extérieurs les plus longs.",
      "Retirer une boîte n’est pas toujours optimal. Comparez volume économisé, protection nécessaire et valeur de l’emballage. Objets souples et rigides demandent des décisions différentes ; vérifiez le résultat.",
      "L’aide indexée dit qu’un colis trop lourd ou grand peut n’afficher aucune ligne et mentionne division ou rehearsal. Identifiez d’abord poids, dimensions, propriété ou destination comme cause.",
      "Comparez seulement des lignes éligibles avec données identiques. Conservez nom, poids, dimensions, volume, estimation, restrictions, protection et heure. Un autre colis n’est pas comparable.",
      "Au 1er septembre 2026, Trustpilot affichait environ 4,4 et près de 576 avis. Reddit mêle expériences positives et plaintes QC, remboursement, support ou livraison. Cela crée des questions, pas une prédiction.",
      "Avant paiement, notez destination, nombre de colis, poids réel, dimensions, calcul volumétrique, ligne, montant et heure. Si le chiffre change, comparez les entrées et contactez le support avec les données exactes."
    ]
  },
  it: {
    "lovegobuy-spreadsheet-guide":[
      "La home indicizzata LoveGoBuy consente ricerca per nome, link o foto e separa Guida e Stima. Un foglio dà un input riproducibile; scheda live, prove magazzino e stimatore restano controlli separati.",
      "Prima della ricerca crea un profilo categoria con uso, misure obbligatorie, prezzo, motivi di esclusione e sensibilità spedizione. Per una maglia: petto, stampa, versione; per scarpe: lunghezza interna, simmetria e utilità della scatola.",
      "Salva URL, mercato origine, variante esatta, prezzo mostrato e data. Se il link reindirizza, mostra un’altra immagine o non collega l’opzione, segnalo irrisolto invece di indovinare.",
      "Usa il punteggio come diagnosi. Cinque punti con solo il peso mancante non equivalgono a cinque con rotta errata e senza misure. Scrivi la prova assente e la prossima azione.",
      "Le pagine ufficiali annunciano da tre a otto foto QC HD gratuite. Conta la copertura: variante, costruzione e misura. Nel foglio indica la domanda risposta invece di scrivere solo ‘buon QC’.",
      "Lo stimatore avverte che la dimensione conta quanto il peso e mostra L × W × H ÷ 6000. Aggiungi rischio a scatole, capi voluminosi, borse rigide o articoli limitati, poi usa lo strumento live.",
      "Scrivi note neutrali. ‘Stampa uniforme nelle viste disponibili’ è osservazione; ‘qualità premium’ non è provato. Separa funzione del link ed evidenza del prodotto.",
      "L’interfaccia ordini distingue pending, paid, purchasing, shipped, completed, cancelled e in warehouse. Il foglio termina con la ricerca; stato, scadenze, reso e pacco spettano all’account ufficiale."
    ],
    "lovegobuy-qc-photo-guide":[
      "Le schede LoveGoBuy annunciano da tre a otto foto HD gratuite. È un’aspettativa verificabile, non la promessa che ogni difetto o misura appaia automaticamente. Chiedi una vista precisa se cambia la decisione.",
      "Prima della galleria scrivi tipo, colore, taglia o opzione e due caratteristiche. Così confronti ogni immagine con un’identità definita prima della foto più attraente.",
      "Separa differenza visibile e causa ipotizzata. ‘Il tallone sinistro appare più alto nella vista posteriore dritta’ è più preciso di dichiarare un difetto produttivo. Se gli angoli discordano, chiedi confronto controllato.",
      "Un righello serve se estremi e percorso sono visibili. Controlla capo piatto, entrambe le estremità della soletta e differenza fra misura esterna e spazio interno. Salva metodo e numero insieme.",
      "Luce, bilanciamento bianco e distanza cambiano colore e proporzione. Confronta più viste dritte e riferimenti neutri. Se il colore è essenziale, dichiara l’incertezza.",
      "Limita la checklist a cinque domande. Una maglia: versione, petto, stampa, retro e stemmi; una borsa: misure, base, chiusura, hardware e interno. La lista cambia col prodotto.",
      "Il magazzino mostra QC updated, QC updating, refund ed expiring soon. Momento e azione consentita appartengono all’account live; usa supporto ufficiale per scadenze e costi.",
      "Salva rotta, variante, viste, metodo misura, domanda aperta e data. Limita la conclusione a quel set e quell’opzione. Una galleria non verifica un venditore intero."
    ],
    "lovegobuy-shipping-weight":[
      "Pianifica con tre numeri separati: prezzo origine, peso magazzino e stima pacco. Una guida spiega il rapporto, ma non può pubblicare un costo permanente al chilo per ogni paese e linea.",
      "Indica se il peso descrive prodotto, imballaggio venditore o articolo in magazzino. Aggiungi cartone, protezione e consolidamento, poi sostituisci la stima dopo rehearsal o imballaggio finale.",
      "Un pacco 40 × 30 × 20 cm occupa 24.000 cm³; diviso 6000 dà 4 kg volumetrici. È un esempio, non un preventivo. Misura i punti esterni più lunghi.",
      "Rimuovere una scatola non è sempre meglio. Confronta volume risparmiato, protezione necessaria e valore dell’imballaggio. Oggetti morbidi e rigidi richiedono scelte diverse; verifica il risultato.",
      "L’aiuto indicizzato dice che un pacco troppo pesante o grande può non mostrare linee e cita divisione o rehearsal. Identifica prima peso, dimensioni, proprietà o destinazione come causa.",
      "Confronta solo linee idonee con dati identici. Salva nome, peso, dimensioni, volume, stima, restrizioni, protezione e ora. Un pacco diverso non è confronto equo.",
      "Al 1 settembre 2026 Trustpilot mostrava circa 4,4 e quasi 576 recensioni. Reddit unisce esperienze positive e lamentele su QC, rimborso, supporto o spedizione. Offre domande, non predizioni.",
      "Prima del pagamento registra destinazione, numero pacchi, peso reale, misure, calcolo volumetrico, linea, importo e ora. Se cambia, confronta input e classificazione e contatta il supporto con dati esatti."
    ]
  }
};
