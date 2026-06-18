import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Thesis" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/apply", label: "Discovery" },
  { to: "/legal", label: "Legal" },

] as const;

export function Header() {
  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-tight text-ink">
              RWAfrica
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              by Gurumbé Capital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-ink/70 transition-colors hover:text-ink"
                activeProps={{ className: "text-ink font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Apply Button */}
          <Link
            to="/apply"
            className="items-center justify-center border border-gold bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-ink"
          >
            Apply
          </Link>
        </div>
      </header>

      {/* Mobile Navigation Pill */}
      <nav className="fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-6 rounded-full border border-border/80 bg-background/95 px-6 py-3.5 shadow-2xl backdrop-blur-lg md:hidden whitespace-nowrap safe-bottom">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-xs tracking-wide text-ink/70 transition-colors hover:text-ink active:text-ink"
            activeProps={{ className: "text-ink font-semibold" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}