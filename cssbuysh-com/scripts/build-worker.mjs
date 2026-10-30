import {readdir,readFile,mkdir,writeFile,copyFile} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';
import {locales} from '../src/data/config.mjs';
const assets={},chunks={},htmlGroups=new Map(),production=process.env.SITE_INDEXABLE==='true',origin=process.env.SITE_ORIGIN||'https://cssbuysh-preview.hehaize88.workers.dev';
const pages=[];
// Compress each locale's HTML together so shared navigation, guide cards and
// article aliases do not inflate the Worker. Exact byte offsets preserve each
// original page; the runtime only decompresses the requested locale archive.
async function walk(dir,prefix=''){
 for(const f of await readdir(dir,{withFileTypes:true})){
  if(f.name==='.prerender'||f.name==='embedded-assets.json')continue;
  if(f.isDirectory()){await walk(`${dir}/${f.name}`,`${prefix}/${f.name}`);continue;}
  const path=`${prefix}/${f.name}`,data=await readFile(`${dir}/${f.name}`),ext=f.name.split('.').pop();
  const type=({html:'text/html;charset=utf-8',css:'text/css;charset=utf-8',js:'text/javascript;charset=utf-8',json:'application/json',svg:'image/svg+xml',png:'image/png',ico:'image/x-icon',txt:'text/plain',xml:'application/xml'})[ext]||'application/octet-stream';
  if(ext==='html'){
   const first=path.split('/')[1],lang=Object.hasOwn(locales,first)?first:'en';
   if(!htmlGroups.has(lang))htmlGroups.set(lang,{buffers:[],paths:[],length:0});
   const group=htmlGroups.get(lang);assets[path]={start:group.length,length:data.length,type};group.buffers.push(data);group.paths.push(path);group.length+=data.length;
  }else{
   const gzip=['css','js','svg','json'].includes(ext);assets[path]={body:(gzip?gzipSync(data,{level:9}):data).toString('base64'),gzip,type};
  }
  if(f.name==='index.html'&&!/\/(product|search\/visual|guide|shipping)$/.test(prefix))pages.push(`${prefix}/`);
 }
}
await walk('.astro-output');
for(const group of htmlGroups.values()){
 const buffer=Buffer.concat(group.buffers),id=createHash('sha256').update(buffer).digest('hex');
 chunks[id]={body:gzipSync(buffer,{level:9}).toString('base64'),gzip:true};
 for(const path of group.paths)assets[path].archive=id;
}
const robots=production?`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n';
assets['/robots.txt']={body:Buffer.from(robots).toString('base64'),type:'text/plain'};
if(production)assets['/sitemap.xml']={body:Buffer.from(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p=>`<url><loc>${origin}${p}</loc><lastmod>2026-10-30</lastmod></url>`).join('')}</urlset>`).toString('base64'),type:'application/xml'};
await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});await writeFile('.astro-output/embedded-assets.json',JSON.stringify({assets,chunks}));
await build({entryPoints:['worker/index.mjs'],bundle:true,format:'esm',platform:'browser',target:'es2022',outfile:'dist/server/index.js',minify:true,legalComments:'none',define:{__PRODUCTION__:JSON.stringify(production),__SITE_ORIGIN__:JSON.stringify(origin)}});
try{await copyFile('.openai/hosting.json','dist/.openai/hosting.json');}catch(error){if(error.code!=='ENOENT')throw error;}
console.log(`Packaged ${Object.keys(assets).length} Astro assets in ${htmlGroups.size} locale archives with a live-source Worker; no database.`);
