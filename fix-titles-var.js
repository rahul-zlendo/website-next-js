const fs = require('fs');
const files = [
    'app/[country]/products/vr-studio/page.tsx',
    'app/[country]/products/virtual-walkthrough/page.tsx',
    'app/[country]/products/vastu/page.tsx',
    'app/[country]/products/room-styler/page.tsx',
    'app/[country]/products/realistic-renders/page.tsx',
    'app/[country]/products/interiors-exteriors/page.tsx',
    'app/[country]/products/floor-planner/page.tsx',
    'app/[country]/products/cost-estimator/page.tsx',
    'app/[country]/products/api-suite/page.tsx',
    'app/[country]/products/2d-to-3d/page.tsx'
];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');
    if (content.includes('let seoTitle =') || content.includes('const seoTitle =')) {
        let blockToFix = false;
        if (content.includes("if (title.endsWith(")) blockToFix = true;
        if (blockToFix) {
            content = content.replace(/if \(title\.endsWith\((.*?)\)\) title = title/g, "if (seoTitle.endsWith($1)) seoTitle = seoTitle");
            content = content.replace(/else if \(title\.endsWith\((.*?)\)\) title = title/g, "else if (seoTitle.endsWith($1)) seoTitle = seoTitle");
            content = content.replace(/else title \+= /g, "else seoTitle += ");
            content = content.replace(/const seoTitle /g, "let seoTitle "); // Ensure it's mutable
            fs.writeFileSync(f, content, 'utf-8');
            console.log('Fixed seoTitle referencing err in: ' + f);
        }
    }
});
