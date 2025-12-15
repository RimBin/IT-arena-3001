import Image from "next/image";
import { fetchProductBySlug } from "@/lib/product";
import AddToCart from "@/components/cart/AddToCart";

export const revalidate = 120;

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const p = await fetchProductBySlug(params.slug);
  if (!p) return <div>Product not found.</div>;
  const img = p.images?.[0]?.src;
  const price = p.prices?.price ? (Number(p.prices.price) / 100).toFixed(2) : "";
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative w-full h-[320px] bg-gray-50">
        {img && <Image src={img} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />}
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{p.name}</h1>
        {price && <div className="text-lg font-semibold mb-4">{price} {p.prices?.currency_code}</div>}
        <p className="text-sm text-gray-600 mb-4">This is a demo product page. Cart/checkout integrated in demo mode.</p>
        <AddToCart product={p} />
      </div>
    </div>
  );
}
