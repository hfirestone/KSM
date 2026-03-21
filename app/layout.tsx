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
  title: "KSM – Keucheyan Sports Management | Elite Basketball Agency",
  description:
    "Keucheyan Sports Management (KSM) is a boutique basketball agency founded in 2008, representing elite professional players across the NBA, EuroLeague, ACB, and leagues worldwide. Big enough to win, small enough to care.",
  keywords: [
    "basketball agent",
    "sports management",
    "NBA agent",
    "EuroLeague agent",
    "basketball representation",
    "KSM",
    "Keucheyan Sports Management",
    "Sevag Keucheyan",
    "professional basketball",
    "sports agency",
    "basketball contract negotiation",
    "athlete representation",
  ],
  authors: [{ name: "Keucheyan Sports Management" }],
  creator: "Keucheyan Sports Management",
  metadataBase: new URL("https://www.ksmbasketball.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.ksmbasketball.com",
    title: "KSM – Keucheyan Sports Management | Elite Basketball Agency",
    description:
      "A boutique basketball agency representing elite professional players across the NBA, EuroLeague, and leagues worldwide. Founded in 2008 by Sevag Keucheyan.",
    siteName: "Keucheyan Sports Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KSM – Keucheyan Sports Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSM – Keucheyan Sports Management | Elite Basketball Agency",
    description:
      "A boutique basketball agency representing elite professional players across the NBA, EuroLeague, and leagues worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
