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
            S.listItem()
              .title('Product: Cost Estimator')
              .child(
                S.document()
                  .schemaType('costEstimatorPage')
                  .documentId('singleton-costEstimatorPage')
              ),
            S.listItem()
              .title('Product: Realistic Renders')
              .child(
                S.document()
                  .schemaType('realisticRendersPage')
                  .documentId('singleton-realisticRendersPage')
              ),
            S.listItem()
              .title('Product: Virtual Walkthrough')
              .child(
                S.document()
                  .schemaType('virtualWalkthroughPage')
                  .documentId('singleton-virtualWalkthroughPage')
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
            S.listItem()
              .title('Use Case: Commercial Spaces')
              .child(
                S.document()
                  .schemaType('commercialSpacesPage')
                  .documentId('singleton-commercialSpacesPage')
              ),
            S.listItem()
              .title('Use Case: Builder & Promoter')
              .child(
                S.document()
                  .schemaType('builderAndPromoterPage')
                  .documentId('singleton-builderAndPromoterPage')
              ),
            S.listItem()
              .title('Use Case: NRI & Remote Planning')
              .child(
                S.document()
                  .schemaType('nriRemotePlanningPage')
                  .documentId('singleton-nriRemotePlanningPage')
              ),
            S.listItem()
              .title('Use Case: Developer Solutions')
              .child(
                S.document()
                  .schemaType('developerSolutionsPage')
                  .documentId('singleton-developerSolutionsPage')
              ),
            S.divider(),
            S.listItem()
              .title('Business / Enterprise Page')
              .child(
                S.document()
                  .schemaType('businessPage')
                  .documentId('singleton-businessPage')
              ),
            S.divider(),
            S.listItem()
              .title('Page: View All Templates')
              .child(
                S.document()
                  .schemaType('viewAllTemplatesPage')
                  .documentId('singleton-viewAllTemplatesPage')
              ),
            S.divider(),
            S.listItem()
              .title('Page: Tutorials')
              .child(
                S.document()
                  .schemaType('tutorialsPage')
                  .documentId('singleton-tutorialsPage')
              ),
            S.divider(),
            S.listItem()
              .title('Product: VR Studio')
              .child(
                S.document()
                  .schemaType('vrStudioPage')
                  .documentId('singleton-vrStudioPage')
              ),
            S.listItem()
              .title('Product: API Suite')
              .child(
                S.document()
                  .schemaType('apiSuitePage')
                  .documentId('singleton-apiSuitePage')
              ),
            S.listItem()
              .title('Page: Partners')
              .child(
                S.document()
                  .schemaType('partnersPage')
                  .documentId('singleton-partnersPage')
              ),
            S.listItem()
              .title('Page: Contact Us')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('singleton-contactPage')
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
