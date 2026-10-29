import test from 'node:test';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
import {catalogSeo,applyCatalogSeo} from '../worker/seo.mjs';
import {ui,publishedLocales,content} from '../src/data/content.mjs';
import {localePath} from '../src/data/config.mjs';

const origin='https://cssbuyhome.com';
test('pagination has a distinct canonical and localized title in every language',()=>{
 for(const lang of publishedLocales){
  const path=localePath(lang,'spreadsheet/'),t=ui(lang);
  const seo=catalogSeo(new URL(origin+path+'?category=all&page=19&utm_source=test'),origin,t);
  assert.equal(seo.canonical,origin+path+'?page=19');
  assert.equal(seo.noindex,false);
  assert.ok(seo.title.includes(`${t.page} 19`));
  assert.equal(catalogSeo(new URL(origin+path+'?q=&category=all&sort=popular&page=1'),origin,t).canonical,origin+path);
 }
});
test('search and alternative sorting are excluded without excluding category pagination',()=>{
 const t=ui();
 for(const query of ['q=shoes','sort=price-up','cursor=/AllProducts/','slice=2'])assert.equal(catalogSeo(new URL(origin+'/spreadsheet/?'+query),origin,t).noindex,true);
 const category=catalogSeo(new URL(origin+'/de/spreadsheet/?category=shoes&page=4'),origin,ui('de'));
 assert.equal(category.canonical,origin+'/de/spreadsheet/?category=shoes&page=4');
 assert.equal(category.noindex,false);
});
test('runtime canonical, social URL and reciprocal hreflang agree on the page and category',()=>{
 const $=load('<html><head><title>old</title><meta name="robots" content="index,follow"><link rel="canonical"><meta property="og:url"><meta property="og:title">'+publishedLocales.map(lang=>`<link hreflang="${lang}" href="${origin}${localePath(lang,'spreadsheet/')}">`).join('')+'</head><body><section class="shop"><div class="page-heading"><h1>old</h1></div></section></body></html>');
 const seo=applyCatalogSeo($,new URL(origin+'/fr/spreadsheet/?category=shoes&page=4'),origin,ui('fr'));
 assert.equal($('link[rel=canonical]').attr('href'),seo.canonical);
 assert.equal($('meta[property="og:url"]').attr('content'),seo.canonical);
 for(const lang of publishedLocales)assert.equal($(`link[hreflang=${lang}]`).attr('href'),origin+localePath(lang,'spreadsheet/')+'?category=shoes&page=4');
 assert.equal($('h1').text(),seo.title);
});
test('new articles have complete original text and dated publication metadata',()=>{
 for(const id of ['tracking','link-help']){
  const a=content().articles.find(a=>a.id===id);
  assert.ok(a,id);
  const words=[a.intro,...a.sections.flatMap(s=>s.paragraphs),...a.takeaways].join(' ').split(/\s+/).length;
  assert.ok(words>=1200,`${id}: ${words}`);
  for(const lang of publishedLocales){const localized=content(lang).articles.find(a=>a.id===id);assert.equal(localized.updatedAt,'2026-10-29');assert.equal(localized.publishedAt,'2026-10-29');}
 }
});
