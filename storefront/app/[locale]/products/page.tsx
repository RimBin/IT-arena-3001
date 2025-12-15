import { fetchProducts } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import ProductsFilter from "@/components/products/ProductsFilter";

export const revalidate = 60;

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ page?: string; q?: string; cat?: string }> }) {
  const sp = await searchParams;
  const page = Number(sp?.page || 1);
  const q = sp?.q?.toLowerCase()?.trim();
  const cat = sp?.cat?.toLowerCase()?.trim();
  let products = await fetchProducts(page, 12);
  if (q) products = products.filter((p) => p.name.toLowerCase().includes(q));
  if (cat) products = products.filter((p) => p.slug.includes(cat));
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>
      <ProductsFilter />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
      {/* Pagination placeholder */}
      <div className="mt-6 text-sm text-gray-600">Page {page}</div>
    </div>
  );
}
