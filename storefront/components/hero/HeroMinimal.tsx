"use client";

import { Button } from "@/components/ui/button";

export default function HeroMinimal() {
  return (
    <section className="relative py-32 md:py-40">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Breathing animation dot */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-blue-600 rounded-full relative" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-light tracking-tight">
            <span className="font-normal text-slate-900">Svetainės,</span>
            <br />
            <span className="italic text-slate-500">kurios veikia</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Minimalistinis požiūris. Maksimalūs rezultatai. 
            <br />
            Tik tai, ko tikrai reikia.
          </p>

          {/* Single prominent CTA */}
          <div className="pt-8">
            <Button variant="cta" size="lg" className="gap-3">
              Susisiekime
              <span aria-hidden className="y-cta-icon">→</span>
            </Button>
          </div>

          {/* Minimal stats */}
          <div className="pt-16 flex justify-center gap-16 text-sm">
            <div>
              <div className="font-light text-slate-400 mb-1">Projektai</div>
              <div className="text-2xl font-light text-slate-900">50+</div>
            </div>
            <div className="w-px bg-slate-200" />
            <div>
              <div className="font-light text-slate-400 mb-1">Metai</div>
              <div className="text-2xl font-light text-slate-900">5+</div>
            </div>
            <div className="w-px bg-slate-200" />
            <div>
              <div className="font-light text-slate-400 mb-1">Technologijos</div>
              <div className="text-2xl font-light text-slate-900">Next.js</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
