import { RoutePage } from "../../route-page";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata("en", ["shipping"]);
export default function Page() { return <RoutePage lang="en" path={["shipping"]} />; }
