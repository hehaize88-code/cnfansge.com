import JsonLd from "../../components/JsonLd";
import { absoluteUrl, breadcrumbSchema, pageMetadata, SITE_URL } from "../../seo";
import QueryArticle from "./QueryArticle";

export const metadata = pageMetadata({
  title:"Hipobuy Spreadsheet Search Query: From Idea to Precise Terms",
  description:"Turn a product idea into a reproducible Hipobuy spreadsheet search query using category, attributes, identifiers and one-change-at-a-time diagnosis.",
  path:"/articles/hipobuy-spreadsheet-search-query/",
  type:"article",
});

export default function Page(){const schema=[breadcrumbSchema("Hipobuy Spreadsheet Search Query","/articles/hipobuy-spreadsheet-search-query/"),{"@context":"https://schema.org","@type":"Article",headline:"Turn a Product Idea Into a Precise Hipobuy Spreadsheet Search Query",description:"A reproducible query-building and result-diagnosis method for Hipobuy spreadsheet users.",datePublished:"2026-08-31",dateModified:"2026-08-31",inLanguage:["en","de","fr","es","it"],mainEntityOfPage:absoluteUrl("/articles/hipobuy-spreadsheet-search-query/"),author:{"@type":"Organization",name:"Hipobuy Spreadsheet",url:SITE_URL},publisher:{"@type":"Organization",name:"Hipobuy Spreadsheet",url:SITE_URL,logo:{"@type":"ImageObject",url:absoluteUrl("/hipobuy-logo.png")}}}];return <><JsonLd data={schema}/><QueryArticle/></>}
