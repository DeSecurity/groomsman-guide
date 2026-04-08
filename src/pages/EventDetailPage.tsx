import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Shirt, DollarSign, Hotel, Car, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { getEventBySlug, getAttireForEvent, formatDate } from "@/data/siteData";

export default function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug || "");
  const attire = getAttireForEvent(slug || "");

  if (!event) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Event not found</h1>
          <Link to="/events" className="mt-4 inline-block text-sage hover:underline">
            ← Back to events
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-6 md:py-10">
        <Link
          to="/events"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Events
        </Link>

        <h1 className="mb-6 font-display text-3xl font-bold md:text-4xl">{event.name}</h1>

        {/* Special Notes — prominent callouts */}
        {event.specialNotes && event.specialNotes.length > 0 && (
          <div className="mb-8 space-y-3">
            {event.specialNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border-2 border-sage/30 bg-sage-muted p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 text-sage flex-shrink-0" />
                <p className="text-sm font-medium">{note}</p>
              </div>
            ))}
          </div>
        )}

        {/* Key Info */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
            <Calendar className="mt-0.5 h-5 w-5 text-sage" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-semibold">{formatDate(event.date)}</p>
              {event.dateEnd && <p className="text-sm text-muted-foreground">to {formatDate(event.dateEnd)}</p>}
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
            <Clock className="mt-0.5 h-5 w-5 text-sage" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-semibold">{event.time}</p>
              {event.timeNotes && <p className="text-sm text-muted-foreground">{event.timeNotes}</p>}
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
            <MapPin className="mt-0.5 h-5 w-5 text-sage" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{event.locationName}</p>
              {event.address && <p className="text-sm text-muted-foreground">{event.address}</p>}
            </div>
          </div>
        </div>

        {/* What to Wear — PROMINENT */}
        <div className="mb-8 rounded-xl border-2 border-rose-accent/30 bg-rose-muted p-6">
          <div className="mb-3 flex items-center gap-2">
            <Shirt className="h-5 w-5 text-rose-accent" />
            <h2 className="font-display text-xl font-bold">What to Wear</h2>
          </div>
          <p className="mb-3 text-lg font-semibold">{event.attire}</p>
          {attire && (
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Required Items</p>
                <ul className="space-y-1">
                  {attire.requiredItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {attire.optionalItems.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Optional</p>
                  <ul className="space-y-1">
                    {attire.optionalItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm opacity-80">
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {attire.buyOrRent && (
                <p className="text-sm"><span className="font-medium">Buy or Rent:</span> {attire.buyOrRent}</p>
              )}
              {attire.notes && (
                <p className="text-sm text-muted-foreground italic">{attire.notes}</p>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="mb-2 font-display text-xl font-semibold">About This Event</h2>
          <p className="text-muted-foreground">{event.description}</p>
        </div>

        {/* Additional Info */}
        <div className="grid gap-4 md:grid-cols-3">
          {event.costNotes && (
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-sage" />
                <h3 className="font-semibold text-sm">Cost Notes</h3>
              </div>
              <p className="text-sm text-muted-foreground">{event.costNotes}</p>
            </div>
          )}
          {event.lodgingNotes && (
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Hotel className="h-4 w-4 text-sage" />
                <h3 className="font-semibold text-sm">Lodging</h3>
              </div>
              <p className="text-sm text-muted-foreground">{event.lodgingNotes}</p>
            </div>
          )}
          {event.travelNotes && (
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-4 w-4 text-sage" />
                <h3 className="font-semibold text-sm">Travel</h3>
              </div>
              <p className="text-sm text-muted-foreground">{event.travelNotes}</p>
            </div>
          )}
        </div>

        {event.sourceReference && (
          <p className="mt-6 text-xs text-muted-foreground">
            Source: <a href={`https://${event.sourceReference}`} target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">{event.sourceReference}</a>
          </p>
        )}
      </div>
    </Layout>
  );
}