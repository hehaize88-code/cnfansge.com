(() => {
  'use strict';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-LXGCJ9PL8W');
  const language = document.documentElement.lang;
  const send = (name, data) => window.gtag('event', name, { page_path: location.pathname, language, ...data });
  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a');
    if (!anchor) return;
    const url = new URL(anchor.href, location.href);
    const label = anchor.textContent.trim().replace(/\s+/g, ' ').slice(0, 80);
    if (anchor.dataset.language && anchor.dataset.language !== language) {
      send('language_change', { language: anchor.dataset.language, previous_language: language, transport_type: 'beacon' });
    } else if (url.hostname === 'cnfansge.com') {
      send('main_index_click', { link_url: url.href, link_text: label });
    } else if (url.origin === location.origin && /^\/(?:de\/|fr\/|es\/|it\/)?articles\/[^/]+\/$/.test(url.pathname)) {
      send('article_click', { article_path: url.pathname, link_text: label, transport_type: 'beacon' });
    }
  });
  document.querySelectorAll('form.searchBox').forEach(form => {
    const input = form.querySelector('input[name="keywords"]');
    if (input) input.required = true;
    form.addEventListener('submit', event => {
      const query = input?.value.trim() || '';
      if (!query) { event.preventDefault(); input?.focus(); return; }
      input.value = query;
      send('main_index_search', { query_length: query.length });
    });
  });
  document.querySelectorAll('.explorer').forEach(explorer => {
    const input = explorer.querySelector('.filterBar input');
    const cards = [...explorer.querySelectorAll('.productCard')];
    const buttons = [...explorer.querySelectorAll('[data-filter]')];
    const count = explorer.querySelector('.resultCount b');
    const empty = explorer.querySelector('.emptyState');
    let category = 'All';
    const apply = () => {
      const q = (input?.value || '').trim().toLocaleLowerCase(language);
      let total = 0;
      cards.forEach(card => {
        const visible = (category === 'All' || card.dataset.category === category) && card.textContent.toLocaleLowerCase(language).includes(q);
        card.hidden = !visible;
        if (visible) total++;
      });
      if (count) count.textContent = String(total);
      if (empty) empty.hidden = total !== 0;
    };
    input?.addEventListener('input', apply);
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
      button.addEventListener('click', () => {
        category = button.dataset.filter;
        buttons.forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
        apply(); send('category_filter', { category });
      });
    });
  });
  const calculator = document.querySelector('#weight-calculator');
  calculator?.addEventListener('submit', event => {
    event.preventDefault();
    if (!calculator.reportValidity()) return;
    const values = Object.fromEntries(new FormData(calculator));
    const keys = ['length', 'width', 'height', 'actual', 'divisor'];
    if (!keys.every(k => Number.isFinite(Number(values[k])) && Number(values[k]) > 0)) return;
    const volume = Number(values.length) * Number(values.width) * Number(values.height) / Number(values.divisor);
    const format = n => new Intl.NumberFormat(language, { maximumFractionDigits: 3 }).format(n) + ' kg';
    calculator.querySelector('[data-result="volume"]').textContent = format(volume);
    calculator.querySelector('[data-result="billable"]').textContent = format(Math.max(volume, Number(values.actual)));
    send('shipping_weight_calculation', {});
  });
})();
