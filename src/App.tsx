import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Cloud from "./pages/Cloud";
import Pricing from "./pages/Pricing";
import Platform from "./pages/Platform";
import Datastore from "./pages/Datastore";
import Commerce from "./pages/Commerce";
import Solutions from "./pages/Solutions";
import Analytics from "./pages/Analytics";
import Payments from "./pages/Payments";
import Base from "./pages/Base";
import Vector from "./pages/Vector";
import Contact from "./pages/Contact";
import HanzoApp from "./pages/HanzoApp";
import HanzoDev from "./pages/HanzoDev";
import HanzoCode from "./pages/HanzoCode";
import HanzoBot from "./pages/HanzoBot";
import Operator from "./pages/Operator";
import Download from "./pages/Download";
import Extension from "./pages/Extension";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Leadership from "./pages/Leadership";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Index2 from "./pages/Index2";
import Index3 from "./pages/Index3";
import Calculator from "./pages/Calculator";
import AIAcceleration from "./pages/AIAcceleration";
import AI from "./pages/AI";
import ZenOfHanzo from "./pages/ZenOfHanzo";
import HanzoBalancer from "./pages/HanzoBalancer";
import Observability from "./pages/Observability";
import Install from "./pages/Install";
import Referrals from "./pages/Referrals";
import Affiliates from "./pages/Affiliates";
import Billing from "./pages/Billing";
import Usage from "./pages/Usage";
import Invoices from "./pages/Invoices";
import TeamAlgo from "./pages/TeamAlgo";
import TeamArt from "./pages/TeamArt";
import TeamCal from "./pages/TeamCal";
import TeamChat from "./pages/TeamChat";
import TeamCore from "./pages/TeamCore";
import TeamData from "./pages/TeamData";
import TeamDb from "./pages/TeamDb";
import TeamDes from "./pages/TeamDes";
import TeamDev from "./pages/TeamDev";
import TeamFin from "./pages/TeamFin";
import TeamMark from "./pages/TeamMark";
import TeamMu from "./pages/TeamMu";
import TeamOpera from "./pages/TeamOpera";
import TeamSec from "./pages/TeamSec";
import TeamSu from "./pages/TeamSu";
import TeamVi from "./pages/TeamVi";
import { BillingProvider } from "./contexts/BillingContext";
import { ThemeProvider } from "styled-components";
import Toaster from "./components/Toaster";

function App() {
  return (
    <BillingProvider>
      <ThemeProvider>
        <div className="App min-h-screen bg-black text-white">
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/cloud" element={<Cloud />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/datastore" element={<Datastore />} />
              <Route path="/commerce" element={<Commerce />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/base" element={<Base />} />
              <Route path="/vector" element={<Vector />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hanzoapp" element={<HanzoApp />} />
              <Route path="/hanzodev" element={<HanzoDev />} />
              <Route path="/hanzocode" element={<HanzoCode />} />
              <Route path="/hanzobot" element={<HanzoBot />} />
              <Route path="/operator" element={<Operator />} />
              <Route path="/download" element={<Download />} />
              <Route path="/extension" element={<Extension />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/security" element={<Security />} />
              <Route path="/index2" element={<Index2 />} />
              <Route path="/index3" element={<Index3 />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/ai-acc" element={<AIAcceleration />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/zen" element={<ZenOfHanzo />} />
              <Route path="/balancer" element={<HanzoBalancer />} />
              <Route path="/observability" element={<Observability />} />
              <Route path="/install" element={<Install />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/affiliates" element={<Affiliates />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/usage" element={<Usage />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/team/algo" element={<TeamAlgo />} />
              <Route path="/team/art" element={<TeamArt />} />
              <Route path="/team/cal" element={<TeamCal />} />
              <Route path="/team/chat" element={<TeamChat />} />
              <Route path="/team/core" element={<TeamCore />} />
              <Route path="/team/data" element={<TeamData />} />
              <Route path="/team/db" element={<TeamDb />} />
              <Route path="/team/des" element={<TeamDes />} />
              <Route path="/team/dev" element={<TeamDev />} />
              <Route path="/team/fin" element={<TeamFin />} />
              <Route path="/team/mark" element={<TeamMark />} />
              <Route path="/team/mu" element={<TeamMu />} />
              <Route path="/team/opera" element={<TeamOpera />} />
              <Route path="/team/sec" element={<TeamSec />} />
              <Route path="/team/su" element={<TeamSu />} />
              <Route path="/team/vi" element={<TeamVi />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
        </div>
      </ThemeProvider>
    </BillingProvider>
  );
}

export default App;
