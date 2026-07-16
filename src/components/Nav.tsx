export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[0.28em] text-white md:text-xl"
        >
          FLEET
        </a>
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
