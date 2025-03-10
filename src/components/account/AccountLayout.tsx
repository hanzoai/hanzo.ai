
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  User, CreditCard, BarChart3, FileText, 
  Building, Settings, ChevronRight, LogOut 
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useAccount } from '@/contexts/AccountContext';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';

const AccountLayout = () => {
  const { user, organizations, currentOrganization, switchOrganization, isLoading } = useAccount();
  const location = useLocation();

  const accountNavItems = [
    { name: 'Profile', path: '/account', icon: User },
    { name: 'Organization', path: '/account/organization', icon: Building },
    { name: 'Billing', path: '/billing', icon: CreditCard },
    { name: 'Usage', path: '/usage', icon: BarChart3 },
    { name: 'Invoices', path: '/invoices', icon: FileText },
    { name: 'Settings', path: '/account/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-8">
              <AnimatedHeading>
                <h1 className="text-4xl font-bold">Account</h1>
              </AnimatedHeading>
              
              {currentOrganization && (
                <Select 
                  value={currentOrganization.id} 
                  onValueChange={switchOrganization}
                >
                  <SelectTrigger className="w-[250px] bg-gray-900 border-gray-800">
                    <SelectValue>
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-gray-800 rounded-full mr-2 flex items-center justify-center text-sm">
                          {currentOrganization.name.charAt(0)}
                        </div>
                        {currentOrganization.name}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id} className="text-white hover:bg-gray-800">
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-gray-800 rounded-full mr-2 flex items-center justify-center text-sm">
                            {org.name.charAt(0)}
                          </div>
                          {org.name}
                          <span className="ml-2 text-gray-400 text-xs">({org.role})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="col-span-1">
                <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-4 space-y-1">
                  {accountNavItems.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path}
                      className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                        isActive(item.path) 
                          ? 'bg-gray-800 text-white' 
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      {isActive(item.path) && <ChevronRight className="ml-auto w-4 h-4" />}
                    </Link>
                  ))}
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20 mt-6"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                  </Button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-span-1 md:col-span-3">
                <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
                  <Outlet />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountLayout;
