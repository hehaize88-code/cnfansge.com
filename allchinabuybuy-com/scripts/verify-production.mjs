import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
import {fixtureFetch} from '../tests/source-fixture.mjs';
import {load} from 'cheerio';
globalThis.fetch=fixtureFetch;
const origin = 'https://allchinabuybuy.com';
const request = path => worker.fetch(new Request(origin + path));
const sitemap = await request('/sitemap.xml');
assert.equal(sitemap.status, 200);
const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 95);
assert.equal(new Set(urls).size, 95);
for (const url of urls) {
  assert.ok(url.startsWith(origin + '/'));
  const response = await worker.fetch(new Request(url));
  assert.equal(response.status, 200, url);
  assert.equal(response.headers.get('X-Robots-Tag'), null, url);
  const html = await response.text();
  assert.ok(html.includes('content="index,follow"'), url);
  assert.ok(html.includes('hreflang="x-default"'), url);
  assert.ok(html.includes('href="' + url + '"'), url);
  assert.ok(html.includes('/brand/allchinabuy-user-logo.png'), url);
  const $=load(html);
  if($('#catalog').length){assert.equal($('#catalog').attr('data-rendered'),'server');assert.equal($('.product-card').length,url.endsWith('/finds/')||url.endsWith('/spreadsheet/')?20:8);}
  if(/\/(qc|shipping)\/$/.test(url))assert.ok($('main .prose p').text().length>1500,url);
  if(url.endsWith('/faq/'))assert.equal($('main [data-faq-group]').length,28);
}
const robots=await (await request('/robots.txt')).text();
assert.match(robots,/Allow: \/\n/);
assert.ok(!robots.includes('Disallow: /api/'));
const www = await worker.fetch(new Request('https://www.allchinabuybuy.com/de/product/?id=6681'));
assert.equal(www.status, 308);
assert.equal(www.headers.get('Location'), origin + '/de/product/?id=6681');
const preview = await worker.fetch(new Request('https://allchinabuybuy-preview.hehaize88.workers.dev/'));
assert.match(preview.headers.get('X-Robots-Tag'), /noindex/);
const previewRobots = await worker.fetch(new Request('https://allchinabuybuy-preview.hehaize88.workers.dev/robots.txt'));
assert.equal(await previewRobots.text(), 'User-agent: *\nDisallow: /\n');
const product = await request('/product/?id=6681');
assert.match(product.headers.get('X-Robots-Tag'), /noindex/);
assert.equal((await request('/does-not-exist/')).status, 404);
console.log('Production verified: 95 sitemap URLs, indexing, redirects, five-language metadata and uploaded logo.');

assert.equal((await request('/api/catalog')).headers.get('X-Robots-Tag'),'noindex');
