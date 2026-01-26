/**
 * Hanzo IAM (hanzo.id) OAuth2/OIDC Client
 *
 * Supports:
 * - Email/password authentication
 * - Social logins (Google, GitHub, Discord, etc.)
 * - Web3 wallet authentication (Ethereum, Solana)
 * - JWT token validation
 */

const IAM_BASE_URL = import.meta.env.VITE_HANZO_IAM_URL || 'https://id.hanzo.ai';
const CLIENT_ID = import.meta.env.VITE_HANZO_CLIENT_ID || '';
const REDIRECT_URI = import.meta.env.VITE_HANZO_REDIRECT_URI || `${window.location.origin}/auth/callback`;

export interface IAMUser {
  sub: string;
  iss?: string;
  name?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  picture?: string;
  phone?: string;
  address?: string;
  isVerified?: boolean;
  groups?: string[];
  roles?: string[];
  permissions?: string[];
  // Web3 fields
  walletAddress?: string;
  walletChain?: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  id_token?: string;
  scope?: string;
}

export interface AuthState {
  user: IAMUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  expiresAt: number | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Storage keys
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'hanzo_access_token',
  REFRESH_TOKEN: 'hanzo_refresh_token',
  ID_TOKEN: 'hanzo_id_token',
  USER: 'hanzo_user',
  EXPIRES_AT: 'hanzo_expires_at',
  AUTH_STATE: 'hanzo_auth_state',
  OAUTH_STATE: 'hanzo_oauth_state',
  OAUTH_NONCE: 'hanzo_oauth_nonce',
};

/**
 * Generate a random string for OAuth2 state parameter
 */
function generateState(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generate a random nonce for OIDC
 */
function generateNonce(): string {
  return generateState();
}

/**
 * Parse JWT without verification (for extracting claims)
 */
function parseJwt(token: string): Record<string, unknown> {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return {};
  }
}

/**
 * Get stored auth state from localStorage
 */
export function getStoredAuthState(): AuthState {
  try {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    const idToken = localStorage.getItem(STORAGE_KEYS.ID_TOKEN);
    const userStr = localStorage.getItem(STORAGE_KEYS.USER);
    const expiresAtStr = localStorage.getItem(STORAGE_KEYS.EXPIRES_AT);

    const user = userStr ? JSON.parse(userStr) : null;
    const expiresAt = expiresAtStr ? parseInt(expiresAtStr, 10) : null;

    // Check if token is expired
    const isExpired = expiresAt ? Date.now() > expiresAt : true;
    const isAuthenticated = !!accessToken && !isExpired;

    return {
      user,
      accessToken,
      refreshToken,
      idToken,
      expiresAt,
      isAuthenticated,
      isLoading: false,
    };
  } catch {
    return {
      user: null,
      accessToken: null,
      refreshToken: null,
      idToken: null,
      expiresAt: null,
      isAuthenticated: false,
      isLoading: false,
    };
  }
}

/**
 * Store auth state to localStorage
 */
export function storeAuthState(tokens: TokenResponse, user: IAMUser): void {
  const expiresAt = Date.now() + tokens.expires_in * 1000;

  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, tokens.access_token);
  localStorage.setItem(STORAGE_KEYS.EXPIRES_AT, expiresAt.toString());
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));

  if (tokens.refresh_token) {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, tokens.refresh_token);
  }
  if (tokens.id_token) {
    localStorage.setItem(STORAGE_KEYS.ID_TOKEN, tokens.id_token);
  }
}

/**
 * Clear auth state from localStorage
 */
export function clearAuthState(): void {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

/**
 * Get authorization URL for OAuth2 login
 */
export function getAuthorizationUrl(
  provider?: 'google' | 'github' | 'discord' | 'apple' | 'wallet'
): string {
  const state = generateState();
  const nonce = generateNonce();

  // Store state and nonce for verification
  sessionStorage.setItem(STORAGE_KEYS.OAUTH_STATE, state);
  sessionStorage.setItem(STORAGE_KEYS.OAUTH_NONCE, nonce);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'openid profile email',
    state,
    nonce,
  });

  if (provider) {
    params.set('provider', provider);
  }

  return `${IAM_BASE_URL}/login/oauth/authorize?${params.toString()}`;
}

/**
 * Exchange authorization code for tokens
 */
export async function exchangeCode(code: string): Promise<TokenResponse> {
  const response = await fetch(`${IAM_BASE_URL}/api/login/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error_description || 'Failed to exchange code for tokens');
  }

  return response.json();
}

/**
 * Refresh access token using refresh token
 */
export async function refreshAccessToken(refreshToken: string): Promise<TokenResponse> {
  const response = await fetch(`${IAM_BASE_URL}/api/login/oauth/refresh_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: CLIENT_ID,
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return response.json();
}

/**
 * Get user info using access token
 */
export async function getUserInfo(accessToken: string): Promise<IAMUser> {
  const response = await fetch(`${IAM_BASE_URL}/api/userinfo`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  return response.json();
}

/**
 * Login with email and password (direct API login)
 */
export async function loginWithPassword(
  email: string,
  password: string
): Promise<{ tokens: TokenResponse; user: IAMUser }> {
  const response = await fetch(`${IAM_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      type: 'account/password',
      username: email,
      password,
      application: CLIENT_ID,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Login failed');
  }

  const tokens: TokenResponse = await response.json();

  // Extract user from ID token or fetch from userinfo
  let user: IAMUser;
  if (tokens.id_token) {
    const claims = parseJwt(tokens.id_token);
    user = {
      sub: claims.sub as string,
      name: claims.name as string,
      displayName: claims.displayName as string,
      email: claims.email as string,
      emailVerified: claims.email_verified as boolean,
      picture: claims.picture as string,
      roles: claims.roles as string[],
      permissions: claims.permissions as string[],
    };
  } else {
    user = await getUserInfo(tokens.access_token);
  }

  return { tokens, user };
}

/**
 * Register a new account
 */
export async function register(
  email: string,
  password: string,
  profile?: { name?: string; organization?: string }
): Promise<{ tokens: TokenResponse; user: IAMUser }> {
  const response = await fetch(`${IAM_BASE_URL}/api/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      type: 'account/password',
      username: email,
      email,
      password,
      name: profile?.name,
      organization: profile?.organization,
      application: CLIENT_ID,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Registration failed');
  }

  // After registration, login to get tokens
  return loginWithPassword(email, password);
}

/**
 * Login with Web3 wallet (signature-based)
 */
export async function loginWithWallet(
  address: string,
  signMessage: (message: string) => Promise<string>,
  chainId: number = 1
): Promise<{ tokens: TokenResponse; user: IAMUser }> {
  // Step 1: Request a challenge nonce
  const nonceResponse = await fetch(`${IAM_BASE_URL}/api/web3/nonce`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      address,
      chainId,
    }),
  });

  if (!nonceResponse.ok) {
    throw new Error('Failed to get authentication nonce');
  }

  const { nonce, message } = await nonceResponse.json();

  // Step 2: Sign the message with wallet
  const signature = await signMessage(message);

  // Step 3: Verify signature and get tokens
  const authResponse = await fetch(`${IAM_BASE_URL}/api/web3/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      address,
      signature,
      nonce,
      chainId,
      application: CLIENT_ID,
    }),
  });

  if (!authResponse.ok) {
    const error = await authResponse.json().catch(() => ({}));
    throw new Error(error.message || 'Wallet authentication failed');
  }

  const tokens: TokenResponse = await authResponse.json();

  const user: IAMUser = {
    sub: address,
    walletAddress: address,
    walletChain: chainId === 1 ? 'ethereum' : `chain:${chainId}`,
  };

  // Try to get additional user info if available
  try {
    const userInfo = await getUserInfo(tokens.access_token);
    Object.assign(user, userInfo);
  } catch {
    // User info not available, use wallet address as identity
  }

  return { tokens, user };
}

/**
 * Logout - revoke tokens and clear local state
 */
export async function logout(): Promise<void> {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

  // Revoke tokens on server (best effort)
  if (accessToken || refreshToken) {
    try {
      await fetch(`${IAM_BASE_URL}/api/login/oauth/revoke`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          token: refreshToken || accessToken || '',
          token_type_hint: refreshToken ? 'refresh_token' : 'access_token',
        }),
      });
    } catch {
      // Best effort - continue with local logout
    }
  }

  clearAuthState();
}

/**
 * Verify OAuth2 callback state
 */
export function verifyOAuthState(state: string): boolean {
  const storedState = sessionStorage.getItem(STORAGE_KEYS.OAUTH_STATE);
  sessionStorage.removeItem(STORAGE_KEYS.OAUTH_STATE);
  return state === storedState;
}

/**
 * Handle OAuth2 callback
 */
export async function handleOAuthCallback(
  code: string,
  state: string
): Promise<{ tokens: TokenResponse; user: IAMUser }> {
  if (!verifyOAuthState(state)) {
    throw new Error('Invalid OAuth state');
  }

  const tokens = await exchangeCode(code);
  const user = await getUserInfo(tokens.access_token);

  storeAuthState(tokens, user);

  return { tokens, user };
}
