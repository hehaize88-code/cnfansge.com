/* Reuse the production Google tag. Never initialise a second tracker. */
(function () {
  if (window.__usfansSiteEvents) return;
  window.__usfansSiteEvents = true;
  function send(name, details) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, Object.assign({
      page_language: document.documentElement.lang,
      source_path: location.pathname
    }, details));
  }
  document.addEventListener("click", function (event) {
    var anchor = event.target.closest && event.target.closest("a[href]");
    if (!anchor) return;
    var url;
    try { url = new URL(anchor.href, location.href); } catch (_) { return; }
    if (url.hostname !== "cnfansge.com") return;
    var product = url.pathname.match(/^\/AllProducts\/(\d+)\.html$/);
    if (product) send("outbound_product_click", { product_id: product[1] });
    else if (/^\/(shoes|hoodies-sweaters|t-shirts|jackets|pants-shorts|accessories|Jersey|electronics)\/$/.test(url.pathname)) {
      send("outbound_category_click", { category_path: url.pathname });
    }
  });
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (form.action === "https://cnfansge.com/search.html") {
      // Count searches without collecting raw user-entered terms.
      send("product_search", { search_location: location.pathname });
    }
  });
})();
