
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/radix-tooltip";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import Install from "./pages/Install";
import Calculator from "./pages/Calculator";
import HanzoDev from "./pages/HanzoDev";
import Cloud from "./pages/Cloud";
import Platform from "./pages/Platform";
import Download from "./pages/Download";
import Database from "./pages/Database";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import Analytics from "./pages/Analytics";
import Observability from "./pages/Observability";
import AI from "./pages/AI";
import Payments from "./pages/Payments";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/install" element={<Install />} />
            <Route path="/install.sh" element={<Install />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/dev" element={<HanzoDev />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/download" element={<Download />} />
            <Route path="/database" element={<Database />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/observability" element={<Observability />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
