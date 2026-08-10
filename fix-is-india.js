const fs = require('fs');
const files = [
    'app/[country]/services/2d-to-3d/consultation/TwoDToThreeDConsultationClient.tsx',
    'app/[country]/services/floor-plan-design/consultation/FloorPlanConsultationClient.tsx',
    'app/[country]/services/interior-design/consultation/InteriorDesignConsultationClient.tsx',
    'app/[country]/services/vastu-consultation/consultation/VastuConsultationFormClient.tsx',
    'app/[country]/services/virtual-walkthrough/consultation/VirtualWalkthroughConsultationClient.tsx'
];

files.forEach(f => {
    let text = fs.readFileSync(f, 'utf8');
    if (!text.includes('isIndiaSite =')) {
        console.log('Missing in', f);
        if (!text.includes('useCountry')) {
            text = text.replace(/import [^;]+;/, match => match + '\nimport { useCountry } from "@/lib/context/CountryContext";');
        }
        text = text.replace(/export default function [^(]+\([^)]*\)\s*{/, match => match + '\n    const { country } = useCountry();\n    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;');
        fs.writeFileSync(f, text, 'utf8');
        console.log('Fixed', f);
    }
});
