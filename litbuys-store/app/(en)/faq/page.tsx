import { RoutePage } from "../../route-page";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata("en", ["faq"]);
export default function Page() { return <RoutePage lang="en" path={["faq"]} />; }
