/* One configuration per document, including when the origin proxy supplies GA4. */
(function () {
  "use strict";
  if (window.__lovegobuysAnalytics) return;
  window.__lovegobuysAnalytics = true;
  var measurementId = "G-WS024M7GB5";
  function ready() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    var configured = window.dataLayer.some(function (entry) {
      return entry && entry[0] === "config" && entry[1] === measurementId;
    });
    if (!configured) {
      if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        var loader = document.createElement("script");
        loader.async = true;
        loader.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
        document.head.appendChild(loader);
      }
      window.gtag("js", new Date());
      window.gtag("config", measurementId);
    }
    if (/^\/(en|de|es|fr|it)\/articles\/[^/]+\/?$/.test(location.pathname)) {
      record("article_view", { article_slug: location.pathname.split("/")[3] });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready, { once: true });
  else ready();
  function record(name, details) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, Object.assign({
      content_language: document.documentElement.lang,
      page_path: window.location.pathname,
      transport_type: "beacon"
    }, details));
  }
  var articleRead = false;
  var openedAt = Date.now();
  document.addEventListener("scroll", function () {
    if (articleRead || document.visibilityState !== "visible" || Date.now() - openedAt < 30000) return;
    var article = document.querySelector(".long-article");
    if (!article) return;
    var bounds = article.getBoundingClientRect();
    if (window.innerHeight - bounds.top < bounds.height * 0.5) return;
    articleRead = true;
    record("article_read", { article_slug: location.pathname.split("/")[3], reading_threshold: "30s_half_article" });
  }, { passive: true });
  document.addEventListener("click", function (event) {
    var link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link) return;
    var destination;
    try { destination = new URL(link.href, window.location.href); } catch (_) { return; }
    if (destination.hostname === "cnfansge.com") {
      var product = destination.pathname.match(/\/AllProducts\/(\d+)\.html$/);
      record(product ? "product_click" : "directory_click", {
        link_domain: destination.hostname,
        destination_path: destination.pathname,
        product_id: product ? product[1] : "",
        placement: link.closest(".hero") ? "hero" : link.closest(".article-prose") ? "article" : "navigation_or_grid"
      });
    } else if (destination.origin === location.origin && destination.pathname.indexOf("/articles/") !== -1) {
      record("article_open", { destination_path: destination.pathname });
    }
  }, true);
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches(".search-panel")) return;
    var input = form.elements.namedItem("keywords");
    if (!input || !input.value.trim()) return;
    /* Do not send visitors' raw queries or pasted product URLs to analytics. */
    record("search_submit", { destination_domain: "cnfansge.com", query_length: input.value.trim().length });
  }, true);
}());
