const fs = require('fs');
const files = [
    'app/[country]/products/vr-studio/page.tsx',
    'app/[country]/products/virtual-walkthrough/page.tsx',
    'app/[country]/products/vastu/page.tsx',
    'app/[country]/products/room-styler/page.tsx',
    'app/[country]/products/realistic-renders/page.tsx',
    'app/[country]/products/interiors-exteriors/page.tsx',
    'app/[country]/products/floor-planner/page.tsx',
    'app/[country]/products/api-suite/page.tsx',
    'app/[country]/products/2d-to-3d/page.tsx'
];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');
    if (!content.includes('let title =')) {
        let regex = /title:\s*(cms\?\.seoTitle|data\?\.seoTitle|cmsSeo\?\.seoTitle|seoTitle)\s*(\|\||\?\?)\s*(\`[^\`]*\`|'[^']*'|"[^"]*")/g;
        let match = content.match(regex);
        if (match && match.length > 0) {
            let extractedAssignment = match[0].replace('title: ', '');
            content = content.replace(match[0], 'title: title');
            content = content.replace("if (country === 'in') {", `let title = ${extractedAssignment};\n  if (country === 'in') {`);
            fs.writeFileSync(f, content, 'utf-8');
            console.log('Fixed undefined title in: ' + f);
        }
    }
});
