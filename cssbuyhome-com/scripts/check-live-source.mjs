import assert from 'node:assert/strict';
import {load} from 'cheerio';
import worker from '../dist/server/index.js';
const origin='https://cssbuy-preview.test';
async function request(path){const response=await worker.fetch(new Request(origin+path),{},{});assert.equal(response.status,200,path);return response;}
async function json(path){const data=await (await request(path)).json();assert.ok(!data.error,path);return data;}
const latest=await json('/api/catalog?sort=latest&page=1');
const fourth=await json('/api/catalog?sort=latest&page=4');
const tenth=await json('/api/catalog?sort=latest&page=10');
assert.ok(latest.products.length>20);assert.ok(fourth.products.length>0);assert.ok(tenth.products.length>0);
assert.equal(fourth.sourcePage,2);assert.equal(tenth.sourcePage,4);
assert.ok(!latest.products.some(a=>fourth.products.some(b=>a.id===b.id)),'Page 4 must fetch another source batch');
const search=await json('/api/catalog?q=Nike&page=4');
assert.ok(search.products.length>0);assert.match(search.source,/keywords=Nike/);assert.equal(search.sourcePage,2);
const low=await json('/api/catalog?sort=price-up&page=1');
const high=await json('/api/catalog?sort=price-down&page=1');
assert.match(low.source,/sort_asc=asc/);assert.match(high.source,/sort_asc=desc/);
const lowPrices=low.products.map(p=>p.price?.cny).filter(Number.isFinite);
const highPrices=high.products.map(p=>p.price?.cny).filter(Number.isFinite);
assert.ok(highPrices.length>0,'Source has priced records');
for(let i=1;i<lowPrices.length;i++)assert.ok(lowPrices[i]>=lowPrices[i-1],'Source ascending price order');
for(let i=1;i<highPrices.length;i++)assert.ok(highPrices[i]<=highPrices[i-1],'Source descending price order');
if(lowPrices.length)assert.ok(lowPrices[0]<=highPrices[0]);
const category=await json('/api/catalog?category=shoes&sort=latest&page=4');assert.ok(category.products.length>0);
const detail=await json('/api/product?id=6681');assert.match(detail.buy,/type=micro&id=7755101935/);assert.ok(detail.images.length>0);assert.equal(detail.qcVerified,false);
for(const path of ['/','/spreadsheet/?page=4','/spreadsheet/?q=Nike&page=4','/spreadsheet/?category=shoes&sort=price-up','/product/?id=6681']){
 const html=await (await request(path)).text(),$=load(html);
 assert.equal($('body').attr('data-source-rendered'),'true');
 assert.equal($('.error-state').length,0,path);
 for(const el of $('a.product-card,a.hero-product,form.search-form,#catalog-form,.pagination a').toArray()){
  const target=$(el).attr('href')||$(el).attr('action');
  assert.ok(target?.startsWith('/'),'Catalog navigation must stay on CSSBuy Home: '+target);
 }
 if(path.startsWith('/spreadsheet/'))assert.equal($('.product-card').length,20);
 if(path.startsWith('/product/')){assert.ok($('button[data-large-image]').length>0);assert.equal($('.product-detail-gallery a').length,0);}
 assert.ok($('link[rel=canonical]').attr('href').startsWith(origin));
}
console.log(JSON.stringify({ok:true,source:'cnfansge.com',testedPages:[1,4,10],pageSize:20,search:'Nike / page 4',category:'shoes / page 4',sorting:['price-up','price-down'],purchaseId:'7755101935',sameSiteNavigation:true,qcVerified:false}));
