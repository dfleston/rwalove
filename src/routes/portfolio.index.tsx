import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import portfolioData from "@/data/portfolio.json";
import propertiesData from "@/data/properties.json";

// --- Types ---
type Umbrella = {
  id: string;
  city: string;
  headline: string;
  thesis: string;
  context: string[];
  units: string[]; // Now just an array of slugs!
  hero: string;
};

// Reusing your global Property type map
type Property = {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  hero: string;
  minInvestment: string;
  ticketEntry: string;
  // ... other fields exist in JSON but aren't strictly needed for this view
};

const umbrellas = portfolioData as Umbrella[];
const PROPERTIES = propertiesData as Record<string, Property>;

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio & Target Markets — RWAfrica" },
      { name: "description", content: "Three umbrella geographies — Nairobi Capital, Tatu City SEZ, and Mombasa Coastal — anchoring institutional real estate deployment across Kenya." },
      { property: "og:title", content: "Portfolio — RWAfrica" },
      { property: "og:image", content: "/images/properties/market-nairobi.jpg" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Portfolio
          </div>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
            Three Geographies. One Thesis.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Every asset on the platform sits inside one of three umbrella
            markets — each with a distinct demand driver, risk profile, and
            return shape.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {umbrellas.map((u) => (
              <a
                key={u.id}
                href={`#${u.id}`}
                className="border border-border bg-background px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:border-gold hover:text-ink"
              >
                {u.city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Umbrellas */}
      {umbrellas.map((u, idx) => (
        <section
          key={u.id}
          id={u.id}
          className={`border-b border-border ${idx % 2 === 1 ? "bg-gold-soft/20" : "bg-background"} scroll-mt-24`}
        >
          <div className="mx-auto max-w-7xl px-6 py-20">
            {/* Umbrella header */}
            <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  Umbrella {String(idx + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-3 font-serif text-5xl text-ink">{u.city}</h2>
                <p className="mt-4 font-serif text-xl italic text-ink/80">
                  {u.headline}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {u.thesis}
                </p>

                <div className="mt-7 border-l-2 border-gold pl-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
                    Market Context
                  </div>
                  <ul className="mt-3 space-y-2 text-xs text-ink/80">
                    {u.context.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NEW: Link to the dedicated city page we built earlier */}
                <Link
                  to={`/portfolio/${u.id}`}
                  className="mt-8 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-ink"
                >
                  Explore {u.city} Market Data →
                </Link>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden border border-border">
                <img
                  src={`/${u.hero.replace(/^\//, "")}`} // Absolute path fix applied
                  alt={u.city}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Units */}
            <div className="mt-14">
              <div className="flex items-end justify-between border-b border-border pb-4">
                <h3 className="font-serif text-2xl text-ink">
                  Available Units
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {u.units.length} {u.units.length === 1 ? "asset" : "assets"}
                </span>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {u.units.map((slug) => {
                  // Look up the property from properties.json!
                  const m = PROPERTIES[slug];
                  if (!m) return null; // Safe fallback if a slug doesn't exist yet

                  return (
                    <Link
                      key={m.slug}
                      to="/property/$slug"
                      params={{ slug: m.slug }}
                      className="group block border border-border bg-card transition-colors hover:border-gold"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                        <img
                          src={`/${m.hero.replace(/^\//, "")}`} // Dynamically mapped & absolute path fix applied
                          alt={m.name}
                          loading="lazy"
                          width={1024}
                          height={768}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                          {m.tagline}
                        </div>
                        <h4 className="mt-2 font-serif text-xl text-ink">
                          {m.name}
                        </h4>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                          {m.location}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                              Price from
                            </div>
                            <div className="font-serif text-lg text-ink">
                              {m.minInvestment}
                            </div>
                          </div>
                          <span className="bg-gold-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                            {m.ticketEntry}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pipeline */}
      <section className="bg-gold-soft/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Pipeline Expansion
            </div>
            <h2 className="mt-3 font-serif text-5xl text-ink">Accra, Ghana</h2>
            <div className="mt-3 inline-block border border-ink/20 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/70">
              Target Deployment · Q4 2026
            </div>
          </div>
          <p className="text-sm leading-relaxed text-ink/80">
            We maintain soft-pilot intent in our expansion thesis. Preliminary
            legal frameworks and native economic SPVs are underway by erecting
            our West Africa anchor, to stabilize deployment of the sequence of
            expanse.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-4xl text-ink">
              Institutional Access. Direct Dialogue.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Bypass the retail asset. Schedule a structuring call with our
              investment management team, rigorously tailored to your mandate.
            </p>
          </div>
          <Link
            to="/apply"
            className="inline-flex shrink-0 items-center justify-center bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}