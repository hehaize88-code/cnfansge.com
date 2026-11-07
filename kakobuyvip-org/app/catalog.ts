/** Read-only adapter for the existing catalogue; no database or product snapshots. */
import { load } from 'cheerio/slim';
export const catalogCategories=['all','shoes','t-shirts','jackets','pants-shorts','headwear','accessories','jersey'] as const;
export type CatalogProduct={id:string;name:string;image:string|null;href:string;cny:number|null};
export type CatalogData={products:CatalogProduct[];page:number;category:string;next:boolean;unavailable:boolean};
const origin='https://www.cnfansge.com';
const cache=new Map<string,{until:number;data:ReturnType<typeof parseCatalog>}>();
const routes=new Map<string,string>();
function safeSource(value:string|undefined,kind:'image'|'product'|'list'){
 if(!value)return null;
 try{const u=new URL(value,origin);if(u.protocol!=='https:'||!['cnfansge.com','www.cnfansge.com'].includes(u.hostname)||u.username||u.password||u.port)return null;
 if(kind==='image'&&!u.pathname.startsWith('/uploads/'))return null;
 if(kind==='product'&&!/^\/AllProducts\/\d+\.html$/.test(u.pathname))return null;
 if(kind==='list'&&(u.pathname!=='/index.php'||u.searchParams.get('m')!=='home'||u.searchParams.get('c')!=='Lists'||u.searchParams.get('a')!=='index'||!/^\d+$/.test(u.searchParams.get('tid')||'')))return null;
 u.hostname='www.cnfansge.com';return u;
 }catch{return null;}
}
export function parseCatalog(html:string){
 const $=load(html),seen=new Set<string>();
 const products:CatalogProduct[]=[];
 for(const el of $('.product-card').toArray()){
  const card=$(el),a=card.find('a.product-image').first(),href=safeSource(a.attr('href'),'product'),name=card.find('.product-name').text().trim().slice(0,180);
  if(!href||!name)continue;const id=href.pathname.match(/(\d+)\.html$/)![1];if(seen.has(id))continue;seen.add(id);
  const img=a.find('img').first(),amount=Number(card.find('.product-price').first().text().trim().replace(/^[¥￥]\s*/,''));
  products.push({id,name,href:href.href,image:safeSource(img.attr('data-src')||img.attr('src'),'image')?.href??null,cny:Number.isFinite(amount)&&amount>0?amount:null});
 }
 const next=$('.pagination a[href]').toArray().some(el=>/下一页|next/i.test($(el).text()));
 let route:string|undefined;
 for(const el of $('.sort-btn[onclick]').toArray()){
  const value=$(el).attr('onclick')?.match(/href\s*=\s*['"]([^'"]+)/)?.[1];const u=safeSource(value,'list');
  if(u&&u.searchParams.get('sort')==='click'){u.searchParams.set('sort_asc','desc');u.searchParams.delete('page');route=u.href;break;}
 }
 return {products,next,route};
}
export async function getCatalog(category='all',page=1):Promise<CatalogData>{
 const fallback:CatalogData={products:[],page,category,next:false,unavailable:true};
 if(!catalogCategories.includes(category as typeof catalogCategories[number])||!Number.isInteger(page)||page<1||page>3000)return fallback;
 const batch=Math.floor((page-1)/3)+1,offset=((page-1)%3)*20;
 const slice=(data:ReturnType<typeof parseCatalog>):CatalogData=>({products:data.products.slice(offset,offset+20),page,category,next:data.products.length>offset+20||(data.next&&offset+20>=data.products.length),unavailable:false});
 const key=`${category}:${batch}`,cached=cache.get(key);if(cached&&cached.until>Date.now())return slice(cached.data);
 const signal=AbortSignal.timeout(6500);
 async function read(url:string){const response=await fetch(url,{signal,headers:{Accept:'text/html'}});if(!response.ok)throw new Error('Catalog unavailable');const html=await response.text();if(html.length>2000000)throw new Error('Catalog too large');return parseCatalog(html);}
 try{
  let data;
  if(batch===1||!routes.has(category)){
   data=await read(`${origin}/${category==='all'?'AllProducts':category}/`);
   if(data.route)routes.set(category,data.route);
  }
  if(batch>1&&routes.has(category)){
   const u=new URL(routes.get(category)!);u.searchParams.set('page',String(batch));data=await read(u.href);
  }else if(batch>1)throw new Error('Pagination unavailable');
  if(!data||data.products.length===0)throw new Error('Empty source');
  if(cache.size>=64)cache.delete(cache.keys().next().value!);cache.set(key,{until:Date.now()+60000,data});return slice(data);
 }catch{return fallback;}
}
