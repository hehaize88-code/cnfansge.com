import { products } from "../../../catalog-data";
import { RoutePage } from "../../../route-page";
import { pageMetadata } from "../../../seo";
export const dynamicParams = false;
export function generateStaticParams() { return products.map(({slug}) => ({slug})); }
type Props = { params: Promise<{slug:string}> };
export async function generateMetadata({ params }: Props) { const {slug} = await params; return pageMetadata("en",["products",slug]); }
export default async function Page({ params }: Props) { const {slug} = await params; return <RoutePage lang="en" path={["products",slug]} />; }
