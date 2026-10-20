import {test} from 'node:test';import assert from 'node:assert/strict';import {sourceUrl,purchaseUrl,parseCatalog,catalogSortUrl,api} from '../worker/source.mjs';
test('source restricted to public cnfansge catalog routes',()=>{for(const x of ['https://evil.test/AllProducts/','https://cnfansge.com/admin/','/index.php?m=admin','http://cnfansge.com/AllProducts/'])assert.throws(()=>sourceUrl(x));assert.equal(sourceUrl('/AllProducts/6681.html').hostname,'cnfansge.com');});
test('original marketplace id is used in encoded purchase link',()=>{const original='https://weidian.com/item.html?itemID=7755101935';assert.equal(new URL(purchaseUrl(original)).searchParams.get('productUrl'),original);});
test('missing source price conversion never presents CNY as USD',()=>{const data=parseCatalog('<div class="product-card"><a class="product-image" href="/AllProducts/6681.html"><img data-src="/uploads/a.jpg"></a><h3 class="product-name">Example</h3><div class="product-price">169</div></div>',null,'/AllProducts/');assert.equal(data.products[0].price.usd,null);assert.equal(data.products[0].price.cny,169);});
const controls=(tid)=>`<a class="sort-btn active" onclick="window.location.href='/index.php?m=home&c=Lists&a=index&tid=${tid}&sort=click&sort_asc=asc&ZXljbXM=1'"></a><a class="sort-btn" onclick="window.location.href='/index.php?m=home&c=Lists&a=index&tid=${tid}&sort=price&sort_asc=desc&ZXljbXM=1'"></a>`;
test('all-products and category pretty links continue through dynamic source pagination',()=>{
 for(const [path,tid,next] of [['/AllProducts/',1,'/index.php/list_1_2/'],['/shoes/',4,'/shoes/list_4_2/']]){
  const html=controls(tid)+`<div class="pagination"><li class="active"><a>1</a></li><a href="${next}">下一页</a></div>`;
  const data=parseCatalog(html,null,path),u=sourceUrl(data.nextPath);
  assert.equal(u.pathname,'/index.php');assert.equal(u.searchParams.get('tid'),String(tid));assert.equal(u.searchParams.get('sort'),'click');assert.equal(u.searchParams.get('page'),'2');
 }
});
test('dynamic page four remains reachable and preserves category and price order',()=>{
 const u=catalogSortUrl(controls(4),'price-up');u.searchParams.set('page','3');
 const next=new URL(u);next.searchParams.set('page','4');
 const html=`<div class="pagination"><li class="active">3</li><a href="${next.pathname+next.search}">下一页</a></div>`;
 const data=parseCatalog(html,null,u.href);assert.equal(data.sourcePage,3);assert.equal(sourceUrl(data.nextPath).searchParams.get('page'),'4');assert.equal(sourceUrl(data.nextPath).searchParams.get('sort_asc'),'asc');assert.equal(sourceUrl(data.nextPath).searchParams.get('tid'),'4');
});
test('source search pagination preserves keyword and channel without converting to catalog',()=>{
 const html='<div class="pagination"><a href="/search.html?keywords=Nike&amp;channelid=2&amp;page=2">下一页</a></div>';
 const next=sourceUrl(parseCatalog(html,null,'/search.html?keywords=Nike&channelid=2').nextPath);assert.equal(next.pathname,'/search.html');assert.equal(next.searchParams.get('keywords'),'Nike');assert.equal(next.searchParams.get('page'),'2');
});
test('default API and saved legacy cursor fetch live dynamic popular route',async()=>{
 const original=globalThis.fetch,seen=[];
 globalThis.fetch=async(url)=>{seen.push(String(url));return new Response(controls(1)+'<div class="pagination"><li class="active">2</li></div>');};
 try{for(const query of ['', '?cursor='+encodeURIComponent('/index.php/list_1_2/')]){seen.length=0;const response=await api(new Request('https://preview.test/api/catalog'+query));assert.equal(response.status,200);assert.equal(seen.length,2);assert.equal(new URL(seen[1]).searchParams.get('sort'),'click');assert.equal(new URL(seen[1]).searchParams.get('page'),query?'2':null);assert.ok(!seen.some(x=>x.includes('/list_1_')));}}finally{globalThis.fetch=original;}
});

test('a source product without a real photo is kept without a fabricated image',()=>{const data=parseCatalog('<div class="product-card"><a class="product-image" href="/AllProducts/584.html"><img data-src="/public/static/common/images/not_adv.jpg"></a><h3 class="product-name">Coat</h3><div class="product-price">219</div></div>',7.26,'/AllProducts/');assert.equal(data.products.length,1);assert.equal(data.products[0].id,'584');assert.equal(data.products[0].image,null);});
