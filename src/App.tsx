
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Index3 from "./pages/Index3";
import Operative from "./pages/Operative";
import HanzoApp from "./pages/HanzoApp";
import HanzoBot from "./pages/HanzoBot";
import HanzoCode from "./pages/HanzoCode";
import HanzoDev from "./pages/HanzoDev";
import Vector from "./pages/Vector";
import Payments from "./pages/Payments";
import Platform from "./pages/Platform";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AccountProvider>
        <BillingProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Product Routes */}
            <Route path="/ai" element={<AI />} />
            <Route path="/datastore" element={<Datastore />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/extension" element={<Extension />} />
            <Route path="/base" element={<Base />} />
            <Route path="/download" element={<Download />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/platform" element={<Index3 />} />
            <Route path="/operative" element={<Operative />} />
            <Route path="/app" element={<HanzoApp />} />
            <Route path="/bot" element={<HanzoBot />} />
            <Route path="/code" element={<HanzoCode />} />
            <Route path="/dev" element={<HanzoDev />} />
            <Route path="/vector" element={<Vector />} />
            <Route path="/payments" element={<Payments />} />
            
            {/* Team Pages */}
            <Route path="/team/dev" element={<TeamDev />} />
            <Route path="/team/vi" element={<TeamVi />} />
            <Route path="/team/opera" element={<TeamOpera />} />
            
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/organization-profile" element={<OrganizationProfile />} />
            <Route path="/referrals" element={<ReferralProgram />} />
            
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
    </BrowserRouter>
  );
};

export default App;
