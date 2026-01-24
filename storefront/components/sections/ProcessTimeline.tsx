"use client";

import { MessageSquare, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Tyrimai ir Strategija",
      duration: "1-2 savaitės",
      description: "Susipažįstame su jūsų verslu, tiksline auditorija, konkurentais. Suformuojame techninius reikalavimus ir projekto apimtį.",
      deliverables: ["Projekto aprašymas", "Techninė specifikacija", "Laiko planavimas", "Biudžetas"],
      color: "purple"
    },
    {
      icon: Palette,
      title: "Dizainas ir Prototipai",
      duration: "2-3 savaitės",
      description: "Vartotojo sąsajos dizainas, interaktyvūs prototipai, vartotojo kelio schema. Neribotos pataisos iki tobulo rezultato.",
      deliverables: ["Struktūra", "Sąsajos dizainas", "Prototipas", "Dizaino sistema"],
      color: "blue"
    },
    {
      icon: Code,
      title: "Kūrimas",
      duration: "4-8 savaitės",
      description: "Švarus kodas su griežtu tipavimu, komponentų architektūra, sąsajų integracijos, testavimas. Savaitinės demonstracijos.",
      deliverables: ["Naudotojo pusė", "Serverio pusė", "Integracijos", "Testai"],
      color: "green"
    },
    {
      icon: Rocket,
      title: "Paleidimas ir Optimizavimas",
      duration: "1 savaitė",
      description: "Testavimas, greičio optimizavimas, paieškų nustatymai, saugaus ryšio konfigūracija. Sklandus paleidimas.",
      deliverables: ["Paleidimas", "Saugumas/Tinklas", "Paieškų nustatymai", "Analizė"],
      color: "amber"
    },
    {
      icon: CheckCircle2,
      title: "Palaikymas ir Augimas",
      duration: "Nuolatinis",
      description: "Nuolatinė stebėsena, reguliarūs atnaujinimai, veikimo ataskaitos, testavimas. Jūsų sėkmė – mūsų prioritetas.",
      deliverables: ["Stebėsena", "Atnaujinimai", "Ataskaitos", "Plėtimasis"],
      color: "red"
    }
  ];

  const colorMap: Record<string, { gradient: string; border: string; text: string }> = {
    purple: { gradient: "from-purple-400 to-purple-600", border: "border-purple-500", text: "text-purple-500" },
    blue: { gradient: "from-blue-400 to-cyan-600", border: "border-blue-500", text: "text-blue-500" },
    green: { gradient: "from-green-400 to-emerald-600", border: "border-green-500", text: "text-green-500" },
    amber: { gradient: "from-amber-400 to-orange-500", border: "border-amber-500", text: "text-amber-500" },
    red: { gradient: "from-red-400 to-pink-600", border: "border-red-500", text: "text-red-500" }
  };

  return (
    <section className="relative py-20 bg-[#e8ecf4] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5cad5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#c5cad5_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{
                 background: '#e8ecf4',
                 boxShadow: 'inset 6px 6px 12px #c5cad5, inset -6px -6px 12px #ffffff'
               }}>
            <Rocket className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Kaip Dirbame</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Aiškus Procesas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            5 žingsniai nuo idėjos iki production. Skaidrus timeline, weekly updates, jokių netikėtumų.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-blue-300 to-pink-300 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="p-8 rounded-3xl transition-all duration-300"
                         style={{
                           background: '#e8ecf4',
                           boxShadow: '10px 10px 20px #c5cad5, -10px -10px 20px #ffffff'
                         }}>
                      {/* Step Number */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          <p className="text-sm text-slate-500">{step.duration}</p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1"
                            style={{
                              background: '#e8ecf4',
                              boxShadow: 'inset 3px 3px 6px #c5cad5, inset -3px -3px 6px #ffffff'
                            }}
                          >
                            <CheckCircle2 className={`w-3 h-3 ${colors.text}`} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon (desktop only) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-100 items-center justify-center"
                       style={{
                         boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                       }}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Spacer (desktop) */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Vidutinė projekto trukmė: <span className="font-bold text-slate-900">8-12 savaičių</span>
          </p>
          <Button size="lg">Pradėkime Projektą →</Button>
        </div>
      </div>
    </section>
  );
}
