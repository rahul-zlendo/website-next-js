/**
 * Performance Monitoring Utility
 * 
 * Helps track and measure caching performance improvements
 */

import * as THREE from 'three';

interface CacheStats {
  indexedDBHits: number;
  serviceWorkerHits: number;
  networkFetches: number;
  totalRequests: number;
  startTime: number;
}
// src/global.d.ts
export {};

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

declare global {
  interface Performance {
    memory?: PerformanceMemory;
  }
}
export {};

declare global {
  interface Window {
    performanceMonitor?: typeof performanceMonitor;
  }
}

class PerformanceMonitor {
  private stats: CacheStats = {
    indexedDBHits: 0,
    serviceWorkerHits: 0,
    networkFetches: 0,
    totalRequests: 0,
    startTime: Date.now()
  };

  /**
   * Record a cache hit from IndexedDB
   */
  recordIndexedDBHit(): void {
    this.stats.indexedDBHits++;
    this.stats.totalRequests++;
  }

  /**
   * Record a cache hit from Service Worker
   */
  recordServiceWorkerHit(): void {
    this.stats.serviceWorkerHits++;
    this.stats.totalRequests++;
  }

  /**
   * Record a network fetch (cache miss)
   */
  recordNetworkFetch(): void {
    this.stats.networkFetches++;
    this.stats.totalRequests++;
  }

  /**
   * Get current cache statistics
   */
  getStats() {
    const hitRate = this.stats.totalRequests > 0
      ? ((this.stats.indexedDBHits + this.stats.serviceWorkerHits) / this.stats.totalRequests * 100)
      : 0;

    return {
      ...this.stats,
      hitRate: `${hitRate.toFixed(2)}%`,
      missRate: `${(100 - hitRate).toFixed(2)}%`,
      indexedDBHitRate: this.stats.totalRequests > 0
        ? `${(this.stats.indexedDBHits / this.stats.totalRequests * 100).toFixed(2)}%`
        : '0%',
      serviceWorkerHitRate: this.stats.totalRequests > 0
        ? `${(this.stats.serviceWorkerHits / this.stats.totalRequests * 100).toFixed(2)}%`
        : '0%',
      uptime: Date.now() - this.stats.startTime
    };
  }

  /**
   * Reset statistics
   */
  reset(): void {
    this.stats = {
      indexedDBHits: 0,
      serviceWorkerHits: 0,
      networkFetches: 0,
      totalRequests: 0,
      startTime: Date.now()
    };
  }

  /**
   * Get memory usage (if available)
   */
getMemoryUsage(): { used: number; total: number; limit: number } | null {
  if (performance.memory) {
    return {
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    };
  }
  return null;
}


  /**
   * Format memory size for display
   */
  formatMemory(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  /**
   * Print performance report to console
   */
  printReport(): void {
    const stats = this.getStats();
    const memory = this.getMemoryUsage();

    console.group('📊 Performance Report');
   ;
    console.table({
      'Total Requests': stats.totalRequests,
      'IndexedDB Hits': `${stats.indexedDBHits} (${stats.indexedDBHitRate})`,
      'Service Worker Hits': `${stats.serviceWorkerHits} (${stats.serviceWorkerHitRate})`,
      'Network Fetches': `${stats.networkFetches} (${stats.missRate})`,
      'Overall Hit Rate': stats.hitRate,
      'Uptime': `${(stats.uptime / 1000).toFixed(2)}s`
    });

    if (memory) {
   
      console.table({
        'Used': this.formatMemory(memory.used),
        'Total': this.formatMemory(memory.total),
        'Limit': this.formatMemory(memory.limit),
        'Usage %': `${((memory.used / memory.limit) * 100).toFixed(2)}%`
      });
    }

    // Check THREE.Cache
    if (typeof THREE !== 'undefined' && THREE.Cache) {
      // const threeCacheSize = Object.keys(THREE.Cache.files || {}).length;

    }

    console.groupEnd();
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Make it available globally for easy console access
if (typeof window !== 'undefined') {
  window.performanceMonitor = performanceMonitor;
}


