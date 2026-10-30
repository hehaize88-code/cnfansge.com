import {readdir,readFile,mkdir,writeFile,copyFile} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
const assets={},chunks={},production=process.env.SITE_INDEXABLE==='true',origin=process.env.SITE_ORIGIN||'https://allchinabuybuy.com';
const articles=JSON.parse(await readFile('src/data/articles.json'));
const articleDates=Object.fromEntries(Object.entries(articles).flatMap(([lang,list])=>list.map(a=>[(lang==='en'?'/':`/${lang}/`)+`articles/${a.slug}/`,a.dateModified||a.datePublished||'2026-10-24'])));
const pages=[];
// Each locale shares an identical footer and UI dictionary across its pages.
// Compress that suffix once instead of embedding it in all nineteen pages.
function htmlParts(data){const html=data.toString('utf8'),end=html.indexOf('</main>')+7;const parts=end>6?[html.slice(0,end),html.slice(end)]:[html];return parts.map(part=>{const id=createHash('sha256').update(part).digest('hex');chunks[id]??={body:gzipSync(Buffer.from(part),{level:9}).toString('base64'),gzip:true};return id;});}
async function walk(dir,prefix=''){for(const f of await readdir(dir,{withFileTypes:true})){if(f.isDirectory())await walk(`${dir}/${f.name}`,`${prefix}/${f.name}`);else if(f.name!=='embedded-assets.json'){const path=`${prefix}/${f.name}`,data=await readFile(`${dir}/${f.name}`),ext=f.name.split('.').pop(),gzip=['html','css','js','svg','json'].includes(ext);assets[path]={...(ext==='html'?{parts:htmlParts(data)}:{body:(gzip?gzipSync(data,{level:9}):data).toString('base64'),gzip}),type:({html:'text/html;charset=utf-8',css:'text/css;charset=utf-8',js:'text/javascript;charset=utf-8',json:'application/json',svg:'image/svg+xml',png:'image/png',ico:'image/x-icon',txt:'text/plain',xml:'application/xml'})[ext]||'application/octet-stream'};if(f.name==='index.html'&&!/\/(product|search\/visual)$/.test(prefix))pages.push(`${prefix}/`);}}}
await walk('.astro-output');
const robots=production?`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n';
assets['/robots.txt']={body:Buffer.from(robots).toString('base64'),type:'text/plain'};
if(production)assets['/sitemap.xml']={body:Buffer.from(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p=>`<url><loc>${origin}${p}</loc><lastmod>${articleDates[p]||'2026-10-30'}</lastmod></url>`).join('')}</urlset>`).toString('base64'),type:'application/xml'};
await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});await writeFile('.astro-output/embedded-assets.json',JSON.stringify({assets,chunks}));
await build({entryPoints:['worker/index.mjs'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js',minify:true,legalComments:'none',define:{__PRODUCTION__:JSON.stringify(production),__SITE_ORIGIN__:JSON.stringify(origin)}});
try{await copyFile('.openai/hosting.json','dist/.openai/hosting.json');}catch(error){if(error.code!=='ENOENT')throw error;}
console.log(`Packaged ${Object.keys(assets).length} compressed Astro assets with a live-source Worker; no database.`);
