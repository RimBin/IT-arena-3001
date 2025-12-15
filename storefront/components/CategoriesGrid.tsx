type Cat = { key: string; title: string; subtitle: string };

const cats: Cat[] = [
  { key: "web-dev", title: "Web Kūrimas", subtitle: "Svetainės nuo A iki Z" },
  { key: "ecommerce", title: "E-parduotuvės", subtitle: "WooCommerce & Shopify" },
  { key: "design", title: "UI/UX Dizainas", subtitle: "Intuityvios sąsajos" },
  { key: "support", title: "Palaikymas", subtitle: "Techninė priežiūra" },
];

export default function CategoriesGrid() {
  return (
    <section aria-label="services" id="services" className="py-8">
      <h2 className="heading-black text-2xl mb-4">
        Mūsų <span className="text-gradient">Paslaugos</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cats.map((c, i) => (
          <div key={c.key} className={`block rounded-xl border-gradient p-6 bg-[rgba(11,17,36,0.6)] backdrop-blur hover:shadow-neon transition ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
            <div className="text-sm opacity-80">{c.subtitle}</div>
            <div className="heading-black text-xl">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
