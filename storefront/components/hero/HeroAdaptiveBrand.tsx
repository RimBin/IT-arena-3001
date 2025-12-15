"use client";
import { useState, useEffect } from "react";

const colorThemes = [
  { 
    name: "Ocean", 
    emoji: "🌊",
    primary: "59, 130, 246", // blue-500
    secondary: "14, 165, 233", // sky-500
    accent: "6, 182, 212", // cyan-500
    gradient: "from-blue-500 via-sky-500 to-cyan-500"
  },
  { 
    name: "Forest", 
    emoji: "🌲",
    primary: "34, 197, 94", // green-500
    secondary: "16, 185, 129", // emerald-500
    accent: "20, 184, 166", // teal-500
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  },
  { 
    name: "Sunset", 
    emoji: "🌅",
    primary: "249, 115, 22", // orange-500
    secondary: "239, 68, 68", // red-500
    accent: "236, 72, 153", // pink-500
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  { 
    name: "Purple Dream", 
    emoji: "💜",
    primary: "168, 85, 247", // purple-500
    secondary: "192, 132, 252", // purple-400
    accent: "217, 70, 239", // fuchsia-500
    gradient: "from-purple-500 via-purple-400 to-fuchsia-500"
  },
  { 
    name: "Monochrome", 
    emoji: "⚫",
    primary: "15, 23, 42", // slate-900
    secondary: "51, 65, 85", // slate-700
    accent: "100, 116, 139", // slate-500
    gradient: "from-slate-900 via-slate-700 to-slate-500"
  },
];

export default function HeroAdaptiveBrand() {
  const [selectedTheme, setSelectedTheme] = useState<typeof colorThemes[0] | null>(null);
  const [showPicker, setShowPicker] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has previously selected a theme
    const saved = localStorage.getItem('userTheme');
    if (saved) {
      const theme = colorThemes.find(t => t.name === saved);
      if (theme) {
        setSelectedTheme(theme);
        setShowPicker(false);
        applyTheme(theme);
      }
    }
  }, []);

  const applyTheme = (theme: typeof colorThemes[0]) => {
    // Apply CSS variables globally
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
  };

  const handleThemeSelect = (theme: typeof colorThemes[0]) => {
    setIsAnimating(true);
    setSelectedTheme(theme);
    applyTheme(theme);
    localStorage.setItem('userTheme', theme.name);
    
    setTimeout(() => {
      setShowPicker(false);
      setIsAnimating(false);
    }, 800);
  };

  const handleReset = () => {
    setShowPicker(true);
    setSelectedTheme(null);
    localStorage.removeItem('userTheme');
  };

  return (
    <>
      {/* Color Picker Modal */}
      {showPicker && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎨</div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Pasirinkite savo spalvą
              </h2>
              <p className="text-slate-600 text-lg">
                Svetainė prisitaikys prie jūsų stiliaus ir visuomet rodys jūsų mėgstamas spalvas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {colorThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeSelect(theme)}
                  className="group relative p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className="text-4xl mb-3">{theme.emoji}</div>
                    <div className="font-semibold text-slate-900 mb-2">{theme.name}</div>
                    <div className="flex gap-1 justify-center">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: `rgb(${theme.primary})` }}
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: `rgb(${theme.secondary})` }}
                      />
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: `rgb(${theme.accent})` }}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center text-sm text-slate-500">
              💡 Galėsite pakeisti bet kada paspaudę spalvų ikoną viršuje
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Applied Theme */}
      <section 
        className={`relative min-h-screen flex items-center justify-center transition-all duration-1000 ${
          isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
      >
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-1000"
          style={{
            background: selectedTheme 
              ? `radial-gradient(circle at top right, rgba(${selectedTheme.primary}, 0.3), transparent 60%),
                 radial-gradient(circle at bottom left, rgba(${selectedTheme.accent}, 0.3), transparent 60%)`
              : 'none'
          }}
        />

        {/* Theme controls */}
        {selectedTheme && !showPicker && (
          <button
            onClick={handleReset}
            className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            style={{
              borderColor: `rgb(${selectedTheme.primary})`,
              borderWidth: '2px'
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{selectedTheme.emoji}</span>
              <span className="text-xs font-medium text-slate-600 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
                Keisti spalvą
              </span>
            </div>
          </button>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Animated logo/icon with theme colors */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse"
                  style={{
                    background: selectedTheme 
                      ? `linear-gradient(135deg, rgb(${selectedTheme.primary}), rgb(${selectedTheme.accent}))`
                      : 'linear-gradient(135deg, #3b82f6, #06b6d4)'
                  }}
                />
                <div 
                  className="relative w-full h-full rounded-full flex items-center justify-center text-5xl shadow-2xl"
                  style={{
                    background: selectedTheme
                      ? `linear-gradient(135deg, rgb(${selectedTheme.primary}), rgb(${selectedTheme.accent}))`
                      : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  }}
                >
                  <span className="filter drop-shadow-lg">✨</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000"
                style={{
                  backgroundImage: selectedTheme
                    ? `linear-gradient(to right, rgb(${selectedTheme.primary}), rgb(${selectedTheme.secondary}), rgb(${selectedTheme.accent}))`
                    : 'linear-gradient(to right, #3b82f6, #0ea5e9, #06b6d4)'
                }}
              >
                Jūsų svetainė.
              </span>
              <br />
              <span className="text-slate-900">Jūsų spalvos.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {selectedTheme ? (
                <>
                  Puiku! Pasirinkote <strong>{selectedTheme.name}</strong> temą. 
                  Svetainė dabar visada atrodys būtent taip, kaip jūs norite.
                </>
              ) : (
                'Pasirinkite savo mėgstamiausią spalvą ir svetainė prisitaikys prie jūsų stiliaus.'
              )}
            </p>

            {/* Dynamic CTA */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button 
                className="group px-8 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: selectedTheme
                    ? `linear-gradient(135deg, rgb(${selectedTheme.primary}), rgb(${selectedTheme.accent}))`
                    : 'linear-gradient(135deg, #3b82f6, #06b6d4)'
                }}
              >
                <span className="flex items-center gap-2">
                  Pradėti projektą
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  borderWidth: '2px',
                  borderColor: selectedTheme ? `rgb(${selectedTheme.primary})` : '#3b82f6',
                  color: selectedTheme ? `rgb(${selectedTheme.primary})` : '#3b82f6'
                }}
              >
                Mūsų darbai
              </button>
            </div>

            {/* Feature cards with theme colors */}
            <div className="grid md:grid-cols-3 gap-6 pt-16">
              {[
                { icon: "🎨", title: "Jūsų Spalvos", desc: "Visada matote tai, kas jums patinka" },
                { icon: "💾", title: "Išsaugota", desc: "Jūsų pasirinkimas įsimenamas" },
                { icon: "⚡", title: "Instant", desc: "Keičiasi akimirksniu" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    borderColor: selectedTheme ? `rgba(${selectedTheme.primary}, 0.2)` : 'rgba(59, 130, 246, 0.2)',
                    background: selectedTheme ? `rgba(${selectedTheme.primary}, 0.02)` : 'rgba(59, 130, 246, 0.02)'
                  }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
