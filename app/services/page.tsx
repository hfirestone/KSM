import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – KSM Keucheyan Sports Management",
  description: "KSM offers agent representation, legal counsel, financial management, and marketing for professional basketball players.",
};

const team = [
  {
    icon: "🏀",
    name: "Sevag Keucheyan",
    role: "Founder & Agent",
    bio: "Founder of KSM in 2008. Born March 30, 1978, Sevag graduated from the Haute École de Gestion of Geneva in 2005 and played professionally for about 10 years. He speaks French, English, Italian, and Armenian.",
    service: "Agent Representation",
    serviceDesc: "Contract negotiation, career planning, placement in top leagues worldwide.",
    contact: "skeucheyan@gmail.com",
  },
  {
    icon: "⚖️",
    name: "Olivier Ducrey",
    role: "Sports Lawyer",
    bio: "A leading Swiss lawyer specializing in sports and commercial law, advising federations, clubs, athletes, and sponsors on contracts, disputes, and regulatory matters. Ranked among the top sports lawyers by Chambers and Legal 500. Has worked with UEFA on several European Championships.",
    service: "Legal Services",
    serviceDesc: "Contract review, dispute resolution, regulatory compliance, real estate advisory.",
    contact: "ducrey@timesattorneys.ch",
  },
  {
    icon: "💰",
    name: "Michel Marguerat",
    role: "Financial Manager",
    bio: "A wealth manager with a CIIA diploma who began his career at Credit Suisse before moving to LGT and Banque Piguet Galland. Since 2013, he has led Vector Gestion's Lausanne office and manages the portfolios of many elite athletes.",
    service: "Financial & Tax Planning",
    serviceDesc: "Wealth management, tax optimization, investment strategy, retirement planning.",
    contact: "mmarguerat@vectorgestion.ch",
  },
  {
    icon: "🇺🇸",
    name: "Excel Sports Management",
    role: "US Partner",
    bio: "The basketball division of Excel Sports Management is a premier representation group within global basketball, representing elite NBA players, coaches, executives, and broadcasters. Represents numerous All-Stars, lottery draft picks, and top international talent, and is widely respected for its strategic approach, strong league relationships, and ability to maximize both on-court earnings and long-term off-court opportunities for its clients.",
    service: "NBA & US Market",
    serviceDesc: "NBA placement, US contract negotiation, American market brand building.",
    contact: null,
  },
];

const offerings = [
  { icon: "📋", title: "Contract Negotiation", desc: "We secure the best possible contracts in every league we operate — NBA, EuroLeague, ACB, and 20+ countries." },
  { icon: "📣", title: "Marketing & Endorsements", desc: "Shoe deals, brand partnerships, autograph sessions, social media growth, and public appearances — all tailored to you." },
  { icon: "💸", title: "Financial Planning", desc: "Your earnings are handled strategically, no matter where you play or what your tax situation looks like." },
  { icon: "⚖️", title: "Legal Protection", desc: "Expert legal review of every contract and dispute, backed by our top sports law partners." },
  { icon: "🌍", title: "Global Network", desc: "Relationships with clubs, coaches, and GMs across Europe, Asia, the Middle East, and North America." },
  { icon: "🤝", title: "Personalized Care", desc: "As a boutique agency, every client gets direct access to Sevag — not an assistant." },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--navy)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page hero */}
      <div className="relative pt-40 pb-20 px-6 text-center overflow-hidden" style={{ background: "var(--navy2)" }}>
        <div className="absolute top-0 right-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(100% 0, 100% 40%, 60% 0)", opacity: 0.85 }} />
        <div className="absolute bottom-0 left-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(0 60%, 0 100%, 40% 100%)", opacity: 0.85 }} />
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>What We Offer</p>
        <h1 className="font-barlow-condensed font-black uppercase leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
          Our <span style={{ color: "var(--gold)" }}>Services</span>
        </h1>
      </div>

      {/* What we offer grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader tag="Full Representation" title="Everything You Need" />
        <div className="mt-10 grid md:grid-cols-3 gap-0.5">
          {offerings.map((o) => (
            <div key={o.title} className="service-card relative p-8 transition-colors duration-200" style={{ background: "var(--navy2)" }}>
              <span className="text-3xl mb-4 block">{o.icon}</span>
              <div className="font-barlow-condensed font-bold text-lg tracking-wide uppercase mb-2" style={{ color: "white" }}>{o.title}</div>
              <p className="text-sm leading-relaxed font-light" style={{ color: "var(--grey)" }}>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24" style={{ background: "var(--navy2)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="The Experts Behind KSM" title="Meet the Team" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <div key={m.name} className="p-8 border" style={{ background: "var(--navy)", borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{m.icon}</span>
                  <div>
                    <div className="font-barlow-condensed font-bold text-xl tracking-wide uppercase">{m.name}</div>
                    <div className="text-xs font-semibold tracking-[0.15em] uppercase mt-0.5" style={{ color: "var(--gold)" }}>{m.role}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-light mb-4" style={{ color: "var(--grey)" }}>{m.bio}</p>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{m.service}</div>
                  <p className="text-xs leading-relaxed font-light" style={{ color: "var(--grey)" }}>{m.serviceDesc}</p>
                  {m.contact && (
                    <a href={`mailto:${m.contact}`} className="inline-block mt-3 text-xs tracking-wide transition-colors" style={{ color: "var(--light)" }}>
                      {m.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Start the conversation</p>
        <h2 className="font-barlow-condensed font-black uppercase text-4xl md:text-5xl mb-8">Let&apos;s Build Your <span style={{ color: "var(--gold)" }}>Career</span></h2>
        <a href="/#contact" className="clip-btn inline-block px-12 py-4 font-barlow-condensed font-bold text-base tracking-widest uppercase" style={{ background: "var(--gold)", color: "var(--navy)" }}>
          Contact KSM
        </a>
      </div>

      <Footer />
    </main>
  );
}
