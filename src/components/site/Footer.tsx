export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl text-ink">RWAfrica</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            by Gurumbé Capital
          </div>
          <p className="mt-3 max-w-xs text-xs text-muted-foreground">
            Discover, Explore, Invest, Grow with Africa. Institutional-grade
            real world asset infrastructure.
          </p>
        </div>
        <div className="text-sm text-muted-foreground md:justify-self-center">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-ink">Legal Registry</a></li>
            <li><a href="#" className="hover:text-ink">Privacy Protocol</a></li>
            <li><a href="#" className="hover:text-ink">Investor Relations</a></li>
            <li><a href="#" className="hover:text-ink">SPV SEZ Documents</a></li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground md:justify-self-end md:text-right">
          <div>Office locations</div>
          <div className="mt-2 text-ink/80">Nairobi · Madrid · Vigo</div>
          <div className="mt-4 text-xs">
            info@gurumbecapital.com<br />+254 (0)719480009
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-4 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        © 2026 Gurumbé Capital Partners · Regulated Digital Asset Infrastructure
      </div>
    </footer>
  );
}
