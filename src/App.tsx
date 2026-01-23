import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import GlobalChatWidget from "./components/GlobalChatWidget";
import PageTransition from "./components/PageTransition";
import KonamiCode from "./components/KonamiCode";
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
import Zen from "./pages/Zen";
import ZenModels from "./pages/ZenModels";
import Contact from "./pages/Contact";
import ContactSales from "./pages/ContactSales";
import Enterprise from "./pages/Enterprise";
import Brand from "./pages/Brand";
import Press from "./pages/Press";
import Careers from "./pages/Careers";
import About from "./pages/About";

import AI from "./pages/AI";
import Datastore from "./pages/Datastore";
import Commerce from "./pages/Commerce";
import Extension from "./pages/Extension";
import Zap from "./pages/Zap";
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
import Blockchain from "./pages/Blockchain";
import HanzoNodes from "./pages/blockchain/HanzoNodes";
import HanzoIndexer from "./pages/blockchain/HanzoIndexer";
import HanzoWallet from "./pages/blockchain/HanzoWallet";
import HanzoSafe from "./pages/blockchain/HanzoSafe";
import HanzoID from "./pages/blockchain/HanzoID";
import HanzoPay from "./pages/blockchain/HanzoPay";
import HanzoBridge from "./pages/blockchain/HanzoBridge";
import HanzoDeFi from "./pages/blockchain/HanzoDeFi";
import HanzoOracle from "./pages/blockchain/HanzoOracle";
import HanzoStorage from "./pages/blockchain/HanzoStorage";
import HanzoExplorer from "./pages/blockchain/HanzoExplorer";
import HanzoQuest from "./pages/blockchain/HanzoQuest";
import Vector from "./pages/Vector";
import Payments from "./pages/Payments";
import Platform from "./pages/Platform";
import Functions from "./pages/Functions";
import Identity from "./pages/Identity";
import Machines from "./pages/Machines";
import Edge from "./pages/Edge";
import Realtime from "./pages/Realtime";
import Automations from "./pages/Automations";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Team from "./pages/Team";

// New product taxonomy pages
import Products from "./pages/Products";
import CategoryPage from "./pages/products/CategoryPage";
import ProductPage from "./pages/products/ProductPage";
import Integrations from "./pages/products/Integrations";

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
      <Route path="/contact/sales" element={<ContactSales />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/zen" element={<Zen />} />
      <Route path="/zen/models" element={<ZenModels />} />
      <Route path="/zen-models" element={<ZenModels />} />
      <Route path="/philosophy" element={<ZenOfHanzo />} />
      <Route path="/zen-of-hanzo" element={<ZenOfHanzo />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/press" element={<Press />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/capabilities" element={<SolutionCapabilities />} />
      <Route path="/solutions/industries" element={<SolutionIndustries />} />

      {/* New product taxonomy routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/integrations" element={<Integrations />} />
      <Route path="/products/:categoryId" element={<CategoryPage />} />
      <Route path="/products/:categoryId/:productId" element={<ProductPage />} />

      <Route path="/ai" element={<AI />} />
      <Route path="/datastore" element={<Datastore />} />
      <Route path="/commerce" element={<Commerce />} />
      <Route path="/extension" element={<Extension />} />
      <Route path="/zap" element={<Zap />} />
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
      <Route path="/blockchain" element={<Blockchain />} />
      <Route path="/web3" element={<Blockchain />} />
      <Route path="/blockchain/nodes" element={<HanzoNodes />} />
      <Route path="/blockchain/indexer" element={<HanzoIndexer />} />
      <Route path="/blockchain/wallet" element={<HanzoWallet />} />
      <Route path="/blockchain/safe" element={<HanzoSafe />} />
      <Route path="/blockchain/id" element={<HanzoID />} />
      <Route path="/blockchain/pay" element={<HanzoPay />} />
      <Route path="/blockchain/bridge" element={<HanzoBridge />} />
      <Route path="/blockchain/defi" element={<HanzoDeFi />} />
      <Route path="/blockchain/oracle" element={<HanzoOracle />} />
      <Route path="/blockchain/storage" element={<HanzoStorage />} />
      <Route path="/blockchain/explorer" element={<HanzoExplorer />} />
      <Route path="/blockchain/quest" element={<HanzoQuest />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/functions" element={<Functions />} />
      <Route path="/identity" element={<Identity />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/realtime" element={<Realtime />} />
      <Route path="/ai-studio" element={<AIStudio />} />
      <Route path="/automations" element={<Automations />} />
      
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
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <PageTransition>
          {isAccountRoute(window.location.pathname) ? (
            <AccountRoutes />
          ) : (
            <MarketingRoutes />
          )}
        </PageTransition>
        {/* Global chat widget on all pages */}
        <GlobalChatWidget />
        {/* Easter egg - Konami code for secret menu */}
        <KonamiCode />
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Console message for developers
console.log(`
%c🐉 HERE BE DRAGONS 🐉

%cIf you like compilers, MCP, AI, ML, ZKP, Quantum,
robotics systems, and building the future...

%cWe're hiring! Reach out about working with us:
%chttps://hanzo.ai/careers
%cz@hanzo.ai

%c– Hanzo AI (Techstars '17)
`,
  'font-size: 24px; font-weight: bold; color: #e11633;',
  'font-size: 14px; color: #888;',
  'font-size: 14px; color: #fff;',
  'font-size: 14px; color: #e11633; text-decoration: underline;',
  'font-size: 14px; color: #e11633;',
  'font-size: 12px; color: #666; font-style: italic;'
);

export default App;
