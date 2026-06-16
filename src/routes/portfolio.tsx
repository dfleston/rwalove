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
      { name: "description", content: "Three umbrella geographies — Nairobi Capital, Tatu City SEZ, and Mombasa Coastal — anchoring institutional real estate deployment across Kenya." },
      { property: "og:title", content: "Portfolio — RWAfrica" },
      { property: "og:image", content: nairobi },
    ],
  }),
  component: PortfolioPage,
});

type Unit = {
  slug: string;
  title: string;
  sub: string;
  blurb: string;
  price: string;
  entry: string;
  image: string;
};

type Umbrella = {
  id: string;
  city: string;
  headline: string;
  thesis: string;
  context: string[];
  units: Unit[];
  hero: string;
};

const umbrellas: Umbrella[] = [
  {
    id: "nairobi",
    city: "Nairobi Capital",
    headline: "Corporate demand structurally outpaces supply.",
    thesis:
      "Nairobi is home to the African headquarters of over 40 multinational corporations and the ecosystem that produced M-Pesa. Corporate demand for premium serviced accommodation structurally outpaces supply — generating 80%+ annual occupancy in quality-managed stock.",
    context: [
      "2-bed serviced units in Westlands and Kilimani: $2,500–$4,500 USD/month",
      "Demand driven by corporates, DFIs and tech sector — non-seasonal",
      "USD-denominated rents insulate against Kenyan shilling volatility",
      "Direct flights from Madrid, London, Dubai, and Amsterdam",
    ],
    hero: nairobi,
    units: [
      {
        slug: "kilimani-premium-towers",
        title: "Kilimani Premium Towers",
        sub: "Kilimani · Grade-A Expatriate Residential",
        blurb: "Serviced two- and three-bed apartments anchoring the diplomatic corridor.",
        price: "€50k entry",
        entry: "Invest from €50k",
        image: nairobi,
      },
      {
        slug: "unity-homes-precinct",
        title: "Unity Homes Precinct",
        sub: "Nairobi · Infill-Certified Residential",
        blurb: "Net-positive residential blocks targeting young corporate professionals.",
        price: "€296k",
        entry: "Invest from €15k",
        image: nairobi,
      },
      {
        slug: "aria-towers",
        title: "Aria Towers",
        sub: "Westlands Corporate Hub · Mixed-Use",
        blurb: "Grade-A office and serviced-residence mixed-use tower.",
        price: "€1.3M",
        entry: "Invest from €15k",
        image: westlands,
      },
    ],
  },
  {
    id: "tatu",
    city: "Tatu City",
    headline: "Special Economic Zone — infrastructure-stage entry.",
    thesis:
      "Tatu City is a 5,000-acre Special Economic Zone 30km from Nairobi CBD — Africa's most advanced planned urban development, with its own governance, power, and road infrastructure. Over 250 companies have signed up. Residential and hospitality land within the SEZ is a fundamentally different risk profile: infrastructure-stage appreciation, not current yield. The thesis is entry price and zoning certainty.",
    context: [
      "Special Economic Zone status: tax incentives, own governance, infrastructure",
      "Anchor tenants include DHL, Unilever, Krones, and over 250 companies",
      "Phase 3 residential and hospitality plots now available to investors",
      "Nairobi CBD 30-minute drive — growing shuttle and future rail connection",
    ],
    hero: tatu,
    units: [
      {
        slug: "crown-square",
        title: "Crown Square",
        sub: "Tatu City SEZ · Mixed-Use Plot",
        blurb: "Master-planned plot under 10% corporate tax shelter regime.",
        price: "€800k",
        entry: "Invest from €15k",
        image: tatu,
      },
    ],
  },
  {
    id: "mombasa",
    city: "Mombasa",
    headline: "Coastal leisure with diaspora pull — premium nightly rates.",
    thesis:
      "Mombasa's Nyali and Bamburi shoreline is Kenya's premier coastal leisure destination. Tourism is rebounding strongly post-2022 with growing intra-African and European travel. Boutique serviced villas and apartments command premium nightly rates that outperform Nairobi on a per-night basis — with a strong right-of-use story for investors seeking physical discovery.",
    context: [
      "Boutique serviced units: $180–$380 USD/night (peak season)",
      "Growing diaspora demand: Kenyan expats investing in coastal lifestyle assets",
      "UNESCO-listed Old Town proximity adds cultural tourism draw",
      "Seasonal profile — peak Nov–Mar aligns with European winter escape",
    ],
    hero: mombasa,
    units: [
      {
        slug: "sgr-port-terminus-hub",
        title: "SGR Port Terminus Hub",
        sub: "Mombasa Coastal · Logistics-Adjacent",
        blurb: "Strategic port-adjacent warehousing and serviced units.",
        price: "€2.5M",
        entry: "Inst. only · TRO",
        image: mombasa,
      },
    ],
  },
];

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
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden border border-border">
                <img
                  src={u.hero}
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
                {u.units.map((m) => (
                  <Link
                    key={m.slug}
                    to="/property/$slug"
                    params={{ slug: m.slug }}
                    className="group block border border-border bg-card transition-colors hover:border-gold"
                  >
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
                        {m.sub}
                      </div>
                      <h4 className="mt-2 font-serif text-xl text-ink">
                        {m.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {m.blurb}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            Price from
                          </div>
                          <div className="font-serif text-lg text-ink">
                            {m.price}
                          </div>
                        </div>
                        <span className="bg-gold-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                          {m.entry}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
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
