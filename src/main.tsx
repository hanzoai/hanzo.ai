
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "@/pages/Index";
import PricingPlans from "@/pages/Pricing";
import ZenOfHanzo from "@/pages/ZenOfHanzo";
import Brand from "@/pages/Brand";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/zen" element={<ZenOfHanzo />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
