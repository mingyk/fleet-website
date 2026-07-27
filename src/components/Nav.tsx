type NavProps = {
  variant?: "niki" | "fleet";
};

export function Nav({ variant = "niki" }: NavProps) {
  const isFleet = variant === "fleet";

  if (isFleet) {
    return (
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="font-display text-sm font-semibold tracking-[0.12em] text-white/70 transition-colors hover:text-white"
            >
              NIKI
            </a>
            <a
              href="/fleet"
              className="font-fleet-display text-lg font-bold tracking-[0.28em] text-white md:text-xl"
            >
              FLEET
            </a>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#product" className="transition-colors hover:text-white">
              Product
            </a>
            <a href="#workflow" className="transition-colors hover:text-white">
              Workflow
            </a>
            <a href="#markets" className="transition-colors hover:text-white">
              Use cases
            </a>
            <a
              href="#contact"
              className="bg-white px-4 py-2 tracking-wide text-ink transition-colors hover:bg-teal-bright hover:text-white"
            >
              Get in touch
            </a>
          </div>
          <a
            href="#contact"
            className="bg-white px-3.5 py-2 text-sm font-medium text-ink md:hidden"
          >
            Contact
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-[0.18em] text-white md:text-2xl"
        >
          NIKI
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-white/85 md:flex">
          <a href="#loop" className="transition-colors hover:text-white">
            How it works
          </a>
          <a href="#skills" className="transition-colors hover:text-white">
            Skills
          </a>
          <a href="#privacy" className="transition-colors hover:text-white">
            Privacy
          </a>
          <a
            href="/fleet"
            className="tracking-[0.16em] text-white/70 transition-colors hover:text-white"
          >
            FLEET
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-cocoa transition-colors hover:bg-honey"
          >
            Get in touch
          </a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/fleet"
            className="text-xs font-bold tracking-[0.16em] text-white/80"
          >
            FLEET
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-cocoa"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
