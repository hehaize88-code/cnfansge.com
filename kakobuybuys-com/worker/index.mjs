import {load} from 'cheerio';
import assets from '../.astro-output/embedded-assets.json';
import {api} from './source.mjs';
import {catalogMarkup,productMarkup,errorMarkup} from '../src/scripts/render.mjs';
import {SITE_ORIGIN,isProduction,robotsFor,canonicalFor,canonicalRedirect} from './seo.mjs';

async function decode(asset) {
  const bytes=Uint8Array.from(atob(asset.body),x=>x.charCodeAt(0));
  return asset.gzip?new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():bytes;
}
function textResponse(request,text,status=200,extra={}) {
  return new Response(request.method==='HEAD'?null:text,{status,headers:{'Content-Type':'text/plain;charset=utf-8',...extra}});
}

export default {async fetch(request,env,ctx) {
  const url=new URL(request.url);
  if(!['GET','HEAD'].includes(request.method)) return textResponse(request,'Method not allowed',405,{Allow:'GET, HEAD','X-Robots-Tag':'noindex'});
  const redirect=canonicalRedirect(url);
  if(redirect) return Response.redirect(redirect,308);
  const production=isProduction(url);
  if(url.pathname==='/robots.txt') return textResponse(request,production?`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n',200,{'Cache-Control':'public,max-age=300'});
  if(!production&&(url.pathname==='/sitemap.xml'||url.pathname.startsWith('/sitemaps/'))) return textResponse(request,'Preview is not indexed',404,{'X-Robots-Tag':'noindex'});

  let cache=null;
  try{cache=typeof caches!=='undefined'?caches.default:null}catch{}
  const cacheUrl=new URL(url);cacheUrl.searchParams.set('__cache_release','production-ga4-20261024-v1');
  const cacheKey=new Request(cacheUrl.href,{method:'GET'});
  if(cache&&request.method==='GET') {const hit=await cache.match(cacheKey).catch(()=>null);if(hit)return hit;}
  if(url.pathname.startsWith('/api/')) {
    const response=await api(request),headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex');
    const out=new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});
    if(response.ok&&cache&&ctx&&request.method==='GET')ctx.waitUntil(cache.put(cacheKey,out.clone()).catch(()=>{}));
    return out;
  }
  if(!url.pathname.endsWith('/')&&!url.pathname.split('/').pop().includes('.'))return Response.redirect(new URL(url.pathname+'/'+url.search,url),308);
  const key=url.pathname.endsWith('/')?url.pathname+'index.html':url.pathname,asset=assets[key];
  if(!asset)return textResponse(request,'Page not found',404,{'X-Robots-Tag':'noindex'});
  let bytes=await decode(asset),status=200;
  const headers=new Headers({'Content-Type':asset.type,'Cache-Control':'public,max-age=120','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});
  if(!production)headers.set('X-Robots-Tag','noindex,nofollow');
  if(asset.type.startsWith('text/html')) {
    const $=load(new TextDecoder().decode(bytes)),route=$('body').attr('data-route')||'';
    if(!production)$('script[data-site-analytics]').remove();
    const canonical=canonicalFor(url,route);
    $('link[rel="canonical"]').attr('href',canonical);$('meta[property="og:url"]').attr('content',canonical);
    if(route==='product')$('link[rel="alternate"]').each((_,el)=>{const href=new URL($(el).attr('href'));if(/^\d+$/.test(url.searchParams.get('id')||''))href.searchParams.set('id',url.searchParams.get('id'));$(el).attr('href',href.href);});
    if($('#catalog-products').length||$('#product-detail').length) {
      const ui=JSON.parse($('#ui-data').text()),lang=$('html').attr('lang'),prefix=$('body').attr('data-prefix');
      const home=$('[data-catalog="home"]').length>0,product=$('#product-detail').length>0,apiUrl=new URL(product?'/api/product':'/api/catalog',url);
      for(const key of product?['id']:['q','category','sort','page'])if(url.searchParams.has(key))apiUrl.searchParams.set(key,url.searchParams.get(key));
      if(home)apiUrl.searchParams.set('sort','latest');
      const response=await api(new Request(apiUrl)),data=await response.json();
      if(!response.ok) {
        $(product?'#product-detail':'#catalog-products').html(errorMarkup(ui));headers.set('Cache-Control','no-store');
        if(!home)status=response.status;
      } else if(product) {
        $('#product-detail').html(productMarkup(data,prefix,ui,lang));$('title').text(`${data.name} | Kakobuy Buys`);
      } else {
        const markup=catalogMarkup(data,url,prefix,ui,lang,home);$('#catalog-products').html(markup.products);$('#catalog-pagination').html(markup.pagination);
      }
      $('body').attr('data-source-rendered','true');
    }
    const robots=status===200?robotsFor(url,route):'noindex,nofollow';
    $('meta[name="robots"]').attr('content',robots);headers.set('X-Robots-Tag',robots);
    bytes=$.html();
  }
  const out=new Response(request.method==='HEAD'?null:bytes,{status,headers});
  if(status===200&&cache&&ctx&&request.method==='GET'&&!headers.get('Cache-Control').includes('no-store'))ctx.waitUntil(cache.put(cacheKey,out.clone()).catch(()=>{}));
  return out;
}};
