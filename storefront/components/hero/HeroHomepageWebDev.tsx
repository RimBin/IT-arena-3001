import React from "react";

/**
 * HeroHomepageWebDev
 * Simple, high-clarity homepage hero for Interneto svetainių kūrimo paslauga.
 * Focus: trust, clarity, outcomes, and strong neuromarketing triggers for business owners.
 */
const HeroHomepageWebDev: React.FC = () => {
  return (
    <section className="ia-section">
      <div className="ia-card">
        {/* Title & Key Promise */}
        <h1 className="ia-title mb-4">
          Interneto svetainė, kuri kuria pajamas – ne dar vienas „gražus puslapis“
        </h1>
        <p className="ia-lead mb-6">
          Mes padedame įmonių savininkams greitai gauti aiškią, modernią ir parduodančią svetainę.
          Be miglos, be nereikalingų funkcijų. Tik tai, kas generuoja užklausas, pardavimus ir pasitikėjimą.
        </p>

        {/* Primary Actions */}
        <div className="ia-actions mb-8">
          <a
            href="#kainodara"
            className="ia-btn-primary"
          >
            Gauti kainą per 24 val.
          </a>
          <a
            href="#darbai"
            className="ia-btn-secondary"
          >
            Peržiūrėti darbus
          </a>
        </div>

        {/* Trust Bar */}
        <div className="ia-grid ia-grid-4 mb-8">
          <div className="ia-block">
            <div className="ia-block-title">+124% užklausų augimas</div>
            <div className="ia-block-body">Vidutiniškai per 60 dienų po starto</div>
          </div>
          <div className="ia-block">
            <div className="ia-block-title">SEO paruošta nuo pirmos dienos</div>
            <div className="ia-block-body">Techninė struktūra, greitis, schemos</div>
          </div>
          <div className="ia-block">
            <div className="ia-block-title">Fiksuoti terminai ir biudžetas</div>
            <div className="ia-block-body">Jokio „išsiplėtimo“ be Jūsų sutikimo</div>
          </div>
          <div className="ia-block">
            <div className="ia-block-title">Garantija ir priežiūra</div>
            <div className="ia-block-body">3 mėn. be streso – mes su Jumis</div>
          </div>
        </div>

        {/* Objections → Answers */}
        <div className="ia-grid ia-grid-3 mb-6">
          <div className="ia-block">
            <div className="ia-block-title">Ar tai tikrai veiks mano versle?</div>
            <p className="ia-block-body">Taip – pradedame nuo tikslaus pasiūlymo ir struktūros, orientuotos į Jūsų pirkėją. Rodome panašių nišų rezultatus ir planą.</p>
          </div>
          <div className="ia-block">
            <div className="ia-block-title">Kiek tai kainuos ir kiek truks?</div>
            <p className="ia-block-body">Aiškios kainos (fiksuotos), aiškūs terminai (2–6 savaitės). Jokio paslėpto „scope“. Atnaujinimai kas savaitę.</p>
          </div>
          <div className="ia-block">
            <div className="ia-block-title">Kas bus po paleidimo?</div>
            <p className="ia-block-body">Įtraukiame analitiką, užklausų stebėseną, greičio optimizaciją. 3 mėn. garantija, mokymai ir prioritetinis palaikymas.</p>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="ia-grid ia-grid-5">
          {[
            "Konversijų architektūra",
            "AI teksto/SEO pagalba",
            "Greitis 90–100 (Lighthouse)",
            "UX remtas tyrimais",
            "CMS: Next.js / WordPress",
          ].map((item) => (
            <div key={item} className="ia-chip">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHomepageWebDev;
