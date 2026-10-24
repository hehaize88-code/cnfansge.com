import assert from 'node:assert/strict';
import fs from 'node:fs';
import {allLocales as locales,paths,prefix} from '../src/data/locales.mjs';
import {load} from 'cheerio';
import {isIndexableRoute} from '../worker/seo.mjs';
import {buyUrl} from '../worker/source.mjs';

const partial=process.argv.includes('--partial');
const en=JSON.parse(fs.readFileSync('src/data/content/en.json','utf8'));
const leaves=(x,p='')=>typeof x==='string'?{[p]:x}:Object.assign({},...Object.entries(x).map(([k,v])=>leaves(v,`${p}.${k}`)));
const englishUI=leaves(en.ui);let articles=0,faqs=0,pages=0;
assert.equal(en.articles.length,10);assert.ok(en.faqs.length>=21);
for(const [lang] of Object.entries(locales)){
 const filename=`src/data/content/${lang}.json`;
 if(partial&&!fs.existsSync(filename))continue;
 assert.ok(fs.existsSync(filename),`Missing locale ${lang}`);
 const d=JSON.parse(fs.readFileSync(filename,'utf8')),ui=leaves(d.ui);
 assert.deepEqual(Object.keys(ui).sort(),Object.keys(englishUI).sort(),`${lang}: UI keys`);
 for(const [key,text] of Object.entries(ui))assert.ok(text.trim(),`${lang}: empty ${key}`);
 if(!partial){assert.equal(d.articles.length,10,`${lang}: article count`);assert.equal(d.faqs.length,en.faqs.length,`${lang}: FAQ count`)}
 for(const f of d.faqs){const ref=en.faqs.find(x=>x.id===f.id);assert.ok(ref,`${lang}: FAQ id ${f.id}`);assert.ok(f.question?.trim()&&f.answer?.trim());assert.deepEqual(f.sources,ref.sources,`${lang}: FAQ sources ${f.id}`);if(lang!=='en')assert.notEqual(f.answer,ref.answer,`${lang}: untranslated FAQ ${f.id}`);faqs++}
 for(const a of d.articles){const ref=en.articles.find(x=>x.slug===a.slug);assert.ok(ref,`${lang}: unknown article ${a.slug}`);assert.equal(a.sections.length,ref.sections.length,`${lang}/${a.slug}: sections`);assert.deepEqual(a.sources,ref.sources,`${lang}/${a.slug}: sources`);assert.ok(a.title?.trim()&&a.description?.trim()&&a.intro?.trim());
  for(let i=0;i<a.sections.length;i++){const section=a.sections[i],original=ref.sections[i];assert.equal(section.paragraphs.length,original.paragraphs.length,`${lang}/${a.slug}/${i}: paragraph count`);assert.equal(section.bullets?.length||0,original.bullets?.length||0,`${lang}/${a.slug}/${i}: bullet count`);for(let j=0;j<section.paragraphs.length;j++){assert.ok(section.paragraphs[j].trim());if(lang!=='en')assert.notEqual(section.paragraphs[j],original.paragraphs[j],`${lang}/${a.slug}/${i}/${j}: English fallback`)}}
  articles++;
 }
 if(!partial&&fs.existsSync('.astro-output'))for(const route of [...paths,...d.articles.map(a=>'articles/'+a.slug)]){const file=`.astro-output${prefix(lang)}/${route?route+'/':''}index.html`;assert.ok(fs.existsSync(file),`Missing route ${file}`);const $=load(fs.readFileSync(file,'utf8'));assert.equal($('html').attr('lang'),lang);assert.equal($('script[data-site-analytics]').length,1,`${file}: one analytics tag`);assert.ok($('script[data-site-analytics]').text().includes('G-WEF871FSL0'),`${file}: correct analytics stream`);assert.equal($('h1').length,route==='product'?0:1,`${file}: H1`);assert.equal($('link[rel=alternate][hreflang]').length,25,`${file}: alternate languages`);assert.equal($('meta[name=robots]').attr('content'),isIndexableRoute(route)?'index,follow,max-image-preview:large':'noindex,follow');assert.equal($('link[rel=canonical]').attr('href'),'https://kakobuybuys.com'+prefix(lang)+'/'+(route?route+'/':''));for(const el of $('script[type="application/ld+json"]').toArray()){const schema=JSON.parse($(el).text());assert.equal(schema.inLanguage,lang);if(schema['@type']==='FAQPage')assert.equal(schema.mainEntity.length,28);if(schema['@type']==='Article')assert.equal(schema.headline,d.articles.find(a=>route==='articles/'+a.slug).title);}assert.ok($('title').text()&&!$('title').text().includes('undefined'));for(const el of $('a[href^="/"]').toArray()){const url=new URL($(el).attr('href'),'https://preview.test');if(url.pathname.includes('/api/'))continue;const target='.astro-output'+url.pathname+(url.pathname.endsWith('/')?'index.html':'');assert.ok(fs.existsSync(target),`${file}: broken link ${url.pathname}`)}pages++}
}
const link=new URL(buyUrl('https://weidian.com/item.html?itemID=7617402324'));
assert.equal(link.origin,'https://item2.kakobuy.com');assert.equal(link.searchParams.get('affcode'),'rf8x8');assert.equal(link.searchParams.get('url'),'https://weidian.com/item.html?itemID=7617402324');assert.equal(buyUrl('https://evil.invalid/item?id=7617402324'),null);assert.equal(buyUrl('javascript:alert(1)'),null);
console.log(JSON.stringify({mode:partial?'development':'complete',locales:Object.keys(locales).length,articles,faqs,pages,uiKeys:Object.keys(englishUI).length,purchaseLink:'passed'},null,2));
