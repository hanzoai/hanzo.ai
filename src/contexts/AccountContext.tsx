
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for organizations and user
export interface Organization {
  id: string;
  name: string;
  role: 'owner' | 'admin' | 'member';
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AccountContextType {
  user: User | null;
  organizations: Organization[];
  currentOrganization: Organization | null;
  isLoading: boolean;
  switchOrganization: (orgId: string) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

// Mock data for demonstration
const MOCK_USER: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  email: 'alex@hanzo.ai',
  avatar: '/placeholder.svg'
};

const MOCK_ORGANIZATIONS: Organization[] = [
  { id: 'org-1', name: 'Personal Account', role: 'owner' },
  { id: 'org-2', name: 'Hanzo Industries', role: 'admin' },
  { id: 'org-3', name: 'Quantum Innovations', role: 'member' }
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

  return (
    <AccountContext.Provider 
      value={{ 
        user, 
        organizations, 
        currentOrganization,
        isLoading, 
        switchOrganization
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
