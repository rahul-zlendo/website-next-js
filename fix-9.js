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

    // Find the line "return createPageMetadata({"
    const target = 'return createPageMetadata({';
    if (content.includes(target)) {
        // We need to know what the title variable is named. Usually `title` or `seoTitle`.
        let titleVarVar = 'title';
        if (content.includes('title: seoTitle,')) {
            titleVarVar = 'seoTitle';
        }

        let replacement = `if (country === 'in') {
        if (${titleVarVar}.endsWith(' | Zlendo Realty')) ${titleVarVar} = ${titleVarVar}.replace(' | Zlendo Realty', ' - Zlendo Portal');
        else if (${titleVarVar}.endsWith(')')) ${titleVarVar} = ${titleVarVar}.replace(')', ' Guide)');
        else ${titleVarVar} += ' Online';
    }
    return createPageMetadata({`;

        // Make sure it's let, not const
        let letRegex = new RegExp(`const\\s+${titleVarVar}\\s*=`);
        if (content.match(letRegex)) {
            content = content.replace(letRegex, `let ${titleVarVar} =`);
        }

        content = content.replace(target, replacement);
        fs.writeFileSync(f, content, 'utf-8');
        console.log('Fixed ' + f);
    }
});
