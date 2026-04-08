import Layout from "@/components/Layout";
import { Shirt } from "lucide-react";
import { attireByEvent, events, formatDate } from "@/data/siteData";

export default function AttirePage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">Attire Guide</h1>
        <p className="mb-8 text-muted-foreground">
          What to wear for every event — at a glance.
        </p>

        {/* Clothing by Day Quick Reference */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-xl font-semibold">Clothing by Day</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 pr-4 font-semibold">Event</th>
                  <th className="pb-3 pr-4 font-semibold">Date</th>
                  <th className="pb-3 pr-4 font-semibold">What to Wear</th>
                  <th className="pb-3 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  const attire = attireByEvent.find((a) => a.eventSlug === event.slug);
                  return (
                    <tr key={event.slug} className="border-b last:border-0">
                      <td className="py-3 pr-4 font-medium">{event.name}</td>
                      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                        {formatDate(event.date).replace(/,\s\d{4}/, "")}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-muted px-2.5 py-0.5 text-xs font-medium">
                          <Shirt className="h-3 w-3 text-gold" />
                          {event.attire}
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground hidden md:table-cell">
                        {attire?.notes || "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Attire by Event */}
        <section>
          <h2 className="mb-4 font-display text-xl font-semibold">Detailed Breakdown</h2>
          <div className="space-y-4">
            {attireByEvent.map((attire) => {
              const event = events.find((e) => e.slug === attire.eventSlug);
              return (
                <div key={attire.eventSlug} className="rounded-xl border bg-card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">
                      {event?.name || attire.eventSlug}
                    </h3>
                    <span className="rounded-full bg-gold-muted px-3 py-0.5 text-xs font-medium">
                      {attire.dressCode}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-medium text-gold">{attire.outfitLabel}</p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Required</p>
                      <ul className="space-y-1">
                        {attire.requiredItems.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {attire.optionalItems.length > 0 && (
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase text-muted-foreground">Optional</p>
                        <ul className="space-y-1">
                          {attire.optionalItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm opacity-70">
                              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {(attire.buyOrRent || attire.notes) && (
                    <div className="mt-3 border-t pt-3">
                      {attire.buyOrRent && (
                        <p className="text-sm"><span className="font-medium">Buy or Rent:</span> {attire.buyOrRent}</p>
                      )}
                      {attire.notes && (
                        <p className="text-sm text-muted-foreground italic mt-1">{attire.notes}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
