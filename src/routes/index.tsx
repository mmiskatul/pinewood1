import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Reservation } from "@/components/site/Reservation";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

const title = "Pinewood: Cafe + Kitchen — Garden Café in Dhanmondi, Dhaka";
const description =
  "A cozy garden café in Dhanmondi, Dhaka. Pasta, grills, seafood set menus and great coffee, served in a warm home-like atmosphere. Reserve a table or order online.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Pinewood: Cafe + Kitchen",
          description,
          servesCuisine: ["Italian", "Continental", "Chinese", "Seafood", "Cafe"],
          priceRange: "৳৳",
          telephone: "+880 1700-000000",
          address: {
            "@type": "PostalAddress",
            streetAddress: "House-4, Road-6, Dhanmondi",
            addressLocality: "Dhaka",
            addressCountry: "BD",
          },
          openingHours: ["Sa-Th 11:00-23:00", "Fr 15:00-23:00"],
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
