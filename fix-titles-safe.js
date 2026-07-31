const fs = require('fs');
const path = require('path');
const glob = require('glob');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes('export async function generateMetadata') && !content.includes('export function generateMetadata')) {
        return;
    }

    const regex = /return\s+createPageMetadata\(\{\s*(?:\r?\n)*\s*title:\s*(['"`])(.*?)\1,/s;
    const match = content.match(regex);
    if (match) {
        let quote = match[1];
        let originalTitle = match[2];
        let replacement = `let title = ${quote}${originalTitle}${quote};\n  if (country === 'in') {\n      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');\n      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');\n      else title += ' Online';\n  }\n  return createPageMetadata({\n    title,`;
        content = content.replace(regex, replacement);

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log("Updated metadata title securely in: " + filePath);
    } else {
        const fallbackRegex = /let title = /s;
        if (!content.match(fallbackRegex)) {
            console.log("Could not match title securely in: " + filePath);
        }
    }
}

const pattern = glob.escape('app/[country]/') + '**/*/page.tsx';
const files = glob.sync(pattern, { absolute: true });
const targetDirs = ['products', 'services', 'consultation'];
files.forEach(f => {
    if (f.includes('products') || f.includes('services') || f.includes('consultation')) {
        processFile(f);
    }
});
