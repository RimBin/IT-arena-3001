import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";

export default function HeroSmartCityDuplicate() {
  return (
    <section className="y-neumo-hero-grad y-neumo-tech-bg w-full py-16 lg:py-20 font-sans text-slate-900 relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* Left metrics */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
            <div className="y-neumo-surface-lg p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-5">
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
              </div>
              <p className="text-slate-600 text-sm">Aktyvūs</p>
              <p className="text-slate-900 font-semibold text-lg">projektai</p>
              <p className="text-slate-900 text-5xl font-bold mt-4">14</p>
              <p className="text-slate-500 text-sm mt-3">Šiuo metu vykdomi sprendimai</p>
            </div>

            <div className="y-neumo-surface-lg p-6 relative overflow-hidden">
              <p className="text-slate-700 font-semibold">Sugeneruota</p>
              <p className="text-slate-700 font-semibold">vertė klientams</p>
              <p className="text-slate-900 text-4xl font-bold mt-5">
                +420k <span className="text-slate-500 font-semibold">€</span>
              </p>
              <div className="my-6 y-neumo-inset-sm y-pill h-1 w-full opacity-60" aria-hidden="true" />
              <p className="text-slate-500 text-sm">per automatizacijas</p>
              <p className="text-slate-500 text-sm">ir optimizaciją</p>
            </div>

            <div className="y-neumo-surface-lg p-6 relative overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <p className="text-slate-700 font-semibold">Automatizavimo</p>
                <span
                  aria-hidden
                  className="y-neumo-inset-sm y-pill w-9 h-9 flex items-center justify-center text-slate-500"
                >
                  ↺
                </span>
              </div>
              <p className="text-slate-700 font-semibold">efektyvumas</p>
              <p className="text-slate-900 text-5xl font-bold mt-5">−37%</p>
              <p className="text-slate-500 text-sm mt-4">rankinio darbo</p>
              <p className="text-slate-500 text-sm">sumažinimas</p>
            </div>
          </div>

          {/* Main card */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10">
            <div className="y-neumo-surface-lg p-8 md:p-12 relative overflow-hidden min-h-[560px] flex flex-col">
              <div className="grid grid-cols-12 gap-8 items-start flex-1">
                <div className="col-span-12 lg:col-span-7">
                  <h2 className="heading-black text-slate-900 text-[2.1rem] sm:text-[3rem] lg:text-[4.1rem] leading-[1.08] font-extrabold font-mono tracking-[0.06em]">
                    Skaitmeniniai ir AI
                    <br />
                    sprendimai
                    <br />
                    <span className="block italic y-text-grad-violet">naujos kartos verslui.</span>
                  </h2>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                    Kuriame verslo sistemas, el. parduotuves, svetaines ir automatizuotas AI bei reklamos valdymo
                    sistemas, kurios didina pardavimus ir efektyvina procesus.
                  </p>

                  <div className="mt-10">
                    <Link
                      href="/#kontaktai"
                      className={buttonClasses({ variant: "cta", size: "md", className: "gap-3" })}
                    >
                      Susisiekti <span aria-hidden className="y-cta-icon">→</span>
                    </Link>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-5 lg:pt-4">
                  <div className="y-neumo-surface-lg p-8 md:p-10">
                    <div className="flex items-center gap-3 text-slate-900">
                      <span
                        aria-hidden
                        className="y-neumo-inset-sm y-pill w-9 h-9 flex items-center justify-center text-slate-500"
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-slate-400 border border-slate-300" />
                      </span>
                      <span className="font-semibold text-slate-700">Orientuota į rezultatus</span>
                    </div>

                    <p className="text-slate-600 leading-relaxed mt-5">
                      Kuriame verslo sistemas, el. parduotuves, svetaines ir automatizuotas AI bei reklamos valdymo
                      sistemas, kurios didina pardavimus ir efektyvina procesus.
                    </p>

                    <div className="mt-8">
                      <Link
                        href="/#kontaktai"
                        className={buttonClasses({ variant: "cta", size: "md", className: "gap-3 w-full justify-center" })}
                      >
                        Susisiekti <span aria-hidden className="y-cta-icon">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-slate-400">
                <span>SEO + LLM</span>
                <span aria-hidden>•</span>
                <span>E-komercija</span>
                <span aria-hidden>•</span>
                <span>AI sprendimai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
