export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeImage(value) {
  try { const u = new URL(value); return u.protocol === 'https:' && ['cnfansge.com','www.cnfansge.com'].includes(u.hostname) && u.pathname.startsWith('/uploads/') ? u.href : null; } catch { return null; }
}
export const money = (price, t) => price ? `${price.usd ? `<strong>$${Number(price.usd).toFixed(2)}</strong>` : ''}<small>¥${Number(price.cny).toFixed(2)}</small>` : `<small>${esc(t.noPrice)}</small>`;
export function card(product, lang, t) {
  const image = safeImage(product.image), base = lang === 'en' ? '/' : `/${lang}/`;
  return `<a class="product-card" href="${base}product/?id=${encodeURIComponent(product.id)}"><div class="product-img">${image ? `<img src="${esc(image)}" alt="${esc(product.name)}" loading="lazy" decoding="async"/>` : `<span class="no-image">${esc(t.noImage)}</span>`}<span class="view-icon" aria-hidden="true">↗</span></div><h3>${esc(product.name)}</h3><div class="product-price">${money(product.price,t)}</div></a>`;
}
export function catalogView(data, params, lang, t, limit = 20) {
  const page = data.displayPage || 1, offset = ((page - 1) % 3) * 20;
  const items = data.products.slice(offset, offset + limit);
  const link = (n, label) => { const p = new URLSearchParams(params); p.set('page', String(n)); return `<a href="?${esc(p.toString())}">${esc(label)}</a>`; };
  return {items, page, cards: items.length ? items.map(p => card(p,lang,t)).join('') : `<div class="loading-state">${esc(t.empty)}</div>`, pagination: (page > 1 ? link(page - 1, '← ' + t.previous) : '') + `<span aria-current="page">${esc(t.page)} ${page}</span>` + ((offset + 20 < data.products.length || data.nextPath) ? link(page + 1, t.next + ' →') : '')};
}
