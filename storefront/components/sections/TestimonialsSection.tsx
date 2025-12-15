"use client";

import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Tomas Kazlauskas",
      role: "Vadovas @ Šiaurės Baldai",
      avatar: "TK",
      rating: 5,
      text: "IT Arena sukūrė mūsų parduotuvės platformą nuo nulio. Per 3 mėnesius konversija išaugo 156%, o puslapio greitis pagerintas 4 kartus. Geriausia investicija!",
      stats: { metric: "Konversija", value: "+156%" }
    },
    {
      name: "Laura Petrauskaitė",
      role: "Rinkodaros Vadovė @ Techninė Srovė",
      avatar: "LP",
      rating: 5,
      text: "Reklaminė svetainė ir valdymo skydelis su tiesioginiais duomenimis. Greičio įvertis 98/100, paleidimas per 30 sekundžių. Profesionalumas ir greitis – 10/10.",
      stats: { metric: "Greitis", value: "98/100" }
    },
    {
      name: "Andrius Mockus",
      role: "Įkūrėjas @ Turinio Meistras",
      avatar: "AM",
      rating: 5,
      text: "Kalbos modelio integracija buvo sudėtinga, bet IT Arena pristatė viską per 6 savaites. Automatinis turinio kūrimas veikia nepriekaištingai, klientai patenkinti.",
      stats: { metric: "Greitis", value: "10x greičiau" }
    },
    {
      name: "Greta Urbonaitė",
      role: "Savininkė @ Grožio Studija",
      avatar: "GU",
      rating: 5,
      text: "Migravome į individualią svetainę su prekyba. Paieškų srautas +240% per 4 mėnesius. Prisitaikantis dizainas, greitas įkėlimas, tobula mobilioji patirtis.",
      stats: { metric: "Paieškų srautas", value: "+240%" }
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
            <span className="text-sm font-medium text-purple-600">5.0 Vidutinis Įvertinimas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ką Sako Klientai
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tikri atsiliepimai iš tikrų klientų. 50+ projektų, 98% pasitenkinimo lygis, 0 nepatenkintų klientų.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-purple-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl mb-6">
                <span className="text-sm font-medium text-slate-600">{testimonial.stats.metric}:</span>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {testimonial.stats.value}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Elements */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Užbaigtų Projektų</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-slate-600">Klientų Pasitenkinimas</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl">
            <div className="text-4xl font-bold text-slate-900 mb-2">5.0</div>
            <div className="text-slate-600">Vidutinis Įvertinimas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
