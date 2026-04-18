"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const columns = [
  [
    {
      author: "Yanic Konan Niederhauser, LA Clippers",
      quote: "Working with my agent, Sevag Keucheyan, has been a defining part of my journey. From the moment he recruited me out of Germany, he believed in me in a way very few people did. I still remember the first time I met him — in that moment, my dream of going to the U.S. and making it to the NBA stopped feeling like a dream and became something real I could actually achieve. From day one, we had a clear understanding: I take care of the basketball, and he takes care of the business. And he's done exactly that. Sevag is a hard worker who consistently creates opportunities, opens doors, and makes sure everything off the court is handled with precision and purpose. What separates him is his vision and consistency. He doesn't just react — he builds, plans, and stays ahead. At the same time, he keeps me accountable and pushes me to stay focused and continue growing even now that I'm in the NBA. Our relationship has become more than just business. It's built on trust, loyalty, and a shared belief in the bigger picture. I'm grateful for everything he's done for me, and for the role he continues to play in my career.",
    },
  ],
  [
    {
      author: "Chris Manon, Los Angeles Lakers",
      quote: "Sevag has been a reliable and supportive agent, always keeping things on track and prioritizing my best interests. His professionalism stood out, and his visits to Los Angeles showed an extra level of dedication that made me feel supported throughout my first year as a pro.",
    },
    {
      author: "Otis Livingston, Bàsquet Girona",
      quote: "I'm really happy working with Sevag. I started working with him in 2022 and I have trusted him since day one. His professionalism is top notch and his communication is always on point. I know working with him that I have the support needed to be successful. Sevag always helps to make quality decisions for both the short term and long term.",
    },
  ],
  [
    {
      author: "Christian Vital, Derthona Basket",
      quote: "Sevag is an agent that is restless. With many connections in Europe and the states he works relentlessly to make sure his guys have jobs and places them where they can succeed and grow as a person and player.",
    },
    {
      author: "Chris Jones, Hapoel Tel Aviv",
      quote: "Sevag discovered me while I was playing in Mongolia. I was just a young player with a dream, and he believed in me when almost no one else did. Since then, he has guided me step by step throughout my career. Thanks to his vision, dedication, and tireless work, I made it all the way to the EuroLeague — something I never thought possible. I will always be deeply grateful to him for believing in me.",
    },
  ],
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader tag="Client Voice" title="Testimonials" />
        <div className="reveal mt-8 grid md:grid-cols-3 gap-6">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((t) => (
                <div key={t.author} className="p-8" style={{ background: "var(--navy2)", borderTop: "2px solid var(--gold)" }}>
                  <span className="block font-serif leading-none mb-4 opacity-40" style={{ fontSize: "3.5rem", color: "var(--gold)" }}>&ldquo;</span>
                  <p className="text-sm leading-relaxed font-light italic" style={{ color: "var(--light)" }}>{t.quote}</p>
                  <div className="mt-5 font-barlow-condensed font-bold text-sm tracking-widest uppercase" style={{ color: "var(--gold)" }}>— {t.author}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
