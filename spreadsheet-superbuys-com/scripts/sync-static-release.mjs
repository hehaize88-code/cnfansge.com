import fs from 'node:fs';
import path from 'node:path';
// The production project serves the repository's checked-in static directory.
// Update only paths belonging to this site's previous or new static export.
const root=process.cwd();
if(path.basename(root)!=='spreadsheet-superbuys-com')throw new Error('Run from this site directory');
const manifest='static-release-files.json';
const previous=fs.existsSync(manifest)?JSON.parse(fs.readFileSync(manifest,'utf8')):[];
const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,entry.name);if(entry.isDirectory())walk(f);else files.push(path.relative('out',f));}}
walk('out');
for(const f of previous){if(!files.includes(f)&&!f.startsWith('../')&&fs.existsSync(f))fs.unlinkSync(f);}
for(const f of files){fs.mkdirSync(path.dirname(f),{recursive:true});fs.copyFileSync(path.join('out',f),f);}
fs.writeFileSync(manifest,JSON.stringify(files.sort(),null,2)+'\n');
console.log(`Synced ${files.length} static release files`);
