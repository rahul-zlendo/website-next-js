'use client';

import { useCallback } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

/** Rendered only on localhost blog pages for repeatable interaction checks. */
export default function BlogPerformanceProbe() {
  const report = useCallback((metric: { name: string; value: number; id: string }) => {
    console.info('[blog-vitals]', JSON.stringify({ name: metric.name, value: metric.value, id: metric.id }));
  }, []);
  useReportWebVitals(report);
  return null;
}
