"use client";

import { Globe, ShoppingCart, Sparkles, Code2, Smartphone, Shield, Factory, MessageSquareText, Calculator, Workflow } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Globe,
      title: "Internetinių Svetainių Kūrimas",
      description: "Modernios programos su 95+ greičio įvertinimu. Paieškoms optimizuota, serverio pusėje generuojama.",
      features: ["Moderni architektūra", "Reakcinė sąsaja", "Griežtas tipavimas", "Greita stilizacija"],
      color: "purple",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Elektroninės Parduotuvės",
      description: "Pilnai pritaikytos parduotuvės su individualiu dizainu, mokėjimų sistema, prekių valdymas.",
      features: ["Prekybos sistema", "Mokėjimai", "Atsiskaitymas", "Analizė"],
      color: "amber",
      gradient: "from-amber-400 to-orange-600"
    },
    {
      icon: Factory,
      title: "Gamybos Valdymo Programos",
      description: "Individualios gamybos planavimo sistemos, atsargų valdymas, užsakymų sekimas, darbuotojų kontrolė.",
      features: ["Gamybos planavimas", "Atsargų valdymas", "Užsakymų sekimas", "Ataskaitos"],
      color: "slate",
      gradient: "from-slate-400 to-slate-600"
    },
    {
      icon: MessageSquareText,
      title: "Pokalbių Robotai",
      description: "Dirbtinio intelekto pokalbių robotai klientų aptarnavimui, automatinis atsakymas, integracija su svetaine ir socialiniais tinklais.",
      features: ["Kalbos modeliai", "Nuolatinis mokymasis", "Daugiakalbis", "Integracija"],
      color: "cyan",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Buhalterinės Apskaitos Programos",
      description: "Individualios apskaitos sistemos, sąskaitų generavimas, mokesčių valdymas, finansinės ataskaitos, integracija su banku.",
      features: ["Sąskaitų sistema", "Mokesčiai", "Ataskaitos", "Banko sąsaja"],
      color: "emerald",
      gradient: "from-emerald-400 to-green-600"
    },
    {
      icon: Workflow,
      title: "Sistemų Integracijos",
      description: "Įvairių sistemų sujungimas į vieną ekosistemą, automatinis duomenų perdavimas, sąsajų kūrimas, verslo procesų automatizavimas.",
      features: ["Sąsajų kūrimas", "Automatizavimas", "Duomenų sinchronizacija", "Verslo logika"],
      color: "indigo",
      gradient: "from-indigo-400 to-purple-600"
    },
    {
      icon: Sparkles,
      title: "Dirbtinis Intelektas ir Optimizavimas",
      description: "Automatinis turinio kūrimas su dirbtinio intelekto pagalba, paieškų optimizacija, duomenų analizė.",
      features: ["Kalbos modeliai", "Automatinis turinys", "Paieškų gerinimas", "Semantinė paieška"],
      color: "blue",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobilusis Dizainas",
      description: "Prisitaikantis dizainas, progresyvios programos, natūrali patirtis mobiliuose įrenginiuose.",
      features: ["Progresyvi programa", "Prisitaikantis", "Jutiklinis valdymas", "Veikia neprisijungus"],
      color: "green",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Saugumas ir Priežiūra",
      description: "Saugus ryšys, reguliarūs atnaujinimai, automatinės atsarginės kopijos, saugumo patikrinimai, nuolatinė stebėsena.",
      features: ["Saugus ryšys", "Atsarginės kopijos", "Atnaujinimai", "Stebėsena"],
      color: "red",
      gradient: "from-red-400 to-pink-600"
    }
  ];

  return (
    <section className="relative py-20 bg-[#e8ecf4] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4fc] via-[#e8ecf4] to-[#dde3ef] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 y-neumo-inset y-pill mb-4">
            <Code2 className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Pilnas Spektras</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Mūsų Paslaugos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nuo idėjos iki paleidimo – pilnas svetainės ir programų kūrimo ciklas su šiuolaikinėmis technologijomis
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 y-neumo-surface rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-[#e8ecf4] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <Icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium y-neumo-inset-sm text-slate-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Sužinok daugiau</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
