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
 const loadedModule={exports:{}};cache.set(file,loadedModule.exports);
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
 const localRequire=id=>{
  if(id==='next/link')return {__esModule:true,default:({children,...props})=>React.createElement('a',props,children)};
  if(id==='next/navigation')return {notFound(){throw NOT_FOUND;},permanentRedirect(url){throw {redirect:url};}};
  if(id.startsWith('.'))return load(path.resolve(path.dirname(file),id));
  return require(id);
 };
 new Function('require','module','exports',code)(localRequire,loadedModule,loadedModule.exports);cache.set(file,loadedModule.exports);return loadedModule.exports;
}
const {localeCodes,localPath,pagePaths}=load('app/site-data.ts');
const {getArticle,articleKeys}=load('app/article-registry.ts');
const {SiteView}=load('app/site-view.tsx');
const catalog={products:Array.from({length:20},(_,i)=>({id:String(i),name:'Fixture '+i,href:'https://www.cnfansge.com/AllProducts/'+i+'.html',image:null,cny:100})),page:1,category:'all',next:true,unavailable:false};
const route=load('app/[[...segments]]/page.tsx');
const sitemap=load('app/sitemap.ts').default();
assert.equal(sitemap.length,130);assert.equal(new Set(sitemap.map(s=>s.url)).size,130);
const pages=new Map();const metadataTitles=new Set();
for(const locale of localeCodes){
 assert.equal(articleKeys.length,18);
 for(const page of Object.keys(pagePaths)){
  const p=localPath(locale,page);const url='https://kakobuyvip.org'+p;
  const metadata=await route.generateMetadata({params:Promise.resolve({segments:p.split('/').filter(Boolean)})});
  assert.equal(metadata.alternates.canonical,url);
  assert.equal(Object.keys(metadata.alternates.languages).length,6);
  assert.equal(metadata.robots.index,true);
  for(const code of localeCodes)assert.equal(metadata.alternates.languages[code],'https://kakobuyvip.org'+localPath(code,page));
  assert.ok(metadata.description.length>30);assert.ok(!metadataTitles.has(metadata.title),metadata.title+' duplicate title');metadataTitles.add(metadata.title);
  const html=renderToStaticMarkup(React.createElement(SiteView,{locale,page,catalog}));pages.set(url,html);
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,url+' H1');
  for(const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(m[1]);
  if(page.endsWith('Article')){
   const a=getArticle(locale,page);assert.ok(a.sections.length>=7);assert.ok(html.includes('article-toc'));assert.ok(html.includes('related-guides'));
   for(const m of html.matchAll(/href="#(section-\d+)"/g))assert.ok(html.includes(`id="${m[1]}"`),url+' TOC');
  }
  if(page==='spreadsheet'||page==='finds'){assert.equal((html.match(/class="product-card"/g)||[]).length,20);assert.ok(html.includes('page=2'));}
  if(page==='articles')assert.equal((html.match(/<h2>/g)||[]).length,18);
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
for(const locale of localeCodes){const p=localPath(locale,'spreadsheet');const meta=await route.generateMetadata({params:Promise.resolve({segments:p.split('/').filter(Boolean)}),searchParams:Promise.resolve({page:'2'})});assert.equal(meta.robots.index,false);assert.equal(meta.alternates.canonical,'https://kakobuyvip.org'+p);}
const {calculateWeight}=load('app/weight-calculation.ts');
assert.deepEqual(calculateWeight(3,40,30,25,6000),{volumetric:5,comparison:5});
assert.deepEqual(calculateWeight(3,40,30,15,6000),{volumetric:3,comparison:3});
assert.equal(calculateWeight(3,40,30,25,0),null);assert.equal(calculateWeight(-1,40,30,25,6000),null);assert.equal(calculateWeight(3,Infinity,30,25,6000),null);
for(const lang of localeCodes){const content=JSON.parse(fs.readFileSync(`app/content/${lang}.json`));assert.equal(Object.keys(content).length,4);for(const a of Object.values(content)){assert.equal(a.sections.length>=8,true);assert.ok(a.sections.flatMap(s=>s[1]).join(' ').split(/\s+/).length>=700);}}
for(const locale of localeCodes){for(const key of ['germanyArticle','sizeArticle','consolidationArticle']){const a=getArticle(locale,key);assert.ok(a.sections.flatMap(s=>s[1]).join(' ').split(/\s+/).length>900);if(locale==='en')assert.ok(a.sections.flatMap(s=>s[1]).join(' ').split(/\s+/).length>=1200);}}
console.log(JSON.stringify({result:'passed',pages:pages.size,articles:90,newArticlePages:15,languages:5,checks:['offline React rendering','metadata canonicals','hreflang and sitemap parity','unique titles','H1','JSON-LD','TOC anchors','all internal links','unknown routes','calculator valid and invalid inputs'],limits:['No browser or deployed Worker runtime tested']},null,2));
