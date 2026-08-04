import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The signature pasta is the reason I keep coming back. Creamy, properly seasoned, and it tastes the same every single visit.",
    name: "Tanvir A.",
    detail: "Regular since 2021",
    rating: 5,
  },
  {
    quote:
      "We took the seafood set menu on the terrace at sunset. Generous portions, everything fresh, and nobody rushed us out.",
    name: "Nusrat J.",
    detail: "Dinner with family",
    rating: 5,
  },
  {
    quote:
      "Soft music, warm lighting, plants everywhere — it genuinely feels like a garden hidden inside Dhanmondi.",
    name: "Rafiq H.",
    detail: "Weekend coffee",
    rating: 5,
  },
  {
    quote:
      "Staff remembered our order from last time. Small thing, but that's why it feels like home rather than a restaurant.",
    name: "Sadia K.",
    detail: "Birthday dinner",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Guest notes
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            What people say after they leave
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="flex flex-col rounded-3xl bg-primary-foreground/8 p-7 ring-1 ring-primary-foreground/12"
            >
              <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={
                      i < r.rating
                        ? "h-4 w-4 fill-accent text-accent"
                        : "h-4 w-4 text-primary-foreground/30"
                    }
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-primary-foreground/85">
                “{r.quote}”
              </blockquote>
              <footer className="mt-6">
                <p className="font-display text-base text-primary-foreground">{r.name}</p>
                <p className="text-xs text-primary-foreground/60">{r.detail}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
