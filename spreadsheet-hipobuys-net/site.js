(() => {
 'use strict';
 const language=document.documentElement.lang;
 window.dataLayer=window.dataLayer||[];
 window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
 gtag('js',new Date());gtag('config','G-D14KS48G0Q',{language});
 const send=(name,data={})=>gtag('event',name,{page_path:location.pathname,language,...data});
 document.addEventListener('click',e=>{const a=e.target.closest?.('a');if(!a)return;const u=new URL(a.href,location.href);const label=a.textContent.trim().replace(/\s+/g,' ').slice(0,80);if(a.dataset.language)send('language_change',{selected_language:a.dataset.language,transport_type:'beacon'});else if(u.hostname==='cnfansge.com')send('outbound_product_click',{link_url:u.href,link_text:label,transport_type:'beacon'});else if(u.origin===location.origin&&/^\/(?:de\/|es\/|fr\/|it\/)?articles\/[^/]+\/$/.test(u.pathname))send('article_click',{article_path:u.pathname,transport_type:'beacon'});});
 document.querySelectorAll('form.clean-search').forEach(f=>{f.addEventListener('submit',e=>{const i=f.querySelector('[name="keywords"]');const q=i.value.trim();if(!q){e.preventDefault();i.focus();return}i.value=q;send('spreadsheet_search',{query_length:q.length,transport_type:'beacon'});});});
 const cards=[...document.querySelectorAll('.clean-product-card')],buttons=[...document.querySelectorAll('[data-filter]')];
 const input=document.querySelector('.clean-search [name="keywords"]');let category='All';
 const apply=()=>{const q=(input?.value||'').trim().toLocaleLowerCase(language);let count=0;cards.forEach(c=>{const visible=(category==='All'||c.dataset.category===category)&&`${c.textContent} ${c.dataset.tags}`.toLocaleLowerCase(language).includes(q);c.hidden=!visible;if(visible)count++;});const n=document.querySelector('[data-result-count]');if(n)n.textContent=count;const empty=document.querySelector('.filter-empty');if(empty)empty.hidden=count!==0;};
 input?.addEventListener('input',apply);
 buttons.forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.filter===category));b.addEventListener('click',()=>{category=b.dataset.filter;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});apply();send('category_filter',{category});});});
 const form=document.querySelector('#weight-calculator');form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=Object.fromEntries(new FormData(form));const keys=['length','width','height','actual','divisor'];if(!keys.every(k=>Number.isFinite(Number(d[k]))&&Number(d[k])>0))return;const v=Number(d.length)*Number(d.width)*Number(d.height)/Number(d.divisor);const format=n=>new Intl.NumberFormat(language,{maximumFractionDigits:3}).format(n)+' kg';form.querySelector('[data-result="volume"]').textContent=format(v);form.querySelector('[data-result="billable"]').textContent=format(Math.max(v,Number(d.actual)));send('shipping_weight_calculation');});
})();
