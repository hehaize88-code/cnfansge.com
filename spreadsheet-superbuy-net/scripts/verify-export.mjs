import fs from 'node:fs';
import assert from 'node:assert/strict';
const origin='https://spreadsheet-superbuy.net';
const langs=['en','de','fr','es','it'];
const pages=['','spreadsheet','finds','guide','qc','shipping','articles','faq'];
const legacy=JSON.parse(fs.readFileSync('app/content/legacy-en.json','utf8'));
const newer=['superbuy-working-days','superbuy-payment-withdrawal','superbuy-returns-refunds'];
const slugs=[...newer,...legacy.rows.map(r=>r[0])];
const guides=Object.fromEntries(langs.map(l=>[l,JSON.parse(fs.readFileSync(`app/content/guides-${l}.json`,'utf8'))]));
const pathFor=(lang,path)=>`${lang==='en'?'':`/${lang}`}/${path}${path?'/':''}`;
const paths=pages.concat(slugs.map(s=>`articles/${s}`));
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const attrs=s=>Object.fromEntries([...s.matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));
const sitemap=fs.readFileSync('dist/client/sitemap.xml','utf8');
assert.equal([...sitemap.matchAll(/<loc>/g)].length,105);
let checked=0,links=0;
for(const lang of langs){
 const old=JSON.parse(fs.readFileSync(`app/content/legacy-${lang}.json`,'utf8'));
 for(const slug of slugs){
  const a=guides[lang][slug]||{sections:old.articles[slug]};
  assert.ok(a.sections?.length,`Missing article ${lang}/${slug}`);
  const source=guides.en[slug]||{sections:legacy.articles[slug]};
  assert.equal(a.sections.length,source.sections.length,`Missing section ${lang}/${slug}`);
  assert.ok(a.sections.every(s=>s.heading&&s.paragraphs?.length),`Empty section ${lang}/${slug}`);
  if(lang!=='en') assert.notEqual(JSON.stringify(a.sections),JSON.stringify(source.sections),`English fallback ${lang}/${slug}`);
 }
 for(const path of paths){
  const url=origin+pathFor(lang,path),file=`dist/client${pathFor(lang,path)}index.html`;
  const html=fs.readFileSync(file,'utf8');
  assert.ok(html.includes(`<html lang="${lang}"`),`html lang ${file}`);
  const tags=[...html.matchAll(/<link\s[^>]+>/g)].map(m=>attrs(m[0]));
  const canonical=tags.filter(t=>t.rel==='canonical');assert.equal(canonical.length,1);assert.equal(canonical[0].href,url);
  const alternatives=tags.filter(t=>t.rel==='alternate'&&t.hrefLang);
  assert.equal(alternatives.length,6,`hreflang count ${file}`);
  for(const l of [...langs,'x-default']) assert.ok(alternatives.some(t=>t.hrefLang===l&&t.href===origin+pathFor(l==='x-default'?'en':l,path)),`hreflang ${l}: ${file}`);
  assert.ok(sitemap.includes(`<loc>${url}</loc>`),`sitemap missing ${url}`);
  assert.ok(html.includes('G-F1ZYDC5LV5'),`GA4 missing ${file}`);
  if(path.startsWith('articles/')){
   const slug=path.split('/')[1],a=guides[lang][slug]||{sections:old.articles[slug]};
   const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
   assert.ok(schemas.some(s=>s['@type']==='Article'&&s.inLanguage===lang&&s.mainEntityOfPage===url));
   assert.ok(schemas.some(s=>s['@type']==='BreadcrumbList'));
   for(const section of a.sections) for(const paragraph of section.paragraphs)assert.ok(decode(html).includes(paragraph),`Missing rendered paragraph ${file}`);
  }
  if(path==='articles') for(const slug of slugs)assert.ok(html.includes(`href="${pathFor(lang,`articles/${slug}`)}"`),`Article index missing ${lang}/${slug}`);
  for(const m of html.matchAll(/<a\s[^>]+>/g)){
   const {href}=attrs(m[0]);if(!href||href.startsWith('#'))continue;links++;
   const u=new URL(href,origin);
   if(u.origin!==origin){assert.equal(u.origin,'https://cnfansge.com',`Unexpected external destination ${href}`);continue;}
   const target=u.pathname.endsWith('/')?`${u.pathname}index.html`:u.pathname;
   assert.ok(fs.existsSync(`dist/client${target}`),`Broken internal link ${file} -> ${href}`);
  }
  checked++;
 }
}
for(const slug of newer){const words=guides.en[slug].sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length;assert.ok(words>=1200&&words<=1800,`${slug}: ${words} words`);}
assert.ok(fs.readFileSync('dist/client/robots.txt','utf8').includes(`${origin}/sitemap.xml`));
console.log(`Verified ${checked} localized pages, 65 complete articles, 105 sitemap URLs, reciprocal hreflang, JSON-LD, GA4 and ${links} links.`);
