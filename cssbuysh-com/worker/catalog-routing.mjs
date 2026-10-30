import {indexedCategories} from '../src/data/navigation.mjs';
export function catalogRoute(url){
 const match=url.pathname.match(/^(\/(?:[a-z]{2}\/)?spreadsheet\/)([^/]+\/)?$/);
 if(!match)return null;
 const category=match[2]?.slice(0,-1)||'all';
 if(category!=='all'&&!indexedCategories.includes(category))return null;
 return {base:match[1],category};
}
export function normalizeCatalogUrl(url){
 const route=catalogRoute(url);if(!route)return null;
 const next=new URL(url),queryCategory=next.searchParams.get('category');
 if(queryCategory!==null){
  if(queryCategory==='all'||indexedCategories.includes(queryCategory)){
   next.pathname=route.base+(queryCategory==='all'?'':queryCategory+'/');next.searchParams.delete('category');
  }else if(route.category!=='all')next.pathname=route.base;
 }
 if(next.searchParams.get('page')==='1')next.searchParams.delete('page');
 if(next.searchParams.get('sort')==='popular')next.searchParams.delete('sort');
 if(next.searchParams.get('q')==='')next.searchParams.delete('q');
 return next.href!==url.href?next:null;
}
export function catalogSeo(url,origin){
 const route=catalogRoute(url);if(!route)return null;
 const raw=url.searchParams.get('page');
 const valid=!raw||/^[1-9]\d{0,4}$/.test(raw),page=valid?Number(raw||1):1;
 const canonical=new URL(url.pathname,origin);if(page>1)canonical.searchParams.set('page',String(page));
 return {valid,page,category:route.category,canonical:canonical.href,noindex:!valid||['q','category','cursor','slice'].some(k=>url.searchParams.has(k))||!!url.searchParams.get('sort')};
}
