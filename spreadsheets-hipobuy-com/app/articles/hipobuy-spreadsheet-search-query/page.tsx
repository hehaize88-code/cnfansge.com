import JsonLd from "../../components/JsonLd";
import { absoluteUrl, breadcrumbSchema, pageMetadata, SITE_URL } from "../../seo";
import QueryArticle from "./QueryArticle";

export const metadata = pageMetadata({
  title:"HipoBuy Spreadsheet Search: Build Better Product Queries",
  description:"Build a reproducible HipoBuy spreadsheet search query using product category, visible attributes, identifiers and one-change-at-a-time diagnosis.",
  path:"/articles/hipobuy-spreadsheet-search-query/",
  type:"article",
});

export default function Page(){const schema=[breadcrumbSchema("HipoBuy Spreadsheet Search Query","/articles/hipobuy-spreadsheet-search-query/"),{"@context":"https://schema.org","@type":"Article",headline:"HipoBuy Spreadsheet Search: Build Better Product Queries",description:"A reproducible query-building and result-diagnosis method for HipoBuy spreadsheet users.",datePublished:"2026-08-31",dateModified:"2026-09-14",inLanguage:["en","de","fr","es","it"],mainEntityOfPage:absoluteUrl("/articles/hipobuy-spreadsheet-search-query/"),author:{"@type":"Organization",name:"HipoBuy Spreadsheet",url:SITE_URL},publisher:{"@type":"Organization",name:"HipoBuy Spreadsheet",url:SITE_URL,logo:{"@type":"ImageObject",url:absoluteUrl("/hipobuy-logo.png")}}}];return <><JsonLd data={schema}/><QueryArticle/></>}
