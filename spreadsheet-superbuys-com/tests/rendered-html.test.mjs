import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {load} from 'cheerio';
const base='https://spreadsheet-superbuys.com';
const locales=['en','de','fr','es','it','pl'];
const root=path.resolve('out');
const all=[];
function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){if(f.isDirectory()&&!f.name.startsWith('_')&&f.name!=='404')walk(path.join(dir,f.name));else if(f.name==='index.html')all.push(path.join(dir,f.name));}}
walk(root);
const pages=all.map(f=>({file:f,route:'/'+path.relative(root,path.dirname(f)).replaceAll(path.sep,'/').replace(/^\/$/,'')+ (path.dirname(f)===root?'':'/'),$:load(fs.readFileSync(f,'utf8'))}));
const known=new Set(pages.map(p=>p.route));
test('114 complete pages have unique canonicals, titles and reciprocal language alternates',()=>{
 assert.equal(pages.length,114);
 const canonical=new Set();
 for(const {route,$} of pages){
  assert.equal($('h1').length,1,route);
  const language=$('html').attr('lang');assert.ok(locales.includes(language));
  assert.equal($('link[rel="canonical"]').attr('href'),base+route);
  canonical.add($('link[rel="canonical"]').attr('href'));
  assert.equal($('link[hreflang]').length,7,route);
  assert.ok($('meta[name="description"]').attr('content')?.length>40,route);
  for(const code of locales){const href=$(`link[hreflang="${code}"]`).attr('href');assert.ok(known.has(new URL(href).pathname),href);}
  assert.equal($('[data-language]').length,6,route);
  for(const a of $('[data-language]').toArray()) assert.ok(known.has($(a).attr('href')));
  assert.equal($('script[src="/site.js"]').length,1);
  assert.equal($('script[src*="googletagmanager"]').length,1);
  assert.equal($('script[src*="/_next/"]').length,0,'no hydration overriding translations');
 }
 assert.equal(canonical.size,114);
});
test('all 15 articles have complete translated bodies and localized navigation',()=>{
 for(const code of locales){
  const local=pages.filter(p=>p.$('html').attr('lang')===code);
  const articles=local.filter(p=>p.$('article.article-body').length);
  assert.equal(articles.length,15,code);
  for(const {route,$} of articles){
   const text=$('article.article-body').text();assert.ok(text.split(/\s+/).length>850,`${route}: article body unexpectedly short`);
   const enRoute=code==='en'?route:route.replace(new RegExp(`^/${code}`),'');
   const original=pages.find(p=>p.route===enRoute).$;
   assert.equal($('.article-body > section[id^="section-"]').length,6,route);
   assert.equal($('.article-body > section[id^="section-"] p').length,original('.article-body > section[id^="section-"] p').length,route);
   if(code!=='en'){
    const enParagraphs=new Set(original('.article-body p').map((_,n)=>original(n).text()).get());
    for(const paragraph of $('.article-body p').toArray()){
     const value=$(paragraph).text();if(value.length>100)assert.ok(!enParagraphs.has(value),`${route}: English fallback`);
    }
   }
   const schemas=$('script[type="application/ld+json"]').map((_,n)=>JSON.parse($(n).text())).get();
   const article=schemas.find(s=>s['@type']==='Article');assert.equal(article.inLanguage,code);assert.equal(article.mainEntityOfPage,base+route);
  }
 }
});
test('internal page links stay in the selected language and every local destination exists',()=>{
 for(const {route,$} of pages){
  const language=$('html').attr('lang');
  for(const a of $('a[href]').not('[data-language]').toArray()){
   const href=$(a).attr('href');const u=new URL(href,base+route);
   if(u.origin===base){assert.ok(known.has(u.pathname),`${route} -> ${href}`);if(language!=='en')assert.ok(u.pathname.startsWith(`/${language}/`),`${route} leaves language: ${href}`);}
   else assert.equal(u.hostname,'cnfansge.com');
  }
  for(const n of $('link[rel="stylesheet"],script[src="/site.js"]').toArray()){
   const asset=$(n).attr('href')||$(n).attr('src');assert.ok(fs.existsSync(path.join(root,asset)),asset);
  }
 }
});
test('sitemap and published policy examples are complete',()=>{
 const xml=load(fs.readFileSync(path.join(root,'sitemap.xml'),'utf8'),{xml:true});
 assert.equal(xml('url').length,114);
 for(const n of xml('loc').toArray())assert.ok(known.has(new URL(xml(n).text()).pathname));
 const shipping=pages.find(p=>p.route==='/shipping-cost/').$;
 assert.match(shipping('table').text(),/6000/);assert.match(shipping('table').text(),/5000/);
 const storage=pages.find(p=>p.route==='/warehouse-storage/').$;
 assert.match(storage('table').text(),/90 days/);assert.match(storage('table').text(),/180 days/);assert.match(storage('table').text(),/CNY 0.1/);
 const js=fs.readFileSync(path.join(root,'site.js'),'utf8');
 for(const event of ['catalog_outbound_click','product_index_search','article_click','language_change'])assert.ok(js.includes(event));
 assert.ok(!js.includes('search_term:'),'do not send free-form search input to GA');
});
