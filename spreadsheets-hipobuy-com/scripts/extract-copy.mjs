import {parse} from 'parse5';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import ts from 'typescript';
const norm=s=>s.replace(/\s+/g,' ').trim();
const id=s=>crypto.createHash('sha256').update(s).digest('hex').slice(0,16);
const langs=['de','fr','es','it'];
const corpus=new Map();
const unchanged=/^(?:[\d\s.,+×÷/:·%$¥€↗→–—()©-]+|kg|cm|USD|CNY|HipoBuy|Hipobuy|HIPOBUY|Spreadsheets HipoBuy|HipoBuy Spreadsheet|English|Deutsch|Français|Español|Italiano|EN|DE|FR|ES|IT|Sweatshirts-1|Pants\/Shorts-1|Jersey-\d+|https?:.*)$/i;
function add(raw,route){const en=norm(raw||'');if(!en||unchanged.test(en)||!/[a-zA-Z]/.test(en))return;let o=corpus.get(en);if(!o)corpus.set(en,o={id:id(en),en,pages:[]});if(!o.pages.includes(route))o.pages.push(route)}
function walk(n,fn){fn(n);for(const c of n.childNodes||[])walk(c,fn)}
const files=[];function scan(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()&&!p.includes('_next'))scan(p);else if(e.name==='index.html')files.push(p)}}scan('out');
for(const file of files){const route='/'+path.relative('out',path.dirname(file)).replaceAll('\\','/')+'/';const doc=parse(fs.readFileSync(file,'utf8'));walk(doc,n=>{if(n.nodeName==='#text'&&!['script','style'].includes(n.parentNode?.tagName))add(n.value,route);for(const a of n.attrs||[]){if(['alt','title','aria-label','placeholder'].includes(a.name))add(a.value,route);if(a.name==='content'&&n.tagName==='meta'&&(n.attrs.some(x=>(x.name==='name'||x.name==='property')&&/^(description|og:title|og:description|og:image:alt|twitter:title|twitter:description)$/.test(x.value))))add(a.value,route)}if(n.tagName==='script'&&n.attrs?.some(a=>a.name==='type'&&a.value==='application/ld+json')){try{const j=JSON.parse(n.childNodes.map(c=>c.value||'').join(''));const rec=x=>{if(Array.isArray(x))x.forEach(rec);else if(x&&typeof x==='object')for(const [k,v]of Object.entries(x)){if(['name','headline','description','text'].includes(k)&&typeof v==='string')add(v,route);else if(typeof v==='object')rec(v)}};rec(j)}catch{}}})}
const translations=fs.readFileSync('app/components/translations.ts','utf8');const compiled=ts.transpileModule(translations,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const ctx={exports:{}};vm.runInNewContext(compiled,ctx);
const seeds=Object.fromEntries(langs.map(l=>[l,{}]));for(const row of ctx.exports.rows){for(const l of langs)if(row[l]&&row[l].length>=row.en.length*.65)seeds[l][norm(row.en)]=norm(row[l]);}
const q=fs.readFileSync('app/articles/hipobuy-spreadsheet-search-query/QueryArticle.tsx','utf8');const str=q.split('const copy: Record<Lang, Copy> = ')[1].split('\nexport default')[0].trim().replace(/;$/,'');const qc=vm.runInNewContext('('+str+')');function pair(a,b,l){if(typeof a==='string'&&typeof b==='string'&&b.length>=a.length*.65)seeds[l][norm(a)]=norm(b);else if(Array.isArray(a)&&Array.isArray(b)&&a.length===b.length)a.forEach((v,i)=>pair(v,b[i],l));else if(a&&b&&typeof a==='object')for(const k of Object.keys(a))pair(a[k],b[k],l)};for(const l of langs)pair(qc.en,qc[l],l);
const all=[...corpus.values()];fs.writeFileSync('content/corpus.json',JSON.stringify(all,null,2));
for(const l of langs){const file=`content/${l}.json`;const saved=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};const pending=[];for(const row of all){if(!saved[row.id]&&seeds[l][row.en])saved[row.id]=seeds[l][row.en];if(!saved[row.id])pending.push(row)}fs.writeFileSync(file,JSON.stringify(saved,null,2));fs.writeFileSync(`content/pending-${l}.json`,JSON.stringify(pending,null,2));console.log(l,'total',all.length,'seeded',Object.keys(saved).length,'pending',pending.length,'words',pending.reduce((s,x)=>s+x.en.split(/\s+/).length,0))}
