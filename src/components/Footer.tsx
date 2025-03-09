
import { Check, ChevronRight, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, solutions, resources, company } from "@/constants/navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" 
                alt="Hanzo" 
                className="h-8 w-8"
              />
              <span className="text-white font-bold text-xl">Hanzo</span>
            </div>
            <a href="/status" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-4">
              <Check className="h-4 w-4 text-green-500" />
              <span>All systems operational</span>
            </a>
            <div className="flex items-center mt-4 space-x-1 text-gray-500 text-xs">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
                <Cpu className="h-3 w-3 mr-1 text-purple-400 group-hover:text-purple-300" />
                <span className="group-hover:text-gray-300">ai</span>
              </span>
              <span className="text-gray-500">/</span>
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
                <Rocket className="h-3 w-3 mr-1 text-blue-400 group-hover:text-blue-300" />
                <span className="group-hover:text-gray-300">acc</span>
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              {products.map(category => (
                <li key={category.title}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 font-medium">{category.title}</span>
                    <Link 
                      to={category.title === "AI Cloud" ? "/cloud" : category.title === "DX Platform" ? "/platform" : "#"} 
                      className="inline-flex items-center text-xs text-purple-400 hover:text-purple-300"
                    >
                      {category.title === "AI Cloud" ? "View Cloud" : "View Platform"} 
                      <ChevronRight className="h-3 w-3 ml-0.5" />
                    </Link>
                  </div>
                  <ul className="mt-1 space-y-1">
                    {category.items.slice(0, 6).map(item => (
                      <li key={item}>
                        <a href="#" className="text-gray-500 hover:text-white text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map(category => (
                <li key={category.title}>
                  <span className="text-gray-400 font-medium">{category.title}</span>
                  <ul className="mt-1 space-y-1">
                    {category.items.slice(0, 6).map(item => (
                      <li key={item}>
                        <a href="/solutions" className="text-gray-500 hover:text-white text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {category.items.length > 6 && (
                    <Link 
                      to="/solutions" 
                      className="inline-flex items-center mt-2 text-sm text-purple-400 hover:text-purple-300"
                    >
                      View all {category.title.toLowerCase()} 
                      <ChevronRight className="h-4 w-4 ml-0.5" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-4">
              {resources.map(category => (
                <li key={category.title}>
                  <span className="text-gray-400 font-medium">{category.title}</span>
                  <ul className="mt-1 space-y-1">
                    {category.items.slice(0, 4).map(item => (
                      <li key={item.name}>
                        <a 
                          href={item.url} 
                          target={item.url.startsWith('http') ? '_blank' : undefined}
                          rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-500 hover:text-white text-sm"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {company.slice(0, 4).map(item => (
                <li key={item}>
                  <a 
                    href={
                      item === "Team" ? "/team" : 
                      item === "Pricing" ? "/pricing" : "#"
                    } 
                    className="text-gray-500 hover:text-white text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/pricing" className="text-gray-500 hover:text-white text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2016-2025 Hanzo Industries, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-500 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/security" className="text-gray-500 hover:text-white text-sm">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
