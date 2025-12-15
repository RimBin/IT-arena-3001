export type StoreProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  images?: { id: number; src: string; alt?: string }[];
  prices?: { price: string; currency_code: string };
};

const base = process.env.NEXT_PUBLIC_WP_URL?.replace(/\/$/, "") || "";
const enableDemo = process.env.NEXT_PUBLIC_DEMO === "1";

export async function fetchProducts(page = 1, perPage = 12): Promise<StoreProduct[]> {
  if (!base) {
    if (enableDemo) {
      const { demoProducts } = await import("./demo");
      return demoProducts();
    }
    throw new Error("NEXT_PUBLIC_WP_URL is not set");
  }
  const url = `${base}/wp-json/wc/store/products?per_page=${perPage}&page=${page}`;
  let res: Response;
  try {
    res = await fetch(url, { next: { revalidate: 60 } });
  } catch (e: any) {
    if (enableDemo) {
      const { demoProducts } = await import("./demo");
      return demoProducts();
    }
    throw new Error(`Network error fetching ${url}: ${e?.message || e}`);
  }
  if (!res.ok) {
    let body = "";
    try { body = await res.text(); } catch {}
    if (enableDemo) {
      const { demoProducts } = await import("./demo");
      return demoProducts();
    }
    throw new Error(`Failed to fetch ${url}: status ${res.status}. Body: ${body?.slice(0, 300)}`);
  }
  return res.json();
}
