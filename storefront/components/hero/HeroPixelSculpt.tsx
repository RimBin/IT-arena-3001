"use client";
import React from "react";
import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroPixelSculpt: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8F9FB] via-white to-[#F5F6FA] px-6 py-20 sm:px-12 lg:px-16">
      {/* Floating orbs background with animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 animate-float-slow rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute right-[15%] bottom-[25%] h-80 w-80 animate-float-medium rounded-full bg-pink-200/25 blur-3xl" />
        <div className="absolute left-[45%] top-[10%] h-48 w-48 animate-float-fast rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Top header section (exact layout requested) */}
        <section className="w-full max-w-[1400px] mx-auto">
          <div className="mt-10 mb-[40px]">
            <h1 className="text-[clamp(72px,8vw,120px)] leading-[0.95] font-extrabold tracking-[-0.02em] text-slate-900">
              Skaitmeniniai ir AI<br />sprendimai
            </h1>
            <h1 className="text-[clamp(72px,8vw,120px)] leading-[0.95] font-extrabold tracking-[-0.02em] bg-gradient-to-r from-[#C59AEA] via-[#B27BFF] to-[#A78BFA] bg-clip-text text-transparent">
              naujos kartos verslui.
            </h1>
          </div>

          <div className="flex items-start gap-[40px] mb-[40px] max-w-[1000px]">
            <div className="flex items-center gap-3 text-[15px] text-[#444] min-w-[140px]">
              <img
                src="https://icon-library.com/images/web-icon-png/web-icon-png-27.jpg"
                className="w-[18px] opacity-70"
                alt="Web icon"
              />
              <span>Performance First</span>
            </div>
            <p className="text-[15px] text-[#3A3A3A] leading-relaxed max-w-[460px]">
              Kuriame verslo sistemas, el. parduotuves, svetaines ir automatizuotas AI bei reklamos valdymo sistemas, kurios
              didina pardavimus ir efektyvina procesus.
            </p>
            <Button size="md">Susisiekti</Button>
          </div>

            <div className="flex items-center gap-6 text-[15px] text-slate-400 mb-[50px]">
            <span>SEO + LLM</span>
            <span aria-hidden>•</span>
            <span>E‑komercija</span>
            <span aria-hidden>•</span>
            <span>AI sprendimai</span>
          </div>
        </section>
        {/* end top header section */}

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side - CTA card */}
          <div className="flex flex-col justify-end space-y-8">
            {/* Main CTA text */}
            <div className="space-y-6">
              <h3 className="text-[clamp(32px,5vw,52px)] font-bold leading-tight text-slate-900">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Prisijunk</span> dabar ir paversk savo svajones realybe
              </h3>
              <p className="max-w-md text-lg leading-relaxed text-slate-600">
                Mūsų nuoseklus gidas padės tau atskleisti kūrybiškumą ir pradėti kurti jau šiandien
              </p>
              <Button size="lg">Pradėkime!</Button>
            </div>
          </div>

          {/* Right side - Course cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 - 3D Modeling */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all duration-500 hover:shadow-[0_28px_60px_rgba(139,92,246,0.22)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-50">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {/* 3D visual placeholder */}
                  <div className="relative h-full w-full">
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-60 blur-xl" />
                    <div className="absolute left-1/4 top-1/3 h-24 w-24 rounded-2xl bg-purple-400/80 shadow-2xl backdrop-blur-sm" style={{ transform: "rotate(-15deg)" }} />
                    <div className="absolute bottom-1/4 right-1/4 h-20 w-20 rounded-full bg-pink-300/70 shadow-xl" />
                    <div className="absolute right-1/3 top-1/2 h-16 w-16 rounded-xl bg-purple-300/60" style={{ transform: "rotate(25deg)" }} />
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>#3D modeliavimo pagrindai</span>
                  <span>•</span>
                  <span>#pradedantiesiems</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">Įvadas į 3D modeliavimą</h4>
              </div>
            </div>

            {/* Card 2 - Architektūrinė vizualizacija */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(251,146,60,0.15)] transition-all duration-500 hover:shadow-[0_28px_60px_rgba(251,146,60,0.22)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-100 to-orange-50">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  {/* Architectural visual placeholder */}
                  <div className="relative h-full w-full">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-50 blur-2xl" />
                    <div className="absolute left-1/3 top-1/4 h-32 w-2 bg-gradient-to-b from-amber-400 to-orange-300 shadow-xl" />
                    <div className="absolute left-1/2 top-1/3 h-28 w-2 bg-gradient-to-b from-orange-300 to-amber-400 shadow-xl" />
                    <div className="absolute right-1/3 top-1/4 h-36 w-2 bg-gradient-to-b from-amber-500 to-orange-400 shadow-xl" />
                    <div className="absolute bottom-1/4 left-1/4 right-1/4 h-2 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>#architektūrinė vizualizacija</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">Architektūrinė vizualizacija</h4>
              </div>
            </div>

            {/* Card 3 - Game Design (spans bottom) */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(236,72,153,0.15)] transition-all duration-500 hover:shadow-[0_28px_60px_rgba(236,72,153,0.22)] sm:col-span-2">
              <div className="relative aspect-[16/7] overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Game design visual placeholder */}
                  <div className="relative h-full w-full">
                    <div className="absolute left-[20%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-70 blur-xl" />
                    <div className="absolute right-[25%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-60 blur-xl" />
                    <div className="absolute left-1/4 top-1/3 h-20 w-20 rounded-xl bg-pink-300/80 shadow-2xl" style={{ transform: "rotate(-20deg)" }} />
                    <div className="absolute right-1/3 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-purple-400/70 shadow-xl" />
                    <div className="absolute bottom-1/3 left-1/2 h-12 w-12 -translate-x-1/2 rounded-lg bg-blue-300/60" style={{ transform: "rotate(15deg)" }} />
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>#2024 tendencija</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">Žaidimų dizaino pagrindai</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPixelSculpt;

