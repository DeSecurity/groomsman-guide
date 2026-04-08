import Layout from "@/components/Layout";
import NextUpBanner from "@/components/NextUpBanner";
import EventCard from "@/components/EventCard";
import { Link } from "react-router-dom";
import { Calendar, DollarSign, Hotel, PartyPopper, ArrowRight } from "lucide-react";
import {
  events,
  bachelorParty,
  getTotalEstimatedCost,
  getDaysUntil,
  couple,
} from "@/data/siteData";

export default function HomePage() {
  const totalCost = getTotalEstimatedCost();
  const weddingDaysUntil = getDaysUntil(couple.weddingDate);

  const quickCards = [
    {
      icon: PartyPopper,
      title: "Bachelor Party",
      subtitle: bachelorParty.dates,
      to: "/bachelor-party",
    },
    {
      icon: Calendar,
      title: "Wedding Week",
      subtitle: "July 21–25, 2026",
      to: "/events",
    },
    {
      icon: Hotel,
      title: "Lodging",
      subtitle: "Houses, hotels & more",
      to: "/lodging",
    },
    {
      icon: DollarSign,
      title: "Estimated Cost",
      subtitle: `~$${totalCost.toLocaleString()} total`,
      to: "/costs",
    },
  ];

  return (
    <Layout>
      <NextUpBanner />

      {/* Quick Info Cards */}
      <section className="container py-6 md:py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{couple.groomName} & {couple.brideName}'s Wedding</p>
            {weddingDaysUntil > 0 && (
              <p className="text-xs text-muted-foreground">{weddingDaysUntil} days to the ceremony</p>
            )}
          </div>
          <a
            href={couple.weddingWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sage hover:underline"
          >
            Wedding Site →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {quickCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group flex flex-col items-start gap-3 rounded-xl border bg-card p-4 transition-all hover:border-sage/50 hover:shadow-md"
            >
              <card.icon className="h-6 w-6 text-sage" />
              <div>
                <h3 className="font-semibold text-sm">{card.title}</h3>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Events You Need to Know */}
      <section className="container pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Events You Need to Know
          </h2>
          <Link
            to="/events"
            className="flex items-center gap-1 text-sm font-medium text-sage hover:underline"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </Layout>
  );
}