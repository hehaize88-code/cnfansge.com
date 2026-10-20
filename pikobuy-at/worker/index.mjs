import assets from '../.astro-output/embedded-assets.json';
import { api } from './source.mjs';
import { catalogResponse } from './catalog-page.mjs';
export default {async fetch(request,env,context){
 const u=new URL(request.url);
 if(__PRODUCTION__&&u.hostname==='www.pikobuy.at')return Response.redirect(__SITE_ORIGIN__+u.pathname+u.search,301);
 if(u.pathname.startsWith('/api/')){const response=await api(request);response.headers.set('X-Robots-Tag','noindex');return response;}
 if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405});
 const key=u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname;
 const a=assets[key]||assets[key+'/index.html'];
 if(!a)return new Response('Page not found',{status:404});
 const body=Uint8Array.from(atob(a.body),c=>c.charCodeAt(0));
 const headers={'Content-Type':a.type,'Cache-Control':'public,max-age=60','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'};
 if(!__PRODUCTION__)headers['X-Robots-Tag']='noindex, nofollow';
 if(/\/spreadsheet(?:\/index\.html|\/)?$/.test(u.pathname))return catalogResponse(new TextDecoder().decode(body),request,headers,{cache:globalThis.caches?.default,waitUntil:context?.waitUntil?.bind(context)});
 return new Response(request.method==='HEAD'?null:body,{headers});
}};
