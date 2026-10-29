import {categories} from '../src/data/config.mjs';

// Each pagination page contains different products. Keep the page in its
// canonical and reciprocal language alternates; drop redundant defaults.
export function catalogSeo(url,origin,t){
 const canonical=new URL(url.pathname,origin),params=canonical.searchParams;
 const category=url.searchParams.get('category'),q=(url.searchParams.get('q')||'').trim().slice(0,120);
 const rawPage=url.searchParams.get('page'),page=/^[1-9]\d{0,4}$/.test(rawPage||'')?Number(rawPage):1;
 const sort=url.searchParams.get('sort');
 const filtered=category&&category!=='all'&&categories.includes(category);
 if(q)params.set('q',q);
 if(filtered)params.set('category',category);
 if(sort&&sort!=='popular')params.set('sort',sort);
 if(page>1)params.set('page',String(page));
 const noindex=Boolean(q||(sort&&sort!=='popular')||url.searchParams.has('cursor')||url.searchParams.has('slice'));
 const title=[filtered?t[category]:null,t.shopTitle,page>1?`${t.page} ${page}`:null].filter(Boolean).join(' · ');
 return {canonical:canonical.href,search:canonical.search,title,noindex,page};
}

export function applyCatalogSeo($,url,origin,t){
 const seo=catalogSeo(url,origin,t);
 $('link[rel="canonical"]').attr('href',seo.canonical);
 $('meta[property="og:url"]').attr('content',seo.canonical);
 $('title').text(`${seo.title} | CSSBuy Home`);
 $('meta[property="og:title"]').attr('content',seo.title);
 $('.shop .page-heading h1').text(seo.title);
 $('link[hreflang]').each((_,el)=>{const alternate=new URL($(el).attr('href'));alternate.search=seo.search;$(el).attr('href',alternate.href);});
 if(seo.noindex)$('meta[name="robots"]').attr('content','noindex,follow');
 return seo;
}
