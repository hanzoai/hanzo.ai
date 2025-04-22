import { capabilitiesNav, industriesNav } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export const SolutionsMenu = () => {
  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Capabilities Column */}
            <div className="flex flex-col">
              {/* Section Title with View All Link */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Capabilities</h3>
                <Link
                  to="/solutions"
                  className="text-sm text-purple-400 hover:text-purple-300"
                  onClick={closeMenu}
                >
                  View all →
                </Link>
              </div>
              
              {/* Grid of capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilitiesNav[0].items.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center space-x-3 group"
                      onClick={closeMenu}
                    >
                      <div className="min-w-10 w-10 h-10 flex items-center justify-center shrink-0">
                        {Icon && <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-neutral-300 group-hover:text-white font-medium truncate">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Hanzo Agency Promo */}
              <div className="mt-auto mt-6 p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-purple-800/30 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">Hanzo Agency</h4>
                </div>
                <p className="text-neutral-300 text-sm mb-3">
                  Elevate your brand with our AI-powered creative agency. We craft cutting-edge digital experiences that captivate audiences and deliver measurable business results.
                </p>
                <Link
                  to="/agency"
                  className="text-sm text-purple-400 hover:text-purple-300 inline-flex items-center"
                  onClick={closeMenu}
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Industries Column */}
            <div className="flex flex-col">
              {/* Section Title with View All Link */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Industries</h3>
                <Link
                  to="/industries"
                  className="text-sm text-purple-400 hover:text-purple-300"
                  onClick={closeMenu}
                >
                  View all →
                </Link>
              </div>
              
              {/* Grid of industries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industriesNav[0].items.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center space-x-3 group"
                      onClick={closeMenu}
                    >
                      <div className="min-w-10 w-10 h-10 flex items-center justify-center shrink-0">
                        {Icon && <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-neutral-300 group-hover:text-white font-medium truncate">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Sensei Group Promo */}
              <div className="mt-auto mt-6 p-4 rounded-xl bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Sensei Group</h4>
                </div>
                <p className="text-neutral-300 text-sm mb-3">
                  Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
                </p>
                <Link
                  to="/sensei"
                  className="text-sm text-green-400 hover:text-green-300 inline-flex items-center"
                  onClick={closeMenu}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavMenu>
  );
};

export default SolutionsMenu;