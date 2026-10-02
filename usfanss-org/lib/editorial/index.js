import en from './new-en.json';
import de from './new-de.json';
import es from './new-es.json';
import fr from './new-fr.json';
import it from './new-it.json';
const articles={en,de,es,fr,it};
export const editorialBlueprints=en.map(article=>({
 slug:article.slug,
 title:Object.fromEntries(Object.entries(articles).map(([lang,items])=>[lang,items.find(x=>x.slug===article.slug).title])),
 dek:Object.fromEntries(Object.entries(articles).map(([lang,items])=>[lang,items.find(x=>x.slug===article.slug).dek])),
}));
export function getEditorialArticle(slug,language){
 const article=articles[language]?.find(x=>x.slug===slug);
 return article?{...article,datePublished:'2026-10-02',dateModified:'2026-10-02'}:null;
}
