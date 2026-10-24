import bundle from '../.astro-output/embedded-assets.json';
const {assets,chunks}=bundle;
import {api} from './source.mjs';
import {catalogMarkup,productMarkup,errorState,esc} from './render.mjs';
import {load} from 'cheerio';
import {createResponseCache} from './cache.mjs';
const sourceData=createResponseCache(api);
async function decode(a){if(a.parts)return new Blob(await Promise.all(a.parts.map(id=>decode(chunks[id])))).arrayBuffer();const bytes=Uint8Array.from(atob(a.body),c=>c.charCodeAt(0));return a.gzip?new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():bytes;}
export default {async fetch(request,env,context){
 const u=new URL(request.url);if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
 if(u.pathname.startsWith('/api/')){const response=await sourceData(request,context);const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex');return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});}
 if(!u.pathname.endsWith('/')&&!u.pathname.split('/').pop().includes('.'))return Response.redirect(new URL(u.pathname+'/'+u.search,u),308);
 const key=u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname,a=assets[key];
 if(!a)return new Response('Page not found',{status:404,headers:{'Content-Type':'text/plain;charset=utf-8','X-Robots-Tag':'noindex'}});
 let body=await decode(a);const headers=new Headers({'Content-Type':a.type,'Cache-Control':'public,max-age=60','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});
 if(!__PRODUCTION__)headers.set('X-Robots-Tag','noindex,nofollow');
 if(a.type.startsWith('text/html')){
 let html=new TextDecoder().decode(body);const home=html.includes('data-catalog="home"'),catalog=/\/spreadsheet\/$/.test(u.pathname),product=/\/product\/$/.test(u.pathname);
 if(home||catalog||product){
 const apiUrl=new URL(product?'/api/product':'/api/catalog',u);for(const k of (product?['id']:['q','category','sort','page','cursor','slice']))if(u.searchParams.has(k))apiUrl.searchParams.set(k,u.searchParams.get(k));if(home)apiUrl.searchParams.set('sort','latest');
 const response=await sourceData(new Request(apiUrl),context);const data=await response.json();const $=load(html),lang=$('html').attr('lang'),prefix=$('body').attr('data-prefix'),ui=JSON.parse($('#ui-data').text());
 if(!response.ok){$(product?'#product-detail':'#catalog-products').html(errorState(ui,product));if(home)$('#hero-products').html(`<p class="loading">${esc(ui.sourceError)}</p>`);headers.set('Cache-Control','no-store');}
 else{
 if(product){$('#product-detail').html(productMarkup(data,prefix,ui,lang));$('title').text(`${data.name} | CSSBuy Home`);}
 else{const r=catalogMarkup(data,u,prefix,ui,lang,home);$('#catalog-products').html(r.products);$('#hero-products').html(r.hero);$('#catalog-pagination').html(r.pagination);}
 }
 $('body').attr('data-source-rendered','true');html=$.html();
 }
 body=__PRODUCTION__?html:html.replaceAll(__SITE_ORIGIN__,u.origin);
 }
 return new Response(request.method==='HEAD'?null:body,{headers});
}};
