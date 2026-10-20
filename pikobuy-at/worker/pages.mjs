import { api } from './source.mjs';
export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith('/api/')) return api(request);
    if (!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
    const response=await env.ASSETS.fetch(request);
    const headers=new Headers(response.headers);
    headers.set('X-Robots-Tag','noindex, nofollow');
    headers.set('X-Content-Type-Options','nosniff');
    headers.set('Referrer-Policy','strict-origin-when-cross-origin');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
