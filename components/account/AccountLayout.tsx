'use client'


import React from 'react';
import Link from "next/link";
import { 
  User, CreditCard, BarChart3, FileText, 
  Building, Settings, ChevronRight, LogOut, 
  Gift, Link as LinkIcon
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
} from "@hanzo/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@hanzo/ui";
import { Button } from "@hanzo/ui";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { usePathname } from "next/navigation";

const AccountLayout = ({ children }: { children?: React.ReactNode }) => {
  const { user, organizations, currentOrganization, switchOrganization, isLoading } = useAccount();
  const pathname = usePathname();

  const accountNavItems = [
    { name: 'Profile', path: '/account', icon: User },
    { name: 'Organization', path: '/account/organization', icon: Building },
    { name: 'Billing', path: '/account/billing', icon: CreditCard },
    { name: 'Usage', path: '/account/usage', icon: BarChart3 },
    { name: 'Invoices', path: '/invoices', icon: FileText },
    { name: 'Referrals', path: '/account/referrals', icon: Gift },
    { name: 'Settings', path: '/account/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/account/billing' && pathname.startsWith('/account/billing')) {
      return true;
    }
    if (path === '/account/referrals' && pathname.startsWith('/account/referrals')) {
      return true;
    }
    return pathname === path;
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-10">
              <AnimatedHeading>
                <h1 className="text-3xl sm:text-4xl font-medium">Account</h1>
              </AnimatedHeading>
              
              {currentOrganization && (
                <Select 
                  value={currentOrganization.id} 
                  onValueChange={switchOrganization}
                >
                  <SelectTrigger className="w-[250px] bg-[var(--black)] border-neutral-800/30">
                    <SelectValue>
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-neutral-900 rounded-full mr-2 flex items-center justify-center text-sm">
                          {currentOrganization.name.charAt(0)}
                        </div>
                        {currentOrganization.name}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--black)] border-neutral-800/30">
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id} className="text-[var(--white)] hover:bg-neutral-900/30">
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-neutral-900 rounded-full mr-2 flex items-center justify-center text-sm">
                            {org.name.charAt(0)}
                          </div>
                          {org.name}
                          <span className="ml-2 text-neutral-400 text-xs">({org.role})</span>
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
                <div className="backdrop-blur-xl bg-[var(--black)]/40 border border-white/5 rounded-xl p-4 space-y-1">
                  {accountNavItems.map((item) => (
                    <Link 
                      key={item.path} 
                      href={item.path || "#"}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        isActive(item.path) 
                          ? 'bg-[var(--white)]/5 text-[var(--white)]' 
                          : 'text-neutral-400 hover:bg-[var(--white)]/5 hover:text-[var(--white)]'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {isActive(item.path) && <ChevronRight className="ml-auto w-4 h-4" />}
                    </Link>
                  ))}
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-white/70 hover:text-white/70 hover:bg-white/5 mt-6 p-3"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                  </Button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-span-1 md:col-span-3">
                <div className="backdrop-blur-xl bg-[var(--black)]/40 border border-white/5 rounded-xl p-8">
                  {children || <Outlet />}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <div className="w-full">
        
      </div>
    </div>
  );
};

export default AccountLayout;
