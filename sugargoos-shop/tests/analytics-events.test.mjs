import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../public/site-events.js", import.meta.url), "utf8");
function environment() {
  const events = [], handlers = {};
  class Element { constructor(anchor) { this.anchor = anchor; } closest() { return this.anchor; } }
  class HTMLFormElement {
    constructor(value) { this.action = "https://cnfansge.com/search.html"; this.elements = { namedItem: () => ({value}) }; }
    matches(selector) { return selector === ".search-box"; }
  }
  const context = vm.createContext({ URL, Element, HTMLFormElement, window: {location: new URL("https://sugargoos.shop/de/"), gtag: (...args) => events.push(args)}, document: {addEventListener: (name, fn) => { (handlers[name] ??= []).push(fn); }} });
  vm.runInContext(source, context);
  return {events, handlers, context, Element, HTMLFormElement};
}
test("tracks catalog and product intent once even if the script is loaded twice", () => {
  const e = environment();
  vm.runInContext(source, e.context);
  assert.equal(e.handlers.click.length, 1);
  e.handlers.click[0]({target:new e.Element({href:"https://cnfansge.com/AllProducts/6681.html",dataset:{productId:"6681"}})});
  assert.deepEqual(e.events.map(event => event[1]), ["main_site_click", "product_click"]);
  assert.equal(e.events[1][2].item_id, "6681");
  assert.equal(e.events[1][2].language, "de");
});
test("search records intent without forwarding query text or URL tokens", () => {
  const e = environment();
  e.handlers.submit[0]({target:new e.HTMLFormElement("https://example.com/item?private=do-not-record")});
  assert.equal(e.events[0][1], "search_submit");
  assert.equal(e.events[0][2].search_kind, "link");
  assert.doesNotMatch(JSON.stringify(e.events), /private|do-not-record|example.com/);
  e.handlers.submit[0]({target:new e.HTMLFormElement("   ")});
  assert.equal(e.events.length, 1);
});
test("does not count unrelated external links or article anchor navigation", () => {
  const e = environment();
  e.handlers.click[0]({target:new e.Element({href:"https://blog.sugargoo.com/",dataset:{}})});
  e.handlers.click[0]({target:new e.Element({href:"https://sugargoos.shop/de/#section-1",dataset:{}})});
  assert.equal(e.events.length, 0);
  e.handlers.click[0]({target:new e.Element({href:"https://sugargoos.shop/de/articles/sugargoo-fees-total-cost-guide/",dataset:{}})});
  assert.equal(e.events[0][1], "article_open");
});
