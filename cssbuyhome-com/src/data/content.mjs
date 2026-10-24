import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {locales} from './config.mjs';
const extras=JSON.parse(readFileSync(resolve(process.cwd(),'src/data/ui-extra.json'),'utf8'));
const dataPath=(file)=>resolve(process.cwd(),'src/data',file);
export const publishedLocales=Object.keys(locales).filter(l=>existsSync(dataPath(`editorial-${l}.json`))&&existsSync(dataPath(`ui-${l}.json`)));
export function content(l='en'){return JSON.parse(readFileSync(dataPath(`editorial-${l}.json`),'utf8'));}
export function ui(l='en'){return {...JSON.parse(readFileSync(dataPath(`ui-${l}.json`),'utf8')),...extras[l]};}
