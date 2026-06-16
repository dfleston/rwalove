import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import propertyKilimani from "@/assets/property-kilimani.jpg";
import renderLiving from "@/assets/render-living.jpg";
import renderBedroom from "@/assets/render-bedroom.jpg";
import renderExterior from "@/assets/render-exterior.jpg";
import nairobi from "@/assets/market-nairobi.jpg";
import westlands from "@/assets/market-westlands.jpg";
import tatu from "@/assets/market-tatu.jpg";
import mombasa from "@/assets/market-mombasa.jpg";

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
  renders: { src: string; alt: string }[];
};

const PROPERTIES: Record<string, Property> = {
  "kilimani-premium-towers": {
    slug: "kilimani-premium-towers",
    name: "Kilimani Premium Towers",
    location: "Nairobi, Kenya. Grade-A Expat Residential Complex.",
    tagline: "Grade-A Expatriate Residential",
    hero: propertyKilimani,
    targetYield: "8–12%",
    minInvestment: "€50,000",
    status: "Construction Phase",
    irr: "15%",
    exit: "Refinance / Sale in 5 Years",
    holdPeriod: "5 Years",
    ticketEntry: "€25k",
    opportunity: [
      "The Kilimani submarket sits at the intersection of diplomatic, NGO, and multinational demand in Nairobi — a structural shortage of Grade-A expatriate housing has compressed vacancy to under 4% while rental indices continue to outpace inflation.",
      "Premium Towers is positioned as a fully serviced, 18-storey residential complex with concierge, backup power, and on-site amenities — the precise specification that institutional tenants underwrite at a premium. Pre-leasing intent has been secured from three multinational anchors prior to completion.",
    ],
    renders: [
      { src: renderLiving, alt: "Living room render" },
      { src: renderExterior, alt: "Exterior render" },
      { src: renderBedroom, alt: "Bedroom render" },
    ],
  },
  "unity-homes-precinct": {
    slug: "unity-homes-precinct",
    name: "Unity Homes Precinct",
    location: "Nairobi (Capital District). Infill-certified residential.",
    tagline: "Net-Positive Residential Blocks",
    hero: nairobi,
    targetYield: "7–9%",
    minInvestment: "€15,000",
    status: "Phase II Delivery",
    irr: "12%",
    exit: "Stabilised Hold / Refinance",
    holdPeriod: "7 Years",
    ticketEntry: "€15k",
    opportunity: [
      "Unity Homes is the largest EDGE-certified residential precinct in East Africa, addressing the structural shortfall in middle-income housing within the Nairobi Capital District.",
      "The precinct operates on a build-to-rent model with sale-and-leaseback structuring, providing institutional investors with predictable, indexed cashflows backed by a curated tenant pool.",
    ],
    renders: [
      { src: renderExterior, alt: "Exterior render" },
      { src: renderLiving, alt: "Living room render" },
      { src: renderBedroom, alt: "Bedroom render" },
    ],
  },
  "aria-towers": {
    slug: "aria-towers",
    name: "Aria Towers",
    location: "Westlands Corporate Hub, Nairobi. Mixed-use Grade-A.",
    tagline: "Grade-A Office & Serviced Residence",
    hero: westlands,
    targetYield: "9–11%",
    minInvestment: "€50,000",
    status: "Lease-Up",
    irr: "14%",
    exit: "Trade Sale to REIT",
    holdPeriod: "6 Years",
    ticketEntry: "€15k",
    opportunity: [
      "Westlands is Nairobi's primary corporate hub, hosting regional headquarters for the majority of multinational firms operating in East Africa. Grade-A vacancy remains below 6% with rental growth trending double digits.",
      "Aria Towers combines premium office floors with serviced residences above — a counter-cyclical mix that has historically outperformed single-use assets across cycles.",
    ],
    renders: [
      { src: westlands, alt: "Tower exterior" },
      { src: renderLiving, alt: "Living room render" },
      { src: renderExterior, alt: "Exterior render" },
    ],
  },
  "crown-square": {
    slug: "crown-square",
    name: "Crown Square",
    location: "Tatu City SEZ. Special Economic Zone Anchor.",
    tagline: "SEZ Corporate Tax Shelter",
    hero: tatu,
    targetYield: "10–13%",
    minInvestment: "€50,000",
    status: "Pre-Construction",
    irr: "17%",
    exit: "Institutional Recap",
    holdPeriod: "5 Years",
    ticketEntry: "€15k",
    opportunity: [
      "Tatu City is a licensed Special Economic Zone offering a 10% corporate tax rate, VAT exemptions, and accelerated permitting. Crown Square is the SEZ's flagship mixed-use precinct.",
      "Investors benefit from the SEZ's structural tax shelter while gaining exposure to one of the fastest-growing satellite cities on the continent, anchored by global tenants relocating from the Nairobi CBD.",
    ],
    renders: [
      { src: tatu, alt: "SEZ render" },
      { src: renderExterior, alt: "Exterior render" },
      { src: renderLiving, alt: "Interior render" },
    ],
  },
  "sgr-port-terminus-hub": {
    slug: "sgr-port-terminus-hub",
    name: "SGR Port Terminus Hub",
    location: "Mombasa Coastal. Port-Adjacent Logistics.",
    tagline: "Strategic Logistics Warehousing",
    hero: mombasa,
    targetYield: "11–14%",
    minInvestment: "€250,000",
    status: "Institutional Only · TRO",
    irr: "18%",
    exit: "Sale-Leaseback / Refinance",
    holdPeriod: "8 Years",
    ticketEntry: "Inst. only",
    opportunity: [
      "Mombasa is the gateway port for East and Central Africa, with the Standard Gauge Railway terminus driving an inland container surge that has outstripped warehouse supply by a wide margin.",
      "The Terminus Hub is a Grade-A logistics facility positioned for long-term net leases to global 3PL operators, with cashflows backed by hard-currency contracts.",
    ],
    renders: [
      { src: mombasa, alt: "Port render" },
      { src: renderExterior, alt: "Exterior render" },
      { src: tatu, alt: "Facility render" },
    ],
  },
};

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
              src={p.hero}
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
            {p.renders.map((r: { src: string; alt: string }, i: number) => (
              <div key={i} className="aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={r.src}
                  alt={r.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
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
