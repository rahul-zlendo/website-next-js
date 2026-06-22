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

/**
 * Fetch the Interior Design Page singleton document from Sanity.
 */
export const interiorDesignPageQuery = groq`
  *[_type == "interiorDesignPage" && (_id == "interiorDesignPage" || _id == "singleton-interiorDesignPage")][0]{
    seoTitle,
    seoDescription,
    seoKeywords,
    heroBadgeText,
    heroTitle,
    heroTitleHighlight,
    heroParagraph,
    // Top-Level Case Study (Matching Home Remodeling)
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
    // Optional Additional Case Studies
    additionalCaseStudies[]{
      title,
      subtitle,
      iconName,
      challengeTitle,
      challengeDescription,
      solutionTitle,
      solutionDescription,
      stats[]{
        label,
        value
      },
      image{
        ...,
        asset->{url, metadata{dimensions}}
      }
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaPrimaryLabel,
    ctaSecondaryLabel
  }
`;

/**
 * Fetch the Vastu Optimization Page singleton document from Sanity.
 */
export const vastuOptimizationPageQuery = groq`
  *[_type == "vastuOptimizationPage" && (_id == "vastuOptimizationPage" || _id == "singleton-vastuOptimizationPage")][0]{
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

/**
 * Fetch the New Home Building Page singleton document from Sanity.
 */
export const newHomeBuildingPageQuery = groq`
  *[_type == "newHomeBuildingPage" && (_id == "newHomeBuildingPage" || _id == "singleton-newHomeBuildingPage")][0]{
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

/**
 * Fetch the Commercial Spaces Page singleton document from Sanity.
 */
export const commercialSpacesPageQuery = groq`
  *[_type == "commercialSpacesPage" && (_id == "commercialSpacesPage" || _id == "singleton-commercialSpacesPage")][0]{
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

/**
 * Fetch the Builder & Promoter Page singleton document from Sanity.
 */
export const builderAndPromoterPageQuery = groq`
  *[_type == "builderAndPromoterPage" && (_id == "builderAndPromoterPage" || _id == "singleton-builderAndPromoterPage")][0]{
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
    featuresBadgeText,
    featuresTitle,
    featuresTitleHighlight,
    featuresList[]{
      text,
      iconName
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaPrimaryLabel,
    ctaSecondaryLabel
  }
`;

/**
 * Fetch the NRI & Remote Planning Page singleton document from Sanity.
 */
export const nriRemotePlanningPageQuery = groq`
  *[_type == "nriRemotePlanningPage" && (_id == "nriRemotePlanningPage" || _id == "singleton-nriRemotePlanningPage")][0]{
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

/**
 * Fetch the Developer Solutions Page singleton document from Sanity.
 */
export const developerSolutionsPageQuery = groq`
  *[_type == "developerSolutionsPage" && (_id == "developerSolutionsPage" || _id == "singleton-developerSolutionsPage")][0]{
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
    additionalCaseStudies[]{
      title,
      subtitle,
      iconName,
      challengeTitle,
      challengeDescription,
      solutionTitle,
      solutionDescription,
      stats[]{
        label,
        value
      },
      image{
        ...,
        asset->{url, metadata{dimensions}}
      }
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaPrimaryLabel,
    ctaSecondaryLabel
  }
`;

export const costEstimatorPageQuery = groq`
  *[_type == "costEstimatorPage"][0] {
    seoTitle,
    seoDescription,
    heroBadge,
    heroTitle,
    heroTitleMid,
    heroTitleHighlight,
    heroDesc,
    heroCtaLabel,
    heroSubtext,
    logicTitle,
    logicDesc,
    logicCards[]{
      title,
      desc,
      iconName
    },
    breakdownBadge,
    breakdownTitle,
    breakdownDesc,
    breakdownItems[]{
      label,
      range
    },
    compTitle,
    compDesc,
    concreteTitle,
    brickTitle,
    tiersTitle,
    tiersDesc,
    tiers[]{
      tierName,
      features
    },
    trustBadge,
    trustTitle,
    trustDesc,
    trustStats[]{
      label,
      value
    },
    trustMessages,
    ctaTitle,
    ctaDesc,
    ctaButtonLabel,
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;

export const realisticRendersPageQuery = groq`
  *[_type == "realisticRendersPage"][0] {
    seoTitle,
    seoDescription,
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroDesc,
    heroCtaLabel,
    heroSecondaryCtaLabel,
    "heroImage": heroImage.asset->url,
    photoBadge,
    photoTitle,
    photoTitleHighlight,
    photoDesc,
    "photoImage": photoImage.asset->url,
    photoFeatures[]{
      title,
      desc
    },
    cameraBadge,
    cameraTitle,
    cameraTitleHighlight,
    cameraDesc,
    cameraCards[]{
      title,
      desc,
      "image": image.asset->url
    },
    lightingBadge,
    lightingTitle,
    lightingTitleHighlight,
    lightingDesc,
    "morningImage": morningImage.asset->url,
    "dayImage": dayImage.asset->url,
    "eveningImage": eveningImage.asset->url,
    "nightImage": nightImage.asset->url,
    qualityTitle,
    qualityDesc,
    qualityTiers[]{
      title,
      resolution,
      time,
      useCase,
      iconName
    },
    audienceTitle,
    audienceRoles[]{
      role,
      desc
    },
    "audienceImages": audienceImages[].asset->url,
    ctaTitle,
    ctaDesc,
    ctaLabel,
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;

export const virtualWalkthroughPageQuery = groq`
  *[_type == "virtualWalkthroughPage"][0] {
    seoTitle,
    seoDescription,
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroDesc,
    "heroImage": heroImage.asset->url,
    heroCtaLabel,
    heroSecondaryCtaLabel,
    walkBadge,
    walkTitle,
    walkDesc,
    "walkImage": walkImage.asset->url,
    walkFeatures,
    qualityTitle,
    qualityTitleHighlight,
    qualityDesc,
    qualityCards[]{
      title,
      desc,
      iconName
    },
    "qualityComparisonImage": qualityComparisonImage.asset->url,
    toolsTitle,
    toolsDesc,
    toolCards[]{
      title,
      quote,
      desc,
      iconName
    },
    marketTitle,
    marketTitleHighlight,
    marketFeatures[]{
      title,
      desc
    },
    "marketImages": marketImages[].asset->url,
    impactTitle,
    impactDesc,
    impactCards[]{
      title,
      desc,
      highlight,
      iconName
    },
    ctaTitle,
    ctaTitleHighlight,
    ctaDesc,
    ctaPrimaryLabel,
    ctaSecondaryLabel,
    faqTitle,
    faqs[]{
      question,
      answer
    }
  }
`;





export const businessPageQuery = groq`
  *[_type == "businessPage"][0] {
 seoTitle,
 seoDescription,
 badgeText1,
 badgeText2,
    heroTitle,
    heroTitleHighlight,
    heroTitleBottom,
    heroDescPrefix1,
    heroDescHighlight1,
    heroDescPrefix2,
    heroDescHighlight2,
    heroDescPrefix3,
    heroDescHighlight3,
    heroCtaLabel,
    heroSubDesc,
 heroFeatures[]{
 title,
 desc,
 bg,
 iconColor,
 borderColor,
 textColor
 },
 checkmarks,
    platformTitle,
    platformTitleHighlight,
 platformSubtitle,
    platformVideoUrl,
    platformCtaLabel,
 industryFeatures[]{
 industryName,
 features[]{
 title,
 desc,
 mediaUrl,
 image {
 asset->{url, metadata{dimensions}}
 }
 }
 },
 roiBadge,
    roiTitle,
    roiTitleHighlight,
 roiDesc1,
 roiDesc2,
 roiStats[]{
 value,
 label
 },
 roiImage{
 asset->{url, metadata{dimensions}}
 },
 roiProjectLabel,
 roiProjectName,
    personasTitle,
    personasTitleHighlight,
 personasSubtitle,
 personas[]{
 title,
 desc,
 link
 },
    demoBadge,
       demoTitle,
    demoTitleHighlight,
    demoSubtitle
  }
`;

export const viewAllTemplatesPageQuery = groq`
  *[_type == "viewAllTemplatesPage"][0] {
    seoTitle,
    seoDescription,
    heroTitle,
    heroTitleHighlight,
    heroDesc,
    backToHomeLabel
  }
`;


export const tutorialsPageQuery = groq`
  *[_type == "tutorialsPage"][0] {
    seoTitle,
    seoDescription,
    heroTitle,
    heroTitleHighlight,
    heroDesc,
    playlistId,
    playlistTitle,
    videos[]{
      videoId,
      title,
      duration,
      views
    }
  }
`;


export const vrStudioPageQuery = groq`
  *[_type == "vrStudioPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitle,
    heroDesc,
    heroCtaLabel,
    heroCtaLink,
    heroImage,
    heroVideoLink,
    heroGradient,
    uploadTitle,
    uploadSubtitle,
    howToTitle,
    howToDesc,
    howToImage,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps[]{
      title,
      desc,
      image
    },
    features[]{
      title,
      desc
    },
    comparisonTitle,
    comparisonRows[]{
      feature,
      us,
      competitor1,
      competitor2
    },
    faqTitle,
    faqs[]{
      question,
      answer
    },
    finalCtaTitle,
    finalCtaSubtitle,
    finalCtaLabel
  }
`;

export const partnersPageQuery = groq`
  *[_type == "partnersPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitlePart1,
    heroTitlePart2,
    heroDesc,
    heroImage,
    programsTitle,
    programsSubtitle,
    affiliateTitlePart1,
    affiliateTitlePart2,
    affiliateDesc,
    affiliateSteps,
    affiliateBenefits,
    affiliateTags,
    affiliateConversionRate,
    affiliateAvgEarnings,
    partnerTitlePart1,
    partnerTitlePart2,
    partnerDesc,
    partnerFeatures,
    partnerImage,
    partnerUseCaseTitle,
    partnerUseCaseDesc,
    partnerActivePartners,
    partnerPayouts,
    whyTitle,
    whySubtitle,
    whyCards,
    growthTitle,
    growthSubtitle,
    growthPoints,
    growthQuoteTitle,
    growthQuoteDesc,
    finalCtaTitlePart1,
    finalCtaTitlePart2,
    finalCtaSubtitle
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitlePart1,
    heroTitlePart2,
    heroDescription,
    directContactTitle,
    directContactSubtitle,
    email,
    phone,
    hqTitle,
    hqAddress,
    regionalPresenceLabel,
    regionalPresenceList,
    formTitle,
    formSuccessTitle,
    formSuccessMessage,
    formSuccessButtonLabel,
    helpCenterTitle,
    helpCenterSubtitle,
    helpItems[]{
      title,
      description,
      icon,
      url
    }
  }
`;
export const apiSuitePageQuery = groq`
  *[_type == "apiSuitePage"][0] {
    seoTitle,
    seoDescription,
    heroSubtitle,
    heroTitle,
    heroDesc,
    heroCtaLabel,
    heroCtaLink,
    heroImage,
    heroVideoLink,
    heroGradient,
    uploadTitle,
    uploadSubtitle,
    howToTitle,
    howToDesc,
    howToImage,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps[]{
      title,
      desc,
      image
    },
    features[]{
      title,
      desc
    },
    comparisonTitle,
    comparisonRows[]{
      feature,
      us,
      competitor1,
      competitor2
    },
    faqTitle,
    faqs[]{
      question,
      answer
    },
    finalCtaTitle,
    finalCtaSubtitle,
    finalCtaLabel
  }
`;

// ── Blog / News (migrated from WordPress) ────────────────────────────────────

export const POSTS_PER_PAGE = 12;

/** All blog slugs — for generateStaticParams. */
export const blogPostSlugsQuery = groq`
  *[_type == "post" && section == "blog" && defined(slug.current)].slug.current
`;

/** Total blog post count — for pagination. */
export const blogPostsCountQuery = groq`
  count(*[_type == "post" && section == "blog"])
`;

/** One page of blog posts (params: $start, $end), newest first. */
export const blogPostsPageQuery = groq`
  *[_type == "post" && section == "blog"] | order(publishedAt desc) [$start...$end]{
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    "mainImage": { "asset": mainImage.asset, "alt": mainImage.alt },
    "categories": categories[]->title,
    "author": author->name
  }
`;

/** A single blog post by slug (param: $slug). */
export const blogPostBySlugQuery = groq`
  *[_type == "post" && section == "blog" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    updatedAt,
    originalUrl,
    seoTitle,
    seoDescription,
    ogTitle,
    ogDescription,
    "mainImage": { "asset": mainImage.asset, "alt": mainImage.alt },
    "categories": categories[]->{ title, "slug": slug.current },
    "author": author->{ name, role, bio, "image": image.asset->url, sameAs },
    "reviewedBy": reviewedBy->{ name, role },
    body
  }
`;

