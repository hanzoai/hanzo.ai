/**
 * AuthCallback - OAuth2 Callback Handler
 *
 * Handles the redirect from hanzo.id OAuth2 authorization.
 * Extracts the authorization code and exchanges it for tokens.
 */

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
          navigate('/login');
        }, 3000);
        return;
      }

      // Validate required params
      if (!code || !state) {
        setError('Invalid callback parameters');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
        return;
      }

      // Exchange code for tokens
      const success = await handleCallback(code, state);

      if (success) {
        // Redirect to account page on success
        navigate('/account');
      } else {
        // Redirect to login on failure
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    };

    processCallback();
  }, [searchParams, handleCallback, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center space-y-6">
        {error ? (
          <>
            <div className="text-red-500 text-xl font-medium">{error}</div>
            <p className="text-neutral-400">Redirecting to login...</p>
          </>
        ) : (
          <>
            <Loader2 className="w-12 h-12 animate-spin text-[#fd4444] mx-auto" />
            <h1 className="text-xl font-medium text-white">
              Completing authentication...
            </h1>
            <p className="text-neutral-400">Please wait while we sign you in.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
