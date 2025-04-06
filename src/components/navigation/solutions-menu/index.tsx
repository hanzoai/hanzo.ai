import { solutionsNav } from "@/constants/navigation-data";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";

export const SolutionsMenu = () => {
  return (
    <NavMenu label="Solutions">
      {(closeMenu) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutionsNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              
              <div className="grid gap-4">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-start space-x-3 group"
                      onClick={closeMenu}
                    >
                      {Icon && (
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white" />
                        </div>
                      )}
                      <div>
                        <div className="text-neutral-300 group-hover:text-white font-medium">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-sm text-neutral-500 group-hover:text-neutral-400">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Case studies showcase */}
          <div className="lg:col-span-2 mt-4 pt-6 border-t border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-4">Featured Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[var(--black)]/50 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors">
                <div className="font-medium text-neutral-200 mb-1">Financial Services</div>
                <div className="text-sm text-neutral-400 mb-3">How ACME Bank used Hanzo AI to improve customer service by 87%</div>
                <Link to="/case-studies/acme-bank" className="text-sm text-blue-400 hover:text-blue-300" onClick={closeMenu}>
                  Read case study →
                </Link>
              </div>
              
              <div className="bg-[var(--black)]/50 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors">
                <div className="font-medium text-neutral-200 mb-1">Healthcare</div>
                <div className="text-sm text-neutral-400 mb-3">MedTech's path to HIPAA-compliant AI with Hanzo Cloud</div>
                <Link to="/case-studies/medtech" className="text-sm text-blue-400 hover:text-blue-300" onClick={closeMenu}>
                  Read case study →
                </Link>
              </div>
              
              <div className="bg-[var(--black)]/50 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors">
                <div className="font-medium text-neutral-200 mb-1">E-commerce</div>
                <div className="text-sm text-neutral-400 mb-3">How ShopDirect scaled to 10M daily users with Hanzo's platform</div>
                <Link to="/case-studies/shopdirect" className="text-sm text-blue-400 hover:text-blue-300" onClick={closeMenu}>
                  Read case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavMenu>
  );
};