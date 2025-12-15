"use client";
import { useMemo, useState } from "react";

const metrics = [
  { label: "Conversion", value: "+38%", description: "UX optimizacija per 6 savaites" },
  { label: "Load Time", value: "0.9s", description: "Core Web Vitals < 1s" },
  { label: "Bounce Rate", value: "-27%", description: "Personalizuotos patirtys" },
  { label: "ROI", value: "x5", description: "AI asistuotas lead scoring" },
];

export default function HeroStrategic() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const gradientStyle = useMemo(() => {
    const index = hovered ?? activeMetric;
    const palette = [
      "linear-gradient(135deg, rgba(230,77,145,0.85), rgba(110,203,245,0.75))",
      "linear-gradient(135deg, rgba(110,203,245,0.85), rgba(122,99,230,0.75))",
      "linear-gradient(135deg, rgba(122,99,230,0.85), rgba(230,77,145,0.75))",
      "linear-gradient(135deg, rgba(110,203,245,0.85), rgba(87,214,170,0.75))",
    ];
    return palette[index % palette.length];
  }, [activeMetric, hovered]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-40" style={{ background: gradientStyle }} />
        <div className="absolute inset-0" style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.2em] uppercase text-[rgba(234,234,251,0.7)]">
              <span className="w-2 h-2 rounded-full bg-[rgba(230,77,145,0.8)] animate-pulse" />
              IT arena strategic hub
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-xl">
              <span className="text-gradient">Duomenimis pagrįstos</span> skaitmeninės patirtys,
              
              <span className="block mt-2 text-[rgba(234,234,251,0.88)] font-light">kurios generuoja augimą.</span>
            </h1>
            <p className="text-base md:text-lg text-[rgba(234,234,251,0.7)] max-w-2xl">
              Integruojame AI analizę, UX tyrimus ir konversijų optimizavimą į vientisą delivery procesą. 
              Kiekvienas pikselis turi KPI, kiekviena sąsaja – aiškius verslo tikslus.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 md:px-8 py-3.5 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold shadow-lg shadow-[rgba(110,203,245,0.25)] transition-transform duration-300 hover:-translate-y-1"
                style={{ background: gradientStyle }}>
                Rezervuoti strategijos sesiją
              </button>
              <button className="px-6 md:px-8 py-3.5 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold border border-white/15 text-[rgba(234,234,251,0.78)] hover:bg-white/10 transition-colors">
                Parsisiųsti metrikų ataskaitą
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-50" style={{ background: gradientStyle }} aria-hidden />
            <div className="relative bg-[rgba(11,17,36,0.78)] border border-white/8 rounded-3xl p-6 md:p-8 shadow-[0_35px_60px_-15px_rgba(13,21,45,0.6)] backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-left">
                {metrics.map((metric, index) => (
                  <button
                    key={metric.label}
                    onClick={() => setActiveMetric(index)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 p-5 text-left transition-all duration-400 ${
                      index === activeMetric ? "shadow-xl shadow-[rgba(110,203,245,0.15)]" : "hover:shadow-lg"
                    }`}
                    style={{
                      background:
                        index === activeMetric
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(11,17,36,0.6)",
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg, rgba(110,203,245,0.08), rgba(230,77,145,0.08))" }} />
                    <div className="relative">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-[rgba(234,234,251,0.5)] mb-2">{metric.label}</div>
                      <div className="text-3xl font-semibold text-[rgba(234,234,251,0.95)] mb-1">{metric.value}</div>
                      <div className="text-[13px] text-[rgba(234,234,251,0.65)] leading-relaxed">{metric.description}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[rgba(234,234,251,0.5)]">Strategic roadmap</div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/80">Live</span>
                </div>
                <div className="grid gap-2 text-sm text-[rgba(234,234,251,0.7)]">
                  <div className="flex items-center justify-between">
                    <span>Discovery & Research</span>
                    <span className="text-right opacity-80">Week 1–2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Experience Prototyping</span>
                    <span className="text-right opacity-80">Week 3–4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data-layer Integration</span>
                    <span className="text-right opacity-80">Week 5–6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Measurement & Iteration</span>
                    <span className="text-right opacity-80">Continuous</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-[rgba(234,234,251,0.5)]">
                <div className="w-2 h-2 rounded-full bg-[rgba(87,214,170,0.9)] animate-pulse" />
                <span>Realtime analytics srautas sinchronizuotas su GA4 ir Looker Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
