"use client";
import { useState, useEffect } from "react";

const cityData = [
  { metric: "Connected Communities", value: "80%", icon: "🏘️" },
  { metric: "Ongoing Support", value: "2K", icon: "🔧" },
  { metric: "Streamline", value: "+25", icon: "⚡" },
];

const navItems = ["Home", "Smart City", "Energy Systems", "Governance", "Connected Public Spaces"];

export default function HeroNeumorphic() {
  const [time, setTime] = useState(new Date());
  const [activeNav, setActiveNav] = useState(4); // "Connected Public Spaces"

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6b7280] via-[#9ca3af] to-[#6b7280] p-6">
      {/* Top navigation bar */}
      <div className="absolute top-6 left-6 right-6 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                <span className="text-lg">🏛️</span>
              </div>
              <span className="text-white font-light tracking-wide text-lg">Nexus 3.0</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2 px-3 py-2.5 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 shadow-2xl">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveNav(i)}
                className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  i === activeNav
                    ? "bg-white/95 text-gray-900 shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="w-12 h-12 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all shadow-xl">
              <span className="text-xl">⚙️</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all shadow-xl">
              <span className="text-xl">📍</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all shadow-xl">
              <span className="text-xl">📡</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all shadow-xl">
              <span className="text-xl">💾</span>
            </button>
          </div>
        </div>
      </div>

      {/* Left sidebar metrics */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="space-y-4 w-52">
          {/* Time indicator */}
          <div className="px-5 py-4 rounded-3xl bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <div className="text-white/50 text-xs font-light mb-1">Ongoing</div>
            <div className="text-white text-sm">Support</div>
            <div className="mt-4 text-white font-light text-4xl tracking-tight">2K</div>
          </div>

          {/* Streamline metric */}
          <div className="px-5 py-6 rounded-3xl bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="text-white/50 text-xs font-light mb-3">Streamline</div>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="transform -rotate-90 w-full h-full">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 56}
                  strokeDashoffset={2 * Math.PI * 56 * 0.75}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white font-light text-3xl">+25</div>
              </div>
            </div>
          </div>

          {/* Communities metric */}
          <div className="px-5 py-4 rounded-3xl bg-[rgba(30,30,35,0.7)] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg">🏘️</span>
              </div>
            </div>
            <div className="text-white/50 text-xs font-light mb-1">Connected</div>
            <div className="text-white text-sm mb-3">communities</div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-white to-white/60 rounded-full" />
            </div>
            <div className="text-white font-light text-3xl mt-2">80%</div>
          </div>
        </div>
      </div>

      {/* Main content with 3D city */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative">
          {/* 3D City mockup background */}
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-2xl border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-8 md:p-12">
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }} />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 min-h-[500px] flex flex-col justify-between">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
                  Smart Living in a<br />
                  <span className="font-normal">Digital World</span>
                </h1>

                <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <span className="text-sm font-light">Optimize city operations</span>
                  <span className="text-lg">↗</span>
                </button>
              </div>

              <div className="flex items-end justify-between mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-light">API Development</div>
                    <div className="text-white text-sm font-light mt-1">
                      Welcome to SmartCity, where cutting-edge technology<br />
                      meets the modern city to create smarter, safer, and<br />
                      more efficient urban environments.
                    </div>
                  </div>
                </div>

                {/* Right side controls */}
                <div className="flex flex-col gap-3">
                  <button className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                    <span className="text-xl">⚡</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <span className="text-xl">📡</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated 3D city elements (decorative) */}
            <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
              <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-gradient-to-t from-white/20 to-white/5 rounded-t-sm" />
              <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-gradient-to-t from-white/15 to-white/5 rounded-t-sm" />
              <div className="absolute bottom-0 left-1/2 w-24 h-48 bg-gradient-to-t from-white/25 to-white/5 rounded-t-sm" />
              <div className="absolute bottom-0 right-1/3 w-16 h-36 bg-gradient-to-t from-white/20 to-white/5 rounded-t-sm" />
              <div className="absolute bottom-0 right-1/4 w-20 h-28 bg-gradient-to-t from-white/15 to-white/5 rounded-t-sm" />
              
              {/* Light beams */}
              <div className="absolute bottom-0 left-1/4 w-1 h-full bg-gradient-to-t from-amber-400/40 to-transparent blur-sm" />
              <div className="absolute bottom-0 left-1/2 w-1 h-full bg-gradient-to-t from-amber-400/30 to-transparent blur-sm" />
              <div className="absolute bottom-0 right-1/3 w-1 h-full bg-gradient-to-t from-amber-400/40 to-transparent blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
