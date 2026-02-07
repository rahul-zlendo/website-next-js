# Environment Configuration Update

## Changes Made

### Updated Production URLs

The environment configuration has been updated to use production endpoints for both development and production builds:

**Frontend URL:** `https://app.zlendorealty.com`
**Backend API URL:** `https://prodapi.zlendorealty.com`

## Files Updated

### 1. `lib/config/env.ts`

**Key Changes:**
- Default environment set to `'prod'` instead of `'dev'`
- `isDev` now properly checks `env === 'dev'` instead of hardcoded `true`
- Both dev and prod URLs now point to production endpoints:
  - Frontend: `https://app.zlendorealty.com`
  - Backend: `https://prodapi.zlendorealty.com`

**Before:**
```typescript
const env = process.env.NEXT_PUBLIC_ENV || 'dev';
const isDev = true;
const FRONTEND_URL_DEV = 'https://216.48.182.24:4052';
const BACKEND_URL_DEV = 'https://216.48.182.24:4051';
```

**After:**
```typescript
const env = process.env.NEXT_PUBLIC_ENV || 'prod';
const isDev = env === 'dev';
const FRONTEND_URL_DEV = 'https://app.zlendorealty.com';
const BACKEND_URL_DEV = 'https://prodapi.zlendorealty.com';
```

### 2. `.env.example`

Updated with clearer documentation about the production endpoints being used for both environments.

## Current Configuration

### Exported Constants

All URLs are exported from `lib/config/env.ts`:

```typescript
// Main URLs
export const FRONTEND_URL = 'https://app.zlendorealty.com';
export const BACKEND_URL = 'https://prodapi.zlendorealty.com';
export const API_BASE_URL = 'https://prodapi.zlendorealty.com/api/v1';

// Application URLs
export const BASE_APP_URL = 'https://app.zlendorealty.com';
export const SIGNUP_URL = 'https://app.zlendorealty.com/signup';
export const LOGIN_URL = 'https://app.zlendorealty.com/signin';
export const Plans = 'https://app.zlendorealty.com/plans?tab=billing&period=monthly';
export const designLibrary = 'https://app.zlendorealty.com/design-library';
export const PROJECT_DETAILS_URL = 'https://app.zlendorealty.com/project-details';

// Blob Storage
export const REACT_APP_BLOB_URL = 'https://zrealtystoragedev.blob.core.windows.net/';

// Environment Info
export const IS_DEV = false; // (or true if NEXT_PUBLIC_ENV=dev is set)
export const ENV = 'prod'; // (or 'dev' if NEXT_PUBLIC_ENV=dev is set)
```

## Environment Variables

You can override any URL using environment variables in `.env.local`:

```bash
# Optional overrides in .env.local
NEXT_PUBLIC_ENV=prod
NEXT_PUBLIC_FRONTEND_URL=https://app.zlendorealty.com
NEXT_PUBLIC_BACKEND_URL=https://prodapi.zlendorealty.com
NEXT_PUBLIC_BLOB_URL=https://zrealtystoragedev.blob.core.windows.net/
```

## Usage in Components

Import the URLs wherever needed:

```typescript
import { 
  FRONTEND_URL, 
  BACKEND_URL, 
  API_BASE_URL,
  SIGNUP_URL,
  LOGIN_URL 
} from '@/lib/config/env';

// Use in your components
<Link href={SIGNUP_URL}>Sign Up</Link>
```

## API Requests

The `API_BASE_URL` is automatically configured and used by axios:

```typescript
// lib/services/config/axiosConfig.ts uses API_BASE_URL
import { API_BASE_URL } from '@/lib/config/env';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // https://prodapi.zlendorealty.com/api/v1
});
```

## Testing Different Environments

### For Production (Default)
No changes needed - the app will use production URLs by default.

### For Development Testing
If you need to test against different endpoints:

1. Create `.env.local` file:
```bash
NEXT_PUBLIC_ENV=dev
NEXT_PUBLIC_BACKEND_URL=https://your-dev-api.com
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

2. Restart the development server:
```bash
npm run dev
```

## Migration from React/Vite

### Key Differences

| React/Vite | Next.js |
|------------|---------|
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` |
| `.env` with `VITE_` prefix | `.env.local` with `NEXT_PUBLIC_` prefix |
| Client-side only | Client & Server support |

### Environment Variable Access

**React/Vite:**
```typescript
const url = import.meta.env.VITE_BACKEND_URL;
```

**Next.js:**
```typescript
const url = process.env.NEXT_PUBLIC_BACKEND_URL;
```

## Important Notes

1. **Public Variables Only:** Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
2. **Restart Required:** Changes to environment variables require a server restart
3. **Build Time:** Environment variables are bundled at build time
4. **Git Ignored:** `.env.local` is gitignored - use `.env.example` as a template
5. **Production Endpoints:** The app now uses production endpoints for consistency

## Verification

To verify the configuration is correct:

1. Check the console logs in development mode
2. Inspect network requests to ensure they go to `https://prodapi.zlendorealty.com`
3. Verify login/signup redirects to `https://app.zlendorealty.com`

## Next Steps

1. ✅ Environment URLs updated to production
2. ✅ Configuration file migrated from Vite to Next.js
3. ✅ Documentation updated
4. Test API connectivity with production endpoints
5. Verify all authentication flows work correctly
6. Test blob storage image loading from production API

## Support

If you need to use different endpoints for specific environments:
- Create a `.env.local` file with your custom URLs
- Set `NEXT_PUBLIC_ENV=dev` if needed
- Restart the development server

The configuration is flexible and allows overrides while defaulting to production for consistency.
