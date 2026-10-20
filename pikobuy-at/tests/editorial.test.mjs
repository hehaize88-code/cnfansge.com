import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';

const directory=new URL('../src/content/editorial/',import.meta.url);
const locales=['en','de','es','fr','it','pl','pt','ro','sv','nl','da','fi','el','cs','hu','bg','sk','hr','sl','lt','lv','et','ga','mt'];
const en=JSON.parse(await readFile(new URL('en.json',directory),'utf8'));
const shape=content=>({
  labels:Object.keys(content.labels).sort(), groups:Object.keys(content.groups).sort(),
  faqs:content.faqs.map(f=>({id:f.id,group:f.group,sources:f.sources})),
  articles:content.articles.map(a=>({slug:a.slug,sources:a.sources,related:a.related,sections:a.sections.map(s=>({id:s.id,paragraphs:s.paragraphs.length,bullets:s.bullets?.length||0}))}))
});
test('Every advertised language contains complete, structurally equivalent editorial content',async()=>{
  assert.equal(en.articles.length,10);
  assert.ok(en.faqs.length>=21);
  assert.equal(new Set(en.articles.map(a=>a.slug)).size,10);
  assert.equal(new Set(en.faqs.map(f=>f.id)).size,en.faqs.length);
  assert.deepEqual((await readdir(directory)).filter(f=>f.endsWith('.json')).sort(),locales.map(l=>`${l}.json`).sort());
  for(const locale of locales){
    const content=JSON.parse(await readFile(new URL(`${locale}.json`,directory),'utf8'));
    assert.deepEqual(shape(content),shape(en),`Incomplete content: ${locale}`);
    const bodyUrls=value=>JSON.stringify(value.articles).match(/https?:\/\/[^\s"<>]+/g)||[];
    assert.deepEqual(bodyUrls(content),bodyUrls(en),`Changed source/example URL: ${locale}`);
    const check=value=>{if(typeof value==='string')assert.ok(value.trim()&&!/\b(?:TODO|TBD)\b/.test(value)&&!/lorem ipsum/i.test(value),`Placeholder in ${locale}`);else if(Array.isArray(value))value.forEach(check);else if(value&&typeof value==='object')Object.values(value).forEach(check);};
    check(content);
    if(locale!=='en'){
      assert.notEqual(content.labels.articlesIntro,en.labels.articlesIntro,`English landing text: ${locale}`);
      content.articles.forEach((a,i)=>a.sections.forEach((s,j)=>s.paragraphs.forEach((p,k)=>assert.notEqual(p,en.articles[i].sections[j].paragraphs[k],`English article paragraph: ${locale}/${a.slug}/${s.id}`))));
      content.faqs.forEach((f,i)=>assert.notEqual(f.a,en.faqs[i].a,`English FAQ: ${locale}/${f.id}`));
    }
  }
});
test('Articles have distinct content, working related slugs and official source references',()=>{
  for(const article of en.articles){
    assert.ok(article.sections.length>=4,article.slug);
    const body=[article.summary,...article.sections.flatMap(s=>[s.title,...s.paragraphs,...(s.bullets||[])])].join(' ');
    assert.ok(body.split(/\s+/).length>=500,`Article is incomplete: ${article.slug}`);
    assert.equal(new Set(article.sections.map(s=>s.id)).size,article.sections.length);
    assert.ok(article.related.length>=2);
    article.related.forEach(slug=>assert.ok(slug!==article.slug&&en.articles.some(a=>a.slug===slug),`Bad related link: ${slug}`));
  }
  for(const item of [...en.articles,...en.faqs]){
    assert.ok(item.sources.length);
    item.sources.forEach(url=>assert.ok(['https://www.pikobuy.com','https://cnfansge.com'].includes(new URL(url).origin)));
  }
});
