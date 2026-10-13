import type { Article } from './article-data';
import type { Locale } from './site-data';
import en from './content/en.json';
import de from './content/de.json';
import es from './content/es.json';
import fr from './content/fr.json';
import it from './content/it.json';
export type PracticalArticleKey='qcPhotosArticle'|'feesArticle'|'linksArticle'|'trackingArticle';
const translations={en,de,es,fr,it};
const labels:Record<Locale,[string,string]>={en:['min read','Editorial update: 13 October 2026'],de:['Min. Lesezeit','Redaktionell aktualisiert: 13. Oktober 2026'],es:['min de lectura','Actualización editorial: 13 de octubre de 2026'],fr:['min de lecture','Mise à jour éditoriale : 13 octobre 2026'],it:['min di lettura','Aggiornamento editoriale: 13 ottobre 2026']};
const sourceLabels:Record<Locale,[string,string,string]>={en:['Kakobuy Help Center — ordering and warehouse inspection','Kakobuy freight estimator — current route inputs','Kakobuy Help Center — parcel estimates and packed weight'],de:['Kakobuy-Hilfe — Bestellung und Lagerprüfung','Kakobuy-Versandrechner — aktuelle Routenparameter','Kakobuy-Hilfe — Paketschätzung und Packgewicht'],es:['Ayuda Kakobuy — pedidos e inspección en almacén','Estimador Kakobuy — datos de rutas vigentes','Ayuda Kakobuy — estimaciones y peso embalado'],fr:['Aide Kakobuy — commande et inspection en entrepôt','Estimateur Kakobuy — paramètres actuels des lignes','Aide Kakobuy — estimation et poids emballé'],it:['Assistenza Kakobuy — ordini e ispezione in magazzino','Preventivo Kakobuy — parametri attuali delle rotte','Assistenza Kakobuy — stime e peso imballato']};
export const practicalArticleData=Object.fromEntries(Object.entries(translations).map(([language,entries])=>{
 const locale=language as Locale;
 return [locale,Object.fromEntries(Object.entries(entries).map(([key,a])=>{
  const words=a.sections.flatMap(s=>s[1]).join(' ').split(/\s+/).length;
  return [key,{...a,read:`${Math.ceil(words/190)} ${labels[locale][0]}`,reviewed:labels[locale][1],sources:[{label:sourceLabels[locale][0],url:'https://www.kakobuy.com/service/help'},{label:sourceLabels[locale][1],url:'https://kakobuy.com/tools/estimate'},{label:sourceLabels[locale][2],url:'https://kakobuy.com/service/help/question?cid=35&id=84'}]}];
 }))];
})) as Record<Locale,Record<PracticalArticleKey,Article>>;
