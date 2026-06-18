import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import property from "@/assets/discovery-property.jpg";
import beyondNightlife from "@/assets/beyond-nightlife.jpg";
import beyondCoast from "@/assets/beyond-coast.jpg";
import beyondSafari from "@/assets/beyond-safari.jpg";

const beyond = [
  {
    image: beyondNightlife,
    title: "Nairobi Nightlife & Culture",
    blurb:
      "Immerse yourself in Nairobi's vibrant energy with exclusive access to premium cultural venues and dining.",
  },
  {
    image: beyondCoast,
    title: "Coastal Experience",
    blurb:
      "Unwind at pristine Diani or Lamu beaches in curated luxury villas, exploring Kenya's rich coastal heritage.",
  },
  {
    image: beyondSafari,
    title: "The Heart of Nature",
    blurb:
      "Witness the breathtaking wildlife and landscapes in world-renowned national parks, enjoying a truly luxurious safari.",
  },
];

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Discovery Program Application — RWAfrica" },
      { name: "description", content: "Apply to the 4-day Investor Discovery Program in Nairobi. €500 fully refundable deposit. Direct asset allocation." },
    ],
  }),
  component: ApplyPage,
});

const tiers = [
  {
    id: "starter",
    name: "Starter",
    min: "€10,000 min",
    icon: "✦",
    perks: [
      "Accommodation + main meals",
      "Airport transfers",
      "Properties visits",
      "City excursion + nature activity",
    ],
  },
  {
    id: "explorer",
    name: "Explorer",
    min: "€25,000 min",
    icon: "◈",
    perks: [
      "Everything in Starter",
      "Curated cultural event",
      "Premium safari excursion",
    ],
  },
  {
    id: "vip",
    name: "VIP",
    min: "€50,000 min",
    icon: "★",
    perks: [
      "4-night premium itinerary",
      "Upgraded accommodation",
      "Full board, all meals included",
      "Convinient trip extension"
    ],
    featured: true,
  },
  {
    id: "sovereign",
    name: "Sovereign",
    min: "€120,000+ min",
    icon: "♛",
    perks: [
      "5-night fully concierged trip",
      "All expenses included",
      "Bespoke itinerary + Exclusive dinners",
      "Optional two cities (Nairobi and Mombasa)",
      "Private legal structuring session with founders",
    ],
  },
];

function ApplyPage() {
  const [tier, setTier] = useState("starter");
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border bg-gold-soft/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:items-center lg:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Limited Cohort
            </div>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
              Discovery Program<br />Application
            </h1>
            <p className="mt-5 max-w-lg text-sm text-muted-foreground">
              Gain exclusive access to high-yield African real estate
              opportunities and institutional growth partnerships. Our curated,
              prosecutorial program offers ground-truth visibility and direct
              asset allocation.
            </p>
            <div className="mt-6 flex max-w-md items-start gap-3 border border-gold/40 bg-background/70 p-4">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-ink">✓</span>
              <div className="text-xs text-ink/80">
                <span className="font-semibold">Fair-Play Guarantee:</span> A €900 refundable deposit demonstrate serious intent. No pressure, no obligation to invest. Full terms below.
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={property}
              alt="Discovery property — Nairobi, Kenya"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/95 px-4 py-2 font-serif text-lg text-ink">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Location Protocol
              </div>
              Nairobi, Kenya
            </div>
          </div>
        </div>
      </section>


      {/* letter */}
      <section className="bg-gold-soft/20 py-24 px-6">
        <div className="mx-auto max-w-4xl bg-background border border-border shadow-lg p-10 md:p-16 relative overflow-hidden">
          {/* "Postage Stamp" Visual */}
          <div className="absolute top-8 right-8 w-20 h-20 border-2 border-dashed border-gold/40 flex items-center justify-center rotate-6">
            <div className="w-16 h-16 bg-gold/10" />
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            {/* Card Content */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-4">
                Investor Invitation
              </div>
              <h2 className="font-serif text-4xl text-ink mb-6">
                Dear Investor,
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We invite you to join a exclusive 4-day Investor Discovery Program in Nairobi at your convinience.
                </p>
                <p>
                  Experience high-yield assets and local culture firsthand. Meet the team on the ground, see the portfolio in person, and judge the opportunity for yourself. Your presence helps shape the future of our community, and every visit strengthens the trust this platform is built on.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/apply"
                  className="inline-flex items-center bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  Apply for Discovery
                </Link>
              </div>
            </div>

            {/* Sidebar / Sign-off */}
            <div className="md:border-l border-border md:pl-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-widest text-ink/60 font-semibold">
                  To:
                </div>
                <div className="font-serif text-lg text-ink">
                  Prospective<br />
                  Founding<br />
                  Members
                </div>
              </div>
              <div className="mt-12 font-serif text-ink/70 italic">
                With love and appreciation,<br />
                <span className="font-bold text-ink">The Gurumbé Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl text-ink">
              The Discovery & Invest Protocol
            </h2>
            <p className="mt-2 text-gold">
              Invest in Africa's Growth. See the Foundation First.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Don't just read the prospectus — walk the site. Join our
              exclusive 4-day investor Discovery Program in Nairobi.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-7">
              <h3 className="font-serif text-2xl text-ink">1. You Book the Flight</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Secure your own route to Nairobi. We'll take care of your airport
                pickup and everything that follows.
              </p>
            </div>
            <div className="border border-border bg-card p-7">
              <h3 className="font-serif text-2xl text-ink">2. We Host the Experience</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                For 4 to 7 days, you are our VIP Guest. Includes
                Boutique accomodation, site intelligence, private deep-dive and
                local cultural immersion.
              </p>
            </div>
          </div>

          <div className="mt-6 border border-gold/40 bg-gold-soft/40 p-7">
            <h3 className="font-serif text-2xl text-ink">Fair-Play Guarantee</h3>
            <p className="mt-2 text-sm text-ink/80">
              To ensure we are hosting serious investors, we require a €900 deposit to secure your spot. No obligation to invest, just genuine access. If you invest €10,000 or more, the deposit is fully credited toward the investment; if not, a portion is retained to cover program costs.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-4xl text-ink">The Protocol Timeline</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A streamlined, determinate process for capital deployment discovery.
          </p>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-4">
            {[
              { n: "01", tag: "Initiate", title: "Apply", body: "Qualification review set" },
              { n: "02", tag: "Secure", title: "Hold secure", body: "€900 deposit held" },
              { n: "03", tag: "Logistics", title: "Book flight", body: "You handle travel" },
              { n: "04", tag: "Execute", title: "We Host", body: "Full program in Nairobi" },
            ].map((s) => (
              <div key={s.n} className="bg-background p-6">
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  // {s.tag}
                </div>
                <div className="mt-1 font-serif text-xl text-ink">{s.title}</div>
                <div className="mt-2 font-mono text-xs text-muted-foreground">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Beyond the Properties */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
              The Full Experience
            </div>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Beyond the Properties
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Site visits anchor the program — but Kenya is more than its
              balance sheets. Curated, optional experiences are folded into
              every cohort.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {beyond.map((b) => (
              <article
                key={b.title}
                className="relative border border-border bg-card overflow-hidden"
              >
                <div className="relative aspect-[16/7] w-full">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    width={1280}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-y-6 left-6 flex max-w-md items-end">
                    <div className="border-b-2 border-gold bg-background/95 p-5 shadow-sm">
                      <h3 className="font-serif text-2xl text-gold">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/80">
                        {b.blurb}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-4xl text-ink">Promotional Tiers</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Structured packages for different discovery visits and access to ownership.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {tiers.map((t, i) => (
              <div
                key={t.id}
                className={`border bg-card p-7 ${t.featured
                  ? "border-gold bg-gold-soft/40"
                  : "border-border"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Tier 0{i + 1}
                    </div>
                    <h3 className="mt-1 font-serif text-3xl text-ink">{t.name}</h3>
                    <div className="mt-1 text-sm font-medium text-gold">
                      {t.min}
                    </div>
                  </div>
                  <span className="text-2xl text-gold">{t.icon}</span>
                </div>
                <ul className="mt-5 space-y-2 border-t border-border/70 pt-4 text-sm text-ink/80">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Form */}
      <section className="bg-gold-soft/30">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="border border-border bg-card p-8 md:p-10 shadow-sm">
            <h2 className="text-center font-serif text-3xl text-ink">
              Begin Your Application
            </h2>
            {submitted ? (
              <div className="mt-8 text-center text-sm text-ink/80">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-xl text-ink">✓</div>
                <p>Thank you. A member of our investor relations team will
                  be in touch within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-8 space-y-5"
              >
                <Field label="Full Name">
                  <input required type="text" className="input" />
                </Field>
                <Field label="Email Address">
                  <input required type="email" className="input" />
                </Field>
                <Field label="Anticipated Investment Tier">
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="input"
                  >
                    {tiers.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.min})
                      </option>
                    ))}
                  </select>
                </Field>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5" />
                  I agree to the <a className="underline" href="#">Terms</a> and{" "}
                  <a className="underline" href="#">Privacy Policy</a>.
                </label>
                <button
                  type="submit"
                  className="w-full bg-ink py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold hover:text-ink"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.7rem 0.85rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .15s;
        }
        .input:focus { border-color: var(--gold); }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-ink/80">
        {label}
      </span>
      {children}
    </label>
  );
}
