import {readFile,readdir,access} from 'node:fs/promises';
import {join} from 'node:path';
import {load} from 'cheerio';
const root='.astro-output',origin=process.env.SITE_ORIGIN||'https://pikobuy-at-preview.hehaize88.chatgpt.site';
const production=process.env.SITE_INDEXABLE==='true';
const pages=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else if(path.endsWith('.html'))pages.push(path);}}
await walk(root);
if(pages.length!==409)throw new Error(`Expected 408 localized pages and 404, found ${pages.length}`);
const exists=new Set();
for(const file of pages){
 const $=load(await readFile(file,'utf8'));
 const path=file.slice(root.length).replace(/index\.html$/,'');
 if(path==='/404.html')continue;
 const check=(condition,message)=>{if(!condition)throw new Error(`${path}: ${message}`);};
 check($('link[rel="canonical"]').attr('href')===origin+path,'canonical does not match page');
 check($('link[hreflang]').length===25,'incomplete hreflang set');
 const expectedRobots=production?(/\/(product|visual)\/$/.test(path)?'noindex,follow':'index,follow'):'noindex,nofollow';
 check($('meta[name="robots"]').attr('content')===expectedRobots,'incorrect indexing policy');
 check($('.main-nav a').length===4,'missing navigation entry');
 if(!path.endsWith('/product/'))check($('h1').length===1,'expected one main heading');
 if(path.endsWith('/faq/'))check($('.faq-item').length===28,'FAQ count mismatch');
 if(path.endsWith('/articles/'))check($('.article-card').length===10,'article index count mismatch');
 for(const element of $('script[type="application/ld+json"]').toArray())JSON.parse($(element).text());
 for(const element of $('a[href^="/"],a[href^="#"],link[href^="/"],script[src^="/"],img[src^="/"]').toArray()){
  const href=$(element).attr('href')||$(element).attr('src');
  const target=new URL(href,origin+path);
  if(target.origin!==origin)continue;
  if(target.pathname===path&&target.hash)check($(`[id="${target.hash.slice(1)}"]`).length>0,`missing anchor ${href}`);
  const asset=join(root,target.pathname,target.pathname.endsWith('/')?'index.html':'');
  if(!exists.has(asset)){await access(asset).catch(()=>{throw new Error(`${path}: missing local target ${href}`);});exists.add(asset);}
 }
}
console.log(`Verified ${pages.length} HTML pages: navigation, local links, metadata, FAQ/articles and structured data.`);
