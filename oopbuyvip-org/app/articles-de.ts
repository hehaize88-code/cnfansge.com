import { englishArticles, type Article, type ArticleSlug } from "./seo-articles";
import { applyArticleDepth } from "./article-depth";
import { germanDepth } from "./article-depth-de";

const withSources = (slug: ArticleSlug, article: Omit<Article, "sources">): Article => ({
  ...applyArticleDepth(article, germanDepth[slug]),
  sources: englishArticles[slug].sources,
});

export const germanArticles: Record<ArticleSlug, Article> = {
  "oopbuy-spreadsheet-guide": withSources("oopbuy-spreadsheet-guide", {
    eyebrow: "OOPBuy Spreadsheet Anleitung",
    title: "Ein OOPBuy Spreadsheet als Prüfliste nutzen – nicht als Versprechen",
    description: "Eine vollständige Methode vom Spreadsheet-Eintrag über Live-Angebot und Lager-QC bis zur realistischen Paketplanung.",
    read: "12 Min. Lesezeit",
    updated: "1. September 2026",
    sections: [
      { heading: "Was ein OOPBuy Spreadsheet leisten kann – und was nicht", paragraphs: [
        "Ein Spreadsheet ist vor allem ein Rechercheindex: Es ordnet Produktrouten, IDs, Referenzpreise und Gewichtsangaben. Es beweist weder Bestand noch Material, Qualität, Echtheit oder günstigen Versand.",
        "Der Einkauf besteht aus getrennten Entscheidungen: Angebot wählen, Lagereingang abwarten, QC prüfen, über Rückgabe oder Versand entscheiden und anschließend eine internationale Route mit gemessenen Daten auswählen.",
        "Arbeite kategorieweise. Schuhe, Hoodies, Elektronik und Accessoires haben unterschiedliche Größen-, Verpackungs- und QC-Risiken. Drei gut vergleichbare Kandidaten sind nützlicher als dreißig ungeordnete Tabs."
      ]},
      { heading: "Vor dem Preisvergleich immer die Live-Route öffnen", paragraphs: [
        "Verkäuferseiten ändern sich. Ein Tabellenpreis kann nur für die billigste Variante oder eine alte Aktion gelten. Prüfe Kanal, Artikel-ID, Farbe, Größe, Version und aktuelle Beschreibung.",
        "Vergleiche nicht ausschließlich umgerechnete USD-Preise. Behalte den CNY-Betrag und das Prüfdatum. Die am 1. September 2026 geprüften Gebührenangaben widersprechen sich: Die Vereinbarung bezieht 8 % auf Versandkosten, Service & Fees nennt keine weiteren Gebühren außerhalb der aufgeführten Kategorien und Google Play wirbt mit keiner Servicegebühr. Wende deshalb keinen festen Prozentsatz an, sondern prüfe Vertrag, Checkout und eine schriftliche Supportbestätigung.",
        "Eine gute Zeile enthält ID, Kategorie, exakte Option, Preis, sichtbaren Inlandsversand, Gewichtsquelle, Prüfdatum und Risikohinweis. So lässt sie sich später nachvollziehbar warten."
      ]},
      { heading: "Vor der Bestellung eine Gesamtkostenspanne bilden", paragraphs: [
        "Zum Produktpreis können Inlandsversand, Agent-Gebühr, Zahlungsumrechnung, Lagerleistungen, Rückgabe, internationale Fracht, Versicherung und mögliche Zielabgaben kommen. Nicht jede Position fällt immer an.",
        "Berechne eine niedrige und eine hohe Variante. Die hohe Variante berücksichtigt schwerere Lagermessung, starre Verpackung, Volumenberechnung oder eine ungünstigere Route.",
        "Kennzeichne Daten als bestätigt oder geschätzt: Live-Preis, Verkäufergewicht, Lagergewicht und vorläufige Versandquote sind unterschiedlich verlässlich und dürfen nicht gleich behandelt werden."
      ]},
      { heading: "Lager-QC als echte Entscheidungsstufe nutzen", paragraphs: [
        "Nach dem Lagereingang zuerst Identität prüfen: Farbe, Größe, Menge und Hauptmerkmale. Danach Form, Symmetrie, Nähte, Kanten, Verschlüsse, Drucke und sichtbare Schäden kontrollieren.",
        "Fotos zeigen sichtbare Abweichungen, beweisen aber keine Haltbarkeit, Materialzusammensetzung, interne Elektronikfunktion oder Echtheit. Fehlende entscheidende Ansichten sollten vor der Freigabe angefordert werden.",
        "Die veröffentlichte Rückgaberichtlinie nennt fünf Tage nach Einlagerung für Standardanträge. Notiere Einlagerungsdatum und Prüffrist direkt neben dem Artikel."
      ]},
      { heading: "Lagerzeit und Konsolidierung bewusst einsetzen", paragraphs: [
        "Offizielle OOPBuy-Unterlagen nennen 90 Tage kostenlose Lagerung. Diese Zeit dient dazu, passende Artikel zu sammeln und QC abzuschließen – nicht dazu, die Kontrolle aufzuschieben.",
        "Ein größeres Paket ist nicht automatisch günstiger. Gewicht, Maße, Produktmix und Routenlimits können eine Teilung sinnvoll machen, besonders bei sperrigen oder eingeschränkten Artikeln.",
        "Ersetze nach Wareneingang Verkäufergewichte durch verfügbare Lagermessungen und markiere jeden Artikel als Rückgabe, Beleg fehlt oder für Paketplanung freigegeben."
      ]},
      { heading: "Ein wiederholbarer OOPBuy-Spreadsheet-Ablauf", paragraphs: [
        "Kategorie wählen, drei Angebote vergleichen, Live-Routen prüfen, Option bestätigen, Kostenspanne berechnen, QC zeitnah bewerten und anschließend mit finalen Maßen aktuelle Routen vergleichen.",
        "Das vertrauenswürdigste Spreadsheet ist nicht das größte. Es datiert Prüfungen, entfernt tote Routen und trennt Verkäuferangaben, Schätzungen und Lagerfakten sichtbar voneinander.",
        "Kontostand, Gebühren, Richtlinien und Versandlinien müssen zum Entscheidungszeitpunkt live geprüft werden. Das Spreadsheet soll diese Prüfung erleichtern, nicht ersetzen."
      ]},
    ],
  }),
  "oopbuy-qc-checklist": withSources("oopbuy-qc-checklist", {
    eyebrow: "OOPBuy QC-Fotos",
    title: "OOPBuy QC-Fotos: Wiederholbare Prüfliste für das Lager",
    description: "Identität, sichtbare Qualität, Maße und fehlende Belege in der richtigen Reihenfolge prüfen.",
    read: "12 Min. Lesezeit",
    updated: "1. September 2026",
    sections: [
      { heading: "Was OOPBuy-QC zeigen soll", paragraphs: [
        "OOPBuy beschreibt Inspektion und QC-Fotos nach dem Lagereingang. Diese Stufe hilft zu bestätigen, dass ein sichtbarer Artikel angekommen ist und zur gewählten Variante passt.",
        "QC ist keine Zertifizierung. Fotos belegen weder Echtheit noch Faserzusammensetzung, Wasserdichtigkeit, Akkuzustand, interne Bauteile oder langfristige Haltbarkeit.",
        "Speichere vorab Listing, Option, Größentabelle, erwartete Farbe und wichtige Maße. Dadurch vergleichst du nach dem Lagereingang mit Fakten statt Erinnerung."
      ]},
      { heading: "Schritt eins: Identität vor Qualität bestätigen", paragraphs: [
        "Vergleiche Menge, Farbe, Größe, Etikett, Version und Hauptmerkmale. Bei Paaren müssen beide Teile zusammenpassen; beschriebenes Zubehör sollte sichtbar vorhanden sein.",
        "Öffne Bestellung und QC-Galerie nebeneinander. Notiere bei ähnlichen Varianten vorher das entscheidende Unterscheidungsmerkmal und verwende vorhandene Bestellreferenzen.",
        "Wenn Beutel oder Verpackung den Artikel verdecken, schließe nicht auf unsichtbare Details. Nutze aktuelle Zusatzfoto- oder Supportoptionen, wenn die Entscheidung davon abhängt."
      ]},
      { heading: "Schritt zwei: Von Gesamtform zu kleinen Details", paragraphs: [
        "Bei Schuhen zuerst Paarform, Zehenbereich, Fersen, Symmetrie und Sohlenränder ansehen. Bei Kleidung Proportionen, Ärmel, Saum, Kragen und verdrehte Nähte prüfen.",
        "Danach sichtbare Nähte, Kanten, Verschlüsse, Drucke, lose Fäden, Flecken, Kratzer und fehlende Teile prüfen. Mehrere Ansichten gemeinsam bewerten.",
        "Formuliere Notizen sachlich: Ferse wirkt in Rückansicht ungleich oder Maßfoto fehlt. Präzise Beobachtungen sind für Support hilfreicher als perfekt oder unbrauchbar."
      ]},
      { heading: "Schritt drei: Passform und Kompatibilität messen", paragraphs: [
        "Ein Größenetikett beweist keine Passform. Vergleiche Brustweite, Länge, Schulter, Ärmel, Taille oder Innensohlenlänge mit einem eigenen passenden Produkt.",
        "Bei Elektronik Modellnummer, Stecker, Anschlüsse, Maße, Zubehör und sichtbare Schäden prüfen. Fotos beweisen keine interne Funktion; verbleibendes Risiko muss bewertet werden.",
        "Definiere Mindestmaße und Toleranzen vor dem Öffnen der Bilder. Fehlt der entscheidende Wert, ist ein zusätzlicher Beleg sinnvoller als Wunschdenken."
      ]},
      { heading: "Die Fünf-Tage-Frist als Arbeitsdeadline nutzen", paragraphs: [
        "OOPBuy nennt für Standard-Rückgabe oder Umtausch fünf Tage nach Lagereingang. Verkäuferregeln, Verantwortlichkeit, Inlandsversand und Servicekosten können das Ergebnis beeinflussen.",
        "Prüfe Benachrichtigungen zeitnah und sende einen klaren Antrag mit Bestellreferenz, gewählter Variante, konkreter Abweichung und passendem Foto.",
        "Unterscheide Verkäuferfehler von Meinungsänderung. Kundenverursachte Anträge können laut veröffentlichter Information zusätzliche Versand- und Servicekosten auslösen."
      ]},
      { heading: "Rückgabe, Halten oder Versand dokumentieren", paragraphs: [
        "Beende jede Prüfung mit einem Status: Rückgabe, auf Beleg warten oder für Paketplanung freigegeben. So gelangt kein ungeprüfter Artikel versehentlich ins Paket.",
        "Speichere QC-Ergebnis zusammen mit Produktroute und Lagergewicht. Dadurch kann eine Empfehlung später begründet behalten, markiert oder entfernt werden.",
        "Ziel ist keine falsche Sicherheit. Dokumentiere klar, was sichtbar ist, was fehlt und welches Restrisiko bei Käufer, Verkäufer, Plattform oder Versandlinie liegt."
      ]},
      { heading: "Kategoriespezifische QC-Fragen speichern", paragraphs: [
        "Für Schuhe Paar-Symmetrie, Sohlen, Ferse, Zehenform, Größenmarkierung und Innensohlenmaß prüfen. Für Kleidung Farbe, Etikett, Maße, Druck, Nähte und Flecken.",
        "Für Taschen Maße, Verschluss, Hardware, Griffe und Zubehör kontrollieren. Bei Elektronik Aussehen und Funktion trennen und nur tatsächlich angebotene Tests berücksichtigen.",
        "Veröffentliche fremde QC-Fotos nur mit Erlaubnis. Klare, beschriftete Beispiele sind überzeugend; unscharfe Collagen oder Bilder ohne Kontext schwächen Vertrauen.",
        "Speichere diese Kategorieliste schon vor dem Kauf neben dem Angebot. Gleichbleibende Fragen machen spätere Prüfungen schneller und Produkte nachvollziehbar vergleichbar."
      ]},
    ],
  }),
  "oopbuy-shipping-planning": withSources("oopbuy-shipping-planning", {
    eyebrow: "OOPBuy Versandkosten",
    title: "OOPBuy Versandkosten: Gewicht, Volumen, Verpackung und Routenrisiko",
    description: "Versand vor und nach dem Lagereingang realistisch berechnen und Schätzungen korrekt einordnen.",
    read: "13 Min. Lesezeit",
    updated: "1. September 2026",
    sections: [
      { heading: "Warum der Produktpreis kein guter Versandindikator ist", paragraphs: [
        "Internationale Fracht hängt von Ziel, Route, Gewicht, Maßen, Produktart und Verpackung ab. Leichte, sperrige Waren oder Schuhkartons können überraschend teuer werden.",
        "Plane vor der Bestellung: Verkäufergewicht, vermutete Packmaße und Verpackungsart erfassen. Starre Boxen, Daunenjacken, Elektronik und fragile Artikel getrennt markieren.",
        "Nutze eine Kostenbandbreite. Die obere Schätzung berücksichtigt schwerere Lagermessung, Schutzmaterial, Volumenabrechnung und weniger günstige verfügbare Linien."
      ]},
      { heading: "Tatsächliches, dimensionales und abrechenbares Gewicht", paragraphs: [
        "Je nach Linie kann tatsächliches Gewicht, Volumenberechnung oder der höhere Wert gelten. Prüfe den aktuellen OOPBuy-Rechner und die konkrete Routenbeschreibung.",
        "Verkäufergewicht dient der Vorauswahl, Lagergewicht der Verfeinerung und fertige Paketmaße dem finalen Vergleich. Kennzeichne jede Stufe eindeutig.",
        "Boxentfernung kann Volumen sparen, aber Schutz und Präsentation verringern. Die Entscheidung hängt vom Artikelwert, Material und Versandrisiko ab."
      ]},
      { heading: "Verpackung verändert Preis und Risiko", paragraphs: [
        "OOPBuy empfiehlt Vakuumbeutel für sperrige weiche Waren wie Daunenjacken oder Plüschartikel. Das kann Volumen reduzieren, ist aber nicht für verformungsempfindliche Produkte geeignet.",
        "Kantenschutz, Feuchtigkeitsbarriere, verstärkte Kartons und Schuhschutz sollen ein konkretes Risiko lösen. Sie können Gewicht und Kosten erhöhen.",
        "Erst QC abschließen, dann Verpackung wählen. Ein falscher oder beschädigter Artikel sollte nicht nur deshalb versendet werden, weil Verpackung bereits geplant wurde."
      ]},
      { heading: "Mit einer Route im Blick konsolidieren", paragraphs: [
        "Die offizielle Anleitung erlaubt gespeicherte Artikel zu einem Paket zusammenzustellen; 90 Tage kostenlose Lagerung schaffen dafür Zeit. Trotzdem braucht jedes Paket einen Plan.",
        "Vergleiche mindestens Gesamtpaket und Teilung. Ein sperriger oder eingeschränkter Artikel kann verfügbare Linien für alle anderen Waren reduzieren.",
        "Halte Budgetreserve für Wechselkurs, Messabweichung und veränderte Routen. Wenn nur die optimistischste Schätzung passt, ist der Einkauf nicht wirklich bezahlbar."
      ]},
      { heading: "Zoll, Einschränkungen und Versicherung trennen", paragraphs: [
        "OOPBuy veröffentlicht verbotene und eingeschränkte Kategorien. Nationale Verkäuferlieferung bedeutet nicht automatisch internationale Transportfähigkeit.",
        "Zollausgänge sind nicht garantiert. Gewicht, Volumen, Wert und viele identische Artikel können das Prüfungsrisiko beeinflussen; Empfänger müssen Zielregeln beachten.",
        "Entschädigung richtet sich laut OOPBuy nach der jeweiligen Versandlinie. Deckung, Nachweise und Ausschlüsse müssen vor der Routenauswahl gelesen werden."
      ]},
      { heading: "Ein besseres Versand-Arbeitsblatt", paragraphs: [
        "Pro Artikel Quellpreis, Verkäufergewicht, Lagergewicht, Packbeitrag, Verpackungsrisiko und Einschränkung erfassen. Für das Paket Ziel, Maße, Regel, Preis und Quote-Datum ergänzen.",
        "Dreimal neu rechnen: vor Bestellung, nach Lagereingang und direkt vor Zahlung. Jede Runde ersetzt vorläufige Daten durch stärkere Belege.",
        "Nicht fragen, welche Linie immer am billigsten ist. Gesucht wird die aktuell passende Route für Ziel, Paket, Produktmix, Zeit und Risikotoleranz."
      ]},
      { heading: "Drei Szenarien, die schlechte Schätzungen entlarven", paragraphs: [
        "Ein günstiger Schuh mit starrer Box kann wegen Volumen teurer werden. Vergleiche Box behalten, Ersatzschutz und Entfernung erst nach Risikoabwägung.",
        "Mehrere Daunenjacken sind leicht, aber voluminös. Berechne komprimierte und unkomprimierte Maße und prüfe, ob Vakuumierung Material und Route entspricht.",
        "Ein gemischtes Paket mit eingeschränktem Artikel kann Linien verlieren. Preis eine Teilung, speichere Ziel, Quote-Datum, Währung, Steuer-, Versicherungs- und Couponstatus.",
        "Führe jedes Szenario für das konkrete Zielland mit dem aktuellen Rechner aus und prüfe nach der Endverpackung erneut, weil schon kleine Maßänderungen andere Abrechnungsstufen auslösen können."
      ]},
    ],
  }),
  "oopbuy-fees-total-cost": withSources("oopbuy-fees-total-cost", {
    eyebrow: "OOPBuy Gebühren",
    title: "OOPBuy Gebühren erklärt: Gesamtkosten vor dem Kauf kalkulieren",
    description: "Produktpreis, widersprüchliche öffentliche Gebührenangaben, Inlandsversand, Rückgabe, Zahlung und internationale Fracht getrennt berechnen.",
    read: "12 Min. Lesezeit",
    updated: "1. September 2026",
    sections: [
      { heading: "Mit dem Widerspruch in den Gebührenangaben beginnen", paragraphs: [
        "Die am 1. September 2026 geprüften öffentlichen OOPBuy-Angaben ergeben keine einheitliche Gebührenregel. Die Vereinbarung beschreibt 8 % der Versandkosten, Service & Fees nennt außerhalb der aufgeführten Kostenarten keine weiteren Gebühren und die aktuelle Google-Play-Beschreibung spricht von keiner Servicegebühr. Daraus darf keine feste Gebühr auf den Warenpreis abgeleitet werden.",
        "Trenne diese Gebühr von Zahlungsanbieter, Verkäuferlieferung, Lageroptionen und internationaler Fracht. Eine einzige Prozentzahl für alle Kosten ist irreführend.",
        "Notiere CNY-Quellpreis, genaue Option und Checkout-Betrag. Unterschiede können aus Inlandsversand, Service, Umrechnung oder Variantenpreis entstehen."
      ]},
      { heading: "Inlandsversand gehört zur Produktstufe", paragraphs: [
        "Viele Verkäufer berechnen Lieferung zum OOPBuy-Lager separat. Sie ist nicht die internationale Versandgebühr und kann je Angebot unterschiedlich sein.",
        "Vergleiche Verkäufer anhand von Produktpreis, Inlandsversand und aktueller Agent-Gebühr. Der niedrigste Listenpreis muss nicht zum günstigsten Lagerpreis führen.",
        "Speichere Inlandsfracht als eigene Position, damit spätere Kostenanalyse sie nicht mit internationalem Versand verwechselt."
      ]},
      { heading: "Zahlungsmethode und Wechselkurs verändern den Effektivpreis", paragraphs: [
        "OOPBuys PayPal-Hinweis nennt USD-Umrechnung und verweist auf Wechselkursanpassungen. Kartenanbieter können zusätzlich eigene Fremdwährungs- oder Auslandskosten berechnen.",
        "Vergleiche Plattformguthaben mit dem Betrag, der tatsächlich vom Zahlungsweg abgebucht wird. Vermische CNY, USD-Guthaben und Bankkurse nicht ohne Kennzeichnung.",
        "Veröffentliche keine dauerhaft beste Zahlungsmethode. Verfügbarkeit und Gebühren unterscheiden sich nach Land, Konto und aktuellem Anbieter."
      ]},
      { heading: "Rückgabe und Umtausch können Kosten hinzufügen", paragraphs: [
        "OOPBuy nennt bei kundenverursachter Rückgabe Versand zum Verkäufer, Rückversand und 5 CNY Service; beim Umtausch kommen zweite Verkäuferlieferung und 5 CNY hinzu.",
        "Für Standardanträge wird eine Fünf-Tage-Frist nach Lagereingang veröffentlicht. Langsames QC kann deshalb verfügbare Optionen und Kosten verschlechtern.",
        "Plane eine kleine QC-Reserve und prüfe vor internationalem Versand sorgfältig. Spätere Rücksendung aus dem Zielland kann unpraktisch oder unwirtschaftlich sein."
      ]},
      { heading: "Internationale Fracht ist eine separate Zahlung", paragraphs: [
        "Die offizielle Anleitung trennt Warenkauf und Paketversand. Der Rechner benötigt Ziel und Paketdaten; identische Produkte können je Kunde andere Frachtoptionen haben.",
        "Gewicht, Maße, Verpackung, Konsolidierung, Einschränkungen, Versicherung und Route beeinflussen die Quote. Temporäre Coupons gehören nicht in dauerhafte Grundpreise.",
        "Steuern und Zoll separat behandeln, sofern eine Linie nichts anderes ausweist. Keine seriöse Anleitung verspricht generell steuer- oder beschlagnahmefreien Versand."
      ]},
      { heading: "Eine vollständige OOPBuy-Kostenformel", paragraphs: [
        "Produktpreis plus Inlandsfracht plus aktuelle Agent-Gebühr plus Zahlungsumrechnung plus optionale Lagerleistungen plus ausgelöste Rückgabe plus Fracht, Versicherung und mögliche Zielkosten.",
        "Trenne bestätigte und geschätzte Werte. Checkout und Lagerdaten sind stärker als Vorausversand und mögliche Zollkosten. Ersetze Schätzungen später, statt doppelt zu zählen.",
        "Vergleiche Gesamtkosten pro brauchbarem Artikel. Fehlgeschlagenes QC, Umtausch oder viel Volumen können einen scheinbar billigen Einkauf verschlechtern."
      ]},
      { heading: "Zwei OOPBuy-Bestellungen fair vergleichen", paragraphs: [
        "Nutze dieselbe Währung und Kostengrenze: Lagerkosten, Paketkosten oder gelieferte Kosten. Ein reiner Produktpreis ist nicht mit einem vollständigen Endbetrag vergleichbar.",
        "Trenne feste und variable Kosten. Gemeinsame Fracht kann nach Gewicht, Volumenbeitrag oder Warenwert verteilt werden; die Methode muss offengelegt werden.",
        "Datiere Quotes und Coupons, speichere Rückerstattungen als Korrektur und kennzeichne das Vertrauen in jede Zahl. Die widersprüchlichen Gebührenangaben, 5 CNY und Routenpreise sind datierte Referenzen, keine ewigen Garantien.",
        "Bewahre Screenshots von Checkout und finalem Versandangebot auf, damit spätere Abweichungen anhand konkreter Belege statt aus der Erinnerung erklärt werden können.",
        "Aktualisiere das Arbeitsblatt bei Änderungen an Richtlinien oder Linien. Ein alter Vergleich bleibt als Verlauf nützlich, darf aber nicht als aktueller Preis erscheinen.",
        "Vergleiche am Ende den Betrag pro tatsächlich brauchbarem Artikel und halte fest, ob Steuern, Versicherung oder Aktionsrabatte bereits enthalten sind."
      ]},
    ],
  }),
  "is-oopbuy-legit-review": withSources("is-oopbuy-legit-review", {
    eyebrow: "OOPBuy Bewertung 2026",
    title: "Ist OOPBuy seriös? Workflow, Beschwerden und Belege im Test 2026",
    description: "Verifizierbare Plattformfunktionen, aktuelle Trustpilot-Warnung und nicht verifizierte Nutzerberichte sauber voneinander trennen.",
    read: "14 Min. Lesezeit",
    updated: "1. September 2026",
    sections: [
      { heading: "Was seriös in einer OOPBuy-Bewertung bedeuten sollte", paragraphs: [
        "Die Frage umfasst mehrere Punkte: Existiert ein funktionierender Einkaufsagent, werden Waren eingelagert, gibt es QC, können Pakete versendet und Probleme gelöst werden?",
        "Offizielle Anleitungen und Vereinbarungen belegen einen beschriebenen Ablauf, aber nicht die Echtheit jedes Produkts, jede Zustellung oder gleichbleibend guten Support.",
        "Nutze offizielle Quellen für Regeln, Live-Konto für Preise und unabhängige Berichte für wiederkehrende Themen. Einzelgeschichten bleiben selbst ausgewählte, unbestätigte Erfahrungen."
      ]},
      { heading: "Was der offizielle OOPBuy-Ablauf anbietet", paragraphs: [
        "Die Anleitung beschreibt Produktlink, Kauf, Lagereingang, QC, Lagerung und Paketeinreichung. Die Schutzseite nennt Inspektion und 90 Tage kostenlose Lagerung.",
        "Rückgaben sollen standardmäßig innerhalb von fünf Tagen nach Einlagerung beantragt werden; bei den Gebühren widersprechen sich die aktuell veröffentlichten Quellen und müssen auf Vertrag-, Checkout- und Supportebene geklärt werden.",
        "Auch Grenzen sind veröffentlicht: eingeschränkte Inhalte, keine Zollgarantie und linienabhängige Entschädigung. Eine faire Bewertung muss Vorteile und Grenzen nennen."
      ]},
      { heading: "Trustpilot zeigt aktuell eine wichtige Warnung", paragraphs: [
        "Am 1. September 2026 zeigte Trustpilot 906 Bewertungen, aber keine verfügbare Gesamtnote wegen eines Richtlinienverstoßes. Zudem seien gefälschte Bewertungen entfernt worden.",
        "Die Verteilung zeigte 75 % Fünf-Sterne und 17 % Ein-Stern. Positive Berichte nannten Lieferung und Support, negative hohe Kosten, Verzögerungen und QC-Probleme.",
        "Diese Aussagen sind Kundenerfahrungen, keine Beweise für jede Bestellung. Weder ein alter Vier-Sterne-Wert noch ein einzelner Scam-Vorwurf ist eine faire Gesamtaussage."
      ]},
      { heading: "Was Reddit-Erfahrungen ergänzen – und nicht beweisen", paragraphs: [
        "Ein detaillierter Bericht von 2024 nannte einfache Bedienung, wechselnde QC-Qualität, langsamen Websupport, Versandkorrektur und 24 Tage Lieferzeit, insgesamt aber Wiederverwendungsbereitschaft.",
        "Neuere Threads berichten auch von langen Wartezeiten, langsamen Antworten und teurem Versand; andere Kommentierende nennen schnellere Ergebnisse.",
        "Solche Posts liefern Prüffragen, aber keine Statistik. Datum, Ziel, Linie, Empfehlungscode und fehlende Details beeinflussen ihre Aussagekraft."
      ]},
      { heading: "Praktische Risiken selbst reduzieren", paragraphs: [
        "Live-Angebot, Option, Größenangaben, Preis und Inlandsversand prüfen. Artikel-ID und Verkäuferbelege speichern; ein Spreadsheet garantiert keine zukünftige Qualität.",
        "QC zeitnah und systematisch prüfen. Identität, sichtbaren Zustand und Maße während der veröffentlichten Fünf-Tage-Frist bewerten und fehlende Belege anfordern.",
        "Versand vorab schätzen, nach Lagergewicht neu rechnen und erst mit finalen Maßen zahlen. Budgetreserve, Einschränkungen und Entschädigungsbedingungen berücksichtigen."
      ]},
      { heading: "Fazit: Belege statt Reputationsabkürzungen", paragraphs: [
        "OOPBuy dokumentiert Einkaufsagent, Lager, QC, Paket und After-Sales. Das spricht für einen realen Dienst, beweist aber nicht jede Leistungsbehauptung.",
        "Die Trustpilot-Warnung und entfernten Fake-Bewertungen verhindern eine einfache Sterneempfehlung. Klein anfangen, wenig Guthaben halten und alle Quotes und Bedingungen speichern.",
        "Die ehrliche Antwort ist bedingt: Der Ablauf existiert, doch Ergebnis hängt von Verkäufer, erhaltenem Artikel, QC, Linie und Problemlösung ab."
      ]},
      { heading: "Wie diese Bewertung widersprüchliche Belege gewichtet", paragraphs: [
        "Offizielle Dokumente haben Vorrang für Gebühren, Fristen und Regeln, aber weniger Gewicht für Eigenwerbung wie schnellster Versand. Live-Screens schlagen alte Anleitungen.",
        "Drittbewertungen werden nach Themen gruppiert, nicht zu einer neuen Note verrechnet. Referral-Codes, Anreize, gelöschte Konten und fehlende Bestelldaten senken Vertrauen.",
        "Eigene Testbestellung liefert kontospezifische Daten. Kauf-, Lager-, QC-, Quote-, Versand-, Zustell- und Supportzeiten dokumentieren und die Bewertung bei Regeländerungen aktualisieren.",
        "Wer diese Belege veröffentlicht, sollte Ziel, Route, Datum und mögliche Anreize offenlegen, damit Leser die Erfahrung einordnen können, ohne sie als allgemeine Erfolgsquote misszuverstehen."
      ]},
    ],
  }),
};
