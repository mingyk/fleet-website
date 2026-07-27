import Image from "next/image";
import { AssistanceLoop } from "@/components/AssistanceLoop";
import { Nav } from "@/components/Nav";

const skills = [
  "Come here.",
  "Follow me.",
  "Stop here.",
  "Look at this.",
  "What ingredients are on the counter?",
  "Suggest a recipe from these ingredients.",
  "Read this label.",
  "Take a photo.",
  "Record this.",
  "Find my configured item.",
  "Return to your dock.",
];

const moments = [
  {
    title: "Follows without hovering over you",
    copy: "NIKI holds a safe side offset and stays in approved rooms—never above people, never near stairs or open doors.",
    image: "/images/niki-follow.png",
    alt: "NIKI following a person through a bright home hallway at a safe side distance",
  },
  {
    title: "Sees what you point at",
    copy: "Ask about ingredients, labels, or a misplaced item. Local vision models handle the quick looks; complex questions can escalate to the cloud.",
    image: "/images/niki-kitchen.png",
    alt: "NIKI hovering over a kitchen counter inspecting fresh ingredients",
  },
  {
    title: "Comes home on its own",
    copy: "When the job is done—or the battery says so—NIKI returns, aligns to the dock, lands, and charges with the camera shutter closed.",
    image: "/images/niki-return.png",
    alt: "NIKI returning to a warmly lit charging dock in a cozy living room",
  },
];

const split = [
  {
    label: "Aircraft",
    title: "Light, quiet, safe",
    items: [
      "Flight stabilization & obstacle avoidance",
      "Person tracking & safety enforcement",
      "Video/audio streaming",
      "Dock detection and landing",
    ],
  },
  {
    label: "Dock",
    title: "The brains stay home",
    items: [
      "Wake-word, speech, and local LLM/VLM",
      "Task planning and tool execution",
      "Map, video, and user recognition",
      "Jetson Orin Nano–class home compute",
    ],
  },
  {
    label: "Cloud",
    title: "Only when useful",
    items: [
      "Frontier reasoning when needed",
      "Current web information",
      "Complex image understanding",
      "Account sync—never required to fly home",
    ],
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero-niki.png"
          alt="NIKI, a small indoor flying home assistant with a friendly face display, hovering in a sunlit living room"
          fill
          priority
          className="animate-ken-burns object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/75 via-cocoa/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-transparent to-cocoa/25" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:px-8 md:pb-24">
          <div className="max-w-xl">
            <h1 className="font-display animate-fade-up text-6xl font-bold tracking-[0.16em] text-white sm:text-7xl md:text-8xl">
              NIKI
            </h1>
            <p className="animate-fade-up delay-1 mt-5 text-xl font-semibold leading-snug text-white/95 text-balance md:text-2xl">
              Your flying home assistant.
            </p>
            <p className="animate-fade-up delay-2 mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Wake it by voice. It finds you, follows safely, helps with what it sees, then
              returns to charge.
            </p>
            <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ember px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ember-hover"
              >
                Request early access
              </a>
              <a
                href="#loop"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dock intro */}
      <section className="bg-foam py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              Always ready
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              Lives on the dock. Joins you when called.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-soft">
              NIKI stays charged at home, wakes on command, and only flies indoors—one mapped
              floor, adult-supervised, with a hardware emergency stop always within reach.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/niki-dock.png"
              alt="NIKI resting on its glowing home charging dock"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <AssistanceLoop />

      {/* Skills */}
      <section id="skills" className="bg-foam py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              MVP skills
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              Speak simply. NIKI gets it.
            </h2>
            <p className="mt-4 text-lg text-soft">
              Bounded assistance—not open-ended robot control. Flight commands stay
              deterministic and never come from the LLM.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border-t border-line py-4 font-display text-lg font-semibold text-cocoa-soft md:text-xl"
              >
                “{skill}”
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Moments */}
      <section className="bg-cocoa">
        {moments.map((moment, i) => (
          <article
            key={moment.title}
            className="relative min-h-[72vh] overflow-hidden md:min-h-[78vh]"
          >
            <Image
              src={moment.image}
              alt={moment.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 ${
                i % 2 === 0
                  ? "bg-gradient-to-r from-cocoa/88 via-cocoa/45 to-cocoa/10"
                  : "bg-gradient-to-l from-cocoa/88 via-cocoa/45 to-cocoa/10"
              }`}
            />
            <div
              className={`relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-end px-6 py-16 md:min-h-[78vh] md:items-center md:px-8 md:py-24 ${
                i % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
              }`}
            >
              <div className="max-w-md">
                <p className="font-display text-xs font-bold tracking-[0.2em] text-honey uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl text-balance">
                  {moment.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/75">{moment.copy}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Architecture */}
      <section id="architecture" className="niki-mesh py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
                Architecture
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
                Keep the drone light. Put the AI on the dock.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-soft">
                Onboard compute stays lean so NIKI is quieter, safer, and cheaper. The home
                dock runs wake-word, speech, local models, and planning.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/niki-architecture.png"
                alt="NIKI aircraft with home dock computer, microphone array, and charging base"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
            {split.map((column) => (
              <div key={column.label}>
                <p className="text-xs font-bold tracking-[0.18em] text-ember uppercase">
                  {column.label}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-cocoa">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Face / presence */}
      <section className="bg-foam py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full">
            <Image
              src="/images/niki-face.png"
              alt="Close-up of NIKI's round expressive animated-eye face display"
              fill
              className="animate-soft-float object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
              Presence
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
              Expressive eyes—not an uncanny face.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-soft">
              A lightweight round display shows sleeping, listening, thinking, following,
              privacy, and emergency states so you always know what NIKI is doing.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="bg-blush py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
            Privacy
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
            A flying camera only works if trust comes first.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-soft">
            Local processing by default. Physical shutter when docked. Hardwired camera
            indicator. Bathrooms and bedrooms excluded unless you say otherwise.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Physical shutter while charging",
              "Local speech and vision first",
              "No recording by default",
              "One-button delete all media",
              "Guest mode & household consent",
              "Visible privacy state on the face",
            ].map((item) => (
              <li key={item} className="border-t border-line pt-5">
                <p className="font-display text-lg font-semibold text-cocoa">{item}</p>
              </li>
            ))}
          </ul>
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
              Want to be first in your home?
            </h2>
            <p className="mt-3 max-w-md text-soft">
              We&apos;re building the MVP loop: wake, find, follow, assist, return, charge.
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
            <span>Autonomous Flying Home Assistant</span>
            <a href="/fleet" className="tracking-[0.14em] text-honey transition-colors hover:text-white">
              FLEET
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
