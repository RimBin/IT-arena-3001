"use client";
import React, { useState } from "react";

// Neumorphic + glassmorphism settings panel with capsule tabs and under-glow accents
const shadowRaised = "8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff";
const shadowInset = "inset 6px 6px 12px #c5c8d0, inset -6px -6px 12px #ffffff";

const TabButton: React.FC<{
  label: string;
  active?: boolean;
  glow?: "blue" | "amber" | "pink";
  onClick?: () => void;
}> = ({ label, active, glow = "blue", onClick }) => {
  const glowColor =
    glow === "blue"
      ? "from-sky-400/70 via-sky-300/50 to-transparent"
      : glow === "amber"
      ? "from-amber-400/70 via-amber-300/50 to-transparent"
      : "from-pink-400/70 via-pink-300/50 to-transparent";

  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-5 py-2 text-[14px] font-semibold transition-colors ${
        active ? "text-white" : "text-slate-800"
      }`}
      style={{
        background: active ? "#141a22" : "#e6e9f0",
        boxShadow: active ? shadowRaised : shadowRaised,
      }}
    >
      {/* under-glow */}
      <span
        aria-hidden
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[10px] w-[52%] blur-md rounded-full bg-gradient-to-b ${glowColor}`}
      />
      {label}
    </button>
  );
};

const Row: React.FC<{ label: string; icon?: React.ReactNode }> = ({ label, icon }) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-slate-700">{label}</span>
    {icon}
  </div>
);

const LockIcon = () => (
  <span
    className="grid place-items-center w-7 h-7 rounded-full text-slate-700 bg-[#e6e9f0]"
    style={{ boxShadow: shadowRaised }}
  >
    512
  </span>
);

const ToggleIcon = () => (
  <span
    className="grid place-items-center w-7 h-7 rounded-full text-slate-700 bg-[#e6e9f0]"
    style={{ boxShadow: shadowRaised }}
  >
    513
  </span>
);

const NeumoTabsPanel: React.FC = () => {
  const [tab, setTab] = useState<0 | 1 | 2>(1);

  return (
    <div className="w-full max-w-[720px] mx-auto">
      {/* Tabs */}
      <div className="flex items-center gap-3 justify-center mb-[clamp(12px,2.4vw,20px)]">
        <TabButton label="Personal" glow="blue" active={tab === 0} onClick={() => setTab(0)} />
        <TabButton label="Security" glow="amber" active={tab === 1} onClick={() => setTab(1)} />
        <TabButton label="Notifications" glow="pink" active={tab === 2} onClick={() => setTab(2)} />
      </div>

      {/* Panel */}
      <div
        className="relative rounded-[22px] p-[clamp(12px,2vw,20px)] bg-[#ebedf3]"
        style={{ boxShadow: shadowRaised }}
      >
        <div
          className="rounded-[18px] p-[clamp(12px,2vw,18px)] bg-white/60 backdrop-blur [border:1px_solid_rgba(255,255,255,0.65)]"
          style={{ boxShadow: shadowRaised }}
        >
          <Row label={tab === 0 ? "Sistertion" : tab === 1 ? "Authentication" : "Mentions"} icon={<LockIcon />} />
          <div className="h-px bg-slate-300/40 my-2" />
          <Row label={tab === 0 ? "Conguation" : tab === 1 ? "2FA" : "Push"} icon={<ToggleIcon />} />

          {/* Footer strip */}
          <div
            className="mt-3 rounded-[14px] px-4 py-3 grid grid-cols-3 text-center text-slate-700 bg-[#e6e9f0]"
            style={{ boxShadow: shadowInset }}
          >
            <span className="truncate">Sonnation</span>
            <span className="truncate">Neletricaltation</span>
            <span className="truncate">Hetvition</span>
          </div>
        </div>

        {/* Bottom center glow */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-3 w-24 rounded-full blur-md bg-amber-400/70" />
      </div>
    </div>
  );
};

export default NeumoTabsPanel;
