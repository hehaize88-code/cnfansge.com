import {catalogMarkup,productMarkup,errorState,esc} from '../../worker/render.mjs';
const t=JSON.parse(document.querySelector('#ui-data').textContent),prefix=document.body.dataset.prefix,lang=document.body.dataset.lang;
const menu=document.querySelector('.menu-toggle');menu?.addEventListener('click',()=>{const nav=document.querySelector('#mobile-nav'),open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.hidden=open;});
document.querySelector('#language-switch')?.addEventListener('change',e=>{location.href=e.target.value+location.search+location.hash;});
document.querySelector('#faq-search')?.addEventListener('input',e=>{let count=0;for(const row of document.querySelectorAll('.faq-item')){const show=row.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());row.hidden=!show;if(show)count++;}document.querySelector('#faq-no-results').hidden=!!count;});
const section=document.querySelector('[data-catalog]'),detail=document.querySelector('#product-detail'),url=new URL(location.href);
const form=document.querySelector('#catalog-form');if(form){for(const key of ['q','category','sort']){if(url.searchParams.has(key))form.elements[key].value=url.searchParams.get(key);}if(url.searchParams.get('q')){form.elements.sort.disabled=true;document.querySelector('#catalog-status').innerHTML=`${esc(t.searchResults)}: <strong>${esc(url.searchParams.get('q'))}</strong> · <a href="${prefix}spreadsheet/">${esc(t.clear)}</a><br>${esc(t.searchSort)}`;}for(const key of ['category','sort'])form.elements[key].addEventListener('change',()=>form.requestSubmit());}
async function load(){
 const bootstrap=document.querySelector('#source-data');let data;
 try{
 if(bootstrap){data=JSON.parse(bootstrap.textContent);bootstrap.remove();}else{const apiUrl=new URL(detail?'/api/product':'/api/catalog',location.origin);for(const key of (detail?['id']:['q','category','sort','page','cursor','slice']))if(url.searchParams.has(key))apiUrl.searchParams.set(key,url.searchParams.get(key));if(section?.dataset.catalog==='home')apiUrl.searchParams.set('sort','latest');const response=await fetch(apiUrl);if(!response.ok)throw new Error('Source unavailable');data=await response.json();}
 if(data.error)throw new Error(data.error);
 if(detail){detail.innerHTML=productMarkup(data,prefix,t,lang);document.title=`${data.name} | CSSBuy Home`;}
 else{const rendered=catalogMarkup(data,url,prefix,t,lang,section.dataset.catalog==='home');document.querySelector('#catalog-products').innerHTML=rendered.products;const hero=document.querySelector('#hero-products');if(hero)hero.innerHTML=rendered.hero;const pager=document.querySelector('#catalog-pagination');if(pager)pager.innerHTML=rendered.pagination;}
 document.querySelectorAll('.product-image img,.hero-product img').forEach(img=>img.addEventListener('error',()=>{const span=document.createElement('span');span.className='no-image';span.textContent=t.noImage;img.replaceWith(span);},{once:true}));
 }catch{if(detail)detail.innerHTML=errorState(t,true);else{document.querySelector('#catalog-products').innerHTML=errorState(t);const hero=document.querySelector('#hero-products');if(hero)hero.innerHTML=`<p class="loading">${esc(t.sourceError)}</p>`;}}
}
if(section||detail){if(!document.body.hasAttribute('data-source-rendered'))load();document.addEventListener('click',e=>{if(e.target.closest('[data-retry]')){(detail||document.querySelector('#catalog-products')).innerHTML=`<p class="loading">${esc(t.loading)}</p>`;load();}});}

const photoViewer=document.querySelector('#photo-viewer');
document.addEventListener('click',event=>{const button=event.target.closest('[data-large-image]');if(button&&photoViewer){const image=photoViewer.querySelector('img');image.src=button.dataset.largeImage;image.alt=button.querySelector('img')?.alt||t.photoLabel;photoViewer.showModal();}});
photoViewer?.querySelector('.photo-close').addEventListener('click',()=>photoViewer.close());
photoViewer?.addEventListener('click',event=>{if(event.target===photoViewer)photoViewer.close();});

// Measure intent separately from generic outbound clicks. No raw search term,
// order number, address or full outbound URL is added to these events.
document.addEventListener('click',event=>{
 const link=event.target.closest('a[data-track]');
 if(!link||typeof window.gtag!=='function')return;
 window.gtag('event',link.dataset.track,{language:lang,page_type:document.body.dataset.pageType,link_domain:new URL(link.href).hostname,transport_type:'beacon'});
});
