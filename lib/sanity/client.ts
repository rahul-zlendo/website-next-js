import 'server-only';

import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cvwqqd27';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

/**
 * Public read-only client — uses CDN, no token.
 * Used for production SSG fetches.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/**
 * Server-side read client with a viewer token.
 * This project's public dataset only exposes the known page singletons to
 * anonymous reads, so blog content (post / author / category) requires a token.
 * Safe for published content and CDN-cached. Use this for blog/news fetches.
 */
export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

/**
 * Preview / draft-mode client — bypasses CDN, uses read token.
 * Used inside Next.js Draft Mode to show unpublished changes.
 */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
});

/**
 * Returns the correct Sanity client based on whether preview/draft mode is active.
 */
export function getClient(preview = false) {
  return preview ? previewClient : client;
}
