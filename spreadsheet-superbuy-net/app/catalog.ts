import enUI from './content/ui-en.json';
import deUI from './content/ui-de.json';
import frUI from './content/ui-fr.json';
import esUI from './content/ui-es.json';
import itUI from './content/ui-it.json';
import enLegacy from './content/legacy-en.json';
import deLegacy from './content/legacy-de.json';
import frLegacy from './content/legacy-fr.json';
import esLegacy from './content/legacy-es.json';
import itLegacy from './content/legacy-it.json';
import enGuides from './content/guides-en.json';
import deGuides from './content/guides-de.json';
import frGuides from './content/guides-fr.json';
import esGuides from './content/guides-es.json';
import itGuides from './content/guides-it.json';
import type {Lang} from './routing';
export type Section={heading:string;paragraphs:string[];bullets?:string[]};
export type Article={slug:string;title:string;description:string;category:string;sections:Section[];published:string;modified:string};
export const newSlugs=['superbuy-working-days','superbuy-payment-withdrawal','superbuy-returns-refunds'];
export const slugs=[...newSlugs,...enLegacy.rows.map(r=>r[0])];
const ui:Record<Lang,any>={en:enUI,de:deUI,fr:frUI,es:esUI,it:itUI};
const guides:Record<Lang,Record<string,any>>={en:enGuides,de:deGuides,fr:frGuides,es:esGuides,it:itGuides};
const legacy:Record<Lang,Record<string,Section[]>>={en:enLegacy.articles,de:deLegacy.articles,fr:frLegacy.articles,es:esLegacy.articles,it:itLegacy.articles};
export function getArticle(lang:Lang,slug:string):Article {const entry=guides[lang][slug];if(entry)return {...entry,published:newSlugs.includes(slug)?'2026-10-16':'2026-09-14',modified:'2026-10-16'};const row=(lang==='en'?enLegacy.rows:ui[lang].articlesRows).find((r:string[])=>r[0]===slug);const sections=legacy[lang][slug];if(!row||!sections)throw new Error(`Missing complete translation: ${lang}/${slug}`);return{slug,title:row[1],description:row[2],category:row[3],sections,published:'2026-09-14',modified:'2026-10-16'};}
export function getRows(lang:Lang){return slugs.map(slug=>{const a=getArticle(lang,slug);return [a.slug,a.title,a.description,a.category]});}
export function getUI(lang:Lang){return {...ui[lang],articlesRows:getRows(lang)};}
