// Keep analytics parameters limited to paths and catalogue identifiers.
// Never forward search text, referral query strings or arbitrary external URLs.
export function classifyClick(source, destination, origin){
  const target=new URL(destination,origin),internal=target.origin===origin;
  const params={source_path:source,target_path:target.pathname};
  if(internal&&/\/(spreadsheet|finds)\/$/.test(target.pathname))return {name:source.includes('/articles/')?'article_catalog_click':'catalog_open',params};
  if(internal&&/\/product\/$/.test(target.pathname)){
    const id=target.searchParams.get('id');
    return {name:'product_open',params:{...params,...(/^\d+$/.test(id||'')?{product_id:id}:{})}};
  }
  if(internal&&/\/articles\/[^/]+\/$/.test(target.pathname))return {name:'related_guide_click',params};
  if(!internal&&['allchinabuy.com','www.allchinabuy.com'].includes(target.hostname)&&/\/product\/$/.test(source))return {name:'purchase_link_click',params:{source_path:source,target_host:target.hostname}};
  return null;
}
