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
function card(p:any,i:number){const c=el('article','product-card');const a=link('',`${pageHref('product')}?id=${p.id}`,'product-image');a.setAttribute('aria-label',p.name);if(p.image)a.append(img(p.image,p.name,i<4?'eager':'lazy'));else{a.classList.add('missing-photo');a.append(el('span','',p.name));}a.append(el('span','product-index',String(i+1).padStart(2,'0')));const info=el('div','product-info');const title=el('h3');title.append(link(p.name,a.href));const meta=el('div','product-meta');const price=el('span','price',fmt(p.price));price.append(el('small','',unit(p.price)));const arrow=link('↗',a.href,'card-arrow');arrow.setAttribute('aria-label',text.details+': '+p.name);meta.append(price,arrow);info.append(title,meta);c.append(a,info);return c;}
async function catalog(){
 // SSR already supplies the full first screen and ordinary pagination links.
 // Keep it in place rather than clearing it and fetching the same batch again.
 if($('#product-grid')?.dataset.serverRendered==='true')return;
 status(text.loading);$('#product-grid')!.replaceChildren();$('#pagination')?.setAttribute('hidden','');
 try{
 const query=new URLSearchParams();for(const key of ['q','category','sort','cursor'])if(params.has(key))query.set(key,params.get(key)!);
 if(!page)query.set('sort','popular');const data=await fetchData('/api/catalog?'+query);
 const lastOffset=Math.max(0,Math.ceil(data.products.length/20)-1)*20;
 const offset=params.get('offset')==='last'?lastOffset:Math.min(lastOffset,Math.max(0,Math.floor((Number(params.get('offset'))||0)/20)*20));
 const products=data.products.slice(offset,offset+(page?20:8));
 if(!products.length){status(text.noResults);return;}
 $('#catalog-status')!.hidden=true;$('#product-grid')!.replaceChildren(...products.map(card));
 if(page==='spreadsheet'){
 const pagination=$('#pagination')!;pagination.hidden=false;const current=Math.max(1,Number(params.get('page'))||1);
 const navigate=(cursor:string|null,nextOffset:number|'last',targetPage:number)=>{const q=new URLSearchParams(params);q.set('page',String(targetPage));q.set('offset',String(nextOffset));if(cursor)q.set('cursor',cursor);else q.delete('cursor');location.href=pageHref('spreadsheet')+'?'+q;};
 const numbers=$('#page-number')!;numbers.replaceChildren();const start=current-offset/20;
 if(start>1){const first=el('button','','1');first.onclick=()=>navigate(null,0,1);numbers.append(first);if(start>2)numbers.append(el('span','','…'));}
 for(let i=0;i<Math.ceil(data.products.length/20);i++){const n=start+i,b=el('button','',String(n));if(n===current){b.setAttribute('aria-current','page');(b as HTMLButtonElement).disabled=true;}else b.onclick=()=>navigate(data.source,i*20,n);numbers.append(b);}
 const prev=$('#previous') as HTMLButtonElement,next=$('#next') as HTMLButtonElement;
 prev.disabled=offset===0&&!data.previousPath;next.disabled=offset+20>=data.products.length&&!data.nextPath;
 const go=(forward:boolean)=>{const q=new URLSearchParams(params);q.set('page',String(Math.max(1,current+(forward?1:-1))));const within=forward?offset+20<data.products.length:offset>0;
 if(within){q.set('cursor',data.source);q.set('offset',String(offset+(forward?20:-20)));}else{q.set('cursor',forward?data.nextPath:data.previousPath);q.set('offset',forward?'0':'last');}location.href=pageHref('spreadsheet')+'?'+q;};prev.onclick=()=>go(false);next.onclick=()=>go(true);
 }
 }catch{status(text.error,true);}
}
async function product(){status(text.loading);try{
 const id=params.get('id');if(!/^\d{1,10}$/.test(id||'')){status(text.noResults);return;}
 const p=await fetchData('/api/product?id='+id);$('#catalog-status')!.hidden=true;document.title=`${p.name} — Pikobuy Spreadsheet`;
 const root=el('div','product-detail'),gallery=el('div','gallery'),main=el('div','gallery-main'),mainImage=p.images[0]?img(p.images[0],p.name,'eager'):null;if(mainImage)main.append(mainImage);else{main.classList.add('missing-photo');main.append(el('span','',p.name));}const thumbnails=el('div','thumbnails');p.images.forEach((src:string,i:number)=>{const b=el('button',i===0?'active':'');b.setAttribute('aria-label',`${text.photos} ${i+1}`);b.setAttribute('aria-pressed',String(i===0));b.append(img(src,`${p.name} ${i+1}`));b.addEventListener('click',()=>{if(mainImage)mainImage.src=src;thumbnails.querySelectorAll('button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});b.classList.add('active');b.setAttribute('aria-pressed','true');});thumbnails.append(b);});gallery.append(main,thumbnails);
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
