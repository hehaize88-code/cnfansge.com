import {EnvHttpProxyAgent,setGlobalDispatcher} from 'undici';
if(process.env.HTTPS_PROXY||process.env.HTTP_PROXY)setGlobalDispatcher(new EnvHttpProxyAgent());
import http from 'node:http';
import worker from '../dist/server/index.js';
const args=process.argv.slice(2),i=args.indexOf('--port');const port=Number(process.env.PORT||(i>=0?args[i+1]:3000));
http.createServer(async(req,res)=>{try{const response=await worker.fetch(new Request(`http://${req.headers.host}${req.url}`,{method:req.method}));res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch(e){res.writeHead(500);res.end('Preview error');console.error(e);}}).listen(port,'0.0.0.0',()=>console.log(`Astro preview at http://0.0.0.0:${port}`));
