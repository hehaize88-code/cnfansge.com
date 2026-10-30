import bundle from '../.astro-output/embedded-assets.json';
const {assets,chunks}=bundle;
const decodedArchives=new Map();
import {api} from './source.mjs';
import {catalogMarkup,productMarkup,errorState,esc} from './render.mjs';
import {load} from 'cheerio';
import {createResponseCache} from './cache.mjs';
import {catalogRoute,normalizeCatalogUrl,catalogSeo} from './catalog-routing.mjs';
const sourceData=createResponseCache(api);
async function decode(a){
 if(a.archive){
  let bytes=decodedArchives.get(a.archive);
  if(!bytes){if(decodedArchives.size>=2)decodedArchives.delete(decodedArchives.keys().next().value);bytes=decode(chunks[a.archive]).then(buffer=>new Uint8Array(buffer));decodedArchives.set(a.archive,bytes);}
  return (await bytes).slice(a.start,a.start+a.length);
 }
 const bytes=Uint8Array.from(atob(a.body),c=>c.charCodeAt(0));return a.gzip?new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():bytes;
}
export default {async fetch(request,env,context){
 const u=new URL(request.url),canonical=new URL(__SITE_ORIGIN__);
 if(__PRODUCTION__&&(u.hostname==='www.'+canonical.hostname||(u.hostname===canonical.hostname&&u.protocol!=='https:')))return Response.redirect(canonical.origin+u.pathname+u.search,308);
 const previewHost=!__PRODUCTION__||u.origin!==canonical.origin;
 if(previewHost&&u.pathname==='/robots.txt')return new Response('User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain;charset=utf-8'}});
 if(previewHost&&u.pathname==='/sitemap.xml')return new Response('Not found',{status:404});
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
 if(u.pathname.startsWith('/api/')){const response=await sourceData(request,context);const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex');return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});}
 if(!u.pathname.endsWith('/')&&!u.pathname.split('/').pop().includes('.'))return Response.redirect(new URL(u.pathname+'/'+u.search,u),308);
 const normalized=normalizeCatalogUrl(u);if(normalized)return Response.redirect(normalized,308);
 const seo=catalogSeo(u,canonical.origin);
 if(seo&&!seo.valid)return new Response('Invalid page',{status:400,headers:{'X-Robots-Tag':'noindex'}});
 const key=u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname,a=assets[key];
 if(!a)return new Response('Page not found',{status:404,headers:{'Content-Type':'text/plain;charset=utf-8','X-Robots-Tag':'noindex'}});
 let body=await decode(a),status=200;const headers=new Headers({'Content-Type':a.type,'Cache-Control':'public,max-age=60','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});
 const noindex=/\/(product|search\/visual)\/$/.test(u.pathname)||u.searchParams.has('q')||seo?.noindex;
 if(previewHost)headers.set('X-Robots-Tag','noindex,nofollow');else if(noindex)headers.set('X-Robots-Tag','noindex,follow');
 if(a.type.startsWith('text/html')){
 let html=new TextDecoder().decode(body);const home=html.includes('data-catalog="home"'),catalog=!!catalogRoute(u),product=/\/product\/$/.test(u.pathname);
 if(home||catalog||product){
 const apiUrl=new URL(product?'/api/product':'/api/catalog',u);for(const k of (product?['id']:['q','category','sort','page','cursor','slice']))if(u.searchParams.has(k))apiUrl.searchParams.set(k,u.searchParams.get(k));if(home)apiUrl.searchParams.set('sort','latest');
 if(catalog&&seo.category!=='all')apiUrl.searchParams.set('category',seo.category);
 const response=await sourceData(new Request(apiUrl,{signal:request.signal}),context);const data=await response.json();const $=load(html),lang=$('html').attr('lang'),prefix=$('body').attr('data-prefix'),ui=JSON.parse($('#ui-data').text());
 if(!response.ok){
  $(product?'#product-detail':'#catalog-products').html(errorState(ui,product));if(home)$('#hero-products').html(`<p class="loading">${esc(ui.sourceError)}</p>`);
  headers.set('Cache-Control','no-store');if(!home){status=response.status>=500?503:response.status;if(status===503)headers.set('Retry-After','60');}
 }else{
  if(product){$('#product-detail').html(productMarkup(data,prefix,ui,lang));$('title').text(`${data.name} | CSSBuy SH`);}
  else{
   const r=catalogMarkup(data,u,prefix,ui,lang,home);$('#catalog-products').html(r.products);$('#hero-products').html(r.hero);$('#catalog-pagination').html(r.pagination);
   if(catalog&&seo.page>1&&data.products.slice(((seo.page-1)%3)*20,((seo.page-1)%3)*20+20).length===0){status=404;headers.set('X-Robots-Tag','noindex');$('meta[name=robots]').attr('content','noindex,follow');}
  }
  if(response.headers.get('X-Source-Cache'))headers.set('X-Source-Cache',response.headers.get('X-Source-Cache'));
 }
 if(catalog){
  $('link[rel=canonical]').attr('href',seo.canonical);$('meta[property="og:url"]').attr('content',seo.canonical);
  $('link[hreflang]').each((_,el)=>{const alternate=new URL($(el).attr('href'));if(seo.page>1)alternate.searchParams.set('page',String(seo.page));$(el).attr('href',alternate.href);});
  if(seo.page>1){$('title').text(`${$('title').text()} · ${ui.page} ${seo.page}`);$('h1').append(` · ${esc(ui.page)} ${seo.page}`);}
  if(seo.noindex)$('meta[name=robots]').attr('content','noindex,follow');
  if(u.searchParams.has('q'))$('#catalog-status').text(`${ui.searchResults}: ${u.searchParams.get('q')}`);
  $('#catalog-form [name=category]').val(seo.category!=='all'?seo.category:u.searchParams.get('category')||'all');
  $('#catalog-form [name=q]').val(u.searchParams.get('q')||'');$('#catalog-form [name=sort]').val(u.searchParams.get('sort')||'popular');
 }
 $('body').attr('data-source-rendered','true');html=$.html();
 }
 if(previewHost)html=html.replace(/(<meta name="robots" content=")[^"]*/, '$1noindex,nofollow').replace(/<script\b[^>]*data-cssbuy-analytics[^>]*>[\s\S]*?<\/script>/g,'');
 body=__PRODUCTION__?html:html.replaceAll(__SITE_ORIGIN__,u.origin);
 }
 return new Response(request.method==='HEAD'?null:body,{status,headers});
}};
