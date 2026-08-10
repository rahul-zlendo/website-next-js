const fs = require('fs');

const filesToFix = [
    'app/[country]/products/room-styler/RoomStylerClient.tsx',
    'app/[country]/products/api-suite/ApiSuiteClient.tsx',
    'app/global/products/cost-estimator/page.tsx',
    'app/[country]/products/cost-estimator/page.tsx' // if it exists
];

filesToFix.forEach(f => {
    try {
        if (!fs.existsSync(f)) return;
        let text = fs.readFileSync(f, 'utf8');
        let initialText = text;

        let conditionStr = 'isIndiaSite';
        if (text.includes('isIndiaSite')) {
            conditionStr = 'isIndiaSite';
        } else if (text.includes("country === 'in'") || text.includes('country === "in"')) {
            conditionStr = "country === 'in'";
        } else if (text.includes('isIndia')) {
            conditionStr = "isIndia";
        } else {
            if (text.includes('useCountry()')) {
                text = text.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*useCountry\(\);/, (match, destr) => {
                    if (!destr.includes('country')) {
                        return match.replace('{', '{ country,');
                    }
                    return match;
                });
                if (!text.includes('isIndiaSite =') && !text.includes('isIndia =')) {
                    text = text.replace(/const {[^}]+} = useCountry\(\);/, match => match + '\n    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;');
                }
                conditionStr = 'isIndiaSite';
            } else if (text.includes('usePathname')) {
                if (!text.includes('isIndiaSite =') && !text.includes('isIndia =')) {
                    text = text.replace(/const pathname = usePathname\(\);/, match => match + '\n    const isIndiaSite = pathname.startsWith("/in");');
                }
                conditionStr = 'isIndiaSite';
            } else {
                if (text.includes('const { country }')) {
                    conditionStr = "country === 'in'";
                } else {
                    console.log('Injecting useCountry into', f);
                    if (!text.includes('import { useCountry }')) {
                        text = text.replace(/import [^;]+;/, match => match + '\nimport { useCountry } from "@/lib/context/CountryContext";');
                    }
                    text = text.replace(/export default function [^(]+\([^)]*\)\s*{/, match => match + '\n    const { country } = useCountry();\n    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;');
                    conditionStr = 'isIndiaSite';
                }
            }
        }

        let replacedAtLeastOne = false;
        text = text.replace(/(<\/h2>|<\/motion\.h2>)/g, (match, p1, offset, string) => {
            const precedingText = string.substring(Math.max(0, offset - 60), offset);
            if (precedingText.includes('(India)</span>') || precedingText.includes('sr-only')) {
                return match;
            }
            replacedAtLeastOne = true;
            return '{' + conditionStr + ' && <span className="sr-only"> (India)</span>}' + match;
        });

        if (replacedAtLeastOne) {
            fs.writeFileSync(f, text, 'utf8');
            console.log('Fixed', f);
        }
    } catch (e) {
        console.log('Error in', f, e.message);
    }
});
