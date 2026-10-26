import fs from 'node:fs';
import nodePath from 'node:path';
export const locales=[['en','English'],['de','Deutsch'],['es','Español'],['fr','Français'],['it','Italiano']];
export const sections=['spreadsheet','finds','qc','guide','shipping','faq','articles'];
export const origin=process.env.SITE_ORIGIN||'https://usfansbuys.com';
export const preview=process.env.PREVIEW==='true';
export const localPath=(lang,path='')=>`${lang==='en'?'':'/'+lang}/${path?path.replace(/^\/+|\/+$/g,'')+'/':''}`;
export function getContent(lang){return JSON.parse(fs.readFileSync(nodePath.join(process.cwd(),'src/data',lang+'.json'),'utf8'));}
export function availableLocales(){return locales.filter(([lang])=>fs.existsSync(nodePath.join(process.cwd(),'src/data',lang+'.json')));}
