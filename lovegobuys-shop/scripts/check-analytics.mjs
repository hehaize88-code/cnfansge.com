import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=readFileSync('public/analytics.js','utf8');
const listeners={}; let now=0; let scriptCount=0;
class FakeElement { constructor(link){this.link=link;} closest(){return this.link;} }
class FakeForm { matches(){return true;} elements={namedItem:()=>({value:' private-query '})}; }
const location={origin:'https://lovegobuys.shop',href:'https://lovegobuys.shop/en/articles/lovegobuy-size-guide',pathname:'/en/articles/lovegobuy-size-guide'};
const document={readyState:'complete',visibilityState:'visible',documentElement:{lang:'en'},addEventListener:(event,fn)=>{(listeners[event]??=[]).push(fn);},createElement:()=>({}),head:{appendChild:()=>scriptCount++},querySelector:(selector)=>selector==='.long-article'?{getBoundingClientRect:()=>({top:-500,height:2000})}:null};
const window={location,innerHeight:800};
class Clock extends Date {static now(){return now;}}
const ctx=vm.createContext({window,document,location,Element:FakeElement,HTMLFormElement:FakeForm,Date:Clock,URL});
vm.runInContext(source,ctx);vm.runInContext(source,ctx);
const entries=()=>window.dataLayer.map(x=>Array.from(x));
const events=(name)=>entries().filter(x=>x[0]==='event'&&x[1]===name);
assert.equal(scriptCount,1);assert.equal(entries().filter(x=>x[0]==='config').length,1);assert.equal(events('article_view').length,1);
function click(href){const link={href,closest:()=>null};listeners.click[0]({target:new FakeElement(link)});}
click('https://cnfansge.com/AllProducts/6640.html');click('https://cnfansge.com/AllProducts/');click('https://lovegobuys.shop/fr/articles/lovegobuy-size-guide');
assert.equal(events('product_click')[0][2].product_id,'6640');assert.equal(events('directory_click').length,1);assert.equal(events('article_open').length,1);
listeners.submit[0]({target:new FakeForm()});assert.equal(events('search_submit').length,1);assert.ok(!JSON.stringify(entries()).includes('private-query'));
listeners.scroll[0]();assert.equal(events('article_read').length,0);now=31000;listeners.scroll[0]();listeners.scroll[0]();assert.equal(events('article_read').length,1);
// An origin proxy may have already configured the same property.
const proxyWindow={location,innerHeight:800,dataLayer:[['config','G-WS024M7GB5']]};
const proxy=vm.createContext({window:proxyWindow,document,location,Element:FakeElement,HTMLFormElement:FakeForm,Date:Clock,URL});vm.runInContext(source,proxy);
assert.equal(proxyWindow.dataLayer.filter(x=>x[0]==='config').length,1);
console.log('Analytics passed: one config, proxy deduplication, article views/reading, outbound clicks and private search events.');
