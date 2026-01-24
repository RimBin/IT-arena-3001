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
    <section className="ia-section">
      <div className="ia-card">
        {/* Header */}
        <div className="mb-8">
          <div className="ia-chip mb-4">
            <Code2 className="w-4 h-4 text-slate-900" />
            Pilnas spektras
          </div>

          <h2 className="ia-title mb-3">Mūsų paslaugos</h2>
          <p className="ia-lead">
            Nuo idėjos iki paleidimo – pilnas svetainės ir programų kūrimo ciklas su šiuolaikinėmis technologijomis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="ia-grid ia-grid-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group ia-block transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-white flex items-center justify-center group-hover:bg-transparent transition-colors duration-200">
                      <Icon className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="ia-title-sm mb-2">
                  {service.title}
                </h3>
                <p className="ia-text-muted mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="ia-chip"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-sm font-semibold">Sužinok daugiau</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
