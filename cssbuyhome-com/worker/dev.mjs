import {api} from './source.mjs';
export async function apiMiddleware(req,res,next){
 if(!req.url?.startsWith('/api/'))return next();
 const response=await api(new Request(new URL(req.url,'http://localhost')));
 res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));
}
