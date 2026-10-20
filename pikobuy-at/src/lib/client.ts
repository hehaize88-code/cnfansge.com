const $=(s:string)=>document.querySelector(s) as HTMLElement|null;
const text:Record<string,string>=JSON.parse($('#translations')!.textContent!);
const {page='',locale='en',base='/'}=document.body.dataset;
const params=new URLSearchParams(location.search);
const pageHref=(p:string)=>base+(p?p+'/':'');
const el=(tag:string,cls='',content='')=>{const e=document.createElement(tag);if(cls)e.className=cls;if(content)e.textContent=content;return e;};
const fmt=(price:any)=>price?(price.usd!==null?`$${Number(price.usd).toFixed(2)}`:`¥${Number(price.cny).toFixed(2)}`):'—';
const unit=(price:any)=>price?.usd!==null?'USD':'CNY';
const link=(label:string,url:string,cls='',external=false)=>{const a=el('a',cls,label) as HTMLAnchorElement;a.href=url;if(external){a.target='_blank';a.rel='noopener noreferrer nofollow';}return a;};
const img=(url:string,alt:string,loading='lazy')=>{const im=new Image();im.src=url;im.alt=alt;im.loading=loading as 'lazy'|'eager';im.decoding='async';im.addEventListener('error',()=>im.parentElement?.classList.add('image-failure'));return im;};
const language=$('#language') as HTMLSelectElement;
language.addEventListener('change',()=>{const next=language.value==='en'?'/':`/${language.value}/`;location.href=next+(page?page+'/':'')+location.search+location.hash;});
let loadAction:()=>Promise<void>;
function status(message:string,retry=false){const s=$('#catalog-status');if(!s)return;s.hidden=false;s.replaceChildren(el('span','',message));if(retry){const b=el('button','',text.retry);b.addEventListener('click',()=>loadAction());s.append(b);}}
async function fetchData(url:string){const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw new Error('Source unavailable');return r.json();}
function card(p:any,i:number){const c=el('article','product-card');const a=link('',`${pageHref('product')}?id=${p.id}`,'product-image');a.setAttribute('aria-label',p.name);a.append(img(p.image,p.name,i<4?'eager':'lazy'));a.append(el('span','product-index',String(i+1).padStart(2,'0')));const info=el('div','product-info');const title=el('h3');title.append(link(p.name,a.href));const meta=el('div','product-meta');const price=el('span','price',fmt(p.price));price.append(el('small','',unit(p.price)));const arrow=link('↗',a.href,'card-arrow');arrow.setAttribute('aria-label',text.details+': '+p.name);meta.append(price,arrow);info.append(title,meta);c.append(a,info);return c;}
async function catalog(){
 status(text.loading);$('#product-grid')!.replaceChildren();$('#pagination')?.setAttribute('hidden','');
 try{
 const query=new URLSearchParams();for(const key of ['q','category','sort','cursor'])if(params.has(key))query.set(key,params.get(key)!);
 if(!page)query.set('sort','popular');const data=await fetchData('/api/catalog?'+query);
 const offset=Math.max(0,Number(params.get('offset'))||0);const products=data.products.slice(offset,offset+(page?20:8));
 if(!products.length){status(text.noResults);return;}
 $('#catalog-status')!.hidden=true;$('#product-grid')!.replaceChildren(...products.map(card));
 if(page==='spreadsheet'){
 const pagination=$('#pagination')!;pagination.hidden=false;const current=Math.max(1,Number(params.get('page'))||1);$('#page-number')!.textContent=String(current).padStart(2,'0');
 const prev=$('#previous') as HTMLButtonElement,next=$('#next') as HTMLButtonElement;
 prev.disabled=offset===0&&!data.previousPath;next.disabled=offset+20>=data.products.length&&!data.nextPath;
 const go=(forward:boolean)=>{const q=new URLSearchParams(params);q.set('page',String(Math.max(1,current+(forward?1:-1))));const within=forward?offset+20<data.products.length:offset>0;
 if(within)q.set('offset',String(offset+(forward?20:-20)));else{q.set('cursor',forward?data.nextPath:data.previousPath);q.set('offset',forward?'0':'40');}location.href=pageHref('spreadsheet')+'?'+q;};prev.onclick=()=>go(false);next.onclick=()=>go(true);
 }
 }catch{status(text.error,true);}
}
async function product(){status(text.loading);try{
 const id=params.get('id');if(!/^\d{1,10}$/.test(id||'')){status(text.noResults);return;}
 const p=await fetchData('/api/product?id='+id);$('#catalog-status')!.hidden=true;document.title=`${p.name} — Pikobuy Spreadsheet`;
 const root=el('div','product-detail'),gallery=el('div','gallery'),main=el('div','gallery-main'),mainImage=img(p.images[0],p.name,'eager');main.append(mainImage);const thumbnails=el('div','thumbnails');p.images.forEach((src:string,i:number)=>{const b=el('button',i===0?'active':'');b.setAttribute('aria-label',`${text.photos} ${i+1}`);b.setAttribute('aria-pressed',String(i===0));b.append(img(src,`${p.name} ${i+1}`));b.addEventListener('click',()=>{mainImage.src=src;thumbnails.querySelectorAll('button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});b.classList.add('active');b.setAttribute('aria-pressed','true');});thumbnails.append(b);});gallery.append(main,thumbnails);
 const info=el('div','detail-copy');info.append(el('div','eyebrow','PIKOBUY FINDS'),el('h1','',p.name));const price=el('div','detail-price',fmt(p.price)+' ');price.append(el('small','',unit(p.price)));info.append(price,el('p','',text.priceNote));if(p.buy)info.append(link(text.buy+' ↗',p.buy,'button lime',true));
 const sourceRow=el('div','source-row');sourceRow.append(link(text.source+' ↗',p.source,'',true));if(p.original)sourceRow.append(link('↗ '+new URL(p.original).hostname,p.original,'',true));info.append(sourceRow);const note=el('div','photo-note');note.append(el('h2','',text.photos),el('p','',text.photoNotice));info.append(note);root.append(gallery,info);$('#product-detail')!.replaceChildren(root);
 }catch{status(text.error,true);}}
if(page==='spreadsheet'){
 const q=params.get('q')||'',cat=params.get('category')||'all',sort=params.get('sort')||'popular';const input=document.querySelector('input[name=q]') as HTMLInputElement;input.value=q;
 document.querySelectorAll('[data-category]').forEach(a=>a.classList.toggle('active',a.getAttribute('data-category')===cat&&!q));
 const heading=$('#result-title')!;heading.textContent=q?`“${q}”`:document.querySelector(`[data-category="${CSS.escape(cat)}"]`)?.textContent?.replace('↗','').trim()||text.all;
 const select=$('#sort') as HTMLSelectElement;select.value=sort;if(q)select.parentElement!.hidden=true;
 select.addEventListener('change',()=>{const next=new URLSearchParams(params);next.set('sort',select.value);['cursor','offset','page'].forEach(k=>next.delete(k));location.href=pageHref('spreadsheet')+'?'+next;});
}
if(page===''||page==='spreadsheet'){loadAction=catalog;catalog();}
if(page==='product'){loadAction=product;product();}
