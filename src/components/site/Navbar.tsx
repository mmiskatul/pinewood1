import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a
          href="#home"
          className={cn(
            "flex items-center gap-2 font-display text-lg font-semibold tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-primary-foreground",
          )}
        >
          <Leaf className="h-5 w-5 text-accent" aria-hidden="true" />
          Pinewood
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  scrolled ? "text-foreground" : "text-primary-foreground/90",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#reserve">Reserve a Table</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "rounded-md p-2 md:hidden",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#reserve" onClick={() => setOpen(false)}>
              Reserve a Table
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
