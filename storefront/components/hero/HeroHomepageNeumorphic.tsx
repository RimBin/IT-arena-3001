"use client";
import React from "react";
import { Zap, Sparkles, Globe, ShoppingCart } from "lucide-react";

const HeroHomepageNeumorphic: React.FC = () => {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient-shift 4s ease infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-[#e8ecf4] px-6 py-12 sm:px-12 lg:px-16 lg:py-20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4fc] via-[#e8ecf4] to-[#dde3ef] opacity-60" />

        {/* Floating code elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Bracket pairs */}
          <div className="absolute left-[15%] top-[25%] text-4xl font-bold text-purple-300/30 animate-float">{'{ }'}</div>
          <div className="absolute right-[20%] top-[15%] text-5xl font-bold text-blue-300/25 animate-float" style={{ animationDelay: '1s' }}>{'</>'}</div>
          <div className="absolute left-[25%] bottom-[30%] text-3xl font-bold text-purple-200/35 animate-float" style={{ animationDelay: '2s' }}>{'[ ]'}</div>
          
          {/* Terminal window mockup */}
          <div className="absolute right-[10%] bottom-[20%] w-64 rounded-lg bg-[#e8ecf4] p-3 shadow-lg animate-float" style={{ 
            boxShadow: '8px 8px 16px #c5cad5, -8px -8px 16px #ffffff',
            animationDelay: '0.5s'
          }}>
            <div className="mb-2 flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
            </div>
            <div className="text-xs text-slate-400">$ npm run build</div>
          </div>

          {/* Code snippets */}
          <div className="absolute left-[10%] top-[60%] rounded bg-[#e8ecf4]/50 px-2 py-1 text-xs text-purple-400/40 animate-float" style={{ 
            boxShadow: '4px 4px 8px #c5cad5, -4px -4px 8px #ffffff',
            animationDelay: '1.5s'
          }}>
            const render =
          </div>
          <div className="absolute right-[15%] top-[45%] rounded bg-[#e8ecf4]/50 px-2 py-1 text-xs text-blue-400/40 animate-float" style={{ 
            boxShadow: '4px 4px 8px #c5cad5, -4px -4px 8px #ffffff',
            animationDelay: '2.5s'
          }}>
            {'<Component />'}
          </div>
        </div>

        {/* Navigation removed from hero - using centralized Header component instead */}

        {/* Main hero content */}
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center gap-12 text-center">
            {/* Main content - centered */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col flex-wrap items-center justify-center gap-6">
                  <h1 className="text-[clamp(48px,7vw,82px)] font-black leading-[1.02] tracking-[-0.05em]">
                    <span className="inline-block rounded-full px-3 pb-1 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.1)]">Kuriame</span>
                    <span className="ml-3 inline-flex items-center rounded-full bg-gradient-to-br from-[#6C63FF] via-[#7665FF] to-[#5D8CFF] px-4 pb-1 text-transparent shadow-[0_18px_40px_rgba(107,99,255,0.35)]">
                      <span className="bg-gradient-to-r from-white/95 to-white/70 bg-clip-text text-transparent">web</span>
                    </span>
                  </h1>
                  <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#e8ecf4] px-4 py-2 text-sm text-slate-600 transition-all hover:scale-105" style={{ boxShadow: 'inset 3px 3px 6px #c5cad5, inset -3px -3px 6px #ffffff' }}>
                    <Sparkles className="relative h-5 w-5 animate-pulse-glow text-purple-500" />
                    <span className="relative font-medium">LLM AI powered</span>
                  </button>
                </div>
                <h2 className="text-[clamp(44px,6.5vw,78px)] font-black leading-[1.05] tracking-[-0.04em]">
                  <span className="bg-gradient-to-br from-[#FF5FA0] via-[#FF4F86] to-[#F08EFF] bg-clip-text text-transparent">kuris </span>
                  <span className="ml-1 inline-block rounded-xl bg-gradient-to-br from-[#8E5DFF] via-[#6C63FF] to-[#5D8CFF] px-3 pb-1 text-transparent shadow-[0_14px_32px_rgba(110,95,255,0.3)]">
                    <span className="bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">konvertuoja</span>
                  </span>
                </h2>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
                <span>Performance First</span>
                <span className="text-purple-400">•</span>
                <span>SEO Optimized</span>
                <span className="text-purple-400">•</span>
                <span>AI Content</span>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="group flex items-center gap-2 rounded-full bg-[#e8ecf4] px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:scale-105" style={{ boxShadow: '6px 6px 12px #c5cad5, -6px -6px 12px #ffffff' }}>
                    <Globe className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    Web Development
                  </button>
                  <button className="group rounded-full bg-[#e8ecf4] px-4 py-2 text-sm font-medium text-purple-700 transition-all hover:scale-105" style={{ boxShadow: '6px 6px 12px #c5cad5, -6px -6px 12px #ffffff' }}>
                    <span className="inline-block transition-transform group-hover:scale-110">E-Commerce</span>
                  </button>
                  <button className="group rounded-full bg-[#e8ecf4] px-4 py-2 text-sm font-medium text-slate-800 transition-all hover:scale-105" style={{ boxShadow: '6px 6px 12px #c5cad5, -6px -6px 12px #ffffff' }}>
                    <span className="inline-block transition-transform group-hover:scale-110">SEO & LLM AI</span>
                  </button>
                </div>

                <div>
                  <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold leading-tight text-slate-900">
                    <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Startuok</span> dabar ir pasiekk 10x rezultatus
                  </h3>
                </div>
              </div>
            </div>

            {/* Highlight metrics card */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white/90 via-[#f4f5ff] to-[#eef5ff] p-10 shadow-[0_25px_60px_rgba(99,102,241,0.18)]">
                <div className="absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#8E5DFF]/20 blur-3xl" />
                <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#FF5FA0]/20 blur-3xl" />
                <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl text-left">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[#8E5DFF] shadow-[0_12px_24px_rgba(138,97,255,0.18)]">
                      <Zap className="h-3.5 w-3.5 text-[#8E5DFF]" />
                      nuo idėjos iki rezultato
                    </span>
                    <h4 className="mt-4 text-[clamp(22px,3vw,30px)] font-semibold leading-snug text-slate-900">
                      Pilna AI-first web, e-commerce ir SEO infrastruktūra su <span className="bg-gradient-to-r from-[#8E5DFF] via-[#6C63FF] to-[#5D8CFF] bg-clip-text text-transparent">95+ Lighthouse</span> rezultatu ir paremtu augimo planu.
                    </h4>
                  </div>
                  <div className="grid w-full gap-6 text-left md:w-auto md:grid-cols-3">
                    {[
                      { value: "95+", label: "Lighthouse score" },
                      { value: "30 d.", label: "nuo idėjos iki MVP" },
                      { value: "10x", label: "greitesnis ROI" },
                    ].map((item) => (
                      <div key={item.label} className="relative overflow-hidden rounded-2xl bg-white/80 px-6 py-5 shadow-[0_15px_30px_rgba(99,102,241,0.12)]">
                        <div className="text-[clamp(28px,4vw,36px)] font-semibold text-slate-900">{item.value}</div>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Content cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group overflow-hidden rounded-3xl bg-[#e8ecf4] transition-all duration-500" style={{ boxShadow: '10px 10px 20px #c5cad5, -10px -10px 20px #ffffff' }}>
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-100/50 via-pink-50/50 to-purple-50/50 p-8 transition-all duration-500 group-hover:scale-105">
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#e8ecf4]" style={{ boxShadow: 'inset 8px 8px 16px #c5cad5, inset -8px -8px 16px #ffffff' }}>
                      <Globe className="h-16 w-16 text-purple-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs text-purple-400">#Next.js • React • TypeScript</p>
                <h5 className="font-bold text-slate-900 transition-colors group-hover:text-purple-600">Web Development</h5>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-3xl bg-[#e8ecf4] transition-all duration-500" style={{ boxShadow: '10px 10px 20px #c5cad5, -10px -10px 20px #ffffff' }}>
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100/50 via-orange-50/50 to-amber-50/50 p-8 transition-all duration-500 group-hover:scale-105">
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#e8ecf4]" style={{ boxShadow: 'inset 8px 8px 16px #c5cad5, inset -8px -8px 16px #ffffff' }}>
                      <ShoppingCart className="h-16 w-16 text-amber-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs text-amber-500">#WooCommerce • Shopify • Custom</p>
                <h5 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">E-Commerce Solutions</h5>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group overflow-hidden rounded-3xl bg-[#e8ecf4] transition-all duration-500" style={{ boxShadow: '10px 10px 20px #c5cad5, -10px -10px 20px #ffffff' }}>
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100/50 via-cyan-50/50 to-blue-50/50 p-8 transition-all duration-500 group-hover:scale-105">
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#e8ecf4]" style={{ boxShadow: 'inset 8px 8px 16px #c5cad5, inset -8px -8px 16px #ffffff' }}>
                      <Sparkles className="h-16 w-16 text-blue-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs text-blue-400">#LLM AI • Technical SEO</p>
                <h5 className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">LLM-Powered SEO</h5>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid gap-8 rounded-3xl bg-[#e8ecf4] p-8 sm:grid-cols-3" style={{ boxShadow: 'inset 6px 6px 12px #c5cad5, inset -6px -6px 12px #ffffff' }}>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-slate-900">50+</div>
              <div className="text-sm text-slate-600">Sėkmingų projektų</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-slate-900">98%</div>
              <div className="text-sm text-slate-600">Klientų pasitenkinimas</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Palaikymas</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomepageNeumorphic;
