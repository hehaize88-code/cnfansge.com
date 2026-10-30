import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {classifyClick} from '../src/lib/analytics.mjs';
import {relatedSlugs,quickSlugs,seo} from '../src/data/seo.mjs';

test('new articles have complete localized bodies, matching structure and dated evidence',async()=>{
  const data=JSON.parse(await readFile('src/data/articles.json'));
  for(const slug of quickSlugs){
    const en=data.en.find(a=>a.slug===slug);
    const count=en.sections.flatMap(s=>[...s.paragraphs,...(s.bullets||[])]).join(' ').split(/\s+/).length;
    assert.ok(count>=1200&&count<=1800,`${slug}: ${count}`);
    for(const lang of ['en','de','es','fr','it']){
      const article=data[lang].find(a=>a.slug===slug);
      assert.equal(article.datePublished,'2026-10-30');
      assert.equal(article.dateModified,'2026-10-30');
      assert.deepEqual(article.sections.map(s=>s.paragraphs.length),en.sections.map(s=>s.paragraphs.length),lang+slug);
      assert.ok(article.sections.length>=9);
      if(lang!=='en')assert.notEqual(JSON.stringify(article.sections),JSON.stringify(en.sections));
      assert.ok(article.sources.every(s=>['www.allchinabuy.com','allchinabuy.com','m.allchinabuy.com'].includes(new URL(s.url).hostname)));
    }
  }
  for(const [lang,list] of Object.entries(data)){
    assert.ok(seo[lang].allArticles.includes('13'));
    for(const article of list)for(const related of relatedSlugs[article.slug])assert.ok(list.some(a=>a.slug===related),`${lang}: missing ${related}`);
    for(const slug of ['allchinabuy-spreadsheet-guide','allchinabuy-shortlist-checklist','allchinabuy-maintenance-link-troubleshooting'])assert.equal(list.find(a=>a.slug===slug).dateModified,'2026-10-30');
  }
});

test('navigation events measure the funnel without search text or outbound query strings',()=>{
  const origin='https://allchinabuybuy.com';
  const e=classifyClick('/fr/articles/allchinabuy-shoes-spreadsheet/','/fr/spreadsheet/?q=private&category=shoes',origin);
  assert.equal(e.name,'article_catalog_click');
  assert.deepEqual(e.params,{source_path:'/fr/articles/allchinabuy-shoes-spreadsheet/',target_path:'/fr/spreadsheet/'});
  const p=classifyClick('/it/spreadsheet/','/it/product/?id=6681&ref=private',origin);
  assert.equal(p.name,'product_open');assert.equal(p.params.product_id,'6681');
  const buy=classifyClick('/product/','https://www.allchinabuy.com/en/page/buy/?partnercode=wbVgOT&url=private',origin);
  assert.equal(buy.name,'purchase_link_click');assert.equal(JSON.stringify(buy).includes('private'),false);
  assert.equal(classifyClick('/product/','https://www.allchinabuy.com.evil.test/',origin),null);
  assert.equal(classifyClick('/articles/','https://www.allchinabuy.com/',origin),null);
});
