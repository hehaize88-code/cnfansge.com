import type { Lang } from "./site-data";

type FactSet = { label: string; facts: string[]; note: string };
type PageKind = "finds" | "categories" | "guide" | "qc" | "shipping" | "faq" | "articles";

export const researchFacts: Record<Lang, Record<PageKind, FactSet>> = {
  en: {
    finds: { label: "Official workflow checked", facts: ["The live interface supports product-name, link and photo search.", "LoveGoBuy publicly names Taobao, 1688 and Weidian.", "A search result is discovery—not proof that the option still matches."], note: "Official pages and live destination routes checked 31 August 2026." },
    categories: { label: "Why categories matter", facts: ["The agent workflow is shared, but useful evidence changes by product type.", "Shoes need profile and sole views; clothing needs flat measurements.", "Restricted contents can change the available parcel routes."], note: "Category rules are research guidance, not platform guarantees." },
    guide: { label: "Verified process", facts: ["The account interface separates Order, Warehouse and Parcel states.", "Product pages describe seller-to-agent, warehouse and parcel stages.", "Each stage needs its own evidence before the next payment."], note: "Current public workflow checked 31 August 2026." },
    qc: { label: "Current official wording", facts: ["Product-page snippets currently state that 3–8 high-definition QC photos are provided.", "Actual angles and usefulness can vary by item.", "Photos show visible condition; they do not prove authenticity or durability."], note: "Photo count is a dated platform statement, not a permanent universal promise." },
    shipping: { label: "Estimator facts", facts: ["The official estimator asks for destination and parcel inputs.", "Its indexed guidance says dimensions can matter as much as weight.", "It references rehearsal-parcel service and warns about restricted goods."], note: "Routes, rules and prices must be rechecked at parcel submission." },
    faq: { label: "Answering standard", facts: ["Official facts come from current platform pages.", "Prices and timeframes are treated as changing data.", "User reports are labelled as experiences, not policy."], note: "Research checked 31 August 2026." },
    articles: { label: "Editorial evidence", facts: ["Official pages support workflow facts.", "Trustpilot and Reddit are used only for dated user-feedback themes.", "No review anecdote is presented as a guaranteed outcome."], note: "Five complete long-form articles; each targets a different search intent." },
  },
  de: {
    finds: { label: "Offizieller Ablauf geprüft", facts: ["Die Live-Oberfläche unterstützt Suche per Name, Link und Foto.", "LoveGoBuy nennt Taobao, 1688 und Weidian.", "Ein Suchtreffer beweist keine aktuelle Variantenübereinstimmung."], note: "Offizielle Seiten und Zielrouten am 31. August 2026 geprüft." },
    categories: { label: "Warum Kategorien zählen", facts: ["Der Ablauf ist gleich, die nötigen Belege unterscheiden sich.", "Schuhe brauchen Profil und Sohle; Kleidung flache Maße.", "Eingeschränkte Inhalte können verfügbare Routen ändern."], note: "Kategorielisten sind Recherchehilfe, keine Garantie." },
    guide: { label: "Geprüfter Prozess", facts: ["Das Konto trennt Bestellung, Lager und Paket.", "Produktseiten zeigen Verkäufer-, Lager- und Paketstufen.", "Jede Stufe braucht Belege vor der nächsten Zahlung."], note: "Öffentlicher Ablauf am 31. August 2026 geprüft." },
    qc: { label: "Aktuelle offizielle Angabe", facts: ["Produkt-Snippets nennen derzeit 3–8 hochauflösende QC-Fotos.", "Winkel und Nutzen können je Artikel variieren.", "Fotos zeigen Sichtbares, nicht Echtheit oder Haltbarkeit."], note: "Die Fotozahl ist eine datierte Angabe, kein dauerhaftes Versprechen." },
    shipping: { label: "Fakten zum Rechner", facts: ["Der Rechner nutzt Ziel und Paketdaten.", "Maße können laut offizieller Angabe so wichtig wie Gewicht sein.", "Probelauf und Warenbeschränkungen werden genannt."], note: "Routen, Regeln und Preise beim Paket erneut prüfen." },
    faq: { label: "Antwortstandard", facts: ["Plattformfakten stammen aus aktuellen offiziellen Seiten.", "Preise und Zeiten gelten als veränderlich.", "Nutzerberichte sind Erfahrungen, keine Richtlinie."], note: "Recherche am 31. August 2026 geprüft." },
    articles: { label: "Belegstandard", facts: ["Offizielle Seiten belegen den Ablauf.", "Trustpilot und Reddit liefern nur datierte Erfahrungsthemen.", "Keine Anekdote wird als garantiertes Ergebnis dargestellt."], note: "Fünf vollständige deutsche Langartikel mit getrennten Suchintentionen." },
  },
  es: {
    finds: { label: "Proceso oficial comprobado", facts: ["La interfaz permite buscar por nombre, enlace y foto.", "LoveGoBuy menciona Taobao, 1688 y Weidian.", "Un resultado no prueba que la variante siga coincidiendo."], note: "Páginas oficiales y rutas revisadas el 31 de agosto de 2026." },
    categories: { label: "Por qué importa la categoría", facts: ["El proceso es común, pero las pruebas cambian por producto.", "El calzado exige perfil y suela; la ropa, medidas planas.", "Los artículos restringidos pueden cambiar las rutas."], note: "Las listas son orientación, no garantías." },
    guide: { label: "Proceso verificado", facts: ["La cuenta separa Pedido, Almacén y Paquete.", "Las fichas muestran etapas de vendedor, almacén y paquete.", "Cada etapa necesita pruebas antes del siguiente pago."], note: "Proceso público revisado el 31 de agosto de 2026." },
    qc: { label: "Texto oficial actual", facts: ["Las fichas indican actualmente 3–8 fotos QC en alta definición.", "Los ángulos y su utilidad varían según el artículo.", "Las fotos no prueban autenticidad ni duración."], note: "La cantidad es un dato fechado, no una promesa permanente." },
    shipping: { label: "Datos del estimador", facts: ["El estimador usa destino y datos del paquete.", "Las dimensiones pueden importar tanto como el peso.", "Menciona ensayo del paquete y restricciones."], note: "Rutas, reglas y precios deben revisarse al enviar." },
    faq: { label: "Criterio de respuesta", facts: ["Los hechos proceden de páginas oficiales actuales.", "Precios y plazos son datos variables.", "Las opiniones se marcan como experiencias."], note: "Investigación revisada el 31 de agosto de 2026." },
    articles: { label: "Evidencia editorial", facts: ["Las páginas oficiales sustentan el proceso.", "Trustpilot y Reddit solo aportan temas fechados.", "Ninguna experiencia se presenta como garantía."], note: "Cinco artículos extensos completos en español con intenciones distintas." },
  },
  fr: {
    finds: { label: "Parcours officiel vérifié", facts: ["L’interface permet la recherche par nom, lien et photo.", "LoveGoBuy cite Taobao, 1688 et Weidian.", "Un résultat ne prouve pas que l’option correspond encore."], note: "Pages officielles et routes vérifiées le 31 août 2026." },
    categories: { label: "Pourquoi la catégorie compte", facts: ["Le parcours est commun, mais les preuves diffèrent.", "Chaussures : profil et semelle ; vêtements : mesures à plat.", "Les contenus restreints peuvent modifier les routes."], note: "Ces listes guident la recherche sans garantie." },
    guide: { label: "Processus vérifié", facts: ["Le compte sépare Commande, Entrepôt et Colis.", "Les fiches montrent les étapes vendeur, entrepôt et colis.", "Chaque étape exige ses preuves avant le paiement suivant."], note: "Parcours public vérifié le 31 août 2026." },
    qc: { label: "Formulation officielle actuelle", facts: ["Les fiches annoncent actuellement 3–8 photos QC haute définition.", "Angles et utilité varient selon l’article.", "Les photos ne prouvent ni authenticité ni durabilité."], note: "Le nombre est daté, pas une promesse permanente." },
    shipping: { label: "Faits sur l’estimateur", facts: ["L’estimateur utilise destination et données du colis.", "Les dimensions peuvent compter autant que le poids.", "Il mentionne répétition du colis et restrictions."], note: "Routes, règles et prix sont à revérifier lors du colis." },
    faq: { label: "Norme de réponse", facts: ["Les faits viennent des pages officielles actuelles.", "Prix et délais restent variables.", "Les avis sont signalés comme expériences."], note: "Recherche vérifiée le 31 août 2026." },
    articles: { label: "Preuves éditoriales", facts: ["Les pages officielles étayent le parcours.", "Trustpilot et Reddit servent aux thèmes datés.", "Aucun témoignage n’est présenté comme garantie."], note: "Cinq articles longs et complets en français, chacun sur une intention." },
  },
  it: {
    finds: { label: "Processo ufficiale verificato", facts: ["L’interfaccia cerca per nome, link e foto.", "LoveGoBuy cita Taobao, 1688 e Weidian.", "Un risultato non prova che la variante coincida ancora."], note: "Pagine ufficiali e percorsi verificati il 31 agosto 2026." },
    categories: { label: "Perché conta la categoria", facts: ["Il processo è comune, ma le prove cambiano per prodotto.", "Scarpe: profilo e suola; abbigliamento: misure piane.", "Contenuti limitati possono cambiare le rotte."], note: "Le liste guidano la ricerca senza garanzie." },
    guide: { label: "Processo verificato", facts: ["L’account separa Ordine, Magazzino e Pacco.", "Le schede mostrano fasi venditore, magazzino e pacco.", "Ogni fase richiede prove prima del pagamento successivo."], note: "Processo pubblico verificato il 31 agosto 2026." },
    qc: { label: "Testo ufficiale attuale", facts: ["Le schede indicano oggi 3–8 foto QC ad alta definizione.", "Angoli e utilità variano per articolo.", "Le foto non provano autenticità o durata."], note: "Il numero è un dato datato, non una promessa permanente." },
    shipping: { label: "Dati dello stimatore", facts: ["Lo stimatore usa destinazione e dati del pacco.", "Le dimensioni possono contare quanto il peso.", "Cita prova del pacco e restrizioni."], note: "Rotte, regole e prezzi vanno ricontrollati all’invio." },
    faq: { label: "Criterio delle risposte", facts: ["I fatti provengono da pagine ufficiali aggiornate.", "Prezzi e tempi sono dati variabili.", "Le recensioni sono indicate come esperienze."], note: "Ricerca verificata il 31 agosto 2026." },
    articles: { label: "Prove editoriali", facts: ["Le pagine ufficiali sostengono il processo.", "Trustpilot e Reddit danno solo temi datati.", "Nessuna esperienza è presentata come garanzia."], note: "Cinque articoli lunghi e completi in italiano con intenti distinti." },
  },
};

export type { PageKind };
