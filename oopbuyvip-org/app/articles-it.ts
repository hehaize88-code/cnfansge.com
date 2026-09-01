import { englishArticles, type Article, type ArticleSlug } from "./seo-articles";
import { applyArticleDepth } from "./article-depth";
import { italianDepth } from "./article-depth-it";

const withSources = (slug: ArticleSlug, article: Omit<Article, "sources">): Article => ({ ...applyArticleDepth(article, italianDepth[slug]), sources: englishArticles[slug].sources });

export const italianArticles: Record<ArticleSlug, Article> = {
  "oopbuy-spreadsheet-guide": withSources("oopbuy-spreadsheet-guide", {
    eyebrow: "Guida al foglio OOPBuy", title: "Usare un foglio OOPBuy come checklist, non come promessa",
    description: "Un metodo completo dalla scheda e dall'offerta attiva al QC di magazzino e alla pianificazione realistica del pacco.", read: "12 min di lettura", updated: "1 settembre 2026",
    sections: [
      { heading: "Cosa può fare un foglio OOPBuy e cosa non può fare", paragraphs: [
        "Un foglio è prima di tutto un indice di ricerca: ordina percorsi prodotto, ID, prezzi di riferimento e pesi pubblicati. Non prova disponibilità, materiali, qualità, autenticità o una spedizione economica.",
        "L'acquisto comprende decisioni separate: scegliere l'offerta, attendere l'ingresso in magazzino, controllare il QC, decidere reso o invio e poi confrontare una rotta internazionale con dati misurati.",
        "Lavora per categoria. Scarpe, felpe, elettronica e accessori hanno rischi diversi di taglia, imballaggio e controllo. Tre candidati comparabili valgono più di trenta schede disordinate."
      ]},
      { heading: "Aprire sempre il percorso attivo prima del confronto", paragraphs: [
        "Le pagine dei venditori cambiano. Il prezzo nel foglio può riferirsi alla variante più economica o a una vecchia promozione. Verifica canale, ID, colore, taglia, versione e descrizione corrente.",
        "Non confrontare solo le conversioni in USD. Conserva l'importo CNY e la data. L'accordo OOPBuy indica attualmente una commissione di acquisto assistito dell'8%, ma valgono checkout e termini live.",
        "Una riga utile contiene ID, categoria, opzione esatta, prezzo, trasporto locale visibile, fonte del peso, data e nota di rischio. Così può essere mantenuta e verificata."
      ]},
      { heading: "Creare una fascia di costo totale prima dell'ordine", paragraphs: [
        "Al prezzo possono aggiungersi consegna nazionale, commissione agente, conversione del pagamento, servizi di magazzino, reso, trasporto internazionale, assicurazione e oneri a destinazione. Non tutti compaiono sempre.",
        "Calcola uno scenario basso e uno alto. Quello alto include peso misurato maggiore, imballo rigido, addebito volumetrico o una rotta meno favorevole.",
        "Segna ogni dato come confermato o stimato. Prezzo attivo, peso venditore, peso magazzino e preventivo preliminare hanno affidabilità diversa."
      ]},
      { heading: "Usare il QC di magazzino come vera decisione", paragraphs: [
        "Dopo l'ingresso conferma prima l'identità: colore, taglia, quantità e caratteristiche principali. Poi controlla forma, simmetria, cuciture, bordi, chiusure, stampe e danni visibili.",
        "Le foto mostrano difetti esterni, ma non provano durata, composizione esatta, funzionamento interno o autenticità. Richiedi la vista decisiva se manca.",
        "La guida ai resi pubblicata indica cinque giorni dall'ingresso per una richiesta ordinaria. Registra data di magazzino e scadenza accanto all'articolo."
      ]},
      { heading: "Usare stoccaggio e consolidamento con criterio", paragraphs: [
        "I materiali ufficiali OOPBuy indicano 90 giorni di stoccaggio gratuito. Servono a riunire articoli compatibili e completare il QC, non a rimandare il controllo.",
        "Un pacco più grande non è sempre più economico. Peso, dimensioni, mix e limiti della rotta possono rendere sensata una divisione, soprattutto con articoli ingombranti o limitati.",
        "Sostituisci il peso venditore con quello del magazzino quando disponibile e assegna uno stato: reso, prova mancante o approvato per il pacco."
      ]},
      { heading: "Un flusso OOPBuy ripetibile", paragraphs: [
        "Scegli la categoria, confronta tre offerte, apri i percorsi attivi, conferma l'opzione, calcola una fascia, controlla il QC in tempo e confronta le rotte con le misure finali.",
        "Il foglio più affidabile non è il più grande. Data le verifiche, rimuove i percorsi scaduti e separa dati del venditore, stime e fatti di magazzino.",
        "Saldo, commissioni, politiche e linee vanno verificati dal vivo quando si decide. Il foglio facilita il controllo, ma non lo sostituisce."
      ]},
    ],
  }),
  "oopbuy-qc-checklist": withSources("oopbuy-qc-checklist", {
    eyebrow: "Foto QC OOPBuy", title: "Foto QC OOPBuy: checklist ripetibile per il magazzino",
    description: "Controllare identità, qualità visibile, misure e prove mancanti nell'ordine corretto.", read: "12 min di lettura", updated: "1 settembre 2026",
    sections: [
      { heading: "Cosa dovrebbe mostrare il QC OOPBuy", paragraphs: [
        "OOPBuy descrive ispezione e foto QC dopo l'ingresso in magazzino. È un passaggio utile per confermare che sia arrivato un articolo visibile simile all'opzione scelta.",
        "QC non significa certificazione. Un'immagine non prova autenticità, fibre, impermeabilità, batteria, componenti interni o durata a lungo termine.",
        "Salva prima inserzione, opzione esatta, tabella taglie, colore atteso e misure importanti. Confronterai fatti invece di ricordi."
      ]},
      { heading: "Passo 1: confermare l'identità prima della qualità", paragraphs: [
        "Confronta quantità, colore, taglia, etichetta, versione e dettagli principali. Per una coppia verifica entrambi i pezzi; gli accessori descritti dovrebbero essere visibili.",
        "Tieni ordine e galleria QC affiancati. Se le varianti sono simili, annota prima la differenza decisiva e conserva il riferimento dell'ordine.",
        "Se busta o imballaggio nascondono il prodotto, non dedurre ciò che non si vede. Usa foto aggiuntive o supporto disponibili quando la decisione ne dipende."
      ]},
      { heading: "Passo 2: dalla forma generale ai dettagli", paragraphs: [
        "Per le scarpe controlla coppia, punta, talloni, simmetria e bordi della suola. Per l'abbigliamento, proporzioni, maniche, orlo, colletto e cuciture storte.",
        "Poi osserva cuciture, bordi, chiusure, stampe, fili, macchie, graffi e parti mancanti. Valuta più angoli insieme.",
        "Usa note neutrali: il tallone appare disallineato nella vista posteriore oppure manca la foto con righello. Un'osservazione precisa aiuta più di perfetto o inutilizzabile."
      ]},
      { heading: "Passo 3: misurare vestibilità e compatibilità", paragraphs: [
        "Un'etichetta non prova la vestibilità. Confronta torace, lunghezza, spalle, maniche, vita o soletta con un articolo personale che calza bene.",
        "Per l'elettronica verifica modello, spina, connettori, dimensioni, accessori e danni visibili. Le foto non dimostrano la funzione interna; valuta il rischio residuo.",
        "Definisci soglie e tolleranze prima della galleria. Se manca la misura decisiva, chiedi una prova invece di abbassare le aspettative."
      ]},
      { heading: "Trattare i cinque giorni come scadenza operativa", paragraphs: [
        "OOPBuy pubblica cinque giorni dall'ingresso per resi o cambi ordinari. Regole del venditore, responsabilità, trasporto locale e servizio possono cambiare esito e costo.",
        "Controlla subito le notifiche e invia una richiesta chiara con riferimento, variante, differenza precisa e foto corrispondente.",
        "Distingui errore del venditore e ripensamento. Le informazioni pubblicate avvertono che una richiesta a carico del cliente può aggiungere spedizione e servizio."
      ]},
      { heading: "Documentare reso, attesa o spedizione", paragraphs: [
        "Chiudi ogni controllo con uno stato: reso, in attesa di prova o approvato per il pacco. Così nessun articolo non verificato entra per errore nel consolidamento.",
        "Conserva il risultato QC con percorso e peso di magazzino. Potrai motivare perché una raccomandazione viene mantenuta, segnalata o rimossa.",
        "Lo scopo non è creare certezza falsa. Dichiara cosa si vede, cosa manca e quale rischio resta a compratore, venditore, piattaforma o vettore."
      ]},
      { heading: "Domande QC da salvare per categoria", paragraphs: [
        "Per le scarpe: simmetria, suola, tallone, punta, numero e soletta. Per i capi: colore, etichetta, misure, stampa, cuciture e macchie.",
        "Per borse: dimensioni, chiusura, ferramenta, manici e accessori. Per elettronica separa aspetto e funzione e considera solo i test realmente offerti.",
        "Non pubblicare foto QC altrui senza permesso. Un esempio nitido e annotato convince; un collage sfocato o senza contesto riduce fiducia.",
        "Salva questa lista di domande accanto all'inserzione prima dell'acquisto. Criteri costanti accelerano il QC e rendono i prodotti davvero confrontabili."
      ]},
    ],
  }),
  "oopbuy-shipping-planning": withSources("oopbuy-shipping-planning", {
    eyebrow: "Costo spedizione OOPBuy", title: "Spedizione OOPBuy: peso, volume, imballaggio e rischio della rotta",
    description: "Stimare il trasporto prima e dopo il magazzino e interpretare correttamente ogni preventivo.", read: "13 min di lettura", updated: "1 settembre 2026",
    sections: [
      { heading: "Perché il prezzo del prodotto predice male la spedizione", paragraphs: [
        "Il trasporto dipende da destinazione, rotta, peso, dimensioni, categoria e imballaggio. Un prodotto leggero ma ingombrante o una scatola di scarpe possono costare molto.",
        "Pianifica prima dell'ordine: registra peso venditore, dimensioni probabili e tipo di confezione. Segna scatole rigide, piumini, elettronica e fragili.",
        "Usa una fascia. Lo scenario alto considera maggior peso, protezioni, addebito volumetrico e una linea meno favorevole."
      ]},
      { heading: "Peso reale, dimensionale e fatturabile", paragraphs: [
        "A seconda della linea può valere peso reale, calcolo volumetrico o il maggiore. Controlla lo stimatore OOPBuy e la descrizione attiva della rotta.",
        "Il peso venditore filtra, quello di magazzino affina e le misure del pacco decidono. Etichetta ogni fase.",
        "Togliere la scatola può ridurre volume, ma anche protezione o presentazione. Decidi secondo prodotto, valore e rischio, non automaticamente."
      ]},
      { heading: "L'imballaggio cambia prezzo e rischio", paragraphs: [
        "OOPBuy suggerisce sacchi sottovuoto per articoli morbidi ingombranti come piumini o peluche. Riducono volume, ma non sono adatti a prodotti che si deformano.",
        "Paraspigoli, barriera antiumidità, cartone rinforzato e protezione scarpe devono risolvere un rischio specifico. Aggiungono materiale e talvolta peso.",
        "Completa il QC prima dell'imballaggio. Non serve proteggere e spedire un prodotto che avresti restituito dopo una discrepanza visibile."
      ]},
      { heading: "Consolidare pensando alla rotta", paragraphs: [
        "La guida permette di selezionare articoli stoccati e creare un pacco; 90 giorni gratuiti danno tempo. Ogni consolidamento richiede comunque un piano.",
        "Confronta almeno pacco unico e divisione. Un articolo ingombrante o limitato può eliminare linee per tutto il resto.",
        "Mantieni un margine per cambio, misurazioni e rotte. Se funziona solo il calcolo ottimistico, l'acquisto non è davvero sostenibile."
      ]},
      { heading: "Separare dogana, restrizioni e assicurazione", paragraphs: [
        "OOPBuy pubblica categorie vietate e limitate. La consegna locale al magazzino non garantisce l'idoneità alla spedizione internazionale.",
        "Nessuno garantisce l'esito doganale. Peso, volume, valore e quantità di articoli identici influenzano il rischio; il destinatario deve rispettare le norme locali.",
        "Secondo OOPBuy, il risarcimento dipende dalla linea. Leggi copertura, prove richieste ed esclusioni prima della scelta."
      ]},
      { heading: "Un foglio di stima migliore", paragraphs: [
        "Per articolo registra prezzo, peso venditore, peso magazzino, contributo imballato, rischio di imballo e restrizione. Per il pacco: destinazione, misure, regola, prezzo e data.",
        "Ricalcola prima dell'ordine, dopo l'ingresso e subito prima del pagamento. Ogni passaggio sostituisce ipotesi con prove migliori.",
        "Non cercare una linea sempre più economica. Cerca la rotta attiva adatta a destinazione, pacco, mix, tempi e rischio accettato."
      ]},
      { heading: "Tre scenari che smascherano una cattiva stima", paragraphs: [
        "Un paio economico con scatola rigida può diventare costoso per il volume. Confronta scatola, protezione alternativa e rimozione dopo l'analisi del rischio.",
        "Più piumini pesano poco ma occupano spazio. Calcola dimensioni compresse e normali e verifica se il vuoto è adatto al materiale e alla linea.",
        "Un pacco misto con un articolo sensibile può perdere rotte. Quota la divisione e salva destinazione, data, valuta, tasse, assicurazione e coupon inclusi.",
        "Esegui ogni scenario per il paese reale nello stimatore attuale e ricalcola dopo l'imballaggio finale, perché piccole variazioni possono cambiare lo scaglione fatturabile."
      ]},
    ],
  }),
  "oopbuy-fees-total-cost": withSources("oopbuy-fees-total-cost", {
    eyebrow: "Commissioni OOPBuy", title: "Commissioni OOPBuy: calcolare il costo totale prima dell'acquisto",
    description: "Separare prezzo, commissione agente pubblicata, trasporto locale, reso, pagamento e spedizione internazionale.", read: "12 min di lettura", updated: "1 settembre 2026",
    sections: [
      { heading: "Partire dalla commissione agente pubblicata", paragraphs: [
        "L'accordo utente attuale OOPBuy indica l'8% del prezzo di acquisto selezionato come commissione di acquisto assistito. Il checkout live resta decisivo con cambi o promozioni.",
        "Separala dal provider di pagamento, consegna venditore, servizi di magazzino e trasporto internazionale. Un'unica percentuale per tutto il costo è fuorviante.",
        "Annota prezzo CNY, opzione esatta e importo al checkout. Le differenze possono derivare da trasporto locale, servizio, cambio o variante."
      ]},
      { heading: "La consegna locale appartiene alla fase prodotto", paragraphs: [
        "Molti venditori addebitano separatamente l'invio al magazzino OOPBuy. Non è la spedizione internazionale e varia per offerta.",
        "Confronta venditori usando prodotto, trasporto locale e commissione attuale. Il prezzo pubblicato più basso non sempre dà il minor costo in magazzino.",
        "Conserva il trasporto locale come voce separata per non confonderlo più tardi con il pacco internazionale."
      ]},
      { heading: "Pagamento e cambio modificano il costo effettivo", paragraphs: [
        "La nota PayPal OOPBuy parla di conversione in USD e aggiustamenti del cambio. Anche la carta può applicare commissioni in valuta o estere.",
        "Confronta il saldo accreditato con quanto realmente addebitato. Non mischiare CNY, saldo USD e tasso bancario senza etichette.",
        "Non dichiarare un metodo sempre migliore. Disponibilità e commissioni variano per paese, account e provider corrente."
      ]},
      { heading: "Resi e cambi possono aggiungere costi", paragraphs: [
        "OOPBuy pubblica che un reso a carico del cliente può includere invio al venditore, ritorno e 5 CNY di servizio; un cambio può aggiungere una seconda consegna e 5 CNY.",
        "La scadenza ordinaria pubblicata è cinque giorni dall'ingresso. Un QC lento può ridurre le opzioni e aumentare il costo.",
        "Prevedi una piccola riserva QC e controlla prima del trasporto internazionale. Un reso dal paese di destinazione può essere poco pratico."
      ]},
      { heading: "La spedizione internazionale è un pagamento separato", paragraphs: [
        "La guida ufficiale separa acquisto della merce e invio del pacco. Lo stimatore richiede destinazione e dati, quindi lo stesso prodotto può avere opzioni diverse.",
        "Peso, dimensioni, imballo, consolidamento, restrizioni, assicurazione e linea cambiano il preventivo. Un coupon temporaneo non è un prezzo permanente.",
        "Tratta tasse e dogana a parte salvo indicazioni della linea. Nessuna guida seria promette sempre assenza di imposte o sequestri."
      ]},
      { heading: "Una formula completa del costo OOPBuy", paragraphs: [
        "Somma prodotto, consegna locale, commissione attuale, conversione, servizi opzionali, resi attivati, trasporto, assicurazione e possibili oneri a destinazione.",
        "Separa confermato e stimato. Checkout e magazzino sono più solidi di una stima anticipata o di una dogana possibile. Sostituisci le stime senza duplicarle.",
        "Confronta il costo per articolo utilizzabile. QC fallito, cambio o volume elevato possono cancellare il risparmio apparente."
      ]},
      { heading: "Confrontare equamente due ordini OOPBuy", paragraphs: [
        "Usa la stessa valuta e lo stesso confine: costo in magazzino, costo del pacco o costo consegnato. Non confrontare prezzo articolo e totale finale.",
        "Separa costi fissi e variabili. Ripartisci il trasporto comune per peso, volume o valore e dichiara il metodo per rendere il calcolo ripetibile.",
        "Data preventivi e coupon, registra rimborsi come rettifiche e indica l'affidabilità. L'8%, i 5 CNY e le rotte attuali sono riferimenti, non garanzie eterne.",
        "Conserva screenshot del checkout e del preventivo finale per spiegare differenze successive senza affidarti alla memoria.",
        "Aggiorna il foglio quando cambiano politiche o linee: un vecchio calcolo resta uno storico, non un prezzo corrente.",
        "Concludi con il costo per articolo realmente utilizzabile e specifica se tasse, assicurazione o sconti erano già inclusi."
      ]},
    ],
  }),
  "is-oopbuy-legit-review": withSources("is-oopbuy-legit-review", {
    eyebrow: "Recensione OOPBuy 2026", title: "OOPBuy è affidabile? Flusso, reclami e prove esaminati nel 2026",
    description: "Distinguere funzioni verificabili, avviso Trustpilot attuale ed esperienze utente non verificate.", read: "14 min di lettura", updated: "1 settembre 2026",
    sections: [
      { heading: "Cosa dovrebbe significare affidabile in una recensione OOPBuy", paragraphs: [
        "La domanda ne contiene diverse: l'agente funziona, conserva merci, offre QC, spedisce pacchi e risolve i problemi?",
        "Guide e accordi ufficiali provano l'esistenza di un flusso descritto, non l'autenticità di ogni prodotto, tutte le consegne o un supporto sempre ottimo.",
        "Usa fonti ufficiali per le regole, account live per i prezzi e report indipendenti per i temi ricorrenti. Ogni storia resta selezionata e non verificata."
      ]},
      { heading: "Cosa offre il flusso ufficiale OOPBuy", paragraphs: [
        "La guida descrive link prodotto, acquisto, ingresso, QC, stoccaggio e invio del pacco. La pagina di protezione indica ispezione e 90 giorni gratuiti.",
        "I resi ordinari sono pubblicati entro cinque giorni dall'ingresso; l'accordo indica attualmente una commissione agente dell'8%.",
        "Sono pubblicati anche limiti: articoli ristretti, nessuna garanzia doganale e risarcimento per linea. Una recensione equa cita vantaggi e limiti."
      ]},
      { heading: "Trustpilot mostra ora un avviso importante", paragraphs: [
        "Il 1 settembre 2026 Trustpilot mostrava 906 recensioni ma nessun punteggio complessivo per violazione delle linee guida, dichiarando di aver rimosso recensioni false.",
        "La distribuzione visibile era 75% a cinque stelle e 17% a una. I positivi citavano consegna e supporto; i negativi costi, ritardi e QC.",
        "Sono esperienze, non prove per ogni ordine. Né una vecchia media di quattro stelle né una singola accusa di truffa riassumono bene il servizio."
      ]},
      { heading: "Cosa aggiungono le esperienze Reddit e cosa non provano", paragraphs: [
        "Un resoconto dettagliato del 2024 citava facilità d'uso, QC variabile, supporto web lento, correzione del trasporto e consegna in 24 giorni, con intenzione di riutilizzo.",
        "Discussioni più recenti parlano anche di attese lunghe, risposte lente e spedizione cara; altri utenti riportano risultati più rapidi.",
        "Questi post generano domande, non statistiche. Data, destinazione, linea, referral e dettagli mancanti cambiano il loro peso."
      ]},
      { heading: "Ridurre personalmente i rischi", paragraphs: [
        "Controlla offerta attiva, opzione, taglia, prezzo e trasporto locale. Salva ID e prove del venditore; un foglio non garantisce qualità futura.",
        "Esamina il QC presto e con metodo. Valuta identità, stato visibile e misure nei cinque giorni pubblicati e chiedi le prove mancanti.",
        "Stima il trasporto, ricalcola con peso di magazzino e paga con le misure finali. Prevedi margine, restrizioni e condizioni di risarcimento."
      ]},
      { heading: "Conclusione: prove invece di scorciatoie reputazionali", paragraphs: [
        "OOPBuy documenta acquisto assistito, magazzino, QC, pacco e post-vendita. Ciò sostiene l'esistenza di un servizio reale, non ogni affermazione.",
        "L'avviso Trustpilot e le recensioni false rimosse impediscono una raccomandazione semplice per stelle. Inizia con poco, conserva poco saldo e archivia i preventivi.",
        "La risposta onesta è condizionata: il flusso esiste, ma l'esito dipende da venditore, prodotto ricevuto, QC, rotta e gestione dei problemi."
      ]},
      { heading: "Come questa recensione pesa prove in contrasto", paragraphs: [
        "I documenti ufficiali prevalgono per commissioni, scadenze e regole, ma meno per la promozione. Una schermata live supera una vecchia guida.",
        "Le recensioni si raggruppano per temi senza creare un nuovo punteggio. Referral, incentivi, account cancellati e dati mancanti riducono fiducia.",
        "Un ordine di prova fornisce dati di quello specifico account. Documenta acquisto, magazzino, QC, preventivo, spedizione, consegna e supporto e aggiorna quando cambiano le regole.",
        "Se pubblichi l'esperienza, dichiara destinazione, rotta, data ed eventuali incentivi, così non verrà scambiata per un tasso generale di successo."
      ]},
    ],
  }),
};
