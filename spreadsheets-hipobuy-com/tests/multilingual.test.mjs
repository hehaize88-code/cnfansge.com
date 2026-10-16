import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import test from 'node:test';
import {parseHTML} from 'linkedom';
import vm from 'node:vm';
const origin='https://spreadsheets-hipobuy.com';
const langs=['en','de','fr','es','it'];
const html=async route=>(await readFile(new URL(`../out${route}index.html`,import.meta.url),'utf8'));
const doc=async route=>parseHTML(await html(route)).document;
const release=JSON.parse(await readFile(new URL('../out/release.json',import.meta.url),'utf8'));
const slugs=(await readdir(new URL('../out/articles/',import.meta.url),{withFileTypes:true})).filter(x=>x.isDirectory()).map(x=>x.name);
const bases=['/','/spreadsheet/','/finds/','/articles/','/guide/','/qc/','/shipping/','/faq/',...slugs.map(s=>`/articles/${s}/`)];
const localized=(lang,route)=>lang==='en'?route:`/${lang}${route}`;

test('21 equivalent pages and 13 full articles exist in every language',async()=>{
 assert.equal(slugs.length,13);assert.equal(release.pages,105);assert.equal(release.articlesPerLanguage,13);
 for(const base of bases){const en=await doc(base);for(const lang of langs){const route=localized(lang,base),d=await doc(route);
  assert.equal(d.documentElement.lang,lang,route);
  assert.equal(d.querySelectorAll('h1').length,1,route);
  assert.equal(d.querySelectorAll('main p').length,en.querySelectorAll('main p').length,route+' paragraph parity');
  assert.equal(d.querySelectorAll('main h2').length,en.querySelectorAll('main h2').length,route+' heading parity');
  assert.equal(d.querySelector('link[rel="canonical"]').href,origin+route,route);
  assert.equal(d.querySelector('meta[name="robots"]').content,'index, follow',route);
  assert.equal(d.querySelectorAll('link[rel="alternate"][hreflang]').length,6,route);
  for(const alternate of langs){assert.equal(d.querySelector(`link[hreflang="${alternate}"]`).href,origin+localized(alternate,base),route);assert.equal(d.querySelector(`a[data-language="${alternate}"]`).getAttribute('href'),localized(alternate,base),route)}
  if(lang!=='en'){assert.notEqual(d.querySelector('title').textContent,en.querySelector('title').textContent,route);assert.notEqual(d.querySelector('h1').textContent,en.querySelector('h1').textContent,route)}
  assert.equal(d.querySelectorAll('script[src*="/_next/"]').length,0,route);
  assert.equal(d.querySelectorAll('script[src="/site.js"]').length,1,route);
  if(base.startsWith('/articles/')&&base!=='/articles/'){
   const text=d.querySelector('.prose').textContent;const englishWords=en.querySelector('.prose').textContent.trim().split(/\s+/).length;assert.ok(englishWords>=850,base+' substantial English body');assert.ok(text.trim().split(/\s+/).length>=englishWords*0.65,route+' complete localized body');
   const ld=[...d.querySelectorAll('script[type="application/ld+json"]')].flatMap(n=>JSON.parse(n.textContent));const a=ld.find(x=>x['@type']==='Article');assert.ok(a,route);assert.equal(a.inLanguage,lang,route);assert.equal(a.mainEntityOfPage,origin+route,route);
  }
 }}
});

test('sitemap covers all language URLs, and every internal page link resolves in its language',async()=>{
 const sitemap=await readFile(new URL('../out/sitemap.xml',import.meta.url),'utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,105);
 for(const lang of langs){for(const base of bases){const route=localized(lang,base),d=await doc(route);assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`));for(const a of d.querySelectorAll('a[href]')){const raw=a.getAttribute('href');if(!raw.startsWith('/')||raw.startsWith('//'))continue;const u=new URL(raw,origin);assert.ok(bases.map(b=>localized(lang,b)).includes(u.pathname)||a.dataset.language,`${route}: cross-language or broken ${raw}`);assert.ok((await html(u.pathname)).includes('<html'),raw)}}}
});

test('native filters, language events and weight calculator work without React hydration',async()=>{
 const script=await readFile(new URL('../public/site.js',import.meta.url),'utf8');
 for(const lang of langs){const route=localized(lang,'/'),{window,document}=parseHTML(await html(route));const events=[];window.gtag=(...args)=>events.push(args);const location={pathname:route,href:origin+route,origin};vm.runInNewContext(script,{window,document,location,URL,Intl,FormData});
  assert.equal(events.filter(x=>x[1]==='language_change').length,0,'initial load must not count as language choice');
  document.querySelector('[data-filter="Jerseys"]').click();assert.equal([...document.querySelectorAll('.productCard')].filter(x=>!x.hidden).length,3);
  const input=document.querySelector('.filterBar input');input.value='nonexistent-item';input.dispatchEvent(new window.Event('input'));assert.equal([...document.querySelectorAll('.productCard')].filter(x=>!x.hidden).length,0);assert.equal(document.querySelector('.emptyState').hidden,false);
  const target=lang==='es'?'de':'es';document.querySelector(`[data-language="${target}"]`).click();assert.equal(events.filter(x=>x[1]==='language_change').length,1);
  const form=document.querySelector('form.searchBox');assert.equal(form.getAttribute('action'),'https://cnfansge.com/search.html');assert.equal(form.querySelector('[name="channelid"]').value,'2');
 }
 const {window,document}=parseHTML(await html('/de/shipping/'));const form=document.querySelector('#weight-calculator');form.reportValidity=()=>true;
 class FakeFormData{constructor(form){this.pairs=[...form.querySelectorAll('input')].map(x=>[x.name,x.value])}[Symbol.iterator](){return this.pairs[Symbol.iterator]()}}
 vm.runInNewContext(script,{window,document,location:{pathname:'/de/shipping/',href:origin+'/de/shipping/',origin},URL,Intl,FormData:FakeFormData});form.dispatchEvent(new window.Event('submit',{cancelable:true,bubbles:true}));assert.equal(form.querySelector('[data-result="volume"]').textContent,'6 kg');form.querySelector('[name="height"]').value='24';form.dispatchEvent(new window.Event('submit',{cancelable:true,bubbles:true}));assert.equal(form.querySelector('[data-result="volume"]').textContent,'5,76 kg');assert.equal(form.querySelector('[data-result="billable"]').textContent,'5,76 kg');
});
