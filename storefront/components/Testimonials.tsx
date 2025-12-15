export default function Testimonials() {
  const items = [
    { q: "IT Arena sukūrė mums modernią svetainę per 2 savaites. Puikus rezultatas!", a: "Justas, Baltic Trade" },
    { q: "Profesionalus darbas, greitas atsiliepimas ir puiki kokybė.", a: "Rūta, Studio Creative" },
    { q: "Svetainė veikia žaibiškai, SEO optimizacija tikrai veikia – turime 3x daugiau klientų.", a: "Tomas, Tech Solutions" },
  ];
  return (
    <section aria-label="testimonials" className="py-10">
      <h2 className="heading-black text-2xl mb-6">Ką sako klientai</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <div key={i} className={`rounded-xl border-gradient p-6 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon ${i % 2 ? 'tilt-r' : 'tilt-l'}`}>
            <blockquote className="text-sm opacity-90">“{t.q}”</blockquote>
            <div className="mt-3 text-xs opacity-70">— {t.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
