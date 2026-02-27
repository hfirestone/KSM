"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,22,35,0.97)" : "rgba(15,22,35,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(232,184,75,0.12)",
      }}
    >
      <Link href="/" className="font-barlow-condensed font-black text-3xl tracking-widest text-white hover:text-amber-400 transition-colors">
        KSM
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{ color: pathname === link.href ? "var(--gold)" : "var(--light)" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="/#contact"
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
