import terrace from "@/assets/ambiance-terrace.jpg";
import indoor from "@/assets/ambiance-indoor.jpg";
import hero from "@/assets/hero-cafe.jpg";
import seafood from "@/assets/dish-seafood.jpg";
import burger from "@/assets/dish-burger.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const shots = [
  { src: hero, alt: "Golden-hour view of the plant-filled café floor", span: "sm:col-span-2 sm:row-span-2" },
  { src: terrace, alt: "Rooftop terrace with string lights in the evening", span: "" },
  { src: indoor, alt: "Wood-panelled indoor seating with soft lamps", span: "" },
  { src: seafood, alt: "Grilled seafood platter with prawns and lemon", span: "" },
  { src: burger, alt: "House beef burger with fries on a wooden board", span: "" },
  { src: dessert, alt: "Chocolate dessert plated with fresh berries", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Gallery</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
          Inside the garden café
        </h2>
      </div>

      <div className="reveal mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
        {shots.map((s) => (
          <figure
            key={s.alt}
            className={`overflow-hidden rounded-3xl ${s.span}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
