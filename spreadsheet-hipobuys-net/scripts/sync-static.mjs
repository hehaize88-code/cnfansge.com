// Preserve the current Cloudflare output-directory arrangement: root and out
// contain the same exported assets. Only generated paths are synchronized.
import fs from 'node:fs';import path from 'node:path';
const generated=['404','_next','_not-found','articles','de','es','fr','it','faq','guides','qc','shipping','spreadsheet'];
for(const dir of generated){if(fs.existsSync(path.join('out',dir))){fs.rmSync(dir,{recursive:true,force:true});fs.cpSync(path.join('out',dir),dir,{recursive:true});}}
for(const item of fs.readdirSync('out',{withFileTypes:true})){if(item.isFile())fs.copyFileSync(path.join('out',item.name),item.name);}
for(const item of fs.readdirSync('.'))if(item.startsWith('__next.')&&item.endsWith('.txt')||item==='index.txt')fs.rmSync(item);
console.log('Synchronized versioned root static output from out.');
