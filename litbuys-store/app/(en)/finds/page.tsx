import { RoutePage } from "../../route-page";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata("en", ["finds"]);
export default function Page() { return <RoutePage lang="en" path={["finds"]} />; }
