/**
 * One-off content fix: rewrite in-body links that still point at the old
 * WordPress domain (blog.zlendorealty.com) to the migrated main-domain blog
 * (zlendorealty.com/blog/<slug>).
 *
 * These links come from the WP import — internal cross-links between posts.
 * Cloudflare already 301s them, but pointing directly at the final URL removes
 * the redirect hop and the stale domain reference.
 *
 * Mapping:
 *   https://blog.zlendorealty.com/<slug>/  -> https://zlendorealty.com/blog/<slug>   (if <slug> is a real post)
 *   https://blog.zlendorealty.com/<slug>/  -> https://zlendorealty.com/blog          (if <slug> is not a real post — dead link)
 *   https://blog.zlendorealty.com/         -> https://zlendorealty.com/blog          (root)
 *
 * Run: node --env-file=../../.env.local fix-blog-links.mjs [--write]
 * Dry-run (no --write) prints what would change without touching Sanity.
 */
import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID || 'cvwqqd27';
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const readToken = process.env.SANITY_API_READ_TOKEN;
const WRITE = process.argv.includes('--write');

if (WRITE && !token) {
  console.error('ERROR: --write needs SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token: token || readToken,
  useCdn: false,
});

const NEW_BASE = 'https://zlendorealty.com/blog';

function rewriteHref(href, existingSlugs) {
  if (typeof href !== 'string' || !href.includes('blog.zlendorealty.com')) return null;
  let u;
  try {
    u = new URL(href);
  } catch {
    return null;
  }
  const seg = u.pathname.split('/').filter(Boolean)[0];
  const hash = u.hash || '';
  if (!seg) return `${NEW_BASE}${hash}`; // root
  if (existingSlugs.has(seg)) return `${NEW_BASE}/${seg}${hash}`;
  return `${NEW_BASE}${hash}`; // dead slug -> listing root
}

async function main() {
  const posts = await client.fetch('*[_type=="post"]{ _id, "slug": slug.current, title, body }');
  const existingSlugs = new Set(posts.map((p) => p.slug));

  const tx = client.transaction();
  let changedPosts = 0;
  let changedLinks = 0;

  for (const post of posts) {
    let postChanged = false;
    const newBody = (post.body || []).map((block) => {
      if (!block.markDefs?.length) return block;
      const newDefs = block.markDefs.map((md) => {
        if (md._type !== 'link') return md;
        const rewritten = rewriteHref(md.href, existingSlugs);
        if (rewritten && rewritten !== md.href) {
          postChanged = true;
          changedLinks++;
          return { ...md, href: rewritten };
        }
        return md;
      });
      return { ...block, markDefs: newDefs };
    });

    if (postChanged) {
      changedPosts++;
      console.log(`  ${post.slug}`);
      if (WRITE) tx.patch(post._id, (p) => p.set({ body: newBody }));
    }
  }

  console.log(`\n${changedLinks} links across ${changedPosts} posts ${WRITE ? 'patched' : 'would be patched (dry-run)'}.`);

  if (WRITE) {
    const result = await tx.commit();
    console.log('Committed:', result.results.length, 'documents updated.');
  } else {
    console.log('Dry-run only — pass --write to apply.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
