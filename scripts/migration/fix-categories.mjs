/**
 * One-off content fix (not part of the WP importer):
 * 1. Strip the "move-to-news" WordPress workflow tag (category.wp.31) from the
 *    9 posts that still carry it — it's an internal editorial flag, not a
 *    real content category, and leaks into the public category badge for 2
 *    of them.
 * 2. Assign a real category to the 16 posts that only had "Uncategorized"
 *    (category.wp.1) — mapped from the post title/topic.
 *
 * Run: node --env-file=../../.env.local fix-categories.mjs [--write]
 * Dry-run (no --write) just prints what would change.
 */
import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID || 'cvwqqd27';
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const WRITE = process.argv.includes('--write');

if (WRITE && !token) {
  console.error('ERROR: --write needs SANITY_API_WRITE_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

const MOVE_TO_NEWS_SLUGS = [
  'ground-floor-house-plan-smart-design',
  'single-brick-wall-thickness-standard-size',
  'baffle-walls-in-septic-tanks-what-they-are',
  'poster-tape-for-walls-the-best-way',
  'wall-hanging-crafts-for-school-projects',
  'south-west-kitchen-vastu-practical-guide',
  '2000-sq-ft-home-for-the-middle-class',
  'ai-property-valuation-instant-cost-estimates',
  '3d-design-software',
];

const UNCATEGORIZED_FIXES = {
  'high-rise-residential-building-design': 'category.wp.12', // Architecture
  'kitchen-and-bathroom-fittings-india': 'category.wp.16', // Interior and Home design
  'ai-home-design-software': 'category.wp.29', // Zlendo Realty
  'multi-floor-house-design': 'category.wp.12', // Architecture
  'top-cement-brands-in-india': 'category.wp.17', // Construction
  'ai-architecture-design-software-home-design': 'category.wp.12', // Architecture
  'interior-exterior-waterproof-paint-guide': 'category.wp.15', // Decor
  'hyper-realistic-8k-walkthroughs': 'category.wp.30', // Renders
  'sell-homes-faster-3d-interior-design-library': 'category.wp.2', // 3D Design & Visualization
  'tmt-bar-sizes-india': 'category.wp.17', // Construction
  'zlendo-realty-ai-partnership': 'category.wp.29', // Zlendo Realty
  'calming-green-bedroom-design-ideas': 'category.wp.15', // Decor
  'second-floor-elevation-designs': 'category.wp.12', // Architecture
  'sofa-colour-ideas-for-a-stylish-room': 'category.wp.15', // Decor
  'bathroom-doors-design-latest-trends': 'category.wp.16', // Interior and Home design
  'l-type-kitchen-design-a-smart-efficient': 'category.wp.16', // Interior and Home design
  // Second batch (posts imported after the original migration snapshot)
  'high-paying-draftsman-jobs-2026-ai-design': 'category.wp.29', // Zlendo Realty
  'build-house-in-india-from-abroad-nri-guide': 'category.wp.17', // Construction
  '1500-sq-ft-house-construction-cost-india': 'category.wp.4', // property cost estimation
  'best-interior-design-software-for-beginners': 'category.wp.29', // Zlendo Realty
  'vastu-for-house-entrance-best-direction-mistakes': 'category.wp.11', // Vasthu and Spiritual Guide
  'ai-house-design-vs-traditional-architecture-2026': 'category.wp.12', // Architecture
};

function randomKey() {
  return Math.random().toString(36).slice(2, 10);
}

async function main() {
  const tx = client.transaction();
  let changeCount = 0;

  // 1. Strip move-to-news
  for (const slug of MOVE_TO_NEWS_SLUGS) {
    const post = await client.fetch('*[_type == "post" && slug.current == $slug][0]{ _id, title, categories }', { slug });
    if (!post) { console.warn('NOT FOUND:', slug); continue; }
    const before = post.categories || [];
    const after = before.filter((c) => c._ref !== 'category.wp.31');
    console.log(`[move-to-news strip] ${slug}: ${before.length} -> ${after.length} categories`);
    if (WRITE) tx.patch(post._id, (p) => p.set({ categories: after }));
    changeCount++;
  }

  // 2. Fix Uncategorized posts
  for (const [slug, categoryId] of Object.entries(UNCATEGORIZED_FIXES)) {
    const post = await client.fetch('*[_type == "post" && slug.current == $slug][0]{ _id, title, categories }', { slug });
    if (!post) { console.warn('NOT FOUND:', slug); continue; }
    const newCategories = [{ _type: 'reference', _ref: categoryId, _key: randomKey() }];
    console.log(`[uncategorized fix] ${slug} -> ${categoryId}`);
    if (WRITE) tx.patch(post._id, (p) => p.set({ categories: newCategories }));
    changeCount++;
  }

  console.log(`\n${changeCount} documents ${WRITE ? 'patched' : 'would be patched (dry-run)'}.`);

  if (WRITE) {
    const result = await tx.commit();
    console.log('Committed. Transaction result:', JSON.stringify(result).slice(0, 200));
  } else {
    console.log('Dry-run only — pass --write to apply.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
