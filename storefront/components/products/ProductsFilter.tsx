"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function ProductsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const q = sp.get("q") || "";
  const cat = sp.get("cat") || "";

  function update(param: string, value: string) {
    const next = new URLSearchParams(sp.toString());
    if (value) next.set(param, value); else next.delete(param);
    next.delete("page");
    router.replace(`${pathname}?${next.toString()}`);
  }

  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-3">
      <Input placeholder="Search…" defaultValue={q} onChange={(e) => update("q", e.target.value)} />
      <Input placeholder="Category… (spruce/larch/accoya)" defaultValue={cat} onChange={(e) => update("cat", e.target.value)} />
    </div>
  );
}
