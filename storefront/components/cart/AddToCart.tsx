"use client";
import { useCart } from "@/components/cart/CartProvider";
import type { StoreProduct } from "@/lib/store";

export default function AddToCart({ product }: { product: StoreProduct }) {
  const { add } = useCart();
  const price = product.prices?.price ? (Number(product.prices.price) / 100).toFixed(2) : "";
  const currency = product.prices?.currency_code || "EUR";
  return (
    <div className="flex items-center gap-3">
      {price && <div className="text-sm opacity-85">{price} {currency}</div>}
      <button className="px-4 py-2 rounded-lg border-gradient shadow-neon" onClick={() => add(product, 1)}>
        Add to cart
      </button>
    </div>
  );
}
