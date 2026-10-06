const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir(path.join(process.cwd(), 'app', '[country]'));
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace const cleanPath = '/...';
    content = content.replace(/const cleanPath = '\/([^']+)';/g, (match, urlPath) => {
        if (!urlPath.startsWith('in/')) {
            changed = true;
            return 'const cleanPath = isGlobal ? \'/' + urlPath + '\' : \'/in/' + urlPath + '\';';
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log('Updated cleanPath', file);
    }
});

console.log('Total files updated:', updatedCount);
