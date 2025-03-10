
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
            
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/organization-profile" element={<OrganizationProfile />} />
            <Route path="/referrals" element={<ReferralProgram />} />
            <Route path="/invoices" element={<Invoices />} />
            
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
