"use client";

import { useEffect, useState } from "react";

const steps = [
  { title: "Wake", detail: "Voice or app summons NIKI from the dock." },
  { title: "Launch", detail: "Takes off automatically and stays within safe rooms." },
  { title: "Find you", detail: "Locates the registered user and approaches to a safe offset." },
  { title: "Follow", detail: "Side-follows through approved rooms at walking pace." },
  { title: "Assist", detail: "Sees, listens, and runs bounded help skills." },
  { title: "Return", detail: "Flies home, lands precisely, and resumes charging." },
];

export function AssistanceLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="loop" className="niki-mesh relative overflow-hidden py-24 md:py-32">
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
          The loop
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-cocoa md:text-5xl text-balance">
          Call once. NIKI handles the rest.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-soft">
          From dock to help and back again—stable flight stays onboard even if Wi‑Fi or the
          home AI drops out.
        </p>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border px-5 py-5 text-left transition-all duration-500 ${
                    isActive
                      ? "border-ember/40 bg-foam shadow-[0_18px_40px_-24px_rgba(228,87,46,0.45)]"
                      : "border-line/70 bg-foam/55 hover:border-line hover:bg-foam/90"
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
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{step.detail}</p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
