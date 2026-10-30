// Bounded, transient public responses only; no product database or persisted copies.
export function createResponseCache(loader,{ttl=60000,staleTtl=300000,maxEntries=64,now=()=>Date.now()}={}){
 const cache=new Map(),pending=new Map();
 const responseOf=(entry,stale=false)=>{const headers=new Headers(entry.headers);headers.set('X-Source-Cache',stale?'stale':'hit');if(stale)headers.set('Warning','110 - "Response is stale"');return new Response(entry.body,{status:entry.status,headers});};
 function refresh(request,key){
  if(pending.has(key))return pending.get(key);
  const operation=(async()=>{const response=await loader(request);
   if(response.ok){const body=await response.clone().text();if(body.length<250000){for(const [k,v] of cache)if(v.staleUntil<=now())cache.delete(k);if(cache.size>=maxEntries)cache.delete(cache.keys().next().value);cache.set(key,{body,status:response.status,headers:[...response.headers],until:now()+ttl,staleUntil:now()+ttl+staleTtl});}}
   return response;
  })();pending.set(key,operation);operation.finally(()=>pending.delete(key)).catch(()=>{});return operation;
 }
 return async function(request,context){
  const key=request.url,hit=cache.get(key);
  if(hit&&hit.until>now())return responseOf(hit);
  if(hit&&hit.staleUntil>now()&&context?.waitUntil){context.waitUntil(refresh(request,key).catch(()=>{}));return responseOf(hit,true);}
  if(hit&&hit.staleUntil<=now())cache.delete(key);
  try{const response=await refresh(request,key);if(!response.ok&&hit&&hit.staleUntil>now())return responseOf(hit,true);return response.clone();}
  catch(error){if(hit&&hit.staleUntil>now())return responseOf(hit,true);throw error;}
 };
}
