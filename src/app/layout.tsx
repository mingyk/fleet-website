import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
  title: "FLEET — Autonomous Fleet Platform for Field Services",
  description:
    "Turn a 10-person crew into 1 operator. Truck-mounted autonomous drones coordinated by FleetOS for cleaning, inspection, spraying, and outdoor field work.",
  openGraph: {
    title: "FLEET — Autonomous Fleet Platform",
    description:
      "Automate field-service labor from 10 people down to 1—with a shared Fleet Operating System.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSans.variable}`}>
      <body
        className="font-body antialiased"
        style={
          {
            "--font-display": "var(--font-space), ui-sans-serif, system-ui, sans-serif",
            "--font-body": "var(--font-source), ui-sans-serif, system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
