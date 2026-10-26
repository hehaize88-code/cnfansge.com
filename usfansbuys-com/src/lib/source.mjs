import { load } from 'cheerio/slim';

export const SOURCE = 'https://cnfansge.com';
export const categories = [
  ['all', 'All products'], ['shoes', 'Shoes'], ['hoodies-sweaters', 'Sweatshirts'],
  ['t-shirts', 'T-Shirts'], ['jackets', 'Jackets'], ['pants-shorts', 'Pants & Shorts'],
  ['headwear', 'Headwear'], ['accessories', 'Accessories'], ['short-sets', 'Short Sets'],
  ['electronics', 'Electronics'], ['other-stuff', 'Other Stuff'], ['jersey', 'Jerseys'],
];
const categoryNames = new Set(categories.map(([id]) => id));
const memoryCache = new Map(); // Expiring response cache, never a product database.
export class SourceError extends Error {
  constructor(message, status = 502, retryAfter = null) {
    super(message); this.name = 'SourceError'; this.status = status; this.retryAfter = retryAfter;
  }
}
function sourceUrl(value) {
  const url = new URL(value, SOURCE);
  if (url.protocol !== 'https:' || !['cnfansge.com', 'www.cnfansge.com'].includes(url.hostname) || url.port || url.username || url.password) throw new SourceError('Invalid source URL', 400);
  url.hostname = 'cnfansge.com';
  return url;
}
export function sourceImage(value) {
  try { const u = sourceUrl(value); return u.pathname.startsWith('/uploads/') ? u.href : null; } catch { return null; }
}
async function readHtml(value, signal) {
  const url = sourceUrl(value).href;
  const cached = memoryCache.get(url);
  if (cached && cached.until > Date.now()) return cached.text;
  const response = await fetch(url, {
    signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(22000)]) : AbortSignal.timeout(22000),
    headers: { Accept: 'text/html,application/javascript;q=0.9' },
  });
  if (!response.ok) throw new SourceError(`Catalog source returned HTTP ${response.status}`, response.status === 429 ? 503 : 502, response.headers.get('retry-after'));
  const text = await response.text();
  if (text.length > 2_000_000) throw new SourceError('Unexpectedly large source response');
  if (memoryCache.size > 40) memoryCache.delete(memoryCache.keys().next().value);
  memoryCache.set(url, { text, until: Date.now() + 60_000 });
  return text;
}
function priceValues(raw, rate) {
  const amount = Number(String(raw).replace(/[^0-9.-]/g, ''));
  if (!raw || !Number.isFinite(amount) || amount <= 0) return { cny: null, usd: null };
  if (String(raw).includes('$')) return { cny: null, usd: amount };
  return { cny: amount, usd: rate ? Math.round(amount / rate * 100) / 100 : null };
}
export async function readSourceRate(html, signal) {
  const $ = load(html);
  const script = $('script[src]').toArray().map(el => $(el).attr('src')).find(src => src?.startsWith('/template/moban/pc/static/js/script.js'));
  if (!script) return null;
  try {
    const js = await readHtml(script, signal);
    const value = Number(js.match(/\bCNY_TO_USD_RATE\s*=\s*(\d+(?:\.\d+)?)/)?.[1]);
    return value > 0 && value < 100 ? value : null;
  } catch { return null; }
}
function getSortRoute(html, sort) {
  const wanted = { latest: 'new', popular: 'click', 'price-asc': 'price', 'price-desc': 'price' }[sort];
  if (!wanted) throw new SourceError('Unknown sort option', 400);
  const $ = load(html);
  for (const button of $('.sort-btn[onclick]').toArray()) {
    const route = $(button).attr('onclick')?.match(/href\s*=\s*['"]([^'"]+)/)?.[1];
    if (!route) continue;
    const url = sourceUrl(route);
    if (url.pathname !== '/index.php' || url.searchParams.get('c') !== 'Lists' || url.searchParams.get('sort') !== wanted) continue;
    url.searchParams.set('sort_asc', sort === 'price-asc' ? 'asc' : 'desc');
    url.searchParams.delete('page');
    return url;
  }
  throw new SourceError('Source sorting controls are unavailable');
}
export function parseCatalog(html, rate) {
  const $ = load(html);
  if (!$('.list-container').length || !$('.product-grid').length) throw new SourceError('Unexpected source catalog response');
  const products = $('.product-card').toArray().flatMap(el => {
    const card = $(el), anchor = card.find('a.product-image').first();
    const href = anchor.attr('href') || '';
    let url; try { url = sourceUrl(href); } catch { return []; }
    const id = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/)?.[1];
    const name = card.find('.product-name').first().text().trim();
    const img = anchor.find('img').first();
    const image = sourceImage(img.attr('data-src') || img.attr('src'));
    if (!id || !name || !image) return [];
    const rawPrice = card.find('.product-price').first().text().trim();
    return [{ id, sourceRecordId: id, name, image, mainImage: image, sourceUrl: url.href, price: priceValues(rawPrice, rate), rate }];
  });
  if ($('.product-card').length && !products.length) throw new SourceError('Source product markup could not be parsed');
  const next = $('.pagination a[href]').toArray().find(el => /下一页|next/i.test($(el).text()));
  return { products, hasNextSourcePage: Boolean(next), sourcePage: Number($('.pagination .active').text().trim()) || 1 };
}
export async function readCatalog(options = {}, signal) {
  const category = categoryNames.has(options.category) ? options.category : 'all';
  const query = String(options.query || options.q || '').trim().slice(0, 120);
  const sort = ['latest', 'popular', 'price-asc', 'price-desc'].includes(options.sort) ? options.sort : 'latest';
  const page = Math.min(10000, Math.max(1, Math.floor(Number(options.page) || 1)));
  const pageSize = Math.min(60, Math.max(1, Math.floor(Number(options.pageSize) || 20)));
  let firstUrl, firstHtml;
  if (query) {
    firstUrl = sourceUrl('/search.html');
    firstUrl.search = new URLSearchParams({ keywords: query, channelid: '2' }).toString();
    firstHtml = await readHtml(firstUrl, signal);
  } else {
    const categoryHtml = await readHtml(category === 'all' ? '/AllProducts/' : `/${category}/`, signal);
    firstUrl = getSortRoute(categoryHtml, sort);
    firstHtml = await readHtml(firstUrl, signal);
  }
  const rate = await readSourceRate(firstHtml, signal);
  const first = parseCatalog(firstHtml, rate);
  const sourcePageSize = first.products.length;
  if (!sourcePageSize) return { products: [], page, pageSize, sourcePage: 1, sourcePageSize: 0, hasPrevious: page > 1, hasNext: false, query, category, sort: query ? 'source-relevance' : sort, rate, fetchedAt: new Date().toISOString() };
  const offset = (page - 1) * pageSize;
  const sourcePage = Math.floor(offset / sourcePageSize) + 1;
  const within = offset % sourcePageSize;
  const pageUrl = new URL(firstUrl);
  pageUrl.searchParams.set('page', String(sourcePage));
  const current = sourcePage === 1 ? first : parseCatalog(await readHtml(pageUrl, signal), rate);
  let products = current.products.slice(within, within + pageSize);
  // Handles a non-divisible upstream page size without dropping rows.
  if (products.length < pageSize && current.hasNextSourcePage) {
    const nextUrl = new URL(pageUrl); nextUrl.searchParams.set('page', String(sourcePage + 1));
    products = products.concat(parseCatalog(await readHtml(nextUrl, signal), rate).products.slice(0, pageSize - products.length));
  }
  return {
    products, page, pageSize, sourcePage, sourcePageSize,
    hasPrevious: page > 1,
    hasNext: within + pageSize < current.products.length || current.hasNextSourcePage,
    query, category: query ? 'all' : category, sort: query ? 'source-relevance' : sort,
    rate, fetchedAt: new Date().toISOString(), sourceUrl: pageUrl.href,
  };
}
export function parseProduct(html, id, rate) {
  const $ = load(html), detail = $('.product-detail').first();
  const name = detail.find('.product-title').first().text().trim();
  if (!name) throw new SourceError('Product is unavailable', 404);
  const images = [...new Set(detail.find('.product-gallery img').toArray().map(el => sourceImage($(el).attr('data-src') || $(el).attr('src'))).filter(Boolean))];
  const productId = detail.find('.product-id').text().match(/\d+/)?.[0] || null;
  const links = $('a.platform-option[href]').toArray().map(el => $(el).attr('href')).filter(Boolean);
  let buy = null, channel = null;
  for (const href of links) {
    try {
      const url = new URL(href);
      const match = url.pathname.match(/^\/product\/([123])\/(\d+)\/?$/);
      if (url.protocol === 'https:' && ['usfans.com', 'www.usfans.com'].includes(url.hostname) && match && match[2] === productId) {
        channel = match[1]; url.hostname = 'www.usfans.com'; url.search = new URLSearchParams({ ref: 'SWD92F' }).toString(); buy = url.href; break;
      }
    } catch { /* ignore non-URL links */ }
  }
  const category = $('.breadcrumb a').last().attr('href')?.replace(/^\/+|\/+$/g, '') || null;
  return {
    id: String(id), sourceRecordId: String(id), name, images, image: images[0] || null, mainImage: images[0] || null,
    price: priceValues(detail.find('.product-price').first().text(), rate), rate,
    marketplaceProductId: productId, marketplace: ({ 1: '1688', 2: 'taobao', 3: 'weidian' })[channel] || null,
    channel, buy, category, sourceUrl: `${SOURCE}/AllProducts/${id}.html`,
    qcImages: [], qcVerified: false, qcStatus: 'not-identified-in-source',
  };
}
export async function readProduct(id, signal) {
  if (!/^\d{1,10}$/.test(String(id))) throw new SourceError('Invalid product ID', 400);
  const html = await readHtml(`/AllProducts/${id}.html`, signal);
  return parseProduct(html, id, await readSourceRate(html, signal));
}
