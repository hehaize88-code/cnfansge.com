import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../dist/server/index.js';
const base='https://kakobuyvip.pro';
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
const request=path=>worker.fetch(new Request(base+path,{headers:{accept:'text/html'}}),env,ctx);
const languages=['en','de','es','fr','it'];
const newSlugs=['kakobuy-tracking-not-updating','why-is-kakobuy-shipping-so-expensive','kakobuy-shipping-to-uk'];
const schemas=html=>[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
const main=html=>html.match(/<main>([\s\S]*?)<\/main>/)?.[1]||'';
test('175 sitemap URLs render with unique titles, correct language, canonical and reciprocal alternates',async()=>{
 const r=await request('/sitemap.xml');assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/xml/);
 const xml=await r.text();const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,175);assert.equal(new Set(urls).size,175);
 const titles=new Set();
 for(const url of urls){
  const path=new URL(url).pathname;const response=await request(path);assert.equal(response.status,200,path);
  const html=await response.text();const locale=languages.slice(1).find(l=>path===`/${l}`||path.startsWith(`/${l}/`))||'en';
  assert.match(html,new RegExp(`<html lang="${locale}">`),path);assert.ok(html.includes(`<link rel="canonical" href="${url}"`),path);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,path);
  assert.ok(!/<meta[^>]*name="robots"[^>]*noindex/.test(html),path);
  for(const lang of [...languages,'x-default'])assert.ok(html.includes(`hrefLang="${lang}"`),`${path}: ${lang}`);
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title,path);assert.ok(!titles.has(title),`duplicate title ${title}`);titles.add(title);
  for(const s of schemas(html))assert.ok(s['@context']);
 }
});
test('each locale retains 18 articles, adds 3 full articles, and exposes 20 FAQs',async()=>{
 for(const locale of languages){const prefix=locale==='en'?'':`/${locale}`;
  const listing=main(await (await request(prefix+'/articles')).text());
  const links=[...listing.matchAll(/<a href="([^"]*\/articles\/[^"#]+)"/g)].map(m=>m[1]);assert.equal(new Set(links).size,21,locale);
  for(const old of ['kakobuy-fees-explained','kakobuy-shipping-to-usa'])assert.ok(links.includes(`${prefix}/articles/${old}`));
  for(const slug of newSlugs){const html=await (await request(`${prefix}/articles/${slug}`)).text();assert.equal((main(html).match(/id="section-\d+"/g)||[]).length,8);const graph=schemas(html).flatMap(s=>s['@graph']||[s]);assert.ok(graph.some(s=>s['@type']==='Article'&&s.inLanguage===locale&&s.dateModified==='2026-11-07'));assert.ok(graph.some(s=>s['@type']==='BreadcrumbList'));assert.ok(main(html).includes('href="#section-8"'));}
  const faq=await(await request(prefix+'/faq')).text();const s=schemas(faq).find(s=>s['@type']==='FAQPage');assert.equal(s.mainEntity.length,20,locale);
 }
});
test('unknown URLs are 404 and www/http canonicalise without losing the path',async()=>{
 assert.equal((await request('/nonexistent-seo-route')).status,404);
 for(const origin of ['https://www.kakobuyvip.pro','http://kakobuyvip.pro']){const r=await worker.fetch(new Request(origin+'/fr/articles?x=1'),env,ctx);assert.equal(r.status,308);assert.equal(r.headers.get('location'),base+'/fr/articles?x=1');}
});
