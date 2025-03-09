
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Index2 from "./pages/Index2";
import Index3 from "./pages/Index3";
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

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index3 />} />
            <Route path="/index" element={<Index />} />
            <Route path="/index2" element={<Index2 />} />
            <Route path="/index3" element={<Index3 />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
