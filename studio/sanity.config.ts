import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'zlendo-realty',
  title: 'Zlendo Realty CMS',
  projectId: 'cvwqqd27',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('singleton-homePage')
              ),
            S.divider(),
            S.listItem()
              .title('Product: Floor Planner')
              .child(
                S.document()
                  .schemaType('floorPlannerPage')
                  .documentId('singleton-floorPlannerPage')
              ),
            S.divider(),
            S.listItem()
              .title('Product: 2D to 3D')
              .child(
                S.document()
                  .schemaType('twoDTo3DPage')
                  .documentId('singleton-twoDTo3DPage')
              ),
            // You can add more products here by copying this section
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('singleton-siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
