/**
 * Blob Storage Utilities
 * Handles fetching and caching of blob URLs from Azure Storage
 */

// Get blob URL from environment or use default
export const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_URL || 'https://zrealtystoragedev.blob.core.windows.net/';
// SAS token for authenticated access when public access is not permitted
export const BLOB_SAS_TOKEN = process.env.NEXT_PUBLIC_BLOB_SAS_TOKEN || 'sv=2024-11-04&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2026-11-18T20:34:53Z&st=2025-09-12T12:19:53Z&spr=https,http&sig=KNQs7rhe81AeQfnd%2BS4QMPWWo55VbNICTufFVYe5KhA%3D';

/**
 * IndexedDB cache for blob URLs
 */
// Bump the database name when the cached blob format changes. BlobCache v1
// contains Azure responses stored as application/octet-stream, which browsers
// cannot reliably decode when used through a blob: image URL.
const DB_NAME = 'BlobCacheV2';
const STORE_NAME = 'urls';
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

let dbPromise: Promise<IDBDatabase> | null = null;

/**
 * Initialize IndexedDB
 */
function initDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('IndexedDB not available in server context'));
      return;
    }

    const request = indexedDB.open(DB_NAME, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'url' });
      }
    };
  });

  return dbPromise;
}

/**
 * Get cached blob URL from IndexedDB
 */
async function getCachedUrl(url: string): Promise<string | null> {
  try {
    const db = await initDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);

    return new Promise((resolve) => {
      request.onsuccess = async () => {
        const result = request.result;
        if (result && Date.now() - result.timestamp < CACHE_EXPIRY_MS) {
          if (result.blob instanceof Blob && result.blob.type.startsWith('image/')) {
            // New format: create a fresh session-scoped blob URL from the cached Blob
            resolve(URL.createObjectURL(result.blob));
          } else {
            // Legacy format (stored string blobUrl) which causes browser console ERR_FILE_NOT_FOUND when tested.
            // Consider it invalid and clean it up.
            try {
              const db2 = await initDB();
              const tx = db2.transaction(STORE_NAME, 'readwrite');
              tx.objectStore(STORE_NAME).delete(url);
            } catch (_) { /* ignore cleanup errors */ }
            resolve(null);
          }
        } else {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    });
  } catch (error) {
    // console.error('Error getting cached URL:', error);
    return null;
  }
}

/**
 * Cache blob URL in IndexedDB
 */
async function cacheUrl(url: string, blob: Blob): Promise<void> {
  try {
    const db = await initDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put({ url, blob, timestamp: Date.now() });
  } catch (error) {
    // console.error('Error caching URL:', error);
  }
}

/**
 * Construct full URL from relative path
 */
export function constructFullBlobUrl(relativeUrl: string): string {
    if (!relativeUrl) return '';
    
    // If it's already an absolute URL or local path, return it as is
    if (relativeUrl.startsWith('http://') || relativeUrl.startsWith('https://') || relativeUrl.startsWith('/assets/') || relativeUrl.startsWith('/')) {
        return relativeUrl;
    }
    
    // Otherwise, prepend the Azure blob base URL
    const cleanBaseUrl = BLOB_BASE_URL.endsWith('/') ? BLOB_BASE_URL.slice(0, -1) : BLOB_BASE_URL;
    const cleanRelativeUrl = relativeUrl.startsWith('/') ? relativeUrl : `/${relativeUrl}`;
    
    return `${cleanBaseUrl}${cleanRelativeUrl}`;
}

/**
 * Azure returns some image blobs as application/octet-stream. Once that
 * response is converted to a blob: URL, browsers use the blob MIME type and
 * may refuse to decode otherwise-valid image bytes. Infer the correct type
 * from the source path when storage metadata is missing.
 */
function inferImageMimeType(url: string): string {
  const pathname = url.split('?')[0].toLowerCase();
  if (pathname.endsWith('.webp')) return 'image/webp';
  if (pathname.endsWith('.png')) return 'image/png';
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg';
  if (pathname.endsWith('.avif')) return 'image/avif';
  if (pathname.endsWith('.gif')) return 'image/gif';
  if (pathname.endsWith('.svg')) return 'image/svg+xml';
  return 'application/octet-stream';
}

/**
 * Fetch blob URL with caching
 */
export async function fetchBlobUrl(relativeUrl: any): Promise<string> {
  if (!relativeUrl) return '';

  // If it's already a blob URL, return it
  if (relativeUrl.startsWith('blob:')) {
    return relativeUrl;
  }

  // Construct full URL if relative
  let fullUrl = relativeUrl.startsWith('http')
    ? relativeUrl
    : `${BLOB_BASE_URL}${relativeUrl}`;

  // Append SAS token if available and not already in URL
  if (BLOB_SAS_TOKEN && !fullUrl.includes('?')) {
    fullUrl = `${fullUrl}?${BLOB_SAS_TOKEN}`;
  } else if (BLOB_SAS_TOKEN && !fullUrl.includes('sig=')) {
    // If URL has query params but no SAS token, append it
    fullUrl = `${fullUrl}&${BLOB_SAS_TOKEN}`;
  }

  // Check cache first (client-side only)
  if (typeof window !== 'undefined') {
    const cached = await getCachedUrl(fullUrl);
    if (cached) {
      return cached;
    }
  }

  // Fetch the blob
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${response.statusText}`);
    }

    const responseType = response.headers.get('content-type')?.split(';')[0].trim().toLowerCase();
    const inferredType = inferImageMimeType(fullUrl);
    const imageType = responseType?.startsWith('image/') ? responseType : inferredType;
    const buffer = await response.arrayBuffer();
    const blob = new Blob([buffer], { type: imageType });

    if (!blob.type.startsWith('image/')) {
      throw new Error(`Unsupported image content type: ${responseType || 'missing'}`);
    }
    const blobUrl = URL.createObjectURL(blob);

    // Cache the result (client-side only)
    if (typeof window !== 'undefined') {
      await cacheUrl(fullUrl, blob);
    }

    return blobUrl;
  } catch (error) {
    // console.error('Error fetching blob URL:', error);
    return fullUrl; // Fallback to original URL
  }
}

/**
 * Revoke a blob URL to free memory
 */
export function revokeBlobUrl(blobUrl: string): void {
  if (blobUrl.startsWith('blob:')) {
    URL.revokeObjectURL(blobUrl);
  }
}

/**
 * Clear expired cache entries
 */
export async function clearExpiredCache(): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    const db = await initDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.openCursor();

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result;
      if (cursor) {
        if (Date.now() - cursor.value.timestamp >= CACHE_EXPIRY_MS) {
          cursor.delete();
        }
        cursor.continue();
      }
    };
  } catch (error) {
    // console.error('Error clearing expired cache:', error);
  }
}
