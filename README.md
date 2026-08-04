# Pinewood Website Generator

Website Generation Prompt — Pinewood: Cafe + Kitchen

Copy everything below into Lovable, v0, Bolt, or any AI website builder.

PROMPT

Build a modern, production-ready restaurant website for "Pinewood: Cafe + Kitchen", a cozy garden-style café located at House-4, Road-6, Dhanmondi, Dhaka, Bangladesh. The brand tagline is: "Providing happiness through well-prepared meals using quality ingredients, in a home-like atmosphere."

Brand & Design Direction

Vibe: warm, cozy, "garden café" aesthetic — think wood textures, soft greenery, warm amber/terracotta lighting tones, not a sterile corporate look.

Style: modern minimalist layout with generous whitespace, large full-bleed food photography, subtle scroll animations (fade/slide-in), rounded soft-edge cards.

Color palette: deep forest green + warm cream/off-white background + terracotta/burnt-orange accent + charcoal text. Avoid pure black/white — keep it warm.

Typography: a warm serif or slab-serif for headings (e.g. "Fraunces", "Playfair Display", or "Lora"), paired with a clean sans-serif for body text (e.g. "Inter" or "Work Sans").

Fully responsive, mobile-first (most customers will browse on phone before visiting or ordering delivery).

Site Structure / Sections

Sticky Navbar — Logo/name, links to Menu, About, Gallery, Location, Reservation/Order, with a prominent "Order Online" or "Reserve a Table" CTA button.

Hero Section — Full-width high-quality food/interior image or short looping video background, restaurant name, tagline, two CTAs: "View Menu" and "Reserve a Table". Include a subtle scroll-down indicator.

About Section — Short story of Pinewood: a cozy indoor + outdoor garden café in the heart of Dhanmondi, known for consistent, flavorful food (highlight pasta, seafood, set menus), relaxed ambiance with good music, indoor seating on ground floor + open terrace/smoking zone on second floor. Include 2-3 ambiance photos in a masonry or asymmetric grid.

Menu Section (core feature) — Tabbed or filterable menu by category:

Pasta & Italian

Steak & Grills

Soup

Salad

Chinese Platter / Chowmein & Noodles

Seafood Set Menu

Burgers & Sandwiches

Dessert

Coffee, Freezers & Hot Drinks Each item: name, short description, price in BDT (৳), and optional small image. Include a "Popular" or "Chef's Pick" badge on 4-5 standout items (e.g. Mexican Chicken, Seafood Salad, signature Pasta). Make this section searchable/filterable if possible.

Gallery Section — Grid or carousel of interior/exterior/plated-food photos capturing the cozy garden ambiance and outdoor terrace.

Reviews/Testimonials Section — 3-4 short customer quotes (paraphrased, warm tone) about the pasta, seafood, ambiance, and service, displayed as cards with star ratings.

Reservation / Order Online Section — A simple reservation form (Name, Phone, Date, Time, Party size, Notes) OR prominent buttons linking out to Foodpanda / Pathao Food for delivery orders. Include a WhatsApp/Call button for direct booking.

Location & Hours Section — Embedded Google Map (Road-6, Dhanmondi, Dhaka), full address, opening hours, phone number, and social links (Facebook/Instagram).

Footer — Logo, short tagline, quick links, social icons, contact info, copyright.

Functional Requirements

Smooth scroll navigation between sections.

Menu section should support category filtering via tabs or buttons (client-side, no page reload).

All images should use placeholder/stock food photography paths that I can swap in later (name them clearly, e.g. /images/menu/pasta-alfredo.jpg).

Reservation form should validate required fields and show a success confirmation state (can be a mock submission for now).

Include basic SEO meta tags (title, description, Open Graph tags) using the restaurant name and Dhanmondi location.

Ensure fast load: lazy-load images below the fold.

Accessible: proper alt text, sufficient color contrast, keyboard-navigable nav and forms.

Tech Preference

Build it as a single modern responsive website using React + Tailwind CSS (or plain HTML/CSS/JS if the tool defaults to that). Keep components modular (Navbar, Hero, About, Menu, Gallery, Testimonials, Reservation, Location, Footer) so sections can be edited independently later.

Tone of Copy

Warm, inviting, slightly upscale-casual — not overly formal. Emphasize "cozy garden escape in the middle of Dhanmondi" and consistently high food quality.

Tips for using this prompt

If the builder asks for images first, tell it to use tasteful stock/placeholder food & café imagery matching a warm garden-café aesthetic — you can swap in real Pinewood photos afterward.

If you want, ask the tool to generate 2-3 hero layout variations first, then pick one before it builds out the rest.

Paste actual current menu items/prices from Foodpanda or Pathao Food listings once available, for accuracy.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pinewood1.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da37dfe7-3a8c-4b17-a6b0-43d0e878e61f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
