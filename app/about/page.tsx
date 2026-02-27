import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – KSM Keucheyan Sports Management",
  description: "Founded in 2008, KSM has 17+ years of experience representing elite basketball players worldwide.",
};

const pillars = [
  { title: "Contract Negotiation", desc: "Securing the most lucrative playing contracts across the world's top leagues — NBA, EuroLeague, ACB, and beyond." },
  { title: "Marketing & Brand", desc: "Building tailored marketing strategies to maximize your earnings and presence on and off the court." },
  { title: "Financial Planning", desc: "Strategic wealth management ensuring your earnings are protected and grown throughout your career." },
  { title: "Legal Support", desc: "Expert sports and commercial law advice from Switzerland's top-ranked sports lawyers." },
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--navy)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page hero */}
      <div
        className="relative pt-40 pb-20 px-6 text-center overflow-hidden"
        style={{ background: "var(--navy2)" }}
      >
        <div className="absolute top-0 right-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(100% 0, 100% 40%, 60% 0)", opacity: 0.85 }} />
        <div className="absolute bottom-0 left-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(0 60%, 0 100%, 40% 100%)", opacity: 0.85 }} />
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>Keucheyan Sports Management</p>
        <h1 className="font-barlow-condensed font-black uppercase leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
          About <span style={{ color: "var(--gold)" }}>KSM</span>
        </h1>
      </div>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader tag="Our Mission" title="Who We Are" />
        <div className="mt-10 grid md:grid-cols-2 gap-16">
          <div className="space-y-5">
            {[
              "Keucheyan Sports Management was founded in 2008 with the goal of providing a superior boutique type of representation to professional basketball players. Since its inception, KSM has prided itself in providing personalized representation in the best interest of each and every one of its clients.",
              "We work extremely hard daily to maximize the results of our clients. We secure lucrative playing contracts, assist our clients with off-court marketing and sponsorships, financial management, and any other needs they may have.",
              "KSM has more than 17 years of experience in the industry and has negotiated contracts in many different countries throughout Europe, Asia, the Middle East, and the NBA.",
              "At KSM we take pride in the success of all our clients and their families.",
            ].map((p, i) => (
              <p key={i} className="leading-relaxed font-light text-base" style={{ color: "var(--light)" }}>{p}</p>
            ))}
          </div>
          <div className="space-y-4">
            {pillars.map((p) => (
              <div key={p.title} className="px-5 py-4" style={{ borderLeft: "3px solid var(--gold)", background: "rgba(255,255,255,0.03)" }}>
                <div className="font-barlow-condensed font-bold text-lg tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{p.title}</div>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--grey)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="py-16 px-6" style={{ background: "var(--navy2)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "17+", label: "Years Experience" },
            { num: "11", label: "Active Clients" },
            { num: "4", label: "Team Experts" },
            { num: "20+", label: "Countries Reached" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-barlow-condensed font-black leading-none mb-1" style={{ fontSize: "3rem", color: "var(--gold)" }}>{s.num}</div>
              <div className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--grey)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Ready to take the next step?</p>
        <h2 className="font-barlow-condensed font-black uppercase text-4xl md:text-5xl mb-8">Work With <span style={{ color: "var(--gold)" }}>KSM</span></h2>
        <a href="/#contact" className="clip-btn inline-block px-12 py-4 font-barlow-condensed font-bold text-base tracking-widest uppercase" style={{ background: "var(--gold)", color: "var(--navy)" }}>
          Get In Touch
        </a>
      </div>

      <Footer />
    </main>
  );
}
