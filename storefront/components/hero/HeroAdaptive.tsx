"use client";
import { useState, useEffect } from "react";

const contexts = [
  { time: "ryto", action: "pradedantis", color: "from-amber-400 to-orange-500", timeRange: "5:00-12:00", emoji: "☀️" },
  { time: "dienos", action: "augantis", color: "from-blue-400 to-cyan-500", timeRange: "12:00-18:00", emoji: "🌤️" },
  { time: "vakaro", action: "užbaigiančio", color: "from-purple-400 to-pink-500", timeRange: "18:00-5:00", emoji: "🌙" },
];

export default function HeroAdaptive() {
  const [contextIndex, setContextIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [manualMode, setManualMode] = useState(false);

  useEffect(() => {
    if (!manualMode) {
      // Detect time of day
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setContextIndex(0); // morning
      else if (hour >= 12 && hour < 18) setContextIndex(1); // day
      else setContextIndex(2); // evening
    }

    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    // Simulated personalization (in real app: from localStorage or API)
    const stored = localStorage.getItem('userName');
    if (stored) setUserName(stored);
  }, [manualMode]);

  const currentContext = contexts[contextIndex];

  return (
    <section className={`relative py-20 md:py-32 transition-colors duration-700 ${
      isDarkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Demo time selector */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
          isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-slate-200'
        }`}>
          <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Demo laiko zonas:
          </span>
          {contexts.map((ctx, i) => (
            <button
              key={i}
              onClick={() => {
                setContextIndex(i);
                setManualMode(true);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                i === contextIndex
                  ? `bg-gradient-to-r ${ctx.color} text-white shadow-md`
                  : isDarkMode 
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ctx.emoji} {ctx.timeRange}
            </button>
          ))}
        </div>
      </div>

      {/* Adaptive background */}
      <div className={`absolute inset-0 opacity-10 transition-opacity duration-1000`}>
        <div className={`absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl ${currentContext.color} blur-3xl`} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Personalized greeting */}
          {userName && (
            <div className="mb-4 text-sm font-medium text-slate-500 animate-fade-in">
              Sveiki sugrįžę, {userName} 👋
            </div>
          )}

          {/* Context-aware heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Jūsų <span className={`bg-gradient-to-r ${currentContext.color} bg-clip-text text-transparent`}>
              {currentContext.time}
            </span> verslas
            <br />
            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
              {currentContext.action} dieną
            </span>
          </h1>

          <p className={`text-xl leading-relaxed max-w-2xl mb-12 transition-colors duration-700 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Svetainė, kuri prisitaiko prie jūsų ir jūsų klientų poreikių. 
            AI-valdoma personalizacija. Real-time adaptacija. 
            Kontekstinė patirtis.
          </p>

          {/* Adaptive CTAs based on context */}
          <div className="flex flex-wrap gap-4">
            {contextIndex === 0 && (
              <>
                <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Pradėti projektą
                </button>
                <button className={`px-8 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-slate-700 text-slate-300 hover:border-slate-600' 
                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}>
                  Konsultacija kavos metu ☕
                </button>
              </>
            )}
            
            {contextIndex === 1 && (
              <>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Pamatyti portfolio
                </button>
                <button className={`px-8 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-slate-700 text-slate-300 hover:border-slate-600' 
                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}>
                  Greitas skambutis 📞
                </button>
              </>
            )}
            
            {contextIndex === 2 && (
              <>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Peržiūrėti idėjas
                </button>
                <button className={`px-8 py-4 border-2 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-slate-700 text-slate-300 hover:border-slate-600' 
                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}>
                  Užsakyti pasiūlymą 📧
                </button>
              </>
            )}
          </div>

          {/* Adaptive feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className={`p-6 rounded-2xl border transition-all duration-700 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-3xl mb-3">🎯</div>
              <div className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                AI Personalizacija
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Kiekvienas lankytojas mato individualų turinį
              </div>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-700 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-3xl mb-3">⚡</div>
              <div className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Real-time Adaptacija
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                UI keičiasi pagal elgseną ir kontekstą
              </div>
            </div>

            <div className={`p-6 rounded-2xl border transition-all duration-700 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-3xl mb-3">🌱</div>
              <div className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Sustainable Design
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Optimizuota energijos vartojimui
              </div>
            </div>
          </div>

          {/* Context indicator */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${currentContext.color.includes('amber') ? 'bg-amber-400' : currentContext.color.includes('blue') ? 'bg-blue-400' : 'bg-purple-400'} animate-pulse`} />
              <span className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Adaptyvus dizainas pagal jūsų {currentContext.time} kontekstą
              </span>
            </div>
            <button
              onClick={() => {
                setManualMode(false);
                const hour = new Date().getHours();
                if (hour >= 5 && hour < 12) setContextIndex(0);
                else if (hour >= 12 && hour < 18) setContextIndex(1);
                else setContextIndex(2);
              }}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🔄 Reset į realų laiką
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
