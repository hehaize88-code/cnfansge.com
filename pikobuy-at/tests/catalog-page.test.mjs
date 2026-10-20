import test from 'node:test';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
import {renderCatalogHtml,catalogResponse} from '../worker/catalog-page.mjs';

const template=`<!doctype html><html lang="de"><head><meta name="robots" content="index,follow"><link rel="canonical" href="https://pikobuy.at/de/spreadsheet/"></head><body data-base="/de/"><h1>Spreadsheet</h1><input name="q"><a data-category="shoes">Schuhe ↗</a><h2 id="result-title"></h2><label><select id="sort"><option value="popular">Popular</option><option value="price-up">Preis</option></select></label><div id="catalog-status">Loading</div><div id="product-grid"></div><nav id="pagination" hidden></nav><script id="translations" type="application/json">{"all":"Alle Produkte","details":"Details","previous":"Zurück","next":"Weiter","noResults":"Keine Produkte","error":"Temporär nicht verfügbar"}</script></body></html>`;
const source='/index.php?m=home&c=Lists&a=index&tid=4&sort=price&sort_asc=asc&page=1';
const data={products:Array.from({length:60},(_,i)=>({id:String(i+1),name:i===0?'<script>alert(1)</script> & "name"':`Test item ${i+1}`,image:i===0?null:'https://cnfansge.com/uploads/test.jpg',price:{cny:72.6,usd:10}})),source,previousPath:null,nextPath:source.replace('page=1','page=2')};
const request=query=>new Request('https://pikobuy.at/de/spreadsheet/?category=shoes&sort=price-up'+query);

test('raw HTML contains localized real-result cards and safe crawlable pagination before JavaScript',()=>{
 const $=load(renderCatalogHtml(template,request(''),data));
 assert.equal($('.product-card').length,20);
 assert.equal($('.product-card').first().find('h3').text(),data.products[0].name);
 assert.equal($('.product-card script').length,0);
 assert.equal($('.product-card').first().find('img').length,0);
 assert.equal($('.price').first().text(),'$10.00USD');
 assert.equal($('#product-grid').attr('data-server-rendered'),'true');
 assert.ok($('#catalog-status').is('[hidden]'));
 assert.equal($('#result-title').text(),'Schuhe');
 const next=new URL($('#next').attr('href'),'https://pikobuy.at');
 assert.equal(next.pathname,'/de/spreadsheet/');
 for(const [key,value] of Object.entries({category:'shoes',sort:'price-up',page:'2',offset:'20',cursor:source}))assert.equal(next.searchParams.get(key),value);
 assert.equal($('link[rel="canonical"]').attr('href'),'https://pikobuy.at/de/spreadsheet/');
});

test('SSR pagination crosses batches without losing filters and supports the previous partial batch',()=>{
 const $=load(renderCatalogHtml(template,request('&offset=40&page=3'),data));
 assert.equal($('.product-card').first().find('h3').text(),'Test item 41');
 const next=new URL($('#next').attr('href'),'https://pikobuy.at');
 assert.equal(next.searchParams.get('cursor'),data.nextPath);
 assert.equal(next.searchParams.get('offset'),'0');
 assert.equal(next.searchParams.get('page'),'4');
 const prev=load(renderCatalogHtml(template,request('&offset=last&page=2'),{...data,products:data.products.slice(0,23)}));
 assert.equal(prev('.product-card').length,3);
 assert.equal(prev('.product-card').first().find('h3').text(),'Test item 21');
});

test('upstream failure or an empty unfiltered catalog returns 503 and is never cached as a successful page',async()=>{
 for(const apiHandler of [async()=>new Response('',{status:502}),async()=>Response.json({products:[]})]){
  let writes=0;
  const response=await catalogResponse(template,new Request('https://pikobuy.at/de/spreadsheet/'),{'Content-Type':'text/html'},{apiHandler,cache:{match:async()=>null,put:async()=>{writes++;}}});
  assert.equal(response.status,503);assert.equal(response.headers.get('Cache-Control'),'no-store');assert.equal(writes,0);
  assert.match(await response.text(),/Temporär nicht verfügbar/);
 }
});

test('successful HTML cache is URL-specific, HEAD stays empty and SSR only calls the source once',async()=>{
 const saved=new Map();let calls=0;
 const cache={match:async req=>saved.get(req.url)?.clone(),put:async(req,res)=>saved.set(req.url,res)};
 const apiHandler=async req=>{calls++;assert.equal(new URL(req.url).pathname,'/api/catalog');assert.equal(new URL(req.url).searchParams.get('category'),'shoes');assert.ok(req.signal);return Response.json(data);};
 const options={cache,apiHandler},headers={'Content-Type':'text/html','Cache-Control':'public,max-age=60'};
 const one=await catalogResponse(template,request(''),headers,options);
 assert.equal(one.status,200);assert.equal(load(await one.text())('.product-card').length,20);
 const two=await catalogResponse(template,new Request(request('').url,{method:'HEAD'}),headers,options);
 assert.equal(await two.text(),'');assert.equal(calls,1);
 await catalogResponse(template,request('&offset=20&page=2'),headers,options);assert.equal(calls,2);
});
