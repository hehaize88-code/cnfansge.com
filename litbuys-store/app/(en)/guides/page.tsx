import { RoutePage } from "../../route-page";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata("en", ["guides"]);
export default function Page() { return <RoutePage lang="en" path={["guides"]} />; }
