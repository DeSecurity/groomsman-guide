import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/attire", label: "Attire" },
  { to: "/costs", label: "Costs" },
  { to: "/lodging", label: "Lodging" },
  { to: "/travel", label: "Travel" },
  { to: "/bachelor-party", label: "Bachelor Party" },
];

export default function DesktopNav() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 hidden border-b bg-card/95 backdrop-blur-lg md:block">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Groomsman <span className="text-gold">Planner</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label }) => {
            const isActive = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
