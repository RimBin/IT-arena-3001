"use client";

import { ArrowUpRight, TrendingUp, Clock, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  const cases = [
    {
      title: "Parduotuvės Atnaujinimas",
      client: "Šiaurės Baldai",
      description: "Visiškas parduotuvės pertvarkymas su individualia pirkimo sistema ir dirbtinio intelekto rekomendacijomis.",
      image: "/images/case-ecommerce.jpg", // placeholder
      stats: [
        { label: "Konversija", value: "+156%", icon: TrendingUp },
        { label: "Įkėlimas", value: "1.2s", icon: Clock },
        { label: "Greitis", value: "98/100", icon: Award }
      ],
      tags: ["Prekyba", "Reakcija", "Dirbtinis intelektas", "Mokėjimai"],
      color: "amber",
      gradient: "from-amber-400/20 to-orange-500/20"
    },
    {
      title: "Platforma ir Valdymo Skydelis",
      client: "Techninė Analizė",
      description: "Moderni reklaminė svetainė ir valdymo skydelis su tiesioginiais duomenimis, tamsus režimas.",
      image: "/images/case-saas.jpg", // placeholder
      stats: [
        { label: "Registracijos", value: "+340%", icon: TrendingUp },
        { label: "Paleidimas", value: "< 30s", icon: Clock },
        { label: "Veikimo laikas", value: "99.98%", icon: Award }
      ],
      tags: ["Moderni architektūra", "Tipavimas", "Dizainas", "Debesis"],
      color: "purple",
      gradient: "from-purple-400/20 to-purple-600/20"
    },
    {
      title: "Turinio Generatorius",
      client: "Turinio Meistras",
      description: "Paieškoms optimizuota platforma su kalbos modeliais, automatinė raktažodžių analizė, masinis kūrimas.",
      image: "/images/case-ai.jpg", // placeholder
      stats: [
        { label: "Turinio kiekis", value: "10x greičiau", icon: TrendingUp },
        { label: "Paieškų įvertis", value: "95+", icon: Award },
        { label: "Atsakymo greitis", value: "< 2s", icon: Clock }
      ],
      tags: ["Kalbos modelis", "Pitonas", "Reakcija", "Vektorių saugykla"],
      color: "blue",
      gradient: "from-blue-400/20 to-cyan-600/20"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-white shadow-lg">
            <Award className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Projektų Pavyzdžiai</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Realūs Rezultatai
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Projektai, kurie pakeitė verslo trajektoriją. Nuo +156% konversijos iki 10 kartų greičiau turinio kūrimas.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent" />
                <div className="relative text-center z-10 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.client}
                  </p>
                </div>
                
                {/* External Link Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 border border-purple-200 shadow-[0_8px_20px_rgba(124,58,237,0.18)]">
                  <ArrowUpRight className="w-5 h-5 text-purple-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="text-center">
                        <Icon className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                        <div className="text-lg font-bold text-slate-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg">Peržiūrėk Visą Portfolio →</Button>
        </div>
      </div>
    </section>
  );
}
