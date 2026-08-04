import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Warm, plant-filled interior of Pinewood Cafe + Kitchen at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/85"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Dhanmondi, Dhaka
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-6xl lg:text-7xl">
          Pinewood: Cafe + Kitchen
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Providing happiness through well-prepared meals using quality ingredients,
          in a home-like atmosphere.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent px-8 text-accent-foreground hover:bg-accent/90"
          >
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="#reserve">Reserve a Table</a>
          </Button>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 flex flex-col items-center gap-2 text-primary-foreground/70 transition-colors hover:text-accent"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
