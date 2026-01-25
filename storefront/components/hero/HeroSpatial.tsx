"use client";
export default function HeroSpatial() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Layered spatial cards */}
          <div className="relative">
            <div 
              className="spatial-card absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl border border-white/10"
              style={{ 
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
              }}
            />
            <div 
              className="spatial-card absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-white/5"
              style={{ 
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
              }}
            />
            
            <div className="relative p-16 md:p-24">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block mb-2">Erdvė.</span>
                <span className="block text-blue-400">Gylis.</span>
                <span className="block text-purple-400">Patirtis.</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                Spatial computing era. Svetainės, kurios jaučiasi kaip fizinė erdvė.
                <br />
                Trečias matmuo jūsų verslui.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="spatial-card px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}>
                  Tyrinėti
                </button>
                <button className="spatial-card px-8 py-4 bg-blue-500 rounded-2xl text-white hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
                  style={{ transformStyle: 'preserve-3d' }}>
                  Pradėti projektą
                </button>
              </div>
            </div>
          </div>

          {/* Floating feature indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            {[
              { icon: "🎯", label: "AI-Powered", depth: 40 },
              { icon: "⚡", label: "Real-time", depth: 60 },
              { icon: "🌐", label: "WebXR Ready", depth: 50 },
            ].map((item, i) => (
              <div
                key={i}
                className="spatial-card p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm text-slate-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid overlay for depth perception */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </section>
  );
}
