import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import nairobi from "@/assets/market-nairobi.jpg";
import westlands from "@/assets/market-westlands.jpg";
import tatu from "@/assets/market-tatu.jpg";
import mombasa from "@/assets/market-mombasa.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Target Markets — RWAfrica" },
      { name: "description", content: "Institutional real estate target markets across Nairobi, Westlands, Tatu City SEZ and Mombasa coastal logistics." },
      { property: "og:title", content: "Portfolio — RWAfrica" },
      { property: "og:image", content: nairobi },
    ],
  }),
  component: PortfolioPage,
});

const markets = [
  {
    city: "Nairobi (Capital District)",
    title: "Unity Homes Precinct",
    blurb: "Infill-certified, net-positive residential blocks.",
    price: "€296k",
    entry: "Invest from €15k",
    image: nairobi,
  },
  {
    city: "Westlands Corporate Hub",
    title: "Aria Towers",
    blurb: "Grade-A office and serviced-residence mixed-use.",
    price: "€1.3M",
    entry: "Invest from €15k",
    image: westlands,
  },
  {
    city: "Tatu City (SEZ)",
    title: "Crown Square",
    blurb: "Special economic zone — 10% corporate tax shelter.",
    price: "€800k",
    entry: "Invest from €15k",
    image: tatu,
  },
  {
    city: "Mombasa Coastal",
    title: "SGR Port Terminus Hub",
    blurb: "Strategic port-adjacent warehousing facility.",
    price: "€2.5M",
    entry: "Inst. only · TRO",
    image: mombasa,
  },
];

const segments = [
  { name: "Residential", yield: "7–9%", focus: "Grade-A Expatriate Housing" },
  { name: "Commercial", yield: "10%", focus: "LEED-certified Office Space" },
  { name: "Industrial", yield: "12%+", focus: "Light Industrial Warehousing" },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Portfolio
          </div>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-6xl">
            Target Markets
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Four strategic geographies. One determinate thesis for institutional
            real estate deployment across East Africa.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <article key={m.title} className="group border border-border bg-card transition-colors hover:border-gold">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.city}
                </div>
                <h3 className="mt-2 font-serif text-xl text-ink">{m.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{m.blurb}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Price from
                    </div>
                    <div className="font-serif text-lg text-ink">{m.price}</div>
                  </div>
                  <span className="bg-gold-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                    {m.entry}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Segments */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Asset Segments
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink">By Yield Profile</h2>
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {segments.map((s) => (
              <div key={s.name} className="bg-background p-8">
                <h3 className="font-serif text-2xl text-ink">{s.name}</h3>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Typical Yield
                </div>
                <div className="font-serif text-3xl text-gold">{s.yield}</div>
                <div className="mt-3 text-sm text-ink/80">
                  <span className="font-medium">Focus:</span> {s.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
