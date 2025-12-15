import AboutNeon from "@/components/AboutNeon";
import TimelineNeon from "@/components/TimelineNeon";

export default function AboutPage() {
  return (
    <main>
      <AboutNeon />
      <TimelineNeon />
      <section className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <h3 className="heading-black text-xl mb-2">Mūsų Misija</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Kurti inovatyvius web sprendimus, kurie užtikrina verslo augimą ir išmatuojamus rezultatus.
            </p>
          </div>
          <div className="rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <h3 className="heading-black text-xl mb-2">Vertybės</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Inovacijos, klientų sėkmė, technologijų išmanymas ir atsakomybė kiekviename projekte.
            </p>
          </div>
          <div className="rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <h3 className="heading-black text-xl mb-2">Kas toliau?</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              AI funkcijos, pažangios analitikos ir naujos kartos UX patirties sprendimai jau kelyje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
