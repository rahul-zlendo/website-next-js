const assert=require('node:assert/strict');
const fs=require('node:fs');
const manifest=JSON.parse(fs.readFileSync('.next/routes-manifest.json','utf8'));
const generic=manifest.redirects.find(r=>r.source.startsWith('/:path('));
assert(generic,'Expected a generic non-blog slash redirect');
const fallback=new RegExp(generic.regex);
for(const prefix of ['','/global','/in']) {
 for(const alias of ['ai-floor-planner','2d-to-3d-converter','smart-room-styler']) {
  const path=`${prefix}/products/${alias}/`;
  assert(!fallback.test(path),`${path}: generic normalization must not intercept an explicit alias`);
  const mappings=manifest.redirects.filter(r=>r.source.startsWith(`${prefix}/products/${alias}`));
  assert(mappings.some(r=>new RegExp(r.regex).test(path)),`${path}: explicit mapping must match`);
 }
 for(const path of [`${prefix}/blog/`,`${prefix}/blog/article/`])assert(!fallback.test(path),`${path}: blog middleware owns normalization`);
}
for(const path of ['/plans/','/products/floor-planner/','/help-center/tag/dashboard/','/blogger/','/products/ai-floor-planner/subpath/']) {
 assert(fallback.test(path),`${path}: preserve existing generic slash behavior`);
}
console.log('Compiled redirect checks passed: explicit product aliases and blog paths do not overlap the generic slash rule; unrelated normalization is preserved.');
