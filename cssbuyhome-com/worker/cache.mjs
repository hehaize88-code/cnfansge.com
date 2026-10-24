// Small, transient public-response cache; no persisted product database.
// Sites dispatch Workers do not expose caches.default.
export function createResponseCache(loader,{ttl=60000,maxEntries=64}={}){
 const cache=new Map(),pending=new Map();
 return async function(request){
  const key=request.url,now=Date.now(),hit=cache.get(key);
  if(hit&&hit.until>now)return new Response(hit.body,{status:hit.status,headers:hit.headers});
  cache.delete(key);
  if(pending.has(key)){const response=await pending.get(key);return response.clone();}
  const operation=(async()=>{const response=await loader(request);
   if(response.ok){const body=await response.clone().text();if(body.length<250000){for(const [k,v] of cache)if(v.until<=now)cache.delete(k);if(cache.size>=maxEntries)cache.delete(cache.keys().next().value);cache.set(key,{body,status:response.status,headers:[...response.headers],until:Date.now()+ttl});}}
   return response;
  })();pending.set(key,operation);
  try{return (await operation).clone();}finally{pending.delete(key);}
 };
}
