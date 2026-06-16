import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroCity from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RWAfrica — Invest in Africa's Growth. See the Foundation First." },
      { name: "description", content: "Institutional-grade African real estate. Compliant SPVs, tokenized RWAs, 9–12% cash yields. Apply for the Discovery Program." },
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
              Institutional-grade real estate investment across East Africa.
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
                Tatu City SPV
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
