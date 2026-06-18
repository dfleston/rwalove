import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import citiesData from "@/data/cities.json";
import propertiesData from "@/data/properties.json";

// --- Types ---
type MarketCondition = { label: string; value: string };
type Offers = { enjoy: string[]; invest: string[] };
type CarouselImage = { src: string; alt: string };

type City = {
    slug: string;
    name: string;
    tagline: string;
    hero: string;
    secondaryImage: string;
    description: string[];
    marketConditions: MarketCondition[];
    offers: Offers;
    carousel: CarouselImage[];
    mapEmbed: string;
    units: string[]; // Array of property slugs
};

// Reusing your existing Property type for the cards
type Property = {
    slug: string;
    name: string;
    sub: string; // Add this or map it from location/tagline
    location: string;
    tagline: string;
    hero: string;
    price: string; // Add/map this if needed
    entry: string; // Add/map this if needed
    ticketEntry: string;
};

const CITIES = citiesData as Record<string, City>;
const PROPERTIES = propertiesData as Record<string, Property>;

export const Route = createFileRoute("/portfolio/$city")({
    loader: ({ params }) => {
        const city = CITIES[params.city];
        if (!city) throw notFound();

        // Hydrate the property data for the units in this city
        const availableUnits = city.units
            .map(slug => PROPERTIES[slug])
            .filter(Boolean); // Removes any slugs that might not exist yet

        return { city, availableUnits };
    },
    head: ({ loaderData }) => ({
        meta: [
            { title: `${loaderData?.city.name ?? "Market"} — RWAfrica` },
            { name: "description", content: loaderData?.city.tagline ?? "" },
        ],
    }),
    component: CityPortfolioPage,
});

function CityPortfolioPage() {
    const { city, availableUnits } = Route.useLoaderData();

    return (
        <SiteLayout>
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full bg-ink">
                <img
                    src={`/${city.hero}`}
                    alt={city.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-4">
                        Market Profile
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl text-white">{city.name}</h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/80 font-serif italic">
                        {city.tagline}
                    </p>
                </div>
            </section>

            {/* 2. Description + Secondary Image */}
            <section className="border-b border-border bg-background">
                <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="font-serif text-4xl text-ink mb-6">The Thesis</h2>
                        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                            {city.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                    <div className="aspect-[4/3] w-full overflow-hidden border border-border">
                        <img
                            src={`/${city.secondaryImage}`}
                            alt={`${city.name} landscape`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Market Conditions (Stats) */}
            <section className="border-b border-border bg-gold-soft/20">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl text-ink">Market Conditions</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {city.marketConditions.map((cond, i) => (
                            <div key={i} className="border border-border bg-card p-6 text-center">
                                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                                    {cond.label}
                                </div>
                                <div className="font-serif text-2xl text-ink">{cond.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What it offers (Split Section) */}
            <section className="border-b border-border bg-background">
                <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-16">
                    {/* To Enjoy */}
                    <div>
                        <h3 className="font-serif text-3xl text-ink border-b border-gold pb-4 mb-6">
                            To Enjoy
                        </h3>
                        <ul className="space-y-4 text-sm text-ink/80">
                            {city.offers.enjoy.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-gold mt-0.5">✦</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* To Invest */}
                    <div>
                        <h3 className="font-serif text-3xl text-ink border-b border-gold pb-4 mb-6">
                            To Invest
                        </h3>
                        <ul className="space-y-4 text-sm text-ink/80">
                            {city.offers.invest.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-gold mt-0.5">✦</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Carousel (CSS Scroll Snap) */}
            <section className="border-b border-border bg-card/30 overflow-hidden py-20">
                <div className="mx-auto max-w-7xl px-6 mb-8">
                    <h2 className="font-serif text-4xl text-ink">Gallery</h2>
                </div>
                {/* Horizontal scrollable flex container */}
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-8 hide-scrollbar">
                    {city.carousel.map((img, i) => (
                        <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[800px] aspect-[16/9] border border-border">
                            <img src={`/${img.src}`} alt={img.alt} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Map of the Area */}
            <section className="border-b border-border bg-background">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <h2 className="font-serif text-4xl text-ink mb-8">Location Context</h2>
                    <div className="w-full h-[400px] border border-border bg-muted">
                        <iframe
                            src={city.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 7. Available Units */}
            {availableUnits.length > 0 && (
                <section className="border-b border-border bg-gold-soft/10">
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="flex items-end justify-between border-b border-border pb-4 mb-10">
                            <h2 className="font-serif text-3xl text-ink">Available Units in {city.name}</h2>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                {availableUnits.length} Assets
                            </span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {availableUnits.map((m) => (
                                <Link
                                    key={m.slug}
                                    to="/property/$slug"
                                    params={{ slug: m.slug }}
                                    className="group block border border-border bg-card transition-colors hover:border-gold"
                                >
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={`/${m.hero}`}
                                            alt={m.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                            {m.tagline}
                                        </div>
                                        <h4 className="mt-2 font-serif text-xl text-ink">{m.name}</h4>
                                        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                                    Entry From
                                                </div>
                                                <div className="font-serif text-lg text-ink">{m.ticketEntry}</div>
                                            </div>
                                            <span className="bg-gold-soft px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink">
                                                View Asset
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 8. Contact Form */}
            <section className="bg-background">
                <div className="mx-auto max-w-3xl px-6 py-24 text-center">
                    <h2 className="font-serif text-4xl text-ink">Request Market Intel</h2>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Connect with our advisory team to receive structuring decks and available inventory in {city.name}.
                    </p>

                    <form className="mt-10 space-y-4 text-left">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border border-border bg-card px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border border-border bg-card px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Corporate or Personal Email"
                            className="w-full border border-border bg-card px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gold py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-background"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </section>

            {/* Global CSS needed for hiding scrollbar in carousel (add to your global css file) */}
            <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </SiteLayout>
    );
}