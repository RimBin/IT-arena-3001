"use client";
import { useState } from "react";
import HeroOrganic from "@/components/hero/HeroOrganic";
import HeroMinimal from "@/components/hero/HeroMinimal";
import HeroSpatial from "@/components/hero/HeroSpatial";
import HeroAdaptive from "@/components/hero/HeroAdaptive";
import HeroAdaptiveBrand from "@/components/hero/HeroAdaptiveBrand";
import HeroStrategic from "@/components/hero/HeroStrategic";
import HeroNeumorphic from "@/components/hero/HeroNeumorphic";
import HeroDashboard from "@/components/hero/HeroDashboard";
import HeroSmartHome from "@/components/hero/HeroSmartHome";
import HeroNeumorphicTrue from "@/components/hero/HeroNeumorphicTrue";
import HeroUltimate from "@/components/hero/HeroUltimate";
import HeroSmartCity from "@/components/hero/HeroSmartCity";
import HeroGlow from "@/components/hero/HeroGlow";

type HeroComponentType = 'minimal' | 'organic' | 'spatial' | 'adaptive' | 'adaptive-brand' | 'strategic' | 'neumorphic' | 'dashboard' | 'smarthome' | 'neumorphic-real' | 'ultimate' | 'smartcity' | 'glow';

interface Hero {
  id: HeroComponentType;
  name: string;
  component: React.FC;
  description: string;
}

const heroes: Hero[] = [
  { id: 'organic', name: "Organic", component: HeroOrganic, description: "Biomimicry & natural shapes, 2027 style" },
  { id: 'minimal', name: "Minimal", component: HeroMinimal, description: "Regenerative simplicity, less is more" },
  { id: 'spatial', name: "Spatial", component: HeroSpatial, description: "3D depth & spatial computing era" },
  { id: 'adaptive', name: "Adaptive", component: HeroAdaptive, description: "AI-powered personalization & context-aware" },
  { id: 'adaptive-brand', name: "Your Brand", component: HeroAdaptiveBrand, description: "🔥 User picks color, brand adapts forever" },
  { id: 'strategic', name: "Strategic", component: HeroStrategic, description: "Data-driven KPIs with premium storytelling" },
  { id: 'neumorphic', name: "Neumorphic", component: HeroNeumorphic, description: "🏙️ Smart city UI with glassmorphism & 3D depth" },
  {
    id: 'dashboard',
    name: 'Dashboard',
    component: HeroDashboard,
    description: "Informacinis skydelis, apjungiantis projekto metrikas, užduotis ir būseną vienoje vietoje.",
  },
  {
    id: 'smarthome',
    name: 'Smart Home',
    component: HeroSmartHome,
    description: "🏠 Išmaniųjų namų valdymo sąsaja su temperatūros kontrole ir įrenginių valdymu.",
  },
  {
    id: 'neumorphic-real',
    name: 'Neumorphic 3D',
    component: HeroNeumorphicTrue,
    description: "🎨 Tikras neumorphism: įspausti ir iškilę elementai su minkštais šešėliais.",
  },
  {
    id: 'ultimate',
    name: '🌟 ULTIMATE',
    component: HeroUltimate,
    description: "🔥 VISKAS VIENAME: Neumorphic + Spalvų pasirinkimas + Laikas + Parallax + Organic blob + Hover efektai + Clean design!",
  },
  {
    id: 'smartcity',
    name: 'Smart City',
    component: HeroSmartCity,
    description: "🏙️ Smart City UI su tikrais neumorphic šešėliais - iškilę ir įspausti elementai, subtilus parallax.",
  }
  ,
  {
    id: 'glow',
    name: 'Glow Neon',
    component: HeroGlow,
    description: "Neon/Glow – originalus event stiliaus hero, perkeltas į showcase.",
  }
];

const HeroShowcasePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveHero = heroes[activeIndex].component;

  return (
    <div className="min-h-screen">
      {/* Selector bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-slate-900">Hero Showcase 2027</span>
            </div>
            <div className="flex gap-2">
              {heroes.map((hero, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    i === activeIndex
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {hero.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2 text-sm text-slate-500">
            {heroes[activeIndex].description}
          </div>
        </div>
      </div>

      {/* Active hero */}
      <div className="transition-all duration-500">
        <ActiveHero />
      </div>

      {/* Info panel */}
      <div className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2027 Design Trends</h2>
          <div className="grid md:grid-cols-7 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-semibold text-slate-900 mb-2">Organic UI</h3>
              <p className="text-sm text-slate-600">Biomimicry, natural curves, living interfaces</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-slate-900 mb-2">Minimalism 2.0</h3>
              <p className="text-sm text-slate-600">Intentional simplicity, regenerative design</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-slate-900 mb-2">Spatial Computing</h3>
              <p className="text-sm text-slate-600">3D layers, depth perception, WebXR ready</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-slate-900 mb-2">AI Personalization</h3>
              <p className="text-sm text-slate-600">Context-aware, adaptive, hyper-personal</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-slate-900 mb-2">User-Owned Branding</h3>
              <p className="text-sm text-slate-600">Let users choose their own brand colors</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-slate-900 mb-2">Strategic CX</h3>
              <p className="text-sm text-slate-600">KPIs, analytics layers, measurable storytelling</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="font-semibold text-slate-900 mb-2">Glassmorphism</h3>
              <p className="text-sm text-slate-600">Frosted glass, depth, neumorphic interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroShowcasePage;
