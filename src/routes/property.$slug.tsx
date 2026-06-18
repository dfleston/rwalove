import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import * as Icons from "lucide-react";
import nairobi from "@/assets/market-nairobi.jpg";
import westlands from "@/assets/market-westlands.jpg";
import tatu from "@/assets/market-tatu.jpg";
import mombasa from "@/assets/market-mombasa.jpg";
import propertiesData from "@/data/properties.json";

type Amenity = {
  name: string;
  description: string;
  icon: string; // Will match Lucide icon component names
};

type Property = {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  hero: string;
  targetYield: string;
  minInvestment: string;
  status: string;
  irr: string;
  exit: string;
  holdPeriod: string;
  ticketEntry: string;
  opportunity: string[];
  amenities: Amenity[];
  renders: { src: string; alt: string }[];
};

const PROPERTIES = propertiesData as Record<string, Property>;

export const Route = createFileRoute("/property/$slug")({
  loader: ({ params }): Property => {
    const property = PROPERTIES[params.slug];
    if (!property) throw notFound();
    return property;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Property"} — RWAfrica` },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.name} — ${loaderData.tagline}. Target yield ${loaderData.targetYield}, minimum investment ${loaderData.minInvestment}.`
          : "Property detail",
      },
      { property: "og:title", content: `${loaderData?.name ?? "Property"} — RWAfrica` },
      { property: "og:image", content: loaderData?.hero ?? "" },
    ],
    links: loaderData
      ? [{ rel: "canonical", href: `/property/${loaderData.slug}` }]
      : [],
  }),
  component: PropertyDetailPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Property not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The asset you are looking for is not part of the current portfolio.
        </p>
        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center justify-center bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink"
        >
          Back to Portfolio
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Unable to load property</h1>
        <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
});

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-serif text-3xl leading-tight text-ink">{value}</div>
    </div>
  );
}

function PropertyDetailPage() {
  const p = Route.useLoaderData();

  return (
    <SiteLayout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          <Link
            to="/portfolio"
            className="text-[11px] uppercase tracking-[0.22em] text-gold hover:text-ink"
          >
            ← Portfolio
          </Link>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            {p.name}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">{p.location}</p>
        </div>
      </section>

      {/* Hero + Sidebar */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden border border-border">
            <img
              src={`/${p.hero.replace(/^\//, "")}`} // Enforces a clean single leading slash
              alt={p.name}
              width={1600}
              height={1024}
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <aside className="flex flex-col gap-6">
            <div className="border border-gold bg-card p-7">
              <div className="space-y-6">
                <StatBlock label="Target Yield:" value={p.targetYield} />
                <div className="h-px bg-border" />
                <StatBlock label="Minimum Investment:" value={p.minInvestment} />
                <div className="h-px bg-border" />
                <StatBlock label="Project Status:" value={p.status} />
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-gold px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
            >
              Download Information Memorandum
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center border border-gold bg-gold-soft px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold hover:text-ink"
            >
              Speak to an Advisor
            </Link>
          </aside>
        </div>
      </section>

      {/* Opportunity */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-4xl text-ink">The Opportunity</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/80 md:text-base">
            {p.opportunity.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="border-b border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-ink">Amenities</h2>

          {p.amenities && p.amenities.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {p.amenities.map((amenity: Amenity, i: number) => (
                <div key={i} className="flex flex-col items-start p-5 border border-border/60 bg-background">
                  {/* Container for the emoji */}
                  <div className="flex h-10 w-10 items-center justify-center bg-muted text-2xl rounded-sm mb-4">
                    {amenity.emoji}
                  </div>
                  <h3 className="font-serif text-lg text-ink font-medium">
                    {amenity.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-dashed border-border p-6 text-center">
              <p className="text-xs italic text-muted-foreground/60">
                Detailed specification architecture pending project finalization.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Financials */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-ink">Financials</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-7">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Projected IRR:
              </div>
              <div className="mt-2 font-serif text-4xl text-ink">{p.irr}</div>
              <div className="mt-6 space-y-1 text-sm text-ink/80">
                <div>
                  Target Yield <span className="font-semibold">{p.targetYield}</span>
                </div>
                <div>
                  Hold Period <span className="font-semibold">{p.holdPeriod}</span>
                </div>
              </div>
            </div>
            <div className="border border-border bg-card p-7">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Exit Strategy:
              </div>
              <div className="mt-2 font-serif text-2xl text-ink md:text-3xl">
                {p.exit}
              </div>
              <div className="mt-6 space-y-1 text-sm text-ink/80">
                <div>
                  Horizon <span className="font-semibold">{p.holdPeriod}</span>
                </div>
                <div>
                  Ticket Entry{" "}
                  <span className="font-semibold">{p.ticketEntry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Renders */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-ink">Property Renders</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {p.renders.map((r: { src: string; alt: string }, i: number) => {
              // Enforces a clean single leading slash regardless of JSON formatting
              const cleanSrc = `/${r.src.replace(/^\//, "")}`;

              return (
                <div key={i} className="aspect-[4/3] overflow-hidden border border-border">
                  <img
                    src={cleanSrc} // Uses the formatted absolute path
                    alt={r.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-4xl text-ink">
              Reserve allocation in {p.name}.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Subscription windows are sequenced. Submit a Discovery Application
              to receive the full information memorandum and structuring deck.
            </p>
          </div>
          <Link
            to="/apply"
            className="inline-flex shrink-0 items-center justify-center bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Apply for Discovery
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
