import assert from 'node:assert/strict';
import fs from 'node:fs';
import {api} from '../worker/source.mjs';

const evidence={checkedAt:new Date().toISOString(),checks:[]};
async function get(path){const r=await api(new Request('https://review.local'+path));const d=await r.json();assert.equal(r.status,200,`${path}: ${JSON.stringify(d)}`);return d}
const first=await get('/api/catalog');assert.equal(first.products.length,20);
evidence.checks.push({check:'first UI page',count:first.products.length,firstId:first.products[0].id});
for(const page of [2,4,300]){const d=await get('/api/catalog?page='+page);assert.equal(d.products.length,20);assert.ok(d.products.every(x=>!first.products.some(y=>y.id===x.id)));evidence.checks.push({check:'pagination',page,sourcePage:d.sourcePage,count:d.products.length,firstId:d.products[0].id,hasNext:d.hasNext})}
for(const sort of ['price-up','price-down']){const d=await get('/api/catalog?q=jersey&sort='+sort);assert.equal(d.products.length,20);assert.ok(d.products.filter(x=>/jersey/i.test(x.name)).length>=14); // The source truncates some display names.
const prices=d.products.map(x=>x.price?.cny).filter(x=>x!=null);assert.ok(prices.every((x,i)=>!i||(sort==='price-up'?x>=prices[i-1]:x<=prices[i-1])));evidence.checks.push({check:'global keyword sorting',query:'jersey',sort,count:d.products.length,prices})}
for(const category of ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey']){const d=await get('/api/catalog?category='+category);assert.ok(d.products.length>0&&d.products.length<=20);assert.ok(d.products.every(x=>x.image===null||new URL(x.image).hostname==='www.cnfansge.com'));evidence.checks.push({check:'source category',category,count:d.products.length})}
const empty=await get('/api/catalog?q=zzzzunmatchedkakobuyreview2026');assert.equal(empty.products.length,0);assert.equal(empty.hasNext,false);evidence.checks.push({check:'empty search',count:0,hasNext:false});
const detail=await get('/api/product?id=6640');const url=new URL(detail.buy);assert.equal(url.searchParams.get('affcode'),'rf8x8');assert.equal(url.searchParams.get('url'),'https://weidian.com/item.html?itemID=7662220801');assert.equal(detail.qcVerified,false);assert.deepEqual(detail.qcPhotos,[]);evidence.checks.push({check:'source ID versus marketplace ID',sourceId:'6640',marketplaceId:'7662220801',affiliate:'rf8x8',sellerImages:detail.images.length,qcVerified:false});
for(const path of ['/api/product?id=invalid','/api/catalog?category=untrusted','/api/catalog?sort=untrusted']){const r=await api(new Request('https://review.local'+path));assert.equal(r.status,400)}
fs.writeFileSync('docs/integration-checks.json',JSON.stringify(evidence,null,2)+'\n');console.log(JSON.stringify({passed:evidence.checks.length,evidence:'docs/integration-checks.json'}));
