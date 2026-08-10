const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            results = results.concat(walkDir(full));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(full);
        }
    });
    return results;
}

const dirs = [
    'app/[country]/products',
    'app/[country]/use-case',
    'app/[country]/business',
    'app/[country]/partners',
    'app/[country]/about-us',
    'app/[country]/contact'
];

let allFiles = [];
dirs.forEach(d => {
    allFiles = allFiles.concat(walkDir(path.join(process.cwd(), d)));
});

allFiles.forEach(f => {
    try {
        let text = fs.readFileSync(f, 'utf8');
        let initialText = text;

        // Ensure not already having "(India)" dynamically injected in every match
        // Or actually just conditionally inject based on isIndiaSite state.
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
                    return; // Unsafe to proceed if no country logic
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
