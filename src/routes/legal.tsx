import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal & Regulatory — RWAfrica" },
      { name: "description", content: "Transparent institutional architecture: Spanish ETVE, SPV SEZ, MiCA-compliant security tokens." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Technical
          </div>
          <h1 className="mt-3 font-serif text-5xl text-ink md:text-7xl">
            Legal & Regulatory
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Transparent institutional architecture and secure frameworks
            for investment growth.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
          {/* Left: Structure */}
          <div className="space-y-16">
            <div>
              <h2 className="font-serif text-3xl text-ink">1. Corporate Structure</h2>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-y-8">
                {[
                  { title: "Investor Wallet", sub: "Self-Custodial / Institutional", icon: "🛡" },
                  { title: "EU Holding Vehicle", sub: "Spanish ETVE", icon: "€" },
                  { title: "SPV SEZ", sub: "Kenyan PropCo", icon: "📄" },
                ].map((node, i, arr) => (
                  <div key={node.title} className="flex items-center">
                    <div className="flex w-36 flex-col items-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-gold-soft/40 text-2xl text-gold">
                        {node.icon}
                      </div>
                      <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                        {node.title}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {node.sub}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="px-3 text-gold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-3xl text-ink">2. Jurisdictional Advantages</h2>
              <ul className="mt-6 space-y-4 text-sm text-ink/85">
                {[
                  ["Tatu City SEZ", "Conferred specific tax & regulatory advantages under Kenyan law."],
                  ["EU Holding + ERIR Partnership (MiCA)", "Compliant with Markets in Crypto-Assets regulation for transparency."],
                  ["Tax Efficiency", "Optimized frameworks including 10% Corp tax vs. standard 30%."],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink text-[10px] text-ink">✓</span>
                    <p><span className="font-semibold">{k}:</span> {v}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-3xl text-ink">3. Asset Classification</h2>
              <div className="mt-6 overflow-hidden border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/60 text-[11px] uppercase tracking-[0.16em] text-ink">
                    <tr>
                      <th className="border-b border-border p-4">Property</th>
                      <th className="border-b border-l border-border p-4">Legal Definition</th>
                      <th className="border-b border-l border-border p-4">Regulatory Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink/85">
                    <tr>
                      <td className="border-b border-border p-4">Token Type</td>
                      <td className="border-b border-l border-border p-4">Real World Asset (RWA) Backed Security Token</td>
                      <td className="border-b border-l border-border p-4">MiCA Compliant Security Instrument (EU)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Underlying</td>
                      <td className="border-l border-border p-4">Class-A Commercial Real Estate Yields</td>
                      <td className="border-l border-border p-4">Fully Compliant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Dossier */}
          <aside className="h-fit border border-border bg-card p-7">
            <h3 className="font-serif text-2xl text-ink">Complete Dossier</h3>
            <button className="mt-5 w-full bg-gold px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background">
              Download Full Legal Memo →
            </button>
            <p className="mt-5 text-sm text-ink/80">
              Access comprehensive unredacted legal memorandum, including
              subscription agreements and technical audits.
            </p>
            <div className="mt-8 border-t border-border pt-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">
                Compliance Contact
              </div>
              <div className="mt-3 space-y-1 text-sm text-ink/80">
                <div>info@gurumbecapital.com</div>
                <div>+41 22 518 90 00</div>
                <div className="text-muted-foreground">
                  Route de Meyrin 49, Geneva
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
