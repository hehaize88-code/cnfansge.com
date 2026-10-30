import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {load} from 'cheerio';
import {publishedLocales,content,ui} from '../src/data/content.mjs';
import {localePath,siteOrigin,indexable,canonicalPath} from '../src/data/config.mjs';
import {indexedCategories} from '../src/data/navigation.mjs';
import worker from '../dist/server/index.js';
const origin=indexable?siteOrigin:'https://language-preview.test';
let checked=0;
for(const lang of publishedLocales){
 const data=content(lang),t=ui(lang);
 const routes=['','spreadsheet/','finds/','guide/','shipping/','articles/','faq/','qc/','search/visual/','product/','about/','privacy/',...indexedCategories.map(c=>'spreadsheet/'+c+'/'),...data.articles.map(a=>'articles/'+a.slug+'/')];
 for(const route of routes){
  const path=localePath(lang,route),html=await readFile('.astro-output'+path+'index.html','utf8'),$=load(html);
  assert.equal($('html').attr('lang'),lang,path);
  assert.equal($('script[data-cssbuy-analytics]').length,indexable?2:0,path+' analytics coverage');
  if(indexable)assert.equal($('script[data-cssbuy-analytics][src]').attr('src'),'https://www.googletagmanager.com/gtag/js?id=G-WXZK6H99JM',path+' analytics stream');
  assert.equal($('meta[name=robots]').attr('content'),indexable?(['product/','search/visual/'].includes(route)?'noindex,follow':'index,follow'):'noindex,nofollow',path+' indexing');
  assert.equal($('#language-switch option').length,publishedLocales.length,path);
  assert.equal($('#language-switch option[selected]').attr('value'),path,path);
  assert.equal($('link[hreflang]').length,publishedLocales.length+1,path);
  for(const other of publishedLocales)assert.ok($(`link[hreflang="${other}"]`).attr('href').endsWith(localePath(other,canonicalPath(route))),path+' '+other);
  assert.equal($('link[hreflang="x-default"]').attr('href').endsWith(localePath('en',canonicalPath(route))),true,path);
  assert.ok(!$('title').text().includes('undefined'),path);
  if(route==='faq/')assert.equal($('details.faq-item').length,28,path);
  if(route==='articles/')assert.equal($('.guide-card').length,data.articles.length,path);
  if(route.startsWith('articles/')&&route!=='articles/'){
   const article=data.articles.find(a=>route==='articles/'+a.slug+'/');
   assert.equal($('.prose section[id]').length,article.sections.length,path);
   assert.ok($('article').text().includes(article.sections.at(-1).paragraphs.at(-1)),path+' final paragraph');
  }
  if(route&&!route.startsWith('spreadsheet/')&&!['finds/','product/'].includes(route)){
   const response=await worker.fetch(new Request(origin+path),{},{}),live=load(await response.text());
   assert.equal(response.status,200,path+' runtime');
   assert.equal(live('body').attr('data-source-rendered'),undefined,path+' editorial must not fetch products');
   assert.equal(live('html').attr('lang'),lang,path+' runtime language');
   assert.equal(live('script[data-cssbuy-analytics]').length,indexable?2:0,path+' runtime analytics');
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
   assert.equal(response.status,route===''?200:503);
   assert.equal($('html').attr('lang'),lang);
   assert.equal($('body').attr('data-source-rendered'),'true');
   assert.ok($('.error-state').text().includes(route.startsWith('product/')?t.notFound:t.sourceError),JSON.stringify({lang,route,actual:$('.error-state').text(),expected:route.startsWith('product/')?t.notFound:t.sourceError}));
   assert.ok($('link[rel=canonical]').attr('href').startsWith(origin));
  }
 }finally{globalThis.fetch=savedFetch;}
}
// Exercise rendered pagination and filtered pages with a deterministic source
// fixture, including a second source batch and a genuinely empty deep page.
const savedFetch=globalThis.fetch;
globalThis.fetch=async input=>{
 const url=new URL(input),batch=Number(url.searchParams.get('page')||1);
 const cards=batch>10?'':Array.from({length:60},(_,i)=>`<div class="product-card"><a class="product-image" href="/AllProducts/${(batch-1)*60+i+1}.html"><img src="/uploads/fixture.jpg"></a><span class="product-name">Fixture ${batch}-${i+1}</span><span class="product-price">100</span></div>`).join('');
 return new Response(`<button class="sort-btn" onclick="location.href='/index.php?m=home&c=Lists&a=index&tid=2&sort=click'"></button>${cards}<div class="pagination"><span class="active">${batch}</span><a href="/index.php?m=home&c=Lists&a=index&tid=2&sort=click&page=${batch+1}">Next</a>${batch>1?`<a href="/index.php?m=home&c=Lists&a=index&tid=2&sort=click&page=${batch-1}">Previous</a>`:''}</div>`);
};
try{
 const page=await worker.fetch(new Request(origin+'/de/spreadsheet/shoes/?page=4'),{},{}),$=load(await page.text());
 assert.equal(page.status,200);assert.equal($('.product-card').length,20);
 assert.equal($('.product-card').first().attr('href'),'/de/product/?id=61');
 assert.equal($('link[rel=canonical]').attr('href'),origin+'/de/spreadsheet/shoes/?page=4');
 assert.equal($('link[hreflang=fr]').attr('href'),origin+'/fr/spreadsheet/shoes/?page=4');
 assert.equal($('#catalog-form [name=category]').val(),'shoes');
 assert.ok($('#catalog-pagination a').toArray().some(a=>$(a).attr('href')==='/de/spreadsheet/shoes/?page=5'));
 assert.equal($('meta[name=robots]').attr('content'),indexable?'index,follow':'noindex,nofollow');
 const filtered=await worker.fetch(new Request(origin+'/fr/spreadsheet/?q=fixture&page=4'),{},{}),f=load(await filtered.text());
 assert.equal(filtered.status,200);assert.equal(f('meta[name=robots]').attr('content'),indexable?'noindex,follow':'noindex,nofollow');
 assert.match(filtered.headers.get('X-Robots-Tag'),/noindex/);
 const empty=await worker.fetch(new Request(origin+'/spreadsheet/shoes/?page=99999'),{},{});
 assert.equal(empty.status,404);assert.match(empty.headers.get('X-Robots-Tag'),/noindex/);
 const legacy=await worker.fetch(new Request(origin+'/de/spreadsheet/?category=shoes&page=4'),{},{});
 assert.equal(legacy.status,308);assert.equal(legacy.headers.get('location'),origin+'/de/spreadsheet/shoes/?page=4');
}finally{globalThis.fetch=savedFetch;}
if(indexable){
 const robots=await (await worker.fetch(new Request(origin+'/robots.txt'),{},{})).text();
 assert.ok(robots.includes('Sitemap: '+origin+'/sitemap.xml'));
 assert.ok(!robots.includes('Disallow: /\n'));
 const sitemap=await (await worker.fetch(new Request(origin+'/sitemap.xml'),{},{})).text(),xml=load(sitemap,{xmlMode:true});
 assert.equal(xml('loc').length,publishedLocales.length*(8+content().articles.length+indexedCategories.length));
 for(const loc of xml('loc').toArray()){
  assert.ok(xml(loc).text().startsWith(origin+'/'));
  assert.ok(!/\/(guide|shipping)\/$/.test(new URL(xml(loc).text()).pathname));
 }
 const redirected=await worker.fetch(new Request('https://www.'+new URL(origin).hostname+'/fr/spreadsheet/?q=Nike&page=4'),{},{});
 assert.equal(redirected.status,308);assert.equal(redirected.headers.get('location'),origin+'/fr/spreadsheet/?q=Nike&page=4');
 const preview=await worker.fetch(new Request('https://preview.test/fr/articles/'),{},{});
 assert.equal(preview.headers.get('X-Robots-Tag'),'noindex,nofollow');
 const previewHtml=load(await preview.text());
 assert.equal(previewHtml('meta[name=robots]').attr('content'),'noindex,nofollow');
 assert.equal(previewHtml('script[data-cssbuy-analytics]').length,0,'preview must not send analytics');
}
console.log(JSON.stringify({ok:true,locales:publishedLocales.length,pages:checked,articles:publishedLocales.length*content().articles.length,faq:publishedLocales.length*28,runtimeErrorLocalization:true}));
