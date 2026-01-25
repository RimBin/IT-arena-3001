"use client";
import { FC, useState, useEffect } from 'react';

type ColorTheme = 'blue' | 'purple' | 'green' | 'orange';
type TimeOfDay = 'morning' | 'day' | 'evening' | 'night';

const colorThemes = {
  blue: {
    primary: '#3b82f6',
    secondary: '#06b6d4',
    accent: '#0ea5e9',
    light: '#dbeafe',
    bg: '#eff6ff',
  },
  purple: {
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#d946ef',
    light: '#f3e8ff',
    bg: '#faf5ff',
  },
  green: {
    primary: '#10b981',
    secondary: '#059669',
    accent: '#14b8a6',
    light: '#d1fae5',
    bg: '#ecfdf5',
  },
  orange: {
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c',
    light: '#ffedd5',
    bg: '#fff7ed',
  },
};

const HeroUltimate: FC = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('blue');
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
  const [blobPos, setBlobPos] = useState({ x: 50, y: 50 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const theme = colorThemes[colorTheme];

  // Time-based adaptation
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setTimeOfDay('morning');
      else if (hour >= 12 && hour < 17) setTimeOfDay('day');
      else if (hour >= 17 && hour < 21) setTimeOfDay('evening');
      else setTimeOfDay('night');
    };
    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('ultimate-theme') as ColorTheme;
    if (saved && colorThemes[saved]) setColorTheme(saved);
  }, []);


  // Organic blob animation
  useEffect(() => {
    const animateBlob = () => {
      setBlobPos({
        x: 50 + Math.sin(Date.now() / 3000) * 15,
        y: 50 + Math.cos(Date.now() / 2000) * 15,
      });
    };
    const interval = setInterval(animateBlob, 50);
    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (newTheme: ColorTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem('ultimate-theme', newTheme);
  };

  const timeGreeting = {
    morning: '🌅 Good Morning',
    day: '☀️ Good Day',
    evening: '🌆 Good Evening',
    night: '🌙 Good Night',
  };

  const timeEmoji = {
    morning: '🌅',
    day: '☀️',
    evening: '🌆',
    night: '🌙',
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Organic animated blob background */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${theme.primary}, ${theme.secondary})`,
          left: `${blobPos.x}%`,
          top: `${blobPos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="w-full max-w-md mx-auto relative z-10">
        
        {/* Color Theme Selector - Top Right */}
        <div className="absolute top-0 right-0 flex gap-2 mb-6">
          {(Object.keys(colorThemes) as ColorTheme[]).map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeChange(theme)}
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-110"
              style={{ 
                backgroundColor: colorThemes[theme].primary,
                transform: colorTheme === theme ? 'scale(1.2)' : 'scale(1)',
              }}
              title={`${theme} theme`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div>
          {/* Header Card - Neumorphic style */}
          <div 
            className="rounded-3xl p-6 mb-6 transition-all duration-300"
            style={{
              backgroundColor: theme.bg,
              boxShadow: `12px 12px 24px ${theme.light}, -12px -12px 24px #ffffff`,
            }}
          >
            <p className="text-slate-500 text-sm mb-1">{timeGreeting[timeOfDay]}</p>
            <p className="text-slate-400 text-xs mb-4">
              {timeOfDay === 'morning' && "Start your day with fresh energy ⚡"}
              {timeOfDay === 'day' && "Keep pushing forward, you're doing great! 💪"}
              {timeOfDay === 'evening' && "Time to wind down and reflect 🌅"}
              {timeOfDay === 'night' && "Rest well, tomorrow is a new day 🌟"}
            </p>
            
            {/* Energy Widget - Pressed In */}
            <div 
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{
                backgroundColor: theme.bg,
                boxShadow: `inset 6px 6px 12px ${theme.light}, inset -6px -6px 12px #ffffff`,
              }}
            >
              <div className="text-4xl">{timeEmoji[timeOfDay]}</div>
              <div>
                <p className="text-3xl font-light text-slate-700">27 <span className="text-sm" style={{ color: theme.primary }}>kWh</span></p>
                <p className="text-xs text-slate-400">Power usage for today</p>
              </div>
            </div>
          </div>

          {/* Room Cards Grid - Hoverable with color change */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: '🛁', title: 'Bathroom', devices: '4 devices' },
              { icon: '🛋️', title: 'Living room', devices: '2 devices' },
            ].map((card, i) => (
              <button
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="rounded-3xl p-6 transition-all duration-300 text-left"
                style={{
                  backgroundColor: hoveredCard === i ? theme.primary : theme.bg,
                  boxShadow: hoveredCard === i
                    ? `inset 8px 8px 16px ${theme.light}, inset -8px -8px 16px #ffffff`
                    : `12px 12px 24px ${theme.light}, -12px -12px 24px #ffffff`,
                }}
              >
                <div 
                  className="text-4xl mb-2 transition-transform duration-300"
                  style={{
                    transform: hoveredCard === i ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  {card.icon}
                </div>
                <h3 
                  className="font-semibold mb-1 transition-colors duration-300"
                  style={{ color: hoveredCard === i ? '#ffffff' : theme.primary }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-xs transition-colors duration-300"
                  style={{ color: hoveredCard === i ? 'rgba(255,255,255,0.8)' : '#94a3b8' }}
                >
                  {card.devices}
                </p>
              </button>
            ))}
          </div>

          {/* Temperature Control Card - Large Raised */}
          <div 
            className="rounded-3xl p-8 mb-6 transition-all duration-300"
            style={{
              backgroundColor: theme.bg,
              boxShadow: `12px 12px 24px ${theme.light}, -12px -12px 24px #ffffff`,
            }}
          >
            {/* Room Controls - Small Raised Buttons */}
            <div className="flex justify-center gap-3 mb-8">
              {[
                { icon: '🔥', label: 'temp' },
                { icon: '💡', label: 'light' },
                { icon: '📶', label: 'internet' },
                { icon: '➕', label: 'add' }
              ].map((item, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setHoveredCard(i + 10)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-xs text-slate-400 transition-all"
                  style={{
                    backgroundColor: hoveredCard === i + 10 ? theme.primary : theme.bg,
                    boxShadow: hoveredCard === i + 10
                      ? `inset 6px 6px 12px ${theme.light}, inset -6px -6px 12px #ffffff`
                      : `6px 6px 12px ${theme.light}, -6px -6px 12px #ffffff`,
                    color: hoveredCard === i + 10 ? '#ffffff' : '#94a3b8',
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                </button>
              ))}
            </div>

            {/* Temperature Circle - Pressed In with gradient */}
            <div className="flex items-center justify-center mb-6">
              <div 
                className="w-56 h-56 rounded-full flex items-center justify-center relative"
                style={{
                  backgroundColor: theme.bg,
                  boxShadow: `inset 12px 12px 24px ${theme.light}, inset -12px -12px 24px #ffffff`,
                }}
              >
                {/* Gradient Ring */}
                <svg className="absolute inset-0 w-56 h-56 -rotate-90">
                  <circle
                    cx="112"
                    cy="112"
                    r="100"
                    stroke={theme.primary}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="400 628"
                    className="transition-all duration-300"
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Center Temperature Display */}
                <div className="text-center z-10">
                  <p className="text-6xl font-light text-slate-600">24.0°C</p>
                </div>
              </div>
            </div>

            {/* Temperature Info */}
            <div className="flex justify-between text-sm text-slate-400 mb-4">
              <span>Current temperature</span>
              <span>Turn on / off</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-light text-slate-600">19.5 °C</span>
              <span className="text-slate-400">27°</span>
            </div>

            {/* Set Temperature Button - Raised */}
            <button 
              onMouseEnter={() => setHoveredCard(20)}
              onMouseLeave={() => setHoveredCard(null)}
              className="w-full rounded-2xl py-4 text-white font-medium transition-all"
              style={{
                backgroundColor: hoveredCard === 20 ? theme.secondary : theme.primary,
                boxShadow: hoveredCard === 20
                  ? `0 15px 35px ${theme.primary}60`
                  : `8px 8px 16px ${theme.light}, -8px -8px 16px #ffffff`,
              }}
            >
              Set temperature
            </button>
          </div>

          {/* Quick Access Info - Slightly Raised */}
          <div 
            className="rounded-3xl p-6 transition-all duration-300"
            style={{
              backgroundColor: theme.bg,
              boxShadow: `8px 8px 16px ${theme.light}, -8px -8px 16px #ffffff`,
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: theme.primary }}>
              Quick remote access
            </h3>
            <p className="text-slate-500 text-sm">
              Backup is to get a fast access to your outlets remote control
            </p>
          </div>
        </div>

        {/* Floating info badge - bottom left */}
        <div 
          className="absolute bottom-0 left-0 rounded-2xl px-4 py-2 text-xs"
          style={{
            backgroundColor: theme.bg,
            boxShadow: `6px 6px 12px ${theme.light}, -6px -6px 12px #ffffff`,
            color: theme.primary,
          }}
        >
          ✨ Theme: <strong>{colorTheme}</strong> | Time: <strong>{timeOfDay}</strong>
        </div>
      </div>
    </div>
  );
};

export default HeroUltimate;
