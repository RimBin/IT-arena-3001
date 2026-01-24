"use client";

import { BadgeCheck, Gauge, Layers, Target, LineChart, Headphones, ShieldCheck, Handshake } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: Target,
      title: "Tikslas prieš grožį",
      text: "Kiekvienas elementas turi funkciją: sumažinti kliūtis ir nukreipti į veiksmą. Dizainas = verslo rezultatai.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Gauge,
      title: "Greitis kaip standartas",
      text: "Optimizuojame branduolį, paveikslus ir scenarijus – 95+ įvertis tampa norma, ne tikslas.",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      icon: Layers,
      title: "Aiški informacijos architektūra",
      text: "Turinys pagal vartotojo ketinimą: pirmiausia vertė, tada detalės. Skaitymo ritmas ir hierarchija.",
      gradient: "from-amber-400 to-orange-600"
    },
    {
      icon: LineChart,
      title: "Matuojame, ne spėliojame",
      text: "Hipotezės, A/B testai, analitika. Sprendimai paremti duomenimis, o ne nuojauta.",
      gradient: "from-emerald-400 to-green-600"
    },
    {
      icon: Handshake,
      title: "Skaidrumas ir partnerystė",
      text: "Aiškūs terminai, etapai ir biudžetas. Bendra Slack erdvė, savaitinės demo, atviri skaičiai.",
      gradient: "from-indigo-400 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Greitas palaikymas",
      text: "Reaguojame per 1–4 valandas darbo metu, turite dedikuotą projekto vadovą ir aiškų komunikacijos kanalą.",
      gradient: "from-pink-400 to-rose-600"
    }
  ];

  return (
    <section className="relative py-20 bg-[#e8ecf4] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4fc] via-[#e8ecf4] to-[#dde3ef] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 px-4 py-2 y-neumo-inset y-pill mb-4">
            <BadgeCheck className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Kodėl Mes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Tai, ko Jums Reikia</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Esame ne šiaip kūrėjai – mes kuriame holistinę patirtį, kuri paverčia lankytojus klientais.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="p-8 y-neumo-surface rounded-3xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-slate-600">{r.text}</p>
              </div>
            );
          })}
        </div>

        {/* Risk reversal strip */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-sm text-slate-800 shadow-xl">
            <ShieldCheck className="w-5 h-5 text-green-600 inline-block mr-2" />
            30 dienų pinigų grąžinimo garantija
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-sm text-slate-800 shadow-xl">
            <LineChart className="w-5 h-5 text-purple-600 inline-block mr-2" />
            Konversijų gerinimo planas nuo 1 mėn.
          </div>
          <div className="p-5 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-sm text-slate-800 shadow-xl">
            <Handshake className="w-5 h-5 text-indigo-600 inline-block mr-2" />
            Aiškūs KPI ir bendras atsakomybės pasidalinimas
          </div>
        </div>
      </div>
    </section>
  );
}
