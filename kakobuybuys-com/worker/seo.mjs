export const SITE_ORIGIN = 'https://kakobuybuys.com';
export const SITE_HOST = 'kakobuybuys.com';
export const isProduction = url => url.hostname === SITE_HOST;
export const isIndexableRoute = route => !['product', 'search/visual'].includes(route);
export function robotsFor(url, route) {
  if (!isProduction(url)) return 'noindex,nofollow';
  if (!isIndexableRoute(route) || ['q', 'category', 'sort', 'page'].some(key => url.searchParams.has(key))) return 'noindex,follow';
  return 'index,follow,max-image-preview:large';
}
export function canonicalFor(url, route) {
  const canonical = new URL(url.pathname, SITE_ORIGIN);
  if (route === 'product' && /^\d+$/.test(url.searchParams.get('id') || '')) canonical.searchParams.set('id', url.searchParams.get('id'));
  return canonical.href;
}
export function canonicalRedirect(url) {
  if (url.hostname === 'www.' + SITE_HOST || (url.hostname === SITE_HOST && url.protocol !== 'https:')) return SITE_ORIGIN + url.pathname + url.search;
  if (url.pathname.endsWith('/index.html')) return new URL(url.pathname.slice(0, -10) + url.search, url).href;
  return null;
}
