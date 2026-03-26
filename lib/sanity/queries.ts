import { groq } from 'next-sanity';

/**
 * Fetch the Home Page singleton document from Sanity.
 * Returns ALL content fields needed to hydrate the page.
 */
export const homePageQuery = groq`
  *[_type == "homePage" && _id == "singleton-homePage"][0]{
    // SEO & Meta
    seoTitle,
    seoDescription,
    ogTitle,
    ogDescription,
    ogImage,

    // Hero
    heroBadgeText,
    heroTitle,
    heroTitleHighlight,
    heroTitleAfter,
    heroSubtitle,
    heroPrimaryCtaLabel,
    heroPrimaryCtaLink,
    heroSecondaryCtaLabel,
    heroSecondaryCtaLink,

    // 9D Intelligence
    intelligenceBadgeText,
    intelligenceSectionTitle,
    intelligenceSectionTitleHighlight,
    intelligenceSectionTitleAfter,
    intelligenceSectionSubtitle,
    dimensionSuffix,
    intelligenceDimensions[]{
      id,
      title,
      shortDesc,
      longDesc,
      benefit,
      cta,
      link,
      iconName,
      colorClass,
      bgClass,
    },

    // How To Section
    howToSectionTitle,
    howToSectionSubtitle,

    // Features
    features[]{
      section,
      title,
      description,
      howItWorks,
      cta,
      ctaLink,
      imageUrl,
      reverse,
    },

    // Comparison
    comparisonBadgeText,
    comparisonTitle,
    comparisonTitleHighlight,
    comparisonSubtitle,
    comparisonOldWayLabel,
    comparisonNewWayLabel,
    comparisonRows[]{
      title,
      oldWay,
      newWay,
      gradient,
      iconName,
    },

    // Design Templates
    templatesSectionTitle,
    templatesSectionTitleHighlight,
    templatesSectionSubtitle,
    templatesButtonLabel,
    templatesNoDataText,

    // FAQs
    faqSectionTitle,
    faqs[]{
      question,
      answer,
    },

    // Final CTA
    ctaTitle,
    ctaSubtitle,
    ctaButtonLabel,
    ctaButtonLink,
    ctaImageUrl,
  }
`;

/**
 * Fetch Site Settings singleton.
 */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "singleton-siteSettings"][0]{
    siteName,
    siteDescription,
    siteUrl,
    socialLinks,
    footerDescription,
    footerEmail,
    footerAddress,
    footerCities,
    copyrightText,
    logoImage,
    cookieConsentText,
    cookieAcceptLabel,
    cookieDeclineLabel,
  }
`;
/**
 * Fetch the Floor Planner Page singleton document from Sanity.
 */
export const floorPlannerPageQuery = groq`
  *[_type == "floorPlannerPage" && (_id == "floorPlannerPage" || _id == "singleton-floorPlannerPage")][0]{
    seoTitle,
    seoDescription,
    heroBadgeText,
    heroTitle,
    heroTitleHighlight,
    heroSubtitle,
    heroSubtitleAfter,
    heroPrimaryCtaLabel,
    heroSecondaryCtaLabel,
    heroImageUrl,
    workflowBadgeText,
    workflowSectionTitle,
    workflowSectionSubtitle,
    workflowSteps[]{
      title,
      desc,
      iconName
    },
    draftingBadgeText,
    draftingSectionTitle,
    draftingSectionDescription,
    draftingFeatures,
    draftingButtonLabel,
    draftingImageUrl,
    magicBadgeText,
    magicSectionTitle,
    magicSectionSubtitle,
    magicInputLabel,
    magicInputTitle,
    magicInputImage,
    magicProcessTitle,
    magicProcessSubtitle,
    magicOutputLabel,
    magicOutputTitle,
    magicOutputImage,
    templatesBadgeText,
    templatesSectionTitle,
    templatesSectionSubtitle,
    templateTags,
    templatesButtonLabel,
    templatesImage1,
    templatesImage2,
    templatesBadgeTitle,
    templatesBadgeSubtitle,
    ctaSectionTitle,
    ctaSectionSubtitle,
    individualCardTitle,
    individualCardDesc,
    individualCardFeatures,
    individualCardCta,
    businessCardTitle,
    businessCardDesc,
    businessCardFeatures,
    businessCardCta,
    faqSectionTitle,
    faqs[]{
      question,
      answer
    }
  }
`;
