import { createFileRoute } from "@tanstack/react-router";
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
  { id: "starter", name: "Starter", min: "€10,000 min", icon: "✦", perks: ["Standard tier protocol", "Group technical hosting"] },
  { id: "explorer", name: "Explorer", min: "€25,000 min", icon: "◈", perks: ["Extended site-tour protocol", "3-on-1 technical hosting", "Fair-Play technical primacy"] },
  { id: "vip", name: "VIP", min: "€50,000 min", icon: "★", perks: ["Private chauffeur service", "Executive dinner with founders", "Guaranteed cabana placement"], featured: true },
  { id: "sovereign", name: "Sovereign", min: "€120,000+ min", icon: "♛", perks: ["Bespoke itinerary stream", "Legal structuring session", "Board-level reporting access"] },
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
                <span className="font-semibold">Fair-Play Guarantee:</span> Your
                fully refundable €500 deposit ensures serious intent. No
                obligations, just genuine access.
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
                Secure your own route to Nairobi. We'll travel your airport
                pickup and everything that follows.
              </p>
            </div>
            <div className="border border-border bg-card p-7">
              <h3 className="font-serif text-2xl text-ink">2. We Host the Experience</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                For 4 days, you are our VIP. Includes luxury accommodation
                (Boutique stay), site intelligence, private deep-dive hours and
                local cultural excursions.
              </p>
            </div>
          </div>

          <div className="mt-6 border border-gold/40 bg-gold-soft/40 p-7">
            <h3 className="font-serif text-2xl text-ink">Fair-Play Guarantee</h3>
            <p className="mt-2 text-sm text-ink/80">
              To ensure we are hosting serious investors, we require a €500
              fully refundable deposit to secure your spot. If you ask us €25,
              €50 or more, your trip is 100% on us. If post-trip Kenyan gateway:
              no pressure, no obligations.
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
              { n: "02", tag: "Secure", title: "Hold secure", body: "€500 hold held" },
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

      {/* Tiers */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-4xl text-ink">Promotional Tiers</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Structured pathways with commensurate due diligence access.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {tiers.map((t, i) => (
              <div
                key={t.id}
                className={`border bg-card p-7 ${
                  t.featured
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
