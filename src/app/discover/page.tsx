import Image from "next/image";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { Nav } from "@/components/Nav";

const principles = [
  {
    title: "Bring intelligence to the point of need",
    detail: "Rather than requiring people to move toward information, NIKI moves intelligence toward people.",
  },
  {
    title: "Adapt to existing homes",
    detail: "The home should not require renovation to become intelligent.",
  },
  {
    title: "Increase independence",
    detail: "Reduce physical effort while preserving user control.",
  },
  {
    title: "Stay lightweight",
    detail: "Awareness, mobility, and simple clamp interactions—not heavy manipulation.",
  },
  {
    title: "Earn trust",
    detail: "Communicate clearly. Operate predictably. Respect privacy. Keep people in control.",
  },
];

const useCases = [
  {
    title: "Accessible living",
    copy: "Read appliance displays, check another room, view elevated objects, and use soft clamps to help with light reach tasks without unnecessary trips.",
    image: "/images/niki-access.png",
    alt: "NIKI using soft clamps to hold a light item for a wheelchair user",
  },
  {
    title: "Intelligent home",
    copy: "Instead of replacing appliances with connected ones, NIKI observes, understands, and uses simple clamps to tap the controls you already have.",
    image: "/images/niki-appliance.png",
    alt: "NIKI using soft two-pad clamps on a kitchen oven control",
  },
  {
    title: "Everyday assistance",
    copy: "Follow users, locate belongings, answer requests from anywhere in the home, and handle lightweight visual and physical tasks.",
    image: "/images/niki-follow.png",
    alt: "NIKI with soft clamps following a person through a cozy home hallway",
  },
  {
    title: "Independent living",
    copy: "Daily reminders, wellness check-ins, family communication, and environmental observation—supplementing caregivers, never replacing them.",
    image: "/images/niki-communicate.png",
    alt: "NIKI with soft clamps facilitating family communication with an older adult",
  },
];

const notList = [
  "a caregiver",
  "a medical device",
  "a security system",
  "a humanoid robot",
  "a flying camera",
  "a replacement for human judgment",
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero-comes-to-you.png"
          alt="NIKI with sleek soft clamps flying toward a person in a sunlit living room"
          fill
          priority
          className="object-cover object-[42%_42%] md:animate-ken-burns md:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/40 to-cocoa/20 md:bg-gradient-to-r md:from-cocoa/80 md:via-cocoa/40 md:to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-cocoa/60 via-transparent to-cocoa/25 md:block" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-6 md:justify-center md:px-8 md:pb-24">
          <div className="max-w-xl">
            <h1 className="font-display animate-fade-up text-5xl font-bold tracking-[0.16em] text-white sm:text-7xl md:text-8xl">
              NIKI
            </h1>
            <p className="animate-fade-up delay-1 mt-5 text-xl font-semibold leading-snug text-white/95 text-balance md:text-2xl">
              The smart home that comes to you.
            </p>
            <p className="animate-fade-up delay-2 mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              An autonomous aerial presence that brings intelligence wherever it&apos;s
              needed—without renovating the home.
            </p>
            <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ember px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ember-hover"
              >
                Request early access
              </a>
              <a
                href="#philosophy"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
              >
                Explore the idea
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-foam py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
            Mission
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
            Bring intelligent physical presence to every home.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            Homes should become more accessible and intelligent without expensive
            renovations, connected appliances, or complex ecosystems. Instead of replacing
            existing homes, NIKI adapts to them—extending people&apos;s ability to navigate,
            understand, and use everyday spaces.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="niki-mesh py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              Philosophy
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              The intelligence moves. The home stays the same.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-soft">
              Modern smart homes often ask you to replace lights, locks, cameras, and
              appliances. NIKI takes a different path: observe existing devices, understand
              their state, and selectively interact—delivering smart-home capability without
              rebuilding the house.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-blush md:aspect-[4/3] md:rounded-[2rem]">
            <Image
              src="/images/niki-dock.png"
              alt="NIKI with soft clamps resting on its glowing home charging dock"
              fill
              className="object-contain object-center md:object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why flight */}
      <section id="why-flight" className="bg-cocoa py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-bold tracking-[0.18em] text-honey uppercase">
            Why flight
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl text-balance">
            Flight is not a feature. It is the foundation.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-peach/80">
            Homes are three-dimensional. Ground robots stay on the floor. Fixed cameras stay
            where they were installed. NIKI removes both limits—reaching rooms, elevated
            viewpoints, and household objects without modifying the home.
          </p>

          <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
            {[
              {
                title: "Not trapped in a speaker",
                detail: "Intelligence travels to the place that needs it—not the other way around.",
              },
              {
                title: "Not stuck on the floor",
                detail: "Shelves, counters, doorways, and multi-room layouts become reachable.",
              },
              {
                title: "Not bolted to a wall",
                detail: "One aerial agent replaces the need for cameras in every room.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-peach/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilitiesSection />

      {/* Use cases */}
      <section id="use-cases" className="bg-cocoa">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
          <p className="text-sm font-bold tracking-[0.18em] text-honey uppercase">
            Primary use cases
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl text-balance">
            Built for independence, accessibility, and everyday help.
          </h2>
        </div>

        {useCases.map((useCase, i) => (
          <article
            key={useCase.title}
            className="relative overflow-hidden md:min-h-[78vh]"
          >
            <div className="relative aspect-[3/2] md:absolute md:inset-0 md:aspect-auto">
              <Image
                src={useCase.image}
                alt={useCase.alt}
                fill
                className="object-cover object-[42%_center] md:object-center"
                sizes="100vw"
              />
            </div>
            <div
              className={`pointer-events-none absolute inset-0 hidden md:block ${
                i % 2 === 0
                  ? "bg-gradient-to-r from-cocoa/88 via-cocoa/45 to-cocoa/10"
                  : "bg-gradient-to-l from-cocoa/88 via-cocoa/45 to-cocoa/10"
              }`}
            />
            <div
              className={`relative z-10 bg-cocoa px-6 py-10 md:absolute md:inset-0 md:flex md:min-h-[78vh] md:items-center md:bg-transparent md:px-8 md:py-24 ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="mx-auto w-full max-w-6xl md:mx-0 md:max-w-md">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-honey uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl text-balance">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/75">{useCase.copy}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Principles */}
      <section id="principles" className="bg-foam py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
            Product principles
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
            Human-centered intelligence.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-soft">
            NIKI gathers information, travels, communicates, and interacts. People remain
            responsible for decisions.
          </p>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <li key={principle.title} className="border-t border-line pt-5">
                <span className="font-display text-xs font-bold tracking-[0.18em] text-ember uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-lg font-bold text-cocoa">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{principle.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What NIKI is not */}
      <section className="bg-blush py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              Clarity
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              What NIKI is not.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-soft">
              Its role is autonomous mobility, intelligent perception, and lightweight
              clamp-assisted household interaction—presence and assistance, not judgment.
            </p>
          </div>
          <ul className="space-y-0">
            {notList.map((item) => (
              <li
                key={item}
                className="border-t border-line py-4 font-display text-xl font-semibold text-cocoa-soft"
              >
                Not {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Presence / face */}
      <section className="bg-foam py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-full bg-blush sm:max-w-md">
            <Image
              src="/images/niki-face.png"
              alt="NIKI product close-up showing friendly face display and soft two-pad clamps"
              fill
              className="object-cover object-[center_40%] md:animate-soft-float md:object-center"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              Presence
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              Eyes for presence. Soft clamps for light touch.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-soft">
              A round face display shows listening, thinking, following, and privacy states.
              Simple two-pad clamps handle buttons, switches, and light grabs—nothing more
              complex than that.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="niki-mesh py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
            Vision
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
            Today&apos;s AI understands language. Tomorrow&apos;s AI will understand places.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            We envision a future where AI moves through the physical world as naturally as it
            reasons through the digital one. NIKI is the first step—an autonomous aerial agent
            that navigates, observes, communicates, and assists wherever intelligence is needed.
          </p>
          <p className="mt-6 max-w-2xl font-display text-xl font-semibold text-cocoa">
            Make autonomous aerial intelligence as common in homes as smartphones are today.
          </p>
        </div>
      </section>

      {/* FLEET relationship */}
      <section className="bg-cocoa py-20 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold tracking-[0.22em] text-honey uppercase">
              FLEET
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
              The autonomy platform behind NIKI.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-peach/75">
              Aerial navigation, localization, perception, mission planning, and human
              interaction developed for NIKI also power future systems for senior living,
              facilities, industry, and logistics.
            </p>
          </div>
          <a
            href="/fleet"
            className="inline-flex rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-cocoa"
          >
            Explore FLEET
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line bg-foam py-20 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="font-display text-sm font-bold tracking-[0.22em] text-ember uppercase">
              NIKI
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-4xl text-balance">
              Bring intelligence to your home.
            </h2>
            <p className="mt-3 max-w-md text-soft">
              Early access for households exploring accessibility, independence, and
              smarter living without renovation.
            </p>
          </div>
          <a
            href="mailto:hello@niki.home"
            className="inline-flex rounded-full bg-ember px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ember-hover"
          >
            hello@niki.home
          </a>
        </div>
      </section>

      <footer className="border-t border-cocoa/10 bg-cocoa px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm font-bold tracking-[0.28em] text-white">
            NIKI
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-peach/80">
            <span>Autonomous Aerial Home Intelligence Platform</span>
            <a
              href="/"
              className="tracking-[0.14em] text-honey transition-colors hover:text-white"
            >
              Commercial
            </a>
            <a
              href="/fleet"
              className="tracking-[0.14em] text-honey transition-colors hover:text-white"
            >
              FLEET
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
