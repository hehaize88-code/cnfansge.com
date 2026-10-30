import {catalogMarkup,productMarkup,errorMarkup} from './render.mjs';
import {calculateWeight} from './shipping.mjs';
const t=JSON.parse(document.querySelector('#ui-data').textContent),body=document.body,p=body.dataset.prefix,lang=body.dataset.lang;const url=new URL(location.href);
document.querySelectorAll('[data-locale]').forEach(a=>{const u=new URL(a.href);u.search=location.search;u.hash=location.hash;a.href=u.pathname+u.search+u.hash;a.addEventListener('click',()=>{try{localStorage.setItem('kakobuybuys-language',a.dataset.locale)}catch{}})});
document.querySelectorAll('[data-query]').forEach(el=>{const value=url.searchParams.get(el.dataset.query);if(value!==null)el.value=value});
document.addEventListener('click',e=>{const b=e.target.closest('[data-photo]');if(b){const im=document.querySelector('#detail-main');if(im)im.src=b.dataset.photo}if(e.target.closest('[data-retry]'))load();document.querySelectorAll('.locale-menu[open]').forEach(d=>{if(!d.contains(e.target))d.open=false})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('details.locale-menu').forEach(d=>d.open=false)});
if(matchMedia('(max-width:600px)').matches){const d=document.querySelector('.article-toc details');if(d)d.open=false;}
async function load(){const container=document.querySelector('#catalog-products'),detail=document.querySelector('#product-detail');if(!container&&!detail)return;const target=detail||container;const home=container?.dataset.catalog==='home';const api=new URL(detail?'/api/product':'/api/catalog',location.origin);for(const key of detail?['id']:['q','category','sort','page'])if(url.searchParams.has(key))api.searchParams.set(key,url.searchParams.get(key));if(home)api.searchParams.set('sort','latest');try{const r=await fetch(api,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw new Error('Unavailable');const data=await r.json();if(detail){detail.innerHTML=productMarkup(data,p,t,lang);document.title=data.name+' | Kakobuy Buys'}else{const m=catalogMarkup(data,url,p,t,lang,home);target.innerHTML=m.products;const pg=document.querySelector('#catalog-pagination');if(pg)pg.innerHTML=m.pagination;const hero=document.querySelector('#hero-products');if(hero)hero.innerHTML=m.hero;}}catch{target.innerHTML=errorMarkup(t);const hero=document.querySelector('#hero-products');if(hero)hero.innerHTML=`<p class="loading">${t.sourceError}</p>`}}
if(body.dataset.sourceRendered!=='true')load();

const queryInput=document.querySelector('.catalog-controls [name=q]'),categoryInput=document.querySelector('.catalog-controls [name=category]');
if(queryInput&&categoryInput){const update=()=>{categoryInput.disabled=!!queryInput.value.trim();if(categoryInput.disabled)categoryInput.value='all'};queryInput.addEventListener('input',update);update();}

// Intent events are not purchases. Never attach free-text searches, account data or full URLs.
const track=(event,params={})=>{
  if(location.hostname==='kakobuybuys.com'&&typeof window.gtag==='function')window.gtag('event',event,{page_language:lang,content_route:body.dataset.route||'home',...params});
};
document.addEventListener('click',event=>{
  const anchor=event.target.closest('a[href]');if(!anchor)return;
  const destination=new URL(anchor.href,location.origin);
  if(destination.hostname==='item2.kakobuy.com'&&['/register','/item/details'].includes(destination.pathname))track('affiliate_click',{link_type:destination.pathname==='/register'?'register':'product'});
  if(destination.origin===location.origin&&destination.pathname.includes('/articles/'))track('guide_navigation',{guide_slug:destination.pathname.split('/').filter(Boolean).at(-1)});
});
document.querySelectorAll('form').forEach(form=>{
  if(form.querySelector('[name="q"]'))form.addEventListener('submit',()=>{
    track('catalog_search',{has_search_term:!!form.querySelector('[name="q"]').value.trim(),category:form.querySelector('[name="category"]')?.value||'all'});
  });
});
const calculator=document.querySelector('[data-shipping-calculator]');
if(calculator){
  const results=calculator.querySelector('.calculator-results'),error=calculator.querySelector('[data-calculator-error]');
  calculator.addEventListener('input',()=>{results.hidden=true;error.hidden=true});
  calculator.addEventListener('change',()=>{results.hidden=true;error.hidden=true});
  calculator.addEventListener('submit',event=>{
    event.preventDefault();
    try{
      const fields=new FormData(calculator),values=Object.fromEntries(['weight','length','width','height','divisor','increment'].map(key=>[key,Number(fields.get(key))]));
      const {volumetric,billable}=calculateWeight({...values,rule:fields.get('rule')});
      const format=new Intl.NumberFormat(lang,{style:'unit',unit:'kilogram',maximumFractionDigits:3});
      calculator.querySelector('[data-volume]').textContent=format.format(volumetric);
      calculator.querySelector('[data-billable]').textContent=format.format(billable);
      error.hidden=true;results.hidden=false;
      track('shipping_calculation',{billing_rule:fields.get('rule')});
    }catch{results.hidden=true;error.hidden=false;}
  });
}
