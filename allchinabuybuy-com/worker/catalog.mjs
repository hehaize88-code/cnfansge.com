import {load} from 'cheerio';
import {ui} from '../src/data/ui.mjs';
import {catalogView} from '../src/lib/catalog.mjs';

export function catalogRoute(path) {
  const match = path.match(/^\/(?:(de|es|fr|it)\/)?(finds\/|spreadsheet\/)?$/);
  return match ? {lang:match[1] || 'en', page:match[2]?.slice(0,-1) || ''} : null;
}

// Render the current cnfansge catalog into the HTML for every visitor. No snapshots or database.
export async function renderCatalog(html, request, route, loader) {
  const url = new URL(request.url), params = new URLSearchParams();
  if (route.page) for (const key of ['q','category','sort','page']) if (url.searchParams.has(key)) params.set(key,url.searchParams.get(key));
  if (!params.get('page')) params.set('page','1');
  if (!params.get('sort')) params.set('sort',route.page === 'spreadsheet' ? 'popular' : 'latest');
  const $ = load(html), t = ui[route.lang];
  const headers = {};
  let status = 200;
  try {
    const response = await loader(new Request(url.origin + '/api/catalog?' + params, {signal:AbortSignal.any([request.signal,AbortSignal.timeout(12000)])}));
    if (!response.ok) { status = response.status === 400 ? 400 : 503; throw new Error('Catalog response unavailable'); }
    const data = await response.json();
    if (!Array.isArray(data.products)) throw new Error('Invalid source catalog');
    const view = catalogView(data,params,route.lang,t,route.page ? 20 : 8);
    if (!view.items.length && !params.get('q')?.trim()) {
      status = view.page > 1 ? 404 : 503;
      if (status === 503) throw new Error('Empty source catalog');
    }
    $('#catalog').html(view.cards).attr('data-rendered','server');
    $('#pagination').html(view.pagination);
    $('#results-label').text(t.page + ' ' + view.page);
    $('#catalog-form input[name="q"]').attr('value', params.get('q') || '');
    for (const name of ['category','sort']) {
      const select = $(`#catalog-form select[name="${name}"]`);
      select.find('option').each((_, option) => { const node = $(option); if (node.attr('value') === (params.get(name) || 'all')) node.attr('selected',''); else node.removeAttr('selected'); });
      if (params.get('q')?.trim()) select.attr('disabled','');
    }
  } catch {
    if (status === 200) status = 503;
    $('#catalog').empty().append($('<div class="loading-state">').append($('<span>').text(t.error)).append($('<a>').attr('href',url.pathname+url.search).text(t.retry))).attr('data-rendered','server');
    $('#pagination').empty();
  }
  if (status !== 200 || (route.page && ['q','category','sort','page'].some(key => url.searchParams.has(key)))) {
    headers['X-Robots-Tag'] = 'noindex, follow';
    $('meta[name="robots"]').attr('content','noindex,follow');
  }
  if (status !== 200) headers['Cache-Control'] = 'no-store';
  if (status === 503) headers['Retry-After'] = '60';
  return {html:$.html(),status,headers};
}
