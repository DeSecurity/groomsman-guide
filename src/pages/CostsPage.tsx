import Layout from "@/components/Layout";
import { DollarSign } from "lucide-react";
import {
  costs,
  getTotalEstimatedCost,
  getCategorySubtotal,
  getCostByCategory,
  CostItem,
} from "@/data/siteData";

const categoryLabels: Record<CostItem["category"], string> = {
  attire: "Attire",
  "bachelor-party": "Bachelor Party",
  "wedding-week": "Wedding Week",
  gifts: "Gifts",
  misc: "Miscellaneous",
};

const categoryOrder: CostItem["category"][] = ["attire", "bachelor-party", "wedding-week", "gifts", "misc"];

export default function CostsPage() {
  const total = getTotalEstimatedCost();

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="mb-2 font-display text-3xl font-bold md:text-4xl">Cost Breakdown</h1>
        <p className="mb-8 text-muted-foreground">
          Estimated expenses so you can plan ahead. Costs are approximate.
        </p>

        {/* Total & Summary */}
        <div className="mb-8 rounded-xl border-2 border-sage/30 bg-sage-muted p-6">
          <div className="mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-sage" />
            <h2 className="font-display text-2xl font-bold">~${total.toLocaleString()}</h2>
            <span className="text-muted-foreground text-sm">estimated total</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {categoryOrder.map((cat) => (
              <div key={cat} className="text-center">
                <p className="text-lg font-bold">${getCategorySubtotal(cat)}</p>
                <p className="text-xs text-muted-foreground">{categoryLabels[cat]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        {categoryOrder.map((cat) => {
          const items = getCostByCategory(cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="mb-8">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
                <span className="h-1 w-6 rounded-full bg-sage inline-block" />
                {categoryLabels[cat]}
                <span className="text-sm font-normal text-muted-foreground">
                  — ${getCategorySubtotal(cat)}
                </span>
              </h2>
              <div className="space-y-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border bg-card p-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.itemName}</p>
                      {item.notes && (
                        <p className="text-xs text-muted-foreground mt-0.5">{item.notes}</p>
                      )}
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <p className="font-semibold">${item.estimatedCost}</p>
                      {item.lowRange != null && item.highRange != null && (
                        <p className="text-xs text-muted-foreground">
                          ${item.lowRange}–${item.highRange}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}