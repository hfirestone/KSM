"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const pillars = [
  { title: "Contract Negotiation", desc: "Securing the most lucrative playing contracts across the world's top leagues." },
  { title: "Marketing & Brand", desc: "Building tailored marketing strategies to maximize your earnings and presence on and off the court." },
  { title: "Financial Planning", desc: "Strategic wealth management ensuring your earnings are protected and grown throughout your career." },
  { title: "Legal Support", desc: "Expert sports and commercial law advice from our top-ranked sports lawyers." },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      <div className="absolute top-0 left-0 w-80 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(0 0, 100% 0, 0 100%)", opacity: 0.85 }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader tag="Who We Are" title="About KSM" />
        <div className="mt-8 grid md:grid-cols-2 gap-16">
          <div className="reveal space-y-5">
            {[
              "Keucheyan Sports Management was founded in 2008 with the goal of providing a superior boutique type of representation to professional basketball players. Since its inception, KSM has prided itself in providing personalized representation in the best interest of each and every one of its clients.",
              "We work extremely hard daily to maximize the results of our clients. We secure lucrative playing contracts, assist our clients with off-court marketing and sponsorships, financial management, and any other needs they may have.",
              "KSM has more than 17 years of experience in the industry and has negotiated contracts in many different countries throughout Europe, Asia, the Middle East, and the NBA. At KSM we take pride in the success of all our clients and their families.",
            ].map((p, i) => (
              <p key={i} className="leading-relaxed font-light text-base" style={{ color: "var(--light)" }}>{p}</p>
            ))}
          </div>
          <div className="reveal space-y-4">
            {pillars.map((p) => (
              <div key={p.title} className="px-5 py-4" style={{ borderLeft: "3px solid var(--gold)", background: "rgba(255,255,255,0.03)" }}>
                <div className="font-barlow-condensed font-bold text-lg tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{p.title}</div>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--grey)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
