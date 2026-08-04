import indoor from "@/assets/ambiance-indoor.jpg";
import terrace from "@/assets/ambiance-terrace.jpg";
import pasta from "@/assets/dish-pasta.jpg";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our story
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            A cozy garden escape in the middle of Dhanmondi
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Tucked away on Road-6, Pinewood is the kind of place you come for one coffee
            and stay for three hours. Wood, warm light and a little greenery everywhere —
            it feels less like a restaurant and more like someone's very good kitchen.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our kitchen is known for consistency: rich, properly cooked pasta, generous
            seafood set menus and grills that arrive exactly the way you asked for them.
            Settle into the indoor seating on the ground floor, or take the stairs up to
            the open terrace and smoking zone, where the music stays soft and the evenings
            stretch long.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Since</dt>
              <dd className="mt-1 font-display text-2xl text-primary">2019</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Seating</dt>
              <dd className="mt-1 font-display text-2xl text-primary">2 Floors</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Dishes</dt>
              <dd className="mt-1 font-display text-2xl text-primary">60+</dd>
            </div>
          </dl>
        </div>

        <div className="reveal grid grid-cols-2 gap-4">
          <img
            src={terrace}
            alt="Open terrace seating with string lights and potted plants"
            width={1024}
            height={1280}
            loading="lazy"
            className="col-span-1 row-span-2 h-full w-full rounded-3xl object-cover"
          />
          <img
            src={indoor}
            alt="Ground floor indoor seating with wood panelling and soft lamps"
            width={1024}
            height={768}
            loading="lazy"
            className="h-48 w-full rounded-3xl object-cover sm:h-56"
          />
          <img
            src={pasta}
            alt="Bowl of creamy signature pasta on a wooden table"
            width={1024}
            height={768}
            loading="lazy"
            className="h-48 w-full rounded-3xl object-cover sm:h-56"
          />
        </div>
      </div>
    </section>
  );
}
