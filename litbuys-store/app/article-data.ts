export type ArticleLang = "en" | "de" | "es" | "fr" | "it";

export const articleSlugs = [
  "litbuy-spreadsheet-guide",
  "litbuy-qc-photo-checklist",
  "litbuy-shipping-weight-guide",
  "litbuy-review-2026",
] as const;

export type ArticleSlug = (typeof articleSlugs)[number];

export type ArticleContent = {
  title: string;
  deck: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

const reviewArticle: ArticleContent = {
  title: "LitBuy review 2026: platform facts, customer themes and a buyer checklist",
  deck: "An independent review that separates LitBuy's published workflow from customer experiences, rating signals and the questions a buyer should answer before ordering.",
  readTime: "14 minute read",
  sections: [
    {
      heading: "What LitBuy is — and what it is not",
      paragraphs: [
        "LitBuy presents itself as a China shopping and forwarding agent. Its public service pages describe assistance with product purchasing and payment, warehouse inspection, storage, parcel preparation and international logistics. That model is different from a conventional online shop that collects one payment and sends a finished order directly from its own retail inventory. A user generally pays for marketplace goods first, waits for them to reach the LitBuy warehouse, reviews available inspection information, chooses which goods to combine, and then pays for international shipping as a separate stage.",
        "This distinction is the starting point for a fair review. Several negative App Store reviews complain about being asked to pay again after a product purchase. LitBuy's developer responses explain that the later charge is international forwarding, not a second charge for the same product. That explanation does not settle whether a particular quote is good value, but it identifies a communication problem: a first-time buyer who budgets only for the product stage can feel surprised even when the two-stage process is operating as designed. Any useful LitBuy guide should explain the parcel payment before showing finds or coupons."
      ]
    },
    {
      heading: "What the official pages actually promise",
      paragraphs: [
        "LitBuy's homepage promotes free QC and inspection, international shipping and warehouse storage. The refund terms provide a more precise boundary for basic QC: quantity, visible appearance and obvious external defects are checked when goods arrive. Those checks can confirm that an item is present, whether the visible option appears right and whether clear damage exists. They do not prove authenticity, exact material composition, comfort, electronics performance or long-term durability. The site's product disclaimer also says that the purchasing and forwarding service cannot guarantee product quality or authenticity.",
        "Storage wording requires similar care. The current homepage advertises up to 120 days of storage with the first 90 days free. The help center highlights 90 days of free storage, while a warehouse notice describes an overdue window and eventual disposal rules. The defensible interpretation is not '120 days free.' Buyers should treat 90 days as the public free period and check the live warehouse deadline for each item. Policy labels and enforcement can change, so account dates are stronger evidence than an old screenshot or social-media claim."
      ]
    },
    {
      heading: "What positive customer feedback tends to mention",
      paragraphs: [
        "Positive reviews on Trustpilot and Apple's App Store commonly mention an easy ordering flow, quick seller-to-warehouse movement, clear QC images, responsive support and successful delivery. Some reviewers describe multiple completed parcels or say a warehouse question was answered quickly. These reports show that the service can work smoothly for individual customers, especially when their products, destination and chosen route fit the normal workflow. They are experiences rather than controlled performance measurements, so they should not be converted into universal delivery-time or support-response guarantees.",
        "The most useful positive review includes context: destination country, parcel weight and dimensions, product categories, shipping line, order date, dispatch date, delivery date and whether a problem occurred. A statement such as 'fast shipping' is hard to compare without those details. The same applies to price. A reviewer who shipped dense clothing in a compact parcel may see a very different quote from someone sending shoe boxes or a lightweight rug that produces a high dimensional weight. Review quality matters more than enthusiasm."
      ]
    },
    {
      heading: "What critical customer feedback tends to mention",
      paragraphs: [
        "Critical reviews repeatedly focus on international shipping price, the difference between estimated and final parcel weight, extra payment requests, delayed replies, cancellation limits and parcels that arrived late or with an item problem. Some complaints describe a chargeable weight much higher than scale weight. That can occur when a route uses volumetric weight, but the formula should still be explainable using packed dimensions, a route divisor and rounding rules. A customer should ask for the values behind a quote rather than treating either the invoice or the complaint as self-proving.",
        "Other reviews describe difficulty cancelling after an order had progressed. LitBuy's developer responses say that a cancellation option may close after the relevant after-sales time limit, and that seller return rules can constrain what the agent can do. This makes early inspection important. If the wrong option or visible defect appears in warehouse photos, the buyer should submit a ticket with the order ID, exact image and requested resolution promptly. Waiting until international shipping reduces the practical value of a seller return even when the original complaint is valid."
      ]
    },
    {
      heading: "Why the star ratings need a warning label",
      paragraphs: [
        "As checked on 29 August 2026, Trustpilot does not display an ordinary LitBuy rating. The review page says the rating is unavailable because of a breach of its guidelines and states that a number of fake reviews were removed. It still displays hundreds of individual reviews with both positive and negative experiences. That warning makes the raw five-star percentage a poor standalone trust signal. Readers should inspect review dates, reviewer history, parcel detail, company replies and whether a post was invited or unprompted.",
        "Apple's US App Store currently shows LitBuy at 4.5 out of 5 from 245 ratings, while its written review feed contains strong praise and severe complaints. An aggregate can be mathematically accurate and still hide the distribution of specific problems. App reviews also mix product complaints, seller disputes, payment misunderstanding, parcel logistics and software experience. A balanced review separates those categories. A seller sending the wrong size is not the same failure as an app payment error, and a customs delay is not the same as a warehouse inspection mistake."
      ]
    },
    {
      heading: "How to test the likely shipping cost before committing",
      paragraphs: [
        "LitBuy provides a shipping-estimation page and explains that a route's first-weight unit is the minimum weight charged. The complete quote can depend on actual weight, packed dimensions, a route-specific volumetric calculation, continuation increments, restrictions and optional services. Start with a range rather than a single number. Note each item's likely weight, identify rigid or bulky retail packaging, and estimate the packed external dimensions. Then compare routes using the same destination and parcel assumptions.",
        "Use rehearsal or pre-packing measurement when a parcel contains bulky items, sits near a route limit or could switch from scale-based to volumetric billing. Rehearsal reduces uncertainty about the consolidated box, but it does not control customs, carrier remeasurement, remote-area charges, taxes or address problems. LitBuy's published shipping policy says warehouse processing generally takes one to three business days excluding weekends and public holidays. That is processing before dispatch, not a promise for international delivery. Keep warehouse handling, carrier transit and customs as separate time ranges."
      ]
    },
    {
      heading: "A practical decision checklist",
      paragraphs: [
        "Before paying for products, confirm that you understand the two payment stages, the seller's options and return position, and the difference between a product price and a landed parcel cost. Record the source product ID and selected variant. Use a payment method whose dispute and refund timing you understand. Do not rely on a temporary coupon until the live account shows that it applies to the route and payment stage you intend to use. Avoid buying a large first haul simply because individual products look inexpensive.",
        "At the warehouse, check identity, quantity, visible condition, measurements and packaging promptly. Before shipping, compare actual and volumetric scenarios, route restrictions, protection, insurance and the account's storage deadline. Save the parcel quote, packed measurements and tracking record. LitBuy may be a workable option for users who understand agent logistics and verify each stage, but no review can make the platform, seller or carrier risk-free. The most reliable conclusion is conditional: decide with your product type, destination, parcel shape, budget and tolerance for after-sales friction in view."
      ]
    }
  ]
};

export const articleData: Record<ArticleSlug, Record<ArticleLang, ArticleContent>> = {
  "litbuy-spreadsheet-guide": {
    en: {
      title: "How to use a LitBuy spreadsheet without losing the original listing",
      deck: "A practical system for moving from a find to its live source page while keeping the image, price, option and product identity connected.",
      readTime: "12 minute read",
      sections: [
        {
          heading: "The route is part of the product",
          paragraphs: [
            "A spreadsheet entry is useful only when it preserves a dependable route back to the listing it describes. A product name by itself is weak evidence: names are shortened, translated, repeated and sometimes replaced. A generic category link is also insufficient because it asks the reader to rediscover the item from scratch. Treat the destination URL, source record number and product image as one identity bundle. If one element points somewhere else, the row is not ready to use. That simple standard prevents the most common failure in product directories: a polished card that opens an unrelated item or an empty collection.",
            "This site uses that identity bundle for every featured record. The card image opens a local detail page, while the action button opens the corresponding source record on the main catalog. The local page repeats the source ID, original CNY amount, USD reference and the date the route was checked. Those fields do not make inventory permanent, but they let a reader see exactly what was matched. When a source changes, there is enough context to identify the stale field instead of silently sending visitors to a different product.",
          ],
        },
        {
          heading: "Capture identity before presentation",
          paragraphs: [
            "Start with the source page rather than the design of the spreadsheet. Record the canonical product URL as it appears after unnecessary tracking parameters are removed. Save the source record or product ID in its own field, not only inside a long URL. Then write a neutral item label that describes what can actually be seen, such as sweatshirt, jersey or utility bag. Avoid inventing model names, materials or seller promises that are not visible on the source page. A short factual label is easier to maintain and much safer for search than a decorative title that implies unsupported specifications.",
            "Next, attach the exact product image used by that source record. Open both the image and the destination during review and compare silhouette, color, graphics, hardware and category. Similar products are not interchangeable. Two jerseys or two black hoodies can have different source IDs, option sets and prices. Keeping the source ID visible in the spreadsheet makes duplicate-looking entries auditable. It also gives you a stable search clue if a platform changes its URL format but still exposes the record number on a new page.",
          ],
        },
        {
          heading: "Match images as evidence",
          paragraphs: [
            "Images carry more identity than most spreadsheet titles, so they need a deliberate verification step. Compare the featured image against the destination at full size. Look for the same crop, background, colorway, panel arrangement and visible accessories. If the source page offers several options, make clear whether the spreadsheet image represents one option or the whole listing. A card should never imply that every visible color or bundle is available at the displayed reference price. The image is a route marker, not a promise about current stock.",
            "Store images at a practical web size and use descriptive alternative text, but do not edit them in a way that changes product evidence. Heavy filters, background replacement and misleading crops can hide the very details readers use to confirm a match. When an image fails to load, the row should still expose a label, source ID and destination. Conversely, a beautiful cached image should not keep a dead route looking current. The source page remains the final check for availability, options and condition.",
          ],
        },
        {
          heading: "Separate reference price from final price",
          paragraphs: [
            "A spreadsheet price is a snapshot. The final amount can change with seller edits, size or color choices, domestic delivery, exchange rates and promotions. Record the source currency first, because it is the value shown by the listing. A second currency can help international readers compare items, but label it as a reference conversion and keep the conversion basis visible. On litbuys.store, USD values are calculated from the recorded CNY price using the stated reference rate; they are not checkout quotations.",
            "Options deserve their own check. Some listings show a low starting price that belongs to one accessory, deposit or variant rather than the pictured configuration. Open the option selector and compare each choice before publishing a single headline number. If the source does not reveal enough information without interaction, use cautious wording and direct the reader to verify the live page. Precision is more valuable than an artificially low number. A directory earns repeat visits when its price notes explain uncertainty instead of hiding it.",
          ],
        },
        {
          heading: "Detect stale and broken records",
          paragraphs: [
            "No spreadsheet stays accurate forever. Sellers change inventory, catalog systems migrate, and individual records are removed. Add a checked date and review high-traffic rows more frequently than rarely opened ones. During a review, test the final response rather than assuming that a page loading means the route is valid. A soft error page may return a normal status code while displaying no product. Confirm that the destination still contains the expected image, item identity and source price area.",
            "When a record fails, do not automatically redirect it to a broad category. That preserves a click but destroys the match. Mark the entry unavailable, replace it only after verifying a genuinely corresponding record, or retain the old source ID in a change log. If parameters or duplicate hostnames create several versions of the same page, choose one clean canonical route. These housekeeping choices reduce index duplication and keep users from seeing different URLs for what appears to be one product.",
          ],
        },
        {
          heading: "Move from directory to live catalog",
          paragraphs: [
            "Use the spreadsheet to narrow choices, not to complete a purchase decision. First filter by category and reference budget. Then open the local detail page to confirm the matched image, source record and last check date. Continue to the main catalog only when the identity still makes sense. On the live listing, re-check selectable options, current price, seller notes and any measurements. If a detail is missing, search the main catalog with the product ID or a neutral descriptive term rather than trusting an old screenshot.",
            "Keep the number of external destinations deliberately small. A product discovery site becomes harder to audit when identical buttons lead to unrelated platforms, shortened URLs or affiliate hops. Here, product, category and search actions stay within one main catalog. That creates a clear boundary: litbuys.store organizes and explains the find; the linked catalog controls the final listing data and any next action. Readers can understand where one responsibility ends and the other begins.",
          ],
        },
        {
          heading: "A repeatable seven-step check",
          paragraphs: [
            "Use the same sequence for every new row: open the source record; save its clean URL and ID; write a neutral label; capture the exact matching image; record source price and relevant options; add the review date; and test both the image route and external action from desktop and mobile. The order matters because it establishes identity before styling. If the entry fails any step, keep it out of the published grid until the mismatch is resolved.",
            "Finally, review the spreadsheet as a reader would. Search a term, open a category, choose a product card, inspect its details and follow the source action. Make sure back navigation is predictable, the language selection persists, and mobile cards remain readable without horizontal scrolling. Good spreadsheet SEO is not produced by repeating the phrase “LitBuy spreadsheet” across thin pages. It comes from useful, indexable records, stable internal paths, honest update signals and destinations that satisfy the query made on the card.",
          ],
        },
      ],
    },
    de: {
      title: "Eine LitBuy-Tabelle nutzen, ohne das Original-Listing zu verlieren",
      deck: "Ein nachvollziehbares System, das Fund, Live-Quellseite, Bild, Preis, Option und Produktidentität zusammenhält.",
      readTime: "9 Min. Lesezeit",
      sections: [
        { heading: "Der Weg gehört zum Produkt", paragraphs: ["Ein Tabellenfund ist nur dann nützlich, wenn er zuverlässig zum beschriebenen Listing zurückführt. Name, Bild, Quell-ID und Ziel-URL bilden deshalb eine gemeinsame Identität. Ein allgemeiner Kategorielink reicht nicht aus, weil Leser den Artikel erneut suchen müssten.", "Auf dieser Seite öffnet das Bild eine lokale Detailseite und die Aktion den zugeordneten Datensatz im Hauptkatalog. Datum, CNY-Quellwert und USD-Richtwert machen sichtbar, was geprüft wurde, ohne dauerhaften Bestand zu versprechen."] },
        { heading: "Identität vor Gestaltung erfassen", paragraphs: ["Beginne mit der Quellseite. Speichere eine saubere URL, die Datensatz-ID und eine neutrale Bezeichnung, die nur sichtbare Eigenschaften nennt. Erfinde keine Modellnamen, Materialien oder Versprechen.", "Ordne anschließend genau das Bild dieser Quellseite zu. Ähnliche Hoodies oder Trikots sind nicht austauschbar: Optionen, Preise und IDs können verschieden sein. Die sichtbare ID macht Doppelungen prüfbar."] },
        { heading: "Bilder als Beleg abgleichen", paragraphs: ["Vergleiche Ausschnitt, Hintergrund, Farbe, Form, Aufdruck und Zubehör in voller Größe. Bei mehreren Varianten muss klar sein, ob das Bild nur eine Option zeigt. Es ist ein Wegweiser, keine Lagergarantie.", "Verändere das Bild nicht so stark, dass wichtige Prüfmerkmale verschwinden. Fällt es aus, müssen Name, ID und Ziel weiter verständlich bleiben. Ein gespeichertes Bild darf einen toten Link nicht aktuell wirken lassen."] },
        { heading: "Richtpreis und Endpreis trennen", paragraphs: ["Speichere zuerst den CNY-Wert der Quelle. Eine USD-Angabe dient nur zum Vergleich und braucht einen sichtbaren Umrechnungshinweis. Optionen, Wechselkurs und Verkäuferänderungen beeinflussen den Endpreis.", "Prüfe, ob ein niedriger Startpreis zu Zubehör, Anzahlung oder einer einzelnen Variante gehört. Wenn die Quelle unklar ist, ist ein vorsichtiger Hinweis besser als ein künstlich genauer Preis."] },
        { heading: "Veraltete Datensätze erkennen", paragraphs: ["Jeder Eintrag braucht ein Prüfdatum. Teste nicht nur, ob eine Seite lädt, sondern ob sie weiterhin erwartetes Bild, Produkt und Preisfeld enthält. Auch Fehlerseiten können technisch erfolgreich antworten.", "Leite einen verschwundenen Artikel nicht still auf eine Kategorie um. Markiere ihn als nicht verfügbar oder ersetze ihn erst nach vollständigem Abgleich. Wähle bei URL-Dubletten eine klare kanonische Version."] },
        { heading: "Vom Verzeichnis zum Live-Katalog", paragraphs: ["Filtere zuerst nach Kategorie und Budget, prüfe dann lokale Details und öffne erst danach die Live-Seite. Kontrolliere dort Preis, Optionen, Maße und Hinweise erneut.", "Externe Aktionen bleiben hier in einem Hauptkatalog. So ist die Grenze klar: litbuys.store ordnet und erklärt; der verlinkte Katalog kontrolliert die aktuellen Listingdaten."] },
        { heading: "Sieben Schritte wiederholen", paragraphs: ["Quelle öffnen, saubere URL und ID speichern, neutral benennen, Bild abgleichen, Preis und Optionen erfassen, Prüfdatum ergänzen und beide Wege auf Desktop und Mobilgerät testen. Fehlerhafte Zeilen bleiben unveröffentlicht.", "Teste zuletzt den gesamten Leserweg einschließlich Suche, Zurücknavigation und Sprachwechsel. Nützliche indexierbare Datensätze, klare Updates und passende Ziele sind stärker als wiederholte Keywords auf dünnen Seiten."] },
      ],
    },
    es: {
      title: "Cómo usar una hoja LitBuy sin perder el anuncio original",
      deck: "Un sistema para mantener unidos el hallazgo, la ficha activa, su imagen, precio, opción e identidad.",
      readTime: "9 min de lectura",
      sections: [
        { heading: "La ruta forma parte del producto", paragraphs: ["Una fila solo sirve si conserva un camino fiable hacia la ficha descrita. Nombre, imagen, ID fuente y URL deben tratarse como una sola identidad; una categoría genérica obliga a buscar el artículo otra vez.", "Aquí la imagen abre un detalle local y la acción abre el registro correspondiente del catálogo principal. La fecha, el importe CNY y la referencia USD muestran qué se comprobó sin prometer inventario permanente."] },
        { heading: "Registra identidad antes que diseño", paragraphs: ["Empieza por la página fuente. Guarda una URL limpia, el ID y un nombre neutral basado en lo visible. No inventes modelo, material ni promesas que la ficha no confirme.", "Asocia después la imagen exacta. Dos sudaderas o camisetas parecidas pueden tener opciones, precios e ID distintos. Mostrar el identificador vuelve auditables los duplicados."] },
        { heading: "Usa la imagen como evidencia", paragraphs: ["Compara recorte, fondo, color, forma, gráficos y accesorios a tamaño completo. Si existen variantes, aclara si la imagen representa solo una. La foto guía hacia la ruta; no garantiza existencias.", "No apliques ediciones que oculten rasgos de comprobación. Aunque falle la imagen deben quedar nombre, ID y destino. Una imagen en caché tampoco debe hacer parecer vigente un enlace muerto."] },
        { heading: "Separa precio orientativo y final", paragraphs: ["Registra primero el precio CNY de la fuente. El valor USD solo ayuda a comparar y debe mostrar su base de cambio. Opciones, divisa y cambios del vendedor alteran el total.", "Comprueba si el precio inicial corresponde a accesorio, depósito o variante. Cuando la fuente sea ambigua, una nota prudente aporta más confianza que una cifra engañosamente exacta."] },
        { heading: "Detecta registros caducados", paragraphs: ["Añade una fecha de revisión y confirma que la página conserva imagen, identidad y zona de precio esperadas; algunas páginas de error cargan con normalidad.", "No redirijas en silencio un artículo eliminado a una categoría. Márcalo o sustitúyelo solo después de verificar una coincidencia real. Elige una URL canónica cuando existan duplicados."] },
        { heading: "Pasa al catálogo activo", paragraphs: ["Filtra por categoría y presupuesto, revisa el detalle local y abre la fuente. Allí vuelve a comprobar precio, opciones, medidas y notas.", "Las acciones externas permanecen en un catálogo principal. litbuys.store organiza y explica; el catálogo enlazado controla los datos finales de la ficha."] },
        { heading: "Repite siete comprobaciones", paragraphs: ["Abre la fuente; guarda URL e ID; usa nombre neutral; empareja imagen; registra precio y opciones; añade fecha; prueba imagen y acción en escritorio y móvil. No publiques una fila con dudas.", "Recorre al final búsqueda, categoría, detalle y destino como lector. Los registros útiles, las rutas internas estables y las señales honestas de actualización superan a páginas delgadas llenas de palabras clave."] },
      ],
    },
    fr: {
      title: "Utiliser un tableur LitBuy sans perdre la fiche d’origine",
      deck: "Une méthode pour garder la trouvaille, la fiche active, l’image, le prix, l’option et l’identité du produit ensemble.",
      readTime: "9 min de lecture",
      sections: [
        { heading: "La route fait partie du produit", paragraphs: ["Une ligne n’est utile que si elle conserve un chemin fiable vers la fiche décrite. Nom, image, ID source et URL forment une seule identité; une catégorie générique oblige à rechercher le produit.", "Ici, l’image ouvre un détail local et l’action le bon enregistrement du catalogue principal. Date, montant CNY et référence USD montrent ce qui a été contrôlé sans promettre un stock durable."] },
        { heading: "Saisir l’identité avant le design", paragraphs: ["Commencez par la source. Enregistrez l’URL propre, l’ID et un libellé neutre limité aux éléments visibles. N’inventez ni modèle, ni matière, ni promesse.", "Associez ensuite l’image exacte. Deux sweats ou maillots proches peuvent avoir des options, prix et IDs différents. Afficher l’identifiant rend les doublons vérifiables."] },
        { heading: "Traiter l’image comme une preuve", paragraphs: ["Comparez cadrage, fond, couleur, forme, graphisme et accessoires en grand format. S’il existe plusieurs variantes, précisez ce que montre l’image. Elle indique une route, pas le stock.", "Évitez les retouches qui masquent des indices. Si l’image échoue, nom, ID et destination doivent rester lisibles. Une image en cache ne doit pas faire paraître actif un lien mort."] },
        { heading: "Séparer référence et prix final", paragraphs: ["Enregistrez d’abord le prix CNY source. La valeur USD sert à comparer et doit afficher sa base de conversion. Options, taux et modifications du vendeur changent le total.", "Vérifiez si le prix de départ correspond à un accessoire, un acompte ou une variante. En cas d’ambiguïté, une note prudente vaut mieux qu’un chiffre faussement précis."] },
        { heading: "Repérer les fiches périmées", paragraphs: ["Ajoutez une date et confirmez que la page contient toujours l’image, l’identité et la zone de prix attendues; certaines erreurs semblent charger normalement.", "Ne redirigez pas silencieusement un produit supprimé vers une catégorie. Marquez-le ou remplacez-le après un vrai contrôle. Choisissez une URL canonique parmi les doublons."] },
        { heading: "Passer au catalogue actif", paragraphs: ["Filtrez par catégorie et budget, consultez le détail local puis ouvrez la source. Contrôlez à nouveau prix, options, mesures et notes.", "Les actions externes restent dans un catalogue principal. litbuys.store organise et explique; le catalogue lié contrôle les informations finales."] },
        { heading: "Répéter sept contrôles", paragraphs: ["Ouvrez la source; gardez URL et ID; nommez sobrement; associez l’image; notez prix et options; ajoutez la date; testez les routes sur ordinateur et mobile. Ne publiez pas un doute.", "Parcourez enfin recherche, catégorie, détail et destination comme un lecteur. Des fiches utiles, chemins stables et mises à jour honnêtes valent mieux que des pages minces chargées de mots-clés."] },
      ],
    },
    it: {
      title: "Usare un foglio LitBuy senza perdere l’inserzione originale",
      deck: "Un metodo per tenere uniti prodotto, pagina sorgente, immagine, prezzo, opzione e identità.",
      readTime: "9 min di lettura",
      sections: [
        { heading: "Il percorso fa parte del prodotto", paragraphs: ["Una riga è utile solo se mantiene un percorso affidabile verso la scheda descritta. Nome, immagine, ID sorgente e URL sono un’unica identità; una categoria generica costringe a cercare di nuovo.", "Qui l’immagine apre il dettaglio locale e l’azione il record corrispondente del catalogo principale. Data, importo CNY e riferimento USD mostrano cosa è stato controllato senza promettere scorte permanenti."] },
        { heading: "Registra l’identità prima del design", paragraphs: ["Parti dalla pagina sorgente. Salva URL pulito, ID e nome neutro basato solo su elementi visibili. Non inventare modello, materiale o promesse.", "Associa poi l’immagine esatta. Felpe o maglie simili possono avere opzioni, prezzi e ID diversi. L’identificatore visibile rende verificabili i duplicati."] },
        { heading: "Usa l’immagine come prova", paragraphs: ["Confronta ritaglio, sfondo, colore, forma, grafiche e accessori a piena grandezza. Se esistono varianti, chiarisci cosa rappresenta l’immagine: è un indicatore di percorso, non di disponibilità.", "Non modificare la foto nascondendo dettagli utili. Se non carica, nome, ID e destinazione devono restare chiari. Un’immagine salvata non deve far sembrare attivo un link morto."] },
        { heading: "Separa riferimento e prezzo finale", paragraphs: ["Registra prima il valore CNY della fonte. L’importo USD aiuta il confronto e deve mostrare il cambio di riferimento. Opzioni, valuta e modifiche del venditore cambiano il totale.", "Controlla se il prezzo iniziale appartiene ad accessorio, deposito o variante. Quando la fonte è ambigua, una nota prudente è migliore di una precisione ingannevole."] },
        { heading: "Individua record scaduti", paragraphs: ["Aggiungi la data di controllo e verifica che la pagina contenga ancora immagine, identità e area prezzo attese; anche un errore può caricarsi normalmente.", "Non reindirizzare in silenzio un articolo rimosso a una categoria. Segnalalo o sostituiscilo solo dopo una vera corrispondenza. Scegli un URL canonico tra i duplicati."] },
        { heading: "Passa al catalogo attivo", paragraphs: ["Filtra categoria e budget, controlla il dettaglio locale e apri la sorgente. Ricontrolla prezzo, opzioni, misure e note.", "Le azioni esterne restano in un catalogo principale. litbuys.store organizza e spiega; il catalogo collegato controlla i dati finali."] },
        { heading: "Ripeti sette controlli", paragraphs: ["Apri la fonte; salva URL e ID; usa un nome neutro; abbina l’immagine; registra prezzo e opzioni; aggiungi data; prova le rotte su desktop e mobile. Non pubblicare dubbi.", "Percorri infine ricerca, categoria, dettaglio e destinazione come un lettore. Record utili, percorsi stabili e aggiornamenti onesti valgono più di pagine sottili piene di keyword."] },
      ],
    },
  },
  "litbuy-qc-photo-checklist": {
    en: {
      title: "QC photo checklist: what a warehouse image can and cannot prove",
      deck: "A disciplined inspection order for shoes, apparel, bags and accessories—and a clear boundary between visible evidence and assumptions.",
      readTime: "13 minute read",
      sections: [
        {
          heading: "Define what QC can prove",
          paragraphs: [
            "A quality-control photo records one item, from one angle, under one lighting setup, at one moment. It can show overall shape, visible construction, markings, color relationships, obvious dirt, tears and packaging condition. It may also confirm that the photographed size or option label matches the order record. Those are valuable observations, but they are not the same as certification. A photograph cannot establish long-term durability, fiber composition, hidden structure, exact color under daylight, comfort, smell or performance after repeated use. Begin every review by separating what is visible from what is merely plausible.",
            "Use careful language when recording a decision. “The left seam appears higher in the front photo” is testable; “the item is poor quality” is broad and may depend on details outside the frame. A good QC note names the view, the location of the issue and the additional evidence required. That makes it easier to ask for a targeted image instead of requesting a vague recheck. It also prevents a confident-looking spreadsheet from turning limited warehouse evidence into an unsupported guarantee.",
            "That boundary also matches LitBuy's published refund terms. The company describes its basic warehouse QC as verification of quantity, visible appearance and obvious external defects. It does not describe the standard photo set as a laboratory test or authenticity certificate. Use the official scope when deciding what to ask: quantity and a visible option can be checked directly, while material composition, hidden construction and future wear normally require evidence the warehouse images do not provide.",
          ],
        },
        {
          heading: "Start with silhouette and symmetry",
          paragraphs: [
            "Review the full front, side and rear views before zooming into logos or stitching. Overall proportions reveal mistakes that detail-first inspection misses: mismatched shoe shapes, uneven collar height, twisted garment panels, displaced pockets or a bag that does not sit square. Compare left and right sides using fixed reference points such as the top edge, center line, sole, hem and handle attachment. Perspective can distort a photo, so look for the same difference across more than one view before treating it as a defect.",
            "For shoes, compare toe shape, heel height, side panels, sole bonding and the alignment of each pair. For clothing, check shoulder slope, sleeve length, hem, placket and print placement. For bags, examine handle height, flap alignment, piping and whether the base appears level. Accessories often need a clear front-and-back view because clasps and fasteners hide behind the main face. Large asymmetry is usually more consequential than one isolated loose thread, so resolve structure first.",
          ],
        },
        {
          heading: "Read construction in a fixed order",
          paragraphs: [
            "Use the same inspection path every time: outer silhouette, major panels, seams, edges, closures, hardware, surface and labels. Repetition reduces the chance that an attractive hero angle distracts from a practical flaw. Trace long seams from end to end and look for sudden changes in spacing, puckering or skipped sections. Inspect glued edges for visible separation and painted edges for obvious overflow. Check zippers, snaps and buckles in both open and closed positions whenever the photo set provides them.",
            "Do not overinterpret small compression artifacts. Warehouse images are often resized, sharpened or photographed with a phone, so a blurry line is not automatically faulty stitching. Ask for a closer, well-lit image when the issue would affect your decision. The best follow-up request describes one location and one action: photograph the inner left seam, place the zipper closed, or show the sole edge from the side. Precise requests create evidence; asking whether everything is “good” creates an opinion.",
          ],
        },
        {
          heading: "Measurements beat size labels",
          paragraphs: [
            "A size tag confirms the label attached to the photographed item, not how that item will fit. Letter sizes can vary by seller, pattern and product category. Compare measurable dimensions with an item you already own and use in the same way. For a top, common checks include chest width, shoulder width, back length and sleeve length. Pants may require waist laid flat, rise, inseam and leg opening. Bags benefit from width, height, depth and handle drop. Shoes may require insole or internal length when available.",
            "A useful measurement photo shows the entire tape, the zero point and the end point on a reasonably flat item. A close-up of one number without context can be misread. Allow for garment stretch, thickness and the fact that soft products may not lie perfectly flat. If the source listing provides a size chart, compare the warehouse measurement with that chart, but keep a reasonable tolerance for method. When fit is decisive, one clear measurement is worth more than several decorative close-ups.",
          ],
        },
        {
          heading: "Treat color and labels cautiously",
          paragraphs: [
            "Color is one of the easiest QC signals to misread. Warehouse LEDs, phone white balance, automatic contrast and nearby colored surfaces can change the image. Compare several angles and look at neutral references such as white paper, a gray floor or a measuring tape. If color is critical, request a photograph under neutral lighting, but accept that screens also differ. A photo can establish that two panels visibly differ from each other more reliably than it can establish an exact commercial color name.",
            "Labels can help confirm selected size, color code, product identifier and care information. They cannot, by themselves, authenticate origin or material claims. Check that information is internally consistent across the order record, hangtag and sewn label, while treating any unsupported claim as unverified. If a listing is ambiguous about material, do not convert a label close-up into certainty. Record what the image says and leave the conclusion bounded by the evidence.",
          ],
        },
        {
          heading: "Check packaging before shipping",
          paragraphs: [
            "Packaging affects both condition and chargeable volume. Look for crushed boxes, exposed sharp hardware, unprotected surfaces, moisture marks and loose components. Decide whether a retail box is important for protection or only adds volume. Removing packaging can reduce parcel size, but it may also remove structure around shoes, hats or fragile accessories. The right choice depends on the item and route, not a universal instruction. Request reinforcement or separation only when it solves a visible risk.",
            "Before international submission, confirm that the photographed quantity and options match the order record. Grouped orders are prone to simple mix-ups when similar colors or sizes arrive together. A final inventory note should identify the item by source ID, selected option and a distinctive visual detail. This is also the moment to raise visible issues: after the parcel moves into international transport, evidence and remedies may be more limited. Keep the decision reversible while the item is still accessible.",
          ],
        },
        {
          heading: "Make a proportionate decision",
          paragraphs: [
            "Classify findings into three groups: confirmed mismatch, visible imperfection and unresolved question. A wrong size label or different item is a confirmed mismatch. A loose thread or small mark may be a visible imperfection whose importance depends on location and expectations. A suspicious shadow or blurred seam is an unresolved question and needs better evidence. This classification prevents every minor issue from receiving the same response and keeps attention on errors that change identity, fit, function or shipping safety.",
            "Document the decision with the relevant photo, location and requested next step. Accept when the evidence matches your criteria; request one targeted photo when uncertainty is material; or pause the parcel when the identity or major condition is wrong. No checklist can remove judgment, and no QC photo can guarantee future performance. The goal is more modest and more useful: turn a fast visual review into a repeatable, evidence-based decision before the expensive and less reversible stage of international shipping.",
          ],
        },
      ],
    },
    de: {
      title: "QC-Fotocheckliste: Was Lagerbilder zeigen können",
      deck: "Eine feste Prüfreihenfolge für Schuhe, Kleidung, Taschen und Zubehör – mit klarer Grenze zwischen sichtbarem Beleg und Annahme.",
      readTime: "10 Min. Lesezeit",
      sections: [
        { heading: "Festlegen, was QC beweisen kann", paragraphs: ["Ein QC-Foto zeigt einen Artikel, einen Winkel, ein Licht und einen Zeitpunkt. Sichtbar sind Form, Konstruktion, Markierungen, grobe Schäden und Verpackung. Haltbarkeit, exaktes Material, Geruch, Komfort oder spätere Leistung beweist es nicht.", "Formuliere Beobachtungen prüfbar: Ort, Ansicht und benötigtes Zusatzbild. Ein präziser Hinweis wie eine höher wirkende Naht ist hilfreicher als das pauschale Urteil „schlechte Qualität“."] },
        { heading: "Mit Form und Symmetrie beginnen", paragraphs: ["Prüfe Vorder-, Seiten- und Rückansicht vor Logos und Nähten. Vergleiche Seiten an festen Punkten wie Mittelachse, Saum, Sohle oder Griffansatz und berücksichtige Perspektive.", "Bei Schuhen zählen Zehenform, Ferse und Sohle; bei Kleidung Schulter, Ärmel, Saum und Druck; bei Taschen Griffe, Klappe, Kanten und Stand. Große Strukturabweichungen zuerst klären."] },
        { heading: "Konstruktion immer gleich lesen", paragraphs: ["Gehe von Silhouette über Flächen, Nähte, Kanten, Verschlüsse und Oberfläche bis zu Etiketten. Verfolge lange Nähte und prüfe Reißverschlüsse oder Schnallen offen und geschlossen, sofern Bilder vorliegen.", "Kompressionsunschärfe ist kein Beweis für einen Fehler. Bitte bei entscheidenden Punkten um ein nahes, gut beleuchtetes Foto mit genauer Ortsangabe und gewünschter Aktion."] },
        { heading: "Maße sind stärker als Größenetiketten", paragraphs: ["Ein Etikett bestätigt nur die angebrachte Größe. Vergleiche Brust, Schulter, Länge, Taille, Innenbein oder Taschenmaße mit einem eigenen Gegenstand; bei Schuhen hilft die Innenlänge.", "Ein gutes Maßfoto zeigt Nullpunkt, Band und Endpunkt. Beachte Dehnung, Dicke und Messtechnik. Wenn Passform wichtig ist, ist ein klares Maß wertvoller als mehrere dekorative Nahaufnahmen."] },
        { heading: "Farbe und Labels vorsichtig lesen", paragraphs: ["LED-Licht, Weißabgleich und Displays verändern Farbe. Vergleiche mehrere Winkel und neutrale Flächen. Unterschiede zwischen zwei Panels sind verlässlicher als ein exakter Farbname.", "Etiketten können Größe, Code und Pflegehinweise bestätigen, authentifizieren aber keine Herkunft. Halte Aussagen auf das beschränkt, was Bild und Bestelldaten konsistent zeigen."] },
        { heading: "Verpackung vor Versand prüfen", paragraphs: ["Achte auf beschädigte Kartons, ungeschützte Beschläge, Feuchtigkeit und lose Teile. Verpackung kann schützen oder Volumen erhöhen; die Entscheidung hängt vom Artikel ab.", "Bestätige Menge und Optionen anhand ID und sichtbarem Detail. Melde relevante Probleme, solange der Artikel erreichbar ist und die Entscheidung noch umkehrbar bleibt."] },
        { heading: "Verhältnismäßig entscheiden", paragraphs: ["Trenne bestätigte Abweichung, sichtbare Unvollkommenheit und offene Frage. Falsche Größe ist klar; kleiner Faden ist kontextabhängig; ein Schatten braucht bessere Evidenz.", "Dokumentiere Foto, Ort und nächsten Schritt. Ziel ist keine Garantie, sondern eine wiederholbare Entscheidung vor dem teureren und weniger umkehrbaren internationalen Versand."] },
      ],
    },
    es: {
      title: "Lista QC: lo que una foto de almacén puede demostrar",
      deck: "Un orden de inspección para calzado, ropa, bolsos y accesorios, con límites claros entre evidencia y suposición.",
      readTime: "10 min de lectura",
      sections: [
        { heading: "Define lo que QC puede probar", paragraphs: ["Una foto registra un artículo, ángulo, luz y momento. Puede mostrar forma, construcción visible, marcas, daños y embalaje; no demuestra duración, material exacto, comodidad, olor o rendimiento futuro.", "Escribe observaciones comprobables con vista, lugar y evidencia adicional. “La costura izquierda parece más alta” ayuda más que afirmar de forma general que la calidad es mala."] },
        { heading: "Empieza por silueta y simetría", paragraphs: ["Mira frente, lateral y trasera antes de ampliar logos. Compara ambos lados con referencias como centro, borde, suela, dobladillo o unión del asa y considera la perspectiva.", "En zapatos revisa puntera, talón y suela; en ropa hombro, manga, bajo y estampado; en bolsos asas, solapa, ribetes y base. Resuelve primero la estructura."] },
        { heading: "Lee la construcción en orden", paragraphs: ["Sigue siempre silueta, paneles, costuras, bordes, cierres, herrajes, superficie y etiquetas. Observa costuras largas y cierres abiertos y cerrados cuando sea posible.", "El desenfoque de compresión no prueba un defecto. Si importa, pide una imagen cercana y bien iluminada de una ubicación y una acción concretas."] },
        { heading: "Las medidas ganan a la talla", paragraphs: ["La etiqueta solo confirma la talla colocada. Compara pecho, hombro, largo, cintura, entrepierna o dimensiones del bolso con algo propio; en calzado puede ayudar la longitud interior.", "Una buena foto muestra inicio, cinta y final. Considera elasticidad y método. Cuando el ajuste decide, una medida clara vale más que varios primeros planos decorativos."] },
        { heading: "Trata color y etiquetas con cautela", paragraphs: ["LED, balance de blancos y pantallas alteran el color. Compara ángulos y superficies neutras; una diferencia entre paneles es más fiable que un nombre exacto de color.", "Las etiquetas ayudan con talla, código y cuidados, pero no autentican origen. Limita la conclusión a lo consistente entre imagen y pedido."] },
        { heading: "Revisa embalaje antes del envío", paragraphs: ["Busca cajas aplastadas, herrajes expuestos, humedad y piezas sueltas. El embalaje puede proteger o aumentar volumen; decide según artículo y ruta.", "Confirma cantidad y opciones con ID y detalle visual. Comunica problemas mientras el artículo siga accesible y la decisión sea reversible."] },
        { heading: "Decide de forma proporcional", paragraphs: ["Separa error confirmado, imperfección visible y pregunta abierta. Una talla equivocada es clara; un hilo suelto depende del contexto; una sombra necesita otra foto.", "Documenta imagen, lugar y siguiente paso. El objetivo no es garantizar el futuro, sino decidir con evidencia antes del envío internacional."] },
      ],
    },
    fr: {
      title: "Checklist QC : ce qu’une photo d’entrepôt peut prouver",
      deck: "Un ordre d’inspection pour chaussures, vêtements, sacs et accessoires, avec une limite claire entre preuve visible et hypothèse.",
      readTime: "10 min de lecture",
      sections: [
        { heading: "Définir ce que le QC prouve", paragraphs: ["Une photo montre un article, un angle, une lumière et un instant. Elle révèle forme, construction visible, marques, dégâts et emballage, mais pas durée, matière exacte, confort, odeur ou performance future.", "Décrivez vue, emplacement et preuve supplémentaire. « La couture gauche paraît plus haute » est vérifiable; « mauvaise qualité » reste trop général."] },
        { heading: "Commencer par forme et symétrie", paragraphs: ["Regardez face, côté et dos avant les logos. Comparez les deux côtés avec des repères fixes comme centre, semelle, ourlet ou attache de poignée, en tenant compte de la perspective.", "Pour les chaussures: pointe, talon et semelle; vêtements: épaule, manche, bas et imprimé; sacs: anses, rabat, bord et base. Résolvez d’abord la structure."] },
        { heading: "Lire la construction dans un ordre fixe", paragraphs: ["Suivez silhouette, panneaux, coutures, bords, fermetures, métal, surface et étiquettes. Contrôlez les longues coutures et les fermetures ouvertes puis closes si les vues existent.", "Le flou de compression ne prouve pas un défaut. Demandez une photo proche et éclairée d’un emplacement et d’une action précis si la décision en dépend."] },
        { heading: "Les mesures battent les tailles", paragraphs: ["Une étiquette confirme la taille posée, pas la coupe. Comparez poitrine, épaules, longueur, taille, entrejambe ou dimensions du sac avec un objet à vous; pour les chaussures, utilisez la longueur interne.", "Une bonne image montre début, ruban et fin. Tenez compte de l’élasticité et de la méthode. Une mesure claire vaut mieux que plusieurs gros plans décoratifs."] },
        { heading: "Couleur et labels avec prudence", paragraphs: ["LED, balance des blancs et écrans modifient les couleurs. Comparez angles et surfaces neutres; un écart entre panneaux est plus fiable qu’un nom de couleur exact.", "Les labels confirment taille, code et entretien, pas l’origine. Limitez la conclusion à ce que l’image et la commande montrent de façon cohérente."] },
        { heading: "Contrôler l’emballage avant envoi", paragraphs: ["Cherchez boîte écrasée, métal exposé, humidité ou pièces libres. L’emballage protège mais augmente parfois le volume; adaptez la décision au produit et à la route.", "Confirmez quantité et options avec ID et détail distinctif. Signalez les problèmes tant que l’article reste accessible et la décision réversible."] },
        { heading: "Décider proportionnellement", paragraphs: ["Séparez erreur confirmée, imperfection visible et question ouverte. Mauvaise taille: clair; petit fil: contextuel; ombre floue: nouvelle preuve.", "Documentez photo, lieu et étape suivante. Le but n’est pas une garantie, mais une décision reproductible avant l’envoi international."] },
      ],
    },
    it: {
      title: "Checklist foto QC: cosa può dimostrare un’immagine di magazzino",
      deck: "Un ordine di controllo per scarpe, abiti, borse e accessori, con un confine chiaro tra prova visibile e ipotesi.",
      readTime: "10 min di lettura",
      sections: [
        { heading: "Definisci cosa può provare il QC", paragraphs: ["Una foto mostra un articolo, angolo, luce e momento. Può rivelare forma, costruzione visibile, segni, danni e confezione; non durata, materiale esatto, comfort, odore o prestazioni future.", "Scrivi osservazioni verificabili indicando vista, punto ed evidenza aggiuntiva. “La cucitura sinistra sembra più alta” è più utile di “qualità scarsa”."] },
        { heading: "Inizia da forma e simmetria", paragraphs: ["Guarda fronte, lato e retro prima dei loghi. Confronta i lati con riferimenti come centro, suola, orlo o attacco del manico, tenendo conto della prospettiva.", "Per scarpe controlla punta, tallone e suola; per abiti spalla, manica, orlo e stampa; per borse manici, patta, bordi e base. Prima la struttura."] },
        { heading: "Leggi la costruzione in ordine", paragraphs: ["Segui silhouette, pannelli, cuciture, bordi, chiusure, ferramenta, superficie ed etichette. Controlla cuciture lunghe e cerniere aperte e chiuse quando visibili.", "La sfocatura non prova un difetto. Se il punto è decisivo, chiedi un’immagine ravvicinata e illuminata di una zona e azione precise."] },
        { heading: "Le misure battono la taglia", paragraphs: ["L’etichetta conferma la taglia applicata, non la vestibilità. Confronta petto, spalle, lunghezza, vita, interno gamba o dimensioni borsa con un oggetto tuo; per scarpe serve la lunghezza interna.", "Una buona foto mostra inizio, metro e fine. Considera elasticità e metodo. Una misura chiara vale più di più dettagli decorativi."] },
        { heading: "Colore ed etichette con cautela", paragraphs: ["LED, bilanciamento del bianco e schermi cambiano i colori. Confronta angoli e superfici neutre; una differenza tra pannelli è più affidabile di un nome colore esatto.", "Le etichette aiutano con taglia, codice e cura, ma non autenticano l’origine. Limita le conclusioni a ciò che foto e ordine mostrano insieme."] },
        { heading: "Controlla l’imballo prima della spedizione", paragraphs: ["Cerca scatole schiacciate, metallo esposto, umidità e parti sciolte. L’imballaggio protegge ma può aumentare il volume; decidi secondo articolo e rotta.", "Conferma quantità e opzioni con ID e dettaglio visivo. Segnala problemi finché l’articolo è accessibile e la scelta reversibile."] },
        { heading: "Decidi in modo proporzionato", paragraphs: ["Distingui errore confermato, imperfezione visibile e domanda aperta. Taglia sbagliata è chiara; un filo dipende dal contesto; un’ombra richiede altra prova.", "Documenta foto, posizione e passo successivo. L’obiettivo non è una garanzia, ma una decisione ripetibile prima della spedizione internazionale."] },
      ],
    },
  },
  "litbuy-shipping-weight-guide": {
    en: {
      title: "LitBuy shipping cost: actual, volumetric and chargeable weight",
      deck: "Understand the three weight numbers, packaging choices and route-specific rules before turning a calculator result into a parcel budget.",
      readTime: "12 minute read",
      sections: [
        {
          heading: "Three weights, one invoice",
          paragraphs: [
            "Shipping estimates become confusing when the word “weight” is used for different calculations. Actual weight is what the packed parcel shows on a scale. Volumetric weight converts the space occupied by the package into a weight-like number, usually by multiplying length, width and height and dividing by a route-specific divisor. Chargeable weight is the number the route finally uses for its weight component. Depending on the service, it may be the higher of actual and volumetric weight, followed by rounding to a billing increment.",
            "These definitions explain why two parcels with the same products can receive different quotations. A dense, compact parcel is driven mainly by scale weight. A light parcel in a large box may be driven by volume. The same dimensions can also produce different volumetric values when routes use different divisors or measurement conventions. Never copy a divisor from a generic guide into a final budget. Read the rule shown for the specific route and confirm whether dimensions are measured before or after any packing adjustment.",
          ],
        },
        {
          heading: "Calculate without false precision",
          paragraphs: [
            "For a simple estimate, use packed external dimensions in the unit required by the route. Multiply length × width × height, divide by that route’s divisor, and compare the result with packed actual weight. Then apply the route’s rounding rule. A value of 2.01 kilograms might be billed as 2.1, 2.5 or 3 kilograms depending on the increment and service. A calculator that displays many decimal places can still be inaccurate if its inputs describe an unpacked item rather than the final parcel.",
            "Treat early product-page weights as planning signals, not final measurements. They may exclude protective material, outer carton, consolidation changes or seller packaging. Likewise, dimensions can be estimates or refer to the item instead of its packed form. Use ranges during shopping: a likely actual-weight range and a plausible box-size range. This reveals whether the parcel is clearly dense, clearly bulky or close enough that rehearsal measurements could change the best route.",
          ],
        },
        {
          heading: "Packaging changes both sides",
          paragraphs: [
            "Removing a retail box may lower volumetric weight, but the lightest packaging is not automatically the best. Shoes, hats, glass, structured bags and exposed hardware may need support to survive compression and handling. Soft apparel can often be folded more tightly, although aggressive compression may create creasing and does not always reduce the carrier’s measured dimensions as much as expected. Evaluate the protection job of each layer before asking for removal.",
            "Consolidation creates another tradeoff. Combining items can eliminate repeated outer boxes and base charges, but a poorly shaped combined parcel may increase the longest dimension or trigger an oversize rule. Ask whether split parcels have different route availability, insurance limits or minimum charges. The goal is not simply one box or the smallest possible box; it is a package shape that protects the contents while staying within the chosen route’s size and billing rules.",
          ],
        },
        {
          heading: "Read the route, not the headline",
          paragraphs: [
            "A headline price per kilogram rarely describes the whole quote. Routes may have a first-weight charge, continuation increments, minimum billable weight, maximum length, circumference limits, restricted categories or destination surcharges. Some services calculate volume for every parcel; others apply special rules to specific shapes. Delivery speed can be a broad estimate rather than a guarantee, particularly around inspections, capacity changes or destination handling.",
            "Compare routes using the same parcel assumptions. Write down destination, packed actual weight, external dimensions, chargeable weight calculation, included services and visible surcharges. If one quote uses estimated dimensions and another uses rehearsal data, the comparison is not controlled. Also distinguish transport price from the complete order cost: domestic delivery, optional inspection, packaging, insurance, taxes, duties and payment conversion may sit outside the weight line.",
          ],
        },
        {
          heading: "Use rehearsal at the right time",
          paragraphs: [
            "A rehearsal or pre-packing measurement is most valuable when the parcel is bulky, near a route limit or likely to switch between actual and volumetric billing. It replaces guesses about consolidated dimensions with a measured package. It can also reveal whether removing one large box or splitting one rigid item changes the available routes. Rehearsal is less important when the parcel is small, dense and far from every threshold, although an actual packed measurement still improves the final quote.",
            "Do not treat rehearsal as a promise that a carrier will reproduce every measurement exactly. Final handling, rounding and carrier verification can create small differences. Keep a buffer rather than spending to the last cent of an estimate. If the measured parcel exceeds expectations, revisit packaging and route selection before submission. This is the last practical stage for changing the configuration without recalling a parcel already in transit.",
          ],
        },
        {
          heading: "LitBuy-specific policy checkpoints",
          paragraphs: [
            "LitBuy's shipping estimator explains that the first-weight unit is the minimum weight billed for a route. A parcel that weighs less than that threshold is still charged as the complete first unit, while later weight is normally added in route-specific increments. This is important when comparing small parcels: cutting a few grams may not change the price if the package remains inside the same billing band. Record the first unit, continuation unit, maximum dimensions and any category restriction before choosing packaging. A per-kilogram headline without those fields is not a complete route comparison.",
            "The published LitBuy shipping policy says warehouse parcel processing generally takes one to three business days, excluding weekends and public holidays. This period comes before carrier transit and should not be presented as an international delivery promise. The same policy separates estimated delivery from events such as customs, weather and carrier handling. If a parcel is delayed, preserve the tracking history and route terms. Refund terms for shipping are tied to confirmed delivery failure or a returned parcel being received and inspected, not simply to an estimate being exceeded."
          ],
        },
        {
          heading: "Build a complete parcel budget",
          paragraphs: [
            "Separate the budget into product cost, domestic movement, optional service fees, international transport, risk buffer and destination charges. The USD values shown in a discovery spreadsheet are reference conversions; exchange rates and payment providers can change the settled amount. Destination taxes and duties depend on jurisdiction, goods and declared information, so they should not be invented as a universal percentage. Consult the applicable customs authority or route terms when those charges matter.",
            "A useful buffer covers measurement variation, rounding and disclosed surcharges rather than hiding a weak estimate. Record which figures are known, quoted or assumed. For example: actual packed weight known; external dimensions estimated; divisor taken from current route page; remote-area status unknown. That small audit trail makes the budget easier to update when new data arrives and prevents a rough early calculation from becoming an unexplained final expectation.",
          ],
        },
        {
          heading: "A practical comparison workflow",
          paragraphs: [
            "Begin while choosing products by noting approximate item weight and whether packaging is rigid or bulky. After items are available, inspect condition and decide which packaging is necessary. Build one or more plausible parcel configurations, then calculate actual and volumetric scenarios using each candidate route’s current rules. Request measured packaging when a threshold could change the result. Compare complete route quotations, not only the advertised rate, and retain a buffer for rounding and destination uncertainty.",
            "Before submission, confirm the selected destination, parcel contents, restrictions, dimensions, chargeable weight, protection instructions and declared information. Save the quote date because route rules and prices can change. This workflow will not make an international shipment risk-free, but it turns “How much is shipping?” into a set of answerable questions. The important number is not the lightest weight displayed anywhere; it is the chargeable parcel under the route you actually intend to use.",
          ],
        },
      ],
    },
    de: {
      title: "LitBuy-Versandkosten: tatsächliches, Volumen- und Abrechnungsgewicht",
      deck: "Verstehe drei Gewichtsangaben, Verpackung und routenspezifische Regeln, bevor ein Rechnerwert zum Paketbudget wird.",
      readTime: "9 Min. Lesezeit",
      sections: [
        { heading: "Drei Gewichte, eine Rechnung", paragraphs: ["Tatsächliches Gewicht kommt von der Waage. Volumengewicht rechnet Länge × Breite × Höhe mit einem routenspezifischen Divisor in einen Gewichtswert um. Abrechnungsgewicht ist der schließlich verwendete, oft höhere und gerundete Wert.", "Dichte Pakete werden eher von der Waage bestimmt, leichte große Kartons vom Volumen. Divisoren und Messregeln unterscheiden sich, deshalb darf eine allgemeine Formel keine konkrete Route ersetzen."] },
        { heading: "Ohne falsche Präzision rechnen", paragraphs: ["Nutze Außenmaße des gepackten Pakets, den aktuellen Divisor und den Rundungsschritt. 2,01 kg können je nach Dienst als 2,1, 2,5 oder 3 kg zählen.", "Frühe Produktgewichte schließen Karton und Schutz oft aus. Plane deshalb Bereiche für Gewicht und Maße und erkenne, ob das Paket dicht, sperrig oder nahe an einer Schwelle ist."] },
        { heading: "Verpackung verändert beide Seiten", paragraphs: ["Eine entfernte Box senkt Volumen, kann aber Schuhe, Hüte, Glas oder strukturierte Taschen schlechter schützen. Weiche Kleidung lässt sich meist enger falten, jedoch nicht ohne mögliche Falten.", "Konsolidierung spart doppelte Kartons, kann aber Länge oder Übergröße erhöhen. Vergleiche auch Split-Pakete, Mindestpreise und Routenlimits. Gesucht ist sichere, regelkonforme Form."] },
        { heading: "Route statt Schlagzeile lesen", paragraphs: ["Ein Kilopreis zeigt selten Erstgewicht, Schritte, Mindestgewicht, Längenlimit, Einschränkungen oder Zuschläge. Laufzeiten sind oft Schätzungen.", "Vergleiche Routen mit identischem Ziel, Gewicht, Maßen und Serviceumfang. Trenne Transport von Inlandskosten, Prüfung, Verpackung, Versicherung, Steuern und Zahlungsumrechnung."] },
        { heading: "Rehearsal richtig einsetzen", paragraphs: ["Vorverpackungsmessung lohnt sich bei sperrigen Paketen, Grenzwerten oder möglichem Wechsel zur Volumenabrechnung. Sie ersetzt Schätzungen durch ein gemessenes Paket.", "Carrier können später geringfügig anders messen. Halte einen Puffer und ändere Verpackung oder Aufteilung vor der Einreichung, solange das Paket noch nicht unterwegs ist."] },
        { heading: "Vollständiges Budget bauen", paragraphs: ["Trenne Ware, Inland, Zusatzdienste, internationalen Transport, Puffer und Zielgebühren. Wechselkurs, Steuer und Zoll sind keine universellen Prozentsätze.", "Kennzeichne bekannte, angebotene und angenommene Werte. So lässt sich das Budget aktualisieren und eine frühe Schätzung wird nicht versehentlich zur Enderwartung."] },
        { heading: "Praktischer Vergleichsablauf", paragraphs: ["Notiere Gewicht und sperrige Verpackung, prüfe Artikel, plane Paketformen und rechne jede Route mit ihren aktuellen Regeln. Miss nach, wenn eine Schwelle wichtig ist, und vergleiche Gesamtangebote.", "Bestätige vor Einreichung Ziel, Inhalt, Einschränkungen, Maße, Abrechnungsgewicht und Schutz. Entscheidend ist das berechnete Paket der tatsächlich gewählten Route."] },
      ],
    },
    es: {
      title: "Envío LitBuy: peso real, volumétrico y facturable",
      deck: "Entiende los tres pesos, el embalaje y las reglas de cada ruta antes de convertir un cálculo en presupuesto.",
      readTime: "9 min de lectura",
      sections: [
        { heading: "Tres pesos, una factura", paragraphs: ["El peso real sale de la báscula. El volumétrico convierte largo × ancho × alto mediante el divisor de la ruta. El facturable es el valor finalmente usado, a menudo el mayor y después redondeado.", "Los paquetes densos dependen de la báscula y los grandes ligeros del volumen. Divisores y reglas cambian, así que una fórmula genérica no sustituye la ficha de la ruta."] },
        { heading: "Calcula sin falsa precisión", paragraphs: ["Usa dimensiones externas ya embaladas, divisor y redondeo actuales. 2,01 kg podrían facturarse como 2,1, 2,5 o 3 kg según el servicio.", "Los pesos iniciales pueden excluir caja y protección. Trabaja con intervalos para reconocer si el paquete es denso, voluminoso o cercano a un límite."] },
        { heading: "El embalaje cambia ambos lados", paragraphs: ["Quitar caja reduce volumen, pero puede perjudicar zapatos, sombreros, vidrio o bolsos estructurados. La ropa blanda admite más compresión, con riesgo de arrugas.", "Consolidar ahorra cajas repetidas, pero puede elevar la longitud o activar sobredimensión. Compara divisiones, mínimos y límites; busca forma segura y compatible."] },
        { heading: "Lee la ruta, no el titular", paragraphs: ["Un precio por kilo rara vez incluye primer tramo, incrementos, mínimos, límites, restricciones y recargos. Los plazos suelen ser estimaciones.", "Compara rutas con mismo destino, peso, medidas y servicios. Separa transporte de entrega doméstica, QC, embalaje, seguro, impuestos y conversión de pago."] },
        { heading: "Usa el ensayo cuando aporte", paragraphs: ["La medición previa vale más en paquetes voluminosos, cerca de límites o cuando puede cambiar el tipo de facturación. Sustituye conjeturas por dimensiones embaladas.", "El transportista aún puede medir distinto. Mantén margen y cambia embalaje o división antes de enviar, mientras la configuración sea reversible."] },
        { heading: "Construye el presupuesto completo", paragraphs: ["Separa producto, movimiento doméstico, servicios, transporte internacional, margen y cargos de destino. Cambio, impuestos y aranceles no son porcentajes universales.", "Marca qué datos son conocidos, cotizados o supuestos. Así podrás actualizar el presupuesto y evitar que una cifra temprana se convierta en promesa final."] },
        { heading: "Flujo práctico de comparación", paragraphs: ["Anota peso y embalaje, revisa los artículos, plantea configuraciones y calcula cada ruta con reglas actuales. Mide si un umbral cambia el resultado y compara cotizaciones completas.", "Antes de enviar confirma destino, contenido, restricciones, dimensiones, peso facturable y protección. Importa el paquete facturable de la ruta elegida."] },
      ],
    },
    fr: {
      title: "Livraison LitBuy : poids réel, volumétrique et facturable",
      deck: "Comprenez les trois poids, l’emballage et les règles de route avant de transformer un résultat de calcul en budget.",
      readTime: "9 min de lecture",
      sections: [
        { heading: "Trois poids, une facture", paragraphs: ["Le poids réel vient de la balance. Le volumétrique transforme longueur × largeur × hauteur avec le diviseur de la route. Le facturable est finalement retenu, souvent le plus élevé puis arrondi.", "Les colis denses dépendent de la balance, les grands colis légers du volume. Diviseurs et mesures changent: une formule générique ne remplace pas la règle de la route."] },
        { heading: "Calculer sans fausse précision", paragraphs: ["Utilisez dimensions extérieures emballées, diviseur et arrondi actuels. 2,01 kg peuvent être facturés 2,1, 2,5 ou 3 kg selon le service.", "Les poids produit excluent parfois carton et protection. Travaillez par fourchettes pour savoir si le colis est dense, volumineux ou proche d’un seuil."] },
        { heading: "L’emballage change les deux côtés", paragraphs: ["Retirer une boîte réduit le volume mais peut moins protéger chaussures, chapeaux, verre ou sacs structurés. Les vêtements souples se compressent, avec des plis possibles.", "Consolider évite des cartons, mais peut augmenter longueur ou surdimensionnement. Comparez colis séparés, minimums et limites; cherchez une forme sûre et conforme."] },
        { heading: "Lire la route, pas le titre", paragraphs: ["Un tarif au kilo montre rarement premier poids, paliers, minimum, limites, restrictions et suppléments. Les délais sont souvent estimés.", "Comparez les routes avec même destination, poids, mesures et services. Séparez transport, livraison interne, QC, emballage, assurance, taxes et conversion."] },
        { heading: "Utiliser la répétition au bon moment", paragraphs: ["Une mesure pré-emballée est utile pour colis volumineux, proche d’une limite ou susceptible de passer au poids volumétrique. Elle remplace les suppositions.", "Le transporteur peut remesurer différemment. Gardez une marge et modifiez emballage ou division avant soumission, tant que la configuration reste réversible."] },
        { heading: "Construire le budget complet", paragraphs: ["Séparez produit, mouvement interne, services, transport international, marge et frais de destination. Taux, taxes et droits ne sont pas universels.", "Marquez données connues, citées ou supposées. Le budget devient actualisable et une estimation précoce ne se transforme pas en promesse."] },
        { heading: "Méthode de comparaison", paragraphs: ["Notez poids et emballage, inspectez les articles, préparez plusieurs configurations et calculez chaque route avec ses règles. Mesurez si un seuil compte et comparez les devis complets.", "Avant envoi, confirmez destination, contenu, restrictions, dimensions, poids facturable et protection. Le chiffre utile est celui du colis sur la route choisie."] },
      ],
    },
    it: {
      title: "Spedizione LitBuy: peso reale, volumetrico e fatturabile",
      deck: "Comprendi i tre pesi, l’imballaggio e le regole di rotta prima di trasformare un calcolo in budget.",
      readTime: "9 min di lettura",
      sections: [
        { heading: "Tre pesi, una fattura", paragraphs: ["Il peso reale viene dalla bilancia. Il volumetrico trasforma lunghezza × larghezza × altezza con il divisore della rotta. Il fatturabile è il valore finale, spesso il maggiore poi arrotondato.", "Pacchi densi dipendono dalla bilancia, grandi pacchi leggeri dal volume. Divisori e misure cambiano: una formula generica non sostituisce la regola della rotta."] },
        { heading: "Calcola senza falsa precisione", paragraphs: ["Usa dimensioni esterne imballate, divisore e arrotondamento correnti. 2,01 kg possono diventare 2,1, 2,5 o 3 kg secondo il servizio.", "I pesi iniziali possono escludere scatola e protezione. Usa intervalli per capire se il pacco è denso, voluminoso o vicino a una soglia."] },
        { heading: "L’imballo cambia entrambi i lati", paragraphs: ["Togliere la scatola riduce volume ma può proteggere meno scarpe, cappelli, vetro o borse strutturate. I capi morbidi si comprimono, con possibili pieghe.", "Consolidare elimina scatole ripetute, ma può aumentare lunghezza o fuori misura. Confronta divisioni, minimi e limiti; cerca una forma sicura e conforme."] },
        { heading: "Leggi la rotta, non il titolo", paragraphs: ["Un prezzo al chilo raramente mostra primo peso, incrementi, minimi, limiti, restrizioni e supplementi. I tempi sono spesso stime.", "Confronta rotte con stessa destinazione, peso, misure e servizi. Separa trasporto da consegna interna, QC, imballo, assicurazione, imposte e cambio."] },
        { heading: "Usa la prova quando serve", paragraphs: ["Una misura pre-imballo è utile per pacchi voluminosi, vicini a limiti o capaci di passare al peso volumetrico. Sostituisce ipotesi con dimensioni reali.", "Il vettore può misurare diversamente. Mantieni margine e cambia imballo o divisione prima dell’invio, quando la configurazione è ancora reversibile."] },
        { heading: "Costruisci il budget completo", paragraphs: ["Separa prodotto, movimento interno, servizi, trasporto internazionale, margine e costi a destinazione. Cambio, tasse e dazi non sono percentuali universali.", "Segna dati noti, quotati o ipotizzati. Il budget resta aggiornabile e una stima precoce non diventa una promessa finale."] },
        { heading: "Flusso pratico di confronto", paragraphs: ["Annota peso e imballo, controlla gli articoli, prepara configurazioni e calcola ogni rotta con regole attuali. Misura se una soglia è decisiva e confronta quotazioni complete.", "Prima dell’invio conferma destinazione, contenuto, restrizioni, dimensioni, peso fatturabile e protezione. Conta il pacco fatturato della rotta scelta."] },
      ],
    },
  },
  "litbuy-review-2026": {
    en: reviewArticle,
    de: reviewArticle,
    es: reviewArticle,
    fr: reviewArticle,
    it: reviewArticle,
  },
};
