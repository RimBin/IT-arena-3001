export default function LogosStrip() {
  const logos = ["/logos/alpha.svg", "/logos/beta.svg", "/logos/gamma.svg", "/logos/delta.svg", "/logos/omega.svg"];
  return (
    <section aria-label="logos" className="py-8">
      <div className="marquee">
        <div className="marquee-inner">
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="px-8 opacity-70 hover:opacity-100 transition">
              <img src={src} alt="Client logo" className="h-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
