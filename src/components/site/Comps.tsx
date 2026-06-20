import { Link } from "@tanstack/react-router";

export function MarketComparisonTable() {
    const markets = [
        { region: "Europe", city: "Madrid, Spain", yield: "4.0% – 5.5%", appreciation: "3% – 5%" },
        { region: "Europe", city: "Paris, France", yield: "2.5% – 3.5%", appreciation: "1% – 2%" },
        { region: "Europe", city: "Berlin, Germany", yield: "3.0% – 4.0%", appreciation: "0% – 2%" },
        { region: "Europe", city: "Amsterdam, Netherlands", yield: "3.0% – 4.0%", appreciation: "2% – 4%" },
        { region: "Africa", city: "Nairobi, Kenya", yield: "6.0% – 10.0%", appreciation: "4% – 12%", highlight: true },
        { region: "Africa", city: "Accra, Ghana", yield: "7.0% – 11.0%", appreciation: "5% – 8%", highlight: true },
        { region: "Africa", city: "Lagos, Nigeria", yield: "8.0% – 12.0%", appreciation: "6% – 10%", highlight: true },
        { region: "Africa", city: "Cairo, Egypt", yield: "6.0% – 9.0%", appreciation: "7% – 15%", highlight: true },
    ];

    return (
        <section className="border-b border-border bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Market Data</div>
                    <h2 className="mt-3 font-serif text-4xl text-ink">Real Estate Outlook: 2026 Estimates</h2>
                </div>

                <div className="overflow-x-auto border border-border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-card text-muted-foreground uppercase text-[10px] tracking-widest">
                            <tr>

                                <th className="px-6 py-4">City</th>
                                <th className="px-6 py-4">Est. Rental Yield</th>
                                <th className="px-6 py-4">Est. Capital Apprec.</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {markets.map((m, i) => (
                                <tr key={i} className={`${m.highlight ? "bg-gold-soft/10" : "bg-background"}`}>

                                    <td className="px-6 py-4 text-ink">{m.city}</td>
                                    <td className="px-6 py-4 font-mono font-medium">{m.yield}</td>
                                    <td className="px-6 py-4 font-mono font-medium">{m.appreciation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-[10px] text-muted-foreground uppercase tracking-widest">
                    * Estimates based on 2026 institutional market performance projections.
                </p>
            </div>
        </section>
    );
}