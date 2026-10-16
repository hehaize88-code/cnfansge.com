import {parse,parseFragment,serialize} from 'parse5';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const origin='https://spreadsheet-hipobuys.net';
const langs=['en','de','fr','es','it'];
const norm=s=>s.replace(/\s+/g,' ').trim();
const id=s=>crypto.createHash('sha256').update(s).digest('hex').slice(0,16);
const corpus=new Set(JSON.parse(fs.readFileSync('content/corpus.json','utf8')).map(x=>x.en));
const dict=Object.fromEntries(langs.filter(l=>l!=='en').map(l=>[l,JSON.parse(fs.readFileSync(`content/${l}.json`,'utf8'))]));
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const set=(n,k,v)=>{n.attrs??=[];const a=n.attrs.find(a=>a.name===k);if(a)a.value=v;else n.attrs.push({name:k,value:v})};
const walk=(n,fn)=>{fn(n);for(const c of [...(n.childNodes||[])])walk(c,fn)};
const remove=n=>{n.parentNode.childNodes=n.parentNode.childNodes.filter(x=>x!==n)};
const append=(n,html)=>{const fragment=parseFragment(html);for(const c of fragment.childNodes){c.parentNode=n;n.childNodes.push(c)}};
const routeFor=(lang,route)=>lang==='en'?route:`/${lang}${route}`;
const unknown=new Set();
function translate(raw,lang){if(lang==='en'||!raw.trim())return raw;const key=norm(raw);if(!corpus.has(key)){
 const allowed=/^(?:[\d\s.,+×÷/:·%$¥€↗→–—()©-]+|kg|cm|USD|CNY|HipoBuy|Hipobuy|HIPOBUY|Hipo Index|HipoBuy Spreadsheet|English|Deutsch|Français|Español|Italiano|EN|DE|FR|ES|IT|Sweatshirts-1|Pants\/Shorts-1|Jersey-\d+|Agencia Tributaria|Zoll|DHL Express|https?:.*)$/i;
 if(/[a-zA-Z]/.test(key)&&!allowed.test(key))unknown.add('Source not in corpus: '+key);
 return raw;
 }const value=dict[lang][id(key)];if(!value){unknown.add(lang+': '+key);return raw}return raw.replace(raw.trim(),value)}
const files=[];function scan(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()&&!e.name.startsWith('_')&&!langs.includes(e.name))scan(p);else if(e.name==='index.html'&&!p.startsWith('out/404/'))files.push(p)}}scan('out');
const routes=files.map(file=>{const d=path.relative('out',path.dirname(file));return {route:d?`/${d}/`:'/',html:fs.readFileSync(file,'utf8')}});
if(routes.some(x=>x.html.includes('name="release"')))throw new Error('Run a fresh Next.js build before localization; do not localize already-published HTML.');
const validPaths=new Set(routes.map(x=>x.route));
const rewrite=(value,lang)=>{
 if(!value)return value;
 let u;try{u=new URL(value,origin)}catch{return value}
 if(u.origin!==origin||!validPaths.has(u.pathname))return value;
 const updated=routeFor(lang,u.pathname)+u.search+u.hash;
 return value.startsWith(origin)?origin+updated:value.startsWith('/')?updated:value;
};
function schemaTranslate(x,lang){if(Array.isArray(x))return x.map(v=>schemaTranslate(v,lang));if(x&&typeof x==='object'){const o={};for(const[k,v]of Object.entries(x)){o[k]=['name','headline','description','text'].includes(k)&&typeof v==='string'?translate(v,lang):['url','item','mainEntityOfPage','@id'].includes(k)&&typeof v==='string'?rewrite(v,lang):schemaTranslate(v,lang)}if(o['@type']==='Article'){o.inLanguage=lang;o.dateModified='2026-10-16'}if(o['@type']==='WebSite')o.inLanguage=lang;return o}return x}
for(const {route,html}of routes){for(const lang of langs){const doc=parse(html);let head,body;walk(doc,n=>{
 if(n.tagName==='html')set(n,'lang',lang);
 if(n.tagName==='link'&&attr(n,'rel')==='alternate'&&attr(n,'hreflang')){remove(n);return}
 if(n.tagName==='meta'&&(attr(n,'name')==='release'||attr(n,'property')==='og:locale')){remove(n);return}
 if(n.tagName==='head')head=n;
 if(n.tagName==='body')body=n;
 if(n.tagName==='script'){
  if(attr(n,'type')==='application/ld+json'){const raw=n.childNodes.map(c=>c.value||'').join('');const value=JSON.stringify(schemaTranslate(JSON.parse(raw),lang)).replaceAll('<','\\u003c');n.childNodes=[{nodeName:'#text',value,parentNode:n}]}
  else remove(n);return;
 }
 if(n.tagName==='link'&&(attr(n,'as')==='script'||attr(n,'rel')==='modulepreload'||attr(n,'rel')==='prefetch')){remove(n);return}
 if(n.nodeName==='#text'&&!['script','style'].includes(n.parentNode?.tagName))n.value=translate(n.value,lang);
 for(const a of n.attrs||[]){if(['alt','title','aria-label','placeholder'].includes(a.name))a.value=translate(a.value,lang);if(a.name==='content'&&n.tagName==='meta'&&/^(description|og:title|og:description|og:image:alt|twitter:title|twitter:description)$/.test(attr(n,'name')||attr(n,'property')||''))a.value=translate(a.value,lang);if(a.name==='href'&&n.tagName==='a')a.value=rewrite(a.value,lang);if(a.name==='content'&&attr(n,'property')==='og:url')a.value=origin+routeFor(lang,route)}
 if(n.tagName==='link'&&attr(n,'rel')==='canonical')set(n,'href',origin+routeFor(lang,route));
 const target=attr(n,'data-language');if(target){set(n,'href',routeFor(target,route));set(n,'aria-current',String(lang===target));set(n,'lang',target)}
 if(n.tagName==='summary'&&attr(n,'class')==='languageButton'){n.childNodes=[{nodeName:'#text',value:lang.toUpperCase(),parentNode:n}]}
 if(n.nodeName==='#comment')remove(n);
 });
 let title='',description='';walk(head,n=>{if(n.tagName==='title')title=n.childNodes.map(c=>c.value||'').join('');if(n.tagName==='meta'&&attr(n,'name')==='description')description=attr(n,'content')});walk(head,n=>{if(n.tagName==='meta'&&['og:title','twitter:title'].includes(attr(n,'property')||attr(n,'name')))set(n,'content',title);if(n.tagName==='meta'&&['og:description','twitter:description'].includes(attr(n,'property')||attr(n,'name')))set(n,'content',description)});
 append(head,langs.map(l=>`<link rel="alternate" hreflang="${l}" href="${origin}${routeFor(l,route)}">`).join('')+`<link rel="alternate" hreflang="x-default" href="${origin}${route}"><meta property="og:locale" content="${({en:'en_US',de:'de_DE',fr:'fr_FR',es:'es_ES',it:'it_IT'})[lang]}"><meta name="release" content="2026-10-16-hipobuys-v1">`);
 append(body,'<script async src="https://www.googletagmanager.com/gtag/js?id=G-D14KS48G0Q"></script><script src="/site.js" defer></script>');
 const destination=path.join('out',routeFor(lang,route),'index.html');fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,'<!DOCTYPE html>'+serialize(doc).replace(/^<!DOCTYPE html>/i,''));
}}
if(unknown.size)throw new Error(`Missing ${unknown.size} translations:\n`+[...unknown].slice(0,25).join('\n'));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${routes.flatMap(({route})=>langs.map(lang=>`<url><loc>${origin}${routeFor(lang,route)}</loc><lastmod>2026-10-16</lastmod>${langs.map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${escape(origin+routeFor(l,route))}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${route}"/></url>`)).join('')}</urlset>`;
fs.writeFileSync('out/sitemap.xml',sitemap);
// The production site is static HTML. Remove React flight payloads so navigation cannot hydrate English over a translated document.
function clean(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()&&!e.name.startsWith('_'))clean(p);else if(e.isFile()&&e.name.endsWith('.txt')&&e.name!=='robots.txt')fs.unlinkSync(p)}}clean('out');
fs.writeFileSync('out/release.json',JSON.stringify({release:'2026-10-16-hipobuys-v1',languages:langs,pages:routes.length*langs.length,articlesPerLanguage:routes.filter(x=>/^\/articles\/.+\/$/.test(x.route)).length}));
console.log(`Localized ${routes.length} routes × ${langs.length} languages = ${routes.length*langs.length} indexable pages.`);
