/**
 * Centralized Environment Configuration for Next.js
 * 
 * To switch between Dev and Prod:
 * - Set NEXT_PUBLIC_ENV=dev for development
 * - Set NEXT_PUBLIC_ENV=prod for production
 * - Or leave unset to use default (prod)
 * 
 * You can also override individual URLs using:
 * - NEXT_PUBLIC_FRONTEND_URL
 * - NEXT_PUBLIC_BACKEND_URL
 */

// Determine environment (dev or prod)
const env = process.env.NEXT_PUBLIC_ENV || 'prod';
const isDev = env === 'dev';

// Frontend URLs - Using production URL for both dev and prod its
const FRONTEND_URL_DEV = 'https://stagingapp.zlendorealty.com';
const FRONTEND_URL_PROD = 'https://app.zlendorealty.com';

// Backend URLs - Using production API for both dev and prod
const BACKEND_URL_DEV = 'https://api.zlendorealty.com';
const BACKEND_URL_PROD = 'https://prodapi.zlendorealty.com';

// Blob URL
export const REACT_APP_BLOB_URL = process.env.NEXT_PUBLIC_BLOB_URL || 'https://zrealtystoragedev.blob.core.windows.net/';
export const REACT_APP_BLOB_KEY = "sv=2024-11-04&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2026-11-18T20:34:53Z&st=2025-09-12T12:19:53Z&spr=https,http&sig=KNQs7rhe81AeQfnd%2BS4QMPWWo55VbNICTufFVYe5KhA%3D"



// Export URLs (can be overridden by env variables)
export const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || (isDev ? FRONTEND_URL_DEV : FRONTEND_URL_PROD);
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || (isDev ? BACKEND_URL_DEV : BACKEND_URL_PROD);

// API Configuration
export const api = "/api";
export const version = "/v1";
export const baseUrl = `${api}${version}`;

// Full API Base URL
export const API_BASE_URL = `${BACKEND_URL}${baseUrl}`;

// Helper function to get API URL
export const getApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${BACKEND_URL}${baseUrl}/${cleanEndpoint}`;
};

// Frontend App URLs
export const BASE_APP_URL = FRONTEND_URL;
export const SIGNUP_URL = `${FRONTEND_URL}/signup`;
export const LOGIN_URL = `${FRONTEND_URL}/signin`;
export const Plans = `${FRONTEND_URL}/plans?tab=billing&period=monthly`
export const designLibrary = `${FRONTEND_URL}/design-library`
// Project Details URL (for 3D Editor)
export const PROJECT_DETAILS_URL = `${FRONTEND_URL}/project-details`;

// Default API tokens for unauthenticated requests
export const DEFAULT_API_TOKEN_DEV = 'zrsk_dev_41fbb72c9a0e5f1c8d2a9b6d4e8f3c2';
export const DEFAULT_API_TOKEN_PROD = 'zrsk_beta_8a1d4c7e6f2b9a5d3c1e0f8b6a4d';
export const DEFAULT_API_TOKEN = DEFAULT_API_TOKEN_PROD;

// Export environment info
export const IS_DEV = isDev;
export const ENV = env;
