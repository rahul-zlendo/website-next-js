/**
 * One-off content fix for issues found in a Screaming-Frog-style crawl export:
 *
 * 1. Malformed internal links — WP-era body links written as
 *    "zlendorealty.com/in" + "products/X" concatenated with no separating
 *    slash (e.g. /inproducts/vastu, /inbusiness#demo-form). All 404. Rewrite
 *    to the correct /in/products/X, /in/business, /in/viewalltemplates.
 *
 * 2. One dead external citation (energy.gov, confirmed 404 on re-check, not
 *    a transient error) — unlinked rather than replaced with an unverified
 *    guessed URL. Text stays, the link is removed.
 *
 * Home Depot's 403 is NOT fixed here — verified live, it's the retailer's
 * own bot-blocking WAF (real browser users load it fine), not a broken link.
 *
 * Run: node --env-file=../../.env.local fix-broken-links.mjs [--write]
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

function fixHref(href) {
  if (typeof href !== 'string') return null;
  // /inproducts/X -> /in/products/X, /inbusiness -> /in/business, /inviewalltemplates -> /in/viewalltemplates
  const m = href.match(/^(https:\/\/zlendorealty\.com)\/in(products\/[a-z0-9-]+|business|viewalltemplates)(.*)$/);
  if (!m) return null;
  return `${m[1]}/in/${m[2]}${m[3]}`;
}

const DEAD_EXTERNAL_LINKS = new Set(['https://www.energy.gov/energysaver/windows-doors-and-skylights']);

async function main() {
  const posts = await client.fetch('*[_type=="post"]{ _id, slug, body }');
  const tx = client.transaction();
  let changedPosts = 0;
  let internalFixCount = 0;
  let unlinkedCount = 0;

  for (const post of posts) {
    let postChanged = false;
    const newBody = (post.body || []).map((block) => {
      if (!block.markDefs?.length) return block;
      const removedKeys = new Set();
      const newDefs = [];
      for (const md of block.markDefs) {
        if (md._type !== 'link') { newDefs.push(md); continue; }
        const fixed = fixHref(md.href);
        if (fixed) {
          console.log(`  [internal fix] ${post.slug.current}: ${md.href} -> ${fixed}`);
          newDefs.push({ ...md, href: fixed });
          internalFixCount++;
          postChanged = true;
        } else if (DEAD_EXTERNAL_LINKS.has(md.href)) {
          console.log(`  [unlink dead external] ${post.slug.current}: ${md.href}`);
          removedKeys.add(md._key);
          unlinkedCount++;
          postChanged = true;
          // markDef dropped (not pushed to newDefs)
        } else {
          newDefs.push(md);
        }
      }
      if (removedKeys.size === 0) {
        return { ...block, markDefs: newDefs };
      }
      // Strip the removed mark key from any span that referenced it, so the
      // text survives as plain text instead of a dangling mark reference.
      const newChildren = (block.children || []).map((child) => {
        if (!child.marks?.some((m) => removedKeys.has(m))) return child;
        return { ...child, marks: child.marks.filter((m) => !removedKeys.has(m)) };
      });
      return { ...block, markDefs: newDefs, children: newChildren };
    });

    if (postChanged) {
      changedPosts++;
      if (WRITE) tx.patch(post._id, (p) => p.set({ body: newBody }));
    }
  }

  console.log(`\n${internalFixCount} internal links fixed, ${unlinkedCount} dead external link(s) unlinked, across ${changedPosts} posts ${WRITE ? '(patched)' : '(dry-run)'}.`);

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
