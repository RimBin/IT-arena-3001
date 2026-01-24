"use client";

import { Calendar, MessageCircle, Mail, Phone, Sparkles, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const benefits = [
    "Nemokama 30 minučių konsultacija",
    "Individualus pasiūlymas per 24 valandas",
    "Jokių įsipareigojimų",
    "100% pinigų grąžinimo garantija"
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-white">Startuok Dar Šiandien</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pasiruošęs Realizuoti
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Savo Svetainės Viziją?
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Užpildyk formą arba susisiek tiesiogiai. Atsakome per <span className="font-bold text-white">1 darbo valandą</span>.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Calendar Booking */}
          <div className="group relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-purple-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Rezervuok Pokalbį
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                30 minučių vaizdo pokalbis – aptariam tavo projektą, technologijas, laiko planą
              </p>
              
              <div className="flex items-center gap-2 text-purple-300 font-semibold">
                <span>Pasirink laiką</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* WhatsApp / Messenger */}
          <div className="group relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-green-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Parašyk Dabar
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Žinutės programa – atsakome nedelsiant
              </p>
              
              <div className="flex items-center gap-2 text-green-300 font-semibold">
                <span>Atidaryk pokalbį</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* Email / Form */}
          <div className="group relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-blue-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Gauk Pasiūlymą
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Užpildyk formą – gaunsi individualų pasiūlymą per 24 valandas
              </p>
              
              <div className="flex items-center gap-2 text-blue-300 font-semibold">
                <span>Siųsk formą</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Arba susisiek tiesiogiai:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+37060000000" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span>+370 600 00000</span>
            </a>
            <a href="mailto:hello@itarena.lt" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span>hello@itarena.lt</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
