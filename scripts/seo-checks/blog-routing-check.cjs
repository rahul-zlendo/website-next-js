const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const { NextRequest } = require('next/server');
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const context = { exports: {}, URL, Headers, console, process, require: name => {
    if (name === './lib/seo/blog-urls') return load('lib/seo/blog-urls.ts');
    return require(name);
  }};
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText, context);
  cache.set(file, context.exports);
  return context.exports;
}
const { parseBlogPage, normalizeBlogUrl, normalizeBlogLink } = load('lib/seo/blog-urls.ts');
const { middleware } = load('middleware.ts');
assert.equal(parseBlogPage(undefined), 1);
assert.equal(parseBlogPage('029'), 29);
for (const value of ['', '0', '-1', '2x', '1.5', 'Infinity', '9007199254740992', ['2', '3']]) {
  assert.equal(parseBlogPage(value), null, String(value));
}
for (const cookie of ['', 'zl_country_choice=in', 'zl_country_choice=global']) {
  for (const prefix of ['', '/in', '/global']) {
    for (const slash of ['', '/']) {
      for (const [path, expected] of [
        [`${prefix}/blog/article${slash}?utm_source=test#section`, '/blog/article?utm_source=test#section'],
        [`${prefix}/blog/page/29${slash}?utm_source=test&page=2`, '/blog?utm_source=test&page=29'],
        [`${prefix}/blog/page/1${slash}?utm_source=test&page=2`, '/blog?utm_source=test'],
        [`${prefix}/blog${slash}?page=01&utm_source=test`, '/blog?utm_source=test'],
      ]) {
        const source = new URL(`https://zlendorealty.com${path}`);
        const normalized = normalizeBlogUrl(source);
        if (source.href !== `https://zlendorealty.com${expected}`) {
          assert.equal(normalized?.href, `https://zlendorealty.com${expected}`);
          assert.equal(normalizeBlogUrl(normalized), null, 'Destination must not redirect again');
        }
        const request = new NextRequest(source, { headers: { cookie } });
        const response = middleware(request);
        if (normalized) {
          assert.equal(response.status, 308);
          assert.equal(response.headers.get('location'), normalized.href);
        }
      }
    }
  }
}
for (const url of ['https://zlendorealty.com/in/blogger/', 'https://zlendorealty.com/api/blog/', 'https://zlendorealty.com/products/floor-planner/']) {
  assert.equal(normalizeBlogUrl(new URL(url)), null, 'Normalization stays inside the blog namespace');
}
assert.equal(normalizeBlogLink('/in/blog/article/?utm_source=test#section'), '/blog/article?utm_source=test#section');
assert.equal(normalizeBlogLink('https://zlendorealty.com/blog/page/29/'), 'https://zlendorealty.com/blog?page=29');
assert.equal(normalizeBlogLink('https://example.com/blog/article/'), 'https://example.com/blog/article/');
assert.equal(normalizeBlogLink('#section'), '#section');
assert.equal(normalizeBlogLink('http://zlendorealty.com/blog/article'), 'https://zlendorealty.com/blog/article');
assert.equal(normalizeBlogLink('/blog?page=2&page=3'), '/blog?page=2&page=3');
console.log('Blog routing checks passed: one-hop normalization, legacy archives, queries/fragments, strict page validation, regional cookies and namespace boundaries.');
