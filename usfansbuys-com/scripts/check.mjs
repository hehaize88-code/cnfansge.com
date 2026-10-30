import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {load} from 'cheerio/slim';
const langs=['en','de','es','fr','it'];
const data=await Promise.all(langs.map(l=>fs.readFile(`src/data/${l}.json`,'utf8').then(JSON.parse)));
function shape(a,b,path='root'){
 assert.equal(typeof b,typeof a,path);
 if(Array.isArray(a)){assert.ok(Array.isArray(b),path);assert.equal(b.length,a.length,path);a.forEach((v,i)=>shape(v,b[i],path+'.'+i));}
 else if(a&&typeof a==='object'){assert.deepEqual(Object.keys(b).sort(),Object.keys(a).sort(),path);for(const k of Object.keys(a))shape(a[k],b[k],path+'.'+k);}
 else if(/\.(id|slug|source|url)$/.test(path))assert.equal(b,a,path);
}
for(let i=0;i<langs.length;i++){
 const d=data[i];shape(data[0],d,langs[i]);assert.equal(d.faq.length,28);assert.equal(d.articles.length,13);
 for(const a of d.articles){assert.ok(a.related.length);assert.ok(a.related.every(slug=>d.articles.some(x=>x.slug===slug)&&slug!==a.slug));assert.equal(a.sections.length,7);assert.ok(a.sources.every(s=>['usfans.com','www.usfans.com'].includes(new URL(s.url).hostname)));}
 for(const path of ['', 'spreadsheet','finds','qc','guide','shipping','faq','articles','product','image-search',...Object.keys(d.categoryPages).map(c=>'category/'+c),...d.articles.map(a=>'articles/'+a.slug)]){
  const prefix=langs[i]==='en'?'':langs[i]+'/';const html=await fs.readFile(`generated/static/${prefix}${path?path+'/':''}index.html`,'utf8');const $=load(html);
  assert.equal($('html').attr('lang'),langs[i]);assert.equal($('h1').length,path==='product'?0:1);assert.equal($('link[hreflang]').length,6);assert.ok($('link[rel=canonical]').attr('href'));assert.ok($('meta[name=description]').attr('content'));assert.ok($('a[href="https://www.usfans.com/register"]').length>=1);
 }
}
const worker=(await import('../dist/server/index.js')).default;
const call=async path=>{const r=await worker.fetch(new Request('https://preview.test'+path));return {status:r.status,headers:r.headers,body:await r.text()};};
const home=await call('/');assert.equal(home.status,200);assert.equal(load(home.body)('.product-card').length,4,'live home cards');assert.ok(!home.body.includes('<!--catalog-start-->'));
const page1=await call('/api/catalog');const page10=await call('/api/catalog?page=10');assert.equal(page1.status,200);assert.equal(page10.status,200);const a=JSON.parse(page1.body),b=JSON.parse(page10.body);assert.equal(a.products.length,20);assert.equal(b.products.length,20);assert.notEqual(a.products[0].id,b.products[0].id);assert.equal(b.sourcePage,4);assert.ok(a.products.every(p=>p.image.startsWith('https://cnfansge.com/uploads/')));
const sorted=JSON.parse((await call('/api/catalog?sort=price-asc')).body);assert.ok(sorted.products.length);const prices=sorted.products.map(p=>p.price.cny).filter(p=>p!==null);assert.deepEqual(prices,[...prices].sort((x,y)=>x-y));
const search=await call('/api/catalog?q=shoes');assert.equal(search.status,200);assert.equal(JSON.parse(search.body).query,'shoes');
const detail=await call('/api/product?id=6681');assert.equal(detail.status,200);const d=JSON.parse(detail.body);assert.equal(d.buy,'https://www.usfans.com/product/3/7755101935?ref=SWD92F');assert.equal(d.qcVerified,false);
const rendered=await call('/product/?id=6681');assert.equal(rendered.status,200);assert.ok(rendered.body.includes('7755101935?ref=SWD92F'));
assert.equal((await call('/api/product?id=invalid')).status,400);assert.equal((await call('/missing/')).status,404);
console.log('PASS: 130 locale routes; 28 FAQs and 13 full articles in each language; live source cards, page 10, price sort, search, product/gallery link, invalid requests.');
