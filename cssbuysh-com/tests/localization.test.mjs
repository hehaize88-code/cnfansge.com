import test from 'node:test';
import assert from 'node:assert/strict';
import {locales,localePath} from '../src/data/config.mjs';
import {content,ui,publishedLocales} from '../src/data/content.mjs';
import {catalogMarkup,productMarkup} from '../worker/render.mjs';

const original=content('en');
const preserved=new Set(['id','slug','url','accessedAt','sourceIds']);
function compare(reference,translated,path='',key=''){
 if(preserved.has(key)){assert.deepEqual(translated,reference,path);return;}
 if(Array.isArray(reference)){
  assert.ok(Array.isArray(translated),path);
  assert.equal(translated.length,reference.length,path+' length');
  reference.forEach((v,i)=>compare(v,translated[i],`${path}[${i}]`,key));
 }else if(reference&&typeof reference==='object'){
  assert.deepEqual(Object.keys(translated).sort(),Object.keys(reference).sort(),path+' keys');
  for(const k of Object.keys(reference))compare(reference[k],translated[k],`${path}.${k}`,k);
 }else if(typeof reference==='string'){
  assert.equal(typeof translated,'string',path);
  assert.ok(translated.trim(),path+' empty');
  for(const raw of reference.match(/https?:\/\/[^\s]+/g)||[]){const url=raw.replace(/[.,;:!?)]+$/,'');assert.ok(translated.includes(url),path+' URL changed');}
  if(reference.length>55&&key!=='keywords'){
   assert.notEqual(translated,reference,path+' untranslated');
   assert.ok(translated.length>=reference.length*0.4,path+' shortened');
  }
 }else assert.deepEqual(translated,reference,path);
}
test('all 24 locales contain complete translated UI, 10 articles and 28 FAQs',()=>{
 assert.deepEqual(publishedLocales,Object.keys(locales));
 const originalUi=ui();
 for(const lang of publishedLocales){
  assert.deepEqual(Object.keys(ui(lang)).sort(),Object.keys(originalUi).sort(),lang+' UI keys');
  for(const [key,value] of Object.entries(ui(lang)))assert.ok(typeof value==='string'&&value.trim(),lang+': '+key);
  if(lang!=='en'){
   compare(original,content(lang),lang);
   compare(originalUi,ui(lang),lang+'.ui');
   for(const id of ['service-fee','storage','storage-extension']){
    const source=original.faq.find(f=>f.id===id).a;
    const translated=content(lang).faq.find(f=>f.id===id).a;
    assert.deepEqual((translated.match(/\d+/g)||[]).sort(),(source.match(/\d+/g)||[]).sort(),lang+' policy numbers: '+id);
   }
  }
 }
});
test('localized source renders keep products, pagination and gallery labels in the selected locale',()=>{
 const products=Array.from({length:60},(_,i)=>({id:String(i+1),name:'Original source title',price:{usd:12.5}}));
 for(const lang of publishedLocales){
  const t=ui(lang),prefix=localePath(lang),u=new URL('https://preview.test'+prefix+'spreadsheet/?q=Nike&page=4');
  const rendered=catalogMarkup({products,sourcePage:2,nextPath:'/AllProducts/',previousPath:'/AllProducts/'},u,prefix,t,lang);
  assert.ok(rendered.products.includes(`href="${prefix}product/?id=1"`));
  assert.ok(rendered.pagination.includes(prefix+'spreadsheet/?q=Nike&amp;page=5'));
  assert.ok(rendered.pagination.includes(t.goToPage));
  const detail=productMarkup({id:'6681',name:'Source title',images:['https://www.cnfansge.com/example.jpg'],buy:'https://www.cssbuy.com/shop/goodsDetail?type=micro&id=7755101935'},prefix,t,lang);
  assert.ok(detail.includes(prefix+'articles/cssbuy-qc-photos-guide/'));
  assert.ok(detail.includes(t.enlargePhoto));
  assert.ok(detail.includes('7755101935'));
 }
});
