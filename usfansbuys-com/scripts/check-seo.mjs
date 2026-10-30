import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {load} from 'cheerio/slim';
import {catalogSeo,renderPagination,paginateHead} from '../src/lib/catalog-seo.mjs';
const url=p=>new URL('https://usfansbuys.com'+p);
for(const path of ['/spreadsheet/','/category/shoes/?page=2','/category/jersey/?page=3&utm_source=mail'])assert.equal(catalogSeo(url(path),true).noindex,false,path);
for(const suffix of ['?q=shoes','?sort=popular','?category=jackets','?page=-1','?page=2x','?page=10001'])assert.equal(catalogSeo(url('/spreadsheet/'+suffix),true).noindex,true,suffix);
assert.equal(catalogSeo(url('/articles/?page=2'),false).noindex,true);
for(const lang of ['en','de','es','fr','it']){
 const prefix=lang==='en'?'':'/'+lang;const d=JSON.parse(await fs.readFile(`src/data/${lang}.json`));
 const html=await fs.readFile(`generated/static${prefix}/category/shoes/index.html`,'utf8');
 const body=paginateHead(renderPagination(html,{page:2,hasNext:true,hasPrevious:true},url(prefix+'/category/shoes/?page=2')),'?page=2');const $=load(body);
 assert.equal($('[data-page]').text(),'2');assert.equal($('[data-prev]').attr('href'),prefix+'/category/shoes/');assert.equal($('[data-next]').attr('href'),prefix+'/category/shoes/?page=3');assert.equal($('[name=page]').attr('value'),'2');
 assert.equal($('link[rel=canonical]').attr('href'),'https://usfansbuys.com'+prefix+'/category/shoes/?page=2');assert.ok($('link[hreflang]').toArray().every(el=>$(el).attr('href').endsWith('/category/shoes/?page=2')));
 for(const a of d.articles){
  const article=load(await fs.readFile(`generated/static${prefix}/articles/${a.slug}/index.html`,'utf8'));
  assert.equal(article('time').attr('datetime'),a.dateModified);assert.ok(article('.related-callout a').length>=2);
  for(const href of article('a[href^="/"]').toArray().map(el=>article(el).attr('href'))){const pathname=href.split('?')[0].split('#')[0];if(pathname.endsWith('/'))await fs.access('generated/static'+pathname+'index.html');}
  if(a.datePublished==='2026-10-30'){
   const words=[a.intro,...a.sections.flatMap(s=>s.paragraphs)].join(' ').split(/\s+/).length;
   assert.ok(words>650,`${lang}/${a.slug} is not a complete article: ${words}`);
   if(lang==='en')assert.ok(words>=1200&&words<=1800,`${a.slug}: ${words}`);
   assert.ok(!/TODO[:：]|lorem ipsum/i.test(article('main').text()));
  }
 }
 assert.equal(d.articles.filter(a=>a.sections.some(s=>s.table)).length,4);
}
console.log('PASS: five-language article coverage, substantive new guides, internal links, tables, dates, crawlable pagination and query indexing rules.');
