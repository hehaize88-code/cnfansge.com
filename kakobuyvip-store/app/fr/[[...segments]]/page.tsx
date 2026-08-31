import { LocalizedRoute, localizedMetadata, localizedStaticParams } from "@/app/localized-route";

export const generateStaticParams = localizedStaticParams;
export const generateMetadata = ({ params }: { params: Promise<{ segments?: string[] }> }) => localizedMetadata("fr", params);
export default function Page({ params }: { params: Promise<{ segments?: string[] }> }) {
  return <LocalizedRoute lang="fr" params={params} />;
}

