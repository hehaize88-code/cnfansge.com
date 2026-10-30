export const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function productCard(p,{lang,base,t,hero=false}){
 const e=escapeHtml,currency=p.price?.usd?'USD':p.price?.cny?'CNY':'';
 const price=currency?new Intl.NumberFormat(lang,{style:'currency',currency,currencyDisplay:'narrowSymbol'}).format(currency==='USD'?p.price.usd:p.price.cny):t.priceUnavailable;
 const pic=p.image?`<img data-product-image src="${e(p.image)}" alt="${e(p.name)}" loading="${hero?'eager':'lazy'}" decoding="async"/>`:`<span class="image-missing">${e(t.imageUnavailable)}</span>`;
 const attrs=`href="${base}product/?id=${encodeURIComponent(p.id)}" data-product-id="${e(p.id)}"`;
 if(hero)return `<a class="hero-product" ${attrs}>${pic}<div class="hero-product-caption"><h3>${e(p.name)}</h3><span class="price">${e(price)}</span></div></a>`;
 return `<a class="product-card" ${attrs}><div class="product-image">${pic}<span class="product-arrow" aria-hidden="true">↗</span></div><h3>${e(p.name)}</h3><div class="price">${e(price)}<small>${currency}</small></div></a>`;
}
