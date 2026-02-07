# Template Images 404 Error - Diagnosis & Fix

## ⚠️ **ISSUE: Template Images Not Loading**

### Error Logs:
```
GET /in/templates/98/Main.webp 404 in 2066ms
GET /in/templates/94/Main.webp 404 in 809ms
GET /in/templates/95/Main.webp 404 in 812ms
```

---

## 🔍 **Root Cause Analysis**

### **What's Happening:**

1. **API Returns Relative URLs:**
   - API sends: `"templates/98/Main.webp"`
   - Should be: Azure Blob Storage URL

2. **fetchBlobUrl Gets Called:**
   - Tries to construct: `https://zrealtystoragedev.blob.core.windows.net/templates/98/Main.webp?sv=...`
   - Should work with SAS token

3. **But Image Still Fails:**
   - Browser sees relative path in `<img src="...">`
   - Current page is `/in/`
   - Browser interprets as: `/in/templates/98/Main.webp`
   - Results in 404 error

---

## 💡 **Why This Is Happening**

### **Scenario 1: fetchBlobUrl Returns Original URL on Error**

```typescript
// In blobUtils.ts (line 98-101)
const blobUrl = await fetchBlobUrl(url);
return blobUrl && blobUrl.startsWith('blob:') ? blobUrl : url;
```

If blob creation fails, it returns the **original** relative URL from API, causing 404s.

### **Scenario 2: SAS Token Not Applied**

Your `.env.local` has the SAS token, but:
- The blob request might be failing
- CORS issues with blob storage
- Network timeout during blob fetch

---

## ✅ **Immediate Fix**

### **Option 1: Force Full Blob Storage URLs (Recommended)**

Even if blob creation fails, still use the full Azure URL with SAS token:

```typescript
// In app/[country]/page.tsx - loadMultipleThumbnails function
const loadPromises = thumbnailUrls.map(async (url) => {
  try {
    // Always construct full blob URL with SAS token
    const BLOB_BASE = 'https://zrealtystoragedev.blob.core.windows.net/';
    const SAS_TOKEN = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || '';
    
    // If URL is relative, make it absolute
    const fullUrl = url.startsWith('http') ? url : `${BLOB_BASE}${url}`;
    const urlWithSAS = SAS_TOKEN && !fullUrl.includes('?') 
      ? `${fullUrl}?${SAS_TOKEN}` 
      : fullUrl;
    
    // Try to create blob URL
    const blobUrl = await fetchBlobUrl(url);
    
    // Return blob URL if successful, otherwise return full URL with SAS
    return (blobUrl && blobUrl.startsWith('blob:')) ? blobUrl : urlWithSAS;
  } catch (error) {
    console.error(`Failed to load thumbnail:`, error);
    // Fallback to full URL with SAS token
    const BLOB_BASE = 'https://zrealtystoragedev.blob.core.windows.net/';
    const SAS_TOKEN = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || '';
    const fullUrl = url.startsWith('http') ? url : `${BLOB_BASE}${url}`;
    return SAS_TOKEN && !fullUrl.includes('?') ? `${fullUrl}?${SAS_TOKEN}` : fullUrl;
  }
});
```

---

## 🧪 **Debugging Steps**

### **Step 1: Check If SAS Token Is Loaded**

Open browser console and run:
```javascript
// Check if environment variable is available
console.log(process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN);
```

**Expected:** Should show the SAS token string  
**If null/undefined:** Environment variables not loaded properly

### **Step 2: Check Network Requests**

1. Open **DevTools** → **Network** tab
2. Filter by "blob.core.windows.net"
3. Click on a request and check:
   - **Request URL:** Should include `?sv=...&sig=...`
   - **Status:** Should be `200 OK` not `403` or `404`
   - **Response:** Should be image data

### ** 3: Check Blob Fetch Errors**

Open browser console:
```javascript
// Should see errors like:
// "Failed to load thumbnail for template X88"
// "Public access is not permitted"  ← Means no SAS token
// "CORS error" ← Means blob storage CORS not configured
```

---

## 🎯 **Proper Solution**

The code should **never** use relative URLs. Always construct full Azure Blob URLs with SAS tokens.

### **File to Modify:** `app/[country]/page.tsx`

**Current Code (Lines 95-102):**
```typescript
const loadPromises = thumbnailUrls.map(async (url) => {
  try {
    const blobUrl = await fetchBlobUrl(url);
    return blobUrl && blobUrl.startsWith('blob:') ? blobUrl : url; // ❌ Returns relative URL!
  } catch (error) {
    console.error(`Failed to load thumbnail:`, error);
    return url; // ❌ Returns relative URL!
  }
});
```

**Fixed Code:**
```typescript
const loadPromises = thumbnailUrls.map(async (url) => {
  try {
    const blobUrl = await fetchBlobUrl(url);
    // Always return blob URL or full Azure URL with SAS, never relative URL
    if (blobUrl && blobUrl.startsWith('blob:')) {
      return blobUrl;
    }
    // Fallback to full Azure URL
    return constructFullBlobUrl(url);
  } catch (error) {
    console.error(`Failed to load thumbnail:`, error);
    return constructFullBlobUrl(url);
  }
});

// Helper function
function constructFullBlobUrl(relativeUrl: string): string {
  const BLOB_BASE = 'https://zrealtystoragedev.blob.core.windows.net/';
  const SAS = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || '';
  
  if (relativeUrl.startsWith('http')) return relativeUrl;
  
  const fullUrl = `${BLOB_BASE}${relativeUrl}`;
  return SAS && !fullUrl.includes('?') ? `${fullUrl}?${SAS}` : fullUrl;
}
```

---

## ⚡ **Quick Test**

After applying the fix:

1. **Clear browser cache:** `Ctrl + Shift + Delete`
2. **Hard refresh:** `Ctrl + Shift + R`
3. **Check Network tab:**
   - URLs should be: `https://zrealtystoragedev.blob.core.windows.net/templates/98/Main.webp?sv=...`
   - NOT: `/in/templates/98/Main.webp`
4. **Check console:**
   - No more "/in/templates" 404 errors

---

## 📊 **Expected vs Actual**

| What | Expected | Actual (Error) |
|------|----------|----------------|
| **API Response** | `templates/98/Main.webp` | `templates/98/Main.webp` ✅ |
| **After fetchBlobUrl** | `blob:http://...` | `templates/98/Main.webp` ❌ |
| **Fallback URL** | `https://zrealtystoragedev...?sv=...` | `templates/98/Main.webp` ❌ |
| **Browser Request** | Azure Blob Storage | `/in/templates/...` ❌ |
| **Result** | Image loads | 404 Error ❌ |

---

## 🔧 **Action Required**

I'll create a fix for this now - the code needs to ensure that even when blob creation fails, it still returns the full Azure URL with SAS token, never the relative URL.

---

**Status:** 🔍 Diagnosed  
**Next:** ✏️ Will apply the fix now
