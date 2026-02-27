"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    author: "Chris Jones",
    quote:
      "Sevag discovered me while I was playing in Mongolia. I was just a young player with a dream, and he believed in me when almost no one else did. Since then, he has guided me step by step throughout my career. Thanks to his vision, dedication, and tireless work, I made it all the way to the EuroLeague — something I never thought possible. I will always be deeply grateful to him for believing in me.",
  },
  {
    author: "Michael Forrest",
    quote:
      "Sevag is someone who only wants the best for his players. He put me in a position on the court that has allowed me to continue playing the game that I love at a high level.",
  },
  {
    author: "Otis Livingston",
    quote:
      "I'm really happy working with Sevag. I started working with him in 2022 and I have trusted him since day one. His professionalism is top notch and his communication is always on point. I know working with him that I have the support needed to be successful. Sevag always helps to make quality decisions for both the short term and long term.",
  },
  {
    author: "Christian Vital",
    quote:
      "Sevag is an agent that is restless. With many connections in Europe and the states he works relentlessly to make sure his guys have jobs and places them where they can succeed and grow as a person and player.",
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-28">
        <SectionHeader tag="Client Voice" title="Testimonials" />

        <div className="reveal mt-10 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8"
              style={{
                background: "var(--navy2)",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <span
                className="block font-serif leading-none mb-4 opacity-40"
                style={{ fontSize: "3.5rem", color: "var(--gold)" }}
              >
                &ldquo;
              </span>
              <p className="text-sm leading-relaxed font-light italic" style={{ color: "var(--light)" }}>
                {t.quote}
              </p>
              <div
                className="mt-5 font-barlow-condensed font-bold text-sm tracking-widest uppercase not-italic"
                style={{ color: "var(--gold)" }}
              >
                — {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
