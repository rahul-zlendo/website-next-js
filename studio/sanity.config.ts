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
            S.listItem()
              .title('Products')
              .child(
                S.list()
                  .title('Product Pages')
                  .items([
                    S.listItem()
                      .title('Floor Planner Page')
                      .child(
                        S.document()
                          .schemaType('floorPlannerPage')
                          .documentId('singleton-floorPlannerPage')
                      ),
                    // Add more products here later
                  ])
              ),
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
