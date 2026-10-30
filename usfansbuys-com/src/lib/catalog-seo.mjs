export const categorySlugs=['shoes','hoodies-sweaters','jersey'];
const escapeAttr=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const isTrackingKey=key=>/^utm_[a-z_]+$/i.test(key)||['gclid','fbclid','msclkid'].includes(key);
export function catalogSeo(url,isCatalog){
 const raw=url.searchParams.get('page');
 const validPage=raw===null||/^[1-9]\d{0,3}$|^10000$/.test(raw);
 const page=validPage&&isCatalog?Number(raw||1):1;
 const noindex=!validPage||[...url.searchParams.keys()].some(key=>!isTrackingKey(key)&&!(isCatalog&&key==='page'));
 return {page,noindex,canonicalQuery:page>1?'?page='+page:''};
}
export function renderPagination(body,data,url){
 const page=data.page||1;
 const link=num=>{const q=new URLSearchParams(url.searchParams);if(num===1)q.delete('page');else q.set('page',num);return escapeAttr(url.pathname+(q.size?'?'+q:''));};
 for(const [name,enabled,num] of [['prev',data.hasPrevious,page-1],['next',data.hasNext,page+1]]){
  body=body.replace(new RegExp('<a data-'+name+'[^>]*>'),`<a data-${name} href="${enabled?link(num):escapeAttr(url.pathname)}" aria-disabled="${!enabled}">`);
 }
 body=body.replace(/(<strong data-page(?:="")?>)1(<\/strong>)/,`$1${page}$2`);
 body=body.replace(/(name="page" value=")1(".*?)/,`$1${page}$2`);
 return body;
}
export function paginateHead(body,query){
 if(!query)return body;
 return body.replace(/(<link\b[^>]*\brel="(?:canonical|alternate)"[^>]*\bhref=")([^"]+)(")/g,(_,start,href,end)=>start+href+query+end)
 .replace(/(<meta\b[^>]*\bproperty="og:url"[^>]*\bcontent=")([^"]+)(")/g,(_,start,href,end)=>start+href+query+end);
}
