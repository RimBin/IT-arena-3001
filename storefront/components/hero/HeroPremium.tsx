"use client";
import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroPremium: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-amber-500/30">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] h-[600px] w-[600px] rounded-full bg-amber-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        {/* Top Label */}
        <div className="mb-8 flex items-center justify-center lg:justify-start">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-medium tracking-widest uppercase text-amber-100/80">
              Premium Web Solutions
            </span>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
              Skaitmeninė <br />
              <span className="bg-gradient-to-r from-amber-200 via-orange-100 to-white bg-clip-text text-transparent">
                Elegancija
              </span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 lg:mx-0 mx-auto">
              Kuriame ne tik svetaines, bet ir skaitmenines patirtis. 
              Aukščiausios klasės dizainas, sujungtas su moderniausiomis technologijomis, 
              kad jūsų verslas dominuotų rinkoje.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 min-w-[180px] rounded-full bg-white text-black hover:bg-gray-200 font-medium text-base transition-all duration-300"
              >
                Pradėti projektą
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="h-14 min-w-[180px] rounded-full border border-white/10 text-white hover:bg-white/5 hover:text-white font-medium text-base transition-all duration-300 group"
              >
                Mūsų darbai
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 lg:justify-start">
               {/* Placeholder logos */}
               <div className="h-8 w-24 bg-white/20 rounded animate-pulse"></div>
               <div className="h-8 w-24 bg-white/20 rounded animate-pulse delay-75"></div>
               <div className="h-8 w-24 bg-white/20 rounded animate-pulse delay-150"></div>
            </div>
          </div>

          {/* Right Visual - Glassmorphism Cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-full perspective-1000">
              {/* Card 1 */}
              <div className="absolute top-10 left-10 z-20 h-[400px] w-[320px] rotate-[-6deg] rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <div className="h-full w-full overflow-hidden rounded-2xl bg-black/20 p-4">
                   <div className="h-32 w-full rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20"></div>
                   <div className="mt-4 space-y-2">
                     <div className="h-4 w-3/4 rounded bg-white/10"></div>
                     <div className="h-4 w-1/2 rounded bg-white/10"></div>
                   </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute top-20 right-10 z-10 h-[380px] w-[300px] rotate-[12deg] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-6">
                 <div className="flex h-full flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/10"></div>
                        <div className="space-y-1">
                          <div className="h-3 w-20 rounded bg-white/20"></div>
                          <div className="h-2 w-12 rounded bg-white/10"></div>
                        </div>
                      </div>
                      <div className="h-24 rounded-xl bg-white/5 border border-white/5"></div>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-serif text-white/20">01</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPremium;
