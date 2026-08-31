import { LocalizedRoute, localizedMetadata, localizedStaticParams } from "@/app/localized-route";

export const generateStaticParams = localizedStaticParams;
export const generateMetadata = ({ params }: { params: Promise<{ segments?: string[] }> }) => localizedMetadata("de", params);
export default function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  return <LocalizedRoute lang="de" params={params} />;
}

