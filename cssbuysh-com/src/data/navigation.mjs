// Only useful, curated catalog categories receive independent indexable routes.
export const indexedCategories=['shoes','hoodies-sweaters'];
export const categoryRoute=category=>indexedCategories.includes(category)?`spreadsheet/${category}/`:category==='all'?'spreadsheet/':`spreadsheet/?category=${encodeURIComponent(category)}`;
const groups={
 'cssbuy-spreadsheet-guide':['cssbuy-shoes-spreadsheet','cssbuy-hoodie-spreadsheet','how-to-buy-weidian-cssbuy'],
 'how-to-buy-weidian-cssbuy':['cssbuy-taobao-1688-links','cssbuy-payment-fees','cssbuy-qc-photos-guide'],
 'cssbuy-qc-photos-guide':['cssbuy-returns-refunds','cssbuy-size-guide','cssbuy-warehouse-consolidation'],
 'cssbuy-shipping-cost':['cssbuy-shipping-to-usa','cssbuy-payment-fees','cssbuy-warehouse-consolidation'],
 'cssbuy-shipping-time':['cssbuy-shipping-to-usa','cssbuy-shipping-cost','cssbuy-warehouse-consolidation'],
 'cssbuy-warehouse-consolidation':['cssbuy-qc-photos-guide','cssbuy-shipping-cost','cssbuy-shipping-time'],
 'cssbuy-returns-refunds':['cssbuy-qc-photos-guide','cssbuy-size-guide','cssbuy-payment-fees'],
 'cssbuy-payment-fees':['cssbuy-shipping-cost','cssbuy-warehouse-consolidation','cssbuy-returns-refunds'],
 'cssbuy-taobao-1688-links':['how-to-buy-weidian-cssbuy','cssbuy-spreadsheet-guide','cssbuy-payment-fees'],
 'cssbuy-size-guide':['cssbuy-shoes-spreadsheet','cssbuy-hoodie-spreadsheet','cssbuy-qc-photos-guide'],
 'cssbuy-shipping-to-usa':['cssbuy-shipping-cost','cssbuy-shipping-time','cssbuy-warehouse-consolidation'],
 'cssbuy-shoes-spreadsheet':['cssbuy-size-guide','cssbuy-qc-photos-guide','cssbuy-shipping-cost'],
 'cssbuy-hoodie-spreadsheet':['cssbuy-size-guide','cssbuy-qc-photos-guide','cssbuy-shipping-cost']
};
export const relatedArticles=(articles,slug)=>(groups[slug]||[]).map(s=>articles.find(a=>a.slug===s)).filter(Boolean);
export const readingMinutes=article=>Math.max(1,Math.ceil([article.intro,...article.sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.bullets||[])]),...article.takeaways].join(' ').split(/\s+/).length/220));
