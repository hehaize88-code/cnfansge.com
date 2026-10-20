import { load } from 'cheerio';
export const SOURCE='https://cnfansge.com';
export const categories=['all','shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey'];
export function sourceUrl(path){
 const u=new URL(path,SOURCE);
 if(!['cnfansge.com','www.cnfansge.com'].includes(u.hostname)||u.protocol!=='https:'||u.port||u.username||u.password)throw new Error('Invalid source');
 if(!(/^\/(AllProducts\/\d+\.html|AllProducts\/|search\.html|index\.php(?:\/list_\d+_\d+\/)?)$/.test(u.pathname)||categories.slice(1).some(c=>u.pathname===`/${c}/`)))throw new Error('Invalid source path');
 if(u.pathname==='/index.php'&&(u.searchParams.get('m')!=='home'||u.searchParams.get('c')!=='Lists'||u.searchParams.get('a')!=='index'))throw new Error('Invalid catalog route');
 u.hostname='cnfansge.com';return u;
}
async function read(url){const r=await fetch(url,{signal:AbortSignal.timeout(18000),headers:{'Accept':'text/html'}});if(!r.ok)throw new Error(`Source HTTP ${r.status}`);const html=await r.text();if(html.length>2000000)throw new Error('Source too large');return html;}
function imageUrl(src){try{const u=new URL(src,SOURCE);return ['cnfansge.com','www.cnfansge.com'].includes(u.hostname)&&u.pathname.startsWith('/uploads/')?u.href:null;}catch{return null;}}
function price(raw,rate){const cny=Number(raw.trim());return Number.isFinite(cny)&&cny>0?{cny,usd:rate?Number((cny/rate).toFixed(2)):null}:null;}
let rateState;
async function getRate($){
 if(rateState&&rateState.until>Date.now())return rateState.value;
 const path=$('script[src]').toArray().map(e=>$(e).attr('src')).find(x=>x?.startsWith('/template/moban/pc/static/js/script.js'));
 if(!path)return null;
 try{const js=await read(new URL(path,SOURCE));const value=Number(js.match(/\bCNY_TO_USD_RATE\s*=\s*(\d+(?:\.\d+)?)/)?.[1]);if(value>0&&value<100){rateState={value,until:Date.now()+300000};return value;}}catch{}
 return null;
}
export function parseCatalog(html,rate,url){
 const $=load(html);const products=$('.product-card').toArray().map(e=>{const c=$(e),a=c.find('a.product-image'),im=a.find('img');const href=a.attr('href');let id;try{id=sourceUrl(href).pathname.match(/\/(\d+)\.html$/)?.[1];}catch{}return {id,name:c.find('.product-name').text().trim(),image:imageUrl(im.attr('data-src')||im.attr('src')),price:price(c.find('.product-price').text(),rate),source:href?new URL(href,SOURCE).href:null};}).filter(x=>x.id&&x.name&&x.image);
 const pages=$('.pagination a[href]').toArray();const next=pages.find(e=>/下一页|next/i.test($(e).text()));let nextPath=null;if(next){try{const u=sourceUrl($(next).attr('href'));nextPath=u.pathname+u.search;}catch{}}
 const prev=pages.find(e=>/上一页|previous/i.test($(e).text()));let previousPath=null;if(prev){try{const u=sourceUrl($(prev).attr('href'));previousPath=u.pathname+u.search;}catch{}}
 return {products,nextPath,previousPath,source:url,rate};
}
export function purchaseUrl(original){const u=new URL(original);if(!['weidian.com','www.weidian.com','item.taobao.com','detail.1688.com','detail.tmall.com'].includes(u.hostname))return null;return 'https://www.pikobuy.com/product/detail?'+new URLSearchParams({productUrl:u.href});}
export function parseProduct(html,rate,id){
 const $=load(html),root=$('.product-detail');const original=root.find('a[href]').toArray().map(e=>$(e).attr('href')).find(h=>{try{return !!purchaseUrl(h)}catch{return false}});
 const images=[...new Set(root.find('.product-gallery img').toArray().map(e=>imageUrl($(e).attr('data-src')||$(e).attr('src'))).filter(Boolean))];
 const name=root.find('.product-title').text().trim();if(!name||!images.length)throw new Error('Product unavailable');
 return {id,name,images,price:price(root.find('.product-price').first().text(),rate),original:original||null,buy:original?purchaseUrl(original):null,source:`${SOURCE}/AllProducts/${id}.html`,qcVerified:false};
}
export async function api(request){
 const u=new URL(request.url);try{
 if(u.pathname==='/api/product'){
 const id=u.searchParams.get('id');if(!/^\d{1,10}$/.test(id||''))return Response.json({error:'Invalid product'},{status:400});
 const html=await read(`${SOURCE}/AllProducts/${id}.html`);return Response.json(parseProduct(html,await getRate(load(html)),id),{headers:{'Cache-Control':'public,max-age=60'}});
 }
 if(u.pathname==='/api/catalog'){
 const cat=u.searchParams.get('category')||'all';if(!categories.includes(cat))return Response.json({error:'Invalid category'},{status:400});
 const q=(u.searchParams.get('q')||'').trim().slice(0,120),sort=u.searchParams.get('sort')||'popular';
 let url=sourceUrl(u.searchParams.get('cursor')||(q?`/search.html?${new URLSearchParams({keywords:q,channelid:'2'})}`:cat==='all'?'/AllProducts/':`/${cat}/`));
 let html=await read(url);let $=load(html);
 if(!q&&!u.searchParams.get('cursor')&&sort!=='popular'){
 const wanted=sort==='latest'?'new':sort==='price-up'||sort==='price-down'?'price':null;
 if(wanted){const attr=$('.sort-btn[onclick]').toArray().map(e=>$(e).attr('onclick')).find(s=>s.includes(`sort=${wanted}&`));const link=attr?.match(/href\s*=\s*['"]([^'"]+)/)?.[1];if(link){url=sourceUrl(link);url.searchParams.set('sort_asc',sort==='price-up'?'asc':'desc');html=await read(url);$=load(html);}}
 }
 return Response.json(parseCatalog(html,await getRate($),url.pathname+url.search),{headers:{'Cache-Control':'public,max-age=60'}});
 }
 return Response.json({error:'Not found'},{status:404});
 }catch(error){return Response.json({error:'The source catalog is temporarily unavailable. Please retry.',code:'SOURCE_UNAVAILABLE',detail:String(error.message)},{status:502,headers:{'Cache-Control':'no-store'}});}
}
