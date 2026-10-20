import { defineConfig } from 'astro/config';
import { apiMiddleware } from './worker/dev.mjs';
export default defineConfig({ output:'static', server:{host:'0.0.0.0',port:4173}, outDir:'./.astro-output', vite:{server:{allowedHosts:['terminal.local']},plugins:[{name:'cnfansge-api',configureServer(server){server.middlewares.use(apiMiddleware)}}]} });
