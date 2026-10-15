/** Production host and path normalization before the existing application router. */
import handler from "vinext/server/app-router-entry";
const worker={
  async fetch(request:Request,env:Parameters<typeof handler.fetch>[1],ctx:Parameters<typeof handler.fetch>[2]):Promise<Response>{
    const url=new URL(request.url);
    const original=url.toString();
    if(url.hostname.toLowerCase()==="www.kakobuyvip.pro")url.hostname="kakobuyvip.pro";
    if(url.hostname==="kakobuyvip.pro")url.protocol="https:";
    if(url.pathname==="/en"||url.pathname.startsWith("/en/"))url.pathname=url.pathname.slice(3)||"/";
    if(url.pathname.length>1&&url.pathname.endsWith("/"))url.pathname=url.pathname.replace(/\/+$/,"");
    if(url.toString()!==original)return Response.redirect(url.toString(),308);
    const response=await handler.fetch(request,env,ctx);
    if(response.headers.get("content-type")?.includes("text/html")){
      const headers=new Headers(response.headers);
      headers.set("X-Content-Type-Options","nosniff");
      return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
    }
    return response;
  }
};
export default worker;
