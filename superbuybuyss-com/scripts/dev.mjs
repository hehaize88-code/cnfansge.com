import {createServer} from 'node:http';
import worker from '../dist/server/index.js';
const server=createServer(async(req,res)=>{try{const request=new Request('http://'+req.headers.host+req.url,{method:req.method,headers:req.headers});const response=await worker.fetch(request,{}, {waitUntil:p=>p.catch(()=>{})});res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch(error){console.error(error);res.writeHead(500);res.end('Preview error');}});
server.listen(Number(process.env.PORT||4173),'0.0.0.0',()=>console.log('Preview ready'));
