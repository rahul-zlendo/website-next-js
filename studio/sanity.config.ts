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
            S.listItem()
              .title('Product: 2D to 3D')
              .child(
                S.document()
                  .schemaType('twoDTo3DPage')
                  .documentId('singleton-twoDTo3DPage')
              ),
            S.listItem()
              .title('Product: Room Styler')
              .child(
                S.document()
                  .schemaType('roomStylerPage')
                  .documentId('singleton-roomStylerPage')
              ),
            S.listItem()
              .title('Product: Vastu Optimizer')
              .child(
                S.document()
                  .schemaType('vastuPage')
                  .documentId('singleton-vastuPage')
              ),
            S.listItem()
              .title('Product: Interiors & Exteriors')
              .child(
                S.document()
                  .schemaType('interiorsExteriorsPage')
                  .documentId('singleton-interiorsExteriorsPage')
              ),
            S.divider(),
            S.listItem()
              .title('Use Case: Home Remodeling')
              .child(
                S.document()
                  .schemaType('homeRemodelingPage')
                  .documentId('singleton-homeRemodelingPage')
              ),
            S.listItem()
              .title('Use Case: Interior Design')
              .child(
                S.document()
                  .schemaType('interiorDesignPage')
                  .documentId('singleton-interiorDesignPage')
              ),
            S.listItem()
              .title('Use Case: Vastu Optimization')
              .child(
                S.document()
                  .schemaType('vastuOptimizationPage')
                  .documentId('singleton-vastuOptimizationPage')
              ),
            S.listItem()
              .title('Use Case: New Home Building')
              .child(
                S.document()
                  .schemaType('newHomeBuildingPage')
                  .documentId('singleton-newHomeBuildingPage')
              ),
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
