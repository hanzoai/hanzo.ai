
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import AccountLayout from "./components/account/AccountLayout";
import Account from "./pages/Account";
import Organization from "./pages/Organization";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BillingPage from "./pages/Billing";
import { BillingProvider } from "./contexts/BillingContext";
import { AccountProvider } from "./contexts/AccountContext";
import ScrollToTop from "./components/ScrollToTop";
import PurchaseCredits from "./pages/PurchaseCredits";
import BillingPlans from "./pages/BillingPlans";
import UserProfile from "./pages/UserProfile";
import OrganizationProfile from "./pages/OrganizationProfile";
import ReferralProgram from "./pages/ReferralProgram";
import Usage from "./pages/Usage";
import AccountSettings from "./pages/AccountSettings";
import Invoices from "./pages/Invoices";
import StatusPage from "./pages/Status";
import Dashboard from "./pages/Dashboard";
import Index2 from "./pages/Index2";
import Index4 from "./pages/Index4";
import Referrals from "./pages/Referrals";

// Import product pages
import AI from "./pages/AI";
import Datastore from "./pages/Datastore";
import Commerce from "./pages/Commerce";
import Extension from "./pages/Extension";
import Base from "./pages/Base";
import Download from "./pages/Download";
import Analytics from "./pages/Analytics";
import Cloud from "./pages/Cloud";
import TeamDev from "./pages/TeamDev";
import TeamVi from "./pages/TeamVi";
import TeamOpera from "./pages/TeamOpera";
import TeamChat from "./pages/TeamChat";
import AIStudio from "./pages/AIStudio";
import Index3 from "./pages/Index3";
import Index5 from "./pages/Index5";
import Operative from "./pages/Operative";
import HanzoApp from "./pages/HanzoApp";
import HanzoBot from "./pages/HanzoBot";
import HanzoCode from "./pages/HanzoCode";
import HanzoDev from "./pages/HanzoDev";
import Vector from "./pages/Vector";
import Payments from "./pages/Payments";
import Platform from "./pages/Platform";
import Functions from "./pages/Functions";
import Identity from "./pages/Identity";
import Machines from "./pages/Machines";
import Edge from "./pages/Edge";
import Realtime from "./pages/Realtime";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";

// Define which routes need account and billing providers
const AccountRoutes = () => {
  return (
    <AccountProvider>
      <BillingProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/organization-profile" element={<OrganizationProfile />} />
          
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path="organization" element={<Organization />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="purchase-credits" element={<PurchaseCredits />} />
            <Route path="billing-plans" element={<BillingPlans />} />
            <Route path="referrals" element={<ReferralProgram />} />
            <Route path="usage" element={<Usage />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
        </Routes>
      </BillingProvider>
    </AccountProvider>
  );
};

// Marketing and product pages that don't need account/billing context
const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/index" element={<Index />} />
      <Route path="/index2" element={<Index2 />} />
      <Route path="/index3" element={<Index3 />} />
      <Route path="/index4" element={<Index4 />} />
      <Route path="/index5" element={<Index5 />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/referrals" element={<Referrals />} />
      
      {/* Product Routes */}
      <Route path="/ai" element={<AI />} />
      <Route path="/datastore" element={<Datastore />} />
      <Route path="/commerce" element={<Commerce />} />
      <Route path="/extension" element={<Extension />} />
      <Route path="/base" element={<Base />} />
      <Route path="/download" element={<Download />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/edge" element={<Edge />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/operative" element={<Operative />} />
      <Route path="/app" element={<HanzoApp />} />
      <Route path="/bot" element={<HanzoBot />} />
      <Route path="/code" element={<HanzoCode />} />
      <Route path="/dev" element={<HanzoDev />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/identity" element={<Identity />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/realtime" element={<Realtime />} />
      <Route path="/ai-studio" element={<AIStudio />} />
      
      {/* Team Pages */}
      <Route path="/team/dev" element={<TeamDev />} />
      <Route path="/team/vi" element={<TeamVi />} />
      <Route path="/team/opera" element={<TeamOpera />} />
      <Route path="/team/chat" element={<TeamChat />} />
      
      {/* Catch-all route for 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Helper to check if a pathname needs account context
const isAccountRoute = (pathname: string) => {
  return pathname.startsWith('/account') || 
    pathname === '/dashboard' || 
    pathname === '/user-profile' || 
    pathname === '/organization-profile';
};

const App = () => {
  console.log("App component rendering");
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      {isAccountRoute(window.location.pathname) ? (
        <AccountRoutes />
      ) : (
        <MarketingRoutes />
      )}
    </BrowserRouter>
  );
};

export default App;
