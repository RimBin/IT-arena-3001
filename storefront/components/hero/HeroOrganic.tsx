"use client";
export default function HeroOrganic() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Organic background blob */}
      <div
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-30 blur-3xl transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(196, 181, 253, 0.2) 50%, transparent 70%)",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <span className="text-sm font-medium text-blue-700">Jūsų skaitmeninis partneris</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-blue-800 to-slate-700">
                Kuriame svetaines,
              </span>
              <br />
              <span className="text-slate-900">kurios auga kartu</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Organiškai besivystantys sprendimai, kurie prisitaiko prie jūsų verslo. 
              Ne šablonas – sistema, kuri mokosi ir tobulėja.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-2xl hover:rounded-3xl transition-all duration-500 shadow-lg hover:shadow-xl">
                <span className="flex items-center gap-2">
                  Pradėti projektą
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:rounded-3xl transition-all duration-500">
                Mūsų darbai
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500">Projektų</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-500">Pasitenkinimas</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-500">Palaikymas</div>
              </div>
            </div>
          </div>

          {/* Organic visual element */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Floating cards with organic shapes */}
                <div 
                  className="absolute top-10 left-10 w-48 h-32 bg-white rounded-3xl shadow-lg p-6 animate-float"
                  style={{ 
                    borderRadius: "45% 55% 48% 52% / 50% 60% 40% 50%",
                    animationDelay: "0s"
                  }}
                >
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-sm font-semibold text-slate-700">Lightning Fast</div>
                </div>

                <div 
                  className="absolute top-40 right-10 w-52 h-36 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-6 animate-float"
                  style={{ 
                    borderRadius: "55% 45% 52% 48% / 60% 40% 60% 40%",
                    animationDelay: "-2s"
                  }}
                >
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-sm font-semibold text-slate-700">SEO Optimized</div>
                </div>

                <div 
                  className="absolute bottom-20 left-20 w-44 h-28 bg-white rounded-3xl shadow-lg p-6 animate-float"
                  style={{ 
                    borderRadius: "48% 52% 55% 45% / 45% 55% 45% 55%",
                    animationDelay: "-4s"
                  }}
                >
                  <div className="text-4xl mb-2">🌱</div>
                  <div className="text-sm font-semibold text-slate-700">Scalable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
