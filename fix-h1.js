const fs = require('fs');

const filesToFix = [
    'app/[country]/services/2d-to-3d/consultation/TwoDToThreeDConsultationClient.tsx',
    'app/[country]/services/2d-to-3d/TwoDToThreeDClient.tsx',
    'app/[country]/services/floor-plan-design/consultation/FloorPlanConsultationClient.tsx',
    'app/[country]/services/floor-plan-design/FloorPlanDesignClient.tsx',
    'app/[country]/services/interior-design/consultation/InteriorDesignConsultationClient.tsx',
    'app/[country]/services/interior-design/InteriorDesignClient.tsx',
    'app/[country]/services/vastu-consultation/consultation/VastuConsultationFormClient.tsx',
    'app/[country]/services/vastu-consultation/VastuConsultationClient.tsx',
    'app/[country]/services/virtual-walkthrough/consultation/VirtualWalkthroughConsultationClient.tsx',
    'app/[country]/services/virtual-walkthrough/VirtualWalkthroughClient.tsx',
    'app/[country]/template-detail/ClientPage.tsx',
    'components/compare/ComparisonClient.tsx',
    'app/[country]/compare/CompareClient.tsx'
];

filesToFix.forEach(f => {
    try {
        let text = fs.readFileSync(f, 'utf8');

        let changed = false;

        // Find isIndiaSite or country check
        let conditionStr = 'isIndiaSite';
        if (text.includes('isIndiaSite')) {
            conditionStr = 'isIndiaSite';
        } else if (text.includes("country === 'in'") || text.includes('country === "in"')) {
            conditionStr = "country === 'in'";
        } else if (text.includes('isIndia')) {
            conditionStr = "isIndia";
        } else {
            console.log('No condition found in', f, 'adding isIndiaSite fallback');
            if (text.includes('useCountry()')) {
                text = text.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*useCountry\(\);/, (match, destr) => {
                    if (!destr.includes('country')) {
                        return match.replace('{', '{ country,');
                    }
                    return match;
                });
                if (!text.includes('isIndiaSite =')) {
                    text = text.replace(/const {[^}]+} = useCountry\(\);/, match => match + '\n    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;');
                }
            } else if (text.includes('usePathname')) {
                if (!text.includes('isIndiaSite =')) {
                    text = text.replace(/const pathname = usePathname\(\);/, match => match + '\n    const isIndiaSite = pathname.startsWith("/in");');
                }
            }
            conditionStr = 'isIndiaSite';
            changed = true;
        }

        // Only append if it doesn't already have it
        if (text.match(/<span className="sr-only">\s*\(India\)\s*<\/span>\s*(<\/h1>|<\/motion\.h1>)/)) {
            console.log('Already fixed:', f);
        } else {
            text = text.replace(/(<\/h1>|<\/motion\.h1>)/g, (match) => {
                return '{' + conditionStr + ' && <span className="sr-only"> (India)</span>}' + match;
            });
            fs.writeFileSync(f, text, 'utf8');
            console.log('Fixed', f);
        }
    } catch (e) {
        console.log('Error in', f, e.message);
    }
});
