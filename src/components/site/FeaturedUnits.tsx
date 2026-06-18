import { Link } from "@tanstack/react-router";

// We define the type locally or import from your types file
type Property = {
    slug: string;
    name: string;
    location: string;
    tagline: string;
    hero: string;
    ticketEntry: string;
};

export function FeaturedUnits({ units, propertiesData }: { units: string[], propertiesData: Record<string, Property> }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {units.map((slug) => {
                const m = propertiesData[slug];
                if (!m) return null;

                return (
                    <Link
                        key={m.slug}
                        to="/property/$slug"
                        params={{ slug: m.slug }}
                        className="group block border border-border bg-card transition-colors hover:border-gold"
                    >
                        <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                            <img
                                src={`/${(m.hero || "").replace(/^\//, "")}`}
                                alt={m.name}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">
                                {m.tagline}
                            </div>
                            <h4 className="mt-2 font-serif text-xl text-ink">
                                {m.name}
                            </h4>
                            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                                {m.location}
                            </p>
                            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                    Entry from
                                </div>
                                <span className="bg-gold-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                                    {m.ticketEntry}
                                </span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}