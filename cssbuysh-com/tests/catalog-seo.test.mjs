import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogRoute,normalizeCatalogUrl,catalogSeo} from '../worker/catalog-routing.mjs';
import {createResponseCache} from '../worker/cache.mjs';
import {relatedArticles} from '../src/data/navigation.mjs';

test('category redirects preserve locale, page and sort while removing duplicate category URLs',()=>{
 const u=new URL('https://cssbuysh.com/de/spreadsheet/?category=shoes&page=4&sort=price-up');
 assert.equal(normalizeCatalogUrl(u).href,'https://cssbuysh.com/de/spreadsheet/shoes/?page=4&sort=price-up');
 assert.equal(normalizeCatalogUrl(new URL('https://cssbuysh.com/de/spreadsheet/shoes/?category=all&page=1&sort=popular')).href,'https://cssbuysh.com/de/spreadsheet/');
 assert.equal(normalizeCatalogUrl(new URL('https://cssbuysh.com/spreadsheet/hoodies-sweaters/')),null);
 assert.equal(catalogRoute(new URL('https://cssbuysh.com/spreadsheet/invalid/')),null);
});
test('real pagination has self canonical URLs and non-curated filters are not indexed',()=>{
 const u=new URL('https://cssbuysh.com/fr/spreadsheet/shoes/?page=4');
 const seo=catalogSeo(u,'https://cssbuysh.com');assert.equal(seo.canonical,u.href);assert.equal(seo.noindex,false);assert.equal(seo.category,'shoes');
 for(const query of ['q=Nike','sort=price-up','category=jersey','cursor=%2FAllProducts%2F','slice=2'])assert.equal(catalogSeo(new URL('https://cssbuysh.com/spreadsheet/?'+query),'https://cssbuysh.com').noindex,true,query);
 for(const page of ['0','-1','abc','1.5','100000'])assert.equal(catalogSeo(new URL('https://cssbuysh.com/spreadsheet/?page='+page),'https://cssbuysh.com').valid,false,page);
});
test('stale source responses are returned while one background refresh is running',async()=>{
 let clock=0,calls=0,finish;const waits=[];
 const loader=async()=>{calls++;if(calls>1)await new Promise(r=>finish=r);return Response.json({version:calls});};
 const cached=createResponseCache(loader,{ttl:10,staleTtl:100,now:()=>clock});const req=new Request('https://cssbuysh.com/api/catalog');
 assert.deepEqual(await (await cached(req)).json(),{version:1});clock=11;
 const context={waitUntil:p=>waits.push(p)};
 const first=await cached(req,context),second=await cached(req,context);assert.equal(calls,2);assert.equal(first.headers.get('X-Source-Cache'),'stale');assert.deepEqual(await second.json(),{version:1});
 finish();await Promise.all(waits);assert.deepEqual(await (await cached(req)).json(),{version:2});
});
test('a failed refresh retains a recent good catalog only within the bounded stale window',async()=>{
 let clock=0,calls=0;const cached=createResponseCache(async()=>++calls===1?Response.json({ok:true}):new Response('upstream failed',{status:502}),{ttl:10,staleTtl:20,now:()=>clock});const req=new Request('https://cssbuysh.com/api/catalog');
 await cached(req);clock=11;assert.equal((await cached(req)).status,200);clock=31;assert.equal((await cached(req)).status,502);
});
test('related guides follow a meaningful shipping and inspection journey',()=>{
 const a=['cssbuy-shipping-cost','cssbuy-shipping-time','cssbuy-warehouse-consolidation','cssbuy-qc-photos-guide','cssbuy-returns-refunds','cssbuy-size-guide'].map(slug=>({slug}));
 assert.deepEqual(relatedArticles(a,'cssbuy-warehouse-consolidation').map(x=>x.slug),['cssbuy-qc-photos-guide','cssbuy-shipping-cost','cssbuy-shipping-time']);
 assert.deepEqual(relatedArticles(a,'cssbuy-qc-photos-guide').map(x=>x.slug),['cssbuy-returns-refunds','cssbuy-size-guide','cssbuy-warehouse-consolidation']);
});
