import assert from 'node:assert/strict';
import fs from 'node:fs';
import {load} from 'cheerio';
import worker from '../dist/server/index.js';
import {allLocales} from '../src/data/locales.mjs';

const origin='https://kakobuybuys.com',preview='https://kakobuybuys-preview.hehaize88.workers.dev';
const request=(path,host=origin,method='GET')=>worker.fetch(new Request(host+path,{method}),{},{});
// These release checks must not depend on live merchandise or mutate a source.
globalThis.fetch=async()=>{throw new Error('Network calls are disabled in release checks');};
let checks=0;
const expect=async(path,host,robots)=>{
  const response=await request(path,host);assert.equal(response.status,200,path);
  const $=load(await response.text());assert.equal($('meta[name=robots]').attr('content'),robots,path);
  assert.equal(response.headers.get('x-robots-tag'),robots,path);checks++;
  return $;
};
await expect('/guide/',origin,'index,follow,max-image-preview:large');
await expect('/de/faq/',origin,'index,follow,max-image-preview:large');
await expect('/guide/',preview,'noindex,nofollow');
await expect('/search/visual/',origin,'noindex,follow');
const filtered=await expect('/articles/?page=2',origin,'noindex,follow');
assert.equal(filtered('link[rel=canonical]').attr('href'),origin+'/articles/');
const tracked=await expect('/guide/?utm_source=release-check',origin,'index,follow,max-image-preview:large');
assert.equal(tracked('link[rel=canonical]').attr('href'),origin+'/guide/');
for(const [host,path,destination] of [
 ['https://www.kakobuybuys.com','/de/faq/?ref=test',origin+'/de/faq/?ref=test'],
 ['http://kakobuybuys.com','/guide/',origin+'/guide/'],
 [origin,'/de/index.html',origin+'/de/'],
 [origin,'/articles',origin+'/articles/']
]){const response=await request(path,host);assert.equal(response.status,308);assert.equal(response.headers.get('location'),destination);checks++;}
const robots=await (await request('/robots.txt')).text();assert.ok(robots.includes('Sitemap: '+origin+'/sitemap.xml'));assert.ok(!robots.includes('Disallow: /\n'));checks++;
assert.equal(await (await request('/robots.txt',preview)).text(),'User-agent: *\nDisallow: /\n');checks++;
assert.equal((await request('/sitemap.xml',preview)).status,404);checks++;
assert.equal((await request('/not-a-real-page/')).status,404);checks++;
assert.equal(await (await request('/guide/',origin,'HEAD')).text(),'');checks++;
assert.equal((await request('/api/product')).headers.get('x-robots-tag'),'noindex');checks++;
const indexResponse=await request('/sitemap.xml');assert.equal(indexResponse.status,200);assert.match(indexResponse.headers.get('content-type'),/application\/xml/);assert.equal(indexResponse.headers.get('x-robots-tag'),null);
const index=load(await indexResponse.text(),{xmlMode:true});assert.equal(index('sitemap').length,24);
let urls=0;
for(const lang of Object.keys(allLocales)){
  assert.ok(index('sitemap>loc').toArray().some(el=>index(el).text()===origin+'/sitemaps/'+lang+'.xml'));
  const response=await request('/sitemaps/'+lang+'.xml');assert.equal(response.status,200);
  const $=load(await response.text(),{xmlMode:true});assert.equal($('url').length,19);
  for(const el of $('url').toArray()){
    const loc=$(el).find('loc').text(),url=new URL(loc);assert.equal(url.origin,origin);assert.equal(url.search,'');
    assert.ok(!/\/product\/|\/search\//.test(url.pathname));assert.ok(fs.existsSync('.astro-output'+url.pathname+'index.html'));
    assert.equal($(el).find('xhtml\\:link').length,25);urls++;
  }
}
assert.equal(urls,456);
console.log(JSON.stringify({productionPolicyChecks:checks,sitemaps:24,indexableUrls:urls,network:'disabled'},null,2));
