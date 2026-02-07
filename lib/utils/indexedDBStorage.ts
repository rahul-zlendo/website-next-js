/**
 * IndexedDB Storage Utility for Asset Blobs
 * 
 * Stores blobs in IndexedDB instead of JavaScript memory to reduce RAM usage.
 * Provides persistence across page reloads and better memory management.
 */

const DB_NAME = 'ZRealtyAssetCache';
const DB_VERSION = 2;
const STORE_NAME = 'blobs';
const MATERIALS_STORE_NAME = 'materials';

interface BlobCacheEntry {
  url: string;
  blob: Blob;
  timestamp: number;
  size: number;
}

export interface MaterialCacheEntry {
  url: string;
  materials: Record<string, undefined>;
  timestamp: number;
}

class IndexedDBStorage {
  private db: IDBDatabase | null = null;
  private initPromise: Promise<IDBDatabase> | null = null;

  /**
   * Initialize IndexedDB database
   */
  private async init(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve, reject) => {
      // Check if IndexedDB is available
      if (!('indexedDB' in window)) {
        reject(new Error('IndexedDB is not supported in this browser'));
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create blob object store if it doesn't exist
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'url' });
          objectStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
        
        // Create materials object store if it doesn't exist
        if (!db.objectStoreNames.contains(MATERIALS_STORE_NAME)) {
          const materialsStore = db.createObjectStore(MATERIALS_STORE_NAME, { keyPath: 'url' });
          materialsStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });

    return this.initPromise;
  }

  /**
   * Get blob from IndexedDB cache
   */
  async get(url: string): Promise<Blob | null> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, _reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(url);
console.log(_reject);

        request.onsuccess = () => {
          const entry = request.result as BlobCacheEntry | undefined;
          if (entry && entry.blob) {
            resolve(entry.blob);
          } else {
            resolve(null);
          }
        };

        request.onerror = () => {
          console.warn('Failed to get blob from IndexedDB:', request.error);
          resolve(null); // Return null on error, don't reject
        };
      });
    } catch (error) {
      console.warn('IndexedDB get error:', error);
      return null;
    }
  }

  /**
   * Store blob in IndexedDB cache
   */
  async set(url: string, blob: Blob): Promise<void> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        
        const entry: BlobCacheEntry = {
          url,
          blob,
          timestamp: Date.now(),
          size: blob.size,
        };

        const request = store.put(entry);

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = () => {
          console.warn('Failed to store blob in IndexedDB:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB set error:', error);
      // Don't throw - allow fallback to network
    }
  }

  /**
   * Delete blob from IndexedDB cache
   */
  async delete(url: string): Promise<void> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(url);

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = () => {
          console.warn('Failed to delete blob from IndexedDB:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB delete error:', error);
    }
  }

  /**
   * Clear all blobs from IndexedDB cache
   */
  async clear(): Promise<void> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = () => {
          console.warn('Failed to clear IndexedDB:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB clear error:', error);
    }
  }

  /**
   * Get cache size and statistics
   */
  async getStats(): Promise<{ count: number; totalSize: number }> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
          const entries = request.result as BlobCacheEntry[];
          const totalSize = entries.reduce((sum, entry) => sum + (entry.size || 0), 0);
          resolve({
            count: entries.length,
            totalSize,
          });
        };

        request.onerror = () => {
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB stats error:', error);
      return { count: 0, totalSize: 0 };
    }
  }

  /**
   * Clean up old entries (optional: implement LRU eviction)
   */
  async cleanup(maxAge: number = 7 * 24 * 60 * 60 * 1000): Promise<number> {
    // maxAge in milliseconds (default: 7 days)
    try {
      const db = await this.init();
      const cutoff = Date.now() - maxAge;
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('timestamp');
        const range = IDBKeyRange.upperBound(cutoff);
        const request = index.openCursor(range);

        let deletedCount = 0;

        request.onsuccess = (event) => {
          const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
          if (cursor) {
            cursor.delete();
            deletedCount++;
            cursor.continue();
          } else {
            resolve(deletedCount);
          }
        };

        request.onerror = () => {
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB cleanup error:', error);
      return 0;
    }
  }

  /**
   * Get materials from IndexedDB cache
   */
  async getMaterials(url: string): Promise<Record<string, undefined> | null> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, _reject) => {
        console.log(_reject);
        
        const transaction = db.transaction([MATERIALS_STORE_NAME], 'readonly');
        const store = transaction.objectStore(MATERIALS_STORE_NAME);
        const request = store.get(url);

        request.onsuccess = () => {
          const entry = request.result as MaterialCacheEntry | undefined;
          if (entry && entry.materials) {
            resolve(entry.materials);
          } else {
            resolve(null);
          }
        };

        request.onerror = () => {
          console.warn('Failed to get materials from IndexedDB:', request.error);
          resolve(null); // Return null on error, don't reject
        };
      });
    } catch (error) {
      console.warn('IndexedDB getMaterials error:', error);
      return null;
    }
  }

  /**
   * Store materials in IndexedDB cache
   */
  async setMaterials(url: string, materials: Record<string, undefined>): Promise<void> {
    try {
      const db = await this.init();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([MATERIALS_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(MATERIALS_STORE_NAME);
        
        const entry: MaterialCacheEntry = {
          url,
          materials,
          timestamp: Date.now(),
        };

        const request = store.put(entry);

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = () => {
          console.warn('Failed to store materials in IndexedDB:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.warn('IndexedDB setMaterials error:', error);
      // Don't throw - allow fallback
    }
  }
}

// Export singleton instance
export const idbStorage = new IndexedDBStorage();

