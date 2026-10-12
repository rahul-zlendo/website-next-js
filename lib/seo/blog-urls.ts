/** Pagination values are validated before querying the CMS or rendering links. */
export function parseBlogPage(value: string | string[] | undefined): number | null {
  if (value === undefined) return 1;
  if (typeof value !== 'string' || !/^\d+$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0 ? page : null;
}

export function blogPagePath(page: number): string {
  return page === 1 ? '/blog' : `/blog?page=${page}`;
}

/** Combine legacy archive, regional alias and slash normalization in one hop. */
export function normalizeBlogUrl(input: URL): URL | null {
  if (!/^\/(?:in\/|global\/)?blog(?:\/|$)/.test(input.pathname)) return null;
  const target = new URL(input);
  target.pathname = target.pathname.replace(/^\/(?:in|global)\/blog(?=\/|$)/, '/blog').replace(/\/+$/, '');

  const archive = target.pathname.match(/^\/blog\/page\/(\d+)$/);
  if (archive) {
    const page = parseBlogPage(archive[1]);
    if (page !== null) {
      target.pathname = '/blog';
      target.searchParams.delete('page');
      if (page > 1) target.searchParams.set('page', String(page));
    }
  } else if (target.pathname === '/blog') {
    const values = target.searchParams.getAll('page');
    const page = parseBlogPage(values.length > 1 ? values : values[0]);
    if (page === 1) target.searchParams.delete('page');
    else if (page !== null && values[0] !== String(page)) target.searchParams.set('page', String(page));
  }

  return target.href === input.href ? null : target;
}

/** Normalize only known public blog equivalents; keep unrelated links intact. */
export function normalizeBlogLink(href: string): string {
  try {
    const relative = href.startsWith('/') && !href.startsWith('//');
    if (!relative && !/^https?:\/\/|^\/\//i.test(href)) return href;
    const input = new URL(href, 'https://zlendorealty.com');
    if (input.hostname !== 'zlendorealty.com') return href;
    if (!/^\/(?:in\/|global\/)?blog(?:\/|$)/.test(input.pathname)) return href;
    const target = normalizeBlogUrl(input) || input;
    target.protocol = 'https:';
    return relative ? `${target.pathname}${target.search}${target.hash}` : target.href;
  } catch {
    return href;
  }
}
