"use client";

import { useEffect, useState } from "react";

const capabilities = [
  {
    title: "Autonomous Flight",
    detail:
      "Come when called, follow users, move between rooms, patrol scheduled places, and return to dock on its own.",
  },
  {
    title: "Mobile Intelligence",
    detail:
      "Read appliance displays, inspect rooms, locate registered objects, and recognize familiar places.",
  },
  {
    title: "Home Interaction",
    detail:
      "Operate compatible switches, trigger existing smart-home integrations, and verify actions visually.",
  },
  {
    title: "Communication",
    detail:
      "Voice conversations, family telepresence, reminders, notifications, and emergency communication initiation.",
  },
];

export function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % capabilities.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="capabilities" className="niki-mesh relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-honey/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-8%] h-64 w-64 rounded-full bg-mint/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <p className="text-sm font-bold tracking-[0.18em] text-mint uppercase">
          Core capabilities
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
          Presence, awareness, and lightweight interaction.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-soft">
          NIKI extends what people can see, reach, and understand at home—without replacing
          human judgment.
        </p>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2">
          {capabilities.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full border-l-2 px-5 py-5 text-left transition-all duration-500 ${
                    isActive
                      ? "border-ember bg-foam/90"
                      : "border-line/80 bg-foam/40 hover:border-soft/40 hover:bg-foam/70"
                  }`}
                >
                  <span
                    className={`font-display text-xs font-bold tracking-[0.18em] uppercase ${
                      isActive ? "text-ember" : "text-soft"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`font-display mt-2 text-xl font-bold ${
                      isActive ? "text-cocoa" : "text-cocoa-soft"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{item.detail}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
