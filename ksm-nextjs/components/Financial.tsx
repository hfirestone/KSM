"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

export default function Financial() {
  const ref = useReveal();

  return (
    <section id="financial" className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-28">
        <SectionHeader
          tag="Wealth Management"
          title={
            <>
              Financial &amp;<br />Tax Planning 💰
            </>
          }
        />

        <div className="reveal mt-8 max-w-2xl">
          <p className="text-base leading-relaxed font-light" style={{ color: "var(--light)" }}>
            KSM not only focuses on your promotion and career growth but also takes care of your
            financial planning and tax management, no matter where you are from. Our team ensures your
            earnings are handled strategically, helping you make informed decisions, protect your
            wealth, and optimize your financial future throughout your professional journey.
          </p>
        </div>
      </div>
    </section>
  );
}
