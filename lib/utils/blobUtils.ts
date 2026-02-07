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
const DB_NAME = 'BlobCache';
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
      request.onsuccess = () => {
        const result = request.result;
        if (result && Date.now() - result.timestamp < CACHE_EXPIRY_MS) {
          resolve(result.blobUrl);
        } else {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    });
  } catch (error) {
    console.error('Error getting cached URL:', error);
    return null;
  }
}

/**
 * Cache blob URL in IndexedDB
 */
async function cacheUrl(url: string, blobUrl: string): Promise<void> {
  try {
    const db = await initDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put({ url, blobUrl, timestamp: Date.now() });
  } catch (error) {
    console.error('Error caching URL:', error);
  }
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

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    // Cache the result (client-side only)
    if (typeof window !== 'undefined') {
      await cacheUrl(fullUrl, blobUrl);
    }

    return blobUrl;
  } catch (error) {
    console.error('Error fetching blob URL:', error);
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
    console.error('Error clearing expired cache:', error);
  }
}
