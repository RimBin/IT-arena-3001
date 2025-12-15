"use client";
import React from "react";

// Glassmorphism + Neumorphic 3D pagal pateiktą TECHNOLOGY išdėstymą (naujausias variantas)
const HeroHomepageNeumorphicTech: React.FC = () => {
  return (
    <section className="relative bg-[#e6e9f0] rounded-2xl p-[clamp(16px,3vw,40px)] mb-[clamp(16px,3vw,40px)] overflow-hidden">
      <div
        className="pointer-events-none select-none absolute inset-x-[clamp(16px,3vw,40px)] top-[clamp(10px,2vw,20px)] text-slate-400/25 font-extrabold tracking-tight leading-none"
        style={{ fontSize: 'clamp(64px, 18vw, 220px)', letterSpacing: '-0.04em' }}
      >
        TECHNOLOGY
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-[clamp(16px,2.5vw,28px)]">
          <div className="flex gap-2">
            {['interesting', 'trends of AI'].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[12px] text-slate-600 bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.6)]"
                style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-slate-500 text-xs">Customer reviews</span>
            <div className="flex -space-x-2">
              {['A', 'B', 'C'].map((l, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-white/70 backdrop-blur text-[11px] text-slate-600 grid place-items-center [border:1px_solid_rgba(255,255,255,0.7)]"
                  style={{ boxShadow: '2px 2px 4px #c5c8d0, -2px -2px 4px #ffffff' }}
                >
                  {l}
                </div>
              ))}
              <div
                className="w-7 h-7 rounded-full bg-[#e6e9f0] text-slate-600 grid place-items-center"
                style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
              >
                +
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[clamp(90px,14vw,160px)] mb-[clamp(16px,3vw,28px)]">
          <div className="absolute left-[clamp(20px,6vw,120px)] top-0 w-[clamp(120px,18vw,200px)] h-[clamp(80px,12vw,140px)] rounded-[18px] bg-slate-300/40 backdrop-blur" style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }} />
          <div className="absolute left-[clamp(60px,9vw,160px)] top-[clamp(6px,1vw,10px)] w-[clamp(140px,20vw,220px)] h-[clamp(100px,14vw,160px)] rounded-[18px] bg-white/55 backdrop-blur [border:1px_solid_rgba(255,255,255,0.6)]" style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }} />
          <div className="absolute left-[clamp(100px,12vw,200px)] -top-[clamp(10px,1.4vw,16px)] w-[clamp(150px,22vw,240px)] h-[clamp(110px,15vw,170px)] rounded-[18px] overflow-hidden bg-white/70 backdrop-blur [border:1px_solid_rgba(255,255,255,0.7)]" style={{ boxShadow: '10px 10px 20px #c5c8d0, -10px -10px 20px #ffffff' }}>
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,#ffe2f2_0%,#e4eafe_45%,#ffffff_70%)]" />
            <div className="absolute bottom-2 left-3 text-slate-700 text-sm">Capacity</div>
            <button className="absolute top-2 right-2 w-7 h-7 grid place-items-center rounded-full bg-white/80 text-slate-700" style={{ boxShadow: '4px 4px 8px #c5c8d0, -4px -4px 8px #ffffff' }}>↗</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[clamp(12px,2vw,20px)]">
          <div className="rounded-[20px] p-[clamp(12px,2vw,18px)] bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.65)]" style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}>
            <div className="h-[clamp(70px,10vw,100px)] rounded-[16px] mb-3 overflow-hidden bg-[radial-gradient(120%_120%_at_30%_20%,#ffe2f2_0%,#e4eafe_45%,#ffffff_70%)]" />
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 text-[13px] text-slate-700">
              {[ ['01/','Extraordinary speed'], ['02/','Unrivaled resilience'], ['03/','Velocity'] ].map(([i,t]) => (
                <React.Fragment key={i+t}>
                  <div className="text-slate-500">{i}</div>
                  <div className="py-2 px-3 rounded-[12px] bg-[#e6e9f0]" style={{ boxShadow:'inset 4px 4px 8px #c5c8d0, inset -4px -4px 8px #ffffff' }}>{t}</div>
                  <div className="text-slate-400">—</div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] p-[clamp(14px,2.4vw,22px)] bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.65)] flex flex-col justify-between" style={{ boxShadow:'8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}>
            <div className="text-5xl leading-none text-slate-300/70 mb-2">“</div>
            <div className="text-slate-800 text-[clamp(16px,2.3vw,20px)] leading-relaxed mb-4">We have created the most advanced AI platform in the world</div>
            <div className="flex items-center gap-2">
              <a className="px-4 py-2 rounded-full text-sm text-slate-700 bg-[#e6e9f0]" style={{ boxShadow:'6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}>Learn more</a>
              <button className="w-8 h-8 grid place-items-center rounded-full bg-white/80 text-slate-700" style={{ boxShadow:'4px 4px 8px #c5c8d0, -4px -4px 8px #ffffff' }}>↗</button>
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(12px,2vw,20px)]">
            <div className="rounded-[20px] p-[clamp(12px,2vw,18px)] bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.65)]" style={{ boxShadow:'8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}>
              <div className="mb-3 h-[clamp(56px,8vw,72px)] rounded-[14px] overflow-hidden bg-[radial-gradient(120%_120%_at_30%_20%,#ffe2f2_0%,#e4eafe_45%,#ffffff_70%)]" />
              <div className="font-semibold text-slate-800 mb-1">Mission//</div>
              <p className="text-[13px] text-slate-600">To create a future where artificial intelligence is used for the benefit of humanity.</p>
            </div>
            <div className="rounded-[20px] p-[clamp(12px,2vw,18px)] bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.65)]" style={{ boxShadow:'8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}>
              <div className="mb-3 h-[clamp(56px,8vw,72px)] rounded-[14px] overflow-hidden bg-[radial-gradient(120%_120%_at_30%_20%,#ffe2f2_0%,#e4eafe_45%,#ffffff_70%)]" />
              <div className="font-semibold text-slate-800 mb-1">Company goals</div>
              <p className="text-[13px] text-slate-600">To help companies easily extract value from AI at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepageNeumorphicTech;
