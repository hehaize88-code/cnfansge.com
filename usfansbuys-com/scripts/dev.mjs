import http from 'node:http';
import worker from '../dist/server/index.js';
const portIndex=process.argv.indexOf('--port');
const port=Number(portIndex>=0?process.argv[portIndex+1]:(process.env.PORT||3000));
http.createServer(async(req,res)=>{try{if(req.url.startsWith('/__qa/mobile')){res.writeHead(200,{'Content-Type':'text/html'});res.end('<!doctype html><html><body style="margin:0;background:#ddd"><iframe title="Mobile preview" src="/" style="width:390px;height:844px;border:0;background:white"></iframe></body></html>');return;}const request=new Request(`http://${req.headers.host}${req.url}`,{method:req.method,headers:req.headers});const response=await worker.fetch(request,{},{});res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch(e){res.writeHead(500);res.end('Preview server error');console.error(e.message);}}).listen(port,'0.0.0.0',()=>console.log('USFans preview listening on '+port));
