import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {load} from 'cheerio';
import {publishedLocales,content,ui} from '../src/data/content.mjs';
import {localePath,siteOrigin,indexable,canonicalPath} from '../src/data/config.mjs';
import worker from '../dist/server/index.js';
const origin=indexable?siteOrigin:'https://language-preview.test';
let checked=0;
for(const lang of publishedLocales){
 const data=content(lang),t=ui(lang);
 const routes=['','spreadsheet/','finds/','guide/','shipping/','articles/','faq/','qc/','search/visual/','product/','about/','privacy/',...data.articles.map(a=>'articles/'+a.slug+'/')];
 for(const route of routes){
  const path=localePath(lang,route),html=await readFile('.astro-output'+path+'index.html','utf8'),$=load(html);
  assert.equal($('html').attr('lang'),lang,path);
  assert.equal($('script[data-cssbuy-analytics]').length,0,path+' analytics coverage');
  assert.equal($('meta[name=robots]').attr('content'),indexable?(['product/','search/visual/'].includes(route)?'noindex,follow':'index,follow'):'noindex,nofollow',path+' indexing');
  assert.equal($('#language-switch option').length,publishedLocales.length,path);
  assert.equal($('#language-switch option[selected]').attr('value'),path,path);
  assert.equal($('link[hreflang]').length,publishedLocales.length+1,path);
  for(const other of publishedLocales)assert.ok($(`link[hreflang="${other}"]`).attr('href').endsWith(localePath(other,canonicalPath(route))),path+' '+other);
  assert.equal($('link[hreflang="x-default"]').attr('href').endsWith(localePath('en',canonicalPath(route))),true,path);
  assert.ok(!$('title').text().includes('undefined'),path);
  if(route==='faq/')assert.equal($('details.faq-item').length,28,path);
  if(route==='articles/')assert.equal($('.guide-card').length,10,path);
  if(route.startsWith('articles/')&&route!=='articles/'){
   const article=data.articles.find(a=>route==='articles/'+a.slug+'/');
   assert.equal($('.prose section[id]').length,article.sections.length,path);
   assert.ok($('article').text().includes(article.sections.at(-1).paragraphs.at(-1)),path+' final paragraph');
  }
  if(route&&!['spreadsheet/','finds/','product/'].includes(route)){
   const response=await worker.fetch(new Request(origin+path),{},{}),live=load(await response.text());
   assert.equal(response.status,200,path+' runtime');
   assert.equal(live('body').attr('data-source-rendered'),undefined,path+' editorial must not fetch products');
   assert.equal(live('html').attr('lang'),lang,path+' runtime language');
   assert.equal(live('link[rel=canonical]').attr('href'),origin+localePath(lang,canonicalPath(route)),path+' runtime canonical');
   for(const link of live('link[hreflang]').toArray())assert.ok(live(link).attr('href').startsWith(origin+'/'),path+' runtime alternate');
  }
  checked++;
 }
 // Exercise the actual runtime while the source is unavailable: errors must be
 // translated and keep the same locale rather than reverting to English.
 const savedFetch=globalThis.fetch;
 globalThis.fetch=async()=>new Response('source unavailable',{status:503});
 try{
  for(const route of ['','spreadsheet/?q=Nike&page=4','product/?id=6681']){
   const response=await worker.fetch(new Request(origin+localePath(lang,route)),{},{}),$=load(await response.text());
   assert.equal(response.status,200);
   assert.equal($('html').attr('lang'),lang);
   assert.equal($('body').attr('data-source-rendered'),'true');
   assert.ok($('.error-state').text().includes(route.startsWith('product/')?t.notFound:t.sourceError),JSON.stringify({lang,route,actual:$('.error-state').text(),expected:route.startsWith('product/')?t.notFound:t.sourceError}));
   assert.ok($('link[rel=canonical]').attr('href').startsWith(origin));
  }
 }finally{globalThis.fetch=savedFetch;}
}
if(indexable){
 const robots=await (await worker.fetch(new Request(origin+'/robots.txt'),{},{})).text();
 assert.ok(robots.includes('Sitemap: '+origin+'/sitemap.xml'));
 assert.ok(!robots.includes('Disallow: /\n'));
 const sitemap=await (await worker.fetch(new Request(origin+'/sitemap.xml'),{},{})).text(),xml=load(sitemap,{xmlMode:true});
 assert.equal(xml('loc').length,publishedLocales.length*18);
 for(const loc of xml('loc').toArray()){
  assert.ok(xml(loc).text().startsWith(origin+'/'));
  assert.ok(!/\/(guide|shipping)\/$/.test(new URL(xml(loc).text()).pathname));
 }
 const redirected=await worker.fetch(new Request('https://www.'+new URL(origin).hostname+'/fr/spreadsheet/?q=Nike&page=4'),{},{});
 assert.equal(redirected.status,308);assert.equal(redirected.headers.get('location'),origin+'/fr/spreadsheet/?q=Nike&page=4');
 const preview=await worker.fetch(new Request('https://preview.test/fr/articles/'),{},{});
 assert.equal(preview.headers.get('X-Robots-Tag'),'noindex,nofollow');
 assert.equal(load(await preview.text())('meta[name=robots]').attr('content'),'noindex,nofollow');
}
console.log(JSON.stringify({ok:true,locales:publishedLocales.length,pages:checked,articles:publishedLocales.length*10,faq:publishedLocales.length*28,runtimeErrorLocalization:true}));
