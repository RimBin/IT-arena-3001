"use client";
import { FC, useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';

const HeroSmartCity: FC = () => {
  const [mounted, setMounted] = useState(false);

  const testimonials = [
    {
      quote: 'Greita, aiški komunikacija ir rezultatas, kuris realiai pagerino konversiją.',
      author: 'E. J., e‑komercija',
    },
    {
      quote: 'TVS + Next.js sprendimas veikė sklandžiai nuo pirmos dienos — labai tvarkingas darbas.',
      author: 'M. K., produktų komanda',
    },
    {
      quote: 'Sutaupėme daug laiko optimizacijoms. Performance fokusas jautėsi kiekviename žingsnyje.',
      author: 'A. P., marketingas',
    },
  ] as const;

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialVisible, setTestimonialVisible] = useState(true);

  // Small rotating project names shown under the metric
  const projects = ['CityGrid', 'FlowTrack', 'MarketAI', 'AdOpt'] as const;
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectVisible, setProjectVisible] = useState(true);

  const [efficiencyValue, setEfficiencyValue] = useState(25);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) return;

    const intervalId = window.setInterval(() => {
      setTestimonialVisible(false);
      window.setTimeout(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        setTestimonialVisible(true);
      }, 450);
    }, 8500);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  // Rotation for the short project names below the metric
  useEffect(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) return;

    const id = window.setInterval(() => {
      setProjectVisible(false);
      window.setTimeout(() => {
        setProjectIndex((p) => (p + 1) % projects.length);
        setProjectVisible(true);
      }, 300);
    }, 3500);

    return () => window.clearInterval(id);
  }, [projects.length]);

  // Count-up for the +25 metric on initial load
  useEffect(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!mounted || reducedMotion) {
      setEfficiencyValue(25);
      return;
    }

    const target = 25;
    const durationMs = 900;
    const start = performance.now();
    setEfficiencyValue(0);

    let rafId = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setEfficiencyValue(Math.round(eased * target));
      if (t < 1) rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [mounted]);

  return (
    <div className="y-neumo-hero-grad w-full min-h-screen flex items-center lg:items-start justify-center px-8 pb-8 pt-10 lg:pt-6 font-sans relative overflow-hidden text-slate-900">
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Top Navigation - Raised */}
        <div
          className={
            "flex justify-between items-center mb-12 " +
            (mounted ? "y-reveal" : "")
          }
          style={
            mounted
              ? ({ ['--y-delay' as any]: '0ms' } as React.CSSProperties)
              : undefined
          }
        >
          <div className="y-neumo-surface y-pill px-6 py-3 transition-all duration-300">
            <span className="font-semibold">IT Arena</span>
          </div>

          <div className="y-neumo-inset y-pill px-8 py-3 flex items-center gap-6 transition-all duration-300">
            <Link href="/" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-semibold transition-colors">Pagrindinis</Link>
            <Link href="/about" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Apie mus</Link>
            <Link href="/#paslaugos" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Paslaugos</Link>
            <Link href="/blog" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Tinklaraštis</Link>
            <Link href="/#kontaktai" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Kontaktai</Link>
            <Link href="/#darbai" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Darbai</Link>
          </div>

          <div className="flex items-center">
            <button type="button" className="y-cta-glow y-focus font-semibold text-slate-900 hover:text-slate-700 transition-colors">
              Susisiekti
            </button>
          </div>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-6 items-stretch " +
            (mounted ? "" : "")
          }
        >
          
          {/* Left Sidebar - Raised Cards */}
          <div
            className={
              "col-span-12 md:col-span-3 lg:col-span-2 space-y-6 h-full flex flex-col "
            }
          >
            
            {/* Combined Metrics Card (same height as two stacked cards) */}
            <div
              className={mounted ? "y-reveal-diag-45 flex-1" : "flex-1"}
              style={
                mounted
                  ? ({ ['--y-delay' as any]: '140ms' } as React.CSSProperties)
                  : undefined
              }
            >
              <div
                className={
                  "y-neumo-surface-lg p-6 transition-all duration-300 relative overflow-hidden h-full min-h-[420px] flex flex-col " +
                  (mounted ? "" : "")
                }
              >
              <img
                src="/illustrations/services-flow.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -right-12 -top-12 w-[300px] opacity-[0.09] blur-[0.3px] mix-blend-multiply z-0 y-illu-float"
              />
              <img
                src="/illustrations/services-commerce.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -right-16 -bottom-16 w-[300px] opacity-[0.08] blur-[0.35px] mix-blend-multiply z-0 y-illu-float-2"
              />

              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  </div>
                  <p className="text-slate-600 text-xs mb-1">Aktyvu</p>
                  <p className="text-slate-900 font-semibold mb-3">Projektų palaikymas</p>
                  <p className="text-slate-900 text-5xl font-bold">2K</p>

                  {/* Rotating short project names */}
                  <div className="mt-3 h-6">
                    <p className={`text-slate-600 text-sm transition-all duration-300 ${projectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                      {projects[projectIndex]}
                    </p>
                  </div>
                </div>

                <div className="my-6 y-neumo-inset-sm y-pill h-1 w-full opacity-60" aria-hidden="true" />

                <div className="mt-auto">
                  <p className="text-slate-600 text-xs mb-4">Efektyvumas</p>
                  <div className="y-neumo-inset y-pill w-32 h-32 mx-auto flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-32 h-32 -rotate-90 text-slate-900 motion-reduce:animate-none">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="352"
                        strokeDashoffset="352"
                        className="y-progress-arc"
                        style={
                          mounted
                            ? ({ ['--y-delay' as any]: '220ms' } as React.CSSProperties)
                            : undefined
                        }
                      />
                    </svg>
                    <p className="text-slate-900 text-3xl font-bold">+{efficiencyValue}</p>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Communities Card - Raised with Inner Bar */}
            <div
              className={mounted ? "y-reveal-diag-45" : ""}
              style={
                mounted
                  ? ({ ['--y-delay' as any]: '300ms' } as React.CSSProperties)
                  : undefined
              }
            >
              <div className="y-neumo-surface-lg p-6 transition-all duration-300 relative overflow-hidden flex-none min-h-[100px]">
                <img
                  src="/illustrations/services-commerce.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -right-14 -bottom-14 w-[290px] opacity-[0.10] blur-[0.3px] mix-blend-multiply z-0"
                />
                <div className="relative z-10">
                  <p className="text-slate-600 text-xs mb-3">Atsiliepimai</p>
                  <div
                    className={
                      "transition-all duration-500 min-h-[68px] " +
                      (testimonialVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2")
                    }
                  >
                    <p className="text-slate-600 leading-snug y-clamp-2">
                      “{testimonials[testimonialIndex].quote}”
                    </p>
                    <p className="text-slate-400 text-xs mt-3">— {testimonials[testimonialIndex].author}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content Area - Large Raised Card */}
          <div
            className={
              "col-span-12 md:col-span-9 lg:col-span-10 h-full "
            }
          >
            <div
              className={mounted ? "y-reveal-diag-45" : ""}
              style={
                mounted
                  ? ({ ['--y-delay' as any]: '460ms' } as React.CSSProperties)
                  : undefined
              }
            >
              <div className="y-neumo-surface-lg p-12 relative overflow-hidden transition-all duration-300 min-h-[600px] h-full flex flex-col justify-between">
              {/* Title */}
              <div>
                <h1
                  className={
                    "heading-black text-slate-900 text-[1.6rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.6rem] leading-[1.12] sm:leading-[1.08] md:leading-[1.04] lg:leading-[1.02] font-extrabold font-mono tracking-[0.08em] mb-6 " +
                    (mounted ? "y-reveal" : "")
                  }
                  style={
                    mounted
                      ? ({ ['--y-delay' as any]: '260ms' } as React.CSSProperties)
                      : undefined
                  }
                >
                  Skaitmeniniai ir AI<br />
                  sprendimai<br />
                  <span className="block italic y-text-grad-violet">naujos kartos verslui.</span>
                </h1>

                {/* CTA Button — moved to bottom area (see below) */}

                
              </div>

              {/* Bottom Content (match new screenshot layout) */}
              <div
                className={
                  "mt-10 " +
                  (mounted ? "y-reveal" : "")
                }
                style={
                  mounted
                    ? ({ ['--y-delay' as any]: '340ms' } as React.CSSProperties)
                    : undefined
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex items-center gap-3 text-slate-900">
                    <span
                      aria-hidden
                      className="y-neumo-inset-sm y-pill w-8 h-8 flex items-center justify-center text-slate-500"
                    >
                      <span className="w-3 h-3 rounded-full bg-slate-400 border border-slate-300" />
                    </span>
                    <span className="font-normal text-slate-600">Orientuota į rezultatą</span>
                  </div>

                  <div className="y-neumo-inset px-8 py-4 transition-all duration-300 group cursor-default">
                    <p className="text-slate-900 text-lg md:text-xl leading-relaxed md:max-w-3xl group-hover:text-slate-700 group-hover:underline underline-offset-8 transition-colors">
                      Kuriame verslo sistemas, el. parduotuves, svetaines ir automatizuotas AI bei reklamos valdymo sistemas, kurios didina pardavimus ir efektyvina procesus.
                    </p>
                  </div>

                  <div className="md:pt-1">
                    <button
                      type="button"
                      className="y-cta-glow y-focus inline-flex items-center gap-3 font-semibold text-slate-900 hover:text-slate-700 transition-colors px-8 py-3"
                    >
                      Susisiekti
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>

                <div
                  className={
                    "mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-slate-400 " +
                    (mounted ? "y-reveal" : "")
                  }
                  style={
                    mounted
                      ? ({ ['--y-delay' as any]: '420ms' } as React.CSSProperties)
                      : undefined
                  }
                >
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

        </div>

      </div>
    </div>
  );
};

export default HeroSmartCity;
