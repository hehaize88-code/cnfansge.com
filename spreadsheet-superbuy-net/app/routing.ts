export const languages = ['en','de','fr','es','it'] as const;
export type Lang = typeof languages[number];
export type PageKey = 'home'|'spreadsheet'|'finds'|'guide'|'qc'|'shipping'|'articles'|'faq'|'article';
export const origin='https://spreadsheet-superbuy.net';
export const destination='https://cnfansge.com';
export const pageKeys=['home','spreadsheet','finds','guide','qc','shipping','articles','faq'] as const;
export function localPath(lang:Lang,path:string='/'){const normalized=path==='/'?'/':`/${path.replace(/^\/+|\/+$/g,'')}/`;return `${lang==='en'?'':`/${lang}`}${normalized}`;}
export function routeFor(page:PageKey,slug=''){return page==='home'?'/':page==='article'?`/articles/${slug}/`:`/${page}/`;}
export function languageAlternates(path:string){return Object.fromEntries([...languages.map(l=>[l,origin+localPath(l,path)]),['x-default',origin+localPath('en',path)]]);}
