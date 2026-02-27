"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

const clients = [
  { name: "Yanic Konan Niederhauser", team: "Los Angeles Clippers — NBA" },
  { name: "Christian Vital", team: "Derthona — Italy Lega" },
  { name: "Chris Manon", team: "Los Angeles Lakers — NBA" },
  { name: "DeAndrere Gholston", team: "Hapoel Gali Elion — Winner League" },
  { name: "Chris Jones", team: "Hapoel Tel-Aviv — EuroLeague" },
  { name: "Ronald March", team: "Mersin — BSL-BCL Champions League" },
  { name: "Otis Livingston", team: "Girona — ACB" },
  { name: "Jaizec Lottie", team: "Oradea — FIBA Europe Cup" },
  { name: "Michael Forrest", team: "Murcia — ACB" },
  { name: "Efton Reid III", team: "Kobrat — Korisliiga" },
  { name: "Ty Nichols", team: "Peristeri — Greek Basketball League" },
];

export default function Clients() {
  const ref = useReveal();

  return (
    <section id="clients" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      {/* Bottom-right diagonal accent */}
      <div
        className="absolute bottom-0 right-0 w-96 h-48 pointer-events-none"
        style={{ background: "var(--gold)", clipPath: "polygon(100% 100%, 100% 0%, 0% 100%)", opacity: 0.85 }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 py-28">
        <SectionHeader tag="Our Roster" title="Professional Clients" />

        <div className="reveal mt-10 grid md:grid-cols-2 gap-2">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-4 px-5 py-4 border transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,75,0.4)";
                (e.currentTarget as HTMLElement).style.background = "rgba(232,184,75,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div
                className="rounded-full flex-shrink-0"
                style={{ width: 7, height: 7, background: "var(--gold)" }}
              />
              <div>
                <div className="font-barlow-condensed font-bold text-base tracking-wide uppercase">
                  {c.name}
                </div>
                <div className="text-xs font-light mt-0.5" style={{ color: "var(--grey)" }}>
                  {c.team}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
