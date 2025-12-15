import ProductCard from "@/components/ProductCard";
import type { StoreProduct } from "@/lib/store";

export default function ProductsSlider({ products }: { products: StoreProduct[] }) {
  // Duplicate items to ensure seamless looping
  const items = [...products, ...products];
  return (
    <section className="full-bleed marquee" aria-label="Products slider">
      <div className="marquee__track">
        <div className="marquee__inner">
          {items.map((p, i) => (
            <div className="marquee__item" key={`${p.id}-${i}`}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
        {/* second copy for smooth scroll if needed */}
        <div className="marquee__inner" aria-hidden>
          {items.map((p, i) => (
            <div className="marquee__item" key={`dup-${p.id}-${i}`}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
