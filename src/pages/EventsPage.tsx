import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { events, WeddingEvent } from "@/data/siteData";

function groupByType(evts: WeddingEvent[]) {
  const groups: Record<string, WeddingEvent[]> = {};
  evts.forEach((e) => {
    const key = e.eventType;
    if (!groups[key]) groups[key] = [];
    groups[key].push(e);
  });
  return groups;
}

const typeLabels: Record<string, string> = {
  "pre-wedding": "Pre-Wedding",
  "bachelor-party": "Bachelor Party",
  "wedding-week": "Wedding Week",
  reception: "Reception",
};

export default function EventsPage() {
  const grouped = groupByType(events);
  const orderedTypes = ["pre-wedding", "bachelor-party", "wedding-week", "reception"];

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">All Events</h1>
        <p className="mb-8 text-muted-foreground">
          Every event you need to know about, organized by phase.
        </p>

        {orderedTypes.map((type) => {
          const group = grouped[type];
          if (!group) return null;
          return (
            <section key={type} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
                <span className="h-1 w-6 rounded-full bg-gold inline-block" />
                {typeLabels[type] || type}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {group.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
