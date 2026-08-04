import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories, menuItems } from "@/data/menu";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const inCat = active === "All" || item.category === active;
      const inQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  const tabs = ["All", ...categories];

  return (
    <section id="menu" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            The menu
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Cooked to order, every order
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From slow-simmered pasta sauces to full seafood set menus — browse by
            category or search for a favourite.
          </p>
        </div>

        <div className="reveal mx-auto mt-10 max-w-md">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="h-12 rounded-full border-border bg-background pl-11"
            />
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              type="button"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                active === tab
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground hover:border-accent hover:text-accent",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            No dishes match “{query}”. Try another search.
          </p>
        ) : (
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <li
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap font-display text-lg text-accent">
                      ৳{item.price}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="mt-2 w-fit rounded-full bg-accent/12 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
                      {item.badge}
                    </span>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/80">
                    {item.category}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
