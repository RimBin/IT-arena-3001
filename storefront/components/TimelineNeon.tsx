"use client";
import { useEffect, useRef } from "react";

const ACHIEVEMENTS = [
  {
    year: "2007",
    text: "Debiutas, Lietuvos čempionė ir absoliuti nugalėtoja.",
  },
  {
    year: "2009",
    text: "Lietuvos taurės laimėtoja, 2 vieta Lietuvos čempionate, 3 vieta Baltijos šalių mače.",
  },
  {
    year: "2011",
    text: "Lietuvos čempionė ir absoliuti nugalėtoja; Vilniaus ir Jurbarko pirmenybių čempionė; Europos sporto žaidynių auksas (Šiauliai); 2 vieta Baltijos mače; 4 vieta IFBB London Cup.",
  },
  {
    year: "2012",
    text: "Savickas Classic čempionė; Vilniaus taurės čempionė; IFBB „Grand Prix Pepa“ absoliuti čempionė (Čekija); 1 vieta „Tatranský pohár“ (Slovakija); 3 vieta „Arnold Classic Europe“ (Madrid); 3 vieta Pasaulio taurėje.",
  },
  {
    year: "2013",
    text: "Lietuvos taurės čempionė; 2 vieta „Arnold Classic Europe“ (Madrid); 2 vieta „Savickas Classic“; Prezidentės Dalios Grybauskaitės medalis „Už nuopelnus sportui“.",
  },
  {
    year: "2014",
    text: "„Savickas Classic“ čempionė; IFBB „Grand Prix Pepa“ čempionė; 2 vieta „Nicole Wilkins Classic“; 4 vieta „Arnold Classic Europe“.",
  },
  {
    year: "2015",
    text: "Varžybinė pertrauka.",
  },
  {
    year: "2016",
    text: "Sugrįžimas: Lietuvos čempionė ir absoliuti nugalėtoja; Jurbarko pirmenybių čempionė; Europos čempionato bronza (3 vieta); „Diamond Cup“ sidabras (2 vieta); Pasaulio čempionato 5 vieta; „Grand Prix Pepa“ absoliuti čempionė; KKSD medalis „Už sporto pergales“.",
  },
  {
    year: "2017",
    text: "Renata Ladies komandos įkūrėja, komanda tarp sėkmingiausių Lietuvoje.",
  },
  {
    year: "2018",
    text: "Suteiktas IFBB PRO statusas (Elite Pro).",
  },
  {
    year: "2019+",
    text: "Trenerės veikla Kaune, „Renata Ladies“ studijos įkūrėja, moterų sporto stovyklos ir seminarai.",
  },
];

export default function TimelineNeon() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const items = Array.from(wrapper.querySelectorAll<HTMLElement>("[data-timeline-item]"));
    const progressEl = progressRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-active");
          } else {
            target.classList.remove("is-active");
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-10% 0px -25% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      if (!wrapper || !progressEl) return;
      const rect = wrapper.getBoundingClientRect();
      const height = rect.height;
      if (height === 0) return;

      const viewportAnchor = window.scrollY + window.innerHeight * 0.35;
      const start = window.scrollY + rect.top;
      const raw = (viewportAnchor - start) / height;
      const progress = Math.min(Math.max(raw, 0), 1);
      progressEl.style.height = `${progress * height}px`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      items.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="timeline-section container mx-auto px-6 py-12">
      <h2 className="heading-black text-3xl md:text-4xl mb-6 text-gradient">Pasiekimų kelias</h2>
      <div className="yaki-timeline" ref={wrapperRef}>
        <div className="yaki-tl-track" aria-hidden="true" />
        <div className="yaki-tl-progress" ref={progressRef} aria-hidden="true" />
        {ACHIEVEMENTS.map((achievement, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <div
              key={achievement.year}
              className={`yaki-tl-item is-${side}`}
              data-timeline-item
            >
              <div className="yaki-tl-badge" data-timeline-badge aria-hidden="true">
                <span className="yaki-tl-icon" aria-hidden="true">⭐</span>
                <span className="sr-only">{achievement.year}</span>
              </div>
              <div className={`yaki-tl-card tilt-${side === "left" ? "l" : "r"}`}>
                <div className="yaki-tl-card-inner tilt-inner card-fill">
                  <div className="yaki-tl-year">{achievement.year}</div>
                  <p className="yaki-tl-text">{achievement.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
