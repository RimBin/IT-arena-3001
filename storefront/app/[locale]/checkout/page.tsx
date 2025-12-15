"use client";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

export default function CheckoutPage() {
  const { total } = useCart();
  // In a real integration, we'd POST to Woo/Stripe/PayPal to create a checkout session.
  return (
    <div>
      <h1 className="heading-black text-2xl mb-4">Checkout</h1>
      <p className="opacity-85 mb-4">Demo checkout. Integruosim Stripe/PayPal/Paysera vėliau.</p>
      <div className="rounded-xl border-gradient p-6 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon">
        <div className="mb-3">Order total: <span className="text-gradient font-semibold">{total.toFixed(2)} EUR</span></div>
        <button className="px-5 py-3 rounded-lg border-gradient shadow-neon">Pay now (demo)</button>
      </div>
      <div className="mt-4 text-sm"><Link href="../cart" className="underline">Back to cart</Link></div>
    </div>
  );
}
