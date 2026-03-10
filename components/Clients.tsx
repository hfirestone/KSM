"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const clients = [
  { team: "Los Angeles Clippers", league: "NBA", flag: "🇺🇸" },
  { team: "Los Angeles Lakers", league: "NBA", flag: "🇺🇸" },
  { team: "Hapoel Tel-Aviv", league: "EuroLeague", flag: "🇮🇱" },
  { team: "Girona", league: "ACB", flag: "🇪🇸" },
  { team: "Murcia", league: "ACB", flag: "🇪🇸" },
  { team: "Peristeri", league: "Greek Basketball League", flag: "🇬🇷" },
  { team: "Derthona", league: "Italy Lega", flag: "🇮🇹" },
  { team: "Hapoel Gali Elion", league: "Winner League", flag: "🇮🇱" },
  { team: "Mersin", league: "BSL-BCL Champions League", flag: "🇹🇷" },
  { team: "Oradea", league: "FIBA Europe Cup", flag: "🇷🇴" },
  { team: "Kobrat", league: "Korisliiga", flag: "🇫🇮" },
];

export default function Clients() {
  const ref = useReveal();

  return (
    <section id="clients" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      <div className="absolute bottom-0 right-0 w-96 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(100% 100%, 100% 0%, 0% 100%)", opacity: 0.85 }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader tag="Our Roster" title="Professional Clients" />
        <p className="mt-3 text-sm font-light" style={{ color: "var(--grey)" }}>Player names available upon request.</p>
        <div className="reveal mt-6 grid md:grid-cols-2 gap-2">
          {clients.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-4 border transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,75,0.4)";
                (e.currentTarget as HTMLElement).style.background = "rgba(232,184,75,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div className="font-barlow-condensed font-black text-xl w-8 text-center flex-shrink-0" style={{ color: "rgba(232,184,75,0.25)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="font-barlow-condensed font-bold text-base tracking-wide uppercase">{c.flag} {c.team}</div>
                <div className="text-xs font-light mt-0.5" style={{ color: "var(--grey)" }}>{c.league} · Player upon request</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
