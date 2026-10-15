/* Static navigation and first-party interaction events. No React runtime required. */
(() => {
  const locales = ['en','de','fr','es','it','pl'];
  const url = new URL(location.href);
  const requested = url.searchParams.get('lang');
  // Preserve old shared ?lang= links without maintaining duplicate indexable URLs.
  if (requested && locales.includes(requested)) {
    const route = location.pathname.replace(/^\/(de|fr|es|it|pl)(?=\/)/,'');
    url.pathname = requested === 'en' ? route : `/${requested}${route}`;
    url.searchParams.delete('lang');
    if (url.href !== location.href) { location.replace(url.href); return; }
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
  window.gtag('js',new Date());
  window.gtag('config','G-NJEYHQ693H',{language:document.documentElement.lang});
  const track = (event, params) => window.gtag('event',event,{page_language:document.documentElement.lang,page_path:location.pathname,...params});
  document.addEventListener('click',event => {
    const link=event.target.closest('a');
    if (!link) return;
    const target=new URL(link.href,location.href);
    if(link.dataset.language) {track('language_change',{target_language:link.dataset.language});return;}
    if(target.hostname==='cnfansge.com') {
      const kind=/\/AllProducts\/\d+\.html$/.test(target.pathname)?'product':target.pathname==='/AllProducts/'?'catalog':'category';
      track('catalog_outbound_click',{link_url:target.origin+target.pathname,link_type:kind,placement:link.dataset.track||link.closest('section')?.className||'navigation'});
    } else if(target.origin===location.origin && /\/(articles|how-to-use|qc-photos|shipping-cost|warehouse-storage)\//.test(target.pathname)) {
      track('article_click',{article_path:target.pathname});
    }
  });
  document.addEventListener('submit',event => {
    const form=event.target;
    if(!form.matches('.search-box')) return;
    const value=new FormData(form).get('keywords')?.toString().trim()||'';
    if(!value){event.preventDefault();return;}
    // Measure demand without sending free-form visitor input to Analytics.
    track('product_index_search',{search_length:value.length});
  });
  document.addEventListener('click',event => {
    for(const menu of document.querySelectorAll('.language-picker[open]')) if(!menu.contains(event.target)) menu.removeAttribute('open');
  });
})();
