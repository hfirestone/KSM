"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const team = [
  {
    icon: "🏀",
    name: "Sevag Keucheyan",
    role: "Founder & Agent",
    desc: "Founder of KSM in 2008. Born March 30, 1978, Sevag graduated from the Haute École de Gestion of Geneva in 2005 and played professionally for about 10 years. He speaks French, English, Italian, and Armenian.",
  },
  {
    icon: "⚖️",
    name: "Olivier Ducrey",
    role: "Sports Lawyer",
    desc: "A leading Swiss lawyer specializing in sports and commercial law, advising federations, clubs, athletes, and sponsors. Ranked among the top sports lawyers by Chambers and Legal 500. Has worked with UEFA on several European Championships.",
  },
  {
    icon: "💰",
    name: "Michel Marguerat",
    role: "Financial Manager",
    desc: "A wealth manager with a CIIA diploma who began his career at Credit Suisse before moving to LGT and Banque Piguet Galland. Since 2013, he has led Vector Gestion's Lausanne office and manages the portfolios of many elite athletes.",
  },
  {
    icon: "🇺🇸",
    name: "Excel Sports Management",
    role: "US Partner",
    desc: "The basketball division of Excel Sports Management is a premier representation group within global basketball, representing elite NBA players, coaches, executives, and broadcasters. Represents numerous All-Stars, lottery draft picks, and top international talent.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader tag="What We Do" title="Our Team" />
        <div className="reveal mt-8 grid md:grid-cols-2 gap-0.5">
          {team.map((member) => (
            <div key={member.name} className="service-card relative p-10 transition-colors duration-200" style={{ background: "var(--navy2)" }}>
              <span className="text-4xl mb-4 block">{member.icon}</span>
              <div className="font-barlow-condensed font-bold text-xl tracking-wide uppercase mb-1" style={{ color: "white" }}>{member.name}</div>
              <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "var(--gold)" }}>{member.role}</div>
              <p className="text-sm leading-relaxed font-light" style={{ color: "var(--grey)" }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
