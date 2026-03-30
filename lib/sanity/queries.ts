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
    ogImage{
      ...,
      asset->{url, metadata{dimensions}}
    },

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
      imageUrl{
        ...,
        asset->{url, metadata{dimensions}}
      },
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
    ctaImageUrl{
      ...,
      asset->{url, metadata{dimensions}}
    },
  }
`;

export const twoDTo3DPageQuery = `
  *[_type == "twoDTo3DPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitle,
    heroDesc,
    heroCtaLabel,
    heroCtaLink,
    heroImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    heroVideoLink,
    heroGradient,
    uploadTitle,
    uploadSubtitle,
    uploadButtonLabel,
    uploadButtonLink,
    howToTitle,
    howToDesc,
    howToImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    howToCtaLabel,
    howToCtaLink,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps[]{
      title,
      desc,
      image{
        ...,
        asset->{url, metadata{dimensions}}
      }
    },
    features[]{
      title,
      desc
    },
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;

export const roomStylerPageQuery = `
  *[_type == "roomStylerPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitle,
    heroDesc,
    heroCtaLabel,
    heroCtaLink,
    heroImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    heroVideoLink,
    heroGradient,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps[]{
      title,
      desc,
      image{
        ...,
        asset->{url, metadata{dimensions}}
      }
    },
    features[]{
      title,
      desc
    },
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;

export const vastuPageQuery = `
  *[_type == "vastuPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitle,
    heroDesc,
    heroCtaLabel,
    heroCtaLink,
    heroImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    heroVideoLink,
    heroGradient,
    uploadTitle,
    uploadSubtitle,
    uploadButtonLabel,
    uploadButtonLink,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps[]{
      title,
      desc,
      image{
        ...,
        asset->{url, metadata{dimensions}}
      }
    },
    features[]{
      title,
      desc
    },
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;

export const interiorsExteriorsPageQuery = `
  *[_type == "interiorsExteriorsPage"][0] {
    seoTitle,
    seoDescription,
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroTitleAfter,
    heroDesc,
    heroPrimaryCtaLabel,
    heroSecondaryCtaLabel,
    heroImage{
      ...,
      asset->{url, metadata{dimensions}, "caption": caption, "subcaption": subcaption}
    },
    interiorTitle,
    interiorTitleHighlight,
    interiorDesc,
    interiorCards[]{
      title,
      features,
      colorClass
    },
    exteriorBadge,
    exteriorTitle,
    exteriorTitleHighlight,
    exteriorDesc,
    exteriorGrid[]{
      title,
      desc
    },
    exteriorImages[]{
      asset->{url, metadata{dimensions}}
    },
    landscapeBadge,
    landscapeTitle,
    landscapeTitleHighlight,
    landscapeDesc,
    landscapeCards[]{
      title,
      desc,
      image{
        asset->{url, metadata{dimensions}}
      }
    },
    regionalBadge,
    regionalTitle,
    regionalTitleHighlight,
    regionalDesc,
    regionalStates[]{
      state,
      climateTitle,
      climateDesc,
      cultureTitle,
      cultureDesc
    },
    cultureBadge,
    cultureTitle,
    cultureTitleHighlight,
    culturePoints[]{
      title,
      desc,
      colorTheme
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaDesc,
    faqTitle,
    faqs[]{
      question,
      answer
    }
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
    logoImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
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
    heroImageUrl{
      ...,
      asset->{url, metadata{dimensions}}
    },
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
    draftingImageUrl{
      ...,
      asset->{url, metadata{dimensions}}
    },
    magicBadgeText,
    magicSectionTitle,
    magicSectionSubtitle,
    magicInputLabel,
    magicInputTitle,
    magicInputImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    magicProcessTitle,
    magicProcessSubtitle,
    magicOutputLabel,
    magicOutputTitle,
    magicOutputImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    templatesBadgeText,
    templatesSectionTitle,
    templatesSectionSubtitle,
    templateTags,
    templatesButtonLabel,
    templatesImage1{
      ...,
      asset->{url, metadata{dimensions}}
    },
    templatesImage2{
      ...,
      asset->{url, metadata{dimensions}}
    },
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

/**
 * Fetch the Home Remodeling Page singleton document from Sanity.
 */
export const homeRemodelingPageQuery = groq`
  *[_type == "homeRemodelingPage" && (_id == "homeRemodelingPage" || _id == "singleton-homeRemodelingPage")][0]{
    seoTitle,
    seoDescription,
    seoKeywords,
    heroBadgeText,
    heroTitle,
    heroTitleHighlight,
    heroParagraph,
    caseStudyTitle,
    caseStudySubtitle,
    caseStudyIcon,
    challengeTitle,
    challengeDescription,
    solutionTitle,
    solutionDescription,
    stats[]{
      label,
      value
    },
    caseStudyImage{
      ...,
      asset->{url, metadata{dimensions}}
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaPrimaryLabel,
    ctaSecondaryLabel
  }
`;
