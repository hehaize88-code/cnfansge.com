import { articleCards, articleSlugs, categories, products, type Language, ui } from "../site-content";
import { SiteFooter, SiteHeader } from "./SiteHeader";

const categoryLabels: Record<Language, string[]> = {
  en: ["Shoes", "Hoodies", "Jackets", "Jerseys", "Accessories", "Electronics"],
  de: ["Schuhe", "Hoodies", "Jacken", "Trikots", "Accessoires", "Elektronik"],
  es: ["Calzado", "Sudaderas", "Chaquetas", "Camisetas", "Accesorios", "Electrónica"],
  fr: ["Chaussures", "Sweats", "Vestes", "Maillots", "Accessoires", "Électronique"],
  it: ["Scarpe", "Felpe", "Giacche", "Maglie", "Accessori", "Elettronica"],
};
const categoryNotes:Record<Language,string[]>={en:["shape · sole · sizing","fit · fabric · weight","lining · hardware · volume","size · print · variant","scale · finish · details","spec · plug · restrictions"],de:["Form · Sohle · Größe","Passform · Stoff · Gewicht","Futter · Hardware · Volumen","Größe · Druck · Variante","Maßstab · Finish · Details","Daten · Stecker · Grenzen"],es:["forma · suela · talla","ajuste · tejido · peso","forro · cierres · volumen","talla · impresión · variante","escala · acabado · detalles","datos · enchufe · límites"],fr:["forme · semelle · taille","coupe · tissu · poids","doublure · matériel · volume","taille · impression · variante","échelle · finition · détails","fiche · prise · limites"],it:["forma · suola · taglia","vestibilità · tessuto · peso","fodera · hardware · volume","taglia · stampa · variante","scala · finitura · dettagli","dati · spina · limiti"]};
const fixed:Record<Language,string[]>={en:["FIELD CARD / 001","KEEP OR REMOVE?","dimensional kg","PACKING NOTE / BEFORE PARCEL","Full guide","Detailed shipping guide","Read full article","Full FAQ"],de:["PRÜFKARTE / 001","BEHALTEN ODER ENTFERNEN?","Volumengewicht kg","PACKHINWEIS / VOR DEM PAKET","Vollständiger Leitfaden","Ausführlicher Versandratgeber","Artikel lesen","Alle FAQ"],es:["FICHA / 001","¿CONSERVAR O ELIMINAR?","kg volumétricos","NOTA / ANTES DEL PAQUETE","Guía completa","Guía detallada de envío","Leer artículo","FAQ completa"],fr:["FICHE / 001","GARDER OU RETIRER ?","kg volumétriques","NOTE / AVANT LE COLIS","Guide complet","Guide livraison détaillé","Lire l’article","FAQ complète"],it:["SCHEDA / 001","CONSERVARE O RIMUOVERE?","kg volumetrici","NOTA / PRIMA DEL PACCO","Guida completa","Guida spedizione dettagliata","Leggi articolo","FAQ completa"]};

export function HomePage({ lang }: { lang: Language }) {
  const t = ui[lang];
  const cards = articleCards[lang];
  const evidenceLink={en:"Review the on-site product evidence table",de:"Produkt-Nachweistabelle auf dieser Website prüfen",es:"Revisar la tabla de pruebas de producto del sitio",fr:"Consulter le tableau de preuves produit du site",it:"Consulta la tabella delle prove prodotto del sito"}[lang];
  const tagMap:Record<string,Record<Language,string>>={Latest:{en:"Latest",de:"Neu",es:"Nuevo",fr:"Nouveau",it:"Nuovo"},Popular:{en:"Popular",de:"Beliebt",es:"Popular",fr:"Populaire",it:"Popolare"},"New route":{en:"New route",de:"Neue Route",es:"Ruta nueva",fr:"Nouveau lien",it:"Nuova rotta"},Value:{en:"Value",de:"Preiswert",es:"Valor",fr:"Bon prix",it:"Conveniente"}};
  return <main className="home-page">
    <SiteHeader lang={lang} />

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span>{t.edition}</span>{t.eyebrow}</div>
        <h1>{t.hero[0]} <em>{t.hero[1]}</em> {t.hero[2]}</h1>
        <p className="hero-lead">{t.lead}</p>
        <form className="search-panel" action="https://cnfansge.com/search.html" method="get" target="_blank">
          <label htmlFor={`search-${lang}`}>{t.searchLabel}</label>
          <div className="search-row"><input id={`search-${lang}`} name="keywords" placeholder={t.searchPlaceholder} required /><input type="hidden" name="channelid" value="2" /><input type="hidden" name="method" value="1" /><button type="submit">{t.searchButton} <span>↗</span></button></div>
          <small>{t.searchNote}</small>
        </form>
        <div className="hero-proof">{t.board.map((item: string, i: number) => <span key={item}><b>0{i+1}</b>{item}</span>)}</div>
      </div>
      <aside className="hero-showcase" aria-label="Featured finds">
        <a className="showcase-card showcase-main" href={products[0].href} target="_blank" rel="noopener noreferrer"><img src={products[0].image} alt={products[0].name} width="560" height="560" fetchPriority="high" decoding="async" /><span>{tagMap[products[0].tag][lang]}</span><div><b>{products[0].name}</b><strong>{products[0].price}</strong></div></a>
        <a className="showcase-card showcase-small first" href={products[1].href} target="_blank" rel="noopener noreferrer"><img src={products[1].image} alt={products[1].name} width="260" height="260" loading="lazy" decoding="async" /><b>{products[1].name}</b></a>
        <a className="showcase-card showcase-small second" href={products[2].href} target="_blank" rel="noopener noreferrer"><img src={products[2].image} alt={products[2].name} width="260" height="260" loading="lazy" decoding="async" /><b>{products[2].name}</b></a>
        <a className="qc-orbit" href={`/${lang}/qc`}><b>QC</b><span>{t.check}</span><i>→</i></a>
      </aside>
    </section>

    <section className="category-wrap"><div className="category-strip shell" aria-label="Product categories">{categories.map((category, i) => <a key={category.name} className={`category ${category.tone}`} href={category.href} target="_blank" rel="noopener noreferrer"><span className="category-number">0{i+1}</span><div><b>{categoryLabels[lang][i]}</b><span>{categoryNotes[lang][i]}</span></div><i>↗</i></a>)}</div></section>

    <section className="finds section shell">
      <div className="section-heading"><div><span className="kicker">{t.findsKicker}</span><h2>{t.findsTitle}</h2></div><a href="https://cnfansge.com/AllProducts/" target="_blank" rel="noopener noreferrer">{t.browse} <span>↗</span></a></div>
      <div className="product-grid">{products.map((product) => <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} width="480" height="480" loading="lazy" decoding="async" /><span>{tagMap[product.tag][lang]}</span></div><div className="product-data"><div><h3>{product.name}</h3><i>{t.inspect}</i></div><b>{product.price}</b></div></a>)}</div>
      <p className="price-note">{t.priceNote}</p><a className="internal-sheet-link" href={`/${lang}/spreadsheet`}>{evidenceLink} →</a>
    </section>

    <section className="service-section"><div className="service-grid shell">
      <div className="guide-panel">
        <div className="guide-intro"><span className="kicker">{t.workflowKicker}</span><h2>{t.workflowTitle}</h2><p>{t.workflowLead}</p><a className="plain-link" href={`/${lang}/guide`}>{fixed[lang][4]} →</a></div>
        <div className="check-grid">{t.checks.map((item: string[], i: number) => <article key={item[0]}><b>0{i+1}</b><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
      </div>
      <div className="shipping-stack">
        <div className="formula-card"><span className="kicker">{t.shippingKicker}</span><h2>{t.shippingTitle}</h2><p>{t.shippingText}</p><div className="formula"><span>L × W × H</span><i>÷</i><strong>6000</strong><small>= {fixed[lang][2]}</small></div><a href="https://www.lovegobuy.com/shipping/estimation/index" target="_blank" rel="noopener noreferrer">{t.estimator} ↗</a></div>
        <div className="shipping-notes"><div className="route-label">{fixed[lang][3]}</div><h3>{t.estimateTitle}</h3><ol>{t.estimateSteps.map((step: string, i: number) => <li key={step}><b>0{i+1}</b>{step}</li>)}</ol><a className="plain-link" href={`/${lang}/shipping`}>{fixed[lang][5]} →</a></div>
      </div>
    </div></section>

    <section className="articles section shell">
      <div className="section-heading"><div><span className="kicker">{t.articlesKicker}</span><h2>{t.articlesTitle}</h2></div><a href={`/${lang}/articles`}>{t.nav[3]} →</a></div>
      <div className="article-grid">{cards.map((card: string[], i: number) => <article className={`article-card ${i===0?"featured":""}`} key={card[1]}><span>{card[0]}</span><h3>{card[1]}</h3><p>{card[2]}</p><a href={`/${lang}/articles/${articleSlugs[i]}`}>{fixed[lang][6]} →</a></article>)}</div>
    </section>

    <section className="faq section shell"><div className="faq-intro"><span className="kicker">{t.faqKicker}</span><h2>{t.faqTitle}</h2><p>{t.faqIntro}</p><a className="plain-link" href={`/${lang}/faq`}>{fixed[lang][7]} →</a></div><div className="faq-list">{t.faqs.map((faq: string[], i: number) => <details key={faq[0]} open={i===0}><summary>{faq[0]}<span>{i===0?"−":"+"}</span></summary><p>{faq[1]}</p></details>)}</div></section>
    <SiteFooter lang={lang} />
  </main>;
}
