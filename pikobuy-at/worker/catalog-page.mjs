import {load} from 'cheerio';
import {api} from './source.mjs';

const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const apiKeys=['q','category','sort','cursor'];
function catalogParams(request){const url=new URL(request.url),params=new URLSearchParams(url.search),category=url.pathname.match(/\/category\/(shoes|hoodies-sweaters|jersey)(?:\/index\.html|\/)?$/)?.[1];if(category)params.set('category',category);return params;}


// Render the same live cnfansge results for visitors and crawlers. No product
// database or build-time catalog snapshot; only short-lived HTTP responses.
export function renderCatalogHtml(template,request,data){
 const $=load(template),text=JSON.parse($('#translations').text());
 const base=$('body').attr('data-base')||'/',params=catalogParams(request);
 const lastOffset=Math.max(0,Math.ceil(data.products.length/20)-1)*20;
 const offset=params.get('offset')==='last'?lastOffset:Math.min(lastOffset,Math.max(0,Math.floor((Number(params.get('offset'))||0)/20)*20));
 const products=data.products.slice(offset,offset+20),current=Math.max(1,Number(params.get('page'))||1);
 const pageUrl=(cursor,nextOffset,page)=>{
  const q=new URLSearchParams(params);q.set('page',String(page));q.set('offset',String(nextOffset));
  if(cursor)q.set('cursor',cursor);else q.delete('cursor');
  const path=new URL(request.url).pathname.replace(/index\.html$/,'');
  if(path.includes('/category/'))q.delete('category');
  return `${path.endsWith('/')?path:path+'/'}?${q}`;
 };
 const cards=products.map((p,i)=>{
  const href=`${base}product/?id=${encodeURIComponent(p.id)}`;
  const price=p.price?(p.price.usd!==null?`$${Number(p.price.usd).toFixed(2)}`:`¥${Number(p.price.cny).toFixed(2)}`):'—';
  const photo=p.image?`<img src="${escape(p.image)}" alt="${escape(p.name)}" loading="${i<4?'eager':'lazy'}" decoding="async">`:`<span>${escape(p.name)}</span>`;
  return `<article class="product-card"><a class="product-image${p.image?'':' missing-photo'}" href="${escape(href)}" aria-label="${escape(p.name)}">${photo}<span class="product-index">${String(i+1).padStart(2,'0')}</span></a><div class="product-info"><h3><a href="${escape(href)}">${escape(p.name)}</a></h3><div class="product-meta"><span class="price">${price}<small>${p.price?.usd!==null?'USD':'CNY'}</small></span><a class="card-arrow" href="${escape(href)}" aria-label="${escape(text.details+': '+p.name)}">↗</a></div></div></article>`;
 }).join('');
 $('#product-grid').html(cards).attr('data-server-rendered','true');
 if(products.length)$('#catalog-status').attr('hidden','');
 else $('#catalog-status').removeAttr('hidden').text(text.noResults);
 const q=params.get('q')||'',category=params.get('category')||'all';
 $('input[name="q"]').attr('value',q);
 $('[data-category]').filter('a').each((_,el)=>$(el).toggleClass('active',!q&&$(el).attr('data-category')===category));
 $('#result-title').text(q?`“${q}”`:$('a[data-category].active').text().replace('↗','').trim()||text.all);
 $('#sort option').removeAttr('selected').filter((_,el)=>$(el).attr('value')===(params.get('sort')||'popular')).attr('selected','');
 if(q)$('#sort').parent().attr('hidden','');
 if(q||params.has('sort')||params.has('cursor')||params.has('offset')||Number(params.get('page')||1)>1)$('meta[name="robots"]').attr('content','noindex,follow');
 if(products.length){
  const nav=(label,href,id='')=>href?`<a ${id?`id="${id}"`:''} href="${escape(href)}">${escape(label)}</a>`:`<span class="page-disabled" aria-disabled="true">${escape(label)}</span>`;
  const previous=offset>0?pageUrl(data.source,offset-20,current-1):data.previousPath?pageUrl(data.previousPath,'last',Math.max(1,current-1)):null;
  const next=offset+20<data.products.length?pageUrl(data.source,offset+20,current+1):data.nextPath?pageUrl(data.nextPath,0,current+1):null;
  const start=current-offset/20,numbers=[];
  if(start>1){numbers.push(nav('1',pageUrl(null,0,1)));if(start>2)numbers.push('<span>…</span>');}
  for(let i=0;i<Math.ceil(data.products.length/20);i++){
   const n=start+i;numbers.push(n===current?`<button aria-current="page" disabled>${n}</button>`:nav(String(n),pageUrl(data.source,i*20,n)));
  }
  $('#pagination').removeAttr('hidden').html(nav('← '+text.previous,previous,'previous')+`<span id="page-number">${numbers.join('')}</span>`+nav(text.next+' →',next,'next'));
 }
 return $.html();
}

export async function catalogResponse(template,request,headers,{cache,waitUntil,apiHandler=api}={}){
 const cacheKey=new Request(request.url,{method:'GET'});
 const head=response=>request.method==='HEAD'?new Response(null,{status:response.status,headers:response.headers}):response;
 if(cache){const hit=await cache.match(cacheKey);if(hit)return head(hit);}
 const endpoint=new URL('/api/catalog',request.url),params=catalogParams(request);
 for(const key of apiKeys)if(params.has(key))endpoint.searchParams.set(key,params.get(key));
 let data,errorStatus=503;
 try{
  const response=await apiHandler(new Request(endpoint,{signal:AbortSignal.any([request.signal,AbortSignal.timeout(12000)])}));
  if(response.status===400)errorStatus=400;
  if(!response.ok)throw new Error('Catalog unavailable');
  data=await response.json();
  if(!Array.isArray(data.products)||(!data.products.length&&!params.get('q')&&(!params.get('category')||params.get('category')==='all')))throw new Error('Empty catalog');
 }catch{
  // An upstream failure is temporary, never a successful empty catalog page.
  const $=load(template),text=JSON.parse($('#translations').text());
  $('#catalog-status').text(text.error);
  return head(new Response($.html(),{status:errorStatus,headers:{...headers,'Cache-Control':'no-store','Retry-After':'60'}}));
 }
 const response=new Response(renderCatalogHtml(template,request,data),{headers});
 if(cache){const store=cache.put(cacheKey,response.clone()).catch(()=>{});if(waitUntil)waitUntil(store);else await store;}
 return head(response);
}
