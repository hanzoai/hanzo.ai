'use client'

/**
 * AuthCallback - OAuth2 Callback Handler
 *
 * Handles the redirect from hanzo.id OAuth2 authorization.
 * Extracts the authorization code and exchanges it for tokens.
 */

import { useEffect, useState, Suspense } from 'react';

import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from "next/navigation";

const AuthCallbackInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { handleCallback } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processCallback = async () => {
      const code = searchParams.get('code');
      const state = searchParams.get('state');
      const errorParam = searchParams.get('error');
      const errorDescription = searchParams.get('error_description');

      // Handle OAuth error
      if (errorParam) {
        setError(errorDescription || errorParam);
        setTimeout(() => {
          router.push('/login');
        }, 3000);
        return;
      }

      // Validate required params
      if (!code || !state) {
        setError('Invalid callback parameters');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
        return;
      }

      // Exchange code for tokens
      const success = await handleCallback(code, state);

      if (success) {
        // Redirect to account page on success
        router.push('/account');
      } else {
        // Redirect to login on failure
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    };

    processCallback();
  }, [searchParams, handleCallback, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        {error ? (
          <>
            <div className="text-foreground/70 text-xl font-medium">{error}</div>
            <p className="text-muted-foreground">Redirecting to login...</p>
          </>
        ) : (
          <>
            <Loader2 className="w-12 h-12 animate-spin text-foreground mx-auto" />
            <h1 className="text-xl font-medium text-foreground">
              Completing authentication...
            </h1>
            <p className="text-muted-foreground">Please wait while we sign you in.</p>
          </>
        )}
      </div>
    </div>
  );
};

const AuthCallback = () => (
  <Suspense fallback={<div className="min-h-screen bg-background" />}>
    <AuthCallbackInner />
  </Suspense>
);

export default AuthCallback;
