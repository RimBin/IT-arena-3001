"use client";
import { FC, useState, useEffect, useRef } from 'react';

const HeroSmartCity: FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      className="w-full min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center p-8 font-sans relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Top Navigation - Raised */}
        <div className="flex justify-between items-center mb-12">
          <div 
            className="bg-gray-300 rounded-full px-6 py-3 transition-all duration-300"
            style={{
              boxShadow: '4px 4px 8px #a0a0a0, -4px -4px 8px #ffffff',
              transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            }}
          >
            <span className="text-white font-semibold">🏛️ Nexus 3.0</span>
          </div>

          <div 
            className="bg-gray-800 rounded-full px-8 py-3 flex items-center gap-6 transition-all duration-300"
            style={{
              boxShadow: '4px 4px 8px #1a1a1a, -4px -4px 8px #505050',
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            }}
          >
            {['Home', 'Smart City', 'Energy Systems', 'Governance', 'Connected Public Spaces'].map((item, i) => (
              <button
                key={i}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            {['⚙️', '📍', '🔔', '👤'].map((icon, i) => (
              <button
                key={i}
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  boxShadow: '4px 4px 8px #1a1a1a, -4px -4px 8px #505050',
                }}
              >
                <span className="text-xl">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - Raised Cards */}
          <div className="col-span-3 space-y-6">
            
            {/* Support Card - Raised */}
            <div 
              className="bg-gray-800 rounded-3xl p-6 transition-all duration-300"
              style={{
                boxShadow: '6px 6px 12px #1a1a1a, -6px -6px 12px #505050',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <div className="flex items-center gap-2 text-xs text-white/50 mb-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
              <p className="text-white/60 text-xs mb-1">Ongoing</p>
              <p className="text-white font-semibold mb-3">Support</p>
              <p className="text-white text-5xl font-bold">2K</p>
            </div>

            {/* Streamline Card - Raised with Inner Pressed */}
            <div 
              className="bg-gray-800 rounded-3xl p-6 transition-all duration-300"
              style={{
                boxShadow: '6px 6px 12px #1a1a1a, -6px -6px 12px #505050',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <p className="text-white/60 text-xs mb-4">Streamline</p>
              <div 
                className="bg-gray-800 rounded-full w-32 h-32 mx-auto flex items-center justify-center relative"
                style={{
                  boxShadow: 'inset 4px 4px 8px #1a1a1a, inset -4px -4px 8px #505050',
                }}
              >
                <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#ffffff"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="220 352"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-white text-3xl font-bold">+25</p>
              </div>
            </div>

            {/* Communities Card - Raised with Inner Bar */}
            <div 
              className="bg-gray-800 rounded-3xl p-6 transition-all duration-300"
              style={{
                boxShadow: '6px 6px 12px #1a1a1a, -6px -6px 12px #505050',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏘️</span>
                <div>
                  <p className="text-white/60 text-xs">Connected</p>
                  <p className="text-white font-semibold">communities</p>
                </div>
              </div>
              <div 
                className="bg-gray-800 rounded-full h-2 mb-2"
                style={{
                  boxShadow: 'inset 4px 4px 8px #1a1a1a, inset -4px -4px 8px #505050',
                }}
              >
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-white to-gray-300"
                  style={{ width: '30%' }}
                />
              </div>
              <p className="text-white text-4xl font-bold mt-4">30%</p>
            </div>

          </div>

          {/* Main Content Area - Large Raised Card */}
          <div className="col-span-9">
            <div 
              className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[3rem] p-12 relative overflow-hidden transition-all duration-300 min-h-[600px] flex flex-col justify-between"
              style={{
                boxShadow: '10px 10px 20px #a0a0a0, -10px -10px 20px #ffffff',
                transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
              }}
            >
              {/* Title */}
              <div>
                <h1 className="text-white text-6xl font-bold mb-8 leading-tight">
                  Smart Living in a<br />Digital World
                </h1>
                
                {/* CTA Button - Raised */}
                <button
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-gray-300 rounded-full px-8 py-4 text-gray-800 font-medium flex items-center gap-2 transition-all duration-300"
                  style={{
                    boxShadow: hoveredCard === 0
                      ? 'inset 3px 3px 6px #a0a0a0, inset -3px -3px 6px #ffffff'
                      : '4px 4px 8px #a0a0a0, -4px -4px 8px #ffffff',
                    transform: hoveredCard === 0 ? 'scale(0.98)' : 'scale(1)',
                  }}
                >
                  Optimize city operations
                  <span>✏️</span>
                </button>
              </div>

              {/* Bottom Info Cards */}
              <div className="grid grid-cols-3 gap-4">
                
                {/* Left Card - Raised */}
                <div 
                  className="bg-white/10 backdrop-blur-[2px] rounded-3xl p-6 transition-all duration-300"
                  style={{
                    boxShadow: '4px 4px 8px #a0a0a0, -4px -4px 8px #ffffff',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-12 h-12 bg-[#9ba3af] rounded-full flex items-center justify-center"
                      style={{
                        boxShadow: '4px 4px 8px #7a8290, -4px -4px 8px #bcc4ce',
                      }}
                    >
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs mb-1">API Development</p>
                  <p className="text-white text-sm">
                    Welcome to SmartCity, where cutting-edge technology meets the modern city to create smarter, safer, and more efficient urban environments.
                  </p>
                </div>

                {/* Middle Card - Pressed In */}
                <div 
                  className="bg-white/5 backdrop-blur-[2px] rounded-3xl p-6 transition-all duration-300"
                  style={{
                    boxShadow: 'inset 4px 4px 8px #a0a0a0, inset -4px -4px 8px #ffffff',
                  }}
                >
                  {/* Empty card with inset shadow */}
                </div>

                {/* Right Card - Small Raised Circles */}
                <div className="flex flex-col gap-4">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                      style={{
                        boxShadow: '6px 6px 12px #a0a0a0, -6px -6px 12px #ffffff',
                      }}
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
