import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Thesis" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/legal", label: "Technical" },
  { to: "/apply", label: "Waitlist" },
] as const;

export function Header() {
  return (
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
        <Link
          to="/apply"
          className="hidden md:inline-flex items-center justify-center border border-gold bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-ink"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}
