# Azure Blob Storage Authentication Fix

## Problem
Azure Blob Storage account has **public access disabled** for security reasons. This means:
- Anonymous/public requests to blob URLs will fail with "Public access is not permitted"
- All blob access requires authentication via SAS tokens or other methods

## Solution
Added **SAS (Shared Access Signature) token** support to `blobUtils.ts` to authenticate blob storage requests.

---

## Changes Made

### 1. **Updated `lib/utils/blobUtils.ts`**

**Added SAS Token Configuration:**
```typescript
const BLOB_SAS_TOKEN = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || '';
```

**Modified `fetchBlobUrl()` to append SAS token:**
```typescript
// Append SAS token if available and not already in URL
if (BLOB_SAS_TOKEN && !fullUrl.includes('?')) {
  fullUrl = `${fullUrl}?${BLOB_SAS_TOKEN}`;
} else if (BLOB_SAS_TOKEN && !fullUrl.includes('sig=')) {
  fullUrl = `${fullUrl}&${BLOB_SAS_TOKEN}`;
}
```

### 2. **Created `.env.local.template`**
Template file with instructions for configuring your SAS token locally.

---

## How to Fix This Issue

### Step 1: Generate a SAS Token

1. **Go to Azure Portal** (https://portal.azure.com)
2. Navigate to your storage account: **zrealtystoragedev**
3. In the left menu, find **"Shared access signature"** under "Security + networking"
4. Configure the SAS token:
   - **Allowed services:** ✅ Blob
   - **Allowed resource types:** ✅ Service, ✅ Container, ✅ Object
   - **Allowed permissions:** ✅ Read, ✅ List (minimum for displaying images)
   - **Start date/time:** Set to now or earlier
   - **Expiry date/time:** Set to future date (e.g., 1 year from now)
   - **Allowed protocols:** HTTPS only (recommended)
5. Click **"Generate SAS and connection string"**
6. **Copy the "SAS token"** value (everything after the `?`)

### Step 2: Configure Your Environment

Create a `.env.local` file in your project root:

```bash
# Copy the template
cp .env.local.template .env.local
```

Edit `.env.local` and add your SAS token:

```env
NEXT_PUBLIC_BLOB_URL=https://zrealtystoragedev.blob.core.windows.net/
NEXT_PUBLIC_BLOB_SAS_TOKEN=sv=2022-11-02&ss=b&srt=sco&sp=rl&se=2027-12-31T23:59:59Z&st=2024-01-01T00:00:00Z&spr=https&sig=YOUR_ACTUAL_SIGNATURE_HERE
```

**Important Notes:**
- ❌ **DO NOT include the leading `?`** in the SAS token
- ✅ **ONLY include the query parameters** (sv=...&ss=...&sig=...)
- ⚠️ `.env.local` is gitignored - this keeps your token secure
- 🔄 Remember to update before the token expires

### Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C if running)
npm run dev
```

The app will now automatically append the SAS token to all blob URLs.

---

## How It Works

**Before (Failed):**
```
https://zrealtystoragedev.blob.core.windows.net/templates/image.jpg
❌ Public access is not permitted
```

**After (With SAS Token):**
```
https://zrealtystoragedev.blob.core.windows.net/templates/image.jpg?sv=2022-11-02&ss=b&srt=sco&sp=rl&se=2027-12-31T23:59:59Z&sig=...
✅ Authenticated access granted
```

---

## Security Best Practices

1. **Never commit SAS tokens to git**
   - ✅ `.env.local` is gitignored
   - ❌ Never put tokens in `.env.example` or other committed files

2. **Use minimal permissions**
   - For public images: Only **Read** + **List** permissions needed
   - Avoid **Write**, **Delete**, or **Create** unless absolutely necessary

3. **Set reasonable expiry dates**
   - For development: 1-3 months is reasonable
   - For production: Consider using Azure AD or managed identities instead

4. **Generate separate tokens for dev/prod**
   - Use different tokens for different environments
   - Makes it easier to revoke if compromised

5. **Monitor token expiry**
   - Add a calendar reminder before expiry
   - Rotate tokens periodically

---

## Alternative Solutions (Future Consideration)

For production environments, consider these more secure alternatives:

1. **Azure CDN with custom domain**
   - Serve images through Azure CDN
   - Configure custom caching rules
   - Better performance and security

2. **Server-side proxy**
   - Create a Next.js API route that fetches blobs server-side
   - Server uses Azure Storage SDK with connection string
   - No SAS token exposed to client

3. **Azure AD authentication**
   - Use managed identities for server-side access
   - Most secure option for production

4. **Enable public access for specific containers**
   - If images are truly public, enable container-level public access
   - Configure at container level, not account level

---

## Troubleshooting

### Error: "Server failed to authenticate the request"
- ✅ Check that SAS token is correctly copied (no extra spaces)
- ✅ Ensure token hasn't expired
- ✅ Verify permissions include Read and List

### Error: "Public access is not permitted" (still happening)
- ✅ Verify `.env.local` file exists in project root
- ✅ Check that `NEXT_PUBLIC_BLOB_SAS_TOKEN` is set correctly
- ✅ Restart the development server after adding the token

### Images still not loading
- ✅ Check browser console for actual error messages
- ✅ Verify blob URLs in Network tab of DevTools
- ✅ Ensure container and blob actually exist in Azure Storage

---

## Testing

After configuring the SAS token, test by:

1. **Open the app** in your browser
2. **Open DevTools** → Network tab
3. Look for blob storage requests
4. Verify they now include `?sv=...&sig=...` in the URL
5. Check that images load successfully

---

## Status
- ✅ Code updated to support SAS tokens
- ⏳ **ACTION REQUIRED:** You need to generate and configure your SAS token
- ⏳ After configuration, restart dev server and test

---

**Date:** February 5, 2026  
**Files Modified:**
- `lib/utils/blobUtils.ts`
- `.env.local.template` (created)
- `BLOB_STORAGE_FIX.md` (this file)
