import {categorySlugs,catalogSeo,renderPagination,paginateHead} from '../src/lib/catalog-seo.mjs';
import {readCatalog,readProduct,SourceError} from '../src/lib/source.mjs';
import {cards,hero,product,errorBox} from '../public/render.js';
import {assets,ui,isPreview} from '../generated/assets.mjs';
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json;charset=utf-8','Cache-Control':status===200?'public,max-age=60':'no-store','X-Robots-Tag':'noindex'}});
function resolvePath(path){const p=path.split('/').filter(Boolean);const lang=['de','es','fr','it'].includes(p[0])?p.shift():'en';return {lang,path:p.join('/')};}
export default {async fetch(request){
 const url=new URL(request.url);
 if(!isPreview&&(url.hostname==='www.usfansbuys.com'||(url.hostname==='usfansbuys.com'&&url.protocol!=='https:'))){url.protocol='https:';url.hostname='usfansbuys.com';return Response.redirect(url.href,308);}
 if(!['GET','HEAD'].includes(request.method))return json({error:'Method not allowed'},405);
 if(url.pathname==='/api/capabilities')return json({catalog:true,search:true,sorting:true,pagination:true,imageSearch:false,warehouseQc:false});
 if(url.pathname.startsWith('/api/')){try{if(url.pathname==='/api/catalog')return json(await readCatalog(Object.fromEntries(url.searchParams),request.signal));if(url.pathname==='/api/product')return json(await readProduct(url.searchParams.get('id'),request.signal));return json({error:'Not found'},404);}catch(e){return json({error:'SOURCE_UNAVAILABLE',retryAfter:e.retryAfter||null},e.status||502);}}
 let key=url.pathname;if(!/\.[a-z0-9]+$/i.test(key)&&!key.endsWith('/'))return Response.redirect(url.origin+key+'/'+url.search,308);
 if(key.endsWith('/'))key+='index.html';let asset=assets[key];let status=200;
 if(!asset){asset=assets['/404.html'];status=404;}if(!asset)return new Response('Not found',{status:404});
 if(asset.encoding==='base64'){const bin=Uint8Array.from(atob(asset.body),c=>c.charCodeAt(0));return new Response(request.method==='HEAD'?null:bin,{status,headers:{'Content-Type':asset.type,'Cache-Control':'public,max-age=86400'}});}
 let body=asset.body;const {lang,path}=resolvePath(url.pathname);const t=ui[lang]?.ui||ui.en.ui;
 const category=path.startsWith('category/')&&categorySlugs.includes(path.split('/')[1])?path.split('/')[1]:null;
 const isCatalog=['spreadsheet','finds'].includes(path)||Boolean(category);
 const seo=catalogSeo(url,isCatalog);
 if(['spreadsheet','finds'].includes(path)&&categorySlugs.includes(url.searchParams.get('category'))&&!url.searchParams.has('q')){const dest=new URL(url);dest.pathname=(lang==='en'?'':'/'+lang)+'/category/'+url.searchParams.get('category')+'/';dest.searchParams.delete('category');return Response.redirect(dest.href,301);}
 if(isCatalog&&!seo.noindex&&url.searchParams.get('page')==='1'){url.searchParams.delete('page');return Response.redirect(url.href,301);}
 if(asset.type.startsWith('text/html')&&isCatalog&&!seo.noindex)body=paginateHead(body,seo.canonicalQuery);
 if(asset.type.startsWith('text/html')&&status===200&&(['','product'].includes(path)||isCatalog)){
  let data;
  try{
   const signal=AbortSignal.any([request.signal,AbortSignal.timeout(14000)]);
   if(path==='product'){data=await readProduct(url.searchParams.get('id'),signal);body=body.replace(/<!--product-start-->[\s\S]*?<!--product-end-->/,()=>product(data,t,lang));}
   else {data=await readCatalog(path===''?{sort:'latest',pageSize:4}:{...Object.fromEntries(url.searchParams),...(category?{category}:{}),page:seo.page},signal);if(isCatalog){body=renderPagination(body,data,url);if(seo.page>1&&!data.products.length)status=404;}body=body.replace(/<!--catalog-start-->[\s\S]*?<!--catalog-end-->/,()=>data.products.length?cards(path===''?data.products.slice(0,4):data.products,t,lang):`<p class="loading-box">${t.noResults}</p>`);if(path===''&&data.products[0])body=body.replace(/<!--hero-start-->[\s\S]*?<!--hero-end-->/,()=>hero(data.products[0],t,lang));}
  }catch(e){data={error:'SOURCE_UNAVAILABLE'};if(path==='product'){status=e.status===400?404:(e.status||502);body=body.replace(/<!--product-start-->[\s\S]*?<!--product-end-->/,()=>errorBox(t,t.productMissing));}else{if(path!=='')status=e.status||502;body=body.replace(/<!--catalog-start-->[\s\S]*?<!--catalog-end-->/,()=>errorBox(t));if(path==='')body=body.replace(/<!--hero-start-->[\s\S]*?<!--hero-end-->/,()=>errorBox(t));}}
  body=body.replace('</body>',`<script type="application/json" id="initial-data">${JSON.stringify(data).replace(/</g,'\\u003c')}</script></body>`);
 }
 if(asset.type.startsWith('text/html')&&(isPreview||['product','image-search'].includes(path)||seo.noindex))body=body.replace('content="index,follow"','content="noindex,follow"');
 return new Response(request.method==='HEAD'?null:body,{status,headers:{'Content-Type':asset.type,'Cache-Control':status===200?(asset.type.startsWith('text/html')?'public,max-age=60':'public,max-age=3600'):'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin',...(asset.type.startsWith('text/html')&&(isPreview||['product','image-search'].includes(path)||seo.noindex)?{'X-Robots-Tag':isPreview?'noindex,nofollow':'noindex,follow'}:{})}});
}};
