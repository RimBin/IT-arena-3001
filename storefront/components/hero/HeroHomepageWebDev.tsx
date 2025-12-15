import React from "react";

/**
 * HeroHomepageWebDev
 * Simple, high-clarity homepage hero for Interneto svetainių kūrimo paslauga.
 * Focus: trust, clarity, outcomes, and strong neuromarketing triggers for business owners.
 */
const HeroHomepageWebDev: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
        {/* Title & Key Promise */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Interneto svetainė, kuri kuria pajamas – ne dar vienas „gražus puslapis“
        </h1>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
          Mes padedame įmonių savininkams greitai gauti aiškią, modernią ir parduodančią svetainę.
          Be miglos, be nereikalingų funkcijų. Tik tai, kas generuoja užklausas, pardavimus ir pasitikėjimą.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href="#kainodara"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-black"
          >
            Gauti kainą per 24 val.
          </a>
          <a
            href="#darbai"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50"
          >
            Peržiūrėti darbus
          </a>
        </div>

        {/* Trust Bar */}
        <div className="grid md:grid-cols-4 gap-3 mb-8">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-900">+124% užklausų augimas</div>
            <div className="text-xs text-slate-600">Vidutiniškai per 60 dienų po starto</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-900">SEO paruošta nuo pirmos dienos</div>
            <div className="text-xs text-slate-600">Techninė struktūra, greitis, schemos</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-900">Fiksuoti terminai ir biudžetas</div>
            <div className="text-xs text-slate-600">Jokio „išsiplėtimo“ be Jūsų sutikimo</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm font-semibold text-slate-900">Garantija ir priežiūra</div>
            <div className="text-xs text-slate-600">3 mėn. be streso – mes su Jumis</div>
          </div>
        </div>

        {/* Objections → Answers */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-slate-900 font-semibold mb-2">Ar tai tikrai veiks mano versle?</div>
            <p className="text-sm text-slate-700">Taip – pradedame nuo tikslaus pasiūlymo ir struktūros, orientuotos į Jūsų pirkėją. Rodome panašių nišų rezultatus ir planą.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-slate-900 font-semibold mb-2">Kiek tai kainuos ir kiek truks?</div>
            <p className="text-sm text-slate-700">Aiškios kainos (fiksuotos), aiškūs terminai (2–6 savaitės). Jokio paslėpto „scope“. Atnaujinimai kas savaitę.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-slate-900 font-semibold mb-2">Kas bus po paleidimo?</div>
            <p className="text-sm text-slate-700">Įtraukiame analitiką, užklausų stebėseną, greičio optimizaciją. 3 mėn. garantija, mokymai ir prioritetinis palaikymas.</p>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="grid md:grid-cols-5 gap-3">
          {[
            "Konversijų architektūra",
            "AI teksto/SEO pagalba",
            "Greitis 90–100 (Lighthouse)",
            "UX remtas tyrimais",
            "CMS: Next.js / WordPress",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHomepageWebDev;
