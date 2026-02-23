/**
 * AuthContext - Hanzo IAM + Web3 Wallet Authentication
 *
 * Supports:
 * - Email/password login via hanzo.id
 * - Social logins (Google, GitHub, Discord)
 * - Web3 wallet authentication (Ethereum, etc.)
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { useAccount, useSignMessage, useDisconnect } from 'wagmi';
import { toast } from 'sonner';
import {
  IAMUser,
  TokenResponse,
  AuthState,
  getStoredAuthState,
  storeAuthState,
  clearAuthState,
  loginWithPassword,
  loginWithWallet,
  register,
  logout as iamLogout,
  refreshAccessToken,
  getAuthorizationUrl,
  handleOAuthCallback,
} from '@/lib/hanzo/auth';

interface AuthContextType {
  // State
  user: IAMUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  accessToken: string | null;

  // Auth methods
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    email: string,
    password: string,
    profile?: { name?: string; organization?: string }
  ) => Promise<boolean>;
  loginWithSocial: (
    provider: 'google' | 'github' | 'discord' | 'apple'
  ) => void;
  loginWithWeb3: () => Promise<boolean>;
  logout: () => Promise<void>;

  // OAuth callback handler
  handleCallback: (code: string, state: string) => Promise<boolean>;

  // Token refresh
  refreshToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthState>(() => ({
    ...getStoredAuthState(),
    isLoading: true,
  }));

  // Web3 wallet hooks
  const { address, isConnected, chain } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  // Initialize auth state on mount
  useEffect(() => {
    const initAuth = async () => {
      const stored = getStoredAuthState();

      // If we have a stored token, try to refresh it
      if (stored.refreshToken && stored.expiresAt) {
        const isExpiringSoon = Date.now() > stored.expiresAt - 5 * 60 * 1000; // 5 min buffer
        if (isExpiringSoon) {
          try {
            const tokens = await refreshAccessToken(stored.refreshToken);
            storeAuthState(tokens, stored.user!);
            setAuthState({
              ...stored,
              accessToken: tokens.access_token,
              refreshToken: tokens.refresh_token || stored.refreshToken,
              expiresAt: Date.now() + tokens.expires_in * 1000,
              isAuthenticated: true,
              isLoading: false,
            });
            return;
          } catch {
            // Token refresh failed, clear auth
            clearAuthState();
          }
        }
      }

      setAuthState({
        ...stored,
        isLoading: false,
      });
    };

    initAuth();
  }, []);

  // Handle login with email/password
  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setAuthState(prev => ({ ...prev, isLoading: true }));

      try {
        const { tokens, user } = await loginWithPassword(email, password);
        storeAuthState(tokens, user);

        setAuthState({
          user,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token || null,
          idToken: tokens.id_token || null,
          expiresAt: Date.now() + tokens.expires_in * 1000,
          isAuthenticated: true,
          isLoading: false,
        });

        toast.success('Login successful!', {
          description: `Welcome back, ${user.displayName || user.name || user.email}!`,
        });

        return true;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Login failed';
        toast.error('Login failed', { description: message });
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return false;
      }
    },
    []
  );

  // Handle signup
  const signup = useCallback(
    async (
      email: string,
      password: string,
      profile?: { name?: string; organization?: string }
    ): Promise<boolean> => {
      setAuthState(prev => ({ ...prev, isLoading: true }));

      try {
        const { tokens, user } = await register(email, password, profile);
        storeAuthState(tokens, user);

        setAuthState({
          user,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token || null,
          idToken: tokens.id_token || null,
          expiresAt: Date.now() + tokens.expires_in * 1000,
          isAuthenticated: true,
          isLoading: false,
        });

        toast.success('Account created successfully!', {
          description: 'Welcome to Hanzo!',
        });

        return true;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Registration failed';
        toast.error('Signup failed', { description: message });
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return false;
      }
    },
    []
  );

  // Handle social login redirect
  const loginWithSocial = useCallback(
    (provider: 'google' | 'github' | 'discord' | 'apple') => {
      const url = getAuthorizationUrl(provider);
      window.location.href = url;
    },
    []
  );

  // Handle Web3 wallet login
  const loginWithWeb3 = useCallback(async (): Promise<boolean> => {
    if (!isConnected || !address) {
      toast.error('Please connect your wallet first');
      return false;
    }

    setAuthState(prev => ({ ...prev, isLoading: true }));

    try {
      const { tokens, user } = await loginWithWallet(
        address,
        async (message: string) => {
          return await signMessageAsync({ message });
        },
        chain?.id || 1
      );

      storeAuthState(tokens, user);

      setAuthState({
        user,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || null,
        idToken: tokens.id_token || null,
        expiresAt: Date.now() + tokens.expires_in * 1000,
        isAuthenticated: true,
        isLoading: false,
      });

      toast.success('Wallet connected!', {
        description: `Signed in with ${address.slice(0, 6)}...${address.slice(-4)}`,
      });

      return true;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Wallet authentication failed';
      toast.error('Authentication failed', { description: message });
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  }, [isConnected, address, chain?.id, signMessageAsync]);

  // Handle OAuth callback
  const handleCallback = useCallback(
    async (code: string, state: string): Promise<boolean> => {
      setAuthState(prev => ({ ...prev, isLoading: true }));

      try {
        const { tokens, user } = await handleOAuthCallback(code, state);

        setAuthState({
          user,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token || null,
          idToken: tokens.id_token || null,
          expiresAt: Date.now() + tokens.expires_in * 1000,
          isAuthenticated: true,
          isLoading: false,
        });

        toast.success('Login successful!');
        return true;
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Authentication failed';
        toast.error('Authentication failed', { description: message });
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return false;
      }
    },
    []
  );

  // Handle logout
  const logout = useCallback(async () => {
    try {
      await iamLogout();
    } catch {
      // Best effort
    }

    // Disconnect wallet if connected
    if (isConnected) {
      disconnect();
    }

    setAuthState({
      user: null,
      accessToken: null,
      refreshToken: null,
      idToken: null,
      expiresAt: null,
      isAuthenticated: false,
      isLoading: false,
    });

    toast.success('Logged out successfully');
  }, [isConnected, disconnect]);

  // Refresh token
  const refreshToken = useCallback(async (): Promise<boolean> => {
    if (!authState.refreshToken) {
      return false;
    }

    try {
      const tokens = await refreshAccessToken(authState.refreshToken);
      storeAuthState(tokens, authState.user!);

      setAuthState(prev => ({
        ...prev,
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || prev.refreshToken,
        expiresAt: Date.now() + tokens.expires_in * 1000,
      }));

      return true;
    } catch {
      // Token refresh failed
      await logout();
      return false;
    }
  }, [authState.refreshToken, authState.user, logout]);

  // Auto-refresh token before expiry
  useEffect(() => {
    if (!authState.isAuthenticated || !authState.expiresAt) {
      return;
    }

    const timeUntilExpiry = authState.expiresAt - Date.now();
    const refreshTime = timeUntilExpiry - 5 * 60 * 1000; // 5 minutes before expiry

    if (refreshTime <= 0) {
      // Token is about to expire or already expired
      refreshToken();
      return;
    }

    const timer = setTimeout(() => {
      refreshToken();
    }, refreshTime);

    return () => clearTimeout(timer);
  }, [authState.isAuthenticated, authState.expiresAt, refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        isLoading: authState.isLoading,
        accessToken: authState.accessToken,
        login,
        signup,
        loginWithSocial,
        loginWithWeb3,
        logout,
        handleCallback,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
