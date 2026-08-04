import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Phone, MessageCircle, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits and + - ( )"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  party: z.coerce.number().int().min(1, "At least 1 guest").max(30, "Please call us for 30+ guests"),
  notes: z.string().trim().max(500, "Notes must be under 500 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Reservation() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  }

  return (
    <section id="reserve" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Reserve or order
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Save your table, or have it sent over
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Terrace tables fill up fast on Thursday and Friday evenings — book ahead and
            we'll keep one warm for you. Prefer to stay in? We're on both delivery apps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-full border-border">
              <a href="https://www.foodpanda.com.bd" target="_blank" rel="noopener noreferrer">
                <Bike className="mr-2 h-4 w-4" aria-hidden="true" /> Order on Foodpanda
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border">
              <a href="https://food.pathao.com" target="_blank" rel="noopener noreferrer">
                <Bike className="mr-2 h-4 w-4" aria-hidden="true" /> Order on Pathao Food
              </a>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="tel:+8801700000000">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> Call to book
              </a>
            </Button>
            <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> WhatsApp us
              </a>
            </Button>
          </div>
        </div>

        <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
          {done ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl text-primary">Table requested</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thank you — we've got your request. Someone from Pinewood will call to
                confirm your booking shortly.
              </p>
              <Button
                variant="outline"
                className="mt-7 rounded-full border-border"
                onClick={() => setDone(false)}
              >
                Book another table
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={80} className="mt-2 h-11" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required maxLength={20} className="mt-2 h-11" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="date" required className="mt-2 h-11" />
                  {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" name="time" type="time" required className="mt-2 h-11" />
                  {errors.time && <p className="mt-1 text-xs text-destructive">{errors.time}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="party">Party size</Label>
                <Input
                  id="party"
                  name="party"
                  type="number"
                  min={1}
                  max={30}
                  defaultValue={2}
                  required
                  className="mt-2 h-11"
                />
                {errors.party && <p className="mt-1 text-xs text-destructive">{errors.party}</p>}
              </div>
              <div>
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  maxLength={500}
                  placeholder="Terrace seating, birthday cake, high chair…"
                  className="mt-2"
                />
                {errors.notes && <p className="mt-1 text-xs text-destructive">{errors.notes}</p>}
              </div>
              <Button
                type="submit"
                className="h-12 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request a table
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
