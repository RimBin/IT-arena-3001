"use client";
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import type { StoreProduct } from "@/lib/store";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number; // in major units
  currency: string;
  image?: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  add: (p: StoreProduct, qty?: number) => void;
  remove: (id: number) => void;
  update: (id: number, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const Ctx = createContext<CartState | null>(null);

function toItem(p: StoreProduct, qty = 1): CartItem {
  const priceCents = Number(p.prices?.price || 0);
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: Math.round(priceCents) / 100,
    currency: p.prices?.currency_code || "EUR",
    image: p.images?.[0]?.src,
    qty,
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add = useCallback((p: StoreProduct, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === p.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, toItem(p, qty)];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: number) => setItems((prev) => prev.filter((i) => i.id !== id)), []);

  const update = useCallback(
    (id: number, qty: number) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i))),
    []
  );

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);
  const toggleCart = useCallback(() => setOpen((prev) => !prev), []);

  const api = useMemo<CartState>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = Number(items.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2));
    return { items, add, remove, update, clear, count, total, isOpen: open, openCart, closeCart, toggleCart };
  }, [items, add, remove, update, clear, open, openCart, closeCart, toggleCart]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
