import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {load} from 'cheerio/slim';
const worker=(await import('../dist/server/index.js')).default;
const origin='https://usfansbuys.com';
const request=path=>worker.fetch(new Request(origin+path));
const map=await request('/sitemap.xml');assert.equal(map.status,200);assert.match(map.headers.get('content-type'),/xml/);const xml=load(await map.text(),{xmlMode:true});const urls=xml('loc').toArray().map(el=>xml(el).text());assert.equal(urls.length,120);assert.equal(new Set(urls).size,120);assert.ok(urls.every(u=>u.startsWith(origin+'/')&&!u.includes('?')));
for(const u of urls){const rel=new URL(u).pathname;const body=await fs.readFile(`generated/static${rel}index.html`,'utf8');const $=load(body);assert.equal($('link[rel=canonical]').attr('href'),u);assert.equal($('meta[name=robots]').attr('content'),'index,follow');assert.equal($('link[hreflang]').length,6);}
const robots=await (await request('/robots.txt')).text();assert.match(robots,/Sitemap: https:\/\/usfansbuys\.com\/sitemap.xml/);assert.ok(!/^Disallow: \/$/m.test(robots));
for(const path of ['/faq/','/qc/','/shipping/','/articles/','/de/articles/']){const r=await request(path);assert.equal(r.status,200,path);assert.equal(r.headers.get('x-robots-tag'),null,path);}
for(const input of ['https://www.usfansbuys.com/fr/articles/?x=1','http://usfansbuys.com/fr/articles/?x=1']){const r=await worker.fetch(new Request(input));assert.equal(r.status,308);assert.equal(r.headers.get('location'),origin+'/fr/articles/?x=1');}
const tracking=await request('/articles/?utm_source=test');assert.equal(tracking.headers.get('x-robots-tag'),null);
const filtered=await request('/articles/?q=test');assert.equal(filtered.headers.get('x-robots-tag'),'noindex,follow');
const utility=await request('/image-search/');assert.equal(utility.headers.get('x-robots-tag'),'noindex,follow');
const legacy=await request('/de/spreadsheet/?category=shoes&page=2');assert.equal(legacy.status,301);assert.equal(legacy.headers.get('location'),origin+'/de/category/shoes/?page=2');
const product=await request('/product/?id=6681');assert.equal(product.headers.get('x-robots-tag'),'noindex,follow');
console.log('PASS: production canonical/hreflang, 120 sitemap URLs, indexable editorial pages, robots, HTTPS/www redirects and noindex utility/filter pages.');
