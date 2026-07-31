const fs = require('fs');
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

const files = walk('./app/[country]', 'page.tsx');

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let dirty = false;

    if (content.includes('export async function generateMetadata') && content.includes('createPageMetadata')) {

        // Make sure we have isGlobal
        if (!content.includes('const isGlobal =')) {
            // Find where `params` is awaited
            if (content.includes('await params;')) {
                content = content.replace(/(const {.*?country.*?} = await params;)/, '$1\n    const isGlobal = country === "global";');
            } else if (content.includes('params.country')) {
                content = content.replace(/(const country = params\.country;?)/, '$1\n    const isGlobal = country === "global";');
            } else if (content.includes('const country = (await params).country;')) {
                content = content.replace(/(const country = \(await params\)\.country;)/, '$1\n    const isGlobal = country === "global";');
            }
        }

        // Only proceed if isGlobal is now available
        if (content.includes('const isGlobal =')) {
            // Find `title: '...'` or `title: "..."` inside generateMetadata
            // We'll use regex to match title lines that are static strings (not already conditional)
            // Matches `title: 'Some Title',`
            const titleRegex = /title:\s*(['"`])(.*?)\1\s*,/g;

            content = content.replace(titleRegex, (match, quote, titleString) => {
                // If it already contains a ternary `?`, skip it. But regex above won't match a ternary if properly constrained.

                // Generate a modified title for regional
                let regionalTitle = titleString;
                if (regionalTitle.includes(' | Zlendo Realty')) {
                    regionalTitle = regionalTitle.replace(' | Zlendo Realty', ' - Zlendo Portal');
                } else if (regionalTitle.includes(' |')) {
                    regionalTitle = regionalTitle + ' (Online)';
                } else if (regionalTitle.endsWith(')')) {
                    regionalTitle = regionalTitle.replace(/\)$/, ' Guide)'); // e.g. "Software in 2026 (Ranked)" -> "(Ranked Guide)"
                } else {
                    regionalTitle = regionalTitle + ' Online';
                }

                dirty = true;
                return `title: isGlobal ? ${quote}${titleString}${quote} : \`${regionalTitle}\`,`;
            });
        }
    }

    // Handle static app/[country]/[policy]/page.tsx where there's no generateMetadata but uses a constant?
    // Our policy pages don't export generateMetadata, they might have static export const metadata
    // Wait, the user specifically flagged titles, so they might have static `export const metadata = { title: "..." }`

    if (content.includes('export const metadata') && !content.includes('generateMetadata')) {
        // Since it's a static export, it applies to both routes exactly!
        // To fix this in Next.js, we MUST convert `export const metadata` to `export async function generateMetadata`

        // I'll leave this to a manual check if needed, but let's see how many get fixed first
    }

    if (dirty) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed', f);
    }
});
