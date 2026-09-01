import { getResearchParity } from "./researchParity.js";
import { getFaqParity } from "./faqParity.js";

export const researchPages = {
  en: {
    sourceNote: "Facts checked 01 Sep 2026 against the USFans Beginner’s Guide, Shipping Fee Estimation page, Help Center and live product-page notices.",
    factsTitle: "The official workflow, separated into decisions",
    factsIntro: "These are service facts, not quality promises. Seller performance, route availability and destination rules still have to be checked for each order.",
    facts: [
      ["Source marketplaces", "Taobao · 1688 · Weidian", "USFans presents itself as a purchasing agent for links from these marketplaces; the marketplace seller remains the product supplier."],
      ["Purchase handling", "09:00–18:00 UTC+8", "Live product pages state that purchases are handled after payment during this working window. It is not a guaranteed seller dispatch time."],
      ["Warehouse evidence", "3–7 HD QC photos", "Product pages advertise three to seven free inspection photos. They document visible condition, not authenticity, internal parts or future durability."],
      ["Return action", "Apply within 5 days", "A current product notice says buyers dissatisfied after warehouse arrival can apply within five days. Seller acceptance, exclusions and return freight can still matter."],
      ["Free storage", "90 days", "The official beginner guide states a 90-day free storage period, making consolidation possible without implying that every consolidation is cheaper."],
      ["Chargeable weight", "Higher of actual or volume", "The estimator uses length × width × height in centimetres ÷ 6000 for volumetric weight, then compares it with actual weight."],
    ],
    spreadsheet: [
      ["What a spreadsheet should prove", "A useful USFans spreadsheet should show the current source route, a recognizable product name, visible price, category, date checked and the uncertainty that remains. It should not label an item “verified” merely because the link opens. The buyer still needs to confirm seller, variant, measurements, domestic delivery and the current return note on the source page."],
      ["The five-column shortlist", "For each serious candidate, record source URL, selected variant, physical measurements, expected warehouse evidence and total-cost assumptions. Keep only three to five candidates per purchase. This makes comparison possible and gives you a baseline when the warehouse photos arrive. Anonymous thumbnails and copied seller claims should be treated as discovery clues, not proof."],
      ["How this index is maintained", "Every item in this preview maps to a current source listing on the connected catalog. USD figures are comparison conversions rather than checkout quotes. Re-open the source immediately before payment, remove dead or materially changed routes, and date every major update. A smaller maintained index is more useful than thousands of stale links."],
    ],
    finds: [
      ["A find is a candidate, not a recommendation", "Product quality is supplied by the marketplace seller, while the agent purchases and receives it. Judge a find by evidence: useful variant information, a measurable size chart, consistent source photos, seller context and a price that still makes sense after domestic and international shipping. If one of those layers is missing, note the gap instead of filling it with confidence."],
      ["Use category-specific rejection rules", "For shoes, reject listings without a clear version, size basis or useful shape reference. For clothing, require garment measurements rather than only S/M/L labels. For bags and accessories, inspect hardware, edges and interior construction. For electronics, remember that a visible photo cannot confirm battery health, internal components or long-term reliability."],
      ["Compare at the same point in time", "A fair shortlist uses the same exchange-rate date, destination, packing assumptions and route constraints. Promotions and coupons can disappear; seller stock can change. Save the date and variant with each comparison. The aim is not to produce a permanent “best” item but to identify the candidate whose current evidence best matches a specific order."],
    ],
    guide: [
      ["Before payment", "Paste or open the source route, then confirm seller, color, size, quantity, seller notes and domestic shipping. Compare physical measurements with an item you own. Product-page wording can change, so take a dated record of decision-critical details. Do not treat the first displayed freight number as the full international delivery cost."],
      ["At the warehouse", "Match the received unit to the ordered variant before inspecting small details. Use the included QC photos to check overall shape, symmetry, construction, labels, visible damage and measurements. When a decision-critical area is missing, request a precise additional view. If you plan to return an item, act promptly because a current USFans notice describes a five-day application window after warehouse arrival."],
      ["Before parcel submission", "Use the 90-day storage period deliberately, not automatically. Rehearse the final parcel: actual weight, likely packed dimensions, box removal, reinforcement, restricted-item status and destination rules. Compare routes only after these assumptions are aligned. Save the final quote, selected services and package data so later adjustments can be explained."],
    ],
    qc: [
      ["What the included photos can establish", "Three to seven HD inspection photos can establish visible identity, color, quantity, general construction and obvious damage when the angles are useful. They cannot guarantee authenticity, material composition, hidden defects, electronics internals or durability. QC is evidence collection, not certification."],
      ["Ask for a decision, not “more photos”", "A good extra-photo request names the uncertainty: ruler across chest width, insole length, straight rear view, close-up of a mark, zipper in the open position or powered-on screen. Specific requests are easier to evaluate and preserve a clear reason for accepting or rejecting the item."],
      ["Keep a dispute-ready record", "Save the ordered variant, source-page evidence, warehouse photos, measurements, messages and your decision date. If the received item differs, describe the mismatch with comparable angles and measurements. This record is more useful than a general statement that the item “looks wrong,” especially when seller acceptance and return shipping are involved."],
    ],
    shipping: [
      ["Why an estimate can move", "The official estimator says final shipping is commonly expected to fluctuate about ±5–10% from an estimate for self-operated routes. Final packed dimensions, the difference between actual and volumetric weight, route availability and carrier adjustments are named influences. Treat the estimate as a planning range, not a fixed promise."],
      ["DDP and non-DDP are different decisions", "The estimator explains that DDP routes include tariffs and taxes, so the consignee usually does not need to take action. On non-DDP routes, the recipient may need to provide documents or pay local duties and taxes. Customs inspection delays remain outside a carrier’s direct control."],
      ["Restricted items change route eligibility", "The official list includes liquids, powders, pastes, gels, glass or ceramic, screens, loose or high-capacity batteries, food, supplements, perishables, illegal or infringing goods and unsafe packaging. Acceptance and insurance can differ by route. Confirm eligibility before purchase rather than after the item reaches the warehouse."],
    ],
    faqExtra: [
      ["Does the first shipping amount include delivery to my home?", "Not necessarily. Marketplace domestic shipping to the warehouse and international parcel shipping are different cost stages. Check the label and run the international estimator before buying."],
      ["How many QC photos are included?", "Current live product pages advertise three to seven free HD inspection photos. The actual usefulness depends on angle, lighting and whether decision-critical measurements are visible."],
      ["How long can items stay in the warehouse for free?", "The current beginner guide states 90 days of free storage. Track arrival dates because a storage window is a planning tool, not permission to forget an item."],
      ["Can I return an item after seeing warehouse photos?", "A current product notice says a return can be applied for within five days after warehouse arrival when the buyer is dissatisfied. Seller exclusions, acceptance and return freight may still apply, so check the current item notice."],
      ["How accurate is the shipping estimator?", "USFans says estimates for self-operated routes usually fluctuate within about ±5–10%. Packed dimensions, chargeable weight, availability and carrier price changes can alter the final amount."],
      ["What happens with customs?", "DDP routes are described as including duties and taxes. Non-DDP routes may require the consignee to submit documents or pay charges. Prohibited items, false declarations or non-cooperation may lead to outcomes not covered by insurance."],
    ],
  },
  de: {
    sourceNote: "Fakten am 01.09.2026 anhand des USFans-Einsteigerleitfadens, Versandrechners, Help Centers und aktueller Produkthinweise geprüft.",
    factsTitle: "Der offizielle Ablauf als einzelne Entscheidungen",
    factsIntro: "Dies sind Servicefakten, keine Qualitätsversprechen. Verkäuferleistung, Routenverfügbarkeit und Zielregeln müssen für jede Bestellung geprüft werden.",
    facts: [
      ["Quellmarktplätze", "Taobao · 1688 · Weidian", "USFans beschreibt sich als Einkaufsagent für Links dieser Marktplätze; der Marktplatzverkäufer bleibt der Lieferant des Produkts."],
      ["Einkaufsbearbeitung", "09:00–18:00 UTC+8", "Aktuelle Produktseiten nennen dieses Arbeitsfenster nach Zahlung. Es ist keine garantierte Versandzeit des Verkäufers."],
      ["Lagerbelege", "3–7 HD-QC-Fotos", "Produktseiten werben mit drei bis sieben kostenlosen Prüffotos. Sie zeigen den sichtbaren Zustand, nicht Authentizität, Innenleben oder Haltbarkeit."],
      ["Rückgabeantrag", "Innerhalb von 5 Tagen", "Ein aktueller Hinweis erlaubt nach Lagereingang einen Antrag binnen fünf Tagen. Verkäuferregeln, Ausschlüsse und Rückversand bleiben relevant."],
      ["Kostenlose Lagerung", "90 Tage", "Der Einsteigerleitfaden nennt 90 kostenlose Lagertage. Konsolidierung wird möglich, ist aber nicht automatisch günstiger."],
      ["Abrechnungsgewicht", "Höherer Wert aus real und Volumen", "Der Rechner nutzt Länge × Breite × Höhe in Zentimetern ÷ 6000 und vergleicht das Ergebnis mit dem Realgewicht."],
    ],
    spreadsheet: [
      ["Was eine Tabelle belegen sollte", "Eine brauchbare USFans-Tabelle zeigt aktuelle Quellroute, erkennbaren Produktnamen, sichtbaren Preis, Kategorie, Prüfdatum und verbleibende Unsicherheit. Ein funktionierender Link macht einen Artikel noch nicht „verifiziert“. Verkäufer, Variante, Maße, Inlandsversand und aktueller Rückgabehinweis müssen weiterhin auf der Quelle geprüft werden."],
      ["Die Fünf-Spalten-Auswahl", "Notiere für jeden ernsthaften Kandidaten Quell-URL, gewählte Variante, physische Maße, erwartete Lagerbelege und Gesamtkostenannahmen. Behalte nur drei bis fünf Optionen. So lassen sich Angebote vergleichen und spätere Lagerfotos gegen eine feste Basis prüfen. Anonyme Vorschaubilder und Verkäuferbehauptungen sind Hinweise, keine Beweise."],
      ["Pflege dieses Index", "Jeder Vorschauartikel führt zu einem aktuellen Eintrag im verbundenen Katalog. USD-Werte sind Vergleichsumrechnungen und keine Checkout-Angebote. Öffne die Quelle direkt vor der Zahlung erneut, entferne tote oder wesentlich veränderte Routen und datiere größere Änderungen. Ein kleiner gepflegter Index ist wertvoller als tausende veraltete Links."],
    ],
    finds: [
      ["Ein Fund ist ein Kandidat, keine Empfehlung", "Die Produktqualität kommt vom Marktplatzverkäufer; der Agent kauft und empfängt. Bewerte einen Fund anhand von Variantenangaben, messbarer Größentabelle, konsistenten Quellbildern, Verkäuferkontext und einem Preis, der nach Inlands- und internationalem Versand noch sinnvoll ist. Fehlende Ebenen werden als Lücke notiert, nicht durch Sicherheit ersetzt."],
      ["Kategoriespezifische Ausschlussregeln", "Bei Schuhen fehlen ohne klare Version, Größenbasis oder Formreferenz wichtige Belege. Kleidung braucht Kleidungsmaße statt nur S/M/L. Bei Taschen und Accessoires zählen Beschläge, Kanten und Innenaufbau. Bei Elektronik kann ein Foto weder Akkuzustand noch Bauteile oder langfristige Zuverlässigkeit bestätigen."],
      ["Zum gleichen Zeitpunkt vergleichen", "Eine faire Auswahl verwendet dasselbe Wechselkursdatum, Ziel, Verpackungsannahmen und dieselben Routenbedingungen. Aktionen verschwinden und Bestände ändern sich. Speichere Datum und Variante. Das Ziel ist kein dauerhaft „bester“ Artikel, sondern der Kandidat, dessen aktuelle Belege zu einer konkreten Bestellung passen."],
    ],
    guide: [
      ["Vor der Zahlung", "Öffne die Quellroute und bestätige Verkäufer, Farbe, Größe, Menge, Hinweise und Inlandsversand. Vergleiche physische Maße mit einem eigenen Artikel. Quelltexte können sich ändern; sichere entscheidende Angaben mit Datum. Der erste sichtbare Frachtbetrag ist nicht automatisch der vollständige internationale Versand."],
      ["Im Lager", "Gleiche zuerst die eingetroffene Einheit mit der bestellten Variante ab. Prüfe dann Form, Symmetrie, Verarbeitung, Labels, Schäden und Maße anhand der QC-Fotos. Fehlt ein entscheidender Bereich, fordere eine präzise Ansicht an. Bei geplanter Rückgabe ist Eile sinnvoll, da ein aktueller Hinweis ein Fünf-Tage-Fenster nach Lagereingang beschreibt."],
      ["Vor dem Paketauftrag", "Nutze die 90 Lagertage bewusst. Probe das Endpaket mit Realgewicht, erwarteten Packmaßen, Kartonentfernung, Verstärkung, Artikelbeschränkungen und Zielregeln. Vergleiche Routen erst mit gleichen Annahmen. Speichere Endangebot, Dienste und Paketdaten, damit spätere Anpassungen erklärbar bleiben."],
    ],
    qc: [
      ["Was die enthaltenen Fotos belegen", "Drei bis sieben HD-Prüffotos können bei brauchbaren Winkeln Identität, Farbe, Menge, Grundkonstruktion und sichtbare Schäden dokumentieren. Sie garantieren weder Authentizität noch Material, versteckte Fehler, Elektronik oder Haltbarkeit. QC ist Beweissammlung, keine Zertifizierung."],
      ["Eine Entscheidung anfordern, nicht nur mehr Fotos", "Eine gute Zusatzanfrage benennt die Unsicherheit: Lineal über der Brust, Innensohlenlänge, gerade Rückansicht, Nahaufnahme einer Stelle, offener Reißverschluss oder eingeschaltetes Display. Präzise Anforderungen lassen sich besser beurteilen und dokumentieren den Grund für Annahme oder Ablehnung."],
      ["Eine streitfähige Dokumentation führen", "Speichere bestellte Variante, Quellbelege, Lagerfotos, Maße, Nachrichten und Entscheidungsdatum. Bei Abweichungen beschreibst du diese mit vergleichbaren Winkeln und Messwerten. Das ist hilfreicher als „sieht falsch aus“, besonders wenn Verkäuferzustimmung und Rückversand betroffen sind."],
    ],
    shipping: [
      ["Warum sich eine Schätzung ändert", "Der offizielle Rechner erklärt, dass Endkosten bei selbst betriebenen Routen meist ungefähr ±5–10% von der Schätzung abweichen können. Endmaße, Real- versus Volumengewicht, Routenverfügbarkeit und Spediteuranpassungen werden als Einflüsse genannt. Plane daher mit einer Spanne statt einem Festpreis."],
      ["DDP und Nicht-DDP sind verschiedene Entscheidungen", "Laut Rechner enthalten DDP-Routen Zölle und Steuern, sodass der Empfänger gewöhnlich nichts tun muss. Bei Nicht-DDP können Dokumente oder lokale Abgaben nötig sein. Verzögerungen durch Zollkontrollen bleiben außerhalb direkter Kontrolle des Transporteurs."],
      ["Beschränkte Artikel verändern die Routenauswahl", "Die offizielle Liste nennt Flüssigkeiten, Pulver, Pasten, Gele, Glas oder Keramik, Bildschirme, lose oder starke Akkus, Lebensmittel, Nahrungsergänzung, Verderbliches, illegale oder verletzende Waren und unsichere Verpackung. Annahme und Versicherung variieren. Prüfe die Zulässigkeit vor dem Kauf."],
    ],
    faqExtra: [
      ["Enthält der erste Versandbetrag die Zustellung zu mir?", "Nicht zwingend. Inlandsversand zum Lager und internationaler Paketversand sind getrennte Kostenstufen. Prüfe die Bezeichnung und nutze vor dem Kauf den internationalen Rechner."],
      ["Wie viele QC-Fotos sind enthalten?", "Aktuelle Produktseiten werben mit drei bis sieben kostenlosen HD-Prüffotos. Ihr Nutzen hängt von Winkel, Licht und sichtbaren Entscheidungsmaßen ab."],
      ["Wie lange ist die Lagerung kostenlos?", "Der aktuelle Einsteigerleitfaden nennt 90 Tage. Verfolge Eingangsdatum und Frist, denn das Lagerfenster ist ein Planungswerkzeug."],
      ["Kann ich nach den Lagerfotos zurückgeben?", "Ein aktueller Produkthinweis nennt einen Antrag binnen fünf Tagen nach Lagereingang. Verkäuferausnahmen, Zustimmung und Rückversand können trotzdem gelten."],
      ["Wie genau ist der Versandrechner?", "USFans nennt für selbst betriebene Routen gewöhnlich etwa ±5–10%. Packmaße, Abrechnungsgewicht, Verfügbarkeit und Preisänderungen beeinflussen das Ergebnis."],
      ["Was passiert beim Zoll?", "DDP-Routen werden als inklusive Zölle und Steuern beschrieben. Bei Nicht-DDP sind eventuell Dokumente oder Zahlungen nötig. Verbotene Ware, falsche Angaben oder fehlende Kooperation können unversichert bleiben."],
    ],
  },
  es: {
    sourceNote: "Hechos revisados el 01-09-2026 con la guía inicial, el estimador de envío, el centro de ayuda y avisos de producto de USFans.",
    factsTitle: "El flujo oficial separado en decisiones",
    factsIntro: "Son hechos del servicio, no promesas de calidad. Vendedor, disponibilidad de ruta y reglas de destino deben comprobarse en cada pedido.",
    facts: [
      ["Marketplaces fuente", "Taobao · 1688 · Weidian", "USFans se presenta como agente de compra para enlaces de estos mercados; el vendedor sigue siendo quien suministra el producto."],
      ["Gestión de compra", "09:00–18:00 UTC+8", "Las fichas actuales indican este horario después del pago. No garantiza cuándo enviará el vendedor."],
      ["Pruebas de almacén", "3–7 fotos QC HD", "Las fichas anuncian de tres a siete fotos gratuitas. Documentan lo visible, no autenticidad, interior ni durabilidad."],
      ["Solicitud de devolución", "Dentro de 5 días", "Un aviso actual permite solicitarla tras la llegada al almacén. Aún importan reglas, exclusiones y transporte de devolución."],
      ["Almacenamiento gratuito", "90 días", "La guía inicial indica 90 días gratuitos. Permite consolidar, pero consolidar no siempre abarata."],
      ["Peso facturable", "Mayor entre real y volumen", "El estimador calcula largo × ancho × alto en centímetros ÷ 6000 y lo compara con el peso real."],
    ],
    spreadsheet: [
      ["Qué debe demostrar un spreadsheet", "Un spreadsheet útil muestra ruta vigente, nombre reconocible, precio visible, categoría, fecha de revisión e incertidumbre pendiente. Que un enlace abra no convierte el artículo en “verificado”. El comprador aún debe confirmar vendedor, variante, medidas, entrega nacional y aviso de devolución actual."],
      ["La lista de cinco columnas", "Registra URL fuente, variante elegida, medidas físicas, pruebas esperadas del almacén y supuestos de coste total. Conserva solo tres a cinco candidatos. Así podrás comparar y revisar las fotos QC contra una base. Miniaturas anónimas y afirmaciones del vendedor son pistas, no pruebas."],
      ["Cómo se mantiene este índice", "Cada artículo de la vista previa corresponde a una ficha actual del catálogo conectado. Los USD son conversiones comparativas, no cotizaciones finales. Reabre la fuente antes de pagar, elimina rutas caídas o cambiadas y fecha cada actualización importante. Un índice pequeño y mantenido supera a miles de enlaces obsoletos."],
    ],
    finds: [
      ["Un hallazgo es candidato, no recomendación", "La calidad depende del vendedor; el agente compra y recibe. Evalúa variante, tabla medible, coherencia de imágenes, contexto del vendedor y si el precio sigue teniendo sentido después del transporte nacional e internacional. Si falta una capa, registra la duda en lugar de sustituirla por seguridad."],
      ["Reglas de descarte por categoría", "En calzado exige versión, base de talla y referencia de forma. En ropa pide medidas reales, no solo S/M/L. En bolsos y accesorios revisa herrajes, bordes e interior. En electrónica, una foto no confirma batería, piezas internas ni fiabilidad futura."],
      ["Compara en el mismo momento", "Una lista justa usa la misma fecha de cambio, destino, embalaje y restricciones. Promociones y existencias cambian. Guarda fecha y variante. No se busca un “mejor” artículo permanente, sino el candidato cuyas pruebas actuales encajan con un pedido concreto."],
    ],
    guide: [
      ["Antes de pagar", "Abre la fuente y confirma vendedor, color, talla, cantidad, notas y envío nacional. Compara medidas físicas con una prenda propia. Guarda con fecha los detalles críticos porque la ficha puede cambiar. El primer importe de transporte visible no tiene por qué ser el envío internacional completo."],
      ["En el almacén", "Primero confirma que llegó la variante pedida. Después revisa forma, simetría, construcción, etiquetas, daños y medidas. Si falta una zona decisiva, pide una vista concreta. Si quieres devolver, actúa pronto: un aviso actual describe un plazo de solicitud de cinco días tras la llegada."],
      ["Antes de enviar el paquete", "Usa los 90 días de almacén de forma deliberada. Simula peso real, dimensiones embaladas, retirada de cajas, refuerzo, restricciones y reglas del destino. Compara rutas con los mismos supuestos. Guarda cotización, servicios y datos finales para explicar cualquier ajuste."],
    ],
    qc: [
      ["Qué pueden demostrar las fotos incluidas", "Entre tres y siete fotos HD pueden confirmar identidad visible, color, cantidad, construcción general y daños obvios si los ángulos sirven. No garantizan autenticidad, material, defectos ocultos, interior electrónico ni duración. QC recoge pruebas; no certifica."],
      ["Pide una decisión, no solo más fotos", "Una buena solicitud nombra la duda: regla sobre el pecho, plantilla, talón frontal, detalle de una marca, cremallera abierta o pantalla encendida. Las peticiones precisas se evalúan mejor y conservan una razón clara para aceptar o rechazar."],
      ["Conserva un expediente útil", "Guarda variante, pruebas fuente, fotos, medidas, mensajes y fecha de decisión. Si hay diferencia, descríbela con ángulos y mediciones comparables. Esto es más útil que decir “se ve mal”, especialmente cuando intervienen aceptación del vendedor y transporte de devolución."],
    ],
    shipping: [
      ["Por qué cambia una estimación", "El estimador oficial indica que el coste final de líneas propias suele fluctuar alrededor de ±5–10%. Dimensiones finales, diferencia entre peso real y volumétrico, disponibilidad y ajustes del transportista son factores. Usa un rango, no una promesa fija."],
      ["DDP y no DDP son decisiones distintas", "El estimador explica que DDP incluye aranceles e impuestos y normalmente no exige acción del destinatario. En no DDP, el receptor puede aportar documentos o pagar cargos. Las inspecciones aduaneras pueden retrasar fuera del control directo del transportista."],
      ["Los artículos restringidos cambian la ruta", "La lista oficial incluye líquidos, polvos, pastas, geles, vidrio o cerámica, pantallas, baterías sueltas o potentes, comida, suplementos, perecederos, mercancía ilegal o infractora y embalaje inseguro. Aceptación y seguro varían. Comprueba antes de comprar."],
    ],
    faqExtra: [
      ["¿El primer coste de envío llega hasta mi casa?", "No necesariamente. El envío nacional al almacén y el paquete internacional son etapas distintas. Revisa la etiqueta y usa el estimador internacional antes de comprar."],
      ["¿Cuántas fotos QC incluye?", "Las fichas actuales anuncian entre tres y siete fotos HD gratuitas. Su utilidad depende del ángulo, luz y medidas visibles."],
      ["¿Cuánto tiempo es gratuito el almacén?", "La guía actual indica 90 días. Registra fechas porque el plazo es una herramienta de planificación."],
      ["¿Puedo devolver tras ver las fotos?", "Un aviso actual indica solicitud dentro de cinco días tras llegada. Pueden aplicarse exclusiones, aceptación del vendedor y envío de devolución."],
      ["¿Qué precisión tiene el estimador?", "USFans indica normalmente alrededor de ±5–10% en líneas propias. Dimensiones, peso facturable, disponibilidad y cambios de precio influyen."],
      ["¿Qué ocurre con aduanas?", "DDP se describe con impuestos incluidos. No DDP puede exigir documentos o pagos. Artículos prohibidos, declaración falsa o falta de cooperación pueden quedar sin cobertura."],
    ],
  },
  fr: {
    sourceNote: "Faits vérifiés le 01/09/2026 à partir du guide débutant, de l’estimateur, du centre d’aide et des avis produit USFans.",
    factsTitle: "Le parcours officiel séparé en décisions",
    factsIntro: "Ce sont des faits de service, pas des promesses de qualité. Vendeur, disponibilité de ligne et règles du pays doivent être vérifiés pour chaque commande.",
    facts: [
      ["Marketplaces sources", "Taobao · 1688 · Weidian", "USFans se présente comme agent d’achat pour ces liens ; le vendeur de la marketplace reste le fournisseur du produit."],
      ["Traitement de l’achat", "09:00–18:00 UTC+8", "Les fiches actuelles indiquent cette plage après paiement. Elle ne garantit pas l’expédition du vendeur."],
      ["Preuves d’entrepôt", "3–7 photos QC HD", "Les fiches annoncent trois à sept photos gratuites. Elles montrent le visible, pas l’authenticité, l’intérieur ou la durée de vie."],
      ["Demande de retour", "Sous 5 jours", "Un avis actuel prévoit une demande après arrivée. Règles vendeur, exclusions et fret retour restent importants."],
      ["Stockage gratuit", "90 jours", "Le guide débutant indique 90 jours gratuits. La consolidation devient possible sans être toujours moins chère."],
      ["Poids facturable", "Le plus élevé réel/volume", "L’estimateur calcule longueur × largeur × hauteur en cm ÷ 6000 puis compare avec le poids réel."],
    ],
    spreadsheet: [
      ["Ce qu’un tableur doit prouver", "Un bon tableur montre route actuelle, nom reconnaissable, prix visible, catégorie, date de contrôle et incertitude restante. Un lien ouvert n’est pas une validation. Acheteur doit encore confirmer vendeur, variante, mesures, livraison nationale et avis de retour actuel."],
      ["La sélection en cinq colonnes", "Notez URL source, variante, mesures physiques, preuves attendues en entrepôt et hypothèses de coût total. Gardez trois à cinq candidats. Vous pourrez comparer et confronter les photos QC à une référence. Miniatures anonymes et affirmations vendeur sont des indices, pas des preuves."],
      ["Maintenance de cet index", "Chaque article mène à une fiche actuelle du catalogue relié. Les USD sont des conversions comparatives, pas des devis. Rouvrez la source avant paiement, retirez les routes mortes ou modifiées et datez les mises à jour. Un petit index entretenu vaut mieux que des milliers de liens périmés."],
    ],
    finds: [
      ["Une trouvaille est un candidat", "La qualité vient du vendeur ; l’agent achète et reçoit. Évaluez variantes, guide mesurable, cohérence des images, contexte vendeur et valeur après transport national et international. Une couche absente doit rester une incertitude, pas être remplacée par de la confiance."],
      ["Règles de rejet par catégorie", "Pour les chaussures, exigez version, base de pointure et référence de forme. Pour les vêtements, utilisez des mesures, pas seulement S/M/L. Pour sacs et accessoires, regardez pièces métalliques, bords et intérieur. Une photo d’électronique ne prouve ni batterie ni composants ni fiabilité."],
      ["Comparer au même moment", "Une comparaison juste utilise la même date de change, destination, emballage et contraintes. Promotions et stocks changent. Enregistrez date et variante. Le but n’est pas un meilleur article permanent, mais le candidat dont les preuves actuelles conviennent à une commande précise."],
    ],
    guide: [
      ["Avant paiement", "Ouvrez la source et confirmez vendeur, couleur, taille, quantité, remarques et transport national. Comparez les mesures à un vêtement possédé. Archivez avec date les détails critiques. Le premier montant de transport affiché n’est pas nécessairement toute la livraison internationale."],
      ["À l’entrepôt", "Confirmez d’abord la variante reçue, puis forme, symétrie, construction, étiquettes, dommages et mesures. Si une zone décisive manque, demandez une vue précise. Pour un retour, agissez vite : un avis actuel décrit une demande sous cinq jours après arrivée."],
      ["Avant soumission du colis", "Utilisez volontairement les 90 jours. Simulez poids réel, dimensions emballées, retrait des boîtes, renfort, restrictions et règles de destination. Comparez les lignes avec les mêmes hypothèses. Gardez devis, services et données finales pour expliquer les ajustements."],
    ],
    qc: [
      ["Ce que prouvent les photos incluses", "Trois à sept photos HD peuvent confirmer identité visible, couleur, quantité, construction générale et dommage évident si les angles sont utiles. Elles ne garantissent ni authenticité, ni matière, ni défaut caché, ni électronique interne, ni durée. Le QC collecte des preuves ; il ne certifie pas."],
      ["Demander une décision, pas seulement des photos", "Une bonne demande nomme l’incertitude : règle sur la poitrine, semelle intérieure, talon de face, détail d’une marque, fermeture ouverte ou écran allumé. Une demande précise s’évalue mieux et conserve une raison claire d’accepter ou refuser."],
      ["Conserver un dossier exploitable", "Gardez variante, preuve source, photos, mesures, messages et date de décision. Décrivez toute différence avec angles et mesures comparables. C’est plus utile que « cela semble faux », surtout lorsque l’accord vendeur et le fret retour interviennent."],
    ],
    shipping: [
      ["Pourquoi l’estimation évolue", "L’estimateur officiel indique que le coût final des lignes exploitées en propre fluctue généralement d’environ ±5–10%. Dimensions finales, différence réel/volume, disponibilité et ajustements transporteur sont cités. Planifiez une fourchette, pas une promesse fixe."],
      ["DDP et non-DDP sont deux décisions", "L’estimateur explique que DDP inclut droits et taxes, sans action habituelle du destinataire. En non-DDP, documents ou paiements locaux peuvent être requis. Les contrôles douaniers peuvent retarder hors du contrôle direct du transporteur."],
      ["Les articles restreints changent l’éligibilité", "La liste officielle comprend liquides, poudres, pâtes, gels, verre ou céramique, écrans, batteries libres ou fortes, nourriture, compléments, périssables, biens illégaux ou contrefaisants et emballage dangereux. Acceptation et assurance varient. Vérifiez avant achat."],
    ],
    faqExtra: [
      ["Le premier transport livre-t-il chez moi ?", "Pas forcément. Transport national vers l’entrepôt et colis international sont deux coûts. Vérifiez le libellé et l’estimateur avant achat."],
      ["Combien de photos QC sont incluses ?", "Les fiches actuelles annoncent trois à sept photos HD gratuites. Leur utilité dépend des angles, de la lumière et des mesures visibles."],
      ["Combien de temps le stockage est-il gratuit ?", "Le guide actuel indique 90 jours. Suivez les dates car ce délai sert à planifier."],
      ["Puis-je retourner après les photos ?", "Un avis actuel indique une demande sous cinq jours après arrivée. Exclusions, accord vendeur et fret retour peuvent s’appliquer."],
      ["Quelle précision pour l’estimateur ?", "USFans indique généralement environ ±5–10% sur ses lignes propres. Dimensions, poids facturable, disponibilité et prix peuvent modifier le total."],
      ["Que se passe-t-il en douane ?", "DDP est décrit droits et taxes inclus. Non-DDP peut exiger documents ou paiements. Article interdit, fausse déclaration ou absence de coopération peuvent rester hors assurance."],
    ],
  },
  it: {
    sourceNote: "Fatti verificati il 01/09/2026 con guida iniziale, calcolatore, centro assistenza e avvisi prodotto USFans.",
    factsTitle: "Il flusso ufficiale diviso in decisioni",
    factsIntro: "Sono fatti sul servizio, non promesse di qualità. Venditore, disponibilità della linea e regole di destinazione vanno verificati per ogni ordine.",
    facts: [
      ["Marketplace sorgente", "Taobao · 1688 · Weidian", "USFans si presenta come agente d’acquisto per questi link; il venditore del marketplace resta il fornitore del prodotto."],
      ["Gestione acquisto", "09:00–18:00 UTC+8", "Le schede attuali indicano questa fascia dopo il pagamento. Non garantisce la spedizione del venditore."],
      ["Prove di magazzino", "3–7 foto QC HD", "Le schede pubblicizzano da tre a sette foto gratuite. Mostrano il visibile, non autenticità, interno o durata."],
      ["Domanda di reso", "Entro 5 giorni", "Un avviso attuale consente la richiesta dopo l’arrivo. Restano regole, esclusioni e costo del reso."],
      ["Deposito gratuito", "90 giorni", "La guida iniziale indica 90 giorni gratuiti. Il consolidamento è possibile ma non sempre economico."],
      ["Peso fatturabile", "Maggiore tra reale e volume", "Il calcolatore usa lunghezza × larghezza × altezza in cm ÷ 6000 e confronta con il peso reale."],
    ],
    spreadsheet: [
      ["Cosa deve provare un foglio", "Un foglio utile mostra percorso attuale, nome riconoscibile, prezzo visibile, categoria, data di controllo e incertezza residua. Un link aperto non rende l’articolo “verificato”. Bisogna ancora controllare venditore, variante, misure, consegna nazionale e avviso di reso attuale."],
      ["La lista a cinque colonne", "Registra URL sorgente, variante scelta, misure fisiche, prove attese dal magazzino e ipotesi di costo totale. Conserva tre-cinque candidati. Potrai confrontare e valutare le foto QC su una base. Miniature anonime e affermazioni del venditore sono indizi, non prove."],
      ["Come viene mantenuto l’indice", "Ogni anteprima corrisponde a una scheda attuale del catalogo collegato. I prezzi USD servono al confronto, non sono preventivi. Riapri la fonte prima di pagare, elimina percorsi morti o cambiati e data ogni aggiornamento. Un indice piccolo e curato vale più di migliaia di link vecchi."],
    ],
    finds: [
      ["Una selezione è un candidato", "La qualità arriva dal venditore; l’agente compra e riceve. Valuta varianti, tabella misurabile, coerenza delle immagini, contesto venditore e valore dopo spedizione nazionale e internazionale. Se manca un livello, registra l’incertezza invece di sostituirla con fiducia."],
      ["Regole di esclusione per categoria", "Per scarpe richiedi versione, base taglia e riferimento di forma. Per abiti usa misure reali, non solo S/M/L. Per borse e accessori controlla ferramenta, bordi e interno. Una foto di elettronica non prova batteria, componenti o affidabilità futura."],
      ["Confronta nello stesso momento", "Un confronto corretto usa stessa data di cambio, destinazione, imballaggio e vincoli. Promozioni e scorte cambiano. Salva data e variante. Non cerchi il miglior articolo permanente, ma il candidato le cui prove attuali si adattano a un ordine concreto."],
    ],
    guide: [
      ["Prima del pagamento", "Apri la fonte e conferma venditore, colore, taglia, quantità, note e trasporto nazionale. Confronta misure con un capo proprio. Salva con data i dettagli critici. Il primo importo di trasporto visibile non è necessariamente l’intera spedizione internazionale."],
      ["In magazzino", "Conferma prima la variante ricevuta, poi forma, simmetria, costruzione, etichette, danni e misure. Se manca un’area decisiva, chiedi una vista precisa. Per il reso agisci rapidamente: un avviso attuale descrive una richiesta entro cinque giorni dall’arrivo."],
      ["Prima di inviare il pacco", "Usa consapevolmente i 90 giorni. Simula peso reale, dimensioni imballate, rimozione scatole, rinforzo, restrizioni e regole di destinazione. Confronta linee con le stesse ipotesi. Salva preventivo, servizi e dati finali per spiegare gli adeguamenti."],
    ],
    qc: [
      ["Cosa provano le foto incluse", "Da tre a sette foto HD possono confermare identità visibile, colore, quantità, costruzione generale e danno evidente quando gli angoli sono utili. Non garantiscono autenticità, materiale, difetti nascosti, elettronica interna o durata. Il QC raccoglie prove; non certifica."],
      ["Chiedi una decisione, non solo più foto", "Una buona richiesta nomina il dubbio: righello sul petto, soletta, tallone frontale, dettaglio di un segno, cerniera aperta o schermo acceso. Le richieste precise si valutano meglio e conservano una ragione chiara per accettare o rifiutare."],
      ["Conserva un dossier utile", "Salva variante, prove sorgente, foto, misure, messaggi e data. Se c’è differenza, descrivila con angoli e misure comparabili. È più utile di “sembra sbagliato”, soprattutto con approvazione venditore e costo del reso."],
    ],
    shipping: [
      ["Perché una stima cambia", "Il calcolatore ufficiale afferma che il costo finale delle linee proprie oscilla normalmente circa ±5–10%. Dimensioni finali, differenza tra reale e volumetrico, disponibilità e adeguamenti del vettore sono fattori. Usa un intervallo, non una promessa fissa."],
      ["DDP e non-DDP sono decisioni diverse", "Il calcolatore spiega che DDP include dazi e imposte e normalmente non richiede azione del destinatario. Con non-DDP possono servire documenti o pagamenti. I controlli doganali possono ritardare fuori dal controllo diretto del vettore."],
      ["Gli articoli limitati cambiano la linea", "L’elenco ufficiale include liquidi, polveri, paste, gel, vetro o ceramica, schermi, batterie libere o potenti, cibo, integratori, deperibili, beni illegali o lesivi e imballaggio non sicuro. Accettazione e assicurazione variano. Verifica prima dell’acquisto."],
    ],
    faqExtra: [
      ["Il primo costo di spedizione arriva a casa?", "Non necessariamente. Trasporto nazionale al magazzino e pacco internazionale sono costi distinti. Controlla l’etichetta e usa il calcolatore prima di comprare."],
      ["Quante foto QC sono incluse?", "Le schede attuali pubblicizzano da tre a sette foto HD gratuite. L’utilità dipende da angoli, luce e misure visibili."],
      ["Quanto dura il deposito gratuito?", "La guida attuale indica 90 giorni. Registra le date perché la finestra serve a pianificare."],
      ["Posso restituire dopo le foto?", "Un avviso attuale indica domanda entro cinque giorni dall’arrivo. Possono valere esclusioni, accettazione venditore e trasporto di reso."],
      ["Quanto è preciso il calcolatore?", "USFans indica normalmente circa ±5–10% sulle linee proprie. Dimensioni, peso fatturabile, disponibilità e prezzo influenzano il totale."],
      ["Cosa succede in dogana?", "DDP è descritto con dazi e imposte inclusi. Non-DDP può richiedere documenti o pagamenti. Merci vietate, dichiarazione falsa o mancata collaborazione possono restare senza copertura."],
    ],
  },
};

export function getResearch(language) {
  const activeLanguage = researchPages[language] ? language : "en";
  const base = researchPages[activeLanguage];
  const expanded = {};
  for (const page of ["spreadsheet", "finds", "guide", "qc", "shipping"]) {
    expanded[page] = base[page].map(([heading, body], index) => {
      const parity = getResearchParity(activeLanguage, page, index);
      return [heading, parity ? `${body} ${parity}` : body];
    });
  }
  const faqExtra = base.faqExtra.map(([question, answer], index) => {
    const parity = getFaqParity(activeLanguage, index + 4);
    return [question, parity ? `${answer} ${parity}` : answer];
  });
  return { ...base, ...expanded, faqExtra };
}
