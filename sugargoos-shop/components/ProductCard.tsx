import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Locale, Product, homeCopy, productLabels } from "@/lib/site-data";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const copy = homeCopy[locale];
  const label = productLabels[locale][product.id];
  return (
    <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer">
      <div className="product-image-wrap">
        <img src={product.image} alt={label.name} width="520" height="520" loading="lazy" />
        <span className="status-pill"><CheckCircle2 aria-hidden="true" />{product.status === "route-checked" ? copy.routeChecked : copy.reference}</span>
      </div>
      <div className="product-info"><p>{label.category} · #{product.id}</p><h3>{label.name}</h3><div><strong>{product.usd}</strong><span>{copy.open}<ArrowUpRight aria-hidden="true" /></span></div></div>
    </a>
  );
}
