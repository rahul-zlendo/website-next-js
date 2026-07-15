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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderLink(href: string, text: string, extraClass = ''): string {
  const isExternal = /^https?:\/\//.test(href) && !href.includes('zlendorealty.com');
  const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
  const cls = extraClass ? ` class="${extraClass}"` : '';
  return `<a href="${escapeAttr(href)}"${attrs}${cls}>${text}</a>`;
}

/**
 * Some migrated WordPress posts end with a "Try Now / Get Demo" CTA widget
 * that, after HTML->Portable Text conversion, degrades to a plain block of
 * bare linked text (styling/button markup doesn't survive the conversion).
 * Detect that specific shape here -- a short block where every non-blank
 * span is link-marked -- and render it as styled buttons instead of prose.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderIfCtaRow(value: any): string | null {
  const children = value?.children || [];
  const markDefs = value?.markDefs || [];
  const textSpans = children.filter((c: any) => c.text?.trim());
  if (textSpans.length < 2) return null;

  const totalText = textSpans.map((c: any) => c.text).join('');
  if (totalText.length > 60) return null; // too long to be a button label row

  const links = textSpans.map((c: any) => {
    const linkMarkKey = (c.marks || []).find((m: string) =>
      markDefs.some((d: any) => d._key === m && d._type === 'link'),
    );
    const def = linkMarkKey && markDefs.find((d: any) => d._key === linkMarkKey);
    return def ? { href: def.href, text: c.text.trim() } : null;
  });

  if (links.some((l) => !l)) return null; // every span must be a link

  const buttons = links
    .map((l, i) => renderLink(l!.href, l!.text, i === 0 ? 'blog-cta-btn blog-cta-btn-primary' : 'blog-cta-btn blog-cta-btn-secondary'))
    .join('');
  return `<div class="blog-cta-row">${buttons}</div>`;
}

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    youtube: ({ value }: { value: any }) => {
      const url = value?.url;
      if (!url) return '';

      let embedUrl = escapeAttr(url);
      try {
        if (url.includes('youtube.com/watch?v=')) {
          const videoId = new URL(url).searchParams.get('v');
          if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtu.be/')) {
          const videoId = url.split('youtu.be/')[1].split('?')[0];
          if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
      } catch (e) {
        // ignore URL parsing errors
      }

      return `<div style="aspect-ratio: 16/9;" class="my-8 w-full"><iframe src="${embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="w-full h-full rounded-xl shadow-lg border border-slate-100"></iframe></div>`;
    },
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children, value }: { children?: string; value?: any }) => {
      const cta = renderIfCtaRow(value);
      return cta ?? `<p>${children ?? ''}</p>`;
    },
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ children, value }: { children: string; value?: any }) => renderLink(value?.href || '#', children),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function portableToHtml(blocks: any[] | null | undefined): string {
  if (!blocks || blocks.length === 0) return '';
  return toHTML(blocks, { components });
}
