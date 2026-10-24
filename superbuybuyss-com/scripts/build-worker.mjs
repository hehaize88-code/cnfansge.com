import {readFile,writeFile,readdir,mkdir} from 'node:fs/promises';
import {join,extname} from 'node:path';
import {build} from 'esbuild';
const root=new URL('../',import.meta.url).pathname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8','.ico':'image/x-icon'};
const assets={};
async function walk(dir,prefix=''){for(const entry of await readdir(dir,{withFileTypes:true})){const name=prefix+'/'+entry.name;if(entry.isDirectory())await walk(join(dir,entry.name),name);else assets[name]={body:(await readFile(join(dir,entry.name))).toString('base64'),type:types[extname(entry.name)]||'application/octet-stream'};}}
await walk(join(root,'.astro-output'));
await writeFile(join(root,'.astro-output/embedded-assets.json'),JSON.stringify(assets));
await mkdir(join(root,'dist/server'),{recursive:true});
await build({entryPoints:[join(root,'worker/index.mjs')],outfile:join(root,'dist/server/index.js'),bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,conditions:['browser','worker']});
console.log('Worker ready with '+Object.keys(assets).length+' static assets.');
