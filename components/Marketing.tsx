"use client";

import { useReveal } from "./useReveal";
import SectionHeader from "./SectionHeader";

export default function Marketing() {
  const ref = useReveal();

  return (
    <section id="marketing" className="relative overflow-hidden" style={{ background: "var(--navy2)" }}>
      <div className="absolute top-0 left-0 w-80 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(0 0, 100% 0, 0 100%)", opacity: 0.85 }} />
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeader tag="Brand Building" title={<>Marketing 📣</>} />
        <div className="reveal mt-8 grid md:grid-cols-2 gap-16">
          <p className="text-sm leading-relaxed font-light" style={{ color: "var(--light)" }}>
            With the support of top global marketers, KSM focuses on your individual promotion, building a tailored marketing mix designed to maximize both your earnings and your success on and off the court. In today&apos;s world, perception is a key driver of success. By partnering with leading professionals in the business world and leveraging our extensive experience in athlete promotion, KSM has formed a forward-thinking team dedicated to managing your brand.
          </p>
          <p className="text-sm leading-relaxed font-light" style={{ color: "var(--light)" }}>
            Our strategy includes securing and managing shoe deals, endorsements with leading product brands, organizing autograph sessions and public appearances, and developing a powerful social media presence to grow your fan base. Each initiative is carefully planned around your unique market potential and personal characteristics, ensuring your promotion reflects both who you are as a player and as a person.
          </p>
        </div>
      </div>
    </section>
  );
}
