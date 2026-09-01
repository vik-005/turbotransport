import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turbo Transport — Fret routier et logistique en Afrique de l'Ouest",
  description:
    "Turbo Transport est votre partenaire logistique au Bénin et en Afrique de l'Ouest. Fret routier, messagerie express, déménagement professionnel et logistique sur-mesure. Simulez votre trajet en ligne.",
  keywords: [
    "transport Bénin",
    "fret routier Cotonou",
    "logistique Afrique de l'Ouest",
    "transport marchandises Bénin",
    "messagerie express Cotonou",
    "Turbo Transport",
  ],
  openGraph: {
    title: "Turbo Transport — Fret routier et logistique en Afrique de l'Ouest",
    description:
      "Partenaire logistique de référence au Bénin depuis 2012. Fret, messagerie, déménagement pro. Simulateur de tarif en ligne.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
