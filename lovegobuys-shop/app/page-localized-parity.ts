import type { Language } from "./site-content";
import type { ContentRecord } from "./page-copy";

type LocalizedLanguage = Exclude<Language, "en">;
type SectionCopy = { title: string; body: string[]; points?: string[] };
type PageMap = Record<Language, Record<string, ContentRecord>>;

const parity: Record<LocalizedLanguage, Record<string, SectionCopy[]>> = {
  de: {
    spreadsheet: [
      { title: "Mit einer Kategorie beginnen", body: ["Eine gemischte Liste kann einen durchschnittlichen Artikel interessant erscheinen lassen, nur weil davor zehn völlig andere Produkte stehen. Wähle zuerst eine Kategorie, damit Preis, Größenangaben, Fotos und wahrscheinliches Gewicht unter vergleichbaren Bedingungen bewertet werden.", "Bei Kleidung beginnst du mit Maßen und Hinweisen zum Stoff. Bei Schuhen prüfst du Profile, Außensohle, Innensohlenreferenz und Paargewicht. Bei Taschen zählen Abmessungen, Innenraum, Gurte, Hardware und Leergewicht."] },
      { title: "Jede Zeile als Hinweis behandeln", body: ["Eine Zeile ist eine Einladung zur Prüfung und kein Beweis für Qualität, Bestand oder Zuverlässigkeit des Verkäufers. Öffne die Zielseite und vergleiche Titel, Hauptbild, gewählte Option, Größenangaben und Quellpreis mit dem Spreadsheet-Eintrag."], points: ["Passende Route und Variante", "Nützliche QC-Ansichten", "Relevante Maße", "Aktueller Preiskontext", "Wahrscheinliches Packgewicht"] },
      { title: "Nachweise und Annahmen trennen", body: ["Notiere, was sichtbar ist und was unbekannt bleibt. Ein deutliches Produktfoto belegt das Aussehen, nicht Materialzusammensetzung, Funktion oder Echtheit. Ein Beliebtheitslabel zeigt Aufmerksamkeit, aber keine Qualität.", "Speichere einen Kandidaten nur, wenn du erklären kannst, warum er stärker bleibt als zwei ähnliche Alternativen."] },
      { title: "Vor jeder Aktion neu prüfen", body: ["Produktseiten, Optionen, Preise und Versandregeln ändern sich. Öffne das aktuelle Ziel vor einer Bestellung erneut und nutze für Transaktionen die aktuellen offiziellen Konto-, Zahlungs- und Routeninformationen."] }
    ],
    finds: [
      { title: "Mit einer offenen Frage suchen", body: ["Kombiniere die Kategorie mit dem Detail, das deine Entscheidung verändern kann: Brustmaß eines Hoodies, Außensohle eines Sneakers, Innenraum einer Tasche, Packgewicht einer Jacke oder Steckertyp eines Elektronikartikels. Eine genaue Suche entfernt unpassende Ergebnisse."], points: ["Produktart", "Fehlendes Detail", "Optionaler Quellenname", "Prüfdatum"] },
      { title: "Gleiches mit Gleichem vergleichen", body: ["Stelle drei ähnliche Produkte nebeneinander. Vergleiche sichtbare Verarbeitung, Größenangaben, Quellpreis und wahrscheinliche Versandwirkung. Eine schwere Jacke und ein dünnes Shirt sind kein fairer Vergleich, nur weil beide in derselben Liste stehen."] },
      { title: "Die Weiterleitung prüfen", body: ["Wenn eine Produktkarte eine andere Seite öffnet, bestätige, dass das Ziel noch passt. Konvertierte Links können den Zugang vereinfachen, bestätigen aber weder Option, Verkäufer, Bestand noch aktuellen Preis."] },
      { title: "Schwache Kandidaten früh entfernen", body: ["Eine fehlende Größentabelle, ein generisches Bild, eine unklare Variante oder eine falsche Zielseite sind Gründe für eine Pause. Eine kleine Liste erklärbarer Funde ist nützlicher als eine große Sammlung unsicherer Links."] }
    ],
    guide: [
      { title: "Durchgang 1 — Identität", body: ["Vergleiche Produktart, Farbe, gewählte Option und Hauptmerkmale zwischen Spreadsheet-Zeile und Zielseite. Stoppe, wenn die Weiterleitung zu einem anderen Produkt oder einer nicht zuordenbaren Variantengruppe führt."] },
      { title: "Durchgang 2 — Verarbeitung und Passform", body: ["Suche kategoriespezifische QC-Nachweise. Kleidung braucht Maße sowie Naht- oder Druckdetails. Schuhe brauchen beide Profile, Ferse, Zehenform, Sohle und Innensohlenreferenz. Taschen brauchen Maßstab, Innenraum, Verschlüsse und Hardware."] },
      { title: "Durchgang 3 — Preis und Versand", body: ["Vergleiche den Quellpreis mit ähnlichen Funden und ergänze wahrscheinliches Packgewicht und Volumen. Internationaler Versand kann den scheinbaren Wert schwerer oder sperriger Produkte deutlich verändern."] },
      { title: "Durchgang 4 — Entscheidungsnotiz", body: ["Notiere behalten oder entfernen, verwendete Nachweise, wichtigste offene Frage, nächste Alternative und Prüfdatum. So wird aus vielen geöffneten Tabs eine wiederverwendbare Auswahlliste."], points: ["Behalten/entfernen", "Nachweis", "Offene Frage", "Nächste Alternative", "Prüfdatum"] }
    ],
    qc: [
      { title: "1. Identität und Variante", body: ["Vergleiche Farbe, Form, Option und Erkennungsmerkmale mit dem vorgesehenen Listing. Stelle sicher, dass die Fotoreihe zum aktuellen Artikel gehört und nicht zu einem allgemeinen Muster oder einer anderen Variante."] },
      { title: "2. Verarbeitung und Details", body: ["Prüfe je nach Kategorie Nähte, Kanten, Verschlüsse, Druckplatzierung, Hardware, Sohlenform, Futter, Anschlüsse oder Lieferumfang. Wiederholte Gesamtansichten ersetzen keine fokussierte Nahaufnahme."] },
      { title: "3. Passform, Maße oder Maßstab", body: ["Suche Größentabelle, Lineal, Kleidungsmaß, Innensohlenlänge, Taschenmaß oder eine andere stabile Referenz. Rein optischer Maßstab kann täuschen, besonders wenn sich der Kameraabstand ändert."] },
      { title: "Was Fotos nicht beweisen", body: ["QC-Bilder helfen bei sichtbaren Abweichungen oder Schäden, garantieren aber weder Materialzusammensetzung, Leistung, Echtheit, langfristige Haltbarkeit noch erfolgreiche Zustellung. Nutze Bildnachweise nur innerhalb dieser Grenzen."] }
    ],
    shipping: [
      { title: "Tatsächliches und volumetrisches Gewicht", body: ["Tatsächliches Gewicht wird auf einer Waage gemessen. Volumengewicht schätzt den beanspruchten Raum. Der öffentliche LoveGoBuy-Rechner zeigt die verbreitete Rechnung Länge × Breite × Höhe in Zentimetern geteilt durch 6000.", "Die konkrete Regel kann je nach Linie abweichen. Verwende deshalb den aktuellen offiziellen Rechner, statt eine Formel als dauerhaft gültig anzusehen."] },
      { title: "Ein realistisches Paket schätzen", body: ["Addiere die wahrscheinlichen Artikelgewichte und berücksichtige Karton, Schutzmaterial und Konsolidierung. Schuhe im Karton, Pufferjacken und strukturierte Taschen können wesentlich mehr Volumen erzeugen, als der Produktpreis vermuten lässt."] },
      { title: "Zulässigkeit vor dem Preis prüfen", body: ["Batterien, Flüssigkeiten, Magnete, markenbezogene Waren und andere eingeschränkte Kategorien können die verfügbaren Linien beeinflussen. Ein niedriger Preis ist bedeutungslos, wenn der Artikel die Linie nicht nutzen darf oder deren Größenlimit überschreitet."] },
      { title: "Zum letzten verantwortbaren Zeitpunkt prüfen", body: ["Kontrolliere vor der Paketzahlung Zielland, Routeneinschränkungen, abrechenbares Gewicht, deklarierte Optionen, Schutz und aktuelle Bedingungen. Routenpreise und Zeitangaben sind Momentaufnahmen, keine Versprechen."] }
    ],
    faq: [
      { title: "Was ist ein LoveGoBuy-Spreadsheet?", body: ["Es ist ein Verzeichnis, das Produktlinks, Kategorien, Bilder, Preise oder Notizen ordnet. Es unterstützt Suche und Vergleich, garantiert aber nicht, dass jede Zeile aktuell, richtig oder geeignet ist."] },
      { title: "Ist dies ein offizieller LoveGoBuy-Dienst?", body: ["Nein. Diese unabhängige Seite erstellt keine Konten, nimmt keine Zahlungen an, kauft keine Waren, lagert keine Artikel, verfolgt keine Pakete und entscheidet keine Erstattungen. Nutze für Konto- und Transaktionsaktionen die verifizierte offizielle Plattform."] },
      { title: "Bedeutet eine Produktkarte verifiziert?", body: ["Nein. Sie bedeutet nur, dass eine Route beim Prüfen verfügbar war. Bestätige aktuelle Zielseite, Option, Verkäuferangaben, QC-Nachweise, Maße, Preis, Bestand und Einschränkungen selbst."] },
      { title: "Wie viel kostet der Versand?", body: ["Es gibt keinen dauerhaft gültigen Gesamtbetrag. Ziel, Route, tatsächliches Gewicht, Maße, Produkteinschränkungen, Gebühren, Zoll und Übergabe an Zusteller können das Ergebnis verändern. Verwende aktuelle offizielle Planungstools."] }
    ]
  },
  es: {
    spreadsheet: [
      { title: "Empieza por una categoría", body: ["Una hoja mezclada puede hacer que un producto normal parezca interesante solo porque aparece después de diez artículos sin relación. Elige primero una categoría para comparar precio, talla, fotos y peso probable en condiciones equivalentes.", "En ropa, empieza por medidas y pistas del tejido. En calzado, revisa perfiles, suela, referencia interior y peso del par. En bolsos, céntrate en dimensiones, interior, correas, herrajes y peso vacío."] },
      { title: "Trata cada fila como una pista", body: ["Una fila invita a investigar; no demuestra calidad, stock o fiabilidad del vendedor. Abre el destino y compara título, imagen principal, opción elegida, información de talla y precio de origen con la entrada de la hoja."], points: ["Ruta y variante coinciden", "Ángulos QC útiles", "Medidas relevantes", "Contexto de precio actual", "Peso embalado probable"] },
      { title: "Separa pruebas y suposiciones", body: ["Anota qué se ve y qué sigue siendo desconocido. Una foto clara demuestra apariencia, no composición, funcionamiento o autenticidad. Una etiqueta popular indica atención, no calidad.", "Guarda un candidato solo cuando puedas explicar por qué sigue siendo mejor que dos alternativas parecidas."] },
      { title: "Revisa antes de actuar", body: ["Las fichas, opciones, precios y reglas de envío cambian. Vuelve a abrir el destino vivo antes de pedir y usa información oficial actual de cuenta, pago y rutas para cualquier transacción."] }
    ],
    finds: [
      { title: "Busca con una pregunta abierta", body: ["Combina la categoría con el detalle que podría cambiar la decisión: pecho de una sudadera, suela de una zapatilla, interior de un bolso, peso embalado de una chaqueta o tipo de enchufe de un dispositivo. Las búsquedas concretas eliminan ruido."], points: ["Tipo de producto", "Detalle ausente", "Fuente opcional", "Fecha revisada"] },
      { title: "Compara productos equivalentes", body: ["Coloca tres productos cercanos juntos. Compara construcción visible, tallas, precio de origen y efecto probable del envío. No compares una chaqueta pesada con una camiseta fina solo porque aparecen en la misma hoja."] },
      { title: "Inspecciona el destino", body: ["Cuando una tarjeta abra otro sitio, confirma que el destino siga coincidiendo. Los enlaces convertidos facilitan el acceso, pero no validan opción, vendedor, stock o precio actual."] },
      { title: "Elimina candidatos débiles pronto", body: ["Una tabla de tallas ausente, una imagen genérica, una variante confusa o un destino incorrecto son motivos para detenerse. Una lista pequeña de hallazgos explicables es más útil que muchos enlaces inciertos."] }
    ],
    guide: [
      { title: "Paso 1 — Identidad", body: ["Confirma tipo, color, opción elegida y características principales entre la fila y el destino. Detente si la transferencia lleva a otro producto o a un grupo de variantes imposible de identificar."] },
      { title: "Paso 2 — Construcción y ajuste", body: ["Busca pruebas QC propias de la categoría. La ropa necesita medidas y detalles de costura o impresión. El calzado necesita ambos perfiles, talón, puntera, suela y referencia interior. Los bolsos necesitan escala, interior, cierres y herrajes."] },
      { title: "Paso 3 — Precio y envío", body: ["Compara el precio de origen con hallazgos parecidos y añade peso embalado y volumen probables. El envío internacional puede cambiar el valor aparente de artículos pesados o voluminosos."] },
      { title: "Paso 4 — Nota de decisión", body: ["Registra conservar o eliminar, pruebas utilizadas, pregunta principal sin resolver, alternativa más cercana y fecha. Así conviertes muchas pestañas en una lista reutilizable."], points: ["Conservar/eliminar", "Prueba", "Pregunta abierta", "Alternativa cercana", "Fecha revisada"] }
    ],
    qc: [
      { title: "1. Identidad y variante", body: ["Comprueba color, forma, opción y detalles distintivos frente a la ficha prevista. Asegúrate de que las fotos correspondan al artículo actual y no a una muestra genérica u otra variante."] },
      { title: "2. Construcción y detalles", body: ["Revisa costuras, bordes, cierres, colocación de impresión, herrajes, forma de suela, forro, puertos o piezas según la categoría. Varias tomas generales no sustituyen primeros planos enfocados."] },
      { title: "3. Ajuste, dimensiones o escala", body: ["Busca tabla de talla, regla, medida de prenda, longitud interior, dimensión de bolso u otra referencia estable. La escala visual puede engañar, especialmente cuando cambia la distancia de la cámara."] },
      { title: "Lo que las fotos no prueban", body: ["Las imágenes QC ayudan a detectar diferencias o defectos visibles, pero no garantizan composición, rendimiento, autenticidad, durabilidad prolongada o entrega correcta. Mantén las conclusiones dentro de esos límites."] }
    ],
    shipping: [
      { title: "Peso real y volumétrico", body: ["El peso real se mide en una báscula. El volumétrico estima el espacio ocupado. El estimador público de LoveGoBuy muestra el cálculo habitual largo × ancho × alto en centímetros dividido entre 6000.", "La regla aplicable puede variar por ruta, por lo que debes usar el estimador oficial actual y no tratar una fórmula como permanente."] },
      { title: "Construye una estimación realista", body: ["Suma los pesos probables y deja margen para cartones, protección y consolidación. Zapatos con caja, chaquetas acolchadas y bolsos rígidos pueden generar mucho más volumen de lo que sugiere el precio del producto."] },
      { title: "Comprueba elegibilidad antes del precio", body: ["Baterías, líquidos, imanes, productos de marca y otras categorías restringidas pueden afectar las rutas. Una tarifa baja no importa si el artículo no puede usarla o supera sus límites de tamaño."] },
      { title: "Verifica en el último momento responsable", body: ["Antes del pago, revisa país de destino, restricciones, peso facturable, opciones declaradas, protección y condiciones actuales. Los precios y tiempos de ruta son capturas del momento, no promesas."] }
    ],
    faq: [
      { title: "¿Qué es una hoja LoveGoBuy?", body: ["Es un directorio que organiza enlaces, categorías, imágenes, precios o notas. Ayuda a descubrir y comparar, pero no garantiza que cada fila sea actual, exacta o adecuada."] },
      { title: "¿Es un servicio oficial de LoveGoBuy?", body: ["No. Este sitio independiente no crea cuentas, cobra, compra productos, almacena artículos, rastrea paquetes ni resuelve reembolsos. Utiliza la plataforma oficial verificada para acciones de cuenta y transacción."] },
      { title: "¿Una tarjeta significa que está verificado?", body: ["No. Solo significa que una ruta estaba disponible al revisarla. Vuelve a confirmar destino, opción, vendedor, pruebas QC, medidas, precio, stock y restricciones."] },
      { title: "¿Cuánto cuesta el envío?", body: ["No existe una cifra universal permanente. Destino, ruta, peso real, dimensiones, restricciones, tasas, aduanas y transportista final pueden cambiar el resultado. Usa herramientas oficiales actuales."] }
    ]
  },
  fr: {
    spreadsheet: [
      { title: "Commencer par une catégorie", body: ["Une feuille mélangée peut rendre un article moyen intéressant simplement parce qu’il suit dix produits sans rapport. Choisissez d’abord une catégorie afin de comparer prix, taille, photos et poids probable dans des conditions équivalentes.", "Pour les vêtements, commencez par les mesures et les indices de tissu. Pour les chaussures, vérifiez profils, semelle, longueur intérieure et poids de la paire. Pour les sacs, concentrez-vous sur dimensions, intérieur, sangles, quincaillerie et poids à vide."] },
      { title: "Traiter chaque ligne comme une piste", body: ["Une ligne invite à enquêter ; elle ne prouve ni qualité, stock ou fiabilité du vendeur. Ouvrez la destination et comparez titre, image principale, option choisie, taille et prix source avec l’entrée de la feuille."], points: ["Lien et variante correspondants", "Vues QC utiles", "Mesures pertinentes", "Prix actuel contextualisé", "Poids emballé probable"] },
      { title: "Séparer preuves et suppositions", body: ["Notez ce qui est visible et ce qui reste inconnu. Une photo claire prouve l’apparence, pas la composition, la fonction ou l’authenticité. Une mention populaire indique l’attention, pas la qualité.", "Gardez un candidat seulement si vous pouvez expliquer pourquoi il reste meilleur que deux alternatives proches."] },
      { title: "Revérifier avant d’agir", body: ["Fiches, options, prix et règles de livraison évoluent. Rouvrez la destination avant de commander et utilisez les informations officielles actuelles de compte, paiement et ligne pour toute transaction."] }
    ],
    finds: [
      { title: "Rechercher avec une question ouverte", body: ["Combinez la catégorie avec le détail qui peut changer la décision : poitrine d’un sweat, semelle d’une chaussure, intérieur d’un sac, poids emballé d’une veste ou type de prise électronique. Une recherche précise retire le bruit."], points: ["Type de produit", "Détail manquant", "Source facultative", "Date de vérification"] },
      { title: "Comparer des produits équivalents", body: ["Placez trois produits proches côte à côte. Comparez fabrication visible, tailles, prix source et effet probable sur la livraison. Ne comparez pas une veste lourde et un t-shirt fin simplement parce qu’ils figurent sur la même feuille."] },
      { title: "Inspecter la destination", body: ["Lorsqu’une carte ouvre un autre site, confirmez que la destination correspond toujours. Un lien converti facilite l’accès sans valider option, vendeur, stock ou prix actuel."] },
      { title: "Retirer tôt les candidats faibles", body: ["Tableau de tailles absent, image générique, variante ambiguë ou mauvaise destination sont des raisons de s’arrêter. Une petite liste de trouvailles explicables vaut mieux qu’une grande collection de liens incertains."] }
    ],
    guide: [
      { title: "Étape 1 — Identité", body: ["Confirmez type, couleur, option choisie et caractéristiques principales entre la ligne et la destination. Arrêtez-vous si le lien mène à un autre produit ou à un groupe de variantes impossible à identifier."] },
      { title: "Étape 2 — Fabrication et ajustement", body: ["Cherchez des preuves QC propres à la catégorie. Les vêtements demandent mesures et détails de couture ou d’impression. Les chaussures demandent deux profils, talon, pointe, semelle et longueur intérieure. Les sacs demandent échelle, intérieur, fermetures et quincaillerie."] },
      { title: "Étape 3 — Prix et livraison", body: ["Comparez le prix source avec des produits proches, puis ajoutez poids emballé et volume probables. La livraison internationale peut modifier la valeur apparente des articles lourds ou volumineux."] },
      { title: "Étape 4 — Note de décision", body: ["Notez garder ou retirer, preuves utilisées, principale question ouverte, alternative la plus proche et date. Les onglets ouverts deviennent ainsi une présélection réutilisable."], points: ["Garder/retirer", "Preuve", "Question ouverte", "Alternative proche", "Date vérifiée"] }
    ],
    qc: [
      { title: "1. Identité et variante", body: ["Comparez couleur, forme, option et détails distinctifs avec la fiche prévue. Vérifiez que les photos appartiennent à l’article actuel et non à un exemple générique ou à une autre variante."] },
      { title: "2. Fabrication et détails", body: ["Inspectez coutures, bords, fermetures, placement de l’impression, quincaillerie, forme de semelle, doublure, ports ou accessoires selon la catégorie. Des vues larges répétées ne remplacent pas un gros plan net."] },
      { title: "3. Ajustement, dimensions ou échelle", body: ["Cherchez tableau de taille, règle, mesure de vêtement, longueur intérieure, dimension de sac ou autre référence stable. L’échelle visuelle peut tromper, surtout lorsque la distance de l’appareil change."] },
      { title: "Ce que les photos ne prouvent pas", body: ["Les images QC aident à détecter écarts ou défauts visibles, sans garantir composition, performance, authenticité, durabilité à long terme ou livraison réussie. Limitez les conclusions à ce qu’elles montrent."] }
    ],
    shipping: [
      { title: "Poids réel et volumétrique", body: ["Le poids réel se mesure sur une balance. Le poids volumétrique estime l’espace occupé. L’estimateur public LoveGoBuy affiche le calcul courant longueur × largeur × hauteur en centimètres divisé par 6000.", "La règle applicable peut varier selon la ligne. Utilisez donc l’estimateur officiel actuel plutôt que de considérer une formule comme permanente."] },
      { title: "Construire une estimation réaliste", body: ["Additionnez les poids probables et prévoyez carton, protection et consolidation. Chaussures en boîte, doudounes et sacs structurés peuvent créer beaucoup plus de volume que leur prix ne le suggère."] },
      { title: "Vérifier l’éligibilité avant le prix", body: ["Batteries, liquides, aimants, produits de marque et autres catégories restreintes peuvent limiter les lignes. Un tarif bas est inutile si le produit n’est pas accepté ou dépasse la taille autorisée."] },
      { title: "Vérifier au dernier moment responsable", body: ["Avant paiement, revérifiez pays, restrictions, poids facturable, options déclarées, protection et conditions actuelles. Prix et délais de ligne sont des instantanés, pas des promesses."] }
    ],
    faq: [
      { title: "Qu’est-ce qu’une feuille LoveGoBuy ?", body: ["C’est un annuaire qui organise liens, catégories, images, prix ou notes. Il facilite découverte et comparaison sans garantir que chaque ligne soit actuelle, exacte ou adaptée."] },
      { title: "S’agit-il d’un service officiel LoveGoBuy ?", body: ["Non. Ce site indépendant ne crée pas de comptes, n’encaisse pas, n’achète pas, ne stocke pas, ne suit pas les colis et ne décide pas des remboursements. Utilisez la plateforme officielle vérifiée pour le compte et les transactions."] },
      { title: "Une carte signifie-t-elle vérifié ?", body: ["Non. Elle indique seulement qu’une route était disponible lors du contrôle. Confirmez destination, option, vendeur, preuves QC, mesures, prix, stock et restrictions."] },
      { title: "Combien coûte la livraison ?", body: ["Il n’existe pas de chiffre universel permanent. Destination, ligne, poids réel, dimensions, restrictions, frais, douane et dernier transporteur peuvent changer le résultat. Utilisez les outils officiels actuels."] }
    ]
  },
  it: {
    spreadsheet: [
      { title: "Inizia da una categoria", body: ["Un foglio misto può far sembrare interessante un articolo medio solo perché segue dieci prodotti non collegati. Scegli prima una categoria per confrontare prezzo, taglia, foto e peso probabile in condizioni equivalenti.", "Per l’abbigliamento inizia da misure e indizi sul tessuto. Per le scarpe controlla profili, suola, riferimento interno e peso della coppia. Per le borse concentrati su dimensioni, interno, cinghie, hardware e peso vuoto."] },
      { title: "Tratta ogni riga come una pista", body: ["Una riga invita alla ricerca; non prova qualità, stock o affidabilità del venditore. Apri la destinazione e confronta titolo, immagine principale, opzione scelta, taglia e prezzo di origine con la voce del foglio."], points: ["Rotta e variante corrispondono", "Viste QC utili", "Misure rilevanti", "Contesto del prezzo attuale", "Peso imballato probabile"] },
      { title: "Separa prove e ipotesi", body: ["Scrivi cosa è visibile e cosa resta sconosciuto. Una foto chiara prova l’aspetto, non composizione, funzione o autenticità. Un’etichetta popolare mostra attenzione, non qualità.", "Salva un candidato solo quando puoi spiegare perché resta più forte di due alternative simili."] },
      { title: "Ricontrolla prima di agire", body: ["Schede, opzioni, prezzi e regole di spedizione cambiano. Riapri la destinazione prima di ordinare e usa informazioni ufficiali attuali per account, pagamento e rotte."] }
    ],
    finds: [
      { title: "Cerca con una domanda aperta", body: ["Combina la categoria con il dettaglio che può cambiare la decisione: petto di una felpa, suola di una scarpa, interno di una borsa, peso imballato di una giacca o tipo di spina elettronica. Una ricerca precisa elimina rumore."], points: ["Tipo di prodotto", "Dettaglio mancante", "Fonte facoltativa", "Data verificata"] },
      { title: "Confronta prodotti equivalenti", body: ["Metti tre prodotti simili uno accanto all’altro. Confronta costruzione visibile, taglie, prezzo di origine e impatto probabile della spedizione. Non confrontare una giacca pesante e una maglietta sottile solo perché sono nello stesso foglio."] },
      { title: "Controlla la destinazione", body: ["Quando una scheda apre un altro sito, conferma che la destinazione coincida ancora. I link convertiti facilitano l’accesso ma non convalidano opzione, venditore, stock o prezzo attuale."] },
      { title: "Elimina presto i candidati deboli", body: ["Tabella taglie assente, immagine generica, variante confusa o destinazione errata sono motivi per fermarsi. Una lista piccola di prodotti spiegabili vale più di molti link incerti."] }
    ],
    guide: [
      { title: "Passaggio 1 — Identità", body: ["Conferma tipo, colore, opzione scelta e caratteristiche principali fra riga e destinazione. Fermati se il collegamento porta a un altro prodotto o a un gruppo di varianti impossibile da identificare."] },
      { title: "Passaggio 2 — Costruzione e vestibilità", body: ["Cerca prove QC specifiche della categoria. Gli abiti richiedono misure e dettagli di cucitura o stampa. Le scarpe richiedono entrambi i profili, tallone, punta, suola e riferimento interno. Le borse richiedono scala, interno, chiusure e hardware."] },
      { title: "Passaggio 3 — Prezzo e spedizione", body: ["Confronta il prezzo di origine con prodotti simili, poi aggiungi peso imballato e volume probabili. La spedizione internazionale può cambiare il valore apparente di articoli pesanti o voluminosi."] },
      { title: "Passaggio 4 — Nota decisionale", body: ["Registra conserva o rimuovi, prove usate, domanda principale aperta, alternativa più vicina e data. In questo modo molte schede diventano una lista riutilizzabile."], points: ["Conserva/rimuovi", "Prova", "Domanda aperta", "Alternativa vicina", "Data verificata"] }
    ],
    qc: [
      { title: "1. Identità e variante", body: ["Confronta colore, forma, opzione e dettagli distintivi con la scheda prevista. Assicurati che le foto appartengano all’articolo attuale e non a un campione generico o a un’altra variante."] },
      { title: "2. Costruzione e dettagli", body: ["Controlla cuciture, bordi, chiusure, posizione della stampa, hardware, forma della suola, fodera, porte o componenti in base alla categoria. Viste ampie ripetute non sostituiscono dettagli nitidi."] },
      { title: "3. Vestibilità, dimensioni o scala", body: ["Cerca tabella taglie, righello, misura del capo, lunghezza interna, dimensione della borsa o altro riferimento stabile. La scala visiva può ingannare, soprattutto se cambia la distanza della fotocamera."] },
      { title: "Cosa non provano le foto", body: ["Le immagini QC aiutano a trovare differenze o difetti visibili, ma non garantiscono composizione, prestazioni, autenticità, durata nel tempo o consegna riuscita. Limita le conclusioni a ciò che mostrano."] }
    ],
    shipping: [
      { title: "Peso reale e volumetrico", body: ["Il peso reale si misura su una bilancia. Quello volumetrico stima lo spazio occupato. Lo stimatore pubblico LoveGoBuy mostra il calcolo comune lunghezza × larghezza × altezza in centimetri diviso 6000.", "La regola può variare per linea, quindi usa lo stimatore ufficiale attuale invece di considerare una formula permanente."] },
      { title: "Costruisci una stima realistica", body: ["Somma i pesi probabili e considera scatole, protezione e consolidamento. Scarpe con scatola, piumini e borse rigide possono creare molto più volume di quanto suggerisca il prezzo."] },
      { title: "Controlla l’idoneità prima del prezzo", body: ["Batterie, liquidi, magneti, prodotti di marca e altre categorie limitate possono influire sulle linee. Una tariffa bassa non serve se l’articolo non è ammesso o supera i limiti dimensionali."] },
      { title: "Verifica all’ultimo momento responsabile", body: ["Prima del pagamento ricontrolla paese, restrizioni, peso fatturabile, opzioni dichiarate, protezione e condizioni attuali. Prezzi e tempi delle linee sono fotografie del momento, non promesse."] }
    ],
    faq: [
      { title: "Cos’è un foglio LoveGoBuy?", body: ["È una directory che organizza link, categorie, immagini, prezzi o note. Aiuta ricerca e confronto, ma non garantisce che ogni riga sia attuale, esatta o adatta."] },
      { title: "È un servizio ufficiale LoveGoBuy?", body: ["No. Questo sito indipendente non crea account, incassa, compra prodotti, conserva merci, traccia pacchi o risolve rimborsi. Usa la piattaforma ufficiale verificata per account e transazioni."] },
      { title: "Una scheda significa verificato?", body: ["No. Significa solo che una rotta era disponibile al controllo. Conferma destinazione, opzione, venditore, prove QC, misure, prezzo, stock e restrizioni."] },
      { title: "Quanto costa la spedizione?", body: ["Non esiste una cifra universale permanente. Destinazione, linea, peso reale, dimensioni, restrizioni, costi, dogana e ultimo corriere possono cambiare il risultato. Usa strumenti ufficiali attuali."] }
    ]
  }
};

export function applyPageLocalizedParity(copy: PageMap) {
  for (const lang of Object.keys(parity) as LocalizedLanguage[]) {
    for (const [slug, sections] of Object.entries(parity[lang])) {
      const page = copy[lang][slug];
      if (!page) continue;
      page.sections = sections.map((section) => ({ ...section, body: [...section.body], points: section.points ? [...section.points] : undefined }));
    }
  }
}
