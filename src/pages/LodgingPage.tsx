import Layout from "@/components/Layout";
import { Hotel, ExternalLink } from "lucide-react";
import { lodging } from "@/data/siteData";

const typeLabels: Record<string, string> = {
  hotel: "Hotel",
  "shared-house": "Shared House",
  condo: "Condo",
  family: "Family Stay",
};

export default function LodgingPage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">Lodging Options</h1>
        <p className="mb-8 text-muted-foreground">
          Where to stay for the bachelor party and wedding week.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {lodging.map((option) => (
            <div key={option.name} className="rounded-xl border bg-card p-5">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-sage" />
                  <h3 className="font-display text-lg font-semibold">{option.name}</h3>
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                  {typeLabels[option.lodgingType]}
                </span>
              </div>

              <p className="mb-1 text-sm text-muted-foreground">{option.location}</p>
              {option.address && (
                <p className="mb-1 text-sm font-medium">{option.address}</p>
              )}
              <p className="mb-3 text-sm">{option.description}</p>

              {(option.estimatedCostPerNight || option.totalEstimatedCost) && (
                <div className="mb-3 flex gap-4 text-sm">
                  {option.estimatedCostPerNight && (
                    <div>
                      <span className="text-muted-foreground">Per night: </span>
                      <span className="font-semibold">${option.estimatedCostPerNight}</span>
                    </div>
                  )}
                  {option.totalEstimatedCost && (
                    <div>
                      <span className="text-muted-foreground">Total: </span>
                      <span className="font-semibold">${option.totalEstimatedCost}</span>
                    </div>
                  )}
                </div>
              )}

              {option.notes && (
                <p className="text-xs text-muted-foreground italic">{option.notes}</p>
              )}

              {option.bookingLink && (
                <a
                  href={option.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline"
                >
                  Book / View <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}