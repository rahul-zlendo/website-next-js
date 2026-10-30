// Compatibility for published CMS copy identified in the October SEO audit.
// Exact matches preserve later editorial changes until the CMS is corrected.
const corrections: Record<string, string> = {
    'AI-Powered Interior Styling test': 'AI-Powered Interior Styling',
    'Turn flat sketches into living spaces in seconds. Upload any floor plan image or PDF and watch our AI instantly construct a fully interactive 3D model.':
        'Turn a supported floor plan image or PDF into an editable 3D home view. Review the conversion and refine dimensions and details before using the design.',
    'Convert 2D house plans into realistic 3D visuals instantly. Visualize layouts before construction begins. Explore free sample plans with Zlendo Realty.':
        'Turn a supported 2D floor plan into a 3D home view. Explore upload formats, editable layouts, example results and conversion limits with Zlendo Realty.',
    'Automatically identifies walls, windows, and doors with 99% accuracy.':
        'Identifies walls, windows, and doors. Review and refine the result before using your design.',
    'DWG/PDF Import': 'Image/PDF Import',
    'Support for professional CAD formats and hand-drawn sketches.':
        'Upload supported JPG, PNG, or PDF floor plans.',
};

export function correctLegacyProductCopy(value: string | null | undefined): string | undefined {
    return value == null ? undefined : corrections[value.trim()] ?? value;
}
