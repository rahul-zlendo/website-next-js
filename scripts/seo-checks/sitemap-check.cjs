const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

// Exercise the production sitemap with representative upstream data, without
// credentials or live API dependencies. Invalid dates must never look fresh.
const content = [
  { path: '', updatedAt: '2026-10-08T10:00:00Z' },
  { path: '/products/floor-planner', updatedAt: '2026-10-08T12:00:00Z' },
  { path: '/products/2d-to-3d', updatedAt: '2026-10-08T11:00:00Z' },
  { path: '/products/room-styler', updatedAt: 'not-a-date' },
];
const posts = [
  { slug: 'valid-post', updatedAt: '2026-10-01', publishedAt: '2026-09-01' },
  { slug: 'missing-date' },
  { slug: 'future-date', updatedAt: '2099-01-01' },
];
let failCMS = false;
const source = ts.transpileModule(fs.readFileSync('lib/seo/sitemap-core.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const sandbox = {
  exports: {}, console: { error() {} }, Date,
  fetch: async () => ({ ok: true, json: async () => ({ templateList: [
    { template_Id: 1, updatedOn: '2026-09-20' }, { template_Id: 2 },
  ] }) }),
  require: (name) => {
    if (name.endsWith('/sanity/client')) return { readClient: { fetch: async (query) => {
      if (failCMS) throw new Error('CMS unavailable');
      return query === 'blog-query' ? posts : content;
    } } };
    if (name.endsWith('/sanity/queries')) return { blogPostsSitemapQuery: 'blog-query' };
    if (name.endsWith('/config/env')) return { API_BASE_URL: 'https://example.invalid', DEFAULT_API_TOKEN: '' };
    if (name.endsWith('/utils/encryptionUtils')) return { encryptProjectId: (id) => `template-${id}` };
    throw new Error(`Unexpected import: ${name}`);
  },
};
vm.runInNewContext(source, sandbox);
const { getSitemapData, generateSitemapXML } = sandbox.exports;

(async () => {
  const india = await getSitemapData('india');
  const global = await getSitemapData('global');
  const byURL = (items, url) => items.find((item) => item.url === `https://zlendorealty.com${url}`);
  assert.equal(byURL(india, '/in/products/2d-to-3d').lastModified.toISOString(), '2026-10-08T11:00:00.000Z');
  assert.equal(byURL(india, '/in/products/floor-planner').lastModified.toISOString(), '2026-10-09T00:00:00.000Z');
  assert.equal(byURL(global, '').lastModified.toISOString(), '2026-10-08T10:00:00.000Z');
  assert.equal(byURL(india, '/in/products/room-styler').lastModified, undefined);
  assert.equal(byURL(global, '/viewalltemplates').lastModified, undefined);
  assert.equal(byURL(global, '/blog/future-date').lastModified, undefined);
  assert.equal(byURL(global, '/blog/missing-date').lastModified, undefined);
  assert.equal(byURL(global, '/blog/valid-post').lastModified.toISOString(), '2026-10-01T00:00:00.000Z');
  assert.equal(byURL(india, '/in/template-detail?templateId=template-2').lastModified, undefined);
  assert.ok(india.every((item) => item.url.startsWith('https://zlendorealty.com/in')));
  assert.ok(!global.some((item) => item.url === 'https://zlendorealty.com/individuals'));
  assert.equal(generateSitemapXML(global), generateSitemapXML(await getSitemapData('global')));
  const xml = generateSitemapXML([{ url: 'https://example.com', changeFrequency: 'daily', priority: 1 }]);
  assert.ok(!xml.includes('<lastmod>'));
  failCMS = true;
  const fallback = await getSitemapData('india');
  assert.ok(byURL(fallback, '/in/products/smart-wizard').lastModified);
  assert.equal(byURL(fallback, '/in/products/2d-to-3d').lastModified, undefined);
  console.log('Sitemap regression checks passed: published dates, regional code changes, missing/invalid/future dates, stable output and upstream failure.');
})().catch((error) => { console.error(error); process.exitCode = 1; });
