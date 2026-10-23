export const siteOrigin=process.env.SITE_ORIGIN||'https://cssbuyhome-preview.hehaize88.chatgpt.site';
export const indexable=process.env.SITE_INDEXABLE==='true';
export const registerUrl='https://www.cssbuy.com/index';
export const locales={en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',ro:'Română',sv:'Svenska',nl:'Nederlands',da:'Dansk',fi:'Suomi',el:'Ελληνικά',cs:'Čeština',hu:'Magyar',bg:'Български',sk:'Slovenčina',hr:'Hrvatski',sl:'Slovenščina',lt:'Lietuvių',lv:'Latviešu',et:'Eesti',ga:'Gaeilge',mt:'Malti'};
export const localePath=(locale,path='')=>(locale==='en'?'/':`/${locale}/`)+path;
export const categories=['all','shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey'];
