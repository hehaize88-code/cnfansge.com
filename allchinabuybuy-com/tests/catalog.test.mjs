import test from 'node:test';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
import {catalogRoute,renderCatalog} from '../worker/catalog.mjs';
const shell = '<!doctype html><html><head><meta name="robots" content="index,follow"></head><body><form id="catalog-form"><input name="q"><select name="sort"><option value="popular">Popular</option><option value="latest">Latest</option></select><select name="category"><option value="all">All</option></select></form><span id="results-label"></span><div id="catalog">Loading</div><nav id="pagination"></nav></body></html>';
const products = Array.from({length:60},(_,i)=>({id:String(i+1),name:`Test item ${i+1}`,image:'https://www.cnfansge.com/uploads/test.jpg',price:{cny:80,usd:10}}));
const request = path => new Request('https://allchinabuybuy.com'+path);
test('all five locales render source products and pagination without client JavaScript',async()=>{
 for(const lang of ['en','de','es','fr','it']) {
  const path=(lang==='en'?'/':`/${lang}/`)+'finds/?page=2',req=request(path);
  let queried;
  const result=await renderCatalog(shell,req,catalogRoute(new URL(req.url).pathname),async r=>{queried=new URL(r.url);return Response.json({products,displayPage:2,nextPath:'/next'});});
  const $=load(result.html);
  assert.equal(result.status,200);assert.equal($('.product-card').length,20);
  assert.equal($('.product-card').first().attr('href'),(lang==='en'?'/':`/${lang}/`)+'product/?id=21');
  assert.equal(queried.searchParams.get('sort'),'latest');
  assert.equal($('#pagination a').length,2);assert.match($('#pagination a').last().attr('href'),/page=3/);
  assert.equal($('#catalog').attr('data-rendered'),'server');assert.equal(result.headers['X-Robots-Tag'],'noindex, follow');
 }
});
test('home has eight current source products and the primary spreadsheet uses popular sorting',async()=>{
 for(const [path,count,sort] of [['/',8,'latest'],['/spreadsheet/',20,'popular']]) {
  const result=await renderCatalog(shell,request(path),catalogRoute(path),async r=>{assert.equal(new URL(r.url).searchParams.get('sort'),sort);return Response.json({products,displayPage:1});});
  assert.equal(load(result.html)('.product-card').length,count);assert.equal(result.headers['X-Robots-Tag'],undefined);
 }
 assert.equal(catalogRoute('/qc/'),null);assert.equal(catalogRoute('/articles/'),null);
});
test('source outages return 503 with retry instructions, never a success-looking empty catalog',async()=>{
 for(const loader of [async()=>new Response('',{status:502}),async()=>{throw Error('offline')},async()=>Response.json({products:[],displayPage:1})]) {
  const result=await renderCatalog(shell,request('/finds/'),catalogRoute('/finds/'),loader);
  assert.equal(result.status,503);assert.equal(result.headers['Retry-After'],'60');assert.equal(result.headers['Cache-Control'],'no-store');
  assert.equal(load(result.html)('meta[name="robots"]').attr('content'),'noindex,follow');
 }
});
test('search queries are preserved and escaped; empty search is noindex, invalid and nonexistent pages are errors',async()=>{
 const q='<img src=x onerror=alert(1)>';
 const result=await renderCatalog(shell,request('/finds/?q='+encodeURIComponent(q)),catalogRoute('/finds/'),async()=>Response.json({products:[{...products[0],name:q,image:'https://evil.example/x'}],displayPage:1}));
 const $=load(result.html);assert.equal($('input').attr('value'),q);assert.equal($('.product-card h3').text(),q);assert.equal($('#catalog img').length,0);assert.equal($('[onerror]').length,0);
 for(const [path,loader,status] of [['/finds/?q=missing',async()=>Response.json({products:[],displayPage:1}),200],['/finds/?page=2',async()=>Response.json({products:[],displayPage:2}),404],['/finds/?page=0',async()=>new Response('',{status:400}),400]]) {
  const r=await renderCatalog(shell,request(path),catalogRoute('/finds/'),loader);assert.equal(r.status,status);assert.equal(r.headers['X-Robots-Tag'],'noindex, follow');
 }
});
