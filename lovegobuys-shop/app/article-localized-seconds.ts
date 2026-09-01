import type { Language } from "./site-content";

type LocalizedLanguage = Exclude<Language, "en">;

export const localizedArticleSeconds: Record<LocalizedLanguage, Record<string, string[]>> = {
  de: {
    "lovegobuy-spreadsheet-guide": [
      "Diese Unterscheidung ist wichtig, weil selbst ein sauber gepflegtes Spreadsheet veraltete oder falsch zugeordnete Routen enthalten kann. Eine hohe Artikelzahl beweist weder aktuellen Bestand noch verlässliche Größenangaben oder brauchbare QC-Nachweise. Sein Wert liegt in der Zeitersparnis beim Eingrenzen, nicht in einer Garantie für einzelne Zeilen.",
      "Ein Kategoriefilter sorgt dafür, dass jeder Kandidat dieselben Fragen beantworten muss. Bei Kleidung vergleichst du Brust, Länge, Schulter, Stoff sowie Druck oder Stickerei; bei Schuhen Profil, Zehenform, Ferse, Außensohle, Zunge und Innensohlenreferenz; bei Taschen Maße, Innenraum, Verschlüsse, Gurte, Hardware und Leergewicht.",
      "Wenn die Zielseite viele unterschiedliche Produkte zeigt, identifiziere zuerst die genaue Option. Haben sich Bild oder Titel geändert, entferne die Zeile, bis die Verbindung nachvollziehbar ist. Eine schwache Weiterleitung erzeugt Unsicherheit für jede spätere Prüfung, einschließlich QC und Paketplanung.",
      "Bezeichnungen wie best, must buy, beliebt oder verifiziert erhalten allein keinen Punkt. Sie beschreiben Aufmerksamkeit oder Werbung, keine Belege. Auch ein niedriger Preis gleicht keine unklare Variante, fehlende Maße oder eine nicht mehr passende Zielseite aus.",
      "Wiederholte Gesamtansichten ersetzen keine Nahaufnahme, und ein dramatischer Winkel kann Proportionen verbergen. Lagerlicht und Bildverarbeitung können Farben verschieben. Fotos zeigen sichtbare Abweichungen, beweisen aber weder Materialzusammensetzung, Funktion, Echtheit noch Langzeithaltbarkeit.",
      "Der öffentliche LoveGoBuy-Versandrechner erklärt Volumengewicht mit Länge × Breite × Höhe in Zentimetern geteilt durch 6000. Divisor, Route, Einschränkungen und Preis können sich ändern; für eine echte Planung ist deshalb immer die aktuelle offizielle Schätzung maßgeblich.",
      "Ein Beispiel: Für den Vergleich behalten; Route und Farbe passen; Front-, Rück- und Messansicht sind brauchbar; das Brustmaß muss noch bestätigt werden; die günstigere Alternative hat keine Größentabelle; geprüft am 31. August 2026.",
      "Der beste Ablauf bleibt bewusst klein: eine Kategorie, drei Kandidaten, dieselben Nachweisfragen und eine letzte Prüfung. Das ist langsamer als jedes attraktive Vorschaubild zu speichern und deutlich schneller als Fehler nach Zahlung oder internationalem Versand zu klären."
    ],
    "lovegobuy-qc-photo-guide": [
      "Es bleiben Fotografien und keine Garantien. Sie können Faserzusammensetzung, Echtheit, elektronische Funktion, inneren Aufbau, langfristige Haltbarkeit oder eine erfolgreiche Zustellung nicht beweisen. Ziel ist die Verringerung sichtbarer Unsicherheit, nicht die Umwandlung eines Bildsets in ein Versprechen.",
      "Prüfe die Konsistenz über alle Ansichten. Linker und rechter Schuh müssen zum selben Paar gehören, ein Größenetikett muss zur gewählten Option passen und der Tascheninnenraum zum äußeren Modell. Stoppe, wenn Bilder wiederverwendet wirken oder sich die Zielseite geändert hat.",
      "Zoomen hilft nur bei ausreichend scharfen Originalbildern. Wiederholte entfernte Ansichten beantworten keine Detailfrage. Fehlt ein entscheidender Bereich, benenne genau die benötigte Ansicht oder Messung, statt pauschal um ein weiteres Foto zu bitten.",
      "Kontrolliere, dass die Größentabelle zum aktuellen Produkt und zur gewählten Option gehört. Verkäuferangaben, Spreadsheet-Notizen und Lagermessungen können unterschiedliche Methoden verwenden. Notiere, ob flach, als Umfang, innen oder außen gemessen wurde.",
      "Frage, ob der Winkel einen Vergleich ermöglicht. Gerade Front-, Seiten- und Rückansichten sind meist stabiler als ein diagonales Bild. Wenn Proportionen wichtig sind, verwende Messwerte statt einer rein optischen Schätzung.",
      "Halte die Checkliste kurz genug, um sie wirklich zu benutzen. Fünf kategoriespezifische Fragen sind meist nützlicher als zwanzig allgemeine. Priorisiere Details, die Passform, Identität, sichtbaren Zustand oder Versand beeinflussen.",
      "Wenn ein sichtbares Problem deine Entscheidung verändert, nutze den aktuellen offiziellen Bestell- oder Supportablauf. Ein unabhängiger Leitfaden kann keine kontospezifischen Schritte, Fristen, Gebühren oder Rückgabeberechtigungen bestimmen.",
      "Die drei Durchgänge Identität, Verarbeitung und Maßstab halten die Prüfung fokussiert. Sie machen aus einer Galerie beantwortbare Fragen und verhindern, dass das attraktivste Foto die gesamte Entscheidung dominiert."
    ],
    "lovegobuy-shipping-weight": [
      "Vergleiche Produkte mit Blick auf die voraussichtlichen Gesamtkosten. Ein dünnes Kleidungsstück und ein Paar Schuhe im Karton können ähnlich viel kosten, aber sehr unterschiedliche Auswirkungen auf abrechenbares Gewicht und Paketvolumen haben.",
      "Allgemeine Gewichtsbereiche sind nur frühe Planungshilfen, keine Fakten über einen bestimmten Artikel. Das gemessene Lagergewicht und das endgültig verpackte Paket liefern bessere Informationen als ein Kategoriedurchschnitt.",
      "Die veröffentlichte Formel erklärt das Konzept, doch Divisor und Vergleichsmethode können je nach Linie abweichen. Verwende für Ziel und Paket immer die aktuelle offizielle Schätzung, statt eine Formel als universell zu behandeln.",
      "Unnötiges Volumen zu reduzieren kann helfen, Schutz und Produktzustand bleiben jedoch wichtig. Jede Verpackungsanfrage muss Platzersparnis und Beschädigungsrisiko gegeneinander abwägen.",
      "Prüfe die Zulässigkeit vor dem Preisvergleich. Routennamen und Bedingungen ändern sich, und ein alter Screenshot oder Erfahrungsbericht beschreibt möglicherweise nicht die aktuell verfügbaren Optionen.",
      "Erstelle den Vergleich um die tatsächliche Entscheidung: aktuell angezeigter Linienname, zulässige Artikelarten, Gewicht, Maße, Volumengewicht, Schätzung, Schutz und Prüfzeit. Vergleiche nur Linien, die dasselbe Paket transportieren können.",
      "Nutze Bewertungen für Kontext und aktuelle offizielle Werkzeuge für Berechnungen. Berücksichtige positive und negative Erfahrungen, statt nur Beispiele auszuwählen, die eine vorher festgelegte Meinung bestätigen.",
      "Die verlässliche Reihenfolge lautet: Nachweise zuerst, Berechnung danach und Zahlung zuletzt. Kein unabhängiger statischer Leitfaden ersetzt die aktuelle offizielle Schätzung oder eine kontospezifische Supportantwort."
    ]
  },
  es: {
    "lovegobuy-spreadsheet-guide": [
      "La diferencia importa porque incluso una hoja limpia puede contener rutas antiguas o mal relacionadas. Un gran número de artículos no demuestra stock actual, tallas fiables ni pruebas QC útiles. Su valor es ahorrar tiempo al reducir la búsqueda, no ofrecer una garantía sobre cada fila.",
      "Navegar primero por categoría obliga a todos los candidatos a responder las mismas preguntas. En ropa compara pecho, largo, hombro, tejido e impresión o bordado; en calzado, perfil, puntera, talón, suela, lengüeta y referencia interior; en bolsos, medidas, interior, cierres, correas, herrajes y peso vacío.",
      "Si el destino muestra productos distintos, identifica primero la opción exacta. Si la imagen o el título cambiaron, retira la fila hasta poder explicar la relación. Una transferencia débil introduce incertidumbre en las revisiones posteriores de QC y planificación del paquete.",
      "Etiquetas como mejor, imprescindible, popular o verificado no reciben puntos por sí solas. Describen atención o marketing, no evidencia. Un precio bajo tampoco compensa una variante confusa, medidas ausentes o un destino que ya no coincide.",
      "Varias tomas generales no sustituyen un primer plano y un ángulo dramático puede ocultar proporciones. La luz del almacén y el procesado pueden cambiar el color. Las fotos muestran diferencias visibles, pero no prueban composición, función, autenticidad o duración.",
      "El estimador público de LoveGoBuy explica el peso volumétrico con largo × ancho × alto en centímetros dividido entre 6000. Divisor, ruta, restricciones y precio pueden cambiar; para planificar hay que usar la estimación oficial actual.",
      "Ejemplo: conservar para comparar; ruta y color coinciden; las vistas frontal, trasera y de medición son útiles; falta confirmar el pecho; la alternativa más barata no tiene tabla de tallas; revisado el 31 de agosto de 2026.",
      "El mejor flujo es deliberadamente pequeño: una categoría, tres candidatos, las mismas preguntas y una última comprobación. Es más lento que guardar cada miniatura atractiva y mucho más rápido que resolver errores después del pago o del envío internacional."
    ],
    "lovegobuy-qc-photo-guide": [
      "Siguen siendo fotografías, no garantías. No pueden demostrar composición de fibras, autenticidad, funcionamiento electrónico, construcción interna, durabilidad prolongada o entrega correcta. El objetivo es reducir incertidumbre visible, no convertir la galería en una promesa.",
      "Busca consistencia entre todas las vistas. Ambos zapatos deben pertenecer al mismo par, la etiqueta de una prenda debe coincidir con la talla elegida y el interior de un bolso con su exterior. Detente si las imágenes parecen reutilizadas o el destino ha cambiado.",
      "El zoom solo ayuda cuando la imagen original tiene definición suficiente. Varias tomas lejanas no responden preguntas de detalle. Si falta una zona crítica, indica la vista o medida concreta necesaria en lugar de pedir otra foto de forma vaga.",
      "Comprueba que la tabla corresponda al producto y opción actuales. Las tablas del vendedor, notas de la hoja y mediciones del almacén pueden utilizar métodos distintos. Registra si la medida es en plano, contorno, longitud interior o dimensión exterior.",
      "Pregúntate si el ángulo permite comparar. Las vistas rectas de frente, lado y parte trasera suelen ser más estables que una diagonal llamativa. Cuando la proporción importe, utiliza medidas.",
      "Mantén la lista lo bastante corta para usarla. Cinco preguntas propias de la categoría suelen ser mejores que veinte genéricas. Prioriza detalles que afecten ajuste, identidad, estado visible o envío.",
      "Si un problema visible cambia tu decisión, utiliza el flujo oficial actual de pedido o soporte. Una guía independiente no puede decidir acciones, plazos, tasas o elegibilidad de devolución de una cuenta concreta.",
      "El método de tres pasos —identidad, construcción y escala— mantiene la revisión enfocada. Convierte una galería en preguntas y evita que la imagen más atractiva domine toda la decisión."
    ],
    "lovegobuy-shipping-weight": [
      "Compara con una mentalidad de coste final. Una prenda fina y unos zapatos con caja pueden tener precios de origen parecidos, pero efectos muy distintos sobre el peso facturable y el volumen del paquete.",
      "Trata los rangos de peso genéricos como orientación inicial, no como hechos sobre un artículo concreto. La medición del almacén y el paquete final ofrecen mejor información que una media de categoría.",
      "La fórmula publicada ayuda a entender el concepto, pero el divisor y el método pueden variar por ruta. Usa siempre la estimación oficial actual para el destino y el paquete elegidos.",
      "Reducir volumen innecesario puede ayudar, pero la protección y el estado del producto siguen importando. Cualquier solicitud de embalaje debe equilibrar ahorro de espacio y riesgo de daño.",
      "Comprueba la elegibilidad antes de comparar precios. Los nombres y condiciones cambian, y una captura o reseña antigua puede no describir las opciones del paquete actual.",
      "Construye la tabla alrededor de la decisión: nombre actual, artículos admitidos, peso, dimensiones, peso volumétrico, estimación, protección y hora de revisión. Compara únicamente líneas capaces de transportar el mismo paquete.",
      "Usa plataformas de reseñas para contexto y herramientas oficiales actuales para el cálculo. Mantén a la vista experiencias positivas y negativas en lugar de seleccionar solo las que apoyan una conclusión previa.",
      "La secuencia fiable es evidencia primero, cálculo después y pago al final. Ninguna guía estática independiente sustituye la estimación oficial viva o una respuesta de soporte para esa cuenta."
    ]
  },
  fr: {
    "lovegobuy-spreadsheet-guide": [
      "Cette distinction compte, car même une feuille propre peut contenir des liens périmés ou mal associés. Un grand nombre d’articles ne prouve ni le stock actuel, ni des tailles fiables, ni des preuves QC utiles. La feuille fait gagner du temps pour réduire la recherche ; elle ne garantit pas chaque ligne.",
      "Le tri par catégorie impose les mêmes questions à chaque candidat. Pour les vêtements, comparez poitrine, longueur, épaules, tissu, impression ou broderie ; pour les chaussures, profil, pointe, talon, semelle, languette et longueur intérieure ; pour les sacs, dimensions, intérieur, fermetures, sangles, quincaillerie et poids à vide.",
      "Si la destination affiche plusieurs produits sans rapport, identifiez l’option exacte. Si l’image ou le titre a changé, retirez la ligne jusqu’à pouvoir expliquer le lien. Un transfert faible crée de l’incertitude pour le QC et la préparation du colis.",
      "Des mentions comme meilleur, indispensable, populaire ou vérifié ne valent aucun point seules. Elles décrivent l’attention ou le marketing, pas une preuve. Un prix bas ne compense pas une variante ambiguë, des mesures absentes ou une destination différente.",
      "Plusieurs vues larges ne remplacent pas un gros plan et un angle spectaculaire peut cacher les proportions. L’éclairage et le traitement modifient parfois la couleur. Les photos révèlent des écarts visibles sans prouver matière, fonction, authenticité ou durée de vie.",
      "L’estimateur public LoveGoBuy explique le poids volumétrique par longueur × largeur × hauteur en centimètres divisée par 6000. Diviseur, ligne, restrictions et prix peuvent changer ; utilisez l’estimation officielle actuelle pour planifier.",
      "Exemple : garder pour comparaison ; lien et couleur correspondent ; vues avant, arrière et mesure utiles ; poitrine à confirmer ; l’alternative moins chère n’a pas de tableau de tailles ; vérifié le 31 août 2026.",
      "La meilleure méthode reste volontairement courte : une catégorie, trois candidats, les mêmes questions et une dernière vérification. Elle est plus lente que sauvegarder chaque miniature et bien plus rapide que corriger une erreur après paiement ou expédition."
    ],
    "lovegobuy-qc-photo-guide": [
      "Ce sont toujours des photographies, pas des garanties. Elles ne prouvent ni composition des fibres, authenticité, fonction électronique, construction interne, durabilité à long terme ou livraison réussie. Le but est de réduire l’incertitude visible, pas de transformer la galerie en promesse.",
      "Vérifiez la cohérence entre les vues. Les deux chaussures doivent former la même paire, l’étiquette du vêtement correspondre à la taille choisie et l’intérieur du sac à son extérieur. Arrêtez-vous si des images semblent réutilisées ou si la destination a changé.",
      "Le zoom n’aide que si l’original est assez net. Plusieurs vues éloignées ne répondent pas aux questions de détail. Si une zone critique manque, demandez précisément la vue ou la mesure nécessaire plutôt qu’une photo supplémentaire vague.",
      "Vérifiez que le tableau correspond au produit et à l’option actuels. Tableaux vendeur, notes de feuille et mesures d’entrepôt peuvent suivre des méthodes différentes. Notez si la mesure est à plat, en circonférence, intérieure ou extérieure.",
      "Demandez-vous si l’angle facilite la comparaison. Des vues droites de face, côté et dos sont généralement plus stables qu’une diagonale spectaculaire. Utilisez des mesures lorsque la proportion compte.",
      "Gardez la liste assez courte pour être utilisée. Cinq questions propres à la catégorie sont souvent plus utiles que vingt questions génériques. Priorisez ajustement, identité, état visible et effet sur la livraison.",
      "Si un problème visible change votre décision, utilisez le parcours officiel actuel de commande ou de support. Un guide indépendant ne peut déterminer actions, délais, frais ou éligibilité au retour d’un compte précis.",
      "Les trois étapes — identité, fabrication et échelle — gardent l’examen ciblé. Elles transforment la galerie en questions et empêchent l’image la plus séduisante de dominer la décision."
    ],
    "lovegobuy-shipping-weight": [
      "Comparez les produits avec une logique de coût livré. Un vêtement fin et des chaussures en boîte peuvent avoir des prix source proches, mais des effets très différents sur le poids facturable et le volume.",
      "Considérez les plages de poids générales comme une première aide, pas comme un fait sur un article précis. La mesure d’entrepôt et le colis final sont plus fiables qu’une moyenne de catégorie.",
      "La formule publiée aide à comprendre le principe, mais le diviseur et la méthode peuvent varier selon la ligne. Utilisez toujours l’estimation officielle actuelle pour le colis et la destination choisis.",
      "Réduire le volume inutile peut aider, mais la protection et l’état du produit restent importants. Toute demande d’emballage doit équilibrer gain d’espace et risque de dommage.",
      "Vérifiez l’éligibilité avant de comparer les prix. Les noms et conditions changent ; une ancienne capture ou un ancien avis peut ne pas décrire les options disponibles aujourd’hui.",
      "Construisez le tableau autour de la décision : nom actuel, articles acceptés, poids, dimensions, poids volumétrique, estimation, protection et heure. Comparez uniquement les lignes capables de transporter le même colis.",
      "Utilisez les avis pour le contexte et les outils officiels actuels pour le calcul. Gardez des expériences positives et négatives au lieu de ne retenir que celles qui confirment une conclusion prévue.",
      "La séquence fiable est preuve, calcul, puis paiement. Aucun guide statique indépendant ne remplace l’estimation officielle en direct ou la réponse du support pour ce compte."
    ]
  },
  it: {
    "lovegobuy-spreadsheet-guide": [
      "La distinzione conta perché anche un foglio ordinato può contenere rotte vecchie o abbinate male. Un grande numero di articoli non prova disponibilità, taglie affidabili o prove QC utili. Il valore è il tempo risparmiato nel restringere la ricerca, non una garanzia sulla riga.",
      "Navigare per categoria impone le stesse domande a ogni candidato. Per abiti confronta petto, lunghezza, spalle, tessuto, stampa o ricamo; per scarpe profilo, punta, tallone, suola, linguetta e riferimento interno; per borse misure, interno, chiusure, cinghie, hardware e peso vuoto.",
      "Se la destinazione mostra prodotti diversi, identifica l’opzione esatta. Se immagine o titolo sono cambiati, rimuovi la riga finché il rapporto non è spiegabile. Un passaggio debole crea incertezza per QC e pianificazione del pacco.",
      "Etichette come migliore, da comprare, popolare o verificato non valgono punti da sole. Descrivono attenzione o marketing, non prove. Un prezzo basso non compensa una variante confusa, misure assenti o una pagina che non coincide più.",
      "Viste generali ripetute non sostituiscono un dettaglio e un’angolazione drammatica può nascondere le proporzioni. Luce e trattamento possono cambiare il colore. Le foto mostrano differenze visibili ma non provano materiale, funzione, autenticità o durata.",
      "Lo stimatore pubblico LoveGoBuy spiega il peso volumetrico come lunghezza × larghezza × altezza in centimetri diviso 6000. Divisore, linea, restrizioni e prezzo possono cambiare; usa la stima ufficiale attuale.",
      "Esempio: conserva per confronto; rotta e colore coincidono; viste frontale, posteriore e misura utili; petto da confermare; l’alternativa più economica non ha tabella taglie; verificato il 31 agosto 2026.",
      "Il flusso migliore è volutamente ridotto: una categoria, tre candidati, le stesse domande e un controllo finale. È più lento che salvare ogni miniatura e molto più veloce che risolvere errori dopo pagamento o spedizione."
    ],
    "lovegobuy-qc-photo-guide": [
      "Restano fotografie, non garanzie. Non possono provare composizione delle fibre, autenticità, funzione elettronica, costruzione interna, durata nel tempo o consegna riuscita. L’obiettivo è ridurre l’incertezza visibile, non trasformare la galleria in una promessa.",
      "Cerca coerenza fra tutte le viste. Le due scarpe devono formare la stessa coppia, l’etichetta del capo coincidere con la taglia scelta e l’interno della borsa con l’esterno. Fermati se le immagini sembrano riutilizzate o la destinazione è cambiata.",
      "Lo zoom aiuta solo se l’originale è abbastanza nitido. Viste lontane ripetute non rispondono ai dettagli. Se manca una zona critica, indica la vista o la misura precisa invece di chiedere genericamente un’altra foto.",
      "Controlla che la tabella appartenga al prodotto e all’opzione attuali. Tabelle del venditore, note del foglio e misure di magazzino possono usare metodi diversi. Registra se la misura è in piano, circonferenza, interna o esterna.",
      "Chiediti se l’angolo facilita il confronto. Viste dritte frontali, laterali e posteriori sono in genere più stabili di una diagonale spettacolare. Usa misure quando conta la proporzione.",
      "Mantieni la lista abbastanza breve da usarla. Cinque domande specifiche della categoria sono spesso migliori di venti generiche. Dai priorità a vestibilità, identità, stato visibile e spedizione.",
      "Se un problema visibile cambia la decisione, usa il flusso ufficiale attuale per ordine o supporto. Una guida indipendente non determina azioni, scadenze, costi o idoneità al reso di un account specifico.",
      "I tre passaggi — identità, costruzione e scala — mantengono la revisione focalizzata. Trasformano la galleria in domande e impediscono alla foto più bella di dominare la decisione."
    ],
    "lovegobuy-shipping-weight": [
      "Confronta con una logica di costo consegnato. Un capo leggero e scarpe con scatola possono avere prezzi simili, ma effetti molto diversi sul peso fatturabile e sul volume.",
      "Considera le fasce di peso generiche come orientamento iniziale, non fatti su un articolo preciso. La misura di magazzino e il pacco finale sono più utili di una media di categoria.",
      "La formula pubblicata aiuta a capire il concetto, ma divisore e metodo possono variare per linea. Usa sempre la stima ufficiale attuale per destinazione e pacco scelti.",
      "Ridurre volume inutile può aiutare, ma protezione e stato del prodotto restano importanti. Ogni richiesta di imballaggio deve bilanciare spazio risparmiato e rischio di danni.",
      "Controlla l’idoneità prima di confrontare i prezzi. Nomi e condizioni cambiano e una vecchia schermata o recensione può non descrivere le opzioni attuali.",
      "Costruisci la tabella intorno alla decisione: nome attuale, articoli ammessi, peso, misure, peso volumetrico, stima, protezione e ora. Confronta solo linee che trasportano lo stesso pacco.",
      "Usa le recensioni per il contesto e gli strumenti ufficiali attuali per il calcolo. Considera esperienze positive e negative senza selezionare solo quelle che confermano una conclusione già scelta.",
      "La sequenza affidabile è prove, calcolo e infine pagamento. Nessuna guida statica indipendente sostituisce la stima ufficiale live o una risposta del supporto per quell’account."
    ]
  }
};

export const localizedArticleFourths: Record<LocalizedLanguage, Record<string, string[]>> = {
  de: { "lovegobuy-shipping-weight": ["Halte Steuern, Zollentscheidungen und mögliche Gebühren des letzten Zustellers aus unbelegten Versprechen heraus. Sie hängen von Ziel, Deklaration, Transporteur und aktuellem Recht ab. Ein verantwortlicher Leitfaden nennt Eingaben und Zeitpunkt, macht aus einer Schätzung aber weder eine Liefergarantie noch das Versprechen fester Tage oder ausbleibender Zusatzkosten."] },
  es: { "lovegobuy-shipping-weight": ["Mantén impuestos, decisiones aduaneras y posibles cargos de última milla fuera de promesas sin respaldo. Dependen del destino, declaración, transportista y normativa vigente. Una guía responsable indica datos y hora, pero no convierte una estimación en garantía de entrega, plazo fijo o ausencia de costes adicionales."] },
  fr: { "lovegobuy-shipping-weight": ["N’intégrez pas taxes, décisions douanières et frais éventuels du dernier transporteur dans une promesse non prouvée. Ils dépendent de la destination, de la déclaration, du transporteur et du droit actuel. Un guide responsable précise les données et l’heure sans transformer une estimation en garantie de livraison ou d’absence de frais."] },
  it: { "lovegobuy-shipping-weight": ["Tieni tasse, decisioni doganali e possibili costi dell’ultimo corriere fuori da promesse non provate. Dipendono da destinazione, dichiarazione, vettore e norme attuali. Una guida responsabile indica dati e ora, ma non trasforma una stima in garanzia di consegna, giorni fissi o assenza di costi extra."] }
};
