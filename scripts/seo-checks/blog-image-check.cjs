const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const context = {exports:{},URL,Buffer,console,process:{env:{}},require:(name) => {
    if (name === 'server-only') return {};
    if (name === './image') return load('lib/sanity/image.ts');
    return require(name);
  }};
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{
    compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020},
  }).outputText,context);
  cache.set(file,context.exports);
  return context.exports;
}
const {portableToHtml} = load('lib/sanity/portableToHtml.ts');
const image = {_type:'image',_key:'lead',asset:{_ref:'image-7b2c435f53c61d357f134489a8f9385cd172ba5f-802x400-png'},alt:'Balcony "dimensions"',caption:'A <measured> image'};
const paragraph = {_type:'block',_key:'intro',style:'normal',markDefs:[],children:[{_type:'span',_key:'text',text:'The article still explains the dimensions.',marks:[]}]};
const html = portableToHtml([image,paragraph,{...image,_key:'later'}],true);
const images = [...html.matchAll(/<img[^>]+>/g)].map(match=>match[0]);
assert.equal(images.length,2);
assert.match(images[0],/width="802" height="400"/);
assert.match(images[0],/loading="eager" fetchpriority="high"/);
assert.match(images[1],/loading="lazy"/);
assert.doesNotMatch(images[1],/fetchpriority/);
assert.match(images[0],/320w, .*480w, .*640w, .*802w/);
assert.doesNotMatch(images[0],/960w|1200w/);
assert.match(html,/alt="Balcony &quot;dimensions&quot;"/);
assert.match(html,/<figcaption>A &lt;measured&gt; image<\/figcaption>/);
assert.match(html,/<p>The article still explains the dimensions\.<\/p>/);
assert.match(portableToHtml([paragraph,image],true),/loading="lazy"/);
assert.doesNotMatch(portableToHtml([image]),/fetchpriority/);
const crop = portableToHtml([{...image,crop:{left:0.25,right:0.25,top:0,bottom:0}}]);
assert.match(crop,/width="401" height="400"/);
const missing = portableToHtml([{_type:'image',alt:'Missing asset'}]);
assert.equal(missing,'');
assert.equal(portableToHtml(null),'');
console.log('Blog image checks passed: real asset dimensions, responsive capped sizes, lead-only priority, crop ratio, fallback, caption escaping and article text.');
