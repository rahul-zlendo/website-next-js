const fs = require('fs');
const glob = require('glob');
const pattern = glob.escape('app/[country]/') + '**/*/page.tsx';
const files = glob.sync(pattern, { absolute: true });
files.forEach(f => {
    if (f.includes('products') || f.includes('services') || f.includes('consultation')) {
        let content = fs.readFileSync(f, 'utf-8');
        // Search for isGlobal ? and replace it with its original string
        const regex = /isGlobal \? ('|")(.*?)(\1) : (`|'|")(.*?)(\4)/g;
        if (content.match(regex)) {
            content = content.replace(regex, "'$2'");
            fs.writeFileSync(f, content, 'utf-8');
            console.log('Restored bad isGlobal ternary safely in: ' + f);
        }
    }
});
