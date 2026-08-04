import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Find us
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Road-6, Dhanmondi
            </h2>

            <ul className="mt-10 space-y-7">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base text-primary">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    House-4, Road-6, Dhanmondi
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base text-primary">Opening hours</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Saturday – Thursday: 11:00 AM – 11:00 PM
                    <br />
                    Friday: 3:00 PM – 11:00 PM
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base text-primary">Phone</h3>
                  <a
                    href="tel:+8801700000000"
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    +880 1700-000000
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinewood on Facebook"
                className="rounded-full border border-border bg-background p-3 text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinewood on Instagram"
                className="rounded-full border border-border bg-background p-3 text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title="Map showing Pinewood Cafe + Kitchen, Road-6 Dhanmondi, Dhaka"
              src="https://www.google.com/maps?q=House%204%20Road%206%20Dhanmondi%20Dhaka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
