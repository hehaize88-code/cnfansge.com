import assets from '../.astro-output/embedded-assets.json';
import {api} from './source.mjs';
const security={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Permissions-Policy':'camera=(), microphone=(), geolocation=()'};
export default {async fetch(request,env,ctx){const url=new URL(request.url);
 if(url.hostname==='www.superbuybuyss.com'){url.hostname='superbuybuyss.com';url.protocol='https:';return Response.redirect(url.href,301);}
 if(url.hostname==='superbuybuyss.com'&&url.protocol==='http:'){url.protocol='https:';return Response.redirect(url.href,301);}
 const production=url.hostname==='superbuybuyss.com';
 const headers={...security,...(!production?{'X-Robots-Tag':'noindex, nofollow'}:{})};
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD',...headers}});
 if(url.pathname==='/robots.txt'&&!production)return new Response(request.method==='HEAD'?null:'User-agent: *\nDisallow: /\n',{headers:{...headers,'Content-Type':'text/plain; charset=utf-8'}});
 if(url.pathname.startsWith('/api/')){const response=await api(request);for(const [k,v]of Object.entries(headers))response.headers.set(k,v);response.headers.set('X-Robots-Tag','noindex, nofollow');return request.method==='HEAD'?new Response(null,{status:response.status,headers:response.headers}):response;}
 let key;try{key=decodeURIComponent(url.pathname);}catch{return new Response('Invalid URL',{status:400,headers:{...headers,'X-Robots-Tag':'noindex'}});}if(!key.includes('.')&&!key.endsWith('/'))return Response.redirect(url.origin+key+'/'+url.search,308);if(key.endsWith('/'))key+='index.html';const asset=assets[key];if(!asset)return new Response('Page not found',{status:404,headers:{...headers,'X-Robots-Tag':'noindex','Content-Type':'text/plain; charset=utf-8'}});
 if(/\/(?:product)\/index\.html$/.test(key))headers['X-Robots-Tag']='noindex, follow';
 const bytes=Uint8Array.from(atob(asset.body),c=>c.charCodeAt(0));return new Response(request.method==='HEAD'?null:bytes,{headers:{...headers,'Content-Type':asset.type,'Cache-Control':asset.type.startsWith('text/html')?'public,max-age=60':'public,max-age=86400'}});
}};
