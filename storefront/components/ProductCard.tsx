import Image from "next/image";
import Link from "next/link";
import type { StoreProduct } from "@/lib/store";

export default function ProductCard({ p }: { p: StoreProduct }) {
  const img = p.images?.[0]?.src;
  const price = p.prices?.price ? (Number(p.prices.price) / 100).toFixed(2) : "";
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
    >
      <div className="relative w-full h-[180px] bg-gray-50">
        {img && (
          <Image src={img} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium line-clamp-2">{p.name}</h3>
        {price && <div className="text-sm font-semibold mt-1">{price} {p.prices?.currency_code}</div>}
      </div>
    </Link>
  );
}
