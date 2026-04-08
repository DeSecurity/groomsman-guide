import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Shirt, ArrowRight } from "lucide-react";
import { WeddingEvent, formatDate, formatShortDate } from "@/data/siteData";

interface Props {
  event: WeddingEvent;
  variant?: "compact" | "full";
}

const typeColors: Record<string, string> = {
  "pre-wedding": "bg-rose-accent/10 text-rose-accent",
  "bachelor-party": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "wedding-week": "bg-sage/10 text-sage",
  "reception": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

export default function EventCard({ event, variant = "full" }: Props) {
  if (variant === "compact") {
    return (
      <Link
        to={`/events/${event.slug}`}
        className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-sage/50"
      >
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-secondary text-center">
          <span className="text-xs font-medium text-muted-foreground">
            {formatShortDate(event.date).split(" ")[0]}
          </span>
          <span className="text-lg font-bold leading-none">
            {formatShortDate(event.date).split(" ")[1]}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{event.name}</h3>
          <p className="text-sm text-muted-foreground truncate">{event.time} · {event.locationName}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </Link>
    );
  }

  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block rounded-xl border bg-card p-5 transition-all hover:border-sage/50 hover:shadow-lg"
    >
      <div className="mb-3 flex items-start justify-between">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColors[event.eventType] || ""}`}>
          {event.eventType.replace("-", " ")}
        </span>
        {event.dateEnd && (
          <span className="text-xs text-muted-foreground">Multi-day</span>
        )}
      </div>

      <h3 className="mb-3 font-display text-xl font-semibold group-hover:text-sage transition-colors">
        {event.name}
      </h3>

      <div className="mb-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{event.locationName}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-sage-muted px-3 py-2 text-sm">
        <Shirt className="h-4 w-4 text-sage" />
        <span className="font-medium">{event.attire}</span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{event.description}</p>

      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-sage">
        View Details <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}