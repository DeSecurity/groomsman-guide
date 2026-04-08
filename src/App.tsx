import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import AttirePage from "./pages/AttirePage";
import CostsPage from "./pages/CostsPage";
import LodgingPage from "./pages/LodgingPage";
import TravelPage from "./pages/TravelPage";
import BachelorPartyPage from "./pages/BachelorPartyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/attire" element={<AttirePage />} />
          <Route path="/costs" element={<CostsPage />} />
          <Route path="/lodging" element={<LodgingPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/bachelor-party" element={<BachelorPartyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
