import PageHero from "../components/PageHero";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Hipobuy Spreadsheet Search | Filter Checked Product Rows",
  description: "Filter checked Hipobuy spreadsheet rows, open exact product pages and separate discovery from listing and QC verification.",
  path: "/spreadsheet/",
});
import ProductExplorer from "../components/ProductExplorer";

export default function SpreadsheetPage() {
  return <><PageHero eyebrow="PRODUCT INDEX / UPDATED" title="A spreadsheet you can actually inspect." copy="Filter checked rows, open the exact product page and keep discovery separate from your final quality decision." /><ProductExplorer /><section className="wrap infoGrid"><article><span>01</span><h2>What “checked” means</h2><p>The destination page loaded when reviewed. It does not mean stock, price, seller quality or product condition is guaranteed.</p></article><article><span>02</span><h2>What to verify next</h2><p>Read every option label, compare measurements and wait for warehouse photos before approving the item.</p></article><article><span>03</span><h2>Why USD is a reference</h2><p>The displayed value is converted from the observed source price. Exchange rates, services and shipping are separate.</p></article></section></>;
}
