import fs from 'node:fs';
export const allLocales={en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',ro:'Română',sv:'Svenska',nl:'Nederlands',da:'Dansk',fi:'Suomi',el:'Ελληνικά',cs:'Čeština',hu:'Magyar',bg:'Български',sk:'Slovenčina',hr:'Hrvatski',sl:'Slovenščina',lt:'Lietuvių',lv:'Latviešu',et:'Eesti',ga:'Gaeilge',mt:'Malti'};
export const prefix=lang=>lang==='en'?'':`/${lang}`;
export const paths=['','spreadsheet','finds','guide','qc','shipping','faq','articles','product','search/visual','about'];

// Publish only complete translations; the strict release check requires all24.
export const locales=Object.fromEntries(Object.entries(allLocales).filter(([lang])=>{try{const d=JSON.parse(fs.readFileSync('./src/data/content/'+lang+'.json','utf8'));return d.articles.length===13&&d.faqs.length===28}catch{return false}}));
