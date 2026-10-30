import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {join} from 'node:path';
import {load} from 'cheerio';
import {purchaseUrl,sourceUrl,categories} from '../worker/source.mjs';
const root=new URL('../',import.meta.url).pathname;
const langs=(await readdir(join(root,'src/data'))).filter(x=>/^articles\.[a-z]+\.json$/.test(x)).map(x=>x.split('.')[1]);
const en=JSON.parse(await readFile(join(root,'src/data/articles.en.json'),'utf8'));
const englishUI=JSON.parse(await readFile(join(root,'src/data/ui.en.json'),'utf8'));
let pages=0,links=0;
for(const lang of langs){const articleData=JSON.parse(await readFile(join(root,'src/data/articles.'+lang+'.json'),'utf8'));const faq=JSON.parse(await readFile(join(root,'src/data/faq.'+lang+'.json'),'utf8'));const ui=JSON.parse(await readFile(join(root,'src/data/ui.'+lang+'.json'),'utf8'));
 assert.equal(articleData.length,13);assert.equal(faq.length,28);assert.deepEqual(Object.keys(ui).sort(),Object.keys(englishUI).sort());
 for(const a of articleData){const source=en.find(x=>x.slug===a.slug);assert(source);assert.equal(a.sections.length,source.sections.length);assert.equal(a.takeaways.length,source.takeaways.length);a.sections.forEach((s,i)=>{assert.equal(s.paragraphs.length,source.sections[i].paragraphs.length);assert(s.paragraphs.every(p=>p.length>100));assert.equal(s.bullets?.length||0,source.sections[i].bullets?.length||0)});assert(a.sources.every(s=>new URL(s.url).hostname==='www.superbuy.com'));}
 for(const route of ['', 'spreadsheet','guide','qc','shipping','faq','articles','product',...categories.slice(1).map(c=>'spreadsheet/'+c),...articleData.map(a=>'articles/'+a.slug)]){const prefix=(lang==='en'?'':lang+'/')+route;const file=join(root,'.astro-output',prefix,'index.html');const html=await readFile(file,'utf8'),$=load(html);assert.equal($('h1').length,1,file);assert.equal($('html').attr('lang'),lang);assert.equal($('link[hreflang]').length,langs.length+1);assert.equal($('meta[name=robots]').attr('content'),route==='product'?'noindex,follow':'index,follow,max-image-preview:large');assert($('title').text().length>10);assert(!/>\s*(?:undefined|\[object Object\])\s*</.test(html),file);assert.equal($('link[rel=canonical]').attr('href'),'https://superbuybuyss.com/'+(prefix?prefix.replace(/\/$/,'')+'/':''));
  for(const a of $('a[href^="/"]').toArray()){const href=$(a).attr('href'),url=new URL(href,'https://check.example');const local=join(root,'.astro-output',decodeURIComponent(url.pathname),url.pathname.endsWith('/')?'index.html':'');assert((await stat(local)).isFile(),'Broken internal link '+href+' in '+file);links++;}
  pages++;
 }
}
assert.equal(purchaseUrl('https://weidian.com/item.html?itemID=7755101935'),'https://www.superbuy.com/en/page/buy/?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7755101935&partnercode=ES7pVI');
assert.equal(purchaseUrl('https://example.com/item.html'),null);assert.throws(()=>sourceUrl('https://example.com/AllProducts/'));assert.throws(()=>sourceUrl('https://cnfansge.com/admin/'));
console.log(JSON.stringify({passed:true,languages:langs,articlesPerLanguage:13,faqPerLanguage:28,pages,internalLinks:links,checks:['full translation structure','source citations','HTML lang','canonical and hreflang','single H1','production indexing','internal links','affiliate mapping','source allowlist']}));

// Hosted tenant Workers cannot use caches.default. API requests must still work.
Object.defineProperty(globalThis,'caches',{get(){throw new Error('Default cache denied')},configurable:true});
const {default:worker}=await import('../dist/server/index.js');
const invalid=await worker.fetch(new Request('https://test.example/api/product?id=invalid'),{},{});
assert.equal(invalid.status,400);
assert.equal(invalid.headers.get('x-robots-tag'),'noindex, nofollow');
console.log('Denied-cache runtime regression passed');

// These routing checks deliberately avoid a live dependency; rendering is checked below with fixtures.
const realFetch=globalThis.fetch;globalThis.fetch=async()=>new Response('unavailable',{status:503});
// The custom domain is indexable; workers.dev previews and product shells are not.
const prod=await worker.fetch(new Request('https://superbuybuyss.com/'),{},{});
assert.equal(prod.status,200);assert.equal(prod.headers.get('x-robots-tag'),null);
const preview=await worker.fetch(new Request('https://superbuybuyss-com.hehaize88.workers.dev/'),{},{});
assert.equal(preview.headers.get('x-robots-tag'),'noindex, nofollow');
const www=await worker.fetch(new Request('https://www.superbuybuyss.com/fr/faq/?q=photos'),{},{});
assert.equal(www.status,301);assert.equal(www.headers.get('location'),'https://superbuybuyss.com/fr/faq/?q=photos');
const missing=await worker.fetch(new Request('https://superbuybuyss.com/missing-page/'),{},{});assert.equal(missing.status,404);
const product=await worker.fetch(new Request('https://superbuybuyss.com/product/?id=6681'),{},{});assert.equal(product.headers.get('x-robots-tag'),'noindex, follow');
const robots=await worker.fetch(new Request('https://superbuybuyss.com/robots.txt'),{},{});assert.match(await robots.text(),/Sitemap: https:\/\/superbuybuyss\.com\/sitemap\.xml/);
const previewRobots=await worker.fetch(new Request('https://superbuybuyss-com.hehaize88.workers.dev/robots.txt'),{},{});assert.match(await previewRobots.text(),/Disallow: \//);
const xml=await readFile(join(root,'.astro-output/sitemap.xml'),'utf8'),map=load(xml,{xmlMode:true});
assert.equal(map('url').length,155);assert.equal(new Set(map('loc').map((_,el)=>map(el).text()).get()).size,155);
for(const loc of map('loc').toArray()){const u=new URL(map(loc).text());assert.equal(u.origin,'https://superbuybuyss.com');assert(!u.pathname.includes('/product/'));const p=load(await readFile(join(root,'.astro-output',u.pathname,'index.html'),'utf8'));assert(!p('meta[name=robots]').attr('content').includes('noindex'));}
assert.equal(map('url').first().find('xhtml\\:link').length,6);
console.log('Production redirects, preview isolation and 155 sitemap URLs passed');

globalThis.fetch=realFetch;
const categoryRedirect=await worker.fetch(new Request('https://superbuybuyss.com/de/spreadsheet/?category=shoes&sort=latest'),{},{});
assert.equal(categoryRedirect.status,301);assert.equal(categoryRedirect.headers.get('location'),'https://superbuybuyss.com/de/spreadsheet/shoes/?sort=latest');
for(const a of en.slice(-3)){assert(a.wordCount>=1200&&a.wordCount<=1800);assert.equal(a.reviewedAt,'2026-10-30');}
await import('./check-catalog.mjs');
