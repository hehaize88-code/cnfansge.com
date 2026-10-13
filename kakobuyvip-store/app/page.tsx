import { KakobuyHome } from "@/components/KakobuyHome";

import { homeMetadata } from "@/components/seo-data";
export const metadata = homeMetadata("en");

export default function Home() {
  return <KakobuyHome initialLang="en" />;
}
