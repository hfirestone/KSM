"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const contacts = [
  {
    name: "Sevag Keucheyan",
    role: "Founder & Agent",
    address: "74 Chemin de Saule\n1233 Bernex, Switzerland",
    phone: "+41 78 882 43 34",
    phoneHref: "tel:+41788824334",
    email: "skeucheyan@gmail.com",
    emailHref: "mailto:skeucheyan@gmail.com",
  },
  {
    name: "Olivier Ducrey",
    role: "Sports Lawyer",
    address: "Av. de Rhodanie 54\n1007 Lausanne, Switzerland",
    phone: "+41 79 288 74 28",
    phoneHref: "tel:+41792887428",
    email: "ducrey@timesattorneys.ch",
    emailHref: "mailto:ducrey@timesattorneys.ch",
  },
  {
    name: "Michel Marguerat",
    role: "Financial Manager",
    address: "Avenue de la Gare 1\n1003 Lausanne, Switzerland",
    phone: "+41 21 566 66 90",
    phoneHref: "tel:+41215666690",
    email: "mmarguerat@vectorgestion.ch",
    emailHref: "mailto:mmarguerat@vectorgestion.ch",
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-28">
        <SectionHeader tag="Get In Touch" title="Office ☎" />

        <div className="reveal mt-10 grid md:grid-cols-3 gap-5">
          {contacts.map((c) => (
            <div
              key={c.name}
              className="p-8 text-center border transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")
              }
            >
              <div className="font-barlow-condensed font-bold text-lg tracking-widest uppercase">
                {c.name}
              </div>
              <div
                className="text-xs font-semibold tracking-[0.2em] uppercase mt-1 mb-5"
                style={{ color: "var(--gold)" }}
              >
                {c.role}
              </div>
              <div className="text-sm font-light leading-relaxed" style={{ color: "var(--grey)" }}>
                {c.address.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
                <br />
                <a href={c.phoneHref} className="transition-colors duration-200 hover:text-amber-400" style={{ color: "var(--light)" }}>
                  {c.phone}
                </a>
                <br />
                <a href={c.emailHref} className="transition-colors duration-200 hover:text-amber-400" style={{ color: "var(--light)" }}>
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
