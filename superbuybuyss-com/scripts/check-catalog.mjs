import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {load} from 'cheerio';
import {renderCatalog} from '../worker/render-catalog.mjs';
const original=globalThis.fetch;
let calls=0;
const source=`<button class="sort-btn" onclick="location.href='/index.php?m=home&c=Lists&a=index&tid=4&sort=click'"></button><div class="product-card"><a class="product-image" href="/AllProducts/6681.html"><img src="/uploads/test.jpg"></a><h2 class="product-name">Shoe &lt;script&gt;bad&lt;/script&gt; &amp; pair</h2><div class="product-price">120</div></div><div class="pagination"><span class="active">1</span><a href="/index.php?m=home&c=Lists&a=index&tid=4&page=2">Next</a></div>`;
globalThis.fetch=async request=>{calls++;assert.equal(new URL(String(request)).hostname,'cnfansge.com');return new Response(source);};
try{
 const template=await readFile(new URL('../.astro-output/fr/spreadsheet/shoes/index.html',import.meta.url),'utf8');
 const response=await renderCatalog(template,new Request('https://superbuybuyss.com/fr/spreadsheet/shoes/'));
 const $=load(response);
 assert.equal($('#catalog-products[data-server-rendered=true] a').length,1);
 assert.equal($('#catalog-products a').attr('href'),'/fr/product/?id=6681');
 assert.equal($('#catalog-products h3').text(),'Shoe <script>bad</script> & pair');
 assert.equal($('#catalog-products script').length,0,'Source text must not become executable HTML');
 assert.match($('#catalog-products .price').text(),/120/);
 assert.equal(JSON.parse($('#catalog-bootstrap').text())['catalog-products'].nextPath,'/index.php?m=home&c=Lists&a=index&tid=4&page=2');
 assert.equal(calls,2);
 await renderCatalog(template,new Request('https://superbuybuyss.com/fr/spreadsheet/shoes/'));assert.equal(calls,2,'Identical requests reuse the short process cache');
 globalThis.fetch=async()=>new Response('unavailable',{status:503});
 const jacket=await readFile(new URL('../.astro-output/de/spreadsheet/jackets/index.html',import.meta.url),'utf8');
 const fallback=load(await renderCatalog(jacket,new Request('https://superbuybuyss.com/de/spreadsheet/jackets/')));
 assert.equal(fallback('h1').text(),'Superbuy Spreadsheet: Jacken');
 assert.equal(fallback('#catalog-bootstrap').length,0);
 assert.equal(fallback('#catalog-products .skeleton').length,8,'Source failure keeps the client retry path');
 console.log('Live-source rendering, translated links, HTML escaping, pagination bootstrap, bounded cache and failure fallback passed');
}finally{globalThis.fetch=original;}
