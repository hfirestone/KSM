import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KSM – Keucheyan Sports Management",
  description:
    "Elite basketball representation across the NBA, EuroLeague & beyond. Founded in 2008, KSM is big enough to win, small enough to care.",
  keywords: ["basketball agent", "sports management", "NBA", "EuroLeague", "KSM", "Keucheyan"],
  openGraph: {
    title: "KSM – Keucheyan Sports Management",
    description: "Big Enough to Win, Small Enough to Care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
