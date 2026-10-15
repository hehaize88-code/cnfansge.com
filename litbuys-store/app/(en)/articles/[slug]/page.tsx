import { articleSlugs } from "../../../articles";
import { RoutePage } from "../../../route-page";
import { pageMetadata } from "../../../seo";
export const dynamicParams = false;
export function generateStaticParams() { return articleSlugs.map((slug) => ({slug})); }
type Props = { params: Promise<{slug:string}> };
export async function generateMetadata({ params }: Props) { const {slug} = await params; return pageMetadata("en",["articles",slug]); }
export default async function Page({ params }: Props) { const {slug} = await params; return <RoutePage lang="en" path={["articles",slug]} />; }
