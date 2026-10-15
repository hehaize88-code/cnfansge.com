/* Interaction events for the existing GA4 property. No search text or personal data. */
(() => {
  if (window.__sugargoosEventsReady) return;
  window.__sugargoosEventsReady = true;
  const send = (name, params = {}) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, {
      page_language: document.documentElement.lang,
      page_path: location.pathname,
      transport_type: "beacon",
      ...params,
    });
  };
  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches(".catalogue-search")) return;
    const input = form.querySelector('[name="keywords"]');
    const length = input?.value.trim().length || 0;
    if (length) send("search_submit", { search_type: "external_catalogue", query_length: Math.min(length, 100) });
  });
  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link) return;
    let url;
    try { url = new URL(link.href, location.origin); } catch { return; }
    if (url.origin === location.origin && url.pathname === location.pathname && url.hash) return;
    if (url.origin === location.origin && /\/(en|de|es|fr|it)\/articles\/[^/]+$/.test(url.pathname)) {
      send("guide_click", { article_slug: url.pathname.split("/").pop(), link_area: link.closest(".related-guides") ? "related" : link.closest(".article-toc") ? "contents" : "navigation" });
    } else if (url.hostname === "cnfansge.com") {
      const product = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/);
      if (product) send("product_click", { product_id: product[1], link_domain: url.hostname });
      else if (/^\/(shoes|hoodies-sweaters|t-shirts|jackets|pants-shorts|accessories)\/$/.test(url.pathname)) {
        send("category_click", { category: url.pathname.split("/")[1], link_domain: url.hostname });
      }
    }
  });
  let usedCalculator = false;
  document.addEventListener("change", (event) => {
    if (!usedCalculator && event.target instanceof Element && event.target.closest(".weight-card")) {
      usedCalculator = true;
      send("calculator_use", { calculator_type: "volumetric_weight" });
    }
  });
})();
