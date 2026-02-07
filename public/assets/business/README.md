# Business Page Assets

## Missing Assets

The business page (`/in/business`) requires the following video and image assets to be placed in this directory:

### Required Video Files (.webm format)

**Design & Planning Tools:**
- `2d-to-3d.webm` - 2D to 3D conversion demo
- `cost-estimation.webm` - Cost estimation tool demo
- `360-walkthrough.webm` - 360° walkthrough demo
- `2d-cad-drawing.webm` - 2D CAD drawing demo

**Visualization & Rendering:**
- `image-render.webm` - Image rendering demo
- `bim-support.webm` - BIM support demo
- `sunlight-shadow-analysis.webm` - Sunlight/shadow analysis demo

**Marketing & Sales Tools:**
- `marketing-content-packs.webm` - Marketing content demo
- `interactive-sales-tool.webm` - Interactive sales tool demo
- `ar.webm` - AR experience demo

**Experience Center:**
- `digital-showroom.webm` - Digital showroom demo
- `multi-terminal-sync.webm` - Multi-terminal sync demo
- `visitors-analytics.webm` - Visitor analytics demo

**Construction Planning:**
- `material-optimization.webm` - Material optimization demo
- `project-coordination.webm` - Project coordination demo

**Design Studio:**
- `color-visualization.webm` - Color visualization demo
- `quantity-calculator.webm` - Quantity calculator demo
- `trend-forecasting.webm` - Trend forecasting demo

**Interior Solutions:**
- `ceiling-design-library.webm` - Ceiling design library demo
- `lighting-integration.webm` - Lighting integration demo
- `installation-guides.webm` - Installation guides demo

### Required Image Files

**Images:**
- `apex-developer.png` - Developer/partner logo or image

---

## File Specifications

### Video Files
- **Format:** WebM (VP9 codec recommended)
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration:** 5-15 seconds (short demo loops)
- **File Size:** Keep under 5MB per video for fast loading
- **Loop:** Yes (autoplay, loop, muted)

### Image Files
- **Format:** PNG or WebP
- **Resolution:** 800x600 minimum
- **File Size:** Keep under 500KB (use compression)
- **Quality:** High quality, professional

---

## Temporary Solution

Until assets are created, you have three options:

### Option 1: Use Placeholder Videos
Use a tool like https://placeholder.com or create simple solid color videos:
```bash
# Create placeholder videos (requires ffmpeg)
ffmpeg -f lavfi -i color=c=gray:s=1280x720:d=5 -c:v libvpx-vp9 2d-to-3d.webm
```

### Option 2: Hide Videos Temporarily
Comment out video elements in `/app/[country]/business/page.tsx`:
```typescript
// image: '/assets/business/2d-to-3d.webm'
image: '' // or use a placeholder image URL
```

### Option 3: Use External Videos
Link to YouTube or Vimeo videos temporarily:
```typescript
videoUrl: 'https://youtube.com/embed/YOUR_VIDEO_ID'
```

---

## Asset Creation Tips

1. **Screen Recordings:** Use OBS Studio or ScreenToGif to record product demos
2. **Video Editing:** Use DaVinci Resolve (free) or Adobe Premiere
3. **Compression:** Use HandBrake to optimize file sizes
4. **WebM Conversion:** Use FFmpeg:
   ```bash
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm
   ```

---

## Status

- [ ] 21 video files needed
- [ ] 1 image file needed
- [ ] Directory structure created
- [ ] Placeholder README added

**Created:** February 5, 2026  
**Location:** `/public/assets/business/`  
**Referenced by:** `/app/[country]/business/page.tsx`
