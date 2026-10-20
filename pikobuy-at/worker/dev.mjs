import { api } from './source.mjs';
export async function apiMiddleware(req,res,next){if(!req.url.startsWith('/api/'))return next();const response=await api(new Request('http://localhost'+req.url));res.statusCode=response.status;response.headers.forEach((v,k)=>res.setHeader(k,v));res.end(await response.text());}
