"use client";
import { FC } from 'react';

// Neumorphic 3D — desktop svetainės hero su navigacija, headline ir funkcijų kortelėmis
const HeroNeumorphicTrue: FC = () => {
  return (
    <div className="w-full bg-[#e6e9f0] py-10 md:py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* NAV – raised */}
        <div
          className="bg-[#e6e9f0] rounded-2xl px-5 py-3 mb-8 flex items-center justify-between"
          style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl bg-[#e6e9f0] flex items-center justify-center text-slate-500"
              style={{ boxShadow: 'inset 4px 4px 8px #c5c8d0, inset -4px -4px 8px #ffffff' }}
            >
              IA
            </div>
            <span className="font-semibold text-slate-700">IT Arena</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm text-slate-600">
            <a href="#paslaugos" className="hover:text-slate-800">Paslaugos</a>
            <a href="#darbai" className="hover:text-slate-800">Darbai</a>
            <a href="#apie" className="hover:text-slate-800">Apie</a>
            <a href="#kontaktai" className="hover:text-slate-800">Kontaktai</a>
          </div>
          <a
            href="#kaina"
            className="hidden md:inline-flex items-center rounded-xl px-4 py-2 text-sm text-slate-700"
            style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
          >
            Gauti kainą
          </a>
        </div>

        {/* HERO – 2 kolonos */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Kairė – tekstas */}
          <div>
            <div
              className="inline-block rounded-xl px-3 py-1 mb-4 text-xs text-slate-600 bg-[#e6e9f0]"
              style={{ boxShadow: 'inset 4px 4px 8px #c5c8d0, inset -4px -4px 8px #ffffff' }}
            >
              Neumorphic 3D • Premium UX
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Svetainė, kuri kuria pasitikėjimą ir pardavimus
            </h1>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              Aiškus pasiūlymas, greitas įgyvendinimas, fiksuota kaina. Mes suprojektuojame hero, struktūrą ir turinį,
              kad lankytojai taptų klientais – be perteklinių funkcijų.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="#pasiulyma"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-slate-800 bg-[#e6e9f0]"
                style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}
              >
                Gauti pasiūlymą per 24h
              </a>
              <a
                href="#darbai"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-slate-700 border border-transparent"
                style={{ boxShadow: 'inset 6px 6px 12px #c5c8d0, inset -6px -6px 12px #ffffff' }}
              >
                Peržiūrėti darbus
              </a>
            </div>
            {/* Patikimumo juosta */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {["+124% užklausų/60 d.", "SEO paruošta", "Fiksuoti terminai", "3 mėn. garantija"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl px-4 py-3 text-sm text-slate-700 bg-[#e6e9f0]"
                  style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Dešinė – didelis "puslapio maketas" (raised) */}
          <div
            className="bg-[#e6e9f0] rounded-3xl p-6 md:p-8"
            style={{ boxShadow: '12px 12px 24px #c5c8d0, -12px -12px 24px #ffffff' }}
          >
            {/* Imituotas headeris */}
            <div
              className="h-12 rounded-2xl mb-6 bg-[#e6e9f0]"
              style={{ boxShadow: 'inset 6px 6px 12px #c5c8d0, inset -6px -6px 12px #ffffff' }}
            />
            {/* Hero blokas */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div
                className="col-span-3 h-40 md:h-48 rounded-3xl bg-[#e6e9f0]"
                style={{ boxShadow: 'inset 8px 8px 16px #c5c8d0, inset -8px -8px 16px #ffffff' }}
              />
              <div className="col-span-2 flex flex-col gap-4">
                <div
                  className="h-20 rounded-3xl bg-[#e6e9f0]"
                  style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
                />
                <div
                  className="h-20 rounded-3xl bg-[#e6e9f0]"
                  style={{ boxShadow: '6px 6px 12px #c5c8d0, -6px -6px 12px #ffffff' }}
                />
              </div>
            </div>
            {/* Kortelių eilė */}
            <div className="grid grid-cols-3 gap-4">
              {[0,1,2].map((i) => (
                <div
                  key={i}
                  className="h-28 rounded-2xl bg-[#e6e9f0]"
                  style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Funkcijų kortelės (desktop) */}
        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {["Konversijų architektūra", "Greitis 90–100", "UX tyrimai", "Next.js / WordPress"].map((t) => (
            <div
              key={t}
              className="bg-[#e6e9f0] rounded-2xl px-5 py-4 text-sm text-slate-700"
              style={{ boxShadow: '8px 8px 16px #c5c8d0, -8px -8px 16px #ffffff' }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroNeumorphicTrue;
