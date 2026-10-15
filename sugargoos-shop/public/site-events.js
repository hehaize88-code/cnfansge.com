(function () {
  if (window.__sugargooEventsLoaded) return;
  window.__sugargooEventsLoaded = true;
  function emit(name, details) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, Object.assign({
      page_path: window.location.pathname,
      language: window.location.pathname.split("/")[1] || "en",
      transport_type: "beacon"
    }, details));
  }
  function isCatalog(url) {
    return url.hostname === "cnfansge.com" || url.hostname === "www.cnfansge.com";
  }
  document.addEventListener("click", function (event) {
    var anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!anchor) return;
    var url = new URL(anchor.href, window.location.href);
    if (isCatalog(url)) {
      emit("main_site_click", { link_path: url.pathname, link_kind: anchor.dataset.productId ? "product" : (anchor.dataset.linkKind || "catalog") });
      if (anchor.dataset.productId) emit("product_click", { item_id: anchor.dataset.productId, link_path: url.pathname });
    } else if (url.origin === window.location.origin && url.pathname !== window.location.pathname && /\/articles\/[^/]+/.test(url.pathname)) {
      emit("article_open", { article_path: url.pathname });
    }
  });
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches(".search-box")) return;
    if (!isCatalog(new URL(form.action, window.location.href))) return;
    var input = form.elements.namedItem("keywords");
    if (!input || !input.value.trim()) return;
    // Record intent, never the query: pasted links may include personal tokens.
    emit("search_submit", { search_kind: /^https?:\/\//i.test(input.value.trim()) ? "link" : "keyword" });
  });
})();
