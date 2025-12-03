import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Home2 from "./pages/Home2";
import Pricing from "./pages/Pricing";
import AccountLayout from "./components/account/AccountLayout";
import Account from "./pages/Account";
import Organization from "./pages/Organization";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import BillingPage from "./pages/Billing";
import { BillingProvider } from "./contexts/BillingContext";
import { AccountProvider } from "./contexts/AccountContext";
import { ThemeProvider } from "./contexts/ThemeContext";
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
import Referrals from "./pages/Referrals";
import OpenSource from "./pages/OpenSource";
import Solutions from "./pages/Solutions";
import SolutionCapabilities from "./pages/SolutionCapabilities";
import SolutionIndustries from "./pages/SolutionIndustries";
import Security from "./pages/Security";
import ZenOfHanzo from "./pages/ZenOfHanzo";
import Contact from "./pages/Contact";
import Enterprise from "./pages/Enterprise";

import AI from "./pages/AI";
import Datastore from "./pages/Datastore";
import Commerce from "./pages/Commerce";
import Extension from "./pages/Extension";
import Base from "./pages/Base";
import Download from "./pages/Download";
import Analytics from "./pages/Analytics";
import Cloud from "./pages/Cloud";
import AIStudio from "./pages/AIStudio";
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
import Chat from "./pages/Chat";
import Runtime from "./pages/Runtime";
import Studio from "./pages/Studio";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Team from "./pages/Team";

import TeamDev from "./pages/TeamDev";
import TeamVi from "./pages/TeamVi";
import TeamOpera from "./pages/TeamOpera";
import TeamChat from "./pages/TeamChat";
import TeamDb from "./pages/TeamDb";
import TeamSu from "./pages/TeamSu";
import TeamArt from "./pages/TeamArt";
import TeamMu from "./pages/TeamMu";
import TeamData from "./pages/TeamData";
import TeamCore from "./pages/TeamCore";
import TeamFin from "./pages/TeamFin";
import TeamSec from "./pages/TeamSec";
import TeamAlgo from "./pages/TeamAlgo";
import TeamDes from "./pages/TeamDes";
import TeamMark from "./pages/TeamMark";
import TeamCal from "./pages/TeamCal";

// Solution capability pages
import SolutionCloud from "./pages/SolutionCloud";
import SolutionCybersecurity from "./pages/SolutionCybersecurity";
import SolutionDataAI from "./pages/SolutionDataAI";
import SolutionEngineering from "./pages/SolutionEngineering";
import SolutionEmergingTech from "./pages/SolutionEmergingTech";
import SolutionPartners from "./pages/SolutionPartners";
import SolutionFinance from "./pages/SolutionFinance";
import SolutionInfrastructure from "./pages/SolutionInfrastructure";

// Industry pages
import IndustryAerospace from "./pages/IndustryAerospace";
import IndustryAutomotive from "./pages/IndustryAutomotive";
import IndustryBanking from "./pages/IndustryBanking";
import IndustryCapitalMarkets from "./pages/IndustryCapitalMarkets";
import IndustryChemicals from "./pages/IndustryChemicals";
import IndustryCommunications from "./pages/IndustryCommunications";
import IndustryConsumer from "./pages/IndustryConsumer";
import IndustryEnergy from "./pages/IndustryEnergy";

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

const MarketingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/index" element={<Index />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/open-source" element={<OpenSource />} />
      <Route path="/team" element={<Team />} />
      <Route path="/security" element={<Security />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/zen" element={<ZenOfHanzo />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/capabilities" element={<SolutionCapabilities />} />
      <Route path="/solutions/industries" element={<SolutionIndustries />} />

      {/* Solution capability pages */}
      <Route path="/solutions/cloud" element={<SolutionCloud />} />
      <Route path="/solutions/cybersecurity" element={<SolutionCybersecurity />} />
      <Route path="/solutions/data-ai" element={<SolutionDataAI />} />
      <Route path="/solutions/engineering" element={<SolutionEngineering />} />
      <Route path="/solutions/emerging-tech" element={<SolutionEmergingTech />} />
      <Route path="/solutions/partners" element={<SolutionPartners />} />
      <Route path="/solutions/finance" element={<SolutionFinance />} />
      <Route path="/solutions/infrastructure" element={<SolutionInfrastructure />} />

      {/* Industry pages */}
      <Route path="/industries/aerospace" element={<IndustryAerospace />} />
      <Route path="/industries/automotive" element={<IndustryAutomotive />} />
      <Route path="/industries/banking" element={<IndustryBanking />} />
      <Route path="/industries/capital-markets" element={<IndustryCapitalMarkets />} />
      <Route path="/industries/chemicals" element={<IndustryChemicals />} />
      <Route path="/industries/communications" element={<IndustryCommunications />} />
      <Route path="/industries/consumer" element={<IndustryConsumer />} />
      <Route path="/industries/energy" element={<IndustryEnergy />} />

      {/* AI Cloud Products */}
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/cloud/ai" element={<AI />} />
      <Route path="/cloud/chat" element={<Chat />} />
      <Route path="/cloud/datastore" element={<Datastore />} />
      <Route path="/cloud/edge" element={<Edge />} />
      <Route path="/cloud/functions" element={<Functions />} />
      <Route path="/cloud/identity" element={<Identity />} />
      <Route path="/cloud/machines" element={<Machines />} />
      <Route path="/cloud/payments" element={<Payments />} />

      {/* DX Platform Products */}
      <Route path="/platform" element={<Platform />} />
      <Route path="/platform/app" element={<HanzoApp />} />
      <Route path="/platform/bot" element={<HanzoBot />} />
      <Route path="/platform/code" element={<HanzoCode />} />
      <Route path="/platform/dev" element={<HanzoDev />} />
      <Route path="/platform/extension" element={<Extension />} />
      <Route path="/platform/runtime" element={<Runtime />} />
      <Route path="/platform/studio" element={<Studio />} />

      {/* Other Products */}
      <Route path="/commerce" element={<Commerce />} />
      <Route path="/base" element={<Base />} />
      <Route path="/download" element={<Download />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/operative" element={<Operative />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/realtime" element={<Realtime />} />
      <Route path="/ai-studio" element={<AIStudio />} />

      <Route path="/team/dev" element={<TeamDev />} />
      <Route path="/team/vi" element={<TeamVi />} />
      <Route path="/team/opera" element={<TeamOpera />} />
      <Route path="/team/chat" element={<TeamChat />} />
      <Route path="/team/db" element={<TeamDb />} />
      <Route path="/team/su" element={<TeamSu />} />
      <Route path="/team/art" element={<TeamArt />} />
      <Route path="/team/mu" element={<TeamMu />} />
      <Route path="/team/data" element={<TeamData />} />
      <Route path="/team/core" element={<TeamCore />} />
      <Route path="/team/fin" element={<TeamFin />} />
      <Route path="/team/sec" element={<TeamSec />} />
      <Route path="/team/algo" element={<TeamAlgo />} />
      <Route path="/team/des" element={<TeamDes />} />
      <Route path="/team/mark" element={<TeamMark />} />
      <Route path="/team/cal" element={<TeamCal />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

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
      <ThemeProvider>
        <ScrollToTop />
        {isAccountRoute(window.location.pathname) ? (
          <AccountRoutes />
        ) : (
          <MarketingRoutes />
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Add for debug purposes
console.log('Current pathname:', window.location.pathname);

export default App;
