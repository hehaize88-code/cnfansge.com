/** Offline checks only: no preview server, runtime, browser or network. */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const ts=require('typescript');const React=require('react');const{renderToStaticMarkup}=require('react-dom/server');
const cache=new Map();
const NOT_FOUND=Symbol('not-found');
function load(file){
 file=path.resolve(file);
 if(!path.extname(file))file=['.ts','.tsx','.json'].map(e=>file+e).find(fs.existsSync);
 if(file.endsWith('.json'))return JSON.parse(fs.readFileSync(file,'utf8'));
 if(cache.has(file))return cache.get(file);
 const module={exports:{}};cache.set(file,module.exports);
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
 const localRequire=id=>{
  if(id==='next/link')return {__esModule:true,default:({children,...props})=>React.createElement('a',props,children)};
  if(id==='next/navigation')return {notFound(){throw NOT_FOUND;},permanentRedirect(url){throw {redirect:url};}};
  if(id.startsWith('.'))return load(path.resolve(path.dirname(file),id));
  return require(id);
 };
 new Function('require','module','exports',code)(localRequire,module,module.exports);cache.set(file,module.exports);return module.exports;
}
const {localeCodes,localPath,pagePaths}=load('app/site-data.ts');
const {getArticle,articleKeys}=load('app/article-registry.ts');
const {SiteView}=load('app/site-view.tsx');
const route=load('app/[[...segments]]/page.tsx');
const sitemap=load('app/sitemap.ts').default();
assert.equal(sitemap.length,115);assert.equal(new Set(sitemap.map(s=>s.url)).size,115);
const pages=new Map();const metadataTitles=new Set();
for(const locale of localeCodes){
 assert.equal(articleKeys.length,15);
 for(const page of Object.keys(pagePaths)){
  const p=localPath(locale,page);const url='https://kakobuyvip.org'+p;
  const metadata=await route.generateMetadata({params:Promise.resolve({segments:p.split('/').filter(Boolean)})});
  assert.equal(metadata.alternates.canonical,url);
  assert.equal(Object.keys(metadata.alternates.languages).length,6);
  assert.equal(metadata.robots.index,true);
  for(const code of localeCodes)assert.equal(metadata.alternates.languages[code],'https://kakobuyvip.org'+localPath(code,page));
  assert.ok(metadata.description.length>30);assert.ok(!metadataTitles.has(metadata.title),metadata.title+' duplicate title');metadataTitles.add(metadata.title);
  const html=renderToStaticMarkup(React.createElement(SiteView,{locale,page}));pages.set(url,html);
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,url+' H1');
  for(const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(m[1]);
  if(page.endsWith('Article')){
   const a=getArticle(locale,page);assert.ok(a.sections.length>=7);assert.ok(html.includes('article-toc'));assert.ok(html.includes('related-guides'));
   for(const m of html.matchAll(/href="#(section-\d+)"/g))assert.ok(html.includes(`id="${m[1]}"`),url+' TOC');
  }
  if(page==='shipping'){assert.equal((html.match(/type="number"/g)||[]).length,5);assert.ok(html.includes('weight-title'));}
 }
}
for(const[url,html]of pages){
 for(const match of html.matchAll(/<a\b[^>]*href="([^"#]+)"[^>]*>/g)){
  const dest=new URL(match[1].replaceAll('&amp;','&'),url);dest.hash='';dest.search='';
  if(dest.origin==='https://kakobuyvip.org')assert.ok(pages.has(dest.href),url+' -> '+dest.href);
 }
}
for(const s of sitemap){assert.ok(pages.has(s.url));assert.equal(Object.keys(s.alternates.languages).length,6);}
for(const segments of [['missing'],['pl','articles']])await assert.rejects(route.default({params:Promise.resolve({segments})}),e=>e===NOT_FOUND);
await assert.rejects(route.default({params:Promise.resolve({segments:['en','articles']})}),e=>e.redirect==='/articles');
const {calculateWeight}=load('app/weight-calculation.ts');
assert.deepEqual(calculateWeight(3,40,30,25,6000),{volumetric:5,comparison:5});
assert.deepEqual(calculateWeight(3,40,30,15,6000),{volumetric:3,comparison:3});
assert.equal(calculateWeight(3,40,30,25,0),null);assert.equal(calculateWeight(-1,40,30,25,6000),null);assert.equal(calculateWeight(3,Infinity,30,25,6000),null);
for(const lang of localeCodes){const content=JSON.parse(fs.readFileSync(`app/content/${lang}.json`));assert.equal(Object.keys(content).length,4);for(const a of Object.values(content)){assert.equal(a.sections.length,8);assert.ok(a.sections.flatMap(s=>s[1]).join(' ').split(/\s+/).length>=700);}}
console.log(JSON.stringify({result:'passed',pages:pages.size,articles:75,newArticlePages:20,languages:5,checks:['offline React rendering','metadata canonicals','hreflang and sitemap parity','unique titles','H1','JSON-LD','TOC anchors','all internal links','unknown routes','calculator valid and invalid inputs'],limits:['No browser or deployed Worker runtime tested']},null,2));
