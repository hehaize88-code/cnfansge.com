/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader transpiles the local TS modules for SSR verification. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,filename);
require.extensions['.css']=()=>{};
const React=require('react');
const {renderToStaticMarkup}=require('react-dom/server');
const {SiteView}=require('../app/site-view.tsx');
const RootLayout=require('../app/[[...segments]]/layout.tsx');
const {localeCodes,pagePaths,localPath}=require('../app/site-data.ts');
const {getArticle,articleKeys}=require('../app/article-registry.ts');
const {generateMetadata,resolve}=require('../app/[[...segments]]/page.tsx');
const {calculateWeight}=require('../app/weight-calculator.tsx');
const sitemap=require('../app/sitemap.ts').default;
const paths=new Set(localeCodes.flatMap(locale=>Object.keys(pagePaths).map(page=>localPath(locale,page))));
(async()=>{
  assert.equal(articleKeys.length,18);
  assert.equal(paths.size,160);
  const entries=sitemap();assert.equal(entries.length,160);
  assert.equal(new Set(entries.map(x=>x.url)).size,160);
  const titles=new Set();let checked=0;
  for(const locale of localeCodes){
    for(const [page] of Object.entries(pagePaths)){
      const path=localPath(locale,page),segments=path.split('/').filter(Boolean);
      assert.deepEqual(resolve(segments),{locale,page});
      const params=Promise.resolve({segments});
      const meta=await generateMetadata({params});
      assert.equal(meta.alternates.canonical,'https://kakobuyvip.pro'+path);
      assert.equal(Object.keys(meta.alternates.languages).length,6);
      assert.equal(meta.alternates.languages['x-default'],'https://kakobuyvip.pro'+localPath('en',page));
      for(const l of localeCodes)assert.equal(meta.alternates.languages[l],'https://kakobuyvip.pro'+localPath(l,page));
      assert(!titles.has(meta.title.absolute),`duplicate title: ${meta.title.absolute}`);titles.add(meta.title.absolute);
      const html=renderToStaticMarkup(await RootLayout.default({params,children:React.createElement(SiteView,{locale,page})}));
      assert(html.includes(`<html lang="${locale}"`));
      assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${path}: H1`);
      assert(!html.includes('undefined'),`${path}: undefined content`);
      for(const [,href] of html.matchAll(/href="(\/[^"]*)"/g)){
        const target=href.split(/[?#]/)[0];
        if(!/\.[a-z0-9]+$/i.test(target))assert(paths.has(target),`${path}: broken ${target}`);
      }
      for(const [,href] of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${href}"`),`${path}: missing anchor ${href}`);
      if(page.endsWith('Article')){
        assert(!html.includes('"@type":"FAQPage"'),`${path}: article FAQ schema`);
        assert(!/<h2>FAQ<\/h2>/.test(html),`${path}: FAQ content`);
        const article=getArticle(locale,page);assert(article.sections.length>=8);
        if(['feesArticle','usaArticle','qcArticle','shippingArticle','storageArticle'].includes(page)&&locale==='en'){
          const count=article.sections.flatMap(x=>x[1]).join(' ').trim().split(/\s+/).length;
          assert(count>=1200&&count<=1800,`${page}: ${count} words`);
          console.log(`${page}: ${count} English words`);
        }
        if(['feesArticle','usaArticle'].includes(page)&&locale!=='en')assert.notEqual(article.sections[0][1][0],getArticle('en',page).sections[0][1][0]);
      }
      if(page==='home'){
        const cards=html.split('class="section article-highlights"')[1].split('</section>')[0];
        assert.equal((cards.match(/<a /g)||[]).length,4);
      }
      checked++;
    }
  }
  assert.equal(resolve(['articles','not-a-real-article']),null);
  assert.deepEqual(calculateWeight(4,40,30,25,6000,.5),{volume:5,billable:5});
  assert.deepEqual(calculateWeight(6.1,40,30,25,6000,.5),{volume:5,billable:6.5});
  assert.equal(calculateWeight(4,40,30,25,0,.5),null);
  assert.equal(calculateWeight(-1,40,30,25,6000,.5),null);
  console.log(`PASS: ${checked} rendered locale pages, 18 articles × 5 languages, canonical/hreflang, internal links, sitemap, headings, article schema, four home cards and calculator arithmetic.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
