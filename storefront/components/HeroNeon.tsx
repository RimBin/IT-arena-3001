export default function HeroNeon() {
  return (
    <section className="relative overflow-hidden rounded-2xl border-gradient p-6 md:p-10 mb-8">
      <div className="spiral-bg" aria-hidden />
      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="heading-black text-4xl md:text-6xl mb-3">
            Kuriame <span className="text-gradient">Ateities</span> Svetaines
          </h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="heading-xb text-2xl md:text-3xl">Modernios</span>
            <span className="outline-accent text-3xl md:text-5xl">Greitos</span>
            <span className="heading-xb text-2xl md:text-3xl">Efektyvios</span>
          </div>
          <p className="text-sm md:text-base max-w-xl opacity-90" style={{ letterSpacing: "0.5px" }}>
            IT Arena – jūsų partneris kuriant šiuolaikiškus, efektyvius ir vizualiai įspūdingus sprendimus. 
            Next.js, React, WordPress – panaudojame geriausias technologijas jūsų verslui.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#services" className="glow inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold" style={{ background: "var(--gradient-main)" }}>Mūsų paslaugos</a>
            <a href="/lt/about" className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold border-gradient">Apie mus</a>
          </div>
        </div>
        {/* Right neon animation */}
        <div className="relative h-[260px] md:h-[360px]">
          <div className="ring slow" style={{ width: 280, height: 280, top: 10, left: 10 }} />
          <div className="ring slower" style={{ width: 220, height: 220, top: 40, left: 40 }} />
          <div className="ring fast" style={{ width: 160, height: 160, top: 70, left: 70 }} />
          <div className="neon-orb" style={{ top: 30, left: 180, animationDelay: "-1s" }} />
          <div className="neon-orb" style={{ top: 180, left: 60, animationDelay: "-2s" }} />
          <div className="neon-orb" style={{ top: 120, left: 200, animationDelay: "-3s" }} />
        </div>
      </div>
    </section>
  );
}
