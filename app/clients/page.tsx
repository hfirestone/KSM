import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients – KSM Keucheyan Sports Management",
  description: "KSM represents elite professional basketball players across the NBA, EuroLeague, ACB, and leagues worldwide.",
};

const clients = [
  { name: "Yanic Konan Niederhauser", team: "Los Angeles Clippers", league: "NBA", flag: "🇺🇸" },
  { name: "Chris Manon", team: "Los Angeles Lakers", league: "NBA", flag: "🇺🇸" },
  { name: "Chris Jones", team: "Hapoel Tel-Aviv", league: "EuroLeague", flag: "🇮🇱" },
  { name: "Otis Livingston", team: "Girona", league: "ACB", flag: "🇪🇸" },
  { name: "Michael Forrest", team: "Murcia", league: "ACB", flag: "🇪🇸" },
  { name: "Ty Nichols", team: "Peristeri", league: "Greek Basketball League", flag: "🇬🇷" },
  { name: "Christian Vital", team: "Derthona", league: "Italy Lega", flag: "🇮🇹" },
  { name: "DeAndrere Gholston", team: "Hapoel Gali Elion", league: "Winner League", flag: "🇮🇱" },
  { name: "Ronald March", team: "Mersin", league: "BSL-BCL Champions League", flag: "🇹🇷" },
  { name: "Jaizec Lottie", team: "Oradea", league: "FIBA Europe Cup", flag: "🇷🇴" },
  { name: "Efton Reid III", team: "Kobrat", league: "Korisliiga", flag: "🇫🇮" },
];

const testimonials = [
  { author: "Chris Jones", quote: "Sevag discovered me while I was playing in Mongolia. I was just a young player with a dream, and he believed in me when almost no one else did. Thanks to his vision, dedication, and tireless work, I made it all the way to the EuroLeague." },
  { author: "Otis Livingston", quote: "I started working with him in 2022 and I have trusted him since day one. His professionalism is top notch and his communication is always on point." },
  { author: "Michael Forrest", quote: "Sevag is someone who only wants the best for his players. He put me in a position that has allowed me to continue playing the game that I love at a high level." },
  { author: "Christian Vital", quote: "Sevag is an agent that is restless. With many connections in Europe and the states he works relentlessly to make sure his guys have jobs and places them where they can succeed." },
];

export default function ClientsPage() {
  return (
    <main style={{ background: "var(--navy)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page hero */}
      <div className="relative pt-40 pb-20 px-6 text-center overflow-hidden" style={{ background: "var(--navy2)" }}>
        <div className="absolute top-0 right-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(100% 0, 100% 40%, 60% 0)", opacity: 0.85 }} />
        <div className="absolute bottom-0 left-0 w-72 h-48 pointer-events-none" style={{ background: "var(--gold)", clipPath: "polygon(0 60%, 0 100%, 40% 100%)", opacity: 0.85 }} />
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>The KSM Roster</p>
        <h1 className="font-barlow-condensed font-black uppercase leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
          Our <span style={{ color: "var(--gold)" }}>Clients</span>
        </h1>
        <p className="mt-4 font-light max-w-xl mx-auto" style={{ color: "var(--light)", fontSize: "1rem" }}>
          11 elite players. 8 countries. 1 agency that cares.
        </p>
      </div>

      {/* Client cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader tag="Professional Roster" title="Current Clients" />
        <div className="mt-10 grid md:grid-cols-2 gap-3">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="flex items-center gap-5 px-6 py-5 border transition-all duration-200 group"
              style={{ background: "var(--navy2)", borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,75,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(232,184,75,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "var(--navy2)";
              }}
            >
              <div className="font-barlow-condensed font-black text-2xl w-8 text-center flex-shrink-0" style={{ color: "rgba(232,184,75,0.25)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="font-barlow-condensed font-bold text-lg tracking-wide uppercase">{c.name}</div>
                <div className="text-xs font-light mt-0.5" style={{ color: "var(--grey)" }}>
                  {c.flag} {c.team} — {c.league}
                </div>
              </div>
              <div
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 flex-shrink-0"
                style={{ background: "rgba(232,184,75,0.1)", color: "var(--gold)", border: "1px solid rgba(232,184,75,0.2)" }}
              >
                {c.league}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24" style={{ background: "var(--navy2)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="In Their Words" title="Client Testimonials" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="p-8" style={{ background: "var(--navy)", borderTop: "2px solid var(--gold)" }}>
                <span className="block font-serif leading-none mb-4 opacity-40" style={{ fontSize: "3.5rem", color: "var(--gold)" }}>&ldquo;</span>
                <p className="text-sm leading-relaxed font-light italic" style={{ color: "var(--light)" }}>{t.quote}</p>
                <div className="mt-5 font-barlow-condensed font-bold text-sm tracking-widest uppercase" style={{ color: "var(--gold)" }}>— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-20 px-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Join the roster</p>
        <h2 className="font-barlow-condensed font-black uppercase text-4xl md:text-5xl mb-8">
          Be Our Next <span style={{ color: "var(--gold)" }}>Success Story</span>
        </h2>
        <a href="/#contact" className="clip-btn inline-block px-12 py-4 font-barlow-condensed font-bold text-base tracking-widest uppercase" style={{ background: "var(--gold)", color: "var(--navy)" }}>
          Get Represented
        </a>
      </div>

      <Footer />
    </main>
  );
}
