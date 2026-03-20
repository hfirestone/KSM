"use client";

import { useReveal } from "./useReveal";
import Image from "next/image";

export default function Clients() {
  const ref = useReveal();

  return (
    <section id="clients" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">

        {/* Title */}
        <div className="reveal text-center mb-8">
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3"
            style={{ color: "var(--gold)" }}
          >
            <span style={{ width: 30, height: 2, background: "var(--gold)", display: "inline-block" }} />
            The KSM Roster
            <span style={{ width: 30, height: 2, background: "var(--gold)", display: "inline-block" }} />
          </p>
          <h2
            className="font-barlow-condensed font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
          >
            Our Roster
          </h2>
        </div>

        {/* Roster photo */}
        <div className="reveal relative w-full overflow-hidden" style={{ borderTop: "2px solid var(--gold)" }}>
          <Image
            src="/roster.jpg"
            alt="KSM Professional Roster"
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Caption */}
        <div className="reveal text-center mt-6">
          <p
            className="text-sm font-light tracking-widest uppercase"
            style={{ color: "var(--grey)" }}
          >
            Client list available upon request
          </p>
        </div>

      </div>
    </section>
  );
}
