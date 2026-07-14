/**
 * WordPress → Sanity importer (one-off migration).
 *
 * Pulls posts from a WordPress REST API (blog./news.zlendorealty.com) and maps
 * them to the `post` schema. Idempotent: deterministic _ids + createOrReplace,
 * so re-runs update in place. Slugs are preserved EXACTLY so the Phase-4 301
 * redirect map (old WP URL -> /blog/<slug>) is 1:1 and rankings are kept.
 *
 * Usage (run from this folder):
 *   node --env-file=../../.env.local import-wp-to-sanity.mjs --section blog --limit 3            # dry-run (no token, writes preview JSON)
 *   node --env-file=../../.env.local import-wp-to-sanity.mjs --section blog --limit 5 --write    # live, small batch
 *   node --env-file=../../.env.local import-wp-to-sanity.mjs --section blog --write              # live, all posts
 *
 * --write requires SANITY_API_WRITE_TOKEN (Editor) in .env.local.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { htmlToBlocks, randomKey } from '@portabletext/block-tools';
import { compileSchema, defineSchema } from '@portabletext/schema';
import { JSDOM } from 'jsdom';

// ── args ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const getArg = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : def;
};
const SECTION = getArg('section', 'blog'); // 'blog' | 'news'
const SOURCE = getArg('source', SECTION === 'news' ? 'news.zlendorealty.com' : 'blog.zlendorealty.com');
const LIMIT = parseInt(getArg('limit', '0'), 10) || 0; // 0 = all
const WRITE = args.includes('--write');
// --slugs a,b,c restricts processing to exactly these WP slugs, regardless of
// --limit/pagination. Use this to backfill specific new posts without
// re-touching (and reverting any manual fixes on) everything already imported.
const SLUGS_FILTER = getArg('slugs', '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const SLUGS_SET = SLUGS_FILTER.length ? new Set(SLUGS_FILTER) : null;

const __dirname = dirname(fileURLToPath(import.meta.url));
const PREVIEW_DIR = join(__dirname, '.preview', SECTION);

// ── sanity client ───────────────────────────────────────────────────────────
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cvwqqd27';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (WRITE && !token) {
  console.error('ERROR: --write needs SANITY_API_WRITE_TOKEN in .env.local (Editor permission).');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

// ── http helpers (browser-ish headers to get past the WP WAF that 406s bots) ─
const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  Accept: 'text/html,application/json,application/xhtml+xml,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

async function wpFetchJson(url) {
  const res = await fetch(url, { headers: BROWSER_HEADERS });
  if (!res.ok) throw new Error(`WP ${res.status} for ${url}`);
  return { data: await res.json(), totalPages: parseInt(res.headers.get('x-wp-totalpages') || '1', 10) };
}

// ── html helpers via a shared JSDOM ──────────────────────────────────────────
const decoder = new JSDOM('').window.document;
function decodeEntities(html = '') {
  const el = decoder.createElement('textarea');
  el.innerHTML = html;
  return el.value.trim();
}
function stripHtml(html = '') {
  return new JSDOM(`<body>${html}</body>`).window.document.body.textContent.replace(/\s+/g, ' ').trim();
}

// ── portable text: compiled schema describing the body block array ───────────
const blockSchema = compileSchema(
  defineSchema({
    decorators: [{ name: 'strong' }, { name: 'em' }, { name: 'underline' }, { name: 'code' }, { name: 'strike-through' }],
    annotations: [{ name: 'link' }],
    styles: [
      { name: 'normal' },
      { name: 'h2' },
      { name: 'h3' },
      { name: 'h4' },
      { name: 'blockquote' },
    ],
    lists: [{ name: 'bullet' }, { name: 'number' }],
    inlineObjects: [],
    blockObjects: [{ name: 'image' }, { name: 'table' }],
  }),
);

// Turn <img> into an image block carrying the original src; the live pass
// uploads it and swaps in a Sanity asset reference (see resolveImages).
const imageRule = {
  deserialize(el, _next, _createBlock) {
    if (el.nodeName !== 'IMG') return undefined;
    const src = el.getAttribute('src');
    if (!src) return undefined;
    return {
      _type: 'image',
      _key: randomKey(12),
      _originalSrc: src,
      ...(el.getAttribute('alt') ? { alt: el.getAttribute('alt') } : {}),
    };
  },
};

// Turn <table> into a `table` block (rows of string cells). Without this,
// htmlToBlocks flattens table text into line-by-line paragraphs.
const tableRule = {
  deserialize(el, _next, _createBlock) {
    if (el.nodeName !== 'TABLE') return undefined;
    const trs = Array.from(el.querySelectorAll('tr'));
    const rows = [];
    for (const tr of trs) {
      const cells = Array.from(tr.querySelectorAll('th,td')).map((c) =>
        (c.textContent || '').replace(/\s+/g, ' ').trim(),
      );
      if (cells.length) rows.push({ _type: 'tableRow', _key: randomKey(12), cells });
    }
    if (!rows.length) return undefined;
    // WP content tables mark the header row with either <th> or a styled first
    // <td> row. Treat any multi-row table's first row as a header (editable in
    // Studio via the hasHeaderRow toggle for the rare exception).
    const hasHeaderRow = trs[0]?.querySelector('th') != null || rows.length > 1;
    return {
      _type: 'table',
      _key: randomKey(12),
      rows,
      hasHeaderRow,
    };
  },
};

function toPortableText(html) {
  return htmlToBlocks(html || '', blockSchema, {
    parseHtml: (h) => new JSDOM(h).window.document,
    rules: [tableRule, imageRule],
  });
}

// ── image upload (cached + content-addressed by Sanity) ──────────────────────
const assetCache = new Map(); // src -> asset _id
async function uploadImage(src) {
  if (!src) return null;
  if (assetCache.has(src)) return assetCache.get(src);
  const res = await fetch(src, { headers: BROWSER_HEADERS });
  if (!res.ok) {
    console.warn(`  ! image ${res.status}: ${src}`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const filename = decodeURIComponent(src.split('/').pop().split('?')[0]) || 'image';
  const asset = await client.assets.upload('image', buf, { filename });
  assetCache.set(src, asset._id);
  return asset._id;
}

// Replace _originalSrc placeholders in body image blocks with real asset refs.
async function resolveImages(blocks) {
  for (const block of blocks) {
    if (block?._type === 'image' && block._originalSrc) {
      const assetId = await uploadImage(block._originalSrc);
      if (assetId) block.asset = { _type: 'reference', _ref: assetId };
      delete block._originalSrc;
    }
  }
  // Drop image blocks whose upload failed (no asset) to keep docs valid.
  return blocks.filter((b) => !(b?._type === 'image' && !b.asset));
}

// ── upserts for taxonomy + authors ───────────────────────────────────────────
const upserted = new Set();
async function upsertAuthor(wpAuthor) {
  if (!wpAuthor?.id) return null;
  const _id = `author.wp.${wpAuthor.id}`;
  if (WRITE && !upserted.has(_id)) {
    await client.createIfNotExists({
      _id,
      _type: 'author',
      name: wpAuthor.name || 'Zlendo Realty',
      slug: { _type: 'slug', current: wpAuthor.slug || `author-${wpAuthor.id}` },
      ...(wpAuthor.description ? { bio: stripHtml(wpAuthor.description) } : {}),
    });
    upserted.add(_id);
  }
  return { _type: 'reference', _ref: _id };
}
async function upsertCategory(term) {
  const _id = `category.wp.${term.id}`;
  if (WRITE && !upserted.has(_id)) {
    await client.createIfNotExists({
      _id,
      _type: 'category',
      title: decodeEntities(term.name),
      slug: { _type: 'slug', current: term.slug },
      wpId: term.id,
    });
    upserted.add(_id);
  }
  return { _type: 'reference', _ref: _id, _key: randomKey(8) };
}

// ── map one WP post -> Sanity post doc ───────────────────────────────────────
async function mapPost(wp) {
  const emb = wp._embedded || {};
  const featured = emb['wp:featuredmedia']?.[0];
  const terms = (emb['wp:term'] || []).flat().filter((t) => t?.taxonomy === 'category');
  const yoast = wp.yoast_head_json || {};

  // Body
  let body = toPortableText(wp.content?.rendered || '');
  if (WRITE) body = await resolveImages(body);

  // Featured image
  let mainImage;
  if (featured?.source_url) {
    if (WRITE) {
      const assetId = await uploadImage(featured.source_url);
      if (assetId) mainImage = { _type: 'image', asset: { _type: 'reference', _ref: assetId }, ...(featured.alt_text ? { alt: featured.alt_text } : {}) };
    } else {
      mainImage = { _type: 'image', _originalSrc: featured.source_url, ...(featured.alt_text ? { alt: featured.alt_text } : {}) };
    }
  }

  const author = await upsertAuthor(emb.author?.[0]);
  const categories = [];
  for (const t of terms) categories.push(await upsertCategory(t));

  return {
    _id: `post.${SECTION}.${wp.id}`,
    _type: 'post',
    section: SECTION,
    title: decodeEntities(wp.title?.rendered || ''),
    slug: { _type: 'slug', current: wp.slug },
    excerpt: stripHtml(wp.excerpt?.rendered || '').slice(0, 300) || undefined,
    publishedAt: new Date(wp.date_gmt + 'Z').toISOString(),
    updatedAt: new Date(wp.modified_gmt + 'Z').toISOString(),
    originalUrl: wp.link,
    wpId: wp.id,
    ...(author ? { author } : {}),
    ...(categories.length ? { categories } : {}),
    ...(mainImage ? { mainImage } : {}),
    ...(yoast.title ? { seoTitle: yoast.title } : {}),
    ...(yoast.description ? { seoDescription: yoast.description } : {}),
    ...(yoast.og_title ? { ogTitle: yoast.og_title } : {}),
    ...(yoast.og_description ? { ogDescription: yoast.og_description } : {}),
    body,
  };
}

// ── main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(
    `\n${WRITE ? '🚀 LIVE IMPORT' : '🧪 DRY-RUN (no Sanity writes)'} — section="${SECTION}" source="${SOURCE}" ` +
      `dataset="${dataset}"${LIMIT ? ` limit=${LIMIT}` : ' (all)'}\n`,
  );

  if (!WRITE) await mkdir(PREVIEW_DIR, { recursive: true });

  let page = 1;
  let count = 0;
  let totalPages = 1;
  const perPage = LIMIT && LIMIT < 100 ? LIMIT : 100;

  do {
    const url = `https://${SOURCE}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`;
    const { data: posts, totalPages: tp } = await wpFetchJson(url);
    totalPages = tp;
    for (const wp of posts) {
      if (SLUGS_SET && !SLUGS_SET.has(wp.slug)) continue;
      const doc = await mapPost(wp);
      if (WRITE) {
        await client.createOrReplace(doc);
        console.log(`  ✓ ${doc.slug.current}  (${doc.body.length} blocks)`);
      } else {
        await writeFile(join(PREVIEW_DIR, `${doc.slug.current || doc.wpId}.json`), JSON.stringify(doc, null, 2));
        const imgs = doc.body.filter((b) => b._type === 'image').length;
        console.log(`  • ${doc.slug.current}  — ${doc.body.length} blocks, ${imgs} inline img, mainImage:${doc.mainImage ? 'y' : 'n'}, cats:${doc.categories?.length || 0}`);
      }
      count++;
      if (LIMIT && count >= LIMIT) break;
    }
    if (LIMIT && count >= LIMIT) break;
    page++;
  } while (page <= totalPages);

  console.log(
    `\n${WRITE ? 'Imported' : 'Previewed'} ${count} post(s).` +
      (WRITE ? '' : `\nPreview JSON written to: ${PREVIEW_DIR}`) +
      '\n',
  );
}

main().catch((err) => {
  console.error('\nIMPORT FAILED:', err.message);
  process.exit(1);
});
