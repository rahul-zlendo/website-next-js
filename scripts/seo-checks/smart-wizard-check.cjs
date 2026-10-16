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
    if (name === '@/lib/products/smart-wizard-units') return load('lib/products/smart-wizard-units.ts');
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
  const { convertSiteMeasurements } = load('lib/products/smart-wizard-units.ts');
  const feet = { unit: 'ft', width: 30, length: 40, builtUpArea: 1000, setbackFront: 6, setbackRear: 4, setbackLeft: 3, setbackRight: 3, floors: 2, bedrooms: 3, priority: 'balanced' };
  const metres = convertSiteMeasurements(feet, 'm');
  assert.equal(metres.width, 9.144);
  assert.equal(metres.length, 12.192);
  assert.equal(metres.builtUpArea, 92.90304);
  assert.equal(metres.setbackFront, 1.8288);
  const footprint = (metres.width - metres.setbackLeft - metres.setbackRight) * (metres.length - metres.setbackFront - metres.setbackRear);
  assert.ok(Math.abs(footprint / 0.09290304 - 720) < 0.00001, 'Unit changes must preserve the 720 sq ft usable footprint');
  assert.deepEqual({ ...convertSiteMeasurements(metres, 'ft') }, feet);
  assert.equal(metres.floors, feet.floors);
  assert.equal(metres.bedrooms, feet.bedrooms);
  assert.equal(metres.priority, feet.priority);
  assert.equal(convertSiteMeasurements(feet, 'ft'), feet);
  console.log('Smart Wizard unit checks passed: the 30×40-foot site, setbacks, area and room preferences survive a metric round trip.');
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
