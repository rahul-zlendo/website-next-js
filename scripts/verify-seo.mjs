import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

function loadTypeScript(file) {
  const { outputText } = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const module = { exports: {} };
  new Function('module', 'exports', outputText)(module, module.exports);
  return module.exports;
}

const { createPageMetadata } = loadTypeScript('lib/seo/metadata.ts');
const { correctLegacyProductCopy } = loadTypeScript('lib/seo/product-copy.ts');
for (const route of ['/in', '/in/products/room-styler', '/industries/architecture', '/interiors']) {
  const metadata = createPageMetadata({ title: 'Example | Zlendo Realty', description: 'An editorial description.', path: route });
  assert.equal(metadata.description, 'An editorial description.');
  assert.equal(metadata.alternates.canonical, `https://zlendorealty.com${route}`);
  assert.equal(metadata.openGraph.locale, route === '/in' || route.startsWith('/in/') ? 'en_IN' : 'en_US');
  const segment = route.replace(/^\/in(?=\/|$)/, '');
  assert.equal(metadata.alternates.languages.en, `https://zlendorealty.com${segment}`);
}
assert.equal(correctLegacyProductCopy(null), undefined);
assert.equal(correctLegacyProductCopy('AI-Powered Interior Styling test'), 'AI-Powered Interior Styling');
assert.equal(correctLegacyProductCopy('New editor-approved copy'), 'New editor-approved copy');
const config = loadTypeScript('next.config.ts').default;
const redirects = await config.redirects();
assert.equal(redirects.length, 9);
assert.ok(redirects.every(rule => rule.permanent && rule.source !== rule.destination));
console.log('Metadata, locale-prefix, CMS-copy and redirect checks passed.');

const origin = process.argv[2];
if (!origin) process.exit(0);
const productionOrigin = 'https://zlendorealty.com';
const productSegments = ['smart-wizard', 'floor-planner', '2d-to-3d', 'room-styler'];
const routes = ['/', '/in', ...productSegments.flatMap(slug => [`/products/${slug}`, `/in/products/${slug}`]), '/products', '/solutions/ai-home-design-for-homeowners'];
const pairedRoutes = new Set(routes.slice(0, 10));
if (process.argv.includes('--all')) {
  for (const sitemap of ['sitemap-global.xml', 'sitemap-india.xml']) {
    const response = await fetch(`${origin}/${sitemap}`, { signal: AbortSignal.timeout(45000) });
    assert.equal(response.status, 200, `Sitemap ${sitemap}`);
    for (const [, location] of (await response.text()).matchAll(/<loc>([^<]*)<\/loc>/g)) {
      const url = new URL(location);
      if (url.search || url.pathname.startsWith('/blog')) continue;
      if (!routes.includes(url.pathname)) routes.push(url.pathname);
    }
  }
}
const results = [];
async function checkPage(route) {
  const response = await fetch(`${origin}${route}`, { redirect: 'manual', signal: AbortSignal.timeout(90000) });
  const html = await response.text();
  const tags = [...html.matchAll(/<link\b[^>]*>/g)].map(match => match[0]);
  const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
  const canonicals = tags.filter(tag => attribute(tag, 'rel') === 'canonical').map(tag => attribute(tag, 'href'));
  const expected = `${productionOrigin}${route === '/' ? '' : route}`;
  const alternates = Object.fromEntries(tags.filter(tag => attribute(tag, 'hreflang')).map(tag => [attribute(tag, 'hreflang'), attribute(tag, 'href')]));
  const errors = [];
  // Next.js serializes CMS props in RSC script payloads; those aren't visible copy.
  const visibleHtml = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  if (response.status !== 200) errors.push(`HTTP ${response.status}`);
  if (/\bnoindex\b/i.test(response.headers.get('x-robots-tag') || '')) errors.push('Unexpected noindex response header');
  if (canonicals.length !== 1 || canonicals[0] !== expected) errors.push(`Canonical: ${JSON.stringify(canonicals)}`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push('Missing title');
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push('Expected one H1');
  if (/<meta\b[^>]*name="(?:robots|googlebot)"[^>]*content="[^"]*noindex/i.test(html)) errors.push('Unexpected noindex');
  if (/Zlendo Portal|AI-Powered Interior Styling test|99\.8% Accuracy/.test(visibleHtml)) errors.push('Uncorrected legacy copy');
  if (route === '/in/products/2d-to-3d' && /DWG\/PDF Import|99% accuracy/.test(visibleHtml)) errors.push('Contradictory converter claims');
  if (route === '/products' && /href="\/products\/(?:ai-floor-planner|2d-to-3d-converter|smart-room-styler)"/.test(html)) errors.push('Broken hub link');
  if (pairedRoutes.has(route)) {
    const segment = route.replace(/^\/in(?=\/|$)/, '').replace(/^\/$/, '');
    const expectedAlternates = { en: `${productionOrigin}${segment}`, 'en-IN': `${productionOrigin}/in${segment}`, 'x-default': `${productionOrigin}${segment}` };
    if (JSON.stringify(Object.entries(alternates).sort()) !== JSON.stringify(Object.entries(expectedAlternates).sort())) errors.push('Incorrect reciprocal locale alternates');
  } else if (['/products', '/solutions/ai-home-design-for-homeowners'].includes(route) && alternates['en-IN']) errors.push('Global-only page advertises an India counterpart');
  const result = { route, status: response.status, title: html.match(/<title>([^<]*)<\/title>/)?.[1], canonicals, alternates, errors };
  results.push(result);
  console.log(`${errors.length ? 'FAIL' : 'PASS'} ${route}${errors.length ? ': ' + errors.join('; ') : ''}`);
}
for (const route of routes) {
  try { await checkPage(route); }
  catch (error) { results.push({ route, errors: [error.message] }); console.log(`FAIL ${route}: ${error.message}`); }
}
for (const rule of redirects) {
  const response = await fetch(`${origin}${rule.source}?seo_check=1`, { redirect: 'manual', signal: AbortSignal.timeout(90000) });
  const location = response.headers.get('location');
  const target = location ? new URL(location, origin) : null;
  const errors = [];
  if (![301, 308].includes(response.status)) errors.push(`Expected permanent redirect, got ${response.status}`);
  if (target?.pathname !== rule.destination || target?.searchParams.get('seo_check') !== '1') errors.push(`Unexpected destination: ${location}`);
  const result = { route: rule.source, status: response.status, location, errors };
  results.push(result);
  console.log(`${errors.length ? 'FAIL' : 'PASS'} ${rule.source}`);
}
const artifactDirectory = path.resolve('artifacts/seo-2026-10-04');
fs.mkdirSync(artifactDirectory, { recursive: true });
fs.writeFileSync(path.join(artifactDirectory, 'verification.json'), JSON.stringify({ checkedAt: new Date().toISOString(), origin, results }, null, 2));
if (results.some(result => result.errors.length)) process.exitCode = 1;
