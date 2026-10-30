import {productCard} from './shared/product-card.mjs';
const t=JSON.parse(document.querySelector('#ui-data')!.textContent!);
const lang=document.body.dataset.lang||'en',base=document.body.dataset.base||'/';
const esc=(value:any)=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const image=(url:string)=>url;
const link=(id:string)=>base+'product/?id='+encodeURIComponent(id);
const fmt=(n:number,currency:string)=>new Intl.NumberFormat(lang,{style:'currency',currency,currencyDisplay:'narrowSymbol'}).format(n);
const price=(p:any)=>p?.usd?fmt(p.usd,'USD'):p?.cny?fmt(p.cny,'CNY'):t.priceUnavailable;
const currency=(p:any)=>p?.usd?'USD':p?.cny?'CNY':'';
const bootstrap=JSON.parse(document.getElementById('catalog-bootstrap')?.textContent||'{}');
const initialQuery=location.search;
function track(name:string,params:Record<string,unknown>={}){if(location.hostname==='superbuybuyss.com'&&typeof (window as any).gtag==='function')(window as any).gtag('event',name,{language:lang,page_type:document.body.dataset.route,...params});}
const arrow='<span aria-hidden="true">↗</span>';
function handleImages(root:ParentNode){root.querySelectorAll<HTMLImageElement>('img[data-product-image]').forEach(img=>img.addEventListener('error',()=>{const replacement=document.createElement('span');replacement.className='image-missing';replacement.textContent=t.imageUnavailable;img.replaceWith(replacement)},{once:true}));}
function card(p:any,hero=false){return productCard(p,{lang,base,t,hero});}
async function json(url:string,signal?:AbortSignal){const response=await fetch(url,{signal});if(!response.ok)throw new Error('HTTP '+response.status);return response.json();}
function message(root:HTMLElement,text:string,retry?:()=>void){root.innerHTML='<div class="empty-state"><p>'+esc(text)+'</p>'+(retry?'<button class="button">'+esc(t.retry)+'</button>':'')+'</div>';if(retry)root.querySelector('button')!.addEventListener('click',retry);}
document.querySelector('.menu-button')?.addEventListener('click',event=>{const button=event.currentTarget as HTMLButtonElement,nav=document.querySelector<HTMLElement>('#mobile-nav')!;nav.hidden=!nav.hidden;button.setAttribute('aria-expanded',String(!nav.hidden));});
document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach(a=>{a.href=a.pathname+window.location.search+window.location.hash;});
document.addEventListener('click',event=>{const details=document.querySelector<HTMLDetailsElement>('.languages');if(details&&!details.contains(event.target as Node))details.open=false;});
const dialog=document.querySelector<HTMLDialogElement>('#image-dialog')!;
document.querySelectorAll('[data-image-search]').forEach(el=>el.addEventListener('click',()=>dialog.showModal()));
dialog.querySelectorAll('button').forEach(el=>el.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
async function homeLoad(id:string,category:string,limit:number,hero:boolean){const root=document.getElementById(id);if(!root)return;try{const data=bootstrap[id]||await json('/api/catalog?category='+category+'&sort='+(hero?'popular':'latest'));delete bootstrap[id];if(!data.products?.length){message(root,t.empty);return;}root.innerHTML=data.products.slice(0,limit).map((p:any)=>card(p,hero)).join('');handleImages(root);}catch{message(root,t.loadError,()=>homeLoad(id,category,limit,hero));}}
if(document.getElementById('home-products')){homeLoad('home-products','all',8,false);homeLoad('hero-products','shoes',3,true);}
let catalogController:AbortController|undefined;
async function loadCatalog(){const root=document.getElementById('catalog-products');if(!root)return;catalogController?.abort();catalogController=new AbortController();const signal=catalogController.signal;
 const params=new URLSearchParams(location.search),category=document.querySelector<HTMLElement>('[data-catalog-category]')?.dataset.catalogCategory||'all',q=params.get('q')||'',sort=params.get('sort')||'popular';
 params.set('category',category);
 const form=document.querySelector<HTMLFormElement>('#catalog-search')!,select=document.querySelector<HTMLSelectElement>('#catalog-sort')!,count=document.getElementById('result-count')!,pagination=document.getElementById('pagination')!;
 (form.elements.namedItem('q') as HTMLInputElement).value=q;select.value=['popular','latest','price-up','price-down'].includes(sort)?sort:'popular';select.disabled=!!q;document.getElementById('search-sort-note')!.hidden=!q;
 document.querySelectorAll<HTMLElement>('[data-category]').forEach(a=>a.classList.toggle('active',a.dataset.category===category));
 root.setAttribute('aria-busy','true');count.textContent=t.loading;pagination.hidden=true;
 if(!bootstrap['catalog-products'])root.innerHTML=Array.from({length:8},()=>'<div class="skeleton product-skeleton"></div>').join('');
 try{const data=bootstrap['catalog-products']&&location.search===initialQuery?bootstrap['catalog-products']:await json('/api/catalog?'+params,signal);delete bootstrap['catalog-products'];if(signal.aborted)return;count.textContent=data.products.length+' '+t.results;root.innerHTML=data.products.map((p:any)=>card(p)).join('');handleImages(root);if(!data.products.length)message(root,t.empty);
  const prev=document.querySelector<HTMLButtonElement>('#previous')!,next=document.querySelector<HTMLButtonElement>('#next')!;prev.disabled=!data.previousPath;next.disabled=!data.nextPath;document.getElementById('page-number')!.textContent=t.page+' '+data.sourcePage;
  for(const [button,cursor]of [[prev,data.previousPath],[next,data.nextPath]] as const){button.onclick=()=>{if(!cursor)return;const p=new URLSearchParams(location.search);p.set('cursor',cursor);history.pushState(null,'',location.pathname+'?'+p);loadCatalog();document.querySelector('.catalog-search')!.scrollIntoView({block:'start',behavior:'smooth'});};}
  pagination.hidden=!(data.previousPath||data.nextPath);
 }catch(error){if(signal.aborted)return;count.textContent='';message(root,t.loadError,loadCatalog);}finally{if(!signal.aborted)root.removeAttribute('aria-busy');}
 document.querySelectorAll<HTMLAnchorElement>('[data-language]').forEach(a=>a.href=a.pathname+window.location.search+window.location.hash);
}
if(document.getElementById('catalog-products')){
 document.querySelector('#catalog-search')!.addEventListener('submit',event=>{event.preventDefault();const q=(new FormData(event.currentTarget as HTMLFormElement).get('q') as string||'').trim();const p=new URLSearchParams();if(q)p.set('q',q);track('catalog_search',{search_length:q.length});location.assign(base+'spreadsheet/'+(p.size?'?'+p:''));});
 document.querySelector('#catalog-sort')!.addEventListener('change',event=>{const p=new URLSearchParams(location.search);p.set('sort',(event.target as HTMLSelectElement).value);p.delete('cursor');history.pushState(null,'',location.pathname+'?'+p);loadCatalog();});
 window.addEventListener('popstate',loadCatalog);loadCatalog();
}
async function loadProduct(){const root=document.getElementById('product-detail');if(!root)return;const id=new URLSearchParams(location.search).get('id');if(!id||!/^\d{1,10}$/.test(id)){message(root,t.notFoundText);return;}
 try{const p=await json('/api/product?id='+id);document.title=p.name+' | Superbuybuyss';const images=p.images||[];
 root.innerHTML='<div class="product-detail-layout"><div><div class="product-detail-main-image">'+(images.length?'<img data-product-image id="main-product-image" src="'+esc(image(images[0]))+'" alt="'+esc(p.name)+'"/>':'<span class="image-missing">'+esc(t.imageUnavailable)+'</span>')+'</div><div class="product-thumbs">'+images.map((src:string,i:number)=>'<button data-image="'+esc(src)+'" class="'+(i===0?'active':'')+'" aria-label="'+esc(t.productImages)+' '+(i+1)+'"><img src="'+esc(image(src))+'" alt="" loading="lazy"/></button>').join('')+'</div><p class="caption">'+esc(t.productImageNote)+'</p></div><div class="product-detail-copy"><p class="eyebrow">'+esc(t.catalogEyebrow)+'</p><h1>'+esc(p.name)+'</h1><div class="price">'+esc(price(p.price))+'<small>'+esc(currency(p.price))+'</small></div><p class="caption">'+esc(t.priceNote)+'</p><div class="product-buy">'+(p.buy?'<a class="button" data-buy-product="'+esc(p.id)+'" href="'+esc(p.buy)+'" target="_blank" rel="sponsored noopener">'+esc(t.buy)+arrow+'</a>':'<p>'+esc(t.noBuy)+'</p>')+(p.original?'<a class="button outline" href="'+esc(p.original)+'" target="_blank" rel="noopener">'+esc(t.originalListing)+arrow+'</a>':'')+'</div><p class="caption">'+esc(t.buyNote)+'</p><div class="quick-check"><h2>'+esc(t.quickCheck)+'</h2><p>'+esc(t.quickCheckBody)+'</p><a class="text-link" href="'+base+'articles/superbuy-qc-photo-guide/">'+esc(t.relatedGuide)+arrow+'</a></div></div></div>';
 root.querySelectorAll<HTMLButtonElement>('[data-image]').forEach(b=>b.addEventListener('click',()=>{const main=document.getElementById('main-product-image') as HTMLImageElement;if(main){main.src=image(b.dataset.image!);root.querySelectorAll('[data-image]').forEach(el=>el.classList.toggle('active',el===b));}}));handleImages(root);
 }catch{message(root,t.loadError,loadProduct);}
}
loadProduct();
document.getElementById('article-search')?.addEventListener('input',event=>{const value=(event.target as HTMLInputElement).value.trim().toLocaleLowerCase(lang);let visible=0;document.querySelectorAll<HTMLElement>('[data-article-text]').forEach(el=>{el.hidden=!el.dataset.articleText!.toLocaleLowerCase(lang).includes(value);if(!el.hidden)visible++;});document.getElementById('articles-empty')!.hidden=visible>0;});
document.getElementById('faq-search')?.addEventListener('input',event=>{const value=(event.target as HTMLInputElement).value.trim().toLocaleLowerCase(lang);let visible=0;document.querySelectorAll<HTMLDetailsElement>('[data-faq-text]').forEach(el=>{el.hidden=!el.dataset.faqText!.toLocaleLowerCase(lang).includes(value);if(!el.hidden)visible++;el.open=!!value&&!el.hidden;});document.querySelectorAll<HTMLElement>('.faq-group').forEach(group=>group.hidden=!group.querySelector('[data-faq-text]:not([hidden])'));document.getElementById('faq-empty')!.hidden=visible>0;});
document.getElementById('copy-link')?.addEventListener('click',async event=>{const button=event.currentTarget as HTMLButtonElement;try{await navigator.clipboard.writeText(location.href);button.querySelector('span')!.textContent=t.copied;setTimeout(()=>button.querySelector('span')!.textContent=t.copyLink,2200);}catch{button.querySelector('span')!.textContent=t.copyFailed;}});

// Do not send free-form search text, addresses, product URLs or query strings.
document.addEventListener('click',e=>{const a=(e.target as Element).closest<HTMLAnchorElement>('a');if(!a)return;const url=new URL(a.href,location.href);
 if(a.dataset.productId)track('select_item',{items:[{item_id:a.dataset.productId}],item_list_id:document.body.dataset.route||'home'});
 if(a.dataset.buyProduct)track('buy_click',{item_id:a.dataset.buyProduct,link_domain:url.hostname});
 if(url.origin===location.origin&&/\/spreadsheet\/[a-z-]+\/$/.test(url.pathname))track('category_click',{category:url.pathname.split('/').filter(Boolean).at(-1)});
 if(document.body.dataset.route?.startsWith('articles/')&&url.origin===location.origin&&url.pathname.includes('/spreadsheet/'))track('article_to_catalog',{article_slug:document.body.dataset.route.slice(9)});
});
document.querySelector('.hero-search')?.addEventListener('submit',e=>{const q=String(new FormData(e.currentTarget as HTMLFormElement).get('q')||'');track('catalog_search',{search_length:q.trim().length});});
