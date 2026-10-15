import en from './new-en.json';
import de from './new-de.json';
import es from './new-es.json';
import fr from './new-fr.json';
import it from './new-it.json';
import freshEn from './oct15-en.json';
import freshDe from './oct15-de.json';
import freshEs from './oct15-es.json';
import freshFr from './oct15-fr.json';
import freshIt from './oct15-it.json';
const articles={en:[...freshEn,...en],de:[...freshDe,...de],es:[...freshEs,...es],fr:[...freshFr,...fr],it:[...freshIt,...it]};
export const editorialBlueprints=articles.en.map(article=>({
 slug:article.slug,
 title:Object.fromEntries(Object.entries(articles).map(([lang,items])=>[lang,items.find(x=>x.slug===article.slug).title])),
 dek:Object.fromEntries(Object.entries(articles).map(([lang,items])=>[lang,items.find(x=>x.slug===article.slug).dek])),
}));
export function getEditorialArticle(slug,language){
 const article=articles[language]?.find(x=>x.slug===slug);
 return article?{...article,datePublished:article.datePublished || '2026-10-02',dateModified:article.dateModified || '2026-10-02'}:null;
}
