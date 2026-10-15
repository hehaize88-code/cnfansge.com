const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const assert = require('node:assert/strict');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText, filename);
const { articleSlugs, getArticle, addedSlugs } = require('../app/articles.ts');
const { localizedResearch } = require('../app/research.ts');
const { languages, localPath, languageAlternates } = require('../app/i18n.ts');
const improved = [...addedSlugs,'litbuy-spreadsheet-2026','litbuy-qc-photos-guide','litbuy-shipping-guide','litbuy-review-2026'];
const bodyWords = article => article.sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length;
const counts = {};
for (const slug of articleSlugs) {
  const english = getArticle(slug, 'en');
  counts[slug] = {};
  for (const lang of languages) {
    const article = getArticle(slug, lang);
    assert.ok(article.title && article.deck && article.readTime, `${lang}/${slug}: missing metadata`);
    assert.equal(article.sections.length, english.sections.length, `${lang}/${slug}: section count`);
    article.sections.forEach((section, i) => {
      assert.equal(section.paragraphs.length, english.sections[i].paragraphs.length, `${lang}/${slug}: paragraph count in ${i}`);
      assert.ok(section.heading && section.paragraphs.every(p => p.length > 40), `${lang}/${slug}: empty content`);
      if (lang !== 'en') for (const p of section.paragraphs) assert.ok(!english.sections.flatMap(s => s.paragraphs).includes(p), `${lang}/${slug}: English fallback`);
    });
    counts[slug][lang] = bodyWords(article);
  }
  if (improved.includes(slug)) assert.ok(counts[slug].en >= 1200 && counts[slug].en <= 1800, `${slug}: English length`);
}
for (const lang of languages) {
  assert.equal(Object.keys(localizedResearch[lang]).length, 7);
  for (const [key,page] of Object.entries(localizedResearch[lang])) {
    assert.equal(page.blocks.length, 3);
    assert.ok(page.blocks.every(block => block.paragraphs.length === 2 && block.paragraphs.every(Boolean)), `${lang}/${key}: research content`);
  }
  assert.equal(localPath(lang, '/fr/articles/test/'), `${lang === 'en' ? '' : '/'+lang}/articles/test/`);
}
assert.equal(Object.keys(languageAlternates('/articles/test')).length, 6);
console.log(JSON.stringify({ articleCount: articleSlugs.length, languageCount: languages.length, fullArticlePages: articleSlugs.length * languages.length, bodyWords: counts }, null, 2));
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(Object.fromEntries(articleSlugs.map(slug => [slug,Object.fromEntries(languages.map(lang => [lang,getArticle(slug,lang)]))]))));
