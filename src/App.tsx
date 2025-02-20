import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import Install from "./pages/Install";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/install" element={<Install />} />
          <Route path="/team/dev" element={<TeamDev />} />
          <Route path="/team/des" element={<TeamDes />} />
          <Route path="/team/opera" element={<TeamOpera />} />
          <Route path="/team/mark" element={<TeamMark />} />
          <Route path="/team/su" element={<TeamSu />} />
          <Route path="/team/art" element={<TeamArt />} />
          <Route path="/team/mu" element={<TeamMu />} />
          <Route path="/team/data" element={<TeamData />} />
          <Route path="/team/core" element={<TeamCore />} />
          <Route path="/team/fin" element={<TeamFin />} />
          <Route path="/team/sec" element={<TeamSec />} />
          <Route path="/team/algo" element={<TeamAlgo />} />
          <Route path="/team/db" element={<TeamDb />} />
          <Route path="/team/cal" element={<TeamCal />} />
          <Route path="/team/chat" element={<TeamChat />} />
          <Route path="/team/vi" element={<TeamVi />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
