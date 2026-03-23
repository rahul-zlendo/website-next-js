import createImageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

/**
 * Utility to build optimised Sanity image URLs.
 * Usage: urlFor(source).width(800).url()
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
