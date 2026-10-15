import { RoutePage } from "../../route-page";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata("en", ["articles"]);
export default function Page() { return <RoutePage lang="en" path={["articles"]} />; }
