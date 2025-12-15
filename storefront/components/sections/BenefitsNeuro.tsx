"use client";

import { Brain, Rocket, ShieldCheck, Eye, Handshake, CheckCircle2, Star, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsNeuro() {
  const benefits = [
    {
      icon: Rocket,
      title: "Greitis ir konversijos",
      text: "95+ greičio įvertis, mažiau trukdžių, trumpesni keliai – daugiau užsakymų ir užklausų.",
      bullets: ["Greitas įkėlimas", "Aiškūs keliai iki tikslo", "Mažiau paspaudimų"],
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Eye,
      title: "Aiškumas ir paprastumas",
      text: "Be žargono, be triukšmo – tik tai, ko ieško lankytojas. Mažesnė kognityvinė apkrova = didesni rezultatai.",
      bullets: ["Skaitymo ritmas ir kontrastas", "Vienas aiškus veiksmas", "Prieinamumas visiems"],
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      icon: ShieldCheck,
      title: "Saugumas ir pasitikėjimas",
      text: "SSL, atsarginės kopijos, patikimos integracijos ir aiškus duomenų tvarkymas – pasitikėjimas nuo pirmo vizito.",
      bullets: ["Saugus ryšys", "Duomenų apsauga", "Stabili infrastruktūra"],
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Brain,
      title: "Neuromarketingo principai",
      text: "Autoritetas, socialinis įrodymas, rizikos panaikinimas ir aiški vertė – viskas sukurta veikti žmonių psichologijai.",
      bullets: ["Autoritetas ir patirtis", "Atsiliepimai ir skaičiai", "Pinigų grąžinimo garantija"],
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  const trust = [
    { icon: Users, label: "50+ projektų" },
    { icon: Star, label: "5.0 įvertinimas" },
    { icon: CheckCircle2, label: "95+ greitis" },
  ];

  return (
    <section className="relative py-20 bg-[#e8ecf4] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4fc] via-[#e8ecf4] to-[#dde3ef] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
    <div className="inline-flex items-center gap-2 px-4 py-2 y-neumo-inset y-pill mb-4">
            <Brain className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Nauda Jūsų Verslui</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Kodėl Klientai Renkasi Mus</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Orientuojamės į rezultatą: daugiau užklausų, pirkimų ir grįžtančių klientų. Dizainas ne dėl grožio, o dėl tikslo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
        <div key={i} className="p-8 y-neumo-surface rounded-3xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 mb-4">{b.text}</p>
                <ul className="space-y-2">
                  {b.bullets.map((x, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {trust.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 y-neumo-inset y-pill">
                <Icon className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-slate-700 font-medium">{t.label}</span>
              </div>
            );
          })}
        </div>

        {/* Risk reversal */}
        <div className="mt-10 text-center">
          <div className="inline-block px-6 py-4 rounded-2xl text-slate-800 bg-white/70 border border-white/80 backdrop-blur-sm shadow-xl">
            <span className="font-semibold">Be rizikos:</span> jei per pirmas 30 dienų nepamatysite vertės – grąžinsime pinigus.
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="md" className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> Rezervuok pokalbį</Button>
          <Button size="md" variant="outline">Gauk pasiūlymą</Button>
        </div>
      </div>
    </section>
  );
}
