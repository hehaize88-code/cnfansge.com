import type { Language } from "./site-content";

type LocalizedLanguage = Exclude<Language, "en">;
type ExpansionSet = { bodies: string[]; extras: string[] };

export const localizedArticleExpansions: Record<LocalizedLanguage, Record<string, ExpansionSet>> = {
  de: {
    "lovegobuy-spreadsheet-guide": {
      bodies: [
        " Produktseiten können umgebaut werden, Optionen wandern, Preise werden aktualisiert und Verkäufer tauschen Bilder aus. Das Spreadsheet bleibt deshalb ein Index und kein dauerhaftes Produktverzeichnis.",
        " Ein gemischter Feed erzeugt unfaire Vergleiche: Ein günstiges Shirt lässt eine schwere Jacke teuer wirken, obwohl beide völlig unterschiedliche Bedürfnisse erfüllen.",
        " Prüfe außerdem, ob die Maße wirklich zur ausgewählten Variante gehören. Ein leichter zugänglicher Link bestätigt weder Option noch Verkäufer, Bestand oder Preis.",
        " Sechs oder sieben belegte Felder rechtfertigen weitere Recherche; vier oder fünf zeigen Lücken; drei oder weniger sprechen meist dafür, zuerst einen stärkeren Kandidaten zu suchen.",
        " Entscheidend ist die Reihenfolge: Identität und Variante, sichtbare Verarbeitung und danach Maße oder ein stabiler Maßstab.",
        " Schätze vor dem Wertvergleich Artikelgewicht, wahrscheinliche Verpackung und Paketvolumen; schwere Schuhe, starre Taschen, dicke Jacken und Kartons wirken sich anders aus als ein dünnes Shirt.",
        " Die Notiz sollte auch die nächstliegende Alternative enthalten. Dadurch lässt sich später erkennen, warum die Zeile gespeichert wurde und welche Frage noch beantwortet werden muss.",
        " Bestätige unmittelbar vor Bestellung oder Paketaktion Option, Preis, Verfügbarkeit, Maße und Einschränkungen. Eine Auswahlliste reduziert Unsicherheit, übernimmt aber nicht die Verantwortung der aktuellen Transaktion."
      ],
      extras: [
        " Schreibe die Zeile so, dass eine andere Person die Suche mit Name oder Link wiederholen kann, ohne dem Autor blind zu vertrauen. Live-Produktseite, Lagerbelege und Versandschätzung bleiben getrennte Kontrollpunkte.",
        " Lege vor vielen offenen Tabs Zweck, zwingende Maße, maximale Preisspanne, Ausschlussgründe und Versandempfindlichkeit fest. So verändert ein auffälliges Ergebnis nicht unbemerkt die ursprünglichen Anforderungen.",
        " Kopiere keine Werbeplakette als Produkteigenschaft. Wird umgeleitet, erscheint ein anderes Bild oder lässt sich die Option nicht zuordnen, markiere die Route als ungeklärt statt zu raten.",
        " Notiere neben dem Wert die fehlenden Felder. Die Zahl soll keine künstliche Rangliste erzeugen, sondern zeigen, welcher Kandidat effizient geprüft werden kann und welcher von Annahmen lebt.",
        " Drei scharfe Ansichten mit Variante, wichtigen Seiten und Messung können nützlicher sein als acht entfernte Bilder. Schreibe daher etwa Innensohlenlänge oder Druckausrichtung statt nur ‘gutes QC’.",
        " Nutze eine Risikokennzeichnung nur als Erinnerung: kompakte Kleidung eher niedrig, normale Schuhe oder Taschen mittel, voluminöse Jacken, starre Kartons oder eingeschränkte Waren hoch. Sie ist kein Preisangebot.",
        " Formulierungen wie ‘in den verfügbaren Ansichten gleichmäßiger Druck’ sind beobachtbar; ‘Premiumqualität’ nicht. Ein angezeigter Preis braucht Datum und Vergleichsrahmen, besonders bei Begriffen wie günstigster.",
        " Bestell- und Paketstatus gehören in das Live-Konto. Prüfe die Zeile vor Zahlung, Lagerbilder vor Paketabgabe und aktuelle Paketdaten vor Versand; ein statischer Text darf keine Frist oder Erstattung behaupten."
      ]
    },
    "lovegobuy-qc-photo-guide": {
      bodies: [
        " Sie helfen besonders vor der internationalen Paketabgabe, etwa bei falscher Farbe, falscher Option, sichtbarem Schaden, schiefem Druck, fehlendem Teil oder einem erkennbaren Messproblem.",
        " Kontrolliere Produktart, Farbe, Muster, Größe oder Option und die Merkmale, die eine Variante von der anderen unterscheiden. Ein schönes Bildset kann trotzdem zum falschen Produkt gehören.",
        " Kleidung braucht auch Säume, Bündchen, Kragen, Stoffstruktur und gegebenenfalls Futter; Elektronik sichtbaren Zustand, Modellangaben, Anschlüsse und enthaltene Teile.",
        " Vergleiche Brust, Länge, Schulter, Ärmel, Taille oder Innenbein mit einem passenden eigenen Kleidungsstück. Bei Schuhen hilft Innensohlenlänge, bei Taschen ein Lineal mehr als eine rein optische Größenwirkung.",
        " Kameraverarbeitung kann Kontrast und Schärfe erhöhen, und ein nahes Weitwinkelbild kann Schuhfront oder Taschentiefe übertreiben.",
        " Prüfe bei Kleidung Vorder- und Rückseite, Nähte, Druck, Etiketten, Stoff und Maße; bei Schuhen Seiten, Zehen, Ferse, Sohle, Zunge, Innenraum und Größenreferenz; bei Taschen Außen- und Innenraum, Boden, Gurte und Maße.",
        " Die Bildprüfung ist am nützlichsten, solange der Artikel noch einzeln im Lager beurteilt werden kann. Nach Paketabgabe sind zusätzliche Ansichten möglicherweise nicht mehr im selben Ablauf verfügbar.",
        " Ein angemessenes Ergebnis nennt sichtbare Übereinstimmungen und Grenzen: Farbe und Größe passen, Nähte wirken in den vorhandenen Ansichten regelmäßig und eine Messung ist sichtbar; Material und Langzeitnutzung bleiben offen."
      ],
      extras: [
        " Lies zuerst das vorhandene Set und benenne nur die eine fehlende Ansicht, die die Entscheidung ändern kann. ‘Reißverschlusszähne und Schieber gerade von vorn’ ist umsetzbar, ‘Qualität prüfen’ nicht.",
        " Notiere vorab auch Version und zwei unterscheidende Merkmale. Eine korrekte Produktart in falscher Größe oder Version bleibt ein Identitätsfehler, selbst wenn die Verarbeitung sauber wirkt.",
        " Beschreibe Abweichungen nach Ort und Sichtbarkeit, ohne aus dem Foto eine Ursache zu diagnostizieren. Bei widersprüchlichen Bildern zählt die geradeste und schärfste kontrollierte Vergleichsansicht.",
        " Ein paar Zentimeter Unterschied können allein durch die Methode entstehen. Speichere deshalb Zahl und Messweg gemeinsam und unterscheide Außenbreite von nutzbarem Innenraum.",
        " Weiße Fläche, neutrale Wand, Lineal oder derselbe Lageruntergrund helfen beim Lichtvergleich. Nutze die hochauflösenden Originale statt warmer Displays oder stark komprimierter Reposts.",
        " Die fünf Fragen müssen sich mit dem Produkt ändern: Beim Trikot etwa Version, Brustweite, Frontdruck, Rückseite und Abzeichen; bei der Tasche Maße, Bodenform, Verschluss, Hardware und Innenraum.",
        " Prüfe den aktuellen Lagerstatus, sichere relevante Bilder und nutze bei Bedarf den offiziellen Support. Veröffentliche keine allgemeine Rückgabefrist oder Gebühr ohne klar verlinkte aktuelle Richtlinie.",
        " Halte außerdem Route, gewählte Option, geprüfte Ansichten, Messmethode, offene Frage und Datum fest. Ein Bildset verifiziert weder einen ganzen Verkäufer noch eine komplette Produktlinie."
      ]
    },
    "lovegobuy-shipping-weight": {
      bodies: [
        " Zum Produkt kommen Verpackung, Ziel, Einschränkungen, Servicegebühren und Transportregeln. Ein niedriger Quellpreis kann deshalb mit einem teuren fertigen Paket verbunden sein.",
        " Beginne mit den gemessenen Lagergewichten und addiere Karton, Schutz und Konsolidierung. Ein Produktwert ohne Verkäuferbox oder spätere Paketverpackung ist noch kein fertiges Versandgewicht.",
        " Das Volumengewicht beschreibt den beanspruchten Raum, nicht die Masse auf der Waage. Es ist besonders bei Kartons, Pufferjacken und strukturierten Taschen relevant.",
        " Eine Linie kann den höheren relevanten Wert oder eine eigene routenspezifische Methode abrechnen. Darum können leichte, aber sperrige Produkte teurer werden als erwartet.",
        " Neben Batterien, Flüssigkeiten, Magneten und Pulvern zählen Zielabdeckung, Größenlimits und deklarierte Produkteigenschaften. Die billigste sichtbare Linie hilft nur, wenn sie das tatsächliche Paket akzeptiert.",
        " Der Ablauf ist: Artikelgewichte addieren, Verpackung und Maße schätzen, aktuelle Zielangaben in den offiziellen Rechner eingeben, zulässige Linien vergleichen und vor Zahlung die endgültigen Daten neu prüfen.",
        " Bewertungen zeigen wiederkehrende Themen wie Verpackung, Geschwindigkeit, Support, fehlende Artikel oder hohe Kosten. Länder, Linien, Gewichte und Zeitpunkte unterscheiden sich jedoch von deinem Paket.",
        " Prüfe direkt vor Zahlung Ziel, Gewicht und Volumen, Abrechnung, Linie, Einschränkungen, Schutz, Zusatzleistungen und aktuelle Bedingungen. Speichere Datum und verwendete Werte."
      ],
      extras: [
        " Halte Quellpreis, Lagergewicht und Paketangebot als drei getrennte Zahlen fest. Das Angebot gehört immer zu einer bestimmten Route, einem Ziel, einem Paket und einem Zeitpunkt.",
        " Vermerke, ob das Gewicht Produkt, Verkäuferverpackung oder Lagerartikel meint. Nach Rehearsal oder endgültigem Packen ersetzt du frühe Schätzungen durch die tatsächlich gemessenen Paketdaten.",
        " Beim Beispiel 40 × 30 × 20 cm ergeben 24.000 cm³ geteilt durch 6000 vier Volumenkilogramm. Das erklärt nur die Mathematik; Rundungen, Ausbuchtungen, Schutz und Linienregeln verändern ein echtes Angebot.",
        " Das Entfernen einer Box ist nicht automatisch besser. Definiere zuerst, ob du Maße, tatsächliches Gewicht oder Schutz verändern willst, und kontrolliere anschließend das endgültige Messergebnis.",
        " Fehlt eine Linie, kläre zuerst Gewicht, Maße, Produkteigenschaft oder Ziel. Teilen kann Zulässigkeit herstellen, zugleich aber doppelte Grundkosten oder zwei Zollvorgänge erzeugen.",
        " Speichere Namen, Gewicht, Maße, Volumenwert, Schätzung, Einschränkungen, Schutz und Zeitpunkt. Ein Angebot mit kleinerem Paket oder ausgeschlossenem Artikel ist kein fairer Vergleich.",
        " Die aktuelle Bewertungszahl braucht immer ein Prüfdatum. Erfahrungen begründen Fragen zu Bearbeitung, Verpackung und Support, sagen aber weder Preis noch Ausgang einer zukünftigen Sendung voraus.",
        " Wenn sich der Betrag ändert, vergleiche zuerst Eingaben, Klassifizierung, Linie und Abrechnungsschritt. Nutze bei ungeklärter Differenz den offiziellen Support mit den exakten Paketdaten."
      ]
    }
  },
  es: {
    "lovegobuy-spreadsheet-guide": {
      bodies: [
        " Las fichas cambian, las opciones se mueven, los precios se actualizan y los vendedores sustituyen imágenes. Por eso la hoja funciona como índice, no como catálogo permanente.",
        " Una página mezclada crea comparaciones injustas: una camiseta barata puede hacer parecer cara una chaqueta pesada aunque respondan a necesidades distintas.",
        " Comprueba también que las medidas pertenezcan a la variante seleccionada. Un enlace más cómodo no confirma opción, vendedor, disponibilidad o precio.",
        " Seis o siete campos con pruebas justifican más investigación; cuatro o cinco señalan información ausente; tres o menos suelen indicar que conviene buscar antes una opción más sólida.",
        " Sigue un orden concreto: identidad y variante, construcción visible y, por último, medidas o una referencia de escala estable.",
        " Antes de comparar valor, estima peso del artículo, embalaje probable y volumen. Calzado pesado, bolsos rígidos, prendas gruesas y cajas afectan el paquete de forma distinta a una camiseta fina.",
        " Incluye la alternativa más cercana. La nota permitirá recordar por qué guardaste la fila, qué dato falta y qué comparación debe hacerse después.",
        " Justo antes del pedido o del paquete confirma opción, precio, disponibilidad, medidas y restricciones. Una lista bien investigada reduce incertidumbre, pero no sustituye la responsabilidad de la transacción actual."
      ],
      extras: [
        " Escribe cada fila de forma que otra persona pueda repetir la búsqueda por nombre o enlace sin confiar ciegamente en el autor. Ficha viva, pruebas de almacén y estimación de envío siguen siendo controles separados.",
        " Antes de abrir muchas pestañas define uso, medidas obligatorias, precio máximo, motivos de rechazo y sensibilidad al envío. Así un resultado atractivo no cambia silenciosamente los requisitos iniciales.",
        " No copies una insignia promocional como especificación. Si el enlace redirige, muestra otra imagen o no permite relacionar la opción, márcalo como no resuelto en vez de adivinar.",
        " Escribe junto a la puntuación los campos ausentes. El número debe mostrar qué candidato puede verificarse con eficiencia y cuál depende de suposiciones, no fabricar una clasificación decorativa.",
        " Tres imágenes nítidas que confirmen variante, lados importantes y una medida pueden ser mejores que ocho tomas lejanas. Escribe ‘longitud interior’ o ‘alineación de impresión’, no solo ‘buen QC’.",
        " Usa riesgo de envío solo como recordatorio: ropa compacta bajo, calzado o bolso normal medio, prendas voluminosas, cajas rígidas o mercancía limitada alto. No es una cotización.",
        " ‘La impresión parece uniforme en las vistas’ es observable; ‘calidad premium’ no. El precio mostrado necesita fecha y conjunto de comparación, especialmente al usar ‘más barato’.",
        " Los estados de pedido y paquete pertenecen a la cuenta viva. Revisa la fila antes de pagar, las imágenes antes del paquete y los datos actuales antes del envío; un texto estático no debe prometer plazos o reembolsos."
      ]
    },
    "lovegobuy-qc-photo-guide": {
      bodies: [
        " Son especialmente útiles antes de enviar el paquete internacional para detectar color u opción incorrectos, daños, impresión irregular, piezas ausentes o un problema visible de medición.",
        " Comprueba tipo de producto, color, patrón, talla u opción y los detalles que distinguen variantes. Una galería atractiva puede pertenecer aun así al producto equivocado.",
        " La ropa requiere también dobladillos, puños, cuello, textura y forro; la electrónica necesita estado visible, modelo, conexiones y componentes incluidos.",
        " Compara pecho, largo, hombro, manga, cintura o entrepierna con una prenda que te quede bien. En calzado ayuda una medida interior y en bolsos una regla más que la escala visual.",
        " El procesado puede elevar contraste y nitidez, mientras un gran angular cercano exagera la parte delantera de una zapatilla o la profundidad de un bolso.",
        " En ropa revisa frente, espalda, costuras, impresión, etiquetas, tejido y medidas; en calzado, lados, puntera, talón, suela, lengüeta, interior y talla; en bolsos, exterior, interior, base, correas y dimensiones.",
        " La revisión es más útil mientras el artículo puede evaluarse individualmente en almacén. Después de enviar el paquete, quizá no esté disponible para nuevas vistas mediante el mismo proceso.",
        " Una conclusión proporcionada menciona coincidencias y límites: color y talla correctos, costuras regulares en las imágenes y una medición visible; material y uso a largo plazo siguen abiertos."
      ],
      extras: [
        " Lee primero el conjunto disponible e identifica una sola vista ausente que pueda cambiar la decisión. ‘Muestra dientes y cursor de la cremallera de frente’ es concreto; ‘comprueba calidad’ no.",
        " Anota versión y dos características antes de mirar. Un producto correcto en talla o versión equivocada sigue siendo un fallo de identidad aunque su construcción parezca limpia.",
        " Describe ubicación y visibilidad sin diagnosticar una causa. Si dos imágenes contradicen, utiliza la más recta y nítida y pide una comparación controlada.",
        " Diferencias de método pueden crear varios centímetros de variación. Guarda cifra y recorrido juntos y distingue ancho exterior de espacio interior utilizable.",
        " Papel blanco, pared neutra, regla o la misma superficie ayudan a evaluar la iluminación. Consulta los originales en alta resolución, no pantallas cálidas ni copias muy comprimidas.",
        " Las cinco preguntas deben cambiar con el producto: en una camiseta deportiva, versión, pecho, impresión, espalda y parches; en un bolso, medidas, base, cierre, herrajes e interior.",
        " Consulta el estado actual del almacén, conserva las imágenes y utiliza soporte oficial. No publiques una ventana universal de devolución o una tasa sin una política actual enlazada.",
        " Guarda ruta, opción, vistas, método de medición, pregunta abierta y fecha. Un conjunto de imágenes no verifica a todo un vendedor ni una línea completa."
      ]
    },
    "lovegobuy-shipping-weight": {
      bodies: [
        " Al producto se añaden embalaje, destino, restricciones, tasas de servicio y reglas del transportista. Por eso un precio bajo puede terminar en un paquete caro.",
        " Empieza con pesos de almacén y añade caja, protección y consolidación. Una cifra que excluye la caja del vendedor o el embalaje final todavía no describe el peso de envío.",
        " El peso volumétrico describe espacio, no masa en la báscula. Resulta especialmente relevante para cajas, chaquetas acolchadas y bolsos estructurados.",
        " Una línea puede cobrar el valor relevante mayor o aplicar su propio método. Por eso los artículos ligeros pero voluminosos pueden costar más de lo esperado.",
        " Además de baterías, líquidos, imanes y polvos, importan cobertura del destino, límites y propiedades declaradas. La línea barata solo sirve si acepta el paquete real.",
        " El orden es: sumar pesos, estimar embalaje y medidas, introducir el destino actual, comparar líneas válidas y revisar los datos finales antes de pagar.",
        " Las reseñas muestran temas repetidos como embalaje, velocidad, soporte, artículos ausentes o costes altos, pero países, rutas, pesos y fechas difieren del futuro paquete.",
        " Antes de pagar confirma destino, peso, volumen, método de cobro, línea, restricciones, protección, extras y condiciones. Guarda fecha y valores usados."
      ],
      extras: [
        " Mantén separados precio de origen, peso de almacén y cotización del paquete. La última pertenece siempre a una ruta, destino, paquete y momento concretos.",
        " Registra si el peso incluye producto, embalaje del vendedor o artículo en almacén. Tras rehearsal o embalaje final, sustituye la estimación inicial por datos medidos.",
        " En 40 × 30 × 20 cm hay 24.000 cm³ y, al dividir entre 6000, cuatro kg volumétricos. Solo explica la matemática; redondeos, bultos, protección y reglas cambian una cotización real.",
        " Quitar una caja no siempre mejora el resultado. Decide si quieres cambiar dimensiones, peso real o protección y comprueba la medición final después de la solicitud.",
        " Si no aparece una ruta, identifica peso, dimensiones, propiedad o destino. Dividir puede recuperar elegibilidad, pero también crear dos cargos base o dos eventos aduaneros.",
        " Guarda nombre, peso, medidas, volumen, estimación, restricciones, protección y hora. Una cotización con paquete menor o artículo excluido no es una comparación justa.",
        " La puntuación y el número de reseñas necesitan fecha. Las experiencias sugieren preguntas sobre proceso, embalaje y soporte, pero no predicen precio o resultado futuros.",
        " Si cambia el importe, compara primero entradas, clasificación, línea y paso de cobro. Si sigue sin explicación, contacta al soporte con los datos exactos."
      ]
    }
  },
  fr: {
    "lovegobuy-spreadsheet-guide": {
      bodies: [
        " Les fiches changent, les options se déplacent, les prix évoluent et les vendeurs remplacent des images. La feuille reste donc un index et non un catalogue permanent.",
        " Une page mélangée crée des comparaisons injustes : un t-shirt peu cher peut faire paraître une veste lourde coûteuse alors que les besoins sont différents.",
        " Vérifiez aussi que les mesures appartiennent à la variante choisie. Un lien plus pratique ne confirme ni option, vendeur, disponibilité ou prix.",
        " Six ou sept champs prouvés justifient une recherche supplémentaire ; quatre ou cinq signalent des manques ; trois ou moins invitent généralement à chercher d’abord un candidat plus solide.",
        " Suivez un ordre précis : identité et variante, fabrication visible, puis mesures ou repère stable.",
        " Avant de comparer la valeur, estimez poids de l’article, emballage probable et volume. Chaussures lourdes, sacs rigides, vêtements épais et boîtes n’affectent pas le colis comme un t-shirt fin.",
        " Ajoutez l’alternative la plus proche. La note rappellera pourquoi la ligne a été conservée, quelle donnée manque et quelle comparaison reste à faire.",
        " Juste avant commande ou colis, confirmez option, prix, disponibilité, mesures et restrictions. Une présélection réduit l’incertitude sans remplacer la responsabilité de la transaction actuelle."
      ],
      extras: [
        " Rédigez chaque ligne pour qu’une autre personne puisse répéter la recherche par nom ou lien sans croire aveuglément l’auteur. Fiche en direct, preuve d’entrepôt et estimation restent des contrôles séparés.",
        " Avant d’ouvrir de nombreux onglets, définissez usage, mesures obligatoires, prix maximum, motifs de rejet et sensibilité livraison. Un résultat séduisant ne changera pas les besoins initiaux.",
        " Ne copiez pas un badge promotionnel comme spécification. Si le lien redirige, montre une autre image ou ne permet pas d’identifier l’option, marquez-le non résolu.",
        " Notez les champs manquants avec la note. Le chiffre doit montrer quel candidat se vérifie efficacement et lequel dépend d’hypothèses, pas fabriquer un classement décoratif.",
        " Trois vues nettes confirmant variante, côtés utiles et mesure peuvent dépasser huit images éloignées. Écrivez ‘longueur intérieure’ ou ‘alignement impression’, pas seulement ‘bon QC’.",
        " Utilisez le risque livraison comme rappel : vêtement compact faible, chaussure ou sac ordinaire moyen, article volumineux, boîte rigide ou produit restreint élevé. Ce n’est pas un devis.",
        " ‘Impression régulière sur les vues’ est observable ; ‘qualité premium’ ne l’est pas. Le prix affiché demande une date et un groupe comparé, surtout pour dire ‘le moins cher’.",
        " Les statuts de commande et colis appartiennent au compte en direct. Revérifiez avant paiement, avant colis et avant expédition ; un texte statique ne doit pas promettre délai ou remboursement."
      ]
    },
    "lovegobuy-qc-photo-guide": {
      bodies: [
        " Elles sont particulièrement utiles avant l’expédition internationale pour repérer mauvaise couleur ou option, dommage, impression irrégulière, pièce absente ou problème de mesure visible.",
        " Vérifiez type, couleur, motif, taille ou option et les signes qui distinguent les variantes. Une belle galerie peut malgré tout montrer le mauvais produit.",
        " Les vêtements demandent aussi ourlets, poignets, col, texture et doublure ; l’électronique, état visible, modèle, ports et composants inclus.",
        " Comparez poitrine, longueur, épaule, manche, taille ou entrejambe avec un vêtement adapté. Pour les chaussures, une longueur intérieure aide ; pour un sac, une règle vaut mieux que l’échelle visuelle.",
        " Le traitement peut augmenter contraste et netteté ; un grand angle proche exagère l’avant d’une chaussure ou la profondeur d’un sac.",
        " Pour les vêtements, examinez face, dos, coutures, impression, étiquettes, tissu et mesures ; pour les chaussures, côtés, pointe, talon, semelle, languette, intérieur et taille ; pour les sacs, extérieur, intérieur, base, sangles et dimensions.",
        " L’examen est plus utile tant que l’article peut être évalué seul à l’entrepôt. Après soumission du colis, de nouvelles vues peuvent ne plus être disponibles selon le même processus.",
        " Une conclusion proportionnée cite correspondances et limites : couleur et taille correctes, coutures régulières dans les vues et mesure visible ; matière et usage à long terme restent inconnus."
      ],
      extras: [
        " Lisez d’abord le jeu disponible et identifiez l’unique vue manquante qui changerait la décision. ‘Montrer dents et curseur de fermeture de face’ est précis ; ‘vérifier la qualité’ ne l’est pas.",
        " Notez aussi version et deux signes avant la galerie. Le bon produit en mauvaise taille ou version reste une erreur d’identité même si la fabrication semble propre.",
        " Décrivez emplacement et visibilité sans diagnostiquer la cause. Si deux images se contredisent, utilisez la vue la plus droite et nette et demandez une comparaison contrôlée.",
        " Des méthodes différentes produisent plusieurs centimètres d’écart. Conservez chiffre et trajet ensemble, et distinguez largeur extérieure et espace intérieur utile.",
        " Papier blanc, mur neutre, règle ou même surface d’entrepôt aident à évaluer la lumière. Consultez les originaux HD, pas un écran chaud ou une copie très compressée.",
        " Les cinq questions changent avec le produit : pour un maillot, version, poitrine, impression, dos et écussons ; pour un sac, mesures, base, fermeture, quincaillerie et intérieur.",
        " Vérifiez le statut d’entrepôt, conservez les images et utilisez le support officiel. Ne publiez pas de délai universel ou de frais sans politique actuelle directement liée.",
        " Conservez lien, option, vues, méthode, question ouverte et date. Une galerie ne vérifie ni un vendeur entier ni une ligne complète."
      ]
    },
    "lovegobuy-shipping-weight": {
      bodies: [
        " Au produit s’ajoutent emballage, destination, restrictions, frais de service et règles du transporteur. Un prix source bas peut donc produire un colis final coûteux.",
        " Commencez par les poids d’entrepôt et ajoutez carton, protection et consolidation. Un chiffre sans boîte vendeur ou emballage final ne décrit pas encore le poids d’expédition.",
        " Le poids volumétrique décrit l’espace, pas la masse sur la balance. Il compte particulièrement pour boîtes, doudounes et sacs structurés.",
        " Une ligne peut facturer la valeur pertinente la plus élevée ou sa propre méthode. Un article léger mais volumineux peut donc coûter plus que prévu.",
        " Outre batteries, liquides, aimants et poudres, couverture de destination, limites et propriétés déclarées comptent. La ligne bon marché n’est utile que si elle accepte le vrai colis.",
        " L’ordre est : additionner les poids, estimer emballage et dimensions, entrer la destination actuelle, comparer les lignes admises puis revérifier avant paiement.",
        " Les avis font apparaître emballage, rapidité, support, articles manquants ou coûts élevés, mais pays, lignes, poids et dates diffèrent du futur colis.",
        " Avant paiement, confirmez destination, poids, volume, facturation, ligne, restrictions, protection, options et conditions. Conservez date et valeurs."
      ],
      extras: [
        " Séparez prix source, poids d’entrepôt et devis colis. Ce dernier appartient toujours à une ligne, une destination, un colis et un moment précis.",
        " Notez si le poids inclut produit, emballage vendeur ou article d’entrepôt. Après rehearsal ou emballage final, remplacez l’estimation par les données mesurées.",
        " Pour 40 × 30 × 20 cm, 24 000 cm³ divisés par 6000 donnent quatre kg volumétriques. Cela explique la formule ; arrondis, bosses, protection et règles changent un vrai devis.",
        " Retirer une boîte n’est pas automatiquement meilleur. Définissez si vous cherchez à modifier dimensions, poids réel ou protection, puis contrôlez la mesure finale.",
        " Si aucune ligne n’apparaît, identifiez poids, dimensions, propriété ou destination. Diviser peut rétablir l’éligibilité tout en créant deux frais de base ou deux passages douaniers.",
        " Conservez nom, poids, dimensions, volume, estimation, restrictions, protection et heure. Un devis avec colis plus petit ou article exclu n’est pas comparable.",
        " Note et nombre d’avis demandent une date. Les expériences inspirent des questions sur traitement, emballage et support, sans prédire prix ou résultat futur.",
        " Si le montant change, comparez entrées, classification, ligne et étape de facturation. Si l’écart reste inexpliqué, contactez le support avec les données exactes."
      ]
    }
  },
  it: {
    "lovegobuy-spreadsheet-guide": {
      bodies: [
        " Le schede cambiano, le opzioni si spostano, i prezzi vengono aggiornati e i venditori sostituiscono immagini. Il foglio resta quindi un indice, non un catalogo permanente.",
        " Una pagina mista crea confronti ingiusti: una maglietta economica può far sembrare cara una giacca pesante anche se rispondono a esigenze diverse.",
        " Controlla inoltre che le misure appartengano alla variante scelta. Un link più comodo non conferma opzione, venditore, disponibilità o prezzo.",
        " Sei o sette campi provati giustificano altra ricerca; quattro o cinque mostrano dati mancanti; tre o meno suggeriscono di cercare prima un candidato più solido.",
        " Segui un ordine preciso: identità e variante, costruzione visibile, poi misure o riferimento stabile.",
        " Prima di confrontare il valore stima peso, imballaggio probabile e volume. Scarpe pesanti, borse rigide, capi spessi e scatole incidono diversamente da una maglietta sottile.",
        " Includi l’alternativa più vicina. La nota ricorderà perché la riga è stata salvata, quale dato manca e quale confronto resta da fare.",
        " Subito prima di ordine o pacco conferma opzione, prezzo, disponibilità, misure e restrizioni. Una lista studiata riduce l’incertezza senza sostituire la responsabilità della transazione."
      ],
      extras: [
        " Scrivi ogni riga affinché un’altra persona possa ripetere la ricerca per nome o link senza fidarsi ciecamente dell’autore. Scheda live, prove magazzino e stima restano controlli separati.",
        " Prima di aprire molte schede definisci uso, misure obbligatorie, prezzo massimo, motivi di esclusione e sensibilità spedizione. Un risultato attraente non cambierà i requisiti iniziali.",
        " Non copiare un badge promozionale come specifica. Se il link reindirizza, mostra un’altra immagine o non collega l’opzione, segnalo irrisolto invece di indovinare.",
        " Scrivi i campi mancanti accanto al punteggio. Il numero deve mostrare quale candidato si verifica bene e quale dipende da ipotesi, non creare una classifica decorativa.",
        " Tre immagini nitide che confermano variante, lati utili e misura possono superare otto viste lontane. Scrivi ‘lunghezza soletta’ o ‘allineamento stampa’, non solo ‘buon QC’.",
        " Usa il rischio spedizione come promemoria: capo compatto basso, scarpe o borsa normali medio, articolo voluminoso, scatola rigida o merce limitata alto. Non è un preventivo.",
        " ‘Stampa uniforme nelle viste’ è osservabile; ‘qualità premium’ no. Il prezzo mostrato richiede data e gruppo confrontato, soprattutto per dire ‘più economico’.",
        " Gli stati di ordine e pacco appartengono all’account live. Ricontrolla prima del pagamento, del pacco e della spedizione; un testo statico non promette scadenze o rimborsi."
      ]
    },
    "lovegobuy-qc-photo-guide": {
      bodies: [
        " Sono particolarmente utili prima della spedizione internazionale per individuare colore o opzione sbagliati, danni, stampa irregolare, parti mancanti o un problema visibile di misura.",
        " Controlla tipo, colore, motivo, taglia o opzione e i dettagli che distinguono le varianti. Una bella galleria può comunque appartenere al prodotto sbagliato.",
        " Gli abiti richiedono anche orli, polsini, collo, texture e fodera; l’elettronica stato visibile, modello, porte e componenti inclusi.",
        " Confronta petto, lunghezza, spalla, manica, vita o interno gamba con un capo adatto. Per le scarpe aiuta una lunghezza interna; per le borse un righello è più utile della scala visiva.",
        " Il trattamento può aumentare contrasto e nitidezza, mentre un grandangolo vicino esagera la punta di una scarpa o la profondità di una borsa.",
        " Per abiti controlla fronte, retro, cuciture, stampa, etichette, tessuto e misure; per scarpe lati, punta, tallone, suola, linguetta, interno e taglia; per borse esterno, interno, base, cinghie e dimensioni.",
        " La revisione è più utile finché l’articolo può essere valutato singolarmente in magazzino. Dopo l’invio del pacco, altre viste potrebbero non essere disponibili nello stesso processo.",
        " Una conclusione proporzionata cita corrispondenze e limiti: colore e taglia corretti, cuciture regolari nelle viste e misura visibile; materiale e uso nel tempo restano aperti."
      ],
      extras: [
        " Leggi prima il set disponibile e identifica l’unica vista mancante che cambierebbe la decisione. ‘Mostra denti e cursore della cerniera frontali’ è preciso; ‘controlla qualità’ no.",
        " Annota anche versione e due caratteristiche prima della galleria. Il prodotto corretto in taglia o versione sbagliata resta un errore d’identità anche se è ben costruito.",
        " Descrivi posizione e visibilità senza diagnosticare la causa. Se due immagini discordano, usa la vista più dritta e nitida e chiedi un confronto controllato.",
        " Metodi diversi possono creare vari centimetri di differenza. Salva numero e percorso insieme e distingui larghezza esterna e spazio interno utile.",
        " Carta bianca, parete neutra, righello o stessa superficie aiutano a valutare la luce. Consulta gli originali HD, non schermi caldi o copie molto compresse.",
        " Le cinque domande cambiano col prodotto: per una maglia versione, petto, stampa, retro e stemmi; per una borsa misure, base, chiusura, hardware e interno.",
        " Controlla lo stato magazzino, conserva le immagini e usa il supporto ufficiale. Non pubblicare finestre universali o costi senza una politica attuale collegata.",
        " Salva rotta, opzione, viste, metodo, domanda aperta e data. Una galleria non verifica un intero venditore o una linea completa."
      ]
    },
    "lovegobuy-shipping-weight": {
      bodies: [
        " Al prodotto si aggiungono imballaggio, destinazione, restrizioni, costi di servizio e regole del vettore. Un prezzo origine basso può quindi diventare un pacco costoso.",
        " Inizia dai pesi magazzino e aggiungi scatola, protezione e consolidamento. Un dato senza scatola venditore o imballaggio finale non descrive ancora il peso spedizione.",
        " Il peso volumetrico descrive lo spazio, non la massa sulla bilancia. Conta soprattutto per scatole, piumini e borse strutturate.",
        " Una linea può fatturare il valore pertinente maggiore o il proprio metodo. Un articolo leggero ma voluminoso può quindi costare più del previsto.",
        " Oltre a batterie, liquidi, magneti e polveri, contano copertura, limiti e proprietà dichiarate. La linea economica serve solo se accetta il vero pacco.",
        " L’ordine è: somma pesi, stima imballaggio e misure, inserisci la destinazione attuale, confronta linee idonee e ricontrolla prima di pagare.",
        " Le recensioni mostrano imballaggio, velocità, supporto, articoli mancanti o costi alti, ma paesi, linee, pesi e date differiscono dal futuro pacco.",
        " Prima di pagare conferma destinazione, peso, volume, fatturazione, linea, restrizioni, protezione, extra e condizioni. Salva data e valori."
      ],
      extras: [
        " Separa prezzo origine, peso magazzino e preventivo pacco. Quest’ultimo appartiene sempre a una linea, destinazione, pacco e momento precisi.",
        " Segna se il peso include prodotto, imballaggio venditore o articolo magazzino. Dopo rehearsal o imballaggio finale sostituisci la stima con i dati misurati.",
        " Per 40 × 30 × 20 cm, 24.000 cm³ divisi per 6000 danno quattro kg volumetrici. Spiega la formula; arrotondamenti, rigonfiamenti, protezione e regole cambiano il preventivo.",
        " Togliere una scatola non è automaticamente meglio. Definisci se vuoi cambiare misure, peso reale o protezione, poi controlla la misura finale.",
        " Se non appare una rotta, identifica peso, misure, proprietà o destinazione. Dividere può ripristinare l’idoneità ma creare due costi base o due passaggi doganali.",
        " Salva nome, peso, misure, volume, stima, restrizioni, protezione e ora. Un preventivo con pacco minore o articolo escluso non è confrontabile.",
        " Punteggio e numero recensioni richiedono una data. Le esperienze suggeriscono domande su processo, imballaggio e supporto, senza predire prezzo o risultato futuro.",
        " Se l’importo cambia, confronta input, classificazione, linea e fase di addebito. Se resta inspiegato, contatta il supporto con i dati esatti."
      ]
    }
  }
};
