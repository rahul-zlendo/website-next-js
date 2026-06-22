import 'server-only';
import { toHTML, type PortableTextHtmlComponents } from '@portabletext/to-html';
import { imageUrl } from './image';

function escapeAttr(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Convert a Sanity Portable Text body to an HTML string so it can be rendered
 * by the existing <BlogPostBody> prose component (same styling as Help Center).
 *
 * - `image` blocks resolve to the Sanity CDN (auto format, max 1200px wide).
 * - `link` marks open external URLs in a new tab.
 */
const components: Partial<PortableTextHtmlComponents> = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      const src = imageUrl(value, 1200);
      if (!src) return '';
      const alt = value?.alt ? escapeAttr(value.alt) : '';
      const caption = value?.caption ? `<figcaption>${escapeAttr(value.caption)}</figcaption>` : '';
      return `<figure><img src="${src}" alt="${alt}" loading="lazy" />${caption}</figure>`;
    },
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ children, value }: { children: string; value?: any }) => {
      const href = value?.href || '#';
      const isExternal = /^https?:\/\//.test(href) && !href.includes('zlendorealty.com');
      const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeAttr(href)}"${attrs}>${children}</a>`;
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function portableToHtml(blocks: any[] | null | undefined): string {
  if (!blocks || blocks.length === 0) return '';
  return toHTML(blocks, { components });
}
