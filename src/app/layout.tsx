import type { Metadata } from "next";
import { Nunito_Sans, Outfit, Space_Grotesk, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "NIKI — Autonomous Flying Home Assistant",
  description:
    "A micro indoor flying robot that wakes by voice, finds you, follows safely, helps with visual tasks, and returns to charge on its own.",
  openGraph: {
    title: "NIKI — Your flying home assistant",
    description:
      "Call by voice. NIKI launches, finds you, follows at a safe distance, and helps around the house—then returns to dock.",
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
      className={`${outfit.variable} ${nunitoSans.variable} ${spaceGrotesk.variable} ${sourceSans.variable}`}
    >
      <body
        className="font-body antialiased"
        style={
          {
            "--font-display": "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
            "--font-body": "var(--font-nunito), ui-sans-serif, system-ui, sans-serif",
            "--font-fleet-display": "var(--font-space), ui-sans-serif, system-ui, sans-serif",
            "--font-fleet-body": "var(--font-source), ui-sans-serif, system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
