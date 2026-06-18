import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroCity from "@/assets/hero-city.jpg";

import portfolioData from "@/data/portfolio.json";
import propertiesData from "@/data/properties.json";
import { FeaturedUnits } from "@/components/site/FeaturedUnits";
import { MarketComparisonTable } from "@/components/site/Comps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RWAfrica — Invest in Africa's Growth." },
      { name: "description", content: "Fully-served African real estate. Compliant SPVs, tokenized RWAs." },
    ],
  }),
  component: HomePage,
});


const lifestyleImages = [
  "https://www.infinityindustrialpark.com/wp-content/uploads/2019/09/Nairobi-city-infinity-industrial-park-1110x550.jpg?q=80&w=800", // Urban gathering
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tC8VXQfUu15GsGNQCfWTxpSqf4OP4A9suvc6F9pNb_o2LrAEKAdLubc&s=10?q=80&w=800", // Rooftop leisure
  "https://alaskantravels.com/wp-content/uploads/2025/07/Watamu-Beach-Kenya-Coast-Alaskan-World-Adventures-1.jpg?q=80&w=800", // Community focus
  "https://www.andbeyond.com/wp-content/uploads/sites/5/guest-area-with-golden-sunrise-at-andbeyond-bateleur-camp-on-a-luxury-kenya-safari1.jpg?q=80&w=800", // Sunset/Aspirational
];


const pillars = [{
  n: "01",
  title: "Geopolitical Stability",
  body: "East Africa's premier economic hub, demonstrating consistent GDP growth and resilient democratic institutions.",
},
{
  n: "02",
  title: "Regional Hub",
  body: "Home to UN headquarters and 100+ regional corporate HQs, anchoring Nairobi as East Africa's institutional center of gravity.",
},
{
  n: "03",
  title: "Unmatched Climate",
  body: "Temperate, equatorial weather year-round supports a quality of life few global cities at this price point can match.",
},
{
  n: "04",
  title: "Regulatory First-Mover",
  body: "Kenya's VASP Act provides a licensed, enforceable pathway for tokenized securities unmatched elsewhere on the continent.",
},
{
  n: "05",
  title: "Demographic Dividend",
  body: "A rapidly expanding middle class and significant expatriate population driving sustained, structural demand rather than speculative cyclicality.",
},
{
  n: "06",
  title: "Dollar-Pegged Returns",
  body: "Kenya's market offers USD-denominated yield exposure without the currency mismatch risk that plagues most frontier real estate plays.",
}];

const stats = [
  { kpi: "€5k", label: "Entry Point", sub: "Fractional from wallet" },
  { kpi: "9–12%", label: "Historical Rent Yield", sub: "vs. 5–6% in Europe" },
  { kpi: "4–12%", label: "Annual Appreciation", sub: "vs. 1-3% in Europe" },

];

const africaArguments = [
  {
    title: "The Urbanization Mega-Trend",
    body: "By 2050, over 1.3 billion people will move into African urban centers, making it the fastest urbanizing process in history and generating unprecedented structural real estate demand.",
  },
  {
    title: "Counter-Cyclical Arbitrage",
    body: "While western real estate markets has peaked and its yields stagnate, Africa's structural housing deficit yields premium returns.",
  },
  {
    title: "Portfolio Diversification",
    body: "Diversifaction is key for wealth gowth and preservation. Africa is an emerging market that offers a unique opportunity to diversify personal and institutional portfolios.",
  },
  {
    title: "The Mobile-First Financial Leap",
    body: "Africa bypassed traditional legacy banking entirely. Digital infrastructure, mobile money protocols, and tokenization allows for new business models and services that benefit both the local markets and global investors.",
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
            {/* <div className="mb-6 inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Limited Cohort · Q3 2026 · Nairobi
            </div>*/}
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[5rem]">
              Invest in Africa's<br />Growth. See the<br />
              <span className="text-gold">Foundation First.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground">
              Fully serviced real estate investment across East Africa.
              Structured for institutional compliance, and sustainable returns.
              Invest from €5,000.
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
                See the Current Portfolio →
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

      <MarketComparisonTable />

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


      <section className="border-b border-border bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-[1fr_2fr] gap-12 items-center">

          {/* Content Side */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Lifestyle
            </div>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl text-white">
              Be. Belong. Become.
            </h2>
            <p className="mt-6 text-base text-white/70 leading-relaxed max-w-md">
              Contemporary living for the young aspirational urbanite looking for a place to be who they really are, seeking to belong in a tribe, and thirsty to become the best version of themselves.
            </p>
            <Link
              to="/portfolio"
              className="mt-8 inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
            >
              Explore Tsavo Lifestyle →
            </Link>
          </div>

          {/* Visual Grid Side */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4">
              <img src={lifestyleImages[0]} alt="Urban Lifestyle" className="w-full h-1/2 object-cover" />
              <img src={lifestyleImages[1]} alt="Rooftop Leisure" className="w-full h-1/2 object-cover" />
            </div>
            <div className="space-y-4">
              <img src={lifestyleImages[2]} alt="Community" className="w-full h-1/2 object-cover" />
              <img src={lifestyleImages[3]} alt="Aspirational" className="w-full h-1/2 object-cover" />
            </div>
          </div>
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
                EU HoldingVehicle
              </div>
              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  MiCA-aligned
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  EU-Wide Compliance
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Tax Optimized
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
                  Direct Rental Payments
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Highly Liquid
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 bg-muted-foreground" />
                  Re-mortgageable
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
                body: "Access institutional-grade assets from €5,000. Easily diversify your investment in one of the fastest growing real estate markets.",
              },
              {
                title: "Frictionless & Legal Access",
                body: "On-chain settlement with full KYC/AML compliance with a EU-compliant infrastructure. Track your portfolio in the investor Portal. Exit Strategies are built-in at the SPV level",
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
              The Structural Shield: The SPV in SEZ Framework
            </h2>
            <p className="mt-6 text-base text-white/70 leading-relaxed">
              Tokenization is simply the delivery mechanism. The real value lies inside the structure beneath it. Every tokenised asset is held in its own Special Purpose Vehicle, licensed within a Special Economic Zone. This solves the specific challanges for real estate investing in Africa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">🛡️</div>
              <h3 className="font-serif text-xl text-white">Accelerated by the SEZ</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                A Special Economic Zone is a defined area where a separate, investor-oriented set of rules replaces standard national bureaucracy — offering a streamlined administrative process and an optimized tax regime.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">🛡️</div>
              <h3 className="font-serif text-xl text-white">Isolated by Design</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Each property sits in its own dedicated SPV, not a shared pool. A liability, dispute, or underperformance in one asset cannot cross-contaminate another. Your exposure is to one asset, governed by one entity.
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/[0.02]">
              <div className="text-2xl mb-4">🔓</div>
              <h3 className="font-serif text-xl text-white">Exit Optionality</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Tokenization gives investors two paths out: sell the token directly, or acquire the SPV itself. African real estate has historically offered neither.
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
              The use of tokenized digital channels for rent payments creates a verifiable asset and tenant credit history. This drives financial inclusion for the tenant, de-risks the asset for the investor and enhances its tradability.
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
              <h3 className="font-serif text-2xl text-ink">Discovery & Diligence</h3>
              <div className="mt-4 h-px w-12 bg-border group-hover:bg-gold transition-colors" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Investors above $8,000 are invited to visit the assets in person — walk the development, meet the on-the-ground team, and verify the project firsthand. For those who want it, we'll also arrange the cultural and city context around the trip.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group border border-border bg-card p-10 transition-colors hover:border-gold">
              <div className="mb-6 font-mono text-xl text-gold">03.</div>
              <h3 className="font-serif text-2xl text-ink">Have Impact</h3>
              <div className="mt-4 h-px w-12 bg-border group-hover:bg-gold transition-colors" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Portfolio assets empower African professionals to build verifiable credit history through consistent rent payments, opening a real pathway to homeownership. This lowers turnover and arrears, de-risking the income stream.
              </p>
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
