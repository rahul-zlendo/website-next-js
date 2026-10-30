/**
 * Root sanity.config.ts
 * 
 * This config is used ONLY by lib/sanity/client.ts for data fetching.
 * The actual Sanity Studio runs from the standalone /studio directory
 * (which uses React 18 to avoid the useEffectEvent crash with React 19).
 * 
 * Do NOT embed the Studio in the Next.js app.
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { table } from '@sanity/table';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cvwqqd27';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  projectId,
  dataset,
  title: 'Zlendo Realty CMS',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    table(),
  ],
});
