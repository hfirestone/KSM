"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6 pt-24 pb-16"
      style={{ background: "var(--navy)" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,184,75,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top-right gold corner */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background: "var(--gold)",
          clipPath: "polygon(100% 0, 100% 40%, 60% 0)",
        }}
      />

      {/* Bottom-left gold corner */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background: "var(--gold)",
          clipPath: "polygon(0 60%, 0 100%, 40% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-6 animate-fadeUp"
          style={{ color: "var(--gold)" }}
        >
          Keucheyan Sports Management
        </p>

        <h1
          className="font-barlow-condensed font-black uppercase leading-none tracking-tight animate-fadeUp-1"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
        >
          BIG ENOUGH<br />
          TO <span style={{ color: "var(--gold)" }}>WIN,</span>
          <br />
          SMALL ENOUGH
          <br />
          TO <span style={{ color: "var(--gold)" }}>CARE</span>
        </h1>

        <p
          className="mt-6 font-light tracking-wide animate-fadeUp-2"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            color: "var(--light)",
          }}
        >
          Elite basketball representation across the NBA, EuroLeague & beyond — since 2008
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap animate-fadeUp-3">
          <a
            href="#clients"
            className="clip-btn px-10 py-4 font-barlow-condensed font-bold text-base tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            Our Clients
          </a>
          <a
            href="#contact"
            className="clip-btn px-10 py-4 font-barlow-condensed font-bold text-base tracking-widest uppercase border transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
          >
            Work With Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex gap-12 justify-center flex-wrap animate-fadeUp-4">
          {[
            { num: "17+", label: "Years Experience" },
            { num: "11", label: "Active Clients" },
            { num: "4", label: "Experts on Team" },
            { num: "NBA", label: "+ Global Leagues" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-barlow-condensed font-black leading-none"
                style={{ fontSize: "2.6rem", color: "var(--gold)" }}
              >
                {s.num}
              </div>
              <div
                className="text-xs font-semibold tracking-[0.18em] uppercase mt-1"
                style={{ color: "var(--grey)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
