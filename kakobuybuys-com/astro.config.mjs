import {defineConfig} from 'astro/config';
import {api} from './worker/source.mjs';
export default defineConfig({output:'static',outDir:'./.astro-output',site:'https://kakobuybuys.com',server:{host:'0.0.0.0'},vite:{server:{allowedHosts:['terminal.local']},plugins:[{name:'live-source',configureServer(server){server.middlewares.use(async(req,res,next)=>{if(!req.url?.startsWith('/api/'))return next();const response=await api(new Request('http://localhost'+req.url));res.statusCode=response.status;response.headers.forEach((v,k)=>res.setHeader(k,v));res.end(await response.text());});}}]}});
