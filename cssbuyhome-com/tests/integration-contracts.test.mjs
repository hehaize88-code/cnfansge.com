import test from 'node:test';
import assert from 'node:assert/strict';
import {sourceUrl,purchaseUrl,parseCatalog,parseProduct,catalogSortUrl} from '../worker/source.mjs';
import {catalogMarkup} from '../worker/render.mjs';
import {content,publishedLocales,ui} from '../src/data/content.mjs';
test('purchase mapping uses Weidian itemID, not internal source record',()=>{
 assert.equal(purchaseUrl('https://weidian.com/item.html?itemID=7755101935'),'https://www.cssbuy.com/shop/goodsDetail?type=micro&id=7755101935');
 for(const s of ['https://evil.example/item.html?itemID=1','https://weidian.com/item.html?itemID=x','https://item.taobao.com/item.htm?id=1'])assert.equal(purchaseUrl(s),null);
});
test('source URL cannot fetch arbitrary origins or admin routes',()=>{
 for(const u of ['https://example.com/AllProducts/','//example.com/AllProducts/','https://cnfansge.com:8080/AllProducts/','https://user:pass@cnfansge.com/AllProducts/','/admin','/index.php?m=admin&c=Lists&a=index'])assert.throws(()=>sourceUrl(u));
 assert.equal(sourceUrl('/AllProducts/6681.html').host,'www.cnfansge.com');
});
test('source pagination continues beyond first sixty records',()=>{
 const html='<button class="sort-btn" onclick="location.href=\'/index.php?m=home&c=Lists&a=index&tid=1&sort=click\'"></button><div class="pagination"><span class="active">1</span><a href="/index.php/list_1_2/">下一页</a></div>';
 const d=parseCatalog(html,7,'/AllProducts/');assert.ok(d.nextPath.includes('page=2'));
 const products=Array.from({length:60},(_,i)=>({id:String(i),name:'test'}));
 const r=catalogMarkup({...d,products,sourcePage:1},new URL('https://test.example/spreadsheet/?slice=2'), '/',ui());
 assert.match(r.pagination,/page=4/);assert.match(r.pagination,/Page 3/);
 const fourth=catalogMarkup({...d,products,sourcePage:2,previousPath:'/index.php?m=home&c=Lists&a=index&tid=1&page=1'},new URL('https://test.example/spreadsheet/?page=4&q=Nike'), '/',ui());
 assert.match(fourth.pagination,/page=5/);assert.match(fourth.pagination,/page=3/);assert.match(fourth.pagination,/q=Nike/);assert.match(fourth.pagination,/name="page"/);
 assert.equal((fourth.products.match(/class="product-card"/g)||[]).length,20);
});
test('CSSBuy content has ten complete articles and 28 sourced FAQs',()=>{
 assert.ok(publishedLocales.includes('en'));
 for(const lang of publishedLocales){const d=content(lang),ids=new Set(d.sources.map(s=>s.id));assert.equal(d.articles.length,10);assert.ok(d.faq.length>=28);assert.equal(new Set(d.articles.map(a=>a.slug)).size,10);
 for(const a of d.articles){assert.ok(a.sections.length>=5,a.slug);const words=[a.intro,...a.sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.bullets||[])]),...a.takeaways].join(' ').split(/\s+/).length;if(lang==='en')assert.ok(words>=650,`${a.slug}: ${words}`);assert.ok(a.sourceIds.length);for(const id of a.sourceIds)assert.ok(ids.has(id),id);}
 for(const f of d.faq){assert.ok(f.q&&f.a);assert.ok(f.sourceIds.length,f.id);for(const id of f.sourceIds)assert.ok(ids.has(id),id);}
 for(const s of d.sources)if(!['project','catalog'].includes(s.id))assert.match(new URL(s.url).hostname,/(^|\.)cssbuy\.com$/);
 }
});

import {createResponseCache} from '../worker/cache.mjs';
test('public-response cache deduplicates source calls without platform default cache',async()=>{
 let calls=0;const cached=createResponseCache(async()=>{calls++;return Response.json({count:calls});});const req=new Request('https://test.example/api/catalog');
 const [a,b]=await Promise.all([cached(req),cached(req)]);assert.equal(calls,1);assert.deepEqual(await a.json(),{count:1});assert.deepEqual(await b.json(),{count:1});assert.deepEqual(await (await cached(req)).json(),{count:1});
});
test('source failures are never cached',async()=>{
 let calls=0;const cached=createResponseCache(async()=>{calls++;return new Response('error',{status:502});});const req=new Request('https://test.example/api/catalog');await cached(req);await cached(req);assert.equal(calls,2);
});
