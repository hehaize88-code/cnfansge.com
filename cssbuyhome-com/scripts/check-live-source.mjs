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
assert.ok(low.products[0].price.cny<=high.products[0].price.cny);
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
 assert.ok($('link[rel=canonical]').attr('href').startsWith(origin));
}
console.log(JSON.stringify({ok:true,source:'cnfansge.com',testedPages:[1,4,10],pageSize:20,search:'Nike / page 4',category:'shoes / page 4',sorting:['price-up','price-down'],purchaseId:'7755101935',sameSiteNavigation:true,qcVerified:false}));
