import type { Metadata } from "next";
import { Limelight, Nunito_Sans, Outfit, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-limelight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIKI",
  description:
    "NIKI is an autonomous aerial home intelligence platform that brings intelligent physical presence to every home—without renovating or replacing your appliances.",
  openGraph: {
    title: "NIKI",
    description:
      "Bring intelligence wherever it's needed. NIKI flies to observe, communicate, and interact—adapting to the home you already have.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${nunitoSans.variable} ${spaceGrotesk.variable} ${sourceSans.variable} ${limelight.variable}`}
    >
      <body
        className="font-body antialiased"
        style={
          {
            "--font-display": "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
            "--font-body": "var(--font-nunito), ui-sans-serif, system-ui, sans-serif",
            "--font-fleet-display": "var(--font-space), ui-sans-serif, system-ui, sans-serif",
            "--font-fleet-body": "var(--font-source), ui-sans-serif, system-ui, sans-serif",
            "--font-commercial": "var(--font-limelight), ui-serif, Georgia, serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
