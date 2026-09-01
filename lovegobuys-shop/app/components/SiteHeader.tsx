import { languageNames, languages, type Language, ui } from "../site-content";

export function SiteHeader({ lang, path = "" }: { lang: Language; path?: string }) {
  const t = ui[lang];
  const openSheet={en:"Open sheet",de:"Tabelle öffnen",es:"Abrir hoja",fr:"Ouvrir la feuille",it:"Apri foglio"}[lang];
  const sheetLabel={en:"Evidence table",de:"Nachweistabelle",es:"Tabla de pruebas",fr:"Tableau de preuves",it:"Tabella prove"}[lang];
  const menu={en:"Menu",de:"Menü",es:"Menú",fr:"Menu",it:"Menu"}[lang];
  return (
    <>
      <div className="ticker"><div className="shell ticker-inner">{t.ticker.map((item: string) => <span key={item}>{item}</span>)}</div></div>
      <header className="site-header">
        <div className="shell header-inner">
        <a className="brand" href={`/${lang}`} aria-label="LoveGoBuy Field Guide home"><img src="/lovegobuy.png" alt="LoveGoBuy" width="200" height="37" /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={`/${lang}/spreadsheet`}>{sheetLabel}</a><a href={`/${lang}/finds`}>{t.nav[0]}</a><a href={`/${lang}/qc`}>{t.nav[1]}</a><a href={`/${lang}/shipping`}>{t.nav[2]}</a><a href={`/${lang}/articles`}>{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <details className="lang-switch"><summary>{t.locale} <b>⌄</b></summary><div>{languages.map((code) => <a className={code === lang ? "active" : ""} key={code} href={`/${code}${path}`}>{languageNames[code]}</a>)}</div></details>
          <details className="mobile-menu"><summary>{menu}</summary><div><a href={`/${lang}/spreadsheet`}>{sheetLabel}</a><a href={`/${lang}/finds`}>{t.nav[0]}</a><a href={`/${lang}/qc`}>{t.nav[1]}</a><a href={`/${lang}/shipping`}>{t.nav[2]}</a><a href={`/${lang}/articles`}>{t.nav[3]}</a></div></details>
          <a className="primary-button compact" href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{openSheet} <span>↗</span></a>
        </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter({ lang }: { lang: Language }) {
  const labels={en:["Home","Product directory"],de:["Startseite","Produktverzeichnis"],es:["Inicio","Directorio de productos"],fr:["Accueil","Annuaire produit"],it:["Home","Directory prodotti"]}[lang];
  return <footer><div className="shell footer-grid"><div className="brand footer-brand"><img src="/lovegobuy.png" alt="LoveGoBuy" width="200" height="37" /></div><p>{ui[lang].footer}</p><div><a href={`/${lang}`}>{labels[0]} ↑</a><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{labels[1]} ↗</a></div></div></footer>;
}
