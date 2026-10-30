import {load} from 'cheerio';
import {api,categories} from './source.mjs';
import {productCard} from '../src/shared/product-card.mjs';
// A bounded, short-lived process cache only: no product database or bundled snapshot.
const recent=new Map();
async function catalog(request,category,sort){
 const key=category+':'+sort,cached=recent.get(key);
 if(cached&&cached.until>Date.now())return cached.data;
 const url=new URL('/api/catalog',request.url);url.searchParams.set('category',category);url.searchParams.set('sort',sort);
 const response=await api(new Request(url,{signal:AbortSignal.any([request.signal,AbortSignal.timeout(4500)])}));
 if(!response.ok)throw new Error('Source unavailable');
 const data=await response.json();if(!Array.isArray(data.products)||!data.products.length)throw new Error('No source items');
 if(recent.size>=24)recent.delete(recent.keys().next().value);
 recent.set(key,{data,until:Date.now()+60000});return data;
}
export async function renderCatalog(html,request){
 const $=load(html),lang=$('html').attr('lang'),base=$('body').attr('data-base'),t=JSON.parse($('#ui-data').text()),bootstrap={};
 const home=$('#home-products').length,category=$('[data-catalog-category]').attr('data-catalog-category');
 const tasks=home?[['home-products','all','latest',8,false],['hero-products','shoes','popular',3,true]]:categories.includes(category)?[['catalog-products',category,'popular',60,false]]:[];
 await Promise.all(tasks.map(async([id,cat,sort,limit,hero])=>{try{
  const data=await catalog(request,cat,sort);bootstrap[id]=data;
  $('#'+id).html(data.products.slice(0,limit).map(p=>productCard(p,{lang,base,t,hero})).join('')).attr('data-server-rendered','true');
  if(id==='catalog-products')$('#result-count').text(data.products.length+' '+t.results);
 }catch{/* Client can retry the live source without turning a timeout into an empty catalogue. */}}));
 if(Object.keys(bootstrap).length)$('body').append('<script id="catalog-bootstrap" type="application/json">'+JSON.stringify(bootstrap).replace(/</g,'\\u003c')+'</script>');
 return $.html();
}
