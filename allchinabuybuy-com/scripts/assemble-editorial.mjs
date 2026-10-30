import {readFile,writeFile} from 'node:fs/promises';
const langs=['en','de','es','fr','it'],data=Object.fromEntries(langs.map(l=>[l,[]]));
for(const file of ['discovery','beginner','links','qc','shipping','growth-shoes','growth-fees','growth-tracking']){const part=JSON.parse(await readFile(`src/data/editorial/${file}.json`));for(const l of langs)data[l].push(...part[l]);}
const updates=JSON.parse(await readFile('src/data/editorial/growth-updates.json'));
for(const l of langs)for(const article of data[l]){
  const patch=updates[l]?.[article.slug];
  if(patch){article.title=patch.title;article.description=patch.description;article.sections=[patch.opening,...article.sections.slice(1),...(patch.appendSections||[])];article.dateModified=patch.dateModified;}
}
for(const l of langs){if(data[l].length!==13||new Set(data[l].map(a=>a.slug)).size!==13)throw new Error(`Invalid articles: ${l}`);}
await writeFile('src/data/articles.json',JSON.stringify(data));
