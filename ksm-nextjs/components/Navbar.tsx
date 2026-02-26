"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,22,35,0.97)" : "rgba(15,22,35,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(232,184,75,0.12)",
      }}
    >
      {/* Logo */}
      <Link href="#home" className="font-barlow-condensed font-black text-3xl tracking-widest text-white">
        KSM
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{
                color: activeSection === link.href.replace("#", "") ? "var(--gold)" : "var(--light)",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block text-xs font-semibold tracking-widest uppercase px-5 py-2 transition-colors duration-200"
        style={{ background: "var(--gold)", color: "var(--navy)" }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--gold2)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--gold)")}
      >
        Contact
      </a>
    </nav>
  );
}
