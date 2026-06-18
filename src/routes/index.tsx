import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroCity from "@/assets/hero-city.jpg";

import portfolioData from "@/data/portfolio.json";
import propertiesData from "@/data/properties.json";
import { FeaturedUnits } from "@/components/site/FeaturedUnits"; // Your new component

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RWAfrica — Invest in Africa's Growth." },
      { name: "description", content: "Fully-served African real estate. Compliant SPVs, tokenized RWAs." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    n: "01",
    title: "Geopolitical Stability",
    body: "East Africa's premier economic hub, demonstrating consistent GDP growth and resilient democratic institutions.",
  },
  {
    n: "02",
    title: "SEZ Frameworks",
    body: "Special Economic Zones like Tatu City offer 10% corporate tax, customs relief and world-class infrastructure.",
  },
  {
    n: "03",
    title: "Demographic Dividend",
    body: "A rapidly expanding middle class and significant expatriate influx driving acute demand for institutional-grade assets.",
  },
];

const stats = [
  { kpi: "9–12%", label: "Cash Yield p.a.", sub: "vs. 2–4% in Europe" },
  { kpi: "10%", label: "Corp Tax (Tatu SEZ)", sub: "vs. 30% standard" },
  { kpi: "€10k", label: "Entry Point", sub: "Fractional from wallet" },
];

const africaArguments = [
  {
    title: "The Urbanization Mega-Trend",
    body: "By 2050, over 1.3 billion people will move into African urban centers, making it the fastest urbanizing continent on earth and generating unprecedented structural real estate demand.",
  },
  {
    title: "Counter-Cyclical Arbitrage",
    body: "While western real estate markets struggle with compressed yields and stagnation, Africa's structural deficit in institutional-grade stock yields premium alpha (9–12% cash-on-cash).",
  },
  {
    title: "The Mobile-First Financial Leap",
    body: "Africa bypassed traditional legacy banking entirely. Digital infrastructure, mobile money protocols, and tokenization match perfectly with an economy that operates natively on high-velocity settlement.",
  }
];

const homeGallery = [
  { src: "images/home/slide1.jpg", alt: "Modern East African Commercial Architecture" },
  { src: "images/home/slide2.jpg", alt: "Panoramic View of Vibrant Urban Expansion" },
  { src: "images/home/slide3.jpg", alt: "Premium Residential Interior Execution" },
  { src: "images/home/slide4.jpg", alt: "Infrastructure Development and Transit Corridors" }
];



function HomePage() {

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Limited Cohort · Q3 2026 · Nairobi
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[5rem]">
              Invest in Africa's<br />Growth. See the<br />
              <span className="text-gold">Foundation First.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground">
              Fully serviced real estate investment across East Africa.
              Structured, compliant, and built for sustainable returns —
              tokenized for accessibility from €10,000.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                Apply for the Discovery Program
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
              >
                See the Full Program →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 bg-gold-soft/60" />
            <img
              src={heroCity}
              alt="Aerial view of modern Nairobi residential development"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-8 py-10">
              <div className="font-serif text-5xl text-ink">{s.kpi}</div>
              <div className="mt-2 text-sm font-medium text-ink">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW SECTION: WHY AFRICA (Positioned BEFORE The Kenya Thesis) */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-card/10">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left Block */}
          <div className="sticky top-24">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Macro Thesis
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
              Why Africa?<br />Why Now?
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Deploying capital requires moving past legacy assumptions. The continent represents a highly determinate generational investment paradigm backed by raw demography and structural yield.
            </p>
          </div>

          {/* Right Stacked Blocks */}
          <div className="space-y-12">
            {africaArguments.map((arg, idx) => (
              <div key={idx} className="border border-border bg-background p-8 transition-colors hover:border-gold">
                <div className="text-xs font-mono text-gold mb-3">
                  [ ARGUMENT {String(idx + 1).padStart(2, "0")} ]
                </div>
                <h3 className="font-serif text-2xl text-ink font-medium">
                  {arg.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {arg.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* THESIS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              The Thesis
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              The Kenya Thesis
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              A determinate process for capital deployment into the
              continent's fastest-compounding real estate economy.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.n} className="bg-background p-8">
                <div className="font-serif text-2xl text-gold">{p.n}.</div>
                <h3 className="mt-2 font-serif text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-ink">Market Opportunities</h2>
            <p className="text-muted-foreground mt-2">Selected assets from our current umbrella markets.</p>
          </div>

          {/* You can pass specific slugs here to feature them */}
          <FeaturedUnits
            units={["kilimani-premium-towers", "jabali", "sgr-port-terminus-hub"]}
            propertiesData={propertiesData as Record<string, Property>}
          />
        </div>
      </section>



      {/* ========================================================= */}
      {/* NEW SECTION: FULLY SERVICED REAL ESTATE */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">

            {/* Left text block */}
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Operational Model
              </div>
              <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
                Fully Serviced.<br />Zero Friction.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-sm">
                Institutional capital requires operational silence. We transform raw real estate into high-yield financial products by handling the entire physical and administrative lifecycle of the asset. You simply hold the token.
              </p>
            </div>

            {/* Right Grid */}
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Pillar 1: Furniture */}
              <div className="border border-border bg-card p-8 transition-colors hover:border-gold">
                <div className="mb-4 font-mono text-lg text-gold">01.</div>
                <h3 className="font-serif text-xl text-ink">Turnkey Curation</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  From bare-shell to bespoke. We handle full interior design, procurement, and installation—delivering the premium hotel-grade finish that expatriate and corporate demographics demand.
                </p>
              </div>

              {/* Pillar 2: Maintenance */}
              <div className="border border-border bg-card p-8 transition-colors hover:border-gold">
                <div className="mb-4 font-mono text-lg text-gold">02.</div>
                <h3 className="font-serif text-xl text-ink">Active Maintenance</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Proactive upkeep and rapid-response repairs. Our on-ground property management teams ensure the asset remains in peak condition, preserving both its physical capital value and tenant satisfaction.
                </p>
              </div>

              {/* Pillar 3: Rents */}
              <div className="border border-border bg-card p-8 transition-colors hover:border-gold">
                <div className="mb-4 font-mono text-lg text-gold">03.</div>
                <h3 className="font-serif text-xl text-ink">Automated Collection</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Complete end-to-end tenant management. We handle vetting, lease execution, and monthly rent collection—verifying payments and routing your yield distributions directly to your digital wallet.
                </p>
              </div>

              {/* Pillar 4: Premium */}
              <div className="border border-border bg-card p-8 transition-colors hover:border-gold">
                <div className="mb-4 font-mono text-lg text-gold">04.</div>
                <h3 className="font-serif text-xl text-ink">Yield Alpha</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  By elevating the asset from a standard apartment to a fully serviced lifestyle product, we unlock premium corporate, diplomatic, and short-stay rental tiers—directly driving your 9–12% target yields.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW SECTION: COUNTRY SLIDER (CSS Scroll Snap Gallery) */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-card/30 overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6 mb-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-2">
            Visual Exploration
          </div>
          <h2 className="font-serif text-4xl text-ink">The On-Ground Horizon</h2>
        </div>

        {/* Horizontal scrollable flex container using your specific slide parameters */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-8 hide-scrollbar">
          {homeGallery.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[800px] aspect-[16/9] border border-border bg-muted">
              <img
                src={`/${img.src.replace(/^\//, "")}`} // Reusing our absolute root utility path fix
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>


      {/* INSTITUTIONAL ARCHITECTURE */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Structure
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Institutional Architecture
            </h2>
          </div>
          <div className="mt-14 flex flex-col items-stretch justify-between gap-8 md:flex-row relative">
            {/* Connector lines (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px border-t border-dashed border-border z-0" />

            {/* Node 1 */}
            <div className="flex-1 border border-border bg-card p-8 relative z-10">
              <div className="mb-6 inline-block border-b border-border pb-4 font-mono text-sm font-medium uppercase tracking-widest text-gold">
                SPV SEZ
              </div>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  10% corp tax
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Zero VAT
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Zero stamp duty
                </li>
              </ul>
            </div>

            {/* Connector (Mobile) */}
            <div className="md:hidden flex justify-center text-muted-foreground">↓</div>

            {/* Node 2 */}
            <div className="flex-1 border border-border bg-card p-8 relative z-10">
              <div className="mb-6 inline-block border-b border-border pb-4 font-mono text-sm font-medium uppercase tracking-widest text-gold">
                EU Feeder Vehicle
              </div>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  MiCA-aligned
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Luxembourg / Swiss
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Double-tax treaties
                </li>
              </ul>
            </div>

            {/* Connector (Mobile) */}
            <div className="md:hidden flex justify-center text-muted-foreground">↓</div>

            {/* Node 3 */}
            <div className="flex-1 border border-border bg-card p-8 relative z-10">
              <div className="mb-6 inline-block border-b border-border pb-4 font-mono text-sm font-medium uppercase tracking-widest text-gold">
                Investor Wallet
              </div>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  On-chain tokens
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Re-mortgageable
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Stablecoin loans
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TOKENIZED */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Technology
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Why Tokenized?
            </h2>
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Programmable Contracts",
                body: "Smart contracts automate distributions, compliance checks, and investor rights — reducing administrative overhead and counterparty risk.",
              },
              {
                title: "Fractional Ownership",
                body: "Access institutional-grade assets from €10,000. Diversify across geographies, property types, and yield profiles with precision.",
              },
              {
                title: "Frictionless & Legal Access",
                body: "On-chain settlement with full KYC/AML compliance. Investor protections embedded at the protocol level, not just the prospectus.",
              },
              {
                title: "More Liquid, Remortgageable",
                body: "Tokenized real estate can be used as collateral, traded on secondary markets, and integrated into DeFi lending protocols.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8">
                <div className="mb-3 h-1 w-8 bg-gold" />
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW SECTION: SPV SEZ BENEIFTS (Positioned AFTER Why Tokenized) */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Regulatory Wrapper
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-white">
              The Sovereign Shield: The SPV in SEZ Framework
            </h2>
            <p className="mt-6 text-base text-white/70 leading-relaxed">
              Tokenization is simply the delivery mechanism. The real value lies inside the regulatory perimeter. By wrapping every real-world asset inside a localized Special Purpose Vehicle (SPV) gazetted strictly within a Special Economic Zone (SEZ), capital gains an unprecedented structural advantage.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">🛡️</div>
              <h3 className="font-serif text-xl text-white">Ring-Fenced Liability</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Each property asset operates within an isolated, asset-backed corporate entity. Your investment is completely insulated from liabilities across other portfolio assets.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">⚖️</div>
              <h3 className="font-serif text-xl text-white">Autonomous Governance</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                SEZ structures like Tatu City operate under single-window administrative bodies, completely bypassing sluggish local municipal bureaucracies for planning and utility management.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="font-serif text-xl text-white">Permanent Tax Optimization</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                A guaranteed 10% corporate tax rate and total exemptions from VAT, stamp duties, and withholding tax translate directly to higher distributed net dividend yields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW SECTION: ESG & ORACLE INTEGRATION (Nesti) */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              ESG & Liquidity Engine
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Dual-Sided Value Creation
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Through our integration with Nesti.africa, we transform rent payments into a verifiable on-chain oracle. This drives financial inclusion for the tenant while mathematically de-risking the asset for the investor.
            </p>
          </div>

          {/* Split Architecture Grid */}
          <div className="grid gap-px bg-border md:grid-cols-2">

            {/* Left Node: Tenant Impact */}
            <div className="bg-card/20 p-8 lg:p-14 transition-colors hover:bg-card/40">
              <div className="mb-6 inline-block border-b border-border pb-4 font-mono text-sm font-medium uppercase tracking-widest text-gold">
                01. The Tenant Impact
              </div>
              <h3 className="font-serif text-3xl text-ink mb-8">Financial Inclusion</h3>
              <ul className="space-y-8">
                <li className="relative pl-6 border-l border-gold/30">
                  <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-gold" />
                  <div className="font-serif text-xl text-ink">Verified Credit Identity</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    African professionals build a bank-trusted "RentScore" simply by paying rent on time, bridging the gap for a workforce operating without traditional payslips.
                  </p>
                </li>
                <li className="relative pl-6 border-l border-gold/30">
                  <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-gold" />
                  <div className="font-serif text-xl text-ink">The Rent-to-Own Pipeline</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    As tenants build credit, they unlock access to traditional mortgages. This creates a built-in exit strategy where tenants can eventually secure loans to purchase the fractional tokens of the very apartment they reside in.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Node: Investor Advantage */}
            <div className="bg-background p-8 lg:p-14 transition-colors hover:bg-card/10">
              <div className="mb-6 inline-block border-b border-border pb-4 font-mono text-sm font-medium uppercase tracking-widest text-gold">
                02. The Investor Advantage
              </div>
              <h3 className="font-serif text-3xl text-ink mb-8">De-Risked Liquidity</h3>
              <ul className="space-y-8">
                <li className="relative pl-6 border-l border-ink/20">
                  <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-ink" />
                  <div className="font-serif text-xl text-ink">On-Chain Asset Oracles</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Flawless payment data doesn't just score the renter; it scores the asset. The verified cash flow acts as a real-time data oracle, proving to the market that the property consistently generates its yield.
                  </p>
                </li>
                <li className="relative pl-6 border-l border-ink/20">
                  <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-ink" />
                  <div className="font-serif text-xl text-ink">DeFi Re-Mortgaging</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Because oracle data lowers the asset's risk profile, the property tokens are classified as premium collateral. Investors can leverage their tokens on decentralized lending protocols to access high-LTV stablecoin liquidity instantly.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEW SECTION: THE MODEL SUMMARY */}
      {/* ========================================================= */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              The Ecosystem
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Three Pillars of Value
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A holistic approach to real estate deployment that merges institutional yield with physical discovery and measurable social impact.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="group border border-border bg-card p-10 transition-colors hover:border-gold">
              <div className="mb-6 font-mono text-xl text-gold">01.</div>
              <h3 className="font-serif text-2xl text-ink">Invest & Own</h3>
              <div className="mt-4 h-px w-12 bg-border group-hover:bg-gold transition-colors" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Access premium East African real estate through compliant, tokenized SPVs. Benefit from 9–12% cash yields, complete SEZ tax optimization, and asset-backed tokens that serve as premium collateral for instant DeFi liquidity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group border border-border bg-card p-10 transition-colors hover:border-gold">
              <div className="mb-6 font-mono text-xl text-gold">02.</div>
              <h3 className="font-serif text-2xl text-ink">Discover a New World</h3>
              <div className="mt-4 h-px w-12 bg-border group-hover:bg-gold transition-colors" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Move beyond the prospectus. Through our exclusive Discovery Program and asset right-of-use allocations, you are invited to walk the sites, feel the market momentum, and experience the cultural vibrancy of Africa firsthand.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group border border-border bg-card p-10 transition-colors hover:border-gold">
              <div className="mb-6 font-mono text-xl text-gold">03.</div>
              <h3 className="font-serif text-2xl text-ink">Have Impact</h3>
              <div className="mt-4 h-px w-12 bg-border group-hover:bg-gold transition-colors" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Drive systemic financial inclusion. Your asset empowers African professionals to build verifiable credit identities through rent payments, establishing a clear pathway to homeownership while mathematically de-risking your yield.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* DISCOVERY CTA */}
      <section className="bg-gold-soft/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Discovery Program
          </div>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Don't read the prospectus.<br />Walk the site.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            Join our exclusive 4-day Investor Discovery Program in Nairobi.
            Secure your place with a fully refundable €500 deposit. Experience
            high-yield assets and local culture firsthand.
          </p>
          <Link
            to="/apply"
            className="mt-8 inline-flex items-center justify-center border border-ink bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Apply for Discovery Program
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
