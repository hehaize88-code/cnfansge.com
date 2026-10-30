import {cards,hero,product,errorBox,pathFor} from './render.js';
const lang=document.body.dataset.lang||'en',path=document.body.dataset.path||'';
const {ui:t,categories}=JSON.parse(document.querySelector('#site-translations').textContent);
const params=new URLSearchParams(location.search);
const categoryId=path.startsWith('category/')?path.split('/')[1]:null;
const apiParams=new URLSearchParams(params);if(categoryId)apiParams.set('category',categoryId);
document.querySelectorAll('[data-language]').forEach(a=>{a.href=new URL(a.getAttribute('href')+location.search+location.hash,location.origin).href;});
document.addEventListener('click',e=>{document.querySelectorAll('.language[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;});const b=e.target.closest('[data-gallery-image]');if(b){document.querySelector('[data-main-photo]').src=b.dataset.galleryImage;document.querySelectorAll('[data-gallery-image]').forEach(x=>x.classList.toggle('selected',x===b));}if(e.target.closest('[data-retry]'))load();});
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.classList.add('image-failed');img.alt=t.noImage;}));
let initial;try{initial=JSON.parse(document.querySelector('#initial-data')?.textContent||'null');}catch{}
const catalog=document.querySelector('[data-catalog]');
function updateMeta(d){
 const el=document.querySelector('[data-result-count]');if(el)el.textContent=`${d.products.length} ${t.catalogCount}${d.query?' · “'+d.query+'”':''}`;
 const current=d.page||1;const p=document.querySelector('[data-page]');if(p)p.textContent=current;
 for(const [sel,enabled,num] of [['[data-prev]',d.hasPrevious,current-1],['[data-next]',d.hasNext,current+1]]){const a=document.querySelector(sel);if(a){const q=new URLSearchParams(params);q.set('page',num);a.href=enabled?'?'+q:location.pathname;a.setAttribute('aria-disabled',String(!enabled));}}
 const input=document.querySelector('[data-jump] input');if(input)input.value=current;
}
function display(d){
 if(d.error){if(catalog)catalog.innerHTML=errorBox(t);else if(document.querySelector('[data-product-detail]'))document.querySelector('[data-product-detail]').innerHTML=errorBox(t,t.productMissing);return;}
 if(catalog){const p=catalog.dataset.catalog==='home'?d.products.slice(0,4):d.products;catalog.innerHTML=p.length?cards(p,t,lang):`<p class="loading-box">${t.noResults}</p>`;updateMeta(d);if(document.querySelector('[data-hero-product]')&&p.length)document.querySelector('[data-hero-product]').innerHTML=hero(p[0],t,lang);}
 else if(document.querySelector('[data-product-detail]')){document.querySelector('[data-product-detail]').innerHTML=product(d,t,lang);document.title=d.name+' | USFans Buys';}
}
async function load(){if(!catalog&&path!=='product')return;const api=path==='product'?'/api/product?id='+encodeURIComponent(params.get('id')||''):'/api/catalog?'+(path===''?'sort=latest&pageSize=4':apiParams.toString());try{const r=await fetch(api);const data=await r.json();if(!r.ok)throw Error(data.error);display(data);}catch{display({error:true});}}
if(initial) {if(initial.error)display(initial);else if(catalog)updateMeta(initial);} else load();
const sort=document.querySelector('#sort');if(sort){sort.value=params.get('sort')||'latest';if(params.has('q')){sort.disabled=true;}sort.addEventListener('change',()=>{const p=new URLSearchParams(params);p.set('sort',sort.value);p.delete('page');location.search=p.toString();});}
document.querySelectorAll('.search-form input[name=q]').forEach(el=>{if(path!=='')el.value=params.get('q')||'';});
document.querySelectorAll('[data-category]').forEach(a=>a.classList.toggle('active',(categoryId||params.get('category')||'all')===a.dataset.category));
document.querySelector('[data-jump]')?.addEventListener('submit',e=>{e.preventDefault();const p=new URLSearchParams(params);p.set('page',e.target.elements.page.value);location.search=p.toString();});
document.addEventListener('click',e=>{if(e.target.closest('a[aria-disabled=true]'))e.preventDefault();});
document.querySelector('#faq-search')?.addEventListener('input',e=>{const q=e.target.value.toLocaleLowerCase(lang).trim();let count=0;document.querySelectorAll('[data-faq-item]').forEach(el=>{const show=el.textContent.toLocaleLowerCase(lang).includes(q);el.hidden=!show;if(show)count++;});document.querySelector('#faq-empty').hidden=count>0;});
document.addEventListener('click',async e=>{const b=e.target.closest('[data-copy-link]');if(!b)return;try{await navigator.clipboard.writeText(location.href);b.textContent=t.copied;}catch{b.textContent=t.copyFailed;}});
