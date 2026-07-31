const fs = require('fs');
const glob = require('glob');
const path = require('path');

function walk(dir, match) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath, match));
        } else {
            if (filePath.endsWith(match) && !filePath.includes('blog')) results.push(filePath);
        }
    });
    return results;
}

const files = walk('./app/[country]', '.tsx');
files.push('./components/pages/ComparePageClient.tsx'); // Compare path

const targets = [
    "Bring Your House & Office Designs to Life",
    "Our 2D to 3D Conversion Services",
    "Choose Your Growth Path",
    "Why Take Zlendo Realty to Your Network?",
    "Complete property visualization",
    "Frequently Asked Questions",
    "Designing a Home Starts with the Right Floor Plan",
    "Our Floor Plan Design Services",
    "Experience the future of interior design.",
    "Stop wasting time. Start creating.",
    "Free",
    "Basic",
    "Get a Free Consultation",
    "Get a Free Project Consultation",
    "Get Floor Plan Consultation",
    "Get in touch directly",
    "Quick Help Center",
    "Head-to-head comparisons",
    "How It Works",
    "Interior Design Services for Every Need",
    "Legacy vs. Zlendo Realty.",
    "NDA Overview and Purpose",
    "Performance & Capability Index",
    "Platform Purpose and Conduct Scope",
    "Privacy Policy Overview",
    "Quick Overview",
    "Request Free 2D to 3D Consultation",
    "Request Free Consultation",
    "Sign In, Dashboard & Getting Started",
    "SLA Overview and Scope",
    "Turn Your Floor Plan into a Realistic Virtual Experience",
    "Two ways to grow with us.",
    "Upload your floor plan",
    "Why Choose Zlendo Realty for Vastu Consultation?",
    "Why We Created Zlendo Realty",
    "Zlendo Realty",
    "Zlendo Realty Order Form",
    "ZLENDO REALTY TERMS OF SERVICE"
];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let dirty = false;

    if (content.includes('<h2') || content.includes('<motion.h2')) {

        // Inject useCountry statically if missing
        if (!content.includes('isIndiaSite')) {
            let replacement = 'const { getPath, country } = useCountry();\n    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;';
            if (content.includes('const { getPath } = useCountry();')) {
                content = content.replace('const { getPath } = useCountry();', replacement);
            } else if (content.includes('const { getPath } = useCountry()')) {
                content = content.replace('const { getPath } = useCountry()', replacement);
            }
        }

        if (content.includes('isIndiaSite')) {
            targets.forEach(target => {
                // Find target inside an element body or variable using regex
                // e.g. "Target"  ->  "Target"}{isIndiaSite && <span className="sr-only"> Local</span>}
                const regexes = [
                    new RegExp(`\\|\\|\\s*(["'])${target.replace(/[.*+?^$\/{}()|\[\]\\]/g, '\\$&')}(["'])}`, 'g'),
                    new RegExp(`>${target.replace(/[.*+?^$\/{}()|\[\]\\]/g, '\\$&')}<\\/`, 'g'),
                    new RegExp(`>${target.replace(/[.*+?^$\/{}()|\[\]\\]/g, '\\$&')}\\s*<\\/`, 'g'),
                    new RegExp(`>${target.replace(/[.*+?^$\/{}()|\[\]\\]/g, '\\$&')}\\n`, 'g'),
                ];

                regexes.forEach((r, i) => {
                    if (r.test(content)) {
                        dirty = true;
                        if (i === 0) content = content.replace(r, `|| "$1${target}$1"}{isIndiaSite && <span className="sr-only"> Local</span>}`);
                        if (i === 1) content = content.replace(r, `>${target}{isIndiaSite && <span className="sr-only"> Local</span>}</`);
                        if (i === 2) content = content.replace(r, `>${target}{isIndiaSite && <span className="sr-only"> Local</span>}</`);
                        if (i === 3) content = content.replace(r, `>${target}{isIndiaSite && <span className="sr-only"> Local</span>}\n`);
                    }
                });
            });
        }

        if (dirty) {
            fs.writeFileSync(f, content, 'utf8');
            console.log('Fixed', f);
        }
    }
});
