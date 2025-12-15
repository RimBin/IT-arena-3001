"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export default function CartPage() {
  const { items, update, remove, clear, total } = useCart();
  return (
    <div>
      <h1 className="heading-black text-2xl mb-4">Your <span className="text-gradient">Cart</span></h1>
      {items.length === 0 ? (
        <div className="text-gray-400">Cart is empty. <Link href="../products" className="underline">Browse products</Link></div>
      ) : (
        <div className="grid gap-4">
          {items.map((i) => (
            <div key={i.id} className="rounded-xl border-gradient p-4 bg-[rgba(11,17,36,0.6)] backdrop-blur">
              <div className="flex items-center gap-4">
                {i.image && (
                  <div className="relative w-20 h-16 bg-gray-100 rounded overflow-hidden">
                    {/* next/image for external images could require config; fallback to img if needed */}
                    {/* @ts-ignore */}
                    <Image src={i.image} alt="" fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm opacity-80">{i.price.toFixed(2)} {i.currency}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border-gradient rounded" onClick={() => update(i.id, Math.max(1, i.qty - 1))}>-</button>
                  <span className="min-w-6 text-center">{i.qty}</span>
                  <button className="px-2 py-1 border-gradient rounded" onClick={() => update(i.id, i.qty + 1)}>+</button>
                </div>
                <button className="ml-3 underline" onClick={() => remove(i.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button className="underline opacity-80" onClick={clear}>Clear cart</button>
            <div className="heading-black text-xl">Total: <span className="text-gradient">{total.toFixed(2)}</span></div>
          </div>
          <Link href="../checkout" className="inline-block px-5 py-3 rounded-lg border-gradient shadow-neon self-end">Proceed to checkout</Link>
        </div>
      )}
    </div>
  );
}
