import Image from "next/image";
import { Nav } from "@/components/Nav";
import { WorkflowSection } from "@/components/WorkflowSection";

const fleetOsLayers = [
  {
    title: "Environment Mapping",
    items: ["Site scanning", "Terrain modeling", "Obstacle detection", "Digital twin generation"],
  },
  {
    title: "Mission Planning",
    items: ["Route generation", "Task allocation", "Resource optimization", "Coverage planning"],
  },
  {
    title: "Multi-Agent Coordination",
    items: ["Dynamic reassignment", "Collision avoidance", "Fleet sync", "Autonomous cooperation"],
  },
  {
    title: "Computer Vision",
    items: ["Object detection", "Target ID", "Surface analysis", "Quality verification"],
  },
  {
    title: "AI Decision Layer",
    items: ["Job analysis", "Exception handling", "Work optimization", "Completion checks"],
  },
  {
    title: "Reporting Layer",
    items: ["Before/after imagery", "Work logs", "Quality reports", "Billing docs"],
  },
];

const roles = [
  {
    name: "Mapping",
    role: "Recon & digital twin",
    detail: "LiDAR, visual imaging, thermal inspection, GPS localization.",
  },
  {
    name: "Task",
    role: "Physical work",
    detail: "Pressure washing, spraying, weed control, solar cleaning.",
  },
  {
    name: "Inspection",
    role: "Quality assurance",
    detail: "High-res imaging, surface analysis, defect detection, completion validation.",
  },
  {
    name: "Manipulator",
    role: "Physical interaction",
    detail: "Robotic arms, valve operation, tool deployment, equipment handling.",
  },
];

const markets = [
  {
    title: "Exterior Cleaning",
    points: "Building washing · Concrete cleaning · Graffiti removal · Facade maintenance",
    image: "/images/cleaning-v2.png",
    alt: "Autonomous drones pressure-washing a filthy commercial building facade from a truck-mounted dock",
  },
  {
    title: "Solar Panel Cleaning",
    points: "Utility-scale farms · Commercial installs · Recurring dust removal",
    image: "/images/solar.png",
    alt: "Drone cleaning solar panels across a utility-scale farm",
  },
  {
    title: "Commercial Pest Control",
    points: "Warehouses · Apartment complexes · Precision interior treatment",
    image: "/images/pest-v2.png",
    alt: "Autonomous drones spraying pesticide inside a warehouse for commercial pest control",
  },
  {
    title: "Weed Control",
    points: "Utility corridors · Solar farms · Government & industrial lots",
    image: "/images/weed.png",
    alt: "Agricultural spray drone treating weeds along a corridor",
  },
];

export default function FleetPage() {
  return (
    <main id="top" className="font-fleet-body overflow-x-hidden bg-paper text-ink">
      <Nav variant="fleet" />

      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Truck-mounted FLEET platform deploying autonomous drones at an industrial worksite"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:px-8 md:pb-24">
          <div className="max-w-xl">
            <h1 className="font-fleet-display animate-fade-up text-5xl font-bold tracking-[0.22em] text-white sm:text-6xl md:text-7xl">
              FLEET
            </h1>
            <p className="animate-fade-up delay-1 mt-6 text-xl font-medium leading-snug text-white/90 text-balance md:text-2xl">
              Automate a 10-person job down to 1.
            </p>
            <p className="animate-fade-up delay-2 mt-4 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
              A truck-mounted platform that deploys coordinated autonomous drones—no crew
              required on the work surface.
            </p>
            <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="bg-signal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-hover"
              >
                Talk to us
              </a>
              <a
                href="#product"
                className="border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
              >
                See the platform
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
            The shift
          </p>
          <h2 className="font-fleet-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            <span className="text-ink-soft/45 line-through decoration-ink-soft/30">10 workers</span>
            <span className="mx-3 text-teal md:mx-4">→</span>
            <span>1 operator</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Same truck. Autonomous units do the work. One person supervises.
          </p>

          <div className="mt-14 grid gap-0 border border-fog md:grid-cols-2">
            <div className="border-b border-fog p-8 md:border-b-0 md:border-r md:p-10">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Current model
              </p>
              <ul className="font-fleet-display mt-6 space-y-4 text-2xl font-semibold text-ink-soft/70 md:text-3xl">
                <li>1 Truck</li>
                <li>2–10 Workers</li>
                <li>Manual execution</li>
              </ul>
            </div>
            <div className="bg-teal/[0.06] p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                FLEET model
              </p>
              <ul className="font-fleet-display mt-6 space-y-4 text-2xl font-semibold text-ink md:text-3xl">
                <li>1 Truck</li>
                <li>1 Operator</li>
                <li>5–10 Autonomous units</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-teal-bright uppercase">
              Product
            </p>
            <h2 className="font-fleet-display mt-3 text-3xl font-bold tracking-tight text-paper md:text-5xl">
              The platform box.
            </h2>
            <p className="mt-4 text-lg text-steel text-balance">
              One modular dock that mounts on any heavy-load truck. Specialized drones for
              every role—shared FleetOS intelligence.
            </p>
          </div>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-ink-soft md:aspect-[21/10]">
            <Image
              src="/images/product.png"
              alt="FLEET platform box with specialized autonomous drones for mapping, task, inspection, and manipulator roles"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-fleet-display text-sm font-semibold tracking-[0.14em] text-white/80 uppercase md:bottom-8 md:left-8">
              Truck-mountable · Multi-role · Fully autonomous
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((unit, i) => (
              <div key={unit.name} className="border-t border-white/15 pt-6">
                <span className="font-fleet-display text-xs font-bold tracking-widest text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-fleet-display mt-2 text-xl font-bold text-paper">
                  {unit.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-teal-bright">{unit.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-steel">{unit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="bg-ink">
        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-teal-bright uppercase">
              Use cases
            </p>
            <h2 className="font-fleet-display mt-3 text-3xl font-bold tracking-tight text-paper md:text-5xl text-balance">
              Built for repetitive outdoor field work.
            </h2>
          </div>
        </div>

        <div>
          {markets.map((market, i) => (
            <article
              key={market.title}
              className="relative min-h-[70vh] overflow-hidden md:min-h-[75vh]"
            >
              <Image
                src={market.image}
                alt={market.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className={`absolute inset-0 ${
                  i % 2 === 0
                    ? "bg-gradient-to-r from-ink/88 via-ink/50 to-ink/15"
                    : "bg-gradient-to-l from-ink/88 via-ink/50 to-ink/15"
                }`}
              />
              <div
                className={`relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-end px-6 py-16 md:min-h-[75vh] md:items-center md:px-8 md:py-24 ${
                  i % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                }`}
              >
                <div className="max-w-md">
                  <p className="font-fleet-display text-xs font-bold tracking-[0.2em] text-teal-bright uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-fleet-display mt-3 text-3xl font-bold text-paper md:text-4xl">
                    {market.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {market.points}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
              Software
            </p>
            <h2 className="font-fleet-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
              FleetOS
            </h2>
            <p className="mt-4 text-lg text-muted text-balance">
              The orchestrator for every deployed unit—mapping, planning, coordination,
              vision, decisions, and reporting in one operating system.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {fleetOsLayers.map((layer, i) => (
              <div key={layer.title} className="border-t border-fog pt-6">
                <span className="font-fleet-display text-xs font-bold tracking-widest text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-fleet-display mt-2 text-lg font-bold text-ink">{layer.title}</h3>
                <ul className="mt-4 space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowSection />

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal uppercase">
            Differentiation
          </p>
          <h2 className="font-fleet-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-5xl text-balance">
            Not one robot per industry. One platform for many.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Traditional robotics
              </p>
              <p className="font-fleet-display mt-4 text-3xl font-bold leading-tight text-ink-soft md:text-4xl">
                One robot.
                <br />
                One industry.
                <br />
                One function.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                FLEET platform
              </p>
              <p className="font-fleet-display mt-4 text-3xl font-bold leading-tight text-ink md:text-4xl">
                One platform.
                <br />
                Multiple industries.
                <br />
                Multiple functions.
              </p>
              <p className="mt-6 max-w-md text-muted">
                Reusable software and hardware. Faster deployment. Higher lifetime value
                through shared FleetOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-fog bg-paper py-20 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="font-fleet-display text-sm font-bold tracking-[0.22em] text-teal uppercase">
              FLEET
            </p>
            <h2 className="font-fleet-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Ready to cut crew size to one?
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Early partners and pilot operators welcome.
            </p>
          </div>
          <a
            href="mailto:hello@fleet.platform"
            className="inline-flex bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-hover"
          >
            hello@fleet.platform
          </a>
        </div>
      </section>

      <footer className="border-t border-ink-soft/30 bg-ink px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-fleet-display text-sm font-bold tracking-[0.28em] text-paper">
            FLEET
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-steel">
            <span>Autonomous Fleet Platform for Field Services</span>
            <a href="/" className="tracking-[0.12em] text-teal-bright transition-colors hover:text-paper">
              NIKI
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
