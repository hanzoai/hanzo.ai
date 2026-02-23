'use client'


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for organizations and user
export interface Organization {
  id: string;
  name: string;
  role: 'owner' | 'admin' | 'member';
  avatar?: string;
  plan?: string;
  memberCount?: number;
  description?: string;
  website?: string;
  location?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  joinedDate?: string;
  website?: string;
  phone?: string;
}

interface AccountContextType {
  user: User | null;
  setUser: (user: User) => void;
  organizations: Organization[];
  currentOrganization: Organization | null;
  isLoading: boolean;
  switchOrganization: (orgId: string) => void;
  updateUserProfile: (userData: Partial<User>) => void;
  updateOrganization: (orgData: Partial<Organization>) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

// Mock data for demonstration
const MOCK_USER: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  email: 'alex@hanzo.ai',
  bio: 'Senior Developer specializing in AI and cloud infrastructure',
  location: 'San Francisco, CA',
  joinedDate: 'January 2022',
  website: 'https://alexjohnson.dev',
  phone: '+1 (555) 123-4567'
};

const MOCK_ORGANIZATIONS: Organization[] = [
  { 
    id: 'org-1', 
    name: 'Personal Account', 
    role: 'owner',
    plan: 'Pro',
    memberCount: 1,
    description: 'Your personal workspace',
    website: 'https://hanzo.ai',
    location: 'San Francisco, CA'
  },
  { 
    id: 'org-2', 
    name: 'Hanzo Industries', 
    role: 'admin',
    plan: 'Enterprise',
    memberCount: 26,
    description: 'Leading AI and development solutions provider',
    website: 'https://hanzo.industries',
    location: 'San Francisco, CA'
  },
  { 
    id: 'org-3', 
    name: 'Quantum Innovations', 
    role: 'member',
    plan: 'Team',
    memberCount: 12,
    description: 'Next-generation quantum computing solutions',
    website: 'https://quantum-innovations.co',
    location: 'Austin, TX'
  }
];

export const AccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user and organizations
    const loadUserData = () => {
      try {
        setIsLoading(true);
        // In a real app, this would be an API call
        setUser(MOCK_USER);
        setOrganizations(MOCK_ORGANIZATIONS);
        setCurrentOrganization(MOCK_ORGANIZATIONS[0]);
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  const switchOrganization = (orgId: string) => {
    const organization = organizations.find(org => org.id === orgId);
    if (organization) {
      setCurrentOrganization(organization);
      // In a real app, this might trigger other changes like reloading billing data
    }
  };

  const updateUserProfile = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
      // In a real app, this would call an API to update the user data
    }
  };

  const updateOrganization = (orgData: Partial<Organization>) => {
    if (currentOrganization) {
      const updatedOrg = { ...currentOrganization, ...orgData };
      setCurrentOrganization(updatedOrg);
      
      // Update the organization in the organizations list
      const updatedOrgs = organizations.map(org => 
        org.id === currentOrganization.id ? updatedOrg : org
      );
      setOrganizations(updatedOrgs);
      
      // In a real app, this would call an API to update the organization data
    }
  };

  return (
    <AccountContext.Provider 
      value={{ 
        user, 
        setUser,
        organizations, 
        currentOrganization,
        isLoading, 
        switchOrganization,
        updateUserProfile,
        updateOrganization
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
};
