import bundle from '../.astro-output/embedded-assets.json';
import {api} from './source.mjs';
import {createResponseCache} from './cache.mjs';
const cachedApi=createResponseCache(api);
function bytes(encoded){return Uint8Array.from(atob(encoded),c=>c.charCodeAt(0));}
async function decode(asset){const b=bytes(asset.body);return asset.gzip?new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():b;}
const decoded=new Map();
async function assetBody(asset,key){if(decoded.has(key))return decoded.get(key);let body;if(asset.parts){const parts=await Promise.all(asset.parts.map(async id=>new Uint8Array(await decode(bundle.chunks[id]))));body=new Uint8Array(parts.reduce((n,p)=>n+p.length,0));let offset=0;for(const p of parts){body.set(p,offset);offset+=p.length;}}else body=await decode(asset);if(decoded.size<140)decoded.set(key,body);return body;}
export default{async fetch(request){const u=new URL(request.url);const officialOrigin=new URL(__SITE_ORIGIN__);const officialHost=u.hostname===officialOrigin.hostname;if(__PRODUCTION__&&u.hostname==='www.'+officialOrigin.hostname)return Response.redirect(officialOrigin.origin+u.pathname+u.search,308);if(__PRODUCTION__&&!officialHost&&u.pathname==='/robots.txt')return new Response('User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain','X-Robots-Tag':'noindex'}});if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});if(u.pathname.startsWith('/api/')){const r=await cachedApi(request);r.headers.set('X-Robots-Tag','noindex');return r;}
 let path;try{path=decodeURIComponent(u.pathname);}catch{return new Response('Invalid URL',{status:400});}
 if(!path.includes('.')&&!path.endsWith('/'))return Response.redirect(u.origin+path+'/'+u.search,308);
 const key=path.endsWith('/')?path+'index.html':path,asset=bundle.assets[key];if(!asset)return new Response('Page not found',{status:404,headers:{'Content-Type':'text/plain;charset=utf-8','X-Robots-Tag':'noindex'}});
 const headers={'Content-Type':asset.type,'Cache-Control':asset.type.startsWith('text/html')?'public,max-age=60':'public,max-age=3600','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'};if(!__PRODUCTION__||!officialHost||/\/(product|search\/visual)\//.test(path))headers['X-Robots-Tag']='noindex, follow';return new Response(request.method==='HEAD'?null:await assetBody(asset,key),{headers});}};
