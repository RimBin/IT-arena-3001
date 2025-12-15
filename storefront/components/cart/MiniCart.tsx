"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";

export default function MiniCart() {
  const { items, total, isOpen, closeCart, update, remove } = useCart();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || "lt";

  if (!isOpen) return null;

  const currency = items[0]?.currency || "EUR";
  const currencyLabel = currency === "EUR" ? " €" : ` ${currency}`;

  return (
    <div className="mini-cart-backdrop" onClick={closeCart}>
      <div className="mini-cart-panel" onClick={(e) => e.stopPropagation()}>
  <button type="button" className="mini-cart-close" onClick={closeCart} aria-label="Close mini cart">×</button>
        <h2 className="mini-cart-title">Jūsų užsakymas</h2>
        {items.length === 0 ? (
          <div className="mini-cart-empty">Krepšelis tuščias.</div>
        ) : (
          <>
            <div className="mini-cart-table">
              <div className="mini-cart-row mini-cart-head">
                <span>Produktas</span>
                <span>Suma</span>
              </div>
              {items.map((item) => (
                <div key={item.id} className="mini-cart-row">
                  <div>
                    <div className="mini-cart-product-name">{item.name}</div>
                    <div className="mini-cart-meta">
                      <button type="button" onClick={() => update(item.id, Math.max(1, item.qty - 1))} aria-label="Decrease quantity">−</button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => update(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                      <button type="button" className="mini-cart-remove" onClick={() => remove(item.id)}>Pašalinti</button>
                    </div>
                  </div>
                  <span>{(item.price * item.qty).toFixed(2)}{currencyLabel}</span>
                </div>
              ))}
            </div>
            <div className="mini-cart-summary">
              <div className="mini-cart-row">
                <span>Suma</span>
                <span>{total.toFixed(2)}{currencyLabel}</span>
              </div>
              <div className="mini-cart-row">
                <strong>Viso</strong>
                <strong>{total.toFixed(2)}{currencyLabel}</strong>
              </div>
            </div>
            <Link href={`/${locale}/checkout`} className="mini-cart-cta" onClick={closeCart}>
              Tęsti atsiskaitymą
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
