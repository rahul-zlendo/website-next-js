const assert = require('node:assert/strict');
const fs = require('node:fs');
const origin=process.argv[2] || 'http://localhost:3100';
const output=process.argv[3];
async function trace(path) {
 const hops=[];let url=origin+path;
 for(let i=0;i<5;i++){
  const response=await fetch(url,{redirect:'manual',signal:AbortSignal.timeout(20000)});const location=response.headers.get('location');hops.push({url,status:response.status,location});
  if(location&&response.status>=300&&response.status<400){await response.body?.cancel();url=new URL(location,url).href;continue;}
  const html=await response.text();
  return {path,hops,status:response.status,canonical:html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]||null,robots:html.match(/<meta[^>]*name="robots"[^>]*content="([^"]+)"/)?.[1]||null,articleLinks:[...new Set([...html.matchAll(/href="(\/blog\/[^"?#]+)"/g)].map(x=>x[1]))],html};
 }throw new Error(`${path}: redirect limit`);
}
(async()=>{
 const results=[];
 const failures=[];
 async function check(path,status,canonical,redirects=0){
  const result=await trace(path);results.push(result);
  try {
   assert.equal(result.status,status,path);
   assert.equal(result.hops.length-1,redirects,`${path}: redirect count`);
   if(canonical)assert.equal(result.canonical,`https://zlendorealty.com${canonical}`,`${path}: canonical`);
   if(status===404)assert.match(result.robots||'',/noindex/,`${path}: missing page must not be indexable`);
   const input = new URL(origin+path);
   if(input.searchParams.has('utm_source'))assert.equal(new URL(result.hops.at(-1).url).searchParams.get('utm_source'),input.searchParams.get('utm_source'),`${path}: query preservation`);
  } catch(error) {
   failures.push({path,expectedStatus:status,expectedCanonical:canonical||null,expectedRedirects:redirects,message:error.message});
  }
  return result;
 }
 const first=await check('/blog',200,'/blog');
 const second=await check('/blog?page=2',200,'/blog?page=2');
 const page29=await check('/blog?page=29',200,'/blog?page=29');
 assert.equal(page29.articleLinks.length,12);
 assert.notEqual(first.articleLinks.join(),second.articleLinks.join());
 for(const prefix of ['', '/in','/global'])for(const slash of ['','/']) {
  await check(`${prefix}/blog/page/29${slash}`,200,'/blog?page=29',1);
  await check(`${prefix}/blog/page/1${slash}`,200,'/blog',1);
  await check(`${prefix}/blog/balcony-dimensions-before-your-home${slash}?utm_source=test`,200,'/blog/balcony-dimensions-before-your-home',prefix||slash?1:0);
 }
 await check('/in/blog/?page=01&utm_source=test',200,'/blog',1);
 await check('/blog?page=002',200,'/blog?page=2',1);
 for(const value of ['0','-1','2x','1.5','9999','9007199254740991','9007199254740992','2&page=3',''])await check(`/blog?page=${value}`,404);
 for(const path of ['/blog/no-such-seo-post','/blog/daily-room-rent-in-bangalore-price-insights','/help-center/category/project-cost-estimation'])await check(path,404);
 await check('/help-center/tag/dashboard',200,'/help-center/tag/dashboard');
 await check('/plans/',200,'/plans',1);
 await check('/us/business/nri-remote-planning?utm_source=test',200,'/business',1);
 for(const [alias,destination] of [['ai-floor-planner','floor-planner'],['2d-to-3d-converter','2d-to-3d'],['smart-room-styler','room-styler']]) {
  for(const prefix of ['','/global','/in'])for(const slash of ['','/']) {
   await check(`${prefix}/products/${alias}${slash}?utm_source=test`,200,`${prefix==='/in'?'/in':''}/products/${destination}`,1);
  }
 }
 const almirah=await check('/blog/complete-guide-to-standard-almirah-size',200,'/blog/complete-guide-to-standard-almirah-size');
 assert.match(almirah.html,/<div class="blog-table-wrap">/);
 assert.match(almirah.html,/loading="eager" fetchpriority="high"/);
 assert.match(almirah.html,/width="802" height="400"/);
 assert.match(almirah.html,/rel="preconnect" href="https:\/\/cdn.sanity.io"/);
 const historicalFile='artifacts/seo-2026-10-10/url-dispositions.json';
 if(fs.existsSync(historicalFile)){
  const inventory=JSON.parse(fs.readFileSync(historicalFile,'utf8')).inventory;
  for(const item of inventory.filter(x=>x.publishedExactMatch)) {
   const url=new URL(item.url);const canonical=url.pathname.replace(/\/$/,'');
   await check(url.pathname+url.search,200,canonical,url.pathname.endsWith('/')?1:0);
  }
 }
 const evidence={checkedAt:new Date().toISOString(),origin,total:results.length,passed:results.length-failures.length,failures,results:results.map(({html,...result})=>result)};
 if(output)fs.writeFileSync(output,JSON.stringify(evidence,null,2));
 if(failures.length){
  console.error(`Failed ${failures.length}/${results.length} HTTP checks: ${JSON.stringify(failures)}`);
  process.exitCode=1;
 } else console.log(`Passed ${results.length} HTTP checks: distinct pagination, one-hop archives/aliases, invalid-page 404s, missing content, support reader, non-blog redirects and responsive article markup.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
