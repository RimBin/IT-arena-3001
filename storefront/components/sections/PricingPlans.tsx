"use client";

import { Check, Sparkles, Shield, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPlans() {
  const plans = [
    {
      name: "Startas",
      price: "nuo 1 500 €",
      tagline: "Greitas startas mažam verslui",
      features: [
        "Vieno puslapio svetainė",
        "Prisitaikantis dizainas",
        "Pagrindinis paieškų optimizavimas",
        "Greitis 90+",
        "Paleidimas per 2–3 sav."
      ],
      cta: "Gauk pasiūlymą",
      gradient: "from-slate-200 to-slate-50",
      highlight: false
    },
    {
      name: "Augimas",
      price: "nuo 5 000 €",
      tagline: "Pilna svetainė su konversijų fokusu",
      features: [
        "Daugiau puslapių struktūra",
        "UX/UI prototipai",
        "95+ greitis ir SEO",
        "Integracijos (mokėjimai, CRM)",
        "Analitika ir konversijų planas"
      ],
      cta: "Rezervuok pokalbį",
      gradient: "from-purple-400 to-purple-600",
      highlight: true
    },
    {
      name: "Premium",
      price: "nuo 12 000 €",
      tagline: "Individualios sistemos ir automatizacija",
      features: [
        "Individualus dizainas ir biblioteka",
        "AI turinio modulis",
        "Sistemų integracijos",
        "A/B testai ir optimizacija",
        "Dedikuotas palaikymas"
      ],
      cta: "Susisiek dėl konsultacijos",
      gradient: "from-blue-400 to-cyan-600",
      highlight: false
    }
  ];

  return (
    <section className="relative py-20 bg-[#e8ecf4] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4fc] via-[#e8ecf4] to-[#dde3ef] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
               style={{ background: '#e8ecf4', boxShadow: 'inset 6px 6px 12px #c5cad5, inset -6px -6px 12px #ffffff' }}>
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Kainodara</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Pasirinkite tinkamiausią paketą</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Skaidriai, be paslėptų mokesčių. Pradėkite nuo to, ko reikia šiandien – plėskitės rytoj.</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div key={i} className={`relative p-8 rounded-3xl h-full transition-all duration-300 ${p.highlight ? 'text-white' : 'text-slate-800'} ${p.highlight ? '' : 'y-neumo-surface'}`}>
              {p.highlight && (
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${p.gradient}`} />
              )}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  {p.highlight ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <Shield className="w-5 h-5 text-slate-500" />
                  )}
                </div>
                <p className={`mb-6 ${p.highlight ? 'text-white/90' : 'text-slate-600'}`}>{p.tagline}</p>
                <div className="text-3xl font-extrabold mb-6">{p.price}</div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${p.highlight ? 'text-white' : 'text-purple-500'}`} />
                      <span className={p.highlight ? 'text-white' : 'text-slate-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button size="md" className="w-full">{p.cta}</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-8 text-slate-600 text-sm">
          Reikia kitokios apimties? Susisiekite – paruošime individualų pasiūlymą pagal jūsų tikslus.
        </div>
      </div>
    </section>
  );
}
