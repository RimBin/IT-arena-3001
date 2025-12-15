import type { StoreProduct } from "./store";

export function demoProducts(): StoreProduct[] {
  return [
    { id: 1, name: "Spruce Cladding", slug: "spruce-cladding", permalink: "/product/spruce-cladding", prices: { price: "1599", currency_code: "EUR" } },
    { id: 2, name: "Larch Decking", slug: "larch-decking", permalink: "/product/larch-decking", prices: { price: "2499", currency_code: "EUR" } },
    { id: 3, name: "Accoya Panels", slug: "accoya-panels", permalink: "/product/accoya-panels", prices: { price: "3299", currency_code: "EUR" } },
    { id: 4, name: "Thermo Pine", slug: "thermo-pine", permalink: "/product/thermo-pine", prices: { price: "1999", currency_code: "EUR" } },
    { id: 5, name: "Charred Wood Siding", slug: "charred-wood-siding", permalink: "/product/charred-wood-siding", prices: { price: "2899", currency_code: "EUR" } },
    { id: 6, name: "Outdoor Battens", slug: "outdoor-battens", permalink: "/product/outdoor-battens", prices: { price: "1299", currency_code: "EUR" } },
    { id: 7, name: "Facade Boards", slug: "facade-boards", permalink: "/product/facade-boards", prices: { price: "2199", currency_code: "EUR" } },
    { id: 8, name: "Cladding Screws", slug: "cladding-screws", permalink: "/product/cladding-screws", prices: { price: "599", currency_code: "EUR" } },
  ];
}
