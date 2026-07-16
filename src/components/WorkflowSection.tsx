"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const phases = [
  {
    id: "arrive",
    title: "Arrival",
    detail:
      "Truck mounts the platform to any site. Connect utilities if needed, then initiate the mission.",
    image: "/images/wf-arrive.png",
    useCase: "Site staging",
  },
  {
    id: "scan",
    title: "Scan",
    detail:
      "Mapping units build a live digital twin—terrain, obstacles, and work zones.",
    image: "/images/wf-scan.png",
    useCase: "Site reconnaissance",
  },
  {
    id: "plan",
    title: "Plan",
    detail:
      "FleetOS assigns coverage paths and roles across the fleet in seconds.",
    image: "/images/wf-plan.png",
    useCase: "Mission allocation",
  },
  {
    id: "execute",
    title: "Execute",
    detail:
      "Task units clean, spray, or treat—coordinated and collision-aware.",
    image: "/images/wf-execute.png",
    useCase: "Autonomous work",
  },
  {
    id: "verify",
    title: "Verify",
    detail:
      "Inspection units validate coverage and quality. Pass—or automatic rework.",
    image: "/images/wf-verify.png",
    useCase: "Quality assurance",
  },
  {
    id: "report",
    title: "Report",
    detail:
      "Before/after imagery, work logs, and customer-ready documentation—generated automatically.",
    image: "/images/wf-report.png",
    useCase: "Auto documentation",
  },
  {
    id: "recover",
    title: "Recover",
    detail:
      "Units return to the truck dock to recharge, refill, and run diagnostics.",
    image: "/images/wf-recover.png",
    useCase: "Dock recovery",
  },
];

export function WorkflowSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % phases.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const phase = phases[active];

  return (
    <section id="workflow" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-teal-bright uppercase">
            Mission workflow
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Same playbook. Every job site.
          </h2>
          <p className="mt-4 text-lg text-steel">
            From arrival to recovery—only payloads and mission profiles change.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
          <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {phases.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full border-l-2 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "border-teal-bright bg-white/5"
                        : "border-transparent text-steel hover:border-steel/40 hover:text-paper"
                    }`}
                  >
                    <span
                      className={`block font-display text-[11px] font-bold tracking-[0.16em] uppercase ${
                        isActive ? "text-teal-bright" : "text-steel/70"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-1 block font-display text-base font-semibold ${
                        isActive ? "text-paper" : "text-steel"
                      }`}
                    >
                      {p.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
            {phases.map((p, i) => (
              <div
                key={p.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.useCase}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-teal-bright uppercase">
                {phase.useCase}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold text-paper md:text-3xl">
                {phase.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-steel md:text-base">
                {phase.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
