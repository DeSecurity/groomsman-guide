/**
 * ============================================================
 * GROOMSMAN PLANNER — MASTER DATA FILE
 * ============================================================
 * 
 * This is the SINGLE SOURCE OF TRUTH for all site content.
 * Every page pulls from this file. To update the site:
 * 
 * 1. Edit the data below
 * 2. Commit and push to GitHub
 * 3. GitHub Pages will rebuild automatically
 * 
 * STRUCTURE:
 *  - couple: Names and wedding info
 *  - events: All events (wedding week, bachelor party, etc.)
 *  - attire: What to wear for each event
 *  - costs: Expected expenses
 *  - lodging: Where to stay
 *  - travel: How to get there
 *  - bachelorParty: Dedicated bachelor party info
 * ============================================================
 */

// ─── COUPLE INFO ────────────────────────────────────────────
export const couple = {
  groomName: "Daniel",
  brideName: "Tina",
  weddingDate: "2026-07-24",
  weddingWebsite: "https://danielandtina2026.com/",
  tagline: "The Groomsman's Guide to Daniel & Tina's Wedding",
};

// ─── EVENT TYPES ────────────────────────────────────────────
export type EventType = "pre-wedding" | "bachelor-party" | "wedding-week" | "reception";

export interface WeddingEvent {
  name: string;
  slug: string;
  eventType: EventType;
  date: string;           // ISO date string, e.g. "2026-07-24"
  dateEnd?: string;       // For multi-day events only
  time: string;           // e.g. "9:00 AM" or "TBD"
  timeNotes?: string;     // e.g. "Try to arrive early"
  locationName: string;
  address?: string;
  attire: string;         // Quick summary, e.g. "Formal — Tuxedo"
  description: string;
  travelNotes?: string;
  lodgingNotes?: string;
  costNotes?: string;
  sourceReference?: string;
}

// ─── EVENTS ─────────────────────────────────────────────────
// Add, remove, or edit events here. All pages derive from this list.
export const events: WeddingEvent[] = [
  {
    name: "Bridal BBQ",
    slug: "bridal-bbq",
    eventType: "pre-wedding",
    date: "2026-05-24",
    time: "TBD",
    locationName: "Daniel and Tina's House",
    attire: "Casual",
    description:
      "Casual get-together for groomsmen and bridesmaids to get to know each other and hang out with Daniel and Tina.",
    lodgingNotes: "No overnight stay needed.",
    costNotes: "Bring a dish or drinks to share.",
  },
  {
    name: "Bachelor Party in Las Vegas",
    slug: "bachelor-party",
    eventType: "bachelor-party",
    date: "2026-06-26",
    dateEnd: "2026-06-28",
    time: "All Day",
    timeNotes: "Try to arrive early Friday to maximize time. Leave midday Sunday.",
    locationName: "Treasure Island Hotel, Las Vegas",
    address: "3300 S Las Vegas Blvd, Las Vegas, NV 89109",
    attire: "Casual / Event-Dependent",
    description: "Bachelor party weekend in Vegas. Three days of celebrating with the boys.",
    travelNotes: "Fly into Harry Reid International Airport (LAS). Hotel is on the Strip.",
    lodgingNotes: "Treasure Island Hotel — group block TBD.",
    costNotes: "Expect $400–$700 total for hotel, flights, food, drinks, and activities.",
  },
  {
    name: "Bridal Mehndi",
    slug: "bridal-mehndi",
    eventType: "wedding-week",
    date: "2026-07-21",
    time: "10:00 AM",
    locationName: "Auburn, WA",
    attire: "Smart Casual",
    description: "Traditional mehndi ceremony. A colorful celebration with henna, music, and dancing.",
    sourceReference: "danielandtina2026.com",
    lodgingNotes: "Stay at the shared house or nearby hotel.",
    costNotes: "No direct cost for groomsmen.",
  },
  {
    name: "Jaggo Ceremony",
    slug: "jaggo-ceremony",
    eventType: "wedding-week",
    date: "2026-07-22",
    time: "6:30 PM",
    locationName: "Kent, WA",
    attire: "Traditional / Semi-Formal",
    description: "Energetic evening ceremony with music, dancing, and celebration leading up to the wedding.",
    sourceReference: "danielandtina2026.com",
    lodgingNotes: "Stay at the shared house or nearby hotel.",
    costNotes: "No direct cost for groomsmen.",
  },
  {
    name: "Haldi & Choora",
    slug: "haldi-choora",
    eventType: "wedding-week",
    date: "2026-07-23",
    time: "Morning",
    timeNotes: "Exact time TBD — expect a morning start.",
    locationName: "Auburn, WA",
    attire: "Casual — wear clothes you don't mind getting stained",
    description: "Turmeric blessing ceremony followed by the Choora. Expect color, laughter, and mess.",
    sourceReference: "danielandtina2026.com",
    lodgingNotes: "Stay at the shared house or nearby hotel.",
    costNotes: "No direct cost for groomsmen.",
  },
  {
    name: "Wedding Ceremony",
    slug: "wedding-ceremony",
    eventType: "wedding-week",
    date: "2026-07-24",
    time: "9:00 AM",
    timeNotes: "Groomsmen should arrive by 7:30 AM for preparation.",
    locationName: "Gurudwara Sacha Marg Sahib",
    address: "Auburn, WA",
    attire: "Formal — Traditional Wedding Attire",
    description: "The main event. Daniel and Tina's wedding ceremony at the Gurudwara.",
    sourceReference: "danielandtina2026.com",
    lodgingNotes: "Stay at the shared house or nearby hotel the night before.",
    costNotes: "No direct cost. Gift is separate.",
  },
  {
    name: "Reception",
    slug: "reception",
    eventType: "reception",
    date: "2026-07-25",
    time: "6:00 PM",
    locationName: "Lakewood, WA",
    attire: "Formal — Suit or Tuxedo",
    description: "The grand celebration. Dinner, speeches, dancing, and a great time with everyone.",
    sourceReference: "danielandtina2026.com",
    lodgingNotes: "Last night — shared house or hotel.",
    costNotes: "No direct cost.",
  },
];

// ─── ATTIRE ─────────────────────────────────────────────────
export interface AttireItem {
  eventSlug: string;       // Links to event.slug
  dressCode: string;
  outfitLabel: string;
  requiredItems: string[];
  optionalItems: string[];
  buyOrRent?: string;      // e.g. "Rent" or "Buy"
  notes?: string;
}

export const attireByEvent: AttireItem[] = [
  {
    eventSlug: "bridal-bbq",
    dressCode: "Casual",
    outfitLabel: "Casual Hangout",
    requiredItems: ["Comfortable shirt", "Jeans or shorts", "Sneakers or casual shoes"],
    optionalItems: ["Sunglasses", "Hat"],
    notes: "Keep it relaxed. No dress code enforcement.",
  },
  {
    eventSlug: "bachelor-party",
    dressCode: "Casual / Event-Dependent",
    outfitLabel: "Vegas Casual",
    requiredItems: ["Comfortable day clothes", "Going-out outfit for evenings", "Comfortable shoes"],
    optionalItems: ["Swimwear for pool", "Sunglasses", "Light jacket for AC"],
    notes: "Pack for warm weather. Some venues may have dress codes for nightlife.",
  },
  {
    eventSlug: "bridal-mehndi",
    dressCode: "Smart Casual",
    outfitLabel: "Smart Casual",
    requiredItems: ["Button-down shirt or kurta", "Chinos or dress pants", "Clean shoes"],
    optionalItems: ["Light blazer", "Accessories"],
    notes: "Colorful attire is encouraged.",
  },
  {
    eventSlug: "jaggo-ceremony",
    dressCode: "Traditional / Semi-Formal",
    outfitLabel: "Semi-Formal or Traditional",
    requiredItems: ["Kurta or dress shirt", "Dress pants", "Dress shoes"],
    optionalItems: ["Traditional accessories", "Pocket square"],
    notes: "Traditional attire is welcome and appreciated.",
  },
  {
    eventSlug: "haldi-choora",
    dressCode: "Casual — Stain-Friendly",
    outfitLabel: "Old Casual Clothes",
    requiredItems: ["Old t-shirt or white shirt", "Shorts or old pants", "Sandals or old shoes"],
    optionalItems: [],
    notes: "You WILL get turmeric on you. Wear clothes you don't mind staining yellow.",
  },
  {
    eventSlug: "wedding-ceremony",
    dressCode: "Formal — Traditional",
    outfitLabel: "Wedding Formal",
    requiredItems: ["Groomsman outfit (coordinated)", "Dress shoes", "Turban/pagri if provided"],
    optionalItems: ["Cufflinks", "Watch"],
    buyOrRent: "Coordinated by Daniel — details TBD",
    notes: "Daniel will coordinate groomsman attire. Stay tuned for specifics.",
  },
  {
    eventSlug: "reception",
    dressCode: "Formal",
    outfitLabel: "Suit or Tuxedo",
    requiredItems: ["Suit or tuxedo", "Dress shirt", "Tie or bow tie", "Dress shoes", "Belt"],
    optionalItems: ["Pocket square", "Cufflinks", "Watch"],
    buyOrRent: "Rent or own",
    notes: "Classic formal. Dark suit or tuxedo recommended.",
  },
];

// ─── COSTS ──────────────────────────────────────────────────
export interface CostItem {
  category: "attire" | "bachelor-party" | "wedding-week" | "gifts" | "misc";
  itemName: string;
  estimatedCost: number;   // Best estimate in USD
  lowRange?: number;
  highRange?: number;
  notes?: string;
  relatedEventSlug?: string;
}

export const costs: CostItem[] = [
  // Attire
  { category: "attire", itemName: "Tux or Suit Rental", estimatedCost: 200, lowRange: 150, highRange: 300, notes: "For reception. Rent or use your own.", relatedEventSlug: "reception" },
  { category: "attire", itemName: "Dress Shirt", estimatedCost: 50, lowRange: 30, highRange: 80, notes: "White or coordinated color." },
  { category: "attire", itemName: "Dress Shoes", estimatedCost: 80, lowRange: 50, highRange: 150, notes: "Black or dark brown. Can reuse." },
  { category: "attire", itemName: "Tie / Bow Tie", estimatedCost: 25, lowRange: 15, highRange: 50 },
  { category: "attire", itemName: "Accessories (belt, socks, pocket square)", estimatedCost: 40, lowRange: 20, highRange: 60 },
  { category: "attire", itemName: "Traditional Outfit (if needed)", estimatedCost: 75, lowRange: 50, highRange: 150, notes: "For Jaggo or Mehndi. May be coordinated.", relatedEventSlug: "jaggo-ceremony" },

  // Bachelor Party
  { category: "bachelor-party", itemName: "Hotel (2 nights)", estimatedCost: 200, lowRange: 150, highRange: 300, notes: "Treasure Island — split room cost.", relatedEventSlug: "bachelor-party" },
  { category: "bachelor-party", itemName: "Flight to Las Vegas", estimatedCost: 200, lowRange: 100, highRange: 350, notes: "Book early for best prices.", relatedEventSlug: "bachelor-party" },
  { category: "bachelor-party", itemName: "Food & Drinks", estimatedCost: 150, lowRange: 100, highRange: 250, notes: "3 days of meals and drinks.", relatedEventSlug: "bachelor-party" },
  { category: "bachelor-party", itemName: "Activities & Entertainment", estimatedCost: 100, lowRange: 50, highRange: 200, notes: "Shows, pool, clubs, etc.", relatedEventSlug: "bachelor-party" },

  // Wedding Week
  { category: "wedding-week", itemName: "Shared House Contribution", estimatedCost: 150, lowRange: 100, highRange: 250, notes: "Split among groomsmen for the week." },
  { category: "wedding-week", itemName: "Wedding Travel (flights/gas)", estimatedCost: 200, lowRange: 0, highRange: 400, notes: "Depends on where you're coming from." },
  { category: "wedding-week", itemName: "Food & Meals (wedding week)", estimatedCost: 100, lowRange: 50, highRange: 200, notes: "Some meals provided, some on your own." },

  // Gifts
  { category: "gifts", itemName: "Wedding Gift", estimatedCost: 150, lowRange: 100, highRange: 300, notes: "Check registry on wedding website." },

  // Misc
  { category: "misc", itemName: "Miscellaneous / Incidentals", estimatedCost: 75, lowRange: 25, highRange: 150, notes: "Uber, tips, snacks, etc." },
];

// ─── LODGING ────────────────────────────────────────────────
export interface LodgingOption {
  name: string;
  lodgingType: "hotel" | "shared-house" | "condo" | "family";
  location: string;
  description: string;
  estimatedCostPerNight?: number;
  totalEstimatedCost?: number;
  notes?: string;
  bookingLink?: string;
}

export const lodging: LodgingOption[] = [
  {
    name: "Treasure Island Hotel",
    lodgingType: "hotel",
    location: "3300 S Las Vegas Blvd, Las Vegas, NV 89109",
    description: "Bachelor party hotel on the Strip. Group block details TBD.",
    estimatedCostPerNight: 100,
    totalEstimatedCost: 200,
    notes: "Split room with another groomsman to save. 2 nights (Fri–Sun).",
    bookingLink: "https://www.treasureisland.com/",
  },
  {
    name: "Daniel & Tina's Condo",
    lodgingType: "condo",
    location: "Auburn, WA",
    description: "Limited space available for a few groomsmen during wedding week.",
    notes: "Check with Daniel for availability. First come, first served.",
  },
  {
    name: "Shared House 1",
    lodgingType: "shared-house",
    location: "Auburn/Kent, WA area",
    description: "Rented house for groomsmen during wedding week. Split cost among the group.",
    estimatedCostPerNight: 30,
    totalEstimatedCost: 150,
    notes: "5 nights (Mon–Sat). ~$30/night per person depending on group size.",
  },
  {
    name: "Shared House 2",
    lodgingType: "shared-house",
    location: "Auburn/Kent, WA area",
    description: "Overflow house if more space is needed.",
    estimatedCostPerNight: 30,
    totalEstimatedCost: 150,
    notes: "Backup option. Same pricing structure as Shared House 1.",
  },
  {
    name: "Family Stay",
    lodgingType: "family",
    location: "Auburn/Kent, WA area",
    description: "If you have family in the area, you're welcome to stay with them.",
    notes: "Let Daniel know your plans so we can coordinate rides.",
  },
  {
    name: "Wedding-Week Hotel",
    lodgingType: "hotel",
    location: "Auburn/Kent, WA area",
    description: "Book your own hotel nearby if you prefer privacy.",
    estimatedCostPerNight: 120,
    totalEstimatedCost: 600,
    notes: "Check the wedding website for recommended hotels.",
    bookingLink: "https://danielandtina2026.com/",
  },
];

// ─── TRAVEL ─────────────────────────────────────────────────
export interface TravelNote {
  title: string;
  content: string;
  mapLink?: string;
  relatedEventSlug?: string;
}

export const travelNotes: TravelNote[] = [
  {
    title: "Bachelor Party — Flights to Las Vegas",
    content: "Fly into Harry Reid International Airport (LAS). The Strip is about 10 minutes from the airport. Uber/Lyft is the easiest option. Book flights early — summer prices go up.",
    relatedEventSlug: "bachelor-party",
  },
  {
    title: "Wedding Week — Getting to Auburn/Kent, WA",
    content: "Fly into Seattle-Tacoma International Airport (SEA). Auburn and Kent are about 30–40 minutes south of SeaTac. Rental car recommended if you're not getting rides.",
  },
  {
    title: "Wedding Venue — Gurudwara Sacha Marg Sahib",
    content: "Located in Auburn, WA. Groomsmen should plan to arrive by 7:30 AM on the wedding day. Coordinate with Daniel for carpool arrangements.",
    mapLink: "https://maps.google.com/?q=Gurudwara+Sacha+Marg+Sahib+Auburn+WA",
    relatedEventSlug: "wedding-ceremony",
  },
  {
    title: "Reception Venue — Lakewood, WA",
    content: "About 30 minutes from Auburn. Plan transportation in advance — there will likely be a group shuttle or carpool.",
    relatedEventSlug: "reception",
  },
  {
    title: "Getting Around During Wedding Week",
    content: "A rental car is helpful but not required. Coordinate with the group chat for rides. Uber/Lyft available in the area.",
  },
  {
    title: "Parking",
    content: "Most venues have free parking. The Gurudwara has a parking lot. Check with Daniel for reception venue parking details.",
  },
];

// ─── BACHELOR PARTY DETAILS ────────────────────────────────
export const bachelorParty = {
  dates: "June 26–28, 2026",
  hotel: "Treasure Island Hotel",
  hotelAddress: "3300 S Las Vegas Blvd, Las Vegas, NV 89109",
  arrivalNote: "Try to arrive early Friday to maximize time.",
  departureNote: "Leave midday Sunday.",
  flightGuidance: "Fly into Harry Reid International Airport (LAS). Book early for best prices. Expect $100–$350 round trip depending on where you're flying from.",
  estimatedTotalCost: "$400–$700 per person",
  costBreakdown: [
    { item: "Hotel (2 nights, split)", estimate: "$100–$150" },
    { item: "Flight", estimate: "$100–$350" },
    { item: "Food & Drinks", estimate: "$100–$250" },
    { item: "Activities", estimate: "$50–$200" },
  ],
  scheduleOverview: [
    { day: "Friday", description: "Arrive, check in, pool day, dinner, and nightlife." },
    { day: "Saturday", description: "Main event day — activities, dinner, and a big night out." },
    { day: "Sunday", description: "Recovery brunch, checkout, head to airport." },
  ],
  attireNotes: "Pack casual day clothes, swimwear, and at least one going-out outfit. Some clubs/restaurants have dress codes.",
  travelNotes: "Uber/Lyft from the airport is ~$10–$15. The hotel is centrally located on the Strip.",
};

// ─── HELPER FUNCTIONS ───────────────────────────────────────

/** Get the next upcoming event from today */
export function getNextEvent(): WeddingEvent | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = events
    .filter((e) => new Date(e.date + "T00:00:00") >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return upcoming[0] || null;
}

/** Get attire info for a specific event */
export function getAttireForEvent(slug: string): AttireItem | undefined {
  return attireByEvent.find((a) => a.eventSlug === slug);
}

/** Get event by slug */
export function getEventBySlug(slug: string): WeddingEvent | undefined {
  return events.find((e) => e.slug === slug);
}

/** Format date nicely */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Format short date */
export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/** Get days until an event */
export function getDaysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateStr + "T00:00:00");
  const diff = eventDate.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/** Get total estimated cost */
export function getTotalEstimatedCost(): number {
  return costs.reduce((sum, c) => sum + c.estimatedCost, 0);
}

/** Get cost by category */
export function getCostByCategory(category: CostItem["category"]): CostItem[] {
  return costs.filter((c) => c.category === category);
}

/** Get category subtotal */
export function getCategorySubtotal(category: CostItem["category"]): number {
  return getCostByCategory(category).reduce((sum, c) => sum + c.estimatedCost, 0);
}
