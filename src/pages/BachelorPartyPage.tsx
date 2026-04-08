import Layout from "@/components/Layout";
import { PartyPopper, Plane, Hotel, DollarSign, Calendar, Shirt, MapPin } from "lucide-react";
import { bachelorParty } from "@/data/siteData";

export default function BachelorPartyPage() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <PartyPopper className="h-6 w-6 text-sage" />
            <h1 className="font-display text-3xl font-bold md:text-4xl">Bachelor Party</h1>
          </div>
          <p className="text-lg text-muted-foreground">Las Vegas · {bachelorParty.dates}</p>
        </div>

        {/* Key Info */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-xl border bg-card p-4">
            <Calendar className="mb-2 h-5 w-5 text-sage" />
            <p className="text-xs text-muted-foreground">Dates</p>
            <p className="font-semibold text-sm">{bachelorParty.dates}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <Hotel className="mb-2 h-5 w-5 text-sage" />
            <p className="text-xs text-muted-foreground">Hotel</p>
            <p className="font-semibold text-sm">{bachelorParty.hotel}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <DollarSign className="mb-2 h-5 w-5 text-sage" />
            <p className="text-xs text-muted-foreground">Est. Total</p>
            <p className="font-semibold text-sm">{bachelorParty.estimatedTotalCost}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <MapPin className="mb-2 h-5 w-5 text-sage" />
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="font-semibold text-sm">Las Vegas Strip</p>
          </div>
        </div>

        {/* Arrival / Departure */}
        <div className="mb-8 rounded-xl border-2 border-sage/30 bg-sage-muted p-5">
          <h2 className="mb-3 font-display text-lg font-bold">Arrival & Departure</h2>
          <p className="text-sm mb-1"><strong>Arrive:</strong> {bachelorParty.arrivalNote}</p>
          <p className="text-sm"><strong>Depart:</strong> {bachelorParty.departureNote}</p>
        </div>

        {/* Schedule Overview */}
        <section className="mb-8">
          <h2 className="mb-4 font-display text-xl font-semibold">Schedule Overview</h2>
          <div className="space-y-3">
            {bachelorParty.scheduleOverview.map((day) => (
              <div key={day.day} className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary font-bold text-sm">
                  {day.day.slice(0, 3)}
                </div>
                <div>
                  <h3 className="font-semibold">{day.day}</h3>
                  <p className="text-sm text-muted-foreground">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-8">
          <h2 className="mb-4 font-display text-xl font-semibold">Expected Costs</h2>
          <div className="space-y-2">
            {bachelorParty.costBreakdown.map((item) => (
              <div key={item.item} className="flex items-center justify-between rounded-lg border bg-card p-4">
                <span className="text-sm font-medium">{item.item}</span>
                <span className="font-semibold text-sm">{item.estimate}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Flight & Travel */}
        <section className="mb-8">
          <h2 className="mb-4 font-display text-xl font-semibold">Flights & Travel</h2>
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Plane className="h-5 w-5 text-sage" />
              <h3 className="font-semibold">Flight Info</h3>
            </div>
            <p className="text-sm text-muted-foreground">{bachelorParty.flightGuidance}</p>
            <p className="mt-2 text-sm text-muted-foreground">{bachelorParty.travelNotes}</p>
          </div>
        </section>

        {/* Attire */}
        <section>
          <h2 className="mb-4 font-display text-xl font-semibold">What to Pack</h2>
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Shirt className="h-5 w-5 text-sage" />
              <h3 className="font-semibold">Attire Notes</h3>
            </div>
            <p className="text-sm text-muted-foreground">{bachelorParty.attireNotes}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}