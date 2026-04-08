import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { getNextEvent, formatDate, getDaysUntil } from "@/data/siteData";

export default function NextUpBanner() {
  const event = getNextEvent();
  if (!event) return null;

  const daysUntil = getDaysUntil(event.date);

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-sage/20" />
      <div className="container relative py-8 md:py-12">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-sage px-3 py-1 text-xs font-bold uppercase tracking-wider text-sage-foreground">
            Next Up
          </span>
          {daysUntil > 0 && (
            <span className="text-sm opacity-80">{daysUntil} days away</span>
          )}
        </div>

        <h1 className="mb-4 font-display text-3xl font-bold md:text-5xl">{event.name}</h1>

        <div className="mb-6 grid gap-3 text-sm md:grid-cols-2 md:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-rose-accent" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-rose-accent" />
            <span>{event.time}{event.timeNotes ? ` — ${event.timeNotes}` : ""}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-rose-accent" />
            <span>{event.locationName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shirt className="h-4 w-4 text-rose-accent" />
            <span>{event.attire}</span>
          </div>
        </div>

        <Link
          to={`/events/${event.slug}`}
          className="inline-flex items-center gap-2 rounded-lg bg-sage px-5 py-2.5 text-sm font-semibold text-sage-foreground transition-transform hover:scale-105"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}