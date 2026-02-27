export default function Footer() {
  return (
    <footer
      className="text-center py-12 px-6"
      style={{ background: "#080c12" }}
    >
      <div
        className="font-barlow-condensed font-black tracking-[0.15em] mb-1"
        style={{ fontSize: "3rem" }}
      >
        KSM
      </div>
      <div
        className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
        style={{ color: "var(--grey)" }}
      >
        Keucheyan Sports Management
      </div>
      <div className="font-barlow-condensed font-bold text-base tracking-[0.15em] uppercase">
        Big Enough to Win,{" "}
        <span style={{ color: "var(--gold)" }}>Small Enough to Care</span>
      </div>
      <p className="mt-6 text-xs font-light" style={{ color: "var(--grey)" }}>
        © {new Date().getFullYear()} Keucheyan Sports Management. All rights reserved. Founded 2008 · Geneva, Switzerland
      </p>
    </footer>
  );
}
