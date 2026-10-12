const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const { NextRequest } = require('next/server');
const source = ts.transpileModule(fs.readFileSync('middleware.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const context = { exports: {}, require, Headers, URL };
vm.runInNewContext(source, context);
const { middleware } = context.exports;

for (const cookie of ['', 'zl_country_choice=in', 'zl_country_choice=global']) {
  for (const path of ['/help-center', '/help-center?page=2', '/help-center/tag/dashboard', '/help-center/not-a-real-article']) {
    const response = middleware(new NextRequest(`https://zlendorealty.com${path}`, { headers: { cookie } }));
    assert.equal(response.headers.get('x-middleware-next'), '1', `${path}: must reach the Help Center reader`);
    assert.equal(response.headers.get('x-middleware-rewrite'), null);
    assert.equal(response.headers.get('location'), null);
  }
}
for (const prefix of ['in', 'global']) {
  const response = middleware(new NextRequest(`https://zlendorealty.com/${prefix}/help-center/tag/dashboard?page=2`));
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://zlendorealty.com/help-center/tag/dashboard?page=2');
}
const unrelated = middleware(new NextRequest('https://zlendorealty.com/help-centerish'));
assert.equal(unrelated.headers.get('x-middleware-rewrite'), 'https://zlendorealty.com/global/help-centerish');
console.log('Help Center routing checks passed: public reader, missing slugs, both regional aliases, query preservation and unrelated routes.');
