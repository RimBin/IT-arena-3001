export default function CtaBanner() {
  return (
    <section aria-label="cta" className="full-bleed py-10">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border-gradient p-8 md:p-10 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon relative overflow-hidden">
          <div className="ring slower" style={{ width: 320, height: 320, top: -40, left: -40 }} />
          <div className="ring slow" style={{ width: 220, height: 220, bottom: -30, right: -30 }} />
          <h2 className="heading-black text-3xl mb-2">Ready to glow?</h2>
          <p className="opacity-85 max-w-xl mb-5">Bring the neon-grade experience to your brand. Let’s craft something unforgettable.</p>
          <a href="/contact" className="inline-block px-5 py-3 rounded-lg border-gradient shadow-neon">
            <span className="text-gradient font-semibold">Start a project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
