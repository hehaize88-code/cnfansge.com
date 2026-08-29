import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../catalog-data";
import { ProductDetailPage } from "../../site";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.price} | LitBuys Store`,
    description: `View the matched image, source record ${product.id}, CNY source price and USD reference for ${product.name}.`,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!products.some((product) => product.slug === slug)) notFound();
  return <ProductDetailPage slug={slug} />;
}
