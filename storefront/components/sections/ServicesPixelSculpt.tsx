"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Rocket, Sparkles, Zap, Globe } from "lucide-react";

const ServicesPixelSculpt: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: "Tinklapių kūrimas",
      description: "Kuriame pažangias svetaines ir žiniatinklio programas su šiuolaikinėmis technologijomis",
      gradient: "from-purple-500 to-pink-500",
      badge: "Populiariausia",
    },
    {
      icon: Palette,
      title: "UI/UX dizainas",
      description: "Patrauklios, intuityvios sąsajos, kurios lankytojus paverčia klientais",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Tendencija",
    },
    {
      icon: Rocket,
      title: "Skaitmeninė rinkodara",
      description: "Strateginės kampanijos, kurios skatina augimą ir didina matomumą internete",
      gradient: "from-orange-500 to-amber-500",
      badge: "Didelė grąža",
    },
    {
      icon: Zap,
      title: "Našumo optimizavimas",
      description: "Žaibiški įkėlimo laikai ir sklandi vartotojų patirtis",
      gradient: "from-emerald-500 to-green-500",
      badge: "Būtina",
    },
    {
      icon: Globe,
      title: "SEO ir analizė",
      description: "Duomenimis paremtos strategijos matomumui gerinti ir rezultatams sekti",
      gradient: "from-violet-500 to-purple-500",
      badge: "Augimas",
    },
    {
      icon: Sparkles,
      title: "Prekės ženklo kūrimas",
      description: "Įsimintini identitetai, kurie išsiskiria rinkoje",
      gradient: "from-pink-500 to-rose-500",
      badge: "Kūrybiška",
    },
  ];

  // Asymmetric layout map for large screens (12-col grid)
  const layout: { col: string; heroH: string }[] = [
    { col: "lg:col-span-7", heroH: "h-36 lg:h-48" },
    { col: "lg:col-span-5", heroH: "h-28 lg:h-36" },
    { col: "lg:col-span-4", heroH: "h-32 lg:h-40" },
    { col: "lg:col-span-8", heroH: "h-40 lg:h-56" },
    { col: "lg:col-span-5", heroH: "h-28 lg:h-32" },
    { col: "lg:col-span-7", heroH: "h-32 lg:h-44" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8F9FB] px-6 py-24 sm:px-12 lg:px-16">
      {/* Floating orbs background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-72 w-72 animate-float-slow rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute right-[10%] top-[40%] h-96 w-96 animate-float-medium rounded-full bg-blue-200/15 blur-3xl" />
        <div className="absolute left-[50%] bottom-[20%] h-64 w-64 animate-float-fast rounded-full bg-pink-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(139,92,246,0.12)]">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-700">Mūsų paslaugos</span>
          </div>
          
          <h2 className="mb-4 text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-0.03em] text-slate-900">
            Viskas, ko reikia
          </h2>
          <h3 className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#E879F9] bg-clip-text text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-[-0.03em] text-transparent">
            sėkmei internete
          </h3>
        </div>

        {/* Services grid (asymmetric on lg) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const span = layout[index]?.col ?? "lg:col-span-4";
            const heroH = layout[index]?.heroH ?? "h-32 lg:h-40";
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[28px] border border-black/5 bg-[#111215] shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] ${span}`}
              >
                {/* Top plasma background */}
                <div className={`relative overflow-hidden ${heroH}`}>
                  <div
                    className={`absolute inset-0 opacity-90 blur-md transition-transform duration-700 group-hover:scale-105 group-hover:rotate-[1.5deg] bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,90,90,0.85),transparent_55%),radial-gradient(50%_50%_at_75%_30%,rgba(255,154,26,0.9),transparent_50%),radial-gradient(40%_40%_at_60%_70%,rgba(255,255,255,0.35),transparent_60%)]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40" />
                  {/* Top-right small caption */}
                  <div className="absolute right-3 top-3 text-right text-[11px] font-semibold tracking-wide text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                    IT Arena
                    <div className="font-medium text-white/80">Service Card</div>
                  </div>
                </div>

                {/* Dark body */}
                <div className="relative bg-[#111215] p-5 pt-0">
                  {/* Notch label (tab) */}
                  <div className="relative -mt-6 inline-flex max-w-[90%] items-center rounded-2xl bg-[#1a1c20] px-4 py-3 text-white shadow-inner shadow-black/40 ring-1 ring-white/5">
                    {/* decorative concave illusion */}
                    <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#111215]" />
                    <div className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
                      <Icon className={`h-4 w-4 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text', backgroundClip:'text'}} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">{service.title}</div>
                      <div className="text-[12px] leading-tight text-white/60">{service.description}</div>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-10 flex items-end justify-between">
                    <div className="flex items-baseline gap-2">
                      <div className="text-4xl font-black leading-none text-white">{String(index + 1).padStart(2, "0")}</div>
                      <div className="pb-1 text-xs uppercase tracking-wider text-white/60">Pasl.</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white/90">Plačiau</div>
                      <div className="text-xs text-white/60">Daugiau informacijos →</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto inline-flex flex-col items-center gap-6 rounded-3xl border border-purple-200/60 bg-gradient-to-br from-purple-50/80 to-pink-50/60 p-10 shadow-[0_16px_48px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:flex-row sm:justify-between sm:gap-8">
            <div className="text-left">
              <h4 className="mb-2 text-2xl font-bold text-slate-900">Pasiruošę pradėti savo projektą?</h4>
              <p className="text-sm text-slate-600">Sukurkime kažką išskirtinio kartu</p>
            </div>
            <Button size="lg" className="inline-flex items-center gap-3">
              <span>Pradėkime</span>
              <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPixelSculpt;
