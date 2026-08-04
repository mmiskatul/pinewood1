import { Leaf, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#reserve", label: "Reservation" },
  { href: "#location", label: "Location" },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-semibold text-primary-foreground">
              <Leaf className="h-5 w-5 text-accent" aria-hidden="true" />
              Pinewood: Cafe + Kitchen
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Providing happiness through well-prepared meals using quality ingredients,
              in a home-like atmosphere.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm uppercase tracking-wider text-accent">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm uppercase tracking-wider text-accent">Contact</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/70">
              <p>House-4, Road-6, Dhanmondi, Dhaka</p>
              <p>
                <a href="tel:+8801700000000" className="transition-colors hover:text-accent">
                  +880 1700-000000
                </a>
              </p>
            </address>
            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinewood on Facebook"
                className="text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinewood on Instagram"
                className="text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-primary-foreground/12 pt-7 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Pinewood: Cafe + Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
