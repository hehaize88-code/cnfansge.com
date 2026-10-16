import type {Metadata} from 'next';
import {origin,localPath,languageAlternates,type Lang} from './routing';
export function pageMetadata(path:string,title:string,description:string,lang:Lang='en',article=false):Metadata{return{title,description,alternates:{canonical:origin+localPath(lang,path),languages:languageAlternates(path)},openGraph:{title,description,url:origin+localPath(lang,path),type:article?'article':'website',locale:{en:'en_US',de:'de_DE',fr:'fr_FR',es:'es_ES',it:'it_IT'}[lang]},twitter:{card:'summary',title,description}};}
