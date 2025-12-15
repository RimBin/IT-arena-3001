export default function AboutNeon() {
  return (
    <section id="about" className="relative full-bleed py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Left: copy with asymmetric card */}
          <div className="tilt-l">
            <div className="rounded-2xl border-gradient p-6 md:p-8 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon">
              <h2 className="heading-black text-3xl md:text-4xl mb-3">
                About <span className="text-gradient">Us</span>
              </h2>
              <p className="opacity-90 leading-relaxed" style={{ letterSpacing: "0.5px" }}>
                We craft modern, neon-inspired digital experiences with a futuristic vibe. Our team blends design, tech and motion to deliver high-impact visuals for events, startups and brands.
              </p>
              <div className="mt-5 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-lg border-gradient p-3">
                  <div className="text-gradient font-semibold">10+ years</div>
                  <div className="opacity-80">in digital</div>
                </div>
                <div className="rounded-lg border-gradient p-3">
                  <div className="text-gradient font-semibold">50+ brands</div>
                  <div className="opacity-80">worked with</div>
                </div>
                <div className="rounded-lg border-gradient p-3">
                  <div className="text-gradient font-semibold">Global</div>
                  <div className="opacity-80">reach</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: asymmetric media panel */}
          <div className="relative tilt-r">
            <div className="rounded-2xl border-gradient h-[280px] md:h-[360px] overflow-hidden shadow-neon">
              <div className="spiral-bg" />
              <div className="relative w-full h-full">
                <div className="ring slow" style={{ width: 260, height: 260, top: 20, left: 30 }} />
                <div className="ring slower" style={{ width: 200, height: 200, top: 50, left: 60 }} />
                <div className="ring fast" style={{ width: 140, height: 140, top: 80, left: 90 }} />
                <div className="neon-orb" style={{ top: 40, left: 160, animationDelay: "-1.3s" }} />
                <div className="neon-orb" style={{ top: 180, left: 40, animationDelay: "-2.1s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
