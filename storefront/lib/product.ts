import { demoProducts } from "./demo";
import type { StoreProduct } from "./store";

const base = process.env.NEXT_PUBLIC_WP_URL?.replace(/\/$/, "") || "";
const enableDemo = process.env.NEXT_PUBLIC_DEMO === "1";

export async function fetchProductBySlug(slug: string): Promise<StoreProduct | null> {
  if (!base && enableDemo) {
    return demoProducts().find((p) => p.slug === slug) || null;
  }
  if (!base) return null;
  const url = `${base}/wp-json/wc/store/products?slug=${encodeURIComponent(slug)}`;
  const res = await fetch(url, { next: { revalidate: 120 } });
  if (!res.ok) return null;
  const arr = (await res.json()) as StoreProduct[];
  return arr?.[0] || null;
}
