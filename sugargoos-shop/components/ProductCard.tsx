import { ArrowUpRight } from "lucide-react";
import { editorialUI } from "@/lib/editorial-ui";
import { Locale, Product, homeCopy, productLabels } from "@/lib/site-data";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const copy = homeCopy[locale];
  const label = productLabels[locale][product.id];
  return (
    <a className="product-card" data-product-id={product.id} href={product.href} target="_blank" rel="noopener noreferrer">
      <div className="product-image-wrap">
        <img src={product.image} alt={label.name} width="520" height="520" loading="lazy" />
        <span className="status-pill">{editorialUI[locale].reference}</span>
      </div>
      <div className="product-info"><p>{label.category} · #{product.id}</p><h3>{label.name}</h3><div><strong>{product.usd}</strong><span>{copy.open}<ArrowUpRight aria-hidden="true" /></span></div></div>
    </a>
  );
}
