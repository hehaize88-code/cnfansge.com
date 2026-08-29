import type { ArticleContent } from "./article-data";

export const articleIt: Record<string, ArticleContent> = {
  "litbuy-spreadsheet-guide": {
    title: "Usare un foglio LitBuy senza perdere l'inserzione originale",
    deck: "Un metodo completo per tenere insieme prodotto, pagina sorgente, immagine, prezzo, variante e identità.",
    readTime: "13 min di lettura",
    sections: [
      { heading: "Il percorso fa parte del prodotto", paragraphs: [
        "Una riga è utile soltanto se conserva un percorso affidabile verso l'inserzione descritta. Il nome da solo è una prova debole: può essere abbreviato, tradotto, ripetuto o modificato. Anche una categoria generica non basta, perché obbliga il lettore a cercare di nuovo. Tratta URL finale, ID sorgente, immagine e nome neutrale come un unico pacchetto di identità. Se uno di questi elementi porta a un altro articolo, la riga non è pronta per la pubblicazione.",
        "Su litbuys.store l'immagine apre un dettaglio locale e l'azione conduce al record abbinato nel catalogo principale. Il dettaglio ripete ID, importo CNY, riferimento USD e data di verifica. Questi campi non garantiscono uno stock permanente, ma mostrano cosa è stato confrontato. Se il venditore cambia la pagina, è possibile individuare il dato obsoleto invece di inviare in silenzio a un prodotto soltanto simile."
      ]},
      { heading: "Registra l'identità prima del design", paragraphs: [
        "Inizia dalla pagina sorgente, non dalla grafica della scheda. Salva un URL pulito senza parametri superflui e registra l'ID in un campo separato. Scrivi un nome descrittivo limitato a ciò che si vede, come felpa, maglia o borsa compatta. Non inventare modello, materiale o promesse di qualità che la pagina non conferma. Un titolo breve e verificabile aiuta utenti e motori di ricerca più di una descrizione decorativa piena di attributi non dimostrati.",
        "Associa poi l'immagine esatta del record. Due felpe nere o due scarpe bianche non sono intercambiabili: venditore, opzioni, prezzo e ID possono essere diversi. Confronta silhouette, sfondo, colore, grafica e accessori. Se l'inserzione contiene più varianti, indica quale mostra l'immagine. L'ID visibile rende verificabili i duplicati e permette di ritrovare la traccia se LitBuy o il catalogo cambia la struttura dell'URL."
      ]},
      { heading: "Usa le immagini come prova", paragraphs: [
        "Apri immagine e destinazione a dimensione sufficiente. Controlla lo stesso ritaglio, sfondo, colorazione, disposizione dei pannelli, stampa e parti incluse. Una fotografia soltanto simile non è una corrispondenza. Quando esistono opzioni, chiarisci quale rappresenta la scheda e se il prezzo appartiene a quella scelta. L'immagine è un indicatore di identità; non promette disponibilità né che tutte le varianti visibili costino uguale.",
        "Mantieni una dimensione web pratica e un testo alternativo descrittivo, evitando filtri pesanti, sfondi sostituiti o ritagli che nascondono dettagli. Se l'immagine non si carica, nome, ID e destinazione devono restare comprensibili. Allo stesso modo, una bella immagine in cache non deve far sembrare viva una rotta rimossa. Disponibilità, opzioni, note del venditore e prezzo finale si ricontrollano sempre sulla pagina attuale."
      ]},
      { heading: "Separa prezzo indicativo e prezzo finale", paragraphs: [
        "Il prezzo di un foglio è un'istantanea. Registra prima il valore CNY mostrato dalla fonte. Una seconda valuta facilita il confronto, ma deve essere indicata come conversione orientativa con la relativa base. Cambio, taglia, colore, set, consegna interna e modifiche del venditore cambiano il totale. Il valore USD su litbuys.store non è un'offerta di pagamento né una previsione del costo completo a destinazione.",
        "Controlla il selettore delle opzioni. Un prezzo iniziale basso può appartenere a un accessorio, un deposito o la variante più economica, non alla configurazione fotografata. Se le scelte compaiono solo dopo l'interazione, usa parole prudenti. LitBuy segue il modello dell'agente: acquisto del prodotto e spedizione internazionale sono fasi separate. Il prezzo della riga non deve quindi apparire come costo finale del pacco."
      ]},
      { heading: "Individua record vecchi o rotti", paragraphs: [
        "Nessun foglio resta corretto senza manutenzione. I venditori eliminano articoli, cambiano immagini, modificano opzioni e spostano sistemi. Aggiungi una data visibile e controlla più spesso le righe popolari. Non basta che la pagina si apra: un errore morbido può rispondere normalmente. Conferma che immagine attesa, identità, ID e area prezzo siano ancora presenti. La verifica deve riguardare il contenuto, non soltanto lo stato tecnico.",
        "Quando una rotta fallisce, non spostarla di nascosto a una categoria. Segna l'articolo non disponibile, conserva l'ID per l'audit o sostituiscilo dopo un nuovo abbinamento completo. Se esistono domini o parametri diversi per la stessa pagina, scegli una versione canonica pulita. Questa manutenzione riduce i duplicati e impedisce che la stessa scheda porti a destinazioni diverse o irrilevanti."
      ]},
      { heading: "Passa dalla directory al catalogo vivo", paragraphs: [
        "Usa il foglio per filtrare categoria, tipo e budget di riferimento, non per concludere l'acquisto. Apri il dettaglio locale e verifica immagine, ID, base del prezzo e data. Poi continua nel catalogo principale e ricontrolla opzioni, misure, note, stock e totale. Se manca un dato, cerca con ID o descrizione neutra invece di affidarti a uno screenshot vecchio o a un titolo accorciato.",
        "Mantieni poche destinazioni esterne. Una directory diventa difficile da controllare quando pulsanti identici portano a piattaforme diverse, link brevi o passaggi inutili. Qui le azioni di prodotto, categoria e ricerca restano in un catalogo principale. Il confine è chiaro: litbuys.store organizza e spiega; il catalogo collegato controlla le informazioni vive e le azioni successive."
      ]},
      { heading: "Ripeti sette controlli", paragraphs: [
        "Segui sempre lo stesso ordine: apri la fonte; salva URL e ID; usa un nome neutro; abbina l'immagine esatta; registra prezzo e opzioni; aggiungi la data; prova percorso immagine e azione esterna su desktop e mobile. L'ordine mette l'identità prima della presentazione. Una riga dubbia resta fuori finché la differenza non è risolta. Il metodo è più lento della copia automatica, ma protegge l'intera directory.",
        "Percorri infine il sito come lettore: ricerca, categoria, scheda, dettaglio, destinazione e ritorno. La lingua deve restare sulla stessa pagina e le schede mobili non devono causare scorrimento orizzontale. Un buon SEO non nasce dalla ripetizione di “LitBuy spreadsheet” su pagine sottili. Nasce da record indicizzabili, percorsi stabili, date oneste e destinazioni coerenti con la promessa della scheda."
      ]}
    ]
  },
  "litbuy-qc-photo-checklist": {
    title: "Foto QC LitBuy: cosa può dimostrare un'immagine di magazzino",
    deck: "Una sequenza completa per controllare scarpe, abbigliamento, borse e accessori senza confondere prova visibile e garanzia.",
    readTime: "13 min di lettura",
    sections: [
      { heading: "Definisci cosa può provare il QC", paragraphs: [
        "Una foto QC registra un articolo, un angolo, una luce e un momento. Può mostrare forma, costruzione visibile, segni, rapporti di colore, sporco, strappi e confezione. Può confermare l'etichetta di taglia o opzione fotografata. Non dimostra durata, composizione esatta, struttura nascosta, comfort, odore o prestazioni future. Inizia separando le osservazioni visibili dalle interpretazioni che l'immagine non può sostenere.",
        "Questo limite coincide con i termini di rimborso LitBuy, che descrivono il QC base come verifica di quantità, aspetto visibile e difetti esterni evidenti. Non è un laboratorio né un certificato di autenticità. Scrivi “la cucitura sinistra sembra più alta nella vista frontale”, non “qualità scarsa”. Indica foto, posizione e prova aggiuntiva necessaria per ottenere una ripresa precisa invece di un'opinione generica."
      ]},
      { heading: "Inizia da silhouette e simmetria", paragraphs: [
        "Guarda viste complete davanti, lato e retro prima di ingrandire loghi o cuciture. Le proporzioni mostrano errori che un dettaglio attraente nasconde: scarpe di forma diversa, colletto irregolare, pannelli torti, tasche spostate o borsa non dritta. Confronta sinistra e destra usando centro, bordo, suola, orlo o attacco del manico. La prospettiva inganna; cerca lo stesso scarto in più di un angolo.",
        "Per le scarpe controlla punta, tallone, pannelli, unione della suola e simmetria della coppia. Per i capi osserva spalle, maniche, orlo, apertura e stampa. Per le borse confronta manici, patta, bordi e base. Gli accessori richiedono spesso fronte e retro perché la chiusura resta nascosta. Risolvi struttura e identità prima delle piccole imperfezioni decorative."
      ]},
      { heading: "Leggi la costruzione in ordine fisso", paragraphs: [
        "Segui sempre silhouette, pannelli, cuciture, bordi, chiusure, ferramenta, superficie ed etichette. La ripetizione impedisce che l'immagine principale distragga da problemi pratici. Percorri le cuciture lunghe e cerca cambi improvvisi, pieghe o punti mancanti. Controlla bordi incollati, pittura e, quando le foto lo consentono, zip, bottoni e fibbie aperti e chiusi.",
        "Non trasformare la compressione digitale in un difetto. Le immagini possono essere ridimensionate, nitidite o scattate con un telefono; una linea sfocata non prova una cucitura rotta. Se la zona cambia la decisione, chiedi un'immagine vicina e illuminata con luogo e azione precisi: cucitura interna sinistra, zip chiusa o bordo laterale della suola. Le richieste precise creano prove; chiedere se va tutto bene crea opinione."
      ]},
      { heading: "Le misure battono le lettere", paragraphs: [
        "Un'etichetta conferma la taglia applicata, non la vestibilità reale. Gli standard cambiano fra venditori, modelli e categorie. Confronta con un capo che possiedi. Per un top: petto, spalle, lunghezza e maniche. Per pantaloni: vita piatta, cavallo, interno gamba e apertura. Per borse: larghezza, altezza, profondità e caduta del manico. Per scarpe, la lunghezza interna è più utile di un numero isolato.",
        "Una buona foto mostra tutto il metro, lo zero e la fine su un articolo abbastanza piatto. Il primo piano di una cifra manca di contesto. Considera elasticità, spessore e metodo. Confronta con la tabella sorgente e ammetti una tolleranza ragionevole. Quando la vestibilità decide l'acquisto, una misura chiara vale più di diverse immagini decorative senza scala."
      ]},
      { heading: "Tratta colore ed etichette con cautela", paragraphs: [
        "LED, bilanciamento, contrasto e ogni schermo cambiano i colori. Confronta più angoli e riferimenti neutri come carta bianca, pavimento grigio o metro. Se la tonalità è decisiva, chiedi luce più neutra accettando una variazione residua. Una foto dimostra meglio che due pannelli differiscono tra loro che un nome commerciale esatto del colore.",
        "Le etichette aiutano con taglia, codice, identificazione e cura, ma non autenticano origine o materiale. Verifica coerenza fra ordine, cartellino ed etichetta cucita. Se la pagina è ambigua, non trasformare un testo fotografato in certezza. Registra ciò che si vede e limita la conclusione alle immagini e ai dati dell'ordine."
      ]},
      { heading: "Controlla l'imballo prima della spedizione", paragraphs: [
        "L'imballo influenza condizione e volume fatturabile. Cerca scatole schiacciate, metallo esposto, umidità, superfici non protette e parti libere. Decidi se una scatola protegge o occupa soltanto spazio. Rimuoverla riduce il volume ma può togliere struttura a scarpe, cappelli e oggetti fragili. Chiedi rinforzo o separazione quando risolvono un rischio visibile, non come regola universale.",
        "Prima di presentare il pacco, conferma quantità e opzioni con ID e dettaglio distintivo. Gli ordini raggruppati facilitano confusione fra colori o taglie. Una nota finale identifica fonte, variante e segno visivo. Segnala i problemi finché l'articolo è accessibile in magazzino. Dopo l'avvio internazionale, nuove foto, ritorno al venditore e altre soluzioni diventano generalmente più difficili."
      ]},
      { heading: "Prendi una decisione proporzionata", paragraphs: [
        "Classifica ogni risultato come differenza confermata, imperfezione visibile o domanda aperta. Una taglia errata è confermata. Un filo o una piccola macchia è visibile, ma la sua importanza dipende dalla posizione. Un'ombra sfocata richiede un'immagine migliore. Questa classificazione evita di trattare tutto allo stesso modo e concentra l'attenzione su identità, vestibilità, funzione e sicurezza del trasporto.",
        "Documenta foto, luogo e passo successivo. Accetta se la prova soddisfa i criteri; chiedi una vista precisa se l'incertezza è importante; oppure ferma il pacco se identità o condizione principale sono sbagliate. Nessuna checklist garantisce il comportamento futuro. Il suo obiettivo è trasformare un controllo rapido in una decisione ripetibile prima della fase internazionale più costosa e meno reversibile."
      ]}
    ]
  },
  "litbuy-shipping-weight-guide": {
    title: "Costo spedizione LitBuy: peso reale, volumetrico e fatturabile",
    deck: "Comprendere pesi, primo scaglione, imballo, rehearsal e regole di rotta prima di trasformare un calcolo in budget.",
    readTime: "14 min di lettura",
    sections: [
      { heading: "Tre pesi, una fattura", paragraphs: [
        "Le stime diventano confuse quando la parola peso indica calcoli diversi. Il peso reale viene dal pacco finito sulla bilancia. Il volumetrico trasforma lo spazio tramite lunghezza × larghezza × altezza divise per il fattore della rotta. Il peso fatturabile è il valore usato dopo confronto, regole e arrotondamento. Può essere il maggiore, ma la condizione specifica della linea deve sempre essere letta.",
        "Due pacchi con gli stessi prodotti possono quindi ricevere prezzi diversi. Un pacco denso dipende dalla bilancia; una scatola grande e leggera dal volume. Le stesse dimensioni producono valori diversi se cambiano fattore, unità o convenzione. Non copiare mai un divisore generico come dato finale. Consulta la rotta e conferma se le misure descrivono il pacco prima o dopo l'imballo definitivo."
      ]},
      { heading: "Calcola senza falsa precisione", paragraphs: [
        "Usa dimensioni esterne imballate nell'unità richiesta. Moltiplica, dividi per il fattore attuale, confronta con il peso reale e applica l'incremento. Un risultato di 2,01 kg può essere fatturato come 2,1, 2,5 o 3 kg. Molti decimali non rendono preciso il calcolo quando gli input descrivono il prodotto senza scatola invece del pacco finale.",
        "I pesi della scheda servono alla pianificazione. Possono escludere protezione, cartone, imballo del venditore e consolidamento. Lavora con intervalli di peso e misura durante l'acquisto. Capirai se il pacco è denso, voluminoso o vicino a una soglia dove una misura rehearsal potrebbe cambiare la rotta migliore."
      ]},
      { heading: "L'imballo cambia entrambi i lati", paragraphs: [
        "Rimuovere una scatola può ridurre il volume, ma l'imballo più leggero non è sempre il migliore. Scarpe, cappelli, vetro, borse strutturate e metallo esposto possono richiedere supporto. I capi morbidi si piegano maggiormente, con possibili pieghe, e la compressione non sempre riduce le misure quanto previsto. Valuta la funzione di ogni strato prima di chiederne la rimozione.",
        "Consolidare elimina cartoni e talvolta costi base, ma una forma irregolare può aumentare il lato lungo o attivare fuori misura. Verifica se dividere cambia rotte, minimi o assicurazione. L'obiettivo non è sempre una sola scatola né la più piccola: è una forma protettiva conforme alle regole di misura e fatturazione."
      ]},
      { heading: "Leggi la rotta, non il prezzo principale", paragraphs: [
        "Un prezzo al chilo raramente mostra tutto: primo peso, incrementi, minimo, lunghezza massima, circonferenza, categorie limitate o supplementi. Alcune rotte calcolano il volume per tutti i pacchi, altre usano regole particolari. I tempi sono stime e cambiano con dogana, capacità, meteo, festività e distribuzione locale.",
        "Confronta usando gli stessi dati: destinazione, peso imballato, dimensioni, calcolo fatturabile, servizi inclusi e supplementi visibili. Una stima e una misura rehearsal non sono direttamente confrontabili. Separa trasporto e costo completo: consegna interna, ispezione, imballo, assicurazione, conversione, tasse e dazi possono restare fuori dalla riga del peso."
      ]},
      { heading: "Usa rehearsal al momento giusto", paragraphs: [
        "La misura preventiva è utile quando il pacco è voluminoso, vicino a un limite o può passare al volume. Sostituisce ipotesi con un pacco misurato e mostra se togliere una grande scatola o separare un oggetto rigido apre altre linee. Per un piccolo pacco denso lontano dalle soglie, il vantaggio è minore, anche se i dati imballati restano preferibili.",
        "Non considerare rehearsal una promessa che il vettore misurerà uguale. Manipolazione, arrotondamento e controllo creano differenze. Mantieni margine e, se il risultato supera l'attesa, rivedi protezione, divisione o rotta prima della presentazione. È l'ultima fase pratica per cambiare configurazione prima che il pacco sia in transito."
      ]},
      { heading: "Punti specifici di LitBuy", paragraphs: [
        "Lo stimatore LitBuy spiega che l'unità di primo peso è il minimo fatturato. Un pacco più leggero paga l'unità completa e il resto avanza per scaglioni. Perdere pochi grammi non cambia quindi il prezzo se il pacco resta nella stessa fascia. Annota primo scaglione, continuazione, dimensioni massime e restrizioni prima di rimuovere una protezione che forse non produce risparmio.",
        "La politica LitBuy indica normalmente da uno a tre giorni lavorativi di elaborazione in magazzino, esclusi fine settimana e festivi. È prima della spedizione, non promessa internazionale. Transito, dogana, meteo e consegna locale sono separati. I rimborsi dipendono da fallimento confermato o dal ritorno ricevuto e ispezionato, non dal semplice superamento di una stima."
      ]},
      { heading: "Costruisci il budget completo", paragraphs: [
        "Separa prodotto, movimento interno, servizi, trasporto internazionale, margine e costi a destinazione. I valori USD del foglio sono indicativi; cambio e pagamento modificano l'importo. Tasse e dazi dipendono da paese, merci, rotta e dichiarazione. Non inventarli come percentuale universale; consulta la regola applicabile quando contano.",
        "Segna ogni valore come noto, quotato o ipotizzato: peso imballato noto, dimensioni stimate, fattore della rotta attuale, zona remota sconosciuta. Un margine copre misura, arrotondamento e supplementi dichiarati. Prima di presentare conferma destinazione, contenuto, restrizioni, misure, peso fatturabile, protezione e dichiarazione. Conta il pacco fatturato sulla rotta realmente scelta."
      ]}
    ]
  }
};
