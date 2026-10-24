import {defineConfig} from 'astro/config';
export default defineConfig({site:process.env.SITE_ORIGIN||'https://allchinabuybuy.com',output:'static',outDir:'.astro-output',trailingSlash:'always'});
