export default function FeaturesStrip() {
  const items = [
    { title: "Next.js & React", desc: "Modernios technologijos greičiui", icon: "⚡" },
    { title: "SEO Optimizacija", desc: "Matomi paieškos sistemose", icon: "�" },
    { title: "Mobilūs Sprendimai", desc: "Veikia bet kuriame įrenginyje", icon: "📱" },
    { title: "Palaikymas 24/7", desc: "Visada pasirengę padėti", icon: "�️" },
  ];
  return (
    <section aria-label="features" className="py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <div key={i} className={`rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>{it.icon}</div>
              <div>
                <div className="heading-black text-lg mb-1">{it.title}</div>
                <p className="text-sm opacity-85">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
