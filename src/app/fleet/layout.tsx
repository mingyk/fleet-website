import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLEET — Autonomous Fleet Platform for Field Services",
  description:
    "Turn a 10-person crew into 1 operator. Truck-mounted autonomous drones coordinated by FleetOS for cleaning, inspection, spraying, and outdoor field work.",
};

export default function FleetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
