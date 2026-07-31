const fs = require('fs');
const glob = require('glob');
const pattern = glob.escape('app/[country]/') + '**/*/page.tsx';
const files = glob.sync(pattern, { absolute: true });
files.forEach(f => {
    if (f.includes('products')) {
        let content = fs.readFileSync(f, 'utf-8');
        const target = /const title = cms\?\.seoTitle \?\? defaults\.seoTitle;/g;
        if (content.match(target) && !content.includes('let title = cms?.seoTitle')) {
            content = content.replace(target, `let title = cms?.seoTitle ?? defaults.seoTitle;
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }`);
            fs.writeFileSync(f, content, 'utf-8');
            console.log('Fixed variable title metadata safely in: ' + f);
        }
    }
});
