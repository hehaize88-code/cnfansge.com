import {readFile,writeFile} from 'node:fs/promises';
const langs=['en','de','es','fr','it'],data=Object.fromEntries(langs.map(l=>[l,[]]));
for(const file of ['discovery','beginner','links','qc','shipping']){const part=JSON.parse(await readFile(`src/data/editorial/${file}.json`));for(const l of langs)data[l].push(...part[l]);}
for(const l of langs){if(data[l].length!==10||new Set(data[l].map(a=>a.slug)).size!==10)throw new Error(`Invalid articles: ${l}`);}
await writeFile('src/data/articles.json',JSON.stringify(data));
