/** Preserve existing hosting and normalize only the site's public hosts. */
import handler from 'vinext/server/app-router-entry';
declare const HTMLRewriter: {new(): {on(selector:string,handler:{element(element:{setAttribute(name:string,value:string):void}):void}):{transform(response:Response):Response}}};
export default {
 async fetch(request:Request,env:Parameters<typeof handler.fetch>[1],ctx:Parameters<typeof handler.fetch>[2]):Promise<Response>{
  const url=new URL(request.url);
  if(['kakobuyvip.org','www.kakobuyvip.org'].includes(url.hostname)){
   const target=new URL(url);target.protocol='https:';target.hostname='kakobuyvip.org';
   target.pathname=target.pathname.replace(/^\/en(?=\/|$)/,'')||'/';
   if(target.pathname!=='/')target.pathname=target.pathname.replace(/\/+$/,'');
   if(target.href!==url.href)return Response.redirect(target.href,308);
  }
  const response=await handler.fetch(request,env,ctx);
  if(!(response.headers.get('content-type')??'').includes('text/html'))return response;
  const first=url.pathname.split('/')[1];
  const locale=['de','es','fr','it'].includes(first)?first:'en';
  return new HTMLRewriter().on('html',{element(element){element.setAttribute('lang',locale);}}).transform(response);
 }
};
