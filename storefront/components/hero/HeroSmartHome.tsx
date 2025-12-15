"use client";
import { FC, useState } from 'react';

const RoomCard: FC<{ icon: string; name: string; devices: number; isActive: boolean }> = ({ icon, name, devices, isActive }) => (
  <div className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border transition-all cursor-pointer ${
    isActive ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-slate-700/50'
  }`}>
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-white font-semibold">{name}</h3>
    <p className="text-slate-400 text-sm">{devices} devices</p>
  </div>
);

const DeviceControl: FC<{ icon: string; name: string; status: string; color: string }> = ({ icon, name, status, color }) => (
  <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
    <div className="text-2xl">{icon}</div>
    <div className="flex-1">
      <p className="text-white text-sm font-medium">{name}</p>
      <p className="text-slate-400 text-xs">{status}</p>
    </div>
    <div className={`w-10 h-6 rounded-full ${color} flex items-center px-1`}>
      <div className="w-4 h-4 bg-white rounded-full shadow-lg ml-auto"></div>
    </div>
  </div>
);

const HeroSmartHome: FC = () => {
  const [temperature, setTemperature] = useState(18);
  const [selectedRoom, setSelectedRoom] = useState('Hall');

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">🏠</span>
            <span className="text-white font-semibold">Home</span>
            <button className="ml-2 text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Easy way to do everything you need</h1>
          <p className="text-slate-400">for your comfort</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl mb-6">
          
          {/* Recently Used Rooms */}
          <div className="mb-6">
            <h2 className="text-blue-400 text-sm font-semibold mb-3">Recently used</h2>
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <span className="text-2xl">🛋️</span>
              </button>
              <button className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <span className="text-2xl">🚪</span>
              </button>
              <button className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <span className="text-2xl">🛏️</span>
              </button>
            </div>
          </div>

          {/* Hall Section */}
          <div className="mb-6">
            <h3 className="text-blue-400 text-sm font-semibold mb-3">Hall</h3>
            <div className="space-y-3">
              <DeviceControl icon="💡" name="Lamp" status="Living room" color="bg-cyan-500" />
              <DeviceControl icon="❄️" name="Air conditioner" status="22°" color="bg-slate-600" />
              <DeviceControl icon="🚪" name="Door" status="Locked" color="bg-pink-500" />
            </div>
          </div>

          {/* Temperature Control */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-center mb-4">
              <button 
                onClick={() => setTemperature(Math.max(10, temperature - 1))}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
              >
                -
              </button>
              <div className="mx-6 relative">
                <div className="w-24 h-24 rounded-full border-8 border-slate-700 flex items-center justify-center relative">
                  <svg className="absolute inset-0 w-24 h-24 -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(temperature / 30) * 251} 251`}
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-center z-10">
                    <svg className="w-6 h-6 text-cyan-400 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setTemperature(Math.min(30, temperature + 1))}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
              >
                +
              </button>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-1">{temperature}°</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-slate-400">16°</span>
                <div className="w-32 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${((temperature - 16) / 14) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400">30°</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="bg-white/5 backdrop-blur-xl rounded-full p-3 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center justify-around">
            <button className="p-3 rounded-full bg-blue-500 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
            <button className="p-3 rounded-full text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-3 rounded-full text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="p-3 rounded-full text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSmartHome;
