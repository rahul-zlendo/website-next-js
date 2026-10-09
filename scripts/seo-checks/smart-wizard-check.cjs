const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const cache = new Map();

function load(file) {
  if (cache.has(file)) return cache.get(file);
  const context = { exports: {}, console, require: (name) => {
    if (name === 'next/link') return { __esModule: true, default: ({ children, ...props }) => React.createElement('a', props, children) };
    if (name === '@/lib/constants/urls') return { SIGNUP_URL: 'https://app.zlendorealty.com/register' };
    if (name === '@/lib/seo/metadata') return { createPageMetadata: (metadata) => metadata };
    if (name.startsWith('@/components/')) return load(`${name.slice(2)}.tsx`);
    return require(name);
  } };
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(source, context);
  cache.set(file, context.exports);
  return context.exports;
}

(async () => {
  const countryPage = load('app/[country]/products/smart-wizard/page.tsx');
  const globalPage = load('app/global/products/smart-wizard/page.tsx');
  for (const country of ['in', 'us']) {
    const params = Promise.resolve({ country });
    const markup = renderToStaticMarkup(await countryPage.default({ params }));
    const scripts = [...markup.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    const faq = scripts.map((match) => JSON.parse(match[1])).find((schema) => schema['@type'] === 'FAQPage');
    assert.ok(faq, `${country}: FAQ schema must render`);
    const visibleAnswers = [...markup.matchAll(/<details[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/details>/g)].map((match) => match[1]);
    for (const question of faq.mainEntity) {
      const encoded = renderToStaticMarkup(React.createElement(React.Fragment, null, question.acceptedAnswer.text));
      assert.ok(visibleAnswers.includes(encoded), `${country}: schema answer must match a visible paragraph`);
    }
    assert.equal(faq.mainEntity.some((question) => question.acceptedAnswer.text.includes('CMDA')), country === 'in');
    assert.ok(markup.includes('it does not transfer an editable drawing'));
    assert.ok(!markup.includes('continue editing in 2D and 3D'));
    assert.equal((await countryPage.generateMetadata({ params })).title.includes('India'), country === 'in');
    assert.ok(!(await countryPage.generateMetadata({ params })).title.includes('AI Floor Plan Generator'));
  }
  const globalMarkup = renderToStaticMarkup(globalPage.default());
  assert.ok(globalMarkup.includes('simple ranking system'));
  assert.ok(globalMarkup.includes('Explore Zlendo Realty'));
  assert.ok(!globalMarkup.includes('keeps the speed of generative AI'));
  assert.ok(!globalPage.metadata.title.includes('AI Floor Plan Generator'));
  console.log('Smart Wizard rendering checks passed: visible/structured FAQs agree in both regions, metadata is regional, and schematic/signup limitations render.');
})().catch((error) => { console.error(error); process.exitCode = 1; });
