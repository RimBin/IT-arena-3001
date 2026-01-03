"use client";
import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSmartCity: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="y-neumo-hero-grad w-full min-h-screen flex items-center justify-center p-8 font-sans relative overflow-hidden text-slate-900"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Top Navigation - Raised */}
        <div className="flex justify-between items-center mb-12">
          <div 
            className="y-neumo-surface y-pill px-6 py-3 transition-all duration-300"
            style={{
              transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            }}
          >
            <span className="font-semibold">IT Arena</span>
          </div>

          <div 
            className="y-neumo-inset y-pill px-8 py-3 flex items-center gap-6 transition-all duration-300"
            style={{
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            }}
          >
            <Link href="/" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-semibold transition-colors">Pagrindinis</Link>
            <Link href="/about" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Apie mus</Link>
            <Link href="/admin" className="y-focus text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Administravimas</Link>
          </div>

          <div className="flex items-center">
            <button type="button" className="y-cta-glow y-focus font-semibold text-slate-900 hover:text-slate-700 transition-colors">
              Susisiekti
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - Raised Cards */}
          <div className="col-span-3 space-y-6">
            
            {/* Support Card - Raised */}
            <div 
              className="y-neumo-surface-lg p-6 transition-all duration-300"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              </div>
              <p className="text-slate-600 text-xs mb-1">Aktyvu</p>
              <p className="text-slate-900 font-semibold mb-3">Projektų palaikymas</p>
              <p className="text-slate-900 text-5xl font-bold">2K</p>
            </div>

            {/* Streamline Card - Raised with Inner Pressed */}
            <div 
              className="y-neumo-surface-lg p-6 transition-all duration-300"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <p className="text-slate-600 text-xs mb-4">Efektyvumas</p>
              <div 
                className="y-neumo-inset y-pill w-32 h-32 mx-auto flex items-center justify-center relative"
              >
                <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="220 352"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-slate-900 text-3xl font-bold">+25</p>
              </div>
            </div>

            {/* Communities Card - Raised with Inner Bar */}
            <div 
              className="y-neumo-surface-lg p-6 transition-all duration-300"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏘️</span>
                <div>
                  <p className="text-slate-600 text-xs">Sujungtos</p>
                  <p className="text-slate-900 font-semibold">bendruomenės</p>
                </div>
              </div>
              <div 
                className="y-neumo-inset-sm y-pill h-2 mb-2"
              >
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-slate-400 to-slate-200"
                  style={{ width: '30%' }}
                />
              </div>
              <p className="text-slate-900 text-4xl font-bold mt-4">30%</p>
            </div>

          </div>

          {/* Main Content Area - Large Raised Card */}
          <div className="col-span-9">
            <div 
              className="y-neumo-surface-lg p-12 relative overflow-hidden transition-all duration-300 min-h-[600px] flex flex-col justify-between"
              style={{
                transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
              }}
            >
              {/* Title */}
              <div>
                <h1 className="heading-black text-slate-900 text-[1.3rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.6rem] leading-tight md:leading-[0.96] font-extrabold mb-6">
                  Skaitmeniniai ir AI<br />
                  sprendimai<br />
                  <span className="block" style={{ color: '#caa0ff' }}>naujos kartos verslui.</span>
                </h1>

                {/* CTA Button — animated gradient border glow */}
                <button
                  type="button"
                  className="y-cta-glow y-focus inline-flex items-center gap-3 mb-6 font-semibold text-slate-900 hover:text-slate-700 transition-colors"
                >
                  Susisiekti
                  <span aria-hidden>→</span>
                </button>

                <p className="text-slate-600 max-w-2xl">
                  Performance-first digital and e-commerce solutions crafted with Next.js, React, and WordPress excellence.
                </p>
              </div>

              {/* Bottom Info Cards */}
              <div className="grid grid-cols-2 gap-6 items-start">
                
                {/* Left Card - Large Rounded Raised */}
                <div 
                  className="y-neumo-surface p-8 md:p-12 rounded-3xl transition-all duration-300 max-w-prose"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="y-neumo-inset y-pill w-14 h-14 flex items-center justify-center mt-1"
                    >
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Performance-first IT sprendimai</p>
                      <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                        IT Arena – jūsų partneris kuriant našius, vizualiai įspūdingus sprendimus, kurie išlaiko „Performance First“ fokusą kiekviename UX palietime.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Card - Offset Floating Circles */}
                <div className="flex flex-col gap-6 -ml-6 md:-ml-12">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="y-neumo-surface y-pill w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                      style={{ transform: `translateY(${i * 40}px)` }}
                    >
                      <span className="text-2xl">{i === 0 ? '💡' : '👤'}</span>
                    </div>
                  ))}
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
