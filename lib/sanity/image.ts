import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cvwqqd27',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
});

/**
 * Utility to build optimised Sanity image URLs.
 * Works with Sanity image objects, asset references, and fallback strings.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  // 1. Handle null/undefined
  if (!source) {
    return { url: () => '', toString: () => '' };
  }

  // 2. Handle plain strings (already a URL or relative path)
  if (typeof source === 'string') {
    return { url: () => source, toString: () => source };
  }

  // 3. Handle Sanity image objects
  // Must look like an image object ({ asset: ... } or { _ref: ... } or { _type: 'image' })
  const isImageObject = 
    (typeof source === 'object' && source !== null) && 
    (source.asset || source._ref || (source._type === 'image' && source.asset));

  if (isImageObject) {
    try {
      const b = builder.image(source).auto('format').fit('max');
      return b;
    } catch (e) {
      console.error('Sanity Image Builder error:', e);
    }
  }

  // 4. Default fallback for everything else
  return { url: () => '', toString: () => '' };
}
