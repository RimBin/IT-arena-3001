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
            <h3 className="heading-black text-xl mb-2">Our Mission</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Build cutting-edge web solutions that push boundaries and deliver measurable results.
            </p>
          </div>
          <div className="rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <h3 className="heading-black text-xl mb-2">Values</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Innovation first. Client success driven. Technology excellence guaranteed.
            </p>
          </div>
          <div className="rounded-xl border-gradient p-5 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <h3 className="heading-black text-xl mb-2">What’s Next</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              AI-powered features, advanced analytics, and next-gen UX patterns coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
