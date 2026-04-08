import Layout from "@/components/Layout";
import { Car, MapPin, ExternalLink } from "lucide-react";
import { travelNotes } from "@/data/siteData";

export default function TravelPage() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">Travel Guide</h1>
        <p className="mb-8 text-muted-foreground">
          How to get there and get around.
        </p>

        <div className="space-y-4">
          {travelNotes.map((note, i) => (
            <div key={i} className="rounded-xl border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-5 w-5 text-sage" />
                <h3 className="font-semibold">{note.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{note.content}</p>
              {note.mapLink && (
                <a
                  href={note.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline"
                >
                  <MapPin className="h-3 w-3" /> Open in Maps <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}