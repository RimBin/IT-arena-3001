"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kiek kainuoja svetainės kūrimo projektas?",
      answer: "Kaina priklauso nuo projekto sudėtingumo. Paprasta reklaminė svetainė – nuo 1,500 €. Elektroninė parduotuvė su individualiu dizainu – 5,000-15,000 €. Didelių įmonių platforma – 20,000 €+. Visada teikiame detalų pasiūlymą po pirmo pokalbio."
    },
    {
      question: "Kiek laiko užtruks mano projektas?",
      answer: "Reklaminė svetainė – 2-3 savaitės. Elektroninė parduotuvė – 6-10 savaičių. Individuali platforma su sąsajų integracijomis – 12-16 savaičių. Teikiame detalų laiko planą po techninių tyrimų."
    },
    {
      question: "Ar dirbate su skirtingomis platformomis ir individualiais sprendimais?",
      answer: "Taip! Įvairios turinio valdymo sistemos, prekybos platformos, individualūs sprendimai. Rekomenduojame technologijas pagal jūsų verslo poreikius, ne mūsų pageidavimą. Technologijų atžvilgiu neutralūs."
    },
    {
      question: "Ar teikiate paieškų optimizavimo ir turinio rašymo paslaugas?",
      answer: "Absoliučiai! Paieškų optimizavimas su dirbtinio intelekto pagalba – automatinė raktažodžių analizė, aprašų optimizavimas, struktūrinis žymėjimas. Automatinis turinio kūrimas su kalbos modeliais. Paieškų optimizavimas įtrauktas į visus projektus. Turinio rašymas – 50-150 €/straipsnis."
    },
    {
      question: "Kas vyksta po paleidimo? Ar teikiate priežiūrą?",
      answer: "Nuolatinė stebėsena, reguliarūs atnaujinimai, saugumo pataisymai, greičio optimizavimas. Priežiūros planai nuo 200 €/mėn. Skubios pagalbos atsakymas per 2 valandas. Nemokama parama 30 dienų po paleidimo."
    },
    {
      question: "Ar galite paimti esamą projektą ir jį patobulinti?",
      answer: "Taip! Kodo auditas, greičio optimizavimas, dizaino atnaujinimas, naujų funkcijų pridėjimas, perkėlimas į šiuolaikines technologijas. Atliekame išsamų auditą ir teikiame tobulinimo planą su kainomis."
    },
    {
      question: "Ar dirbate su startuoliais ir mažais verslais?",
      answer: "Šimtaprocentiškai! Turime patirties su startuoliais, mažais ir vidutiniais verslais bei didelėmis įmonėmis. Lankstūs mokėjimo planai, mažiausiai gyvybingas produktas, lankstus kūrimas. Startuoliams – specialios kainos su nuosavybės galimybėmis."
    },
    {
      question: "Kaip vyksta bendravimas projekto metu?",
      answer: "Savaitinės vaizdo demonstracijos, bendrų pokalbių erdvė, bendri projektų valdymo įrankiai. Projektų vadovas priskirtas kiekvienam projektui. Atsakome į žinutes per 4 valandas darbo metu. Visiškas skaidrumas."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-slate-600">Klausimai ir Atsakymai</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dažniausi Klausimai
          </h2>
          <p className="text-lg text-slate-600">
            Neradai atsakymo? Parašyk mums – atsakysime per 1 valandą.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Turite daugiau klausimų? Susisiekime!
          </p>
          <Button size="lg">Susisiek su Mumis →</Button>
        </div>
      </div>
    </section>
  );
}
